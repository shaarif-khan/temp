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

  var Popup = function(contents) {
    this.glass = $("<div>").addClass("tab-popup-glass");
    this.popup = $("<div>").addClass("tab-popup").append(contents);
  }
  Popup.prototype = {
    show: function(styles) {
      var body = $("body");
      this.glass.appendTo(body);
      this.glass.bind("click", this, function(event) {
        event.data.hide();
      });
      this.popup.css(styles);
      this.popup.appendTo(body);
    },
    hide: function() {
      this.popup.trigger("hidden");
      this.glass.remove();
      this.popup.remove();
    }
  }

  this.Tableau || (this.Tableau = {});
  this.Tableau.Popup = Popup; 

}).call(this, jQuery);