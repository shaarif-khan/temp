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
  var multiselectActionsController = {
    hoverTimeoutId: 0,
    $currentDropdown: undefined,

    hoverTimeoutCallback: function() {
      var self = multiselectActionsController;
      if (typeof self.$currentDropdown !== 'undefined') {
        self.slideUp(self.$currentDropdown)
      }
    },

    slideUp: function($dropDown) {
      var self = this;
      $dropDown.find("ul.actionSubnav")
        .fadeOut(0, function() {
          jQuery(this).closest('.actionNav')
            .find('.expandBtn') });
      // clear reset
      multiselectActionsControllerReset = null;
    },

    slideDown: function($dropDown) {
      if (typeof(multiselectActionsControllerReset) === 'function') {
        // reset existing dropdown
        multiselectActionsControllerReset();
        multiselectActionsControllerReset = null;
      }
      var self = this;
      $dropDown.find("ul.actionSubnav")
        .fadeIn('fast', function() {
          jQuery(this).closest('.actionNav')
            .find('.expandBtn') });

      // add reset method
      multiselectActionsControllerReset = function(){ self.resetDropdowns() };
      return $dropDown;
    },

    resetDropdowns: function() {
      if (this.$currentDropdown == null) { return; }
      this.$currentDropdown.find("ul.actionSubnav:visible").hide();
    },

    openDropdown: function(clicked, event) {
      var self = multiselectActionsController;
      clearTimeout(self.hoverTimeoutId);
      /* drilldown the event a little more to see what was really clicked */
      var menuClicked = jQuery(event.target).is('.actionNavTitle,.actionNavContainer,.expandBtn');
      var $clicked = jQuery(clicked);
      var same = false;
      if(typeof self.$currentDropdown !== 'undefined') {
        same = self.$currentDropdown.get(0) == $clicked.get(0);
      }
      if (menuClicked) {
        if (same && $clicked.find("ul.actionSubnav").is(":visible")) {
          self.slideUp(self.$currentDropdown);
        } else {
          // BUG 42588 - If this control is contained within a parent that
          // has overflow == auto, we need to be careful about the menu
          // positioning as it will get clipped if we're at the bottom of
          // the scrolling content.
          var $overflowParent = $clicked.parents().filter(function(){
            return jQuery(this).css('overflow') == 'auto'
          }).first();

          if ($overflowParent.length > 0) {
            // we're inside a parent that is scrolling, make sure that we wont get clipped
            var $menu = $clicked.find("ul.actionSubnav");
            var parentBottom = $overflowParent.outerHeight() + $overflowParent.offset().top;
            var menuBottom = $clicked.offset().top + $clicked.outerHeight() + $menu.outerHeight();
            if (menuBottom > parentBottom) {
              $menu.addClass('above');
            } else {
              $menu.removeClass('above');
            }
          }

          self.$currentDropdown = self.slideDown($clicked);
        }
      } else {
        /* an action was clicked, so hide the menu */
        self.slideUp(self.$currentDropdown);
        clearTimeout(self.hoverTimeoutId);
      }
    },

    attachHandlers: function(selector) {
      var self = this, parent = jQuery(selector);
      parent.find("ul.actionNav").click(function (event) {
        self.openDropdown(this, event);
      });
      parent.find("ul.actionNav").hover( function () { clearTimeout(self.hoverTimeoutId) },
        function () { self.hoverTimeoutId = setTimeout(self.hoverTimeoutCallback, 500); })
      parent.find("ul.ac_results li").hover(function() { jQuery(this).addClass('ac_over'); },
        function() { jQuery(this).removeClass('ac_over'); });
    }
  }

  this.Tableau || (this.Tableau = {});
  this.Tableau.MultiSelect = multiselectActionsController; 

}).call(this, jQuery);
