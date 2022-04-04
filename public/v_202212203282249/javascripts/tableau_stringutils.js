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

  var StringUtils = {};
  StringUtils.escapeForAttr = function(s) {
    return s.replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
  };
  StringUtils.escapeForElem = function(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };
  StringUtils.escapeSpaces = function(s) {
    return s.replace(/\s/g, '&nbsp;');
  };
  StringUtils.escapeSpacesAndForElem = function(s) {
    return StringUtils.escapeSpaces(StringUtils.escapeForElem(s));
  };
  

  this.Tableau || (this.Tableau = {});
  this.Tableau.StringUtils = StringUtils;

}).call(this, jQuery);