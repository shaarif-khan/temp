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
// TODO: Get rid of superfluous cartAttachEventHandlers calls, remember,
// one is made by prototype in generic_multi_selection render_cart in backend.

var msTimeoutId = 0,
  msQueue = [],
  msTimerSet = false,
  requestCounter = 0,
  extraRowsHidden = false,
  clearURL = '/clear_selection',
  selectionChangedURL = '/selectionChanged',
  checkboxImageURLs = {
    none: tableau_assets.CHECK_NONE,
    some: tableau_assets.CHECK_MULTI,
    all: tableau_assets.CHECK_SELECT,
    multiple_pages: tableau_assets.CHECK_ALLPAGES
  },
  dropdownThreshold = 20,
  authToken,
  multiselectDomain,
  domainCount,
  originalAction,
  $cartClearAllBtnIcon,
  $cartClearAllBtn,
  $cartClearAll,
  $cartCount,
  $cartDomain,
  $cartHighlight,
  $cartMoreItems,
  $cartNoItems,
  cartDomainLabelSingular,
  cartDomainLabelPlural,
  $cartSelectAllMsg;

// Call on initial page load
function cartInitCart() {
  // get params for xhr requests
  authToken = jQuery('[name=authenticity_token]').val();
  multiselectDomain = jQuery('[name=multiselect_domain]').val();
  //cartDomainLabelPlural = multiselectDomain.substr(0, 1).toUpperCase() +
    //multiselectDomain.substr(1);
  cartDomainLabelPlural = tab.wgappStrings[multiselectDomain + "_multiple"];
  cartDomainLabelSingular = tab.wgappStrings[multiselectDomain + "_single"];
  //cartDomainLabelSingular = cartDomainLabelPlural.replace(/s$/, '');
  originalAction = jQuery('[name=original]').val();
  domainCount = jQuery('[name=action_menu_all_count]').val();
  // save jquery selectors that don't change
  $cartCount = jQuery('#cartCount');
  $cartDomain = jQuery('#cartDomain');
  $cartHighlight = jQuery('#cartHighlight');
  $cartSelectAllMsg = jQuery('#selectAllMsg');
  cartAttachEventHandlers();
}

// Call after each cart update
function cartAttachEventHandlers() {
  // Unbind all events first
  $cartClearAllBtn = jQuery('#cartClearAllBtn').unbind('click');
  $cartDeleteBtns = jQuery('.cartItem > .deleteBtn').unbind('click');
  $cartNoItems = jQuery('#cartNoItems');
  $cartMoreItems = jQuery('#cartMoreItems');
  $cartClearAll = jQuery('#cartClearAll');
  $cartClearAllBtnIcon = jQuery('#cartClearAllBtn > span');
  cartHideExtraRows();
  // Bind the clear all button
  $cartClearAllBtn.bind('click', function() {
    if (requestCounter < 1)
      cartClearAll(this);
  });
  $cartDeleteBtns.bind('click', function(event) {
    if (requestCounter < 1)
      cartHandleDeleteClicked(jQuery(this));
  });
  // Prevent clicks in cartList from closing the cart
  jQuery('#cartList').unbind('click');
  jQuery('#cartList').bind('click', function(event) { event.stopPropagation() });
  cartUpdatePageSelectorAndHighlights();
  cartEnableButtons();
}

function cartListItemToCheckbox($li) {
  return jQuery('input#checkbox' + $li.prop('id').replace(/li/, ''));
}

function cartCheckboxToListItem($cb) {
  return jQuery('li#li' + $cb.prop('id').replace(/checkbox/, ''));
}

function cartUncheckCheckbox($cb) {
  $cb.prop('checked', false).closest('span')
    .removeClass('checkbox_container_selected').addClass('checkbox_container_unselected');
}

function cartCheckCheckbox($cb) {
  $cb.prop('checked', true).closest('span')
    .removeClass('checkbox_container_unselected').addClass('checkbox_container_selected');
}

function cartHandleDeleteClicked($clicked) {
  $clicked.unbind('click');
  $li = $clicked.closest('li');
  $pairedCheckbox = cartListItemToCheckbox($li);
  $li.unbind('click').fadeOut('fast', function() {
    cartDecrementRemainingCount();
    $li.remove();
    cartHideExtraRows();
  });
  if ($pairedCheckbox.length) {
    cartUncheckCheckbox($pairedCheckbox);
  }
  cartUpdateSelection($li.prop('id'));
}

function cartUpdatePageSelect() {
  var checkedOnPage = jQuery('input[id^=checkbox]:checked').length;
  var totalOnPage = jQuery('input[id^=checkbox]').length;
  var itemsInCart = parseInt($cartCount.html());
  $cartPageSelector = jQuery('#page_selector_shortcut');
  if (totalOnPage === checkedOnPage) {
    if (itemsInCart > checkedOnPage) {
      $cartPageSelector.prop('src', checkboxImageURLs['multiple_pages']);
      cartPageSelectorState = 'multiple_pages';
    } else {
      $cartPageSelector.prop('src', checkboxImageURLs['all']);
      cartPageSelectorState = 'all';
    }
    if (itemsInCart > 0 && itemsInCart < domainCount) {
      displaySelectAllLink();
    }
    else {
      hideSelectAllLink();
    }
  } else {
    if (checkedOnPage == 0) {
      $cartPageSelector.prop('src', checkboxImageURLs['none']);
      cartPageSelectorState = 'none';
    } else {
      $cartPageSelector.prop('src', checkboxImageURLs['some']);
      cartPageSelectorState = 'some';
    }
    hideSelectAllLink();
  }
}

function cartDecrementRemainingCount() {
  var notVisibleSize = parseInt(jQuery('#cartSizeNotVisible').html());
  if (!isNaN(notVisibleSize)) {
    jQuery('#cartSizeNotVisible').html( notVisibleSize - 1 );
  }
}

// Checkbox could be an id or a jquery selector string
function cartUpdateSelection(checkbox) {
  cartUpdatePageSelect();
  $cb = jQuery(checkbox);
  // see if it has a matching checkbox, because we could have
  // come from the deleteBtn handler
  if ($cb.length) {
    if ($cb.prop('checked')) {
      cartCheckCheckbox($cb);
    } else {
      cartUncheckCheckbox($cb);
      var $pairedLi = cartCheckboxToListItem($cb);
      if ($pairedLi)
        $pairedLi.unbind('click').remove();
        cartHideExtraRows();
    }
  }
  msQueue.push(checkbox);
  clearTimeout(msTimeoutId);
  msTimerSet = true;
  msTimeoutId = setTimeout('cartSelectionChangedXHR()', 1000);
}

function cartHideExtraRows() {
  if (jQuery('#cartList li[id^=li]:gt(' + (dropdownThreshold - 1) + ')').hide().length > 0) {
    extraRowsHidden = true;
  } else {
    /* The number of hidden items is too few, and the cart was previously truncated
     * so we need to do an update to get some more hidden items */
    if (extraRowsHidden) {
      immediateSelectionChanged();
    }
    extraRowsHidden = false;
  }
  jQuery('#cartList li[id^=li]:lt(' + dropdownThreshold + ')').show();
  if (jQuery('#cartList li[id^=li]').length > dropdownThreshold) {
    $cartMoreItems.show();
  } else {
    $cartMoreItems.hide();
  }
  if (jQuery('#cartList li[id^=li]').length < 1) {
    $cartNoItems.show();
    $cartClearAll.hide();
  } else {
    $cartNoItems.hide();
    $cartClearAll.show();
  }
}

function cartDisableButtons() {
  $cartDeleteBtns.toggleClass('cartButtonDisabled', true)
    .toggleClass('cartButtonEnabled', false);
  $cartClearAllBtnIcon.toggleClass('cartButtonDisabled', true)
    .toggleClass('cartButtonEnabled', false);
  $cartClearAllBtn.toggleClass('cartPointer', false);
}

function cartEnableButtons() {
  if (requestCounter < 1) {
    $cartDeleteBtns.toggleClass('cartButtonDisabled', false)
      .toggleClass('cartButtonEnabled', true);
    $cartClearAllBtnIcon.toggleClass('cartButtonDisabled', false)
      .toggleClass('cartButtonEnabled', true);
    $cartClearAllBtn.toggleClass('cartPointer', true);
  }
}

function immediateSelectionChanged() {
  show_glass_pane();
  cartDisableButtons();
  clearTimeout(msTimeoutId);
  cartSelectionChangedXHR();
}

function cartSelectionChangedXHR() {
  var add = [], remove = [];
  show_glass_pane();
  cartDisableButtons();
  show_spinner();
  // process the items that have recently been clicked/deleted
  jQuery.each(msQueue, function(i, val) {
    if (typeof val === 'string') {
      var id = val.split('_')[1];
      if (remove.indexOf(id) === -1) remove.push(id);
    } else if (jQuery(val).length > 0) {
      var id = jQuery(val).prop('id').split('_')[1];
      var isChecked = jQuery(val).prop('checked');
      if (isChecked) {
        if (add.indexOf(id) === -1) add.push(id);
      } else {
        if (remove.indexOf(id) === -1) remove.push(id);
      }
    }
  });
  msTimerSet = false;
  requestCounter++;
  cartDisableButtons();
  new Ajax.Request(get_route_base() + selectionChangedURL + '/' + multiselectDomain, {
    asynchronous:true,
    method:'post',
    evalScripts:true,
    on401:sessionTimeoutSuggestLogin,
    onComplete: function(request) {
      requestCounter--;
      if (requestCounter == 0 && !msTimerSet) {
        hide_glass_pane();
        hide_spinner();
        msQueue = [];
      }
      cartAttachEventHandlers(); //TODO: Is this one necessary?
    },
    parameters: {
      multiselect_domain: multiselectDomain,
      remove_selection: remove.join('_'),
      add_selection: add.join('_'),
      authenticity_token: authToken,
      original: originalAction
    }
  });
}

function cartUpdatePageSelectorAndHighlights() {
  var count;

  cartUpdatePageSelect();
  $cartHighlight.toggleClass('cartHighlight',
    parseInt($cartCount.html()) > 0);
  count = parseInt($cartCount.html());
  $cartDomain.html(count === 1 ? cartDomainLabelSingular : cartDomainLabelPlural);
  // If a checkbox is checked, make sure it has its highlight too
  jQuery('input[id^=checkbox]:checked').each(function(){
    jQuery(this).parent().removeClass('checkbox_container_unselected').addClass('checkbox_container_selected');
  });
}

function cartPageSelectorClicked() {
  switch (cartPageSelectorState) {
    case "none":
    case "some":
      cartSelectAllOnPage();
      break;
    case "all":
    case "multiple_pages":
      cartSelectNoneOnPage();
      break;
  }
}

function displaySelectAllLink() {
  $cartSelectAllMsg.find('#domainCount').html(domainCount);
  $cartSelectAllMsg.show();
}

function hideSelectAllLink() {
  $cartSelectAllMsg.hide();
}

function cartSelectAllOnPage() {
  cartPageSelectorState = 'all';
  var $checkbox = jQuery('#page_selector_shortcut');
  $checkbox.prop('src', checkboxImageURLs['some']);
  jQuery('.multi_select_checkbox').each(function() {
    cartCheckCheckbox(jQuery(this));
    msQueue.push(this);
  });
  cartSelectionChangedXHR();
}

function cartSelectNoneOnPage() {
  cartPageSelectorState = 'none';
  var $checkbox = jQuery('#page_selector_shortcut');
  $checkbox.prop('src', checkboxImageURLs['none']);
  jQuery('input[id^=checkbox]:checked').each(function() {
    jQuery(this).prop('checked', false)
      .parent().removeClass('checkbox_container_selected').addClass('checkbox_container_unselected');
    msQueue.push(this);
  });
  cartSelectionChangedXHR();
}

function cartClearAll() {
  set_table_form_var('all', 'false');
  set_table_form_var('multiple_pages_selected', 'false');
  extraRowsHidden = false;
  jQuery('li[id^=li]').remove();
  new Ajax.Request(get_route_base() + clearURL + '/' + multiselectDomain, {
      asynchronous:true,
      method: 'get',
      evalScripts: true,
      on401: sessionTimeoutSuggestLogin,
      parameters: { multiselect_domain: multiselectDomain }
    });
  cartResetEverything();
}

function cartResetEverything() {
  // called when
  jQuery('#page_selector_shortcut').prop('src', checkboxImageURLs['none']);
  $cartCount.html(0);
  $cartDomain.html(cartDomainLabelPlural);
  $cartHighlight.toggleClass('cartHighlight', false);
  extraRowsHidden = false;
  cartHideExtraRows();
  cartUncheckCheckbox(jQuery('.multi_select_checkbox'));
}
