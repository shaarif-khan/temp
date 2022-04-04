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
/*global Ajax, jQuery, get_route_base, get_table_form_var, sessionTimeoutSuggestLogin */

// Tableau Public specific functions. View the return value at the bottom
// to see what's exposed outside of this scope
// @author myork


window.beaker = window.beaker || (function () {

  var
    savedShareDescriptions = {}, // currently saved value in wgapp db
    savedPermalinks = {}, // currently saved value in wgapp db
    tooltip; // the tooltip dom node used to explain the permalink

  tooltip = jQuery("<div></div>")
    .attr('id', 'tooltip')
    .hide()
    .appendTo("body");

  function storeSavedPermalinkAndDescription(instanceId) {
    if (savedShareDescriptions[instanceId] === undefined) {
      savedShareDescriptions[instanceId] = jQuery("#share_description_" + instanceId).val();
    }
    if (savedPermalinks[instanceId] === undefined) {
      savedPermalinks[instanceId] = jQuery("#article_permalink_" + instanceId).val();
    }
  }

  function setTabbedViews(wbName, shouldAllow, format, onSuccess) {
    var data, url;
    url = get_route_base() + "/tabs_allowed/workbooks/" + wbName + format;
    data = {
      allow: shouldAllow ? "1" : "0",
      authenticity_token: get_table_form_var('authenticity_token')
    };

    jQuery.ajax({
      type: 'POST',
      url: url,
      dataType: format.slice(1, format.length),
      data: data,
      success: onSuccess,
      statusCode: {
        401: sessionTimeoutSuggestLogin
      }
    });


  }

  // Called on the workbooks index page in thumbnail view when clicking the "Allow Tabbed Views" checkbox
  function onTabbedViewsCheckboxClick(elem, wbName) {
    var checkbox = jQuery(elem),
      busyImg = checkbox.next('img'),
      onSuccess,
      shouldAllow;

    // ignore clicks until the previous response has returned
    if (busyImg.css('display') === "inline") {
      return;
    }

    // hide/disable the checkbox and show the busy image
    checkbox.css('display', "none");
    checkbox.prop('disabled', true);
    busyImg.css('display', "inline");

    onSuccess = function (request) {
      // hide the busy image and show the checkbox
      checkbox.css('display', "inline");
      busyImg.css('display', "none");

      // enable the checkbox
      checkbox.prop('disabled', false);

      // update the check state
      checkbox.prop('checked', request.allowed);
    };

    shouldAllow = checkbox.prop('checked');
    setTabbedViews(wbName, shouldAllow, ".json", onSuccess);
  }

  // id: id of the element
  // key: string representation of the viewOptionKey to change
  // value: value of the view option
  // controller: which controller to hit, e.g. 'workbooks', 'project', etc,
  // format: ".json"
  function setViewOption(id, key, value, controller, format, authenticity_token, onSuccess) {
    var data, url;
    url = get_route_base() + "/view_option/" + controller + "/" + id + format;
    data = {
      value: value,
      key: key,
      authenticity_token: authenticity_token
    };

    jQuery.ajax({
      type: 'POST',
      url: url,
      dataType: format.slice(1, format.length),
      data: data,
      success: onSuccess,
      statusCode: {
        401: sessionTimeoutSuggestLogin
      }
    });
  }

  // Called on the workbooks index page in thumbnail view when clicking
  // any of the ViewOptions. For example:
  //    "Show share"
  //    "Show watermark"
  function onWorkbookBooleanViewOptionClick(elem, wbName, viewOptionKey) {
    var checkbox = jQuery(elem),
      busyImg = checkbox.next('img'),
      onSuccess,
      shouldAllow,
      value,
      authToken;

    // ignore clicks until the previous response has returned
    if (busyImg.css('display') === "inline") {
      return;
    }

    // hide/disable the checkbox and show the busy image
    checkbox.css('display', "none");
    checkbox.prop('disabled', true);
    busyImg.css('display', "inline");

    onSuccess = function (request) {
      // hide the busy image and show the checkbox
      checkbox.css('display', "inline");
      busyImg.css('display', "none");
      checkbox.prop('disabled', false);
      // update the check state
      checkbox.prop('checked', request.value === "true" || request.value === true);
    };

    value = jQuery(checkbox).is(':checked');
    authToken = get_table_form_var('authenticity_token');
    setViewOption(wbName, viewOptionKey, value, 'workbooks', ".json", authToken, onSuccess);
  }

  // Updates the accordion subtitle text with a summary of currently set view options
  // This currently only works for checkboxes. For any others, you will have to
  // modify this to work
  function updateProjectViewOptionsSummaryText() {
    var inputs, compiledString, strings;
    strings = {
      show_watermark: {
        'true': tab.wgappStrings.view_options_show_watermark_true,
        'false': tab.wgappStrings.view_options_show_watermark_false
      },
      show_share: {
        'true': tab.wgappStrings.view_options_show_share_true,
        'false': tab.wgappStrings.view_options_show_share_false
      },
      allow_data_access: {
        'true': tab.wgappStrings.view_options_allow_data_access_true,
        'false': tab.wgappStrings.view_options_allow_data_access_false
      }
    };

    inputs = jQuery('#viewOptionsForm input');
    compiledString = jQuery.map(inputs, function (input, idx) {
      if (input.type === 'checkbox') {
        return strings[input.name] && strings[input.name][input.checked];
      }
      return null;
      // TODO: add support for other input types here
    }).join(', ');
    jQuery('#viewOptionsForm .accordionTitleDetail').text(compiledString);
  }

  function onProjectBooleanViewOptionClick(elem, projectId, viewOptionKey) {
    var checkbox = jQuery(elem),
      busyImg = checkbox.next('img'),
      onSuccess,
      shouldAllow,
      value,
      authToken;

    // ignore clicks until the previous response has returned
    if (busyImg.css('display') === "inline") {
      return;
    }

    // hide/disable the checkbox and show the busy image
    checkbox.css('display', "none");
    checkbox.prop('disabled', true);
    busyImg.css('display', "inline");

    onSuccess = function (request) {
      // hide the busy image and show the checkbox
      checkbox.css('display', "inline");
      checkbox.prop('disabled', false);
      busyImg.css('display', "none");

      // update the check state
      checkbox.prop('checked', request.value === "true" || request.value === true);
      updateProjectViewOptionsSummaryText();
    };

    value = checkbox.prop('checked');
    authToken = jQuery("#viewOptionsForm [name='authenticity_token']").val();
    setViewOption(projectId, viewOptionKey, value, 'projects', ".json", authToken, onSuccess);
  }

  // Called in the workbooks index page in list view when clicking on the deny/allow data access image
  function onAllowDataAccessImageClick(elem, wbName) {
    var img = jQuery(elem),
      onSuccess,
      authToken = get_table_form_var('authenticity_token'),
      shouldAllow = img.hasClass('denied');

    // ignore clicks until the previous response has returned
    if (img.hasClass("busy")) {
      return;
    }

    img.addClass("busy");

    onSuccess = function (request) {
      img.removeClass('busy').toggleClass('denied', !shouldAllow);
    };

    setViewOption(wbName, 'allow_data_access', shouldAllow, 'workbooks', ".json", authToken, onSuccess);
  }

  // Called in the workbooks index page in list view when clicking on the tabbed views image
  function onTabbedViewsActionImageClick(elem, wbName, shouldAllow) {
    var img = jQuery(elem),
      onSuccess;

    // ignore clicks until the previous response has returned
    if (img.hasClass("busy")) {
      return;
    }

    img.addClass("busy");

    onSuccess = function (request) {
      img.parent().html(request);
    };

    setTabbedViews(wbName, shouldAllow, ".html", onSuccess);
  }

  function setShowToolbar(wbName, shouldAllow, format, onSuccess) {
    var data, url;

    url = get_route_base() + "/show_toolbar/workbooks/" + wbName + format;
    data = {
      allow: shouldAllow ? "1" : "0",
      authenticity_token: get_table_form_var('authenticity_token')
    };

    jQuery.ajax({
      type: 'POST',
      url: url,
      dataType: format.slice(1, format.length),
      data: data,
      success: onSuccess,
      statusCode: {
        401: sessionTimeoutSuggestLogin
      }
    });
  }


  // Called on the workbooks index page in thumbnail view when clicking the "Allow Tabbed Views" checkbox
  function onShowToolbarCheckboxClick(elem, wbName) {
    var checkbox = jQuery(elem),
      busyImg = checkbox.next('img'),
      onSuccess,
      shouldAllow;

    // ignore clicks until the previous response has returned
    if (busyImg.css('display') === "inline") {
      return;
    }

    // hide/disable the checkbox and show the busy image
    checkbox.css('display', "none");
    checkbox.prop('disabled', true);
    busyImg.css('display', "inline");

    onSuccess = function (request) {
      // hide the busy image and show the checkbox
      checkbox.css('display', "inline");
      busyImg.css('display', "none");

      // enable the checkbox
      checkbox.prop('disabled', false);

      // update the check state
      checkbox.prop('checked', request.allowed);
    };

    shouldAllow = checkbox.prop('checked');
    setShowToolbar(wbName, shouldAllow, ".json", onSuccess);
  }

  // Called in the workbooks index page in list view when clicking on the show toolbar image
  function onShowToolbarActionImageClick(elem, wbName, shouldAllow) {
    var img = jQuery(elem), onSuccess;

    // ignore clicks until the previous response has returned
    if (img.hasClass("busy")) {
      return;
    }

    img.addClass("busy");

    onSuccess = function (request) {
      img.parent().html(request);
    };

    setShowToolbar(wbName, shouldAllow, ".html", onSuccess);
  }

  function setPermalinkAndDescription(wbName, onSuccess, primaryContentUrl, shareDescription) {
    var format, url, data;

    format = ".json";
    url = "/stateful_settings/workbooks/" + wbName + format;
    data = {
      primary_content_url: primaryContentUrl,
      share_description: shareDescription,
      authenticity_token: get_table_form_var('authenticity_token')
    };

    jQuery.ajax({
      type: 'POST',
      url: url,
      accepts: 'application/json',
      dataType: 'json',
      data: data,
      success: onSuccess,
      statusCode: {
        401: sessionTimeoutSuggestLogin
      }
    });
  }

  function enableSave(instanceId) {
    jQuery('#save_button_' + instanceId).removeClass('disabled').addClass('enabled');
  }

  function enableCancel(instanceId) {
    jQuery('#cancel_button_' + instanceId).removeClass('disabled').addClass('enabled');
  }

  function disableSave(instanceId) {
    jQuery('#save_button_' + instanceId).removeClass('enabled').addClass('disabled');
  }

  function disableCancel(instanceId) {
    jQuery('#cancel_button_' + instanceId).removeClass('enabled').addClass('disabled');
  }

  function showSaveAndCancel(instanceId) {
    jQuery('#save_button_' + instanceId).fadeIn();
    jQuery('#cancel_button_' + instanceId).fadeIn();
    jQuery('#checkbox_container_' + instanceId).css("border-color", "#eee");
  }

  function hideSaveAndCancel(instanceId) {
    jQuery('#save_button_' + instanceId).fadeOut();
    jQuery('#cancel_button_' + instanceId).fadeOut();
    jQuery('#checkbox_container_' + instanceId).css("border-color", "#fff");
  }

  function getShareDescriptionCharLimit() {
    var limit = window.tabConfig.shareDescriptionCharLimit;
    return typeof limit === 'number' ? limit : 106;
  }

  function validateDescription(instanceId) {
    var charCounter = jQuery('#charcount_' + instanceId),
      descriptionElem = jQuery('#share_description_' + instanceId),
      description = descriptionElem.val(),
      numCharactersBeforeShow = 15,
      newCount,
      isValid = false;

    newCount = getShareDescriptionCharLimit() - description.length;

    if (newCount < 0) {
      charCounter.addClass('over_charcount');
      descriptionElem.addClass('error');
    } else {

      if (newCount > numCharactersBeforeShow) {
        newCount = ""; // don't display count until last few characters
      }
      charCounter.removeClass('over_charcount');
      descriptionElem.removeClass('error');
      isValid = true;
    }

    charCounter.html(newCount);
    return isValid;
  }

  function isValidUrl(url) {
    // regex stolen from second answer of SO post:
    // http://stackoverflow.com/questions/2723140/validating-url-with-jquery-without-the-validate-plugin
    var regex = /^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
    return url.length === 0 || regex.test(url);
  }

  // Pretty up a url
  function prettifyUrl(url) {
    var protocolRegex = /^(http|https):\/\//,
      protocolRegexNoCase = /^(http|https):\/\//i;

    url = url.trim();

    // have protocol? Then it's good.
    if (!url || protocolRegex.test(url)) {
      return url;
    }

    // have protocol with weird casing? Fix the casing
    if (protocolRegexNoCase.test(url)) {
      return url.slice(0, 7).toLowerCase() + url.slice(7);
    }

    // No protocol! Give it an http
    url = 'http://' + url;
    return url;
  }

  // validates the Permalink. Side effects: Prettifies the url
  // and displays/removes error message
  function validatePermalink(instanceId) {
    var elem = jQuery("#article_permalink_" + instanceId),
      message = jQuery("#permalink_error_" + instanceId),
      prettyUrl = prettifyUrl(elem.val());

    if (!isValidUrl(prettyUrl)) {
      elem.addClass("error");
      // don't use .show() because it mistakenly sets display: block when we want inline
      message.css('display', '');
      disableSave(instanceId);
      return false;
    }

    elem.val(prettyUrl);
    elem.removeClass("error");
    message.hide();
    return true;
  }

  // validate the inputs of description and permalink.
  // Lots of side effects here.
  function validateInput(instanceId) {
    // convoluted so we don't shortCircuit
    var validPermalink = validatePermalink(instanceId),
      valid = validateDescription(instanceId) && validPermalink;
    if (valid) {
      enableSave(instanceId);
    } else {
      disableSave(instanceId);
    }

    enableCancel(instanceId);
    showSaveAndCancel(instanceId);

    return valid;
  }

  function onCancelSaveClick(instanceId) {
    var revertDescription = savedShareDescriptions[instanceId],
      revertPermalink = savedPermalinks[instanceId];

    if (jQuery("#cancel_button_" + instanceId).hasClass('disabled')) {
      return;
    }

    jQuery("#share_description_" + instanceId).val(revertDescription || "");
    jQuery("#article_permalink_" + instanceId).val(revertPermalink || "");
    validateInput(instanceId);
    hideSaveAndCancel(instanceId);
  }

  // for the given element elem, execute updateFunc whenever the user changes the input.
  function executeOnTextInputChange(elem, updateFunc) {
    var interval = setInterval(updateFunc, 100); // if they use the mouse to cut or paste
    elem
      .keyup(updateFunc) // update when a new character is in
      .keydown(updateFunc) // for when a user holds a button or holds delete
      .change(updateFunc) // to catch anything else
      .blur(function () { // Kill the update functions until we get focus again
        elem
          .unbind('keyup')
          .unbind('keydown')
          .unbind('blur')
          .unbind('change');

        clearInterval(interval);
      });
  }

  function onFocusPermalink(instanceId) {
    var oldPermalink, elem, updateOnChange;

    elem = jQuery("#article_permalink_" + instanceId);
    oldPermalink = elem.val();

    storeSavedPermalinkAndDescription(instanceId);

    executeOnTextInputChange(elem, function () {
      var newPermalink = elem.val();

      if (newPermalink !== oldPermalink) {
        enableSave(instanceId);
        showSaveAndCancel(instanceId);
      }
    });

    // run validation on blur
    elem.blur(function () {
      var newPermalink = elem.val();
      elem.unbind('blur');
      if (newPermalink !== oldPermalink) {
        validateInput(instanceId);
      }
    });
  }

  function onFocusDescription(instanceId) {
    var oldDescription, updateCountIfChanged, interval, select, elem;

    elem = jQuery("#share_description_" + instanceId);

    oldDescription = elem.val();
    storeSavedPermalinkAndDescription(instanceId);

    executeOnTextInputChange(elem, function () {
      var newDescription = elem.val();

      if (newDescription !== oldDescription) {
        validateInput(instanceId);
      }
    });
  }

  function onSavePermalinkAndDescriptionClick(elem, instanceId, wbName) {
    var onSuccess,
      primaryContentUrl,
      shareDescription,
      shareDescElem,
      span = elem.down(),
      spinner = elem.down(1);

    primaryContentUrl = jQuery("#article_permalink_" + instanceId).val().trim();
    shareDescElem = jQuery('#share_description_' + instanceId);
    shareDescription = shareDescElem.val().trim();

    if (jQuery("#save_button_" + instanceId).hasClass("disabled") || !validateInput(instanceId)) {
      return;
    }

    spinner.style.display = 'inline';
    span.style.display = 'none';

    disableCancel(instanceId);

    onSuccess = function (request) {
      jQuery("#article_permalink_" + instanceId).val(request.primary_content_url || "");
      jQuery('#share_description_' + instanceId).val(request.share_description || "");

      savedShareDescriptions[instanceId] = request.share_description;
      savedPermalinks[instanceId] = request.primary_content_url;
      spinner.style.display = 'none';
      span.style.display = 'inline';
      enableCancel(instanceId);
      hideSaveAndCancel(instanceId);
    };

    setPermalinkAndDescription(wbName, onSuccess, primaryContentUrl, shareDescription);
  }

  function showTooltip(hoverNode, text) {
    var hoverOffset, tooltipPosition;

    hoverOffset = hoverNode.offset();

    tooltipPosition = {
      top: hoverOffset.top - tooltip.innerHeight() - hoverNode.innerHeight(),
      left: hoverOffset.left - tooltip.innerWidth() / 2 + hoverNode.innerWidth() / 2
    };
    hoverNode.mouseout(function () {
      hoverNode.unbind('mouseout');
      tooltip.hide();
    });

    tooltip.html(text).show().offset(tooltipPosition);
  }

  function onPermalinkHoverHelp(instanceId) {
    var hoverNode, text;
    hoverNode = jQuery("#permalink_help_" + instanceId);
    text = "This is the web address where you will embed the viz";
    showTooltip(hoverNode, text);
  }

  function onDescriptionHoverHelp(instanceId) {
    var hoverNode, text;
    hoverNode = jQuery("#description_help_" + instanceId);
    text = "Shown when people share on Facebook or Twitter";
    showTooltip(hoverNode, text);
  }

  // Expose only UI entry points.
  return {
    onAllowDataAccessImageClick: onAllowDataAccessImageClick,
    onTabbedViewsCheckboxClick: onTabbedViewsCheckboxClick,
    onSavePermalinkAndDescriptionClick: onSavePermalinkAndDescriptionClick,
    onTabbedViewsActionImageClick: onTabbedViewsActionImageClick,
    onShowToolbarCheckboxClick: onShowToolbarCheckboxClick,
    onShowToolbarActionImageClick: onShowToolbarActionImageClick,
    onFocusDescription: onFocusDescription,
    onFocusPermalink: onFocusPermalink,
    onCancelSaveClick: onCancelSaveClick,
    onPermalinkHoverHelp: onPermalinkHoverHelp,
    onDescriptionHoverHelp: onDescriptionHoverHelp,
    onWorkbookBooleanViewOptionClick: onWorkbookBooleanViewOptionClick,
    onProjectBooleanViewOptionClick: onProjectBooleanViewOptionClick,
    updateProjectViewOptionsSummaryText: updateProjectViewOptionsSummaryText
  };
}());

// Code specific to the admin view that modifies project rights. This gets its
// own namespace
(function (window, $) {

  // stores the state of the projectRights as the server knows them
  var savedProjectRights = {};




  // grabs the current state of the checkboxes, return a hash of {key: checked?}
  function getCurrentProjectRights() {
    var inputs = jQuery('#projectRightsForm input[type=checkbox]'),
      rights = {};
    inputs.each(function (idx, input) {
      rights[input.name] = input.checked;
    });
    return rights;
  }

  // Update the summary text displayed next to the accordion title
  function updateSummaryText(rights) {
    //TODO: Localize these strings!
    var strings, stringElements, compiledString;

    rights = rights || getCurrentProjectRights();
    strings = {
      show_watermark: {
        'true': tab.wgappStrings.view_option_rights_show_watermark_true,
        'false': tab.wgappStrings.view_option_rights_show_watermark_false
      },
      show_share: {
        'true': tab.wgappStrings.view_option_rights_show_share_true,
        'false': tab.wgappStrings.view_option_rights_show_share_false
      },
      allow_data_access: {
        'true': tab.wgappStrings.view_option_rights_allow_data_access_true,
        'false': tab.wgappStrings.view_option_rights_allow_data_access_false
      }
    };
    // TODO: Make this use map once we have jQuery 1.6+
    stringElements = [];
    jQuery.each(rights, function (key, checked) {
      if (strings[key]) {
        stringElements.push(strings[key][checked]);
      }
    });
    compiledString = stringElements.join(', ');
    jQuery('#projectRightsForm .accordionTitleDetail').text(compiledString);
  }

  // update theh checkboxes with state of new rights. Expects rights
  // to be hash of {key: bool}
  function updateProjectRightsCheckboxState(rights) {
    var inputs = jQuery('#projectRightsForm input[type=checkbox]');
    inputs.each(function (idx, input) {
      input.checked = rights[input.name];
    });
  }

  // initialize the page
  function init(newProjectRights) {
    savedProjectRights = newProjectRights;
    updateSummaryText(savedProjectRights);
    updateProjectRightsCheckboxState(savedProjectRights);
  }

  // Ajax call to set the rights on this project
  function set(id, button) {
    var
      rights = getCurrentProjectRights(),
      format, url, data, authToken, onSuccess,
      saveText, spinner;

    saveText = button.down();
    spinner = button.down(1);
    spinner.show();
    saveText.hide();

    format = ".json";
    url = "/view_option_rights/projects/" + id + format;
    authToken = jQuery("#projectRightsForm [name='authenticity_token']").val();

    data = {
      rights: rights,
      authenticity_token: authToken
    };

    // Update with return value
    onSuccess = function (request) {
      savedProjectRights = request.rights;
      spinner.hide();
      saveText.show();
      init(savedProjectRights);
    };

    jQuery.ajax({
      type: 'POST',
      url: url,
      accepts: 'application/json',
      dataType: 'json',
      data: data,
      success: onSuccess,
      statusCode: {
        401: sessionTimeoutSuggestLogin
      }
    });
  }

  // reset all settings to the saved settings
  function reset() {
    init(savedProjectRights);
  }

  // add UI entry points to namespace!
  window.beaker = window.beaker || {};
  window.beaker.projectRights = {
    init: init,
    reset: reset,
    set: set,
    updateSummaryText: updateSummaryText
  };
}(window, jQuery));
