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
  var Notifications = function (settings) {
    this.settings = settings;
    this.$el = $('<div>')
      .addClass('tab-notifications')
    this.$content = $('<iframe>')
      .attr("seamless", "seamless")
      .attr("frameborder", 0)
      .attr("border", 0)
      .css("border", 0)
      .css("scrolling", "no")
      .appendTo(this.$el);
    if (this.settings.iframeCss) {
      this.$content.css(this.settings.iframeCss);
    }
    this.requestedData = null; // the data received from the Notifications controller
    this.contentUrl = null; // the URL of the Notification content to load
    if (settings && settings.contentUrl) {
      this.contentUrl = settings.contentUrl; // In some cases (post-login) the content URL is known at instantiation time
      this._applyContentUrl();
    }
    this._requestData(); // In most cases the Notification metadata will be requested post load
  };  
  Notifications.prototype = {
    _requestData: function() {
      if (this.settings && !this.requestedData) { // only request once
        $.getJSON(this.settings.dataUrl) // get the metadata
        .then($.proxy(function(data) {
          this.requestedData = data; // persist the metadata
        }, this))
        .done($.proxy(this._applyData, this)); // apply the metadata on success, fail silently otherwise
      }
    },
    _applyData: function() { // entry point for applying the metadata     
      if (this.requestedData) {
        if (this.requestedData.contentUrl) {
          this.contentUrl = this.requestedData.contentUrl;
        }
        this._applyContentUrl();
        if (this.settings.successCallback) {
          this.settings.successCallback(this.contentUrl);
        }
      }
    },
    _applyContentUrl: function() {
      if (this.contentUrl) {
        this.$content.attr("src", this.contentUrl);
      }
    }
  };
  //
  // Getting started
  //
  Notifications.setupGettingStarted = function (settings) {
    Notifications._gettingStartedSettings = settings;
  };
  Notifications.showGettingStarted = function () {
    if (!Notifications._gettingStartedSettings) { return; }
    
    var settings = Notifications._gettingStartedSettings;
    // 600 - 2 * 10 padding
    settings.iframeCss = { width: "780px", height: "540px" };
    var n = new Notifications(settings);
    
    var $el = $("<div>").addClass("tabGettingStartedDialog")
      .append(n.$el)
      .appendTo($("body"));
    
    var $overlay = $("<div>").addClass("tabGettingStartedOverlay")
      .appendTo($("body"));

    var closeDialog = function() {
        // BUG 79594 - clear out iframe src to force IE to stop playing the video
        $el.find("iframe").attr("src", "about:blank");
        $el.remove();
        $overlay.remove();
    };

    $overlay.click(closeDialog);

    $el.append($("<div>").addClass("tabGettingStartedClose").html("&#x00d7;").click(closeDialog));
    if (settings.suppressUrl && settings.suppressMessage) {
      var $check = $("<input type='checkbox'>").change(function() {
        settings.suppressState = !$check.prop("checked");
        $.get(settings.suppressUrl, { suppress: settings.suppressState });
      });
      if (!settings.suppressState) {
        $check.prop("checked", true);
      }
      $el.append($("<div>").addClass("tabGettingStartedSuppress")
        .append($("<label>").text(settings.suppressMessage).prepend($check)));
    }
  };

  this.Tableau || (this.Tableau = {});
  this.Tableau.Notifications = Notifications;
}).call(this, jQuery);
