// Copyright (C) 2005-2008 Ilya S. Lyubinskiy. All rights reserved.
// Technical support: http://www.php-development.ru/
//
// YOU MAY NOT
// (1) Remove or modify this copyright notice.
// (2) Re-distribute this code or any part of it.
//     Instead, you may link to the homepage of this code:
//     http://www.php-development.ru/javascripts/dropdown.php
//
// YOU MAY
// (1) Use this code on your website.
// (2) Use this code as part of another product.
//
// NO WARRANTY
// This code is provided "as is" without warranty of any kind.
// You expressly acknowledge and agree that use of this code is at your own risk.


// ***** Popup Control *********************************************************

// ***** at_show_aux *****

function at_show_aux(parent, child)
{
  var p = document.getElementById(parent);
  var c = document.getElementById(child );
  c.style.display = 'block';
  var pWidth = p.offsetWidth;
  
  if (p.onShow) p.onShow();
  add_class(p, 'popup-active');
  
  c.style.minWidth   = p.offsetWidth + 'px';
  
  var top  = (c["at_position"] == "y") ? p.offsetHeight : 0;
  var left = (c["at_position"] == "x") ? p.offsetWidth  : 0;

  for (; p; p = p.offsetParent)
  {
    top  += p.offsetTop;
    left += p.offsetLeft;
  }

  top -= 4;
  left -= 4;
  
  c.style.position   = "absolute";
  c.style.top        = top +'px';
  if(c['force_align'] === 'left' || pWidth > c.offsetWidth) { 
    c.style.left       = left+'px';
  } else {
    c.style.left       = (left-(c.offsetWidth-pWidth))+'px';
  }
}

// ***** at_show *****

function at_show()
{
  var p = document.getElementById(this["at_parent"]);
  var c = document.getElementById(this["at_child" ]);

  at_show_aux(p.id, c.id);
  clearTimeout(c["at_timeout"]);
}

// ***** at_hide *****

function at_hide()
{
  var p = document.getElementById(this["at_parent"]);
  var c = document.getElementById(this["at_child" ]);

  if (c.style.display == 'none')
    remove_class(p, 'popup-active');

  c["at_timeout"] = setTimeout("remove_class('" +p.id+"', 'popup-active');$('" + c.id + "').style.display='none';", 500);
}

function at_hide_now() {
  var p = document.getElementById(this["at_parent"]);
  var c = document.getElementById(this["at_child" ]);

  clearTimeout(c["at_timeout"]);
  remove_class(p, 'popup-active');
  c.style.display = 'none';
}

function at_cancel_hide()
{
  var p = document.getElementById(this["at_parent"]);
  var c = document.getElementById(this["at_child" ]);
  clearTimeout(c['at_timeout']);
  add_class(p, 'popup-active');
}

// ***** at_click *****

function at_click()
{
  var p = document.getElementById(this["at_parent"]);
  var c = document.getElementById(this["at_child" ]);

  if (c.style.display == 'none')
    at_show_aux(p.id, c.id);
  else
    c.style.display = 'none';
    
  return false;
}

function add_class(node, classStr) {
	var cls = node.className;
	if((" "+cls+" ").indexOf(" "+classStr+" ") < 0){
		node.className = cls + (cls ? ' ' : '') + classStr;
	}    
}

function remove_class(node, classStr) {
    node = $(node);
	var t = node.className.replace(classStr, "");
	if(node.className != t){ node.className = t; }    
}

// ***** at_attach *****

// PARAMETERS:
// parent   - id of the parent html element
// child    - id of the child  html element that should be droped down
// showtype - "click" = drop down child html element on mouse click
//            "hover" = drop down child html element on mouse over
// position - "x" = display the child html element to the right
//            "y" = display the child html element below
// cursor   - omit to use default cursor or specify CSS cursor name

function at_attach(parent, child, showtype, position, cursor, force_align /*optional "left"*/)
{
  var p = document.getElementById(parent);
  var c = document.getElementById(child);

  p["at_parent"]     = p.id;
  c["at_parent"]     = p.id;
  p["at_child"]      = c.id;
  c["at_child"]      = c.id;
  p["at_position"]   = position;
  c["at_position"]   = position;

  c["force_align"]         = force_align || "left";

  c.style.position   = "absolute";
  c.style.display    = "none";

  if (cursor != undefined) p.style.cursor = cursor;

  switch (showtype)
  {
    case "click":
      p.onclick     = at_click;
      p.onmouseout  = at_hide;
      p.onmouseover = at_cancel_hide;
      c.onmouseover = at_show;
      c.onmouseout  = at_hide;
      c.onclick     = at_hide_now;
      break;
    case "hover":
      p.onmouseover = at_show;
      p.onmouseout  = at_hide;
      c.onmouseover = at_show;
      c.onmouseout  = at_hide;
      c.onclick     = at_hide_now;
      break;
  }
}
