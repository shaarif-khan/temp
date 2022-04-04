function addInlineError(errorMessage, classSelector) {
  var errorMarkup = "<div class='inline-error'><label class='error inline-error'> " + errorMessage + " </label></div>";
  jQuery(errorMarkup).appendTo(classSelector);
}

/**
 * Utility function: return a new datestamp in string to append to an AJAX
 * request URI for cache-busting. This is especially important for the public
 * server author auth endpoint.
 * @return {string} unix timestamp
 */
function getCacheBuster() {
  return '?no_cache=' + new Date().getTime().toString();
}

function insertScriptEl(scriptUri) {
  var tag = document.createElement('script'),
      firstScriptTag = document.getElementsByTagName('script')[0];

  tag.src = scriptUri;
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function setPendingStatus(pending) {
  if(pending) {
    jQuery("div.inline-error").remove();
    jQuery("input").attr("disabled", "true");
    jQuery("body").add("input").add("a").addClass("wait");
    jQuery("h3.modal-login__subheading").removeClass("hidden");
  } else {
    document.body.style.cursor = "";
    jQuery("input").removeAttr("disabled").removeClass("error");
    jQuery("body").add("input").add("a").removeClass("wait");
  }
}

function getXMLErrorMessage(responseData) {
  return jQuery(responseData).find("error").find("message").text();
}

function handleXMLErrorMessage(errorMessage) {
  if(errorMessage.indexOf("not verified your email address") != -1) {
    addInlineError(translate("MODAL_ERROR_CONFIRMATION_LINK_NOT_CLICKED"), ".form-section.form-password");
  } else {
    addInlineError(errorMessage, ".form-section.form-password");
  }
}

function setupUrlParameters() {
  var match,
      pl     = /\+/g,  // Regex for replacing addition symbol with a space
      search = /([^&=]+)=?([^&]*)/g,
      decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
      hash  = window.location.hash.substring(1),
      query = window.location.search.substring(1);

  var hashParams = {};
  var queryParams = {};
  while (match = search.exec(hash)) {
    hashParams[decode(match[1])] = decode(match[2]);
  }
  while (match = search.exec(query)) {
    queryParams[decode(match[1])] = decode(match[2]);
  }
  window.hashParams = hashParams;
  window.queryParams = queryParams;
}

function submitUserPassForm() {
  var username = document.forms['loginForm'].elements['username'].value;
  var password = document.forms['loginForm'].elements['password'].value;
  doUserPassLogin(username, password);
  return false;
}

function doUserPassLogin(username, password) {
  setPendingStatus(true);
  window.username = username;
  window.password = password;
  var authInfoData = {
    datetime: new Date().toISOString(),
    format: "xml",
    language: "en",
    full_keychain_key: queryParams["full_keychain_key"],
    api: "0.31"
  };
  jQuery.ajax({
    type: "GET",
    url: "/manual/auth",
    data: authInfoData
  }).done(authInfoRetrieved)
    .fail(function(data) {
      loginFailed(data, false);
  });
}

function authInfoRetrieved(responseData) {
  var modulus = responseData.getElementsByTagName("modulus")[0].childNodes[0].nodeValue;
  var exponent = responseData.getElementsByTagName("exponent")[0].childNodes[0].nodeValue;
  var authenticityToken = responseData.getElementsByTagName("authenticity_token")[0].childNodes[0].nodeValue;
  var key = {
    e: exponent,
    n: modulus
  };
  var loginData = {
    username: window.username,
    crypted: rsa.encrypt(window.password, key),
    datetime: new Date().toISOString(),
    authenticity_token: authenticityToken,
    full_keychain_key: queryParams['full_keychain_key'],
    format: "xml",
    cacheBuster: new Date().toISOString()
  };
  jQuery.ajax({
    type: "POST",
    url: "/vizportal/api/clientxml/auth/login",
    data: loginData
  }).done(loginFinished)
    .fail(function(data) {
    loginFailed(data, false);
  });
}

function loginFinished(responseData, textStatus, jqXHR){
  setPendingStatus(false);
  // a successful response can be one of two types: json for a facebook login, or xml for a standard username/pass login
  // the response will have a data property in the first case, and a documentElement property in the second
  if(responseData && ((responseData.result && responseData.result.server)
    || (responseData.documentElement && responseData.documentElement.tagName === "successful_login"))) {

    var path = "";
    if (queryParams['full_keychain_key']) {
      path = "?full_keychain_key=" + queryParams['full_keychain_key']  +"&datetime=" + new Date().toISOString();
    }

    window.location.href ="/vizportal/api/clientxml/auth/logininfo" + path;
    return;
  }
  //otherwise we have an unsuccessful response despite the 200 status code
  var xmlErrorMessage = getXMLErrorMessage(responseData);
  if(xmlErrorMessage && xmlErrorMessage.length > 0) {
    handleXMLErrorMessage(xmlErrorMessage);
  }
  else {
    loginFailed({status:401}, true);
  }
}

function loginFailed(responseData, isRetriable) {
  setPendingStatus(false);
  switch(responseData.status) {
    case 302:
    case 401:
    case 404:
      addInlineError(translate("MODAL_ERROR_LOGIN_FAILED_INVALID"),".form-section.form-password");
      jQuery("#username").addClass("error");
      jQuery("#password").addClass("error");
      break;
    case 500:
      addInlineError(translate("MODAL_ERROR_SERVER_COMMUNICATION_FAILED"), ".form-section.form-password");
      break;
  }
}

function creationFailed(responseData, textStatus, errorThrown) {
  setPendingStatus(false);
  if(responseData && responseData.status) {
    switch(responseData.status) {
      case 401:
        addInlineError(translate("MODAL_ERROR_PROFILE_CREATION_FAILED_INVALID_CREDENTIALS"), ".form-section.form-password");
        break;
      case 400:
        if(responseData.responseText) {
          if(responseData.responseText.indexOf("email permission") != -1) {
            addInlineError(translate("MODAL_ERROR_PROFILE_CREATION_FAILED_INVALID_EMAIL"), ".form-section.form-facebook");
            jQuery("h3.modal-login__subheading").addClass("hidden");
            jQuery("label.error").addClass("larger-error");
            break;
          } else if(responseData.responseText.indexOf("email is not available") != -1) {
            addInlineError(translate("MODAL_ERROR_PROFILE_CREATION_FAILED_EMAIL_EXISTS"), ".form-section.form-email");
            addInlineError(translate("MODAL_ERROR_PROFILE_CREATION_FAILED_EMAIL_EXISTS_PASSWORD_PROMPT"), ".form-section.form-password");
            var usedEmail = responseData.responseText.match("email is not available: ([^\\\\\"]+)")[1];
            jQuery('.modal-login #username').val(usedEmail);
            jQuery("#username").addClass("error");
            jQuery("#password").addClass("error");
            break;
          }
        }
      default:
        addInlineError(translate("MODAL_ERROR_SERVER_COMMUNICATION_FAILED"), ".form-section.form-password");
        break;
    }
  }
}