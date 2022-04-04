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
  var log;
  if (typeof console === 'object' && console && console.log) {
    log = function() {
      try {
        console.log.apply(console, arguments);
      } catch (e) {
      }
    };
  } else {
    log = function() {};
  }

  // Keychain administration UI
  var KeychainAdmin = function (settings) {
    this.settings = settings;
    this.$el = $('<div>')
      .addClass('tabKeychains');
      this.refreshData();
  };  
  KeychainAdmin.prototype = {
    refreshData: function() {
      log("Requesting keys");
      return $.getJSON(this.settings.dataUrl)
        .then($.proxy(function(data) {
          this.requestedData = data; 
        }, this))
        .done($.proxy(this._applyData, this));
    },

    _applyData: function(data, status, xhr) {
      if (status !== 'success') {
        log("XHR failed: %s, %o", status, xhr);
        return;
      }
      this.$el.children().remove();
      $.each(data, $.proxy(this._buildKeychainTypeDOM, this));
    },

    _buildKeychainTypeDOM: function(i, type) {
      $("<div>").addClass("tabKeychainType")
        .addClass("tabKeychainType-" + this._safeCssClass(type.dsType))
        .append(this._buildKeychainTypeName(type))
        .append(this._buildKeychainTypeKeys(type))
        .appendTo(this.$el);
    },

    _buildKeychainTypeKeys: function(type) {
        if (!type.keys) {
          return $();
        }
        var that = this, 
          $keys = $("<div>").addClass("tabKeychainKeys"),
          keysSorted = type.keys.sort(function (a, b) {
              return a.description.localeCompare(b.description);
          });
        $.each(keysSorted, function(i, key) {
          var $key = $("<div>").addClass("tabKeychainKey").toggleClass("tabKeychainKeySecondary", i > 0)
            .append($("<span>").addClass("tabKeychainKeyName").text(key.description))
            .append(that._buildKeyButtons(key))
            .attr("data-tabKeyId", key.keyId);
          $keys.append($key);
        });
        return $keys;
    },

    _buildKeyButtons: function(key) {
      var that = this,
        buildButton = function(btnClass, label, callback) {
          return $("<span>").addClass("tabKeychainButton tabUserSelectNone " + btnClass)
            .attr("unselectable", "on")
            .text(label)
            .click(function() { 
                if ($(this).hasClass("tabDisabled")) { return; }
                callback();
             });
        };
      return $("<span>").addClass("tabKeychainKeyButtons")
        // test
        .append(buildButton("tabKeychainKeyTest", tab.wgappStrings.oauth_manage_test_key, 
          function() { 
            that._requestTestKey(key.keyId);
          }))
        // delete
        .append(buildButton("tabKeychainKeyDelete", tab.wgappStrings.oauth_manage_delete_key, 
          function() { 
            lyteboxConfirm("tableau_lytebox", tab.wgappStrings.oauth_manage_key_confirm_delete(key.description), 
              function(confirm) {
                if (confirm) {
                  that._requestDeleteKey(key.keyId);
                }
              });
          }))
        ;
    },

    _buildKeychainTypeName: function(type) {
      var that = this;
      return $("<div>").addClass("tabKeychainTypeName")
          .append(
            $("<span>").text(type.name))
          .append(
            $("<span>").addClass("tabKeychainAdd tabKeychainButton tabUserSelectNone")
              .text(tab.wgappStrings.oauth_manage_add_key)
              .click(function() { 
                that._requestAddKey(type.dsType); 
              }))
          ;
    },

    _requestAddKey: function(dsType) {
      log("Request Add Key: %s", dsType);
      var that = this, 
        url = this.settings.addKeyUrl.replace("__dsType__", dsType);
      OAuth.requestAddToken(url, function(success, returnArg) {
        var refreshed = that.refreshData();
        if (!success && returnArg) {
          refreshed.always($.proxy(that._showError, that, returnArg));
        }
      });
    },

    _requestDeleteKey: function(keyId) {
      log("Request Revoke Key: %s", keyId);
      var that = this, 
        url = this.settings.deleteKeyUrl.replace("__keyId__", keyId);
      this._getKeyDom(keyId).fadeOut();
      $.post(url, {authenticity_token: this.settings.authenticity_token}, function() {
        // TODO handle error 
        that.refreshData();
      });
    },

    _requestTestKey: function(keyId) {
      log("Request Test Key: %s", keyId);
      var that = this, 
        url = this.settings.testKeyUrl.replace("__keyId__", keyId);
      this._getKeyDom(keyId).find(".tabKeychainKeyTest").addClass("tabDisabled");
      $.getJSON(url)
        .then(function(response) {
          log("Test result: %o", response);
          that._getKeyDom(keyId).find(".tabKeychainKeyTest").removeClass("tabDisabled").end()
            // remove existing messages
            .find(".tabKeychainTestFailure, .tabKeychainTestSuccess").remove();

          if (response && response.success) {
            $("<span>")
              .addClass("tabKeychainTestSuccess").text(tab.wgappStrings.oauth_manage_test_succeed)
              .appendTo(that._getKeyDom(keyId).find(".tabKeychainKeyButtons"))
              .delay(5000)
              .fadeOut("fast", function(e) { $(this).remove(); });
          } else {
            var errorMessage = response && response.message 
              ? tab.wgappStrings.oauth_manage_test_fail(response.message)
              : tab.wgappStrings.oauth_manage_test_fail_generic;
            $("<span>")
              .addClass("tabKeychainTestFailure").text(errorMessage)
              .appendTo(that._getKeyDom(keyId).find(".tabKeychainKeyButtons"))
              .delay(5000)
              .fadeOut("fast", function(e) { $(this).remove(); });
            }
        });
    },
    _getKeyDom: function(keyId) {
      return this.$el.find(".tabKeychainKey[data-tabKeyId='" + keyId + "']");
    },

    _safeCssClass: function (val) {
      return val.replace(/[^A-Za-z]/, "");
    },
    _showError: function(errorKey) {
      var errorMessage = tab.wgappStrings["oauth_manage_error_" + errorKey];
      $("<div>")
        .addClass("tabKeychainError")
        .text(errorMessage)
        .prependTo(this.$el)
        .delay(15000)
        .fadeOut("fast", function(e) { $(this).remove(); });
    }
  };

  // General OAuth utility functions
  var oAuthCallbackInstance = $.Callbacks();
  var OAuth = {
    requestAddToken : function(url, callback) {
      oAuthCallbackInstance.empty();
      oAuthCallbackInstance.add(callback);
      window.open(url, 'oauth', 'left=20,top=20,width=500,height=600,toolbar=1,resizable=1'); 
    },

    notifyAddTokenSuccess: function(keyId) {
      log("notifyAddTokenSuccess for keyId %i", keyId);
      oAuthCallbackInstance.fire(true, keyId);
      oAuthCallbackInstance.empty();
    },

    notifyAddTokenFailure: function(message) {
      log("notifyAddTokenFailure");
      oAuthCallbackInstance.fire(false, message);
      oAuthCallbackInstance.empty();
    },

    associateKeyWithResource: function(requestUrl, authToken, keyId, resourceUrl, callback) {
      $.post(requestUrl, { authenticity_token: authToken, id: keyId, repo_url: resourceUrl }, 
        function(data) {
          if (data && data.success) {
            callback(true);
          } else {
            log("Associating resource failed: key=%s, resource=%s, response=%o", keyId, resourceUrl, data);
            callback(false);
          }
        });
    }
  }

  this.Tableau || (this.Tableau = {});

  this.Tableau.KeychainAdmin = KeychainAdmin;
  this.Tableau.OAuth = OAuth;
}).call(this, jQuery);
