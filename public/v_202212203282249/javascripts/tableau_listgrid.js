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
  
  /*
    ListGrid options:
      rowHeight: number
      cols: array
        key: string
        css?: object
      rows: array
        uri?: string
        target?: string
        tooltip?: string
        data: object
          <key>:object
            html: string

    The data object for each row should have a property for each column key.
    The value of each cell is: rows[rowIndex].data[cols[colIndex].key].html

    The css property of each column is applied to every cell in that column.
    This is typically used for width and padding.
  */

  var ListGrid = (function() {
    var $ = jQuery;
    var CSS = {
      fill: {
        'position': 'absolute',
        'top': 0,
        'bottom': 0,
        'left': 0,
        'right': 0
      },
      inlineBlockAlignTop: {
        'display': 'inline-block',
        'vertical-align': 'top'
      },
      translucent: {
        'background-color': 'white',
        'opacity': 0.01,
        'filter': 'alpha(opacity=01)'
      },
      textEllipsis: {
        'white-space': 'nowrap',
        'overflow': 'hidden',
        'text-overflow': 'ellipsis'
      }
    };
    function ListGrid(opts) {
      this.opts = opts;
      this.cols = this.opts.cols;
      this.rows = this.opts.rows;
      this.focusedRowIndex = null;
      this.$el = this._makeElement();
    }
    ListGrid.prototype._makeElement = function() {
      var $el = $('<div>')
        .addClass('tab-list-grid')
        .css('position', 'relative');
      this.$back = this._makeBackRows().css('z-index', '0').appendTo($el);
      this.$cols = this._makeCols().css('z-index', '1').appendTo($el);
      this.$fore = this._makeForeRows().css('z-index', '2').css(CSS.translucent).appendTo($el);
      this.$fore.on('mouseenter', 'a', this, this._rowEntered);
      this.$fore.on('mouseleave', 'a', this, this._rowLeft);
      this.$fore.on('click', 'a', this, this._rowClicked);
      return $el;
    };
    ListGrid.prototype.height = function() {
      return this.rows.length * this.opts.rowHeight;
    }
    ListGrid.prototype._makeBackRows = function() {
      var $backRows = $('<div>').css(CSS.fill);
      for (var r = 0, nr = this.rows.length; r < nr; ++r) {
        $('<div>')
          .css('height', this.opts.rowHeight + 'px')
          .appendTo($backRows);
      }
      return $backRows;
    };
    ListGrid.prototype._makeForeRows = function() {
      var $foreRows = $('<div>').css(CSS.fill);
      for (var r = 0, nr = this.rows.length; r < nr; ++r) {
        var row = this.rows[r];
        if (row.disabled) {
          $('<div>')
            .css({
              'display': 'block',
              'height': this.opts.rowHeight + 'px',
              'cursor': 'pointer'
            })
            .appendTo($foreRows);
        } else {
          var e = $('<a>')
            .attr('rowIndex', r)
            .css({
              'display': 'block',
              'height': this.opts.rowHeight + 'px',
              'cursor': 'pointer'
            })
            if (row.uri) { e.attr('href', row.uri) }
            if (row.target) { e.attr('target', row.target) }
            if (row.tooltip) { e.attr('title', row.tooltip) }

            e.appendTo($foreRows);
          }
      }
      return $foreRows;
    };
    ListGrid.prototype._makeCols = function() {
      var $cols = $('<div>').css({
        'position': 'relative',
        'white-space': 'nowrap'
      });
      if (this.opts.minWidth) {
        $cols.css('min-width', this.opts.minWidth + 'px');
      }
      for (var c = 0, nc = this.cols.length; c < nc; ++c) {
        var col = this.cols[c];
        this._makeCol(col).appendTo($cols);
      }
      return $cols;
    };
    ListGrid.prototype._makeCol = function(col) {
      var $col = $('<span>').css($.extend({}, CSS.inlineBlockAlignTop));
      for (var r = 0, nr = this.rows.length; r < nr; ++r) {
        var row = this.rows[r];
        this._makeCell(row.data[col.key], col.css || {}, row.disabled).appendTo($col);
      }
      return $col;
    };
    ListGrid.prototype._makeCell = function(cell, css, disabled) {
      var $cell = $('<div>')
        .css($.extend({
          'height': this.opts.rowHeight + 'px',
          'line-height': this.opts.rowHeight + 'px'
        }, CSS.textEllipsis, css));
      if (cell.html) {
        $cell.html(cell.html);
      }
      if (disabled) {
        $cell.css('color', '#aaa');
      }
      return $cell;
    };
    ListGrid.prototype._rowEntered = function(event) {
      event.data._focusRow(parseInt($(this).attr('rowIndex'), 10));
    };
    ListGrid.prototype._rowLeft = function(event) {
      event.data._blurRow(parseInt($(this).attr('rowIndex'), 10));
    };
    ListGrid.prototype._rowClicked = function(event) {
      event.data._triggerRowClicked(parseInt($(this).attr('rowIndex'), 10));
    };
    ListGrid.prototype._focusRow = function(rowIndex) {
      if (this.focusedRowIndex !== null) {
        this._blurRow(this.focusedRowIndex);
      }
      this.focusedRowIndex = rowIndex;
      this.$back.children().eq(rowIndex).css('background-color', '#ffb95e');
    };
    ListGrid.prototype._blurRow = function(rowIndex) {
      if (this.focusedRowIndex === rowIndex) {
        this.focusedRowIndex = null;
      }
      this.$back.children().eq(rowIndex).css('background-color', 'transparent');
    };
    ListGrid.prototype._triggerRowClicked = function(rowIndex) {
      this.$el.trigger("rowClicked", [rowIndex]);
    };
    ListGrid.prototype.activateFocusedRow = function() {
      if (this.focusedRowIndex !== null) {
        var focusedRow = this.$fore.children().eq(this.focusedRowIndex);
        window.location = focusedRow.attr('href');
      }
    };
    ListGrid.prototype.moveFocusedRow = function(delta) {
      var numRows = this.$back.children().length;
      var newFocusedRowIndex;
      if (this.focusedRowIndex !== null) {
        newFocusedRowIndex = this.focusedRowIndex + delta;
      } else {
        if (delta > 0) {
          newFocusedRowIndex = -1 + delta;
        } else if (delta < 0) {
          newFocusedRowIndex = numRows + delta;
        } else {
          return;
        }
      }
      if (newFocusedRowIndex < 0) {
        newFocusedRowIndex = 0;
      }
      if (newFocusedRowIndex >= numRows) {
        newFocusedRowIndex = numRows - 1;
      }
      this._focusRow(newFocusedRowIndex);
      
      this.focusedRowTop = this.focusedRowIndex * this.opts.rowHeight;
      this.focusedRowBottom = (this.focusedRowIndex + 1) * this.opts.rowHeight;
    }
    return ListGrid;
  })();

  Tableau.ListGrid = ListGrid;

})(Tableau || (Tableau = {}));