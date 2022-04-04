// -----------------------------------------------------------------------------
// 
// This file is the copyrighted property of Tableau Software and is protected 
// by registered patents and other applicable U.S. and international laws and 
// regulations.
// 
// Unlicensed use of the contents of this file is prohibited. Please refer to 
// the NOTICES.txt file for further details.
// 
// -----------------------------------------------------------------------------
(function($) {
  // *************************************************************
  // Alerts
  //
  // Point of entry to client-side Alerts feature.
  // Hosts Alerts.Model, Alerts.Controller, Alerts.Notifier,
  // Alerts.Menu. Simple approximation of MVC pattern followed.
  // Alerts.Notifier is the button in the masthead that displays the
  // alert count and Alerts.Menu is the UI for displaying alerts after
  // clicking that button.
  // Currently exists in the masthead of every page. Static Alerts
  // can be created to display Alerts in the page itself.
  // *************************************************************

  Alerts = function (settings) {
    this._settings = settings;

    // enforce a contract for the settings we expect to receive. Don't check
    // for isDebug, it could be undefined in release mode.
    if (this._settings &&
      this._settings.hasOwnProperty('alertsEndpointUrl') &&
      this._settings.hasOwnProperty('dismissEndpointUrl') &&
      this._settings.hasOwnProperty('retryEndpointUrl') &&
      this._settings.hasOwnProperty('datasourceParameterizedUrl') &&
      this._settings.hasOwnProperty('localizedNotifierLabel') &&
      this._settings.hasOwnProperty('localizedAlertItemStrings') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('messageZeroWorkbooksFail') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('messageOneWorkbookFail') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('messageFewWorkbooksFail') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('messageManyWorkbooksFail') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('labelDataSource') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('labelFailed') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('labelSucceeded') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('labelErrorMessage') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('labelEmbeddedDatasource') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('labelNeverRefreshed') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('actionTryAgain') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('actionEditConnection') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('actionDismiss') &&
      this._settings.hasOwnProperty('localizedFailureStrings') &&
      this._settings.localizedFailureStrings.hasOwnProperty('1000') && // unknown error
      this._settings.localizedFailureStrings.hasOwnProperty('2000') && // bad username or password
      this._settings.localizedFailureStrings.hasOwnProperty('2100') && // expired password (Salesforce)
      this._settings.localizedFailureStrings.hasOwnProperty('2200') && // access token (Google)
      this._settings.localizedFailureStrings.hasOwnProperty('3000') && // general connection (network) failure
      this._settings.localizedFailureStrings.hasOwnProperty('4000') && // overlapping schedules failure
      this._settings.localizedFailureStrings.hasOwnProperty('5000') && // salesforce invalid replication date
      this._settings.localizedFailureStrings.hasOwnProperty('10000') && // connectionless workbook failure (Google)
      this._settings.hasOwnProperty('authenticity_token') &&
      this._settings.hasOwnProperty('minPollingInterval') &&
      this._settings.hasOwnProperty('maxPollingInterval')) {

      this._model = new Model({
        'debugCallback' : $.proxy(this.throwDebugMessage, this)
      });

      this._controller = this.makeController(ControllerModeEnum.DynamicNotStarted, this._model)

      this._notifier = new Notifier({
        'localizedNotifierLabel' : this._settings.localizedNotifierLabel,
        'debugCallback' : $.proxy(this.throwDebugMessage, this)
      }, this._model, this._controller);

      this._menu = this.makeMenu(this._model, this._controller);

      this._controller.setModel(this._model);
      this._controller.setNotifier(this._notifier);
      this._controller.setMenu(this._menu);

    } else {
        // If we're debugging throw an exception to make it easier to identify a problem with
        // the parameters being sent to Alerts.
        this.throwDebugMessage('Tableau.Alerts did not receive the required parameters and settings.');
    }
  };

  // Pass in a dom element for the notifier label. Note this is not
  // the dom element for the entire button, that is owned by Masthead.
  Alerts.prototype.setDom = function(dom) {
    if (this._notifier && this._menu) {
      this._notifier.setRootDom(dom);
    } // else do nothing, basic setup of Alerts failed.
  };

  // Click the notifier button to show the Alerts menu
  Alerts.prototype.showAlertMenu = function(showingCallback, hidingCallback) {
    if (this._controller) {
      this._controller.showMenu(showingCallback, hidingCallback);
    } // else do nothing, basic setup of Alerts failed.
  };

  // Everything is ready, kick off Alerts. Call this _after_ creating an Alerts
  // object AND specifying the Notifier DOM element via setDom.
  Alerts.prototype.start = function() {
    if (this._controller) {
      this._controller.start();
    } // else do nothing, basic setup of Alerts failed.
  };

  Alerts.prototype.throwDebugMessage = function(message) {
    if (this._settings && this._settings.isDebug === true) {
      // Throw an error with messageat runtime IF we're in debug mode
      throw new Error(message);
    } // else fail silently
  };

  // Entry point for Static Alerts.
  // Currently called from the data sources page to show an alert for a given DS.
  Alerts.prototype.createStaticAlerts = function($alertAnchor, alertData) {
    var model = new Model({
      'debugCallback' : $.proxy(this.throwDebugMessage, this)
    });
    model.setServerData({ alerts: [alertData] })

    var controller = this.makeController(ControllerModeEnum.Static, model);
    controller.setStaticDom($alertAnchor);

    var menu = this.makeMenu(model, controller);
    controller.setMenu(menu);

    $alertAnchor
      .append($("<span>").addClass("tab-alerts-icon tab-alerts-datasource-actionable"))
      .append($("<span>").addClass("tab-alerts-ds-msg").text(this._settings.localizedFailureStrings[alertData.statusCode]))
      .css("visibility", "visible")
      .on("click", function(e) { menu.show(MenuModeEnum.SoftLoading, $alertAnchor); });
  };

  Alerts.prototype.makeController = function(mode, model) {
    return new Controller({
      'alertsEndpointUrl' : this._settings.alertsEndpointUrl,
      'dismissEndpointUrl' : this._settings.dismissEndpointUrl,
      'retryEndpointUrl' : this._settings.retryEndpointUrl,
      'datasourceParameterizedUrl' : this._settings.datasourceParameterizedUrl,
      'authenticity_token' : this._settings.authenticity_token,
      'minPollingInterval' : this._settings.minPollingInterval,
      'maxPollingInterval' : this._settings.maxPollingInterval
    }, mode, model);
  }

  Alerts.prototype.makeMenu = function(model, controller) {
    var menu = new Menu({
        'retryCallback' : $.proxy(controller.onAlertItemRetry, controller),
        'editCallback' : $.proxy(controller.onAlertItemEdit, controller),
        'dismissCallback' : $.proxy(controller.onAlertItemDismiss, controller),
        'datasourceCallback' : $.proxy(controller.onDatasourceNavigate, controller),
        'localizedAlertItemStrings' : this._settings.localizedAlertItemStrings,
        'localizedFailureStrings' : this._settings.localizedFailureStrings,
        'debugCallback' : $.proxy(this.throwDebugMessage, this)
      }, model, controller);
    return menu;
  };

  // *************************************************************
  // Alerts.Model
  //
  // Stores state. Consumed by all components, only updated by the
  // Controller.
  // *************************************************************

  var Model = function(settings) {
    this._settings = settings;
    this._serverData = { "alerts": [] }; // list of alerts and any other data
    this._alertsById = {}; // relate array indexes to alert id's
    this._lastUpdated = null; //datetime of last server refresh
    this._isServerDataValid = false;
    this._dataChangedOnLastUpdate = true;
  };

  // Get the count of alerts
  Model.prototype.getAlertsCount = function() {
    return this._serverData.alerts.length;
  };

  // Alert getter by 0-base index
  Model.prototype.getAlertByIndex = function(index) {
    return this._serverData.alerts[index];
  };

  // Alert getter by ID
  Model.prototype.getAlertById = function(id) {
    return this.getAlertByIndex(this._alertsById[id]);
  };

  // Get the last datetime the model was updated. Careful, this could be null.
  Model.prototype.getLastUpdated = function() {
    return this._lastUpdated;
  };

  Model.prototype.setServerData = function(newData) {
    // Enforce a contract for the data we expect to receive
    if (this.serverDataIsValid(newData)) {
      this._serverData = newData;
      this._lastUpdated = new Date();
      this.buildAlertsIdIndex();
    } else {
      this._dataChangedOnLastUpdate = true;
      this._serverData = { "alerts": [] };
      this._alertsById = {};
      this._lastUpdated = null;
      this._settings.debugCallback('Tableau.Alerts.Model validation of data failed.');
    }
  };

  // Remove an alert item by id from the local model.
  Model.prototype.removeAlertItem = function(id) {
    // Remove that item
    this._serverData.alerts.splice(this._alertsById[id], 1);

    // Part of the array just shifted by one due to removal, rebuild id index
    this.buildAlertsIdIndex();
  };

  Model.prototype.buildAlertsIdIndex = function () {
    // reset
    this._alertsById = {};

    // use object literal to build a "hash" of AlertItem id's corresponding to their
    // position in the array. This allows us to lookup an alert by array position
    // or id.
    for (var i = 0; i < this._serverData.alerts.length; i++) {
      this._alertsById[this._serverData.alerts[i].id] = i;
    }
  };

  // Validate the data we received. If there are zero alerts we can't
  // validate the alert properties and sub-properties received.
  // This is _basic_ validation to help with development/debugging and
  // enforcing a contract between server and the browser.
  Model.prototype.serverDataIsValid = function(data) {
    if (this._isServerDataValid) {
      return true;
    } else if (data.hasOwnProperty('alerts') &&
        data.alerts.length === 0) {
      return true;
    } else {
      // Only verify the full payload once.
      this._isServerDataValid =
      data.hasOwnProperty('alerts') &&
      data.alerts.length > 0 &&
      data.alerts[0].hasOwnProperty('id') && // never null, always unique
      data.alerts[0].hasOwnProperty('statusCode') &&
      data.alerts[0].hasOwnProperty('isActionable') &&
      data.alerts[0].hasOwnProperty('isEditable') &&
      data.alerts[0].hasOwnProperty('taskId') && // could be null
      data.alerts[0].hasOwnProperty('connection') &&
      data.alerts[0].hasOwnProperty('failureTimestamp') &&
      data.alerts[0].hasOwnProperty('successTimestamp') && // could be null
      data.alerts[0].hasOwnProperty('datasourceName') && // could be null
      data.alerts[0].hasOwnProperty('impactedWorkbookCount') && // could be 0
      data.alerts[0].hasOwnProperty('impactedWorkbooks');// a shared data source could have no workbooks

      return this._isServerDataValid;
    }
  };

  // *************************************************************
  // Alerts.Controller
  //
  // Implements business logic, communicates with the server, handles
  // communication/coordination between the Alerts components.
  // *************************************************************

  //Constructor
  var Controller = function(settings, mode, model) {
    this._settings = settings;
    this._nextPollingInterval = this._settings.minPollingInterval;
    this._controllerMode = mode;
    this._model = model;

    // Maximum age in ms for data to be considered "fresh"
    this.FRESH_DATA_AGE_MS = 150000; // 2.5 minutes
  };

  Controller.prototype.setModel = function(model) {
    this._model = model;
  }

  Controller.prototype.setNotifier = function(notifier) {
    this._notifier = notifier;
  }

  // Static alerts are displayed on-page starting with this element
  Controller.prototype.setStaticDom = function($el) {
    this.$staticDom = $el;
  }

  Controller.prototype.setMenu = function(menu) {
    this._menu = menu;
    this._menu.menuShowing.add($.proxy(this.onMenuShowing, this));
    this._menu.menuHiding.add($.proxy(this.onMenuHiding, this));
    this._menu.menuHidden.add($.proxy(this.onMenuHidden, this));
  }

  // Start requesting updated data. Called externally once all our dependencies are in place.
  Controller.prototype.start = function() {
    // Should only be called on a Dynamic instance of Alerts, enforce.
    if (this._controllerMode !== ControllerModeEnum.Static) {
      this._controllerMode = ControllerModeEnum.DynamicReady;
      // Refresh our current data right now
      this.requestUpdatedData();
    }
  };

  // Click the notifier button or the data source page alert item label.
  // FYI the caller could have forgotten to set the notifier dom.
  Controller.prototype.showMenu = function(showingCallback, hidingCallback) {
    if (this._notifier) {
      if ($.isFunction(showingCallback)) {
        this._showingCallback = showingCallback;
      }

      if ($.isFunction(hidingCallback)) {
        this._hidingCallback = hidingCallback;
      }

      this.resetPollingInterval();

      this.requestUpdatedData();

      this._menu.show(this.determineMenuMode(), this._notifier.getSafeButtonDom().parent());
    } //else fail silently
  };

  // The timer used for polling has ticked.
  Controller.prototype.onPollingTick = function() {
    this.requestUpdatedData();
  };

  // The model has been refreshed, perform any necessary followup
  Controller.prototype.onUpdatedData = function() {
    // go back into ready mode now that the request is finished
    this._controllerMode = ControllerModeEnum.DynamicReady;

    // update the count of alerts in the notifier
    this._notifier.updateNotifierLabel();

    // let the menu know the underlying data has changed
    this._menu.onUpdatedItems();

    // lastly, restart the polling timer
    this.startPollingTimer();
  };

  // User is hiding the menu
  Controller.prototype.onMenuHiding = function() {
    this.resetPollingInterval();
    if (this._hidingCallback) {
      this._hidingCallback();
    }
  };

  // User has hidden the menu
  Controller.prototype.onMenuHidden = function() {
    this.updateStaticDom();
  };

  // User has shwon the menu
  Controller.prototype.onMenuShowing = function() {
    this.resetPollingInterval();
    if (this._showingCallback) {
      this._showingCallback();
    }
  };

  // User has requested that a task be retried
  Controller.prototype.onAlertItemRetry = function(alertItem) {
    // jquery promises chaining isn't behaving as expected so use a nested mess
    // that chains together the requests in the proper order

    // build up nested callbacks in reverse order
    var callback_3_finishRetryByRequestingData = $.proxy(function () {
      this.resetPollingInterval();
      this.requestUpdatedData();
    }, this); 

    var callback_2_requestServerRetryAlert = $.proxy(function(alertItem) {
      return this.requestTaskRetry(alertItem.getAlertData().taskId)
        .then(callback_3_finishRetryByRequestingData);
    }, this, alertItem);
    var callback_1_requestAlertItemDismiss = $.proxy(function(alertItem) {
      this.onAlertItemHidden(alertItem);
      return this.requestAlertItemDismiss(alertItem.getAlertData().id)
        .then(callback_2_requestServerRetryAlert);
    }, this, alertItem);

    // kick of the chain
    alertItem.hideItem()
      .then(callback_1_requestAlertItemDismiss);
  };

  // Occurs after hiding animation completes, such as from retrying or dismissing an Alert.
  Controller.prototype.onAlertItemHidden = function(alertItem) {
    // remove the alert item so that we don't immediately re-show it when
    // the menu updates, before we've received updated data
    this._model.removeAlertItem(alertItem.getAlertData().id);

    // There is no notifier when Static
    if (this._controllerMode !== ControllerModeEnum.Static) {
      // update the notifier and menu
      this._notifier.updateNotifierLabel();
    }

    this._menu.onUpdatedItems();
  };

  // User has regquested to edit a connection
  Controller.prototype.onAlertItemEdit = function(id, server, port, username) {
    this.resetPollingInterval();
    // .edit refers to startEditing in _edit_lytebox.html.erb
    Tableau.EditConnection.startEditing(id);
  };

  // User has requested to dismiss an alert item via the button. This button has not been implemented.
  Controller.prototype.onAlertItemDismiss = function() {
    this.resetPollingInterval();
    throw new Error('Dismiss not implemented.');
  };

  Controller.prototype.onDatasourceNavigate = function(workbookName) {
    return this._settings.datasourceParameterizedUrl.replace('%{workbook_name}', encodeURIComponent(workbookName));
  };

  Controller.prototype.startPollingTimer = function() {
    if (this._pollinglId) { // already in progress
      // Kill the timer. It may have just completed OR a user interaction could have resulted in new data
      // and the need to reset the timer to the polling interval.
      clearTimeout(this._pollinglId);
      this._pollinglId = null;
    }
    var newPollingInterval = this.determinePollingInterval();
    if (newPollingInterval != -1) {
      this._pollinglId = setTimeout($.proxy(this.onPollingTick, this), newPollingInterval);
    }
  };

  // Retrieve the list of Alerts from the server and store them in the Model. Can be triggered by a user
  // interaction or by a polling timer tick.
  Controller.prototype.requestUpdatedData = function() {
    // Never request data when Static
    // Don't request data if we're already requesting data
    if (this._controllerMode === ControllerModeEnum.DynamicReady) {
      this._controllerMode = ControllerModeEnum.DynamicBusy;

      $.getJSON(this._settings.alertsEndpointUrl) // get the metadata
        .then($.proxy(function(newData) {
          //persist the data
          this._model.setServerData(newData);

          //trigger any followup behavior
          this.onUpdatedData();
        }, this));
    }
  };

  // Request that a refresh task be immediately re-run. This method encapsulates
  // the jquery post call.
  Controller.prototype.requestTaskRetry = function(taskId) {
    var params = { 'authenticity_token' : this._settings.authenticity_token, 'id' : taskId };

    // If retrying the refresh fails a new alert will be created.
    return $.post(this._settings.retryEndpointUrl, params);
  };

  Controller.prototype.requestAlertItemDismiss = function(alertId) {
    var params = { 'authenticity_token' : this._settings.authenticity_token, 'id' : alertId };

    // dismissal is only persisted in session state. Because session state isn't thread-safe be
    // careful to not make requeests too quickly to mitigate (not solve) overwriting it
    return $.post(this._settings.dismissEndpointUrl, params);
  };

  // Determine how to show the alert menu, a "soft" or "hard" load
  Controller.prototype.determineMenuMode = function() {
    if (this.isDataFresh()) {
      // show the menu as loading but with any existing contents because
      // the data was recently refreshed and probably hasn't changed
      return MenuModeEnum.SoftLoading;
    } else {
      // show the menu as loading and empty because the data wasn't
      // recently refreshed and probably is out of date
      return MenuModeEnum.HardLoading;
    }
  };

  // Determine if the model data is "fresh", ie updated recently
  Controller.prototype.isDataFresh = function() {
    return this._model.getLastUpdated() &&
      (new Date() - this._model.getLastUpdated()) < this.FRESH_DATA_AGE_MS;
  };

  Controller.prototype.resetPollingInterval = function() {
    this._nextPollingInterval = this._settings.minPollingInterval;
  };

  // Exponential back-off algorithm that restarts when the data changes, returns -1 to cancel polling
  Controller.prototype.determinePollingInterval = function() {
    if (this._nextPollingInterval > this._settings.maxPollingInterval) {
      // stop polling
      return -1;
    }
    var toReturn = this._nextPollingInterval;
    this._nextPollingInterval = this._nextPollingInterval * 2;
    return toReturn;
  };

  Controller.prototype.updateStaticDom = function() {
    if (this._controllerMode === ControllerModeEnum.Static &&
      this._model.getAlertsCount() === 0) {
      this.hideStaticDom();
    }
  };

  Controller.prototype.hideStaticDom = function() {
    if (this._controllerMode === ControllerModeEnum.Static && this.$staticDom) {
      this.$staticDom.hide();
    }
  };

  // *************************************************************
  // Alerts.ControllerModeEnum
  //
  // The different modes of the Alerts.Controller as an enum-style object
  // literal.
  // Dynamic modes refer to a self-updated Alerts instance.
  // Static mode doesn't request new data from server and is currently
  // used inline on Data Sources page.
  // *************************************************************

  var ControllerModeEnum = {
    // default state, server request not in progress
    DynamicReady: {value: 0, name: "DynamicReady"},
    // busy state when a server requeste has been initiated & not completed
    DynamicBusy: {value: 1, name: "DynamicBusy"},
    // waiting state when Alerts have been instantiated but not fully initialized, Alerts.start() hasn't been called
    DynamicNotStarted: {value: 2, name: "DynamicNotStarted"},
    // special state for Alerts that don't request data from server, used to display custom Alert data
    Static: {value: 3, name: "Static"}
  };


  // *************************************************************
  // Alerts.Notifier
  //
  // UI widget that acts as a button to display Alerts.Menu and that
  // includes a count of current alerts. Consumes Alerts.Model and
  // Alerts.Controller, unaware of other UI widgets.
  // *************************************************************

  //Constructor
  var Notifier = function(settings, model, controller) {
    this._settings = settings;
    this._model = model;
    this._controller = controller;

    this.FADE_IN_TIME_MS = 400;
    this.FADE_OUT_TIME_MS = 200;
  };

  Notifier.prototype.getRootDom = function() {
    if (this.$el) {
      return this.$el;
    } else {
      // If we're debugging throw an exception when a caller instantiated Alerts
      // but forgot to give us a dom element.
      this._settings.debugCallback('Tableau.Alerts.Notifier has a null root dom element.');
      // return an empty jquery object so the other get methods don't explode.
      return $();
    }
  };

  // Set the root dom that this is implement in relation to, a span containing the icon
  // and label of a button in the masthead. This can be used before the dom is attached.
  Notifier.prototype.setRootDom = function(dom) {
    this.$el = dom;

    this.$el.find('.tab-alerts-icon').addClass('tab-alerts-notifier-warning');
  };

  // This can be used before the dom is attached.
  Notifier.prototype.getLabelTextDom = function() {
    return this.getRootDom().find('.tab-alerts-notifier-label-text');
  };

  // This can be used before the dom is attached but is the highest level element
  // available.
  Notifier.prototype.getSafeButtonDom = function() {
    return this.getRootDom().parents('.tab-masthead-toolbar-alerts-button-child');
  };

  // This CANNOT be used before the dom is attached, it returns the actual top level dom element
  // for a masthead toolbar button, which isn't available until late in the masthead initialization
  // process.
  Notifier.prototype.getUnsafeButtonDom = function() {
    return this.getRootDom().parents('.tab-masthead-toolbar-button');
  };

  Notifier.prototype.hideButton = function(duration) {
    this.getUnsafeButtonDom().fadeOut(duration);
  };

  Notifier.prototype.showButton = function(duration) {
    // During setup we set display: none on the safe button dom, because the unsafe dom
    // wasn't available yet. Make sure to change this back so that when we show the unsafe
    // dom it has something visible in it.
    this.getSafeButtonDom().show();
    this.getUnsafeButtonDom().show(duration);
  };

  Notifier.prototype.updateNotifierLabel = function() {
    // match the first instance of one or more digits and replace with the alert count
    // hide the entire button when there are zero alerts

    if (this._model.getAlertsCount() > 0) {
      this.getLabelTextDom().text(
        this._settings.localizedNotifierLabel.replace(/\d+/, this._model.getAlertsCount())
      );
      this.showButton(this.FADE_IN_TIME_MS); // show the button in case it's not already visible
    } else {
      this.hideButton(this.FADE_OUT_TIME_MS); // hide the alerts notifier button when there aren't any alerts
    }
  };


  // *************************************************************
  // Alerts.Menu
  //
  // UI widget that displays the list of alerts and allows action
  // to be performed against them. Consumes Alerts.Model and
  // Alerts.Controller, uses Alerts.AlertItem and Alerts.ItemList.
  // *************************************************************

  var Menu = function(settings, model, controller) {
    this._settings = settings;
    this._model = model;
    this._controller = controller;
    this._popup = null; // Keep a reference so we can call its .hide() method
    this._itemList = null;
    this._mode = MenuModeEnum.Hidden; // Is the menu currently being shown? Default is hidden.
    this._shown = false;

    this.menuShowing = $.Callbacks();
    this.menuHiding = $.Callbacks();
    this.menuHidden = $.Callbacks();

    this.$menuContainer = null; //insert contents at #tab-alerts-menu-container-body
    this.$scrollableArea = null; //insert contents at #tab-alerts-menu-scrollable-area-body
    this.$itemList = null; //only insert items using this._itemList.insert

    //constants
    this.MENU_WIDTH = 400;
    this.FADE_IN_TIME_MS = 400;
    this.FADE_OUT_TIME_MS = 200;
  };

  // The model was updated and the Controller wants the Menu to know it. This is ignored
  // when Hidden (don't waste cpu building DOM that may not be shown) Note that until
  // this method is called the Alert Menu will have a loading spinner.
  Menu.prototype.onUpdatedItems = function() {
    if (this._model.getAlertsCount() === 0 && this._mode !== MenuModeEnum.Hidden) {
      this.hideMenu(this.FADE_OUT_TIME_MS);
    } else if (this._mode !== MenuModeEnum.Hidden) {
      this.showMenu(this.FADE_IN_TIME_MS); // make sure we're visible
      this._mode = MenuModeEnum.Visible;
      this.fillItemList();
      this.hideMenuSpinner();
    } // no else, we're already css visible and soft/hard loading or mode visible.
  };

  // The controller doesn't track whether the menu is hidden/loading/visible/etc.
  Menu.prototype.show = function(requestedMode, $anchor) {
    if (this._mode === MenuModeEnum.Hidden) {
      this.showSetup();

      // A soft load can only be performed if we've previously loaded the item list
      if (requestedMode === MenuModeEnum.SoftLoading && this._itemList) {
        this._mode = MenuModeEnum.SoftLoading;

        this.fillItemList();
        this.showMenuContainer(this.$menuContainer, $anchor);

        // VerticalScrollPane as implemented doesn't support dynamic contents very well, it relies on .height()
        // which returns 0 for unattached DOM. Now that we've attached our DOM trigger the VerticalScrollPane
        // to update and draw a scroll bar if necessary.
        // todo-dloika: Fix this. BUGZID: 78034.
        $(this.$itemList).trigger('domChanged');
      }
      // A soft load was requested but the item list hasn't been previously loaded
      // or a hard load was requested; perform a hard load
      else if (requestedMode === MenuModeEnum.SoftLoading ||
        requestedMode === MenuModeEnum.HardLoading) {

        this._mode = MenuModeEnum.HardLoading;
        this.showMenuSpinner();
        this._itemList.reset();
        this.showMenuContainer(this.$menuContainer, $anchor);
      } else {
        this._settings.debugCallback('Alerts.Menu.show was called with a null or unsupported mode.');
      }
    } else {
      this._settings.debugCallback('Alerts.Menu was shown with menu NOT hidden, this should be impossible.');
    }
  };

  Menu.prototype.showSetup = function() {
    this._shown = false; // todo-dloika: scrolling event handlers are getting wiped out after the first show,
    // fix that and re-enable reuse of non itemList dom. BUGZID: 78034.

    if (!this._shown) {
      this._shown = true;

      this.$menuContainer = this.makeMenuContainer();
      this.$scrollableArea = this.makeScrollableArea();

      this._itemList = this.makeItemList();
      this.$itemList = this._itemList.$el;

      $(this.$scrollableArea).find('#tab-alerts-menu-scrollable-area-body').append(this.$itemList);
      $(this.$menuContainer).find('#tab-alerts-menu-container-body').append(this.$scrollableArea);
    }
  };

Menu.prototype.fillItemList = function() {
    // dloika-todo: build up the dom and THEN attach, don't build dom that's attached. BUGZID: 78034.
    this._itemList.reset();
    for (var i = 0; i < this._model.getAlertsCount(); i++) {
      var settings = {
        'alertItem' : this._model.getAlertByIndex(i),
        'localizedStrings' : this._settings.localizedAlertItemStrings,
        'localizedFailureStrings' : this._settings.localizedFailureStrings,
        'hideMargin' : i === 0,
        'retryCallback' : this._settings.retryCallback,
        'editCallback' : this._settings.editCallback,
        'dismissCallback' : this._settings.dismissCallback,
        'datasourceCallback' : this._settings.datasourceCallback,
        'debugCallback' : this._settings.debugCallback
      };

      this._itemList.push(new AlertItem(settings).$el);
    }

    // Trigger the VerticalScrollPane to update and draw a scroll bar if necessary
    $(this.$itemList).trigger('domChanged');
  };

  Menu.prototype.showMenuContainer = function(menuContainer, $anchor) {
    // Save the reference so we can call .hide() later
    this._popup = new Tableau.Popup(menuContainer);

    // Place this div over the alerts menu container border where it
    // intersects with the alerts notifier button so that there isn't a
    // seam between them.
    this._popup.popup.append($('<div>')
      .addClass('tab-alerts-menu-popup')
      .css({
        'width': (this.MENU_WIDTH + 'px')
      }));

    this._popup.popup
      .on("keydown", function(e) { // bind to the dom even "keydown"
        if (e.keyCode === 27) { // esc
          popup.hide(); // This isn't jQuery.hide(), it's popup.hide()
        }
      })
      .on('hidden', $.proxy(function() { // bind to the popup event "hidden"
        this.onMenuHiding();
        $(window).off('.popup'); // remove event handlers from the popup
      }, this));

    // Positioning the popup in the top left before making it visible
    // prevents scrollbars from appearing and messing up the positioning.
    this._popup.show({
      'visibility': 'hidden',
      'top': 0,
      'left': 0
    });

    var positionMenu = $.proxy(function() {
      var offset = $anchor.offset();
      var left = offset.left + $anchor.outerWidth(true);
      var top = offset.top + $anchor.outerHeight(true);

      this._popup.popup.css({
        'left': (left - menuContainer.outerWidth(true)) + 'px',
        'top': top + 'px'
      });
    }, this);

    positionMenu();
    this.onMenuShowing();
    this._popup.popup.css('visibility', 'visible');
    positionMenu(); // Calling this a second time after making the popup visible fixes an IE bug.
    $(window).on('resize.popup', positionMenu);
  };

  Menu.prototype.showMenu = function (duration) {
    this.onMenuShowing();
    this.$menuContainer.show(duration);
  };

  Menu.prototype.hideMenu = function (duration) {
    this.onMenuHiding();
    this.$menuContainer.fadeOut(duration, $.proxy(function () {
      // Once our fadeOut animation is complete call the popups .hide method, hiding the entire menu
      // _including_ the glass pane.
      this._popup.hide();
      this.onMenuHidden();
    }, this));
  };

  Menu.prototype.onMenuShowing = function() {
    this.menuShowing.fire();
  }

  Menu.prototype.onMenuHiding = function() {
    this.menuHiding.fire();
    this._mode = MenuModeEnum.Hidden
  };

  Menu.prototype.onMenuHidden = function() {
    this.menuHidden.fire();
  };

  Menu.prototype.showMenuSpinner = function() {
    $(this.$menuContainer).find('.tab-alerts-menu-container-header').show();
  };

  Menu.prototype.hideMenuSpinner = function() {
    $(this.$menuContainer).find('.tab-alerts-menu-container-header').fadeOut();
  };

  Menu.prototype.makeMenuContainer = function() {
    var $dom = $('<div>')
      .addClass('tab-alerts-menu-container tabUserSelectNone')
      .attr('unselectable', 'on')
      .css({
        'width': (this.MENU_WIDTH + 'px')
      })
      .append(this.makeMenuContainerHeader())
      .append(this.makeMenuContainerBody())
      .append(this.makeMenuContainerFooter());

      // If there are more than 5 alerts there will be a scroll bar, make room for it
      if (this._model.getAlertsCount() > 5) {
        $dom.css({
          'padding-right': '3px'
        });
      }

      return $dom;
  };

  Menu.prototype.makeMenuContainerHeader = function() {
    // Hide the spinner by default
    return ($('<div>')
      .addClass('tab-alerts-menu-container-header')
      .attr('unselectable', 'on'))
      .append(this.makeMenuBusySpinner());
  };

  Menu.prototype.makeMenuBusySpinner = function() {
    return ($('<div>')
      .addClass('tab-alerts-menu-container-header-spinner')
      .attr('id', 'tab-alerts-menu-container-header-spinner'));
  };

  Menu.prototype.makeMenuContainerFooter = function() {
    return $('<div>')
      .addClass('tab-alerts-menu-container-footer')
      .attr('unselectable', 'on');
  };

  Menu.prototype.makeMenuContainerBody = function() {
    return $('<div>')
      .addClass('tab-alerts-menu-container-body')
      .attr('unselectable', 'on')
      .attr('id', 'tab-alerts-menu-container-body');
  };

  Menu.prototype.makeScrollableArea = function() {
    $contentBody = $('<div>')
      .addClass('tab-alerts-menu-scrollable-area-body')
      .attr('unselectable', 'on')
      .attr('id', 'tab-alerts-menu-scrollable-area-body');

    var pane = new Tableau.VerticalScrollPane({
      '$content': $contentBody,
      'minContentHeight': 559, // 559 looks nice
      'maxViewportHeight': 559
    });

    return $('<div>')
      .addClass('tab-alerts-menu-scrollable-area')
      .append(pane.$el)
      .append(this.makeScrollableAreaFooter());
  };

  Menu.prototype.makeScrollableAreaFooter = function() {
    return $('<div>')
      .addClass('tab-alerts-menu-scrollable-area-footer')
      .attr('unselectable', 'on');
  };

  Menu.prototype.makeItemList = function() {
    return new ItemList({
      'cssClass': 'tab-alerts-menu-item-list',
      'height': AlertItem.height() // BUGZID: 78034.
    });
  }

  // *************************************************************
  // Alerts.MenuModeEnum
  //
  // The different modes of the Alerts.Menu as an enum-style object
  // literal.
  // *************************************************************

  var MenuModeEnum = {
    // default menu state, not visible or in use
    Hidden: {value: 0, name: "Hidden"},
    // intermediate state, visible with busy indicator, any existing data displayed
    SoftLoading: {value: 1, name: "SoftLoading"},
    // intermediate state, visible but empty with busy indicator, waiting for fresh data to display
    HardLoading: {value: 2, name: "HardLoading"},
    // final state, visible with no busy indicator, updated data (if any) displayed
    Visible: {value: 2, name: "Visible"}
  };


  // *************************************************************
  // Alerts.AlertItem
  //
  // Base implementation for a UI widget that represents an Alert
  // Item in Alerts.Menu
  //
  // COLLAPSING WHITESPACE NOTE:
  // In order to fit long names in a small space Alert Items rely heavily
  // upon truncating text by putting it in a span styled as inline-block
  // with overflow hidden. This has an interesting side effect: leading
  // and trailing whitespace in the spans is collapsed. A whitespace after
  // the closing span tag is not collapsed, hence the jquery before(' ')
  // and after(' ') sprinkled throught the code.
  // *************************************************************

  var AlertItem = function(settings) {
    if (settings) {
      this._alertItem = settings.alertItem;
      this._localizedStrings = settings.localizedStrings;
      this._localizedFailureStrings = settings.localizedFailureStrings;
      this._hideMargin = settings.hideMargin;
      this._retryCallback = settings.retryCallback;
      this._editCallback = settings.editCallback;
      this._dismissCallback = settings.dismissCallback;
      this._datasourceCallback = settings.datasourceCallback;
      this._debugCallback = settings.debugCallback;
    }

    // CONSTANTS

    // Width in pixels after which point text will be truncated with an elipsis.
    // Workbooks
    this.ONE_WB_TEXT_WIDTH = 368;
    this.FEW_WB_TEXT_WIDTH_TWO = 280;
    this.FEW_WB_TEXT_WIDTH_THREE = 170;
    this.MANY_WB_TEXT_WIDTH = 170;
    // Datasources
    this.ONE_DS_TEXT_WIDTH = 350;
    this.BODY_DS_TEXT_WIDTH = 215;

    // Number of workbook names to display before simply displaying a count.
    // ex: "A, B, C, D, E, and F" vs "A, B, C and 3 other workbooks."
    this.MAX_WORKBOOK_NAMES = 3;

    // Animation duration when hiding AlertItem
    this.FADE_OUT_TIME_MS = 200;

    this.$el = this.makeContents();
  };

  // Create a "static" method that returns the height constant
  AlertItem.height = function() {
    return 80; // BUGZID: 78034.
  };

  AlertItem.prototype.getAlertData = function() {
    return this._alertItem;
  };

  // Edit connection was clicked
  AlertItem.prototype.onEdit = function(e) {
    this._editCallback(e.data.connectionId);
  };

  // Retry was clicked
  AlertItem.prototype.onRetry = function(e) {
    // Remove the click handler
    this.$el.find('.tab-alerts-item-action-retry').off('click');
    // Style the retry link as disabled
    this.$el.find('.tab-alerts-item-action-retry').addClass('tab-disabled');

    this._retryCallback(this);
  };

  // Dismiss button was clicked
  AlertItem.prototype.onDismiss = function(e) {
    this._dismissCallback();
    // todo-dloika: wire this to something and otherwise implement. (This feature is scheduled
    // for implementation in bugzid: 77247)
  };


  // Hide the entire AlertItem. Use fadeOut rather than hide because fadeOut doesn't
  // scale the width/height causing ugly layout as it shrinks
  // Return jquery Promise so we can chain
  AlertItem.prototype.hideItem = function(callback) {
    return this.$el.fadeOut(this.FADE_OUT_TIME_MS).promise();
  };

  AlertItem.prototype.makeContents = function() {
    // make the container
    var $dom = $('<div>')
      .addClass('tab-alerts-item')
      .attr('unselectable', 'on')
      .css({
        // 'height': AlertItem.height() + 'px', // todo-dloika: Mike moved this to css, remove height() entirely if that will work. BUGZID: 78034.
        'margin-top' : this._hideMargin ? '0' : '2px' // don't add a top margin for the first item in the list
      });

    $dom.append(this.makeContentsHeader());

    // body of Alert Item text
    $dom.append($('<div>')
      .addClass('tab-alerts-item-body')
      .append(this.makeDataSourceContent())
      .append(this.makeFailureContent())
      .append(this.makeSuccessContent())
      .append(this.makeErrorMessageContent())
    );

    if ((this._alertItem.isActionable && this._alertItem.taskId != null) || this._alertItem.isEditable) {
      var $footer = $('<div>')
        .addClass('tab-alerts-footer')
        .appendTo($dom);

      if (this._alertItem.isActionable) {
        $footer.append(this.makeActionRetry());
      }
      if (this._alertItem.isEditable) {
        $footer.append(this.makeActionEditConnection());
      }
    }

    return $dom;
  };

  AlertItem.prototype.makeActionRetry = function () {
    var $dom = $('<span>')
      .addClass('tab-alerts-item-action-first')
      .append($('<a>')
        .addClass('tab-alerts-item-action tab-alerts-item-action-retry')
        .toggleClass('tab-disabled', this._alertItem.taskId === null)
        .text(this._localizedStrings.actionTryAgain));

    if (this._alertItem.taskId != null) {
      $dom.children('.tab-alerts-item-action-retry').on('click', { taskId : this._alertItem.taskId }, $.proxy(this.onRetry, this));
    } else {
      $dom.children('.tab-alerts-item-action-retry').addClass('tab-disabled');
    }

    return $dom;

  };

  AlertItem.prototype.makeActionEditConnection = function() {
    var $dom = $('<span>')
      .addClass('tab-alerts-item-action-last')
      .append($('<a>')
        .addClass('tab-alerts-item-action tab-alerts-item-action-edit')
        .text(this._localizedStrings.actionEditConnection));

    if (this._alertItem.connection.id != null) {
      $dom.children('.tab-alerts-item-action-edit').on('click', {
        connectionId : this._alertItem.connection.id
      }, $.proxy(this.onEdit, this));
    } else {
      $dom.children('.tab-alerts-item-action-edit').addClass('tab-disabled');
    }

    return $dom;
  };

  // Builds the header contents of the Alert Item
  AlertItem.prototype.makeContentsHeader = function() {
    var $dom = $('<div>')
      .addClass('tab-alerts-item-header');

    var $msg = $('<span>')
      .addClass('tab-alerts-item-header-text');

    if (this._alertItem.impactedWorkbookCount > this.MAX_WORKBOOK_NAMES) { // MANY WORKBOOKS

      // Content: messageManyWorkbooksFail = "%{multiple_workbooks} and %{workbook_count} others are out of date."

      if (this._alertItem.impactedWorkbooks.length >= this.MAX_WORKBOOK_NAMES) {
        // build and append dom representing %{multiple_workbooks}
        this.concatAndTruncateText($msg, this.MAX_WORKBOOK_NAMES, this._alertItem.impactedWorkbooks, this.MANY_WB_TEXT_WIDTH);
        // todo-dloika: non-english translation could re-order and break this string
        // manipulation. Fix it. Bugzid: 78044.
        var base = this._localizedStrings.messageManyWorkbooksFail;

        // strip out %{multiple_workbooks} (we built that above) and insert %{workbook_count}, this is used
        // as text for a span below
        var content = base.replace('%{multiple_workbooks}', '')
          .replace('%{workbook_count}', this._alertItem.impactedWorkbookCount - this.MAX_WORKBOOK_NAMES);

        $msg
          // append " and %{workbook_count} others are out of date." to "%{multiple_workbooks}"
          .append(
            $('<span>')
            .before(' ') // See COLLAPSING WHITESPACE NOTE in AlertItem comments.
            .text(content)
            .addClass('tab-alerts-item-header-static-text')

          );
      } else {
        this._debugCallback('Mismatch in impactedWorkbookCount, impactedWorkbooks.length, and MAX_WORKBOOK_NAMES');
      }
    } else if (this._alertItem.impactedWorkbookCount > 1) { // FEW WORKBOOKS

      // Content: messageFewWorkbooksFail = "%{multiple_workbooks} and %{final_workbook} are out of date."

      // Determine truncated item width
      var width = this._alertItem.impactedWorkbookCount === 2 ? this.FEW_WB_TEXT_WIDTH_TWO : this.FEW_WB_TEXT_WIDTH_THREE;

      // loop through the impacted workbooks, up to the maximum amount of workbooks, minus one
      // to account for final_workbook
      var loopCount = Math.min(this.MAX_WORKBOOK_NAMES, this._alertItem.impactedWorkbooks.length) - 1;

      // build and append dom representing %{multiple_workbooks}
      this.concatAndTruncateText($msg, loopCount, this._alertItem.impactedWorkbooks, width);

      // todo-dloika: non-english translation could re-order and break this string
      // manipulation. Fix it. Bugzid: 78044.
      var base = this._localizedStrings.messageFewWorkbooksFail;

      // String manipulation for the localized version of " and "
      var separator = base.substring('%{multiple_workbooks}'.length, base.indexOf('%{final_workbook}'));

      // String manipulation for the localized version of " are out of date."
      var ending = base.substring(base.indexOf('%{final_workbook}') + '%{final_workbook}'.length);

      $msg
        // append " and " to %{multiple_workbooks}
        .append(
          $('<span>')
          .text(separator)
          .addClass('tab-alerts-item-header-static-text')
        )
        .append(' ')
        .append(
          // append %{final_workbook} to "%{multiple_workbooks} and "
          this.makeTruncatedTextWithHover(this._alertItem.impactedWorkbooks[loopCount], width)
        )
        .append(' ')
        .append(
          // append " are out of date." to "%{multiple_workbooks} and %{final_workbook}
          $('<span>')
          .text(ending)
          .addClass('tab-alerts-item-header-static-text')
        );
    } else if (this._alertItem.impactedWorkbookCount === 1) { // ONE WORKBOOK

      // Content: messageOneWorkbookFail = "%{single_workbook} is out of date."

      // todo-dloika: non-english translation could re-order and break this string
      // manipulation. Fix it. Bugzid: 78044.
      var base = this._localizedStrings.messageOneWorkbookFail;
      var content = base.replace('%{single_workbook}', '');

      $msg
        .append(
          // build and append dom representing %{single_workbook}
          this.makeTruncatedTextWithHover(this._alertItem.impactedWorkbooks[0], this.ONE_WB_TEXT_WIDTH)
        )
        .append(' ')
        .append(
          // append " is out of date." to "%{single_workbook"
          $('<span>')
          .text(content)
          .addClass('tab-alerts-item-header-static-text')
        );
    } else { // ZERO WORKBOOKS
      // Content: messageZeroWorkbooksFail: "%{datasource} is out of date. No workbooks are affected."

      // todo-dloika: non-english translation could re-order and break this string
      // manipulation. Fix it. Bugzid: 78044.
      var base = this._localizedStrings.messageZeroWorkbooksFail;
      var content = base.replace('%{datasource}', '');

      $msg
        .append(
          // build and append dom representing %{datasource}
          (this.makeTruncatedTextWithHover(this._alertItem.datasourceName, this.ONE_DS_TEXT_WIDTH))
        )
        .append(' ')
        .append(
          // append " is out of date. No workbooks are affected." to "%{datasource}"
          $('<span>')
          .text(content)
          .addClass('tab-alerts-item-header-static-text')
        );
    }

    return $dom.append($msg);
  };

  AlertItem.prototype.makeDataSourceContent = function() {
    if (this._alertItem.datasourceName) {
      return $('<div>')
        .addClass('tab-alerts-item-detail')
        .append($('<span>')
          .addClass('tab-alerts-item-detail-label')
          .text(this._localizedStrings.labelDataSource))
        .append($('<a>')
          .addClass('tab-alerts-item-detail-value')
          .attr('href', this._datasourceCallback(this._alertItem.datasourceName))
        .append(this.makeTruncatedTextWithHover(this._alertItem.datasourceName, this.BODY_DS_TEXT_WIDTH))
        .append(' '));
    } else {
      return $('<div>')
        .addClass('tab-alerts-item-detail')
        .append($('<span>')
          .addClass('tab-alerts-item-detail-label')
          .text(this._localizedStrings.labelDataSource))
        .append($('<span>')
          .addClass('tab-alerts-item-detail-value')
          .text(this._localizedStrings.labelEmbeddedDatasource)
          );
    }
  };

  AlertItem.prototype.makeFailureContent = function() {
    var $failure = $('<div>')
      .addClass('tab-alerts-item-detail')
      .append($('<span>')
        .addClass('tab-alerts-item-detail-label')
        .text(this._localizedStrings.labelFailed));

    try {
      $failure.append($('<span>')
        .addClass('tab-alerts-item-detail-value')
        .text(this._alertItem.failureTimestamp));
    } catch (e) {
      // do nothing
    }

    return $failure;
  };

  AlertItem.prototype.makeSuccessContent = function() {
    var $success = $('<div>')
      .addClass('tab-alerts-item-detail')
      .append($('<span>')
        .addClass('tab-alerts-item-detail-label')
        .text(this._localizedStrings.labelSucceeded));

    if (this._alertItem.successTimestamp) { // last success may not have happened, could be null
      try {
        $success.append($('<span>')
          .addClass('tab-alerts-item-detail-value')
          .text(this._alertItem.successTimestamp));
      } catch (e) {
        // do nothing
      }
    } else {
      $success.append($('<span>')
        .addClass('tab-alerts-item-detail-value')
        .text(this._localizedStrings.labelNeverRefreshed));
    }

    return $success;
  };

  AlertItem.prototype.makeErrorMessageContent = function() {
    var $message = $('<div>')
      .addClass('tab-alerts-item-detail')
      .append($('<span>')
        .addClass('tab-alerts-item-detail-label')
        .text(this._localizedStrings.labelErrorMessage));

    try {
      $message.append($('<span>')
        .addClass('tab-alerts-item-detail-value')
        .text(this._localizedFailureStrings[this._alertItem.statusCode]));
    } catch (e) {
      // do nothing
    }

    return $message;
  };

  // Create an inline-block span that truncates text with an elipsis.
  AlertItem.prototype.makeTruncatedTextWithHover = function(text, length) {
    var $dom =
      $('<span>')
      .addClass('tab-alerts-item-truncated-text')
      .css({
        'max-width' : length + 'px'
      })
      .prop('title', text)
      .text(text);

    return $dom;
  };

  // Create a span that adds text to a hover and limits width to a specific number of pixels
  AlertItem.prototype.concatAndTruncateText = function($dom, loopcount, texts, width) {
    for (var i = 0; i < loopcount; i++) {
      // don't append whitespace after the span unless/until it's the last (no comma)
      // truncated text element
      var lastIteration = i === loopcount - 1;
      var $current = this.makeTruncatedTextWithHover(texts[i], width);
      $dom.append($current);
      if (!lastIteration) {
        $dom.append(
          $('<span>')
          .text(', ')
          .addClass('tab-alerts-item-header-static-text')
        );
      }

      $dom.append(' ');
    }
  };

  // *************************************************************
  // Alerts.ItemList
  //
  // A container of Items that keeps track of the number and
  // size of the items. Use with a VerticalScrollPane.
  // *************************************************************

  var ItemList = function(settings) {
    this._itemHeight = settings.height; // BUGZID: 78034.
    this._itemCount = 0;

    this.$el = $('<div>')
      .addClass(settings.cssClass)
      .attr('unselectable', 'on');

    $(this.$el).bind('itemRemoved', $.proxy(function(e) {
      e.stopPropogation();
      this._itemCount--;
      // Trigger the VerticalScrollPane to update and draw a scroll bar if necessary
      $(this.$itemList).trigger('domChanged');
    }, this));
  };

  ItemList.prototype.height = function() {
    // BUGZID: 78034.
    return this._itemCount * this._itemHeight;
  };

  ItemList.prototype.push = function(item) {
    this._itemCount++;
    this.$el.append(item);
    return this._itemCount++;
  };

  ItemList.prototype.reset = function() {
    this._itemCount = 0;

    // remove all the items in the list
    $(this.$el).html('');
  };


  this.Tableau || (this.Tableau = {});
  this.Tableau.Alerts = Alerts;

}).call(this, jQuery);
