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

  var CSS = {
    defaultFont: {
      'font-family': 'Arial, Helvetica, sans-serif'
    },
    titleText: {
      'font-size': '14px',
      'font-weight': 'bold',
      'color': '#666666'
    },
    subtitleText: {
      'font-size': '12px',
      'color': '#666666'
    },
    buttonText: {
      'font-size': '12px',
      'color': '#5a5a5a'
    },
    inlineBlockAlignTop: {
      'display': 'inline-block',
      'vertical-align': 'top'
    },
    inlineBlockAlignBottom: {
      'display': 'inline-block',
      'vertical-align': 'bottom'
    },
    bottomBorder: {
      'border-bottom': '1px solid #999999'
    }
  };

  var Masthead = function (settings) {
    this.settings = settings;
    this.$el = $('<div>')
      .addClass('tab-masthead')
      .css($.extend({
        'position': 'relative',
        'cursor': 'default',
        'min-width': '600px'
      }, CSS.defaultFont));
    this.$content = $('<div>')
      .addClass('tab-masthead-content')
      .css('white-space', 'nowrap')
      .appendTo(this.$el);
    if (settings.logo) {
      this._makeLogo(settings.logo).appendTo(this.$content);
    }
    if (settings.verificationLink) {
      this._makeVerificationLink(settings.verificationLink).appendTo(this.$content);
    }
    if (settings.vizTitle) {
      this._makeVizTitle(settings.vizTitle).appendTo(this.$content);
    }
    if (settings.alertsSettings && Tableau.Alerts) {
      // This gets used by _makeToolbar, make sure it's initialized first.
      Masthead.alerts = new Tableau.Alerts(settings.alertsSettings);
    }
    if (settings.toolbar) {
      this._makeToolbar(settings.toolbar).appendTo(this.$content);
    }
    if (settings.wgTitle) {
      this._makeWgTitle(settings.wgTitle).appendTo(this.$content);
    }
    if (settings.upgradeButton) {
      this._makeUpgradeButton(settings.upgradeButton).appendTo(this.$content);
    }
    if (settings.collapseBar) {
      this._makeCollapseBar(settings.collapseBar).appendTo(this.$el);
    }
    if (settings.flash) {
      this._makeFlash().appendTo(this.$content);
    }
    if (settings.mastheadHidden) {
      this._doCollapseOrExpand(false);
    }
    if (settings.alertsSettings && Tableau.Alerts)
    {
      // Masthead has finished initializing and building dom.
      // Kick off Alerts now that everything is in place
      Masthead.alerts.start();
    }
  };
  Masthead.sidebarWidth = 178;
  Masthead.sidebarMargin = 10;
  Masthead.wgTitleHeight = 25;
  Masthead.prototype = {
    _makeLogo: function(logo) {
      return $('<a>')
        .addClass('tab-masthead-logo')
        .css({
          'display': 'inline-block',
          'padding': '5px',
          'width': logo.width + 'px',
          'height': logo.height + 'px',
          'overflow': 'hidden'
        })
        .attr('href', logo.uri)
        .attr('title', logo.tooltip)
        .append($('<img>').attr('src', logo.img))
    },
    _makeVerificationLink: function(verificationLink) {
      return $('<a>')
        .attr('href', verificationLink.uri)
        .text(verificationLink.label)
        .css({
          'position': 'absolute',
          'top': '10px',
          'left': Masthead.sidebarWidth + Masthead.sidebarMargin + 'px',
          'padding': '5px'
        });
    },
    _makeFlash: function() {
      return $('<div>')
        .addClass('tab-masthead-flash')
        .css({
          'display': 'none',
          'position': 'absolute',
          'top': '4px',
          'left': Masthead.sidebarWidth + Masthead.sidebarMargin + 'px',
          'padding': '4px 20px 4px 4px',
          'border': '1px solid #cccccc',
          'background-color': '#ffffaa'
        })
        .append($('<span>')
          .attr('id', 'flash')
        )
        .append($('<div>')
          .css({
            'position': 'absolute',
            'top': '0',
            'right': '0',
            'width': '16px',
            'line-height': '16px',
            'font-size': '16px',
            'font-weight': 'bold',
            'text-align': 'center',
            'cursor': 'pointer'
          })
          .text('\u00d7') // MULTIPLICATION SIGN
          .on('click', function() { clear_flash(); })
        );
    },
    _makeToolbar: function(toolbar) {
      var $toolbar = $('<span>')
        .addClass('tab-masthead-toolbar')
        .css({
          'position': 'absolute',
          'top': '0px',
          'right': '0px',
          'padding-top': '5px',
          'padding-right': '5px',
          'background-color': 'white'
        });
      for (var i = 0, length = toolbar.length; i < length; ++i) {
        var itemSettings = toolbar[i];
        var item = this._makeToolbarItem(itemSettings);
        if (itemSettings.star) {
          Masthead.favoritesMenu = item;
        }
        $toolbar.append(item.$el)
      }
      return $toolbar;
    },
    _makeToolbarItem: function(item) {
      switch (item.type) {
        case "button":
          return new MastheadToolbarButton(item);
        case "menu":
          return new MastheadToolbarMenuButton(item);
        case "help":
          return new MastheadToolbarHelpMenuButton(item);
        case "alert":
          return new MastheadToolbarAlertsNotifierMenuButton(item);
      }
    },
    _makeWgTitle: function(wgTitle) {
      var $wgTitle = $('<div>')
        .addClass('tab-masthead-wg-title')
        .css({
          'position': 'relative',
          'padding-left': Masthead.sidebarWidth + Masthead.sidebarMargin + 'px',
          'height': (Masthead.wgTitleHeight + 1) + 'px',
          'line-height': (Masthead.wgTitleHeight + 1) + 'px',
          'white-space': 'nowrap'
        });

      if (wgTitle.sidebarBorder) {
        $('<span>')
          .css($.extend({
            'position': 'absolute',
            'left': 0,
            'top': 0,
            'height': Masthead.wgTitleHeight + 'px',
            'width': Masthead.sidebarWidth + 'px'
          }, CSS.bottomBorder))
          .appendTo($wgTitle);
      }

      var $contentTitleArea = $('<div>')
        .css(CSS.bottomBorder)
        .appendTo($wgTitle);

      // content title
      $('<span>')
        .html(wgTitle.title_html) // constructed and properly escaped server-side
        .css($.extend({
          'padding-left': '5px',
          'height': Masthead.wgTitleHeight + 'px',
          'line-height': Masthead.wgTitleHeight + 'px'
        }, CSS.inlineBlockAlignTop, CSS.titleText))
        .appendTo($contentTitleArea);

      if (wgTitle.subtitle) {
        $('<span>')
          .text(wgTitle.subtitle)
          .css($.extend({
            'padding-left': '10px',
            'height': Masthead.wgTitleHeight + 'px',
            'line-height': Masthead.wgTitleHeight + 'px'
          }, CSS.inlineBlockAlignTop, CSS.subtitleText))
          .appendTo($contentTitleArea);
      }

      $('<span>')
        .attr('id', 'spinner')
        .addClass('tab-img-spinner')
        .css({
          'display': 'none',
          'vertical-align': 'top',
          'margin-left': '10px'
        })
        .appendTo($contentTitleArea);

      $('<span>')
        .attr('id', 'multipage_warning')
        .addClass('flashText')
        .css({
          'display': 'none',
          'padding-left': '20px'
        })
        .text(wgTitle.multipage_warning)
        .appendTo($contentTitleArea);

      var $selectAllMsg = $('<span>')
        .attr('id', 'selectAllMsg')
        .addClass('flashText')
        .css({
          'display': 'none',
          'padding-left': '20px'
        })
        .text(wgTitle.all_selected)
        .appendTo($contentTitleArea);

      $('<a>')
        .html(wgTitle.click_to_select) // constructed and properly escaped server-side
        .css({
          'padding-left': '5px',
          'text-decoration': 'underline',
          'cursor': 'pointer'
        })
        .on('click', function() { select_all_on_page('true'); })
        .appendTo($selectAllMsg);

      return $wgTitle;
    },
    _makeVizTitle: function(vizTitle) {
      var $vizTitle = $('<span>')
        .addClass('tab-masthead-viz-title')
        .css($.extend({
          'padding-left': '10px',
          'padding-top': '5px',
          'white-space': 'nowrap'
        }, CSS.inlineBlockAlignTop));
      var $top = $('<div>')
        .appendTo($vizTitle);
      if (vizTitle.star) {
        $('<span>')
          .css(CSS.inlineBlockAlignTop)
          .html(vizTitle.star) // constructed and properly escaped server-side
          .appendTo($top);
      }
      $('<span>')
        .addClass('tab-masthead-viz-name')
        .css($.extend({
          'height': '22px',
          'line-height': '22px'
        }, CSS.inlineBlockAlignTop, CSS.titleText))
        .html(Tableau.StringUtils.escapeSpacesAndForElem(vizTitle.label))
        .attr('title', vizTitle.label)
        .appendTo($top);
      if (vizTitle.links) {
        var $bottom = $('<div>')
          .css({
            'padding-left': '22px'
          })
          .appendTo($vizTitle);
        for (var i = 0, length = vizTitle.links.length; i < length; ++i) {
          var link = vizTitle.links[i];
          $('<a>')
            .css($.extend({
              'cursor': 'pointer',
              'margin-right': '12px',
              'height': '15px',
              'line-height': '15px'
            }, CSS.inlineBlockAlignTop, CSS.buttonText))
            .attr('href', link.uri)
            .text(link.label)
            .appendTo($bottom);
        }
      }
      return $vizTitle;
    },
    _makeUpgradeButton: function(upgradeButton) {
      return $('<a>')
        .attr('href', upgradeButton.uri)
        .css({
          'position': 'absolute',
          'display': 'block',
          'right': '10px',
          'bottom': '10px',
          'height': '22px',
          'line-height': '22px',
          'padding-left': '10px',
          'padding-right': '10px',
          'color': 'white',
          'font-weight': 'bold',
          'text-decoration': 'none',
          'text-align': 'center'
        })
        .append($('<span>').addClass('tab-styledButtonLeft'))
        .append($('<span>').addClass('tab-styledButtonMiddle').text(upgradeButton.label))
        .append($('<span>').addClass('tab-styledButtonRight'));
    },
    _makeCollapseBar: function(collapseBar) {
      this.$collapseTrigger = $('<div>')
        .addClass('tab-img-collapse tab-masthead-collapse-trigger');
      this.$collapseBar = $('<div>')
        .addClass('tab-masthead-collapse-bar')
        .css(CSS.bottomBorder)
        .append(this.$collapseTrigger)
        .on('click', '.tab-masthead-collapse-trigger', $.proxy(this._userClickCollapseOrExpand, this));
      return this.$collapseBar;
    },
    _userClickCollapseOrExpand: function() {
      var expand = (this.$content.css('display') === 'none');
      this._doCollapseOrExpand(expand);
      resizeViewer && resizeViewer(null);
      new Ajax.Request(this.settings.collapseBar.collapsePrefsUri, {method:'get'});
    },
    _doCollapseOrExpand: function(expand) {
      this.$content.toggle(expand);
      this.$collapseTrigger.toggleClass('tab-img-expand', !expand).toggleClass('tab-img-collapse', expand);
      $('.singleLayoutTop, .singleLayoutCenter').toggleClass('collapsed', !expand);
    }
  };

  // local polyfill
  var Object_create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation only accepts the first parameter.');
    }
    function F() {}
    F.prototype = o;
    return new F();
  };

  var MastheadToolbarButton = function (settings) {
    this.settings = settings;
    this.$el = this._makeButton();
  };
  MastheadToolbarButton.prototype = Object_create(Object.prototype);

  MastheadToolbarButton.prototype._makeButton = function() {
    return $('<a>')
      .addClass('tab-masthead-toolbar-button')
      .attr('title', this.settings.tooltip)
      .attr('href', this.settings.uri)
      .css($.extend({
        'padding': '4px 8px',
        'border': '1px solid transparent',
        'text-decoration': 'none',
        'cursor': 'pointer'
      }, CSS.inlineBlockAlignTop, CSS.buttonText))
      .append(this._makeButtonContents())
      .off('mouseenter').on('mouseenter', $.proxy(this._soft_highlight, this))
      .off('mouseleave').on('mouseleave', $.proxy(this._soft_unhighlight, this))
  };

  MastheadToolbarButton.prototype._makeButtonContents = function() {
    return $('<span>')
      .html(Tableau.StringUtils.escapeSpacesAndForElem(this.settings.label))
      .css($.extend({
        'height': '15px',
        'line-height': '15px'
      }, CSS.inlineBlockAlignTop));
  };
  MastheadToolbarButton.prototype.highlight = function() {
    this.highlighted = true;
    this.$el.css({
      'border-top': '1px solid #e0e0e0',
      'border-left': '1px solid #e0e0e0',
      'border-right': '1px solid #e0e0e0',
      'border-bottom': '1px solid #ececec'
    });
    this._soft_highlight();
  };
  MastheadToolbarButton.prototype._soft_highlight = function() {
    this.$el.css('background-color', '#ececec');
  };
  MastheadToolbarButton.prototype.unhighlight = function () {
    this.highlighted = false;
    this.$el.css({
      'border': '1px solid transparent'
    });
    this._soft_unhighlight();
  };
  MastheadToolbarButton.prototype._soft_unhighlight = function () {
    if (!this.highlighted) {
      this.$el.css('background-color', 'transparent');
    }
  };

  var MastheadToolbarMenuButton = function(settings) {
    MastheadToolbarButton.call(this, settings);
    this.$el.off('click').on('click', $.proxy(this._showMenu, this));
  };
  MastheadToolbarMenuButton.maxWidth = 400;
  MastheadToolbarMenuButton.prototype = Object_create(MastheadToolbarButton.prototype);
  MastheadToolbarMenuButton.prototype.update = function(options) {
    this.settings.options = options;
  };
  MastheadToolbarMenuButton.prototype._makeButtonContents = function() {
    return $('<span>')
      .css(CSS.inlineBlockAlignTop)
      .append(this._makeButtonLabel())
      .append($('<span>')
        .addClass('tab-masthead-toolbar-menu-arrow')
        .text('\u25bc')
        .css($.extend({
          'color': '#5a5a5a',
          'font-size': '10px',
          'padding-left': '2px',
          'height': '13px'
        }, CSS.inlineBlockAlignBottom))
      );
  };
  MastheadToolbarMenuButton.prototype._makeButtonLabel = function() {
    if (this.settings.star) {
      return $('<span>')
        .addClass('favorite_menu_enabled')
        .css($.extend({
          'background-position': 'center 70%',
          'width': '15px',
          'height': '15px',
          'line-height': '15px'
        }, CSS.inlineBlockAlignTop));
    } else {
      return $('<span>')
        .html(Tableau.StringUtils.escapeSpacesAndForElem(this.settings.label))
        .css($.extend({
          'height': '15px',
          'line-height': '15px'
        }, CSS.inlineBlockAlignTop));
    }
  };
  MastheadToolbarMenuButton.prototype._makeMenu = function() {
    var menuContents = this._makeMenuContents();
    menuContents.on("keydown", $.proxy(this._menuContentsKeydown, this));
    return $('<div>')
      .addClass('tab-masthead-toolbar-menu')
      .css({
        'min-width': this.$el.innerWidth(),
        'max-width': MastheadToolbarMenuButton.maxWidth + 'px',
        'background-color': '#ececec',
        'border': '1px solid #e0e0e0'
      })
      .append(menuContents);
  };
  MastheadToolbarMenuButton.prototype._makeMenuContents = function() {
    if(this.settings.options && this.settings.options.length === 0) {
      return $('<div>')
        .css({
          'padding': '5px',
          'font-style': 'italic'
        })
        .text(this.settings.noFavoritesMessage);
    } else {
      if (this.settings.filter) {
        return $('<div>')
          .append(this._makeFilterPanel())
          .append($('<div>')
            .addClass('tab-masthead-toolbar-menu-options')
            .append(this._makeMenuOptionsForFilter())
          );
      } else {
        return this._makeMenuOptions(this.settings.options, 6.5);
      }
    }
  };
  MastheadToolbarMenuButton.prototype._makeFilterPanel = function() {
    var filterPanel = $("<div>")
      .css({
        'padding': '2px 4px',
        'max-width': (MastheadToolbarMenuButton.maxWidth - 8) + 'px'
      })
    var filterInputHolder = $("<div>")
      .appendTo(filterPanel);
    this.filterInput = $("<input type='text'>")
      .css({
        'width': '100%',
        'outline': 0,
        'margin-left': '-2px',
        'border': '1px solid #c9c9c9',
        'padding': '1px'
      })
      .appendTo(filterInputHolder)
      .on("click", false)
      .on("keyup", $.proxy(this._filterInputKeyup, this));
    return filterPanel;
  };
  MastheadToolbarMenuButton.prototype._filterInputKeyup = function() {
    var newFilter = this.filterInput.val();
    if (newFilter === "") {
      newFilter = null;
    }
    if (this.filter !== newFilter) {
      this.filter = newFilter;
      $('.tab-masthead-toolbar-menu-options').html(this._makeMenuOptionsForFilter());
    }
  };
  MastheadToolbarMenuButton.prototype._makeMenuOptionsForFilter = function() {
    return this._makeMenuOptions(this.settings.options, 6.5);
  };
  MastheadToolbarMenuButton.prototype._makeMenuOptions = function(options, limit) {
    var rowHeight = 24;
    var rows = this._getRows(options);
    if (rows.length > 0) {
      this.listGrid = new Tableau.ListGrid({
        'rowHeight': rowHeight,
        'cols': this._getCols(),
        'rows': rows
      });
      if (this.filter) {
        this.listGrid.moveFocusedRow(1);
      }
      this.scrollPane = new Tableau.VerticalScrollPane({
        '$content': this.listGrid.$el,
        'minContentHeight': this.listGrid.height(),
        'maxViewportHeight': limit * rowHeight
      });
      return this.scrollPane.$el;
    } else {
      return $('<div>')
        .css({
          'padding-left': '10px',
          'line-height': rowHeight + 'px',
          'font-style': 'italic'
        })
        .text(this.settings.noResultsMessage);
    }
  };
  MastheadToolbarMenuButton.prototype._getCols = function() {
    cols = []
    var maxWidth = MastheadToolbarMenuButton.maxWidth - (this.settings.leftIcons ? 24 : 10) - 10;
    var padLeft = 10;
    if (this.settings.leftIcons) {
      padLeft = 0;
      cols[cols.length] = {
        'key': 'leftIcon'
      };
    }
    cols[cols.length] = {
      'key': 'label',
      'css': {
        'max-width': maxWidth + 'px',
        'padding-left': padLeft + 'px',
        'padding-right': '10px'
      }
    };
    return cols;
  };
  MastheadToolbarMenuButton.prototype._getRows = function(options) {
    var rows = [];
    for (var i = 0, l = options.length; i < l; ++i) {
      var option = options[i];
      var label = option.label || '';
      var matchResult = null;
      if (this.filter) {
        matchResult = this._matchAgainstFilter(label, this.filter);
      }
      if (!this.filter || matchResult !== null) {
        var labelContent = matchResult || Tableau.StringUtils.escapeSpacesAndForElem(label);
        var data = {
          'label': { 'html': labelContent }
        };
        if (option.leftIconClass) {
          data['leftIcon'] = { 'html': '<div class="' + Tableau.StringUtils.escapeForAttr(option.leftIconClass) + '"></div>' }
        }
        rows[rows.length] = {
          'uri': option.uri || '',
          'target': option.target || '',
          'disabled': option.disabled || false,
          'tooltip': label,
          'data': data
        };
      }
    }
    return rows;
  };
  MastheadToolbarMenuButton.prototype._matchAgainstFilter = function(input, filter) {
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
      parts[parts.length] = '<span class="tab-sidebar-list-panel-highlight">' +
                            Tableau.StringUtils.escapeSpacesAndForElem(input.substring(matchIndex, searchIndex)) +
                            '</span>';
    }
    if (parts) {
      parts[parts.length] = Tableau.StringUtils.escapeSpacesAndForElem(input.substring(searchIndex));
      return parts.join("");
    } else {
      return null;
    }
  };
  MastheadToolbarMenuButton.prototype._showMenu = function() {
    this.filter = null;
    var $menu = this._makeMenu();
    var popup = new Tableau.Popup($menu);
    popup.popup.append($('<div>')
      .css({
        'position': 'absolute',
        'top': '0',
        'right': '1px',
        'width': this.$el.innerWidth() + 'px',
        'height': '1px',
        'background-color': '#ececec'
      }));
    this.highlight();
    popup.popup
      .on("keydown", function(e) {
        if (e.keyCode == 27) { // esc
          popup.hide();
        }
      })
      .on('hidden', $.proxy(function() {
        $(window).off('.popup');
        this.unhighlight();
      }, this));
    $menu.on('click', function() {
      popup.hide();
    });
    // Positioning the popup in the top left before making it visible
    // prevents scrollbars from appearing and messing up the positioning.
    popup.show({
      'visibility': 'hidden',
      'top': 0,
      'left': 0
    });

    // This is a bit of a hack to ensure that it looks reasonable on IE7.
    if ($menu.find('.tab-vertical-scroll-pane').outerWidth() !== $menu.find('.tab-vertical-scroll-pane-viewport').outerWidth()) {
      $menu.find('.tab-list-grid').width($menu.find('.tab-vertical-scroll-pane').width());
    }

    var positionMenu = $.proxy(function() {
      var offset = this.$el.offset();
      var left = offset.left + this.$el.outerWidth(true);
      var top = offset.top + this.$el.outerHeight(true);
      popup.popup.css({
        'left': (left - $menu.outerWidth(true)) + 'px',
        'top': top + 'px'
      });
    }, this);

    positionMenu();
    popup.popup.css('visibility', 'visible');
    positionMenu(); // Calling this a second time after making the popup visible fixes an IE bug.
    $(window).on('resize.popup', positionMenu);

    // Set the width of the menu explicitly so filtering doesn't cause it to change.
    $menu.css('width', $menu.width());

    if (this.filterInput && !TOUCH_SUPPORTED) {
      this.filterInput.focus();
    }
  };
  MastheadToolbarMenuButton.prototype._menuContentsKeydown = function(e) {
    switch (e.keyCode) {
      case 13: // enter
        if (this.listGrid) {
          this.listGrid.activateFocusedRow();
          return false;
        }
        break;
      case 38: // arrow up
        if (this.listGrid) {
          this.listGrid.moveFocusedRow(-1);
          this.scrollPane.scrollIntoView(this.listGrid.focusedRowTop, this.listGrid.focusedRowBottom);
          return false;
        }
        break;
      case 40: // arrow down
        if (this.listGrid) {
          this.listGrid.moveFocusedRow(1);
          this.scrollPane.scrollIntoView(this.listGrid.focusedRowTop, this.listGrid.focusedRowBottom);
          return false;
        }
        break;
    }
  };

  var MastheadToolbarHelpMenuButton = function(settings) {
    MastheadToolbarMenuButton.call(this, settings);
  };
  MastheadToolbarHelpMenuButton.prototype = Object_create(MastheadToolbarMenuButton.prototype);
  MastheadToolbarHelpMenuButton.prototype._makeMenuContents = function() {
    return $('<div>')
      .addClass('tab-masthead-toolbar-help-menu-contents')
      .css('overflow', 'hidden')
      .append(this._makeSearch())
      .append(this._makeMenuOptions(this.settings.pageLinks, this.settings.pageLinks.length))
      .append($('<div>').css({
          'height': '1px',
          'width': '100%',
          'overflow': 'hidden',
          'background-color': '#c1c1c1'
        }))
      .append(this._makeMenuOptions(this.settings.fixedLinks, this.settings.fixedLinks.length));
  };
  MastheadToolbarHelpMenuButton.prototype._getCols = function() {
    return [{
      'key': 'label',
      'css': {
        'max-width': (MastheadToolbarMenuButton.maxWidth - 20) + 'px',
        'padding-left': '10px',
        'padding-right': '10px'
      }
    }];
  };
  MastheadToolbarHelpMenuButton.prototype._makeSearch = function() {
    this.$searchInput = $('<input type="text">')
      .css({
        'position': 'absolute',
        'top': '1px',
        'right': '1px',
        'left': '25px',
        'height': '22px',
        'line-height': '22px',
        'font-size': '12px',
        'color': '#5a5a5a',
        'background-color': 'transparent',
        'border': 'none',
        'outline': 0
      })
      .on('keydown', $.proxy(function(event) {
        if (event.which === 13) { // enter
          this._doSearch();
        }
      }, this));
    return $('<div>')
      .addClass('tab-masthead-toolbar-help-menu-search-panel')
      .css({
        'width': '100%',
        'height': '30px',
        'position': 'relative'
      })
      .append(
        $('<span>')
          .addClass('tab-masthead-toolbar-help-menu-search-box')
          .css({
            'position': 'absolute',
            'top': '2px',
            'bottom': '2px',
            'left': '2px',
            'right': '2px',
            'border': '1px solid #c9c9c9',
            'background-color': 'white'
          })
          .append(
            $('<a>')
              .addClass('tab-img-search')
              .css({
                'position': 'absolute',
                'top': 0,
                'left': 0,
                'width': '24px',
                'height': '24px',
                'cursor': 'pointer'
              })
              .on('click', $.proxy(this._doSearch, this))
          )
          .append(this.$searchInput)
      )
      .on('click', false); // Stop clicks on the search panel so they don't hide the menu.
  };
  MastheadToolbarHelpMenuButton.prototype._doSearch = function() {
    window.open(this.settings.searchUriPrefix + encodeURIComponent(this.$searchInput.val()));
  };

  Masthead.updateFavorites = function(favoritesMenuOptions) {
    var favoritesMenu = Masthead.favoritesMenu;
    if (favoritesMenu) {
      favoritesMenu.update(favoritesMenuOptions);
    }
  };

  Masthead.post = function(uri, data) {
    show_spinner();
    $.post(uri, data).complete(Masthead.postComplete);
  };
  Masthead.postComplete = function() {
    hide_spinner();
    window.location.reload(true);
  };
  Masthead.postWithConfirm = function(uri, data, message) {
    if (window.confirm(message)) {
      Masthead.post(uri, data);
    }
  };

var MastheadToolbarAlertsNotifierMenuButton = function(settings) {
    MastheadToolbarMenuButton.call(this, settings);
  };
  MastheadToolbarAlertsNotifierMenuButton.prototype = Object_create(MastheadToolbarMenuButton.prototype);

  // "override" and extend the parent method, is callbed by MastheadToolbarMenuButton.prototype._makeButton
  MastheadToolbarAlertsNotifierMenuButton.prototype._makeButtonContents = function() {
    // extend the base implementation for Alerts.
    return MastheadToolbarMenuButton.prototype._makeButtonContents.call(this)
      // Add an alerts-specific class so we can find the alerts button later
      .addClass('tab-masthead-toolbar-alerts-button-child')
      // Set css display: none to override the parents display: inline-block, alerts are hidden by default.
      // Due to css specificity we need to set this inline.
      .css({
          'display' : 'none'
      });
  };
  // "override" the parent method, is called by MastheadToolbarMenuButton.prototype._makeButtonContents
  MastheadToolbarAlertsNotifierMenuButton.prototype._makeButtonLabel = function() {
    var outer = $('<span>')
      .addClass('tab-alerts-notifier-label')
      .css($.extend({
        'height': '15px',
        'line-height': '15px'
      }, CSS.inlineBlockAlignTop));

    // the alerts icon, either actionable or info
    var icon = $('<span>')
      .addClass('tab-alerts-icon');

    // the alerts label, ie Alerts(0)
    var label = $('<span>')
      .addClass('tab-alerts-notifier-label-text')
      .text(this.settings.label);

    var dom = (outer.append(icon)).append(label);

    if (Masthead.alerts) {
      Masthead.alerts.setDom(dom);
    }

    return dom;
  };
  // "override" the parent method, is bound to click event by MastheadToolbarMenuButton
  MastheadToolbarAlertsNotifierMenuButton.prototype._showMenu = function() {
    Masthead.alerts.showAlertMenu($.proxy(this.highlight, this), $.proxy(this.unhighlight, this));
  }

  this.Tableau || (this.Tableau = {});
  this.Tableau.Masthead = Masthead;

}).call(this, jQuery);
