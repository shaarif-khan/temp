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
/*global $, $$, $F, Ajax, Effect, Element, Form, jQuery, lyteboxConfirm, myLytebox */

// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
function get_route_base() {
  var site = (typeof __TABLEAU_SITE !== "undefined" && __TABLEAU_SITE) ? __TABLEAU_SITE : ""; // will be defined in layouts
  var leading = '';
  if (site.length > 0) {
    leading += '/t/' + site;
  }
  return leading;
}

function toggle_setting(which, responder_func) {
  var url = get_route_base() + "/prefs/toggle_setting?which=" + which;
  new Ajax.Request(url, {method:'get', asynchronous:true, onComplete:responder_func});
  return true;
}

function set_and_highlight_flash2(msg, details, isError) {
  var $flash = jQuery('#flash');
  if($flash.length === 0) {
    return;
  }

  var makeVisible = (typeof msg === 'string' && msg !== "" && msg !== "&nbsp;");
  var keepAround = false;
  var style = '';
  if (isError) {
    keepAround = true;
    style = 'style="color: red"';
  }

  // For the reasons behind the substitution of "&" with "&amp;" below, see BUGZID:90721.
  // For the reasons behind the escaping of "\n" and "\r" below, see BUGZID:116342.
  $flash.replaceWith(
    '<span  id="flash"><span class="flashText" ' + style + '>' + msg + '</span>' +
    '<span id="show_flash_details">' +
    '<span id="error" style="margin-left:10px">' +
    '<a href="#"  class="flashText" onClick="' +
    'show_popup(' +
    "'" + details.replace(/&/g,"&amp;").replace(/\n/g,"\\\\n").replace(/\r/g,"\\\\r").replace(/'/g,"&rsquo;") + "'" +
    '); return false;"' +
    '">' + tab.wgappStrings.view_details + ' <img src="'+  tableau_assets.VIEW_ERROR + '" border="0"></a>' +
    '</span>' +
    '</span>' +
    ' </span> ');

  if (details.length > 0) {
    keepAround = true;
    jQuery('#show_flash_details').show();
  } else {
    jQuery('#show_flash_details').hide();
  }

  if (makeVisible) {
    if (keepAround) {
      jQuery('.tab-masthead-flash').fadeIn('fast');
    } else {
      jQuery('.tab-masthead-flash').fadeIn('fast').delay(5000).fadeOut('slow');
    }
  } else {
    jQuery('.tab-masthead-flash').hide();
  }
}

function set_and_highlight_flash(msg, details) {
  set_and_highlight_flash2(msg, details, false);
}

function clear_flash() {
  set_and_highlight_flash("&nbsp;","");
}

//
// getPageSize()
// Returns array with page width, height and window width, height
// Core code from - quirksmode.org
// Edit for Firefox by pHaez
//
function getPageSize(){

  var xScroll, yScroll;

  if (window.innerHeight && window.scrollMaxY) {
    xScroll = document.body.scrollWidth;
    yScroll = window.innerHeight + window.scrollMaxY;
  } else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
    xScroll = document.body.scrollWidth;
    yScroll = document.body.scrollHeight;
  } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
    xScroll = document.body.offsetWidth;
    yScroll = document.body.offsetHeight;
  }

  var windowWidth, windowHeight;
  if (self.innerHeight) { // all except Explorer
    windowWidth = self.innerWidth;
    windowHeight = self.innerHeight;
  } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
    windowWidth = document.documentElement.clientWidth;
    windowHeight = document.documentElement.clientHeight;
  } else if (document.body) { // other Explorers
    windowWidth = document.body.clientWidth;
    windowHeight = document.body.clientHeight;
  }

  // for small pages with total height less then height of the viewport
  if(yScroll < windowHeight){
    pageHeight = windowHeight;
  } else {
    pageHeight = yScroll;
  }

  // for small pages with total width less then width of the viewport
  if(xScroll < windowWidth){
    pageWidth = windowWidth;
  } else {
    pageWidth = xScroll;
  }

  pageSize = {pageWidth: pageWidth, pageHeight: pageHeight, windowWidth: windowWidth, windowHeight: windowHeight };
  return pageSize;
}

function isIE() { return (window.attachEvent && !window.opera); }

function sessionTimeoutSuggestLogin(request){
  var msg = "session_timeout_msg";
  lyteboxConfirm('tableau_lytebox',tab.wgappStrings[msg],
    function(request){
      if (request === true) {
        window.location='/auth?destination='+encodeURIComponent(window.location.pathname+window.location.search);
      }
    }
  );
}

function showErrorSuggestRefresh(message,request){
  lyteboxConfirm('tableau_lytebox',message,
    function(request){
      if (request === true){
        window.location='/auth?destination='+encodeURIComponent(window.location.pathname+window.location.search);
        }
      }
  );
}


/* idea from http://simonwillison.net/2004/May/26/addLoadEvent/ */
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    };
  }
}

/* idea from http://mbccs.blogspot.com/2007/11/fixing-window-resize-event-in-ie.html */
var resizeTimeoutId;

function window_resize(e) {
     window.clearTimeout(resizeTimeoutId);
     resizeTimeoutId = window.setTimeout('doResizeStack();', 10);
}

function doResizeStack() {
  if (typeof timeout_protected_resize_stack == 'function') {
    timeout_protected_resize_stack();
  }
}

/* idea from http://simonwillison.net/2004/May/26/addLoadEvent/ */
var timeout_protected_resize_stack;

function addResizeEvent(func) {
  var oldresize = timeout_protected_resize_stack;
  if (typeof timeout_protected_resize_stack != 'function') {
     timeout_protected_resize_stack = func;
     window.onresize = window_resize;
  } else {
    timeout_protected_resize_stack = function() {
      if (oldresize) {
        oldresize();
      }
      func();
    };
  }
}




///////////////////////////////////////////////////////////////////////////////

// abstracting the hardcoded "my_form" a bit
function set_table_form_var(name, val) {
  var form = 'my_form';
  if (document.forms[form]) {
    $(document.forms[form][name]).value = val;
  }
}

function get_table_form_var(name) {
  var form = 'my_form';
  if (document.forms[form] && document.forms[form][name]) {
    return $F(document.forms[form][name]);
  }
  else {
    return null;
  }
}
function get_table_form_element(name) {
  var form = 'my_form';
  if (document.forms[form] && document.forms[form][name]) {
    return document.forms[form][name];
  }
  else {
    return null;
  }
}
function get_global_jval(name) {
  return $("jval_"+name).value;
}

// came from views_table, domains/index, licensing/index
function onActionChanged(verb, /* optional */ confirmed_verb, addendum, direct_object) {
  set_table_form_var('verb', verb || "");
  set_table_form_var('confirmed_verb', confirmed_verb || "");
  set_table_form_var('addendum', addendum || "");
  set_table_form_var('direct_object', direct_object || "");
  process_verb(false);
  return false;
}

// came from image_text_selector
function update_page_type(action) {
  url = get_route_base() + "/prefs/" + action + "?location=" + encodeURIComponent(window.location.pathname + window.location.search);
  document.location.href = url;
}

// came from multiselect_actions dialog

// came from multiselect_actions
function afterCustomSelectBox(name, listItem) {
  var sel = $(name);
  var attrs = listItem.attributes;
  var conf = attrs.confirm;
  conf = conf ? conf.value : null;
  var addendum = attrs.addendum;
  var direct_object = attrs.direct_object;
  var local_func = attrs.local_func;
  var value = attrs.data_value.value;
  if (local_func && local_func.value){
    eval(local_func.value);
  } else {
    addendum = addendum ? addendum.value : null;
    direct_object = direct_object ? direct_object.value : null;
    onActionChanged(value, conf, addendum, direct_object);
  }
}

// came from toolbar_table
function set_controls(state) {
  var controls = $$('.theControlsBar');
  var image = $('theControlsDispImg');
  var toggler = $('manage');
  var boxes = $$('.multi_select_checkbox');
  var box_parents_selected = $$('.checkbox_container_selected');
  var box_parents_unselected = $$('.checkbox_container_unselected');
  if ((0 == controls.length) || !image || !toggler) {
    return;
  }

  if (state) {
    controls.each(function(thing){thing.style.visibility = 'visible';});
    box_parents_selected.each(function(thing){thing.style.visibility = 'visible';});
    box_parents_unselected.each(function(thing){thing.style.visibility = 'visible';});
    image.src = tableau_assets.EXPAND_LEFT;
    boxes.each(function(td){td.style.visibility = 'visible';});
  } else {
    controls.each(function(thing){thing.style.visibility = 'hidden';});
    box_parents_selected.each(function(thing){thing.style.visibility = 'hidden';});
    box_parents_unselected.each(function(thing){thing.style.visibility = 'hidden';});
    image.src = tableau_assets.EXPAND_RIGHT;
    boxes.each(function(td){td.style.visibility = 'hidden';});
  }
}

// **** section: came from toolbar_table

function toggle_controls() {
  var controls = $$('.theControlsBar');
  if (controls.length == 0) {
    return;
  }
  set_controls(controls[0].style.visibility == 'hidden');
  new Ajax.Request(get_route_base() + '/prefs/toggle_usage_mode', {method: 'get', asynchronous:true});
  return false;
}

function ie_version() {
  if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){ //test for MSIE x.x;
    return Number(RegExp.$1); // capture x.x portion and store as a number
  }
  return undefined;
}

function show_glass_pane() {
  var gp = $('glassPane');
  if (gp === null) {
    return;
  }
  if (gp.style.display == 'block') {
    return;
  }
  var actions = $('actions_parent');
  var pagecontroltablehead = $('pagecontrolTableHead');
  var additional_height = 0;
  var additional_width = 1; /* all browsers seem to need at least a pixel extra width */

  if (pagecontroltablehead) {
    additional_height = pagecontroltablehead.offsetHeight;
  }

  /* various fixups for various flavors of ie */
  var ieversion = ie_version();
  if (ieversion >= 7 && ieversion < 8) {
    additional_height += 1;
  }
  if (ieversion >= 8 && ieversion <= 9) {
    additional_width += 1;
  }

  gp.style.width = actions.offsetWidth + additional_width + 'px';
  gp.style.height = actions.offsetHeight + additional_height + 'px';
  gp.style.display = 'block';
}

function hide_glass_pane() {
  $('glassPane').style.display = 'none';
}

function findPos(obj) {
  var left = 0, top = 0;
  do {
      left += obj.offsetLeft;
      top += obj.offsetTop;
  } while (obj = obj.offsetParent);
  return {left: left, top: top};
}

function doHighlightCheckbox(box) {
  var s = "checkbox_container_";
  box.parentNode.className = s + ((true == box.checked) ? "selected" : "unselected");
}

// This is used by the "multi-select" checkboxes in flextables and thumbnail view.
function checkbox_button_clicked(button, callback) {
  var box = button.previousSibling
  box.checked = !box.checked;
  callback(box);
  return true;
}

function update_pagination(ajax_content_id, page, page_count) {
    var pageControlForm = jQuery("#" + ajax_content_id).closest(".viewsTableContainer").find("form.pageControl");

    // Update page number
    if (page_count < 2) {
        pageControlForm.find("span.pageNumber").show();
        pageControlForm.find("input.pageNumber").hide();
    } else {
        pageControlForm.find("span.pageNumber").hide();
        var numberOfDigitsInPageCount = 1 + Math.floor(Math.log(page_count) / Math.LN10);
        pageControlForm.find("input.pageNumber")
            .val(page)
            .attr("size", numberOfDigitsInPageCount)
            .show();
    }

    // Update page count
    pageControlForm.find("span.pageCount").text(page_count);

    // Update previous & next links
    var update_link = function(linkClass, destination_page) {
        if (destination_page < 1 || destination_page > page_count) {
            pageControlForm.find("a." + linkClass).hide();
            pageControlForm.find("span." + linkClass).show();
        } else {
            pageControlForm.find("span." + linkClass).hide();
            pageControlForm.find("a." + linkClass)
                .attr("href", function(i, url) { return url.replace(/p=\d*/, 'p=' + destination_page) })
                .show();
        }
    }
    update_link("pagePrevious", page-1);
    update_link("pageNext", page+1);
}

function update_checkboxes() {
  cart_status = get_cart_status();

  if(cart_status['using_cart']) {
    selection_changed(true);
    return false;
  }
  $$(".multi_select_checkbox").each(function(thing) {
    doHighlightCheckbox(thing);
  });
  selection_changed(true);
}

function page_load_checkbox_reconciler() {
  var update_required = false;
  $$(".multi_select_checkbox").each(function(thing) {if (thing.checked === true) {update_required = true;}});
  if (update_required === true) {
    update_checkboxes();
  }
  if (get_table_form_var('multiple_pages_selected') === 'true') {
    Element.setStyle('multipage_warning',{'display':''});
  }
}

function get_cart_status() {
  return {
    using_cart: jQuery('#cartStatus').length > 0,
    cart_count: parseInt(jQuery('#cartCount').html())
  };
}

function update_page_selector_image() {
  if ('true' === get_table_form_var('multiple_pages_selected')) {
    $('page_selector_shortcut').src = tableau_assets.CHECK_ALLPAGES;
  }
  else if ('true' === get_table_form_var('all')) {
    $('page_selector_shortcut').src = tableau_assets.CHECK_SELECT;
  }
  else {
    var count = $$('#my_form .checkbox_container_selected').length;
    if (0 === count) {
      $('page_selector_shortcut').src = tableau_assets.CHECK_NONE;
    } else {
      $('page_selector_shortcut').src = tableau_assets.CHECK_MULTI;
    }
  }
}

function manage_multi_select(source) {
  clear_flash();
  if (get_table_form_var('multiple_pages_selected') === 'true') {
    clear_multi_select_all_no_ajax();
  } else {
    set_table_form_var('all', 'false');
    doHighlightCheckbox(source);
  }
  show_glass_pane();
  show_spinner();
  selection_changed();
  return false;
}

function clear_multi_select_all_no_ajax(){
  $$('#my_form input.multi_select_checkbox').each(function(box){
    box.checked = false;
    doHighlightCheckbox(box);
  });
  set_table_form_var('all', 'false');
  set_table_form_var('multiple_pages_selected', 'false');
  Element.setStyle('multipage_warning',{'display':'none'});
  return false;
}

function select_all_on_page(multiple_page_flag, update_sel) {
  if (update_sel === undefined) { update_sel = true; }
  clear_flash();
  jQuery('#selectAllMsg').hide();
  $$('#my_form input.multi_select_checkbox').each(function(box){
    box.checked = true;
    doHighlightCheckbox(box);
  });
  set_table_form_var('all', 'true');
  set_table_form_var('multiple_pages_selected', multiple_page_flag);
  if (update_sel) {
    show_glass_pane();
    selection_changed();
  }
  return false;
}

function clear_multi_select_all() {
  clear_multi_select_all_no_ajax();
  show_glass_pane();
  selection_changed();
  return false;
}

function show_spinner(hide) {
  jQuery('#spinner').css('display', hide ? 'none' : 'inline-block');
}

function hide_spinner() {
  show_spinner(true);
}

function toggle_display(id) {
  var elem = $(id);
  if(elem) {
    elem.style.display = elem.style.display === 'none' ? '' : 'none';
  }
}

function submitFormAppropriately() {
  var form = 'my_form';
  show_spinner();
  if ("true" == get_table_form_var('ajax_only') ) {
  new Ajax.Request(document.forms[form].action,
                     { asynchronous:true, evalScripts:true,
                       on401:sessionTimeoutSuggestLogin,
                       onComplete:function(request){hide_spinner();},
                       parameters:Form.serialize($(document.forms[form]))});
    } else {
    $(document.forms[form]).submit();
  }
}

function confirm_dismissed() {
  if (true == myLytebox.confirmed) {
    submitFormAppropriately();
  }
}

function multiselect_force_submit(verb) {
  set_table_form_var('verb', verb);
  submitFormAppropriately();
}

function process_verb(using_pseudo_checkbox)
{

  var verb = get_table_form_var('verb');
  if (0 == verb.length) {
    return;
  }
  var confirmed_verb = get_table_form_var('confirmed_verb');
  var count, descriptor;
  var direct_object = get_table_form_var('direct_object');

  var cart_status = get_cart_status();

  if (!using_pseudo_checkbox) {
    setup_pseudo_checkbox('');
  }

  if ('false' == get_table_form_var('all') ||
      'false' == get_table_form_var('multiple_pages_selected') ) {
    count = $$('#my_form .checkbox_container_selected').length;
    if(cart_status['using_cart']) {
      count = cart_status['cart_count'];
    }
  } else {
    count = get_table_form_var('action_menu_all_count') || 0;
    if(cart_status['using_cart']) {
      count = cart_status['cart_count'];
    }
  }
  var domain = get_table_form_var('multiselect_domain');
  var permissions_pattern =    new RegExp("(contents_)*permissions(.*)");
  var confirm_pattern =        new RegExp("confirm_(.*)");
  var confirm_delete_pattern = new RegExp("confirm_delete(.*)");
  var always_execute_pattern = new RegExp("always_execute_(.*)");
  var confirm_moveTo_pattern = new RegExp("confirm_move_to_project_(.*)");
  if (confirmed_verb) {
    addendum = get_table_form_var('addendum');
  }

  if (count > 0 || always_execute_pattern.exec(verb) ) {
    if ((confirm_delete_pattern.exec(verb) && count > 0) ||
        (confirm_pattern.exec(verb) && count > 5) ||
        (permissions_pattern.exec(verb) && count > 100)) {
      //New code.....
      var action;
      var localizedString;
      var isMovePatternFound;
      domain = get_table_form_var('multiselect_domain');


      //create key to look for in string table
      isMovePatternFound = confirm_moveTo_pattern.exec(verb);
      if(isMovePatternFound) {
        action = "confirm_move_to_project" + "_"+ domain;
      } else {
        action = verb + "_" + domain;
      }

      if(count>1) {
        action = action + "_" + "multiple";
      } else {
        action = action + "_" + "single";
      }

      if(typeof(tab.wgappStrings[action]) === 'undefined') {
        localizedString = "Localized String KEY not found. Error!" + "(" + action + ")";
      } else {
        if(isMovePatternFound) {
          if(count>1) {
            localizedString = tab.wgappStrings[action](count, direct_object);
          } else {
            localizedString = tab.wgappStrings[action](direct_object);
          }
        } else {
          if(count>1) {
            localizedString = tab.wgappStrings[action](count);
          } else {
            localizedString = tab.wgappStrings[action];
          }
        }
      }

      if (permissions_pattern.exec(verb)) {
        msg = addendum + "<br>" + localizedString + "<br>";
      } else {
        msg = localizedString + "<br>" + addendum;
      }
      lyteboxConfirm("tableau_lytebox", msg, confirm_dismissed);
      } else {
        submitFormAppropriately();
      }
    }
}





var selection_changed, apply_selection_changed;

(function(){
  var multi_select_rid = 0;
  var multi_select_timer = null;

  selection_changed = function(immediate) {
    update_page_selector_image();
    var multi_select_timeout = 500;
    if (multi_select_timer) {
        clearTimeout(multi_select_timer);
    }
    ++multi_select_rid;
    if (true == immediate) {
      apply_selection_changed();
    } else {
      multi_select_timer = setTimeout(apply_selection_changed, multi_select_timeout);
    }
  };

  apply_selection_changed = function() {
    multi_select_timer = null;
    var params = $$("#my_form .multi_select_checkbox").collect(function(thing) {
      return thing.name + "=" + (thing.checked ? "1" : "0");
    }).join('&');
    params += '&multiple_pages_selected=' + get_table_form_var('multiple_pages_selected') +
              "&original=" +                get_table_form_var('original') +
              "&id=" +                      get_table_form_var('container_id') +
              "&container_type=" +          get_table_form_var('container_type') +
              "&aggregation=" +             get_table_form_var('aggregation') +
              "&multiselect_domain=" +      get_table_form_var('multiselect_domain') +
              "&s=" +                       get_table_form_var('s') +
              "&current_filters=" +         get_table_form_var('current_filters') +
              "&authenticity_token=" +      get_table_form_var('authenticity_token');

    var rid = ++multi_select_rid;
    new Ajax.Request(get_route_base() + "/selectionChanged/" + get_global_jval('controller_name'),
                     {asynchronous: true, evalScripts: true,
                      on401: sessionTimeoutSuggestLogin,
                      onComplete: function(request){
                        if (rid == multi_select_rid) { hide_spinner(); hide_glass_pane(); }
                      },
                      parameters: params} );
  };
}());

// **** end section: came from toolbar_table

var pseudo_checkbox = null;

function reset_pseudo_checkbox() {
  if (pseudo_checkbox) {
    pseudo_checkbox.setAttribute('name','checkbox_');
    pseudo_checkbox.setAttribute("class","");
    pseudo_checkbox.setAttribute("className","");
    pseudo_checkbox.value = '';
  }
}

function setup_pseudo_checkbox(id) {
  reset_pseudo_checkbox();
  var basename = 'checkbox_';
  var specific_name = basename + id;
  pseudo_checkbox = get_table_form_element(basename);
  if (!pseudo_checkbox) {
    return;
  }
  pseudo_checkbox.setAttribute('name',specific_name);
  if (typeof(id) == "number") {
    pseudo_checkbox.setAttribute("class","checkbox_container_selected");
    pseudo_checkbox.setAttribute("className","checkbox_container_selected");
    pseudo_checkbox.value = '1';
  }
  else {
      reset_pseudo_checkbox();
  }

}

function publicDelete(id, object_name) {
  //set the form vars as if a single selection is made
  set_table_form_var('verb','confirm_delete');
  set_table_form_var('confirmed_verb','delete');
  set_table_form_var('direct_object',object_name);
  if (get_table_form_var('multiselect_domain') === 'workbooks') {
    set_table_form_var('addendum', 'Deleting this workbook makes it unavailable ' +
                                   'in webpages and downloaded workbooks that reference it.');
  }
  else {
      set_table_form_var('addendum','Deleting this view makes it unavailable in webpages that refer to it.');
  }
  set_table_form_var('all', false);

  // fake a checkbox somewhere!!
  setup_pseudo_checkbox(id);
  process_verb(true);
  return false;
}


function page_selector_clicked() {
  if ('true' === get_table_form_var('multiple_pages_selected')) {
    clear_multi_select_all();
  }
  else if ('true' === get_table_form_var('all')) {
    if ('true' === get_table_form_var('multiple_pages')) {
      Element.setStyle('multipage_warning',{'display':''});
    }
    select_all_on_page('true');
  } else {
    select_all_on_page('false');
  }
}

function mark_body_for_ie() {
  var $body = jQuery('body');
  if ($body.length === 0) {
      return; // something is wrong if we can't find body tag
  }
  var ieversion = 7;
  var iesix = false;
  var ieeight = false;
  var ieseven = false;
  if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){ //test for MSIE x.x;
    ieversion = Number(RegExp.$1); // capture x.x portion and store as a number
    if ((ieversion >= 6) && (ieversion < 7)) {
       iesix = true;
       $body.addClass('ie6');
    }
    if ((ieversion >= 7) && (ieversion < 8)) {
      // documentMode is only supported in IE 8 so we know if its here its really IE 8
      if (document.documentMode) {
        // IE in Compat mode will mention Trident in the useragent
        if (/trident\/\d/i.test(navigator.userAgent)) {
          ieeight = true;
          $body.addClass('ie8');
        } else {
          ieseven = true;
          $body.addClass('ie7');
        }
      } else {
        ieseven = true;
        $body.addClass('ie7');
      }
    }
    if ((ieversion >= 8) && (ieversion < 9)) {
       ieeight = true;
       $body.addClass('ie8');
    }
  }
}

function mark_body_with_css_class(name) {
  jQuery('body').addClass(name);
}

function attach_char_limit_behavior(selector, limit, remaining_str) {
  var $label, $textfield;
  $textfield = jQuery(selector);
  limit = limit || 1000;
  remaining_str = remaining_str || (limit + ' characters remaining');

  if($textfield.length > 0) {
    /* create the remaining field */
    $label = jQuery('<label class="remainingChars" for="' + $textfield.prop('id') + '">' + remaining_str + '</label>');
    $textfield.before($label);
    $textfield.bind('keyup keydown blur', function() {
      var count = $textfield.val().length;
      if (count > limit) {
        $textfield.val($textfield.val().substring(0,limit));
        count = limit;
      }
      if ($label.length > 0) {
        $label.html(remaining_str.replace(/[0-9]+/, limit - count));
      }
    });
    $textfield.keyup(); /* trigger the handler on page load */
  }
}

// END- Deny access to raw data and workbook functions

function launchViewEditing(url) {
  window.top.location= url;
}

// if you're looking for methods specific to public, check out beaker.js
