// Copyright (c) 2006 -2007 Gabriel Lanzani (http://www.glanzani.com.ar)
// 
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
// 
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
// SEE CHANGELOG FOR A COMPLETE CHANGES OVERVIEW
// VERSION 0.2b
//
// The version below is heavily modified by Tableau Software

Autocompleter.SelectBox = Class.create();
Autocompleter.SelectBox.prototype = Object.extend(new Autocompleter.Base(), {
  initialize: function(select, options) {
    var comboid = $(select).id + "_combo"
    if($(comboid) == null) {
    	this.element = "<input type=\"text\" id=\"" + $(select).id + "_combo\" />"
    	new Insertion.Before(select, this.element)
    } 
	var inputClasses = Element.classNames(select);
	inputClasses.each(function(inputClass)
		{
			Element.addClassName($(select).id + "_combo", inputClass);
		});
		
    var clsName = options.classname || "autocomplete"
    
    var id = $(select).id + "_options"
    if($(id) == null) {
    	this.update = "<div id=\"" + id + "\" class=\""+clsName+"\" style=\"display:none\"></div>"	
    	new Insertion.Before(select, this.update);
    }
		
    // Custom onShow to allow us to be in control of the width
    options.onShow = function(element, update) { 
        if(!update.style.position || update.style.position=='absolute') {
          update.style.position = 'absolute';
          Position.clone(element, update, {
            setHeight: false, setWidth: false,
            offsetTop: element.offsetHeight
          });
        }
        Effect.Appear(update,{duration:0.15});
      };
    
    this.baseInitialize($(select).id + "_combo", $(select).id + "_options", options);
    this.select = select;
	this.enabled = true;
	
	// Override the show method
	this.baseShow = this.show;
	this.show = function() {
        if(this.enabled)
            this.baseShow();
    };
		
	$(this.element.id).setAttribute('readonly','readonly');
	this.element.readOnly = true;
	if(this.options.debug)alert('input ' + this.element.id + ' and div '+ this.update.id + ' created, Autocompleter.Base() initialized');
	if(!this.options.debug)Element.hide(select);
	
    this.rebuildMenu();

	Event.observe(this.element, "click", this.activate.bindAsEventListener(this));
	
	this.element.value = $(select).options[$(select).selectedIndex].innerHTML;
	
	var self = this;
	this.options.afterUpdateElement = function(text, li) {
		var optionList = $(select).getElementsByTagName('option');
		var nodes = $A(optionList);
		
		var opt = nodes.find( function(node){
			return (node.value == li.id);
		});
		
		if(opt == undefined)
		  return;
		  
		// Don't do anything for disabled commands
		if(opt.getAttribute("disabled")) {
		    $(select).selectedIndex=0; 
		    self.index = 0;
    		return;
        }
		  
		$(select).selectedIndex=opt.index;
		if(self.options.redirect) document.location.href = opt.value;
		if(self.options.autoSubmit != '') 
			$(self.options.autoSubmit).submit;
        if(this.afterFunction)
            this.afterFunction();
	}
  },
  
  _addElements: function(elt,indent) {
   if(elt.tagName && elt.tagName.toLowerCase() == "option") {
      var cls = "";
      if(elt.getAttribute("disabled")) {
        cls = "class='disabled'";
      }
      this.selectOptions.push("<li id=\"" + elt.value + "\" " + cls + ">" + indent + elt.innerHTML.strip() + '</li>');
      if (elt.getAttribute("selected")) this.element.value = elt.innerHTML.strip();
   } else if(elt.tagName && elt.tagName.toLowerCase() == "optgroup") {
      var kids = elt.childNodes;
      this.selectOptions.push("<li class='action_group'>"+indent+elt.getAttribute("label")+"</li>");
      for(j=0 ; j<kids.length ; j++) {
        var kid = kids[j];
        this._addElements(kid,this.options.indent ? indent+"&nbsp;&nbsp;&nbsp;&nbsp;" : "");
      }
   }
  },
  
  selectEntry: function() {
    this.active = false;
    elt = this.getCurrentEntry();    
    if(elt.className.indexOf("disabled") >= 0 || elt.className.indexOf('action_group')>=0)
        this.index=0;
    this.updateElement(this.getCurrentEntry());  
  },
	
  rebuildMenu: function() {
	this.selectOptions = [];

	var nodes = $(this.select).childNodes;
	var i = 0;
	while(!nodes[i].tagName && i<nodes.length) { i++; }
	i++; //Skip the first real option (which is the menu name)
	for(i; i<nodes.length ; i++) {
       var child = nodes[i];
       this._addElements(child,this.options.indent ? "&nbsp;&nbsp;&nbsp;&nbsp;" : "");
	}  
  },
  
  disable: function() {
    $(this.element).value = "Loading...";
    this.enabled = false;
  },
  
  enable: function() {
    $(this.element).value = "Actions...";
    this.enabled = true;
  },
  
  getUpdatedChoices: function() {
  		this.updateChoices(this.setValues());
  },

  setValues : function(){
		return ("<ul>" + this.selectOptions.join('') + "</ul>");
  },
  
  setOptions: function(options) {
    this.options = Object.extend({
		//MORE OPTIONS TO EXTEND THIS CLASS
		redirect	: false, // redirects using 
		debug		: false, //show alerts with information
		autoSubmit	: '' //form Id to submit after change 
	}, options || {});
  }  
})