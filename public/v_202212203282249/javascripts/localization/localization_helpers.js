(function($, Globalize) {

  function getGlobalizeLocaleFromTableauLocale(locale) {
    switch (locale.toLowerCase()) {
      // German
      case 'de-de':
        return 'de';
      // English (Great British)
      case 'en-gb':
        return 'en-GB';
      // English
      case 'en-us':
        return 'en';
      // Spanish
      case 'es-es':
        return 'es';
      // French
      case 'fr-fr':
        return 'fr';
      // Italian
      case 'it-it':
        return 'it';
      // Japanese
      case 'ja-jp':
        return 'ja';
      // Korean
      case 'ko-kr':
        return 'ko';
      // Portuguese
      case 'pt-br':
        return 'pt';
      // Chinese
      case 'zh-cn':
        return 'zh-Hans';
      // Chinese (Taiwan)
      case 'zh-tw':
        return 'zh-Hant';
      default:
        return 'en';
    }
  }

  function getLocaleFromQueryString() {
    var searchString = window.location.search;
    if (!searchString || searchString.indexOf('?') != 0) {
      // no valid search string, default to English
      return 'en';
    }
    // remove the '?'
    var queryString = searchString.substring(1);
    var params = {}, queries, temp;

    // Split into key/value pairs
    queries = queryString.split("&");

    // Convert the array of strings into an object
    var length = queries.length;
    for (var i = 0; i < length; i++) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
    }

    return getGlobalizeLocaleFromTableauLocale(params['language']);
  }

  function doTextReplacement() {
    var elementsToBindText = $('[data-translate]').each(function() {
      var elem = $(this);
      var key = elem.attr('data-translate');

      var translatedString = translate(key);
      elem.text(translatedString);
    });

    var elementsToBindHtml = $('[data-translate-html]').each(function() {
      var elem = $(this);
      var key = elem.attr('data-translate-html');

      var translatedString = translate(key);
      elem.html(translatedString);
    });

    var elementsToBindPlaceholder = $('[data-translate-placeholder]').each(function() {
      var elem = $(this);
      var key = elem.attr('data-translate-placeholder');

      var translatedString = translate(key);
      elem.attr('placeholder', translatedString);
    });
  }

  function translate(key) {
    var globalizeInstance = Globalize(window.language);

    var messageFormatter = globalizeInstance.messageFormatter(key);
    if (!messageFormatter) {
      messageFormatter = Globalize('en').messageFormatter(key);
    }
    var translationValues = {};
    return messageFormatter(translationValues);
  }

  window.language = getLocaleFromQueryString();
  window.translate = translate;

  doTextReplacement();

})(jQuery, Globalize);