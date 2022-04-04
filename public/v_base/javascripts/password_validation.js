(function(window) {

  // Symbols list from OWASP:
  // https://www.owasp.org/index.php/Password_special_characters
  var REGEX_NUMBERS = /\d+/;
  var REGEX_LETTERS = /[a-zA-Z]+/;
  var REGEX_SYMBOLS = /[\s`~\!@#\$%\^\&\*\(\)\-_\=\+\[\{\}\]\\\|;:'",<.>\/\?]+/;

  var containsNumbers = function(password) {
    return REGEX_NUMBERS.test(password);
  };

  var containsLetters = function(password) {
    return REGEX_LETTERS.test(password);
  };

  var containsSymbols = function(password) {
    return REGEX_SYMBOLS.test(password);
  };

  var validatePasswordComplexity = function(password) {
    if (!password) {
      return false
    }
    var trimmedPassword = password.trim();
    if (!trimmedPassword || trimmedPassword.length < 8) {
      return false;
    }
    if (!containsNumbers(trimmedPassword)) {
      return false;
    }
    if (!containsLetters(trimmedPassword)) {
      return false;
    }
    if (!containsSymbols(trimmedPassword)) {
      return false;
    }
    return true;
  };

  window.validatePasswordComplexity = validatePasswordComplexity;
})(window);