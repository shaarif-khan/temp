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

/*
  NOTE-jrockwood-2011-11-18!!!!!!!!!!!!!!!!!!!!!!!!!!
  There are two copies of this file: public\javascripts and public\v_base\javascripts. You need to keep them in sync.
  BUGZID 43658 tracks removing the duplication.
*/

(function () {
  // Based on jQuery's implementation, but stripped way down to just what we need.
  function isIE7() {
    var match = /(msie) ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [],
      browserMatch = { browser: match[1] || "", version: match[2] || "0" };

    return browserMatch.browser === "msie" && parseInt(browserMatch.version, 10) === 7;
  }

  function markBodyForIE7() {
    var body = document.getElementsByTagName("body")[0];
    if (!body) { return; }
    body.className = "ie7 " + body.className;
  }

  if (isIE7()) {
    var oldOnLoad = window.onload;
    if (oldOnLoad) {
      window.onload = function () {
        oldOnLoad();
        markBodyForIE7();
      };
    } else {
      window.onload = markBodyForIE7;
    }
  }
}());
