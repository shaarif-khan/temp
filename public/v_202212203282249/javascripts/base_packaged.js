/*! jQuery v1.12.2 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.2",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ra(b),i=l.boxSizing&&"border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Sa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Oa.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+eb(b,c,e||(i?"border":"content"),f,h)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){
return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){
return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});


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
jQuery.noConflict();


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




/*  Prototype JavaScript framework, version 1.7_rc3
 *  (c) 2005-2010 Sam Stephenson
 *
 *  Prototype is freely distributable under the terms of an MIT-style license.
 *  For details, see the Prototype web site: http://www.prototypejs.org/
 *
 *--------------------------------------------------------------------------*/

var Prototype = {

  Version: '1.7_rc3',

  Browser: (function(){
    var ua = navigator.userAgent;
    var isOpera = Object.prototype.toString.call(window.opera) == '[object Opera]';
    return {
      IE:             !!window.attachEvent && !isOpera,
      Opera:          isOpera,
      WebKit:         ua.indexOf('AppleWebKit/') > -1,
      Gecko:          ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') === -1,
      MobileSafari:   /Apple.*Mobile/.test(ua)
    }
  })(),

  BrowserFeatures: {
    XPath: !!document.evaluate,

    SelectorsAPI: !!document.querySelector,

    ElementExtensions: (function() {
      var constructor = window.Element || window.HTMLElement;
      return !!(constructor && constructor.prototype);
    })(),
    SpecificElementExtensions: (function() {
      if (typeof window.HTMLDivElement !== 'undefined')
        return true;

      var div = document.createElement('div'),
          form = document.createElement('form'),
          isSupported = false;

      if (div['__proto__'] && (div['__proto__'] !== form['__proto__'])) {
        isSupported = true;
      }

      div = form = null;

      return isSupported;
    })()
  },

  ScriptFragment: '<script[^>]*>([\\S\\s]*?)<\/script>',
  JSONFilter: /^\/\*-secure-([\s\S]*)\*\/\s*$/,

  emptyFunction: function() { },

  K: function(x) { return x }
};

if (Prototype.Browser.MobileSafari)
  Prototype.BrowserFeatures.SpecificElementExtensions = false;


var Abstract = { };


var Try = {
  these: function() {
    var returnValue;

    for (var i = 0, length = arguments.length; i < length; i++) {
      var lambda = arguments[i];
      try {
        returnValue = lambda();
        break;
      } catch (e) { }
    }

    return returnValue;
  }
};

/* Based on Alex Arnell's inheritance implementation. */

var Class = (function() {

  var IS_DONTENUM_BUGGY = (function(){
    for (var p in { toString: 1 }) {
      if (p === 'toString') return false;
    }
    return true;
  })();

  function subclass() {};
  function create() {
    var parent = null, properties = $A(arguments);
    if (Object.isFunction(properties[0]))
      parent = properties.shift();

    function klass() {
      this.initialize.apply(this, arguments);
    }

    Object.extend(klass, Class.Methods);
    klass.superclass = parent;
    klass.subclasses = [];

    if (parent) {
      subclass.prototype = parent.prototype;
      klass.prototype = new subclass;
      parent.subclasses.push(klass);
    }

    for (var i = 0, length = properties.length; i < length; i++)
      klass.addMethods(properties[i]);

    if (!klass.prototype.initialize)
      klass.prototype.initialize = Prototype.emptyFunction;

    klass.prototype.constructor = klass;
    return klass;
  }

  function addMethods(source) {
    var ancestor   = this.superclass && this.superclass.prototype,
        properties = Object.keys(source);

    if (IS_DONTENUM_BUGGY) {
      if (source.toString != Object.prototype.toString)
        properties.push("toString");
      if (source.valueOf != Object.prototype.valueOf)
        properties.push("valueOf");
    }

    for (var i = 0, length = properties.length; i < length; i++) {
      var property = properties[i], value = source[property];
      if (ancestor && Object.isFunction(value) &&
          value.argumentNames()[0] == "$super") {
        var method = value;
        value = (function(m) {
          return function() { return ancestor[m].apply(this, arguments); };
        })(property).wrap(method);

        value.valueOf = method.valueOf.bind(method);
        value.toString = method.toString.bind(method);
      }
      this.prototype[property] = value;
    }

    return this;
  }

  return {
    create: create,
    Methods: {
      addMethods: addMethods
    }
  };
})();
(function() {

  var _toString = Object.prototype.toString,
      NULL_TYPE = 'Null',
      UNDEFINED_TYPE = 'Undefined',
      BOOLEAN_TYPE = 'Boolean',
      NUMBER_TYPE = 'Number',
      STRING_TYPE = 'String',
      OBJECT_TYPE = 'Object',
      BOOLEAN_CLASS = '[object Boolean]',
      NUMBER_CLASS = '[object Number]',
      STRING_CLASS = '[object String]',
      ARRAY_CLASS = '[object Array]',
      NATIVE_JSON_STRINGIFY_SUPPORT = window.JSON &&
        typeof JSON.stringify === 'function' &&
        JSON.stringify(0) === '0' &&
        typeof JSON.stringify(Prototype.K) === 'undefined';

  function Type(o) {
    switch(o) {
      case null: return NULL_TYPE;
      case (void 0): return UNDEFINED_TYPE;
    }
    var type = typeof o;
    switch(type) {
      case 'boolean': return BOOLEAN_TYPE;
      case 'number':  return NUMBER_TYPE;
      case 'string':  return STRING_TYPE;
    }
    return OBJECT_TYPE;
  }

  function extend(destination, source) {
    for (var property in source)
      destination[property] = source[property];
    return destination;
  }

  function inspect(object) {
    try {
      if (isUndefined(object)) return 'undefined';
      if (object === null) return 'null';
      return object.inspect ? object.inspect() : String(object);
    } catch (e) {
      if (e instanceof RangeError) return '...';
      throw e;
    }
  }

  function toJSON(value) {
    return Str('', { '': value }, []);
  }

  function Str(key, holder, stack) {
    var value = holder[key],
        type = typeof value;

    if (Type(value) === OBJECT_TYPE && typeof value.toJSON === 'function') {
      value = value.toJSON(key);
    }

    var _class = _toString.call(value);

    switch (_class) {
      case NUMBER_CLASS:
      case BOOLEAN_CLASS:
      case STRING_CLASS:
        value = value.valueOf();
    }

    switch (value) {
      case null: return 'null';
      case true: return 'true';
      case false: return 'false';
    }

    type = typeof value;
    switch (type) {
      case 'string':
        return value.inspect(true);
      case 'number':
        return isFinite(value) ? String(value) : 'null';
      case 'object':

        for (var i = 0, length = stack.length; i < length; i++) {
          if (stack[i] === value) { throw new TypeError(); }
        }
        stack.push(value);

        var partial = [];
        if (_class === ARRAY_CLASS) {
          for (var i = 0, length = value.length; i < length; i++) {
            var str = Str(i, value, stack);
            partial.push(typeof str === 'undefined' ? 'null' : str);
          }
          partial = '[' + partial.join(',') + ']';
        } else {
          var keys = Object.keys(value);
          for (var i = 0, length = keys.length; i < length; i++) {
            var key = keys[i], str = Str(key, value, stack);
            if (typeof str !== "undefined") {
               partial.push(key.inspect(true)+ ':' + str);
             }
          }
          partial = '{' + partial.join(',') + '}';
        }
        stack.pop();
        return partial;
    }
  }

  function stringify(object) {
    return JSON.stringify(object);
  }

  function toQueryString(object) {
    return $H(object).toQueryString();
  }

  function toHTML(object) {
    return object && object.toHTML ? object.toHTML() : String.interpret(object);
  }

  function keys(object) {
    if (Type(object) !== OBJECT_TYPE) { throw new TypeError(); }
    var results = [];
    for (var property in object) {
      if (object.hasOwnProperty(property)) {
        results.push(property);
      }
    }
    return results;
  }

  function values(object) {
    var results = [];
    for (var property in object)
      results.push(object[property]);
    return results;
  }

  function clone(object) {
    return extend({ }, object);
  }

  function isElement(object) {
    return !!(object && object.nodeType == 1);
  }

  function isArray(object) {
    return _toString.call(object) === ARRAY_CLASS;
  }

  var hasNativeIsArray = (typeof Array.isArray == 'function')
    && Array.isArray([]) && !Array.isArray({});

  if (hasNativeIsArray) {
    isArray = Array.isArray;
  }

  function isHash(object) {
    return object instanceof Hash;
  }

  function isFunction(object) {
    return typeof object === "function";
  }

  function isString(object) {
    return _toString.call(object) === STRING_CLASS;
  }

  function isNumber(object) {
    return _toString.call(object) === NUMBER_CLASS;
  }

  function isUndefined(object) {
    return typeof object === "undefined";
  }

  extend(Object, {
    extend:        extend,
    inspect:       inspect,
    toJSON:        NATIVE_JSON_STRINGIFY_SUPPORT ? stringify : toJSON,
    toQueryString: toQueryString,
    toHTML:        toHTML,
    keys:          Object.keys || keys,
    values:        values,
    clone:         clone,
    isElement:     isElement,
    isArray:       isArray,
    isHash:        isHash,
    isFunction:    isFunction,
    isString:      isString,
    isNumber:      isNumber,
    isUndefined:   isUndefined
  });
})();
Object.extend(Function.prototype, (function() {
  var slice = Array.prototype.slice;

  function update(array, args) {
    var arrayLength = array.length, length = args.length;
    while (length--) array[arrayLength + length] = args[length];
    return array;
  }

  function merge(array, args) {
    array = slice.call(array, 0);
    return update(array, args);
  }

  function argumentNames() {
    var names = this.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1]
      .replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, '')
      .replace(/\s+/g, '').split(',');
    return names.length == 1 && !names[0] ? [] : names;
  }

  function bind(context) {
    if (arguments.length < 2 && Object.isUndefined(arguments[0])) return this;
    var __method = this, args = slice.call(arguments, 1);
    return function() {
      var a = merge(args, arguments);
      return __method.apply(context, a);
    }
  }

  function bindAsEventListener(context) {
    var __method = this, args = slice.call(arguments, 1);
    return function(event) {
      var a = update([event || window.event], args);
      return __method.apply(context, a);
    }
  }

  function curry() {
    if (!arguments.length) return this;
    var __method = this, args = slice.call(arguments, 0);
    return function() {
      var a = merge(args, arguments);
      return __method.apply(this, a);
    }
  }

  function delay(timeout) {
    var __method = this, args = slice.call(arguments, 1);
    timeout = timeout * 1000;
    return window.setTimeout(function() {
      return __method.apply(__method, args);
    }, timeout);
  }

  function defer() {
    var args = update([0.01], arguments);
    return this.delay.apply(this, args);
  }

  function wrap(wrapper) {
    var __method = this;
    return function() {
      var a = update([__method.bind(this)], arguments);
      return wrapper.apply(this, a);
    }
  }

  function methodize() {
    if (this._methodized) return this._methodized;
    var __method = this;
    return this._methodized = function() {
      var a = update([this], arguments);
      return __method.apply(null, a);
    };
  }

  return {
    argumentNames:       argumentNames,
    bind:                bind,
    bindAsEventListener: bindAsEventListener,
    curry:               curry,
    delay:               delay,
    defer:               defer,
    wrap:                wrap,
    methodize:           methodize
  }
})());



(function(proto) {


  function toISOString() {
    return this.getUTCFullYear() + '-' +
      (this.getUTCMonth() + 1).toPaddedString(2) + '-' +
      this.getUTCDate().toPaddedString(2) + 'T' +
      this.getUTCHours().toPaddedString(2) + ':' +
      this.getUTCMinutes().toPaddedString(2) + ':' +
      this.getUTCSeconds().toPaddedString(2) + 'Z';
  }


  function toJSON() {
    return this.toISOString();
  }

  if (!proto.toISOString) proto.toISOString = toISOString;
  if (!proto.toJSON) proto.toJSON = toJSON;

})(Date.prototype);


RegExp.prototype.match = RegExp.prototype.test;

RegExp.escape = function(str) {
  return String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};
var PeriodicalExecuter = Class.create({
  initialize: function(callback, frequency) {
    this.callback = callback;
    this.frequency = frequency;
    this.currentlyExecuting = false;

    this.registerCallback();
  },

  registerCallback: function() {
    this.timer = setInterval(this.onTimerEvent.bind(this), this.frequency * 1000);
  },

  execute: function() {
    this.callback(this);
  },

  stop: function() {
    if (!this.timer) return;
    clearInterval(this.timer);
    this.timer = null;
  },

  onTimerEvent: function() {
    if (!this.currentlyExecuting) {
      try {
        this.currentlyExecuting = true;
        this.execute();
        this.currentlyExecuting = false;
      } catch(e) {
        this.currentlyExecuting = false;
        throw e;
      }
    }
  }
});
Object.extend(String, {
  interpret: function(value) {
    return value == null ? '' : String(value);
  },
  specialChar: {
    '\b': '\\b',
    '\t': '\\t',
    '\n': '\\n',
    '\f': '\\f',
    '\r': '\\r',
    '\\': '\\\\'
  }
});

Object.extend(String.prototype, (function() {
  var NATIVE_JSON_PARSE_SUPPORT = window.JSON &&
    typeof JSON.parse === 'function' &&
    JSON.parse('{"test": true}').test;

  function prepareReplacement(replacement) {
    if (Object.isFunction(replacement)) return replacement;
    var template = new Template(replacement);
    return function(match) { return template.evaluate(match) };
  }

  function gsub(pattern, replacement) {
    var result = '', source = this, match;
    replacement = prepareReplacement(replacement);

    if (Object.isString(pattern))
      pattern = RegExp.escape(pattern);

    if (!(pattern.length || pattern.source)) {
      replacement = replacement('');
      return replacement + source.split('').join(replacement) + replacement;
    }

    while (source.length > 0) {
      if (match = source.match(pattern)) {
        result += source.slice(0, match.index);
        result += String.interpret(replacement(match));
        source  = source.slice(match.index + match[0].length);
      } else {
        result += source, source = '';
      }
    }
    return result;
  }

  function sub(pattern, replacement, count) {
    replacement = prepareReplacement(replacement);
    count = Object.isUndefined(count) ? 1 : count;

    return this.gsub(pattern, function(match) {
      if (--count < 0) return match[0];
      return replacement(match);
    });
  }

  function scan(pattern, iterator) {
    this.gsub(pattern, iterator);
    return String(this);
  }

  function truncate(length, truncation) {
    length = length || 30;
    truncation = Object.isUndefined(truncation) ? '...' : truncation;
    return this.length > length ?
      this.slice(0, length - truncation.length) + truncation : String(this);
  }

  function strip() {
    return this.replace(/^\s+/, '').replace(/\s+$/, '');
  }

  function stripTags() {
    return this.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, '');
  }

  function stripScripts() {
    return this.replace(new RegExp(Prototype.ScriptFragment, 'img'), '');
  }

  function extractScripts() {
    var matchAll = new RegExp(Prototype.ScriptFragment, 'img'),
        matchOne = new RegExp(Prototype.ScriptFragment, 'im');
    return (this.match(matchAll) || []).map(function(scriptTag) {
      return (scriptTag.match(matchOne) || ['', ''])[1];
    });
  }

  function evalScripts() {
    return this.extractScripts().map(function(script) { return eval(script) });
  }

  function escapeHTML() {
    return this.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function unescapeHTML() {
    return this.stripTags().replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
  }


  function toQueryParams(separator) {
    var match = this.strip().match(/([^?#]*)(#.*)?$/);
    if (!match) return { };

    return match[1].split(separator || '&').inject({ }, function(hash, pair) {
      if ((pair = pair.split('='))[0]) {
        var key = decodeURIComponent(pair.shift()),
            value = pair.length > 1 ? pair.join('=') : pair[0];

        if (value != undefined) value = decodeURIComponent(value);

        if (key in hash) {
          if (!Object.isArray(hash[key])) hash[key] = [hash[key]];
          hash[key].push(value);
        }
        else hash[key] = value;
      }
      return hash;
    });
  }

  function toArray() {
    return this.split('');
  }

  function succ() {
    return this.slice(0, this.length - 1) +
      String.fromCharCode(this.charCodeAt(this.length - 1) + 1);
  }

  function times(count) {
    return count < 1 ? '' : new Array(count + 1).join(this);
  }

  function camelize() {
    return this.replace(/-+(.)?/g, function(match, chr) {
      return chr ? chr.toUpperCase() : '';
    });
  }

  function capitalize() {
    return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
  }

  function underscore() {
    return this.replace(/::/g, '/')
               .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
               .replace(/([a-z\d])([A-Z])/g, '$1_$2')
               .replace(/-/g, '_')
               .toLowerCase();
  }

  function dasherize() {
    return this.replace(/_/g, '-');
  }

  function inspect(useDoubleQuotes) {
    var escapedString = this.replace(/[\x00-\x1f\\]/g, function(character) {
      if (character in String.specialChar) {
        return String.specialChar[character];
      }
      return '\\u00' + character.charCodeAt().toPaddedString(2, 16);
    });
    if (useDoubleQuotes) return '"' + escapedString.replace(/"/g, '\\"') + '"';
    return "'" + escapedString.replace(/'/g, '\\\'') + "'";
  }

  function unfilterJSON(filter) {
    return this.replace(filter || Prototype.JSONFilter, '$1');
  }

  function isJSON() {
    var str = this;
    if (str.blank()) return false;
    str = str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@');
    str = str.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
    str = str.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
    return (/^[\],:{}\s]*$/).test(str);
  }

  function evalJSON(sanitize) {
    var json = this.unfilterJSON(),
        cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    if (cx.test(json)) {
      json = json.replace(cx, function (a) {
        return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
      });
    }
    try {
      if (!sanitize || json.isJSON()) return eval('(' + json + ')');
    } catch (e) { }
    throw new SyntaxError('Badly formed JSON string: ' + this.inspect());
  }

  function parseJSON() {
    var json = this.unfilterJSON();
    return JSON.parse(json);
  }

  function include(pattern) {
    return this.indexOf(pattern) > -1;
  }

  function startsWith(pattern) {
    return this.lastIndexOf(pattern, 0) === 0;
  }

  function endsWith(pattern) {
    var d = this.length - pattern.length;
    return d >= 0 && this.indexOf(pattern, d) === d;
  }

  function empty() {
    return this == '';
  }

  function blank() {
    return /^\s*$/.test(this);
  }

  function interpolate(object, pattern) {
    return new Template(this, pattern).evaluate(object);
  }

  return {
    gsub:           gsub,
    sub:            sub,
    scan:           scan,
    truncate:       truncate,
    strip:          String.prototype.trim || strip,
    stripTags:      stripTags,
    stripScripts:   stripScripts,
    extractScripts: extractScripts,
    evalScripts:    evalScripts,
    escapeHTML:     escapeHTML,
    unescapeHTML:   unescapeHTML,
    toQueryParams:  toQueryParams,
    parseQuery:     toQueryParams,
    toArray:        toArray,
    succ:           succ,
    times:          times,
    camelize:       camelize,
    capitalize:     capitalize,
    underscore:     underscore,
    dasherize:      dasherize,
    inspect:        inspect,
    unfilterJSON:   unfilterJSON,
    isJSON:         isJSON,
    evalJSON:       NATIVE_JSON_PARSE_SUPPORT ? parseJSON : evalJSON,
    include:        include,
    startsWith:     startsWith,
    endsWith:       endsWith,
    empty:          empty,
    blank:          blank,
    interpolate:    interpolate
  };
})());

var Template = Class.create({
  initialize: function(template, pattern) {
    this.template = template.toString();
    this.pattern = pattern || Template.Pattern;
  },

  evaluate: function(object) {
    if (object && Object.isFunction(object.toTemplateReplacements))
      object = object.toTemplateReplacements();

    return this.template.gsub(this.pattern, function(match) {
      if (object == null) return (match[1] + '');

      var before = match[1] || '';
      if (before == '\\') return match[2];

      var ctx = object, expr = match[3],
          pattern = /^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;

      match = pattern.exec(expr);
      if (match == null) return before;

      while (match != null) {
        var comp = match[1].startsWith('[') ? match[2].replace(/\\\\]/g, ']') : match[1];
        ctx = ctx[comp];
        if (null == ctx || '' == match[3]) break;
        expr = expr.substring('[' == match[3] ? match[1].length : match[0].length);
        match = pattern.exec(expr);
      }

      return before + String.interpret(ctx);
    });
  }
});
Template.Pattern = /(^|.|\r|\n)(#\{(.*?)\})/;

var $break = { };

var Enumerable = (function() {
  function each(iterator, context) {
    var index = 0;
    try {
      this._each(function(value) {
        iterator.call(context, value, index++);
      });
    } catch (e) {
      if (e != $break) throw e;
    }
    return this;
  }

  function eachSlice(number, iterator, context) {
    var index = -number, slices = [], array = this.toArray();
    if (number < 1) return array;
    while ((index += number) < array.length)
      slices.push(array.slice(index, index+number));
    return slices.collect(iterator, context);
  }

  function all(iterator, context) {
    iterator = iterator || Prototype.K;
    var result = true;
    this.each(function(value, index) {
      result = result && !!iterator.call(context, value, index);
      if (!result) throw $break;
    });
    return result;
  }

  function any(iterator, context) {
    iterator = iterator || Prototype.K;
    var result = false;
    this.each(function(value, index) {
      if (result = !!iterator.call(context, value, index))
        throw $break;
    });
    return result;
  }

  function collect(iterator, context) {
    iterator = iterator || Prototype.K;
    var results = [];
    this.each(function(value, index) {
      results.push(iterator.call(context, value, index));
    });
    return results;
  }

  function detect(iterator, context) {
    var result;
    this.each(function(value, index) {
      if (iterator.call(context, value, index)) {
        result = value;
        throw $break;
      }
    });
    return result;
  }

  function findAll(iterator, context) {
    var results = [];
    this.each(function(value, index) {
      if (iterator.call(context, value, index))
        results.push(value);
    });
    return results;
  }

  function grep(filter, iterator, context) {
    iterator = iterator || Prototype.K;
    var results = [];

    if (Object.isString(filter))
      filter = new RegExp(RegExp.escape(filter));

    this.each(function(value, index) {
      if (filter.match(value))
        results.push(iterator.call(context, value, index));
    });
    return results;
  }

  function include(object) {
    if (Object.isFunction(this.indexOf))
      if (this.indexOf(object) != -1) return true;

    var found = false;
    this.each(function(value) {
      if (value == object) {
        found = true;
        throw $break;
      }
    });
    return found;
  }

  function inGroupsOf(number, fillWith) {
    fillWith = Object.isUndefined(fillWith) ? null : fillWith;
    return this.eachSlice(number, function(slice) {
      while(slice.length < number) slice.push(fillWith);
      return slice;
    });
  }

  function inject(memo, iterator, context) {
    this.each(function(value, index) {
      memo = iterator.call(context, memo, value, index);
    });
    return memo;
  }

  function invoke(method) {
    var args = $A(arguments).slice(1);
    return this.map(function(value) {
      return value[method].apply(value, args);
    });
  }

  function max(iterator, context) {
    iterator = iterator || Prototype.K;
    var result;
    this.each(function(value, index) {
      value = iterator.call(context, value, index);
      if (result == null || value >= result)
        result = value;
    });
    return result;
  }

  function min(iterator, context) {
    iterator = iterator || Prototype.K;
    var result;
    this.each(function(value, index) {
      value = iterator.call(context, value, index);
      if (result == null || value < result)
        result = value;
    });
    return result;
  }

  function partition(iterator, context) {
    iterator = iterator || Prototype.K;
    var trues = [], falses = [];
    this.each(function(value, index) {
      (iterator.call(context, value, index) ?
        trues : falses).push(value);
    });
    return [trues, falses];
  }

  function pluck(property) {
    var results = [];
    this.each(function(value) {
      results.push(value[property]);
    });
    return results;
  }

  function reject(iterator, context) {
    var results = [];
    this.each(function(value, index) {
      if (!iterator.call(context, value, index))
        results.push(value);
    });
    return results;
  }

  function sortBy(iterator, context) {
    return this.map(function(value, index) {
      return {
        value: value,
        criteria: iterator.call(context, value, index)
      };
    }).sort(function(left, right) {
      var a = left.criteria, b = right.criteria;
      return a < b ? -1 : a > b ? 1 : 0;
    }).pluck('value');
  }

  function toArray() {
    return this.map();
  }

  function zip() {
    var iterator = Prototype.K, args = $A(arguments);
    if (Object.isFunction(args.last()))
      iterator = args.pop();

    var collections = [this].concat(args).map($A);
    return this.map(function(value, index) {
      return iterator(collections.pluck(index));
    });
  }

  function size() {
    return this.toArray().length;
  }

  function inspect() {
    return '#<Enumerable:' + this.toArray().inspect() + '>';
  }









  return {
    each:       each,
    eachSlice:  eachSlice,
    all:        all,
    every:      all,
    any:        any,
    some:       any,
    collect:    collect,
    map:        collect,
    detect:     detect,
    findAll:    findAll,
    select:     findAll,
    filter:     findAll,
    grep:       grep,
    include:    include,
    member:     include,
    inGroupsOf: inGroupsOf,
    inject:     inject,
    invoke:     invoke,
    max:        max,
    min:        min,
    partition:  partition,
    pluck:      pluck,
    reject:     reject,
    sortBy:     sortBy,
    toArray:    toArray,
    entries:    toArray,
    zip:        zip,
    size:       size,
    inspect:    inspect,
    find:       detect
  };
})();

function $A(iterable) {
  if (!iterable) return [];
  if ('toArray' in Object(iterable)) return iterable.toArray();
  var length = iterable.length || 0, results = new Array(length);
  while (length--) results[length] = iterable[length];
  return results;
}


function $w(string) {
  if (!Object.isString(string)) return [];
  string = string.strip();
  return string ? string.split(/\s+/) : [];
}

Array.from = $A;


(function() {
  var arrayProto = Array.prototype,
      slice = arrayProto.slice,
      _each = arrayProto.forEach; // use native browser JS 1.6 implementation if available

  function each(iterator) {
    for (var i = 0, length = this.length; i < length; i++)
      iterator(this[i]);
  }
  if (!_each) _each = each;

  function clear() {
    this.length = 0;
    return this;
  }

  function first() {
    return this[0];
  }

  function last() {
    return this[this.length - 1];
  }

  function compact() {
    return this.select(function(value) {
      return value != null;
    });
  }

  function flatten() {
    return this.inject([], function(array, value) {
      if (Object.isArray(value))
        return array.concat(value.flatten());
      array.push(value);
      return array;
    });
  }

  function without() {
    var values = slice.call(arguments, 0);
    return this.select(function(value) {
      return !values.include(value);
    });
  }

  function reverse(inline) {
    return (inline === false ? this.toArray() : this)._reverse();
  }

  function uniq(sorted) {
    return this.inject([], function(array, value, index) {
      if (0 == index || (sorted ? array.last() != value : !array.include(value)))
        array.push(value);
      return array;
    });
  }

  function intersect(array) {
    return this.uniq().findAll(function(item) {
      return array.detect(function(value) { return item === value });
    });
  }


  function clone() {
    return slice.call(this, 0);
  }

  function size() {
    return this.length;
  }

  function inspect() {
    return '[' + this.map(Object.inspect).join(', ') + ']';
  }

  function indexOf(item, i) {
    i || (i = 0);
    var length = this.length;
    if (i < 0) i = length + i;
    for (; i < length; i++)
      if (this[i] === item) return i;
    return -1;
  }

  function lastIndexOf(item, i) {
    i = isNaN(i) ? this.length : (i < 0 ? this.length + i : i) + 1;
    var n = this.slice(0, i).reverse().indexOf(item);
    return (n < 0) ? n : i - n - 1;
  }

  function concat() {
    var array = slice.call(this, 0), item;
    for (var i = 0, length = arguments.length; i < length; i++) {
      item = arguments[i];
      if (Object.isArray(item) && !('callee' in item)) {
        for (var j = 0, arrayLength = item.length; j < arrayLength; j++)
          array.push(item[j]);
      } else {
        array.push(item);
      }
    }
    return array;
  }

  Object.extend(arrayProto, Enumerable);

  if (!arrayProto._reverse)
    arrayProto._reverse = arrayProto.reverse;

  Object.extend(arrayProto, {
    _each:     _each,
    clear:     clear,
    first:     first,
    last:      last,
    compact:   compact,
    flatten:   flatten,
    without:   without,
    reverse:   reverse,
    uniq:      uniq,
    intersect: intersect,
    clone:     clone,
    toArray:   clone,
    size:      size,
    inspect:   inspect
  });

  var CONCAT_ARGUMENTS_BUGGY = (function() {
    return [].concat(arguments)[0][0] !== 1;
  })(1,2)

  if (CONCAT_ARGUMENTS_BUGGY) arrayProto.concat = concat;

  if (!arrayProto.indexOf) arrayProto.indexOf = indexOf;
  if (!arrayProto.lastIndexOf) arrayProto.lastIndexOf = lastIndexOf;
})();
function $H(object) {
  return new Hash(object);
};

var Hash = Class.create(Enumerable, (function() {
  function initialize(object) {
    this._object = Object.isHash(object) ? object.toObject() : Object.clone(object);
  }


  function _each(iterator) {
    for (var key in this._object) {
      var value = this._object[key], pair = [key, value];
      pair.key = key;
      pair.value = value;
      iterator(pair);
    }
  }

  function set(key, value) {
    return this._object[key] = value;
  }

  function get(key) {
    if (this._object[key] !== Object.prototype[key])
      return this._object[key];
  }

  function unset(key) {
    var value = this._object[key];
    delete this._object[key];
    return value;
  }

  function toObject() {
    return Object.clone(this._object);
  }



  function keys() {
    return this.pluck('key');
  }

  function values() {
    return this.pluck('value');
  }

  function index(value) {
    var match = this.detect(function(pair) {
      return pair.value === value;
    });
    return match && match.key;
  }

  function merge(object) {
    return this.clone().update(object);
  }

  function update(object) {
    return new Hash(object).inject(this, function(result, pair) {
      result.set(pair.key, pair.value);
      return result;
    });
  }

  function toQueryPair(key, value) {
    if (Object.isUndefined(value)) return key;
    return key + '=' + encodeURIComponent(String.interpret(value));
  }

  function toQueryString() {
    return this.inject([], function(results, pair) {
      var key = encodeURIComponent(pair.key), values = pair.value;

      if (values && typeof values == 'object') {
        if (Object.isArray(values))
          return results.concat(values.map(toQueryPair.curry(key)));
      } else results.push(toQueryPair(key, values));
      return results;
    }).join('&');
  }

  function inspect() {
    return '#<Hash:{' + this.map(function(pair) {
      return pair.map(Object.inspect).join(': ');
    }).join(', ') + '}>';
  }

  function clone() {
    return new Hash(this);
  }

  return {
    initialize:             initialize,
    _each:                  _each,
    set:                    set,
    get:                    get,
    unset:                  unset,
    toObject:               toObject,
    toTemplateReplacements: toObject,
    keys:                   keys,
    values:                 values,
    index:                  index,
    merge:                  merge,
    update:                 update,
    toQueryString:          toQueryString,
    inspect:                inspect,
    toJSON:                 toObject,
    clone:                  clone
  };
})());

Hash.from = $H;
Object.extend(Number.prototype, (function() {
  function toColorPart() {
    return this.toPaddedString(2, 16);
  }

  function succ() {
    return this + 1;
  }

  function times(iterator, context) {
    $R(0, this, true).each(iterator, context);
    return this;
  }

  function toPaddedString(length, radix) {
    var string = this.toString(radix || 10);
    return '0'.times(length - string.length) + string;
  }

  function abs() {
    return Math.abs(this);
  }

  function round() {
    return Math.round(this);
  }

  function ceil() {
    return Math.ceil(this);
  }

  function floor() {
    return Math.floor(this);
  }

  return {
    toColorPart:    toColorPart,
    succ:           succ,
    times:          times,
    toPaddedString: toPaddedString,
    abs:            abs,
    round:          round,
    ceil:           ceil,
    floor:          floor
  };
})());

function $R(start, end, exclusive) {
  return new ObjectRange(start, end, exclusive);
}

var ObjectRange = Class.create(Enumerable, (function() {
  function initialize(start, end, exclusive) {
    this.start = start;
    this.end = end;
    this.exclusive = exclusive;
  }

  function _each(iterator) {
    var value = this.start;
    while (this.include(value)) {
      iterator(value);
      value = value.succ();
    }
  }

  function include(value) {
    if (value < this.start)
      return false;
    if (this.exclusive)
      return value < this.end;
    return value <= this.end;
  }

  return {
    initialize: initialize,
    _each:      _each,
    include:    include
  };
})());



var Ajax = {
  getTransport: function() {
    return Try.these(
      function() {return new XMLHttpRequest()},
      function() {return new ActiveXObject('Msxml2.XMLHTTP')},
      function() {return new ActiveXObject('Microsoft.XMLHTTP')}
    ) || false;
  },

  activeRequestCount: 0
};

Ajax.Responders = {
  responders: [],

  _each: function(iterator) {
    this.responders._each(iterator);
  },

  register: function(responder) {
    if (!this.include(responder))
      this.responders.push(responder);
  },

  unregister: function(responder) {
    this.responders = this.responders.without(responder);
  },

  dispatch: function(callback, request, transport, json) {
    this.each(function(responder) {
      if (Object.isFunction(responder[callback])) {
        try {
          responder[callback].apply(responder, [request, transport, json]);
        } catch (e) { }
      }
    });
  }
};

Object.extend(Ajax.Responders, Enumerable);

Ajax.Responders.register({
  onCreate:   function() { Ajax.activeRequestCount++ },
  onComplete: function() { Ajax.activeRequestCount-- }
});
Ajax.Base = Class.create({
  initialize: function(options) {
    this.options = {
      method:       'post',
      asynchronous: true,
      contentType:  'application/x-www-form-urlencoded',
      encoding:     'UTF-8',
      parameters:   '',
      evalJSON:     true,
      evalJS:       true
    };
    Object.extend(this.options, options || { });

    this.options.method = this.options.method.toLowerCase();

    if (Object.isHash(this.options.parameters))
      this.options.parameters = this.options.parameters.toObject();
  }
});
Ajax.Request = Class.create(Ajax.Base, {
  _complete: false,

  initialize: function($super, url, options) {
    $super(options);
    this.transport = Ajax.getTransport();
    this.request(url);
  },

  request: function(url) {
    this.url = url;
    this.method = this.options.method;
    var params = Object.isString(this.options.parameters) ?
          this.options.parameters :
          Object.toQueryString(this.options.parameters);

    if (!['get', 'post'].include(this.method)) {
      params += (params ? '&' : '') + "_method=" + this.method;
      this.method = 'post';
    }

    if (params) {
      if (this.method == 'get')
        this.url += (this.url.include('?') ? '&' : '?') + params;
      else if (/Konqueror|Safari|KHTML/.test(navigator.userAgent))
        params += '&_=';
    }

    this.parameters = params.toQueryParams();

    try {
      var response = new Ajax.Response(this);
      if (this.options.onCreate) this.options.onCreate(response);
      Ajax.Responders.dispatch('onCreate', this, response);

      this.transport.open(this.method.toUpperCase(), this.url,
        this.options.asynchronous);

      if (this.options.asynchronous) this.respondToReadyState.bind(this).defer(1);

      this.transport.onreadystatechange = this.onStateChange.bind(this);
      this.setRequestHeaders();

      this.body = this.method == 'post' ? (this.options.postBody || params) : null;
      this.transport.send(this.body);

      /* Force Firefox to handle ready state 4 for synchronous requests */
      if (!this.options.asynchronous && this.transport.overrideMimeType)
        this.onStateChange();

    }
    catch (e) {
      this.dispatchException(e);
    }
  },

  onStateChange: function() {
    var readyState = this.transport.readyState;
    if (readyState > 1 && !((readyState == 4) && this._complete))
      this.respondToReadyState(this.transport.readyState);
  },

  setRequestHeaders: function() {
    var headers = {
      'X-Requested-With': 'XMLHttpRequest',
      'X-Prototype-Version': Prototype.Version,
      'Accept': 'text/javascript, text/html, application/xml, text/xml, */*'
    };

    if (this.method == 'post') {
      headers['Content-type'] = this.options.contentType +
        (this.options.encoding ? '; charset=' + this.options.encoding : '');

      /* Force "Connection: close" for older Mozilla browsers to work
       * around a bug where XMLHttpRequest sends an incorrect
       * Content-length header. See Mozilla Bugzilla #246651.
       */
      if (this.transport.overrideMimeType &&
          (navigator.userAgent.match(/Gecko\/(\d{4})/) || [0,2005])[1] < 2005)
            headers['Connection'] = 'close';
    }

    if (typeof this.options.requestHeaders == 'object') {
      var extras = this.options.requestHeaders;

      if (Object.isFunction(extras.push))
        for (var i = 0, length = extras.length; i < length; i += 2)
          headers[extras[i]] = extras[i+1];
      else
        $H(extras).each(function(pair) { headers[pair.key] = pair.value });
    }

    for (var name in headers)
      this.transport.setRequestHeader(name, headers[name]);
  },

  success: function() {
    var status = this.getStatus();
    return !status || (status >= 200 && status < 300);
  },

  getStatus: function() {
    try {
      return this.transport.status || 0;
    } catch (e) { return 0 }
  },

  respondToReadyState: function(readyState) {
    var state = Ajax.Request.Events[readyState], response = new Ajax.Response(this);

    if (state == 'Complete') {
      try {
        this._complete = true;
        (this.options['on' + response.status]
         || this.options['on' + (this.success() ? 'Success' : 'Failure')]
         || Prototype.emptyFunction)(response, response.headerJSON);
      } catch (e) {
        this.dispatchException(e);
      }

      var contentType = response.getHeader('Content-type');
      if (this.options.evalJS == 'force'
          || (this.options.evalJS && this.isSameOrigin() && contentType
          && contentType.match(/^\s*(text|application)\/(x-)?(java|ecma)script(;.*)?\s*$/i)))
        this.evalResponse();
    }

    try {
      (this.options['on' + state] || Prototype.emptyFunction)(response, response.headerJSON);
      Ajax.Responders.dispatch('on' + state, this, response, response.headerJSON);
    } catch (e) {
      this.dispatchException(e);
    }

    if (state == 'Complete') {
      this.transport.onreadystatechange = Prototype.emptyFunction;
    }
  },

  isSameOrigin: function() {
    var m = this.url.match(/^\s*https?:\/\/[^\/]*/);
    return !m || (m[0] == '#{protocol}//#{domain}#{port}'.interpolate({
      protocol: location.protocol,
      domain: document.domain,
      port: location.port ? ':' + location.port : ''
    }));
  },

  getHeader: function(name) {
    try {
      return this.transport.getResponseHeader(name) || null;
    } catch (e) { return null; }
  },

  evalResponse: function() {
    try {
      return eval((this.transport.responseText || '').unfilterJSON());
    } catch (e) {
      this.dispatchException(e);
    }
  },

  dispatchException: function(exception) {
    (this.options.onException || Prototype.emptyFunction)(this, exception);
    Ajax.Responders.dispatch('onException', this, exception);
  }
});

Ajax.Request.Events =
  ['Uninitialized', 'Loading', 'Loaded', 'Interactive', 'Complete'];








Ajax.Response = Class.create({
  initialize: function(request){
    this.request = request;
    var transport  = this.transport  = request.transport,
        readyState = this.readyState = transport.readyState;

    if ((readyState > 2 && !Prototype.Browser.IE) || readyState == 4) {
      this.status       = this.getStatus();
      this.statusText   = this.getStatusText();
      this.responseText = String.interpret(transport.responseText);
      this.headerJSON   = this._getHeaderJSON();
    }

    if (readyState == 4) {
      var xml = transport.responseXML;
      this.responseXML  = Object.isUndefined(xml) ? null : xml;
      this.responseJSON = this._getResponseJSON();
    }
  },

  status:      0,

  statusText: '',

  getStatus: Ajax.Request.prototype.getStatus,

  getStatusText: function() {
    try {
      return this.transport.statusText || '';
    } catch (e) { return '' }
  },

  getHeader: Ajax.Request.prototype.getHeader,

  getAllHeaders: function() {
    try {
      return this.getAllResponseHeaders();
    } catch (e) { return null }
  },

  getResponseHeader: function(name) {
    return this.transport.getResponseHeader(name);
  },

  getAllResponseHeaders: function() {
    return this.transport.getAllResponseHeaders();
  },

  _getHeaderJSON: function() {
    var json = this.getHeader('X-JSON');
    if (!json) return null;
    json = decodeURIComponent(escape(json));
    try {
      return json.evalJSON(this.request.options.sanitizeJSON ||
        !this.request.isSameOrigin());
    } catch (e) {
      this.request.dispatchException(e);
    }
  },

  _getResponseJSON: function() {
    var options = this.request.options;
    if (!options.evalJSON || (options.evalJSON != 'force' &&
      !(this.getHeader('Content-type') || '').include('application/json')) ||
        this.responseText.blank())
          return null;
    try {
      return this.responseText.evalJSON(options.sanitizeJSON ||
        !this.request.isSameOrigin());
    } catch (e) {
      this.request.dispatchException(e);
    }
  }
});

Ajax.Updater = Class.create(Ajax.Request, {
  initialize: function($super, container, url, options) {
    this.container = {
      success: (container.success || container),
      failure: (container.failure || (container.success ? null : container))
    };

    options = Object.clone(options);
    var onComplete = options.onComplete;
    options.onComplete = (function(response, json) {
      this.updateContent(response.responseText);
      if (Object.isFunction(onComplete)) onComplete(response, json);
    }).bind(this);

    $super(url, options);
  },

  updateContent: function(responseText) {
    var receiver = this.container[this.success() ? 'success' : 'failure'],
        options = this.options;

    if (!options.evalScripts) responseText = responseText.stripScripts();

    if (receiver = $(receiver)) {
      if (options.insertion) {
        if (Object.isString(options.insertion)) {
          var insertion = { }; insertion[options.insertion] = responseText;
          receiver.insert(insertion);
        }
        else options.insertion(receiver, responseText);
      }
      else receiver.update(responseText);
    }
  }
});

Ajax.PeriodicalUpdater = Class.create(Ajax.Base, {
  initialize: function($super, container, url, options) {
    $super(options);
    this.onComplete = this.options.onComplete;

    this.frequency = (this.options.frequency || 2);
    this.decay = (this.options.decay || 1);

    this.updater = { };
    this.container = container;
    this.url = url;

    this.start();
  },

  start: function() {
    this.options.onComplete = this.updateComplete.bind(this);
    this.onTimerEvent();
  },

  stop: function() {
    this.updater.options.onComplete = undefined;
    clearTimeout(this.timer);
    (this.onComplete || Prototype.emptyFunction).apply(this, arguments);
  },

  updateComplete: function(response) {
    if (this.options.decay) {
      this.decay = (response.responseText == this.lastText ?
        this.decay * this.options.decay : 1);

      this.lastText = response.responseText;
    }
    this.timer = this.onTimerEvent.bind(this).delay(this.decay * this.frequency);
  },

  onTimerEvent: function() {
    this.updater = new Ajax.Updater(this.container, this.url, this.options);
  }
});


function $(element) {
  if (arguments.length > 1) {
    for (var i = 0, elements = [], length = arguments.length; i < length; i++)
      elements.push($(arguments[i]));
    return elements;
  }
  if (Object.isString(element))
    element = document.getElementById(element);
  return Element.extend(element);
}

if (Prototype.BrowserFeatures.XPath) {
  document._getElementsByXPath = function(expression, parentElement) {
    var results = [];
    var query = document.evaluate(expression, $(parentElement) || document,
      null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var i = 0, length = query.snapshotLength; i < length; i++)
      results.push(Element.extend(query.snapshotItem(i)));
    return results;
  };
}

/*--------------------------------------------------------------------------*/

if (!Node) var Node = { };

if (!Node.ELEMENT_NODE) {
  Object.extend(Node, {
    ELEMENT_NODE: 1,
    ATTRIBUTE_NODE: 2,
    TEXT_NODE: 3,
    CDATA_SECTION_NODE: 4,
    ENTITY_REFERENCE_NODE: 5,
    ENTITY_NODE: 6,
    PROCESSING_INSTRUCTION_NODE: 7,
    COMMENT_NODE: 8,
    DOCUMENT_NODE: 9,
    DOCUMENT_TYPE_NODE: 10,
    DOCUMENT_FRAGMENT_NODE: 11,
    NOTATION_NODE: 12
  });
}



(function(global) {

  var HAS_EXTENDED_CREATE_ELEMENT_SYNTAX = (function(){
    try {
      var el = document.createElement('<input name="x">');
      return el.tagName.toLowerCase() === 'input' && el.name === 'x';
    }
    catch(err) {
      return false;
    }
  })();

  var element = global.Element;

  global.Element = function(tagName, attributes) {
    attributes = attributes || { };
    tagName = tagName.toLowerCase();
    var cache = Element.cache;

    if (HAS_EXTENDED_CREATE_ELEMENT_SYNTAX && attributes.name) {
      tagName = '<' + tagName + ' name="' + attributes.name + '">';
      delete attributes.name;
      return Element.writeAttribute(document.createElement(tagName), attributes);
    }

    if (!cache[tagName]) cache[tagName] = Element.extend(document.createElement(tagName));

    var node = ('type' in attributes) ? document.createElement(tagName) :
     cache[tagName].cloneNode(false);

    return Element.writeAttribute(node, attributes);
  };

  Object.extend(global.Element, element || { });
  if (element) global.Element.prototype = element.prototype;

})(this);

Element.idCounter = 1;
Element.cache = { };

Element._purgeElement = function(element) {
  var uid = element._prototypeUID;
  if (uid) {
    Element.stopObserving(element);
    element._prototypeUID = void 0;
    delete Element.Storage[uid];
  }
}

Element.Methods = {
  visible: function(element) {
    return $(element).style.display != 'none';
  },

  toggle: function(element) {
    element = $(element);
    Element[Element.visible(element) ? 'hide' : 'show'](element);
    return element;
  },

  hide: function(element) {
    element = $(element);
    element.style.display = 'none';
    return element;
  },

  show: function(element) {
    element = $(element);
    element.style.display = '';
    return element;
  },

  remove: function(element) {
    element = $(element);
    element.parentNode.removeChild(element);
    return element;
  },

  update: (function(){

    var SELECT_ELEMENT_INNERHTML_BUGGY = (function(){
      var el = document.createElement("select"),
          isBuggy = true;
      el.innerHTML = "<option value=\"test\">test</option>";
      if (el.options && el.options[0]) {
        isBuggy = el.options[0].nodeName.toUpperCase() !== "OPTION";
      }
      el = null;
      return isBuggy;
    })();

    var TABLE_ELEMENT_INNERHTML_BUGGY = (function(){
      try {
        var el = document.createElement("table");
        if (el && el.tBodies) {
          el.innerHTML = "<tbody><tr><td>test</td></tr></tbody>";
          var isBuggy = typeof el.tBodies[0] == "undefined";
          el = null;
          return isBuggy;
        }
      } catch (e) {
        return true;
      }
    })();

    var SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING = (function () {
      var s = document.createElement("script"),
          isBuggy = false;
      try {
        s.appendChild(document.createTextNode(""));
        isBuggy = !s.firstChild ||
          s.firstChild && s.firstChild.nodeType !== 3;
      } catch (e) {
        isBuggy = true;
      }
      s = null;
      return isBuggy;
    })();

    function update(element, content) {
      element = $(element);
      var purgeElement = Element._purgeElement;

      var descendants = element.getElementsByTagName('*'),
       i = descendants.length;
      while (i--) purgeElement(descendants[i]);

      if (content && content.toElement)
        content = content.toElement();

      if (Object.isElement(content))
        return element.update().insert(content);

      content = Object.toHTML(content);

      var tagName = element.tagName.toUpperCase();

      if (tagName === 'SCRIPT' && SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING) {
        element.text = content;
        return element;
      }

      if (SELECT_ELEMENT_INNERHTML_BUGGY || TABLE_ELEMENT_INNERHTML_BUGGY) {
        if (tagName in Element._insertionTranslations.tags) {
          while (element.firstChild) {
            element.removeChild(element.firstChild);
          }
          Element._getContentFromAnonymousElement(tagName, content.stripScripts())
            .each(function(node) {
              element.appendChild(node)
            });
        }
        else {
          element.innerHTML = content.stripScripts();
        }
      }
      else {
        element.innerHTML = content.stripScripts();
      }

      content.evalScripts.bind(content).defer();
      return element;
    }

    return update;
  })(),

  replace: function(element, content) {
    element = $(element);
    if (content && content.toElement) content = content.toElement();
    else if (!Object.isElement(content)) {
      content = Object.toHTML(content);
      var range = element.ownerDocument.createRange();
      range.selectNode(element);
      content.evalScripts.bind(content).defer();
      content = range.createContextualFragment(content.stripScripts());
    }
    element.parentNode.replaceChild(content, element);
    return element;
  },

  insert: function(element, insertions) {
    element = $(element);

    if (Object.isString(insertions) || Object.isNumber(insertions) ||
        Object.isElement(insertions) || (insertions && (insertions.toElement || insertions.toHTML)))
          insertions = {bottom:insertions};

    var content, insert, tagName, childNodes;

    for (var position in insertions) {
      content  = insertions[position];
      position = position.toLowerCase();
      insert = Element._insertionTranslations[position];

      if (content && content.toElement) content = content.toElement();
      if (Object.isElement(content)) {
        insert(element, content);
        continue;
      }

      content = Object.toHTML(content);

      tagName = ((position == 'before' || position == 'after')
        ? element.parentNode : element).tagName.toUpperCase();

      childNodes = Element._getContentFromAnonymousElement(tagName, content.stripScripts());

      if (position == 'top' || position == 'after') childNodes.reverse();
      childNodes.each(insert.curry(element));

      content.evalScripts.bind(content).defer();
    }

    return element;
  },

  wrap: function(element, wrapper, attributes) {
    element = $(element);
    if (Object.isElement(wrapper))
      $(wrapper).writeAttribute(attributes || { });
    else if (Object.isString(wrapper)) wrapper = new Element(wrapper, attributes);
    else wrapper = new Element('div', wrapper);
    if (element.parentNode)
      element.parentNode.replaceChild(wrapper, element);
    wrapper.appendChild(element);
    return wrapper;
  },

  inspect: function(element) {
    element = $(element);
    var result = '<' + element.tagName.toLowerCase();
    $H({'id': 'id', 'className': 'class'}).each(function(pair) {
      var property = pair.first(),
          attribute = pair.last(),
          value = (element[property] || '').toString();
      if (value) result += ' ' + attribute + '=' + value.inspect(true);
    });
    return result + '>';
  },

  recursivelyCollect: function(element, property, maximumLength) {
    element = $(element);
    maximumLength = maximumLength || -1;
    var elements = [];

    while (element = element[property]) {
      if (element.nodeType == 1)
        elements.push(Element.extend(element));
      if (elements.length == maximumLength)
        break;
    }

    return elements;
  },

  ancestors: function(element) {
    return Element.recursivelyCollect(element, 'parentNode');
  },

  descendants: function(element) {
    return Element.select(element, "*");
  },

  firstDescendant: function(element) {
    element = $(element).firstChild;
    while (element && element.nodeType != 1) element = element.nextSibling;
    return $(element);
  },

  immediateDescendants: function(element) {
    var results = [], child = $(element).firstChild;
    while (child) {
      if (child.nodeType === 1) {
        results.push(Element.extend(child));
      }
      child = child.nextSibling;
    }
    return results;
  },

  previousSiblings: function(element, maximumLength) {
    return Element.recursivelyCollect(element, 'previousSibling');
  },

  nextSiblings: function(element) {
    return Element.recursivelyCollect(element, 'nextSibling');
  },

  siblings: function(element) {
    element = $(element);
    return Element.previousSiblings(element).reverse()
      .concat(Element.nextSiblings(element));
  },

  match: function(element, selector) {
    element = $(element);
    if (Object.isString(selector))
      return Prototype.Selector.match(element, selector);
    return selector.match(element);
  },

  up: function(element, expression, index) {
    element = $(element);
    if (arguments.length == 1) return $(element.parentNode);
    var ancestors = Element.ancestors(element);
    return Object.isNumber(expression) ? ancestors[expression] :
      Prototype.Selector.find(ancestors, expression, index);
  },

  down: function(element, expression, index) {
    element = $(element);
    if (arguments.length == 1) return Element.firstDescendant(element);
    return Object.isNumber(expression) ? Element.descendants(element)[expression] :
      Element.select(element, expression)[index || 0];
  },

  previous: function(element, expression, index) {
    element = $(element);
    if (Object.isNumber(expression)) index = expression, expression = false;
    if (!Object.isNumber(index)) index = 0;

    if (expression) {
      return Prototype.Selector.find(element.previousSiblings(), expression, index);
    } else {
      return element.recursivelyCollect("previousSibling", index + 1)[index];
    }
  },

  next: function(element, expression, index) {
    element = $(element);
    if (Object.isNumber(expression)) index = expression, expression = false;
    if (!Object.isNumber(index)) index = 0;

    if (expression) {
      return Prototype.Selector.find(element.nextSiblings(), expression, index);
    } else {
      var maximumLength = Object.isNumber(index) ? index + 1 : 1;
      return element.recursivelyCollect("nextSibling", index + 1)[index];
    }
  },


  select: function(element) {
    element = $(element);
    var expressions = Array.prototype.slice.call(arguments, 1).join(', ');
    return Prototype.Selector.select(expressions, element);
  },

  adjacent: function(element) {
    element = $(element);
    var expressions = Array.prototype.slice.call(arguments, 1).join(', ');
    return Prototype.Selector.select(expressions, element.parentNode).without(element);
  },

  identify: function(element) {
    element = $(element);
    var id = Element.readAttribute(element, 'id');
    if (id) return id;
    do { id = 'anonymous_element_' + Element.idCounter++ } while ($(id));
    Element.writeAttribute(element, 'id', id);
    return id;
  },

  readAttribute: function(element, name) {
    element = $(element);
    if (Prototype.Browser.IE) {
      var t = Element._attributeTranslations.read;
      if (t.values[name]) return t.values[name](element, name);
      if (t.names[name]) name = t.names[name];
      if (name.include(':')) {
        return (!element.attributes || !element.attributes[name]) ? null :
         element.attributes[name].value;
      }
    }
    return element.getAttribute(name);
  },

  writeAttribute: function(element, name, value) {
    element = $(element);
    var attributes = { }, t = Element._attributeTranslations.write;

    if (typeof name == 'object') attributes = name;
    else attributes[name] = Object.isUndefined(value) ? true : value;

    for (var attr in attributes) {
      name = t.names[attr] || attr;
      value = attributes[attr];
      if (t.values[attr]) name = t.values[attr](element, value);
      if (value === false || value === null)
        element.removeAttribute(name);
      else if (value === true)
        element.setAttribute(name, name);
      else element.setAttribute(name, value);
    }
    return element;
  },

  getHeight: function(element) {
    return Element.getDimensions(element).height;
  },

  getWidth: function(element) {
    return Element.getDimensions(element).width;
  },

  classNames: function(element) {
    return new Element.ClassNames(element);
  },

  hasClassName: function(element, className) {
    if (!(element = $(element))) return;
    var elementClassName = element.className;
    return (elementClassName.length > 0 && (elementClassName == className ||
      new RegExp("(^|\\s)" + className + "(\\s|$)").test(elementClassName)));
  },

  addClassName: function(element, className) {
    if (!(element = $(element))) return;
    if (!Element.hasClassName(element, className))
      element.className += (element.className ? ' ' : '') + className;
    return element;
  },

  removeClassName: function(element, className) {
    if (!(element = $(element))) return;
    element.className = element.className.replace(
      new RegExp("(^|\\s+)" + className + "(\\s+|$)"), ' ').strip();
    return element;
  },

  toggleClassName: function(element, className) {
    if (!(element = $(element))) return;
    return Element[Element.hasClassName(element, className) ?
      'removeClassName' : 'addClassName'](element, className);
  },

  cleanWhitespace: function(element) {
    element = $(element);
    var node = element.firstChild;
    while (node) {
      var nextNode = node.nextSibling;
      if (node.nodeType == 3 && !/\S/.test(node.nodeValue))
        element.removeChild(node);
      node = nextNode;
    }
    return element;
  },

  empty: function(element) {
    return $(element).innerHTML.blank();
  },

  descendantOf: function(element, ancestor) {
    element = $(element), ancestor = $(ancestor);

    if (element.compareDocumentPosition)
      return (element.compareDocumentPosition(ancestor) & 8) === 8;

    if (ancestor.contains)
      return ancestor.contains(element) && ancestor !== element;

    while (element = element.parentNode)
      if (element == ancestor) return true;

    return false;
  },

  scrollTo: function(element) {
    element = $(element);
    var pos = Element.cumulativeOffset(element);
    window.scrollTo(pos[0], pos[1]);
    return element;
  },

  getStyle: function(element, style) {
    element = $(element);
    style = style == 'float' ? 'cssFloat' : style.camelize();
    var value = element.style[style];
    if (!value || value == 'auto') {
      var css = document.defaultView.getComputedStyle(element, null);
      value = css ? css[style] : null;
    }
    if (style == 'opacity') return value ? parseFloat(value) : 1.0;
    return value == 'auto' ? null : value;
  },

  getOpacity: function(element) {
    return $(element).getStyle('opacity');
  },

  setStyle: function(element, styles) {
    element = $(element);
    var elementStyle = element.style, match;
    if (Object.isString(styles)) {
      element.style.cssText += ';' + styles;
      return styles.include('opacity') ?
        element.setOpacity(styles.match(/opacity:\s*(\d?\.?\d*)/)[1]) : element;
    }
    for (var property in styles)
      if (property == 'opacity') element.setOpacity(styles[property]);
      else
        elementStyle[(property == 'float' || property == 'cssFloat') ?
          (Object.isUndefined(elementStyle.styleFloat) ? 'cssFloat' : 'styleFloat') :
            property] = styles[property];

    return element;
  },

  setOpacity: function(element, value) {
    element = $(element);
    element.style.opacity = (value == 1 || value === '') ? '' :
      (value < 0.00001) ? 0 : value;
    return element;
  },

  makePositioned: function(element) {
    element = $(element);
    var pos = Element.getStyle(element, 'position');
    if (pos == 'static' || !pos) {
      element._madePositioned = true;
      element.style.position = 'relative';
      if (Prototype.Browser.Opera) {
        element.style.top = 0;
        element.style.left = 0;
      }
    }
    return element;
  },

  undoPositioned: function(element) {
    element = $(element);
    if (element._madePositioned) {
      element._madePositioned = undefined;
      element.style.position =
        element.style.top =
        element.style.left =
        element.style.bottom =
        element.style.right = '';
    }
    return element;
  },

  makeClipping: function(element) {
    element = $(element);
    if (element._overflow) return element;
    element._overflow = Element.getStyle(element, 'overflow') || 'auto';
    if (element._overflow !== 'hidden')
      element.style.overflow = 'hidden';
    return element;
  },

  undoClipping: function(element) {
    element = $(element);
    if (!element._overflow) return element;
    element.style.overflow = element._overflow == 'auto' ? '' : element._overflow;
    element._overflow = null;
    return element;
  },

  clonePosition: function(element, source) {
    var options = Object.extend({
      setLeft:    true,
      setTop:     true,
      setWidth:   true,
      setHeight:  true,
      offsetTop:  0,
      offsetLeft: 0
    }, arguments[2] || { });

    source = $(source);
    var p = Element.viewportOffset(source), delta = [0, 0], parent = null;

    element = $(element);

    if (Element.getStyle(element, 'position') == 'absolute') {
      parent = Element.getOffsetParent(element);
      delta = Element.viewportOffset(parent);
    }

    if (parent == document.body) {
      delta[0] -= document.body.offsetLeft;
      delta[1] -= document.body.offsetTop;
    }

    if (options.setLeft)   element.style.left  = (p[0] - delta[0] + options.offsetLeft) + 'px';
    if (options.setTop)    element.style.top   = (p[1] - delta[1] + options.offsetTop) + 'px';
    if (options.setWidth)  element.style.width = source.offsetWidth + 'px';
    if (options.setHeight) element.style.height = source.offsetHeight + 'px';
    return element;
  }
};

Object.extend(Element.Methods, {
  getElementsBySelector: Element.Methods.select,

  childElements: Element.Methods.immediateDescendants
});

Element._attributeTranslations = {
  write: {
    names: {
      className: 'class',
      htmlFor:   'for'
    },
    values: { }
  }
};

if (Prototype.Browser.Opera) {
  Element.Methods.getStyle = Element.Methods.getStyle.wrap(
    function(proceed, element, style) {
      switch (style) {
        case 'left': case 'top': case 'right': case 'bottom':
          if (proceed(element, 'position') === 'static') return null;
        case 'height': case 'width':
          if (!Element.visible(element)) return null;

          var dim = parseInt(proceed(element, style), 10);

          if (dim !== element['offset' + style.capitalize()])
            return dim + 'px';

          var properties;
          if (style === 'height') {
            properties = ['border-top-width', 'padding-top',
             'padding-bottom', 'border-bottom-width'];
          }
          else {
            properties = ['border-left-width', 'padding-left',
             'padding-right', 'border-right-width'];
          }
          return properties.inject(dim, function(memo, property) {
            var val = proceed(element, property);
            return val === null ? memo : memo - parseInt(val, 10);
          }) + 'px';
        default: return proceed(element, style);
      }
    }
  );

  Element.Methods.readAttribute = Element.Methods.readAttribute.wrap(
    function(proceed, element, attribute) {
      if (attribute === 'title') return element.title;
      return proceed(element, attribute);
    }
  );
}

else if (Prototype.Browser.IE) {
  Element.Methods.getStyle = function(element, style) {
    element = $(element);
    style = (style == 'float' || style == 'cssFloat') ? 'styleFloat' : style.camelize();
    var value = element.style[style];
    if (!value && element.currentStyle) value = element.currentStyle[style];

    if (style == 'opacity') {
      if (value = (element.getStyle('filter') || '').match(/alpha\(opacity=(.*)\)/))
        if (value[1]) return parseFloat(value[1]) / 100;
      return 1.0;
    }

    if (value == 'auto') {
      if ((style == 'width' || style == 'height') && (element.getStyle('display') != 'none'))
        return element['offset' + style.capitalize()] + 'px';
      return null;
    }
    return value;
  };

  Element.Methods.setOpacity = function(element, value) {
    function stripAlpha(filter){
      return filter.replace(/alpha\([^\)]*\)/gi,'');
    }
    element = $(element);
    var currentStyle = element.currentStyle;
    if ((currentStyle && !currentStyle.hasLayout) ||
      (!currentStyle && element.style.zoom == 'normal'))
        element.style.zoom = 1;

    var filter = element.getStyle('filter'), style = element.style;
    if (value == 1 || value === '') {
      (filter = stripAlpha(filter)) ?
        style.filter = filter : style.removeAttribute('filter');
      return element;
    } else if (value < 0.00001) value = 0;
    style.filter = stripAlpha(filter) +
      'alpha(opacity=' + (value * 100) + ')';
    return element;
  };

  Element._attributeTranslations = (function(){

    var classProp = 'className',
        forProp = 'for',
        el = document.createElement('div');

    el.setAttribute(classProp, 'x');

    if (el.className !== 'x') {
      el.setAttribute('class', 'x');
      if (el.className === 'x') {
        classProp = 'class';
      }
    }
    el = null;

    el = document.createElement('label');
    el.setAttribute(forProp, 'x');
    if (el.htmlFor !== 'x') {
      el.setAttribute('htmlFor', 'x');
      if (el.htmlFor === 'x') {
        forProp = 'htmlFor';
      }
    }
    el = null;

    return {
      read: {
        names: {
          'class':      classProp,
          'className':  classProp,
          'for':        forProp,
          'htmlFor':    forProp
        },
        values: {
          _getAttr: function(element, attribute) {
            return element.getAttribute(attribute);
          },
          _getAttr2: function(element, attribute) {
            return element.getAttribute(attribute, 2);
          },
          _getAttrNode: function(element, attribute) {
            var node = element.getAttributeNode(attribute);
            return node ? node.value : "";
          },
          _getEv: (function(){

            var el = document.createElement('div'), f;
            el.onclick = Prototype.emptyFunction;
            var value = el.getAttribute('onclick');

            if (String(value).indexOf('{') > -1) {
              f = function(element, attribute) {
                attribute = element.getAttribute(attribute);
                if (!attribute) return null;
                attribute = attribute.toString();
                attribute = attribute.split('{')[1];
                attribute = attribute.split('}')[0];
                return attribute.strip();
              };
            }
            else if (value === '') {
              f = function(element, attribute) {
                attribute = element.getAttribute(attribute);
                if (!attribute) return null;
                return attribute.strip();
              };
            }
            el = null;
            return f;
          })(),
          _flag: function(element, attribute) {
            return $(element).hasAttribute(attribute) ? attribute : null;
          },
          style: function(element) {
            return element.style.cssText.toLowerCase();
          },
          title: function(element) {
            return element.title;
          }
        }
      }
    }
  })();

  Element._attributeTranslations.write = {
    names: Object.extend({
      cellpadding: 'cellPadding',
      cellspacing: 'cellSpacing'
    }, Element._attributeTranslations.read.names),
    values: {
      checked: function(element, value) {
        element.checked = !!value;
      },

      style: function(element, value) {
        element.style.cssText = value ? value : '';
      }
    }
  };

  Element._attributeTranslations.has = {};

  $w('colSpan rowSpan vAlign dateTime accessKey tabIndex ' +
      'encType maxLength readOnly longDesc frameBorder').each(function(attr) {
    Element._attributeTranslations.write.names[attr.toLowerCase()] = attr;
    Element._attributeTranslations.has[attr.toLowerCase()] = attr;
  });

  (function(v) {
    Object.extend(v, {
      href:        v._getAttr2,
      src:         v._getAttr2,
      type:        v._getAttr,
      action:      v._getAttrNode,
      disabled:    v._flag,
      checked:     v._flag,
      readonly:    v._flag,
      multiple:    v._flag,
      onload:      v._getEv,
      onunload:    v._getEv,
      onclick:     v._getEv,
      ondblclick:  v._getEv,
      onmousedown: v._getEv,
      onmouseup:   v._getEv,
      onmouseover: v._getEv,
      onmousemove: v._getEv,
      onmouseout:  v._getEv,
      onfocus:     v._getEv,
      onblur:      v._getEv,
      onkeypress:  v._getEv,
      onkeydown:   v._getEv,
      onkeyup:     v._getEv,
      onsubmit:    v._getEv,
      onreset:     v._getEv,
      onselect:    v._getEv,
      onchange:    v._getEv
    });
  })(Element._attributeTranslations.read.values);

  if (Prototype.BrowserFeatures.ElementExtensions) {
    (function() {
      function _descendants(element) {
        var nodes = element.getElementsByTagName('*'), results = [];
        for (var i = 0, node; node = nodes[i]; i++)
          if (node.tagName !== "!") // Filter out comment nodes.
            results.push(node);
        return results;
      }

      Element.Methods.down = function(element, expression, index) {
        element = $(element);
        if (arguments.length == 1) return element.firstDescendant();
        return Object.isNumber(expression) ? _descendants(element)[expression] :
          Element.select(element, expression)[index || 0];
      }
    })();
  }

}

else if (Prototype.Browser.Gecko && /rv:1\.8\.0/.test(navigator.userAgent)) {
  Element.Methods.setOpacity = function(element, value) {
    element = $(element);
    element.style.opacity = (value == 1) ? 0.999999 :
      (value === '') ? '' : (value < 0.00001) ? 0 : value;
    return element;
  };
}

else if (Prototype.Browser.WebKit) {
  Element.Methods.setOpacity = function(element, value) {
    element = $(element);
    element.style.opacity = (value == 1 || value === '') ? '' :
      (value < 0.00001) ? 0 : value;

    if (value == 1)
      if (element.tagName.toUpperCase() == 'IMG' && element.width) {
        element.width++; element.width--;
      } else try {
        var n = document.createTextNode(' ');
        element.appendChild(n);
        element.removeChild(n);
      } catch (e) { }

    return element;
  };
}

if ('outerHTML' in document.documentElement) {
  Element.Methods.replace = function(element, content) {
    element = $(element);

    if (content && content.toElement) content = content.toElement();
    if (Object.isElement(content)) {
      element.parentNode.replaceChild(content, element);
      return element;
    }

    content = Object.toHTML(content);
    var parent = element.parentNode, tagName = parent.tagName.toUpperCase();

    if (Element._insertionTranslations.tags[tagName]) {
      var nextSibling = element.next(),
          fragments = Element._getContentFromAnonymousElement(tagName, content.stripScripts());
      parent.removeChild(element);
      if (nextSibling)
        fragments.each(function(node) { parent.insertBefore(node, nextSibling) });
      else
        fragments.each(function(node) { parent.appendChild(node) });
    }
    else element.outerHTML = content.stripScripts();

    content.evalScripts.bind(content).defer();
    return element;
  };
}

Element._returnOffset = function(l, t) {
  var result = [l, t];
  result.left = l;
  result.top = t;
  return result;
};

Element._getContentFromAnonymousElement = function(tagName, html) {
  var div = new Element('div'),
      t = Element._insertionTranslations.tags[tagName];
  if (t) {
    div.innerHTML = t[0] + html + t[1];
    for (var i = t[2]; i--; ) {
      div = div.firstChild;
    }
  }
  else {
    div.innerHTML = html;
  }
  return $A(div.childNodes);
};

Element._insertionTranslations = {
  before: function(element, node) {
    element.parentNode.insertBefore(node, element);
  },
  top: function(element, node) {
    element.insertBefore(node, element.firstChild);
  },
  bottom: function(element, node) {
    element.appendChild(node);
  },
  after: function(element, node) {
    element.parentNode.insertBefore(node, element.nextSibling);
  },
  tags: {
    TABLE:  ['<table>',                '</table>',                   1],
    TBODY:  ['<table><tbody>',         '</tbody></table>',           2],
    TR:     ['<table><tbody><tr>',     '</tr></tbody></table>',      3],
    TD:     ['<table><tbody><tr><td>', '</td></tr></tbody></table>', 4],
    SELECT: ['<select>',               '</select>',                  1]
  }
};

(function() {
  var tags = Element._insertionTranslations.tags;
  Object.extend(tags, {
    THEAD: tags.TBODY,
    TFOOT: tags.TBODY,
    TH:    tags.TD
  });
})();

Element.Methods.Simulated = {
  hasAttribute: function(element, attribute) {
    attribute = Element._attributeTranslations.has[attribute] || attribute;
    var node = $(element).getAttributeNode(attribute);
    return !!(node && node.specified);
  }
};

Element.Methods.ByTag = { };

Object.extend(Element, Element.Methods);

(function(div) {

  if (!Prototype.BrowserFeatures.ElementExtensions && div['__proto__']) {
    window.HTMLElement = { };
    window.HTMLElement.prototype = div['__proto__'];
    Prototype.BrowserFeatures.ElementExtensions = true;
  }

  div = null;

})(document.createElement('div'));

Element.extend = (function() {

  function checkDeficiency(tagName) {
    if (typeof window.Element != 'undefined') {
      var proto = window.Element.prototype;
      if (proto) {
        var id = '_' + (Math.random()+'').slice(2),
            el = document.createElement(tagName);
        proto[id] = 'x';
        var isBuggy = (el[id] !== 'x');
        delete proto[id];
        el = null;
        return isBuggy;
      }
    }
    return false;
  }

  function extendElementWith(element, methods) {
    for (var property in methods) {
      var value = methods[property];
      if (Object.isFunction(value) && !(property in element))
        element[property] = value.methodize();
    }
  }

  var HTMLOBJECTELEMENT_PROTOTYPE_BUGGY = checkDeficiency('object');

  if (Prototype.BrowserFeatures.SpecificElementExtensions) {
    if (HTMLOBJECTELEMENT_PROTOTYPE_BUGGY) {
      return function(element) {
        if (element && typeof element._extendedByPrototype == 'undefined') {
          var t = element.tagName;
          if (t && (/^(?:object|applet|embed)$/i.test(t))) {
            extendElementWith(element, Element.Methods);
            extendElementWith(element, Element.Methods.Simulated);
            extendElementWith(element, Element.Methods.ByTag[t.toUpperCase()]);
          }
        }
        return element;
      }
    }
    return Prototype.K;
  }

  var Methods = { }, ByTag = Element.Methods.ByTag;

  var extend = Object.extend(function(element) {
    if (!element || typeof element._extendedByPrototype != 'undefined' ||
        element.nodeType != 1 || element == window) return element;

    var methods = Object.clone(Methods),
        tagName = element.tagName.toUpperCase();

    if (ByTag[tagName]) Object.extend(methods, ByTag[tagName]);

    extendElementWith(element, methods);

    element._extendedByPrototype = Prototype.emptyFunction;
    return element;

  }, {
    refresh: function() {
      if (!Prototype.BrowserFeatures.ElementExtensions) {
        Object.extend(Methods, Element.Methods);
        Object.extend(Methods, Element.Methods.Simulated);
      }
    }
  });

  extend.refresh();
  return extend;
})();

if (document.documentElement.hasAttribute) {
  Element.hasAttribute = function(element, attribute) {
    return element.hasAttribute(attribute);
  };
}
else {
  Element.hasAttribute = Element.Methods.Simulated.hasAttribute;
}

Element.addMethods = function(methods) {
  var F = Prototype.BrowserFeatures, T = Element.Methods.ByTag;

  if (!methods) {
    Object.extend(Form, Form.Methods);
    Object.extend(Form.Element, Form.Element.Methods);
    Object.extend(Element.Methods.ByTag, {
      "FORM":     Object.clone(Form.Methods),
      "INPUT":    Object.clone(Form.Element.Methods),
      "SELECT":   Object.clone(Form.Element.Methods),
      "TEXTAREA": Object.clone(Form.Element.Methods)
    });
  }

  if (arguments.length == 2) {
    var tagName = methods;
    methods = arguments[1];
  }

  if (!tagName) Object.extend(Element.Methods, methods || { });
  else {
    if (Object.isArray(tagName)) tagName.each(extend);
    else extend(tagName);
  }

  function extend(tagName) {
    tagName = tagName.toUpperCase();
    if (!Element.Methods.ByTag[tagName])
      Element.Methods.ByTag[tagName] = { };
    Object.extend(Element.Methods.ByTag[tagName], methods);
  }

  function copy(methods, destination, onlyIfAbsent) {
    onlyIfAbsent = onlyIfAbsent || false;
    for (var property in methods) {
      var value = methods[property];
      if (!Object.isFunction(value)) continue;
      if (!onlyIfAbsent || !(property in destination))
        destination[property] = value.methodize();
    }
  }

  function findDOMClass(tagName) {
    var klass;
    var trans = {
      "OPTGROUP": "OptGroup", "TEXTAREA": "TextArea", "P": "Paragraph",
      "FIELDSET": "FieldSet", "UL": "UList", "OL": "OList", "DL": "DList",
      "DIR": "Directory", "H1": "Heading", "H2": "Heading", "H3": "Heading",
      "H4": "Heading", "H5": "Heading", "H6": "Heading", "Q": "Quote",
      "INS": "Mod", "DEL": "Mod", "A": "Anchor", "IMG": "Image", "CAPTION":
      "TableCaption", "COL": "TableCol", "COLGROUP": "TableCol", "THEAD":
      "TableSection", "TFOOT": "TableSection", "TBODY": "TableSection", "TR":
      "TableRow", "TH": "TableCell", "TD": "TableCell", "FRAMESET":
      "FrameSet", "IFRAME": "IFrame"
    };
    if (trans[tagName]) klass = 'HTML' + trans[tagName] + 'Element';
    if (window[klass]) return window[klass];
    klass = 'HTML' + tagName + 'Element';
    if (window[klass]) return window[klass];
    klass = 'HTML' + tagName.capitalize() + 'Element';
    if (window[klass]) return window[klass];

    var element = document.createElement(tagName),
        proto = element['__proto__'] || element.constructor.prototype;

    element = null;
    return proto;
  }

  var elementPrototype = window.HTMLElement ? HTMLElement.prototype :
   Element.prototype;

  if (F.ElementExtensions) {
    copy(Element.Methods, elementPrototype);
    copy(Element.Methods.Simulated, elementPrototype, true);
  }

  if (F.SpecificElementExtensions) {
    for (var tag in Element.Methods.ByTag) {
      var klass = findDOMClass(tag);
      if (Object.isUndefined(klass)) continue;
      copy(T[tag], klass.prototype);
    }
  }

  Object.extend(Element, Element.Methods);
  delete Element.ByTag;

  if (Element.extend.refresh) Element.extend.refresh();
  Element.cache = { };
};


document.viewport = {

  getDimensions: function() {
    return { width: this.getWidth(), height: this.getHeight() };
  },

  getScrollOffsets: function() {
    return Element._returnOffset(
      window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
      window.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop);
  }
};

(function(viewport) {
  var B = Prototype.Browser, doc = document, element, property = {};

  function getRootElement() {
    if (B.WebKit && !doc.evaluate)
      return document;

    if (B.Opera && window.parseFloat(window.opera.version()) < 9.5)
      return document.body;

    return document.documentElement;
  }

  function define(D) {
    if (!element) element = getRootElement();

    property[D] = 'client' + D;

    viewport['get' + D] = function() { return element[property[D]] };
    return viewport['get' + D]();
  }

  viewport.getWidth  = define.curry('Width');

  viewport.getHeight = define.curry('Height');
})(document.viewport);


Element.Storage = {
  UID: 1
};

Element.addMethods({
  getStorage: function(element) {
    if (!(element = $(element))) return;

    var uid;
    if (element === window) {
      uid = 0;
    } else {
      if (typeof element._prototypeUID === "undefined")
        element._prototypeUID = Element.Storage.UID++;
      uid = element._prototypeUID;
    }

    if (!Element.Storage[uid])
      Element.Storage[uid] = $H();

    return Element.Storage[uid];
  },

  store: function(element, key, value) {
    if (!(element = $(element))) return;

    if (arguments.length === 2) {
      Element.getStorage(element).update(key);
    } else {
      Element.getStorage(element).set(key, value);
    }

    return element;
  },

  retrieve: function(element, key, defaultValue) {
    if (!(element = $(element))) return;
    var hash = Element.getStorage(element), value = hash.get(key);

    if (Object.isUndefined(value)) {
      hash.set(key, defaultValue);
      value = defaultValue;
    }

    return value;
  },

  clone: function(element, deep) {
    if (!(element = $(element))) return;
    var clone = element.cloneNode(deep);
    clone._prototypeUID = void 0;
    if (deep) {
      var descendants = Element.select(clone, '*'),
          i = descendants.length;
      while (i--) {
        descendants[i]._prototypeUID = void 0;
      }
    }
    return Element.extend(clone);
  },

  purge: function(element) {
    if (!(element = $(element))) return;
    var purgeElement = Element._purgeElement;

    purgeElement(element);

    var descendants = element.getElementsByTagName('*'),
     i = descendants.length;

    while (i--) purgeElement(descendants[i]);

    return null;
  }
});

(function() {

  function toDecimal(pctString) {
    var match = pctString.match(/^(\d+)%?$/i);
    if (!match) return null;
    return (Number(match[1]) / 100);
  }

  function getPixelValue(value, property, context) {
    var element = null;
    if (Object.isElement(value)) {
      element = value;
      value = element.getStyle(property);
    }

    if (value === null) {
      return null;
    }

    if ((/^(?:-)?\d+(\.\d+)?(px)?$/i).test(value)) {
      return window.parseFloat(value);
    }

    var isPercentage = value.include('%'), isViewport = (context === document.viewport);

    if (/\d/.test(value) && element && element.runtimeStyle && !(isPercentage && isViewport)) {
      var style = element.style.left, rStyle = element.runtimeStyle.left;
      element.runtimeStyle.left = element.currentStyle.left;
      element.style.left = value || 0;
      value = element.style.pixelLeft;
      element.style.left = style;
      element.runtimeStyle.left = rStyle;

      return value;
    }

    if (element && isPercentage) {
      context = context || element.parentNode;
      var decimal = toDecimal(value);
      var whole = null;
      var position = element.getStyle('position');

      var isHorizontal = property.include('left') || property.include('right') ||
       property.include('width');

      var isVertical =  property.include('top') || property.include('bottom') ||
        property.include('height');

      if (context === document.viewport) {
        if (isHorizontal) {
          whole = document.viewport.getWidth();
        } else if (isVertical) {
          whole = document.viewport.getHeight();
        }
      } else {
        if (isHorizontal) {
          whole = $(context).measure('width');
        } else if (isVertical) {
          whole = $(context).measure('height');
        }
      }

      return (whole === null) ? 0 : whole * decimal;
    }

    return 0;
  }

  function toCSSPixels(number) {
    if (Object.isString(number) && number.endsWith('px')) {
      return number;
    }
    return number + 'px';
  }

  function isDisplayed(element) {
    var originalElement = element;
    while (element && element.parentNode) {
      var display = element.getStyle('display');
      if (display === 'none') {
        return false;
      }
      element = $(element.parentNode);
    }
    return true;
  }

  var hasLayout = Prototype.K;
  if ('currentStyle' in document.documentElement) {
    hasLayout = function(element) {
      if (!element.currentStyle.hasLayout) {
        element.style.zoom = 1;
      }
      return element;
    };
  }

  function cssNameFor(key) {
    if (key.include('border')) key = key + '-width';
    return key.camelize();
  }

  Element.Layout = Class.create(Hash, {
    initialize: function($super, element, preCompute) {
      $super();
      this.element = $(element);

      Element.Layout.PROPERTIES.each( function(property) {
        this._set(property, null);
      }, this);

      if (preCompute) {
        this._preComputing = true;
        this._begin();
        Element.Layout.PROPERTIES.each( this._compute, this );
        this._end();
        this._preComputing = false;
      }
    },

    _set: function(property, value) {
      return Hash.prototype.set.call(this, property, value);
    },

    set: function(property, value) {
      throw "Properties of Element.Layout are read-only.";
    },

    get: function($super, property) {
      var value = $super(property);
      return value === null ? this._compute(property) : value;
    },

    _begin: function() {
      if (this._prepared) return;

      var element = this.element;
      if (isDisplayed(element)) {
        this._prepared = true;
        return;
      }

      var originalStyles = {
        position:   element.style.position   || '',
        width:      element.style.width      || '',
        visibility: element.style.visibility || '',
        display:    element.style.display    || ''
      };

      element.store('prototype_original_styles', originalStyles);

      var position = element.getStyle('position'),
       width = element.getStyle('width');

      var context = (position === 'fixed') ? document.viewport :
       element.parentNode;

      element.setStyle({
        position:   'absolute',
        visibility: 'hidden',
        display:    'block'
      });

      var positionedWidth = element.getStyle('width');

      var newWidth;
      if (width && (positionedWidth === width)) {
        newWidth = getPixelValue(element, 'width', context);
      } else if (position === 'absolute' || position === 'fixed') {
        newWidth = getPixelValue(element, 'width', context);
      } else {
        var parent = element.parentNode, pLayout = $(parent).getLayout();

        newWidth = pLayout.get('width') -
         this.get('margin-left') -
         this.get('border-left') -
         this.get('padding-left') -
         this.get('padding-right') -
         this.get('border-right') -
         this.get('margin-right');
      }

      element.setStyle({ width: newWidth + 'px' });

      this._prepared = true;
    },

    _end: function() {
      var element = this.element;
      var originalStyles = element.retrieve('prototype_original_styles');
      element.store('prototype_original_styles', null);
      element.setStyle(originalStyles);
      this._prepared = false;
    },

    _compute: function(property) {
      var COMPUTATIONS = Element.Layout.COMPUTATIONS;
      if (!(property in COMPUTATIONS)) {
        throw "Property not found.";
      }

      return this._set(property, COMPUTATIONS[property].call(this, this.element));
    },

    toObject: function() {
      var args = $A(arguments);
      var keys = (args.length === 0) ? Element.Layout.PROPERTIES :
       args.join(' ').split(' ');
      var obj = {};
      keys.each( function(key) {
        if (!Element.Layout.PROPERTIES.include(key)) return;
        var value = this.get(key);
        if (value != null) obj[key] = value;
      }, this);
      return obj;
    },

    toHash: function() {
      var obj = this.toObject.apply(this, arguments);
      return new Hash(obj);
    },

    toCSS: function() {
      var args = $A(arguments);
      var keys = (args.length === 0) ? Element.Layout.PROPERTIES :
       args.join(' ').split(' ');
      var css = {};

      keys.each( function(key) {
        if (!Element.Layout.PROPERTIES.include(key)) return;
        if (Element.Layout.COMPOSITE_PROPERTIES.include(key)) return;

        var value = this.get(key);
        if (value != null) css[cssNameFor(key)] = value + 'px';
      }, this);
      return css;
    },

    inspect: function() {
      return "#<Element.Layout>";
    }
  });

  Object.extend(Element.Layout, {
    PROPERTIES: $w('height width top left right bottom border-left border-right border-top border-bottom padding-left padding-right padding-top padding-bottom margin-top margin-bottom margin-left margin-right padding-box-width padding-box-height border-box-width border-box-height margin-box-width margin-box-height'),

    COMPOSITE_PROPERTIES: $w('padding-box-width padding-box-height margin-box-width margin-box-height border-box-width border-box-height'),

    COMPUTATIONS: {
      'height': function(element) {
        if (!this._preComputing) this._begin();

        var bHeight = this.get('border-box-height');
        if (bHeight <= 0) {
          if (!this._preComputing) this._end();
          return 0;
        }

        var bTop = this.get('border-top'),
         bBottom = this.get('border-bottom');

        var pTop = this.get('padding-top'),
         pBottom = this.get('padding-bottom');

        if (!this._preComputing) this._end();

        return bHeight - bTop - bBottom - pTop - pBottom;
      },

      'width': function(element) {
        if (!this._preComputing) this._begin();

        var bWidth = this.get('border-box-width');
        if (bWidth <= 0) {
          if (!this._preComputing) this._end();
          return 0;
        }

        var bLeft = this.get('border-left'),
         bRight = this.get('border-right');

        var pLeft = this.get('padding-left'),
         pRight = this.get('padding-right');

        if (!this._preComputing) this._end();

        return bWidth - bLeft - bRight - pLeft - pRight;
      },

      'padding-box-height': function(element) {
        var height = this.get('height'),
         pTop = this.get('padding-top'),
         pBottom = this.get('padding-bottom');

        return height + pTop + pBottom;
      },

      'padding-box-width': function(element) {
        var width = this.get('width'),
         pLeft = this.get('padding-left'),
         pRight = this.get('padding-right');

        return width + pLeft + pRight;
      },

      'border-box-height': function(element) {
        if (!this._preComputing) this._begin();
        var height = element.offsetHeight;
        if (!this._preComputing) this._end();
        return height;
      },

      'border-box-width': function(element) {
        if (!this._preComputing) this._begin();
        var width = element.offsetWidth;
        if (!this._preComputing) this._end();
        return width;
      },

      'margin-box-height': function(element) {
        var bHeight = this.get('border-box-height'),
         mTop = this.get('margin-top'),
         mBottom = this.get('margin-bottom');

        if (bHeight <= 0) return 0;

        return bHeight + mTop + mBottom;
      },

      'margin-box-width': function(element) {
        var bWidth = this.get('border-box-width'),
         mLeft = this.get('margin-left'),
         mRight = this.get('margin-right');

        if (bWidth <= 0) return 0;

        return bWidth + mLeft + mRight;
      },

      'top': function(element) {
        var offset = element.positionedOffset();
        return offset.top;
      },

      'bottom': function(element) {
        var offset = element.positionedOffset(),
         parent = element.getOffsetParent(),
         pHeight = parent.measure('height');

        var mHeight = this.get('border-box-height');

        return pHeight - mHeight - offset.top;
      },

      'left': function(element) {
        var offset = element.positionedOffset();
        return offset.left;
      },

      'right': function(element) {
        var offset = element.positionedOffset(),
         parent = element.getOffsetParent(),
         pWidth = parent.measure('width');

        var mWidth = this.get('border-box-width');

        return pWidth - mWidth - offset.left;
      },

      'padding-top': function(element) {
        return getPixelValue(element, 'paddingTop');
      },

      'padding-bottom': function(element) {
        return getPixelValue(element, 'paddingBottom');
      },

      'padding-left': function(element) {
        return getPixelValue(element, 'paddingLeft');
      },

      'padding-right': function(element) {
        return getPixelValue(element, 'paddingRight');
      },

      'border-top': function(element) {
        return getPixelValue(element, 'borderTopWidth');
      },

      'border-bottom': function(element) {
        return getPixelValue(element, 'borderBottomWidth');
      },

      'border-left': function(element) {
        return getPixelValue(element, 'borderLeftWidth');
      },

      'border-right': function(element) {
        return getPixelValue(element, 'borderRightWidth');
      },

      'margin-top': function(element) {
        return getPixelValue(element, 'marginTop');
      },

      'margin-bottom': function(element) {
        return getPixelValue(element, 'marginBottom');
      },

      'margin-left': function(element) {
        return getPixelValue(element, 'marginLeft');
      },

      'margin-right': function(element) {
        return getPixelValue(element, 'marginRight');
      }
    }
  });

  if ('getBoundingClientRect' in document.documentElement) {
    Object.extend(Element.Layout.COMPUTATIONS, {
      'right': function(element) {
        var parent = hasLayout(element.getOffsetParent());
        var rect = element.getBoundingClientRect(),
         pRect = parent.getBoundingClientRect();

        return (pRect.right - rect.right).round();
      },

      'bottom': function(element) {
        var parent = hasLayout(element.getOffsetParent());
        var rect = element.getBoundingClientRect(),
         pRect = parent.getBoundingClientRect();

        return (pRect.bottom - rect.bottom).round();
      }
    });
  }

  Element.Offset = Class.create({
    initialize: function(left, top) {
      this.left = left.round();
      this.top  = top.round();

      this[0] = this.left;
      this[1] = this.top;
    },

    relativeTo: function(offset) {
      return new Element.Offset(
        this.left - offset.left,
        this.top  - offset.top
      );
    },

    inspect: function() {
      return "#<Element.Offset left: #{left} top: #{top}>".interpolate(this);
    },

    toString: function() {
      return "[#{left}, #{top}]".interpolate(this);
    },

    toArray: function() {
      return [this.left, this.top];
    }
  });

  function getLayout(element, preCompute) {
    return new Element.Layout(element, preCompute);
  }

  function measure(element, property) {
    return $(element).getLayout().get(property);
  }

  function getDimensions(element) {
    element = $(element);
    var display = Element.getStyle(element, 'display');

    if (display && display !== 'none') {
      return { width: element.offsetWidth, height: element.offsetHeight };
    }

    var style = element.style;
    var originalStyles = {
      visibility: style.visibility,
      position:   style.position,
      display:    style.display
    };

    var newStyles = {
      visibility: 'hidden',
      display:    'block'
    };

    if (originalStyles.position !== 'fixed')
      newStyles.position = 'absolute';

    Element.setStyle(element, newStyles);

    var dimensions = {
      width:  element.offsetWidth,
      height: element.offsetHeight
    };

    Element.setStyle(element, originalStyles);

    return dimensions;
  }

  function getOffsetParent(element) {
    if (isDetached(element)) return $(document.body);

    var isInline = (Element.getStyle(element, 'display') === 'inline');
    if (!isInline && element.offsetParent) return $(element.offsetParent);
    if (element === document.body) return $(element);

    while ((element = element.parentNode) && element !== document.body) {
      if (Element.getStyle(element, 'position') !== 'static') {
        return (element.nodeName === 'HTML') ? $(document.body) : $(element);
      }
    }

    return $(document.body);
  }


  function cumulativeOffset(element) {
    var valueT = 0, valueL = 0;
    if (element.parentNode) {
      do {
        valueT += element.offsetTop  || 0;
        valueL += element.offsetLeft || 0;
        element = element.offsetParent;
      } while (element);
    }
    return new Element.Offset(valueL, valueT);
  }

  function positionedOffset(element) {
    var layout = element.getLayout();

    var valueT = 0, valueL = 0;
    do {
      valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;
      element = element.offsetParent;
      if (element) {
        if (isBody(element)) break;
        var p = Element.getStyle(element, 'position');
        if (p !== 'static') break;
      }
    } while (element);

    valueL -= layout.get('margin-top');
    valueT -= layout.get('margin-left');

    return new Element.Offset(valueL, valueT);
  }

  function cumulativeScrollOffset(element) {
    var valueT = 0, valueL = 0;
    do {
      valueT += element.scrollTop  || 0;
      valueL += element.scrollLeft || 0;
      element = element.parentNode;
    } while (element);
    return new Element.Offset(valueL, valueT);
  }

  function viewportOffset(forElement) {
    var valueT = 0, valueL = 0, docBody = document.body;

    var element = forElement;
    do {
      valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;
      if (element.offsetParent == docBody &&
        Element.getStyle(element, 'position') == 'absolute') break;
    } while (element = element.offsetParent);

    element = forElement;
    do {
      if (element != docBody) {
        valueT -= element.scrollTop  || 0;
        valueL -= element.scrollLeft || 0;
      }
    } while (element = element.parentNode);
    return new Element.Offset(valueL, valueT);
  }

  function absolutize(element) {
    element = $(element);

    if (Element.getStyle(element, 'position') === 'absolute') {
      return element;
    }

    var offsetParent = getOffsetParent(element);
    var eOffset = element.viewportOffset(),
     pOffset = offsetParent.viewportOffset();

    var offset = eOffset.relativeTo(pOffset);
    var layout = element.getLayout();

    element.store('prototype_absolutize_original_styles', {
      left:   element.getStyle('left'),
      top:    element.getStyle('top'),
      width:  element.getStyle('width'),
      height: element.getStyle('height')
    });

    element.setStyle({
      position: 'absolute',
      top:    offset.top + 'px',
      left:   offset.left + 'px',
      width:  layout.get('width') + 'px',
      height: layout.get('height') + 'px'
    });

    return element;
  }

  function relativize(element) {
    element = $(element);
    if (Element.getStyle(element, 'position') === 'relative') {
      return element;
    }

    var originalStyles =
     element.retrieve('prototype_absolutize_original_styles');

    if (originalStyles) element.setStyle(originalStyles);
    return element;
  }

  if (Prototype.Browser.IE) {
    getOffsetParent = getOffsetParent.wrap(
      function(proceed, element) {
        element = $(element);
        if (isDetached(element)) return $(document.body);

        var position = element.getStyle('position');
        if (position !== 'static') return proceed(element);

        element.setStyle({ position: 'relative' });
        var value = proceed(element);
        element.setStyle({ position: position });
        return value;
      }
    );

    positionedOffset = positionedOffset.wrap(function(proceed, element) {
      element = $(element);
      if (!element.parentNode) return new Element.Offset(0, 0);
      var position = element.getStyle('position');
      if (position !== 'static') return proceed(element);

      var offsetParent = element.getOffsetParent();
      if (offsetParent && offsetParent.getStyle('position') === 'fixed')
        hasLayout(offsetParent);

      element.setStyle({ position: 'relative' });
      var value = proceed(element);
      element.setStyle({ position: position });
      return value;
    });
  } else if (Prototype.Browser.Webkit) {
    cumulativeOffset = function(element) {
      var valueT = 0, valueL = 0;
      do {
        valueT += element.offsetTop  || 0;
        valueL += element.offsetLeft || 0;
        if (element.offsetParent == document.body)
          if (Element.getStyle(element, 'position') == 'absolute') break;

        element = element.offsetParent;
      } while (element);

      return new Element.Offset(valueL, valueT);
    };
  }


  Element.addMethods({
    getLayout:              getLayout,
    measure:                measure,
    getDimensions:          getDimensions,
    getOffsetParent:        getOffsetParent,
    cumulativeOffset:       cumulativeOffset,
    positionedOffset:       positionedOffset,
    cumulativeScrollOffset: cumulativeScrollOffset,
    viewportOffset:         viewportOffset,
    absolutize:             absolutize,
    relativize:             relativize
  });

  function isBody(element) {
    return element.nodeName.toUpperCase() === 'BODY';
  }

  function isDetached(element) {
    return element !== document.body &&
     !Element.descendantOf(element, document.body);
  }

  if ('getBoundingClientRect' in document.documentElement) {
    Element.addMethods({
      viewportOffset: function(element) {
        element = $(element);
        if (isDetached(element)) return new Element.Offset(0, 0);

        var rect = element.getBoundingClientRect(),
         docEl = document.documentElement;
        return new Element.Offset(rect.left - docEl.clientLeft,
         rect.top - docEl.clientTop);
      }
    });
  }
})();
window.$$ = function() {
  var expression = $A(arguments).join(', ');
  return Prototype.Selector.select(expression, document);
};

Prototype.Selector = (function() {

  function select() {
    throw new Error('Method "Prototype.Selector.select" must be defined.');
  }

  function match() {
    throw new Error('Method "Prototype.Selector.match" must be defined.');
  }

  function find(elements, expression, index) {
    index = index || 0;
    var match = Prototype.Selector.match, length = elements.length, matchIndex = 0, i;

    for (i = 0; i < length; i++) {
      if (match(elements[i], expression) && index == matchIndex++) {
        return Element.extend(elements[i]);
      }
    }
  }

  function extendElements(elements) {
    for (var i = 0, length = elements.length; i < length; i++) {
      Element.extend(elements[i]);
    }
    return elements;
  }


  var K = Prototype.K;

  return {
    select: select,
    match: match,
    find: find,
    extendElements: (Element.extend === K) ? K : extendElements,
    extendElement: Element.extend
  };
})();
Prototype._original_property = window.Sizzle;
/*!
 * Sizzle CSS Selector Engine - v1.0
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){

var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
	done = 0,
	toString = Object.prototype.toString,
	hasDuplicate = false,
	baseHasDuplicate = true;

[0, 0].sort(function(){
	baseHasDuplicate = false;
	return 0;
});

var Sizzle = function(selector, context, results, seed) {
	results = results || [];
	var origContext = context = context || document;

	if ( context.nodeType !== 1 && context.nodeType !== 9 ) {
		return [];
	}

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	var parts = [], m, set, checkSet, check, mode, extra, prune = true, contextXML = isXML(context),
		soFar = selector;

	while ( (chunker.exec(""), m = chunker.exec(soFar)) !== null ) {
		soFar = m[3];

		parts.push( m[1] );

		if ( m[2] ) {
			extra = m[3];
			break;
		}
	}

	if ( parts.length > 1 && origPOS.exec( selector ) ) {
		if ( parts.length === 2 && Expr.relative[ parts[0] ] ) {
			set = posProcess( parts[0] + parts[1], context );
		} else {
			set = Expr.relative[ parts[0] ] ?
				[ context ] :
				Sizzle( parts.shift(), context );

			while ( parts.length ) {
				selector = parts.shift();

				if ( Expr.relative[ selector ] )
					selector += parts.shift();

				set = posProcess( selector, set );
			}
		}
	} else {
		if ( !seed && parts.length > 1 && context.nodeType === 9 && !contextXML &&
				Expr.match.ID.test(parts[0]) && !Expr.match.ID.test(parts[parts.length - 1]) ) {
			var ret = Sizzle.find( parts.shift(), context, contextXML );
			context = ret.expr ? Sizzle.filter( ret.expr, ret.set )[0] : ret.set[0];
		}

		if ( context ) {
			var ret = seed ?
				{ expr: parts.pop(), set: makeArray(seed) } :
				Sizzle.find( parts.pop(), parts.length === 1 && (parts[0] === "~" || parts[0] === "+") && context.parentNode ? context.parentNode : context, contextXML );
			set = ret.expr ? Sizzle.filter( ret.expr, ret.set ) : ret.set;

			if ( parts.length > 0 ) {
				checkSet = makeArray(set);
			} else {
				prune = false;
			}

			while ( parts.length ) {
				var cur = parts.pop(), pop = cur;

				if ( !Expr.relative[ cur ] ) {
					cur = "";
				} else {
					pop = parts.pop();
				}

				if ( pop == null ) {
					pop = context;
				}

				Expr.relative[ cur ]( checkSet, pop, contextXML );
			}
		} else {
			checkSet = parts = [];
		}
	}

	if ( !checkSet ) {
		checkSet = set;
	}

	if ( !checkSet ) {
		throw "Syntax error, unrecognized expression: " + (cur || selector);
	}

	if ( toString.call(checkSet) === "[object Array]" ) {
		if ( !prune ) {
			results.push.apply( results, checkSet );
		} else if ( context && context.nodeType === 1 ) {
			for ( var i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && contains(context, checkSet[i])) ) {
					results.push( set[i] );
				}
			}
		} else {
			for ( var i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && checkSet[i].nodeType === 1 ) {
					results.push( set[i] );
				}
			}
		}
	} else {
		makeArray( checkSet, results );
	}

	if ( extra ) {
		Sizzle( extra, origContext, results, seed );
		Sizzle.uniqueSort( results );
	}

	return results;
};

Sizzle.uniqueSort = function(results){
	if ( sortOrder ) {
		hasDuplicate = baseHasDuplicate;
		results.sort(sortOrder);

		if ( hasDuplicate ) {
			for ( var i = 1; i < results.length; i++ ) {
				if ( results[i] === results[i-1] ) {
					results.splice(i--, 1);
				}
			}
		}
	}

	return results;
};

Sizzle.matches = function(expr, set){
	return Sizzle(expr, null, null, set);
};

Sizzle.find = function(expr, context, isXML){
	var set, match;

	if ( !expr ) {
		return [];
	}

	for ( var i = 0, l = Expr.order.length; i < l; i++ ) {
		var type = Expr.order[i], match;

		if ( (match = Expr.leftMatch[ type ].exec( expr )) ) {
			var left = match[1];
			match.splice(1,1);

			if ( left.substr( left.length - 1 ) !== "\\" ) {
				match[1] = (match[1] || "").replace(/\\/g, "");
				set = Expr.find[ type ]( match, context, isXML );
				if ( set != null ) {
					expr = expr.replace( Expr.match[ type ], "" );
					break;
				}
			}
		}
	}

	if ( !set ) {
		set = context.getElementsByTagName("*");
	}

	return {set: set, expr: expr};
};

Sizzle.filter = function(expr, set, inplace, not){
	var old = expr, result = [], curLoop = set, match, anyFound,
		isXMLFilter = set && set[0] && isXML(set[0]);

	while ( expr && set.length ) {
		for ( var type in Expr.filter ) {
			if ( (match = Expr.match[ type ].exec( expr )) != null ) {
				var filter = Expr.filter[ type ], found, item;
				anyFound = false;

				if ( curLoop == result ) {
					result = [];
				}

				if ( Expr.preFilter[ type ] ) {
					match = Expr.preFilter[ type ]( match, curLoop, inplace, result, not, isXMLFilter );

					if ( !match ) {
						anyFound = found = true;
					} else if ( match === true ) {
						continue;
					}
				}

				if ( match ) {
					for ( var i = 0; (item = curLoop[i]) != null; i++ ) {
						if ( item ) {
							found = filter( item, match, i, curLoop );
							var pass = not ^ !!found;

							if ( inplace && found != null ) {
								if ( pass ) {
									anyFound = true;
								} else {
									curLoop[i] = false;
								}
							} else if ( pass ) {
								result.push( item );
								anyFound = true;
							}
						}
					}
				}

				if ( found !== undefined ) {
					if ( !inplace ) {
						curLoop = result;
					}

					expr = expr.replace( Expr.match[ type ], "" );

					if ( !anyFound ) {
						return [];
					}

					break;
				}
			}
		}

		if ( expr == old ) {
			if ( anyFound == null ) {
				throw "Syntax error, unrecognized expression: " + expr;
			} else {
				break;
			}
		}

		old = expr;
	}

	return curLoop;
};

var Expr = Sizzle.selectors = {
	order: [ "ID", "NAME", "TAG" ],
	match: {
		ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
		CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
		NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
		ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
		TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
		CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
		POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
		PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/
	},
	leftMatch: {},
	attrMap: {
		"class": "className",
		"for": "htmlFor"
	},
	attrHandle: {
		href: function(elem){
			return elem.getAttribute("href");
		}
	},
	relative: {
		"+": function(checkSet, part, isXML){
			var isPartStr = typeof part === "string",
				isTag = isPartStr && !/\W/.test(part),
				isPartStrNotTag = isPartStr && !isTag;

			if ( isTag && !isXML ) {
				part = part.toUpperCase();
			}

			for ( var i = 0, l = checkSet.length, elem; i < l; i++ ) {
				if ( (elem = checkSet[i]) ) {
					while ( (elem = elem.previousSibling) && elem.nodeType !== 1 ) {}

					checkSet[i] = isPartStrNotTag || elem && elem.nodeName === part ?
						elem || false :
						elem === part;
				}
			}

			if ( isPartStrNotTag ) {
				Sizzle.filter( part, checkSet, true );
			}
		},
		">": function(checkSet, part, isXML){
			var isPartStr = typeof part === "string";

			if ( isPartStr && !/\W/.test(part) ) {
				part = isXML ? part : part.toUpperCase();

				for ( var i = 0, l = checkSet.length; i < l; i++ ) {
					var elem = checkSet[i];
					if ( elem ) {
						var parent = elem.parentNode;
						checkSet[i] = parent.nodeName === part ? parent : false;
					}
				}
			} else {
				for ( var i = 0, l = checkSet.length; i < l; i++ ) {
					var elem = checkSet[i];
					if ( elem ) {
						checkSet[i] = isPartStr ?
							elem.parentNode :
							elem.parentNode === part;
					}
				}

				if ( isPartStr ) {
					Sizzle.filter( part, checkSet, true );
				}
			}
		},
		"": function(checkSet, part, isXML){
			var doneName = done++, checkFn = dirCheck;

			if ( !/\W/.test(part) ) {
				var nodeCheck = part = isXML ? part : part.toUpperCase();
				checkFn = dirNodeCheck;
			}

			checkFn("parentNode", part, doneName, checkSet, nodeCheck, isXML);
		},
		"~": function(checkSet, part, isXML){
			var doneName = done++, checkFn = dirCheck;

			if ( typeof part === "string" && !/\W/.test(part) ) {
				var nodeCheck = part = isXML ? part : part.toUpperCase();
				checkFn = dirNodeCheck;
			}

			checkFn("previousSibling", part, doneName, checkSet, nodeCheck, isXML);
		}
	},
	find: {
		ID: function(match, context, isXML){
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				return m ? [m] : [];
			}
		},
		NAME: function(match, context, isXML){
			if ( typeof context.getElementsByName !== "undefined" ) {
				var ret = [], results = context.getElementsByName(match[1]);

				for ( var i = 0, l = results.length; i < l; i++ ) {
					if ( results[i].getAttribute("name") === match[1] ) {
						ret.push( results[i] );
					}
				}

				return ret.length === 0 ? null : ret;
			}
		},
		TAG: function(match, context){
			return context.getElementsByTagName(match[1]);
		}
	},
	preFilter: {
		CLASS: function(match, curLoop, inplace, result, not, isXML){
			match = " " + match[1].replace(/\\/g, "") + " ";

			if ( isXML ) {
				return match;
			}

			for ( var i = 0, elem; (elem = curLoop[i]) != null; i++ ) {
				if ( elem ) {
					if ( not ^ (elem.className && (" " + elem.className + " ").indexOf(match) >= 0) ) {
						if ( !inplace )
							result.push( elem );
					} else if ( inplace ) {
						curLoop[i] = false;
					}
				}
			}

			return false;
		},
		ID: function(match){
			return match[1].replace(/\\/g, "");
		},
		TAG: function(match, curLoop){
			for ( var i = 0; curLoop[i] === false; i++ ){}
			return curLoop[i] && isXML(curLoop[i]) ? match[1] : match[1].toUpperCase();
		},
		CHILD: function(match){
			if ( match[1] == "nth" ) {
				var test = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(
					match[2] == "even" && "2n" || match[2] == "odd" && "2n+1" ||
					!/\D/.test( match[2] ) && "0n+" + match[2] || match[2]);

				match[2] = (test[1] + (test[2] || 1)) - 0;
				match[3] = test[3] - 0;
			}

			match[0] = done++;

			return match;
		},
		ATTR: function(match, curLoop, inplace, result, not, isXML){
			var name = match[1].replace(/\\/g, "");

			if ( !isXML && Expr.attrMap[name] ) {
				match[1] = Expr.attrMap[name];
			}

			if ( match[2] === "~=" ) {
				match[4] = " " + match[4] + " ";
			}

			return match;
		},
		PSEUDO: function(match, curLoop, inplace, result, not){
			if ( match[1] === "not" ) {
				if ( ( chunker.exec(match[3]) || "" ).length > 1 || /^\w/.test(match[3]) ) {
					match[3] = Sizzle(match[3], null, null, curLoop);
				} else {
					var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);
					if ( !inplace ) {
						result.push.apply( result, ret );
					}
					return false;
				}
			} else if ( Expr.match.POS.test( match[0] ) || Expr.match.CHILD.test( match[0] ) ) {
				return true;
			}

			return match;
		},
		POS: function(match){
			match.unshift( true );
			return match;
		}
	},
	filters: {
		enabled: function(elem){
			return elem.disabled === false && elem.type !== "hidden";
		},
		disabled: function(elem){
			return elem.disabled === true;
		},
		checked: function(elem){
			return elem.checked === true;
		},
		selected: function(elem){
			elem.parentNode.selectedIndex;
			return elem.selected === true;
		},
		parent: function(elem){
			return !!elem.firstChild;
		},
		empty: function(elem){
			return !elem.firstChild;
		},
		has: function(elem, i, match){
			return !!Sizzle( match[3], elem ).length;
		},
		header: function(elem){
			return /h\d/i.test( elem.nodeName );
		},
		text: function(elem){
			return "text" === elem.type;
		},
		radio: function(elem){
			return "radio" === elem.type;
		},
		checkbox: function(elem){
			return "checkbox" === elem.type;
		},
		file: function(elem){
			return "file" === elem.type;
		},
		password: function(elem){
			return "password" === elem.type;
		},
		submit: function(elem){
			return "submit" === elem.type;
		},
		image: function(elem){
			return "image" === elem.type;
		},
		reset: function(elem){
			return "reset" === elem.type;
		},
		button: function(elem){
			return "button" === elem.type || elem.nodeName.toUpperCase() === "BUTTON";
		},
		input: function(elem){
			return /input|select|textarea|button/i.test(elem.nodeName);
		}
	},
	setFilters: {
		first: function(elem, i){
			return i === 0;
		},
		last: function(elem, i, match, array){
			return i === array.length - 1;
		},
		even: function(elem, i){
			return i % 2 === 0;
		},
		odd: function(elem, i){
			return i % 2 === 1;
		},
		lt: function(elem, i, match){
			return i < match[3] - 0;
		},
		gt: function(elem, i, match){
			return i > match[3] - 0;
		},
		nth: function(elem, i, match){
			return match[3] - 0 == i;
		},
		eq: function(elem, i, match){
			return match[3] - 0 == i;
		}
	},
	filter: {
		PSEUDO: function(elem, match, i, array){
			var name = match[1], filter = Expr.filters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			} else if ( name === "contains" ) {
				return (elem.textContent || elem.innerText || "").indexOf(match[3]) >= 0;
			} else if ( name === "not" ) {
				var not = match[3];

				for ( var i = 0, l = not.length; i < l; i++ ) {
					if ( not[i] === elem ) {
						return false;
					}
				}

				return true;
			}
		},
		CHILD: function(elem, match){
			var type = match[1], node = elem;
			switch (type) {
				case 'only':
				case 'first':
					while ( (node = node.previousSibling) )  {
						if ( node.nodeType === 1 ) return false;
					}
					if ( type == 'first') return true;
					node = elem;
				case 'last':
					while ( (node = node.nextSibling) )  {
						if ( node.nodeType === 1 ) return false;
					}
					return true;
				case 'nth':
					var first = match[2], last = match[3];

					if ( first == 1 && last == 0 ) {
						return true;
					}

					var doneName = match[0],
						parent = elem.parentNode;

					if ( parent && (parent.sizcache !== doneName || !elem.nodeIndex) ) {
						var count = 0;
						for ( node = parent.firstChild; node; node = node.nextSibling ) {
							if ( node.nodeType === 1 ) {
								node.nodeIndex = ++count;
							}
						}
						parent.sizcache = doneName;
					}

					var diff = elem.nodeIndex - last;
					if ( first == 0 ) {
						return diff == 0;
					} else {
						return ( diff % first == 0 && diff / first >= 0 );
					}
			}
		},
		ID: function(elem, match){
			return elem.nodeType === 1 && elem.getAttribute("id") === match;
		},
		TAG: function(elem, match){
			return (match === "*" && elem.nodeType === 1) || elem.nodeName === match;
		},
		CLASS: function(elem, match){
			return (" " + (elem.className || elem.getAttribute("class")) + " ")
				.indexOf( match ) > -1;
		},
		ATTR: function(elem, match){
			var name = match[1],
				result = Expr.attrHandle[ name ] ?
					Expr.attrHandle[ name ]( elem ) :
					elem[ name ] != null ?
						elem[ name ] :
						elem.getAttribute( name ),
				value = result + "",
				type = match[2],
				check = match[4];

			return result == null ?
				type === "!=" :
				type === "=" ?
				value === check :
				type === "*=" ?
				value.indexOf(check) >= 0 :
				type === "~=" ?
				(" " + value + " ").indexOf(check) >= 0 :
				!check ?
				value && result !== false :
				type === "!=" ?
				value != check :
				type === "^=" ?
				value.indexOf(check) === 0 :
				type === "$=" ?
				value.substr(value.length - check.length) === check :
				type === "|=" ?
				value === check || value.substr(0, check.length + 1) === check + "-" :
				false;
		},
		POS: function(elem, match, i, array){
			var name = match[2], filter = Expr.setFilters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			}
		}
	}
};

var origPOS = Expr.match.POS;

for ( var type in Expr.match ) {
	Expr.match[ type ] = new RegExp( Expr.match[ type ].source + /(?![^\[]*\])(?![^\(]*\))/.source );
	Expr.leftMatch[ type ] = new RegExp( /(^(?:.|\r|\n)*?)/.source + Expr.match[ type ].source );
}

var makeArray = function(array, results) {
	array = Array.prototype.slice.call( array, 0 );

	if ( results ) {
		results.push.apply( results, array );
		return results;
	}

	return array;
};

try {
	Array.prototype.slice.call( document.documentElement.childNodes, 0 );

} catch(e){
	makeArray = function(array, results) {
		var ret = results || [];

		if ( toString.call(array) === "[object Array]" ) {
			Array.prototype.push.apply( ret, array );
		} else {
			if ( typeof array.length === "number" ) {
				for ( var i = 0, l = array.length; i < l; i++ ) {
					ret.push( array[i] );
				}
			} else {
				for ( var i = 0; array[i]; i++ ) {
					ret.push( array[i] );
				}
			}
		}

		return ret;
	};
}

var sortOrder;

if ( document.documentElement.compareDocumentPosition ) {
	sortOrder = function( a, b ) {
		if ( !a.compareDocumentPosition || !b.compareDocumentPosition ) {
			if ( a == b ) {
				hasDuplicate = true;
			}
			return 0;
		}

		var ret = a.compareDocumentPosition(b) & 4 ? -1 : a === b ? 0 : 1;
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
} else if ( "sourceIndex" in document.documentElement ) {
	sortOrder = function( a, b ) {
		if ( !a.sourceIndex || !b.sourceIndex ) {
			if ( a == b ) {
				hasDuplicate = true;
			}
			return 0;
		}

		var ret = a.sourceIndex - b.sourceIndex;
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
} else if ( document.createRange ) {
	sortOrder = function( a, b ) {
		if ( !a.ownerDocument || !b.ownerDocument ) {
			if ( a == b ) {
				hasDuplicate = true;
			}
			return 0;
		}

		var aRange = a.ownerDocument.createRange(), bRange = b.ownerDocument.createRange();
		aRange.setStart(a, 0);
		aRange.setEnd(a, 0);
		bRange.setStart(b, 0);
		bRange.setEnd(b, 0);
		var ret = aRange.compareBoundaryPoints(Range.START_TO_END, bRange);
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
}

(function(){
	var form = document.createElement("div"),
		id = "script" + (new Date).getTime();
	form.innerHTML = "<a name='" + id + "'/>";

	var root = document.documentElement;
	root.insertBefore( form, root.firstChild );

	if ( !!document.getElementById( id ) ) {
		Expr.find.ID = function(match, context, isXML){
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				return m ? m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ? [m] : undefined : [];
			}
		};

		Expr.filter.ID = function(elem, match){
			var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
			return elem.nodeType === 1 && node && node.nodeValue === match;
		};
	}

	root.removeChild( form );
	root = form = null; // release memory in IE
})();

(function(){

	var div = document.createElement("div");
	div.appendChild( document.createComment("") );

	if ( div.getElementsByTagName("*").length > 0 ) {
		Expr.find.TAG = function(match, context){
			var results = context.getElementsByTagName(match[1]);

			if ( match[1] === "*" ) {
				var tmp = [];

				for ( var i = 0; results[i]; i++ ) {
					if ( results[i].nodeType === 1 ) {
						tmp.push( results[i] );
					}
				}

				results = tmp;
			}

			return results;
		};
	}

	div.innerHTML = "<a href='#'></a>";
	if ( div.firstChild && typeof div.firstChild.getAttribute !== "undefined" &&
			div.firstChild.getAttribute("href") !== "#" ) {
		Expr.attrHandle.href = function(elem){
			return elem.getAttribute("href", 2);
		};
	}

	div = null; // release memory in IE
})();

if ( document.querySelectorAll ) (function(){
	var oldSizzle = Sizzle, div = document.createElement("div");
	div.innerHTML = "<p class='TEST'></p>";

	if ( div.querySelectorAll && div.querySelectorAll(".TEST").length === 0 ) {
		return;
	}

	Sizzle = function(query, context, extra, seed){
		context = context || document;

		if ( !seed && context.nodeType === 9 && !isXML(context) ) {
			try {
				return makeArray( context.querySelectorAll(query), extra );
			} catch(e){}
		}

		return oldSizzle(query, context, extra, seed);
	};

	for ( var prop in oldSizzle ) {
		Sizzle[ prop ] = oldSizzle[ prop ];
	}

	div = null; // release memory in IE
})();

if ( document.getElementsByClassName && document.documentElement.getElementsByClassName ) (function(){
	var div = document.createElement("div");
	div.innerHTML = "<div class='test e'></div><div class='test'></div>";

	if ( div.getElementsByClassName("e").length === 0 )
		return;

	div.lastChild.className = "e";

	if ( div.getElementsByClassName("e").length === 1 )
		return;

	Expr.order.splice(1, 0, "CLASS");
	Expr.find.CLASS = function(match, context, isXML) {
		if ( typeof context.getElementsByClassName !== "undefined" && !isXML ) {
			return context.getElementsByClassName(match[1]);
		}
	};

	div = null; // release memory in IE
})();

function dirNodeCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	var sibDir = dir == "previousSibling" && !isXML;
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];
		if ( elem ) {
			if ( sibDir && elem.nodeType === 1 ){
				elem.sizcache = doneName;
				elem.sizset = i;
			}
			elem = elem[dir];
			var match = false;

			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 && !isXML ){
					elem.sizcache = doneName;
					elem.sizset = i;
				}

				if ( elem.nodeName === cur ) {
					match = elem;
					break;
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

function dirCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	var sibDir = dir == "previousSibling" && !isXML;
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];
		if ( elem ) {
			if ( sibDir && elem.nodeType === 1 ) {
				elem.sizcache = doneName;
				elem.sizset = i;
			}
			elem = elem[dir];
			var match = false;

			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 ) {
					if ( !isXML ) {
						elem.sizcache = doneName;
						elem.sizset = i;
					}
					if ( typeof cur !== "string" ) {
						if ( elem === cur ) {
							match = true;
							break;
						}

					} else if ( Sizzle.filter( cur, [elem] ).length > 0 ) {
						match = elem;
						break;
					}
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

var contains = document.compareDocumentPosition ?  function(a, b){
	return a.compareDocumentPosition(b) & 16;
} : function(a, b){
	return a !== b && (a.contains ? a.contains(b) : true);
};

var isXML = function(elem){
	return elem.nodeType === 9 && elem.documentElement.nodeName !== "HTML" ||
		!!elem.ownerDocument && elem.ownerDocument.documentElement.nodeName !== "HTML";
};

var posProcess = function(selector, context){
	var tmpSet = [], later = "", match,
		root = context.nodeType ? [context] : context;

	while ( (match = Expr.match.PSEUDO.exec( selector )) ) {
		later += match[0];
		selector = selector.replace( Expr.match.PSEUDO, "" );
	}

	selector = Expr.relative[selector] ? selector + "*" : selector;

	for ( var i = 0, l = root.length; i < l; i++ ) {
		Sizzle( selector, root[i], tmpSet );
	}

	return Sizzle.filter( later, tmpSet );
};


window.Sizzle = Sizzle;

})();

;(function(engine) {
  var extendElements = Prototype.Selector.extendElements;

  function select(selector, scope) {
    return extendElements(engine(selector, scope || document));
  }

  function match(element, selector) {
    return engine.matches(selector, [element]).length == 1;
  }

  Prototype.Selector.engine = engine;
  Prototype.Selector.select = select;
  Prototype.Selector.match = match;
})(Sizzle);

window.Sizzle = Prototype._original_property;
delete Prototype._original_property;

var Form = {
  reset: function(form) {
    form = $(form);
    form.reset();
    return form;
  },

  serializeElements: function(elements, options) {
    if (typeof options != 'object') options = { hash: !!options };
    else if (Object.isUndefined(options.hash)) options.hash = true;
    var key, value, submitted = false, submit = options.submit, accumulator, initial;

    if (options.hash) {
      initial = {};
      accumulator = function(result, key, value) {
        if (key in result) {
          if (!Object.isArray(result[key])) result[key] = [result[key]];
          result[key].push(value);
        } else result[key] = value;
        return result;
      };
    } else {
      initial = '';
      accumulator = function(result, key, value) {
        return result + (result ? '&' : '') + encodeURIComponent(key) + '=' + encodeURIComponent(value);
      }
    }

    return elements.inject(initial, function(result, element) {
      if (!element.disabled && element.name) {
        key = element.name; value = $(element).getValue();
        if (value != null && element.type != 'file' && (element.type != 'submit' || (!submitted &&
            submit !== false && (!submit || key == submit) && (submitted = true)))) {
          result = accumulator(result, key, value);
        }
      }
      return result;
    });
  }
};

Form.Methods = {
  serialize: function(form, options) {
    return Form.serializeElements(Form.getElements(form), options);
  },

  getElements: function(form) {
    var elements = $(form).getElementsByTagName('*'),
        element,
        arr = [ ],
        serializers = Form.Element.Serializers;
    for (var i = 0; element = elements[i]; i++) {
      arr.push(element);
    }
    return arr.inject([], function(elements, child) {
      if (serializers[child.tagName.toLowerCase()])
        elements.push(Element.extend(child));
      return elements;
    })
  },

  getInputs: function(form, typeName, name) {
    form = $(form);
    var inputs = form.getElementsByTagName('input');

    if (!typeName && !name) return $A(inputs).map(Element.extend);

    for (var i = 0, matchingInputs = [], length = inputs.length; i < length; i++) {
      var input = inputs[i];
      if ((typeName && input.type != typeName) || (name && input.name != name))
        continue;
      matchingInputs.push(Element.extend(input));
    }

    return matchingInputs;
  },

  disable: function(form) {
    form = $(form);
    Form.getElements(form).invoke('disable');
    return form;
  },

  enable: function(form) {
    form = $(form);
    Form.getElements(form).invoke('enable');
    return form;
  },

  findFirstElement: function(form) {
    var elements = $(form).getElements().findAll(function(element) {
      return 'hidden' != element.type && !element.disabled;
    });
    var firstByIndex = elements.findAll(function(element) {
      return element.hasAttribute('tabIndex') && element.tabIndex >= 0;
    }).sortBy(function(element) { return element.tabIndex }).first();

    return firstByIndex ? firstByIndex : elements.find(function(element) {
      return /^(?:input|select|textarea)$/i.test(element.tagName);
    });
  },

  focusFirstElement: function(form) {
    form = $(form);
    form.findFirstElement().activate();
    return form;
  },

  request: function(form, options) {
    form = $(form), options = Object.clone(options || { });

    var params = options.parameters, action = form.readAttribute('action') || '';
    if (action.blank()) action = window.location.href;
    options.parameters = form.serialize(true);

    if (params) {
      if (Object.isString(params)) params = params.toQueryParams();
      Object.extend(options.parameters, params);
    }

    if (form.hasAttribute('method') && !options.method)
      options.method = form.method;

    return new Ajax.Request(action, options);
  }
};

/*--------------------------------------------------------------------------*/


Form.Element = {
  focus: function(element) {
    $(element).focus();
    return element;
  },

  select: function(element) {
    $(element).select();
    return element;
  }
};

Form.Element.Methods = {

  serialize: function(element) {
    element = $(element);
    if (!element.disabled && element.name) {
      var value = element.getValue();
      if (value != undefined) {
        var pair = { };
        pair[element.name] = value;
        return Object.toQueryString(pair);
      }
    }
    return '';
  },

  getValue: function(element) {
    element = $(element);
    var method = element.tagName.toLowerCase();
    return Form.Element.Serializers[method](element);
  },

  setValue: function(element, value) {
    element = $(element);
    var method = element.tagName.toLowerCase();
    Form.Element.Serializers[method](element, value);
    return element;
  },

  clear: function(element) {
    $(element).value = '';
    return element;
  },

  present: function(element) {
    return $(element).value != '';
  },

  activate: function(element) {
    element = $(element);
    try {
      element.focus();
      if (element.select && (element.tagName.toLowerCase() != 'input' ||
          !(/^(?:button|reset|submit)$/i.test(element.type))))
        element.select();
    } catch (e) { }
    return element;
  },

  disable: function(element) {
    element = $(element);
    element.disabled = true;
    return element;
  },

  enable: function(element) {
    element = $(element);
    element.disabled = false;
    return element;
  }
};

/*--------------------------------------------------------------------------*/

var Field = Form.Element;

var $F = Form.Element.Methods.getValue;

/*--------------------------------------------------------------------------*/

Form.Element.Serializers = {
  input: function(element, value) {
    switch (element.type.toLowerCase()) {
      case 'checkbox':
      case 'radio':
        return Form.Element.Serializers.inputSelector(element, value);
      default:
        return Form.Element.Serializers.textarea(element, value);
    }
  },

  inputSelector: function(element, value) {
    if (Object.isUndefined(value)) return element.checked ? element.value : null;
    else element.checked = !!value;
  },

  textarea: function(element, value) {
    if (Object.isUndefined(value)) return element.value;
    else element.value = value;
  },

  select: function(element, value) {
    if (Object.isUndefined(value))
      return this[element.type == 'select-one' ?
        'selectOne' : 'selectMany'](element);
    else {
      var opt, currentValue, single = !Object.isArray(value);
      for (var i = 0, length = element.length; i < length; i++) {
        opt = element.options[i];
        currentValue = this.optionValue(opt);
        if (single) {
          if (currentValue == value) {
            opt.selected = true;
            return;
          }
        }
        else opt.selected = value.include(currentValue);
      }
    }
  },

  selectOne: function(element) {
    var index = element.selectedIndex;
    return index >= 0 ? this.optionValue(element.options[index]) : null;
  },

  selectMany: function(element) {
    var values, length = element.length;
    if (!length) return null;

    for (var i = 0, values = []; i < length; i++) {
      var opt = element.options[i];
      if (opt.selected) values.push(this.optionValue(opt));
    }
    return values;
  },

  optionValue: function(opt) {
    return Element.extend(opt).hasAttribute('value') ? opt.value : opt.text;
  }
};

/*--------------------------------------------------------------------------*/


Abstract.TimedObserver = Class.create(PeriodicalExecuter, {
  initialize: function($super, element, frequency, callback) {
    $super(callback, frequency);
    this.element   = $(element);
    this.lastValue = this.getValue();
  },

  execute: function() {
    var value = this.getValue();
    if (Object.isString(this.lastValue) && Object.isString(value) ?
        this.lastValue != value : String(this.lastValue) != String(value)) {
      this.callback(this.element, value);
      this.lastValue = value;
    }
  }
});

Form.Element.Observer = Class.create(Abstract.TimedObserver, {
  getValue: function() {
    return Form.Element.getValue(this.element);
  }
});

Form.Observer = Class.create(Abstract.TimedObserver, {
  getValue: function() {
    return Form.serialize(this.element);
  }
});

/*--------------------------------------------------------------------------*/

Abstract.EventObserver = Class.create({
  initialize: function(element, callback) {
    this.element  = $(element);
    this.callback = callback;

    this.lastValue = this.getValue();
    if (this.element.tagName.toLowerCase() == 'form')
      this.registerFormCallbacks();
    else
      this.registerCallback(this.element);
  },

  onElementEvent: function() {
    var value = this.getValue();
    if (this.lastValue != value) {
      this.callback(this.element, value);
      this.lastValue = value;
    }
  },

  registerFormCallbacks: function() {
    Form.getElements(this.element).each(this.registerCallback, this);
  },

  registerCallback: function(element) {
    if (element.type) {
      switch (element.type.toLowerCase()) {
        case 'checkbox':
        case 'radio':
          Event.observe(element, 'click', this.onElementEvent.bind(this));
          break;
        default:
          Event.observe(element, 'change', this.onElementEvent.bind(this));
          break;
      }
    }
  }
});

Form.Element.EventObserver = Class.create(Abstract.EventObserver, {
  getValue: function() {
    return Form.Element.getValue(this.element);
  }
});

Form.EventObserver = Class.create(Abstract.EventObserver, {
  getValue: function() {
    return Form.serialize(this.element);
  }
});
(function() {

  var Event = {
    KEY_BACKSPACE: 8,
    KEY_TAB:       9,
    KEY_RETURN:   13,
    KEY_ESC:      27,
    KEY_LEFT:     37,
    KEY_UP:       38,
    KEY_RIGHT:    39,
    KEY_DOWN:     40,
    KEY_DELETE:   46,
    KEY_HOME:     36,
    KEY_END:      35,
    KEY_PAGEUP:   33,
    KEY_PAGEDOWN: 34,
    KEY_INSERT:   45,

    cache: {}
  };

  var docEl = document.documentElement;
  var MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED = 'onmouseenter' in docEl
    && 'onmouseleave' in docEl;
  var IE_LEGACY_EVENT_SYSTEM = (window.attachEvent && !window.addEventListener);

  var _isButton;
  if (IE_LEGACY_EVENT_SYSTEM) {
    var buttonMap = { 0: 1, 1: 4, 2: 2 };
    _isButton = function(event, code) {
      return event.button === buttonMap[code];
    };
  } else if (Prototype.Browser.WebKit) {
    _isButton = function(event, code) {
      switch (code) {
        case 0: return event.which == 1 && !event.metaKey;
        case 1: return event.which == 1 && event.metaKey;
        default: return false;
      }
    };
  } else {
    _isButton = function(event, code) {
      return event.which ? (event.which === code + 1) : (event.button === code);
    };
  }

  function isLeftClick(event)   { return _isButton(event, 0) }

  function isMiddleClick(event) { return _isButton(event, 1) }

  function isRightClick(event)  { return _isButton(event, 2) }

  function element(event) {
    event = Event.extend(event);

    var node = event.target, type = event.type,
     currentTarget = event.currentTarget;

    if (currentTarget && currentTarget.tagName) {
      if (type === 'load' || type === 'error' ||
        (type === 'click' && currentTarget.tagName.toLowerCase() === 'input'
          && currentTarget.type === 'radio'))
            node = currentTarget;
    }

    if (node.nodeType == Node.TEXT_NODE)
      node = node.parentNode;

    return Element.extend(node);
  }

  function findElement(event, expression) {
    var element = Event.element(event);

    if (!expression) return element;
    while (element) {
      if (Object.isElement(element) && Prototype.Selector.match(element, expression)) {
        return Element.extend(element);
      }
      element = element.parentNode;
    }
  }

  function pointer(event) {
    return { x: pointerX(event), y: pointerY(event) };
  }

  function pointerX(event) {
    var docElement = document.documentElement,
     body = document.body || { scrollLeft: 0 };

    return event.pageX || (event.clientX +
      (docElement.scrollLeft || body.scrollLeft) -
      (docElement.clientLeft || 0));
  }

  function pointerY(event) {
    var docElement = document.documentElement,
     body = document.body || { scrollTop: 0 };

    return  event.pageY || (event.clientY +
       (docElement.scrollTop || body.scrollTop) -
       (docElement.clientTop || 0));
  }


  function stop(event) {
    Event.extend(event);
    event.preventDefault();
    event.stopPropagation();

    event.stopped = true;
  }

  Event.Methods = {
    isLeftClick: isLeftClick,
    isMiddleClick: isMiddleClick,
    isRightClick: isRightClick,

    element: element,
    findElement: findElement,

    pointer: pointer,
    pointerX: pointerX,
    pointerY: pointerY,

    stop: stop
  };


  var methods = Object.keys(Event.Methods).inject({ }, function(m, name) {
    m[name] = Event.Methods[name].methodize();
    return m;
  });

  if (IE_LEGACY_EVENT_SYSTEM) {
    function _relatedTarget(event) {
      var element;
      switch (event.type) {
        case 'mouseover': element = event.fromElement; break;
        case 'mouseout':  element = event.toElement;   break;
        default: return null;
      }
      return Element.extend(element);
    }

    Object.extend(methods, {
      stopPropagation: function() { this.cancelBubble = true },
      preventDefault:  function() { this.returnValue = false },
      inspect: function() { return '[object Event]' }
    });

    Event.extend = function(event, element) {
      if (!event) return false;
      if (event._extendedByPrototype) return event;

      event._extendedByPrototype = Prototype.emptyFunction;
      var pointer = Event.pointer(event);

      Object.extend(event, {
        target: event.srcElement || element,
        relatedTarget: _relatedTarget(event),
        pageX:  pointer.x,
        pageY:  pointer.y
      });

      return Object.extend(event, methods);
    };
  } else {
    Event.prototype = window.Event.prototype || document.createEvent('HTMLEvents').__proto__;
    Object.extend(Event.prototype, methods);
    Event.extend = Prototype.K;
  }

  function _createResponder(element, eventName, handler) {
    var registry = Element.retrieve(element, 'prototype_event_registry');

    if (Object.isUndefined(registry)) {
      CACHE.push(element);
      registry = Element.retrieve(element, 'prototype_event_registry', $H());
    }

    var respondersForEvent = registry.get(eventName);
    if (Object.isUndefined(respondersForEvent)) {
      respondersForEvent = [];
      registry.set(eventName, respondersForEvent);
    }

    if (respondersForEvent.pluck('handler').include(handler)) return false;

    var responder;
    if (eventName.include(":")) {
      responder = function(event) {
        if (Object.isUndefined(event.eventName))
          return false;

        if (event.eventName !== eventName)
          return false;

        Event.extend(event, element);
        handler.call(element, event);
      };
    } else {
      if (!MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED &&
       (eventName === "mouseenter" || eventName === "mouseleave")) {
        if (eventName === "mouseenter" || eventName === "mouseleave") {
          responder = function(event) {
            Event.extend(event, element);

            var parent = event.relatedTarget;
            while (parent && parent !== element) {
              try { parent = parent.parentNode; }
              catch(e) { parent = element; }
            }

            if (parent === element) return;

            handler.call(element, event);
          };
        }
      } else {
        responder = function(event) {
          Event.extend(event, element);
          handler.call(element, event);
        };
      }
    }

    responder.handler = handler;
    respondersForEvent.push(responder);
    return responder;
  }

  function _destroyCache() {
    for (var i = 0, length = CACHE.length; i < length; i++) {
      Event.stopObserving(CACHE[i]);
      CACHE[i] = null;
    }
  }

  var CACHE = [];

  if (Prototype.Browser.IE)
    window.attachEvent('onunload', _destroyCache);

  if (Prototype.Browser.WebKit)
    window.addEventListener('unload', Prototype.emptyFunction, false);


  var _getDOMEventName = Prototype.K,
      translations = { mouseenter: "mouseover", mouseleave: "mouseout" };

  if (!MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED) {
    _getDOMEventName = function(eventName) {
      return (translations[eventName] || eventName);
    };
  }

  function observe(element, eventName, handler) {
    element = $(element);

    var responder = _createResponder(element, eventName, handler);

    if (!responder) return element;

    if (eventName.include(':')) {
      if (element.addEventListener)
        element.addEventListener("dataavailable", responder, false);
      else {
        element.attachEvent("ondataavailable", responder);
        element.attachEvent("onlosecapture", responder);
      }
    } else {
      var actualEventName = _getDOMEventName(eventName);

      if (element.addEventListener)
        element.addEventListener(actualEventName, responder, false);
      else
        element.attachEvent("on" + actualEventName, responder);
    }

    return element;
  }

  function stopObserving(element, eventName, handler) {
    element = $(element);

    var registry = Element.retrieve(element, 'prototype_event_registry');
    if (!registry) return element;

    if (!eventName) {
      registry.each( function(pair) {
        var eventName = pair.key;
        stopObserving(element, eventName);
      });
      return element;
    }

    var responders = registry.get(eventName);
    if (!responders) return element;

    if (!handler) {
      responders.each(function(r) {
        stopObserving(element, eventName, r.handler);
      });
      return element;
    }

    var responder = responders.find( function(r) { return r.handler === handler; });
    if (!responder) return element;

    if (eventName.include(':')) {
      if (element.removeEventListener)
        element.removeEventListener("dataavailable", responder, false);
      else {
        element.detachEvent("ondataavailable", responder);
        element.detachEvent("onlosecapture", responder);
      }
    } else {
      var actualEventName = _getDOMEventName(eventName);
      if (element.removeEventListener)
        element.removeEventListener(actualEventName, responder, false);
      else
        element.detachEvent('on' + actualEventName, responder);
    }

    registry.set(eventName, responders.without(responder));

    return element;
  }

  function fire(element, eventName, memo, bubble) {
    element = $(element);

    if (Object.isUndefined(bubble))
      bubble = true;

    if (element == document && document.createEvent && !element.dispatchEvent)
      element = document.documentElement;

    var event;
    if (document.createEvent) {
      event = document.createEvent('HTMLEvents');
      event.initEvent('dataavailable', bubble, true);
    } else {
      event = document.createEventObject();
      event.eventType = bubble ? 'ondataavailable' : 'onlosecapture';
    }

    event.eventName = eventName;
    event.memo = memo || { };

    if (document.createEvent)
      element.dispatchEvent(event);
    else
      element.fireEvent(event.eventType, event);

    return Event.extend(event);
  }

  Event.Handler = Class.create({
    initialize: function(element, eventName, selector, callback) {
      this.element   = $(element);
      this.eventName = eventName;
      this.selector  = selector;
      this.callback  = callback;
      this.handler   = this.handleEvent.bind(this);
    },

    start: function() {
      Event.observe(this.element, this.eventName, this.handler);
      return this;
    },

    stop: function() {
      Event.stopObserving(this.element, this.eventName, this.handler);
      return this;
    },

    handleEvent: function(event) {
      var element = event.findElement(this.selector);
      if (element) this.callback.call(this.element, event, element);
    }
  });

  function on(element, eventName, selector, callback) {
    element = $(element);
    if (Object.isFunction(selector) && Object.isUndefined(callback)) {
      callback = selector, selector = null;
    }

    return new Event.Handler(element, eventName, selector, callback).start();
  }

  Object.extend(Event, Event.Methods);

  Object.extend(Event, {
    fire:          fire,
    observe:       observe,
    stopObserving: stopObserving,
    on:            on
  });

  Element.addMethods({
    fire:          fire,

    observe:       observe,

    stopObserving: stopObserving,

    on:            on
  });

  Object.extend(document, {
    fire:          fire.methodize(),

    observe:       observe.methodize(),

    stopObserving: stopObserving.methodize(),

    on:            on.methodize(),

    loaded:        false
  });

  if (window.Event) Object.extend(window.Event, Event);
  else window.Event = Event;
})();

(function() {
  /* Support for the DOMContentLoaded event is based on work by Dan Webb,
     Matthias Miller, Dean Edwards, John Resig, and Diego Perini. */

  var timer;

  function fireContentLoadedEvent() {
    if (document.loaded) return;
    if (timer) window.clearTimeout(timer);
    document.loaded = true;
    document.fire('dom:loaded');
  }

  function checkReadyState() {
    if (document.readyState === 'complete') {
      document.stopObserving('readystatechange', checkReadyState);
      fireContentLoadedEvent();
    }
  }

  function pollDoScroll() {
    try { document.documentElement.doScroll('left'); }
    catch(e) {
      timer = pollDoScroll.defer();
      return;
    }
    fireContentLoadedEvent();
  }

  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
  } else {
    document.observe('readystatechange', checkReadyState);
    if (window == top)
      timer = pollDoScroll.defer();
  }

  Event.observe(window, 'load', fireContentLoadedEvent);
})();

Element.addMethods();

/*------------------------------- DEPRECATED -------------------------------*/

Hash.toQueryString = Object.toQueryString;

var Toggle = { display: Element.toggle };

Element.Methods.childOf = Element.Methods.descendantOf;

var Insertion = {
  Before: function(element, content) {
    return Element.insert(element, {before:content});
  },

  Top: function(element, content) {
    return Element.insert(element, {top:content});
  },

  Bottom: function(element, content) {
    return Element.insert(element, {bottom:content});
  },

  After: function(element, content) {
    return Element.insert(element, {after:content});
  }
};

var $continue = new Error('"throw $continue" is deprecated, use "return" instead');

var Position = {
  includeScrollOffsets: false,

  prepare: function() {
    this.deltaX =  window.pageXOffset
                || document.documentElement.scrollLeft
                || document.body.scrollLeft
                || 0;
    this.deltaY =  window.pageYOffset
                || document.documentElement.scrollTop
                || document.body.scrollTop
                || 0;
  },

  within: function(element, x, y) {
    if (this.includeScrollOffsets)
      return this.withinIncludingScrolloffsets(element, x, y);
    this.xcomp = x;
    this.ycomp = y;
    this.offset = Element.cumulativeOffset(element);

    return (y >= this.offset[1] &&
            y <  this.offset[1] + element.offsetHeight &&
            x >= this.offset[0] &&
            x <  this.offset[0] + element.offsetWidth);
  },

  withinIncludingScrolloffsets: function(element, x, y) {
    var offsetcache = Element.cumulativeScrollOffset(element);

    this.xcomp = x + offsetcache[0] - this.deltaX;
    this.ycomp = y + offsetcache[1] - this.deltaY;
    this.offset = Element.cumulativeOffset(element);

    return (this.ycomp >= this.offset[1] &&
            this.ycomp <  this.offset[1] + element.offsetHeight &&
            this.xcomp >= this.offset[0] &&
            this.xcomp <  this.offset[0] + element.offsetWidth);
  },

  overlap: function(mode, element) {
    if (!mode) return 0;
    if (mode == 'vertical')
      return ((this.offset[1] + element.offsetHeight) - this.ycomp) /
        element.offsetHeight;
    if (mode == 'horizontal')
      return ((this.offset[0] + element.offsetWidth) - this.xcomp) /
        element.offsetWidth;
  },


  cumulativeOffset: Element.Methods.cumulativeOffset,

  positionedOffset: Element.Methods.positionedOffset,

  absolutize: function(element) {
    Position.prepare();
    return Element.absolutize(element);
  },

  relativize: function(element) {
    Position.prepare();
    return Element.relativize(element);
  },

  realOffset: Element.Methods.cumulativeScrollOffset,

  offsetParent: Element.Methods.getOffsetParent,

  page: Element.Methods.viewportOffset,

  clone: function(source, target, options) {
    options = options || { };
    return Element.clonePosition(target, source, options);
  }
};

/*--------------------------------------------------------------------------*/

if (!document.getElementsByClassName) document.getElementsByClassName = function(instanceMethods){
  function iter(name) {
    return name.blank() ? null : "[contains(concat(' ', @class, ' '), ' " + name + " ')]";
  }

  instanceMethods.getElementsByClassName = Prototype.BrowserFeatures.XPath ?
  function(element, className) {
    className = className.toString().strip();
    var cond = /\s/.test(className) ? $w(className).map(iter).join('') : iter(className);
    return cond ? document._getElementsByXPath('.//*' + cond, element) : [];
  } : function(element, className) {
    className = className.toString().strip();
    var elements = [], classNames = (/\s/.test(className) ? $w(className) : null);
    if (!classNames && !className) return elements;

    var nodes = $(element).getElementsByTagName('*');
    className = ' ' + className + ' ';

    for (var i = 0, child, cn; child = nodes[i]; i++) {
      if (child.className && (cn = ' ' + child.className + ' ') && (cn.include(className) ||
          (classNames && classNames.all(function(name) {
            return !name.toString().blank() && cn.include(' ' + name + ' ');
          }))))
        elements.push(Element.extend(child));
    }
    return elements;
  };

  return function(className, parentElement) {
    return $(parentElement || document.body).getElementsByClassName(className);
  };
}(Element.Methods);

/*--------------------------------------------------------------------------*/

Element.ClassNames = Class.create();
Element.ClassNames.prototype = {
  initialize: function(element) {
    this.element = $(element);
  },

  _each: function(iterator) {
    this.element.className.split(/\s+/).select(function(name) {
      return name.length > 0;
    })._each(iterator);
  },

  set: function(className) {
    this.element.className = className;
  },

  add: function(classNameToAdd) {
    if (this.include(classNameToAdd)) return;
    this.set($A(this).concat(classNameToAdd).join(' '));
  },

  remove: function(classNameToRemove) {
    if (!this.include(classNameToRemove)) return;
    this.set($A(this).without(classNameToRemove).join(' '));
  },

  toString: function() {
    return $A(this).join(' ');
  }
};

Object.extend(Element.ClassNames.prototype, Enumerable);

/*--------------------------------------------------------------------------*/

(function() {
  window.Selector = Class.create({
    initialize: function(expression) {
      this.expression = expression.strip();
    },

    findElements: function(rootElement) {
      return Prototype.Selector.select(this.expression, rootElement);
    },

    match: function(element) {
      return Prototype.Selector.match(element, this.expression);
    },

    toString: function() {
      return this.expression;
    },

    inspect: function() {
      return "#<Selector: " + this.expression + ">";
    }
  });

  Object.extend(Selector, {
    matchElements: function(elements, expression) {
      var match = Prototype.Selector.match,
          results = [];

      for (var i = 0, length = elements.length; i < length; i++) {
        var element = elements[i];
        if (match(element, expression)) {
          results.push(Element.extend(element));
        }
      }
      return results;
    },

    findElement: function(elements, expression, index) {
      index = index || 0;
      var matchIndex = 0, element;
      for (var i = 0, length = elements.length; i < length; i++) {
        element = elements[i];
        if (Prototype.Selector.match(element, expression) && index === matchIndex++) {
          return Element.extend(element);
        }
      }
    },

    findChildElements: function(element, expressions) {
      var selector = expressions.toArray().join(', ');
      return Prototype.Selector.select(selector, element || document);
    }
  });
})();


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
(function() {
  Ajax.Responders.register({
    onCreate: function(request) {
      var token = $$('meta[name=csrf-token]')[0];
      if (token) {
        if (!request.options.requestHeaders) request.options.requestHeaders = {};
        request.options.requestHeaders['X-CSRF-Token'] = token.readAttribute('content');
      }
    }
  });
  // Technique from Juriy Zaytsev
  // http://thinkweb2.com/projects/prototype/detecting-event-support-without-browser-sniffing/
  function isEventSupported(eventName) {
    var el = document.createElement('div');
    eventName = 'on' + eventName;
    var isSupported = (eventName in el);
    if (!isSupported) {
      el.setAttribute(eventName, 'return;');
      isSupported = typeof el[eventName] == 'function';
    }
    el = null;
    return isSupported;
  }

  function isForm(element) {
    return Object.isElement(element) && element.nodeName.toUpperCase() == 'FORM';
  }

  function isInput(element) {
    if (Object.isElement(element)) {
      var name = element.nodeName.toUpperCase();
      return name == 'INPUT' || name == 'SELECT' || name == 'TEXTAREA';
    }
    else return false;
  }

  var submitBubbles = isEventSupported('submit'),
      changeBubbles = isEventSupported('change');

  if (!submitBubbles || !changeBubbles) {
    // augment the Event.Handler class to observe custom events when needed
    Event.Handler.prototype.initialize = Event.Handler.prototype.initialize.wrap(
      function(init, element, eventName, selector, callback) {
        init(element, eventName, selector, callback);
        // is the handler being attached to an element that doesn't support this event?
        if ( (!submitBubbles && this.eventName == 'submit' && !isForm(this.element)) ||
             (!changeBubbles && this.eventName == 'change' && !isInput(this.element)) ) {
          // "submit" => "emulated:submit"
          this.eventName = 'emulated:' + this.eventName;
        }
      }
    );
  }

  if (!submitBubbles) {
    // discover forms on the page by observing focus events which always bubble
    document.on('focusin', 'form', function(focusEvent, form) {
      // special handler for the real "submit" event (one-time operation)
      if (!form.retrieve('emulated:submit')) {
        form.on('submit', function(submitEvent) {
          var emulated = form.fire('emulated:submit', submitEvent, true);
          // if custom event received preventDefault, cancel the real one too
          if (emulated.returnValue === false) submitEvent.preventDefault();
        });
        form.store('emulated:submit', true);
      }
    });
  }

  if (!changeBubbles) {
    // discover form inputs on the page
    document.on('focusin', 'input, select, textarea', function(focusEvent, input) {
      // special handler for real "change" events
      if (!input.retrieve('emulated:change')) {
        input.on('change', function(changeEvent) {
          input.fire('emulated:change', changeEvent, true);
        });
        input.store('emulated:change', true);
      }
    });
  }

  function handleRemote(element) {
    var method, url, params;

    var event = element.fire("ajax:before");
    if (event.stopped) return false;

    if (element.tagName.toLowerCase() === 'form') {
      method = element.readAttribute('method') || 'post';
      url    = element.readAttribute('action');
      // serialize the form with respect to the submit button that was pressed
      params = element.serialize({ submit: element.retrieve('rails:submit-button') });
      // clear the pressed submit button information
      element.store('rails:submit-button', null);
    } else {
      method = element.readAttribute('data-method') || 'get';
      url    = element.readAttribute('href');
      params = {};
    }

    new Ajax.Request(url, {
      method: method,
      parameters: params,
      evalScripts: true,

      onCreate:   function(response) { element.fire("ajax:create",   response); },
      onComplete: function(response) { element.fire("ajax:complete", response); },
      onSuccess:  function(response) { element.fire("ajax:success",  response); },
      onFailure:  function(response) { element.fire("ajax:failure",  response); }
    });

    element.fire("ajax:after");
  }
  window.Prototype.Rails = {
    handleRemote: handleRemote
  };

  function insertHiddenField(form, name, value) {
    form.insert(new Element('input', { type: 'hidden', name: name, value: value }));
  }

  function handleMethod(element) {
    var method = element.readAttribute('data-method'),
        url = element.readAttribute('href'),
        csrf_param = $$('meta[name=csrf-param]')[0],
        csrf_token = $$('meta[name=csrf-token]')[0];

    var form = new Element('form', { method: "POST", action: url, style: "display: none;" });
    $(element.parentNode).insert(form);

    if (method !== 'post') {
      insertHiddenField(form, '_method', method);
    }

    if (csrf_param) {
      insertHiddenField(form, csrf_param.readAttribute('content'), csrf_token.readAttribute('content'));
    }

    form.submit();
  }

  function disableFormElements(form) {
    form.select('input[type=submit][data-disable-with]').each(function(input) {
      input.store('rails:original-value', input.getValue());
      input.setValue(input.readAttribute('data-disable-with')).disable();
    });
  }
  
  function enableFormElements(form) {
    form.select('input[type=submit][data-disable-with]').each(function(input) {
      input.setValue(input.retrieve('rails:original-value')).enable();
    });
  }

  function allowAction(element) {
    var message = element.readAttribute('data-confirm');
    return !message || confirm(message);
  }

  document.on('click', 'a[data-confirm], a[data-remote], a[data-method]', function(event, link) {
    if (!allowAction(link)) {
      event.stop();
      return false;
    }

    if (link.readAttribute('data-remote')) {
      handleRemote(link);
      event.stop();
    } else if (link.readAttribute('data-method')) {
      handleMethod(link);
      event.stop();
    }
  });

  document.on("click", "form input[type=submit], form button[type=submit], form button:not([type])", function(event, button) {
    // register the pressed submit button
    event.findElement('form').store('rails:submit-button', button.name || false);
  });

  document.on("submit", function(event) {
    var form = event.findElement();

    if (!allowAction(form)) {
      event.stop();
      return false;
    }

    if (form.readAttribute('data-remote')) {
      handleRemote(form);
      event.stop();
    } else {
      disableFormElements(form);
    }
  });

  document.on('ajax:create', 'form', function(event, form) {
    if (form == event.findElement()) disableFormElements(form);
  });
  
  document.on('ajax:complete', 'form', function(event, form) {
    if (form == event.findElement()) enableFormElements(form);
  });
})();


// Copyright (c) 2005-2008 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
// Contributors:
//  Justin Palmer (http://encytemedia.com/)
//  Mark Pilgrim (http://diveintomark.org/)
//  Martin Bialasinki
// 
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/ 

// converts rgb() and #xxx to #xxxxxx format,  
// returns self (or first argument) if not convertable  
String.prototype.parseColor = function() {  
  var color = '#';
  if (this.slice(0,4) == 'rgb(') {  
    var cols = this.slice(4,this.length-1).split(',');  
    var i=0; do { color += parseInt(cols[i]).toColorPart() } while (++i<3);  
  } else {  
    if (this.slice(0,1) == '#') {  
      if (this.length==4) for(var i=1;i<4;i++) color += (this.charAt(i) + this.charAt(i)).toLowerCase();  
      if (this.length==7) color = this.toLowerCase();  
    }  
  }  
  return (color.length==7 ? color : (arguments[0] || this));  
};

/*--------------------------------------------------------------------------*/

Element.collectTextNodes = function(element) {  
  return $A($(element).childNodes).collect( function(node) {
    return (node.nodeType==3 ? node.nodeValue : 
      (node.hasChildNodes() ? Element.collectTextNodes(node) : ''));
  }).flatten().join('');
};

Element.collectTextNodesIgnoreClass = function(element, className) {  
  return $A($(element).childNodes).collect( function(node) {
    return (node.nodeType==3 ? node.nodeValue : 
      ((node.hasChildNodes() && !Element.hasClassName(node,className)) ? 
        Element.collectTextNodesIgnoreClass(node, className) : ''));
  }).flatten().join('');
};

Element.setContentZoom = function(element, percent) {
  element = $(element);  
  element.setStyle({fontSize: (percent/100) + 'em'});   
  if (Prototype.Browser.WebKit) window.scrollBy(0,0);
  return element;
};

Element.getInlineOpacity = function(element){
  return $(element).style.opacity || '';
};

Element.forceRerendering = function(element) {
  try {
    element = $(element);
    var n = document.createTextNode(' ');
    element.appendChild(n);
    element.removeChild(n);
  } catch(e) { }
};

/*--------------------------------------------------------------------------*/

var Effect = {
  _elementDoesNotExistError: {
    name: 'ElementDoesNotExistError',
    message: 'The specified DOM element does not exist, but is required for this effect to operate'
  },
  Transitions: {
    linear: Prototype.K,
    sinoidal: function(pos) {
      return (-Math.cos(pos*Math.PI)/2) + 0.5;
    },
    reverse: function(pos) {
      return 1-pos;
    },
    flicker: function(pos) {
      var pos = ((-Math.cos(pos*Math.PI)/4) + 0.75) + Math.random()/4;
      return pos > 1 ? 1 : pos;
    },
    wobble: function(pos) {
      return (-Math.cos(pos*Math.PI*(9*pos))/2) + 0.5;
    },
    pulse: function(pos, pulses) { 
      pulses = pulses || 5; 
      return (
        ((pos % (1/pulses)) * pulses).round() == 0 ? 
              ((pos * pulses * 2) - (pos * pulses * 2).floor()) : 
          1 - ((pos * pulses * 2) - (pos * pulses * 2).floor())
        );
    },
    spring: function(pos) { 
      return 1 - (Math.cos(pos * 4.5 * Math.PI) * Math.exp(-pos * 6)); 
    },
    none: function(pos) {
      return 0;
    },
    full: function(pos) {
      return 1;
    }
  },
  DefaultOptions: {
    duration:   1.0,   // seconds
    fps:        100,   // 100= assume 66fps max.
    sync:       false, // true for combining
    from:       0.0,
    to:         1.0,
    delay:      0.0,
    queue:      'parallel'
  },
  tagifyText: function(element) {
    var tagifyStyle = 'position:relative';
    if (Prototype.Browser.IE) tagifyStyle += ';zoom:1';
    
    element = $(element);
    $A(element.childNodes).each( function(child) {
      if (child.nodeType==3) {
        child.nodeValue.toArray().each( function(character) {
          element.insertBefore(
            new Element('span', {style: tagifyStyle}).update(
              character == ' ' ? String.fromCharCode(160) : character), 
              child);
        });
        Element.remove(child);
      }
    });
  },
  multiple: function(element, effect) {
    var elements;
    if (((typeof element == 'object') || 
        Object.isFunction(element)) && 
       (element.length))
      elements = element;
    else
      elements = $(element).childNodes;
      
    var options = Object.extend({
      speed: 0.1,
      delay: 0.0
    }, arguments[2] || { });
    var masterDelay = options.delay;

    $A(elements).each( function(element, index) {
      new effect(element, Object.extend(options, { delay: index * options.speed + masterDelay }));
    });
  },
  PAIRS: {
    'slide':  ['SlideDown','SlideUp'],
    'blind':  ['BlindDown','BlindUp'],
    'appear': ['Appear','Fade']
  },
  toggle: function(element, effect) {
    element = $(element);
    effect = (effect || 'appear').toLowerCase();
    var options = Object.extend({
      queue: { position:'end', scope:(element.id || 'global'), limit: 1 }
    }, arguments[2] || { });
    Effect[element.visible() ? 
      Effect.PAIRS[effect][1] : Effect.PAIRS[effect][0]](element, options);
  }
};

Effect.DefaultOptions.transition = Effect.Transitions.sinoidal;

/* ------------- core effects ------------- */

Effect.ScopedQueue = Class.create(Enumerable, {
  initialize: function() {
    this.effects  = [];
    this.interval = null;    
  },
  _each: function(iterator) {
    this.effects._each(iterator);
  },
  add: function(effect) {
    var timestamp = new Date().getTime();
    
    var position = Object.isString(effect.options.queue) ? 
      effect.options.queue : effect.options.queue.position;
    
    switch(position) {
      case 'front':
        // move unstarted effects after this effect  
        this.effects.findAll(function(e){ return e.state=='idle' }).each( function(e) {
            e.startOn  += effect.finishOn;
            e.finishOn += effect.finishOn;
          });
        break;
      case 'with-last':
        timestamp = this.effects.pluck('startOn').max() || timestamp;
        break;
      case 'end':
        // start effect after last queued effect has finished
        timestamp = this.effects.pluck('finishOn').max() || timestamp;
        break;
    }
    
    effect.startOn  += timestamp;
    effect.finishOn += timestamp;

    if (!effect.options.queue.limit || (this.effects.length < effect.options.queue.limit))
      this.effects.push(effect);
    
    if (!this.interval)
      this.interval = setInterval(this.loop.bind(this), 15);
  },
  remove: function(effect) {
    this.effects = this.effects.reject(function(e) { return e==effect });
    if (this.effects.length == 0) {
      clearInterval(this.interval);
      this.interval = null;
    }
  },
  loop: function() {
    var timePos = new Date().getTime();
    for(var i=0, len=this.effects.length;i<len;i++) 
      this.effects[i] && this.effects[i].loop(timePos);
  }
});

Effect.Queues = {
  instances: $H(),
  get: function(queueName) {
    if (!Object.isString(queueName)) return queueName;
    
    return this.instances.get(queueName) ||
      this.instances.set(queueName, new Effect.ScopedQueue());
  }
};
Effect.Queue = Effect.Queues.get('global');

Effect.Base = Class.create({
  position: null,
  start: function(options) {
    function codeForEvent(options,eventName){
      return (
        (options[eventName+'Internal'] ? 'this.options.'+eventName+'Internal(this);' : '') +
        (options[eventName] ? 'this.options.'+eventName+'(this);' : '')
      );
    }
    if (options && options.transition === false) options.transition = Effect.Transitions.linear;
    this.options      = Object.extend(Object.extend({ },Effect.DefaultOptions), options || { });
    this.currentFrame = 0;
    this.state        = 'idle';
    this.startOn      = this.options.delay*1000;
    this.finishOn     = this.startOn+(this.options.duration*1000);
    this.fromToDelta  = this.options.to-this.options.from;
    this.totalTime    = this.finishOn-this.startOn;
    this.totalFrames  = this.options.fps*this.options.duration;
    
    eval('this.render = function(pos){ '+
      'if (this.state=="idle"){this.state="running";'+
      codeForEvent(this.options,'beforeSetup')+
      (this.setup ? 'this.setup();':'')+ 
      codeForEvent(this.options,'afterSetup')+
      '};if (this.state=="running"){'+
      'pos=this.options.transition(pos)*'+this.fromToDelta+'+'+this.options.from+';'+
      'this.position=pos;'+
      codeForEvent(this.options,'beforeUpdate')+
      (this.update ? 'this.update(pos);':'')+
      codeForEvent(this.options,'afterUpdate')+
      '}}');
    
    this.event('beforeStart');
    if (!this.options.sync)
      Effect.Queues.get(Object.isString(this.options.queue) ? 
        'global' : this.options.queue.scope).add(this);
  },
  loop: function(timePos) {
    if (timePos >= this.startOn) {
      if (timePos >= this.finishOn) {
        this.render(1.0);
        this.cancel();
        this.event('beforeFinish');
        if (this.finish) this.finish(); 
        this.event('afterFinish');
        return;  
      }
      var pos   = (timePos - this.startOn) / this.totalTime,
          frame = (pos * this.totalFrames).round();
      if (frame > this.currentFrame) {
        this.render(pos);
        this.currentFrame = frame;
      }
    }
  },
  cancel: function() {
    if (!this.options.sync)
      Effect.Queues.get(Object.isString(this.options.queue) ? 
        'global' : this.options.queue.scope).remove(this);
    this.state = 'finished';
  },
  event: function(eventName) {
    if (this.options[eventName + 'Internal']) this.options[eventName + 'Internal'](this);
    if (this.options[eventName]) this.options[eventName](this);
  },
  inspect: function() {
    var data = $H();
    for(property in this)
      if (!Object.isFunction(this[property])) data.set(property, this[property]);
    return '#<Effect:' + data.inspect() + ',options:' + $H(this.options).inspect() + '>';
  }
});

Effect.Parallel = Class.create(Effect.Base, {
  initialize: function(effects) {
    this.effects = effects || [];
    this.start(arguments[1]);
  },
  update: function(position) {
    this.effects.invoke('render', position);
  },
  finish: function(position) {
    this.effects.each( function(effect) {
      effect.render(1.0);
      effect.cancel();
      effect.event('beforeFinish');
      if (effect.finish) effect.finish(position);
      effect.event('afterFinish');
    });
  }
});

Effect.Tween = Class.create(Effect.Base, {
  initialize: function(object, from, to) {
    object = Object.isString(object) ? $(object) : object;
    var args = $A(arguments), method = args.last(), 
      options = args.length == 5 ? args[3] : null;
    this.method = Object.isFunction(method) ? method.bind(object) :
      Object.isFunction(object[method]) ? object[method].bind(object) : 
      function(value) { object[method] = value };
    this.start(Object.extend({ from: from, to: to }, options || { }));
  },
  update: function(position) {
    this.method(position);
  }
});

Effect.Event = Class.create(Effect.Base, {
  initialize: function() {
    this.start(Object.extend({ duration: 0 }, arguments[0] || { }));
  },
  update: Prototype.emptyFunction
});

Effect.Opacity = Class.create(Effect.Base, {
  initialize: function(element) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    // make this work on IE on elements without 'layout'
    if (Prototype.Browser.IE && (!this.element.currentStyle.hasLayout))
      this.element.setStyle({zoom: 1});
    var options = Object.extend({
      from: this.element.getOpacity() || 0.0,
      to:   1.0
    }, arguments[1] || { });
    this.start(options);
  },
  update: function(position) {
    this.element.setOpacity(position);
  }
});

Effect.Move = Class.create(Effect.Base, {
  initialize: function(element) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    var options = Object.extend({
      x:    0,
      y:    0,
      mode: 'relative'
    }, arguments[1] || { });
    this.start(options);
  },
  setup: function() {
    this.element.makePositioned();
    this.originalLeft = parseFloat(this.element.getStyle('left') || '0');
    this.originalTop  = parseFloat(this.element.getStyle('top')  || '0');
    if (this.options.mode == 'absolute') {
      this.options.x = this.options.x - this.originalLeft;
      this.options.y = this.options.y - this.originalTop;
    }
  },
  update: function(position) {
    this.element.setStyle({
      left: (this.options.x  * position + this.originalLeft).round() + 'px',
      top:  (this.options.y  * position + this.originalTop).round()  + 'px'
    });
  }
});

// for backwards compatibility
Effect.MoveBy = function(element, toTop, toLeft) {
  return new Effect.Move(element, 
    Object.extend({ x: toLeft, y: toTop }, arguments[3] || { }));
};

Effect.Scale = Class.create(Effect.Base, {
  initialize: function(element, percent) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    var options = Object.extend({
      scaleX: true,
      scaleY: true,
      scaleContent: true,
      scaleFromCenter: false,
      scaleMode: 'box',        // 'box' or 'contents' or { } with provided values
      scaleFrom: 100.0,
      scaleTo:   percent
    }, arguments[2] || { });
    this.start(options);
  },
  setup: function() {
    this.restoreAfterFinish = this.options.restoreAfterFinish || false;
    this.elementPositioning = this.element.getStyle('position');
    
    this.originalStyle = { };
    ['top','left','width','height','fontSize'].each( function(k) {
      this.originalStyle[k] = this.element.style[k];
    }.bind(this));
      
    this.originalTop  = this.element.offsetTop;
    this.originalLeft = this.element.offsetLeft;
    
    var fontSize = this.element.getStyle('font-size') || '100%';
    ['em','px','%','pt'].each( function(fontSizeType) {
      if (fontSize.indexOf(fontSizeType)>0) {
        this.fontSize     = parseFloat(fontSize);
        this.fontSizeType = fontSizeType;
      }
    }.bind(this));
    
    this.factor = (this.options.scaleTo - this.options.scaleFrom)/100;
    
    this.dims = null;
    if (this.options.scaleMode=='box')
      this.dims = [this.element.offsetHeight, this.element.offsetWidth];
    if (/^content/.test(this.options.scaleMode))
      this.dims = [this.element.scrollHeight, this.element.scrollWidth];
    if (!this.dims)
      this.dims = [this.options.scaleMode.originalHeight,
                   this.options.scaleMode.originalWidth];
  },
  update: function(position) {
    var currentScale = (this.options.scaleFrom/100.0) + (this.factor * position);
    if (this.options.scaleContent && this.fontSize)
      this.element.setStyle({fontSize: this.fontSize * currentScale + this.fontSizeType });
    this.setDimensions(this.dims[0] * currentScale, this.dims[1] * currentScale);
  },
  finish: function(position) {
    if (this.restoreAfterFinish) this.element.setStyle(this.originalStyle);
  },
  setDimensions: function(height, width) {
    var d = { };
    if (this.options.scaleX) d.width = width.round() + 'px';
    if (this.options.scaleY) d.height = height.round() + 'px';
    if (this.options.scaleFromCenter) {
      var topd  = (height - this.dims[0])/2;
      var leftd = (width  - this.dims[1])/2;
      if (this.elementPositioning == 'absolute') {
        if (this.options.scaleY) d.top = this.originalTop-topd + 'px';
        if (this.options.scaleX) d.left = this.originalLeft-leftd + 'px';
      } else {
        if (this.options.scaleY) d.top = -topd + 'px';
        if (this.options.scaleX) d.left = -leftd + 'px';
      }
    }
    this.element.setStyle(d);
  }
});

Effect.Highlight = Class.create(Effect.Base, {
  initialize: function(element) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    var options = Object.extend({ startcolor: '#ffff99' }, arguments[1] || { });
    this.start(options);
  },
  setup: function() {
    // Prevent executing on elements not in the layout flow
    if (this.element.getStyle('display')=='none') { this.cancel(); return; }
    // Disable background image during the effect
    this.oldStyle = { };
    if (!this.options.keepBackgroundImage) {
      this.oldStyle.backgroundImage = this.element.getStyle('background-image');
      this.element.setStyle({backgroundImage: 'none'});
    }
    if (!this.options.endcolor)
      this.options.endcolor = this.element.getStyle('background-color').parseColor('#ffffff');
    if (!this.options.restorecolor)
      this.options.restorecolor = this.element.getStyle('background-color');
    // init color calculations
    this._base  = $R(0,2).map(function(i){ return parseInt(this.options.startcolor.slice(i*2+1,i*2+3),16) }.bind(this));
    this._delta = $R(0,2).map(function(i){ return parseInt(this.options.endcolor.slice(i*2+1,i*2+3),16)-this._base[i] }.bind(this));
  },
  update: function(position) {
    this.element.setStyle({backgroundColor: $R(0,2).inject('#',function(m,v,i){
      return m+((this._base[i]+(this._delta[i]*position)).round().toColorPart()); }.bind(this)) });
  },
  finish: function() {
    this.element.setStyle(Object.extend(this.oldStyle, {
      backgroundColor: this.options.restorecolor
    }));
  }
});

Effect.ScrollTo = function(element) {
  var options = arguments[1] || { },
    scrollOffsets = document.viewport.getScrollOffsets(),
    elementOffsets = $(element).cumulativeOffset(),
    max = (window.height || document.body.scrollHeight) - document.viewport.getHeight();  

  if (options.offset) elementOffsets[1] += options.offset;

  return new Effect.Tween(null,
    scrollOffsets.top,
    elementOffsets[1] > max ? max : elementOffsets[1],
    options,
    function(p){ scrollTo(scrollOffsets.left, p.round()) }
  );
};

/* ------------- combination effects ------------- */

Effect.Fade = function(element) {
  element = $(element);
  var oldOpacity = element.getInlineOpacity();
  var options = Object.extend({
    from: element.getOpacity() || 1.0,
    to:   0.0,
    afterFinishInternal: function(effect) { 
      if (effect.options.to!=0) return;
      effect.element.hide().setStyle({opacity: oldOpacity}); 
    }
  }, arguments[1] || { });
  return new Effect.Opacity(element,options);
};

Effect.Appear = function(element) {
  element = $(element);
  var options = Object.extend({
  from: (element.getStyle('display') == 'none' ? 0.0 : element.getOpacity() || 0.0),
  to:   1.0,
  // force Safari to render floated elements properly
  afterFinishInternal: function(effect) {
    effect.element.forceRerendering();
  },
  beforeSetup: function(effect) {
    effect.element.setOpacity(effect.options.from).show(); 
  }}, arguments[1] || { });
  return new Effect.Opacity(element,options);
};

Effect.Puff = function(element) {
  element = $(element);
  var oldStyle = { 
    opacity: element.getInlineOpacity(), 
    position: element.getStyle('position'),
    top:  element.style.top,
    left: element.style.left,
    width: element.style.width,
    height: element.style.height
  };
  return new Effect.Parallel(
   [ new Effect.Scale(element, 200, 
      { sync: true, scaleFromCenter: true, scaleContent: true, restoreAfterFinish: true }), 
     new Effect.Opacity(element, { sync: true, to: 0.0 } ) ], 
     Object.extend({ duration: 1.0, 
      beforeSetupInternal: function(effect) {
        Position.absolutize(effect.effects[0].element)
      },
      afterFinishInternal: function(effect) {
         effect.effects[0].element.hide().setStyle(oldStyle); }
     }, arguments[1] || { })
   );
};

Effect.BlindUp = function(element) {
  element = $(element);
  element.makeClipping();
  return new Effect.Scale(element, 0,
    Object.extend({ scaleContent: false, 
      scaleX: false, 
      restoreAfterFinish: true,
      afterFinishInternal: function(effect) {
        effect.element.hide().undoClipping();
      } 
    }, arguments[1] || { })
  );
};

Effect.BlindDown = function(element) {
  element = $(element);
  var elementDimensions = element.getDimensions();
  return new Effect.Scale(element, 100, Object.extend({ 
    scaleContent: false, 
    scaleX: false,
    scaleFrom: 0,
    scaleMode: {originalHeight: elementDimensions.height, originalWidth: elementDimensions.width},
    restoreAfterFinish: true,
    afterSetup: function(effect) {
      effect.element.makeClipping().setStyle({height: '0px'}).show(); 
    },  
    afterFinishInternal: function(effect) {
      effect.element.undoClipping();
    }
  }, arguments[1] || { }));
};

Effect.SwitchOff = function(element) {
  element = $(element);
  var oldOpacity = element.getInlineOpacity();
  return new Effect.Appear(element, Object.extend({
    duration: 0.4,
    from: 0,
    transition: Effect.Transitions.flicker,
    afterFinishInternal: function(effect) {
      new Effect.Scale(effect.element, 1, { 
        duration: 0.3, scaleFromCenter: true,
        scaleX: false, scaleContent: false, restoreAfterFinish: true,
        beforeSetup: function(effect) { 
          effect.element.makePositioned().makeClipping();
        },
        afterFinishInternal: function(effect) {
          effect.element.hide().undoClipping().undoPositioned().setStyle({opacity: oldOpacity});
        }
      })
    }
  }, arguments[1] || { }));
};

Effect.DropOut = function(element) {
  element = $(element);
  var oldStyle = {
    top: element.getStyle('top'),
    left: element.getStyle('left'),
    opacity: element.getInlineOpacity() };
  return new Effect.Parallel(
    [ new Effect.Move(element, {x: 0, y: 100, sync: true }), 
      new Effect.Opacity(element, { sync: true, to: 0.0 }) ],
    Object.extend(
      { duration: 0.5,
        beforeSetup: function(effect) {
          effect.effects[0].element.makePositioned(); 
        },
        afterFinishInternal: function(effect) {
          effect.effects[0].element.hide().undoPositioned().setStyle(oldStyle);
        } 
      }, arguments[1] || { }));
};

Effect.Shake = function(element) {
  element = $(element);
  var options = Object.extend({
    distance: 20,
    duration: 0.5
  }, arguments[1] || {});
  var distance = parseFloat(options.distance);
  var split = parseFloat(options.duration) / 10.0;
  var oldStyle = {
    top: element.getStyle('top'),
    left: element.getStyle('left') };
    return new Effect.Move(element,
      { x:  distance, y: 0, duration: split, afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x: -distance*2, y: 0, duration: split*2,  afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x:  distance*2, y: 0, duration: split*2,  afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x: -distance*2, y: 0, duration: split*2,  afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x:  distance*2, y: 0, duration: split*2,  afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x: -distance, y: 0, duration: split, afterFinishInternal: function(effect) {
        effect.element.undoPositioned().setStyle(oldStyle);
  }}) }}) }}) }}) }}) }});
};

Effect.SlideDown = function(element) {
  element = $(element).cleanWhitespace();
  // SlideDown need to have the content of the element wrapped in a container element with fixed height!
  var oldInnerBottom = element.down().getStyle('bottom');
  var elementDimensions = element.getDimensions();
  return new Effect.Scale(element, 100, Object.extend({ 
    scaleContent: false, 
    scaleX: false, 
    scaleFrom: window.opera ? 0 : 1,
    scaleMode: {originalHeight: elementDimensions.height, originalWidth: elementDimensions.width},
    restoreAfterFinish: true,
    afterSetup: function(effect) {
      effect.element.makePositioned();
      effect.element.down().makePositioned();
      if (window.opera) effect.element.setStyle({top: ''});
      effect.element.makeClipping().setStyle({height: '0px'}).show(); 
    },
    afterUpdateInternal: function(effect) {
      effect.element.down().setStyle({bottom:
        (effect.dims[0] - effect.element.clientHeight) + 'px' }); 
    },
    afterFinishInternal: function(effect) {
      effect.element.undoClipping().undoPositioned();
      effect.element.down().undoPositioned().setStyle({bottom: oldInnerBottom}); }
    }, arguments[1] || { })
  );
};

Effect.SlideUp = function(element) {
  element = $(element).cleanWhitespace();
  var oldInnerBottom = element.down().getStyle('bottom');
  var elementDimensions = element.getDimensions();
  return new Effect.Scale(element, window.opera ? 0 : 1,
   Object.extend({ scaleContent: false, 
    scaleX: false, 
    scaleMode: 'box',
    scaleFrom: 100,
    scaleMode: {originalHeight: elementDimensions.height, originalWidth: elementDimensions.width},
    restoreAfterFinish: true,
    afterSetup: function(effect) {
      effect.element.makePositioned();
      effect.element.down().makePositioned();
      if (window.opera) effect.element.setStyle({top: ''});
      effect.element.makeClipping().show();
    },  
    afterUpdateInternal: function(effect) {
      effect.element.down().setStyle({bottom:
        (effect.dims[0] - effect.element.clientHeight) + 'px' });
    },
    afterFinishInternal: function(effect) {
      effect.element.hide().undoClipping().undoPositioned();
      effect.element.down().undoPositioned().setStyle({bottom: oldInnerBottom});
    }
   }, arguments[1] || { })
  );
};

// Bug in opera makes the TD containing this element expand for a instance after finish 
Effect.Squish = function(element) {
  return new Effect.Scale(element, window.opera ? 1 : 0, { 
    restoreAfterFinish: true,
    beforeSetup: function(effect) {
      effect.element.makeClipping(); 
    },  
    afterFinishInternal: function(effect) {
      effect.element.hide().undoClipping(); 
    }
  });
};

Effect.Grow = function(element) {
  element = $(element);
  var options = Object.extend({
    direction: 'center',
    moveTransition: Effect.Transitions.sinoidal,
    scaleTransition: Effect.Transitions.sinoidal,
    opacityTransition: Effect.Transitions.full
  }, arguments[1] || { });
  var oldStyle = {
    top: element.style.top,
    left: element.style.left,
    height: element.style.height,
    width: element.style.width,
    opacity: element.getInlineOpacity() };

  var dims = element.getDimensions();    
  var initialMoveX, initialMoveY;
  var moveX, moveY;
  
  switch (options.direction) {
    case 'top-left':
      initialMoveX = initialMoveY = moveX = moveY = 0; 
      break;
    case 'top-right':
      initialMoveX = dims.width;
      initialMoveY = moveY = 0;
      moveX = -dims.width;
      break;
    case 'bottom-left':
      initialMoveX = moveX = 0;
      initialMoveY = dims.height;
      moveY = -dims.height;
      break;
    case 'bottom-right':
      initialMoveX = dims.width;
      initialMoveY = dims.height;
      moveX = -dims.width;
      moveY = -dims.height;
      break;
    case 'center':
      initialMoveX = dims.width / 2;
      initialMoveY = dims.height / 2;
      moveX = -dims.width / 2;
      moveY = -dims.height / 2;
      break;
  }
  
  return new Effect.Move(element, {
    x: initialMoveX,
    y: initialMoveY,
    duration: 0.01, 
    beforeSetup: function(effect) {
      effect.element.hide().makeClipping().makePositioned();
    },
    afterFinishInternal: function(effect) {
      new Effect.Parallel(
        [ new Effect.Opacity(effect.element, { sync: true, to: 1.0, from: 0.0, transition: options.opacityTransition }),
          new Effect.Move(effect.element, { x: moveX, y: moveY, sync: true, transition: options.moveTransition }),
          new Effect.Scale(effect.element, 100, {
            scaleMode: { originalHeight: dims.height, originalWidth: dims.width }, 
            sync: true, scaleFrom: window.opera ? 1 : 0, transition: options.scaleTransition, restoreAfterFinish: true})
        ], Object.extend({
             beforeSetup: function(effect) {
               effect.effects[0].element.setStyle({height: '0px'}).show(); 
             },
             afterFinishInternal: function(effect) {
               effect.effects[0].element.undoClipping().undoPositioned().setStyle(oldStyle); 
             }
           }, options)
      )
    }
  });
};

Effect.Shrink = function(element) {
  element = $(element);
  var options = Object.extend({
    direction: 'center',
    moveTransition: Effect.Transitions.sinoidal,
    scaleTransition: Effect.Transitions.sinoidal,
    opacityTransition: Effect.Transitions.none
  }, arguments[1] || { });
  var oldStyle = {
    top: element.style.top,
    left: element.style.left,
    height: element.style.height,
    width: element.style.width,
    opacity: element.getInlineOpacity() };

  var dims = element.getDimensions();
  var moveX, moveY;
  
  switch (options.direction) {
    case 'top-left':
      moveX = moveY = 0;
      break;
    case 'top-right':
      moveX = dims.width;
      moveY = 0;
      break;
    case 'bottom-left':
      moveX = 0;
      moveY = dims.height;
      break;
    case 'bottom-right':
      moveX = dims.width;
      moveY = dims.height;
      break;
    case 'center':  
      moveX = dims.width / 2;
      moveY = dims.height / 2;
      break;
  }
  
  return new Effect.Parallel(
    [ new Effect.Opacity(element, { sync: true, to: 0.0, from: 1.0, transition: options.opacityTransition }),
      new Effect.Scale(element, window.opera ? 1 : 0, { sync: true, transition: options.scaleTransition, restoreAfterFinish: true}),
      new Effect.Move(element, { x: moveX, y: moveY, sync: true, transition: options.moveTransition })
    ], Object.extend({            
         beforeStartInternal: function(effect) {
           effect.effects[0].element.makePositioned().makeClipping(); 
         },
         afterFinishInternal: function(effect) {
           effect.effects[0].element.hide().undoClipping().undoPositioned().setStyle(oldStyle); }
       }, options)
  );
};

Effect.Pulsate = function(element) {
  element = $(element);
  var options    = arguments[1] || { };
  var oldOpacity = element.getInlineOpacity();
  var transition = options.transition || Effect.Transitions.sinoidal;
  var reverser   = function(pos){ return transition(1-Effect.Transitions.pulse(pos, options.pulses)) };
  reverser.bind(transition);
  return new Effect.Opacity(element, 
    Object.extend(Object.extend({  duration: 2.0, from: 0,
      afterFinishInternal: function(effect) { effect.element.setStyle({opacity: oldOpacity}); }
    }, options), {transition: reverser}));
};

Effect.Fold = function(element) {
  element = $(element);
  var oldStyle = {
    top: element.style.top,
    left: element.style.left,
    width: element.style.width,
    height: element.style.height };
  element.makeClipping();
  return new Effect.Scale(element, 5, Object.extend({   
    scaleContent: false,
    scaleX: false,
    afterFinishInternal: function(effect) {
    new Effect.Scale(element, 1, { 
      scaleContent: false, 
      scaleY: false,
      afterFinishInternal: function(effect) {
        effect.element.hide().undoClipping().setStyle(oldStyle);
      } });
  }}, arguments[1] || { }));
};

Effect.Morph = Class.create(Effect.Base, {
  initialize: function(element) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    var options = Object.extend({
      style: { }
    }, arguments[1] || { });
    
    if (!Object.isString(options.style)) this.style = $H(options.style);
    else {
      if (options.style.include(':'))
        this.style = options.style.parseStyle();
      else {
        this.element.addClassName(options.style);
        this.style = $H(this.element.getStyles());
        this.element.removeClassName(options.style);
        var css = this.element.getStyles();
        this.style = this.style.reject(function(style) {
          return style.value == css[style.key];
        });
        options.afterFinishInternal = function(effect) {
          effect.element.addClassName(effect.options.style);
          effect.transforms.each(function(transform) {
            effect.element.style[transform.style] = '';
          });
        }
      }
    }
    this.start(options);
  },
  
  setup: function(){
    function parseColor(color){
      if (!color || ['rgba(0, 0, 0, 0)','transparent'].include(color)) color = '#ffffff';
      color = color.parseColor();
      return $R(0,2).map(function(i){
        return parseInt( color.slice(i*2+1,i*2+3), 16 ) 
      });
    }
    this.transforms = this.style.map(function(pair){
      var property = pair[0], value = pair[1], unit = null;

      if (value.parseColor('#zzzzzz') != '#zzzzzz') {
        value = value.parseColor();
        unit  = 'color';
      } else if (property == 'opacity') {
        value = parseFloat(value);
        if (Prototype.Browser.IE && (!this.element.currentStyle.hasLayout))
          this.element.setStyle({zoom: 1});
      } else if (Element.CSS_LENGTH.test(value)) {
          var components = value.match(/^([\+\-]?[0-9\.]+)(.*)$/);
          value = parseFloat(components[1]);
          unit = (components.length == 3) ? components[2] : null;
      }

      var originalValue = this.element.getStyle(property);
      return { 
        style: property.camelize(), 
        originalValue: unit=='color' ? parseColor(originalValue) : parseFloat(originalValue || 0), 
        targetValue: unit=='color' ? parseColor(value) : value,
        unit: unit
      };
    }.bind(this)).reject(function(transform){
      return (
        (transform.originalValue == transform.targetValue) ||
        (
          transform.unit != 'color' &&
          (isNaN(transform.originalValue) || isNaN(transform.targetValue))
        )
      )
    });
  },
  update: function(position) {
    var style = { }, transform, i = this.transforms.length;
    while(i--)
      style[(transform = this.transforms[i]).style] = 
        transform.unit=='color' ? '#'+
          (Math.round(transform.originalValue[0]+
            (transform.targetValue[0]-transform.originalValue[0])*position)).toColorPart() +
          (Math.round(transform.originalValue[1]+
            (transform.targetValue[1]-transform.originalValue[1])*position)).toColorPart() +
          (Math.round(transform.originalValue[2]+
            (transform.targetValue[2]-transform.originalValue[2])*position)).toColorPart() :
        (transform.originalValue +
          (transform.targetValue - transform.originalValue) * position).toFixed(3) + 
            (transform.unit === null ? '' : transform.unit);
    this.element.setStyle(style, true);
  }
});

Effect.Transform = Class.create({
  initialize: function(tracks){
    this.tracks  = [];
    this.options = arguments[1] || { };
    this.addTracks(tracks);
  },
  addTracks: function(tracks){
    tracks.each(function(track){
      track = $H(track);
      var data = track.values().first();
      this.tracks.push($H({
        ids:     track.keys().first(),
        effect:  Effect.Morph,
        options: { style: data }
      }));
    }.bind(this));
    return this;
  },
  play: function(){
    return new Effect.Parallel(
      this.tracks.map(function(track){
        var ids = track.get('ids'), effect = track.get('effect'), options = track.get('options');
        var elements = [$(ids) || $$(ids)].flatten();
        return elements.map(function(e){ return new effect(e, Object.extend({ sync:true }, options)) });
      }).flatten(),
      this.options
    );
  }
});

Element.CSS_PROPERTIES = $w(
  'backgroundColor backgroundPosition borderBottomColor borderBottomStyle ' + 
  'borderBottomWidth borderLeftColor borderLeftStyle borderLeftWidth ' +
  'borderRightColor borderRightStyle borderRightWidth borderSpacing ' +
  'borderTopColor borderTopStyle borderTopWidth bottom clip color ' +
  'fontSize fontWeight height left letterSpacing lineHeight ' +
  'marginBottom marginLeft marginRight marginTop markerOffset maxHeight '+
  'maxWidth minHeight minWidth opacity outlineColor outlineOffset ' +
  'outlineWidth paddingBottom paddingLeft paddingRight paddingTop ' +
  'right textIndent top width wordSpacing zIndex');
  
Element.CSS_LENGTH = /^(([\+\-]?[0-9\.]+)(em|ex|px|in|cm|mm|pt|pc|\%))|0$/;

String.__parseStyleElement = document.createElement('div');
String.prototype.parseStyle = function(){
  var style, styleRules = $H();
  if (Prototype.Browser.WebKit)
    style = new Element('div',{style:this}).style;
  else {
    String.__parseStyleElement.innerHTML = '<div style="' + this + '"></div>';
    style = String.__parseStyleElement.childNodes[0].style;
  }
  
  Element.CSS_PROPERTIES.each(function(property){
    if (style[property]) styleRules.set(property, style[property]); 
  });
  
  if (Prototype.Browser.IE && this.include('opacity'))
    styleRules.set('opacity', this.match(/opacity:\s*((?:0|1)?(?:\.\d*)?)/)[1]);

  return styleRules;
};

if (document.defaultView && document.defaultView.getComputedStyle) {
  Element.getStyles = function(element) {
    var css = document.defaultView.getComputedStyle($(element), null);
    return Element.CSS_PROPERTIES.inject({ }, function(styles, property) {
      styles[property] = css[property];
      return styles;
    });
  };
} else {
  Element.getStyles = function(element) {
    element = $(element);
    var css = element.currentStyle, styles;
    styles = Element.CSS_PROPERTIES.inject({ }, function(hash, property) {
      hash.set(property, css[property]);
      return hash;
    });
    if (!styles.opacity) styles.set('opacity', element.getOpacity());
    return styles;
  };
};

Effect.Methods = {
  morph: function(element, style) {
    element = $(element);
    new Effect.Morph(element, Object.extend({ style: style }, arguments[2] || { }));
    return element;
  },
  visualEffect: function(element, effect, options) {
    element = $(element)
    var s = effect.dasherize().camelize(), klass = s.charAt(0).toUpperCase() + s.substring(1);
    new Effect[klass](element, options);
    return element;
  },
  highlight: function(element, options) {
    element = $(element);
    new Effect.Highlight(element, options);
    return element;
  }
};

$w('fade appear grow shrink fold blindUp blindDown slideUp slideDown '+
  'pulsate shake puff squish switchOff dropOut').each(
  function(effect) { 
    Effect.Methods[effect] = function(element, options){
      element = $(element);
      Effect[effect.charAt(0).toUpperCase() + effect.substring(1)](element, options);
      return element;
    }
  }
);

$w('getInlineOpacity forceRerendering setContentZoom collectTextNodes collectTextNodesIgnoreClass getStyles').each( 
  function(f) { Effect.Methods[f] = Element[f]; }
);

Element.addMethods(Effect.Methods);


// Copyright (c) 2005-2008 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
//           (c) 2005-2007 Sammi Williams (http://www.oriontransfer.co.nz, sammi@oriontransfer.co.nz)
// 
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

if(Object.isUndefined(Effect))
  throw("dragdrop.js requires including script.aculo.us' effects.js library");

var Droppables = {
  drops: [],

  remove: function(element) {
    this.drops = this.drops.reject(function(d) { return d.element==$(element) });
  },

  add: function(element) {
    element = $(element);
    var options = Object.extend({
      greedy:     true,
      hoverclass: null,
      tree:       false
    }, arguments[1] || { });

    // cache containers
    if(options.containment) {
      options._containers = [];
      var containment = options.containment;
      if(Object.isArray(containment)) {
        containment.each( function(c) { options._containers.push($(c)) });
      } else {
        options._containers.push($(containment));
      }
    }
    
    if(options.accept) options.accept = [options.accept].flatten();

    Element.makePositioned(element); // fix IE
    options.element = element;

    this.drops.push(options);
  },
  
  findDeepestChild: function(drops) {
    deepest = drops[0];
      
    for (i = 1; i < drops.length; ++i)
      if (Element.isParent(drops[i].element, deepest.element))
        deepest = drops[i];
    
    return deepest;
  },

  isContained: function(element, drop) {
    var containmentNode;
    if(drop.tree) {
      containmentNode = element.treeNode; 
    } else {
      containmentNode = element.parentNode;
    }
    return drop._containers.detect(function(c) { return containmentNode == c });
  },
  
  isAffected: function(point, element, drop) {
    return (
      (drop.element!=element) &&
      ((!drop._containers) ||
        this.isContained(element, drop)) &&
      ((!drop.accept) ||
        (Element.classNames(element).detect( 
          function(v) { return drop.accept.include(v) } ) )) &&
      Position.within(drop.element, point[0], point[1]) );
  },

  deactivate: function(drop) {
    if(drop.hoverclass)
      Element.removeClassName(drop.element, drop.hoverclass);
    this.last_active = null;
  },

  activate: function(drop) {
    if(drop.hoverclass)
      Element.addClassName(drop.element, drop.hoverclass);
    this.last_active = drop;
  },

  show: function(point, element) {
    if(!this.drops.length) return;
    var drop, affected = [];
    
    this.drops.each( function(drop) {
      if(Droppables.isAffected(point, element, drop))
        affected.push(drop);
    });
        
    if(affected.length>0)
      drop = Droppables.findDeepestChild(affected);

    if(this.last_active && this.last_active != drop) this.deactivate(this.last_active);
    if (drop) {
      Position.within(drop.element, point[0], point[1]);
      if(drop.onHover)
        drop.onHover(element, drop.element, Position.overlap(drop.overlap, drop.element));
      
      if (drop != this.last_active) Droppables.activate(drop);
    }
  },

  fire: function(event, element) {
    if(!this.last_active) return;
    Position.prepare();

    if (this.isAffected([Event.pointerX(event), Event.pointerY(event)], element, this.last_active))
      if (this.last_active.onDrop) {
        this.last_active.onDrop(element, this.last_active.element, event); 
        return true; 
      }
  },

  reset: function() {
    if(this.last_active)
      this.deactivate(this.last_active);
  }
}

var Draggables = {
  drags: [],
  observers: [],
  
  register: function(draggable) {
    if(this.drags.length == 0) {
      this.eventMouseUp   = this.endDrag.bindAsEventListener(this);
      this.eventMouseMove = this.updateDrag.bindAsEventListener(this);
      this.eventKeypress  = this.keyPress.bindAsEventListener(this);
      
      Event.observe(document, "mouseup", this.eventMouseUp);
      Event.observe(document, "mousemove", this.eventMouseMove);
      Event.observe(document, "keypress", this.eventKeypress);
    }
    this.drags.push(draggable);
  },
  
  unregister: function(draggable) {
    this.drags = this.drags.reject(function(d) { return d==draggable });
    if(this.drags.length == 0) {
      Event.stopObserving(document, "mouseup", this.eventMouseUp);
      Event.stopObserving(document, "mousemove", this.eventMouseMove);
      Event.stopObserving(document, "keypress", this.eventKeypress);
    }
  },
  
  activate: function(draggable) {
    if(draggable.options.delay) { 
      this._timeout = setTimeout(function() { 
        Draggables._timeout = null; 
        window.focus(); 
        Draggables.activeDraggable = draggable; 
      }.bind(this), draggable.options.delay); 
    } else {
      window.focus(); // allows keypress events if window isn't currently focused, fails for Safari
      this.activeDraggable = draggable;
    }
  },
  
  deactivate: function() {
    this.activeDraggable = null;
  },
  
  updateDrag: function(event) {
    if(!this.activeDraggable) return;
    var pointer = [Event.pointerX(event), Event.pointerY(event)];
    // Mozilla-based browsers fire successive mousemove events with
    // the same coordinates, prevent needless redrawing (moz bug?)
    if(this._lastPointer && (this._lastPointer.inspect() == pointer.inspect())) return;
    this._lastPointer = pointer;
    
    this.activeDraggable.updateDrag(event, pointer);
  },
  
  endDrag: function(event) {
    if(this._timeout) { 
      clearTimeout(this._timeout); 
      this._timeout = null; 
    }
    if(!this.activeDraggable) return;
    this._lastPointer = null;
    this.activeDraggable.endDrag(event);
    this.activeDraggable = null;
  },
  
  keyPress: function(event) {
    if(this.activeDraggable)
      this.activeDraggable.keyPress(event);
  },
  
  addObserver: function(observer) {
    this.observers.push(observer);
    this._cacheObserverCallbacks();
  },
  
  removeObserver: function(element) {  // element instead of observer fixes mem leaks
    this.observers = this.observers.reject( function(o) { return o.element==element });
    this._cacheObserverCallbacks();
  },
  
  notify: function(eventName, draggable, event) {  // 'onStart', 'onEnd', 'onDrag'
    if(this[eventName+'Count'] > 0)
      this.observers.each( function(o) {
        if(o[eventName]) o[eventName](eventName, draggable, event);
      });
    if(draggable.options[eventName]) draggable.options[eventName](draggable, event);
  },
  
  _cacheObserverCallbacks: function() {
    ['onStart','onEnd','onDrag'].each( function(eventName) {
      Draggables[eventName+'Count'] = Draggables.observers.select(
        function(o) { return o[eventName]; }
      ).length;
    });
  }
}

/*--------------------------------------------------------------------------*/

var Draggable = Class.create({
  initialize: function(element) {
    var defaults = {
      handle: false,
      reverteffect: function(element, top_offset, left_offset) {
        var dur = Math.sqrt(Math.abs(top_offset^2)+Math.abs(left_offset^2))*0.02;
        new Effect.Move(element, { x: -left_offset, y: -top_offset, duration: dur,
          queue: {scope:'_draggable', position:'end'}
        });
      },
      endeffect: function(element) {
        var toOpacity = Object.isNumber(element._opacity) ? element._opacity : 1.0;
        new Effect.Opacity(element, {duration:0.2, from:0.7, to:toOpacity, 
          queue: {scope:'_draggable', position:'end'},
          afterFinish: function(){ 
            Draggable._dragging[element] = false 
          }
        }); 
      },
      zindex: 1000,
      revert: false,
      quiet: false,
      scroll: false,
      scrollSensitivity: 20,
      scrollSpeed: 15,
      snap: false,  // false, or xy or [x,y] or function(x,y){ return [x,y] }
      delay: 0
    };
    
    if(!arguments[1] || Object.isUndefined(arguments[1].endeffect))
      Object.extend(defaults, {
        starteffect: function(element) {
          element._opacity = Element.getOpacity(element);
          Draggable._dragging[element] = true;
          new Effect.Opacity(element, {duration:0.2, from:element._opacity, to:0.7}); 
        }
      });
    
    var options = Object.extend(defaults, arguments[1] || { });

    this.element = $(element);
    
    if(options.handle && Object.isString(options.handle))
      this.handle = this.element.down('.'+options.handle, 0);
    
    if(!this.handle) this.handle = $(options.handle);
    if(!this.handle) this.handle = this.element;
    
    if(options.scroll && !options.scroll.scrollTo && !options.scroll.outerHTML) {
      options.scroll = $(options.scroll);
      this._isScrollChild = Element.childOf(this.element, options.scroll);
    }

    Element.makePositioned(this.element); // fix IE    

    this.options  = options;
    this.dragging = false;   

    this.eventMouseDown = this.initDrag.bindAsEventListener(this);
    Event.observe(this.handle, "mousedown", this.eventMouseDown);
    
    Draggables.register(this);
  },
  
  destroy: function() {
    Event.stopObserving(this.handle, "mousedown", this.eventMouseDown);
    Draggables.unregister(this);
  },
  
  currentDelta: function() {
    return([
      parseInt(Element.getStyle(this.element,'left') || '0'),
      parseInt(Element.getStyle(this.element,'top') || '0')]);
  },
  
  initDrag: function(event) {
    if(!Object.isUndefined(Draggable._dragging[this.element]) &&
      Draggable._dragging[this.element]) return;
    if(Event.isLeftClick(event)) {    
      // abort on form elements, fixes a Firefox issue
      var src = Event.element(event);
      if((tag_name = src.tagName.toUpperCase()) && (
        tag_name=='INPUT' ||
        tag_name=='SELECT' ||
        tag_name=='OPTION' ||
        tag_name=='BUTTON' ||
        tag_name=='TEXTAREA')) return;
        
      var pointer = [Event.pointerX(event), Event.pointerY(event)];
      var pos     = Position.cumulativeOffset(this.element);
      this.offset = [0,1].map( function(i) { return (pointer[i] - pos[i]) });
      
      Draggables.activate(this);
      Event.stop(event);
    }
  },
  
  startDrag: function(event) {
    this.dragging = true;
    if(!this.delta)
      this.delta = this.currentDelta();
    
    if(this.options.zindex) {
      this.originalZ = parseInt(Element.getStyle(this.element,'z-index') || 0);
      this.element.style.zIndex = this.options.zindex;
    }
    
    if(this.options.ghosting) {
      this._clone = this.element.cloneNode(true);
      this.element._originallyAbsolute = (this.element.getStyle('position') == 'absolute');
      if (!this.element._originallyAbsolute)
        Position.absolutize(this.element);
      this.element.parentNode.insertBefore(this._clone, this.element);
    }
    
    if(this.options.scroll) {
      if (this.options.scroll == window) {
        var where = this._getWindowScroll(this.options.scroll);
        this.originalScrollLeft = where.left;
        this.originalScrollTop = where.top;
      } else {
        this.originalScrollLeft = this.options.scroll.scrollLeft;
        this.originalScrollTop = this.options.scroll.scrollTop;
      }
    }
    
    Draggables.notify('onStart', this, event);
        
    if(this.options.starteffect) this.options.starteffect(this.element);
  },
  
  updateDrag: function(event, pointer) {
    if(!this.dragging) this.startDrag(event);
    
    if(!this.options.quiet){
      Position.prepare();
      Droppables.show(pointer, this.element);
    }
    
    Draggables.notify('onDrag', this, event);
    
    this.draw(pointer);
    if(this.options.change) this.options.change(this);
    
    if(this.options.scroll) {
      this.stopScrolling();
      
      var p;
      if (this.options.scroll == window) {
        with(this._getWindowScroll(this.options.scroll)) { p = [ left, top, left+width, top+height ]; }
      } else {
        p = Position.page(this.options.scroll);
        p[0] += this.options.scroll.scrollLeft + Position.deltaX;
        p[1] += this.options.scroll.scrollTop + Position.deltaY;
        p.push(p[0]+this.options.scroll.offsetWidth);
        p.push(p[1]+this.options.scroll.offsetHeight);
      }
      var speed = [0,0];
      if(pointer[0] < (p[0]+this.options.scrollSensitivity)) speed[0] = pointer[0]-(p[0]+this.options.scrollSensitivity);
      if(pointer[1] < (p[1]+this.options.scrollSensitivity)) speed[1] = pointer[1]-(p[1]+this.options.scrollSensitivity);
      if(pointer[0] > (p[2]-this.options.scrollSensitivity)) speed[0] = pointer[0]-(p[2]-this.options.scrollSensitivity);
      if(pointer[1] > (p[3]-this.options.scrollSensitivity)) speed[1] = pointer[1]-(p[3]-this.options.scrollSensitivity);
      this.startScrolling(speed);
    }
    
    // fix AppleWebKit rendering
    if(Prototype.Browser.WebKit) window.scrollBy(0,0);
    
    Event.stop(event);
  },
  
  finishDrag: function(event, success) {
    this.dragging = false;
    
    if(this.options.quiet){
      Position.prepare();
      var pointer = [Event.pointerX(event), Event.pointerY(event)];
      Droppables.show(pointer, this.element);
    }

    if(this.options.ghosting) {
      if (!this.element._originallyAbsolute)
        Position.relativize(this.element);
      delete this.element._originallyAbsolute;
      Element.remove(this._clone);
      this._clone = null;
    }

    var dropped = false; 
    if(success) { 
      dropped = Droppables.fire(event, this.element); 
      if (!dropped) dropped = false; 
    }
    if(dropped && this.options.onDropped) this.options.onDropped(this.element);
    Draggables.notify('onEnd', this, event);

    var revert = this.options.revert;
    if(revert && Object.isFunction(revert)) revert = revert(this.element);
    
    var d = this.currentDelta();
    if(revert && this.options.reverteffect) {
      if (dropped == 0 || revert != 'failure')
        this.options.reverteffect(this.element,
          d[1]-this.delta[1], d[0]-this.delta[0]);
    } else {
      this.delta = d;
    }

    if(this.options.zindex)
      this.element.style.zIndex = this.originalZ;

    if(this.options.endeffect) 
      this.options.endeffect(this.element);
      
    Draggables.deactivate(this);
    Droppables.reset();
  },
  
  keyPress: function(event) {
    if(event.keyCode!=Event.KEY_ESC) return;
    this.finishDrag(event, false);
    Event.stop(event);
  },
  
  endDrag: function(event) {
    if(!this.dragging) return;
    this.stopScrolling();
    this.finishDrag(event, true);
    Event.stop(event);
  },
  
  draw: function(point) {
    var pos = Position.cumulativeOffset(this.element);
    if(this.options.ghosting) {
      var r   = Position.realOffset(this.element);
      pos[0] += r[0] - Position.deltaX; pos[1] += r[1] - Position.deltaY;
    }
    
    var d = this.currentDelta();
    pos[0] -= d[0]; pos[1] -= d[1];
    
    if(this.options.scroll && (this.options.scroll != window && this._isScrollChild)) {
      pos[0] -= this.options.scroll.scrollLeft-this.originalScrollLeft;
      pos[1] -= this.options.scroll.scrollTop-this.originalScrollTop;
    }
    
    var p = [0,1].map(function(i){ 
      return (point[i]-pos[i]-this.offset[i]) 
    }.bind(this));
    
    if(this.options.snap) {
      if(Object.isFunction(this.options.snap)) {
        p = this.options.snap(p[0],p[1],this);
      } else {
      if(Object.isArray(this.options.snap)) {
        p = p.map( function(v, i) {
          return (v/this.options.snap[i]).round()*this.options.snap[i] }.bind(this))
      } else {
        p = p.map( function(v) {
          return (v/this.options.snap).round()*this.options.snap }.bind(this))
      }
    }}
    
    var style = this.element.style;
    if((!this.options.constraint) || (this.options.constraint=='horizontal'))
      style.left = p[0] + "px";
    if((!this.options.constraint) || (this.options.constraint=='vertical'))
      style.top  = p[1] + "px";
    
    if(style.visibility=="hidden") style.visibility = ""; // fix gecko rendering
  },
  
  stopScrolling: function() {
    if(this.scrollInterval) {
      clearInterval(this.scrollInterval);
      this.scrollInterval = null;
      Draggables._lastScrollPointer = null;
    }
  },
  
  startScrolling: function(speed) {
    if(!(speed[0] || speed[1])) return;
    this.scrollSpeed = [speed[0]*this.options.scrollSpeed,speed[1]*this.options.scrollSpeed];
    this.lastScrolled = new Date();
    this.scrollInterval = setInterval(this.scroll.bind(this), 10);
  },
  
  scroll: function() {
    var current = new Date();
    var delta = current - this.lastScrolled;
    this.lastScrolled = current;
    if(this.options.scroll == window) {
      with (this._getWindowScroll(this.options.scroll)) {
        if (this.scrollSpeed[0] || this.scrollSpeed[1]) {
          var d = delta / 1000;
          this.options.scroll.scrollTo( left + d*this.scrollSpeed[0], top + d*this.scrollSpeed[1] );
        }
      }
    } else {
      this.options.scroll.scrollLeft += this.scrollSpeed[0] * delta / 1000;
      this.options.scroll.scrollTop  += this.scrollSpeed[1] * delta / 1000;
    }
    
    Position.prepare();
    Droppables.show(Draggables._lastPointer, this.element);
    Draggables.notify('onDrag', this);
    if (this._isScrollChild) {
      Draggables._lastScrollPointer = Draggables._lastScrollPointer || $A(Draggables._lastPointer);
      Draggables._lastScrollPointer[0] += this.scrollSpeed[0] * delta / 1000;
      Draggables._lastScrollPointer[1] += this.scrollSpeed[1] * delta / 1000;
      if (Draggables._lastScrollPointer[0] < 0)
        Draggables._lastScrollPointer[0] = 0;
      if (Draggables._lastScrollPointer[1] < 0)
        Draggables._lastScrollPointer[1] = 0;
      this.draw(Draggables._lastScrollPointer);
    }
    
    if(this.options.change) this.options.change(this);
  },
  
  _getWindowScroll: function(w) {
    var T, L, W, H;
    with (w.document) {
      if (w.document.documentElement && documentElement.scrollTop) {
        T = documentElement.scrollTop;
        L = documentElement.scrollLeft;
      } else if (w.document.body) {
        T = body.scrollTop;
        L = body.scrollLeft;
      }
      if (w.innerWidth) {
        W = w.innerWidth;
        H = w.innerHeight;
      } else if (w.document.documentElement && documentElement.clientWidth) {
        W = documentElement.clientWidth;
        H = documentElement.clientHeight;
      } else {
        W = body.offsetWidth;
        H = body.offsetHeight
      }
    }
    return { top: T, left: L, width: W, height: H };
  }
});

Draggable._dragging = { };

/*--------------------------------------------------------------------------*/

var SortableObserver = Class.create({
  initialize: function(element, observer) {
    this.element   = $(element);
    this.observer  = observer;
    this.lastValue = Sortable.serialize(this.element);
  },
  
  onStart: function() {
    this.lastValue = Sortable.serialize(this.element);
  },
  
  onEnd: function() {
    Sortable.unmark();
    if(this.lastValue != Sortable.serialize(this.element))
      this.observer(this.element)
  }
});

var Sortable = {
  SERIALIZE_RULE: /^[^_\-](?:[A-Za-z0-9\-\_]*)[_](.*)$/,
  
  sortables: { },
  
  _findRootElement: function(element) {
    while (element.tagName.toUpperCase() != "BODY") {  
      if(element.id && Sortable.sortables[element.id]) return element;
      element = element.parentNode;
    }
  },

  options: function(element) {
    element = Sortable._findRootElement($(element));
    if(!element) return;
    return Sortable.sortables[element.id];
  },
  
  destroy: function(element){
    var s = Sortable.options(element);
    
    if(s) {
      Draggables.removeObserver(s.element);
      s.droppables.each(function(d){ Droppables.remove(d) });
      s.draggables.invoke('destroy');
      
      delete Sortable.sortables[s.element.id];
    }
  },

  create: function(element) {
    element = $(element);
    var options = Object.extend({ 
      element:     element,
      tag:         'li',       // assumes li children, override with tag: 'tagname'
      dropOnEmpty: false,
      tree:        false,
      treeTag:     'ul',
      overlap:     'vertical', // one of 'vertical', 'horizontal'
      constraint:  'vertical', // one of 'vertical', 'horizontal', false
      containment: element,    // also takes array of elements (or id's); or false
      handle:      false,      // or a CSS class
      only:        false,
      delay:       0,
      hoverclass:  null,
      ghosting:    false,
      quiet:       false, 
      scroll:      false,
      scrollSensitivity: 20,
      scrollSpeed: 15,
      format:      this.SERIALIZE_RULE,
      
      // these take arrays of elements or ids and can be 
      // used for better initialization performance
      elements:    false,
      handles:     false,
      
      onChange:    Prototype.emptyFunction,
      onUpdate:    Prototype.emptyFunction
    }, arguments[1] || { });

    // clear any old sortable with same element
    this.destroy(element);

    // build options for the draggables
    var options_for_draggable = {
      revert:      true,
      quiet:       options.quiet,
      scroll:      options.scroll,
      scrollSpeed: options.scrollSpeed,
      scrollSensitivity: options.scrollSensitivity,
      delay:       options.delay,
      ghosting:    options.ghosting,
      constraint:  options.constraint,
      handle:      options.handle };

    if(options.starteffect)
      options_for_draggable.starteffect = options.starteffect;

    if(options.reverteffect)
      options_for_draggable.reverteffect = options.reverteffect;
    else
      if(options.ghosting) options_for_draggable.reverteffect = function(element) {
        element.style.top  = 0;
        element.style.left = 0;
      };

    if(options.endeffect)
      options_for_draggable.endeffect = options.endeffect;

    if(options.zindex)
      options_for_draggable.zindex = options.zindex;

    // build options for the droppables  
    var options_for_droppable = {
      overlap:     options.overlap,
      containment: options.containment,
      tree:        options.tree,
      hoverclass:  options.hoverclass,
      onHover:     Sortable.onHover
    }
    
    var options_for_tree = {
      onHover:      Sortable.onEmptyHover,
      overlap:      options.overlap,
      containment:  options.containment,
      hoverclass:   options.hoverclass
    }

    // fix for gecko engine
    Element.cleanWhitespace(element); 

    options.draggables = [];
    options.droppables = [];

    // drop on empty handling
    if(options.dropOnEmpty || options.tree) {
      Droppables.add(element, options_for_tree);
      options.droppables.push(element);
    }

    (options.elements || this.findElements(element, options) || []).each( function(e,i) {
      var handle = options.handles ? $(options.handles[i]) :
        (options.handle ? $(e).select('.' + options.handle)[0] : e); 
      options.draggables.push(
        new Draggable(e, Object.extend(options_for_draggable, { handle: handle })));
      Droppables.add(e, options_for_droppable);
      if(options.tree) e.treeNode = element;
      options.droppables.push(e);      
    });
    
    if(options.tree) {
      (Sortable.findTreeElements(element, options) || []).each( function(e) {
        Droppables.add(e, options_for_tree);
        e.treeNode = element;
        options.droppables.push(e);
      });
    }

    // keep reference
    this.sortables[element.id] = options;

    // for onupdate
    Draggables.addObserver(new SortableObserver(element, options.onUpdate));

  },

  // return all suitable-for-sortable elements in a guaranteed order
  findElements: function(element, options) {
    return Element.findChildren(
      element, options.only, options.tree ? true : false, options.tag);
  },
  
  findTreeElements: function(element, options) {
    return Element.findChildren(
      element, options.only, options.tree ? true : false, options.treeTag);
  },

  onHover: function(element, dropon, overlap) {
    if(Element.isParent(dropon, element)) return;

    if(overlap > .33 && overlap < .66 && Sortable.options(dropon).tree) {
      return;
    } else if(overlap>0.5) {
      Sortable.mark(dropon, 'before');
      if(dropon.previousSibling != element) {
        var oldParentNode = element.parentNode;
        element.style.visibility = "hidden"; // fix gecko rendering
        dropon.parentNode.insertBefore(element, dropon);
        if(dropon.parentNode!=oldParentNode) 
          Sortable.options(oldParentNode).onChange(element);
        Sortable.options(dropon.parentNode).onChange(element);
      }
    } else {
      Sortable.mark(dropon, 'after');
      var nextElement = dropon.nextSibling || null;
      if(nextElement != element) {
        var oldParentNode = element.parentNode;
        element.style.visibility = "hidden"; // fix gecko rendering
        dropon.parentNode.insertBefore(element, nextElement);
        if(dropon.parentNode!=oldParentNode) 
          Sortable.options(oldParentNode).onChange(element);
        Sortable.options(dropon.parentNode).onChange(element);
      }
    }
  },
  
  onEmptyHover: function(element, dropon, overlap) {
    var oldParentNode = element.parentNode;
    var droponOptions = Sortable.options(dropon);
        
    if(!Element.isParent(dropon, element)) {
      var index;
      
      var children = Sortable.findElements(dropon, {tag: droponOptions.tag, only: droponOptions.only});
      var child = null;
            
      if(children) {
        var offset = Element.offsetSize(dropon, droponOptions.overlap) * (1.0 - overlap);
        
        for (index = 0; index < children.length; index += 1) {
          if (offset - Element.offsetSize (children[index], droponOptions.overlap) >= 0) {
            offset -= Element.offsetSize (children[index], droponOptions.overlap);
          } else if (offset - (Element.offsetSize (children[index], droponOptions.overlap) / 2) >= 0) {
            child = index + 1 < children.length ? children[index + 1] : null;
            break;
          } else {
            child = children[index];
            break;
          }
        }
      }
      
      dropon.insertBefore(element, child);
      
      Sortable.options(oldParentNode).onChange(element);
      droponOptions.onChange(element);
    }
  },

  unmark: function() {
    if(Sortable._marker) Sortable._marker.hide();
  },

  mark: function(dropon, position) {
    // mark on ghosting only
    var sortable = Sortable.options(dropon.parentNode);
    if(sortable && !sortable.ghosting) return; 

    if(!Sortable._marker) {
      Sortable._marker = 
        ($('dropmarker') || Element.extend(document.createElement('DIV'))).
          hide().addClassName('dropmarker').setStyle({position:'absolute'});
      document.getElementsByTagName("body").item(0).appendChild(Sortable._marker);
    }    
    var offsets = Position.cumulativeOffset(dropon);
    Sortable._marker.setStyle({left: offsets[0]+'px', top: offsets[1] + 'px'});
    
    if(position=='after')
      if(sortable.overlap == 'horizontal') 
        Sortable._marker.setStyle({left: (offsets[0]+dropon.clientWidth) + 'px'});
      else
        Sortable._marker.setStyle({top: (offsets[1]+dropon.clientHeight) + 'px'});
    
    Sortable._marker.show();
  },
  
  _tree: function(element, options, parent) {
    var children = Sortable.findElements(element, options) || [];
  
    for (var i = 0; i < children.length; ++i) {
      var match = children[i].id.match(options.format);

      if (!match) continue;
      
      var child = {
        id: encodeURIComponent(match ? match[1] : null),
        element: element,
        parent: parent,
        children: [],
        position: parent.children.length,
        container: $(children[i]).down(options.treeTag)
      }
      
      /* Get the element containing the children and recurse over it */
      if (child.container)
        this._tree(child.container, options, child)
      
      parent.children.push (child);
    }

    return parent; 
  },

  tree: function(element) {
    element = $(element);
    var sortableOptions = this.options(element);
    var options = Object.extend({
      tag: sortableOptions.tag,
      treeTag: sortableOptions.treeTag,
      only: sortableOptions.only,
      name: element.id,
      format: sortableOptions.format
    }, arguments[1] || { });
    
    var root = {
      id: null,
      parent: null,
      children: [],
      container: element,
      position: 0
    }
    
    return Sortable._tree(element, options, root);
  },

  /* Construct a [i] index for a particular node */
  _constructIndex: function(node) {
    var index = '';
    do {
      if (node.id) index = '[' + node.position + ']' + index;
    } while ((node = node.parent) != null);
    return index;
  },

  sequence: function(element) {
    element = $(element);
    var options = Object.extend(this.options(element), arguments[1] || { });
    
    return $(this.findElements(element, options) || []).map( function(item) {
      return item.id.match(options.format) ? item.id.match(options.format)[1] : '';
    });
  },

  setSequence: function(element, new_sequence) {
    element = $(element);
    var options = Object.extend(this.options(element), arguments[2] || { });
    
    var nodeMap = { };
    this.findElements(element, options).each( function(n) {
        if (n.id.match(options.format))
            nodeMap[n.id.match(options.format)[1]] = [n, n.parentNode];
        n.parentNode.removeChild(n);
    });
   
    new_sequence.each(function(ident) {
      var n = nodeMap[ident];
      if (n) {
        n[1].appendChild(n[0]);
        delete nodeMap[ident];
      }
    });
  },
  
  serialize: function(element) {
    element = $(element);
    var options = Object.extend(Sortable.options(element), arguments[1] || { });
    var name = encodeURIComponent(
      (arguments[1] && arguments[1].name) ? arguments[1].name : element.id);
    
    if (options.tree) {
      return Sortable.tree(element, arguments[1]).children.map( function (item) {
        return [name + Sortable._constructIndex(item) + "[id]=" + 
                encodeURIComponent(item.id)].concat(item.children.map(arguments.callee));
      }).flatten().join('&');
    } else {
      return Sortable.sequence(element, arguments[1]).map( function(item) {
        return name + "[]=" + encodeURIComponent(item);
      }).join('&');
    }
  }
}

// Returns true if child is contained within element
Element.isParent = function(child, element) {
  if (!child.parentNode || child == element) return false;
  if (child.parentNode == element) return true;
  return Element.isParent(child.parentNode, element);
}

Element.findChildren = function(element, only, recursive, tagName) {   
  if(!element.hasChildNodes()) return null;
  tagName = tagName.toUpperCase();
  if(only) only = [only].flatten();
  var elements = [];
  $A(element.childNodes).each( function(e) {
    if(e.tagName && e.tagName.toUpperCase()==tagName &&
      (!only || (Element.classNames(e).detect(function(v) { return only.include(v) }))))
        elements.push(e);
    if(recursive) {
      var grandchildren = Element.findChildren(e, only, recursive, tagName);
      if(grandchildren) elements.push(grandchildren);
    }
  });

  return (elements.length>0 ? elements.flatten() : []);
}

Element.offsetSize = function (element, type) {
  return element['offset' + ((type=='vertical' || type=='height') ? 'Height' : 'Width')];
}


// Copyright (c) 2005-2008 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
//           (c) 2005-2007 Ivan Krstic (http://blogs.law.harvard.edu/ivan)
//           (c) 2005-2007 Jon Tirsen (http://www.tirsen.com)
// Contributors:
//  Richard Livsey
//  Rahul Bhargava
//  Rob Wills
// 
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

// Autocompleter.Base handles all the autocompletion functionality 
// that's independent of the data source for autocompletion. This
// includes drawing the autocompletion menu, observing keyboard
// and mouse events, and similar.
//
// Specific autocompleters need to provide, at the very least, 
// a getUpdatedChoices function that will be invoked every time
// the text inside the monitored textbox changes. This method 
// should get the text for which to provide autocompletion by
// invoking this.getToken(), NOT by directly accessing
// this.element.value. This is to allow incremental tokenized
// autocompletion. Specific auto-completion logic (AJAX, etc)
// belongs in getUpdatedChoices.
//
// Tokenized incremental autocompletion is enabled automatically
// when an autocompleter is instantiated with the 'tokens' option
// in the options parameter, e.g.:
// new Ajax.Autocompleter('id','upd', '/url/', { tokens: ',' });
// will incrementally autocomplete with a comma as the token.
// Additionally, ',' in the above example can be replaced with
// a token array, e.g. { tokens: [',', '\n'] } which
// enables autocompletion on multiple tokens. This is most 
// useful when one of the tokens is \n (a newline), as it 
// allows smart autocompletion after linebreaks.

if(typeof Effect == 'undefined')
  throw("controls.js requires including script.aculo.us' effects.js library");

var Autocompleter = { }
Autocompleter.Base = Class.create({
  baseInitialize: function(element, update, options) {
    element          = $(element)
    this.element     = element; 
    this.update      = $(update);  
    this.hasFocus    = false; 
    this.changed     = false; 
    this.active      = false; 
    this.index       = 0;     
    this.entryCount  = 0;
    this.oldElementValue = this.element.value;

    if(this.setOptions)
      this.setOptions(options);
    else
      this.options = options || { };

    this.options.paramName    = this.options.paramName || this.element.name;
    this.options.tokens       = this.options.tokens || [];
    this.options.frequency    = this.options.frequency || 0.4;
    this.options.minChars     = this.options.minChars || 1;
    this.options.onShow       = this.options.onShow || 
      function(element, update){ 
        if(!update.style.position || update.style.position=='absolute') {
          update.style.position = 'absolute';
          Position.clone(element, update, {
            setHeight: false, 
            offsetTop: element.offsetHeight
          });
        }
        Effect.Appear(update,{duration:0.15});
      };
    this.options.onHide = this.options.onHide || 
      function(element, update){ new Effect.Fade(update,{duration:0.15}) };

    if(typeof(this.options.tokens) == 'string') 
      this.options.tokens = new Array(this.options.tokens);
    // Force carriage returns as token delimiters anyway
    if (!this.options.tokens.include('\n'))
      this.options.tokens.push('\n');

    this.observer = null;
    
    this.element.setAttribute('autocomplete','off');

    Element.hide(this.update);

    Event.observe(this.element, 'blur', this.onBlur.bindAsEventListener(this));
    Event.observe(this.element, 'keydown', this.onKeyPress.bindAsEventListener(this));
  },

  show: function() {
    if(Element.getStyle(this.update, 'display')=='none') this.options.onShow(this.element, this.update);
    if(!this.iefix && 
      (Prototype.Browser.IE) &&
      (Element.getStyle(this.update, 'position')=='absolute')) {
      new Insertion.After(this.update, 
       '<iframe id="' + this.update.id + '_iefix" '+
       'style="display:none;position:absolute;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);" ' +
       'src="javascript:false;" frameborder="0" scrolling="no"></iframe>');
      this.iefix = $(this.update.id+'_iefix');
    }
    if(this.iefix) setTimeout(this.fixIEOverlapping.bind(this), 50);
  },
  
  fixIEOverlapping: function() {
    Position.clone(this.update, this.iefix, {setTop:(!this.update.style.height)});
    this.iefix.style.zIndex = 1;
    this.update.style.zIndex = 2;
    Element.show(this.iefix);
  },

  hide: function() {
    this.stopIndicator();
    if(Element.getStyle(this.update, 'display')!='none') this.options.onHide(this.element, this.update);
    if(this.iefix) Element.hide(this.iefix);
  },

  startIndicator: function() {
    if(this.options.indicator) Element.show(this.options.indicator);
  },

  stopIndicator: function() {
    if(this.options.indicator) Element.hide(this.options.indicator);
  },

  onKeyPress: function(event) {
    if(this.active)
      switch(event.keyCode) {
       case Event.KEY_TAB:
       case Event.KEY_RETURN:
         this.selectEntry();
         Event.stop(event);
       case Event.KEY_ESC:
         this.hide();
         this.active = false;
         Event.stop(event);
         return;
       case Event.KEY_LEFT:
       case Event.KEY_RIGHT:
         return;
       case Event.KEY_UP:
         this.markPrevious();
         this.render();
         Event.stop(event);
         return;
       case Event.KEY_DOWN:
         this.markNext();
         this.render();
         Event.stop(event);
         return;
      }
     else 
       if(event.keyCode==Event.KEY_TAB || event.keyCode==Event.KEY_RETURN || 
         (Prototype.Browser.WebKit > 0 && event.keyCode == 0)) return;

    this.changed = true;
    this.hasFocus = true;

    if(this.observer) clearTimeout(this.observer);
      this.observer = 
        setTimeout(this.onObserverEvent.bind(this), this.options.frequency*1000);
  },

  activate: function() {
    this.changed = false;
    this.hasFocus = true;
    this.getUpdatedChoices();
  },

  onHover: function(event) {
    var element = Event.findElement(event, 'LI');
    if(this.index != element.autocompleteIndex) 
    {
        this.index = element.autocompleteIndex;
        this.render();
    }
    Event.stop(event);
  },
  
  onClick: function(event) {
    var element = Event.findElement(event, 'LI');
    this.index = element.autocompleteIndex;
    this.selectEntry();
    this.hide();
  },
  
  onBlur: function(event) {
    // needed to make click events working
    setTimeout(this.hide.bind(this), 250);
    this.hasFocus = false;
    this.active = false;     
  }, 
  
  render: function() {
    if(this.entryCount > 0) {
      for (var i = 0; i < this.entryCount; i++)
        this.index==i ? 
          Element.addClassName(this.getEntry(i),"selected") : 
          Element.removeClassName(this.getEntry(i),"selected");
      if(this.hasFocus) { 
        this.show();
        this.active = true;
      }
    } else {
      this.active = false;
      this.hide();
    }
  },
  
  markPrevious: function() {
    if(this.index > 0) this.index--
      else this.index = this.entryCount-1;
    this.getEntry(this.index).scrollIntoView(true);
  },
  
  markNext: function() {
    if(this.index < this.entryCount-1) this.index++
      else this.index = 0;
    this.getEntry(this.index).scrollIntoView(false);
  },
  
  getEntry: function(index) {
    return this.update.firstChild.childNodes[index];
  },
  
  getCurrentEntry: function() {
    return this.getEntry(this.index);
  },
  
  selectEntry: function() {
    this.active = false;
    this.updateElement(this.getCurrentEntry());
  },

  updateElement: function(selectedElement) {
    if (this.options.updateElement) {
      this.options.updateElement(selectedElement);
      return;
    }
    var value = '';
    if (this.options.select) {
      var nodes = $(selectedElement).select('.' + this.options.select) || [];
      if(nodes.length>0) value = Element.collectTextNodes(nodes[0], this.options.select);
    } else
      value = Element.collectTextNodesIgnoreClass(selectedElement, 'informal');
    
    var bounds = this.getTokenBounds();
    if (bounds[0] != -1) {
      var newValue = this.element.value.substr(0, bounds[0]);
      var whitespace = this.element.value.substr(bounds[0]).match(/^\s+/);
      if (whitespace)
        newValue += whitespace[0];
      this.element.value = newValue + value + this.element.value.substr(bounds[1]);
    } else {
      this.element.value = value;
    }
    this.oldElementValue = this.element.value;
    this.element.focus();
    
    if (this.options.afterUpdateElement)
      this.options.afterUpdateElement(this.element, selectedElement);
  },

  updateChoices: function(choices) {
    if(!this.changed && this.hasFocus) {
      this.update.innerHTML = choices;
      Element.cleanWhitespace(this.update);
      Element.cleanWhitespace(this.update.down());

      if(this.update.firstChild && this.update.down().childNodes) {
        this.entryCount = 
          this.update.down().childNodes.length;
        for (var i = 0; i < this.entryCount; i++) {
          var entry = this.getEntry(i);
          entry.autocompleteIndex = i;
          this.addObservers(entry);
        }
      } else { 
        this.entryCount = 0;
      }

      this.stopIndicator();
      this.index = 0;
      
      if(this.entryCount==1 && this.options.autoSelect) {
        this.selectEntry();
        this.hide();
      } else {
        this.render();
      }
    }
  },

  addObservers: function(element) {
    Event.observe(element, "mouseover", this.onHover.bindAsEventListener(this));
    Event.observe(element, "click", this.onClick.bindAsEventListener(this));
  },

  onObserverEvent: function() {
    this.changed = false;   
    this.tokenBounds = null;
    if(this.getToken().length>=this.options.minChars) {
      this.getUpdatedChoices();
    } else {
      this.active = false;
      this.hide();
    }
    this.oldElementValue = this.element.value;
  },

  getToken: function() {
    var bounds = this.getTokenBounds();
    return this.element.value.substring(bounds[0], bounds[1]).strip();
  },

  getTokenBounds: function() {
    if (null != this.tokenBounds) return this.tokenBounds;
    var value = this.element.value;
    if (value.strip().empty()) return [-1, 0];
    var diff = arguments.callee.getFirstDifferencePos(value, this.oldElementValue);
    var offset = (diff == this.oldElementValue.length ? 1 : 0);
    var prevTokenPos = -1, nextTokenPos = value.length;
    var tp;
    for (var index = 0, l = this.options.tokens.length; index < l; ++index) {
      tp = value.lastIndexOf(this.options.tokens[index], diff + offset - 1);
      if (tp > prevTokenPos) prevTokenPos = tp;
      tp = value.indexOf(this.options.tokens[index], diff + offset);
      if (-1 != tp && tp < nextTokenPos) nextTokenPos = tp;
    }
    return (this.tokenBounds = [prevTokenPos + 1, nextTokenPos]);
  }
});

Autocompleter.Base.prototype.getTokenBounds.getFirstDifferencePos = function(newS, oldS) {
  var boundary = Math.min(newS.length, oldS.length);
  for (var index = 0; index < boundary; ++index)
    if (newS[index] != oldS[index])
      return index;
  return boundary;
};

Ajax.Autocompleter = Class.create(Autocompleter.Base, {
  initialize: function(element, update, url, options) {
    this.baseInitialize(element, update, options);
    this.options.asynchronous  = true;
    this.options.onComplete    = this.onComplete.bind(this);
    this.options.defaultParams = this.options.parameters || null;
    this.url                   = url;
  },

  getUpdatedChoices: function() {
    this.startIndicator();
    
    var entry = encodeURIComponent(this.options.paramName) + '=' + 
      encodeURIComponent(this.getToken());

    this.options.parameters = this.options.callback ?
      this.options.callback(this.element, entry) : entry;

    if(this.options.defaultParams) 
      this.options.parameters += '&' + this.options.defaultParams;
    
    new Ajax.Request(this.url, this.options);
  },

  onComplete: function(request) {
    this.updateChoices(request.responseText);
  }
});

// The local array autocompleter. Used when you'd prefer to
// inject an array of autocompletion options into the page, rather
// than sending out Ajax queries, which can be quite slow sometimes.
//
// The constructor takes four parameters. The first two are, as usual,
// the id of the monitored textbox, and id of the autocompletion menu.
// The third is the array you want to autocomplete from, and the fourth
// is the options block.
//
// Extra local autocompletion options:
// - choices - How many autocompletion choices to offer
//
// - partialSearch - If false, the autocompleter will match entered
//                    text only at the beginning of strings in the 
//                    autocomplete array. Defaults to true, which will
//                    match text at the beginning of any *word* in the
//                    strings in the autocomplete array. If you want to
//                    search anywhere in the string, additionally set
//                    the option fullSearch to true (default: off).
//
// - fullSsearch - Search anywhere in autocomplete array strings.
//
// - partialChars - How many characters to enter before triggering
//                   a partial match (unlike minChars, which defines
//                   how many characters are required to do any match
//                   at all). Defaults to 2.
//
// - ignoreCase - Whether to ignore case when autocompleting.
//                 Defaults to true.
//
// It's possible to pass in a custom function as the 'selector' 
// option, if you prefer to write your own autocompletion logic.
// In that case, the other options above will not apply unless
// you support them.

Autocompleter.Local = Class.create(Autocompleter.Base, {
  initialize: function(element, update, array, options) {
    this.baseInitialize(element, update, options);
    this.options.array = array;
  },

  getUpdatedChoices: function() {
    this.updateChoices(this.options.selector(this));
  },

  setOptions: function(options) {
    this.options = Object.extend({
      choices: 10,
      partialSearch: true,
      partialChars: 2,
      ignoreCase: true,
      fullSearch: false,
      selector: function(instance) {
        var ret       = []; // Beginning matches
        var partial   = []; // Inside matches
        var entry     = instance.getToken();
        var count     = 0;

        for (var i = 0; i < instance.options.array.length &&  
          ret.length < instance.options.choices ; i++) { 

          var elem = instance.options.array[i];
          var foundPos = instance.options.ignoreCase ? 
            elem.toLowerCase().indexOf(entry.toLowerCase()) : 
            elem.indexOf(entry);

          while (foundPos != -1) {
            if (foundPos == 0 && elem.length != entry.length) { 
              ret.push("<li><strong>" + elem.substr(0, entry.length) + "</strong>" + 
                elem.substr(entry.length) + "</li>");
              break;
            } else if (entry.length >= instance.options.partialChars && 
              instance.options.partialSearch && foundPos != -1) {
              if (instance.options.fullSearch || /\s/.test(elem.substr(foundPos-1,1))) {
                partial.push("<li>" + elem.substr(0, foundPos) + "<strong>" +
                  elem.substr(foundPos, entry.length) + "</strong>" + elem.substr(
                  foundPos + entry.length) + "</li>");
                break;
              }
            }

            foundPos = instance.options.ignoreCase ? 
              elem.toLowerCase().indexOf(entry.toLowerCase(), foundPos + 1) : 
              elem.indexOf(entry, foundPos + 1);

          }
        }
        if (partial.length)
          ret = ret.concat(partial.slice(0, instance.options.choices - ret.length))
        return "<ul>" + ret.join('') + "</ul>";
      }
    }, options || { });
  }
});

// AJAX in-place editor and collection editor
// Full rewrite by Christophe Porteneuve <tdd@tddsworld.com> (April 2007).

// Use this if you notice weird scrolling problems on some browsers,
// the DOM might be a bit confused when this gets called so do this
// waits 1 ms (with setTimeout) until it does the activation
Field.scrollFreeActivate = function(field) {
  setTimeout(function() {
    Field.activate(field);
  }, 1);
}

Ajax.InPlaceEditor = Class.create({
  initialize: function(element, url, options) {
    this.url = url;
    this.element = element = $(element);
    this.prepareOptions();
    this._controls = { };
    arguments.callee.dealWithDeprecatedOptions(options); // DEPRECATION LAYER!!!
    Object.extend(this.options, options || { });
    if (!this.options.formId && this.element.id) {
      this.options.formId = this.element.id + '-inplaceeditor';
      if ($(this.options.formId))
        this.options.formId = '';
    }
    if (this.options.externalControl)
      this.options.externalControl = $(this.options.externalControl);
    if (!this.options.externalControl)
      this.options.externalControlOnly = false;
    this._originalBackground = this.element.getStyle('background-color') || 'transparent';
    this.element.title = this.options.clickToEditText;
    this._boundCancelHandler = this.handleFormCancellation.bind(this);
    this._boundComplete = (this.options.onComplete || Prototype.emptyFunction).bind(this);
    this._boundFailureHandler = this.handleAJAXFailure.bind(this);
    this._boundSubmitHandler = this.handleFormSubmission.bind(this);
    this._boundWrapperHandler = this.wrapUp.bind(this);
    this.registerListeners();
  },
  checkForEscapeOrReturn: function(e) {
    if (!this._editing || e.ctrlKey || e.altKey || e.shiftKey) return;
    if (Event.KEY_ESC == e.keyCode)
      this.handleFormCancellation(e);
    else if (Event.KEY_RETURN == e.keyCode)
      this.handleFormSubmission(e);
  },
  createControl: function(mode, handler, extraClasses) {
    var control = this.options[mode + 'Control'];
    var text = this.options[mode + 'Text'];
    if ('button' == control) {
      var btn = document.createElement('input');
      btn.type = 'submit';
      btn.value = text;
      btn.className = 'editor_' + mode + '_button';
      if ('cancel' == mode)
        btn.onclick = this._boundCancelHandler;
      this._form.appendChild(btn);
      this._controls[mode] = btn;
    } else if ('link' == control) {
      var link = document.createElement('a');
      link.href = '#';
      link.appendChild(document.createTextNode(text));
      link.onclick = 'cancel' == mode ? this._boundCancelHandler : this._boundSubmitHandler;
      link.className = 'editor_' + mode + '_link';
      if (extraClasses)
        link.className += ' ' + extraClasses;
      this._form.appendChild(link);
      this._controls[mode] = link;
    }
  },
  createEditField: function() {
    var text = (this.options.loadTextURL ? this.options.loadingText : this.getText());
    var fld;
    if (1 >= this.options.rows && !/\r|\n/.test(this.getText())) {
      fld = document.createElement('input');
      fld.type = 'text';
      var size = this.options.size || this.options.cols || 0;
      if (0 < size) fld.size = size;
    } else {
      fld = document.createElement('textarea');
      fld.rows = (1 >= this.options.rows ? this.options.autoRows : this.options.rows);
      fld.cols = this.options.cols || 40;
    }
    fld.name = this.options.paramName;
    fld.value = text; // No HTML breaks conversion anymore
    fld.className = 'editor_field';
    if (this.options.submitOnBlur)
      fld.onblur = this._boundSubmitHandler;
    this._controls.editor = fld;
    if (this.options.loadTextURL)
      this.loadExternalText();
    this._form.appendChild(this._controls.editor);
  },
  createForm: function() {
    var ipe = this;
    function addText(mode, condition) {
      var text = ipe.options['text' + mode + 'Controls'];
      if (!text || condition === false) return;
      ipe._form.appendChild(document.createTextNode(text));
    };
    this._form = $(document.createElement('form'));
    this._form.id = this.options.formId;
    this._form.addClassName(this.options.formClassName);
    this._form.onsubmit = this._boundSubmitHandler;
    this.createEditField();
    if ('textarea' == this._controls.editor.tagName.toLowerCase())
      this._form.appendChild(document.createElement('br'));
    if (this.options.onFormCustomization)
      this.options.onFormCustomization(this, this._form);
    addText('Before', this.options.okControl || this.options.cancelControl);
    this.createControl('ok', this._boundSubmitHandler);
    addText('Between', this.options.okControl && this.options.cancelControl);
    this.createControl('cancel', this._boundCancelHandler, 'editor_cancel');
    addText('After', this.options.okControl || this.options.cancelControl);
  },
  destroy: function() {
    if (this._oldInnerHTML)
      this.element.innerHTML = this._oldInnerHTML;
    this.leaveEditMode();
    this.unregisterListeners();
  },
  enterEditMode: function(e) {
    if (this._saving || this._editing) return;
    this._editing = true;
    this.triggerCallback('onEnterEditMode');
    if (this.options.externalControl)
      this.options.externalControl.hide();
    this.element.hide();
    this.createForm();
    this.element.parentNode.insertBefore(this._form, this.element);
    if (!this.options.loadTextURL)
      this.postProcessEditField();
    if (e) Event.stop(e);
  },
  enterHover: function(e) {
    if (this.options.hoverClassName)
      this.element.addClassName(this.options.hoverClassName);
    if (this._saving) return;
    this.triggerCallback('onEnterHover');
  },
  getText: function() {
    return this.element.innerHTML;
  },
  handleAJAXFailure: function(transport) {
    this.triggerCallback('onFailure', transport);
    if (this._oldInnerHTML) {
      this.element.innerHTML = this._oldInnerHTML;
      this._oldInnerHTML = null;
    }
  },
  handleFormCancellation: function(e) {
    this.wrapUp();
    if (e) Event.stop(e);
  },
  handleFormSubmission: function(e) {
    var form = this._form;
    var value = $F(this._controls.editor);
    this.prepareSubmission();
    var params = this.options.callback(form, value) || '';
    if (Object.isString(params))
      params = params.toQueryParams();
    params.editorId = this.element.id;
    if (this.options.htmlResponse) {
      var options = Object.extend({ evalScripts: true }, this.options.ajaxOptions);
      Object.extend(options, {
        parameters: params,
        onComplete: this._boundWrapperHandler,
        onFailure: this._boundFailureHandler
      });
      new Ajax.Updater({ success: this.element }, this.url, options);
    } else {
      var options = Object.extend({ method: 'get' }, this.options.ajaxOptions);
      Object.extend(options, {
        parameters: params,
        onComplete: this._boundWrapperHandler,
        onFailure: this._boundFailureHandler
      });
      new Ajax.Request(this.url, options);
    }
    if (e) Event.stop(e);
  },
  leaveEditMode: function() {
    this.element.removeClassName(this.options.savingClassName);
    this.removeForm();
    this.leaveHover();
    this.element.style.backgroundColor = this._originalBackground;
    this.element.show();
    if (this.options.externalControl)
      this.options.externalControl.show();
    this._saving = false;
    this._editing = false;
    this._oldInnerHTML = null;
    this.triggerCallback('onLeaveEditMode');
  },
  leaveHover: function(e) {
    if (this.options.hoverClassName)
      this.element.removeClassName(this.options.hoverClassName);
    if (this._saving) return;
    this.triggerCallback('onLeaveHover');
  },
  loadExternalText: function() {
    this._form.addClassName(this.options.loadingClassName);
    this._controls.editor.disabled = true;
    var options = Object.extend({ method: 'get' }, this.options.ajaxOptions);
    Object.extend(options, {
      parameters: 'editorId=' + encodeURIComponent(this.element.id),
      onComplete: Prototype.emptyFunction,
      onSuccess: function(transport) {
        this._form.removeClassName(this.options.loadingClassName);
        var text = transport.responseText;
        if (this.options.stripLoadedTextTags)
          text = text.stripTags();
        this._controls.editor.value = text;
        this._controls.editor.disabled = false;
        this.postProcessEditField();
      }.bind(this),
      onFailure: this._boundFailureHandler
    });
    new Ajax.Request(this.options.loadTextURL, options);
  },
  postProcessEditField: function() {
    var fpc = this.options.fieldPostCreation;
    if (fpc)
      $(this._controls.editor)['focus' == fpc ? 'focus' : 'activate']();
  },
  prepareOptions: function() {
    this.options = Object.clone(Ajax.InPlaceEditor.DefaultOptions);
    Object.extend(this.options, Ajax.InPlaceEditor.DefaultCallbacks);
    [this._extraDefaultOptions].flatten().compact().each(function(defs) {
      Object.extend(this.options, defs);
    }.bind(this));
  },
  prepareSubmission: function() {
    this._saving = true;
    this.removeForm();
    this.leaveHover();
    this.showSaving();
  },
  registerListeners: function() {
    this._listeners = { };
    var listener;
    $H(Ajax.InPlaceEditor.Listeners).each(function(pair) {
      listener = this[pair.value].bind(this);
      this._listeners[pair.key] = listener;
      if (!this.options.externalControlOnly)
        this.element.observe(pair.key, listener);
      if (this.options.externalControl)
        this.options.externalControl.observe(pair.key, listener);
    }.bind(this));
  },
  removeForm: function() {
    if (!this._form) return;
    this._form.remove();
    this._form = null;
    this._controls = { };
  },
  showSaving: function() {
    this._oldInnerHTML = this.element.innerHTML;
    this.element.innerHTML = this.options.savingText;
    this.element.addClassName(this.options.savingClassName);
    this.element.style.backgroundColor = this._originalBackground;
    this.element.show();
  },
  triggerCallback: function(cbName, arg) {
    if ('function' == typeof this.options[cbName]) {
      this.options[cbName](this, arg);
    }
  },
  unregisterListeners: function() {
    $H(this._listeners).each(function(pair) {
      if (!this.options.externalControlOnly)
        this.element.stopObserving(pair.key, pair.value);
      if (this.options.externalControl)
        this.options.externalControl.stopObserving(pair.key, pair.value);
    }.bind(this));
  },
  wrapUp: function(transport) {
    this.leaveEditMode();
    // Can't use triggerCallback due to backward compatibility: requires
    // binding + direct element
    this._boundComplete(transport, this.element);
  }
});

Object.extend(Ajax.InPlaceEditor.prototype, {
  dispose: Ajax.InPlaceEditor.prototype.destroy
});

Ajax.InPlaceCollectionEditor = Class.create(Ajax.InPlaceEditor, {
  initialize: function($super, element, url, options) {
    this._extraDefaultOptions = Ajax.InPlaceCollectionEditor.DefaultOptions;
    $super(element, url, options);
  },

  createEditField: function() {
    var list = document.createElement('select');
    list.name = this.options.paramName;
    list.size = 1;
    this._controls.editor = list;
    this._collection = this.options.collection || [];
    if (this.options.loadCollectionURL)
      this.loadCollection();
    else
      this.checkForExternalText();
    this._form.appendChild(this._controls.editor);
  },

  loadCollection: function() {
    this._form.addClassName(this.options.loadingClassName);
    this.showLoadingText(this.options.loadingCollectionText);
    var options = Object.extend({ method: 'get' }, this.options.ajaxOptions);
    Object.extend(options, {
      parameters: 'editorId=' + encodeURIComponent(this.element.id),
      onComplete: Prototype.emptyFunction,
      onSuccess: function(transport) {
        var js = transport.responseText.strip();
        if (!/^\[.*\]$/.test(js)) // TODO: improve sanity check
          throw 'Server returned an invalid collection representation.';
        this._collection = eval(js);
        this.checkForExternalText();
      }.bind(this),
      onFailure: this.onFailure
    });
    new Ajax.Request(this.options.loadCollectionURL, options);
  },

  showLoadingText: function(text) {
    this._controls.editor.disabled = true;
    var tempOption = this._controls.editor.firstChild;
    if (!tempOption) {
      tempOption = document.createElement('option');
      tempOption.value = '';
      this._controls.editor.appendChild(tempOption);
      tempOption.selected = true;
    }
    tempOption.update((text || '').stripScripts().stripTags());
  },

  checkForExternalText: function() {
    this._text = this.getText();
    if (this.options.loadTextURL)
      this.loadExternalText();
    else
      this.buildOptionList();
  },

  loadExternalText: function() {
    this.showLoadingText(this.options.loadingText);
    var options = Object.extend({ method: 'get' }, this.options.ajaxOptions);
    Object.extend(options, {
      parameters: 'editorId=' + encodeURIComponent(this.element.id),
      onComplete: Prototype.emptyFunction,
      onSuccess: function(transport) {
        this._text = transport.responseText.strip();
        this.buildOptionList();
      }.bind(this),
      onFailure: this.onFailure
    });
    new Ajax.Request(this.options.loadTextURL, options);
  },

  buildOptionList: function() {
    this._form.removeClassName(this.options.loadingClassName);
    this._collection = this._collection.map(function(entry) {
      return 2 === entry.length ? entry : [entry, entry].flatten();
    });
    var marker = ('value' in this.options) ? this.options.value : this._text;
    var textFound = this._collection.any(function(entry) {
      return entry[0] == marker;
    }.bind(this));
    this._controls.editor.update('');
    var option;
    this._collection.each(function(entry, index) {
      option = document.createElement('option');
      option.value = entry[0];
      option.selected = textFound ? entry[0] == marker : 0 == index;
      option.appendChild(document.createTextNode(entry[1]));
      this._controls.editor.appendChild(option);
    }.bind(this));
    this._controls.editor.disabled = false;
    Field.scrollFreeActivate(this._controls.editor);
  }
});

//**** DEPRECATION LAYER FOR InPlace[Collection]Editor! ****
//**** This only  exists for a while,  in order to  let ****
//**** users adapt to  the new API.  Read up on the new ****
//**** API and convert your code to it ASAP!            ****

Ajax.InPlaceEditor.prototype.initialize.dealWithDeprecatedOptions = function(options) {
  if (!options) return;
  function fallback(name, expr) {
    if (name in options || expr === undefined) return;
    options[name] = expr;
  };
  fallback('cancelControl', (options.cancelLink ? 'link' : (options.cancelButton ? 'button' :
    options.cancelLink == options.cancelButton == false ? false : undefined)));
  fallback('okControl', (options.okLink ? 'link' : (options.okButton ? 'button' :
    options.okLink == options.okButton == false ? false : undefined)));
  fallback('highlightColor', options.highlightcolor);
  fallback('highlightEndColor', options.highlightendcolor);
};

Object.extend(Ajax.InPlaceEditor, {
  DefaultOptions: {
    ajaxOptions: { },
    autoRows: 3,                                // Use when multi-line w/ rows == 1
    cancelControl: 'link',                      // 'link'|'button'|false
    cancelText: 'cancel',
    clickToEditText: 'Click to edit',
    externalControl: null,                      // id|elt
    externalControlOnly: false,
    fieldPostCreation: 'activate',              // 'activate'|'focus'|false
    formClassName: 'inplaceeditor-form',
    formId: null,                               // id|elt
    highlightColor: '#ffff99',
    highlightEndColor: '#ffffff',
    hoverClassName: '',
    htmlResponse: true,
    loadingClassName: 'inplaceeditor-loading',
    loadingText: 'Loading...',
    okControl: 'button',                        // 'link'|'button'|false
    okText: 'ok',
    paramName: 'value',
    rows: 1,                                    // If 1 and multi-line, uses autoRows
    savingClassName: 'inplaceeditor-saving',
    savingText: 'Saving...',
    size: 0,
    stripLoadedTextTags: false,
    submitOnBlur: false,
    textAfterControls: '',
    textBeforeControls: '',
    textBetweenControls: ''
  },
  DefaultCallbacks: {
    callback: function(form) {
      return Form.serialize(form);
    },
    onComplete: function(transport, element) {
      // For backward compatibility, this one is bound to the IPE, and passes
      // the element directly.  It was too often customized, so we don't break it.
      new Effect.Highlight(element, {
        startcolor: this.options.highlightColor, keepBackgroundImage: true });
    },
    onEnterEditMode: null,
    onEnterHover: function(ipe) {
      ipe.element.style.backgroundColor = ipe.options.highlightColor;
      if (ipe._effect)
        ipe._effect.cancel();
    },
    onFailure: function(transport, ipe) {
      alert('Error communication with the server: ' + transport.responseText.stripTags());
    },
    onFormCustomization: null, // Takes the IPE and its generated form, after editor, before controls.
    onLeaveEditMode: null,
    onLeaveHover: function(ipe) {
      ipe._effect = new Effect.Highlight(ipe.element, {
        startcolor: ipe.options.highlightColor, endcolor: ipe.options.highlightEndColor,
        restorecolor: ipe._originalBackground, keepBackgroundImage: true
      });
    }
  },
  Listeners: {
    click: 'enterEditMode',
    keydown: 'checkForEscapeOrReturn',
    mouseover: 'enterHover',
    mouseout: 'leaveHover'
  }
});

Ajax.InPlaceCollectionEditor.DefaultOptions = {
  loadingCollectionText: 'Loading options...'
};

// Delayed observer, like Form.Element.Observer, 
// but waits for delay after last key input
// Ideal for live-search fields

Form.Element.DelayedObserver = Class.create({
  initialize: function(element, delay, callback) {
    this.delay     = delay || 0.5;
    this.element   = $(element);
    this.callback  = callback;
    this.timer     = null;
    this.lastValue = $F(this.element); 
    Event.observe(this.element,'keyup',this.delayedListener.bindAsEventListener(this));
  },
  delayedListener: function(event) {
    if(this.lastValue == $F(this.element)) return;
    if(this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(this.onTimerEvent.bind(this), this.delay * 1000);
    this.lastValue = $F(this.element);
  },
  onTimerEvent: function() {
    this.timer = null;
    this.callback(this.element, $F(this.element));
  }
});


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


// Macromedia
// Copyright� 1998-2004 eHelp� Corporation.All rights reserved.
// RoboHelp_CSH.js
// The Helper function for WebHelp Context Sensitive Help

//     Syntax:
//     function RH_ShowHelp(hParent, a_pszHelpFile, uCommand, dwData)
//
//     hParent
//          Reserved - Use 0
//   
//     pszHelpFile
//          WebHelp: 
//               Path to help system start page ("http://www.myurl.com/help/help.htm" or "/help/help.htm")
//               For custom windows (defined in Help project), add ">" followed by the window name ("/help/help.htm>mywin")
//
//          WebHelp Enterprise: 
//               Path to RoboEngine server ("http://RoboEngine/roboapi.asp")
//               If automatic merging is turned off in RoboEngine Configuration Manager, specify the project name in the URL ("http://RoboEngine/roboapi.asp?project=myproject")
//               For custom windows (defined in Help project), add ">" followed by the window name ("http://RoboEngine/roboapi.asp>mywindow")
//
//     uCommand
//          Command to display help. One of the following:
//                    HH_HELP_CONTEXT     // Displays the topic associated with the Map ID sent in dwData
//											if 0, then default topic is displayed.				
//               The following display the default topic and the Search, Index, or TOC pane. 
//               Note: The pane displayed in WebHelp Enterprise will always be the window's default pane.
//                    HH_DISPLAY_SEARCH 
//                    HH_DISPLAY_INDEX
//                    HH_DISPLAY_TOC
//
//     dwData
//          Map ID associated with the topic to open (if using HH_HELP_CONTEXT), otherwise 0
//
//     Examples:
//     <p>Click for <A HREF='javascript:RH_ShowHelp(0, "help/help.htm", 0, 10)'>Help</A> (map number 10)</p>
//     <p>Click for <A HREF='javascript:RH_ShowHelp(0, "help/help.htm>mywindow", 0, 100)'>Help in custom window (map number 100)</A></p>


var gbNav6=false;
var gbNav61=false;
var gbNav4=false;
var gbIE4=false;
var gbIE=false;
var gbIE5=false;
var gbIE55=false;

var gAgent=navigator.userAgent.toLowerCase();
var gbMac=(gAgent.indexOf("mac")!=-1);
var gbSunOS=(gAgent.indexOf("sunos")!=-1);
var gbOpera=(gAgent.indexOf("opera")!=-1);

var HH_DISPLAY_TOPIC = 0;
var HH_DISPLAY_TOC = 1;
var HH_DISPLAY_INDEX = 2;
var HH_DISPLAY_SEARCH = 3;
var HH_HELP_CONTEXT = 15;

var gVersion=navigator.appVersion.toLowerCase();

var gnVerMajor=parseInt(gVersion);
var gnVerMinor=parseFloat(gVersion);

gbIE=(navigator.appName.indexOf("Microsoft")!=-1);
if(gnVerMajor>=4)
{
	if(navigator.appName=="Netscape")
	{
		gbNav4=true;
		if(gnVerMajor>=5)
			gbNav6=true;
	}
	gbIE4=(navigator.appName.indexOf("Microsoft")!=-1);
}
if(gbNav6)
{
	document.gnPageWidth=innerWidth;
	document.gnPageHeight=innerHeight;
	var nPos=gAgent.indexOf("netscape");
	if(nPos!=-1)
	{
		var nVersion=parseFloat(gAgent.substring(nPos+10));
		if(nVersion>=6.1)
			gbNav61=true;
	}
}else if(gbIE4)
{
	var nPos=gAgent.indexOf("msie");
	if(nPos!=-1)
	{
		var nVersion=parseFloat(gAgent.substring(nPos+5));
		if(nVersion>=5)
			gbIE5=true;
		if(nVersion>=5.5)
			gbIE55=true;
	}
}

function RH_ShowHelp(hParent, a_pszHelpFile, uCommand, dwData)
{
	// this function only support WebHelp
	var strHelpPath = a_pszHelpFile;
	var strWnd = "";
	var nPos = a_pszHelpFile.indexOf(">");
	if (nPos != -1)
	{
		strHelpPath = a_pszHelpFile.substring(0, nPos);
		strWnd = a_pszHelpFile.substring(nPos+1); 
	}
	if (isServerBased(strHelpPath))
		RH_ShowWebHelp_Server(hParent, strHelpPath, strWnd, uCommand, dwData);
	else
		RH_ShowWebHelp(hParent, strHelpPath, strWnd, uCommand, dwData);
}

function RH_ShowWebHelp_Server(hParent, strHelpPath, strWnd, uCommand, dwData)
{
	// hParent never used.
	ShowWebHelp_Server(strHelpPath, strWnd, uCommand, dwData);
}

function RH_ShowWebHelp(hParent, strHelpPath, strWnd, uCommand, dwData)
{
	// hParent never used.
	ShowWebHelp(strHelpPath, strWnd, uCommand, dwData);
}


function ShowWebHelp_Server(strHelpPath, strWnd, uCommand, nMapId)
{
	var a_pszHelpFile = "";
	if (uCommand == HH_HELP_CONTEXT)
	{
		if (strHelpPath.indexOf("?") == -1)
			a_pszHelpFile = strHelpPath + "?ctxid=" + nMapId;
		else
			a_pszHelpFile = strHelpPath + "&ctxid=" + nMapId;
	}
	else
	{
		if (strHelpPath.indexOf("?") == -1)
			a_pszHelpFile = strHelpPath + "?ctxid=0";
		else
			a_pszHelpFile = strHelpPath + "&ctxid=0";
	}

	if (strWnd)
		a_pszHelpFile += ">" + strWnd;

	if (gbIE4)
	{
		a_pszHelpFile += "&cmd=newwnd&rtype=iefrm";
		loadData(a_pszHelpFile);
	}
	else if (gbNav4)
	{
		a_pszHelpFile += "&cmd=newwnd&rtype=nswnd";
		var sParam = "left="+screen.width+",top="+screen.height+",width=100,height=100";
		window.open(a_pszHelpFile, "__webCshStub", sParam);
	}
	else
	{
		var sParam = "left="+screen.width+",top="+screen.height+",width=100,height=100";
		if (gbIE5)
			window.open("about:blank", "__webCshStub", sParam);
		window.open(a_pszHelpFile, "__webCshStub");
	}
}


function ShowWebHelp(strHelpPath, strWnd, uCommand, nMapId)
{
	var a_pszHelpFile = "";
	if (uCommand == HH_DISPLAY_TOPIC)
	{
		a_pszHelpFile = strHelpPath + "#<id=0";
	}
	if (uCommand == HH_HELP_CONTEXT)
	{
		a_pszHelpFile = strHelpPath + "#<id=" + nMapId;
	}
	else if (uCommand == HH_DISPLAY_INDEX)
	{
		a_pszHelpFile = strHelpPath + "#<cmd=idx";
	}
	else if (uCommand == HH_DISPLAY_SEARCH)
	{
		a_pszHelpFile = strHelpPath + "#<cmd=fts";
	}
	else if (uCommand == HH_DISPLAY_TOC)
	{
		a_pszHelpFile = strHelpPath + "#<cmd=toc";
	}
	if (strWnd)
		a_pszHelpFile += ">>wnd=" + strWnd;

	if (a_pszHelpFile)
	{
		if (gbIE4)
			loadData(a_pszHelpFile);
		else if (gbNav4)
		{
			var sParam = "left="+screen.width+",top="+screen.height+",width=100,height=100";
			window.open(a_pszHelpFile, "__webCshStub", sParam);
		}
		else
		{
			var sParam = "left="+screen.width+",top="+screen.height+",width=100,height=100";
			if (gbIE5)
				window.open("about:blank", "__webCshStub", sParam);
			window.open(a_pszHelpFile, "__webCshStub");
		}
	}
}

function isServerBased(a_pszHelpFile)
{
	if (a_pszHelpFile.length > 0)
	{
		var nPos = a_pszHelpFile.lastIndexOf('.');
		if (nPos != -1 && a_pszHelpFile.length >= nPos + 4)
		{
			var sExt = a_pszHelpFile.substring(nPos, nPos + 4);
			if (sExt.toLowerCase() == ".htm")
			{
				return false;
			}
		}
	}
	return true;
}

function getElement(sID)
{
	if(document.getElementById)
		return document.getElementById(sID);
	else if(document.all)
		return document.all(sID);
	return null;
}

function loadData(sFileName)
{
	if(!getElement("dataDiv"))
	{
		if(!insertDataDiv())
		{
			gsFileName=sFileName;
			return;
		}
	}
	var sHTML="";
	if(gbMac)
		sHTML+="<iframe name=\"__WebHelpCshStub\" src=\""+sFileName+"\"></iframe>";
	else
		sHTML+="<iframe name=\"__WebHelpCshStub\" style=\"visibility:hidden;width:0;height:0\" src=\""+sFileName+"\"></iframe>";
	
	var oDivCon=getElement("dataDiv");
	if(oDivCon)
	{
		if(gbNav6)
		{
			if(oDivCon.getElementsByTagName&&oDivCon.getElementsByTagName("iFrame").length>0)
			{
				oDivCon.getElementsByTagName("iFrame")[0].src=sFileName;
			}
			else
				oDivCon.innerHTML=sHTML;
		}
		else
			oDivCon.innerHTML=sHTML;
	}
}

function insertDataDiv()
{
	var sHTML="";
	if(gbMac)
		sHTML+="<div id=dataDiv style=\"display:none;\"></div>";
	else
		sHTML+="<div id=dataDiv style=\"visibility:hidden\"></div>";

	document.body.insertAdjacentHTML("beforeEnd",sHTML);
	return true;
}


/**
 * OptionDisabledSupport
 * by Kaleb Walton (http://toserveman.kalebwalton.com)
 * Inspired by techniques from Alistair Lattimore's article which can be found at
 * http://www.lattimore.id.au/2005/07/01/select-option-disabled-and-the-javascript-solution/
 *
 * Creative Commons License URL: http://creativecommons.org/licenses/by/2.5/
 */
var OptionDisabledSupport = new function() {
  this.previouslySelectedIndices = new Array();
  this.init = function() {
    selects = document.getElementsByTagName("select");
    for (var i=0;i<selects.length;i++) {
      var select = selects[i];
      var oldOnClick = select.onclick;
      var oldOnChange = select.onchange;
      select.onclick = null;
      select.onchange = null;
      // Must execute the old onclick/onchange handlers after this one.
      // For some reason IE reverses the order you specify.
      if (oldOnClick)
        select.attachEvent ('onclick',function(e) {oldOnClick.apply(e.srcElement, arguments)})
      if (oldOnChange)
        select.attachEvent ('onchange',function(e) {oldOnChange.apply(e.srcElement, arguments)})
      select.attachEvent ('onclick',function(event) {OptionDisabledSupport.previouslySelectedIndices[event.srcElement] = event.srcElement.selectedIndex;})
      select.attachEvent ('onchange',function(event) {OptionDisabledSupport.handleSelect(event.srcElement)})
      for (var z=0;z<select.options.length;z++) {
        option = select.options[z];
        option.style.color = option.disabled ? "graytext" : option.style.color;
      }
      OptionDisabledSupport.handleSelect(select);
    }
  }
  this.handleSelect = function(select) {
    if (select.multiple) {
      for (var i=0;i<select.options.length;i++) {
        option = select.options[i];
        option.selected = option.disabled && option.selected ? false : option.selected;
      }
    } else {
      if (select.selectedIndex > -1) {
        if (select.options[select.selectedIndex].disabled) {
          select.selectedIndex = OptionDisabledSupport.previouslySelectedIndices[select];
          if (select.options[select.selectedIndex].disabled) {
            select.selectedIndex = -1;
          }
        }
      }
    }
  }
}


//http://www.fiendish.demon.co.uk/html/javascript/layerfloat.html
//http://www.fiendish.demon.co.uk/downloads.html#javascript
/////////////////////////////////////////////////////////////////////

var FloatLayers       = new Array();
var FloatLayersByName = new Array();

function addFloatLayer(n,offX,offY,spd){new FloatLayer(n,offX,offY,spd);}
function getFloatLayer(n){return FloatLayersByName[n];}
function alignFloatLayers(){for(var i=0;i<FloatLayers.length;i++)FloatLayers[i].align();}

function getXCoord(el) {
	x=0;
	while(el){
		x+=el.offsetLeft;
		el=el.offsetParent;
	}
	return x;
}
function getYCoord(el) {
	y=0;
	while(el){
		y+=el.offsetTop;
		el=el.offsetParent;
	}
	return y;
}

/////////////////////////////////////////////////////////////////////

FloatLayer.prototype.setFloatToTop=setTopFloater;
FloatLayer.prototype.setFloatToBottom=setBottomFloater;
FloatLayer.prototype.setFloatToLeft=setLeftFloater;
FloatLayer.prototype.setFloatToRight=setRightFloater;
FloatLayer.prototype.initialize=defineFloater;
FloatLayer.prototype.adjust=adjustFloater;
FloatLayer.prototype.align=alignFloater;

function FloatLayer(n, offX, offY, spd) {
	this.index=FloatLayers.length;

	FloatLayers.push(this);
	FloatLayersByName[n] = this;

	this.name    = n;
	this.floatX  = 0;
	this.floatY  = 0;
	this.tm      = null;
	this.steps   = spd;
	this.alignHorizontal=(offX>=0) ? leftFloater : rightFloater;
	this.alignVertical  =(offY>=0) ? topFloater : bottomFloater;
	this.ifloatX = Math.abs(offX);
	this.ifloatY = Math.abs(offY);
}

/////////////////////////////////////////////////////////////////////

function defineFloater(){
	this.layer  = document.getElementById(this.name);
	this.width  = this.layer.offsetWidth;
	this.height = this.layer.offsetHeight;
	this.prevX  = this.layer.offsetLeft;
	this.prevY  = this.layer.offsetTop;
}

function adjustFloater() {
	this.tm=null;
	if(this.layer.style.position!='absolute')return;

	var dx = Math.abs(this.floatX-this.prevX);
	var dy = Math.abs(this.floatY-this.prevY);

	if (dx < this.steps/2)
		cx = (dx>=1) ? 1 : 0;
	else
		cx = Math.round(dx/this.steps);

	if (dy < this.steps/2)
		cy = (dy>=1) ? 1 : 0;
	else
		cy = Math.round(dy/this.steps);

	if (this.floatX > this.prevX)
		this.prevX += cx;
	else if (this.floatX < this.prevX)
		this.prevX -= cx;

	if (this.floatY > this.prevY)
		this.prevY += cy;
	else if (this.floatY < this.prevY)
		this.prevY -= cy;

	this.layer.style.left = this.prevX;
	this.layer.style.top  = this.prevY;

	if (cx!=0||cy!=0){
		if(this.tm==null)this.tm=setTimeout('FloatLayers['+this.index+'].adjust()',50);
	}else
		alignFloatLayers();
}

function setLeftFloater(){this.alignHorizontal=leftFloater;}
function setRightFloater(){this.alignHorizontal=rightFloater;}
function setTopFloater(){this.alignVertical=topFloater;}
function setBottomFloater(){this.alignVertical=bottomFloater;}

function leftFloater(){this.floatX = document.body.scrollLeft + this.ifloatX;}
function topFloater(){this.floatY = document.body.scrollTop + this.ifloatY;}
function rightFloater(){this.floatX = document.body.scrollLeft + document.body.clientWidth - this.ifloatX - this.width;}
function bottomFloater(){this.floatY = document.body.scrollTop + document.body.clientHeight - this.ifloatY - this.height;}

function alignFloater(){
	if(this.layer==null)this.initialize();
	this.alignHorizontal();
	this.alignVertical();
	if(this.prevX!=this.floatX || this.prevY!=this.floatY){
		if(this.tm==null)this.tm=setTimeout('FloatLayers['+this.index+'].adjust()',50);
	}
}


//Copyright Patrick Roebuck roebuck@v-page.com www.v-page.com
var newWindow;
var newWindowSimple;
var helpWindow;
var helpWindowSimple;
var strProjectFramesPagePlus = "help.htm#";//defines the name of the start or frameset page for the WebHelp project
var strProjectPath;
var strHelpPage;
var isNav4 = (navigator.appName == "Netscape" && parseInt(navigator.appVersion) == 4);

//opens new window with URL strProjectPath + "help.htm#" + strHelpPage
function callHelp(strProjectPath,strHelpPage){
	var strTriHelpWindowOptions = ",toolbar=yes";//defines whether to display the toolbar (yes) or hides it (no)
	strTriHelpWindowOptions += ",top=40";//defines the distance from the top of the screen that the browser window is opened
	strTriHelpWindowOptions += ",left=25";//defines the distance from the left of the screen that the browser window is opened
	strTriHelpWindowOptions += ",width=850";//defines the width of the browser window
	strTriHelpWindowOptions += ",height=520";//defines the height of the browser window
	strTriHelpWindowOptions += ",scrollbars=1";//defines whether to allow scrollbars
	strTriHelpWindowOptions += ",menubar=1";//defines whether to show the menu bar
	strTriHelpWindowOptions += ",resizable=yes";//defines whether the window is resizable
	strTriHelpWindowOptions += ",location=yes";//defines whether the location entry bar shows so you can enter a URL
	if (isNav4){helpWindow = window.open("", newWindow, strTriHelpWindowOptions);
	if (helpWindowSimple && !helpWindowSimple.closed){helpWindowSimple.close();}
	helpWindow.close();
	helpWindow = window.open("", newWindow, strTriHelpWindowOptions);
	helpWindow.location.href = strProjectPath + strProjectFramesPagePlus + strHelpPage;
	helpWindow.focus();
	}
	else if (helpWindow == null || helpWindow.closed){
	if (helpWindowSimple && !helpWindowSimple.closed){helpWindowSimple.close();}
	helpWindow = window.open("", newWindow, strTriHelpWindowOptions);
	helpWindow.location.href = strProjectPath + strProjectFramesPagePlus + strHelpPage;
	}
	else if (helpWindow && !helpWindow.closed){
	if (helpWindowSimple && !helpWindowSimple.closed){helpWindowSimple.close();}
	helpWindow.location.href = strProjectPath + strProjectFramesPagePlus + strHelpPage;
	helpWindow.focus();
	}
}

//opens new window with URL strProjectPath + strHelpPage
function callHelpSimple(strProjectPath,strHelpPage){
	var strSingleHelpWindowOptions = ",toolbar=no";//defines whether to display the toolbar (yes) or hides it (no)
	strSingleHelpWindowOptions += ",top=40";//defines the distance from the top of the screen that the browser window is opened
	strSingleHelpWindowOptions += ",left=225";//defines the distance from the left of the screen that the browser window is opened
	strSingleHelpWindowOptions += ",width=550";//defines the width of the browser window
	strSingleHelpWindowOptions += ",height=500";//defines the height of the browser window
	if (isNav4){helpWindowSimple = window.open("", newWindowSimple, strSingleHelpWindowOptions);
	if (helpWindow && !helpWindow.closed){helpWindow.close();}
	helpWindowSimple.close();
	helpWindowSimple = window.open("", newWindowSimple, strSingleHelpWindowOptions);
	helpWindowSimple.location.href = strProjectPath + strHelpPage;
	helpWindowSimple.focus();
	}
	else if (helpWindowSimple == null || helpWindowSimple.closed){
	if (helpWindow && !helpWindow.closed){helpWindow.close();}
	helpWindowSimple = window.open("", newWindowSimple, strSingleHelpWindowOptions);
	helpWindowSimple.location.href = strProjectPath  + strHelpPage;
	}
	else if (helpWindowSimple && !helpWindowSimple.closed){
	if (helpWindow && !helpWindow.closed){helpWindow.close();}
	helpWindowSimple.parent.location.href = strProjectPath + strHelpPage;
	helpWindowSimple.focus();
	}
}



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
// Assumes inclusion of "jsrsa" scripts

function doLogin(n,e,form) {
  var rsa = new RSAKey();
  rsa.setPublic(n,e);
  encryptField(rsa, form, form.crypted, form.password, "txt1");
  form.submit();
  return false;
}

function doPreauthenticatedChange(n, e, form) {
    var rsa = new RSAKey();
    rsa.setPublic(n,e);
    encryptField(rsa, form, form.crypted, form.password, "txt1");
    encryptField(rsa, form, form.crypted_confirmation, form.password_confirmation, "txt2");
    form.submit();
    return false;
}

function doLoginAndChange(n, e, form) {
    var rsa = new RSAKey();
    rsa.setPublic(n,e);
    encryptField(rsa, form, form.crypted, form.password, "txt1");
    encryptField(rsa, form, form.crypted_new_password, form.new_password, "txt2");
    encryptField(rsa, form, form.crypted_new_password_confirm, form.new_password_confirm, "txt3");
    form.submit();
    return false;
}

function encryptPasswordOnly(n, e, form) {
        var rsa = new RSAKey();
        rsa.setPublic(n,e);
        encryptField(rsa, form, form.crypted, form.password, "txt1");
        encryptField(rsa, form, form.crypted_new_password, form.new_password, "txt2");
        encryptField(rsa, form, form.crypted_new_password_confirm, form.new_password_confirm, "txt3");
}

function doChangePassword(n, e, form) {
    encryptPasswordOnly(n, e, form);
    form.submit();
    return false;
}

function doDeleteAccount(n, e, form) {
    var rsa = new RSAKey();
    rsa.setPublic(n,e);
    encryptField(rsa, form, form.crypted, form.password, "txt1");
    form.submit();
    return false;
}

function encryptField(rsaKey, form, crypted_input, text_input, digits) {
        var res = text_input ? rsaKey.encrypt(text_input.value) : null;
        if (res) {
                crypted_input.value = res;
                text_input.value = digits + digits + digits + digits; //digits should be unique 4 chars
        }
}


 //***********************************************************************************************************************************/
//      LyteBox v3.20
//
//       Author: Markus F. Hay
//  Website: http://www.dolem.com/lytebox
//         Date: July 12, 2007
//      License: Creative Commons Attribution 3.0 License (http://creativecommons.org/licenses/by/3.0/)
// Browsers: Tested successfully on WinXP with the following browsers (using no DOCTYPE, Strict DOCTYPE, and Transitional DOCTYPE):
//                              * Firefox: 2.0.0.4, 1.5.0.12
//                              * Internet Explorer: 7.0, 6.0 SP2, 5.5 SP2
//                              * Opera: 9.21
//
// Releases: For up-to-date and complete release information, visit http://www.dolem.com/forum/showthread.php?tid=62
//                              * v3.20 (07/11/07)
//                              * v3.10 (05/28/07)
//                              * v3.00 (05/15/07)
//                              * v2.02 (11/13/06)
//
//   Credit: LyteBox was originally derived from the Lightbox class (v2.02) that was written by Lokesh Dhakar. For more
//                       information please visit http://huddletogether.com/projects/lightbox2/
/// The original work has been modified by Tableau Software, Inc.
//***********************************************************************************************************************************/
Array.prototype.removeDuplicates = function () { for (var i = 1; i < this.length; i++) { if (this[i][0] == this[i-1][0]) { this.splice(i,1); } } }
Array.prototype.empty = function () { for (var i = 0; i <= this.length; i++) { this.shift(); } }
String.prototype.trim = function () { return this.replace(/^\s+|\s+$/g, ''); }

function LyteBox() {
        /*** Start Global Configuration ***/
                this.theme                      = 'grey';       // themes: grey (default), red, green, blue, gold
                this.hideFlash                  = true;         // controls whether or not Flash objects should be hidden
                this.outerBorder                = true;         // controls whether to show the outer grey (or theme) border
                this.resizeSpeed                = 8;            // controls the speed of the image resizing (1=slowest and 10=fastest)
                this.maxOpacity                 = 40;           // higher opacity = darker overlay, lower opacity = lighter overlay
                this.navType                    = 2;            // 1 = "Prev/Next" buttons on top left and left (default), 2 = "<< prev | next >>" links next to image number
                this.autoResize                 = false;                // controls whether or not images should be resized if larger than the browser window dimensions
                this.doAnimations               = false;                // controls whether or not "animate" Lytebox, i.e. resize transition between images, fade in/out effects, etc.

                this.borderSize                 = 2;            // if you adjust the padding in the CSS, you will need to update this variable -- otherwise, leave this alone...
        /*** End Global Configuration ***/

        /*** Configure Slideshow Options ***/
                this.slideInterval              = 4000;         // Change value (milliseconds) to increase/decrease the time between "slides" (10000 = 10 seconds)
                this.showNavigation             = true;         // true to display Next/Prev buttons/text during slideshow, false to hide
                this.showClose                  = true;         // true to display the Close button, false to hide
                this.showDetails                = true;         // true to display image details (caption, count), false to hide
                this.showPlayPause              = true;         // true to display pause/play buttons next to close button, false to hide
                this.autoEnd                    = true;         // true to automatically close Lytebox after the last image is reached, false to keep open
                this.pauseOnNextClick   = false;        // true to pause the slideshow when the "Next" button is clicked
        this.pauseOnPrevClick   = true;         // true to pause the slideshow when the "Prev" button is clicked
        /*** End Slideshow Configuration ***/

        if(this.resizeSpeed > 10) { this.resizeSpeed = 10; }
        if(this.resizeSpeed < 1) { resizeSpeed = 1; }
        this.resizeDuration = (11 - this.resizeSpeed) * 0.15;
        this.resizeWTimerArray          = new Array();
        this.resizeWTimerCount          = 0;
        this.resizeHTimerArray          = new Array();
        this.resizeHTimerCount          = 0;
        this.showContentTimerArray      = new Array();
        this.showContentTimerCount      = 0;
        this.overlayTimerArray          = new Array();
        this.overlayTimerCount          = 0;
        this.imageTimerArray            = new Array();
        this.imageTimerCount            = 0;
        this.timerIDArray                       = new Array();
        this.timerIDCount                       = 0;
        this.slideshowIDArray           = new Array();
        this.slideshowIDCount           = 0;
        this.imageArray  = new Array();
        this.activeImage = null;
        this.slideArray  = new Array();
        this.activeSlide = null;
        this.frameArray  = new Array();
        this.activeFrame = null;
        this.checkFrame();
        this.isSlideshow = false;
        this.isLyteframe = false;
        /*@cc_on
                /*@if (@_jscript)
                        this.ie = (document.all && !window.opera) ? true : false;
                /*@else @*/
                        this.ie = false;
                /*@end
        @*/
        this.ie7 = (this.ie && window.XMLHttpRequest);
        this.initialize();

        this.previousParent = null;
        this.adoptee = null;
        this.started = false;
        this.confirmed = false;
        this.confirmCallback = null;
        this.confirmPositive = tab.wgappStrings.yes;
        this.confirmNegative = tab.wgappStrings.no;
}
LyteBox.prototype.initialize = function() {
      //if we've already initialized, do nothing
      if (this.doc.getElementById('lbOverlay')) return;

      this.updateLyteboxItems();
      var objBody = this.doc.getElementsByTagName("body").item(0);
      if (this.doc.getElementById('lbOverlay')) {
              objBody.removeChild(this.doc.getElementById("lbOverlay"));
              objBody.removeChild(this.doc.getElementById("lbMain"));
      }
     var objOverlay = this.doc.createElement("div");
             objOverlay.setAttribute('id','lbOverlay');
             objOverlay.setAttribute((this.ie ? 'className' : 'class'), this.theme);
             objOverlay.style.display = 'none';
             objBody.appendChild(objOverlay);
     var objLytebox = this.doc.createElement("div");
             objLytebox.setAttribute('id','lbMain');
             objLytebox.style.display = 'none';
             objBody.appendChild(objLytebox);
     var objOuterContainer = this.doc.createElement("div");
             objOuterContainer.setAttribute('id','lbOuterContainer');
             objOuterContainer.setAttribute((this.ie ? 'className' : 'class'), this.theme);
             objLytebox.appendChild(objOuterContainer);
     var objIframeContainer = this.doc.createElement("div");
             objIframeContainer.setAttribute('id','lbIframeContainer');
             objIframeContainer.style.display = 'none';
             objOuterContainer.appendChild(objIframeContainer);
     var objIframe = this.doc.createElement("iframe");
             objIframe.setAttribute('id','lbIframe');
             objIframe.setAttribute('name','lbIframe');
             objIframe.style.display = 'none';
             objIframeContainer.appendChild(objIframe);
    var objImageContainer = this.doc.createElement("div");
             objImageContainer.setAttribute('id','lbImageContainer');
             objOuterContainer.appendChild(objImageContainer);
     var objLyteboxImage = this.doc.createElement("img");
             objLyteboxImage.setAttribute('id','lbImage');
             objImageContainer.appendChild(objLyteboxImage);
     var objLoading = this.doc.createElement("div");
             objLoading.setAttribute('id','lbLoading');
             objOuterContainer.appendChild(objLoading);
     var objDetailsContainer = this.doc.createElement("div");
             objDetailsContainer.setAttribute('id','lbDetailsContainer');
             objDetailsContainer.setAttribute((this.ie ? 'className' : 'class'), this.theme);
             objLytebox.appendChild(objDetailsContainer);
     var objDetailsData =this.doc.createElement("div");
             objDetailsData.setAttribute('id','lbDetailsData');
             objDetailsData.setAttribute((this.ie ? 'className' : 'class'), this.theme);
             objDetailsContainer.appendChild(objDetailsData);
     var objDetails = this.doc.createElement("div");
             objDetails.setAttribute('id','lbDetails');
             objDetailsData.appendChild(objDetails);
     var objCaption = this.doc.createElement("span");
             objCaption.setAttribute('id','lbCaption');
             objDetails.appendChild(objCaption);
     var objHoverNav = this.doc.createElement("div");
             objHoverNav.setAttribute('id','lbHoverNav');
             objImageContainer.appendChild(objHoverNav);
     var objBottomNav = this.doc.createElement("div");
             objBottomNav.setAttribute('id','lbBottomNav');
             objDetailsData.appendChild(objBottomNav);
     var objPrev = this.doc.createElement("a");
             objPrev.setAttribute('id','lbPrev');
             objPrev.setAttribute((this.ie ? 'className' : 'class'), this.theme);
             objPrev.setAttribute('href','#');
             objHoverNav.appendChild(objPrev);
     var objNext = this.doc.createElement("a");
             objNext.setAttribute('id','lbNext');
             objNext.setAttribute((this.ie ? 'className' : 'class'), this.theme);
             objNext.setAttribute('href','#');
             objHoverNav.appendChild(objNext);
     var objNumberDisplay = this.doc.createElement("span");
             objNumberDisplay.setAttribute('id','lbNumberDisplay');
             objDetails.appendChild(objNumberDisplay);
     var objNavDisplay = this.doc.createElement("span");
             objNavDisplay.setAttribute('id','lbNavDisplay');
             objNavDisplay.style.display = 'none';
             objDetails.appendChild(objNavDisplay);
     var objClose = this.doc.createElement("a");
             objClose.setAttribute('id','lbClose');
             objClose.setAttribute((this.ie ? 'className' : 'class'), this.theme);
             objClose.setAttribute('href','#');
             objBottomNav.appendChild(objClose);
        var closeWindow = this.doc.createTextNode(tab.wgappStrings.DismissButtonText);
        objClose.appendChild(closeWindow);
     var objPause = this.doc.createElement("a");
             objPause.setAttribute('id','lbPause');
             objPause.setAttribute((this.ie ? 'className' : 'class'), this.theme);
             objPause.setAttribute('href','#');
             objPause.style.display = 'none';
             objBottomNav.appendChild(objPause);
     var objPlay = this.doc.createElement("a");
             objPlay.setAttribute('id','lbPlay');
             objPlay.setAttribute((this.ie ? 'className' : 'class'), this.theme);
             objPlay.setAttribute('href','#');
             objPlay.style.display = 'none';
             objBottomNav.appendChild(objPlay);

     var objOK = this.doc.createElement("a");
             objOK.setAttribute('id','lbOK');
             objOK.setAttribute((this.ie ? 'className' : 'class'), this.theme);
             objOK.setAttribute('href','#');
             objBottomNav.appendChild(objOK);

     var objCancel = this.doc.createElement("a");
             objCancel.setAttribute('id','lbCancel');
             objCancel.setAttribute((this.ie ? 'className' : 'class'), this.theme);
             objCancel.setAttribute('href','#');
             objBottomNav.appendChild(objCancel);

};
LyteBox.prototype.updateLyteboxItems = function() {
        var anchors = (this.isFrame) ? window.parent.frames[window.name].document.getElementsByTagName('a') : document.getElementsByTagName('a');
        for (var i = 0; i < anchors.length; i++) {
                var anchor = anchors[i];
                var relAttribute = String(anchor.getAttribute('rel'));
                if (anchor.getAttribute('href')) {
                        if (relAttribute.toLowerCase().match('lytebox')) {
                                anchor.onclick = function () { myLytebox.start(this, false, false); return false; }
                        } else if (relAttribute.toLowerCase().match('lyteshow')) {
                                anchor.onclick = function () { myLytebox.start(this, true, false); return false; }
                        } else if (relAttribute.toLowerCase().match('lyteframe')) {
                                anchor.onclick = function () { myLytebox.start(this, false, true); return false; }
                        }
                }
        }
};
LyteBox.prototype.start = function(imageLink, doSlide, doFrame) {
        if (this.ie && !this.ie7) {     this.toggleSelects('hide');     }
        if (this.hideFlash) { this.toggleFlash('hide'); }
        this.isLyteframe = (doFrame ? true : false);
        var pageSize    = this.getPageSize();
        var objOverlay  = this.doc.getElementById('lbOverlay');
        var objBody             = this.doc.getElementsByTagName("body").item(0);
        objOverlay.style.height = pageSize[1] + "px";
        objOverlay.style.display = '';
        this.appear('lbOverlay', (this.doAnimations ? 0 : this.maxOpacity));
        var anchors = (this.isFrame) ? window.parent.frames[window.name].document.getElementsByTagName('a') : document.getElementsByTagName('a');
        if (this.isLyteframe) {
                this.frameArray = [];
                this.frameNum = 0;
                if ((imageLink.getAttribute('rel') == 'lyteframe')) {
                        var rev = imageLink.getAttribute('rev');
                        this.frameArray.push(new Array(imageLink.getAttribute('href'), imageLink.getAttribute('title'), (rev == null || rev == '' ? 'width: 400px; height: 400px; scrolling: auto;' : rev)));
                } else {
                        if (imageLink.getAttribute('rel').indexOf('lyteframe') != -1) {
                                for (var i = 0; i < anchors.length; i++) {
                                        var anchor = anchors[i];
                                        if (anchor.getAttribute('href') && (anchor.getAttribute('rel') == imageLink.getAttribute('rel'))) {
                                                var rev = anchor.getAttribute('rev');
                                                this.frameArray.push(new Array(anchor.getAttribute('href'), anchor.getAttribute('title'), (rev == null || rev == '' ? 'width: 400px; height: 400px; scrolling: auto;' : rev)));
                                        }
                                }
                                this.frameArray.removeDuplicates();
                                while(this.frameArray[this.frameNum][0] != imageLink.getAttribute('href')) { this.frameNum++; }
                        }
                }
        } else {
                this.imageArray = [];
                this.imageNum = 0;
                this.slideArray = [];
                this.slideNum = 0;
                if ((imageLink.getAttribute('rel') == 'lytebox')) {
                        this.imageArray.push(new Array(imageLink.getAttribute('href'), imageLink.getAttribute('title')));
                        this.adoptee = this.doc.getElementById(imageLink.getAttribute('adoptee'));

                } else {
                        if (imageLink.getAttribute('rel').indexOf('lytebox') != -1) {
                                for (var i = 0; i < anchors.length; i++) {
                                        var anchor = anchors[i];
                                        if (anchor.getAttribute('href') && (anchor.getAttribute('rel') == imageLink.getAttribute('rel'))) {
                                                this.imageArray.push(new Array(anchor.getAttribute('href'), anchor.getAttribute('title')));
                                        }
                                }
                                this.imageArray.removeDuplicates();
                                while(this.imageArray[this.imageNum][0] != imageLink.getAttribute('href')) { this.imageNum++; }
                        }
                        if (imageLink.getAttribute('rel').indexOf('lyteshow') != -1) {
                                for (var i = 0; i < anchors.length; i++) {
                                        var anchor = anchors[i];
                                        if (anchor.getAttribute('href') && (anchor.getAttribute('rel') == imageLink.getAttribute('rel'))) {
                                                this.slideArray.push(new Array(anchor.getAttribute('href'), anchor.getAttribute('title')));
                                        }
                                }
                                this.slideArray.removeDuplicates();
                                while(this.slideArray[this.slideNum][0] != imageLink.getAttribute('href')) { this.slideNum++; }
                        }
                }
        }
        var object = this.doc.getElementById('lbMain');
                object.style.top = (this.getPageScroll() + (pageSize[3] / 10) + 30) + "px";
                object.style.display = '';
        if (!this.outerBorder) {
                this.doc.getElementById('lbOuterContainer').style.border = 'none';
                this.doc.getElementById('lbDetailsContainer').style.border = 'none';
        } else {
                this.doc.getElementById('lbOuterContainer').style.borderBottom = '';
                this.doc.getElementById('lbOuterContainer').setAttribute((this.ie ? 'className' : 'class'), this.theme);
        }
        //      this.doc.getElementById('lbOverlay').onclick = function() { myLytebox.end(); return false; }
        this.doc.getElementById('lbMain').onclick = function(e) {
                var e = e;
                if (!e) {
                        if (window.parent.frames[window.name] && (parent.document.getElementsByTagName('frameset').length <= 0)) {
                                e = window.parent.window.event;
                        } else {
                                e = window.event;
                        }
                }
                var id = (e.target ? e.target.id : e.srcElement.id);
                //                if (id == 'lbMain') { myLytebox.end(); return false; }
        }
        this.doc.getElementById('lbClose').onclick = function() { myLytebox.end(); return false; }

        this.doc.getElementById('lbOK').onclick = function() { myLytebox.confirmOK(); return false; }
        this.doc.getElementById('lbCancel').onclick = function() { myLytebox.confirmCancel(); return false; }

        this.doc.getElementById('lbPause').onclick = function() { myLytebox.togglePlayPause("lbPause", "lbPlay"); return false; }
        this.doc.getElementById('lbPlay').onclick = function() { myLytebox.togglePlayPause("lbPlay", "lbPause"); return false; }
        this.isSlideshow = doSlide;
        this.isPaused = (this.slideNum != 0 ? true : false);
        if (this.isSlideshow && this.showPlayPause && this.isPaused) {
                this.doc.getElementById('lbPlay').style.display = '';
                this.doc.getElementById('lbPause').style.display = 'none';
        }
        if (this.isLyteframe) {
                this.changeContent(this.frameNum);
        } else {
                if (this.isSlideshow) {
                        this.changeContent(this.slideNum);
                } else {
                        this.changeContent(this.imageNum);
                }
        }
        this.started = true;
};
LyteBox.prototype.changeContent = function(imageNum) {
        if (this.isSlideshow) {
                for (var i = 0; i < this.slideshowIDCount; i++) { window.clearTimeout(this.slideshowIDArray[i]); }
        }
        this.activeImage = this.activeSlide = this.activeFrame = imageNum;
        if (!this.outerBorder) {
                this.doc.getElementById('lbOuterContainer').style.border = 'none';
                this.doc.getElementById('lbDetailsContainer').style.border = 'none';
        } else {
                this.doc.getElementById('lbOuterContainer').style.borderBottom = '';
                this.doc.getElementById('lbOuterContainer').setAttribute((this.ie ? 'className' : 'class'), this.theme);
        }
        this.doc.getElementById('lbLoading').style.display = '';
        this.doc.getElementById('lbImage').style.display = 'none';
        this.doc.getElementById('lbIframe').style.display = 'none';
        this.doc.getElementById('lbPrev').style.display = 'none';
        this.doc.getElementById('lbNext').style.display = 'none';
        this.doc.getElementById('lbIframeContainer').style.display = 'none';
        this.doc.getElementById('lbDetailsContainer').style.display = 'none';
        this.doc.getElementById('lbNumberDisplay').style.display = 'none';
        if (this.navType == 2 || this.isLyteframe) {
                object = this.doc.getElementById('lbNavDisplay');
                object.innerHTML = '&nbsp;&nbsp;&nbsp;<span id="lbPrev2_Off" style="display: none;" class="' + this.theme + '">&laquo; prev</span><a href="#" id="lbPrev2" class="' + this.theme + '" style="display: none;">&laquo; prev</a> <b id="lbSpacer" class="' + this.theme + '">||</b> <span id="lbNext2_Off" style="display: none;" class="' + this.theme + '">next &raquo;</span><a href="#" id="lbNext2" class="' + this.theme + '" style="display: none;">next &raquo;</a>';
                object.style.display = 'none';
        }
        if (this.isLyteframe) {
                var iframe = myLytebox.doc.getElementById('lbIframe');
                var styles = this.frameArray[this.activeFrame][2];
                var aStyles = styles.split(';');
                for (var i = 0; i < aStyles.length; i++) {
                        if (aStyles[i].indexOf('width:') >= 0) {
                                var w = aStyles[i].replace('width:', '');
                                iframe.width = w.trim();
                        } else if (aStyles[i].indexOf('height:') >= 0) {
                                var h = aStyles[i].replace('height:', '');
                                iframe.height = h.trim();
                        } else if (aStyles[i].indexOf('scrolling:') >= 0) {
                                var s = aStyles[i].replace('scrolling:', '');
                                iframe.scrolling = s.trim();
                        } else if (aStyles[i].indexOf('border:') >= 0) {
                                // Not implemented yet, as there are cross-platform issues with setting the border (from a GUI standpoint)
                                //var b = aStyles[i].replace('border:', '');
                                //iframe.style.border = b.trim();
                        }
                }
                iframe.src = this.frameArray[this.activeFrame][0];
                this.resizeContainer(parseInt(iframe.width), parseInt(iframe.height));
        } else {
                imgPreloader = new Image();
                imgPreloader.onload = function() {
                        var imageWidth = imgPreloader.width;
                        var imageHeight = imgPreloader.height;
                        if (myLytebox.autoResize) {
                                var pagesize = myLytebox.getPageSize();
                                var x = pagesize[2] - 150;
                                var y = pagesize[3] - 150;
                                if (imageWidth > x) {
                                        imageHeight = Math.round(imageHeight * (x / imageWidth));
                                        imageWidth = x;
                                        if (imageHeight > y) {
                                                imageWidth = Math.round(imageWidth * (y / imageHeight));
                                                imageHeight = y;
                                        }
                                } else if (imageHeight > y) {
                                        imageWidth = Math.round(imageWidth * (y / imageHeight));
                                        imageHeight = y;
                                        if (imageWidth > x) {
                                                imageHeight = Math.round(imageHeight * (x / imageWidth));
                                                imageWidth = x;
                                        }
                                }
                        }
                        var lbImage = myLytebox.doc.getElementById('lbImage')
                        lbImage.src = (myLytebox.isSlideshow ? myLytebox.slideArray[myLytebox.activeSlide][0] : myLytebox.imageArray[myLytebox.activeImage][0]);
                        lbImage.width = imageWidth;
                        lbImage.height = imageHeight;
                        myLytebox.resizeContainer(imageWidth, imageHeight);
                        imgPreloader.onload = function() {};
                }
                imgPreloader.src = (this.isSlideshow ? this.slideArray[this.activeSlide][0] : this.imageArray[this.activeImage][0]);
        }
};
LyteBox.prototype.resizeContainer = function(imgWidth, imgHeight) {
        this.wCur = this.doc.getElementById('lbOuterContainer').offsetWidth;
        this.hCur = this.doc.getElementById('lbOuterContainer').offsetHeight;
        this.xScale = ((imgWidth  + (this.borderSize * 2)) / this.wCur) * 100;
        this.yScale = ((imgHeight  + (this.borderSize * 2)) / this.hCur) * 100;
        var wDiff = (this.wCur - this.borderSize * 2) - imgWidth;
        var hDiff = (this.hCur - this.borderSize * 2) - imgHeight;
        if (!(hDiff == 0)) {
                this.hDone = false;
                this.resizeH('lbOuterContainer', this.hCur, imgHeight + this.borderSize*2, this.getPixelRate(this.hCur, imgHeight));
        } else {
                this.hDone = true;
        }
        if (!(wDiff == 0)) {
                this.wDone = false;
                this.resizeW('lbOuterContainer', this.wCur, imgWidth + this.borderSize*2, this.getPixelRate(this.wCur, imgWidth));
        } else {
                this.wDone = true;
        }
        if ((hDiff == 0) && (wDiff == 0)) {
                if (this.ie){ this.pause(250); } else { this.pause(100); }
        }
        this.doc.getElementById('lbPrev').style.height = imgHeight + "px";
        this.doc.getElementById('lbNext').style.height = imgHeight + "px";
        this.doc.getElementById('lbDetailsContainer').style.width = (imgWidth + (this.borderSize * 2) + (this.ie && this.doc.compatMode == "BackCompat" && this.outerBorder ? 2 : 0)) + "px";
        this.showContent();
};
LyteBox.prototype.showContent = function() {
        if (this.wDone && this.hDone) {
                for (var i = 0; i < this.showContentTimerCount; i++) { window.clearTimeout(this.showContentTimerArray[i]); }
                if (this.outerBorder) {
                        this.doc.getElementById('lbOuterContainer').style.borderBottom = 'none';
                }
                this.doc.getElementById('lbLoading').style.display = 'none';
                if (this.isLyteframe) {
                        this.doc.getElementById('lbIframe').style.display = '';
                        this.appear('lbIframe', (this.doAnimations ? 0 : 100));
                } else {
                        this.doc.getElementById('lbImage').style.display = '';
                        this.appear('lbImage', (this.doAnimations ? 0 : 100));
                        this.preloadNeighborImages();
                }
                if (this.isSlideshow) {
                        if(this.activeSlide == (this.slideArray.length - 1)) {
                                if (this.autoEnd) {
                                        this.slideshowIDArray[this.slideshowIDCount++] = setTimeout("myLytebox.end('slideshow')", this.slideInterval);
                                }
                        } else {
                                if (!this.isPaused) {
                                        this.slideshowIDArray[this.slideshowIDCount++] = setTimeout("myLytebox.changeContent("+(this.activeSlide+1)+")", this.slideInterval);
                                }
                        }
                        this.doc.getElementById('lbHoverNav').style.display = (this.showNavigation && this.navType == 1 ? '' : 'none');
                        this.doc.getElementById('lbClose').style.display = (this.showClose ? '' : 'none');
                        this.doc.getElementById('lbOK').style.display = 'none';
                        this.doc.getElementById('lbCancel').style.display = 'none';
                        this.doc.getElementById('lbDetails').style.display = (this.showDetails ? '' : 'none');
                        this.doc.getElementById('lbPause').style.display = (this.showPlayPause && !this.isPaused ? '' : 'none');
                        this.doc.getElementById('lbPlay').style.display = (this.showPlayPause && !this.isPaused ? 'none' : '');
                        this.doc.getElementById('lbNavDisplay').style.display = (this.showNavigation && this.navType == 2 ? '' : 'none');
                } else {
                        this.doc.getElementById('lbHoverNav').style.display = (this.navType == 1 && !this.isLyteframe ? '' : 'none');
                        if ((this.navType == 2 && !this.isLyteframe && this.imageArray.length > 1) || (this.frameArray.length > 1 && this.isLyteframe)) {
                                this.doc.getElementById('lbNavDisplay').style.display = '';
                        } else {
                                this.doc.getElementById('lbNavDisplay').style.display = 'none';
                        }
                        this.doc.getElementById('lbClose').style.display = ((null != this.confirmCallback) ? 'none' : (this.showClose ? '' : 'none'));
                        this.doc.getElementById('lbDetails').style.display = '';
                        this.doc.getElementById('lbPause').style.display = 'none';
                        this.doc.getElementById('lbPlay').style.display = 'none';

                        this.doc.getElementById('lbOK').style.display = ((null != this.confirmCallback) ? '' : 'none');
                        this.doc.getElementById('lbCancel').style.display = ((null != this.confirmCallback) ? '' : 'none');


                }
                this.doc.getElementById('lbImageContainer').style.display = (this.isLyteframe ? 'none' : '');
                this.doc.getElementById('lbIframeContainer').style.display = (this.isLyteframe ? '' : 'none');
                // B27306 - hack to get the link in the custom HTML focus
                var focus_item = this.doc.getElementById('lytebox_focus');
                if( focus_item ) {
                  focus_item.focus();
                }
        } else {
                this.showContentTimerArray[this.showContentTimerCount++] = setTimeout("myLytebox.showContent()", 200);
        }
};
LyteBox.prototype.updateDetails = function() {
        var object = this.doc.getElementById('lbCaption');
        var sTitle = (this.isSlideshow ? this.slideArray[this.activeSlide][1] : (this.isLyteframe ? this.frameArray[this.activeFrame][1] : this.imageArray[this.activeImage][1]));
        object.style.display = '';
        object.innerHTML = '<div id="lbTitle">' + (sTitle == null ? '' : sTitle) + '</div>';
        this.takeAdoptee();
        this.updateNav();
        this.doc.getElementById('lbDetailsContainer').style.display = '';
        object = this.doc.getElementById('lbNumberDisplay');
        if (this.isSlideshow && this.slideArray.length > 1) {
                object.style.display = '';
                object.innerHTML = "Image " + eval(this.activeSlide + 1) + " of " + this.slideArray.length;
                this.doc.getElementById('lbNavDisplay').style.display = (this.navType == 2 && this.showNavigation ? '' : 'none');
        } else if (this.imageArray.length > 1 && !this.isLyteframe) {
                object.style.display = '';
                object.innerHTML = "Image " + eval(this.activeImage + 1) + " of " + this.imageArray.length;
                this.doc.getElementById('lbNavDisplay').style.display = (this.navType == 2 ? '' : 'none');
        } else if (this.frameArray.length > 1 && this.isLyteframe) {
                object.style.display = '';
                object.innerHTML = "Page " + eval(this.activeFrame + 1) + " of " + this.frameArray.length;
                this.doc.getElementById('lbNavDisplay').style.display = '';
        } else {
                this.doc.getElementById('lbNavDisplay').style.display = 'none';
        }
        this.appear('lbDetailsContainer', (this.doAnimations ? 0 : 100));

};
LyteBox.prototype.updateNav = function() {
        if (this.isSlideshow) {
                if (this.activeSlide != 0) {
                        var object = (this.navType == 2 ? this.doc.getElementById('lbPrev2') : this.doc.getElementById('lbPrev'));
                                object.style.display = '';
                                object.onclick = function() {
                                        if (myLytebox.pauseOnPrevClick) { myLytebox.togglePlayPause("lbPause", "lbPlay"); }
                                        myLytebox.changeContent(myLytebox.activeSlide - 1); return false;
                                }
                } else {
                        if (this.navType == 2) { this.doc.getElementById('lbPrev2_Off').style.display = ''; }
                }
                if (this.activeSlide != (this.slideArray.length - 1)) {
                        var object = (this.navType == 2 ? this.doc.getElementById('lbNext2') : this.doc.getElementById('lbNext'));
                                object.style.display = '';
                                object.onclick = function() {
                                        if (myLytebox.pauseOnNextClick) { myLytebox.togglePlayPause("lbPause", "lbPlay"); }
                                        myLytebox.changeContent(myLytebox.activeSlide + 1); return false;
                                }
                } else {
                        if (this.navType == 2) { this.doc.getElementById('lbNext2_Off').style.display = ''; }
                }
        } else if (this.isLyteframe) {
                if(this.activeFrame != 0) {
                        var object = this.doc.getElementById('lbPrev2');
                                object.style.display = '';
                                object.onclick = function() {
                                        myLytebox.changeContent(myLytebox.activeFrame - 1); return false;
                                }
                } else {
                        this.doc.getElementById('lbPrev2_Off').style.display = '';
                }
                if(this.activeFrame != (this.frameArray.length - 1)) {
                        var object = this.doc.getElementById('lbNext2');
                                object.style.display = '';
                                object.onclick = function() {
                                        myLytebox.changeContent(myLytebox.activeFrame + 1); return false;
                                }
                } else {
                        this.doc.getElementById('lbNext2_Off').style.display = '';
                }
        } else {
                if(this.activeImage != 0) {
                        var object = (this.navType == 2 ? this.doc.getElementById('lbPrev2') : this.doc.getElementById('lbPrev'));
                                object.style.display = '';
                                object.onclick = function() {
                                        myLytebox.changeContent(myLytebox.activeImage - 1); return false;
                                }
                } else {
                        if (this.navType == 2) { this.doc.getElementById('lbPrev2_Off').style.display = ''; }
                }
                if(this.activeImage != (this.imageArray.length - 1)) {
                        var object = (this.navType == 2 ? this.doc.getElementById('lbNext2') : this.doc.getElementById('lbNext'));
                                object.style.display = '';
                                object.onclick = function() {
                                        myLytebox.changeContent(myLytebox.activeImage + 1); return false;
                                }
                } else {
                        if (this.navType == 2) { this.doc.getElementById('lbNext2_Off').style.display = ''; }
                }
        }
        this.enableKeyboardNav();
};
LyteBox.prototype.enableKeyboardNav = function() { document.onkeydown = this.keyboardAction; };
LyteBox.prototype.disableKeyboardNav = function() { document.onkeydown = ''; };
LyteBox.prototype.keyboardAction = function(e) {
        var keycode = key = escape = null;
        keycode = (e == null) ? event.keyCode : e.which;
        key             = String.fromCharCode(keycode).toLowerCase();
        escape  = (e == null) ? 27 : e.DOM_VK_ESCAPE;

        if (keycode == escape) {
            myLytebox.end();
        }

/*      if ((key == 'x') || (key == 'c') || (keycode == escape)) {
                myLytebox.end();
        } else if ((key == 'p') || (keycode == 37)) {
                if (myLytebox.isSlideshow) {
                        if(myLytebox.activeSlide != 0) {
                                myLytebox.disableKeyboardNav();
                                myLytebox.changeContent(myLytebox.activeSlide - 1);
                        }
                } else if (myLytebox.isLyteframe) {
                        if(myLytebox.activeFrame != 0) {
                                myLytebox.disableKeyboardNav();
                                myLytebox.changeContent(myLytebox.activeFrame - 1);
                        }
                } else {
                        if(myLytebox.activeImage != 0) {
                                myLytebox.disableKeyboardNav();
                                myLytebox.changeContent(myLytebox.activeImage - 1);
                        }
                }
        } else if ((key == 'n') || (keycode == 39)) {
                if (myLytebox.isSlideshow) {
                        if(myLytebox.activeSlide != (myLytebox.slideArray.length - 1)) {
                                myLytebox.disableKeyboardNav();
                                myLytebox.changeContent(myLytebox.activeSlide + 1);
                        }
                } else if (myLytebox.isLyteframe) {
                        if(myLytebox.activeFrame != (myLytebox.frameArray.length - 1)) {
                                myLytebox.disableKeyboardNav();
                                myLytebox.changeContent(myLytebox.activeFrame + 1);
                        }
                } else {
                        if(myLytebox.activeImage != (myLytebox.imageArray.length - 1)) {
                                myLytebox.disableKeyboardNav();
                                myLytebox.changeContent(myLytebox.activeImage + 1);
                        }
                }
        }
*/
};
LyteBox.prototype.preloadNeighborImages = function() {
        if (this.isSlideshow) {
                if ((this.slideArray.length - 1) > this.activeSlide) {
                        preloadNextImage = new Image();
                        preloadNextImage.src = this.slideArray[this.activeSlide + 1][0];
                }
                if(this.activeSlide > 0) {
                        preloadPrevImage = new Image();
                        preloadPrevImage.src = this.slideArray[this.activeSlide - 1][0];
                }
        } else {
                if ((this.imageArray.length - 1) > this.activeImage) {
                        preloadNextImage = new Image();
                        preloadNextImage.src = this.imageArray[this.activeImage + 1][0];
                }
                if(this.activeImage > 0) {
                        preloadPrevImage = new Image();
                        preloadPrevImage.src = this.imageArray[this.activeImage - 1][0];
                }
        }
};
LyteBox.prototype.togglePlayPause = function(hideID, showID) {
        if (this.isSlideshow && hideID == "lbPause") {
                for (var i = 0; i < this.slideshowIDCount; i++) { window.clearTimeout(this.slideshowIDArray[i]); }
        }
        this.doc.getElementById(hideID).style.display = 'none';
        this.doc.getElementById(showID).style.display = '';
        if (hideID == "lbPlay") {
                this.isPaused = false;
                if (this.activeSlide == (this.slideArray.length - 1)) {
                        this.end();
                } else {
                        this.changeContent(this.activeSlide + 1);
                }
        } else {
                this.isPaused = true;
        }
};
LyteBox.prototype.end = function(caller) {
        var closeClick = (caller == 'slideshow' ? false : true);
        if (this.isSlideshow && this.isPaused && !closeClick) { return; }
        this.disableKeyboardNav();
        this.doc.getElementById('lbMain').style.display = 'none';
        this.fade('lbOverlay', (this.doAnimations ? this.maxOpacity : 0));
        this.toggleSelects('visible');
        if (this.hideFlash) { this.toggleFlash('visible'); }
        if (this.isSlideshow) {
                for (var i = 0; i < this.slideshowIDCount; i++) { window.clearTimeout(this.slideshowIDArray[i]); }
        }

        this.returnAdoptee();
        this.started = false;
        this.confirmCallback = null;
};
LyteBox.prototype.checkFrame = function() {
        // tableau:jsolomon
        // here we check if we can read info from the parent without throwing an
        // exception for cross-site scripting. If we do, then lytebox must
        // behave as if it's not in a frame even though it is.
        var readparent = true;
        try {
          var dummy = parent.document.getElementsByTagName('frameset').length;
        }
        catch(e) {
          readparent = false;
        }

        if (readparent == true && window.parent.frames[window.name] && (parent.document.getElementsByTagName('frameset').length <= 0)) {
                this.isFrame = true;
                this.lytebox = "window.parent." + window.name + ".myLytebox";
                this.doc = parent.document;
        } else {
                this.isFrame = false;
                this.lytebox = "myLytebox";
                this.doc = document;
        }
};
LyteBox.prototype.getPixelRate = function(cur, img) {
        var diff = (img > cur) ? img - cur : cur - img;
        if (diff >= 0 && diff <= 100) { return 10; }
        if (diff > 100 && diff <= 200) { return 15; }
        if (diff > 200 && diff <= 300) { return 20; }
        if (diff > 300 && diff <= 400) { return 25; }
        if (diff > 400 && diff <= 500) { return 30; }
        if (diff > 500 && diff <= 600) { return 35; }
        if (diff > 600 && diff <= 700) { return 40; }
        if (diff > 700) { return 45; }
};
LyteBox.prototype.appear = function(id, opacity) {
        var object = this.doc.getElementById(id).style;
        object.opacity = (opacity / 100);
        object.MozOpacity = (opacity / 100);
        object.KhtmlOpacity = (opacity / 100);
        object.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + opacity + ")";
        if (opacity == 100 && (id == 'lbImage' || id == 'lbIframe')) {
                this.updateDetails();
        } else if (opacity >= this.maxOpacity && id == 'lbOverlay') {
                for (var i = 0; i < this.overlayTimerCount; i++) { window.clearTimeout(this.overlayTimerArray[i]); }
                return;
        } else if (opacity >= 100 && id == 'lbDetailsContainer') {
                for (var i = 0; i < this.imageTimerCount; i++) { window.clearTimeout(this.imageTimerArray[i]); }
                this.doc.getElementById('lbOverlay').style.height = this.getPageSize()[1] + "px";
                this.doc.getElementById('lbOverlay').style.width = '100%';
        } else {
                if (id == 'lbOverlay') {
                        this.overlayTimerArray[this.overlayTimerCount++] = setTimeout("myLytebox.appear('" + id + "', " + (opacity+20) + ")", 1);
                } else {
                        this.imageTimerArray[this.imageTimerCount++] = setTimeout("myLytebox.appear('" + id + "', " + (opacity+10) + ")", 1);
                }
        }
};
LyteBox.prototype.fade = function(id, opacity) {
        var object = this.doc.getElementById(id).style;
        object.opacity = (opacity / 100);
        object.MozOpacity = (opacity / 100);
        object.KhtmlOpacity = (opacity / 100);
        object.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + opacity + ")";
        if (opacity <= 0) {
                try {
                        object.display = 'none';
                } catch(err) { }
        } else if (id == 'lbOverlay') {
                this.overlayTimerArray[this.overlayTimerCount++] = setTimeout("myLytebox.fade('" + id + "', " + (opacity-20) + ")", 1);
        } else {
                this.timerIDArray[this.timerIDCount++] = setTimeout("myLytebox.fade('" + id + "', " + (opacity-10) + ")", 1);
        }
};
LyteBox.prototype.resizeW = function(id, curW, maxW, pixelrate, speed) {
        if (!this.hDone) {
                this.resizeWTimerArray[this.resizeWTimerCount++] = setTimeout("myLytebox.resizeW('" + id + "', " + curW + ", " + maxW + ", " + pixelrate + ")", 100);
                return;
        }
        var object = this.doc.getElementById(id);
        var timer = speed ? speed : (this.resizeDuration/2);
        var newW = (this.doAnimations ? curW : maxW);
        object.style.width = (newW) + "px";
        if (newW < maxW) {
                newW += (newW + pixelrate >= maxW) ? (maxW - newW) : pixelrate;
        } else if (newW > maxW) {
                newW -= (newW - pixelrate <= maxW) ? (newW - maxW) : pixelrate;
        }
        this.resizeWTimerArray[this.resizeWTimerCount++] = setTimeout("myLytebox.resizeW('" + id + "', " + newW + ", " + maxW + ", " + pixelrate + ", " + (timer+0.02) + ")", timer+0.02);
        if (parseInt(object.style.width) == maxW) {
                this.wDone = true;
                for (var i = 0; i < this.resizeWTimerCount; i++) { window.clearTimeout(this.resizeWTimerArray[i]); }
        }
};
LyteBox.prototype.resizeH = function(id, curH, maxH, pixelrate, speed) {
        var timer = speed ? speed : (this.resizeDuration/2);
        var object = this.doc.getElementById(id);
        var newH = (this.doAnimations ? curH : maxH);
        object.style.height = (newH) + "px";
        if (newH < maxH) {
                newH += (newH + pixelrate >= maxH) ? (maxH - newH) : pixelrate;
        } else if (newH > maxH) {
                newH -= (newH - pixelrate <= maxH) ? (newH - maxH) : pixelrate;
        }
        this.resizeHTimerArray[this.resizeHTimerCount++] = setTimeout("myLytebox.resizeH('" + id + "', " + newH + ", " + maxH + ", " + pixelrate + ", " + (timer+.02) + ")", timer+.02);
        if (parseInt(object.style.height) == maxH) {
                this.hDone = true;
                for (var i = 0; i < this.resizeHTimerCount; i++) { window.clearTimeout(this.resizeHTimerArray[i]); }
        }
};
LyteBox.prototype.getPageScroll = function() {
        if (self.pageYOffset) {
                return this.isFrame ? parent.pageYOffset : self.pageYOffset;
        } else if (this.doc.documentElement && this.doc.documentElement.scrollTop){
                return this.doc.documentElement.scrollTop;
        } else if (document.body) {
                return this.doc.body.scrollTop;
        }
};
LyteBox.prototype.getPageSize = function() {
        var xScroll, yScroll, windowWidth, windowHeight;
        if (window.innerHeight && window.scrollMaxY) {
                xScroll = this.doc.scrollWidth;
                yScroll = (this.isFrame ? parent.innerHeight : self.innerHeight) + (this.isFrame ? parent.scrollMaxY : self.scrollMaxY);
        } else if (this.doc.body.scrollHeight > this.doc.body.offsetHeight){
                xScroll = this.doc.body.scrollWidth;
                yScroll = this.doc.body.scrollHeight;
        } else {
                xScroll = this.doc.getElementsByTagName("html").item(0).offsetWidth;
                yScroll = this.doc.getElementsByTagName("html").item(0).offsetHeight;
                xScroll = (xScroll < this.doc.body.offsetWidth) ? this.doc.body.offsetWidth : xScroll;
                yScroll = (yScroll < this.doc.body.offsetHeight) ? this.doc.body.offsetHeight : yScroll;
        }
        if (self.innerHeight) {
                windowWidth = (this.isFrame) ? parent.innerWidth : self.innerWidth;
                windowHeight = (this.isFrame) ? parent.innerHeight : self.innerHeight;
        } else if (document.documentElement && document.documentElement.clientHeight) {
                windowWidth = this.doc.documentElement.clientWidth;
                windowHeight = this.doc.documentElement.clientHeight;
        } else if (document.body) {
                windowWidth = this.doc.getElementsByTagName("html").item(0).clientWidth;
                windowHeight = this.doc.getElementsByTagName("html").item(0).clientHeight;
                windowWidth = (windowWidth == 0) ? this.doc.body.clientWidth : windowWidth;
                windowHeight = (windowHeight == 0) ? this.doc.body.clientHeight : windowHeight;
        }
        var pageHeight = (yScroll < windowHeight) ? windowHeight : yScroll;
        var pageWidth = (xScroll < windowWidth) ? windowWidth : xScroll;
        return new Array(pageWidth, pageHeight, windowWidth, windowHeight);
};
LyteBox.prototype.toggleFlash = function(state) {
        var objects = this.doc.getElementsByTagName("object");
        for (var i = 0; i < objects.length; i++) {
                objects[i].style.visibility = (state == "hide") ? 'hidden' : 'visible';
        }
        var embeds = this.doc.getElementsByTagName("embed");
        for (var i = 0; i < embeds.length; i++) {
                embeds[i].style.visibility = (state == "hide") ? 'hidden' : 'visible';
        }
        if (this.isFrame) {
                for (var i = 0; i < parent.frames.length; i++) {
                        try {
                                objects = parent.frames[i].window.document.getElementsByTagName("object");
                                for (var j = 0; j < objects.length; j++) {
                                        objects[j].style.visibility = (state == "hide") ? 'hidden' : 'visible';
                                }
                        } catch(e) { }
                        try {
                                embeds = parent.frames[i].window.document.getElementsByTagName("embed");
                                for (var j = 0; j < embeds.length; j++) {
                                        embeds[j].style.visibility = (state == "hide") ? 'hidden' : 'visible';
                                }
                        } catch(e) { }
                }
        }
};
LyteBox.prototype.toggleSelects = function(state) {
        var selects = this.doc.getElementsByTagName("select");
        for (var i = 0; i < selects.length; i++ ) {
            if ((selects[i].usedInLytebox == undefined) ||  (selects[i].usedInLytebox == false)) {
                selects[i].style.visibility = (state == "hide") ? 'hidden' : 'visible';
            }
        }
        if (this.isFrame) {
                for (var i = 0; i < parent.frames.length; i++) {
                        try {
                                selects = parent.frames[i].window.document.getElementsByTagName("select");
                                for (var j = 0; j < selects.length; j++) {
                                    if ((selects[j].usedInLytebox == undefined) ||  (selects[j].usedInLytebox == false)) {
                                        selects[j].style.visibility = (state == "hide") ? 'hidden' : 'visible';
                                    }
                                }
                        } catch(e) { }
                }
        }
};
LyteBox.prototype.pause = function(numberMillis) {
        var now = new Date();
        var exitTime = now.getTime() + numberMillis;
        while (true) {
                now = new Date();
                if (now.getTime() > exitTime) { return; }
        }
};
LyteBox.prototype.takeAdoptee = function() {
    if (this.adoptee != null) {
        this.previousParent = this.adoptee.parentNode;
        if ((this.previousParent != null) && (this.doc.getElementById('lbCaption') != null)){
             this.previousParent.removeChild(this.adoptee);
             this.doc.getElementById('lbCaption').appendChild(this.adoptee);
            this.showNavigationPrevious = this.showNavigation;
            this.showClosePrevious = this.showClose;
            this.showNavigation         = false;
            this.showClose              = false;


        }
    }
}
LyteBox.prototype.returnAdoptee = function() {
    if ((this.previousParent != null) && (this.adoptee != null) && (this.doc.getElementById('lbCaption') != null)) {
         this.doc.getElementById('lbCaption').removeChild(this.adoptee);
         this.previousParent.appendChild(this.adoptee);

        this.adoptee = null;
        this.previousParent = null;
        this.showNavigation = this.showNavigationPrevious;
        this.showClose = this.showClosePrevious;

    }
};

if (window.addEventListener) {
        window.addEventListener("load",initLytebox,false);
} else if (window.attachEvent) {
        window.attachEvent("onload",initLytebox);
} else {
        window.onload = function() {initLytebox();}
}



LyteBox.prototype.confirmOK = function() {
    this.confirmed = true;
    if (null != this.confirmCallback) {
        this.confirmCallback(true);
    }
    this.end();
    return false;
}


LyteBox.prototype.confirmCancel = function() {
    this.confirmed = false;
    if (null != this.confirmCallback) {
        this.confirmCallback(false);
    }
    this.end();
    return false;
}


function initLytebox() { myLytebox = new LyteBox(); }

/* Must pass in the "anchors" ID so that Lytebox can call the correct "onclick" handler... */
function loadLytebox(id) {
    if (typeof myLytebox != 'undefined') {
        // if the myLytebox object exists, start it up!
        myLytebox.start(myLytebox.doc.getElementById(id));
    } else {
        // wait 1/10th of a second and attempt loading again...
        if (timeoutID) { clearTimeout(timeoutID); }
        timeoutID = setTimeout('loadLytebox("'+id+'")', 100);
    }
}

function lyteboxAlert(id, details) {
    if (typeof(myLytebox) == "undefined")  /* seen in the wild, defend here! */
        {
          return;
        }

    if (myLytebox.started) {
        myLytebox.end();
    }

    if (!myLytebox.started) {
        myLytebox.doc.getElementById(id).title = details;
        loadLytebox(id);
    }
}



function removeChildNodes(ctrl)
{
  if (!ctrl) return;

  while (ctrl.childNodes[0])
  {
     ctrl.removeChild(ctrl.childNodes[0]);
  }
}


function lyteboxConfirm(id, details, callback) {
    if (typeof(myLytebox) == "undefined")  /* seen in the wild, defend here! */
        {
          return;
        }

    if (myLytebox.started) {
        myLytebox.end();
    }

    if (null == callback) {
        callback = nop;
    }
    myLytebox.confirmed = false;

    var lbCancel = myLytebox.doc.getElementById('lbCancel');
    removeChildNodes(lbCancel);
    var textCancel = myLytebox.doc.createTextNode(myLytebox.confirmNegative);
     lbCancel.appendChild(textCancel);

    var lbOk = myLytebox.doc.getElementById('lbOK');
    removeChildNodes(lbOk);
    var textOK = myLytebox.doc.createTextNode(myLytebox.confirmPositive);
     lbOk.appendChild(textOK);


    var template = "<table>";
    template = template + "<tr><td>" + details + "</td></tr><tr><td><br></td></tr>";
    template = template + "</table>";
    myLytebox.confirmCallback = callback;
    lyteboxAlert(id, template);

}


function nop() {
    return false;
}


/*!
 * jQuery Text Overflow v0.7
 *
 * Licensed under the new BSD License.
 * Copyright 2009-2010, Bram Stein
 * All rights reserved.
 */
/* from http://www.bramstein.com/projects/text-overflow */
/* Local Tableau Modifications were to replace '$' with 'jQuery' per http://docs.jquery.com/Using_jQuery_with_Other_Libraries */
/*global jQuery, document, setInterval*/
(function (jQuery) {
        var style = document.documentElement.style,
        hasTextOverflow = ('textOverflow' in style || 'OTextOverflow' in style),

                domSplit = function (root, maxIndex) {
                        var index = 0, result = [],
                                domSplitAux = function (nodes) {
                                        var i = 0, tmp;

                                        if (index > maxIndex) {
                                                return;
                                        }

                                        for (i = 0; i < nodes.length; i += 1) {
                                                if (nodes[i].nodeType === 1) {
                                                        tmp = nodes[i].cloneNode(false);
                                                        result[result.length - 1].appendChild(tmp);
                                                        result.push(tmp);
                                                        domSplitAux(nodes[i].childNodes);
                                                        result.pop();
                                                } else if (nodes[i].nodeType === 3) {
                                                        if (index + nodes[i].length < maxIndex) {
                                                                result[result.length - 1].appendChild(nodes[i].cloneNode(false));
                                                        } else {
                                                                tmp = nodes[i].cloneNode(false);
                                                                tmp.textContent = jQuery.trim(tmp.textContent.substring(0, maxIndex - index));
                                                                result[result.length - 1].appendChild(tmp);
                                                        }
                                                        index += nodes[i].length;
                                                } else {
                                                        result.appendChild(nodes[i].cloneNode(false));
                                                }
                                        }
                                };
                        result.push(root.cloneNode(false));
                        domSplitAux(root.childNodes);
                        return jQuery(result.pop().childNodes);
                };

        jQuery.extend(jQuery.fn, {
        textOverflow: function (str, autoUpdate) {
            var more = str || '&#x2026;';

            if (!hasTextOverflow) {
                return this.each(function () {
                    var element = jQuery(this),

                        // the clone element we modify to measure the width
                        clone = element.clone(),

                        // we save a copy so we can restore it if necessary
                        originalElement = element.clone(),
                        originalText = element.text(),
                        originalWidth = element.width(),
                        low = 0, mid = 0,
                        high = originalText.length,
                        reflow = function () {
                            if (originalWidth !== element.width()) {
                                element.replaceWith(originalElement);
                                element = originalElement;
                                originalElement = element.clone();
                                element.textOverflow(str, false);
                                originalWidth = element.width();
                            }
                        };

                    element.after(clone.hide().css({
                                                'position': 'absolute',
                                                'width': 'auto',
                                                'overflow': 'visible',
                                                'max-width': 'inherit'
                                        }));

                    if (clone.width() > originalWidth) {
                        while (low < high) {
                            mid = Math.floor(low + ((high - low) / 2));
                                                        clone.empty().append(domSplit(originalElement.get(0), mid)).append(more);
                            if (clone.width() < originalWidth) {
                                low = mid + 1;
                            } else {
                                high = mid;
                            }
                        }

                        if (low < originalText.length) {
                                                        element.empty().append(domSplit(originalElement.get(0), low - 1)).append(more);
                        }
                    }
                    clone.remove();

                    if (autoUpdate) {
                        setInterval(reflow, 200);
                    }
                });
            } else {
                return this;
            }
        }
        });
})(jQuery);


/*
 * jQuery Autocomplete plugin 1.1
 *
 * Copyright (c) 2009 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.autocomplete.js 15 2009-08-22 10:30:27Z joern.zaefferer $
 */

;(function($) {
  
$.fn.extend({
  autocomplete: function(urlOrData, options) {
    var isUrl = typeof urlOrData == "string";
    options = $.extend({}, $.Autocompleter.defaults, {
      url: isUrl ? urlOrData : null,
      data: isUrl ? null : urlOrData,
      delay: isUrl ? $.Autocompleter.defaults.delay : 10,
      max: options && !options.scroll ? 10 : 150
    }, options);
    
    // if highlight is set to false, replace it with a do-nothing function
    options.highlight = options.highlight || function(value) { return value; };
    
    // if the formatMatch option is not specified, then use formatItem for backwards compatibility
    options.formatMatch = options.formatMatch || options.formatItem;
    
    return this.each(function() {
      new $.Autocompleter(this, options);
    });
  },
  result: function(handler) {
    return this.bind("result", handler);
  },
  search: function(handler) {
    return this.trigger("search", [handler]);
  },
  query: function(handler) {
    return this.trigger("query", [handler]);
  },
  flushCache: function() {
    return this.trigger("flushCache");
  },
  setOptions: function(options){
    return this.trigger("setOptions", [options]);
  },
  unautocomplete: function() {
    return this.trigger("unautocomplete");
  }
});

$.Autocompleter = function(input, options) {

  var KEY = {
    UP: 38,
    DOWN: 40,
    DEL: 46,
    TAB: 9,
    RETURN: 13,
    ESC: 27,
    COMMA: 188,
    PAGEUP: 33,
    PAGEDOWN: 34,
    BACKSPACE: 8
  };

  // Create $ object for input element
  var $input = $(input).prop("autocomplete", "off").addClass(options.inputClass);

  // BUGZID: 31722, 31733
  // Most browsers don't fire a mouseup when clicking on a scrollbar
  // so need a way to hide results since config.mouseDownOnSelect will
  // remain true and won't close in blur on line 183
  $('body').click(function() { hideResults(); });

  var timeout;
  var previousValue = "";
  var cache = $.Autocompleter.Cache(options);
  var hasFocus = 0;
  var lastKeyPressCode;
  var config = {
    mouseDownOnSelect: false
  };
  var select = $.Autocompleter.Select(options, input, selectCurrent, config);

  /* set up clear button */
  if (options.clearTarget) {
    var clearBtn = $.Autocompleter.Clear(options, input);
  }
  
  var blockSubmit;
  
  // prevent form submit in opera when selecting with return key
  $.browser.opera && $(input.form).bind("submit.autocomplete", function() {
    if (blockSubmit) {
      blockSubmit = false;
      return false;
    }
  });
  
  // only opera doesn't trigger keydown multiple times while pressed, others don't work with keypress at all
  $input.bind(($.browser.opera ? "keypress" : "keydown") + ".autocomplete", function(event) {
    /* this line is specifically for the more groups popup */
        $('#moreGroupsTable [value=OK]').prop('disabled', true);
    // a keypress means the input has focus
    // avoids issue where input had focus before the autocomplete was applied
    hasFocus = 1;
    // track last key pressed
    lastKeyPressCode = event.keyCode;
    switch(event.keyCode) {
    
      case KEY.UP:
        event.preventDefault();
        if ( select.visible() ) {
          select.prev();
        } else {
          onChange(0, true);
        }
        break;
        
      case KEY.DOWN:
        event.preventDefault();
        if ( select.visible() ) {
          select.next();
        } else {
          onChange(0, true);
        }
        break;
        
      case KEY.PAGEUP:
        event.preventDefault();
        if ( select.visible() ) {
          select.pageUp();
        } else {
          onChange(0, true);
        }
        break;
        
      case KEY.PAGEDOWN:
        event.preventDefault();
        if ( select.visible() ) {
          select.pageDown();
        } else {
          onChange(0, true);
        }
        break;
      
      // matches also semicolon
      case options.multiple && $.trim(options.multipleSeparator) == "," && KEY.COMMA:
      case KEY.TAB:
      case KEY.RETURN:
        if( selectCurrent() ) {
          // stop default to prevent a form submit, Opera needs special handling
          event.preventDefault();
          blockSubmit = true;
          return false;
        }
        break;
        
      case KEY.ESC:
        select.hide();
        break;
        
      default:
        clearTimeout(timeout);
        timeout = setTimeout(onChange, options.delay);
        break;
    }
  }).focus(function(){
    // track whether the field has focus, we shouldn't process any
    // results if the field no longer has focus
    hasFocus++;
    /* For simulating drop-down behaviour */
    if ( options.minChars == 0 ) {
      onChange(0, true);
    }
  }).blur(function() {
    hasFocus = 0;
    if (!config.mouseDownOnSelect) {
      hideResults();
    }
  }).click(function(event) {
    // show select when clicking in a focused field
    if ( hasFocus++ > 1 && !select.visible() ) {
      onChange(0, true);
    }
    // Prevents body from hiding results
    event.stopPropagation();
  }).bind("search", function() {
    // TODO why not just specifying both arguments?
    var fn = (arguments.length > 1) ? arguments[1] : null;
    function findValueCallback(s, data) {
      var result;
      if( data && data.length ) {
        for (var i=0; i < data.length; i++) {
          if( data[i].result.toLowerCase() == q.toLowerCase() ) {
            result = data[i];
            break;
          }
        }
      }
      if( typeof fn == "function" ) fn(result);
      else $input.trigger("result", result && [result.data, result.value]);
    }
    $.each(trimWords($input.val()), function(i, value) {
      request(value, findValueCallback, findValueCallback);
    });
  }).bind("query", function(params) {
    $input.focus().val('View All').css('color', '');
    manualQuery('viewallquery');
  }).bind("flushCache", function() {
    cache.flush();
  }).bind("setOptions", function() {
    $.extend(options, arguments[1]);
    // if we've updated the data, repopulate
    if ( "data" in arguments[1] )
      cache.populate();
  }).bind("unautocomplete", function() {
    select.unbind();
    $input.unbind();
    $(input.form).unbind(".autocomplete");
  });
  
  function selectCurrent() {
    var selected = select.selected();
    if( !selected )
      return false;
    
    var v = selected.result;
    var value = selected.data[1] - 0;
    previousValue = v;
    
    if ( options.multiple ) {
      var words = trimWords($input.val());
      if ( words.length > 1 ) {
        var seperator = options.multipleSeparator.length;
        var cursorAt = $(input).selection().start;
        var wordAt, progress = 0;
        $.each(words, function(i, word) {
          progress += word.length;
          if (cursorAt <= progress) {
            wordAt = i;
            return false;
          }
          progress += seperator;
        });
        words[wordAt] = v;
        // TODO this should set the cursor to the right position, but it gets overriden somewhere
        //$.Autocompleter.Selection(input, progress + seperator, progress + seperator);
        v = words.join( options.multipleSeparator );
      }
      v += options.multipleSeparator;
    }
    
    if(value !== -1)
      $input.val(v);
    $input.css('color', '');
    hideResultsNow();
    $input.trigger("result", [selected.data, selected.value]);
    return true;
  }

  function manualQuery(term) {
    $input.addClass(options.loadingClass);
    request(term, receiveData, hideResultsNow, {all: 'yes', s:''});
  };
  
  function onChange(crap, skipPrevCheck) {
    if( lastKeyPressCode == KEY.DEL ) {
      select.hide();
      return;
    }
    
    var currentValue = $input.val();
    
    if ( !skipPrevCheck && currentValue == previousValue )
      return;
    
    previousValue = currentValue;
    
    currentValue = lastWord(currentValue);
    if ( currentValue.length >= options.minChars) {
      $input.addClass(options.loadingClass);
      if (!options.matchCase)
        currentValue = currentValue.toLowerCase();
      request(currentValue, receiveData, hideResultsNow);
    } else {
      stopLoading();
      select.hide();
    }
  };
  
  function trimWords(value) {
    if (!value)
      return [""];
    if (!options.multiple)
      return [$.trim(value)];
    return $.map(value.split(options.multipleSeparator), function(word) {
      return $.trim(value).length ? $.trim(word) : null;
    });
  }
  
  function lastWord(value) {
    if ( !options.multiple )
      return value;
    var words = trimWords(value);
    if (words.length == 1) 
      return words[0];
    var cursorAt = $(input).selection().start;
    if (cursorAt == value.length) {
      words = trimWords(value)
    } else {
      words = trimWords(value.replace(value.substring(cursorAt), ""));
    }
    return words[words.length - 1];
  }
  
  // fills in the input box w/the first match (assumed to be the best match)
  // q: the term entered
  // sValue: the first matching result
  function autoFill(q, sValue){
    // autofill in the complete box w/the first match as long as the user hasn't entered in more data
    // if the last user key pressed was backspace, don't autofill
    if( options.autoFill && (lastWord($input.val()).toLowerCase() == q.toLowerCase()) && lastKeyPressCode != KEY.BACKSPACE ) {
      // fill in the value (keep the case the user has typed)
      $input.val($input.val() + sValue.substring(lastWord(previousValue).length));
      // select the portion of the value not typed by the user (so the next character will erase)
      $(input).selection(previousValue.length, previousValue.length + sValue.length);
    }
  };

  function hideResults() {
    clearTimeout(timeout);
    timeout = setTimeout(hideResultsNow, 200);
  };

  function hideResultsNow() {
    var wasVisible = select.visible();
    options.hideCallback();
    clearTimeout(timeout);
    stopLoading();
    if( !options.autoHideList ) {
      return false;
    }
    select.hide();
    if (options.mustMatch) {
      // call search and run callback
      $input.search(
        function (result){
          // if no value found, clear the input box
          if( !result ) {
            if (options.multiple) {
              var words = trimWords($input.val()).slice(0, -1);
              $input.val( words.join(options.multipleSeparator) + (words.length ? options.multipleSeparator : "") );
            }
            else {
              $input.val( "" );
              $input.trigger("result", null);
            }
          }
        }
      );
    }
  };

  function receiveData(q, data) {
    if ( data && data.length && hasFocus ) {
      stopLoading();
      select.display(data, q);
      autoFill(q, data[0].value);
      select.show();
      options.showCallback();
    } else {
      hideResultsNow();
    }
  };

  function request(term, success, failure, manualParams) {
    if (!options.matchCase)
      term = term.toLowerCase();
    var data = cache.load(term);
    // receive the cached data
    if (data && data.length) {
      success(term, data);
    // if an AJAX url has been supplied, try loading the data now
    } else if( (typeof options.url == "string") && (options.url.length > 0) ){
      
      var extraParams = {
        timestamp: +new Date()
      };
      $.each(options.extraParams, function(key, param) {
        extraParams[key] = typeof param == "function" ? param() : param;
      });
      // If defined, show the throbber  
      if(typeof hide_spinner === 'function') show_spinner();
      $.ajax({
        // try to leverage ajaxQueue plugin to abort previous requests
        mode: "abort",
        // limit abortion to this input
        port: "autocomplete" + input.name,
        dataType: options.dataType,
        url: options.url,
        data: $.extend({
          s: lastWord(term),
          limit: options.max
        }, extraParams),
        error: function(xhr, ajaxOptions, thrownError) {
          if(xhr.status == 401) {
            sessionTimeoutSuggestLogin();
          }
        },
        success: function(data) {
          // If defined, hide the throbber  
          if(typeof hide_spinner === 'function') hide_spinner();
          var parsed = options.parse && options.parse(data) || parse(data);
          cache.add(term, parsed);
          success(term, parsed);
        }
      });
    } else {
      // if we have a failure, we need to empty the list -- this prevents the the [TAB] key from selecting the last successful match
      select.emptyList();
      failure(term);
    }
  };
  
  function parse(data) {
    var parsed = [];
    var rows = data.split("\n");
    for (var i=0; i < rows.length; i++) {
      var row = $.trim(rows[i]);
      if (row) {
        row = row.split("|");
        if( row[1] !== undefined ) {
          parsed[parsed.length] = {
            data: row,
            value: row[2],
            result: options.formatResult && options.formatResult(row, row[2]) || row[2]
          };
        }
      }
    }
    if(parsed.length === 0) {
      parsed[0] = {
        data: ['warning', -1, tab.wgappStrings.no_result_string],
        value: tab.wgappStrings.no_result_string,
        result:options.formatResult && options.formatResult(row, tab.wgappStrings.no_result_string) || tab.wgappStrings.no_result_string
      }
    }
    return parsed;
  };

  function stopLoading() {
    $input.removeClass(options.loadingClass);
  };

};

$.Autocompleter.defaults = {
  inputClass: "ac_input",
  resultsClass: "ac_results",
  loadingClass: "",
  minChars: 1,
  delay: 400,
  matchCase: false,
  matchSubset: true,
  matchContains: false,
  cacheLength: 10,
  max: 100,
  mustMatch: false,
  extraParams: {},
  selectFirst: true,
  formatItem: function(row) { return row[2]; },
  formatMatch: null,
  autoFill: false,
  width: 0,
  multiple: false,
  multipleSeparator: ", ",
  /*highlight: function(value, term) {
    return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + term + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
  },*/
  highlight: function(value, term) { return value; },
  scroll: false,
  scrollHeight: 180,
  /* Custom defaults */
  autoHideList: true,
  appendTarget: false,
  hideCallback: function() { },
  selectCallback: function() { },
  showCallback: function() { },
  clearCallback: function() { }
};

$.Autocompleter.Cache = function(options) {

  var data = {};
  var length = 0;
  
  function matchSubset(s, sub) {
    if (!options.matchCase) 
      s = s.toLowerCase();
    var i = s.indexOf(sub);
    if (options.matchContains == "word"){
      i = s.toLowerCase().search("\\b" + sub.toLowerCase());
    }
    if (i == -1) return false;
    return i == 0 || options.matchContains;
  };
  
  function add(q, value) {
    if (length > options.cacheLength){
      flush();
    }
    if (!data[q]){ 
      length++;
    }
    data[q] = value;
  }
  
  function populate(){
    if( !options.data ) return false;
    // track the matches
    var stMatchSets = {},
      nullData = 0;

    // no url was specified, we need to adjust the cache length to make sure it fits the local data store
    if( !options.url ) options.cacheLength = 1;
    
    // track all options for minChars = 0
    stMatchSets[""] = [];
    
    // loop through the array and create a lookup structure
    for ( var i = 0, ol = options.data.length; i < ol; i++ ) {
      var rawValue = options.data[i];
      // if rawValue is a string, make an array otherwise just reference the array
      rawValue = (typeof rawValue == "string") ? [rawValue] : rawValue;
      
      var value = options.formatMatch(rawValue, i+1, options.data.length);
      if ( value === false )
        continue;
        
      var firstChar = value.charAt(0).toLowerCase();
      // if no lookup array for this character exists, look it up now
      if( !stMatchSets[firstChar] ) 
        stMatchSets[firstChar] = [];

      // if the match is a string
      var row = {
        value: value,
        data: rawValue,
        result: options.formatResult && options.formatResult(rawValue) || value
      };
      
      // push the current match into the set list
      stMatchSets[firstChar].push(row);

      // keep track of minChars zero items
      if ( nullData++ < options.max ) {
        stMatchSets[""].push(row);
      }
    };

    // add the data items to the cache
    $.each(stMatchSets, function(i, value) {
      // increase the cache size
      options.cacheLength++;
      // add to the cache
      add(i, value);
    });
  }
  
  // populate any existing data
  setTimeout(populate, 25);
  
  function flush(){
    data = {};
    length = 0;
  }
  
  return {
    flush: flush,
    add: add,
    populate: populate,
    load: function(q) {
      if (!options.cacheLength || !length)
        return null;
      /* 
       * if dealing w/local data and matchContains than we must make sure
       * to loop through all the data collections looking for matches
       */
      if( !options.url && options.matchContains ){
        // track all matches
        var csub = [];
        // loop through all the data grids for matches
        for( var k in data ){
          // don't search through the stMatchSets[""] (minChars: 0) cache
          // this prevents duplicates
          if( k.length > 0 ){
            var c = data[k];
            $.each(c, function(i, x) {
              // if we've got a match, add it to the array
              if (matchSubset(x.value, q)) {
                csub.push(x);
              }
            });
          }
        }       
        return csub;
      } else 
      // if the exact item exists, use it
      if (data[q]) {
        return data[q];
      } else
      if (options.matchSubset) {
        for (var i = q.length - 1; i >= options.minChars; i--) {
          var c = data[q.substr(0, i)];
          if (c) {
            var csub = [];
            $.each(c, function(i, x) {
              if (matchSubset(x.value, q)) {
                csub[csub.length] = x;
              }
            });
            return csub;
          }
        }
      }
      return null;
    }
  };
};

$.Autocompleter.Clear = function (options, input) {
  $clear = $(options.clearTarget);
  $clear.bind("click", function(event) {
    $(input).val('').focus();
    options.clearCallback();
  });
}

$.Autocompleter.Select = function (options, input, select, config) {
  var CLASSES = {
    ACTIVE: "ac_over"
  };
  
  var listItems,
    active = -1,
    data,
    term = "",
    needsInit = true,
    element,
    list;
  
  // Create results
  function init() {
    var appendTarget = options.appendTarget ? $(options.appendTarget) : document.body;
    if (!needsInit)
      return;
    element = $("<div/>")
    .hide()
    .addClass(options.resultsClass)
    .css("position", "absolute")
    .appendTo(appendTarget);
  
    list = $("<ul/>").appendTo(element).mouseover( function(event) {
      if(target(event).nodeName && target(event).nodeName.toUpperCase() == 'LI') {
              active = $("li", list).removeClass(CLASSES.ACTIVE).index(target(event));
          $(target(event)).addClass(CLASSES.ACTIVE);            
          }
    }).click(function(event) {
      $(target(event)).addClass(CLASSES.ACTIVE);
      select();
      // TODO provide option to avoid setting focus again after selection? useful for cleanup-on-focus
      // input.focus();
      // Prevents body from hiding results
      event.stopPropagation();
      return false;
    }).mousedown(function() {
      config.mouseDownOnSelect = true;
    }).mouseup(function() {
      config.mouseDownOnSelect = false;
    });
    
    if( options.width > 0 )
      element.css("width", options.width);
      
    needsInit = false;
  } 
  
  function target(event) {
    var element = event.target;
    while(element && element.tagName != "LI")
      element = element.parentNode;
    // more fun with IE, sometimes event.target is empty, just ignore it then
    if(!element)
      return [];
    return element;
  }

  function moveSelect(step) {
    listItems.slice(active, active + 1).removeClass(CLASSES.ACTIVE);
    movePosition(step);
    var activeItem = listItems.slice(active, active + 1).addClass(CLASSES.ACTIVE);
    if(options.scroll) {
      var offset = 0;
      listItems.slice(0, active).each(function() {
          offset += this.offsetHeight;
          });
      if((offset + activeItem[0].offsetHeight - list.scrollTop()) > list[0].clientHeight) {
        list.scrollTop(offset + activeItem[0].offsetHeight - list.innerHeight());
      } else if(offset < list.scrollTop()) {
        list.scrollTop(offset);
      }
    }
  };
  
  function movePosition(step) {
    active += step;
    if (active < 0) {
      active = listItems.size() - 1;
    } else if (active >= listItems.size()) {
      active = 0;
    }
  }
  
  function limitNumberOfItems(available) {
    return options.max && options.max < available
      ? options.max
      : available;
  }
  
  function fillList() {
    list.empty();
    var max = limitNumberOfItems(data.length);
    for (var i=0; i < max; i++) {
      if (!data[i])
        continue;
      var formatted = options.formatItem(data[i].data, i+1, max, data[i].value, term);
      if ( formatted === false )
        continue;
      var li = $("<li/>").html( options.highlight(formatted, term) )
        .addClass((i%2==0 ? 'ac_even ' : 'ac_odd ') + data[i].data[0])
        .appendTo(list)[0];
      $.data(li, "ac_data", data[i]);
    }
    listItems = list.find("li");
    if ( options.selectFirst ) {
      listItems.slice(0, 1).addClass(CLASSES.ACTIVE);
      active = 0;
    }
    // apply bgiframe if available
    if ( $.fn.bgiframe )
      list.bgiframe();
  }
  
  return {
    display: function(d, q) {
      init();
      data = d;
      term = q;
      fillList();
    },
    next: function() {
      moveSelect(1);
    },
    prev: function() {
      moveSelect(-1);
    },
    pageUp: function() {
      if (active != 0 && active - 8 < 0) {
        moveSelect( -active );
      } else {
        moveSelect(-8);
      }
    },
    pageDown: function() {
      if (active != listItems.size() - 1 && active + 8 > listItems.size()) {
        moveSelect( listItems.size() - 1 - active );
      } else {
        moveSelect(8);
      }
    },
    hide: function() {
      element && element.hide();
      listItems && listItems.removeClass(CLASSES.ACTIVE);
      active = -1;
    },
    visible : function() {
      return element && element.is(":visible");
    },
    current: function() {
      return this.visible() && (listItems.filter("." + CLASSES.ACTIVE)[0] || options.selectFirst && listItems[0]);
    },
    show: function() {
      var offset = $(input).offset();
      element.css({
        width: typeof options.width == "string" || options.width > 0 ? options.width : $(input).width(),
        top: options.appendTarget ? 'auto' : offset.top + input.offsetHeight,
        left: options.appendTarget ? 'auto' : offset.left
      }).show();
      if(options.scroll) {
        list.scrollTop(0);
        list.css({
          maxHeight: options.scrollHeight,
          overflow: 'auto'
        });
        
        if($.browser.msie && typeof document.body.style.maxHeight === "undefined") {
          var listHeight = 0;
          listItems.each(function() {
              listHeight += this.offsetHeight;
              });
          var scrollbarsVisible = listHeight > options.scrollHeight;
          list.css('height', scrollbarsVisible ? options.scrollHeight : listHeight );
          if (!scrollbarsVisible) {
            // IE doesn't recalculate width when scrollbar disappears
            listItems.width( list.width() - parseInt(listItems.css("padding-left")) - parseInt(listItems.css("padding-right")) );
          }
        }
                
      }
    },
    selected: function() {
      var selected = listItems && listItems.filter("." + CLASSES.ACTIVE).removeClass(CLASSES.ACTIVE);
      return selected && selected.length && $.data(selected[0], "ac_data");
    },
    emptyList: function (){
      list && list.empty();
    },
    unbind: function() {
      element && element.remove();
    }
  };
};

$.fn.selection = function(start, end) {
  if (start !== undefined) {
    return this.each(function() {
      if( this.createTextRange ){
        var selRange = this.createTextRange();
        if (end === undefined || start == end) {
          selRange.move("character", start);
          selRange.select();
        } else {
          selRange.collapse(true);
          selRange.moveStart("character", start);
          selRange.moveEnd("character", end);
          selRange.select();
        }
      } else if( this.setSelectionRange ){
        this.setSelectionRange(start, end);
      } else if( this.selectionStart ){
        this.selectionStart = start;
        this.selectionEnd = end;
      }
    });
  }
  var field = this[0];
  if ( field.createTextRange ) {
    var range = document.selection.createRange(),
      orig = field.value,
      teststring = "<->",
      textLength = range.text.length;
    range.text = teststring;
    var caretAt = field.value.indexOf(teststring);
    field.value = orig;
    this.selection(caretAt, caretAt + textLength);
    return {
      start: caretAt,
      end: caretAt + textLength
    }
  } else if( field.selectionStart !== undefined ){
    return {
      start: field.selectionStart,
      end: field.selectionEnd
    }
  }
};

})(jQuery);


/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);


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
// jQuery extention: flextable
(function ($) {

    var methods = {

        create: function (options) {

            var settings = $.extend({
                cols: [],
                rows: [],
                columnPadding: 10,
                maxStartingColumnWidth: 200,
                contentWidthChanged: null
            }, options);

            var setWidths = function (h, c, w) {
                h.width(w);
                c.width(w);
            };

            return this.each(function() {
                var $this = $(this);

                var table   = $('<div>').addClass('flextable-table');
                var header  = $('<div>').addClass('flextable-header');
                var content = $('<div>').addClass('flextable-content');

                table.append(header).append(content);

                // create and add the header columns and content columns
                var headerColumns = $('<span>').addClass('flextable-header-columns');
                var contentColumns = $('<span>').addClass('flextable-content-columns');

                // create and add the rows background
                var rowsBackground = $('<div>').addClass('flextable-rows-background');
                $.each(settings.rows, function (row_index, row) {
                    var rowBackground = $('<div>').addClass('flextable-row-background').addClass(row_index % 2 == 0 ? 'even' : 'odd');
                    rowsBackground.append(rowBackground);
                });
                contentColumns.append(rowsBackground);
                
                $.each(settings.cols, function (col_index, col) {
                    var headerColumn = $('<span>').addClass('flextable-header-column');
                    var contentColumn = $('<span>').addClass('flextable-content-column');

                    if (col.active) {
                        headerColumn.addClass('flextable-active');
                    }
                    if (col_index > 0) {
                        headerColumn.append($('<div>').addClass('flextable-header-left-border'));
                    }

                    // add the column name text to the header column
                    headerColumn.append($('<span>').addClass('flextable-header-text').html(col.html));

                    if (col.resizable) {
                        // create and add the header column divider
                        var headerColumnDivider = $('<div>').addClass('flextable-column-divider').addClass('flextable-header-column-divider');
                        headerColumnDivider.data('headerColumn', headerColumn);
                        headerColumnDivider.data('contentColumn', contentColumn);
                        headerColumn.append(headerColumnDivider);
                    } else {
                        var headerColumnSpacer = $('<div>').addClass('flextable-header-column-spacer');
                        headerColumn.append(headerColumnSpacer);
                    }

                    // add the header column
                    headerColumns.append(headerColumn);

                    // create and add the content column cells
                    var contentColumnCells = $('<div>').addClass('flextable-content-column-cells');
                    $.each(settings.rows, function (row_index, row) {
                        var cellObj = row.cells[col_index];
                        var cellDiv = $('<div>').addClass('flextable-cell');
                        if (cellObj.align === "right") {
                            cellDiv.addClass('flextable-text-align-right');
                        }
                        var cellText = $('<div>').addClass('flextable-cell-text').html(cellObj.html);
                        if (col.resizable) {
                            cellText.addClass('flextable-text-overflow-ellipsis');
                        }
                        cellDiv.append(cellText);
                        contentColumnCells.append(cellDiv);
                    });
                    contentColumn.append(contentColumnCells);

                    if (col.resizable) {
                        // create and add the content column divider
                        var contentColumnDivider = $('<div>').addClass('flextable-column-divider').addClass('flextable-content-column-divider');
                        contentColumnDivider.data('headerColumn', headerColumn);
                        contentColumnDivider.data('contentColumn', contentColumn);
                        contentColumn.append(contentColumnDivider);
                    }

                    contentColumn.data('headerColumn', headerColumn);
                    contentColumn.data('padding', col.resizable ? settings.columnPadding : 0);

                    // add the content column
                    contentColumns.append(contentColumn);
                });
                header.append(headerColumns);
                content.append(contentColumns);

                // add the table to the document
                // we have to do this before we start measuring anything
                $this.html(table);

                // set the height of the table to fit all the rows
                content.height(contentColumns.outerHeight());

                // calculate minimum width for columns
                headerColumns.children('.flextable-header-column').each(function (index, headerColumn) {
                    var $headerColumn = $(headerColumn);
                    var minWidth = $headerColumn.width() + settings.columnPadding;
                    $headerColumn.data('minWidth', minWidth);
                });

                var clippedColumns = []

                // set column widths to fit content (subject to maximum starting width)
                contentColumns.children('.flextable-content-column').each(function (index, contentColumn) {
                    var $contentColumn = $(contentColumn);
                    var contentColumnWidth = $contentColumn.outerWidth();
                    $contentColumn.data('contentWidth', contentColumnWidth);
                    var headerColumn = $contentColumn.data('headerColumn');
                    var minWidth = headerColumn.data('minWidth');
                    var padding = $contentColumn.data('padding');
                    var columnWidth = Math.min(Math.max(contentColumnWidth + padding, minWidth), settings.maxStartingColumnWidth);
                    setWidths(headerColumn, $contentColumn, columnWidth);
                    if (columnWidth === settings.maxStartingColumnWidth) {
                        clippedColumns[clippedColumns.length] = $contentColumn;
                    }
                });

                // If there are clipped columns and is there extra space,
                // give that space to the clipped columns in left-to-right order.
                if (clippedColumns.length > 0) {
                    var extraSpace = content.outerWidth() - contentColumns.outerWidth() - 10;
                    if (extraSpace > 0) {
                        $(clippedColumns).each(function (index, contentColumn) {
                            var $contentColumn = $(contentColumn);
                            var contentColumnWidth =  $contentColumn.data('contentWidth');
                            var padding = $contentColumn.data('padding');
                            var headerColumn = $contentColumn.data('headerColumn');
                            var columnWidth = Math.min(contentColumnWidth + padding, settings.maxStartingColumnWidth + extraSpace);
                            setWidths(headerColumn, $contentColumn, columnWidth);
                            extraSpace -= (columnWidth - settings.maxStartingColumnWidth);
                            return extraSpace > 0;
                        });
                    }
                }

                if (settings.contentWidthChanged) {
                    settings.contentWidthChanged(headerColumns.outerWidth());
                }

                // event handling for column resizing
                table.on('mousedown.flextable', '.flextable-column-divider', function (mousedownEvent) {
                    var divider = $(this);
                    var headerColumn = divider.data('headerColumn');
                    var contentColumn = divider.data('contentColumn');
                    var columnMinWidth = headerColumn.data('minWidth');
                    var mouseStartX = mousedownEvent.pageX;
                    var columnStartWidth = headerColumn.width();
                    var doc = $(document);
                    var body = $(document.body);

                    // Disable selection when resizing
                    body.addClass('flextable-user-select-none');
                    if ($.browser.msie) {
                        table.attr('unselectable', 'on');
                        // this fails with a range error with a large number of cells, 
                        // but IE will fail displaying a large table anyway.
                        // could use $('.flextable-table *').attr..., but that changes all flextables on the page
                        table.find('*').attr('unselectable', 'on');
                    }

                    doc.on('mousemove.flextable', function(mousemoveEvent) {
                        var dx = mousemoveEvent.pageX - mouseStartX;
                        // ensure the column width stays greater than its minimum width
                        if (columnStartWidth + dx < columnMinWidth) {
                            dx = columnMinWidth - columnStartWidth;
                        }
                        setWidths(headerColumn, contentColumn, columnStartWidth + dx);
                    });

                    doc.on('mouseup.flextable', function() {
                        doc.off('.flextable');

                        // Re-enable selection
                        body.removeClass('flextable-user-select-none');
                        if ($.browser.msie) {
                            table.removeAttr('unselectable');
                            table.find('*').removeAttr('unselectable');
                        }
                        if (settings.contentWidthChanged) {
                            settings.contentWidthChanged(headerColumns.width());
                        }
                    });
                });

                table.on('dblclick.flextable', '.flextable-column-divider', function(event) {
                    var divider = $(this);
                    var headerColumn = divider.data('headerColumn');
                    var contentColumn = divider.data('contentColumn');
                    var contentColumnWidth = contentColumn.data('contentWidth');
                    var padding = contentColumn.data('padding');
                    var minWidth = headerColumn.data('minWidth');

                    setWidths(headerColumn, contentColumn, Math.max(contentColumnWidth + padding, minWidth));
                    if (settings.contentWidthChanged) {
                        settings.contentWidthChanged(headerColumns.width());
                    }
                });
            });
        },

        remove: function () {
            return this.each(function() {
                var $this = $(this);
                $this.html('');
            });
        }

    };

    $.fn.flextable = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.create.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.fn.flextable');
        }
    };

}(jQuery));


/*!
 * iScroll v4.2.5 ~ Copyright (c) 2012 Matteo Spinelli, http://cubiq.org
 * Released under MIT license, http://cubiq.org/license
 */
(function(window, doc){
var m = Math,
	dummyStyle = doc.createElement('div').style,
	vendor = (function () {
		var vendors = 't,webkitT,MozT,msT,OT'.split(','),
			t,
			i = 0,
			l = vendors.length;

		for ( ; i < l; i++ ) {
			t = vendors[i] + 'ransform';
			if ( t in dummyStyle ) {
				return vendors[i].substr(0, vendors[i].length - 1);
			}
		}

		return false;
	})(),
	cssVendor = vendor ? '-' + vendor.toLowerCase() + '-' : '',

	// Style properties
	transform = prefixStyle('transform'),
	transitionProperty = prefixStyle('transitionProperty'),
	transitionDuration = prefixStyle('transitionDuration'),
	transformOrigin = prefixStyle('transformOrigin'),
	transitionTimingFunction = prefixStyle('transitionTimingFunction'),
	transitionDelay = prefixStyle('transitionDelay'),

    // Browser capabilities
	isAndroid = (/android/gi).test(navigator.appVersion),
	isIDevice = (/iphone|ipad/gi).test(navigator.appVersion),
	isTouchPad = (/hp-tablet/gi).test(navigator.appVersion),

    has3d = prefixStyle('perspective') in dummyStyle,
    hasTouch = 'ontouchstart' in window && !isTouchPad,
    hasTransform = vendor !== false,
    hasTransitionEnd = prefixStyle('transition') in dummyStyle,

	RESIZE_EV = 'onorientationchange' in window ? 'orientationchange' : 'resize',
	START_EV = hasTouch ? 'touchstart' : 'mousedown',
	MOVE_EV = hasTouch ? 'touchmove' : 'mousemove',
	END_EV = hasTouch ? 'touchend' : 'mouseup',
	CANCEL_EV = hasTouch ? 'touchcancel' : 'mouseup',
	TRNEND_EV = (function () {
		if ( vendor === false ) return false;

		var transitionEnd = {
				''			: 'transitionend',
				'webkit'	: 'webkitTransitionEnd',
				'Moz'		: 'transitionend',
				'O'			: 'otransitionend',
				'ms'		: 'MSTransitionEnd'
			};

		return transitionEnd[vendor];
	})(),

	nextFrame = (function() {
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback) { return setTimeout(callback, 1); };
	})(),
	cancelFrame = (function () {
		return window.cancelRequestAnimationFrame ||
			window.webkitCancelAnimationFrame ||
			window.webkitCancelRequestAnimationFrame ||
			window.mozCancelRequestAnimationFrame ||
			window.oCancelRequestAnimationFrame ||
			window.msCancelRequestAnimationFrame ||
			clearTimeout;
	})(),

	// Helpers
	translateZ = has3d ? ' translateZ(0)' : '',

	// Constructor
	iScroll = function (el, options) {
		var that = this,
			i;

		that.wrapper = typeof el == 'object' ? el : doc.getElementById(el);
		that.wrapper.style.overflow = 'hidden';
		that.scroller = that.wrapper.children[0];

		// Default options
		that.options = {
			hScroll: true,
			vScroll: true,
			x: 0,
			y: 0,
			bounce: true,
			bounceLock: false,
			momentum: true,
			lockDirection: true,
			useTransform: true,
			useTransition: false,
			topOffset: 0,
			checkDOMChanges: false,		// Experimental
			handleClick: true,

			// Scrollbar
			hScrollbar: true,
			vScrollbar: true,
			fixedScrollbar: isAndroid,
			hideScrollbar: isIDevice,
			fadeScrollbar: isIDevice && has3d,
			scrollbarClass: '',

			// Zoom
			zoom: false,
			zoomMin: 1,
			zoomMax: 4,
			doubleTapZoom: 2,
			wheelAction: 'scroll',

			// Snap
			snap: false,
			snapThreshold: 1,

			// Events
			onRefresh: null,
			onBeforeScrollStart: function (e) { e.preventDefault(); },
			onScrollStart: null,
			onBeforeScrollMove: null,
			onScrollMove: null,
			onBeforeScrollEnd: null,
			onScrollEnd: null,
			onTouchEnd: null,
			onDestroy: null,
			onZoomStart: null,
			onZoom: null,
			onZoomEnd: null
		};

		// User defined options
		for (i in options) that.options[i] = options[i];
		
		// Set starting position
		that.x = that.options.x;
		that.y = that.options.y;

		// Normalize options
		that.options.useTransform = hasTransform && that.options.useTransform;
		that.options.hScrollbar = that.options.hScroll && that.options.hScrollbar;
		that.options.vScrollbar = that.options.vScroll && that.options.vScrollbar;
		that.options.zoom = that.options.useTransform && that.options.zoom;
		that.options.useTransition = hasTransitionEnd && that.options.useTransition;

		// Helpers FIX ANDROID BUG!
		// translate3d and scale doesn't work together!
		// Ignoring 3d ONLY WHEN YOU SET that.options.zoom
		if ( that.options.zoom && isAndroid ){
			translateZ = '';
		}
		
		// Set some default styles
		that.scroller.style[transitionProperty] = that.options.useTransform ? cssVendor + 'transform' : 'top left';
		that.scroller.style[transitionDuration] = '0';
		that.scroller.style[transformOrigin] = '0 0';
		if (that.options.useTransition) that.scroller.style[transitionTimingFunction] = 'cubic-bezier(0.33,0.66,0.66,1)';
		
		if (that.options.useTransform) that.scroller.style[transform] = 'translate(' + that.x + 'px,' + that.y + 'px)' + translateZ;
		else that.scroller.style.cssText += ';position:absolute;top:' + that.y + 'px;left:' + that.x + 'px';

		if (that.options.useTransition) that.options.fixedScrollbar = true;

		that.refresh();

		that._bind(RESIZE_EV, window);
		that._bind(START_EV);
		if (!hasTouch) {
			if (that.options.wheelAction != 'none') {
				that._bind('DOMMouseScroll');
				that._bind('mousewheel');
			}
		}

		if (that.options.checkDOMChanges) that.checkDOMTime = setInterval(function () {
			that._checkDOMChanges();
		}, 500);
	};

// Prototype
iScroll.prototype = {
	enabled: true,
	x: 0,
	y: 0,
	steps: [],
	scale: 1,
	currPageX: 0, currPageY: 0,
	pagesX: [], pagesY: [],
	aniTime: null,
	wheelZoomCount: 0,
	
	handleEvent: function (e) {
		var that = this;
		switch(e.type) {
			case START_EV:
				if (!hasTouch && e.button !== 0) return;
				that._start(e);
				break;
			case MOVE_EV: that._move(e); break;
			case END_EV:
			case CANCEL_EV: that._end(e); break;
			case RESIZE_EV: that._resize(); break;
			case 'DOMMouseScroll': case 'mousewheel': that._wheel(e); break;
			case TRNEND_EV: that._transitionEnd(e); break;
		}
	},
	
	_checkDOMChanges: function () {
		if (this.moved || this.zoomed || this.animating ||
			(this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale)) return;

		this.refresh();
	},
	
	_scrollbar: function (dir) {
		var that = this,
			bar;

		if (!that[dir + 'Scrollbar']) {
			if (that[dir + 'ScrollbarWrapper']) {
				if (hasTransform) that[dir + 'ScrollbarIndicator'].style[transform] = '';
				that[dir + 'ScrollbarWrapper'].parentNode.removeChild(that[dir + 'ScrollbarWrapper']);
				that[dir + 'ScrollbarWrapper'] = null;
				that[dir + 'ScrollbarIndicator'] = null;
			}

			return;
		}

		if (!that[dir + 'ScrollbarWrapper']) {
			// Create the scrollbar wrapper
			bar = doc.createElement('div');

			if (that.options.scrollbarClass) bar.className = that.options.scrollbarClass + dir.toUpperCase();
			else bar.style.cssText = 'position:absolute;z-index:100;' + (dir == 'h' ? 'height:7px;bottom:1px;left:2px;right:' + (that.vScrollbar ? '7' : '2') + 'px' : 'width:7px;bottom:' + (that.hScrollbar ? '7' : '2') + 'px;top:2px;right:1px');

			bar.style.cssText += ';pointer-events:none;' + cssVendor + 'transition-property:opacity;' + cssVendor + 'transition-duration:' + (that.options.fadeScrollbar ? '350ms' : '0') + ';overflow:hidden;opacity:' + (that.options.hideScrollbar ? '0' : '1');

			that.wrapper.appendChild(bar);
			that[dir + 'ScrollbarWrapper'] = bar;

			// Create the scrollbar indicator
			bar = doc.createElement('div');
			if (!that.options.scrollbarClass) {
				bar.style.cssText = 'position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);' + cssVendor + 'background-clip:padding-box;' + cssVendor + 'box-sizing:border-box;' + (dir == 'h' ? 'height:100%' : 'width:100%') + ';' + cssVendor + 'border-radius:3px;border-radius:3px';
			}
			bar.style.cssText += ';pointer-events:none;' + cssVendor + 'transition-property:' + cssVendor + 'transform;' + cssVendor + 'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);' + cssVendor + 'transition-duration:0;' + cssVendor + 'transform: translate(0,0)' + translateZ;
			if (that.options.useTransition) bar.style.cssText += ';' + cssVendor + 'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)';

			that[dir + 'ScrollbarWrapper'].appendChild(bar);
			that[dir + 'ScrollbarIndicator'] = bar;
		}

		if (dir == 'h') {
			that.hScrollbarSize = that.hScrollbarWrapper.clientWidth;
			that.hScrollbarIndicatorSize = m.max(m.round(that.hScrollbarSize * that.hScrollbarSize / that.scrollerW), 8);
			that.hScrollbarIndicator.style.width = that.hScrollbarIndicatorSize + 'px';
			that.hScrollbarMaxScroll = that.hScrollbarSize - that.hScrollbarIndicatorSize;
			that.hScrollbarProp = that.hScrollbarMaxScroll / that.maxScrollX;
		} else {
			that.vScrollbarSize = that.vScrollbarWrapper.clientHeight;
			that.vScrollbarIndicatorSize = m.max(m.round(that.vScrollbarSize * that.vScrollbarSize / that.scrollerH), 8);
			that.vScrollbarIndicator.style.height = that.vScrollbarIndicatorSize + 'px';
			that.vScrollbarMaxScroll = that.vScrollbarSize - that.vScrollbarIndicatorSize;
			that.vScrollbarProp = that.vScrollbarMaxScroll / that.maxScrollY;
		}

		// Reset position
		that._scrollbarPos(dir, true);
	},
	
	_resize: function () {
		var that = this;
		setTimeout(function () { that.refresh(); }, isAndroid ? 200 : 0);
	},
	
	_pos: function (x, y) {
		if (this.zoomed) return;

		x = this.hScroll ? x : 0;
		y = this.vScroll ? y : 0;

		if (this.options.useTransform) {
			this.scroller.style[transform] = 'translate(' + x + 'px,' + y + 'px) scale(' + this.scale + ')' + translateZ;
		} else {
			x = m.round(x);
			y = m.round(y);
			this.scroller.style.left = x + 'px';
			this.scroller.style.top = y + 'px';
		}

		this.x = x;
		this.y = y;

		this._scrollbarPos('h');
		this._scrollbarPos('v');
	},

	_scrollbarPos: function (dir, hidden) {
		var that = this,
			pos = dir == 'h' ? that.x : that.y,
			size;

		if (!that[dir + 'Scrollbar']) return;

		pos = that[dir + 'ScrollbarProp'] * pos;

		if (pos < 0) {
			if (!that.options.fixedScrollbar) {
				size = that[dir + 'ScrollbarIndicatorSize'] + m.round(pos * 3);
				if (size < 8) size = 8;
				that[dir + 'ScrollbarIndicator'].style[dir == 'h' ? 'width' : 'height'] = size + 'px';
			}
			pos = 0;
		} else if (pos > that[dir + 'ScrollbarMaxScroll']) {
			if (!that.options.fixedScrollbar) {
				size = that[dir + 'ScrollbarIndicatorSize'] - m.round((pos - that[dir + 'ScrollbarMaxScroll']) * 3);
				if (size < 8) size = 8;
				that[dir + 'ScrollbarIndicator'].style[dir == 'h' ? 'width' : 'height'] = size + 'px';
				pos = that[dir + 'ScrollbarMaxScroll'] + (that[dir + 'ScrollbarIndicatorSize'] - size);
			} else {
				pos = that[dir + 'ScrollbarMaxScroll'];
			}
		}

		that[dir + 'ScrollbarWrapper'].style[transitionDelay] = '0';
		that[dir + 'ScrollbarWrapper'].style.opacity = hidden && that.options.hideScrollbar ? '0' : '1';
		that[dir + 'ScrollbarIndicator'].style[transform] = 'translate(' + (dir == 'h' ? pos + 'px,0)' : '0,' + pos + 'px)') + translateZ;
	},
	
	_start: function (e) {
		var that = this,
			point = hasTouch ? e.touches[0] : e,
			matrix, x, y,
			c1, c2;

		if (!that.enabled) return;

		if (that.options.onBeforeScrollStart) that.options.onBeforeScrollStart.call(that, e);

		if (that.options.useTransition || that.options.zoom) that._transitionTime(0);

		that.moved = false;
		that.animating = false;
		that.zoomed = false;
		that.distX = 0;
		that.distY = 0;
		that.absDistX = 0;
		that.absDistY = 0;
		that.dirX = 0;
		that.dirY = 0;

		// Gesture start
		if (that.options.zoom && hasTouch && e.touches.length > 1) {
			c1 = m.abs(e.touches[0].pageX-e.touches[1].pageX);
			c2 = m.abs(e.touches[0].pageY-e.touches[1].pageY);
			that.touchesDistStart = m.sqrt(c1 * c1 + c2 * c2);

			that.originX = m.abs(e.touches[0].pageX + e.touches[1].pageX - that.wrapperOffsetLeft * 2) / 2 - that.x;
			that.originY = m.abs(e.touches[0].pageY + e.touches[1].pageY - that.wrapperOffsetTop * 2) / 2 - that.y;

			if (that.options.onZoomStart) that.options.onZoomStart.call(that, e);
		}

		if (that.options.momentum) {
			if (that.options.useTransform) {
				// Very lame general purpose alternative to CSSMatrix
				matrix = getComputedStyle(that.scroller, null)[transform].replace(/[^0-9\-.,]/g, '').split(',');
				x = +(matrix[12] || matrix[4]);
				y = +(matrix[13] || matrix[5]);
			} else {
				x = +getComputedStyle(that.scroller, null).left.replace(/[^0-9-]/g, '');
				y = +getComputedStyle(that.scroller, null).top.replace(/[^0-9-]/g, '');
			}
			
			if (x != that.x || y != that.y) {
				if (that.options.useTransition) that._unbind(TRNEND_EV);
				else cancelFrame(that.aniTime);
				that.steps = [];
				that._pos(x, y);
				if (that.options.onScrollEnd) that.options.onScrollEnd.call(that);
			}
		}

		that.absStartX = that.x;	// Needed by snap threshold
		that.absStartY = that.y;

		that.startX = that.x;
		that.startY = that.y;
		that.pointX = point.pageX;
		that.pointY = point.pageY;

		that.startTime = e.timeStamp || Date.now();

		if (that.options.onScrollStart) that.options.onScrollStart.call(that, e);

		that._bind(MOVE_EV, window);
		that._bind(END_EV, window);
		that._bind(CANCEL_EV, window);
	},
	
	_move: function (e) {
		var that = this,
			point = hasTouch ? e.touches[0] : e,
			deltaX = point.pageX - that.pointX,
			deltaY = point.pageY - that.pointY,
			newX = that.x + deltaX,
			newY = that.y + deltaY,
			c1, c2, scale,
			timestamp = e.timeStamp || Date.now();

		if (that.options.onBeforeScrollMove) that.options.onBeforeScrollMove.call(that, e);

		// Zoom
		if (that.options.zoom && hasTouch && e.touches.length > 1) {
			c1 = m.abs(e.touches[0].pageX - e.touches[1].pageX);
			c2 = m.abs(e.touches[0].pageY - e.touches[1].pageY);
			that.touchesDist = m.sqrt(c1*c1+c2*c2);

			that.zoomed = true;

			scale = 1 / that.touchesDistStart * that.touchesDist * this.scale;

			if (scale < that.options.zoomMin) scale = 0.5 * that.options.zoomMin * Math.pow(2.0, scale / that.options.zoomMin);
			else if (scale > that.options.zoomMax) scale = 2.0 * that.options.zoomMax * Math.pow(0.5, that.options.zoomMax / scale);

			that.lastScale = scale / this.scale;

			newX = this.originX - this.originX * that.lastScale + this.x,
			newY = this.originY - this.originY * that.lastScale + this.y;

			this.scroller.style[transform] = 'translate(' + newX + 'px,' + newY + 'px) scale(' + scale + ')' + translateZ;

			if (that.options.onZoom) that.options.onZoom.call(that, e);
			return;
		}

		that.pointX = point.pageX;
		that.pointY = point.pageY;

		// Slow down if outside of the boundaries
		if (newX > 0 || newX < that.maxScrollX) {
			newX = that.options.bounce ? that.x + (deltaX / 2) : newX >= 0 || that.maxScrollX >= 0 ? 0 : that.maxScrollX;
		}
		if (newY > that.minScrollY || newY < that.maxScrollY) {
			newY = that.options.bounce ? that.y + (deltaY / 2) : newY >= that.minScrollY || that.maxScrollY >= 0 ? that.minScrollY : that.maxScrollY;
		}

		that.distX += deltaX;
		that.distY += deltaY;
		that.absDistX = m.abs(that.distX);
		that.absDistY = m.abs(that.distY);

		if (that.absDistX < 6 && that.absDistY < 6) {
			return;
		}

		// Lock direction
		if (that.options.lockDirection) {
			if (that.absDistX > that.absDistY + 5) {
				newY = that.y;
				deltaY = 0;
			} else if (that.absDistY > that.absDistX + 5) {
				newX = that.x;
				deltaX = 0;
			}
		}

		that.moved = true;
		that._pos(newX, newY);
		that.dirX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
		that.dirY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

		if (timestamp - that.startTime > 300) {
			that.startTime = timestamp;
			that.startX = that.x;
			that.startY = that.y;
		}
		
		if (that.options.onScrollMove) that.options.onScrollMove.call(that, e);
	},
	
	_end: function (e) {
		if (hasTouch && e.touches.length !== 0) return;

		var that = this,
			point = hasTouch ? e.changedTouches[0] : e,
			target, ev,
			momentumX = { dist:0, time:0 },
			momentumY = { dist:0, time:0 },
			duration = (e.timeStamp || Date.now()) - that.startTime,
			newPosX = that.x,
			newPosY = that.y,
			distX, distY,
			newDuration,
			snap,
			scale;

		that._unbind(MOVE_EV, window);
		that._unbind(END_EV, window);
		that._unbind(CANCEL_EV, window);

		if (that.options.onBeforeScrollEnd) that.options.onBeforeScrollEnd.call(that, e);

		if (that.zoomed) {
			scale = that.scale * that.lastScale;
			scale = Math.max(that.options.zoomMin, scale);
			scale = Math.min(that.options.zoomMax, scale);
			that.lastScale = scale / that.scale;
			that.scale = scale;

			that.x = that.originX - that.originX * that.lastScale + that.x;
			that.y = that.originY - that.originY * that.lastScale + that.y;
			
			that.scroller.style[transitionDuration] = '200ms';
			that.scroller.style[transform] = 'translate(' + that.x + 'px,' + that.y + 'px) scale(' + that.scale + ')' + translateZ;
			
			that.zoomed = false;
			that.refresh();

			if (that.options.onZoomEnd) that.options.onZoomEnd.call(that, e);
			return;
		}

		if (!that.moved) {
			if (hasTouch) {
				if (that.doubleTapTimer && that.options.zoom) {
					// Double tapped
					clearTimeout(that.doubleTapTimer);
					that.doubleTapTimer = null;
					if (that.options.onZoomStart) that.options.onZoomStart.call(that, e);
					that.zoom(that.pointX, that.pointY, that.scale == 1 ? that.options.doubleTapZoom : 1);
					if (that.options.onZoomEnd) {
						setTimeout(function() {
							that.options.onZoomEnd.call(that, e);
						}, 200); // 200 is default zoom duration
					}
				} else if (this.options.handleClick) {
					that.doubleTapTimer = setTimeout(function () {
						that.doubleTapTimer = null;

						// Find the last touched element
						target = point.target;
						while (target.nodeType != 1) target = target.parentNode;

						if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA') {
							ev = doc.createEvent('MouseEvents');
							ev.initMouseEvent('click', true, true, e.view, 1,
								point.screenX, point.screenY, point.clientX, point.clientY,
								e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
								0, null);
							ev._fake = true;
							target.dispatchEvent(ev);
						}
					}, that.options.zoom ? 250 : 0);
				}
			}

			that._resetPos(400);

			if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
			return;
		}

		if (duration < 300 && that.options.momentum) {
			momentumX = newPosX ? that._momentum(newPosX - that.startX, duration, -that.x, that.scrollerW - that.wrapperW + that.x, that.options.bounce ? that.wrapperW : 0) : momentumX;
			momentumY = newPosY ? that._momentum(newPosY - that.startY, duration, -that.y, (that.maxScrollY < 0 ? that.scrollerH - that.wrapperH + that.y - that.minScrollY : 0), that.options.bounce ? that.wrapperH : 0) : momentumY;

			newPosX = that.x + momentumX.dist;
			newPosY = that.y + momentumY.dist;

			if ((that.x > 0 && newPosX > 0) || (that.x < that.maxScrollX && newPosX < that.maxScrollX)) momentumX = { dist:0, time:0 };
			if ((that.y > that.minScrollY && newPosY > that.minScrollY) || (that.y < that.maxScrollY && newPosY < that.maxScrollY)) momentumY = { dist:0, time:0 };
		}

		if (momentumX.dist || momentumY.dist) {
			newDuration = m.max(m.max(momentumX.time, momentumY.time), 10);

			// Do we need to snap?
			if (that.options.snap) {
				distX = newPosX - that.absStartX;
				distY = newPosY - that.absStartY;
				if (m.abs(distX) < that.options.snapThreshold && m.abs(distY) < that.options.snapThreshold) { that.scrollTo(that.absStartX, that.absStartY, 200); }
				else {
					snap = that._snap(newPosX, newPosY);
					newPosX = snap.x;
					newPosY = snap.y;
					newDuration = m.max(snap.time, newDuration);
				}
			}

			that.scrollTo(m.round(newPosX), m.round(newPosY), newDuration);

			if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
			return;
		}

		// Do we need to snap?
		if (that.options.snap) {
			distX = newPosX - that.absStartX;
			distY = newPosY - that.absStartY;
			if (m.abs(distX) < that.options.snapThreshold && m.abs(distY) < that.options.snapThreshold) that.scrollTo(that.absStartX, that.absStartY, 200);
			else {
				snap = that._snap(that.x, that.y);
				if (snap.x != that.x || snap.y != that.y) that.scrollTo(snap.x, snap.y, snap.time);
			}

			if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
			return;
		}

		that._resetPos(200);
		if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
	},
	
	_resetPos: function (time) {
		var that = this,
			resetX = that.x >= 0 ? 0 : that.x < that.maxScrollX ? that.maxScrollX : that.x,
			resetY = that.y >= that.minScrollY || that.maxScrollY > 0 ? that.minScrollY : that.y < that.maxScrollY ? that.maxScrollY : that.y;

		if (resetX == that.x && resetY == that.y) {
			if (that.moved) {
				that.moved = false;
				if (that.options.onScrollEnd) that.options.onScrollEnd.call(that);		// Execute custom code on scroll end
			}

			if (that.hScrollbar && that.options.hideScrollbar) {
				if (vendor == 'webkit') that.hScrollbarWrapper.style[transitionDelay] = '300ms';
				that.hScrollbarWrapper.style.opacity = '0';
			}
			if (that.vScrollbar && that.options.hideScrollbar) {
				if (vendor == 'webkit') that.vScrollbarWrapper.style[transitionDelay] = '300ms';
				that.vScrollbarWrapper.style.opacity = '0';
			}

			return;
		}

		that.scrollTo(resetX, resetY, time || 0);
	},

	_wheel: function (e) {
		var that = this,
			wheelDeltaX, wheelDeltaY,
			deltaX, deltaY,
			deltaScale;

		if ('wheelDeltaX' in e) {
			wheelDeltaX = e.wheelDeltaX / 12;
			wheelDeltaY = e.wheelDeltaY / 12;
		} else if('wheelDelta' in e) {
			wheelDeltaX = wheelDeltaY = e.wheelDelta / 12;
		} else if ('detail' in e) {
			wheelDeltaX = wheelDeltaY = -e.detail * 3;
		} else {
			return;
		}
		
		if (that.options.wheelAction == 'zoom') {
			deltaScale = that.scale * Math.pow(2, 1/3 * (wheelDeltaY ? wheelDeltaY / Math.abs(wheelDeltaY) : 0));
			if (deltaScale < that.options.zoomMin) deltaScale = that.options.zoomMin;
			if (deltaScale > that.options.zoomMax) deltaScale = that.options.zoomMax;
			
			if (deltaScale != that.scale) {
				if (!that.wheelZoomCount && that.options.onZoomStart) that.options.onZoomStart.call(that, e);
				that.wheelZoomCount++;
				
				that.zoom(e.pageX, e.pageY, deltaScale, 400);
				
				setTimeout(function() {
					that.wheelZoomCount--;
					if (!that.wheelZoomCount && that.options.onZoomEnd) that.options.onZoomEnd.call(that, e);
				}, 400);
			}
			
			return;
		}
		
		deltaX = that.x + wheelDeltaX;
		deltaY = that.y + wheelDeltaY;

		if (deltaX > 0) deltaX = 0;
		else if (deltaX < that.maxScrollX) deltaX = that.maxScrollX;

		if (deltaY > that.minScrollY) deltaY = that.minScrollY;
		else if (deltaY < that.maxScrollY) deltaY = that.maxScrollY;
    
		if (that.maxScrollY < 0) {
			that.scrollTo(deltaX, deltaY, 0);
		}
	},
	
	_transitionEnd: function (e) {
		var that = this;

		if (e.target != that.scroller) return;

		that._unbind(TRNEND_EV);
		
		that._startAni();
	},


	/**
	*
	* Utilities
	*
	*/
	_startAni: function () {
		var that = this,
			startX = that.x, startY = that.y,
			startTime = Date.now(),
			step, easeOut,
			animate;

		if (that.animating) return;
		
		if (!that.steps.length) {
			that._resetPos(400);
			return;
		}
		
		step = that.steps.shift();
		
		if (step.x == startX && step.y == startY) step.time = 0;

		that.animating = true;
		that.moved = true;
		
		if (that.options.useTransition) {
			that._transitionTime(step.time);
			that._pos(step.x, step.y);
			that.animating = false;
			if (step.time) that._bind(TRNEND_EV);
			else that._resetPos(0);
			return;
		}

		animate = function () {
			var now = Date.now(),
				newX, newY;

			if (now >= startTime + step.time) {
				that._pos(step.x, step.y);
				that.animating = false;
				if (that.options.onAnimationEnd) that.options.onAnimationEnd.call(that);			// Execute custom code on animation end
				that._startAni();
				return;
			}

			now = (now - startTime) / step.time - 1;
			easeOut = m.sqrt(1 - now * now);
			newX = (step.x - startX) * easeOut + startX;
			newY = (step.y - startY) * easeOut + startY;
			that._pos(newX, newY);
			if (that.animating) that.aniTime = nextFrame(animate);
		};

		animate();
	},

	_transitionTime: function (time) {
		time += 'ms';
		this.scroller.style[transitionDuration] = time;
		if (this.hScrollbar) this.hScrollbarIndicator.style[transitionDuration] = time;
		if (this.vScrollbar) this.vScrollbarIndicator.style[transitionDuration] = time;
	},

	_momentum: function (dist, time, maxDistUpper, maxDistLower, size) {
		var deceleration = 0.0006,
			speed = m.abs(dist) / time,
			newDist = (speed * speed) / (2 * deceleration),
			newTime = 0, outsideDist = 0;

		// Proportinally reduce speed if we are outside of the boundaries
		if (dist > 0 && newDist > maxDistUpper) {
			outsideDist = size / (6 / (newDist / speed * deceleration));
			maxDistUpper = maxDistUpper + outsideDist;
			speed = speed * maxDistUpper / newDist;
			newDist = maxDistUpper;
		} else if (dist < 0 && newDist > maxDistLower) {
			outsideDist = size / (6 / (newDist / speed * deceleration));
			maxDistLower = maxDistLower + outsideDist;
			speed = speed * maxDistLower / newDist;
			newDist = maxDistLower;
		}

		newDist = newDist * (dist < 0 ? -1 : 1);
		newTime = speed / deceleration;

		return { dist: newDist, time: m.round(newTime) };
	},

	_offset: function (el) {
		var left = -el.offsetLeft,
			top = -el.offsetTop;
			
		while (el = el.offsetParent) {
			left -= el.offsetLeft;
			top -= el.offsetTop;
		}
		
		if (el != this.wrapper) {
			left *= this.scale;
			top *= this.scale;
		}

		return { left: left, top: top };
	},

	_snap: function (x, y) {
		var that = this,
			i, l,
			page, time,
			sizeX, sizeY;

		// Check page X
		page = that.pagesX.length - 1;
		for (i=0, l=that.pagesX.length; i<l; i++) {
			if (x >= that.pagesX[i]) {
				page = i;
				break;
			}
		}
		if (page == that.currPageX && page > 0 && that.dirX < 0) page--;
		x = that.pagesX[page];
		sizeX = m.abs(x - that.pagesX[that.currPageX]);
		sizeX = sizeX ? m.abs(that.x - x) / sizeX * 500 : 0;
		that.currPageX = page;

		// Check page Y
		page = that.pagesY.length-1;
		for (i=0; i<page; i++) {
			if (y >= that.pagesY[i]) {
				page = i;
				break;
			}
		}
		if (page == that.currPageY && page > 0 && that.dirY < 0) page--;
		y = that.pagesY[page];
		sizeY = m.abs(y - that.pagesY[that.currPageY]);
		sizeY = sizeY ? m.abs(that.y - y) / sizeY * 500 : 0;
		that.currPageY = page;

		// Snap with constant speed (proportional duration)
		time = m.round(m.max(sizeX, sizeY)) || 200;

		return { x: x, y: y, time: time };
	},

	_bind: function (type, el, bubble) {
		(el || this.scroller).addEventListener(type, this, !!bubble);
	},

	_unbind: function (type, el, bubble) {
		(el || this.scroller).removeEventListener(type, this, !!bubble);
	},


	/**
	*
	* Public methods
	*
	*/
	destroy: function () {
		var that = this;

		that.scroller.style[transform] = '';

		// Remove the scrollbars
		that.hScrollbar = false;
		that.vScrollbar = false;
		that._scrollbar('h');
		that._scrollbar('v');

		// Remove the event listeners
		that._unbind(RESIZE_EV, window);
		that._unbind(START_EV);
		that._unbind(MOVE_EV, window);
		that._unbind(END_EV, window);
		that._unbind(CANCEL_EV, window);
		
		if (!that.options.hasTouch) {
			that._unbind('DOMMouseScroll');
			that._unbind('mousewheel');
		}
		
		if (that.options.useTransition) that._unbind(TRNEND_EV);
		
		if (that.options.checkDOMChanges) clearInterval(that.checkDOMTime);
		
		if (that.options.onDestroy) that.options.onDestroy.call(that);
	},

	refresh: function () {
		var that = this,
			offset,
			i, l,
			els,
			pos = 0,
			page = 0;

		if (that.scale < that.options.zoomMin) that.scale = that.options.zoomMin;
		that.wrapperW = that.wrapper.clientWidth || 1;
		that.wrapperH = that.wrapper.clientHeight || 1;

		that.minScrollY = -that.options.topOffset || 0;
		that.scrollerW = m.round(that.scroller.offsetWidth * that.scale);
		that.scrollerH = m.round((that.scroller.offsetHeight + that.minScrollY) * that.scale);
		that.maxScrollX = that.wrapperW - that.scrollerW;
		that.maxScrollY = that.wrapperH - that.scrollerH + that.minScrollY;
		that.dirX = 0;
		that.dirY = 0;

		if (that.options.onRefresh) that.options.onRefresh.call(that);

		that.hScroll = that.options.hScroll && that.maxScrollX < 0;
		that.vScroll = that.options.vScroll && (!that.options.bounceLock && !that.hScroll || that.scrollerH > that.wrapperH);

		that.hScrollbar = that.hScroll && that.options.hScrollbar;
		that.vScrollbar = that.vScroll && that.options.vScrollbar && that.scrollerH > that.wrapperH;

		offset = that._offset(that.wrapper);
		that.wrapperOffsetLeft = -offset.left;
		that.wrapperOffsetTop = -offset.top;

		// Prepare snap
		if (typeof that.options.snap == 'string') {
			that.pagesX = [];
			that.pagesY = [];
			els = that.scroller.querySelectorAll(that.options.snap);
			for (i=0, l=els.length; i<l; i++) {
				pos = that._offset(els[i]);
				pos.left += that.wrapperOffsetLeft;
				pos.top += that.wrapperOffsetTop;
				that.pagesX[i] = pos.left < that.maxScrollX ? that.maxScrollX : pos.left * that.scale;
				that.pagesY[i] = pos.top < that.maxScrollY ? that.maxScrollY : pos.top * that.scale;
			}
		} else if (that.options.snap) {
			that.pagesX = [];
			while (pos >= that.maxScrollX) {
				that.pagesX[page] = pos;
				pos = pos - that.wrapperW;
				page++;
			}
			if (that.maxScrollX%that.wrapperW) that.pagesX[that.pagesX.length] = that.maxScrollX - that.pagesX[that.pagesX.length-1] + that.pagesX[that.pagesX.length-1];

			pos = 0;
			page = 0;
			that.pagesY = [];
			while (pos >= that.maxScrollY) {
				that.pagesY[page] = pos;
				pos = pos - that.wrapperH;
				page++;
			}
			if (that.maxScrollY%that.wrapperH) that.pagesY[that.pagesY.length] = that.maxScrollY - that.pagesY[that.pagesY.length-1] + that.pagesY[that.pagesY.length-1];
		}

		// Prepare the scrollbars
		that._scrollbar('h');
		that._scrollbar('v');

		if (!that.zoomed) {
			that.scroller.style[transitionDuration] = '0';
			that._resetPos(400);
		}
	},

	scrollTo: function (x, y, time, relative) {
		var that = this,
			step = x,
			i, l;

		that.stop();

		if (!step.length) step = [{ x: x, y: y, time: time, relative: relative }];
		
		for (i=0, l=step.length; i<l; i++) {
			if (step[i].relative) { step[i].x = that.x - step[i].x; step[i].y = that.y - step[i].y; }
			that.steps.push({ x: step[i].x, y: step[i].y, time: step[i].time || 0 });
		}

		that._startAni();
	},

	scrollToElement: function (el, time) {
		var that = this, pos;
		el = el.nodeType ? el : that.scroller.querySelector(el);
		if (!el) return;

		pos = that._offset(el);
		pos.left += that.wrapperOffsetLeft;
		pos.top += that.wrapperOffsetTop;

		pos.left = pos.left > 0 ? 0 : pos.left < that.maxScrollX ? that.maxScrollX : pos.left;
		pos.top = pos.top > that.minScrollY ? that.minScrollY : pos.top < that.maxScrollY ? that.maxScrollY : pos.top;
		time = time === undefined ? m.max(m.abs(pos.left)*2, m.abs(pos.top)*2) : time;

		that.scrollTo(pos.left, pos.top, time);
	},

	scrollToPage: function (pageX, pageY, time) {
		var that = this, x, y;
		
		time = time === undefined ? 400 : time;

		if (that.options.onScrollStart) that.options.onScrollStart.call(that);

		if (that.options.snap) {
			pageX = pageX == 'next' ? that.currPageX+1 : pageX == 'prev' ? that.currPageX-1 : pageX;
			pageY = pageY == 'next' ? that.currPageY+1 : pageY == 'prev' ? that.currPageY-1 : pageY;

			pageX = pageX < 0 ? 0 : pageX > that.pagesX.length-1 ? that.pagesX.length-1 : pageX;
			pageY = pageY < 0 ? 0 : pageY > that.pagesY.length-1 ? that.pagesY.length-1 : pageY;

			that.currPageX = pageX;
			that.currPageY = pageY;
			x = that.pagesX[pageX];
			y = that.pagesY[pageY];
		} else {
			x = -that.wrapperW * pageX;
			y = -that.wrapperH * pageY;
			if (x < that.maxScrollX) x = that.maxScrollX;
			if (y < that.maxScrollY) y = that.maxScrollY;
		}

		that.scrollTo(x, y, time);
	},

	disable: function () {
		this.stop();
		this._resetPos(0);
		this.enabled = false;

		// If disabled after touchstart we make sure that there are no left over events
		this._unbind(MOVE_EV, window);
		this._unbind(END_EV, window);
		this._unbind(CANCEL_EV, window);
	},
	
	enable: function () {
		this.enabled = true;
	},
	
	stop: function () {
		if (this.options.useTransition) this._unbind(TRNEND_EV);
		else cancelFrame(this.aniTime);
		this.steps = [];
		this.moved = false;
		this.animating = false;
	},
	
	zoom: function (x, y, scale, time) {
		var that = this,
			relScale = scale / that.scale;

		if (!that.options.useTransform) return;

		that.zoomed = true;
		time = time === undefined ? 200 : time;
		x = x - that.wrapperOffsetLeft - that.x;
		y = y - that.wrapperOffsetTop - that.y;
		that.x = x - x * relScale + that.x;
		that.y = y - y * relScale + that.y;

		that.scale = scale;
		that.refresh();

		that.x = that.x > 0 ? 0 : that.x < that.maxScrollX ? that.maxScrollX : that.x;
		that.y = that.y > that.minScrollY ? that.minScrollY : that.y < that.maxScrollY ? that.maxScrollY : that.y;

		that.scroller.style[transitionDuration] = time + 'ms';
		that.scroller.style[transform] = 'translate(' + that.x + 'px,' + that.y + 'px) scale(' + scale + ')' + translateZ;
		that.zoomed = false;
	},
	
	isReady: function () {
		return !this.moved && !this.zoomed && !this.animating;
	}
};

function prefixStyle (style) {
	if ( vendor === '' ) return style;

	style = style.charAt(0).toUpperCase() + style.substr(1);
	return vendor + style;
}

dummyStyle = null;	// for the sake of it

if (typeof exports !== 'undefined') exports.iScroll = iScroll;
else window.iScroll = iScroll;

})(window, document);


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
/*   tableuau_add_users.js
 Provide functionality for a form that will be used to add users to a given site.
 */

// AddUsers
(function($) {
    var AddUsers = function(settings) {
        this.settings = settings;
        this.availableUserQuotaMessageTemplate =  settings.availableUserQuotaMessage;
        this.$availableUserQuota = null;
        this.availableUserQuotaQuantity = null;
        this.$titleRow = null;
        this.$form = null;
        this.$textArea = null;
        this.$singleLineMessage = null;
        this.$multiLineMessage = null;
        this.$addUserButton = null;
        this.$cancelButton = null;
        this.$licenseValCol = null;
        this.$adminCheckBox = null;
        this.$adminOptionsRow = null;
        this.$adminTypeContent = null;
        this.$adminTypeSystem = null;
        this.$spinner = null;
        this.$addUserHolder = this._makeAddUserForm();
        this.$glass = $("<div>").addClass("tab-adduser-popup-glass");
        this.$popup = $("<div>").addClass("tab-adduser-popup");

        // if the availableUserQuota is -1 then the user quota does not get shown
        if(this.settings.availableUserQuota !== -1){
            this.availableUserQuotaQuantity = this.settings.availableUserQuota;
            this._setAvailableUserQuotaMessage();
        }
        // trigger for : availableUserQuotaChange
        $("body").on('availableUserQuotaChange', $.proxy(function(e, quota) {
            if (quota !== -1) {
                this.availableUserQuotaQuantity = quota;
                this._setAvailableUserQuotaMessage();
            }
        }, this));

        // set up an exterior link that will show this Add User form
        $("table#actions_parent").on('click', '#add-user-button', $.proxy(function(e){
            this._show();
            return false;
        }, this));

        // If the Page has returned from a form POST, perhaps there are errors in the form that must be diplayed to the user
        if(this.settings.isOpen){
          this._show();
          this._setErrors();
        }

        // display errors in the 'flash' area
        if(this.settings.notice){
            set_and_highlight_flash2(this.settings.notice, this.settings.details || '', false)  ;
        }

    };
    AddUsers.prototype = {
        _restrictToUnlicensedUser: function(){
            this.$licenseValCol.find('#interactor, #viewer').prop("disabled", true);
            this.$adminCheckBox.prop("disabled", true);
            this.$licenseValCol.find('#unlicensed').prop("checked", true);
            // display message
            this._showMultiLineError([this.settings.restrictToUnlicensedUser]);
        },
        _unRestrict: function(){
            this.$licenseValCol.find('#interactor, #viewer').prop("disabled", false);
            this.$adminCheckBox.prop("disabled", false);
        },
        _addUserSubmit: function() {
            var validatorResult = this._validate();
            if (validatorResult.isValid) {
                // clear / hide existing rows
                this.$singleLineMessage.empty();
                this.$singleLineMessage.hide();
                this._disableSubmitInput();
                this.$spinner.addClass("spinner-show");
                this.$form.submit();
            } else {
                this._hideSingleLineError();
                this._showMultiLineError(validatorResult.message);
            }
        },
        _show: function() {
            var body = $("body");
            this.$glass.appendTo(body);
            this.$popup.appendTo(body);
            this.$popup.append(this.$addUserHolder);
            this.$addUserButton.on('click', $.proxy(this._addUserSubmit, this));
            this.$cancelButton.on('click', $.proxy(this._hide, this));

            if(this.availableUserQuotaQuantity === 0){
                this._restrictToUnlicensedUser();
            }else{
                this._unRestrict()
            }

            // If hasAdminOptions is true then set click handlers to the "Administer" checkbox
            if(this.settings.hasAdminOptions){
                this.$adminCheckBox.on('click', $.proxy(function(){
                    this._adminOptions(!this.$adminOptionsRow.is(":visible"));
                }, this));

                // If this administrator box has already been selected, show the radio buttons.
                if(this.settings.userRights.selections.administrator.checked){
                  this._adminOptions(true);
                }
            }
            this.$textArea.on('keyup', $.proxy(function(){

                this._hideSingleLineError();

                if(this.$textArea.val() !== ""){
                    this._enableSubmitInput();
                }else{
                    this._disableSubmitInput();
                }
            }, this));

            this.$glass.show();
            this.$popup.show();
            this.$textArea.focus();

        },
        _hide: function() {
            // If the browser is making a page request and the user hits cancel, stop the request
            if(window.stop){
                window.stop();
            } else { // ie
                window.document.execCommand('Stop');
            }
            // clear all the previous user input and messages
            this._hideSingleLineError();
            this._hideMultiLineError();
            this.$textArea.val("");
            this.$textArea.removeClass("error");
            this.$addUserHolder.remove();
            this.$glass.remove();
            this.$popup.remove();
            this.$spinner.removeClass("spinner-show");
        },
        _setAvailableUserQuotaMessage: function(){
            var color = (this.availableUserQuotaQuantity !== 0)? "#000": "#f00";
            this.$availableUserQuota.text(this.availableUserQuotaMessageTemplate.replace(/\$\{availableUserQuota\}/, this.availableUserQuotaQuantity))
                .css({color:color});
        },
        _adminOptions: function(show){
            if(!this.$adminOptionsRow){return;}
            if(show){
                this.$adminOptionsRow.show();
            }else{
                this.$adminOptionsRow.hide();
            }
            this.$adminTypeContent.prop("disabled", !show);
            this.$adminTypeSystem.prop("disabled", !show);
        },
        _hideSingleLineError: function() {
            this.$singleLineMessage.empty().hide();
        },
        _showSingleLineError: function(line) {
            this.$singleLineMessage.empty().append(this._makeErrorLine(line)).show();
        },
        _hideMultiLineError: function() {
            this.$multiLineMessage.empty().hide();
        },
        _showMultiLineError: function(lines) {
            this.$multiLineMessage.empty().hide();
            for (var i = 0, l = lines.length; i < l; i++) {
                this.$multiLineMessage.append(this._makeErrorLine(lines[i]));
            }
            if(lines.length > 0 ){
                this.$multiLineMessage.show();
            }
        },
        _makeErrorLine: function(line) {
            return $('<div>').addClass("error").text(line);
        },
        _enableSubmitInput: function(){
            this.$addUserButton.prop("disabled", false);
            this.$addUserButton.removeClass("disabled");
        },
        _disableSubmitInput: function(){
            this.$addUserButton.prop("disabled", true);
            this.$addUserButton.addClass("disabled");
        },
        _validate: function() {
            var returnObj = {
                isValid: false,
                message: []
            };
            var hasValidName = false;
            var hasInvalidEmail = false;
            // replace whitespace (except spaces) and , with ;
            var names = this.$textArea.val().replace(/((?! )[,\s])+/g, this.settings.namesStringSplitChar)
                        .split(this.settings.namesStringSplitChar);

            // Parse names, trimming and filtering out empty names.
            names = $.map(names, function(name) { return $.trim(name); });
            names = $.grep(names, function(name) { return name !== ""; });

            // Replace the processed names matching the format from server on error
            this.$textArea.val(names.join(this.settings.namesStringSplitChar));

            // Maximum names allowed
            if(names.length > this.settings.maxAllowedNames){
                returnObj.message.push( this.settings.errorMaxNamesReached );
                return returnObj;
            }
            // SaaS : Valid emails
            if (this.settings.names.validation === 'saas') { // SaaS mode
                // SaaS check for invalid emails : valid email RE should reference and correspond to documenation at fogbuz 60258
                var re = /^[^\s"(),:;<>@[\]]+@([-a-z0-9]+\.)+[a-z0-9]{2,}$/i;
                for ( var i = 0; i < names.length; ++i) {
                    var name = $.trim(names[i]);
                    if (!re.test(name) && name!=="") { // email test
                        hasInvalidEmail = true;
                        returnObj.message.push((this.settings.errorEmailSyntax.replace("${email}", names[i]))); // Expect "${email}" to be in the string to be replaced with a "name" email of user in saas
                    } else if( name!==""){ // is it a valid name?
                        hasValidName = true;
                    }
                }
                if(hasValidName && !hasInvalidEmail){
                    returnObj.isValid = true;
                }
            }else{
                returnObj.isValid = true;
            }
            return returnObj;
        },
        _setErrors: function() {
            if(this.settings.errors){
                this.$textArea.val(this.settings.errorsNames.join(this.settings.namesStringSplitChar)).addClass("error");
                this.$textArea.one("keyup", null, function(){
                    $(this).removeClass("error");
                });
                this._showSingleLineError(this.settings.errorMessage);
                this._showMultiLineError(this.settings.errors);
            }
        },
        _makeAddUserForm: function(){
            var namesLabelRow, namesRow, licenseRightsControlRow;

            var $DOMtoReturn = $('<div/>').attr({"class": "tab-addusers", "id": "addusers-holder"}) ;
            this.$form = $("<form>", {"id": "addusers", "method": "post", "action": this.settings.formAction});

            // Top row of information : $titleRow
            this.$titleRow = this._makeRow({"className": "title-row"});
            this.$spinner = $('<span>', {"class": "tab-img-spinner"});
            this.$titleRow.append(this.$spinner);
            this.$titleRow.append( this._makeMessage({"className": "label", "text": this.settings.title, "id": "addusers-title"}));

            this.$singleLineMessage = this._makeMessage({"className": "label", "id": "single-line-message"});
            this.$titleRow.append(  this.$singleLineMessage );
            this.$licenseValCol = this._makeLicenseValCol();

            // names : SaaS is emails Active Directory is AD names
            namesLabelRow = this._makeRow().append(this._makeLabel({"for": "names", "text": this.settings.names.label}));
            namesRow = this._makeNamesRow();

            // licenseRightsControl
            licenseRightsControlRow = this._makeRow();
            // Add to licenseRightControlRow
            licenseRightsControlRow.append(this._makeColumn({"className": "label", "css":{"width":95}}).append(this.settings.licenseLevel.label));
            licenseRightsControlRow.append(this.$licenseValCol);
            licenseRightsControlRow.append(this._makeColumn({"className": "label"}).append(this.settings.userRights.label));
            licenseRightsControlRow.append(this._makeUserRightsValCol());
            // all messages row
            this.$multiLineMessage = this._makeRow().attr("id","multiline-message");
            this.$multiLineMessage.hide();

            this.$form.append(namesLabelRow);
            this.$form.append(namesRow);
            this.$form.append(licenseRightsControlRow);
            this.$form.append(this._makeControlRow());
            this.$form.append(this._makeInput({"value":  this.settings.formAuthenticityToken, "name": "authenticity_token", "type": "hidden"}));

            $DOMtoReturn.append(this.$titleRow);
            $DOMtoReturn.append(this.$form);
            $DOMtoReturn.append(this.$multiLineMessage);

            this._disableSubmitInput();

            return $DOMtoReturn;
        },
        _makeLicenseValCol: function() {
            var licenseValCol = this._makeColumn();
            for ( var i = 0; i < this.settings.licenseLevel.options.length; ++i) {
                var d = this.settings.licenseLevel.options[i];
                licenseValCol.append(this._makeInput(d).prop("checked", d.checked));
                licenseValCol.append(this._makeLabel($.extend(d, {"for": d.id})));
            }
            return licenseValCol;
        },
        _makeUserRightsValCol: function() {
            var $userRightsValCol = this._makeColumn({className: "user-rights-values"});
            $userRightsValCol.append(
                this._makeInput(this.settings.userRights.selections.publish).prop("checked", this.settings.userRights.selections.publish.checked)
            );
            $userRightsValCol.append(this._makeLabel(this.settings.userRights.selections.publish));

            this.$adminCheckBox = this._makeInput(this.settings.userRights.selections.administrator).prop("checked", this.settings.userRights.selections.administrator.checked);
            $userRightsValCol.append(this.$adminCheckBox);
            $userRightsValCol.append(this._makeLabel(this.settings.userRights.selections.administrator));

            // If hasAdminOptions is true then set the click handlers
            if(this.settings.hasAdminOptions){

                this.$adminOptionsRow = this._makeRow().attr("id","admin-options-row");

                this.$adminTypeContent = this._makeInput( {"value": "content", "name": "admin_type", "type": "radio", "id": "admin_content"} )
                    .prop({"checked":this.settings.userRights.selections.administrator.admin_options.content.checked, "disabled":true});
                var adminTypeLabel = this._makeLabel({"value": "true", "name": "administrator", "type":  "radio", "id":  "administrator",
                    "text":   this.settings.userRights.selections.administrator.admin_options.content.label, "for":"admin_content"});
                this.$adminOptionsRow.append(this.$adminTypeContent);
                this.$adminOptionsRow.append(adminTypeLabel);

                this.$adminTypeSystem = this._makeInput( {"value":  "system", "name": "admin_type", "type": "radio", "id": "admin_system"} )
                    .prop({"checked":this.settings.userRights.selections.administrator.admin_options.system.checked, "disabled":true});
                this.$adminOptionsRow.append(this.$adminTypeSystem);
                this.$adminOptionsRow.append(this._makeLabel({"value": "true", "name": "administrator", "type": "radio", "id": "administrator",
                    "text": this.settings.userRights.selections.administrator.admin_options.system.label}));

                $userRightsValCol.append(this.$adminOptionsRow);
            }
            return $userRightsValCol;
        },
        _makeNamesRow: function(){
            var row = this._makeRow();
            this.$textArea = $('<textarea>').attr({"name": "names"});
            row.append(this.$textArea).append(
                this._makeLabel({'for': 'names', "text": this.settings.names.message, "class": "names-input-message"}));

            if(this.settings.availableUserQuota !== -1){
                this.$availableUserQuota = this._makeMessage({"text": "", "css": {"float": "right", "color": "#808080", "font-size": 11, "margin-right": 140}});
                row.append(this.$availableUserQuota);
            }
            return row;
        },
        _makeControlRow: function(){
            this.$cancelButton = this._makeInput({"className":"add-user-control", type: "button", name: "cancel", value: this.settings.control.cancel.label});
            this.$addUserButton =
                this._makeInput({"className":"add-user-control", type: "button", name: "add-user", value: this.settings.control.submit.label});
            this.$addUserButton.prop("disabled", true);
            var controlRow = this._makeRow({className: "control"}).append(this.$cancelButton).append(this.$addUserButton);
            return controlRow;
        },
        _makeRow: function(config) {
            var css = (config && config.css) ? config.css: {};
            var className = (config && config.className) ? config.className: "";
            return $('<div/>', {"class": "row " + className, "css": css});
        },
        _makeColumn: function(config) {
            var css = (config && config.css) ? config.css: {};
            var className = (config && config.className) ? "column " + config.className: "column";
            return $('<div/>', {"class": className, "css": css});
        },
        _makeInput: function(config) {
            var type = (config && config.type) ? config.type: "";
            var name = (config && config.name) ? config.name: "";
            var id = (config && config.id) ? config.id: "";
            var value = (config && config.value) ? config.value: "";
            var className = (config && config.className) ?  config.className: "";
            return $('<input>', {"type": type, "name": name, "id": id, "value": value}).attr({"class":className});
        },
        _makeLabel: function(config) {
            var forField = (config && config['for']) ? config['for']: "";
            var classField = (config && config['class']) ? config['class']: "";
            var text = (config && config.text) ? config.text: "";
            return $('<label>').attr({"for": forField, "class": classField}).text(text);
        },
        _makeMessage: function(config) {
            var className = (config && config.className) ? config.className: "";
            var css = (config && config.css) ? config.css: {};
            var id = (config && config.id) ? config.id: "";
            var text = (config && config.text) ? config.text: "";
            return $('<span/>', {"class": className, css: css, text: text, id: id});
        }

    };

    this.Tableau || (this.Tableau = {});
    this.Tableau.AddUsers = AddUsers;

}).call(this, jQuery);


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
  // *************************************************************
  // Alerts
  //
  // Point of entry to client-side Alerts feature.
  // Hosts Alerts.Model, Alerts.Controller, Alerts.Notifier,
  // Alerts.Menu. Simple approximation of MVC pattern followed.
  // Alerts.Notifier is the button in the masthead that displays the
  // alert count and Alerts.Menu is the UI for displaying alerts after
  // clicking that button.
  // Currently exists in the masthead of every page. Static Alerts
  // can be created to display Alerts in the page itself.
  // *************************************************************

  Alerts = function (settings) {
    this._settings = settings;

    // enforce a contract for the settings we expect to receive. Don't check
    // for isDebug, it could be undefined in release mode.
    if (this._settings &&
      this._settings.hasOwnProperty('alertsEndpointUrl') &&
      this._settings.hasOwnProperty('dismissEndpointUrl') &&
      this._settings.hasOwnProperty('retryEndpointUrl') &&
      this._settings.hasOwnProperty('datasourceParameterizedUrl') &&
      this._settings.hasOwnProperty('localizedNotifierLabel') &&
      this._settings.hasOwnProperty('localizedAlertItemStrings') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('messageZeroWorkbooksFail') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('messageOneWorkbookFail') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('messageFewWorkbooksFail') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('messageManyWorkbooksFail') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('labelDataSource') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('labelFailed') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('labelSucceeded') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('labelErrorMessage') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('labelEmbeddedDatasource') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('labelNeverRefreshed') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('actionTryAgain') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('actionEditConnection') &&
      this._settings.localizedAlertItemStrings.hasOwnProperty('actionDismiss') &&
      this._settings.hasOwnProperty('localizedFailureStrings') &&
      this._settings.localizedFailureStrings.hasOwnProperty('1000') && // unknown error
      this._settings.localizedFailureStrings.hasOwnProperty('2000') && // bad username or password
      this._settings.localizedFailureStrings.hasOwnProperty('2100') && // expired password (Salesforce)
      this._settings.localizedFailureStrings.hasOwnProperty('2200') && // access token (Google)
      this._settings.localizedFailureStrings.hasOwnProperty('3000') && // general connection (network) failure
      this._settings.localizedFailureStrings.hasOwnProperty('4000') && // overlapping schedules failure
      this._settings.localizedFailureStrings.hasOwnProperty('5000') && // salesforce invalid replication date
      this._settings.localizedFailureStrings.hasOwnProperty('10000') && // connectionless workbook failure (Google)
      this._settings.hasOwnProperty('authenticity_token') &&
      this._settings.hasOwnProperty('minPollingInterval') &&
      this._settings.hasOwnProperty('maxPollingInterval')) {

      this._model = new Model({
        'debugCallback' : $.proxy(this.throwDebugMessage, this)
      });

      this._controller = this.makeController(ControllerModeEnum.DynamicNotStarted, this._model)

      this._notifier = new Notifier({
        'localizedNotifierLabel' : this._settings.localizedNotifierLabel,
        'debugCallback' : $.proxy(this.throwDebugMessage, this)
      }, this._model, this._controller);

      this._menu = this.makeMenu(this._model, this._controller);

      this._controller.setModel(this._model);
      this._controller.setNotifier(this._notifier);
      this._controller.setMenu(this._menu);

    } else {
        // If we're debugging throw an exception to make it easier to identify a problem with
        // the parameters being sent to Alerts.
        this.throwDebugMessage('Tableau.Alerts did not receive the required parameters and settings.');
    }
  };

  // Pass in a dom element for the notifier label. Note this is not
  // the dom element for the entire button, that is owned by Masthead.
  Alerts.prototype.setDom = function(dom) {
    if (this._notifier && this._menu) {
      this._notifier.setRootDom(dom);
    } // else do nothing, basic setup of Alerts failed.
  };

  // Click the notifier button to show the Alerts menu
  Alerts.prototype.showAlertMenu = function(showingCallback, hidingCallback) {
    if (this._controller) {
      this._controller.showMenu(showingCallback, hidingCallback);
    } // else do nothing, basic setup of Alerts failed.
  };

  // Everything is ready, kick off Alerts. Call this _after_ creating an Alerts
  // object AND specifying the Notifier DOM element via setDom.
  Alerts.prototype.start = function() {
    if (this._controller) {
      this._controller.start();
    } // else do nothing, basic setup of Alerts failed.
  };

  Alerts.prototype.throwDebugMessage = function(message) {
    if (this._settings && this._settings.isDebug === true) {
      // Throw an error with messageat runtime IF we're in debug mode
      throw new Error(message);
    } // else fail silently
  };

  // Entry point for Static Alerts.
  // Currently called from the data sources page to show an alert for a given DS.
  Alerts.prototype.createStaticAlerts = function($alertAnchor, alertData) {
    var model = new Model({
      'debugCallback' : $.proxy(this.throwDebugMessage, this)
    });
    model.setServerData({ alerts: [alertData] })

    var controller = this.makeController(ControllerModeEnum.Static, model);
    controller.setStaticDom($alertAnchor);

    var menu = this.makeMenu(model, controller);
    controller.setMenu(menu);

    $alertAnchor
      .append($("<span>").addClass("tab-alerts-icon tab-alerts-datasource-actionable"))
      .append($("<span>").addClass("tab-alerts-ds-msg").text(this._settings.localizedFailureStrings[alertData.statusCode]))
      .css("visibility", "visible")
      .on("click", function(e) { menu.show(MenuModeEnum.SoftLoading, $alertAnchor); });
  };

  Alerts.prototype.makeController = function(mode, model) {
    return new Controller({
      'alertsEndpointUrl' : this._settings.alertsEndpointUrl,
      'dismissEndpointUrl' : this._settings.dismissEndpointUrl,
      'retryEndpointUrl' : this._settings.retryEndpointUrl,
      'datasourceParameterizedUrl' : this._settings.datasourceParameterizedUrl,
      'authenticity_token' : this._settings.authenticity_token,
      'minPollingInterval' : this._settings.minPollingInterval,
      'maxPollingInterval' : this._settings.maxPollingInterval
    }, mode, model);
  }

  Alerts.prototype.makeMenu = function(model, controller) {
    var menu = new Menu({
        'retryCallback' : $.proxy(controller.onAlertItemRetry, controller),
        'editCallback' : $.proxy(controller.onAlertItemEdit, controller),
        'dismissCallback' : $.proxy(controller.onAlertItemDismiss, controller),
        'datasourceCallback' : $.proxy(controller.onDatasourceNavigate, controller),
        'localizedAlertItemStrings' : this._settings.localizedAlertItemStrings,
        'localizedFailureStrings' : this._settings.localizedFailureStrings,
        'debugCallback' : $.proxy(this.throwDebugMessage, this)
      }, model, controller);
    return menu;
  };

  // *************************************************************
  // Alerts.Model
  //
  // Stores state. Consumed by all components, only updated by the
  // Controller.
  // *************************************************************

  var Model = function(settings) {
    this._settings = settings;
    this._serverData = { "alerts": [] }; // list of alerts and any other data
    this._alertsById = {}; // relate array indexes to alert id's
    this._lastUpdated = null; //datetime of last server refresh
    this._isServerDataValid = false;
    this._dataChangedOnLastUpdate = true;
  };

  // Get the count of alerts
  Model.prototype.getAlertsCount = function() {
    return this._serverData.alerts.length;
  };

  // Alert getter by 0-base index
  Model.prototype.getAlertByIndex = function(index) {
    return this._serverData.alerts[index];
  };

  // Alert getter by ID
  Model.prototype.getAlertById = function(id) {
    return this.getAlertByIndex(this._alertsById[id]);
  };

  // Get the last datetime the model was updated. Careful, this could be null.
  Model.prototype.getLastUpdated = function() {
    return this._lastUpdated;
  };

  Model.prototype.setServerData = function(newData) {
    // Enforce a contract for the data we expect to receive
    if (this.serverDataIsValid(newData)) {
      this._serverData = newData;
      this._lastUpdated = new Date();
      this.buildAlertsIdIndex();
    } else {
      this._dataChangedOnLastUpdate = true;
      this._serverData = { "alerts": [] };
      this._alertsById = {};
      this._lastUpdated = null;
      this._settings.debugCallback('Tableau.Alerts.Model validation of data failed.');
    }
  };

  // Remove an alert item by id from the local model.
  Model.prototype.removeAlertItem = function(id) {
    // Remove that item
    this._serverData.alerts.splice(this._alertsById[id], 1);

    // Part of the array just shifted by one due to removal, rebuild id index
    this.buildAlertsIdIndex();
  };

  Model.prototype.buildAlertsIdIndex = function () {
    // reset
    this._alertsById = {};

    // use object literal to build a "hash" of AlertItem id's corresponding to their
    // position in the array. This allows us to lookup an alert by array position
    // or id.
    for (var i = 0; i < this._serverData.alerts.length; i++) {
      this._alertsById[this._serverData.alerts[i].id] = i;
    }
  };

  // Validate the data we received. If there are zero alerts we can't
  // validate the alert properties and sub-properties received.
  // This is _basic_ validation to help with development/debugging and
  // enforcing a contract between server and the browser.
  Model.prototype.serverDataIsValid = function(data) {
    if (this._isServerDataValid) {
      return true;
    } else if (data.hasOwnProperty('alerts') &&
        data.alerts.length === 0) {
      return true;
    } else {
      // Only verify the full payload once.
      this._isServerDataValid =
      data.hasOwnProperty('alerts') &&
      data.alerts.length > 0 &&
      data.alerts[0].hasOwnProperty('id') && // never null, always unique
      data.alerts[0].hasOwnProperty('statusCode') &&
      data.alerts[0].hasOwnProperty('isActionable') &&
      data.alerts[0].hasOwnProperty('isEditable') &&
      data.alerts[0].hasOwnProperty('taskId') && // could be null
      data.alerts[0].hasOwnProperty('connection') &&
      data.alerts[0].hasOwnProperty('failureTimestamp') &&
      data.alerts[0].hasOwnProperty('successTimestamp') && // could be null
      data.alerts[0].hasOwnProperty('datasourceName') && // could be null
      data.alerts[0].hasOwnProperty('impactedWorkbookCount') && // could be 0
      data.alerts[0].hasOwnProperty('impactedWorkbooks');// a shared data source could have no workbooks

      return this._isServerDataValid;
    }
  };

  // *************************************************************
  // Alerts.Controller
  //
  // Implements business logic, communicates with the server, handles
  // communication/coordination between the Alerts components.
  // *************************************************************

  //Constructor
  var Controller = function(settings, mode, model) {
    this._settings = settings;
    this._nextPollingInterval = this._settings.minPollingInterval;
    this._controllerMode = mode;
    this._model = model;

    // Maximum age in ms for data to be considered "fresh"
    this.FRESH_DATA_AGE_MS = 150000; // 2.5 minutes
  };

  Controller.prototype.setModel = function(model) {
    this._model = model;
  }

  Controller.prototype.setNotifier = function(notifier) {
    this._notifier = notifier;
  }

  // Static alerts are displayed on-page starting with this element
  Controller.prototype.setStaticDom = function($el) {
    this.$staticDom = $el;
  }

  Controller.prototype.setMenu = function(menu) {
    this._menu = menu;
    this._menu.menuShowing.add($.proxy(this.onMenuShowing, this));
    this._menu.menuHiding.add($.proxy(this.onMenuHiding, this));
    this._menu.menuHidden.add($.proxy(this.onMenuHidden, this));
  }

  // Start requesting updated data. Called externally once all our dependencies are in place.
  Controller.prototype.start = function() {
    // Should only be called on a Dynamic instance of Alerts, enforce.
    if (this._controllerMode !== ControllerModeEnum.Static) {
      this._controllerMode = ControllerModeEnum.DynamicReady;
      // Refresh our current data right now
      this.requestUpdatedData();
    }
  };

  // Click the notifier button or the data source page alert item label.
  // FYI the caller could have forgotten to set the notifier dom.
  Controller.prototype.showMenu = function(showingCallback, hidingCallback) {
    if (this._notifier) {
      if ($.isFunction(showingCallback)) {
        this._showingCallback = showingCallback;
      }

      if ($.isFunction(hidingCallback)) {
        this._hidingCallback = hidingCallback;
      }

      this.resetPollingInterval();

      this.requestUpdatedData();

      this._menu.show(this.determineMenuMode(), this._notifier.getSafeButtonDom().parent());
    } //else fail silently
  };

  // The timer used for polling has ticked.
  Controller.prototype.onPollingTick = function() {
    this.requestUpdatedData();
  };

  // The model has been refreshed, perform any necessary followup
  Controller.prototype.onUpdatedData = function() {
    // go back into ready mode now that the request is finished
    this._controllerMode = ControllerModeEnum.DynamicReady;

    // update the count of alerts in the notifier
    this._notifier.updateNotifierLabel();

    // let the menu know the underlying data has changed
    this._menu.onUpdatedItems();

    // lastly, restart the polling timer
    this.startPollingTimer();
  };

  // User is hiding the menu
  Controller.prototype.onMenuHiding = function() {
    this.resetPollingInterval();
    if (this._hidingCallback) {
      this._hidingCallback();
    }
  };

  // User has hidden the menu
  Controller.prototype.onMenuHidden = function() {
    this.updateStaticDom();
  };

  // User has shwon the menu
  Controller.prototype.onMenuShowing = function() {
    this.resetPollingInterval();
    if (this._showingCallback) {
      this._showingCallback();
    }
  };

  // User has requested that a task be retried
  Controller.prototype.onAlertItemRetry = function(alertItem) {
    // jquery promises chaining isn't behaving as expected so use a nested mess
    // that chains together the requests in the proper order

    // build up nested callbacks in reverse order
    var callback_3_finishRetryByRequestingData = $.proxy(function () {
      this.resetPollingInterval();
      this.requestUpdatedData();
    }, this); 

    var callback_2_requestServerRetryAlert = $.proxy(function(alertItem) {
      return this.requestTaskRetry(alertItem.getAlertData().taskId)
        .then(callback_3_finishRetryByRequestingData);
    }, this, alertItem);
    var callback_1_requestAlertItemDismiss = $.proxy(function(alertItem) {
      this.onAlertItemHidden(alertItem);
      return this.requestAlertItemDismiss(alertItem.getAlertData().id)
        .then(callback_2_requestServerRetryAlert);
    }, this, alertItem);

    // kick of the chain
    alertItem.hideItem()
      .then(callback_1_requestAlertItemDismiss);
  };

  // Occurs after hiding animation completes, such as from retrying or dismissing an Alert.
  Controller.prototype.onAlertItemHidden = function(alertItem) {
    // remove the alert item so that we don't immediately re-show it when
    // the menu updates, before we've received updated data
    this._model.removeAlertItem(alertItem.getAlertData().id);

    // There is no notifier when Static
    if (this._controllerMode !== ControllerModeEnum.Static) {
      // update the notifier and menu
      this._notifier.updateNotifierLabel();
    }

    this._menu.onUpdatedItems();
  };

  // User has regquested to edit a connection
  Controller.prototype.onAlertItemEdit = function(id, server, port, username) {
    this.resetPollingInterval();
    // .edit refers to startEditing in _edit_lytebox.html.erb
    Tableau.EditConnection.startEditing(id);
  };

  // User has requested to dismiss an alert item via the button. This button has not been implemented.
  Controller.prototype.onAlertItemDismiss = function() {
    this.resetPollingInterval();
    throw new Error('Dismiss not implemented.');
  };

  Controller.prototype.onDatasourceNavigate = function(workbookName) {
    return this._settings.datasourceParameterizedUrl.replace('%{workbook_name}', encodeURIComponent(workbookName));
  };

  Controller.prototype.startPollingTimer = function() {
    if (this._pollinglId) { // already in progress
      // Kill the timer. It may have just completed OR a user interaction could have resulted in new data
      // and the need to reset the timer to the polling interval.
      clearTimeout(this._pollinglId);
      this._pollinglId = null;
    }
    var newPollingInterval = this.determinePollingInterval();
    if (newPollingInterval != -1) {
      this._pollinglId = setTimeout($.proxy(this.onPollingTick, this), newPollingInterval);
    }
  };

  // Retrieve the list of Alerts from the server and store them in the Model. Can be triggered by a user
  // interaction or by a polling timer tick.
  Controller.prototype.requestUpdatedData = function() {
    // Never request data when Static
    // Don't request data if we're already requesting data
    if (this._controllerMode === ControllerModeEnum.DynamicReady) {
      this._controllerMode = ControllerModeEnum.DynamicBusy;

      $.getJSON(this._settings.alertsEndpointUrl) // get the metadata
        .then($.proxy(function(newData) {
          //persist the data
          this._model.setServerData(newData);

          //trigger any followup behavior
          this.onUpdatedData();
        }, this));
    }
  };

  // Request that a refresh task be immediately re-run. This method encapsulates
  // the jquery post call.
  Controller.prototype.requestTaskRetry = function(taskId) {
    var params = { 'authenticity_token' : this._settings.authenticity_token, 'id' : taskId };

    // If retrying the refresh fails a new alert will be created.
    return $.post(this._settings.retryEndpointUrl, params);
  };

  Controller.prototype.requestAlertItemDismiss = function(alertId) {
    var params = { 'authenticity_token' : this._settings.authenticity_token, 'id' : alertId };

    // dismissal is only persisted in session state. Because session state isn't thread-safe be
    // careful to not make requeests too quickly to mitigate (not solve) overwriting it
    return $.post(this._settings.dismissEndpointUrl, params);
  };

  // Determine how to show the alert menu, a "soft" or "hard" load
  Controller.prototype.determineMenuMode = function() {
    if (this.isDataFresh()) {
      // show the menu as loading but with any existing contents because
      // the data was recently refreshed and probably hasn't changed
      return MenuModeEnum.SoftLoading;
    } else {
      // show the menu as loading and empty because the data wasn't
      // recently refreshed and probably is out of date
      return MenuModeEnum.HardLoading;
    }
  };

  // Determine if the model data is "fresh", ie updated recently
  Controller.prototype.isDataFresh = function() {
    return this._model.getLastUpdated() &&
      (new Date() - this._model.getLastUpdated()) < this.FRESH_DATA_AGE_MS;
  };

  Controller.prototype.resetPollingInterval = function() {
    this._nextPollingInterval = this._settings.minPollingInterval;
  };

  // Exponential back-off algorithm that restarts when the data changes, returns -1 to cancel polling
  Controller.prototype.determinePollingInterval = function() {
    if (this._nextPollingInterval > this._settings.maxPollingInterval) {
      // stop polling
      return -1;
    }
    var toReturn = this._nextPollingInterval;
    this._nextPollingInterval = this._nextPollingInterval * 2;
    return toReturn;
  };

  Controller.prototype.updateStaticDom = function() {
    if (this._controllerMode === ControllerModeEnum.Static &&
      this._model.getAlertsCount() === 0) {
      this.hideStaticDom();
    }
  };

  Controller.prototype.hideStaticDom = function() {
    if (this._controllerMode === ControllerModeEnum.Static && this.$staticDom) {
      this.$staticDom.hide();
    }
  };

  // *************************************************************
  // Alerts.ControllerModeEnum
  //
  // The different modes of the Alerts.Controller as an enum-style object
  // literal.
  // Dynamic modes refer to a self-updated Alerts instance.
  // Static mode doesn't request new data from server and is currently
  // used inline on Data Sources page.
  // *************************************************************

  var ControllerModeEnum = {
    // default state, server request not in progress
    DynamicReady: {value: 0, name: "DynamicReady"},
    // busy state when a server requeste has been initiated & not completed
    DynamicBusy: {value: 1, name: "DynamicBusy"},
    // waiting state when Alerts have been instantiated but not fully initialized, Alerts.start() hasn't been called
    DynamicNotStarted: {value: 2, name: "DynamicNotStarted"},
    // special state for Alerts that don't request data from server, used to display custom Alert data
    Static: {value: 3, name: "Static"}
  };


  // *************************************************************
  // Alerts.Notifier
  //
  // UI widget that acts as a button to display Alerts.Menu and that
  // includes a count of current alerts. Consumes Alerts.Model and
  // Alerts.Controller, unaware of other UI widgets.
  // *************************************************************

  //Constructor
  var Notifier = function(settings, model, controller) {
    this._settings = settings;
    this._model = model;
    this._controller = controller;

    this.FADE_IN_TIME_MS = 400;
    this.FADE_OUT_TIME_MS = 200;
  };

  Notifier.prototype.getRootDom = function() {
    if (this.$el) {
      return this.$el;
    } else {
      // If we're debugging throw an exception when a caller instantiated Alerts
      // but forgot to give us a dom element.
      this._settings.debugCallback('Tableau.Alerts.Notifier has a null root dom element.');
      // return an empty jquery object so the other get methods don't explode.
      return $();
    }
  };

  // Set the root dom that this is implement in relation to, a span containing the icon
  // and label of a button in the masthead. This can be used before the dom is attached.
  Notifier.prototype.setRootDom = function(dom) {
    this.$el = dom;

    this.$el.find('.tab-alerts-icon').addClass('tab-alerts-notifier-warning');
  };

  // This can be used before the dom is attached.
  Notifier.prototype.getLabelTextDom = function() {
    return this.getRootDom().find('.tab-alerts-notifier-label-text');
  };

  // This can be used before the dom is attached but is the highest level element
  // available.
  Notifier.prototype.getSafeButtonDom = function() {
    return this.getRootDom().parents('.tab-masthead-toolbar-alerts-button-child');
  };

  // This CANNOT be used before the dom is attached, it returns the actual top level dom element
  // for a masthead toolbar button, which isn't available until late in the masthead initialization
  // process.
  Notifier.prototype.getUnsafeButtonDom = function() {
    return this.getRootDom().parents('.tab-masthead-toolbar-button');
  };

  Notifier.prototype.hideButton = function(duration) {
    this.getUnsafeButtonDom().fadeOut(duration);
  };

  Notifier.prototype.showButton = function(duration) {
    // During setup we set display: none on the safe button dom, because the unsafe dom
    // wasn't available yet. Make sure to change this back so that when we show the unsafe
    // dom it has something visible in it.
    this.getSafeButtonDom().show();
    this.getUnsafeButtonDom().show(duration);
  };

  Notifier.prototype.updateNotifierLabel = function() {
    // match the first instance of one or more digits and replace with the alert count
    // hide the entire button when there are zero alerts

    if (this._model.getAlertsCount() > 0) {
      this.getLabelTextDom().text(
        this._settings.localizedNotifierLabel.replace(/\d+/, this._model.getAlertsCount())
      );
      this.showButton(this.FADE_IN_TIME_MS); // show the button in case it's not already visible
    } else {
      this.hideButton(this.FADE_OUT_TIME_MS); // hide the alerts notifier button when there aren't any alerts
    }
  };


  // *************************************************************
  // Alerts.Menu
  //
  // UI widget that displays the list of alerts and allows action
  // to be performed against them. Consumes Alerts.Model and
  // Alerts.Controller, uses Alerts.AlertItem and Alerts.ItemList.
  // *************************************************************

  var Menu = function(settings, model, controller) {
    this._settings = settings;
    this._model = model;
    this._controller = controller;
    this._popup = null; // Keep a reference so we can call its .hide() method
    this._itemList = null;
    this._mode = MenuModeEnum.Hidden; // Is the menu currently being shown? Default is hidden.
    this._shown = false;

    this.menuShowing = $.Callbacks();
    this.menuHiding = $.Callbacks();
    this.menuHidden = $.Callbacks();

    this.$menuContainer = null; //insert contents at #tab-alerts-menu-container-body
    this.$scrollableArea = null; //insert contents at #tab-alerts-menu-scrollable-area-body
    this.$itemList = null; //only insert items using this._itemList.insert

    //constants
    this.MENU_WIDTH = 400;
    this.FADE_IN_TIME_MS = 400;
    this.FADE_OUT_TIME_MS = 200;
  };

  // The model was updated and the Controller wants the Menu to know it. This is ignored
  // when Hidden (don't waste cpu building DOM that may not be shown) Note that until
  // this method is called the Alert Menu will have a loading spinner.
  Menu.prototype.onUpdatedItems = function() {
    if (this._model.getAlertsCount() === 0 && this._mode !== MenuModeEnum.Hidden) {
      this.hideMenu(this.FADE_OUT_TIME_MS);
    } else if (this._mode !== MenuModeEnum.Hidden) {
      this.showMenu(this.FADE_IN_TIME_MS); // make sure we're visible
      this._mode = MenuModeEnum.Visible;
      this.fillItemList();
      this.hideMenuSpinner();
    } // no else, we're already css visible and soft/hard loading or mode visible.
  };

  // The controller doesn't track whether the menu is hidden/loading/visible/etc.
  Menu.prototype.show = function(requestedMode, $anchor) {
    if (this._mode === MenuModeEnum.Hidden) {
      this.showSetup();

      // A soft load can only be performed if we've previously loaded the item list
      if (requestedMode === MenuModeEnum.SoftLoading && this._itemList) {
        this._mode = MenuModeEnum.SoftLoading;

        this.fillItemList();
        this.showMenuContainer(this.$menuContainer, $anchor);

        // VerticalScrollPane as implemented doesn't support dynamic contents very well, it relies on .height()
        // which returns 0 for unattached DOM. Now that we've attached our DOM trigger the VerticalScrollPane
        // to update and draw a scroll bar if necessary.
        // todo-dloika: Fix this. BUGZID: 78034.
        $(this.$itemList).trigger('domChanged');
      }
      // A soft load was requested but the item list hasn't been previously loaded
      // or a hard load was requested; perform a hard load
      else if (requestedMode === MenuModeEnum.SoftLoading ||
        requestedMode === MenuModeEnum.HardLoading) {

        this._mode = MenuModeEnum.HardLoading;
        this.showMenuSpinner();
        this._itemList.reset();
        this.showMenuContainer(this.$menuContainer, $anchor);
      } else {
        this._settings.debugCallback('Alerts.Menu.show was called with a null or unsupported mode.');
      }
    } else {
      this._settings.debugCallback('Alerts.Menu was shown with menu NOT hidden, this should be impossible.');
    }
  };

  Menu.prototype.showSetup = function() {
    this._shown = false; // todo-dloika: scrolling event handlers are getting wiped out after the first show,
    // fix that and re-enable reuse of non itemList dom. BUGZID: 78034.

    if (!this._shown) {
      this._shown = true;

      this.$menuContainer = this.makeMenuContainer();
      this.$scrollableArea = this.makeScrollableArea();

      this._itemList = this.makeItemList();
      this.$itemList = this._itemList.$el;

      $(this.$scrollableArea).find('#tab-alerts-menu-scrollable-area-body').append(this.$itemList);
      $(this.$menuContainer).find('#tab-alerts-menu-container-body').append(this.$scrollableArea);
    }
  };

Menu.prototype.fillItemList = function() {
    // dloika-todo: build up the dom and THEN attach, don't build dom that's attached. BUGZID: 78034.
    this._itemList.reset();
    for (var i = 0; i < this._model.getAlertsCount(); i++) {
      var settings = {
        'alertItem' : this._model.getAlertByIndex(i),
        'localizedStrings' : this._settings.localizedAlertItemStrings,
        'localizedFailureStrings' : this._settings.localizedFailureStrings,
        'hideMargin' : i === 0,
        'retryCallback' : this._settings.retryCallback,
        'editCallback' : this._settings.editCallback,
        'dismissCallback' : this._settings.dismissCallback,
        'datasourceCallback' : this._settings.datasourceCallback,
        'debugCallback' : this._settings.debugCallback
      };

      this._itemList.push(new AlertItem(settings).$el);
    }

    // Trigger the VerticalScrollPane to update and draw a scroll bar if necessary
    $(this.$itemList).trigger('domChanged');
  };

  Menu.prototype.showMenuContainer = function(menuContainer, $anchor) {
    // Save the reference so we can call .hide() later
    this._popup = new Tableau.Popup(menuContainer);

    // Place this div over the alerts menu container border where it
    // intersects with the alerts notifier button so that there isn't a
    // seam between them.
    this._popup.popup.append($('<div>')
      .addClass('tab-alerts-menu-popup')
      .css({
        'width': (this.MENU_WIDTH + 'px')
      }));

    this._popup.popup
      .on("keydown", function(e) { // bind to the dom even "keydown"
        if (e.keyCode === 27) { // esc
          popup.hide(); // This isn't jQuery.hide(), it's popup.hide()
        }
      })
      .on('hidden', $.proxy(function() { // bind to the popup event "hidden"
        this.onMenuHiding();
        $(window).off('.popup'); // remove event handlers from the popup
      }, this));

    // Positioning the popup in the top left before making it visible
    // prevents scrollbars from appearing and messing up the positioning.
    this._popup.show({
      'visibility': 'hidden',
      'top': 0,
      'left': 0
    });

    var positionMenu = $.proxy(function() {
      var offset = $anchor.offset();
      var left = offset.left + $anchor.outerWidth(true);
      var top = offset.top + $anchor.outerHeight(true);

      this._popup.popup.css({
        'left': (left - menuContainer.outerWidth(true)) + 'px',
        'top': top + 'px'
      });
    }, this);

    positionMenu();
    this.onMenuShowing();
    this._popup.popup.css('visibility', 'visible');
    positionMenu(); // Calling this a second time after making the popup visible fixes an IE bug.
    $(window).on('resize.popup', positionMenu);
  };

  Menu.prototype.showMenu = function (duration) {
    this.onMenuShowing();
    this.$menuContainer.show(duration);
  };

  Menu.prototype.hideMenu = function (duration) {
    this.onMenuHiding();
    this.$menuContainer.fadeOut(duration, $.proxy(function () {
      // Once our fadeOut animation is complete call the popups .hide method, hiding the entire menu
      // _including_ the glass pane.
      this._popup.hide();
      this.onMenuHidden();
    }, this));
  };

  Menu.prototype.onMenuShowing = function() {
    this.menuShowing.fire();
  }

  Menu.prototype.onMenuHiding = function() {
    this.menuHiding.fire();
    this._mode = MenuModeEnum.Hidden
  };

  Menu.prototype.onMenuHidden = function() {
    this.menuHidden.fire();
  };

  Menu.prototype.showMenuSpinner = function() {
    $(this.$menuContainer).find('.tab-alerts-menu-container-header').show();
  };

  Menu.prototype.hideMenuSpinner = function() {
    $(this.$menuContainer).find('.tab-alerts-menu-container-header').fadeOut();
  };

  Menu.prototype.makeMenuContainer = function() {
    var $dom = $('<div>')
      .addClass('tab-alerts-menu-container tabUserSelectNone')
      .attr('unselectable', 'on')
      .css({
        'width': (this.MENU_WIDTH + 'px')
      })
      .append(this.makeMenuContainerHeader())
      .append(this.makeMenuContainerBody())
      .append(this.makeMenuContainerFooter());

      // If there are more than 5 alerts there will be a scroll bar, make room for it
      if (this._model.getAlertsCount() > 5) {
        $dom.css({
          'padding-right': '3px'
        });
      }

      return $dom;
  };

  Menu.prototype.makeMenuContainerHeader = function() {
    // Hide the spinner by default
    return ($('<div>')
      .addClass('tab-alerts-menu-container-header')
      .attr('unselectable', 'on'))
      .append(this.makeMenuBusySpinner());
  };

  Menu.prototype.makeMenuBusySpinner = function() {
    return ($('<div>')
      .addClass('tab-alerts-menu-container-header-spinner')
      .attr('id', 'tab-alerts-menu-container-header-spinner'));
  };

  Menu.prototype.makeMenuContainerFooter = function() {
    return $('<div>')
      .addClass('tab-alerts-menu-container-footer')
      .attr('unselectable', 'on');
  };

  Menu.prototype.makeMenuContainerBody = function() {
    return $('<div>')
      .addClass('tab-alerts-menu-container-body')
      .attr('unselectable', 'on')
      .attr('id', 'tab-alerts-menu-container-body');
  };

  Menu.prototype.makeScrollableArea = function() {
    $contentBody = $('<div>')
      .addClass('tab-alerts-menu-scrollable-area-body')
      .attr('unselectable', 'on')
      .attr('id', 'tab-alerts-menu-scrollable-area-body');

    var pane = new Tableau.VerticalScrollPane({
      '$content': $contentBody,
      'minContentHeight': 559, // 559 looks nice
      'maxViewportHeight': 559
    });

    return $('<div>')
      .addClass('tab-alerts-menu-scrollable-area')
      .append(pane.$el)
      .append(this.makeScrollableAreaFooter());
  };

  Menu.prototype.makeScrollableAreaFooter = function() {
    return $('<div>')
      .addClass('tab-alerts-menu-scrollable-area-footer')
      .attr('unselectable', 'on');
  };

  Menu.prototype.makeItemList = function() {
    return new ItemList({
      'cssClass': 'tab-alerts-menu-item-list',
      'height': AlertItem.height() // BUGZID: 78034.
    });
  }

  // *************************************************************
  // Alerts.MenuModeEnum
  //
  // The different modes of the Alerts.Menu as an enum-style object
  // literal.
  // *************************************************************

  var MenuModeEnum = {
    // default menu state, not visible or in use
    Hidden: {value: 0, name: "Hidden"},
    // intermediate state, visible with busy indicator, any existing data displayed
    SoftLoading: {value: 1, name: "SoftLoading"},
    // intermediate state, visible but empty with busy indicator, waiting for fresh data to display
    HardLoading: {value: 2, name: "HardLoading"},
    // final state, visible with no busy indicator, updated data (if any) displayed
    Visible: {value: 2, name: "Visible"}
  };


  // *************************************************************
  // Alerts.AlertItem
  //
  // Base implementation for a UI widget that represents an Alert
  // Item in Alerts.Menu
  //
  // COLLAPSING WHITESPACE NOTE:
  // In order to fit long names in a small space Alert Items rely heavily
  // upon truncating text by putting it in a span styled as inline-block
  // with overflow hidden. This has an interesting side effect: leading
  // and trailing whitespace in the spans is collapsed. A whitespace after
  // the closing span tag is not collapsed, hence the jquery before(' ')
  // and after(' ') sprinkled throught the code.
  // *************************************************************

  var AlertItem = function(settings) {
    if (settings) {
      this._alertItem = settings.alertItem;
      this._localizedStrings = settings.localizedStrings;
      this._localizedFailureStrings = settings.localizedFailureStrings;
      this._hideMargin = settings.hideMargin;
      this._retryCallback = settings.retryCallback;
      this._editCallback = settings.editCallback;
      this._dismissCallback = settings.dismissCallback;
      this._datasourceCallback = settings.datasourceCallback;
      this._debugCallback = settings.debugCallback;
    }

    // CONSTANTS

    // Width in pixels after which point text will be truncated with an elipsis.
    // Workbooks
    this.ONE_WB_TEXT_WIDTH = 368;
    this.FEW_WB_TEXT_WIDTH_TWO = 280;
    this.FEW_WB_TEXT_WIDTH_THREE = 170;
    this.MANY_WB_TEXT_WIDTH = 170;
    // Datasources
    this.ONE_DS_TEXT_WIDTH = 350;
    this.BODY_DS_TEXT_WIDTH = 215;

    // Number of workbook names to display before simply displaying a count.
    // ex: "A, B, C, D, E, and F" vs "A, B, C and 3 other workbooks."
    this.MAX_WORKBOOK_NAMES = 3;

    // Animation duration when hiding AlertItem
    this.FADE_OUT_TIME_MS = 200;

    this.$el = this.makeContents();
  };

  // Create a "static" method that returns the height constant
  AlertItem.height = function() {
    return 80; // BUGZID: 78034.
  };

  AlertItem.prototype.getAlertData = function() {
    return this._alertItem;
  };

  // Edit connection was clicked
  AlertItem.prototype.onEdit = function(e) {
    this._editCallback(e.data.connectionId);
  };

  // Retry was clicked
  AlertItem.prototype.onRetry = function(e) {
    // Remove the click handler
    this.$el.find('.tab-alerts-item-action-retry').off('click');
    // Style the retry link as disabled
    this.$el.find('.tab-alerts-item-action-retry').addClass('tab-disabled');

    this._retryCallback(this);
  };

  // Dismiss button was clicked
  AlertItem.prototype.onDismiss = function(e) {
    this._dismissCallback();
    // todo-dloika: wire this to something and otherwise implement. (This feature is scheduled
    // for implementation in bugzid: 77247)
  };


  // Hide the entire AlertItem. Use fadeOut rather than hide because fadeOut doesn't
  // scale the width/height causing ugly layout as it shrinks
  // Return jquery Promise so we can chain
  AlertItem.prototype.hideItem = function(callback) {
    return this.$el.fadeOut(this.FADE_OUT_TIME_MS).promise();
  };

  AlertItem.prototype.makeContents = function() {
    // make the container
    var $dom = $('<div>')
      .addClass('tab-alerts-item')
      .attr('unselectable', 'on')
      .css({
        // 'height': AlertItem.height() + 'px', // todo-dloika: Mike moved this to css, remove height() entirely if that will work. BUGZID: 78034.
        'margin-top' : this._hideMargin ? '0' : '2px' // don't add a top margin for the first item in the list
      });

    $dom.append(this.makeContentsHeader());

    // body of Alert Item text
    $dom.append($('<div>')
      .addClass('tab-alerts-item-body')
      .append(this.makeDataSourceContent())
      .append(this.makeFailureContent())
      .append(this.makeSuccessContent())
      .append(this.makeErrorMessageContent())
    );

    if ((this._alertItem.isActionable && this._alertItem.taskId != null) || this._alertItem.isEditable) {
      var $footer = $('<div>')
        .addClass('tab-alerts-footer')
        .appendTo($dom);

      if (this._alertItem.isActionable) {
        $footer.append(this.makeActionRetry());
      }
      if (this._alertItem.isEditable) {
        $footer.append(this.makeActionEditConnection());
      }
    }

    return $dom;
  };

  AlertItem.prototype.makeActionRetry = function () {
    var $dom = $('<span>')
      .addClass('tab-alerts-item-action-first')
      .append($('<a>')
        .addClass('tab-alerts-item-action tab-alerts-item-action-retry')
        .toggleClass('tab-disabled', this._alertItem.taskId === null)
        .text(this._localizedStrings.actionTryAgain));

    if (this._alertItem.taskId != null) {
      $dom.children('.tab-alerts-item-action-retry').on('click', { taskId : this._alertItem.taskId }, $.proxy(this.onRetry, this));
    } else {
      $dom.children('.tab-alerts-item-action-retry').addClass('tab-disabled');
    }

    return $dom;

  };

  AlertItem.prototype.makeActionEditConnection = function() {
    var $dom = $('<span>')
      .addClass('tab-alerts-item-action-last')
      .append($('<a>')
        .addClass('tab-alerts-item-action tab-alerts-item-action-edit')
        .text(this._localizedStrings.actionEditConnection));

    if (this._alertItem.connection.id != null) {
      $dom.children('.tab-alerts-item-action-edit').on('click', {
        connectionId : this._alertItem.connection.id
      }, $.proxy(this.onEdit, this));
    } else {
      $dom.children('.tab-alerts-item-action-edit').addClass('tab-disabled');
    }

    return $dom;
  };

  // Builds the header contents of the Alert Item
  AlertItem.prototype.makeContentsHeader = function() {
    var $dom = $('<div>')
      .addClass('tab-alerts-item-header');

    var $msg = $('<span>')
      .addClass('tab-alerts-item-header-text');

    if (this._alertItem.impactedWorkbookCount > this.MAX_WORKBOOK_NAMES) { // MANY WORKBOOKS

      // Content: messageManyWorkbooksFail = "%{multiple_workbooks} and %{workbook_count} others are out of date."

      if (this._alertItem.impactedWorkbooks.length >= this.MAX_WORKBOOK_NAMES) {
        // build and append dom representing %{multiple_workbooks}
        this.concatAndTruncateText($msg, this.MAX_WORKBOOK_NAMES, this._alertItem.impactedWorkbooks, this.MANY_WB_TEXT_WIDTH);
        // todo-dloika: non-english translation could re-order and break this string
        // manipulation. Fix it. Bugzid: 78044.
        var base = this._localizedStrings.messageManyWorkbooksFail;

        // strip out %{multiple_workbooks} (we built that above) and insert %{workbook_count}, this is used
        // as text for a span below
        var content = base.replace('%{multiple_workbooks}', '')
          .replace('%{workbook_count}', this._alertItem.impactedWorkbookCount - this.MAX_WORKBOOK_NAMES);

        $msg
          // append " and %{workbook_count} others are out of date." to "%{multiple_workbooks}"
          .append(
            $('<span>')
            .before(' ') // See COLLAPSING WHITESPACE NOTE in AlertItem comments.
            .text(content)
            .addClass('tab-alerts-item-header-static-text')

          );
      } else {
        this._debugCallback('Mismatch in impactedWorkbookCount, impactedWorkbooks.length, and MAX_WORKBOOK_NAMES');
      }
    } else if (this._alertItem.impactedWorkbookCount > 1) { // FEW WORKBOOKS

      // Content: messageFewWorkbooksFail = "%{multiple_workbooks} and %{final_workbook} are out of date."

      // Determine truncated item width
      var width = this._alertItem.impactedWorkbookCount === 2 ? this.FEW_WB_TEXT_WIDTH_TWO : this.FEW_WB_TEXT_WIDTH_THREE;

      // loop through the impacted workbooks, up to the maximum amount of workbooks, minus one
      // to account for final_workbook
      var loopCount = Math.min(this.MAX_WORKBOOK_NAMES, this._alertItem.impactedWorkbooks.length) - 1;

      // build and append dom representing %{multiple_workbooks}
      this.concatAndTruncateText($msg, loopCount, this._alertItem.impactedWorkbooks, width);

      // todo-dloika: non-english translation could re-order and break this string
      // manipulation. Fix it. Bugzid: 78044.
      var base = this._localizedStrings.messageFewWorkbooksFail;

      // String manipulation for the localized version of " and "
      var separator = base.substring('%{multiple_workbooks}'.length, base.indexOf('%{final_workbook}'));

      // String manipulation for the localized version of " are out of date."
      var ending = base.substring(base.indexOf('%{final_workbook}') + '%{final_workbook}'.length);

      $msg
        // append " and " to %{multiple_workbooks}
        .append(
          $('<span>')
          .text(separator)
          .addClass('tab-alerts-item-header-static-text')
        )
        .append(' ')
        .append(
          // append %{final_workbook} to "%{multiple_workbooks} and "
          this.makeTruncatedTextWithHover(this._alertItem.impactedWorkbooks[loopCount], width)
        )
        .append(' ')
        .append(
          // append " are out of date." to "%{multiple_workbooks} and %{final_workbook}
          $('<span>')
          .text(ending)
          .addClass('tab-alerts-item-header-static-text')
        );
    } else if (this._alertItem.impactedWorkbookCount === 1) { // ONE WORKBOOK

      // Content: messageOneWorkbookFail = "%{single_workbook} is out of date."

      // todo-dloika: non-english translation could re-order and break this string
      // manipulation. Fix it. Bugzid: 78044.
      var base = this._localizedStrings.messageOneWorkbookFail;
      var content = base.replace('%{single_workbook}', '');

      $msg
        .append(
          // build and append dom representing %{single_workbook}
          this.makeTruncatedTextWithHover(this._alertItem.impactedWorkbooks[0], this.ONE_WB_TEXT_WIDTH)
        )
        .append(' ')
        .append(
          // append " is out of date." to "%{single_workbook"
          $('<span>')
          .text(content)
          .addClass('tab-alerts-item-header-static-text')
        );
    } else { // ZERO WORKBOOKS
      // Content: messageZeroWorkbooksFail: "%{datasource} is out of date. No workbooks are affected."

      // todo-dloika: non-english translation could re-order and break this string
      // manipulation. Fix it. Bugzid: 78044.
      var base = this._localizedStrings.messageZeroWorkbooksFail;
      var content = base.replace('%{datasource}', '');

      $msg
        .append(
          // build and append dom representing %{datasource}
          (this.makeTruncatedTextWithHover(this._alertItem.datasourceName, this.ONE_DS_TEXT_WIDTH))
        )
        .append(' ')
        .append(
          // append " is out of date. No workbooks are affected." to "%{datasource}"
          $('<span>')
          .text(content)
          .addClass('tab-alerts-item-header-static-text')
        );
    }

    return $dom.append($msg);
  };

  AlertItem.prototype.makeDataSourceContent = function() {
    if (this._alertItem.datasourceName) {
      return $('<div>')
        .addClass('tab-alerts-item-detail')
        .append($('<span>')
          .addClass('tab-alerts-item-detail-label')
          .text(this._localizedStrings.labelDataSource))
        .append($('<a>')
          .addClass('tab-alerts-item-detail-value')
          .attr('href', this._datasourceCallback(this._alertItem.datasourceName))
        .append(this.makeTruncatedTextWithHover(this._alertItem.datasourceName, this.BODY_DS_TEXT_WIDTH))
        .append(' '));
    } else {
      return $('<div>')
        .addClass('tab-alerts-item-detail')
        .append($('<span>')
          .addClass('tab-alerts-item-detail-label')
          .text(this._localizedStrings.labelDataSource))
        .append($('<span>')
          .addClass('tab-alerts-item-detail-value')
          .text(this._localizedStrings.labelEmbeddedDatasource)
          );
    }
  };

  AlertItem.prototype.makeFailureContent = function() {
    var $failure = $('<div>')
      .addClass('tab-alerts-item-detail')
      .append($('<span>')
        .addClass('tab-alerts-item-detail-label')
        .text(this._localizedStrings.labelFailed));

    try {
      $failure.append($('<span>')
        .addClass('tab-alerts-item-detail-value')
        .text(this._alertItem.failureTimestamp));
    } catch (e) {
      // do nothing
    }

    return $failure;
  };

  AlertItem.prototype.makeSuccessContent = function() {
    var $success = $('<div>')
      .addClass('tab-alerts-item-detail')
      .append($('<span>')
        .addClass('tab-alerts-item-detail-label')
        .text(this._localizedStrings.labelSucceeded));

    if (this._alertItem.successTimestamp) { // last success may not have happened, could be null
      try {
        $success.append($('<span>')
          .addClass('tab-alerts-item-detail-value')
          .text(this._alertItem.successTimestamp));
      } catch (e) {
        // do nothing
      }
    } else {
      $success.append($('<span>')
        .addClass('tab-alerts-item-detail-value')
        .text(this._localizedStrings.labelNeverRefreshed));
    }

    return $success;
  };

  AlertItem.prototype.makeErrorMessageContent = function() {
    var $message = $('<div>')
      .addClass('tab-alerts-item-detail')
      .append($('<span>')
        .addClass('tab-alerts-item-detail-label')
        .text(this._localizedStrings.labelErrorMessage));

    try {
      $message.append($('<span>')
        .addClass('tab-alerts-item-detail-value')
        .text(this._localizedFailureStrings[this._alertItem.statusCode]));
    } catch (e) {
      // do nothing
    }

    return $message;
  };

  // Create an inline-block span that truncates text with an elipsis.
  AlertItem.prototype.makeTruncatedTextWithHover = function(text, length) {
    var $dom =
      $('<span>')
      .addClass('tab-alerts-item-truncated-text')
      .css({
        'max-width' : length + 'px'
      })
      .prop('title', text)
      .text(text);

    return $dom;
  };

  // Create a span that adds text to a hover and limits width to a specific number of pixels
  AlertItem.prototype.concatAndTruncateText = function($dom, loopcount, texts, width) {
    for (var i = 0; i < loopcount; i++) {
      // don't append whitespace after the span unless/until it's the last (no comma)
      // truncated text element
      var lastIteration = i === loopcount - 1;
      var $current = this.makeTruncatedTextWithHover(texts[i], width);
      $dom.append($current);
      if (!lastIteration) {
        $dom.append(
          $('<span>')
          .text(', ')
          .addClass('tab-alerts-item-header-static-text')
        );
      }

      $dom.append(' ');
    }
  };

  // *************************************************************
  // Alerts.ItemList
  //
  // A container of Items that keeps track of the number and
  // size of the items. Use with a VerticalScrollPane.
  // *************************************************************

  var ItemList = function(settings) {
    this._itemHeight = settings.height; // BUGZID: 78034.
    this._itemCount = 0;

    this.$el = $('<div>')
      .addClass(settings.cssClass)
      .attr('unselectable', 'on');

    $(this.$el).bind('itemRemoved', $.proxy(function(e) {
      e.stopPropogation();
      this._itemCount--;
      // Trigger the VerticalScrollPane to update and draw a scroll bar if necessary
      $(this.$itemList).trigger('domChanged');
    }, this));
  };

  ItemList.prototype.height = function() {
    // BUGZID: 78034.
    return this._itemCount * this._itemHeight;
  };

  ItemList.prototype.push = function(item) {
    this._itemCount++;
    this.$el.append(item);
    return this._itemCount++;
  };

  ItemList.prototype.reset = function() {
    this._itemCount = 0;

    // remove all the items in the list
    $(this.$el).html('');
  };


  this.Tableau || (this.Tableau = {});
  this.Tableau.Alerts = Alerts;

}).call(this, jQuery);


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
  var log;
  if (typeof console === 'object' && console && console.log) {
    log = function() { 
      try { 
        console.log.apply(console, arguments); 
      } catch (e) { 
      }
    };
  } else {
    log = function() {};
  }

  // External Connection Editing API
  var Connection = function (preEditUrl) {
    this.preEditUrl = preEditUrl;
  };
  Connection.edit = function(preEditUrl, connIds) {
    var vm = new ConnectionViewModel(preEditUrl, connIds),
      view = new ConnectionView(vm);
    vm.updateData();
  };

  //
  // ViewModel
  //
  var ConnectionMessageStatusEnum = {
    info: "info",
    progress: "progress",
    error: "error"
  };
  var ConnectionModeEnum = {
    embed: "embed",
    dontembed: "dontembed",
    password: "password"
  };
  var ConnectionViewModel = function(dataUrl, connIds) {
    this.dataUrl = dataUrl;
    this.connIds = connIds;
    this.data = {};
    this.initialUpdate = true;
    this.initialMode = null;
    this.initialKeyId = null;
    this.dataChanged = $.Callbacks();
    this.disposed = $.Callbacks();
    this.messageChanged = $.Callbacks();
    this.message = "";
    this.messageStatus = ConnectionMessageStatusEnum.info;
  };
  ConnectionViewModel.prototype = {
    updateData: function(isDeferred) {
      var that = this;
      return $.ajax({ url: this.dataUrl, data: { checked_ids: this._getIdsForServer() }, dataType: "json" })
      .done(function(data) {
        that.data = data;
        // Capture initial state on first data request
        if (that.initialUpdate) {
          that.initialUpdate = false;
          that.initialMode = data.mode;
          that.initialKeyId = data.currentKeyId;
        }
        if (isDeferred !== true) {
          that.dataChanged.fire();
        }
      })
      .fail(function(xhr, status, msg) {
        log("Update data failed: %s %s", status, msg);
      });
    },
    _getIdsForServer: function() {
      // We have to match the existing API used for editing non-oAuth connections, which expects
      // the IDs to be in the form of "<somePrefix>_<id1>,<somePrefix>_<id2>".
      var sb = [];
      $.each(this.connIds, function(i, id) {
        sb.push("c_" + id);
      });
      return sb.join(",");
    },
    getSelectedKey: function() {
      return this._findKey(this.data.currentKeyId);
    },
    setSelectedKey: function(keyId) {
      //use double equals to compare int and string
      if (keyId == this.data.currentKeyId) { return; }
      this.data.currentKeyId = keyId;
      this.data.mode = ConnectionModeEnum.embed;
      this.dataChanged.fire();
    },
    isEmbedMode: function() {
      return this.data.mode === ConnectionModeEnum.embed;
    },
    isNoEmbedMode: function() {
      return this.data.mode === ConnectionModeEnum.dontembed;
    },
    isPasswordMode: function() {
      return this.data.mode === ConnectionModeEnum.password;
    },
    setMode: function(newMode) {
      if (this.data.mode === newMode) { return; }
      log("Changing mode to: %s", newMode);
      this.data.mode = newMode;
      this.dataChanged.fire();
    },
    _findKey: function(keyId) {
      if (keyId === undefined || keyId === null) { return null; }
      var found = null;
      $.each(this.data.keys, function(i, key) {
        //use double equals to compare int and string
        if (key.keyId == keyId) {
          found = key;
        }
      });
      return found;
    },
    requestAddKey: function() {
      var that = this;
      Tableau.OAuth.requestAddToken(this.data.addKeyUrl, function(success, returnArg) {
        if (success) {
          // update the data _without_ updating the dom afterward
          that.updateData(true)
            .then(function() {
              that.data.mode = ConnectionModeEnum.embed;
              // if length is 1 then we've added our first key and can assume it should be selected
              // otherwise make the user choose
              if (that.data.keys.length === 1) {
                that.data.currentKeyId = that.data.keys[0].keyId;
              }
              that.dataChanged.fire();
            });
        } else {
          var errorMessage = tab.wgappStrings["oauth_manage_error_" + returnArg];
          that._setMessage(errorMessage, ConnectionMessageStatusEnum.error);
          log("Adding key failed: %s %s", returnArg, errorMessage);
        }
      });
    },
    setInputField: function(fieldName, newValue) {
      var acceptedFields = ["username", "password", "password_confirmation"];
      // TODO: change the mode to password?
      if (acceptedFields.indexOf(fieldName) === -1) {
        return;
      }

      this.data[fieldName] = newValue;
      this.data[fieldName + "Changed"] = "on";
      // this.dataChanged.fire(); // not sure if necessary
    },
    isSaveEnabled: function() {
      if (!this._stateHasChanged()) { return false; }

      if (this.data.mode === ConnectionModeEnum.embed) {
        return this.getSelectedKey() != null && this._keyStateHasChanged();
      } else if (this.data.mode === ConnectionModeEnum.password) {
        // bugzid 103077, should be validating that the passwords match, aren't null,
        // that the username isn't null and is in some sense an email address.
        return true;
      } else {
        return this._modeStateHasChanged();
      }
    },    
    _modeStateHasChanged: function() {
      return this.initialMode !== this.data.mode;
    },
    _keyStateHasChanged: function() {
      return this.initialKeyId !== this.data.currentKeyId;
    },
    _stateHasChanged: function() {
      return this._modeStateHasChanged || this._keyStateHasChanged();
    },
    isTestEnabled: function() {
      return this.isPasswordMode() || (this.isEmbedMode() && this.getSelectedKey() != null);
    },
    cancel: function() {
      this.disposed.fire();
    },
    getPasswordFormData: function() {
      var rsa = new RSAKey();
      rsa.setPublic(this.data.encryptionKey.modulus, this.data.encryptionKey.exponent);

      return {
        c_username: this.data.usernameChanged,
        edit_username: this.data.username,

        c_password: this.data.passwordChanged,
        password: "txt1",
        password_confirmation: "txt2",
        crypted: rsa.encrypt(this.data.password || ""),
        crypted_confirmation: rsa.encrypt(this.data.password_confirmation || "")
      };
    },
    save: function() {
      this._withNewEncryptionKey($.proxy(this._save, this));
    },
    _save: function() {
      var that = this;
      if (!this.isSaveEnabled()) { return; }

      var passwordData = this.isPasswordMode() ? this.getPasswordFormData() : {};

      var monitorUrl = this.data.monitorUrl;

      this._setMessage(tab.wgappStrings.edit_conn_oauth_save_busy, ConnectionMessageStatusEnum.progress);
      $.ajax({ 
        url: this.data.saveUrl, 
        type: "POST",
        data: $.extend({
          authenticity_token: this.data.authenticity_token,
          mode: this.data.mode,
          checked_ids: this._getIdsForServer(),
          keyId: this.data.currentKeyId
        }, passwordData),
        dataType: "json"
      })
      .done(function(data) {
        if (data.success === false) {
          log("Submit save task failed: %o", data);
          that._setMessage(data.errors, ConnectionMessageStatusEnum.error)
        } else {
          log("Submit save task succeeded: %o", data);
          new Ajax.Updater(
            { success: 'tabEditConnDialog' }, 
              monitorUrl,
              { 
                asynchronous:true, 
                method: 'get', 
                evalScripts:true, 
                parameters: { job_id: data.jobId, checked_count: data.numConnections } 
              }
           );
        }
      })
      .fail(function(xhr, status, msg) {
        that._setMessage(tab.wgappStrings.edit_conn_oauth_save_fail, ConnectionMessageStatusEnum.error);
        log("Submit save task failed: %s %s", status, msg);
      });
    },
    test: function() {
      this._withNewEncryptionKey($.proxy(this._test, this));
    },
    _test: function() {
      var that = this;

      if (!this.isTestEnabled()) {
        return;
      }

      var onSuccess = function(data) {
        if (data && data.success) {
          that._setMessage(tab.wgappStrings.edit_conn_oauth_test_success, ConnectionMessageStatusEnum.info);
        } else {
          that._setMessage(tab.wgappStrings.oauth_manage_test_fail_generic, ConnectionMessageStatusEnum.error);
        }
      };
      var onFailure = function(xhr, status, msg) {
          that._setMessage(tab.wgappStrings.edit_conn_oauth_test_fail(msg), ConnectionMessageStatusEnum.error);
      };

      this._setMessage(tab.wgappStrings.edit_conn_oauth_test_busy, ConnectionMessageStatusEnum.progress);
      if (this.isPasswordMode()) {
        var passwordData = this.getPasswordFormData();
        $.ajax({
            type: "POST",
            url: this.data.testPasswordUrl,
            dataType: "json",
            data: $.extend({
              authenticity_token: this.data.authenticity_token,
              checked_ids: this._getIdsForServer()
            }, passwordData)
          }).done(onSuccess).fail(onFailure);
      } else {
        $.ajax({
            type: "POST",
            dataType: "json",
            url: this.data.testKeyUrl,
            data: {
              authenticity_token: this.data.authenticity_token,
              id: this.data.currentKeyId
            }
          }).done(onSuccess).fail(onFailure);
      }
    },
    _withNewEncryptionKey: function(fn) {
      var that = this;

      $.ajax({
        type: "POST",
        url: that.data.getEncryptionKeyUrl,
        data: {
          authenticity_token: that.data.authenticity_token
        }
      }).done(function(encryptionKey) {
        that.data.encryptionKey = encryptionKey;
      }).always(fn);
    },
    _setMessage: function(msg, status) {
      this.message = msg;
      this.messageStatus = status;
      this.messageChanged.fire();
    }
  };
  //
  // View
  //
  var ConnectionView = function(vm) {
    this.vm = vm;
    this.vm.dataChanged.add($.proxy(this._handleDataChanged, this));
    this.vm.disposed.add($.proxy(this._hideDialog, this));
    this.vm.messageChanged.add($.proxy(this._messageChanged, this))
    this.shown = false;
    this._legacyDom = $(".tabEditConnBody");
    this.$dom = this._legacyDom;
  };
  ConnectionView.prototype = {
    _handleDataChanged: function() {
      var $domGettingReplaced = this.$dom;
      this._buildDom();
      //replaceWith returns the *original* dom, which we want to remove
      $domGettingReplaced.replaceWith(this.$dom).remove();
      if (!this.shown) {
        $("#tabEditConnDialog").show();
        $(".tabEditConnOverlay").show();    
        this.shown = true;
      }
    },
    _buildDom: function() {
      this.$dom = $("<div>")
        .addClass("tabEditConnBodyOAuth tabUserSelectNone")
        .append(
          $("<div>").addClass("tabEditConnOAuthAuthSection")
            .append($("<div>").addClass("tabEditConnOAuthAuthTitle").text(tab.wgappStrings.edit_conn_oauth_authentication))
            .append(this._buildChoiceDom())
        )
        .append(this._buildDescriptionDom())
        .append(this._buildTestAndMessageDom())
        .append(this._buildButtonDom());
    },
    _createChoice: function(mode, label, selected) {
      var $input = $('<input name="oauth_embedChoices" type="radio">')
        .attr('id', "oauth_" + mode).attr("value", mode)
        .change($.proxy(this._modeChanged, this));
      if (selected) {
        $input.prop("checked", true);
      }
      return $("<div>").addClass("tabEditConnOAuthChoice")
        .append($input)
        .append($('<label>').attr("for", "oauth_" + mode).text(label))
    },
    _buildPasswordChoiceDom: function() {
      var that = this;

      if (!this.vm.data.supportsPassword) {
        return "";
      }

      var createInputRow = function(label, type, name, value, disabled) {
        var label = $("<span>").addClass("tabEditConnLabelHolder").append(
          $("<label>").attr("for", name).text(label)
        );
        var input = $("<span>").addClass("tabEditConnInputHolder").append(
          $("<input>")
            .addClass("formfield tabEditConnInput")
            .toggleClass("tabDisabled tabUserSelectNone", disabled)
            .attr("type", type)
            .attr("name", name)
            .attr("autocomplete", "off")
            .prop("disabled", disabled)
            .val(value || "")
            .on("change", $.proxy(that._inputFieldChanged, that))
        );
        return $('<div>').addClass("tabEditConnTableRow")
          .append(label)
          .append(input);
      };

      return this._createChoice(ConnectionModeEnum.password, tab.wgappStrings.edit_conn_oauth_use_password, this.vm.data.mode === ConnectionModeEnum.password)
        .append($("<div>")
          .addClass("tabEditConnCredentialsChoice")
          .append(createInputRow(tab.wgappStrings.edit_conn_username, "text", "username", this.vm.data.username, this.vm.data.mode !== ConnectionModeEnum.password))
          .append(createInputRow(tab.wgappStrings.edit_conn_password, "password", "password", "", this.vm.data.mode !== ConnectionModeEnum.password))
          .append(createInputRow(tab.wgappStrings.edit_conn_password_confirm, "password", "password_confirmation", "", this.vm.data.mode !== ConnectionModeEnum.password))
      );
    },
    _buildChoiceDom: function() {
      var that = this,
        jsSafeDbClass = this._jsSafeDbClass(),
        embedLabelKey = "edit_conn_oauth_embed_" + jsSafeDbClass,
        dontEmbedLabelKey = "edit_conn_oauth_dontembed_" + jsSafeDbClass,
        embedChoice = this._createChoice(ConnectionModeEnum.embed, tab.wgappStrings[embedLabelKey], this.vm.isEmbedMode())
      ;

      if (this.vm.data.keys.length === 0) {
        embedChoice.append(
          $("<span>")
            .addClass("tabEditConnOAuthAddKey")
            .append(
              $("<a>").addClass("tabEditConnOAuthAddKeyLink").click($.proxy(this.vm.requestAddKey, this.vm))
                .text(tab.wgappStrings.edit_conn_oauth_add_key(this.vm.data.dbClassName))
            )
        );
      } else {
        var $keyChoice = $("<span>").addClass("tabEditConnOAuthKeyChoice");
        var $keySelect = $("<select>").change($.proxy(this._keyChoiceChanged, this)).appendTo($keyChoice);
        if (this.vm.getSelectedKey() === null) {
          $keySelect.append($("<option>").attr("value", "").text(tab.wgappStrings.edit_conn_oauth_select_credential));
        }
        $.each(this.vm.data.keys, function(i, key) {
          $keySelect.append($("<option>")
            .attr("value", key.keyId)
            .prop("selected", key === that.vm.getSelectedKey())
            .text(key.description));         
        });
        embedChoice.append($keyChoice);
      }

      return $("<div>").addClass("tabEditConnOAuthChoices")
        .append(embedChoice)
        .append(this._buildPasswordChoiceDom())
        .append(this._createChoice(ConnectionModeEnum.dontembed, tab.wgappStrings[dontEmbedLabelKey], this.vm.isNoEmbedMode()));
    },
    _buildTestAndMessageDom: function() {
      return $("<div>").addClass("tabEditConnOAuthTest")
        .append(
          $("<a>").addClass("tabEditConnTestLink")
            .text(tab.wgappStrings.edit_conn_oauth_test_button)
            .toggleClass("tabDisabled", !this.vm.isTestEnabled())
            .click($.proxy(this._testClicked, this))
        )
        .append(
          $("<div>").addClass("tabEditConnOAuthMessageHolder")
          .append($("<span>").addClass("tabEditConnOAuthBusy").hide())
          .append($("<span>").addClass("tabEditConnOAuthMessage"))
        );
    },
    _buildDescriptionDom: function() {
      var descriptionKey = "edit_conn_oauth_description_" + this._jsSafeDbClass();

      if (tab.wgappStrings[descriptionKey]) {
        return $("<div>").addClass("tabEditConnOAuthDescription").text(tab.wgappStrings[descriptionKey]);
      }
      return $();
    },
    _buildButtonDom: function() {
      return $("<div>").addClass("tabEditButtons")
        .append(
          $("<a>").addClass("tabEditConnButton tabEditConnSave")
            .click($.proxy(this._saveClicked, this))
            .toggleClass("tabDisabled", !this.vm.isSaveEnabled())
            .text(tab.wgappStrings.edit_conn_oauth_save_button)
          )
        .append(
          $("<a>").addClass("tabEditConnButton tabEditConnCancel")
            .click($.proxy(this._cancelClicked, this))
            .text(tab.wgappStrings.edit_conn_oauth_cancel_button)
        );
    },
    _modeChanged: function(e) {
      var newMode = $(e.target).attr("value");
      this.vm.setMode(newMode);
    },
    _keyChoiceChanged: function(e) {
      var newKeyId = this.$dom.find(".tabEditConnOAuthKeyChoice select").val();
      this.vm.setSelectedKey(newKeyId);
    },
    _inputFieldChanged: function(e) {
      var $target = $(e.target),
          fieldName = $target.attr("name"),
          newValue = $target.val();
      this.vm.setInputField(fieldName, newValue);
    },
    _saveClicked: function() {
      this.vm.save();
    },
    _cancelClicked: function() {
      this.vm.cancel();
    },
    _testClicked: function() {
      this.vm.test();
    },
    _messageChanged: function() {
      this.$dom.find(".tabEditConnOAuthBusy").toggle(this.vm.messageStatus === ConnectionMessageStatusEnum.progress);
      this.$dom.find(".tabEditConnOAuthMessage")
        .toggleClass("tabConnectionTestError", this.vm.messageStatus === ConnectionMessageStatusEnum.error)
        .text(this.vm.message);
      },
    _hideDialog: function() {
      jQuery("#tabEditConnDialog").hide();
      jQuery(".tabEditConnOverlay").hide();
      // Put back the old connection dialog DOM.  This is necessary so that we can share the dialog 
      // for both types of edits (oAuth and non).
      
      //replaceWith returns the *original* dom, which we want to remove
      this.$dom.replaceWith(this._legacyDom).remove();
    },
    _jsSafeDbClass: function () {
      return this.vm.data.dbClass.replace(/[^A-Za-z]/, "");
    }
  };

  this.Tableau || (this.Tableau = {});

  this.Tableau.Connection = Connection;
}).call(this, jQuery);


//temporary additions to improve JSHint output.
//remove when this goes into less active development.
//DO NOT SUBMIT: It breaks IE8.
// 'use strict'; //todo remove this
// var console = console || {}; //todo remove this
// var jQuery = jQuery || {}; //todo remove this
// var tab = tab || {}; //todo remove this

(function($) { 'use strict';
  var log;
  if (typeof console === 'object' && console && console.log) {
    log = function() {
      try {
        console.log.apply(console, arguments);
      } catch (e) {
        //eat any exceptions
      }
    };
  } else {
    log = function() {};
  }

  //
  // Data Sync Data Source External API
  //
  // Used on Data Source details pages to implement Data Sync behavior and UI.
  var DataSyncDataSource = function (settings) {
    log('DataSyncDataSource initialized with settings: %o', settings);
    this.settings = settings; //general getting started information
    this.$el = $('<div>');
  };

  DataSyncDataSource.prototype = {
    start: function (id, refreshProperties) {
      log('DataSyncDataSource started with id/refreshProperties: %s %o',
        id, refreshProperties);

      var vm = new DataSyncDataSourceViewModel(this.settings, id, refreshProperties);
      var view = new DataSyncDataSourceView(vm, this.$el);
    }
  };

  //
  // Data Source ViewModel
  //
  var DataSyncDataSourceViewModel = function(settings, id, refreshProperties) {
    this.settings = settings;
    this.id = id;
    this.refreshProperties = refreshProperties;
    this._addIndexValueToSchedules(this.refreshProperties);

    this.refreshPropertiesUrl = settings.datasourceRefreshPropertiesUrl.replace('__id__', id);

    this.refreshModeChanged = $.Callbacks();
    this.remoteAgentChanged = $.Callbacks();
    this.remoteSchedulesChanged = $.Callbacks();
  };

  var RefreshModeEnum = {
    manual: 'MANUAL',
    server: 'SERVER',
    remote: 'REMOTE'
  };

  var ExtractRefreshTypeEnum = {
    full: 'FULL',
    incremental: 'INCREMENTAL'
  };

  DataSyncDataSourceViewModel.prototype = {
    setRefreshMode: function(mode) {
      var that = this;
      log('Considering setting refresh mode.');

      // refresh properties must be editable
      if (!this.getRefreshPropertiesAreEditable()) {
        return;
      }

      // an agent must be specified when setting refresh mode to remote
      // ignore if the mode hasn't changed
      if ((mode === RefreshModeEnum.remote && !this.refreshProperties.availableAgents.length) ||
        this.refreshProperties.refreshMode === mode) {
        return;
      }

      log('Setting refresh mode to %s', mode);

      var properties = $.extend(true, {}, this.refreshProperties);
      properties.refreshMode = mode;

      // chose an agent if necessary
      if (mode === RefreshModeEnum.remote && !this.refreshProperties.agentName) {
        properties.agentName = this.refreshProperties.availableAgents[0].name;
      }

      this._requestSetRefreshProperties(properties, function() {
        that.refreshModeChanged.fire();
        that.remoteAgentChanged.fire();
      });
    },
    setRemoteAgent: function(agentName) {
      var that = this;
      log('Considering setting remote agent.');

      if (this.refreshProperties.agentName === agentName) {
        return;
      }

      log('Setting remote agent to: %s', agentName);

      var properties = $.extend(true, {}, this.refreshProperties);
      properties.agentName = agentName;

      this._requestSetRefreshProperties(properties, function() {
        that.remoteAgentChanged.fire();
      });
    },
    getRefreshMode: function() {
      return this.refreshProperties.refreshMode;
    },
    getRemoteAgentName: function() {
      return this.refreshProperties.agentName;
    },
    getAvailableRemoteAgents: function() {
      var that = this;
      var found = false;

      if (this.refreshProperties.agentName) {
        $.each(this.refreshProperties.availableAgents, function(i, a) {
          if (that.refreshProperties.agentName === a.name) {
            found = true;
            return false;
          }
        });

        if (found) { return this.refreshProperties.availableAgents; }

        var merged = [ { name: this.refreshProperties.agentName } ];
        $.merge(merged, this.refreshProperties.availableAgents);
        return merged;
      }

      return this.refreshProperties.availableAgents;

    },
    getRefreshPropertiesAreEditable: function() {
      return this.settings.isEditable;
    },
    getServerSchedules: function() {
      return this.refreshProperties.serverSchedules;
    },
    getRemoteSchedules: function(refreshType) {
      if (refreshType === null) {
        return this.refreshProperties.remoteSchedules;
      }

      var found = [];
      for (var i = 0; i < this.refreshProperties.remoteSchedules.length; i++) {
        if (this.refreshProperties.remoteSchedules[i].refreshType === refreshType) {
          found.push(this.refreshProperties.remoteSchedules[i]);
        }
      }

      return found;
    },
    addRemoteSchedule: function(definition, refreshType) {
      var that = this;

      log('Adding remote schedule definition/type: %s %s', definition, refreshType);

      var properties = $.extend(true, {}, this.refreshProperties);

      properties.remoteSchedules.push({
        definition: definition,
        refreshType: refreshType,
        value: properties.remoteSchedules.length
      });

      this._requestSetRefreshProperties(properties, function() {
        that.remoteSchedulesChanged.fire();
      });
    },
    deleteRemoteSchedule: function(value) {
      var that = this;

      log('Deleting remote schedule with index %i and definition %s', value,
        this.refreshProperties.remoteSchedules[value].definition);

      var properties = $.extend(true, {}, this.refreshProperties);
      properties.remoteSchedules.splice(value, 1);

      this._addIndexValuePropertyToObjects(properties.remoteSchedules);

      this._requestSetRefreshProperties(properties, function() {
        that.remoteSchedulesChanged.fire();
      });
    },
    _requestGetRefreshProperties: function() {
      log('GETting refresh properties...');
      var that = this;
      $.getJSON(this.refreshPropertiesUrl)
      .fail(function(xhr, status, thrown) {
        log('GET FAILED FAILED FAILED with xhr/status/thrown %o %o %o', xhr, status, thrown);
      })
      .done(function(data, status, xhr) {
        log('GET succeeded with data/status/xhr: %o %o %o', data, status, xhr);
        that._addIndexValueToSchedules(data);
        that.refreshProperties = data;
        that.refreshModeChanged.fire();
        that.remoteAgentChanged.fire();
        that.remoteSchedulesChanged.fire();
      });
    },
    _requestSetRefreshProperties: function(properties, fireOnChangedCallbacks) {
      log('POSTing refresh properties...');
      var that = this;

      var originalProperties = this.refreshProperties;
      this.refreshProperties = properties;
      fireOnChangedCallbacks();

      var removePrivateFields = function(key, value) {
        if (key === 'value') {
            return undefined;
        }
        else {
          return value;
        }
      };

      log('Refresh properties (pretty) getting posted: %s', JSON.stringify(this.refreshProperties, removePrivateFields, '  '));

      $.post(
        this.refreshPropertiesUrl,
        {
          authenticity_token: this.settings.authenticity_token,
          refreshProperties: JSON.stringify(this.refreshProperties, removePrivateFields)
        },
        null,
        'json'
      )
      .fail(function(xhr, status, thrown) {
        log('POST FAILED FAILED FAILED with xhr/status/thrown %o %o %o', xhr, status, thrown);
        that.refreshProperties = originalProperties;
        fireOnChangedCallbacks();
      })
      .done(function(data, status, xhr) {
        if (data.success) {
          log('POST succeeded with data/status/xhr: %o %o %o', data, status, xhr);
        } else {
          log('POST succeeded but server FAILED FAILED FAILED with data/status/xhr: %o %o %o', data, status, xhr);
          $.proxy(that._requestGetRefreshProperties(), that);
        }
      });
    },
    _addIndexValueToSchedules: function(refreshProperties) {
      // add a value property that is the index in the array that will be used as an "id" when capturing
      // UI interaction events.
      this._addIndexValuePropertyToObjects(refreshProperties.serverSchedules);
      this._addIndexValuePropertyToObjects(refreshProperties.remoteSchedules);
    },
    _addIndexValuePropertyToObjects: function(objects) {
      for (var i = 0; i < objects.length; i++) {
        objects[i].value = i;
      }
    }
  };

  //
  // Data Source View
  //
  var DataSyncDataSourceView = function(vm, el) {
    this.vm = vm;
    this.$el = el;

    this.vm.refreshModeChanged.add($.proxy(this._onRefreshModeChanged, this));
    this.vm.remoteAgentChanged.add($.proxy(this._onRemoteAgentChanged, this));
    this.vm.remoteSchedulesChanged.add($.proxy(this._onRemoteSchedulesChanged, this));

    this._buildDom();
  };

  DataSyncDataSourceView.prototype = {
    _onRefreshModeChanged: function () {
      log('View handling onRefreshModeChanged');

      $('.tabDataSyncRemoteAgentRow').replaceWith(this._buildRemotePickerSelectorRow());

      this._togglePickerSelection();
      this._toggleSchedulePanelVisibility();
    },
    _onRemoteAgentChanged: function () {
      log('View handling onRemoteAgentChanged');
      $('.tabDataSyncRemoteAgentRow').replaceWith(this._buildRemotePickerSelectorRow());
    },
    _onRemoteSchedulesChanged: function() {
      log('View handling onRemoteSchedulesChanged for schedules %o', this.vm.refreshProperties.remoteSchedules);
      $('.tabDataSyncSchedulesListRemote').replaceWith(this._buildRemoteSchedules());

      this._toggleSchedulePanelVisibility();
    },
    _togglePickerSelection: function() {
      $('.tabDataSyncManualPickerItem')
          .toggleClass('tabDataSyncPickerItemSelected', this.vm.refreshProperties.refreshMode === RefreshModeEnum.manual);
      $('.tabDataSyncServerPickerItem')
          .toggleClass('tabDataSyncPickerItemSelected', this.vm.refreshProperties.refreshMode === RefreshModeEnum.server);
      $('.tabDataSyncRemotePickerItem')
          .toggleClass('tabDataSyncPickerItemSelected', this.vm.refreshProperties.refreshMode === RefreshModeEnum.remote);
    },
    _toggleSchedulePanelVisibility: function() {
      $('.tabDataSyncSchedulesListServer').toggle(this.vm.refreshProperties.refreshMode === RefreshModeEnum.server);
      $('.tabDataSyncSchedulesListRemote').toggle(this.vm.refreshProperties.refreshMode === RefreshModeEnum.remote);
    },
    _buildDom: function() {
      this.$el.append(this._buildPickerDom());
      this.$el.append(this._buildSchedulesDom());
      this.$el.append(this._buildDialogHolder());

      this._togglePickerSelection();
      this._toggleSchedulePanelVisibility();
    },
    _buildPickerDom: function() {
      return $('<div>')
        .addClass('tabDataSyncRefreshPicker tabUserSelectNone')
        .append(this._buildManualPickerItem())
        .append(this._buildServerPickerItem())
        .append(this._buildRemotePickerItem());
    },
    _buildManualPickerItem: function() {
      return this._buildPickerItem()
        .append(this._buildPickerItemRow()
          .addClass('tabDataSyncPickerItemRowPrimary tabDataSyncManualPickerItem')
          .click($.proxy(function() {
              this.vm.setRefreshMode(RefreshModeEnum.manual);
            }, this)
          )
          .append(this._buildPickerRowBlock()
            .append(
              this._buildItemGraphic()
              .addClass('tabDataSyncPickerIconManual')
            )
          )
          .append(this._buildPickerRowBlock()
            .addClass('tabDataSyncPickerRowBlockNoWrap')
            .append(this._buildRowBlockItem()
              .append($('<span>')
                .text(tab.wgappStrings.datasync_fresh_picker_label_manual)
              )
            )
          )
        );
    },
    _buildServerPickerItem: function() {
      return this._buildPickerItem()
        .append(this._buildPickerItemRow()
          .addClass('tabDataSyncPickerItemRowPrimary tabDataSyncServerPickerItem')
          .click($.proxy(function() {
              this.vm.setRefreshMode(RefreshModeEnum.server);
            }, this)
          )
          .append(this._buildPickerRowBlock()
            .append(
              this._buildItemGraphic()
              .addClass('tabDataSyncPickerIconServer')
            )
          )
          .append(this._buildPickerRowBlock()
            .addClass('tabDataSyncPickerRowBlockNoWrap')
            .append(this._buildRowBlockItem()
              .append($('<span>')
                .text(tab.wgappStrings.datasync_fresh_picker_label_server)
              )
            )
            .append(this._buildRowBlockItem()
              .append($('<a>')
                .text(tab.wgappStrings.datasync_test_connection)
              )
            )
          )
        );
    },
    _buildRemotePickerItem: function() {
      return this._buildPickerItem()
        .append(this._buildPickerItemRow()
          .addClass('tabDataSyncPickerItemRowPrimary tabDataSyncRemotePickerItem')
          .toggleClass('tabDataSyncPickerItemRowDisabled', !this.vm.getAvailableRemoteAgents().length)
          .click($.proxy(function() {
              this.vm.setRefreshMode(RefreshModeEnum.remote);
            }, this)
          )
          .append(this._buildPickerRowBlock()
            .append(
              this._buildItemGraphic()
              .addClass('tabDataSyncPickerIconRemote')
            )
          )
          .append(this._buildPickerRowBlock()
            .addClass('tabDataSyncPickerRowBlockNoWrap')
            .append(this._buildRowBlockItem()
              .append($('<span>')
                .text(tab.wgappStrings.datasync_fresh_picker_label_remote)
              )
            )
          )
        )
        .append(this._buildRemotePickerSelectorRow())
        .append(this._buildRemotePickerInstallationRow());
    },
    _buildRemotePickerSelectorRow: function() {
      return this._buildPickerItemRow()
        .addClass('tabDataSyncPickerItemRowSecondary')
        .addClass('tabDataSyncRemoteAgentRow')
        .append(this._buildPickerRowBlock()
          .addClass('tabDataSyncRowBlockRight')
          .append(
            $('<span>')
              .text(tab.wgappStrings.datasync_remote_agent_selector_label)
          )
          .append(
            this._buildRemoteAgentSelectorOrLabel()
          )
        );
    },
    _buildRemoteAgentSelectorOrLabel: function() {
      var that = this;

      // prompt to install when no agents are available
      if (!this.vm.getAvailableRemoteAgents().length) {
        return $('<div>')
          .addClass('tabDataSyncRemoteAgentLabel')
          .addClass('tabDataSyncRemoteAgentLabelEmphasis')
          .text(tab.wgappStrings.datasync_install_agent);
      }

      // display existing agent name when not editable
      if (!this.vm.getRefreshPropertiesAreEditable() || this.vm.getRefreshMode() != RefreshModeEnum.remote) {
        return $('<div>')
          .addClass('tabDataSyncRemoteAgentLabel')
          .text(this.vm.getRemoteAgentName() || tab.wgappStrings.datasync_agent_not_selected);
      }

      // agent is editable
      var dom = $('<select>')
        .addClass('tabDataSyncRemoteAgentSelector');

      $.each(this.vm.getAvailableRemoteAgents(), function(i, a) {
        dom.append(
          $('<option>')
          .attr('selected', that.vm.getRemoteAgentName() === a.name )
          .prop('value', a.name)
          .text(a.name)
        );
      });

      dom.change(function(e) {
        if (e.target.value !== null) {
          that.vm.setRemoteAgent(e.target.value);
        }
      });

      return dom;
    },
    _buildRemotePickerInstallationRow: function() {
      return this._buildPickerItemRow()
        .append(this._buildPickerRowBlock()
          .addClass('tabDataSyncRowBlockRight')
          .append(
            $('<a>')
              .text(tab.wgappStrings.datasync_tableau_desktop)
          )
          .append(
            $('<span>')
              .text(tab.wgappStrings.datasync_tableau_desktop_installation)
          )
        )
        .append (this._buildPickerRowBlock()
          .addClass('tabDataSyncRowBlockRight')
          .append(
            $('<a>')
              .addClass('tabDataSyncButton')
              .addClass('tabDataSyncRemotePickerButton') // clean up the shared style
              .text(tab.wgappStrings.datasync_agent_download)
          )
        );
    },
    _buildPickerItem: function() {
      return $('<div>')
        .addClass('tabDataSyncPickerItem');
    },
    _buildPickerItemRow: function() {
      return $('<div>')
        .addClass('tabDataSyncPickerItemRow');
    },
    _buildPickerRowBlock: function() {
      return $('<div>')
        .addClass('tabDataSyncPickerRowBlock');
    },
    _buildRowBlockItem: function() {
      return $('<div>')
        .addClass('tabDataSyncRowBlockItem');
    },
    _buildItemGraphic: function() {
      return $('<div>')
        .addClass('tabDataSyncPickerIcon');
    },
    _buildSchedulesDom: function() {
      return $('<div>')
        .addClass('tabDataSyncSchedules tabUserSelectNone')
        .append(
          this._buildServerSchedules()
        )
        .append(
          this._buildRemoteSchedules()
        );
    },
    _buildServerSchedules: function() {
      var dom = $('<div>')
        .addClass('tabDataSyncSchedulesList tabDataSyncSchedulesListServer')
        .text('SERVER SCHEDULES GO HERE')
        .hide();

      return dom;
    },
    _buildRemoteSchedules: function() {
      var dom = $('<div>')
        .addClass('tabDataSyncSchedulesList tabDataSyncSchedulesListRemote')
        .hide();

      var fullTable = $('<table>')
        .addClass('tabDataSyncSchedulesListTable');
      var incrementalTable = $('<table>')
        .addClass('tabDataSyncSchedulesListTable');

      dom.append(fullTable);
      dom.append(incrementalTable);

      fullTable.append(this._buildScheduleColgroup());
      incrementalTable.append(this._buildScheduleColgroup());

      fullTable.append(this._buildScheduleHeader(tab.wgappStrings.datasync_remote_full_refresh_header, ExtractRefreshTypeEnum.full));
      incrementalTable.append(this._buildScheduleHeader(tab.wgappStrings.datasync_remote_incremental_refresh_header, ExtractRefreshTypeEnum.incremental));

      var fullSchedules = this.vm.getRemoteSchedules(ExtractRefreshTypeEnum.full);
      var incrementalSchedules = this.vm.getRemoteSchedules(ExtractRefreshTypeEnum.incremental);

      for (var i = 0; i < fullSchedules.length; i++) {
        fullTable.append(this._buildScheduleRow(fullSchedules[i]));
      }

      for (var j = 0; j < incrementalSchedules.length; j++) {
        incrementalTable.append(this._buildScheduleRow(incrementalSchedules[j]));
      }

      return dom;
    },
    _buildScheduleHeader: function(typeName, typeValue) {
      var columns = [{
        contents: $('<span>').text(typeName)
      }];

      if (this.vm.getRefreshPropertiesAreEditable()) {
        columns.push({
          contents: $('<a>')
            .text(tab.wgappStrings.datasync_schedule_action_add)
            .click($.proxy(function() {
              this._showAddRemoteSchedule(typeValue);
            }, this))
        });
      }

      return this._buildTableHeaderRow(columns);
    },
    _buildScheduleRow: function(data) {
      var columns = [{
        contents: $('<span>')
          .text(this._convertCronStringToText(data.definition))
      }];

      if (this.vm.getRefreshPropertiesAreEditable()) {
        columns.push({
          contents: $('<a>')
            .text(tab.wgappStrings.datasync_schedule_action_delete)
            .click($.proxy(function() {
              this.vm.deleteRemoteSchedule(data.value);
            }, this))
        });
      }

      return this._buildTableContentRow(columns);
    },
    _buildScheduleColgroup: function() {
      var colgroup = [{
        cssClasses: ['tabDataSyncSchedulesListValueColumn']
      }];

      if (this.vm.getRefreshPropertiesAreEditable()) {
        colgroup.push({
          cssClasses: ['tabDataSyncSchedulesListActionColumn']
        });
      }

      return this._buildTableColgroup(colgroup);
    },
    _buildTableHeaderRow: function(columns) {
      return this._buildTableRow('<th>', columns);
    },
    _buildTableContentRow: function(columns) {
      return this._buildTableRow('<td>', columns);
    },
    _buildTableRow: function(tag, columns) {
      var row = $('<tr>');
      for (var i = 0; i < columns.length; i++) {
        var cell = $(tag);
        cell.append(columns[i].contents);
        if (columns[i].colspan) {
          cell.prop('colspan', columns[i].colspan);
        }
        row.append(cell);
      }
      return row;
    },
    _buildTableColgroup: function(columns) {
      var group = $('<colgroup>');

      for (var i = 0; i < columns.length; i++) {
        var col = $('<col>');
        if (columns[i].cssClasses && columns[i].cssClasses.length) {
          for (var j = 0; j < columns[i].cssClasses.length; j++) {
            col.addClass(columns[i].cssClasses[j]);
          }
          col.addClass(columns[i].cssClasses);
        }
        if (columns[i].cssStyleProperties) {
          col.css(columns[i].cssStyleProperties);
        }
        group.append(col);
      }
      return group;
    },
    _showAddRemoteSchedule: function(typeValue) {
      var that = this;

      var cancelCallback = function() {
        $('.tabDataSyncDialogOverlay').hide();
      };
      var confirmCallback = function(e) {
        that.vm.addRemoteSchedule(e.target.value, typeValue);
        cancelCallback();
      };

      this._buildAddRemoteScheduleDialog(confirmCallback, cancelCallback);
      $('.tabDataSyncDialogOverlay').show();
    },
    _buildAddRemoteScheduleDialog: function(confirmCallback, cancelCallback) {
      var dom = $('<div>')
        .addClass('tabDataSyncDialog')
        .append(
          $('<span>').text(tab.wgappStrings.datasync_add_remote_schedule_definition_label),
          $('<input>')
          .keyup(function(e) {
            if (e.which === 13) { // enter key
              confirmCallback(e);
            } else if (e.which === 27) { // esc key
              cancelCallback();
            }
          })
        );

      $('.tabDataSyncDialog').replaceWith(dom);
    },
    _buildDialogHolder: function() {
      return $('<div>')
        .addClass('tabDataSyncDialogHolder')
        .append($('<div>')
          .addClass('tabDataSyncDialogOverlay')
          .click(function(e) {
            if(!$(e.target).hasClass('tabDataSyncDialogOverlay')) {
              // ignore events from children
              return;
            }
            $('.tabDataSyncDialogOverlay').hide();
          })
          .append(
            $('<div>')
            .addClass('tabDataSyncDialog')
          )
        );
    },
    _convertCronStringToText: function(cron) {
      return cron;
    }
  };

  this.Tableau || (this.Tableau = {});

  this.Tableau.DataSyncDataSource = DataSyncDataSource;
}).call(this, jQuery);


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
// Depends on:
//   Globalize
//   Tableau.DateUtilities
(function($) {

  var DatePicker = function(settings) {
    this.firstDayOfWeek = Globalize.culture().calendar.firstDay;
    this.lastDayOfWeek = this._addDayOfWeek(this.firstDayOfWeek, 6);
    this.shortDayOfWeekNames = Globalize.culture().calendar.days.namesShort;

    var now = new Date();
    this.today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    this.showDate = settings.showDate
      ? new Date(settings.showDate.getFullYear(), settings.showDate.getMonth(), 1)
      : new Date(this.today.getFullYear(), this.today.getMonth(), 1);
    this.selectedDate = settings.selectedDate
      ? new Date(settings.selectedDate.getFullYear(), settings.selectedDate.getMonth(), settings.selectedDate.getDate())
      : null;

    this.$el = $("<span>").addClass("tab-datepicker");
    this._makeHeader().appendTo(this.$el);
    this._makeMonthTable().appendTo(this.$el);
    
    this.$el.prop('unselectable', 'on');
    this.$el.find('*').prop('unselectable', 'on');

    this._update();
  }
  DatePicker.prototype = {
    _makeHeader: function() {
      var header = $("<div>").addClass("tab-datepicker-header");
      
      this.monthYearBox = $("<span>")
        .addClass("tab-datepicker-header-text")
        .appendTo(header);

      this.prevMonthButton = $("<span>")
        .addClass("tab-datepicker-header-button")
        .addClass("tab-datepicker-prev-month-button")
        .text("\u25c0") // BLACK LEFT-POINTING TRIANGLE
        .appendTo(header)
        .on("click", $.proxy(this._showPrevMonth, this));

      this.nextMonthButton = $("<span>")
        .addClass("tab-datepicker-header-button")
        .addClass("tab-datepicker-next-month-button")
        .text("\u25b6") // BLACK RIGHT-POINTING TRIANGLE
        .appendTo(header)
        .on("click", $.proxy(this._showNextMonth, this));

      return header;
    },
    _makeMonthTable: function() {
      this.monthTable = $("<table>").addClass("tab-datepicker-month-table");
      this.monthTable.on("click", ".tab-datepicker-day-cell", this, this._dayCellClicked);
      return this.monthTable;
    },
    _dayCellClicked: function(event) {
      event.data._selectDay($(this));
    },
    _selectDay: function(cell) {
      this.monthTable.find(".tab-datepicker-day-cell-selected").removeClass("tab-datepicker-day-cell-selected");
      cell.addClass("tab-datepicker-day-cell-selected");
      this.selectedDate = new Date(this.showDate.getFullYear(), this.showDate.getMonth(), cell.data("dayOfMonth"));
      this.$el.trigger("dateSelected", [this.selectedDate]);
    },
    _showPrevMonth: function() {
      if (this.showDate.getMonth() === 0) {
        if (this.showDate.getFullYear() > 1) {
          this.showDate.setMonth(11);
          this.showDate.setFullYear(this.showDate.getFullYear() - 1);
        }
      } else {
        this.showDate.setMonth(this.showDate.getMonth() - 1);
      }
      this._update();
    },
    _showNextMonth: function() {
      if (this.showDate.getMonth() === 11) {
        this.showDate.setMonth(0);
        this.showDate.setFullYear(this.showDate.getFullYear() + 1);
      } else {
        this.showDate.setMonth(this.showDate.getMonth() + 1);
      }
      this._update();
    },
    _update: function() {
      this._updateHeader();
      this._updateMonthTable();
    },
    _updateHeader: function() {
      this.monthYearBox.text(Globalize.format(this.showDate, "Y"));
    },
    _updateMonthTable: function() {
      var daysInMonth = new Date(this.showDate.getFullYear(), this.showDate.getMonth() + 1, 0).getDate();
      var startDayOfWeek = new Date(this.showDate.getFullYear(), this.showDate.getMonth(), 1).getDay();
      var dayOfMonth, dayOfWeek, date;
      var thead, tbody, tr, td;

      this.monthTable.html("");

      // header
      thead = $("<thead>").appendTo(this.monthTable);
      tr = $("<tr>").appendTo(thead);
      dayOfWeek = this.firstDayOfWeek;
      do {
        $("<th>").addClass("tab-datepicker-header-cell").text(this.shortDayOfWeekNames[dayOfWeek]).appendTo(tr);
        dayOfWeek = this._addDayOfWeek(dayOfWeek, 1);
      } while (dayOfWeek !== this.firstDayOfWeek);

      // body
      tbody = $("<tbody>").appendTo(this.monthTable)
      tr = $("<tr>").appendTo(tbody);
      dayOfWeek = this.firstDayOfWeek;
      dayOfMonth = 1;

      // leading empty cells
      while (dayOfWeek !== startDayOfWeek) {
        $("<td>").appendTo(tr);
        dayOfWeek = this._addDayOfWeek(dayOfWeek, 1);
      }

      // day cells
      date = new Date(this.showDate.getFullYear(), this.showDate.getMonth(), dayOfMonth);
      while (dayOfMonth <= daysInMonth) {
        td = $("<td>").addClass("tab-datepicker-day-cell").text(dayOfMonth).appendTo(tr);
        td.data("dayOfMonth", dayOfMonth);
        if (Tableau.DateUtilities.sameDay(date, this.today)) {
          td.addClass("tab-datepicker-day-cell-today");
        }
        if (this.selectedDate && Tableau.DateUtilities.sameDay(date, this.selectedDate)) {
          td.addClass("tab-datepicker-day-cell-selected");
        }
        ++dayOfMonth;
        date.setDate(dayOfMonth);
        dayOfWeek = this._addDayOfWeek(dayOfWeek, 1);
        if (dayOfWeek === this.firstDayOfWeek) {
          tr = $("<tr>").appendTo(tbody);
        }
      }

      // trailing empty cells
      do {
        $("<td>").appendTo(tr);
        dayOfWeek = this._addDayOfWeek(dayOfWeek, 1);
      } while (dayOfWeek !== this.firstDayOfWeek);
    },
    _addDayOfWeek: function(dayOfWeek, days) {
      return (dayOfWeek + days) % 7;
    }
  };

  this.Tableau || (this.Tableau = {});
  this.Tableau.DatePicker = DatePicker;

}).call(this, jQuery);


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

  var DateUtilities = {
    millisecondsInDay: 1000 * 60 * 60 * 24,
    daysSinceEpoch: function(date) {
      return Math.floor(date.getTime() / this.millisecondsInDay);
    },
    sameDay: function(date1, date2) {
      return this.daysSinceEpoch(date1) === this.daysSinceEpoch(date2);
    },
    beforeDay: function(date1, date2) {
      return this.daysSinceEpoch(date1) < this.daysSinceEpoch(date2);
    },
    afterDay: function(date1, date2) {
      return this.daysSinceEpoch(date1) > this.daysSinceEpoch(date2);
    },
    onOrBeforeDay: function(date1, date2) {
      return this.daysSinceEpoch(date1) <= this.daysSinceEpoch(date2);
    },
    onOrAfterDay: function(date1, date2) {
      return this.daysSinceEpoch(date1) >= this.daysSinceEpoch(date2);
    },
    fromISOString: function(dateString) {
      if (dateString) {
        // ISO 8601 date-time format. both Z and +/-00:00 formats, though the latter is ignored
        var matches = /(\d\d\d\d)-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)(?:(?:\.|,)(\d\d\d))?((Z)|([+-]\d\d(:?\d\d)?))?/.exec(dateString);
        var year  = parseInt(matches[1], 10);
        var month = parseInt(matches[2], 10) - 1;
        var day   = parseInt(matches[3], 10);
        var hours   = parseInt(matches[4], 10);
        var minutes = parseInt(matches[5], 10);
        var seconds = parseInt(matches[6], 10);
        var milliseconds = matches[7] ? parseInt(matches[7], 10) : null;
        return new Date(Date.UTC(year, month, day, hours, minutes, seconds, milliseconds));
      } else {
        return null;
      }
    },
    toISOString: function(date) {
      if (date) {
        return                 date.getUTCFullYear()         + '-'
          + DateUtilities._pad(date.getUTCMonth() + 1   , 2) + '-'
          + DateUtilities._pad(date.getUTCDate()        , 2) + 'T'
          + DateUtilities._pad(date.getUTCHours()       , 2) + ':'
          + DateUtilities._pad(date.getUTCMinutes()     , 2) + ':'
          + DateUtilities._pad(date.getUTCSeconds()     , 2) + "."
          + DateUtilities._pad(date.getUTCMilliseconds(), 3) + 'Z';
      } else {
        return "";
      }
    },
    _pad: function(number, length) {
      var s = String(number);
      if (s.length > length) {
        s = substr(0, length);
      }
      while (s.length < length) {
        s = '0' + s;
      }
      return s;
    }
  };

  this.Tableau || (this.Tableau = {});
  this.Tableau.DateUtilities = DateUtilities;

}).call(this, jQuery);


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
  var log;
  if (typeof console === 'object' && console && console.log) {
    log = function() {
      try {
        console.log.apply(console, arguments);
      } catch (e) {
      }
    };
  } else {
    log = function() {};
  }

  // Keychain administration UI
  var KeychainAdmin = function (settings) {
    this.settings = settings;
    this.$el = $('<div>')
      .addClass('tabKeychains');
      this.refreshData();
  };  
  KeychainAdmin.prototype = {
    refreshData: function() {
      log("Requesting keys");
      return $.getJSON(this.settings.dataUrl)
        .then($.proxy(function(data) {
          this.requestedData = data; 
        }, this))
        .done($.proxy(this._applyData, this));
    },

    _applyData: function(data, status, xhr) {
      if (status !== 'success') {
        log("XHR failed: %s, %o", status, xhr);
        return;
      }
      this.$el.children().remove();
      $.each(data, $.proxy(this._buildKeychainTypeDOM, this));
    },

    _buildKeychainTypeDOM: function(i, type) {
      $("<div>").addClass("tabKeychainType")
        .addClass("tabKeychainType-" + this._safeCssClass(type.dsType))
        .append(this._buildKeychainTypeName(type))
        .append(this._buildKeychainTypeKeys(type))
        .appendTo(this.$el);
    },

    _buildKeychainTypeKeys: function(type) {
        if (!type.keys) {
          return $();
        }
        var that = this, 
          $keys = $("<div>").addClass("tabKeychainKeys"),
          keysSorted = type.keys.sort(function (a, b) {
              return a.description.localeCompare(b.description);
          });
        $.each(keysSorted, function(i, key) {
          var $key = $("<div>").addClass("tabKeychainKey").toggleClass("tabKeychainKeySecondary", i > 0)
            .append($("<span>").addClass("tabKeychainKeyName").text(key.description))
            .append(that._buildKeyButtons(key))
            .attr("data-tabKeyId", key.keyId);
          $keys.append($key);
        });
        return $keys;
    },

    _buildKeyButtons: function(key) {
      var that = this,
        buildButton = function(btnClass, label, callback) {
          return $("<span>").addClass("tabKeychainButton tabUserSelectNone " + btnClass)
            .attr("unselectable", "on")
            .text(label)
            .click(function() { 
                if ($(this).hasClass("tabDisabled")) { return; }
                callback();
             });
        };
      return $("<span>").addClass("tabKeychainKeyButtons")
        // test
        .append(buildButton("tabKeychainKeyTest", tab.wgappStrings.oauth_manage_test_key, 
          function() { 
            that._requestTestKey(key.keyId);
          }))
        // delete
        .append(buildButton("tabKeychainKeyDelete", tab.wgappStrings.oauth_manage_delete_key, 
          function() { 
            lyteboxConfirm("tableau_lytebox", tab.wgappStrings.oauth_manage_key_confirm_delete(key.description), 
              function(confirm) {
                if (confirm) {
                  that._requestDeleteKey(key.keyId);
                }
              });
          }))
        ;
    },

    _buildKeychainTypeName: function(type) {
      var that = this;
      return $("<div>").addClass("tabKeychainTypeName")
          .append(
            $("<span>").text(type.name))
          .append(
            $("<span>").addClass("tabKeychainAdd tabKeychainButton tabUserSelectNone")
              .text(tab.wgappStrings.oauth_manage_add_key)
              .click(function() { 
                that._requestAddKey(type.dsType); 
              }))
          ;
    },

    _requestAddKey: function(dsType) {
      log("Request Add Key: %s", dsType);
      var that = this, 
        url = this.settings.addKeyUrl.replace("__dsType__", dsType);
      OAuth.requestAddToken(url, function(success, returnArg) {
        var refreshed = that.refreshData();
        if (!success && returnArg) {
          refreshed.always($.proxy(that._showError, that, returnArg));
        }
      });
    },

    _requestDeleteKey: function(keyId) {
      log("Request Revoke Key: %s", keyId);
      var that = this, 
        url = this.settings.deleteKeyUrl.replace("__keyId__", keyId);
      this._getKeyDom(keyId).fadeOut();
      $.post(url, {authenticity_token: this.settings.authenticity_token}, function() {
        // TODO handle error 
        that.refreshData();
      });
    },

    _requestTestKey: function(keyId) {
      log("Request Test Key: %s", keyId);
      var that = this, 
        url = this.settings.testKeyUrl.replace("__keyId__", keyId);
      this._getKeyDom(keyId).find(".tabKeychainKeyTest").addClass("tabDisabled");
      $.getJSON(url)
        .then(function(response) {
          log("Test result: %o", response);
          that._getKeyDom(keyId).find(".tabKeychainKeyTest").removeClass("tabDisabled").end()
            // remove existing messages
            .find(".tabKeychainTestFailure, .tabKeychainTestSuccess").remove();

          if (response && response.success) {
            $("<span>")
              .addClass("tabKeychainTestSuccess").text(tab.wgappStrings.oauth_manage_test_succeed)
              .appendTo(that._getKeyDom(keyId).find(".tabKeychainKeyButtons"))
              .delay(5000)
              .fadeOut("fast", function(e) { $(this).remove(); });
          } else {
            var errorMessage = response && response.message 
              ? tab.wgappStrings.oauth_manage_test_fail(response.message)
              : tab.wgappStrings.oauth_manage_test_fail_generic;
            $("<span>")
              .addClass("tabKeychainTestFailure").text(errorMessage)
              .appendTo(that._getKeyDom(keyId).find(".tabKeychainKeyButtons"))
              .delay(5000)
              .fadeOut("fast", function(e) { $(this).remove(); });
            }
        });
    },
    _getKeyDom: function(keyId) {
      return this.$el.find(".tabKeychainKey[data-tabKeyId='" + keyId + "']");
    },

    _safeCssClass: function (val) {
      return val.replace(/[^A-Za-z]/, "");
    },
    _showError: function(errorKey) {
      var errorMessage = tab.wgappStrings["oauth_manage_error_" + errorKey];
      $("<div>")
        .addClass("tabKeychainError")
        .text(errorMessage)
        .prependTo(this.$el)
        .delay(15000)
        .fadeOut("fast", function(e) { $(this).remove(); });
    }
  };

  // General OAuth utility functions
  var oAuthCallbackInstance = $.Callbacks();
  var OAuth = {
    requestAddToken : function(url, callback) {
      oAuthCallbackInstance.empty();
      oAuthCallbackInstance.add(callback);
      window.open(url, 'oauth', 'left=20,top=20,width=500,height=600,toolbar=1,resizable=1'); 
    },

    notifyAddTokenSuccess: function(keyId) {
      log("notifyAddTokenSuccess for keyId %i", keyId);
      oAuthCallbackInstance.fire(true, keyId);
      oAuthCallbackInstance.empty();
    },

    notifyAddTokenFailure: function(message) {
      log("notifyAddTokenFailure");
      oAuthCallbackInstance.fire(false, message);
      oAuthCallbackInstance.empty();
    },

    associateKeyWithResource: function(requestUrl, authToken, keyId, resourceUrl, callback) {
      $.post(requestUrl, { authenticity_token: authToken, id: keyId, repo_url: resourceUrl }, 
        function(data) {
          if (data && data.success) {
            callback(true);
          } else {
            log("Associating resource failed: key=%s, resource=%s, response=%o", keyId, resourceUrl, data);
            callback(false);
          }
        });
    }
  }

  this.Tableau || (this.Tableau = {});

  this.Tableau.KeychainAdmin = KeychainAdmin;
  this.Tableau.OAuth = OAuth;
}).call(this, jQuery);


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
  var Notifications = function (settings) {
    this.settings = settings;
    this.$el = $('<div>')
      .addClass('tab-notifications')
    this.$content = $('<iframe>')
      .attr("seamless", "seamless")
      .attr("frameborder", 0)
      .attr("border", 0)
      .css("border", 0)
      .css("scrolling", "no")
      .appendTo(this.$el);
    if (this.settings.iframeCss) {
      this.$content.css(this.settings.iframeCss);
    }
    this.requestedData = null; // the data received from the Notifications controller
    this.contentUrl = null; // the URL of the Notification content to load
    if (settings && settings.contentUrl) {
      this.contentUrl = settings.contentUrl; // In some cases (post-login) the content URL is known at instantiation time
      this._applyContentUrl();
    }
    this._requestData(); // In most cases the Notification metadata will be requested post load
  };  
  Notifications.prototype = {
    _requestData: function() {
      if (this.settings && !this.requestedData) { // only request once
        $.getJSON(this.settings.dataUrl) // get the metadata
        .then($.proxy(function(data) {
          this.requestedData = data; // persist the metadata
        }, this))
        .done($.proxy(this._applyData, this)); // apply the metadata on success, fail silently otherwise
      }
    },
    _applyData: function() { // entry point for applying the metadata     
      if (this.requestedData) {
        if (this.requestedData.contentUrl) {
          this.contentUrl = this.requestedData.contentUrl;
        }
        this._applyContentUrl();
        if (this.settings.successCallback) {
          this.settings.successCallback(this.contentUrl);
        }
      }
    },
    _applyContentUrl: function() {
      if (this.contentUrl) {
        this.$content.attr("src", this.contentUrl);
      }
    }
  };
  //
  // Getting started
  //
  Notifications.setupGettingStarted = function (settings) {
    Notifications._gettingStartedSettings = settings;
  };
  Notifications.showGettingStarted = function () {
    if (!Notifications._gettingStartedSettings) { return; }
    
    var settings = Notifications._gettingStartedSettings;
    // 600 - 2 * 10 padding
    settings.iframeCss = { width: "780px", height: "540px" };
    var n = new Notifications(settings);
    
    var $el = $("<div>").addClass("tabGettingStartedDialog")
      .append(n.$el)
      .appendTo($("body"));
    
    var $overlay = $("<div>").addClass("tabGettingStartedOverlay")
      .appendTo($("body"));

    var closeDialog = function() {
        // BUG 79594 - clear out iframe src to force IE to stop playing the video
        $el.find("iframe").attr("src", "about:blank");
        $el.remove();
        $overlay.remove();
    };

    $overlay.click(closeDialog);

    $el.append($("<div>").addClass("tabGettingStartedClose").html("&#x00d7;").click(closeDialog));
    if (settings.suppressUrl && settings.suppressMessage) {
      var $check = $("<input type='checkbox'>").change(function() {
        settings.suppressState = !$check.prop("checked");
        $.get(settings.suppressUrl, { suppress: settings.suppressState });
      });
      if (!settings.suppressState) {
        $check.prop("checked", true);
      }
      $el.append($("<div>").addClass("tabGettingStartedSuppress")
        .append($("<label>").text(settings.suppressMessage).prepend($check)));
    }
  };

  this.Tableau || (this.Tableau = {});
  this.Tableau.Notifications = Notifications;
}).call(this, jQuery);


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

  var StringUtils = {};
  StringUtils.escapeForAttr = function(s) {
    return s.replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
  };
  StringUtils.escapeForElem = function(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };
  StringUtils.escapeSpaces = function(s) {
    return s.replace(/\s/g, '&nbsp;');
  };
  StringUtils.escapeSpacesAndForElem = function(s) {
    return StringUtils.escapeSpaces(StringUtils.escapeForElem(s));
  };
  

  this.Tableau || (this.Tableau = {});
  this.Tableau.StringUtils = StringUtils;

}).call(this, jQuery);


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


/*!
 * Globalize
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */

(function( window, undefined ) {

var Globalize,
	// private variables
	regexHex,
	regexInfinity,
	regexParseFloat,
	regexTrim,
	// private JavaScript utility functions
	arrayIndexOf,
	endsWith,
	extend,
	isArray,
	isFunction,
	isObject,
	startsWith,
	trim,
	truncate,
	zeroPad,
	// private Globalization utility functions
	appendPreOrPostMatch,
	expandFormat,
	formatDate,
	formatNumber,
	getTokenRegExp,
	getEra,
	getEraYear,
	parseExact,
	parseNegativePattern;

// Global variable (Globalize) or CommonJS module (globalize)
Globalize = function( cultureSelector ) {
	return new Globalize.prototype.init( cultureSelector );
};

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	module.exports = Globalize;
} else {
	// Export as global variable
	window.Globalize = Globalize;
}

Globalize.cultures = {};

Globalize.prototype = {
	constructor: Globalize,
	init: function( cultureSelector ) {
		this.cultures = Globalize.cultures;
		this.cultureSelector = cultureSelector;

		return this;
	}
};
Globalize.prototype.init.prototype = Globalize.prototype;

// 1. When defining a culture, all fields are required except the ones stated as optional.
// 2. Each culture should have a ".calendars" object with at least one calendar named "standard"
//    which serves as the default calendar in use by that culture.
// 3. Each culture should have a ".calendar" object which is the current calendar being used,
//    it may be dynamically changed at any time to one of the calendars in ".calendars".
Globalize.cultures[ "default" ] = {
	// A unique name for the culture in the form <language code>-<country/region code>
	name: "en",
	// the name of the culture in the english language
	englishName: "English",
	// the name of the culture in its own language
	nativeName: "English",
	// whether the culture uses right-to-left text
	isRTL: false,
	// "language" is used for so-called "specific" cultures.
	// For example, the culture "es-CL" means "Spanish, in Chili".
	// It represents the Spanish-speaking culture as it is in Chili,
	// which might have different formatting rules or even translations
	// than Spanish in Spain. A "neutral" culture is one that is not
	// specific to a region. For example, the culture "es" is the generic
	// Spanish culture, which may be a more generalized version of the language
	// that may or may not be what a specific culture expects.
	// For a specific culture like "es-CL", the "language" field refers to the
	// neutral, generic culture information for the language it is using.
	// This is not always a simple matter of the string before the dash.
	// For example, the "zh-Hans" culture is netural (Simplified Chinese).
	// And the "zh-SG" culture is Simplified Chinese in Singapore, whose lanugage
	// field is "zh-CHS", not "zh".
	// This field should be used to navigate from a specific culture to it's
	// more general, neutral culture. If a culture is already as general as it
	// can get, the language may refer to itself.
	language: "en",
	// numberFormat defines general number formatting rules, like the digits in
	// each grouping, the group separator, and how negative numbers are displayed.
	numberFormat: {
		// [negativePattern]
		// Note, numberFormat.pattern has no "positivePattern" unlike percent and currency,
		// but is still defined as an array for consistency with them.
		//   negativePattern: one of "(n)|-n|- n|n-|n -"
		pattern: [ "-n" ],
		// number of decimal places normally shown
		decimals: 2,
		// string that separates number groups, as in 1,000,000
		",": ",",
		// string that separates a number from the fractional portion, as in 1.99
		".": ".",
		// array of numbers indicating the size of each number group.
		// TODO: more detailed description and example
		groupSizes: [ 3 ],
		// symbol used for positive numbers
		"+": "+",
		// symbol used for negative numbers
		"-": "-",
		// symbol used for NaN (Not-A-Number)
		"NaN": "NaN",
		// symbol used for Negative Infinity
		negativeInfinity: "-Infinity",
		// symbol used for Positive Infinity
		positiveInfinity: "Infinity",
		percent: {
			// [negativePattern, positivePattern]
			//   negativePattern: one of "-n %|-n%|-%n|%-n|%n-|n-%|n%-|-% n|n %-|% n-|% -n|n- %"
			//   positivePattern: one of "n %|n%|%n|% n"
			pattern: [ "-n %", "n %" ],
			// number of decimal places normally shown
			decimals: 2,
			// array of numbers indicating the size of each number group.
			// TODO: more detailed description and example
			groupSizes: [ 3 ],
			// string that separates number groups, as in 1,000,000
			",": ",",
			// string that separates a number from the fractional portion, as in 1.99
			".": ".",
			// symbol used to represent a percentage
			symbol: "%"
		},
		currency: {
			// [negativePattern, positivePattern]
			//   negativePattern: one of "($n)|-$n|$-n|$n-|(n$)|-n$|n-$|n$-|-n $|-$ n|n $-|$ n-|$ -n|n- $|($ n)|(n $)"
			//   positivePattern: one of "$n|n$|$ n|n $"
			pattern: [ "($n)", "$n" ],
			// number of decimal places normally shown
			decimals: 2,
			// array of numbers indicating the size of each number group.
			// TODO: more detailed description and example
			groupSizes: [ 3 ],
			// string that separates number groups, as in 1,000,000
			",": ",",
			// string that separates a number from the fractional portion, as in 1.99
			".": ".",
			// symbol used to represent currency
			symbol: "$"
		}
	},
	// calendars defines all the possible calendars used by this culture.
	// There should be at least one defined with name "standard", and is the default
	// calendar used by the culture.
	// A calendar contains information about how dates are formatted, information about
	// the calendar's eras, a standard set of the date formats,
	// translations for day and month names, and if the calendar is not based on the Gregorian
	// calendar, conversion functions to and from the Gregorian calendar.
	calendars: {
		standard: {
			// name that identifies the type of calendar this is
			name: "Gregorian_USEnglish",
			// separator of parts of a date (e.g. "/" in 11/05/1955)
			"/": "/",
			// separator of parts of a time (e.g. ":" in 05:44 PM)
			":": ":",
			// the first day of the week (0 = Sunday, 1 = Monday, etc)
			firstDay: 0,
			days: {
				// full day names
				names: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
				// abbreviated day names
				namesAbbr: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
				// shortest day names
				namesShort: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ]
			},
			months: {
				// full month names (13 months for lunar calendards -- 13th month should be "" if not lunar)
				names: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "" ],
				// abbreviated month names
				namesAbbr: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "" ]
			},
			// AM and PM designators in one of these forms:
			// The usual view, and the upper and lower case versions
			//   [ standard, lowercase, uppercase ]
			// The culture does not use AM or PM (likely all standard date formats use 24 hour time)
			//   null
			AM: [ "AM", "am", "AM" ],
			PM: [ "PM", "pm", "PM" ],
			eras: [
				// eras in reverse chronological order.
				// name: the name of the era in this culture (e.g. A.D., C.E.)
				// start: when the era starts in ticks (gregorian, gmt), null if it is the earliest supported era.
				// offset: offset in years from gregorian calendar
				{
					"name": "A.D.",
					"start": null,
					"offset": 0
				}
			],
			// when a two digit year is given, it will never be parsed as a four digit
			// year greater than this year (in the appropriate era for the culture)
			// Set it as a full year (e.g. 2029) or use an offset format starting from
			// the current year: "+19" would correspond to 2029 if the current year 2010.
			twoDigitYearMax: 2029,
			// set of predefined date and time patterns used by the culture
			// these represent the format someone in this culture would expect
			// to see given the portions of the date that are shown.
			patterns: {
				// short date pattern
				d: "M/d/yyyy",
				// long date pattern
				D: "dddd, MMMM dd, yyyy",
				// short time pattern
				t: "h:mm tt",
				// long time pattern
				T: "h:mm:ss tt",
				// long date, short time pattern
				f: "dddd, MMMM dd, yyyy h:mm tt",
				// long date, long time pattern
				F: "dddd, MMMM dd, yyyy h:mm:ss tt",
				// month/day pattern
				M: "MMMM dd",
				// month/year pattern
				// TABLEAU EDIT: change this pattern from "yyyy MMMM" to "MMMM yyyy"
				Y: "MMMM yyyy",
				// S is a sortable format that does not vary by culture
				S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss"
			}
			// optional fields for each calendar:
			/*
			monthsGenitive:
				Same as months but used when the day preceeds the month.
				Omit if the culture has no genitive distinction in month names.
				For an explaination of genitive months, see http://blogs.msdn.com/michkap/archive/2004/12/25/332259.aspx
			convert:
				Allows for the support of non-gregorian based calendars. This convert object is used to
				to convert a date to and from a gregorian calendar date to handle parsing and formatting.
				The two functions:
					fromGregorian( date )
						Given the date as a parameter, return an array with parts [ year, month, day ]
						corresponding to the non-gregorian based year, month, and day for the calendar.
					toGregorian( year, month, day )
						Given the non-gregorian year, month, and day, return a new Date() object
						set to the corresponding date in the gregorian calendar.
			*/
		}
	},
	// For localized strings
	messages: {}
};

Globalize.cultures[ "default" ].calendar = Globalize.cultures[ "default" ].calendars.standard;

Globalize.cultures.en = Globalize.cultures[ "default" ];

Globalize.cultureSelector = "en";

//
// private variables
//

regexHex = /^0x[a-f0-9]+$/i;
regexInfinity = /^[+\-]?infinity$/i;
regexParseFloat = /^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/;
regexTrim = /^\s+|\s+$/g;

//
// private JavaScript utility functions
//

arrayIndexOf = function( array, item ) {
	if ( array.indexOf ) {
		return array.indexOf( item );
	}
	for ( var i = 0, length = array.length; i < length; i++ ) {
		if ( array[i] === item ) {
			return i;
		}
	}
	return -1;
};

endsWith = function( value, pattern ) {
	return value.substr( value.length - pattern.length ) === pattern;
};

extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction(target) ) {
		target = {};
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( isObject(copy) || (copyIsArray = isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && isArray(src) ? src : [];

					} else {
						clone = src && isObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

isArray = Array.isArray || function( obj ) {
	return Object.prototype.toString.call( obj ) === "[object Array]";
};

isFunction = function( obj ) {
	return Object.prototype.toString.call( obj ) === "[object Function]";
};

isObject = function( obj ) {
	return Object.prototype.toString.call( obj ) === "[object Object]";
};

startsWith = function( value, pattern ) {
	return value.indexOf( pattern ) === 0;
};

trim = function( value ) {
	return ( value + "" ).replace( regexTrim, "" );
};

truncate = function( value ) {
	if ( isNaN( value ) ) {
		return NaN;
	}
	return Math[ value < 0 ? "ceil" : "floor" ]( value );
};

zeroPad = function( str, count, left ) {
	var l;
	for ( l = str.length; l < count; l += 1 ) {
		str = ( left ? ("0" + str) : (str + "0") );
	}
	return str;
};

//
// private Globalization utility functions
//

appendPreOrPostMatch = function( preMatch, strings ) {
	// appends pre- and post- token match strings while removing escaped characters.
	// Returns a single quote count which is used to determine if the token occurs
	// in a string literal.
	var quoteCount = 0,
		escaped = false;
	for ( var i = 0, il = preMatch.length; i < il; i++ ) {
		var c = preMatch.charAt( i );
		switch ( c ) {
			case "\'":
				if ( escaped ) {
					strings.push( "\'" );
				}
				else {
					quoteCount++;
				}
				escaped = false;
				break;
			case "\\":
				if ( escaped ) {
					strings.push( "\\" );
				}
				escaped = !escaped;
				break;
			default:
				strings.push( c );
				escaped = false;
				break;
		}
	}
	return quoteCount;
};

expandFormat = function( cal, format ) {
	// expands unspecified or single character date formats into the full pattern.
	format = format || "F";
	var pattern,
		patterns = cal.patterns,
		len = format.length;
	if ( len === 1 ) {
		pattern = patterns[ format ];
		if ( !pattern ) {
			throw "Invalid date format string \'" + format + "\'.";
		}
		format = pattern;
	}
	else if ( len === 2 && format.charAt(0) === "%" ) {
		// %X escape format -- intended as a custom format string that is only one character, not a built-in format.
		format = format.charAt( 1 );
	}
	return format;
};

formatDate = function( value, format, culture ) {
	var cal = culture.calendar,
		convert = cal.convert,
		ret;

	if ( !format || !format.length || format === "i" ) {
		if ( culture && culture.name.length ) {
			if ( convert ) {
				// non-gregorian calendar, so we cannot use built-in toLocaleString()
				ret = formatDate( value, cal.patterns.F, culture );
			}
			else {
				var eraDate = new Date( value.getTime() ),
					era = getEra( value, cal.eras );
				eraDate.setFullYear( getEraYear(value, cal, era) );
				ret = eraDate.toLocaleString();
			}
		}
		else {
			ret = value.toString();
		}
		return ret;
	}

	var eras = cal.eras,
		sortable = format === "s";
	format = expandFormat( cal, format );

	// Start with an empty string
	ret = [];
	var hour,
		zeros = [ "0", "00", "000" ],
		foundDay,
		checkedDay,
		dayPartRegExp = /([^d]|^)(d|dd)([^d]|$)/g,
		quoteCount = 0,
		tokenRegExp = getTokenRegExp(),
		converted;

	function padZeros( num, c ) {
		var r, s = num + "";
		if ( c > 1 && s.length < c ) {
			r = ( zeros[c - 2] + s);
			return r.substr( r.length - c, c );
		}
		else {
			r = s;
		}
		return r;
	}

	function hasDay() {
		if ( foundDay || checkedDay ) {
			return foundDay;
		}
		foundDay = dayPartRegExp.test( format );
		checkedDay = true;
		return foundDay;
	}

	function getPart( date, part ) {
		if ( converted ) {
			return converted[ part ];
		}
		switch ( part ) {
			case 0:
				return date.getFullYear();
			case 1:
				return date.getMonth();
			case 2:
				return date.getDate();
			default:
				throw "Invalid part value " + part;
		}
	}

	if ( !sortable && convert ) {
		converted = convert.fromGregorian( value );
	}

	for ( ; ; ) {
		// Save the current index
		var index = tokenRegExp.lastIndex,
			// Look for the next pattern
			ar = tokenRegExp.exec( format );

		// Append the text before the pattern (or the end of the string if not found)
		var preMatch = format.slice( index, ar ? ar.index : format.length );
		quoteCount += appendPreOrPostMatch( preMatch, ret );

		if ( !ar ) {
			break;
		}

		// do not replace any matches that occur inside a string literal.
		if ( quoteCount % 2 ) {
			ret.push( ar[0] );
			continue;
		}

		var current = ar[ 0 ],
			clength = current.length;

		switch ( current ) {
			case "ddd":
				//Day of the week, as a three-letter abbreviation
			case "dddd":
				// Day of the week, using the full name
				var names = ( clength === 3 ) ? cal.days.namesAbbr : cal.days.names;
				ret.push( names[value.getDay()] );
				break;
			case "d":
				// Day of month, without leading zero for single-digit days
			case "dd":
				// Day of month, with leading zero for single-digit days
				foundDay = true;
				ret.push(
					padZeros( getPart(value, 2), clength )
				);
				break;
			case "MMM":
				// Month, as a three-letter abbreviation
			case "MMMM":
				// Month, using the full name
				var part = getPart( value, 1 );
				ret.push(
					( cal.monthsGenitive && hasDay() ) ?
					( cal.monthsGenitive[ clength === 3 ? "namesAbbr" : "names" ][ part ] ) :
					( cal.months[ clength === 3 ? "namesAbbr" : "names" ][ part ] )
				);
				break;
			case "M":
				// Month, as digits, with no leading zero for single-digit months
			case "MM":
				// Month, as digits, with leading zero for single-digit months
				ret.push(
					padZeros( getPart(value, 1) + 1, clength )
				);
				break;
			case "y":
				// Year, as two digits, but with no leading zero for years less than 10
			case "yy":
				// Year, as two digits, with leading zero for years less than 10
			case "yyyy":
				// Year represented by four full digits
				part = converted ? converted[ 0 ] : getEraYear( value, cal, getEra(value, eras), sortable );
				if ( clength < 4 ) {
					part = part % 100;
				}
				ret.push(
					padZeros( part, clength )
				);
				break;
			case "h":
				// Hours with no leading zero for single-digit hours, using 12-hour clock
			case "hh":
				// Hours with leading zero for single-digit hours, using 12-hour clock
				hour = value.getHours() % 12;
				if ( hour === 0 ) hour = 12;
				ret.push(
					padZeros( hour, clength )
				);
				break;
			case "H":
				// Hours with no leading zero for single-digit hours, using 24-hour clock
			case "HH":
				// Hours with leading zero for single-digit hours, using 24-hour clock
				ret.push(
					padZeros( value.getHours(), clength )
				);
				break;
			case "m":
				// Minutes with no leading zero for single-digit minutes
			case "mm":
				// Minutes with leading zero for single-digit minutes
				ret.push(
					padZeros( value.getMinutes(), clength )
				);
				break;
			case "s":
				// Seconds with no leading zero for single-digit seconds
			case "ss":
				// Seconds with leading zero for single-digit seconds
				ret.push(
					padZeros( value.getSeconds(), clength )
				);
				break;
			case "t":
				// One character am/pm indicator ("a" or "p")
			case "tt":
				// Multicharacter am/pm indicator
				part = value.getHours() < 12 ? ( cal.AM ? cal.AM[0] : " " ) : ( cal.PM ? cal.PM[0] : " " );
				ret.push( clength === 1 ? part.charAt(0) : part );
				break;
			case "f":
				// Deciseconds
			case "ff":
				// Centiseconds
			case "fff":
				// Milliseconds
				ret.push(
					padZeros( value.getMilliseconds(), 3 ).substr( 0, clength )
				);
				break;
			case "z":
				// Time zone offset, no leading zero
			case "zz":
				// Time zone offset with leading zero
				hour = value.getTimezoneOffset() / 60;
				ret.push(
					( hour <= 0 ? "+" : "-" ) + padZeros( Math.floor(Math.abs(hour)), clength )
				);
				break;
			case "zzz":
				// Time zone offset with leading zero
				hour = value.getTimezoneOffset() / 60;
				ret.push(
					( hour <= 0 ? "+" : "-" ) + padZeros( Math.floor(Math.abs(hour)), 2 ) +
					// Hard coded ":" separator, rather than using cal.TimeSeparator
					// Repeated here for consistency, plus ":" was already assumed in date parsing.
					":" + padZeros( Math.abs(value.getTimezoneOffset() % 60), 2 )
				);
				break;
			case "g":
			case "gg":
				if ( cal.eras ) {
					ret.push(
						cal.eras[ getEra(value, eras) ].name
					);
				}
				break;
		case "/":
			ret.push( cal["/"] );
			break;
		default:
			throw "Invalid date format pattern \'" + current + "\'.";
		}
	}
	return ret.join( "" );
};

// formatNumber
(function() {
	var expandNumber;

	expandNumber = function( number, precision, formatInfo ) {
		var groupSizes = formatInfo.groupSizes,
			curSize = groupSizes[ 0 ],
			curGroupIndex = 1,
			factor = Math.pow( 10, precision ),
			rounded = Math.round( number * factor ) / factor;

		if ( !isFinite(rounded) ) {
			rounded = number;
		}
		number = rounded;

		var numberString = number+"",
			right = "",
			split = numberString.split( /e/i ),
			exponent = split.length > 1 ? parseInt( split[1], 10 ) : 0;
		numberString = split[ 0 ];
		split = numberString.split( "." );
		numberString = split[ 0 ];
		right = split.length > 1 ? split[ 1 ] : "";

		var l;
		if ( exponent > 0 ) {
			right = zeroPad( right, exponent, false );
			numberString += right.slice( 0, exponent );
			right = right.substr( exponent );
		}
		else if ( exponent < 0 ) {
			exponent = -exponent;
			numberString = zeroPad( numberString, exponent + 1, true );
			right = numberString.slice( -exponent, numberString.length ) + right;
			numberString = numberString.slice( 0, -exponent );
		}

		if ( precision > 0 ) {
			right = formatInfo[ "." ] +
				( (right.length > precision) ? right.slice(0, precision) : zeroPad(right, precision) );
		}
		else {
			right = "";
		}

		var stringIndex = numberString.length - 1,
			sep = formatInfo[ "," ],
			ret = "";

		while ( stringIndex >= 0 ) {
			if ( curSize === 0 || curSize > stringIndex ) {
				return numberString.slice( 0, stringIndex + 1 ) + ( ret.length ? (sep + ret + right) : right );
			}
			ret = numberString.slice( stringIndex - curSize + 1, stringIndex + 1 ) + ( ret.length ? (sep + ret) : "" );

			stringIndex -= curSize;

			if ( curGroupIndex < groupSizes.length ) {
				curSize = groupSizes[ curGroupIndex ];
				curGroupIndex++;
			}
		}

		return numberString.slice( 0, stringIndex + 1 ) + sep + ret + right;
	};

	formatNumber = function( value, format, culture ) {
		if ( !isFinite(value) ) {
			if ( value === Infinity ) {
				return culture.numberFormat.positiveInfinity;
			}
			if ( value === -Infinity ) {
				return culture.numberFormat.negativeInfinity;
			}
			return culture.numberFormat[ "NaN" ];
		}
		if ( !format || format === "i" ) {
			return culture.name.length ? value.toLocaleString() : value.toString();
		}
		format = format || "D";

		var nf = culture.numberFormat,
			number = Math.abs( value ),
			precision = -1,
			pattern;
		if ( format.length > 1 ) precision = parseInt( format.slice(1), 10 );

		var current = format.charAt( 0 ).toUpperCase(),
			formatInfo;

		switch ( current ) {
			case "D":
				pattern = "n";
				number = truncate( number );
				if ( precision !== -1 ) {
					number = zeroPad( "" + number, precision, true );
				}
				if ( value < 0 ) number = "-" + number;
				break;
			case "N":
				formatInfo = nf;
				/* falls through */
			case "C":
				formatInfo = formatInfo || nf.currency;
				/* falls through */
			case "P":
				formatInfo = formatInfo || nf.percent;
				pattern = value < 0 ? formatInfo.pattern[ 0 ] : ( formatInfo.pattern[1] || "n" );
				if ( precision === -1 ) precision = formatInfo.decimals;
				number = expandNumber( number * (current === "P" ? 100 : 1), precision, formatInfo );
				break;
			default:
				throw "Bad number format specifier: " + current;
		}

		var patternParts = /n|\$|-|%/g,
			ret = "";
		for ( ; ; ) {
			var index = patternParts.lastIndex,
				ar = patternParts.exec( pattern );

			ret += pattern.slice( index, ar ? ar.index : pattern.length );

			if ( !ar ) {
				break;
			}

			switch ( ar[0] ) {
				case "n":
					ret += number;
					break;
				case "$":
					ret += nf.currency.symbol;
					break;
				case "-":
					// don't make 0 negative
					if ( /[1-9]/.test(number) ) {
						ret += nf[ "-" ];
					}
					break;
				case "%":
					ret += nf.percent.symbol;
					break;
			}
		}

		return ret;
	};

}());

getTokenRegExp = function() {
	// regular expression for matching date and time tokens in format strings.
	return (/\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g);
};

getEra = function( date, eras ) {
	if ( !eras ) return 0;
	var start, ticks = date.getTime();
	for ( var i = 0, l = eras.length; i < l; i++ ) {
		start = eras[ i ].start;
		if ( start === null || ticks >= start ) {
			return i;
		}
	}
	return 0;
};

getEraYear = function( date, cal, era, sortable ) {
	var year = date.getFullYear();
	if ( !sortable && cal.eras ) {
		// convert normal gregorian year to era-shifted gregorian
		// year by subtracting the era offset
		year -= cal.eras[ era ].offset;
	}
	return year;
};

// parseExact
(function() {
	var expandYear,
		getDayIndex,
		getMonthIndex,
		getParseRegExp,
		outOfRange,
		toUpper,
		toUpperArray;

	expandYear = function( cal, year ) {
		// expands 2-digit year into 4 digits.
		if ( year < 100 ) {
			var now = new Date(),
				era = getEra( now ),
				curr = getEraYear( now, cal, era ),
				twoDigitYearMax = cal.twoDigitYearMax;
			twoDigitYearMax = typeof twoDigitYearMax === "string" ? new Date().getFullYear() % 100 + parseInt( twoDigitYearMax, 10 ) : twoDigitYearMax;
			year += curr - ( curr % 100 );
			if ( year > twoDigitYearMax ) {
				year -= 100;
			}
		}
		return year;
	};

	getDayIndex = function	( cal, value, abbr ) {
		var ret,
			days = cal.days,
			upperDays = cal._upperDays;
		if ( !upperDays ) {
			cal._upperDays = upperDays = [
				toUpperArray( days.names ),
				toUpperArray( days.namesAbbr ),
				toUpperArray( days.namesShort )
			];
		}
		value = toUpper( value );
		if ( abbr ) {
			ret = arrayIndexOf( upperDays[1], value );
			if ( ret === -1 ) {
				ret = arrayIndexOf( upperDays[2], value );
			}
		}
		else {
			ret = arrayIndexOf( upperDays[0], value );
		}
		return ret;
	};

	getMonthIndex = function( cal, value, abbr ) {
		var months = cal.months,
			monthsGen = cal.monthsGenitive || cal.months,
			upperMonths = cal._upperMonths,
			upperMonthsGen = cal._upperMonthsGen;
		if ( !upperMonths ) {
			cal._upperMonths = upperMonths = [
				toUpperArray( months.names ),
				toUpperArray( months.namesAbbr )
			];
			cal._upperMonthsGen = upperMonthsGen = [
				toUpperArray( monthsGen.names ),
				toUpperArray( monthsGen.namesAbbr )
			];
		}
		value = toUpper( value );
		var i = arrayIndexOf( abbr ? upperMonths[1] : upperMonths[0], value );
		if ( i < 0 ) {
			i = arrayIndexOf( abbr ? upperMonthsGen[1] : upperMonthsGen[0], value );
		}
		return i;
	};

	getParseRegExp = function( cal, format ) {
		// converts a format string into a regular expression with groups that
		// can be used to extract date fields from a date string.
		// check for a cached parse regex.
		var re = cal._parseRegExp;
		if ( !re ) {
			cal._parseRegExp = re = {};
		}
		else {
			var reFormat = re[ format ];
			if ( reFormat ) {
				return reFormat;
			}
		}

		// expand single digit formats, then escape regular expression characters.
		var expFormat = expandFormat( cal, format ).replace( /([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1" ),
			regexp = [ "^" ],
			groups = [],
			index = 0,
			quoteCount = 0,
			tokenRegExp = getTokenRegExp(),
			match;

		// iterate through each date token found.
		while ( (match = tokenRegExp.exec(expFormat)) !== null ) {
			var preMatch = expFormat.slice( index, match.index );
			index = tokenRegExp.lastIndex;

			// don't replace any matches that occur inside a string literal.
			quoteCount += appendPreOrPostMatch( preMatch, regexp );
			if ( quoteCount % 2 ) {
				regexp.push( match[0] );
				continue;
			}

			// add a regex group for the token.
			var m = match[ 0 ],
				len = m.length,
				add;
			switch ( m ) {
				case "dddd": case "ddd":
				case "MMMM": case "MMM":
				case "gg": case "g":
					add = "(\\D+)";
					break;
				case "tt": case "t":
					add = "(\\D*)";
					break;
				case "yyyy":
				case "fff":
				case "ff":
				case "f":
					add = "(\\d{" + len + "})";
					break;
				case "dd": case "d":
				case "MM": case "M":
				case "yy": case "y":
				case "HH": case "H":
				case "hh": case "h":
				case "mm": case "m":
				case "ss": case "s":
					add = "(\\d\\d?)";
					break;
				case "zzz":
					add = "([+-]?\\d\\d?:\\d{2})";
					break;
				case "zz": case "z":
					add = "([+-]?\\d\\d?)";
					break;
				case "/":
					add = "(\\/)";
					break;
				default:
					throw "Invalid date format pattern \'" + m + "\'.";
			}
			if ( add ) {
				regexp.push( add );
			}
			groups.push( match[0] );
		}
		appendPreOrPostMatch( expFormat.slice(index), regexp );
		regexp.push( "$" );

		// allow whitespace to differ when matching formats.
		var regexpStr = regexp.join( "" ).replace( /\s+/g, "\\s+" ),
			parseRegExp = { "regExp": regexpStr, "groups": groups };

		// cache the regex for this format.
		return re[ format ] = parseRegExp;
	};

	outOfRange = function( value, low, high ) {
		return value < low || value > high;
	};

	toUpper = function( value ) {
		// "he-IL" has non-breaking space in weekday names.
		return value.split( "\u00A0" ).join( " " ).toUpperCase();
	};

	toUpperArray = function( arr ) {
		var results = [];
		for ( var i = 0, l = arr.length; i < l; i++ ) {
			results[ i ] = toUpper( arr[i] );
		}
		return results;
	};

	parseExact = function( value, format, culture ) {
		// try to parse the date string by matching against the format string
		// while using the specified culture for date field names.
		value = trim( value );
		var cal = culture.calendar,
			// convert date formats into regular expressions with groupings.
			// use the regexp to determine the input format and extract the date fields.
			parseInfo = getParseRegExp( cal, format ),
			match = new RegExp( parseInfo.regExp ).exec( value );
		if ( match === null ) {
			return null;
		}
		// found a date format that matches the input.
		var groups = parseInfo.groups,
			era = null, year = null, month = null, date = null, weekDay = null,
			hour = 0, hourOffset, min = 0, sec = 0, msec = 0, tzMinOffset = null,
			pmHour = false;
		// iterate the format groups to extract and set the date fields.
		for ( var j = 0, jl = groups.length; j < jl; j++ ) {
			var matchGroup = match[ j + 1 ];
			if ( matchGroup ) {
				var current = groups[ j ],
					clength = current.length,
					matchInt = parseInt( matchGroup, 10 );
				switch ( current ) {
					case "dd": case "d":
						// Day of month.
						date = matchInt;
						// check that date is generally in valid range, also checking overflow below.
						if ( outOfRange(date, 1, 31) ) return null;
						break;
					case "MMM": case "MMMM":
						month = getMonthIndex( cal, matchGroup, clength === 3 );
						if ( outOfRange(month, 0, 11) ) return null;
						break;
					case "M": case "MM":
						// Month.
						month = matchInt - 1;
						if ( outOfRange(month, 0, 11) ) return null;
						break;
					case "y": case "yy":
					case "yyyy":
						year = clength < 4 ? expandYear( cal, matchInt ) : matchInt;
						if ( outOfRange(year, 0, 9999) ) return null;
						break;
					case "h": case "hh":
						// Hours (12-hour clock).
						hour = matchInt;
						if ( hour === 12 ) hour = 0;
						if ( outOfRange(hour, 0, 11) ) return null;
						break;
					case "H": case "HH":
						// Hours (24-hour clock).
						hour = matchInt;
						if ( outOfRange(hour, 0, 23) ) return null;
						break;
					case "m": case "mm":
						// Minutes.
						min = matchInt;
						if ( outOfRange(min, 0, 59) ) return null;
						break;
					case "s": case "ss":
						// Seconds.
						sec = matchInt;
						if ( outOfRange(sec, 0, 59) ) return null;
						break;
					case "tt": case "t":
						// AM/PM designator.
						// see if it is standard, upper, or lower case PM. If not, ensure it is at least one of
						// the AM tokens. If not, fail the parse for this format.
						pmHour = cal.PM && ( matchGroup === cal.PM[0] || matchGroup === cal.PM[1] || matchGroup === cal.PM[2] );
						if (
							!pmHour && (
								!cal.AM || ( matchGroup !== cal.AM[0] && matchGroup !== cal.AM[1] && matchGroup !== cal.AM[2] )
							)
						) return null;
						break;
					case "f":
						// Deciseconds.
					case "ff":
						// Centiseconds.
					case "fff":
						// Milliseconds.
						msec = matchInt * Math.pow( 10, 3 - clength );
						if ( outOfRange(msec, 0, 999) ) return null;
						break;
					case "ddd":
						// Day of week.
					case "dddd":
						// Day of week.
						weekDay = getDayIndex( cal, matchGroup, clength === 3 );
						if ( outOfRange(weekDay, 0, 6) ) return null;
						break;
					case "zzz":
						// Time zone offset in +/- hours:min.
						var offsets = matchGroup.split( /:/ );
						if ( offsets.length !== 2 ) return null;
						hourOffset = parseInt( offsets[0], 10 );
						if ( outOfRange(hourOffset, -12, 13) ) return null;
						var minOffset = parseInt( offsets[1], 10 );
						if ( outOfRange(minOffset, 0, 59) ) return null;
						tzMinOffset = ( hourOffset * 60 ) + ( startsWith(matchGroup, "-") ? -minOffset : minOffset );
						break;
					case "z": case "zz":
						// Time zone offset in +/- hours.
						hourOffset = matchInt;
						if ( outOfRange(hourOffset, -12, 13) ) return null;
						tzMinOffset = hourOffset * 60;
						break;
					case "g": case "gg":
						var eraName = matchGroup;
						if ( !eraName || !cal.eras ) return null;
						eraName = trim( eraName.toLowerCase() );
						for ( var i = 0, l = cal.eras.length; i < l; i++ ) {
							if ( eraName === cal.eras[i].name.toLowerCase() ) {
								era = i;
								break;
							}
						}
						// could not find an era with that name
						if ( era === null ) return null;
						break;
				}
			}
		}
		var result = new Date(), defaultYear, convert = cal.convert;
		defaultYear = convert ? convert.fromGregorian( result )[ 0 ] : result.getFullYear();
		if ( year === null ) {
			year = defaultYear;
		}
		else if ( cal.eras ) {
			// year must be shifted to normal gregorian year
			// but not if year was not specified, its already normal gregorian
			// per the main if clause above.
			year += cal.eras[( era || 0 )].offset;
		}
		// set default day and month to 1 and January, so if unspecified, these are the defaults
		// instead of the current day/month.
		if ( month === null ) {
			month = 0;
		}
		if ( date === null ) {
			date = 1;
		}
		// now have year, month, and date, but in the culture's calendar.
		// convert to gregorian if necessary
		if ( convert ) {
			result = convert.toGregorian( year, month, date );
			// conversion failed, must be an invalid match
			if ( result === null ) return null;
		}
		else {
			// have to set year, month and date together to avoid overflow based on current date.
			result.setFullYear( year, month, date );
			// check to see if date overflowed for specified month (only checked 1-31 above).
			if ( result.getDate() !== date ) return null;
			// invalid day of week.
			if ( weekDay !== null && result.getDay() !== weekDay ) {
				return null;
			}
		}
		// if pm designator token was found make sure the hours fit the 24-hour clock.
		if ( pmHour && hour < 12 ) {
			hour += 12;
		}
		result.setHours( hour, min, sec, msec );
		if ( tzMinOffset !== null ) {
			// adjust timezone to utc before applying local offset.
			var adjustedMin = result.getMinutes() - ( tzMinOffset + result.getTimezoneOffset() );
			// Safari limits hours and minutes to the range of -127 to 127.  We need to use setHours
			// to ensure both these fields will not exceed this range.	adjustedMin will range
			// somewhere between -1440 and 1500, so we only need to split this into hours.
			result.setHours( result.getHours() + parseInt(adjustedMin / 60, 10), adjustedMin % 60 );
		}
		return result;
	};
}());

parseNegativePattern = function( value, nf, negativePattern ) {
	var neg = nf[ "-" ],
		pos = nf[ "+" ],
		ret;
	switch ( negativePattern ) {
		case "n -":
			neg = " " + neg;
			pos = " " + pos;
			/* falls through */
		case "n-":
			if ( endsWith(value, neg) ) {
				ret = [ "-", value.substr(0, value.length - neg.length) ];
			}
			else if ( endsWith(value, pos) ) {
				ret = [ "+", value.substr(0, value.length - pos.length) ];
			}
			break;
		case "- n":
			neg += " ";
			pos += " ";
			/* falls through */
		case "-n":
			if ( startsWith(value, neg) ) {
				ret = [ "-", value.substr(neg.length) ];
			}
			else if ( startsWith(value, pos) ) {
				ret = [ "+", value.substr(pos.length) ];
			}
			break;
		case "(n)":
			if ( startsWith(value, "(") && endsWith(value, ")") ) {
				ret = [ "-", value.substr(1, value.length - 2) ];
			}
			break;
	}
	return ret || [ "", value ];
};

//
// public instance functions
//

Globalize.prototype.findClosestCulture = function( cultureSelector ) {
	return Globalize.findClosestCulture.call( this, cultureSelector );
};

Globalize.prototype.format = function( value, format, cultureSelector ) {
	return Globalize.format.call( this, value, format, cultureSelector );
};

Globalize.prototype.localize = function( key, cultureSelector ) {
	return Globalize.localize.call( this, key, cultureSelector );
};

Globalize.prototype.parseInt = function( value, radix, cultureSelector ) {
	return Globalize.parseInt.call( this, value, radix, cultureSelector );
};

Globalize.prototype.parseFloat = function( value, radix, cultureSelector ) {
	return Globalize.parseFloat.call( this, value, radix, cultureSelector );
};

Globalize.prototype.culture = function( cultureSelector ) {
	return Globalize.culture.call( this, cultureSelector );
};

//
// public singleton functions
//

Globalize.addCultureInfo = function( cultureName, baseCultureName, info ) {

	var base = {},
		isNew = false;

	if ( typeof cultureName !== "string" ) {
		// cultureName argument is optional string. If not specified, assume info is first
		// and only argument. Specified info deep-extends current culture.
		info = cultureName;
		cultureName = this.culture().name;
		base = this.cultures[ cultureName ];
	} else if ( typeof baseCultureName !== "string" ) {
		// baseCultureName argument is optional string. If not specified, assume info is second
		// argument. Specified info deep-extends specified culture.
		// If specified culture does not exist, create by deep-extending default
		info = baseCultureName;
		isNew = ( this.cultures[ cultureName ] == null );
		base = this.cultures[ cultureName ] || this.cultures[ "default" ];
	} else {
		// cultureName and baseCultureName specified. Assume a new culture is being created
		// by deep-extending an specified base culture
		isNew = true;
		base = this.cultures[ baseCultureName ];
	}

	this.cultures[ cultureName ] = extend(true, {},
		base,
		info
	);
	// Make the standard calendar the current culture if it's a new culture
	if ( isNew ) {
		this.cultures[ cultureName ].calendar = this.cultures[ cultureName ].calendars.standard;
	}
};

Globalize.findClosestCulture = function( name ) {
	var match;
	if ( !name ) {
		return this.findClosestCulture( this.cultureSelector ) || this.cultures[ "default" ];
	}
	if ( typeof name === "string" ) {
		name = name.split( "," );
	}
	if ( isArray(name) ) {
		var lang,
			cultures = this.cultures,
			list = name,
			i, l = list.length,
			prioritized = [];
		for ( i = 0; i < l; i++ ) {
			name = trim( list[i] );
			var pri, parts = name.split( ";" );
			lang = trim( parts[0] );
			if ( parts.length === 1 ) {
				pri = 1;
			}
			else {
				name = trim( parts[1] );
				if ( name.indexOf("q=") === 0 ) {
					name = name.substr( 2 );
					pri = parseFloat( name );
					pri = isNaN( pri ) ? 0 : pri;
				}
				else {
					pri = 1;
				}
			}
			prioritized.push({ lang: lang, pri: pri });
		}
		prioritized.sort(function( a, b ) {
			if ( a.pri < b.pri ) {
				return 1;
			} else if ( a.pri > b.pri ) {
				return -1;
			}
			return 0;
		});
		// exact match
		for ( i = 0; i < l; i++ ) {
			lang = prioritized[ i ].lang;
			match = cultures[ lang ];
			if ( match ) {
				return match;
			}
		}

		// neutral language match
		for ( i = 0; i < l; i++ ) {
			lang = prioritized[ i ].lang;
			do {
				var index = lang.lastIndexOf( "-" );
				if ( index === -1 ) {
					break;
				}
				// strip off the last part. e.g. en-US => en
				lang = lang.substr( 0, index );
				match = cultures[ lang ];
				if ( match ) {
					return match;
				}
			}
			while ( 1 );
		}

		// last resort: match first culture using that language
		for ( i = 0; i < l; i++ ) {
			lang = prioritized[ i ].lang;
			for ( var cultureKey in cultures ) {
				var culture = cultures[ cultureKey ];
				if ( culture.language == lang ) {
					return culture;
				}
			}
		}
	}
	else if ( typeof name === "object" ) {
		return name;
	}
	return match || null;
};

Globalize.format = function( value, format, cultureSelector ) {
	var culture = this.findClosestCulture( cultureSelector );
	if ( value instanceof Date ) {
		value = formatDate( value, format, culture );
	}
	else if ( typeof value === "number" ) {
		value = formatNumber( value, format, culture );
	}
	return value;
};

Globalize.localize = function( key, cultureSelector ) {
	return this.findClosestCulture( cultureSelector ).messages[ key ] ||
		this.cultures[ "default" ].messages[ key ];
};

Globalize.parseDate = function( value, formats, culture ) {
	culture = this.findClosestCulture( culture );

	var date, prop, patterns;
	if ( formats ) {
		if ( typeof formats === "string" ) {
			formats = [ formats ];
		}
		if ( formats.length ) {
			for ( var i = 0, l = formats.length; i < l; i++ ) {
				var format = formats[ i ];
				if ( format ) {
					date = parseExact( value, format, culture );
					if ( date ) {
						break;
					}
				}
			}
		}
	} else {
		patterns = culture.calendar.patterns;
		for ( prop in patterns ) {
			date = parseExact( value, patterns[prop], culture );
			if ( date ) {
				break;
			}
		}
	}

	return date || null;
};

Globalize.parseInt = function( value, radix, cultureSelector ) {
	return truncate( Globalize.parseFloat(value, radix, cultureSelector) );
};

Globalize.parseFloat = function( value, radix, cultureSelector ) {
	// radix argument is optional
	if ( typeof radix !== "number" ) {
		cultureSelector = radix;
		radix = 10;
	}

	var culture = this.findClosestCulture( cultureSelector );
	var ret = NaN,
		nf = culture.numberFormat;

	if ( value.indexOf(culture.numberFormat.currency.symbol) > -1 ) {
		// remove currency symbol
		value = value.replace( culture.numberFormat.currency.symbol, "" );
		// replace decimal seperator
		value = value.replace( culture.numberFormat.currency["."], culture.numberFormat["."] );
	}

	// trim leading and trailing whitespace
	value = trim( value );

	// allow infinity or hexidecimal
	if ( regexInfinity.test(value) ) {
		ret = parseFloat( value );
	}
	else if ( !radix && regexHex.test(value) ) {
		ret = parseInt( value, 16 );
	}
	else {

		// determine sign and number
		var signInfo = parseNegativePattern( value, nf, nf.pattern[0] ),
			sign = signInfo[ 0 ],
			num = signInfo[ 1 ];

		// #44 - try parsing as "(n)"
		if ( sign === "" && nf.pattern[0] !== "(n)" ) {
			signInfo = parseNegativePattern( value, nf, "(n)" );
			sign = signInfo[ 0 ];
			num = signInfo[ 1 ];
		}

		// try parsing as "-n"
		if ( sign === "" && nf.pattern[0] !== "-n" ) {
			signInfo = parseNegativePattern( value, nf, "-n" );
			sign = signInfo[ 0 ];
			num = signInfo[ 1 ];
		}

		sign = sign || "+";

		// determine exponent and number
		var exponent,
			intAndFraction,
			exponentPos = num.indexOf( "e" );
		if ( exponentPos < 0 ) exponentPos = num.indexOf( "E" );
		if ( exponentPos < 0 ) {
			intAndFraction = num;
			exponent = null;
		}
		else {
			intAndFraction = num.substr( 0, exponentPos );
			exponent = num.substr( exponentPos + 1 );
		}
		// determine decimal position
		var integer,
			fraction,
			decSep = nf[ "." ],
			decimalPos = intAndFraction.indexOf( decSep );
		if ( decimalPos < 0 ) {
			integer = intAndFraction;
			fraction = null;
		}
		else {
			integer = intAndFraction.substr( 0, decimalPos );
			fraction = intAndFraction.substr( decimalPos + decSep.length );
		}
		// handle groups (e.g. 1,000,000)
		var groupSep = nf[ "," ];
		integer = integer.split( groupSep ).join( "" );
		var altGroupSep = groupSep.replace( /\u00A0/g, " " );
		if ( groupSep !== altGroupSep ) {
			integer = integer.split( altGroupSep ).join( "" );
		}
		// build a natively parsable number string
		var p = sign + integer;
		if ( fraction !== null ) {
			p += "." + fraction;
		}
		if ( exponent !== null ) {
			// exponent itself may have a number patternd
			var expSignInfo = parseNegativePattern( exponent, nf, "-n" );
			p += "e" + ( expSignInfo[0] || "+" ) + expSignInfo[ 1 ];
		}
		if ( regexParseFloat.test(p) ) {
			ret = parseFloat( p );
		}
	}
	return ret;
};

Globalize.culture = function( cultureSelector ) {
	// setter
	if ( typeof cultureSelector !== "undefined" ) {
		this.cultureSelector = cultureSelector;
	}
	// getter
	return this.findClosestCulture( cultureSelector ) || this.cultures[ "default" ];
};

}( this ));




