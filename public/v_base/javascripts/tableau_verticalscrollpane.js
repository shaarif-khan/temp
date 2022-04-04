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
(function(Tableau) {

  var TOUCH_SUPPORTED = 'ontouchstart' in window;

  /*
    VerticalScrollPanel options:
      $content: jQuery element
      minContentHeight: number
      maxViewportHeight: number
  */

  var VerticalScrollPane = (function() {
    var $ = jQuery;
    function VerticalScrollPane(opts) {
      this.opts = opts;
      this.$el = this._makeElement();
      this._update();
    }
    VerticalScrollPane.minThumbHeight = 10;
    VerticalScrollPane.prototype._makeElement = function() {
      var $el = $('<div>')
        .addClass('tab-vertical-scroll-pane')
        .css({
          'position': 'relative',
          'overflow': 'hidden',
          'width': '100%'
        });
      this.$viewport = $('<div>')
        .addClass('tab-vertical-scroll-pane-viewport')
        .css({
          'position': 'relative',
          'overflow': 'hidden'
        })
        .appendTo($el);
      if (this.opts.maxViewportHeight) {
        this.$viewport.css('max-height', this.opts.maxViewportHeight);
      }
      this.$viewport.append(this.opts.$content);

      $(this.opts.$content).bind('domChanged', $.proxy(function(e) {
        e.stopPropagation();
        this._update();
      }, this));

      if (TOUCH_SUPPORTED) {
        this.iScroll = new iScroll(this.$viewport.get(0), { hScroll: false, hideScrollbar: false });
      }

      return $el;
    };
    VerticalScrollPane.prototype._update = function() {
      this._reset();

      this.contentHeight = Math.max(this.opts.$content.height(), this.opts.minContentHeight);
      this.viewportHeight = Math.min(this.contentHeight, this.opts.maxViewportHeight);

      if (this.contentHeight > this.viewportHeight) {
        if (!TOUCH_SUPPORTED) {
          this._makeScrollControls();
        }
      }

      if (this.iScroll) {
        setTimeout($.proxy(function() { this.iScroll.refresh(); }, this), 0);
      }
    };
    VerticalScrollPane.prototype._reset = function() {
      this.$viewport.scrollTop(0);
      this.$el.off();
      this.$viewport.css('padding-right', 0);
      if (this.$bar) {
        this.$bar.off();
        this.$bar.remove();
        this.$bar = null;
      }
      if (this.$thumb) {
        this.$thumb.off();
        this.$thumb.remove();
        this.$thumb = null;
      }
    };
    VerticalScrollPane.prototype._makeScrollControls = function() {
      this.scrollMax = this.contentHeight - this.viewportHeight;
      this.barHeight = this.viewportHeight - 2;
      this.thumbHeight = Math.max(VerticalScrollPane.minThumbHeight, Math.round(this.barHeight * this.viewportHeight / this.contentHeight));
      this.thumbMax = this.barHeight - this.thumbHeight;

      this.$viewport.css('padding-right', '10px');
      this.$bar = $('<div>')
        .css({
          'position': 'absolute',
          'top': '1px',
          'bottom': '1px',
          'right': '1px',
          'width': '8px',
          'z-index': 10
        })
        .appendTo(this.$el);
      this.$thumb = $('<div>')
        .css({
          'position': 'absolute',
          'left': 0,
          'right': 0,
          'width': '8px',
          'height': this.thumbHeight + 'px',
          'background-color': '#cccccc',
          'cursor': 'pointer'
        })
        .appendTo(this.$bar);

      this.scrollTop = 0;
      this.thumbTop = 0;
      this._updateScrollPosition();

      this.$el.on('mousewheel', $.proxy(this._handleWheel, this));
      this.$bar.on('mousewheel', $.proxy(this._handleWheel, this));
      this.$bar.on('click', false);
      this.$thumb.on('mousedown', $.proxy(this._beginThumbDrag, this));
    };
    VerticalScrollPane.prototype._updateScrollPosition = function() {
      this.$viewport.scrollTop(this.scrollTop);
      this.$thumb.css('top', this.thumbTop + 'px');
    };
    VerticalScrollPane.prototype._handleWheel = function(event, delta) {
      this._setScrollTop(this.$viewport.scrollTop() - delta * 10);
      return false;
    };
    VerticalScrollPane.prototype._setScrollTop = function(newScrollTop) {
      this.scrollTop = Math.min(Math.max(newScrollTop, 0), this.scrollMax);
      this.thumbTop = Math.round(this.thumbMax * this.scrollTop / this.scrollMax);
      this._updateScrollPosition();
    };
    VerticalScrollPane.prototype._beginThumbDrag = function(event) {
      this.thumbStart = this.thumbTop;
      this.dragStartY = event.pageY;
      $('body')
        .on('mousemove.verticalscrollpane', $.proxy(this._moveThumb, this))
        .on('mouseup.verticalscrollpane', $.proxy(this._endThumbDrag, this));
      return false;
    };
    VerticalScrollPane.prototype._moveThumb = function(event) {
      this.thumbTop = Math.min(Math.max(this.thumbStart + (event.pageY - this.dragStartY), 0), this.thumbMax);
      this.scrollTop = Math.round(this.scrollMax * this.thumbTop / this.thumbMax);
      this._updateScrollPosition();
      return false;
    };
    VerticalScrollPane.prototype._endThumbDrag = function(event) {
      $('body').off('.verticalscrollpane');
      return false;
    };
    VerticalScrollPane.prototype.scrollIntoView = function(top, bottom) {
      var scrollBottom = this.scrollTop + this.viewportHeight;
      if (bottom > scrollBottom) {
        this._setScrollTop(bottom - this.viewportHeight);
      } else if (top < this.scrollTop) {
        this._setScrollTop(top);
      }
    };
    return VerticalScrollPane;
  })();

  Tableau.VerticalScrollPane = VerticalScrollPane;

})(Tableau || (Tableau = {}));
