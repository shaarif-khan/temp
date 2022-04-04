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

  // External Connection Editing API
  var Connection = function (preEditUrl) {
    this.preEditUrl = preEditUrl;
  };
  Connection.edit = function(preEditUrl, connIds) {
    var vm = new ConnectionViewModel(preEditUrl, connIds),
      view = new ConnectionView(vm);
    vm.updateData();
  };

  //
  // ViewModel
  //
  var ConnectionMessageStatusEnum = {
    info: "info",
    progress: "progress",
    error: "error"
  };
  var ConnectionModeEnum = {
    embed: "embed",
    dontembed: "dontembed",
    password: "password"
  };
  var ConnectionViewModel = function(dataUrl, connIds) {
    this.dataUrl = dataUrl;
    this.connIds = connIds;
    this.data = {};
    this.initialUpdate = true;
    this.initialMode = null;
    this.initialKeyId = null;
    this.dataChanged = $.Callbacks();
    this.disposed = $.Callbacks();
    this.messageChanged = $.Callbacks();
    this.message = "";
    this.messageStatus = ConnectionMessageStatusEnum.info;
  };
  ConnectionViewModel.prototype = {
    updateData: function(isDeferred) {
      var that = this;
      return $.ajax({ url: this.dataUrl, data: { checked_ids: this._getIdsForServer() }, dataType: "json" })
      .done(function(data) {
        that.data = data;
        // Capture initial state on first data request
        if (that.initialUpdate) {
          that.initialUpdate = false;
          that.initialMode = data.mode;
          that.initialKeyId = data.currentKeyId;
        }
        if (isDeferred !== true) {
          that.dataChanged.fire();
        }
      })
      .fail(function(xhr, status, msg) {
        log("Update data failed: %s %s", status, msg);
      });
    },
    _getIdsForServer: function() {
      // We have to match the existing API used for editing non-oAuth connections, which expects
      // the IDs to be in the form of "<somePrefix>_<id1>,<somePrefix>_<id2>".
      var sb = [];
      $.each(this.connIds, function(i, id) {
        sb.push("c_" + id);
      });
      return sb.join(",");
    },
    getSelectedKey: function() {
      return this._findKey(this.data.currentKeyId);
    },
    setSelectedKey: function(keyId) {
      //use double equals to compare int and string
      if (keyId == this.data.currentKeyId) { return; }
      this.data.currentKeyId = keyId;
      this.data.mode = ConnectionModeEnum.embed;
      this.dataChanged.fire();
    },
    isEmbedMode: function() {
      return this.data.mode === ConnectionModeEnum.embed;
    },
    isNoEmbedMode: function() {
      return this.data.mode === ConnectionModeEnum.dontembed;
    },
    isPasswordMode: function() {
      return this.data.mode === ConnectionModeEnum.password;
    },
    setMode: function(newMode) {
      if (this.data.mode === newMode) { return; }
      log("Changing mode to: %s", newMode);
      this.data.mode = newMode;
      this.dataChanged.fire();
    },
    _findKey: function(keyId) {
      if (keyId === undefined || keyId === null) { return null; }
      var found = null;
      $.each(this.data.keys, function(i, key) {
        //use double equals to compare int and string
        if (key.keyId == keyId) {
          found = key;
        }
      });
      return found;
    },
    requestAddKey: function() {
      var that = this;
      Tableau.OAuth.requestAddToken(this.data.addKeyUrl, function(success, returnArg) {
        if (success) {
          // update the data _without_ updating the dom afterward
          that.updateData(true)
            .then(function() {
              that.data.mode = ConnectionModeEnum.embed;
              // if length is 1 then we've added our first key and can assume it should be selected
              // otherwise make the user choose
              if (that.data.keys.length === 1) {
                that.data.currentKeyId = that.data.keys[0].keyId;
              }
              that.dataChanged.fire();
            });
        } else {
          var errorMessage = tab.wgappStrings["oauth_manage_error_" + returnArg];
          that._setMessage(errorMessage, ConnectionMessageStatusEnum.error);
          log("Adding key failed: %s %s", returnArg, errorMessage);
        }
      });
    },
    setInputField: function(fieldName, newValue) {
      var acceptedFields = ["username", "password", "password_confirmation"];
      // TODO: change the mode to password?
      if (acceptedFields.indexOf(fieldName) === -1) {
        return;
      }

      this.data[fieldName] = newValue;
      this.data[fieldName + "Changed"] = "on";
      // this.dataChanged.fire(); // not sure if necessary
    },
    isSaveEnabled: function() {
      if (!this._stateHasChanged()) { return false; }

      if (this.data.mode === ConnectionModeEnum.embed) {
        return this.getSelectedKey() != null && this._keyStateHasChanged();
      } else if (this.data.mode === ConnectionModeEnum.password) {
        // bugzid 103077, should be validating that the passwords match, aren't null,
        // that the username isn't null and is in some sense an email address.
        return true;
      } else {
        return this._modeStateHasChanged();
      }
    },    
    _modeStateHasChanged: function() {
      return this.initialMode !== this.data.mode;
    },
    _keyStateHasChanged: function() {
      return this.initialKeyId !== this.data.currentKeyId;
    },
    _stateHasChanged: function() {
      return this._modeStateHasChanged || this._keyStateHasChanged();
    },
    isTestEnabled: function() {
      return this.isPasswordMode() || (this.isEmbedMode() && this.getSelectedKey() != null);
    },
    cancel: function() {
      this.disposed.fire();
    },
    getPasswordFormData: function() {
      var rsa = new RSAKey();
      rsa.setPublic(this.data.encryptionKey.modulus, this.data.encryptionKey.exponent);

      return {
        c_username: this.data.usernameChanged,
        edit_username: this.data.username,

        c_password: this.data.passwordChanged,
        password: "txt1",
        password_confirmation: "txt2",
        crypted: rsa.encrypt(this.data.password || ""),
        crypted_confirmation: rsa.encrypt(this.data.password_confirmation || "")
      };
    },
    save: function() {
      this._withNewEncryptionKey($.proxy(this._save, this));
    },
    _save: function() {
      var that = this;
      if (!this.isSaveEnabled()) { return; }

      var passwordData = this.isPasswordMode() ? this.getPasswordFormData() : {};

      var monitorUrl = this.data.monitorUrl;

      this._setMessage(tab.wgappStrings.edit_conn_oauth_save_busy, ConnectionMessageStatusEnum.progress);
      $.ajax({ 
        url: this.data.saveUrl, 
        type: "POST",
        data: $.extend({
          authenticity_token: this.data.authenticity_token,
          mode: this.data.mode,
          checked_ids: this._getIdsForServer(),
          keyId: this.data.currentKeyId
        }, passwordData),
        dataType: "json"
      })
      .done(function(data) {
        if (data.success === false) {
          log("Submit save task failed: %o", data);
          that._setMessage(data.errors, ConnectionMessageStatusEnum.error)
        } else {
          log("Submit save task succeeded: %o", data);
          new Ajax.Updater(
            { success: 'tabEditConnDialog' }, 
              monitorUrl,
              { 
                asynchronous:true, 
                method: 'get', 
                evalScripts:true, 
                parameters: { job_id: data.jobId, checked_count: data.numConnections } 
              }
           );
        }
      })
      .fail(function(xhr, status, msg) {
        that._setMessage(tab.wgappStrings.edit_conn_oauth_save_fail, ConnectionMessageStatusEnum.error);
        log("Submit save task failed: %s %s", status, msg);
      });
    },
    test: function() {
      this._withNewEncryptionKey($.proxy(this._test, this));
    },
    _test: function() {
      var that = this;

      if (!this.isTestEnabled()) {
        return;
      }

      var onSuccess = function(data) {
        if (data && data.success) {
          that._setMessage(tab.wgappStrings.edit_conn_oauth_test_success, ConnectionMessageStatusEnum.info);
        } else {
          that._setMessage(tab.wgappStrings.oauth_manage_test_fail_generic, ConnectionMessageStatusEnum.error);
        }
      };
      var onFailure = function(xhr, status, msg) {
          that._setMessage(tab.wgappStrings.edit_conn_oauth_test_fail(msg), ConnectionMessageStatusEnum.error);
      };

      this._setMessage(tab.wgappStrings.edit_conn_oauth_test_busy, ConnectionMessageStatusEnum.progress);
      if (this.isPasswordMode()) {
        var passwordData = this.getPasswordFormData();
        $.ajax({
            type: "POST",
            url: this.data.testPasswordUrl,
            dataType: "json",
            data: $.extend({
              authenticity_token: this.data.authenticity_token,
              checked_ids: this._getIdsForServer()
            }, passwordData)
          }).done(onSuccess).fail(onFailure);
      } else {
        $.ajax({
            type: "POST",
            dataType: "json",
            url: this.data.testKeyUrl,
            data: {
              authenticity_token: this.data.authenticity_token,
              id: this.data.currentKeyId
            }
          }).done(onSuccess).fail(onFailure);
      }
    },
    _withNewEncryptionKey: function(fn) {
      var that = this;

      $.ajax({
        type: "POST",
        url: that.data.getEncryptionKeyUrl,
        data: {
          authenticity_token: that.data.authenticity_token
        }
      }).done(function(encryptionKey) {
        that.data.encryptionKey = encryptionKey;
      }).always(fn);
    },
    _setMessage: function(msg, status) {
      this.message = msg;
      this.messageStatus = status;
      this.messageChanged.fire();
    }
  };
  //
  // View
  //
  var ConnectionView = function(vm) {
    this.vm = vm;
    this.vm.dataChanged.add($.proxy(this._handleDataChanged, this));
    this.vm.disposed.add($.proxy(this._hideDialog, this));
    this.vm.messageChanged.add($.proxy(this._messageChanged, this))
    this.shown = false;
    this._legacyDom = $(".tabEditConnBody");
    this.$dom = this._legacyDom;
  };
  ConnectionView.prototype = {
    _handleDataChanged: function() {
      var $domGettingReplaced = this.$dom;
      this._buildDom();
      //replaceWith returns the *original* dom, which we want to remove
      $domGettingReplaced.replaceWith(this.$dom).remove();
      if (!this.shown) {
        $("#tabEditConnDialog").show();
        $(".tabEditConnOverlay").show();    
        this.shown = true;
      }
    },
    _buildDom: function() {
      this.$dom = $("<div>")
        .addClass("tabEditConnBodyOAuth tabUserSelectNone")
        .append(
          $("<div>").addClass("tabEditConnOAuthAuthSection")
            .append($("<div>").addClass("tabEditConnOAuthAuthTitle").text(tab.wgappStrings.edit_conn_oauth_authentication))
            .append(this._buildChoiceDom())
        )
        .append(this._buildDescriptionDom())
        .append(this._buildTestAndMessageDom())
        .append(this._buildButtonDom());
    },
    _createChoice: function(mode, label, selected) {
      var $input = $('<input name="oauth_embedChoices" type="radio">')
        .attr('id', "oauth_" + mode).attr("value", mode)
        .change($.proxy(this._modeChanged, this));
      if (selected) {
        $input.prop("checked", true);
      }
      return $("<div>").addClass("tabEditConnOAuthChoice")
        .append($input)
        .append($('<label>').attr("for", "oauth_" + mode).text(label))
    },
    _buildPasswordChoiceDom: function() {
      var that = this;

      if (!this.vm.data.supportsPassword) {
        return "";
      }

      var createInputRow = function(label, type, name, value, disabled) {
        var label = $("<span>").addClass("tabEditConnLabelHolder").append(
          $("<label>").attr("for", name).text(label)
        );
        var input = $("<span>").addClass("tabEditConnInputHolder").append(
          $("<input>")
            .addClass("formfield tabEditConnInput")
            .toggleClass("tabDisabled tabUserSelectNone", disabled)
            .attr("type", type)
            .attr("name", name)
            .attr("autocomplete", "off")
            .prop("disabled", disabled)
            .val(value || "")
            .on("change", $.proxy(that._inputFieldChanged, that))
        );
        return $('<div>').addClass("tabEditConnTableRow")
          .append(label)
          .append(input);
      };

      return this._createChoice(ConnectionModeEnum.password, tab.wgappStrings.edit_conn_oauth_use_password, this.vm.data.mode === ConnectionModeEnum.password)
        .append($("<div>")
          .addClass("tabEditConnCredentialsChoice")
          .append(createInputRow(tab.wgappStrings.edit_conn_username, "text", "username", this.vm.data.username, this.vm.data.mode !== ConnectionModeEnum.password))
          .append(createInputRow(tab.wgappStrings.edit_conn_password, "password", "password", "", this.vm.data.mode !== ConnectionModeEnum.password))
          .append(createInputRow(tab.wgappStrings.edit_conn_password_confirm, "password", "password_confirmation", "", this.vm.data.mode !== ConnectionModeEnum.password))
      );
    },
    _buildChoiceDom: function() {
      var that = this,
        jsSafeDbClass = this._jsSafeDbClass(),
        embedLabelKey = "edit_conn_oauth_embed_" + jsSafeDbClass,
        dontEmbedLabelKey = "edit_conn_oauth_dontembed_" + jsSafeDbClass,
        embedChoice = this._createChoice(ConnectionModeEnum.embed, tab.wgappStrings[embedLabelKey], this.vm.isEmbedMode())
      ;

      if (this.vm.data.keys.length === 0) {
        embedChoice.append(
          $("<span>")
            .addClass("tabEditConnOAuthAddKey")
            .append(
              $("<a>").addClass("tabEditConnOAuthAddKeyLink").click($.proxy(this.vm.requestAddKey, this.vm))
                .text(tab.wgappStrings.edit_conn_oauth_add_key(this.vm.data.dbClassName))
            )
        );
      } else {
        var $keyChoice = $("<span>").addClass("tabEditConnOAuthKeyChoice");
        var $keySelect = $("<select>").change($.proxy(this._keyChoiceChanged, this)).appendTo($keyChoice);
        if (this.vm.getSelectedKey() === null) {
          $keySelect.append($("<option>").attr("value", "").text(tab.wgappStrings.edit_conn_oauth_select_credential));
        }
        $.each(this.vm.data.keys, function(i, key) {
          $keySelect.append($("<option>")
            .attr("value", key.keyId)
            .prop("selected", key === that.vm.getSelectedKey())
            .text(key.description));         
        });
        embedChoice.append($keyChoice);
      }

      return $("<div>").addClass("tabEditConnOAuthChoices")
        .append(embedChoice)
        .append(this._buildPasswordChoiceDom())
        .append(this._createChoice(ConnectionModeEnum.dontembed, tab.wgappStrings[dontEmbedLabelKey], this.vm.isNoEmbedMode()));
    },
    _buildTestAndMessageDom: function() {
      return $("<div>").addClass("tabEditConnOAuthTest")
        .append(
          $("<a>").addClass("tabEditConnTestLink")
            .text(tab.wgappStrings.edit_conn_oauth_test_button)
            .toggleClass("tabDisabled", !this.vm.isTestEnabled())
            .click($.proxy(this._testClicked, this))
        )
        .append(
          $("<div>").addClass("tabEditConnOAuthMessageHolder")
          .append($("<span>").addClass("tabEditConnOAuthBusy").hide())
          .append($("<span>").addClass("tabEditConnOAuthMessage"))
        );
    },
    _buildDescriptionDom: function() {
      var descriptionKey = "edit_conn_oauth_description_" + this._jsSafeDbClass();

      if (tab.wgappStrings[descriptionKey]) {
        return $("<div>").addClass("tabEditConnOAuthDescription").text(tab.wgappStrings[descriptionKey]);
      }
      return $();
    },
    _buildButtonDom: function() {
      return $("<div>").addClass("tabEditButtons")
        .append(
          $("<a>").addClass("tabEditConnButton tabEditConnSave")
            .click($.proxy(this._saveClicked, this))
            .toggleClass("tabDisabled", !this.vm.isSaveEnabled())
            .text(tab.wgappStrings.edit_conn_oauth_save_button)
          )
        .append(
          $("<a>").addClass("tabEditConnButton tabEditConnCancel")
            .click($.proxy(this._cancelClicked, this))
            .text(tab.wgappStrings.edit_conn_oauth_cancel_button)
        );
    },
    _modeChanged: function(e) {
      var newMode = $(e.target).attr("value");
      this.vm.setMode(newMode);
    },
    _keyChoiceChanged: function(e) {
      var newKeyId = this.$dom.find(".tabEditConnOAuthKeyChoice select").val();
      this.vm.setSelectedKey(newKeyId);
    },
    _inputFieldChanged: function(e) {
      var $target = $(e.target),
          fieldName = $target.attr("name"),
          newValue = $target.val();
      this.vm.setInputField(fieldName, newValue);
    },
    _saveClicked: function() {
      this.vm.save();
    },
    _cancelClicked: function() {
      this.vm.cancel();
    },
    _testClicked: function() {
      this.vm.test();
    },
    _messageChanged: function() {
      this.$dom.find(".tabEditConnOAuthBusy").toggle(this.vm.messageStatus === ConnectionMessageStatusEnum.progress);
      this.$dom.find(".tabEditConnOAuthMessage")
        .toggleClass("tabConnectionTestError", this.vm.messageStatus === ConnectionMessageStatusEnum.error)
        .text(this.vm.message);
      },
    _hideDialog: function() {
      jQuery("#tabEditConnDialog").hide();
      jQuery(".tabEditConnOverlay").hide();
      // Put back the old connection dialog DOM.  This is necessary so that we can share the dialog 
      // for both types of edits (oAuth and non).
      
      //replaceWith returns the *original* dom, which we want to remove
      this.$dom.replaceWith(this._legacyDom).remove();
    },
    _jsSafeDbClass: function () {
      return this.vm.data.dbClass.replace(/[^A-Za-z]/, "");
    }
  };

  this.Tableau || (this.Tableau = {});

  this.Tableau.Connection = Connection;
}).call(this, jQuery);
