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

  var TOUCH_SUPPORTED = 'ontouchstart' in window;

  var FiltersPanel = function(filters, filtersHeaderLabel, clearAllButtonLabel) {
    this.filtersHeaderLabel = filtersHeaderLabel;
    this.clearAllButtonLabel = clearAllButtonLabel;
    this.$el = $("<div>")
      .addClass("tab-sidebar-filters-panel");
    if (filters.length > 0) {
      this._makeFilters(filters);
    }
  };
  FiltersPanel.prototype = {
    clearAll: function() {
      for (var i = 0, length = this.filters.length; i < length; ++i) {
        this.filters[i].clear();
      }
    },
    _makeFilters: function(filters) {
      var filter;
      var visibleFilters = 0;
      var clearableFilters = 0;
      this.filters = [];
      for (var i = 0, length = filters.length; i < length; ++i) {
        filter = this._makeFilter(filters[i]);
        if (filter) {
          this.filters.push(filter);
          this.$el.append(filter.$el);
          if (filter.visible) {
            ++visibleFilters;
            filter.$el.on("filterChanged", $.proxy(this._filterChanged, this));
          }
          if (filter.on) {
            ++clearableFilters;
          }
        }
      }
      if (visibleFilters > 0) {
        this._makeHeader(clearableFilters > 0).prependTo(this.$el);
      }
    },
    _makeFilter: function(filter) {
      switch (filter.type) {
        case "search":
          return new SearchFilterPanel(filter);
        case "list":
          return new ListFilterPanel(filter);
        case "date":
          return new DateFilterPanel(filter);
        case "toggle":
          return new ToggleFilterPanel(filter);
        case "hidden":
          return new HiddenFilter(filter);
      }
      return null;
    },
    _makeHeader: function(showClearButton) {
      var $filtersHeader = $("<div>")
        .addClass("tab-sidebar-filters-panel-header")
        .text(this.filtersHeaderLabel);
      if (showClearButton) {
        this._makeClearAllButton().appendTo($filtersHeader);
      }
      return $filtersHeader;
    },
    _makeClearAllButton: function() {
      return $("<div>")
        .addClass("tab-sidebar-filters-panel-clear-all")
        .on("click", $.proxy(this._clearAll, this))
          .append($("<span>")
            .addClass("tab-sidebar-filters-panel-clear-all-label")
            .text(this.clearAllButtonLabel))
          .append($("<span>")
            .addClass("tab-sidebar-filters-panel-clear-all-x")
            .text("\u00d7")); // MULTIPLICATION SIGN
    },
    _clearAll: function(event) {
      for (var i = 0, length = this.filters.length; i < length; ++i) {
        this.filters[i].clear();
      }
      this._filterChanged();
      return false;
    },
    _filterChanged: function() {
      this.$el.trigger("filterChanged");
    }
  };

  var SearchFilterPanel = function(filter) {
    this.filter = filter;
    this.visible = true;
    this.on = filter.value !== "";

    this.$el = $("<div>")
      .addClass("tab-sidebar-search-panel");
    var $box = $("<span>")
      .addClass("tab-sidebar-search-box")
      .appendTo(this.$el);
    this.$input = $("<input type='text'>")
      .addClass("tab-sidebar-search-input")
      .val(this.filter.value)
      .appendTo($box);
    this.$placeholder = $("<div>")
      .addClass("tab-sidebar-search-placeholder")
      .css("display", this.filter.value === "" ? "block" : "none")
      .text(this.filter.placeholder)
      .appendTo($box);
    this.$searchButton = $("<a>")
      .addClass("tab-anchor-reset")
      .addClass("tab-sidebar-search-submit-button")
      .appendTo($box);
    this.$clearButton = $("<a>")
      .addClass("tab-anchor-reset")
      .addClass("tab-sidebar-search-clear-button")
      .text("\u00d7")  // MULTIPLICATION SIGN
      .appendTo($box);
    this.$hidden = $("<input type='hidden'>")
      .attr("name", this.filter.name)
      .val(this.filter.value)
      .prop("disabled", this.filter.value === "")
      .appendTo(this.$el);
    if (this.filter.global) {
      this.$globalHidden = $("<input type='hidden'>")
        .attr("name", "global")
        .val(this.filter.global)
        .prop("disabled", this.filter.value === "")
        .appendTo(this.$el);
    }

    this.$placeholder.on("click", $.proxy(this._placeholderClick, this));
    this.$input.on("click", $.proxy(this.inputClick, this));
    this.$input.on("keyup", $.proxy(this._inputKeyup, this));
    this.$input.on("keypress", $.proxy(this._inputKeypress, this));
    this.$input.on("blur", $.proxy(this._inputBlur, this));
    this.$searchButton.on("click", $.proxy(this._submit, this));
    this.$clearButton.on("click", $.proxy(this._clear, this));

    this._setClearButtonShown(this.filter.value !== "");

  };
  SearchFilterPanel.prototype = {
    clear: function() {
      this._setClearButtonShown(false);
      this.$input.val("");
      this.$hidden.val("").prop("disabled", true);
      if (this.$globalHidde) {
        this.$globalHidden.prop("disabled", true);
      }
    },
    _placeholderClick: function(event) {
      this.$placeholder.css("display", "none");
      this.$input.focus();
    },
    _inputClick: function(event) {
      this.$input.select();
    },
    _inputKeyup: function(event) {
      if (event.which === 13) { // 13 is Enter
        this._submit();
      } else {
        var value = this.$input.val();
        this._setClearButtonShown(value !== "");
      }
    },
    _inputKeypress: function(event) {
      if (event.which === 13) { // 13 is Enter
        return false;
      }
    },
    _inputBlur: function(event) {
      var val = this.$input.val();
      if (val.length === 0) {
        this.$placeholder.css("display", "block");
      }
    },
    _submit: function() {
      var value = this.$input.val();
      this.$hidden.val(value).prop("disabled", value === "");
      if (this.$globalHidden) {
        this.$globalHidden.prop("disabled", value === "");
      }
      this.$el.trigger("filterChanged");
      return false;
    },
    _clear: function() {
      this._setClearButtonShown(false);
      this.$input.val("");
      this.$placeholder.css("display", "block");
      if (this.filter.value !== "") {
        this._submit();
      }
      return false;
    },
    _setClearButtonShown: function(shown) {
      this.$clearButton.css("display", shown ? "block" : "none");
    }
  };

  var SectionsPanel = function(sections, currentSection) {
    this.$el = $("<div>")
      .addClass("tab-sidebar-sections-panel");
    for (var i = 0, length = sections.length; i < length; ++i) {
      this.$el.append(this._makeSectionButton(i, sections[i], currentSection));
    }
  };
  SectionsPanel.prototype = {
    _makeSectionButton: function(i, section, currentSection) {
      return $("<a>")
        .addClass("tab-anchor-reset")
        .addClass("tab-sidebar-section-button")
        .attr('href', section.uri)
        .toggleClass("tab-current", section.name === currentSection)
        .text(section.label)
        .on("click", null, i, $.proxy(this._sectionSelected, this));
    },
    _sectionSelected: function(event) {
      this.$el.trigger("sectionSelected", [event.data]);
      return false;
    }
  };

  var SubsectionsPanel = function(subsections, currentSubsection) {
    this.$el = $("<div>")
      .addClass("tab-sidebar-subsections-panel");
    for (var i = 0, length = subsections.length; i < length; ++i) {
      this.$el.append(this._makeSubsectionButton(i, subsections[i], currentSubsection));
    }
  };
  SubsectionsPanel.prototype = {
    _makeSubsectionButton: function(i, subsection, currentSubsection) {
      return $("<a>")
        .addClass("tab-anchor-reset")
        .addClass("tab-sidebar-subsection-button")
        .attr('href', subsection.uri)
        .toggleClass("tab-current", subsection.name === currentSubsection)
        .append($("<span>")
          .addClass("tab-sidebar-subsection-button-bar"))
        .append($("<span>")
          .addClass("tab-sidebar-subsection-button-label")
          .text(subsection.label))
        .append($("<span>")
          .addClass("tab-sidebar-subsection-button-count")
          .text(subsection.count))
        .on("click", null, i, $.proxy(this._subsectionSelected, this));
    },
    _subsectionSelected: function(event) {
      this.$el.trigger("subsectionSelected", [event.data]);
      return false;
    }
  };

  var FilterButton = function() {
    this.$el = $("<div>")
      .addClass("tab-sidebar-filter-button");
    this.$label = $("<a>")
      .addClass("tab-anchor-reset")
      .addClass("tab-sidebar-filter-button-label")
      .appendTo(this.$el);
    this.$clear = $("<a>")
      .addClass("tab-anchor-reset")
      .addClass("tab-sidebar-filter-button-clear")
      .text("\u00d7")  // MULTIPLICATION SIGN
      .appendTo(this.$el);
    this.$el.on("click", $.proxy(this._buttonClicked, this));
    this.$clear.on("click", $.proxy(this._clearClicked, this));
  };
  FilterButton.prototype = {
    setLabel: function(label) {
      this.$label.text(label);
      this.$label.attr("title", label);
    },
    setState: function(on) {
      this.$el.toggleClass("tab-on", on);
      this.$clear.css("display", on ? "block" : "none");
    },
    _buttonClicked: function(event) {
      this.$el.trigger("buttonClicked");
      return false;
    },
    _clearClicked: function(event) {
      this.$el.trigger("clearClicked");
      return false;
    }
  };

  var MenuFilterButton = function(getMenuContents) {
    this.getMenuContents = getMenuContents;
    this.button = new FilterButton();
    this.$el = this.button.$el;
    this.$el.on("buttonClicked", $.proxy(this._showMenu, this));
    this.$el.on("clearClicked", $.proxy(this._clear, this));
  };
  MenuFilterButton.prototype = {
    setLabel: function(label) {
      this.button.setLabel(label);
    },
    setState: function(state) {
      this.button.setState(state);
    },
    hideMenu: function() {
      if (this.popup) {
        this.popup.hide();
      }
    },
    _showMenu: function(event) {
      var offset = this.$el.offset();

      var $menu = $("<div>")
        .addClass("tab-sidebar-menu-panel")
        .append(this.getMenuContents());

      this.popup = new Tableau.Popup($menu);
      this.popup.show({
        "left": offset.left,
        "top": offset.top - 1
      });
      this.popup.popup.on("keydown", $.proxy(function(e) {
        if (e.keyCode == 27) { // esc
          this.hideMenu();
        }
      }, this));

      this.$el.trigger("opened");
      return false;
    },
    _clear: function(event) {
      this.$el.trigger("clear");
      return false;
    }
  };

  var ToggleFilterButton = function(label) {
    this.button = new FilterButton();
    this.button.setLabel(label);
    this.$el = this.button.$el;
    this.$el.on("buttonClicked", $.proxy(this._toggle, this));
    this.$el.on("clearClicked", $.proxy(this._clear, this));
  };
  ToggleFilterButton.prototype = {
    setState: function(state) {
      this.state = state;
      this.button.setState(state);
    },
    _toggle: function(event) {
      this.setState(!this.state);
      this.$el.trigger("stateChanged");
      return false;
    },
    _clear: function(event) {
      this.setState(false);
      this.$el.trigger("stateChanged");
      return false;
    }
  };

  var ListPanel = function(options, showCounts, selectedOptionIndex, noMatches) {
    this.options = options;
    this.showCounts = showCounts;
    this.selectedOptionIndex = selectedOptionIndex;
    this.noMatches = noMatches;
    this.filter = null;

    this.$el = $("<div>")
      .addClass("tab-sidebar-list-panel");

    this.list = $("<span>")
      .addClass("tab-sidebar-list-panel-list")

    this.labels = $("<span>")
      .addClass("tab-sidebar-list-panel-labels")
      .appendTo(this.list);

    this.counts = $("<span>")
      .addClass("tab-sidebar-list-panel-counts")
      .appendTo(this.list);

    this.rows = $("<div>")
      .addClass("tab-sidebar-list-panel-rows")
      .appendTo(this.list);

    this.filterPanel = $("<div>")
      .addClass("tab-sidebar-list-panel-filter-panel")
      .appendTo(this.$el);

    this.filterInputHolder = $("<div>")
      .addClass("tab-sidebar-list-panel-filter-input-holder")
      .appendTo(this.filterPanel);

    this.filterInput = $("<input type='text'>")
      .addClass("tab-sidebar-list-panel-filter-input")
      .appendTo(this.filterInputHolder);

    this.filterInput.on("keyup", $.proxy(this._filterKeyup, this));

    if (this.options.length > ListPanel.optionsThreshold) {
      this.scrollPanel = $("<div>")
        .addClass("tab-sidebar-list-panel-scroll-panel")
        .appendTo(this.$el);

      this.scrollPanelWindow = $("<div>")
        .addClass("tab-sidebar-list-panel-scroll-panel-window")
        .appendTo(this.scrollPanel);

      this.scrollbarSpacer = $("<span>")
        .addClass("tab-sidebar-list-panel-scrollbar-spacer")
        .appendTo(this.list);

      this.list.appendTo(this.scrollPanelWindow);

      if (TOUCH_SUPPORTED) {
        this.iScroll = new iScroll(this.scrollPanelWindow.get(0), { hScroll: false, hideScrollbar: false });
      }
    } else {
      this.list.appendTo(this.$el);
    }

    this._updateOptions();

    this.rows.on("mouseenter", ".tab-sidebar-list-panel-row", this, this._rowEnter);
    this.rows.on("mouseleave", ".tab-sidebar-list-panel-row", this, this._rowLeave);
    this.rows.on("click", ".tab-sidebar-list-panel-row", this, this._rowClick);
    this.$el.on("keydown", $.proxy(this._keydown, this));
  };
  // These constants should be kept in sync with the scroll-panel styles in tableau_sidebar.css.
  ListPanel.optionsThreshold = 6;
  ListPanel.optionHeight = 24;
  ListPanel.prototype = {
    focusFilter: function() {
      if (this.filterInput && !TOUCH_SUPPORTED) {
        this.filterInput.focus();
      }
    },
    _rowEnter: function(event) {
      event.data._focusRow(parseInt($(this).attr("rowIndex"), 10));
    },
    _rowLeave: function(event) {
      event.data._blurRow(parseInt($(this).attr("rowIndex"), 10));
    },
    _rowClick: function(event) {
      event.data._optionSelected(parseInt($(this).attr("optionIndex"), 10));
      return false;
    },
    _focusRow: function(rowIndex) {
      if (this.focusedRowIndex !== null) {
        this._blurRow(this.focusedRowIndex);
      }
      this.focusedRowIndex = rowIndex;
      this.labels.children().eq(rowIndex).addClass("tab-hover");
      this.counts.children().eq(rowIndex).addClass("tab-hover");
    },
    _blurRow: function(rowIndex) {
      if (this.focusedRowIndex === rowIndex) {
        this.focusedRowIndex = null;
      }
      this.labels.children().eq(rowIndex).removeClass("tab-hover");
      this.counts.children().eq(rowIndex).removeClass("tab-hover");
    },
    _optionSelected: function(optionIndex) {
      this.$el.trigger("optionSelected", [optionIndex]);
    },
    _matchAgainstFilter: function(input, filter) {
      var inputLower = input.toLowerCase();
      var filterLower = filter.toLowerCase();
      var parts = null;
      var searchIndex = 0;
      var matchIndex;
      while ((matchIndex = inputLower.indexOf(filterLower, searchIndex)) !== -1) {
        if (!parts) {
          parts = [];
        }
        parts[parts.length] = Tableau.StringUtils.escapeSpacesAndForElem(input.substring(searchIndex, matchIndex));
        searchIndex = matchIndex + filter.length;
        parts[parts.length] = "<span class='tab-sidebar-list-panel-highlight'>" +
                              Tableau.StringUtils.escapeSpacesAndForElem(input.substring(matchIndex, searchIndex)) +
                              "</span>";
      }
      if (parts) {
        parts[parts.length] = Tableau.StringUtils.escapeSpacesAndForElem(input.substring(searchIndex));
        return parts.join("");
      } else {
        return null;
      }
    },
    _updateOptions: function() {
      this.labels.html("");
      this.counts.html("");
      this.rows.html("");
      this.focusedRowIndex = null;

      var rowIndex = 0;
      var anyMatch = false;

      for (var optionIndex = 0, numOptions = this.options.length; optionIndex < numOptions; ++optionIndex) {
        var option = this.options[optionIndex];
        var inFilter = true;
        var matchResult = null;

        if (optionIndex !== 0 && this.filter) {
          matchResult = this._matchAgainstFilter(option.label, this.filter);
          inFilter = (matchResult !== null);
          anyMatch = anyMatch || inFilter;
        }

        if (optionIndex === 0 || inFilter) {
          var labelContent = matchResult || Tableau.StringUtils.escapeSpacesAndForElem(option.label);
          var tooltip = option.label;
          if (this.showCounts && optionIndex > 0 && option.count !== "") {
            tooltip += " (" + option.count + ")";
          }

          var optionLabel = $("<div>")
            .addClass("tab-sidebar-list-panel-label")
            .toggleClass("tab-current", optionIndex !== 0 && optionIndex === this.selectedOptionIndex)
            .html(labelContent);

          var optionCount = $("<div>")
            .addClass("tab-sidebar-list-panel-count")
            .text(this.showCounts ? option.count : '');

          var optionRow = $("<div>")
            .addClass("tab-sidebar-list-panel-row")
            .attr("optionIndex", optionIndex)
            .attr("rowIndex", rowIndex)
            .attr("title", tooltip)
            .append(optionLabel)
            .append(optionCount);

          this.labels.append(optionLabel);
          this.counts.append(optionCount);
          this.rows.append(optionRow);

          ++rowIndex;
        }
      }

      // If no matches were found, display "No matching <item-type>s"
      if (this.filter && !anyMatch && this.noMatches) {
        var noMatchesLabel = $("<div>")
            .addClass("tab-sidebar-list-panel-label tab-no-matches")
            .text(this.noMatches);
        this.labels.append(noMatchesLabel);
      }

      if (this.filter && rowIndex > 1) {
        this._focusRow(1);
      }

      if (this.options.length > ListPanel.optionsThreshold) {
        if (!TOUCH_SUPPORTED) {
          this._updateScrollPanel();
        }
      }

      if (this.iScroll) {
        setTimeout($.proxy(function() { this.iScroll.refresh(); }, this), 0);
      }
    },
    _updateScrollPanel: function() {
      if (this.scrollPanel) {
        this.scrollPanelWindow.scrollTop(0);
        this.scrollPanel.off();
      }
      if (this.scrollbar) {
        this.scrollbar.off();
        this.scrollbar.remove();
        this.scrollbar = null;
      }
      if (this.scrollbarThumb) {
        this.scrollbarThumb.off();
        this.scrollbarThumb.remove();
        this.scrollbarThumb = null;
      }

      var numRows = this.rows.children().length;
      if (numRows > ListPanel.optionsThreshold) {
        this.listHeight = numRows * ListPanel.optionHeight;
        this.scrollPanelHeight = this.scrollPanel.height() || (ListPanel.optionsThreshold + 0.5) * ListPanel.optionHeight;
        this.scrollMax = this.listHeight - this.scrollPanelHeight;
        this.scrollbarHeight = this.scrollPanelHeight - 2;
        this.thumbHeight = Math.max(10, Math.round(this.scrollbarHeight * this.scrollPanelHeight / this.listHeight));
        this.thumbMax = this.scrollbarHeight - this.thumbHeight;

        this.scrollbar = $("<div>")
          .addClass("tab-sidebar-list-panel-scrollbar")
          .appendTo(this.scrollPanel);

        this.scrollbarThumb = $("<div>")
          .addClass("tab-sidebar-list-panel-scrollbar-thumb")
          .height(this.thumbHeight)
          .appendTo(this.scrollbar);

        this.scrollTop = 0;
        this.thumbTop = 0;
        this._updateScroll();

        this.scrollPanel.on("mousewheel", $.proxy(this._scrollWheel, this));
        this.scrollbar.on("mousewheel", $.proxy(this._scrollWheel, this));
        this.scrollbarThumb.on("mousedown", $.proxy(this._beginThumbDrag, this));
      }
    },
    _beginThumbDrag: function(event) {
      this.thumbStart = this.thumbTop;
      this.dragStartY = event.pageY;
      $("body")
        .on("mousemove.sidebar", $.proxy(this._moveThumb, this))
        .on("mouseup.sidebar", $.proxy(this._endThumbDrag, this));
      return false;
    },
    _moveThumb: function(event) {
      this.thumbTop = Math.min(Math.max(this.thumbStart + (event.pageY - this.dragStartY), 0), this.thumbMax);
      this.scrollTop = Math.round(this.scrollMax * this.thumbTop / this.thumbMax);
      this._updateScroll();
      return false;
    },
    _endThumbDrag: function(event) {
      $("body").off(".sidebar");
      return false;
    },
    _scrollWheel: function(event, delta) {
      this._setScrollTop(this.scrollPanelWindow.scrollTop() - delta * 10);
      return false;
    },
    _setScrollTop: function(newScrollTop) {
      this.scrollTop = Math.min(Math.max(newScrollTop, 0), this.scrollMax);
      this.thumbTop = Math.round(this.thumbMax * this.scrollTop / this.scrollMax);
      this._updateScroll();
    },
    _updateScroll: function() {
      this.scrollPanelWindow.scrollTop(this.scrollTop);
      this.scrollbarThumb.css("top", this.thumbTop + "px");
    },
    _filterKeyup: function() {
      var newFilter = this.filterInput.val();
      if (newFilter === "") {
        newFilter = null;
      }
      if (this.filter !== newFilter) {
        this.filter = newFilter
        this._updateOptions();
      }
    },
    _keydown: function(e) {
      switch (e.keyCode) {
        case 13: // enter
          if (this.focusedRowIndex !== null) {
            this._optionSelected(parseInt(this.rows.children().eq(this.focusedRowIndex).attr("optionIndex"), 10));
            return false;
          }
          break;
        case 38: // arrow up
          this._moveFocusedRow(-1);
          return false;
          break;
        case 40: // arrow down
          this._moveFocusedRow(1);
          return false;
          break;
      }
    },
    _moveFocusedRow: function(delta) {
      var numRows = this.rows.children().length;
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

      var focusedRowTop = this.focusedRowIndex * ListPanel.optionHeight;
      var focusedRowBottom = (this.focusedRowIndex + 1) * ListPanel.optionHeight;
      var scrollBottom = this.scrollTop + this.scrollPanelHeight;
      if (focusedRowBottom > scrollBottom) {
        this._setScrollTop(focusedRowBottom - this.scrollPanelHeight);
      } else if (focusedRowTop < this.scrollTop) {
        this._setScrollTop(focusedRowTop);
      }
    }
  };

  var ListFilterPanel = function(filter) {
    this.filter = filter;
    this.visible = true;

    var label = $("<div>")
      .addClass("tab-sidebar-filter-panel-label")
      .text(filter.label);

    this.button = new MenuFilterButton($.proxy(this._makeListPanel, this));
    this.button.$el.on("opened", $.proxy(this._opened, this));
    this.button.$el.on("clear", $.proxy(this._clear, this));

    this.hidden = $("<input type='hidden'>")
      .attr("name", filter.name);

    this._setSelectedOption(filter.selectedOptionIndex);

    this.$el = $("<div>")
      .addClass("tab-sidebar-filter-panel")
      .append(label)
      .append(this.button.$el)
      .append(this.hidden);
  };
  ListFilterPanel.prototype = {
    clear: function() {
      this._setSelectedOption(0);
    },
    _makeListPanel: function() {
      this.listPanel = new ListPanel(this.filter.options, this.filter.showCounts, this.filter.selectedOptionIndex, this.filter.noMatches);
      this.listPanel.$el.on("optionSelected", $.proxy(this._optionSelected, this));
      return this.listPanel.$el;
    },
    _opened: function() {
      this.listPanel.focusFilter();
    },
    _optionSelected: function(event, index) {
      this.button.hideMenu();
      this._setSelectedOption(index);
      if (this.filter.selectedOptionIndex !== index) {
        this.$el.trigger("filterChanged");
      }
    },
    _clear: function(event) {
      this._setSelectedOption(0);
      if (this.filter.selectedOptionIndex !== 0) {
        this.$el.trigger("filterChanged");
      }
    },
    _setSelectedOption: function(index) {
      var option = this.filter.options[index];
      this.button.setLabel(option.label);
      this.button.setState(index !== 0);
      this.hidden.val(option.value).prop("disabled", option.value === "");
      this.on = index !== 0;
    }
  };

  var DateFilterPanel = function(filter) {
    this.filter = filter;
    this.visible = true;

    var label = $("<div>")
      .addClass("tab-sidebar-filter-panel-label")
      .text(filter.label);

    this.button = new MenuFilterButton($.proxy(this._makeDatePickerPanel, this));
    this.button.$el.on("clear", $.proxy(this._clear, this));

    this.hidden = $("<input type='hidden'>")
      .attr("name", filter.name);

    this._setDate(Tableau.DateUtilities.fromISOString(this.filter.value));

    this.$el = $("<div>")
      .addClass("tab-sidebar-filter-panel")
      .append(label)
      .append(this.button.$el)
      .append(this.hidden);
  };
  DateFilterPanel.prototype = {
    clear: function() {
      this._setDate(null);
    },
    _makeDatePickerPanel: function() {
      var picker = new Tableau.DatePicker({
        showDate: this.date,
        selectedDate: this.date
      });
      picker.$el.on("dateSelected", $.proxy(this._dateSelected, this));
      return picker.$el;
    },
    _clear: function(event) {
      this._setDate(null);
      this.$el.trigger("filterChanged");
    },
    _dateSelected: function(event, date) {
      this.button.hideMenu();
      this._setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
      this.$el.trigger("filterChanged");
    },
    _setDate: function(date) {
      if (date && this.filter.endOfDay) {
        date.setHours(23);
        date.setMinutes(59);
        date.setSeconds(59);
        date.setMilliseconds(999);
      }
      this.date = date;

      var dateLabel = this.date ? Globalize.format(this.date, "D") : this.filter.emptyValue;
      this.button.setLabel(dateLabel);
      this.button.setState(this.date !== null);

      var newDateValue = Tableau.DateUtilities.toISOString(this.date);
      this.hidden.val(newDateValue).prop("disabled", newDateValue === "");

      this.on = newDateValue !== "";
    }
  };

  var ToggleFilterPanel = function(filter) {
    this.filter = filter;
    this.visible = true;

    var label = $("<div>")
      .addClass("tab-sidebar-filter-panel-label")
      .text(filter.label);

    this.button = new ToggleFilterButton(filter.buttonLabel);
    this.button.$el.on("stateChanged", $.proxy(this._stateChanged, this));

    this.hidden = $("<input type='hidden'>")
      .attr("name", filter.name);

    this._setState(filter.value !== "");

    this.$el = $("<div>")
      .addClass("tab-sidebar-filter-panel")
      .append(label)
      .append(this.button.$el)
      .append(this.hidden);
  };
  ToggleFilterPanel.prototype = {
    clear: function() {
      this._setState(false);
    },
    _stateChanged: function(event) {
      this._setState(this.button.state);
      this.$el.trigger("filterChanged");
    },
    _setState: function(state) {
      this.button.setState(state);
      this.hidden.val(this.button.state ? "yes" : "").prop("disabled", !this.button.state);
      this.on = state;
    }
  };

  var HiddenFilter = function(filter) {
    this.filter = filter;
    this.visible = false;
    this.on = filter.value !== "";
    this.$el = $("<input type='hidden'>")
      .attr("name", filter.name)
      .val(filter.value)
      .prop("disabled", filter.value === "");
  };
  HiddenFilter.prototype = {
    clear: function() {
      this.$el.val("").prop("disabled", true);
    }
  };

  var Sidebar = function(settings) {
    this.settings = settings;
    this.$el = $("<span>").addClass("tab-sidebar");
    this.form = this._makeForm().appendTo(this.$el);
  };
  Sidebar.prototype = {
    _makeForm: function() {
      var form = $("<form>")
        .attr("id", "sidebar")
        .attr("method", "get");
      if (this.settings.filterAction) {
        form.attr("action", this.settings.filterAction);
      }
      if (this.settings.sections && this.settings.sections.length > 1) {
        this._makeSectionsPanel(this.settings.sections, this.settings.currentSection)
          .appendTo(form);
      }
      this._makeSubsectionsPanel(this.settings.subsections, this.settings.currentSubsection)
        .appendTo(form);
      if (this.settings.filters && this.settings.filters.length > 0) {
        this._makeFiltersPanel(
            this.settings.filters,
            this.settings.filtersHeaderLabel,
            this.settings.clearAllButtonLabel)
          .appendTo(form);
      }

      var sidebarParms = form.serialize();
      if(sidebarParms) {
        form.find("a.tab-sidebar-subsection-button").each(function() {
          var $subsection = $(this);
          $subsection.attr('href', ($subsection.attr('href') || '') + '?' + sidebarParms);
        });
      }
      return form;
    },
    _makeSectionsPanel: function(sections, currentSection) {
      var panel = new SectionsPanel(sections, currentSection);
      panel.$el.on("sectionSelected", $.proxy(this._sectionSelected, this));
      return panel.$el;
    },
    _makeSubsectionsPanel: function(subsections, currentSubsection) {
      var panel = new SubsectionsPanel(subsections, currentSubsection);
      panel.$el.on("subsectionSelected", $.proxy(this._subsectionSelected, this));
      return panel.$el;
    },
    _makeFiltersPanel: function(filters, filtersHeaderLabel, clearAllButtonLabel) {
      this.filtersPanel = new FiltersPanel(filters, filtersHeaderLabel, clearAllButtonLabel);
      this.filtersPanel.$el.on("filterChanged", $.proxy(this._filterChanged, this));
      return this.filtersPanel.$el;
    },
    _sectionSelected: function(event, sectionIndex) {
      var section = this.settings.sections[sectionIndex];
      if (section) {
        if (this.filtersPanel) {
          this.filtersPanel.clearAll();
        }
        this._navigate(section.uri);
      }
    },
    _subsectionSelected: function(event, subsectionIndex) {
      var subsection = this.settings.subsections[subsectionIndex];
      if (subsection) {
        this._navigate(subsection.uri);
      }
    },
    _filterChanged: function() {
      this.form.submit();
    },
    _navigate: function(uri) {
      this.form.prop("action", uri);
      this.form.submit();
    }
  };

  this.Tableau || (this.Tableau = {});
  this.Tableau.Sidebar = Sidebar;

}).call(this, jQuery);
