//temporary additions to improve JSHint output.
//remove when this goes into less active development.
//DO NOT SUBMIT: It breaks IE8.
// 'use strict'; //todo remove this
// var console = console || {}; //todo remove this
// var jQuery = jQuery || {}; //todo remove this
// var tab = tab || {}; //todo remove this

(function($) { 'use strict';
  var log;
  if (typeof console === 'object' && console && console.log) {
    log = function() {
      try {
        console.log.apply(console, arguments);
      } catch (e) {
        //eat any exceptions
      }
    };
  } else {
    log = function() {};
  }

  //
  // Data Sync Data Source External API
  //
  // Used on Data Source details pages to implement Data Sync behavior and UI.
  var DataSyncDataSource = function (settings) {
    log('DataSyncDataSource initialized with settings: %o', settings);
    this.settings = settings; //general getting started information
    this.$el = $('<div>');
  };

  DataSyncDataSource.prototype = {
    start: function (id, refreshProperties) {
      log('DataSyncDataSource started with id/refreshProperties: %s %o',
        id, refreshProperties);

      var vm = new DataSyncDataSourceViewModel(this.settings, id, refreshProperties);
      var view = new DataSyncDataSourceView(vm, this.$el);
    }
  };

  //
  // Data Source ViewModel
  //
  var DataSyncDataSourceViewModel = function(settings, id, refreshProperties) {
    this.settings = settings;
    this.id = id;
    this.refreshProperties = refreshProperties;
    this._addIndexValueToSchedules(this.refreshProperties);

    this.refreshPropertiesUrl = settings.datasourceRefreshPropertiesUrl.replace('__id__', id);

    this.refreshModeChanged = $.Callbacks();
    this.remoteAgentChanged = $.Callbacks();
    this.remoteSchedulesChanged = $.Callbacks();
  };

  var RefreshModeEnum = {
    manual: 'MANUAL',
    server: 'SERVER',
    remote: 'REMOTE'
  };

  var ExtractRefreshTypeEnum = {
    full: 'FULL',
    incremental: 'INCREMENTAL'
  };

  DataSyncDataSourceViewModel.prototype = {
    setRefreshMode: function(mode) {
      var that = this;
      log('Considering setting refresh mode.');

      // refresh properties must be editable
      if (!this.getRefreshPropertiesAreEditable()) {
        return;
      }

      // an agent must be specified when setting refresh mode to remote
      // ignore if the mode hasn't changed
      if ((mode === RefreshModeEnum.remote && !this.refreshProperties.availableAgents.length) ||
        this.refreshProperties.refreshMode === mode) {
        return;
      }

      log('Setting refresh mode to %s', mode);

      var properties = $.extend(true, {}, this.refreshProperties);
      properties.refreshMode = mode;

      // chose an agent if necessary
      if (mode === RefreshModeEnum.remote && !this.refreshProperties.agentName) {
        properties.agentName = this.refreshProperties.availableAgents[0].name;
      }

      this._requestSetRefreshProperties(properties, function() {
        that.refreshModeChanged.fire();
        that.remoteAgentChanged.fire();
      });
    },
    setRemoteAgent: function(agentName) {
      var that = this;
      log('Considering setting remote agent.');

      if (this.refreshProperties.agentName === agentName) {
        return;
      }

      log('Setting remote agent to: %s', agentName);

      var properties = $.extend(true, {}, this.refreshProperties);
      properties.agentName = agentName;

      this._requestSetRefreshProperties(properties, function() {
        that.remoteAgentChanged.fire();
      });
    },
    getRefreshMode: function() {
      return this.refreshProperties.refreshMode;
    },
    getRemoteAgentName: function() {
      return this.refreshProperties.agentName;
    },
    getAvailableRemoteAgents: function() {
      var that = this;
      var found = false;

      if (this.refreshProperties.agentName) {
        $.each(this.refreshProperties.availableAgents, function(i, a) {
          if (that.refreshProperties.agentName === a.name) {
            found = true;
            return false;
          }
        });

        if (found) { return this.refreshProperties.availableAgents; }

        var merged = [ { name: this.refreshProperties.agentName } ];
        $.merge(merged, this.refreshProperties.availableAgents);
        return merged;
      }

      return this.refreshProperties.availableAgents;

    },
    getRefreshPropertiesAreEditable: function() {
      return this.settings.isEditable;
    },
    getServerSchedules: function() {
      return this.refreshProperties.serverSchedules;
    },
    getRemoteSchedules: function(refreshType) {
      if (refreshType === null) {
        return this.refreshProperties.remoteSchedules;
      }

      var found = [];
      for (var i = 0; i < this.refreshProperties.remoteSchedules.length; i++) {
        if (this.refreshProperties.remoteSchedules[i].refreshType === refreshType) {
          found.push(this.refreshProperties.remoteSchedules[i]);
        }
      }

      return found;
    },
    addRemoteSchedule: function(definition, refreshType) {
      var that = this;

      log('Adding remote schedule definition/type: %s %s', definition, refreshType);

      var properties = $.extend(true, {}, this.refreshProperties);

      properties.remoteSchedules.push({
        definition: definition,
        refreshType: refreshType,
        value: properties.remoteSchedules.length
      });

      this._requestSetRefreshProperties(properties, function() {
        that.remoteSchedulesChanged.fire();
      });
    },
    deleteRemoteSchedule: function(value) {
      var that = this;

      log('Deleting remote schedule with index %i and definition %s', value,
        this.refreshProperties.remoteSchedules[value].definition);

      var properties = $.extend(true, {}, this.refreshProperties);
      properties.remoteSchedules.splice(value, 1);

      this._addIndexValuePropertyToObjects(properties.remoteSchedules);

      this._requestSetRefreshProperties(properties, function() {
        that.remoteSchedulesChanged.fire();
      });
    },
    _requestGetRefreshProperties: function() {
      log('GETting refresh properties...');
      var that = this;
      $.getJSON(this.refreshPropertiesUrl)
      .fail(function(xhr, status, thrown) {
        log('GET FAILED FAILED FAILED with xhr/status/thrown %o %o %o', xhr, status, thrown);
      })
      .done(function(data, status, xhr) {
        log('GET succeeded with data/status/xhr: %o %o %o', data, status, xhr);
        that._addIndexValueToSchedules(data);
        that.refreshProperties = data;
        that.refreshModeChanged.fire();
        that.remoteAgentChanged.fire();
        that.remoteSchedulesChanged.fire();
      });
    },
    _requestSetRefreshProperties: function(properties, fireOnChangedCallbacks) {
      log('POSTing refresh properties...');
      var that = this;

      var originalProperties = this.refreshProperties;
      this.refreshProperties = properties;
      fireOnChangedCallbacks();

      var removePrivateFields = function(key, value) {
        if (key === 'value') {
            return undefined;
        }
        else {
          return value;
        }
      };

      log('Refresh properties (pretty) getting posted: %s', JSON.stringify(this.refreshProperties, removePrivateFields, '  '));

      $.post(
        this.refreshPropertiesUrl,
        {
          authenticity_token: this.settings.authenticity_token,
          refreshProperties: JSON.stringify(this.refreshProperties, removePrivateFields)
        },
        null,
        'json'
      )
      .fail(function(xhr, status, thrown) {
        log('POST FAILED FAILED FAILED with xhr/status/thrown %o %o %o', xhr, status, thrown);
        that.refreshProperties = originalProperties;
        fireOnChangedCallbacks();
      })
      .done(function(data, status, xhr) {
        if (data.success) {
          log('POST succeeded with data/status/xhr: %o %o %o', data, status, xhr);
        } else {
          log('POST succeeded but server FAILED FAILED FAILED with data/status/xhr: %o %o %o', data, status, xhr);
          $.proxy(that._requestGetRefreshProperties(), that);
        }
      });
    },
    _addIndexValueToSchedules: function(refreshProperties) {
      // add a value property that is the index in the array that will be used as an "id" when capturing
      // UI interaction events.
      this._addIndexValuePropertyToObjects(refreshProperties.serverSchedules);
      this._addIndexValuePropertyToObjects(refreshProperties.remoteSchedules);
    },
    _addIndexValuePropertyToObjects: function(objects) {
      for (var i = 0; i < objects.length; i++) {
        objects[i].value = i;
      }
    }
  };

  //
  // Data Source View
  //
  var DataSyncDataSourceView = function(vm, el) {
    this.vm = vm;
    this.$el = el;

    this.vm.refreshModeChanged.add($.proxy(this._onRefreshModeChanged, this));
    this.vm.remoteAgentChanged.add($.proxy(this._onRemoteAgentChanged, this));
    this.vm.remoteSchedulesChanged.add($.proxy(this._onRemoteSchedulesChanged, this));

    this._buildDom();
  };

  DataSyncDataSourceView.prototype = {
    _onRefreshModeChanged: function () {
      log('View handling onRefreshModeChanged');

      $('.tabDataSyncRemoteAgentRow').replaceWith(this._buildRemotePickerSelectorRow());

      this._togglePickerSelection();
      this._toggleSchedulePanelVisibility();
    },
    _onRemoteAgentChanged: function () {
      log('View handling onRemoteAgentChanged');
      $('.tabDataSyncRemoteAgentRow').replaceWith(this._buildRemotePickerSelectorRow());
    },
    _onRemoteSchedulesChanged: function() {
      log('View handling onRemoteSchedulesChanged for schedules %o', this.vm.refreshProperties.remoteSchedules);
      $('.tabDataSyncSchedulesListRemote').replaceWith(this._buildRemoteSchedules());

      this._toggleSchedulePanelVisibility();
    },
    _togglePickerSelection: function() {
      $('.tabDataSyncManualPickerItem')
          .toggleClass('tabDataSyncPickerItemSelected', this.vm.refreshProperties.refreshMode === RefreshModeEnum.manual);
      $('.tabDataSyncServerPickerItem')
          .toggleClass('tabDataSyncPickerItemSelected', this.vm.refreshProperties.refreshMode === RefreshModeEnum.server);
      $('.tabDataSyncRemotePickerItem')
          .toggleClass('tabDataSyncPickerItemSelected', this.vm.refreshProperties.refreshMode === RefreshModeEnum.remote);
    },
    _toggleSchedulePanelVisibility: function() {
      $('.tabDataSyncSchedulesListServer').toggle(this.vm.refreshProperties.refreshMode === RefreshModeEnum.server);
      $('.tabDataSyncSchedulesListRemote').toggle(this.vm.refreshProperties.refreshMode === RefreshModeEnum.remote);
    },
    _buildDom: function() {
      this.$el.append(this._buildPickerDom());
      this.$el.append(this._buildSchedulesDom());
      this.$el.append(this._buildDialogHolder());

      this._togglePickerSelection();
      this._toggleSchedulePanelVisibility();
    },
    _buildPickerDom: function() {
      return $('<div>')
        .addClass('tabDataSyncRefreshPicker tabUserSelectNone')
        .append(this._buildManualPickerItem())
        .append(this._buildServerPickerItem())
        .append(this._buildRemotePickerItem());
    },
    _buildManualPickerItem: function() {
      return this._buildPickerItem()
        .append(this._buildPickerItemRow()
          .addClass('tabDataSyncPickerItemRowPrimary tabDataSyncManualPickerItem')
          .click($.proxy(function() {
              this.vm.setRefreshMode(RefreshModeEnum.manual);
            }, this)
          )
          .append(this._buildPickerRowBlock()
            .append(
              this._buildItemGraphic()
              .addClass('tabDataSyncPickerIconManual')
            )
          )
          .append(this._buildPickerRowBlock()
            .addClass('tabDataSyncPickerRowBlockNoWrap')
            .append(this._buildRowBlockItem()
              .append($('<span>')
                .text(tab.wgappStrings.datasync_fresh_picker_label_manual)
              )
            )
          )
        );
    },
    _buildServerPickerItem: function() {
      return this._buildPickerItem()
        .append(this._buildPickerItemRow()
          .addClass('tabDataSyncPickerItemRowPrimary tabDataSyncServerPickerItem')
          .click($.proxy(function() {
              this.vm.setRefreshMode(RefreshModeEnum.server);
            }, this)
          )
          .append(this._buildPickerRowBlock()
            .append(
              this._buildItemGraphic()
              .addClass('tabDataSyncPickerIconServer')
            )
          )
          .append(this._buildPickerRowBlock()
            .addClass('tabDataSyncPickerRowBlockNoWrap')
            .append(this._buildRowBlockItem()
              .append($('<span>')
                .text(tab.wgappStrings.datasync_fresh_picker_label_server)
              )
            )
            .append(this._buildRowBlockItem()
              .append($('<a>')
                .text(tab.wgappStrings.datasync_test_connection)
              )
            )
          )
        );
    },
    _buildRemotePickerItem: function() {
      return this._buildPickerItem()
        .append(this._buildPickerItemRow()
          .addClass('tabDataSyncPickerItemRowPrimary tabDataSyncRemotePickerItem')
          .toggleClass('tabDataSyncPickerItemRowDisabled', !this.vm.getAvailableRemoteAgents().length)
          .click($.proxy(function() {
              this.vm.setRefreshMode(RefreshModeEnum.remote);
            }, this)
          )
          .append(this._buildPickerRowBlock()
            .append(
              this._buildItemGraphic()
              .addClass('tabDataSyncPickerIconRemote')
            )
          )
          .append(this._buildPickerRowBlock()
            .addClass('tabDataSyncPickerRowBlockNoWrap')
            .append(this._buildRowBlockItem()
              .append($('<span>')
                .text(tab.wgappStrings.datasync_fresh_picker_label_remote)
              )
            )
          )
        )
        .append(this._buildRemotePickerSelectorRow())
        .append(this._buildRemotePickerInstallationRow());
    },
    _buildRemotePickerSelectorRow: function() {
      return this._buildPickerItemRow()
        .addClass('tabDataSyncPickerItemRowSecondary')
        .addClass('tabDataSyncRemoteAgentRow')
        .append(this._buildPickerRowBlock()
          .addClass('tabDataSyncRowBlockRight')
          .append(
            $('<span>')
              .text(tab.wgappStrings.datasync_remote_agent_selector_label)
          )
          .append(
            this._buildRemoteAgentSelectorOrLabel()
          )
        );
    },
    _buildRemoteAgentSelectorOrLabel: function() {
      var that = this;

      // prompt to install when no agents are available
      if (!this.vm.getAvailableRemoteAgents().length) {
        return $('<div>')
          .addClass('tabDataSyncRemoteAgentLabel')
          .addClass('tabDataSyncRemoteAgentLabelEmphasis')
          .text(tab.wgappStrings.datasync_install_agent);
      }

      // display existing agent name when not editable
      if (!this.vm.getRefreshPropertiesAreEditable() || this.vm.getRefreshMode() != RefreshModeEnum.remote) {
        return $('<div>')
          .addClass('tabDataSyncRemoteAgentLabel')
          .text(this.vm.getRemoteAgentName() || tab.wgappStrings.datasync_agent_not_selected);
      }

      // agent is editable
      var dom = $('<select>')
        .addClass('tabDataSyncRemoteAgentSelector');

      $.each(this.vm.getAvailableRemoteAgents(), function(i, a) {
        dom.append(
          $('<option>')
          .attr('selected', that.vm.getRemoteAgentName() === a.name )
          .prop('value', a.name)
          .text(a.name)
        );
      });

      dom.change(function(e) {
        if (e.target.value !== null) {
          that.vm.setRemoteAgent(e.target.value);
        }
      });

      return dom;
    },
    _buildRemotePickerInstallationRow: function() {
      return this._buildPickerItemRow()
        .append(this._buildPickerRowBlock()
          .addClass('tabDataSyncRowBlockRight')
          .append(
            $('<a>')
              .text(tab.wgappStrings.datasync_tableau_desktop)
          )
          .append(
            $('<span>')
              .text(tab.wgappStrings.datasync_tableau_desktop_installation)
          )
        )
        .append (this._buildPickerRowBlock()
          .addClass('tabDataSyncRowBlockRight')
          .append(
            $('<a>')
              .addClass('tabDataSyncButton')
              .addClass('tabDataSyncRemotePickerButton') // clean up the shared style
              .text(tab.wgappStrings.datasync_agent_download)
          )
        );
    },
    _buildPickerItem: function() {
      return $('<div>')
        .addClass('tabDataSyncPickerItem');
    },
    _buildPickerItemRow: function() {
      return $('<div>')
        .addClass('tabDataSyncPickerItemRow');
    },
    _buildPickerRowBlock: function() {
      return $('<div>')
        .addClass('tabDataSyncPickerRowBlock');
    },
    _buildRowBlockItem: function() {
      return $('<div>')
        .addClass('tabDataSyncRowBlockItem');
    },
    _buildItemGraphic: function() {
      return $('<div>')
        .addClass('tabDataSyncPickerIcon');
    },
    _buildSchedulesDom: function() {
      return $('<div>')
        .addClass('tabDataSyncSchedules tabUserSelectNone')
        .append(
          this._buildServerSchedules()
        )
        .append(
          this._buildRemoteSchedules()
        );
    },
    _buildServerSchedules: function() {
      var dom = $('<div>')
        .addClass('tabDataSyncSchedulesList tabDataSyncSchedulesListServer')
        .text('SERVER SCHEDULES GO HERE')
        .hide();

      return dom;
    },
    _buildRemoteSchedules: function() {
      var dom = $('<div>')
        .addClass('tabDataSyncSchedulesList tabDataSyncSchedulesListRemote')
        .hide();

      var fullTable = $('<table>')
        .addClass('tabDataSyncSchedulesListTable');
      var incrementalTable = $('<table>')
        .addClass('tabDataSyncSchedulesListTable');

      dom.append(fullTable);
      dom.append(incrementalTable);

      fullTable.append(this._buildScheduleColgroup());
      incrementalTable.append(this._buildScheduleColgroup());

      fullTable.append(this._buildScheduleHeader(tab.wgappStrings.datasync_remote_full_refresh_header, ExtractRefreshTypeEnum.full));
      incrementalTable.append(this._buildScheduleHeader(tab.wgappStrings.datasync_remote_incremental_refresh_header, ExtractRefreshTypeEnum.incremental));

      var fullSchedules = this.vm.getRemoteSchedules(ExtractRefreshTypeEnum.full);
      var incrementalSchedules = this.vm.getRemoteSchedules(ExtractRefreshTypeEnum.incremental);

      for (var i = 0; i < fullSchedules.length; i++) {
        fullTable.append(this._buildScheduleRow(fullSchedules[i]));
      }

      for (var j = 0; j < incrementalSchedules.length; j++) {
        incrementalTable.append(this._buildScheduleRow(incrementalSchedules[j]));
      }

      return dom;
    },
    _buildScheduleHeader: function(typeName, typeValue) {
      var columns = [{
        contents: $('<span>').text(typeName)
      }];

      if (this.vm.getRefreshPropertiesAreEditable()) {
        columns.push({
          contents: $('<a>')
            .text(tab.wgappStrings.datasync_schedule_action_add)
            .click($.proxy(function() {
              this._showAddRemoteSchedule(typeValue);
            }, this))
        });
      }

      return this._buildTableHeaderRow(columns);
    },
    _buildScheduleRow: function(data) {
      var columns = [{
        contents: $('<span>')
          .text(this._convertCronStringToText(data.definition))
      }];

      if (this.vm.getRefreshPropertiesAreEditable()) {
        columns.push({
          contents: $('<a>')
            .text(tab.wgappStrings.datasync_schedule_action_delete)
            .click($.proxy(function() {
              this.vm.deleteRemoteSchedule(data.value);
            }, this))
        });
      }

      return this._buildTableContentRow(columns);
    },
    _buildScheduleColgroup: function() {
      var colgroup = [{
        cssClasses: ['tabDataSyncSchedulesListValueColumn']
      }];

      if (this.vm.getRefreshPropertiesAreEditable()) {
        colgroup.push({
          cssClasses: ['tabDataSyncSchedulesListActionColumn']
        });
      }

      return this._buildTableColgroup(colgroup);
    },
    _buildTableHeaderRow: function(columns) {
      return this._buildTableRow('<th>', columns);
    },
    _buildTableContentRow: function(columns) {
      return this._buildTableRow('<td>', columns);
    },
    _buildTableRow: function(tag, columns) {
      var row = $('<tr>');
      for (var i = 0; i < columns.length; i++) {
        var cell = $(tag);
        cell.append(columns[i].contents);
        if (columns[i].colspan) {
          cell.prop('colspan', columns[i].colspan);
        }
        row.append(cell);
      }
      return row;
    },
    _buildTableColgroup: function(columns) {
      var group = $('<colgroup>');

      for (var i = 0; i < columns.length; i++) {
        var col = $('<col>');
        if (columns[i].cssClasses && columns[i].cssClasses.length) {
          for (var j = 0; j < columns[i].cssClasses.length; j++) {
            col.addClass(columns[i].cssClasses[j]);
          }
          col.addClass(columns[i].cssClasses);
        }
        if (columns[i].cssStyleProperties) {
          col.css(columns[i].cssStyleProperties);
        }
        group.append(col);
      }
      return group;
    },
    _showAddRemoteSchedule: function(typeValue) {
      var that = this;

      var cancelCallback = function() {
        $('.tabDataSyncDialogOverlay').hide();
      };
      var confirmCallback = function(e) {
        that.vm.addRemoteSchedule(e.target.value, typeValue);
        cancelCallback();
      };

      this._buildAddRemoteScheduleDialog(confirmCallback, cancelCallback);
      $('.tabDataSyncDialogOverlay').show();
    },
    _buildAddRemoteScheduleDialog: function(confirmCallback, cancelCallback) {
      var dom = $('<div>')
        .addClass('tabDataSyncDialog')
        .append(
          $('<span>').text(tab.wgappStrings.datasync_add_remote_schedule_definition_label),
          $('<input>')
          .keyup(function(e) {
            if (e.which === 13) { // enter key
              confirmCallback(e);
            } else if (e.which === 27) { // esc key
              cancelCallback();
            }
          })
        );

      $('.tabDataSyncDialog').replaceWith(dom);
    },
    _buildDialogHolder: function() {
      return $('<div>')
        .addClass('tabDataSyncDialogHolder')
        .append($('<div>')
          .addClass('tabDataSyncDialogOverlay')
          .click(function(e) {
            if(!$(e.target).hasClass('tabDataSyncDialogOverlay')) {
              // ignore events from children
              return;
            }
            $('.tabDataSyncDialogOverlay').hide();
          })
          .append(
            $('<div>')
            .addClass('tabDataSyncDialog')
          )
        );
    },
    _convertCronStringToText: function(cron) {
      return cron;
    }
  };

  this.Tableau || (this.Tableau = {});

  this.Tableau.DataSyncDataSource = DataSyncDataSource;
}).call(this, jQuery);
