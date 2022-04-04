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
/*   tableuau_add_users.js
 Provide functionality for a form that will be used to add users to a given site.
 */

// AddUsers
(function($) {
    var AddUsers = function(settings) {
        this.settings = settings;
        this.availableUserQuotaMessageTemplate =  settings.availableUserQuotaMessage;
        this.$availableUserQuota = null;
        this.availableUserQuotaQuantity = null;
        this.$titleRow = null;
        this.$form = null;
        this.$textArea = null;
        this.$singleLineMessage = null;
        this.$multiLineMessage = null;
        this.$addUserButton = null;
        this.$cancelButton = null;
        this.$licenseValCol = null;
        this.$adminCheckBox = null;
        this.$adminOptionsRow = null;
        this.$adminTypeContent = null;
        this.$adminTypeSystem = null;
        this.$spinner = null;
        this.$addUserHolder = this._makeAddUserForm();
        this.$glass = $("<div>").addClass("tab-adduser-popup-glass");
        this.$popup = $("<div>").addClass("tab-adduser-popup");

        // if the availableUserQuota is -1 then the user quota does not get shown
        if(this.settings.availableUserQuota !== -1){
            this.availableUserQuotaQuantity = this.settings.availableUserQuota;
            this._setAvailableUserQuotaMessage();
        }
        // trigger for : availableUserQuotaChange
        $("body").on('availableUserQuotaChange', $.proxy(function(e, quota) {
            if (quota !== -1) {
                this.availableUserQuotaQuantity = quota;
                this._setAvailableUserQuotaMessage();
            }
        }, this));

        // set up an exterior link that will show this Add User form
        $("table#actions_parent").on('click', '#add-user-button', $.proxy(function(e){
            this._show();
            return false;
        }, this));

        // If the Page has returned from a form POST, perhaps there are errors in the form that must be diplayed to the user
        if(this.settings.isOpen){
          this._show();
          this._setErrors();
        }

        // display errors in the 'flash' area
        if(this.settings.notice){
            set_and_highlight_flash2(this.settings.notice, this.settings.details || '', false)  ;
        }

    };
    AddUsers.prototype = {
        _restrictToUnlicensedUser: function(){
            this.$licenseValCol.find('#interactor, #viewer').prop("disabled", true);
            this.$adminCheckBox.prop("disabled", true);
            this.$licenseValCol.find('#unlicensed').prop("checked", true);
            // display message
            this._showMultiLineError([this.settings.restrictToUnlicensedUser]);
        },
        _unRestrict: function(){
            this.$licenseValCol.find('#interactor, #viewer').prop("disabled", false);
            this.$adminCheckBox.prop("disabled", false);
        },
        _addUserSubmit: function() {
            var validatorResult = this._validate();
            if (validatorResult.isValid) {
                // clear / hide existing rows
                this.$singleLineMessage.empty();
                this.$singleLineMessage.hide();
                this._disableSubmitInput();
                this.$spinner.addClass("spinner-show");
                this.$form.submit();
            } else {
                this._hideSingleLineError();
                this._showMultiLineError(validatorResult.message);
            }
        },
        _show: function() {
            var body = $("body");
            this.$glass.appendTo(body);
            this.$popup.appendTo(body);
            this.$popup.append(this.$addUserHolder);
            this.$addUserButton.on('click', $.proxy(this._addUserSubmit, this));
            this.$cancelButton.on('click', $.proxy(this._hide, this));

            if(this.availableUserQuotaQuantity === 0){
                this._restrictToUnlicensedUser();
            }else{
                this._unRestrict()
            }

            // If hasAdminOptions is true then set click handlers to the "Administer" checkbox
            if(this.settings.hasAdminOptions){
                this.$adminCheckBox.on('click', $.proxy(function(){
                    this._adminOptions(!this.$adminOptionsRow.is(":visible"));
                }, this));

                // If this administrator box has already been selected, show the radio buttons.
                if(this.settings.userRights.selections.administrator.checked){
                  this._adminOptions(true);
                }
            }
            this.$textArea.on('keyup', $.proxy(function(){

                this._hideSingleLineError();

                if(this.$textArea.val() !== ""){
                    this._enableSubmitInput();
                }else{
                    this._disableSubmitInput();
                }
            }, this));

            this.$glass.show();
            this.$popup.show();
            this.$textArea.focus();

        },
        _hide: function() {
            // If the browser is making a page request and the user hits cancel, stop the request
            if(window.stop){
                window.stop();
            } else { // ie
                window.document.execCommand('Stop');
            }
            // clear all the previous user input and messages
            this._hideSingleLineError();
            this._hideMultiLineError();
            this.$textArea.val("");
            this.$textArea.removeClass("error");
            this.$addUserHolder.remove();
            this.$glass.remove();
            this.$popup.remove();
            this.$spinner.removeClass("spinner-show");
        },
        _setAvailableUserQuotaMessage: function(){
            var color = (this.availableUserQuotaQuantity !== 0)? "#000": "#f00";
            this.$availableUserQuota.text(this.availableUserQuotaMessageTemplate.replace(/\$\{availableUserQuota\}/, this.availableUserQuotaQuantity))
                .css({color:color});
        },
        _adminOptions: function(show){
            if(!this.$adminOptionsRow){return;}
            if(show){
                this.$adminOptionsRow.show();
            }else{
                this.$adminOptionsRow.hide();
            }
            this.$adminTypeContent.prop("disabled", !show);
            this.$adminTypeSystem.prop("disabled", !show);
        },
        _hideSingleLineError: function() {
            this.$singleLineMessage.empty().hide();
        },
        _showSingleLineError: function(line) {
            this.$singleLineMessage.empty().append(this._makeErrorLine(line)).show();
        },
        _hideMultiLineError: function() {
            this.$multiLineMessage.empty().hide();
        },
        _showMultiLineError: function(lines) {
            this.$multiLineMessage.empty().hide();
            for (var i = 0, l = lines.length; i < l; i++) {
                this.$multiLineMessage.append(this._makeErrorLine(lines[i]));
            }
            if(lines.length > 0 ){
                this.$multiLineMessage.show();
            }
        },
        _makeErrorLine: function(line) {
            return $('<div>').addClass("error").text(line);
        },
        _enableSubmitInput: function(){
            this.$addUserButton.prop("disabled", false);
            this.$addUserButton.removeClass("disabled");
        },
        _disableSubmitInput: function(){
            this.$addUserButton.prop("disabled", true);
            this.$addUserButton.addClass("disabled");
        },
        _validate: function() {
            var returnObj = {
                isValid: false,
                message: []
            };
            var hasValidName = false;
            var hasInvalidEmail = false;
            // replace whitespace (except spaces) and , with ;
            var names = this.$textArea.val().replace(/((?! )[,\s])+/g, this.settings.namesStringSplitChar)
                        .split(this.settings.namesStringSplitChar);

            // Parse names, trimming and filtering out empty names.
            names = $.map(names, function(name) { return $.trim(name); });
            names = $.grep(names, function(name) { return name !== ""; });

            // Replace the processed names matching the format from server on error
            this.$textArea.val(names.join(this.settings.namesStringSplitChar));

            // Maximum names allowed
            if(names.length > this.settings.maxAllowedNames){
                returnObj.message.push( this.settings.errorMaxNamesReached );
                return returnObj;
            }
            // SaaS : Valid emails
            if (this.settings.names.validation === 'saas') { // SaaS mode
                // SaaS check for invalid emails : valid email RE should reference and correspond to documenation at fogbuz 60258
                var re = /^[^\s"(),:;<>@[\]]+@([-a-z0-9]+\.)+[a-z0-9]{2,}$/i;
                for ( var i = 0; i < names.length; ++i) {
                    var name = $.trim(names[i]);
                    if (!re.test(name) && name!=="") { // email test
                        hasInvalidEmail = true;
                        returnObj.message.push((this.settings.errorEmailSyntax.replace("${email}", names[i]))); // Expect "${email}" to be in the string to be replaced with a "name" email of user in saas
                    } else if( name!==""){ // is it a valid name?
                        hasValidName = true;
                    }
                }
                if(hasValidName && !hasInvalidEmail){
                    returnObj.isValid = true;
                }
            }else{
                returnObj.isValid = true;
            }
            return returnObj;
        },
        _setErrors: function() {
            if(this.settings.errors){
                this.$textArea.val(this.settings.errorsNames.join(this.settings.namesStringSplitChar)).addClass("error");
                this.$textArea.one("keyup", null, function(){
                    $(this).removeClass("error");
                });
                this._showSingleLineError(this.settings.errorMessage);
                this._showMultiLineError(this.settings.errors);
            }
        },
        _makeAddUserForm: function(){
            var namesLabelRow, namesRow, licenseRightsControlRow;

            var $DOMtoReturn = $('<div/>').attr({"class": "tab-addusers", "id": "addusers-holder"}) ;
            this.$form = $("<form>", {"id": "addusers", "method": "post", "action": this.settings.formAction});

            // Top row of information : $titleRow
            this.$titleRow = this._makeRow({"className": "title-row"});
            this.$spinner = $('<span>', {"class": "tab-img-spinner"});
            this.$titleRow.append(this.$spinner);
            this.$titleRow.append( this._makeMessage({"className": "label", "text": this.settings.title, "id": "addusers-title"}));

            this.$singleLineMessage = this._makeMessage({"className": "label", "id": "single-line-message"});
            this.$titleRow.append(  this.$singleLineMessage );
            this.$licenseValCol = this._makeLicenseValCol();

            // names : SaaS is emails Active Directory is AD names
            namesLabelRow = this._makeRow().append(this._makeLabel({"for": "names", "text": this.settings.names.label}));
            namesRow = this._makeNamesRow();

            // licenseRightsControl
            licenseRightsControlRow = this._makeRow();
            // Add to licenseRightControlRow
            licenseRightsControlRow.append(this._makeColumn({"className": "label", "css":{"width":95}}).append(this.settings.licenseLevel.label));
            licenseRightsControlRow.append(this.$licenseValCol);
            licenseRightsControlRow.append(this._makeColumn({"className": "label"}).append(this.settings.userRights.label));
            licenseRightsControlRow.append(this._makeUserRightsValCol());
            // all messages row
            this.$multiLineMessage = this._makeRow().attr("id","multiline-message");
            this.$multiLineMessage.hide();

            this.$form.append(namesLabelRow);
            this.$form.append(namesRow);
            this.$form.append(licenseRightsControlRow);
            this.$form.append(this._makeControlRow());
            this.$form.append(this._makeInput({"value":  this.settings.formAuthenticityToken, "name": "authenticity_token", "type": "hidden"}));

            $DOMtoReturn.append(this.$titleRow);
            $DOMtoReturn.append(this.$form);
            $DOMtoReturn.append(this.$multiLineMessage);

            this._disableSubmitInput();

            return $DOMtoReturn;
        },
        _makeLicenseValCol: function() {
            var licenseValCol = this._makeColumn();
            for ( var i = 0; i < this.settings.licenseLevel.options.length; ++i) {
                var d = this.settings.licenseLevel.options[i];
                licenseValCol.append(this._makeInput(d).prop("checked", d.checked));
                licenseValCol.append(this._makeLabel($.extend(d, {"for": d.id})));
            }
            return licenseValCol;
        },
        _makeUserRightsValCol: function() {
            var $userRightsValCol = this._makeColumn({className: "user-rights-values"});
            $userRightsValCol.append(
                this._makeInput(this.settings.userRights.selections.publish).prop("checked", this.settings.userRights.selections.publish.checked)
            );
            $userRightsValCol.append(this._makeLabel(this.settings.userRights.selections.publish));

            this.$adminCheckBox = this._makeInput(this.settings.userRights.selections.administrator).prop("checked", this.settings.userRights.selections.administrator.checked);
            $userRightsValCol.append(this.$adminCheckBox);
            $userRightsValCol.append(this._makeLabel(this.settings.userRights.selections.administrator));

            // If hasAdminOptions is true then set the click handlers
            if(this.settings.hasAdminOptions){

                this.$adminOptionsRow = this._makeRow().attr("id","admin-options-row");

                this.$adminTypeContent = this._makeInput( {"value": "content", "name": "admin_type", "type": "radio", "id": "admin_content"} )
                    .prop({"checked":this.settings.userRights.selections.administrator.admin_options.content.checked, "disabled":true});
                var adminTypeLabel = this._makeLabel({"value": "true", "name": "administrator", "type":  "radio", "id":  "administrator",
                    "text":   this.settings.userRights.selections.administrator.admin_options.content.label, "for":"admin_content"});
                this.$adminOptionsRow.append(this.$adminTypeContent);
                this.$adminOptionsRow.append(adminTypeLabel);

                this.$adminTypeSystem = this._makeInput( {"value":  "system", "name": "admin_type", "type": "radio", "id": "admin_system"} )
                    .prop({"checked":this.settings.userRights.selections.administrator.admin_options.system.checked, "disabled":true});
                this.$adminOptionsRow.append(this.$adminTypeSystem);
                this.$adminOptionsRow.append(this._makeLabel({"value": "true", "name": "administrator", "type": "radio", "id": "administrator",
                    "text": this.settings.userRights.selections.administrator.admin_options.system.label}));

                $userRightsValCol.append(this.$adminOptionsRow);
            }
            return $userRightsValCol;
        },
        _makeNamesRow: function(){
            var row = this._makeRow();
            this.$textArea = $('<textarea>').attr({"name": "names"});
            row.append(this.$textArea).append(
                this._makeLabel({'for': 'names', "text": this.settings.names.message, "class": "names-input-message"}));

            if(this.settings.availableUserQuota !== -1){
                this.$availableUserQuota = this._makeMessage({"text": "", "css": {"float": "right", "color": "#808080", "font-size": 11, "margin-right": 140}});
                row.append(this.$availableUserQuota);
            }
            return row;
        },
        _makeControlRow: function(){
            this.$cancelButton = this._makeInput({"className":"add-user-control", type: "button", name: "cancel", value: this.settings.control.cancel.label});
            this.$addUserButton =
                this._makeInput({"className":"add-user-control", type: "button", name: "add-user", value: this.settings.control.submit.label});
            this.$addUserButton.prop("disabled", true);
            var controlRow = this._makeRow({className: "control"}).append(this.$cancelButton).append(this.$addUserButton);
            return controlRow;
        },
        _makeRow: function(config) {
            var css = (config && config.css) ? config.css: {};
            var className = (config && config.className) ? config.className: "";
            return $('<div/>', {"class": "row " + className, "css": css});
        },
        _makeColumn: function(config) {
            var css = (config && config.css) ? config.css: {};
            var className = (config && config.className) ? "column " + config.className: "column";
            return $('<div/>', {"class": className, "css": css});
        },
        _makeInput: function(config) {
            var type = (config && config.type) ? config.type: "";
            var name = (config && config.name) ? config.name: "";
            var id = (config && config.id) ? config.id: "";
            var value = (config && config.value) ? config.value: "";
            var className = (config && config.className) ?  config.className: "";
            return $('<input>', {"type": type, "name": name, "id": id, "value": value}).attr({"class":className});
        },
        _makeLabel: function(config) {
            var forField = (config && config['for']) ? config['for']: "";
            var classField = (config && config['class']) ? config['class']: "";
            var text = (config && config.text) ? config.text: "";
            return $('<label>').attr({"for": forField, "class": classField}).text(text);
        },
        _makeMessage: function(config) {
            var className = (config && config.className) ? config.className: "";
            var css = (config && config.css) ? config.css: {};
            var id = (config && config.id) ? config.id: "";
            var text = (config && config.text) ? config.text: "";
            return $('<span/>', {"class": className, css: css, text: text, id: id});
        }

    };

    this.Tableau || (this.Tableau = {});
    this.Tableau.AddUsers = AddUsers;

}).call(this, jQuery);
