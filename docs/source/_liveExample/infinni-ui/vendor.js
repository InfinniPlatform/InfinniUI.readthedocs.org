/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});

//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map
!function(t,e){if("function"==typeof define&&define.amd)define(["underscore","jquery","exports"],function(i,n,s){t.Backbone=e(t,s,i,n)});else if("undefined"!=typeof exports){var i=require("underscore");e(t,exports,i)}else t.Backbone=e(t,{},t._,t.jQuery||t.Zepto||t.ender||t.$)}(this,function(t,e,i,n){var s=t.Backbone,r=[],a=(r.push,r.slice);r.splice;e.VERSION="1.1.2",e.$=n,e.noConflict=function(){return t.Backbone=s,this},e.emulateHTTP=!1,e.emulateJSON=!1;var o=e.Events={on:function(t,e,i){if(!c(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var n=this._events[t]||(this._events[t]=[]);return n.push({callback:e,context:i,ctx:i||this}),this},once:function(t,e,n){if(!c(this,"once",t,[e,n])||!e)return this;var s=this,r=i.once(function(){s.off(t,r),e.apply(this,arguments)});return r._callback=e,this.on(t,r,n)},off:function(t,e,n){var s,r,a,o,h,u,l,d;if(!this._events||!c(this,"off",t,[e,n]))return this;if(!t&&!e&&!n)return this._events=void 0,this;for(o=t?[t]:i.keys(this._events),h=0,u=o.length;h<u;h++)if(t=o[h],a=this._events[t]){if(this._events[t]=s=[],e||n)for(l=0,d=a.length;l<d;l++)r=a[l],(e&&e!==r.callback&&e!==r.callback._callback||n&&n!==r.context)&&s.push(r);s.length||delete this._events[t]}return this},trigger:function(t){if(!this._events)return this;var e=a.call(arguments,1);if(!c(this,"trigger",t,e))return this;var i=this._events[t],n=this._events.all;return i&&u(i,e),n&&u(n,arguments),this},stopListening:function(t,e,n){var s=this._listeningTo;if(!s)return this;var r=!e&&!n;n||"object"!=typeof e||(n=this),t&&((s={})[t._listenId]=t);for(var a in s)t=s[a],t.off(e,n,this),(r||i.isEmpty(t._events))&&delete this._listeningTo[a];return this}},h=/\s+/,c=function(t,e,i,n){if(!i)return!0;if("object"==typeof i){for(var s in i)t[e].apply(t,[s,i[s]].concat(n));return!1}if(h.test(i)){for(var r=i.split(h),a=0,o=r.length;a<o;a++)t[e].apply(t,[r[a]].concat(n));return!1}return!0},u=function(t,e){var i,n=-1,s=t.length,r=e[0],a=e[1],o=e[2];switch(e.length){case 0:for(;++n<s;)(i=t[n]).callback.call(i.ctx);return;case 1:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r);return;case 2:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r,a);return;case 3:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r,a,o);return;default:for(;++n<s;)(i=t[n]).callback.apply(i.ctx,e);return}},l={listenTo:"on",listenToOnce:"once"};i.each(l,function(t,e){o[e]=function(e,n,s){var r=this._listeningTo||(this._listeningTo={}),a=e._listenId||(e._listenId=i.uniqueId("l"));return r[a]=e,s||"object"!=typeof n||(s=this),e[t](n,s,this),this}}),o.bind=o.on,o.unbind=o.off,i.extend(e,o);var d=e.Model=function(t,e){var n=t||{};e||(e={}),this.cid=i.uniqueId("c"),this.attributes={},e.collection&&(this.collection=e.collection),e.parse&&(n=this.parse(n,e)||{}),n=i.defaults({},n,i.result(this,"defaults")),this.set(n,e),this.changed={},this.initialize.apply(this,arguments)};i.extend(d.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return null!=this.get(t)},set:function(t,e,n){var s,r,a,o,h,c,u,l;if(null==t)return this;if("object"==typeof t?(r=t,n=e):(r={})[t]=e,n||(n={}),!this._validate(r,n))return!1;a=n.unset,h=n.silent,o=[],c=this._changing,this._changing=!0,c||(this._previousAttributes=i.clone(this.attributes),this.changed={}),l=this.attributes,u=this._previousAttributes,this.idAttribute in r&&(this.id=r[this.idAttribute]);for(s in r)e=r[s],i.isEqual(l[s],e)||o.push(s),i.isEqual(u[s],e)?delete this.changed[s]:this.changed[s]=e,a?delete l[s]:l[s]=e;if(!h){o.length&&(this._pending=n);for(var d=0,f=o.length;d<f;d++)this.trigger("change:"+o[d],this,l[o[d]],n)}if(c)return this;if(!h)for(;this._pending;)n=this._pending,this._pending=!1,this.trigger("change",this,n);return this._pending=!1,this._changing=!1,this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:!0}))},clear:function(t){var e={};for(var n in this.attributes)e[n]=void 0;return this.set(e,i.extend({},t,{unset:!0}))},hasChanged:function(t){return null==t?!i.isEmpty(this.changed):i.has(this.changed,t)},changedAttributes:function(t){if(!t)return!!this.hasChanged()&&i.clone(this.changed);var e,n=!1,s=this._changing?this._previousAttributes:this.attributes;for(var r in t)i.isEqual(s[r],e=t[r])||((n||(n={}))[r]=e);return n},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=t?i.clone(t):{},void 0===t.parse&&(t.parse=!0);var e=this,n=t.success;return t.success=function(i){return!!e.set(e.parse(i,t),t)&&(n&&n(e,i,t),void e.trigger("sync",e,i,t))},U(this,t),this.sync("read",this,t)},save:function(t,e,n){var s,r,a,o=this.attributes;if(null==t||"object"==typeof t?(s=t,n=e):(s={})[t]=e,n=i.extend({validate:!0},n),s&&!n.wait){if(!this.set(s,n))return!1}else if(!this._validate(s,n))return!1;s&&n.wait&&(this.attributes=i.extend({},o,s)),void 0===n.parse&&(n.parse=!0);var h=this,c=n.success;return n.success=function(t){h.attributes=o;var e=h.parse(t,n);return n.wait&&(e=i.extend(s||{},e)),!(i.isObject(e)&&!h.set(e,n))&&(c&&c(h,t,n),void h.trigger("sync",h,t,n))},U(this,n),r=this.isNew()?"create":n.patch?"patch":"update","patch"===r&&(n.attrs=s),a=this.sync(r,this,n),s&&n.wait&&(this.attributes=o),a},destroy:function(t){t=t?i.clone(t):{};var e=this,n=t.success,s=function(){e.trigger("destroy",e,e.collection,t)};if(t.success=function(i){(t.wait||e.isNew())&&s(),n&&n(e,i,t),e.isNew()||e.trigger("sync",e,i,t)},this.isNew())return t.success(),!1;U(this,t);var r=this.sync("delete",this,t);return t.wait||s(),r},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||j();return this.isNew()?t:t.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend(t||{},{validate:!0}))},_validate:function(t,e){if(!e.validate||!this.validate)return!0;t=i.extend({},this.attributes,t);var n=this.validationError=this.validate(t,e)||null;return!n||(this.trigger("invalid",this,n,i.extend(e,{validationError:n})),!1)}});var f=["keys","values","pairs","invert","pick","omit"];i.each(f,function(t){d.prototype[t]=function(){var e=a.call(arguments);return e.unshift(this.attributes),i[t].apply(i,e)}});var p=e.Collection=function(t,e){e||(e={}),e.model&&(this.model=e.model),void 0!==e.comparator&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,i.extend({silent:!0},e))},g={add:!0,remove:!0,merge:!0},v={add:!0,remove:!1};i.extend(p.prototype,o,{model:d,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:!1},e,v))},remove:function(t,e){var n=!i.isArray(t);t=n?[t]:i.clone(t),e||(e={});var s,r,a,o;for(s=0,r=t.length;s<r;s++)o=t[s]=this.get(t[s]),o&&(delete this._byId[o.id],delete this._byId[o.cid],a=this.indexOf(o),this.models.splice(a,1),this.length--,e.silent||(e.index=a,o.trigger("remove",o,this,e)),this._removeReference(o,e));return n?t[0]:t},set:function(t,e){e=i.defaults({},e,g),e.parse&&(t=this.parse(t,e));var n=!i.isArray(t);t=n?t?[t]:[]:i.clone(t);var s,r,a,o,h,c,u,l=e.at,f=this.model,p=this.comparator&&null==l&&e.sort!==!1,v=i.isString(this.comparator)?this.comparator:null,m=[],y=[],_={},b=e.add,w=e.merge,x=e.remove,E=!(p||!b||!x)&&[];for(s=0,r=t.length;s<r;s++){if(h=t[s]||{},a=h instanceof d?o=h:h[f.prototype.idAttribute||"id"],c=this.get(a))x&&(_[c.cid]=!0),w&&(h=h===o?o.attributes:h,e.parse&&(h=c.parse(h,e)),c.set(h,e),p&&!u&&c.hasChanged(v)&&(u=!0)),t[s]=c;else if(b){if(o=t[s]=this._prepareModel(h,e),!o)continue;m.push(o),this._addReference(o,e)}o=c||o,!E||!o.isNew()&&_[o.id]||E.push(o),_[o.id]=!0}if(x){for(s=0,r=this.length;s<r;++s)_[(o=this.models[s]).cid]||y.push(o);y.length&&this.remove(y,e)}if(m.length||E&&E.length)if(p&&(u=!0),this.length+=m.length,null!=l)for(s=0,r=m.length;s<r;s++)this.models.splice(l+s,0,m[s]);else{E&&(this.models.length=0);var k=E||m;for(s=0,r=k.length;s<r;s++)this.models.push(k[s])}if(u&&this.sort({silent:!0}),!e.silent){for(s=0,r=m.length;s<r;s++)(o=m[s]).trigger("add",o,this,e);(u||E&&E.length)&&this.trigger("sort",this,e)}return n?t[0]:t},reset:function(t,e){e||(e={});for(var n=0,s=this.models.length;n<s;n++)this._removeReference(this.models[n],e);return e.previousModels=this.models,this._reset(),t=this.add(t,i.extend({silent:!0},e)),e.silent||this.trigger("reset",this,e),t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t),e},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t),e},slice:function(){return a.apply(this.models,arguments)},get:function(t){if(null!=t)return this._byId[t]||this._byId[t.id]||this._byId[t.cid]},at:function(t){return this.models[t]},where:function(t,e){return i.isEmpty(t)?e?void 0:[]:this[e?"find":"filter"](function(e){for(var i in t)if(t[i]!==e.get(i))return!1;return!0})},findWhere:function(t){return this.where(t,!0)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return t||(t={}),i.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(i.bind(this.comparator,this)),t.silent||this.trigger("sort",this,t),this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=t?i.clone(t):{},void 0===t.parse&&(t.parse=!0);var e=t.success,n=this;return t.success=function(i){var s=t.reset?"reset":"set";n[s](i,t),e&&e(n,i,t),n.trigger("sync",n,i,t)},U(this,t),this.sync("read",this,t)},create:function(t,e){if(e=e?i.clone(e):{},!(t=this._prepareModel(t,e)))return!1;e.wait||this.add(t,e);var n=this,s=e.success;return e.success=function(t,i){e.wait&&n.add(t,e),s&&s(t,i,e)},t.save(null,e),t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(t,e){if(t instanceof d)return t;e=e?i.clone(e):{},e.collection=this;var n=new this.model(t,e);return n.validationError?(this.trigger("invalid",this,n.validationError,e),!1):n},_addReference:function(t,e){this._byId[t.cid]=t,null!=t.id&&(this._byId[t.id]=t),t.collection||(t.collection=this),t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){this===t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,n){("add"!==t&&"remove"!==t||i===this)&&("destroy"===t&&this.remove(e,n),e&&t==="change:"+e.idAttribute&&(delete this._byId[e.previous(e.idAttribute)],null!=e.id&&(this._byId[e.id]=e)),this.trigger.apply(this,arguments))}});var m=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"];i.each(m,function(t){p.prototype[t]=function(){var e=a.call(arguments);return e.unshift(this.models),i[t].apply(i,e)}});var y=["groupBy","countBy","sortBy","indexBy"];i.each(y,function(t){p.prototype[t]=function(e,n){var s=i.isFunction(e)?e:function(t){return t.get(e)};return i[t](this.models,s,n)}});var _=e.View=function(t){this.cid=i.uniqueId("view"),t||(t={}),i.extend(this,i.pick(t,w)),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},b=/^(\S+)\s*(.*)$/,w=["model","collection","el","id","attributes","className","tagName","events"];i.extend(_.prototype,o,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(t,i){return this.$el&&this.undelegateEvents(),this.$el=t instanceof e.$?t:e.$(t),this.el=this.$el[0],i!==!1&&this.delegateEvents(),this},delegateEvents:function(t){if(!t&&!(t=i.result(this,"events")))return this;this.undelegateEvents();for(var e in t){var n=t[e];if(i.isFunction(n)||(n=this[t[e]]),n){var s=e.match(b),r=s[1],a=s[2];n=i.bind(n,this),r+=".delegateEvents"+this.cid,""===a?this.$el.on(r,n):this.$el.on(r,a,n)}}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_ensureElement:function(){if(this.el)this.setElement(i.result(this,"el"),!1);else{var t=i.extend({},i.result(this,"attributes"));this.id&&(t.id=i.result(this,"id")),this.className&&(t["class"]=i.result(this,"className"));var n=e.$("<"+i.result(this,"tagName")+">").attr(t);this.setElement(n,!1)}}}),e.sync=function(t,n,s){var r=E[t];i.defaults(s||(s={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:r,dataType:"json"};if(s.url||(a.url=i.result(n,"url")||j()),null!=s.data||!n||"create"!==t&&"update"!==t&&"patch"!==t||(a.contentType="application/json",a.data=JSON.stringify(s.attrs||n.toJSON(s))),s.emulateJSON&&(a.contentType="application/x-www-form-urlencoded",a.data=a.data?{model:a.data}:{}),s.emulateHTTP&&("PUT"===r||"DELETE"===r||"PATCH"===r)){a.type="POST",s.emulateJSON&&(a.data._method=r);var o=s.beforeSend;s.beforeSend=function(t){if(t.setRequestHeader("X-HTTP-Method-Override",r),o)return o.apply(this,arguments)}}"GET"===a.type||s.emulateJSON||(a.processData=!1),"PATCH"===a.type&&x&&(a.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var h=s.xhr=e.ajax(i.extend(a,s));return n.trigger("request",n,h,s),h};var x=!("undefined"==typeof window||!window.ActiveXObject||window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent),E={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var k=e.Router=function(t){t||(t={}),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},T=/\((.*?)\)/g,$=/(\(\?)?:\w+/g,S=/\*\w+/g,H=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend(k.prototype,o,{initialize:function(){},route:function(t,n,s){i.isRegExp(t)||(t=this._routeToRegExp(t)),i.isFunction(n)&&(s=n,n=""),s||(s=this[n]);var r=this;return e.history.route(t,function(i){var a=r._extractParameters(t,i);r.execute(s,a),r.trigger.apply(r,["route:"+n].concat(a)),r.trigger("route",n,a),e.history.trigger("route",r,n,a)}),this},execute:function(t,e){t&&t.apply(this,e)},navigate:function(t,i){return e.history.navigate(t,i),this},_bindRoutes:function(){if(this.routes){this.routes=i.result(this,"routes");for(var t,e=i.keys(this.routes);null!=(t=e.pop());)this.route(t,this.routes[t])}},_routeToRegExp:function(t){return t=t.replace(H,"\\$&").replace(T,"(?:$1)?").replace($,function(t,e){return e?t:"([^/?]+)"}).replace(S,"([^?]*?)"),new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var n=t.exec(e).slice(1);return i.map(n,function(t,e){return e===n.length-1?t||null:t?decodeURIComponent(t):null})}});var A=e.History=function(){this.handlers=[],i.bindAll(this,"checkUrl"),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},I=/^[#\/]|\s+$/g,N=/^\/+|\/+$/g,R=/msie [\w.]+/,O=/\/$/,P=/#.*$/;A.started=!1,i.extend(A.prototype,o,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(null==t)if(this._hasPushState||!this._wantsHashChange||e){t=decodeURI(this.location.pathname+this.location.search);var i=this.root.replace(O,"");t.indexOf(i)||(t=t.slice(i.length))}else t=this.getHash();return t.replace(I,"")},start:function(t){if(A.started)throw new Error("Backbone.history has already been started");A.started=!0,this.options=i.extend({root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var n=this.getFragment(),s=document.documentMode,r=R.exec(navigator.userAgent.toLowerCase())&&(!s||s<=7);if(this.root=("/"+this.root+"/").replace(N,"/"),r&&this._wantsHashChange){var a=e.$('<iframe src="javascript:0" tabindex="-1">');this.iframe=a.hide().appendTo("body")[0].contentWindow,this.navigate(n)}this._hasPushState?e.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!r?e.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=n;var o=this.location;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot())return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+"#"+this.fragment),!0;this._hasPushState&&this.atRoot()&&o.hash&&(this.fragment=this.getHash().replace(I,""),this.history.replaceState({},document.title,this.root+this.fragment))}if(!this.options.silent)return this.loadUrl()},stop:function(){e.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),A.started=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();return e===this.fragment&&this.iframe&&(e=this.getFragment(this.getHash(this.iframe))),e!==this.fragment&&(this.iframe&&this.navigate(e),void this.loadUrl())},loadUrl:function(t){return t=this.fragment=this.getFragment(t),i.any(this.handlers,function(e){if(e.route.test(t))return e.callback(t),!0})},navigate:function(t,e){if(!A.started)return!1;e&&e!==!0||(e={trigger:!!e});var i=this.root+(t=this.getFragment(t||""));if(t=t.replace(P,""),this.fragment!==t){if(this.fragment=t,""===t&&"/"!==i&&(i=i.slice(0,-1)),this._hasPushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,i);else{if(!this._wantsHashChange)return this.location.assign(i);this._updateHash(this.location,t,e.replace),this.iframe&&t!==this.getFragment(this.getHash(this.iframe))&&(e.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,t,e.replace))}return e.trigger?this.loadUrl(t):void 0}},_updateHash:function(t,e,i){if(i){var n=t.href.replace(/(javascript:|#).*$/,"");t.replace(n+"#"+e)}else t.hash="#"+e}}),e.history=new A;var C=function(t,e){var n,s=this;n=t&&i.has(t,"constructor")?t.constructor:function(){return s.apply(this,arguments)},i.extend(n,s,e);var r=function(){this.constructor=n};return r.prototype=s.prototype,n.prototype=new r,t&&i.extend(n.prototype,t),n.__super__=s.prototype,n};d.extend=p.extend=k.extend=_.extend=A.extend=C;var j=function(){throw new Error('A "url" property or function must be specified')},U=function(t,e){var i=e.error;e.error=function(n){i&&i(t,n,e),t.trigger("error",t,n,e)}};return e});
//! moment.js
//! version : 2.15.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return md.apply(null,arguments)}
// This is done to register the method called with moment()
// without creating circular dependencies.
function b(a){md=a}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){
// IE8 will treat undefined and null as object if it wasn't for
// input != null
return null!=a&&"[object Object]"===Object.prototype.toString.call(a)}function e(a){var b;for(b in a)
// even if its not own property I'd still call it non-empty
return!1;return!0}function f(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function g(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function h(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function i(a,b){for(var c in b)h(b,c)&&(a[c]=b[c]);return h(b,"toString")&&(a.toString=b.toString),h(b,"valueOf")&&(a.valueOf=b.valueOf),a}function j(a,b,c,d){return qb(a,b,c,d,!0).utc()}function k(){
// We need to deep clone this object.
return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function l(a){return null==a._pf&&(a._pf=k()),a._pf}function m(a){if(null==a._isValid){var b=l(a),c=nd.call(b.parsedDateParts,function(a){return null!=a}),d=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c);if(a._strict&&(d=d&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour),null!=Object.isFrozen&&Object.isFrozen(a))return d;a._isValid=d}return a._isValid}function n(a){var b=j(NaN);return null!=a?i(l(b),a):l(b).userInvalidated=!0,b}function o(a){return void 0===a}function p(a,b){var c,d,e;if(o(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),o(b._i)||(a._i=b._i),o(b._f)||(a._f=b._f),o(b._l)||(a._l=b._l),o(b._strict)||(a._strict=b._strict),o(b._tzm)||(a._tzm=b._tzm),o(b._isUTC)||(a._isUTC=b._isUTC),o(b._offset)||(a._offset=b._offset),o(b._pf)||(a._pf=l(b)),o(b._locale)||(a._locale=b._locale),od.length>0)for(c in od)d=od[c],e=b[d],o(e)||(a[d]=e);return a}
// Moment prototype object
function q(b){p(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),pd===!1&&(pd=!0,a.updateOffset(this),pd=!1)}function r(a){return a instanceof q||null!=a&&null!=a._isAMomentObject}function s(a){return 0>a?Math.ceil(a)||0:Math.floor(a)}function t(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=s(b)),c}
// compare two arrays, return the number of differences
function u(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&t(a[d])!==t(b[d]))&&g++;return g+f}function v(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function w(b,c){var d=!0;return i(function(){if(null!=a.deprecationHandler&&a.deprecationHandler(null,b),d){for(var e,f=[],g=0;g<arguments.length;g++){if(e="","object"==typeof arguments[g]){e+="\n["+g+"] ";for(var h in arguments[0])e+=h+": "+arguments[0][h]+", ";e=e.slice(0,-2)}else e=arguments[g];f.push(e)}v(b+"\nArguments: "+Array.prototype.slice.call(f).join("")+"\n"+(new Error).stack),d=!1}return c.apply(this,arguments)},c)}function x(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),qd[b]||(v(c),qd[b]=!0)}function y(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function z(a){var b,c;for(c in a)b=a[c],y(b)?this[c]=b:this["_"+c]=b;this._config=a,
// Lenient ordinal parsing accepts just a number in addition to
// number + (possibly) stuff coming from _ordinalParseLenient.
this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function A(a,b){var c,e=i({},a);for(c in b)h(b,c)&&(d(a[c])&&d(b[c])?(e[c]={},i(e[c],a[c]),i(e[c],b[c])):null!=b[c]?e[c]=b[c]:delete e[c]);for(c in a)h(a,c)&&!h(b,c)&&d(a[c])&&(
// make sure changes to properties don't modify parent config
e[c]=i({},e[c]));return e}function B(a){null!=a&&this.set(a)}function C(a,b,c){var d=this._calendar[a]||this._calendar.sameElse;return y(d)?d.call(b,c):d}function D(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function E(){return this._invalidDate}function F(a){return this._ordinal.replace("%d",a)}function G(a,b,c,d){var e=this._relativeTime[c];return y(e)?e(a,b,c,d):e.replace(/%d/i,a)}function H(a,b){var c=this._relativeTime[a>0?"future":"past"];return y(c)?c(b):c.replace(/%s/i,b)}function I(a,b){var c=a.toLowerCase();zd[c]=zd[c+"s"]=zd[b]=a}function J(a){return"string"==typeof a?zd[a]||zd[a.toLowerCase()]:void 0}function K(a){var b,c,d={};for(c in a)h(a,c)&&(b=J(c),b&&(d[b]=a[c]));return d}function L(a,b){Ad[a]=b}function M(a){var b=[];for(var c in a)b.push({unit:c,priority:Ad[c]});return b.sort(function(a,b){return a.priority-b.priority}),b}function N(b,c){return function(d){return null!=d?(P(this,b,d),a.updateOffset(this,c),this):O(this,b)}}function O(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function P(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}
// MOMENTS
function Q(a){return a=J(a),y(this[a])?this[a]():this}function R(a,b){if("object"==typeof a){a=K(a);for(var c=M(a),d=0;d<c.length;d++)this[c[d].unit](a[c[d].unit])}else if(a=J(a),y(this[a]))return this[a](b);return this}function S(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}
// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function T(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Ed[a]=e),b&&(Ed[b[0]]=function(){return S(e.apply(this,arguments),b[1],b[2])}),c&&(Ed[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function U(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function V(a){var b,c,d=a.match(Bd);for(b=0,c=d.length;c>b;b++)Ed[d[b]]?d[b]=Ed[d[b]]:d[b]=U(d[b]);return function(b){var e,f="";for(e=0;c>e;e++)f+=d[e]instanceof Function?d[e].call(b,a):d[e];return f}}
// format date using native date object
function W(a,b){return a.isValid()?(b=X(b,a.localeData()),Dd[b]=Dd[b]||V(b),Dd[b](a)):a.localeData().invalidDate()}function X(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Cd.lastIndex=0;d>=0&&Cd.test(a);)a=a.replace(Cd,c),Cd.lastIndex=0,d-=1;return a}function Y(a,b,c){Wd[a]=y(b)?b:function(a,d){return a&&c?c:b}}function Z(a,b){return h(Wd,a)?Wd[a](b._strict,b._locale):new RegExp($(a))}
// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function $(a){return _(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function _(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function aa(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=t(a)}),c=0;c<a.length;c++)Xd[a[c]]=d}function ba(a,b){aa(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function ca(a,b,c){null!=b&&h(Xd,a)&&Xd[a](b,c._a,c,a)}function da(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function ea(a,b){return a?c(this._months)?this._months[a.month()]:this._months[(this._months.isFormat||fe).test(b)?"format":"standalone"][a.month()]:this._months}function fa(a,b){return a?c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[fe.test(b)?"format":"standalone"][a.month()]:this._monthsShort}function ga(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(
// this is not used
this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;12>d;++d)f=j([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=sd.call(this._shortMonthsParse,g),-1!==e?e:null):(e=sd.call(this._longMonthsParse,g),-1!==e?e:null):"MMM"===b?(e=sd.call(this._shortMonthsParse,g),-1!==e?e:(e=sd.call(this._longMonthsParse,g),-1!==e?e:null)):(e=sd.call(this._longMonthsParse,g),-1!==e?e:(e=sd.call(this._shortMonthsParse,g),-1!==e?e:null))}function ha(a,b,c){var d,e,f;if(this._monthsParseExact)return ga.call(this,a,b,c);
// TODO: add sorting
// Sorting makes sure if one month (or abbr) is a prefix of another
// see sorting in computeMonthsParse
for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){
// test the regex
if(e=j([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}
// MOMENTS
function ia(a,b){var c;if(!a.isValid())
// No op
return a;if("string"==typeof b)if(/^\d+$/.test(b))b=t(b);else
// TODO: Another silent failure?
if(b=a.localeData().monthsParse(b),"number"!=typeof b)return a;return c=Math.min(a.date(),da(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ja(b){return null!=b?(ia(this,b),a.updateOffset(this,!0),this):O(this,"Month")}function ka(){return da(this.year(),this.month())}function la(a){return this._monthsParseExact?(h(this,"_monthsRegex")||na.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):(h(this,"_monthsShortRegex")||(this._monthsShortRegex=ie),this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex)}function ma(a){return this._monthsParseExact?(h(this,"_monthsRegex")||na.call(this),a?this._monthsStrictRegex:this._monthsRegex):(h(this,"_monthsRegex")||(this._monthsRegex=je),this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex)}function na(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;12>b;b++)c=j([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(
// Sorting makes sure if one month (or abbr) is a prefix of another it
// will match the longer piece.
d.sort(a),e.sort(a),f.sort(a),b=0;12>b;b++)d[b]=_(d[b]),e[b]=_(e[b]);for(b=0;24>b;b++)f[b]=_(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}
// HELPERS
function oa(a){return pa(a)?366:365}function pa(a){return a%4===0&&a%100!==0||a%400===0}function qa(){return pa(this.year())}function ra(a,b,c,d,e,f,g){
//can't just apply() to create a date:
//http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
var h=new Date(a,b,c,d,e,f,g);
//the date constructor remaps years 0-99 to 1900-1999
return 100>a&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function sa(a){var b=new Date(Date.UTC.apply(null,arguments));
//the Date.UTC function remaps years 0-99 to 1900-1999
return 100>a&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}
// start-of-first-week - start-of-year
function ta(a,b,c){var// first-week day -- which january is always in the first week (4 for iso, 1 for other)
d=7+b-c,
// first-week day local weekday -- which local weekday is fwd
e=(7+sa(a,0,d).getUTCDay()-b)%7;return-e+d-1}
//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function ua(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ta(a,d,e),j=1+7*(b-1)+h+i;return 0>=j?(f=a-1,g=oa(f)+j):j>oa(a)?(f=a+1,g=j-oa(a)):(f=a,g=j),{year:f,dayOfYear:g}}function va(a,b,c){var d,e,f=ta(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return 1>g?(e=a.year()-1,d=g+wa(e,b,c)):g>wa(a.year(),b,c)?(d=g-wa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function wa(a,b,c){var d=ta(a,b,c),e=ta(a+1,b,c);return(oa(a)-d+e)/7}
// HELPERS
// LOCALES
function xa(a){return va(a,this._week.dow,this._week.doy).week}function ya(){return this._week.dow}function za(){return this._week.doy}
// MOMENTS
function Aa(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Ba(a){var b=va(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}
// HELPERS
function Ca(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Da(a,b){return"string"==typeof a?b.weekdaysParse(a)%7||7:isNaN(a)?null:a}function Ea(a,b){return a?c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]:this._weekdays}function Fa(a){return a?this._weekdaysShort[a.day()]:this._weekdaysShort}function Ga(a){return a?this._weekdaysMin[a.day()]:this._weekdaysMin}function Ha(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;7>d;++d)f=j([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=sd.call(this._weekdaysParse,g),-1!==e?e:null):"ddd"===b?(e=sd.call(this._shortWeekdaysParse,g),-1!==e?e:null):(e=sd.call(this._minWeekdaysParse,g),-1!==e?e:null):"dddd"===b?(e=sd.call(this._weekdaysParse,g),-1!==e?e:(e=sd.call(this._shortWeekdaysParse,g),-1!==e?e:(e=sd.call(this._minWeekdaysParse,g),-1!==e?e:null))):"ddd"===b?(e=sd.call(this._shortWeekdaysParse,g),-1!==e?e:(e=sd.call(this._weekdaysParse,g),-1!==e?e:(e=sd.call(this._minWeekdaysParse,g),-1!==e?e:null))):(e=sd.call(this._minWeekdaysParse,g),-1!==e?e:(e=sd.call(this._weekdaysParse,g),-1!==e?e:(e=sd.call(this._shortWeekdaysParse,g),-1!==e?e:null)))}function Ia(a,b,c){var d,e,f;if(this._weekdaysParseExact)return Ha.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;7>d;d++){
// test the regex
if(e=j([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}
// MOMENTS
function Ja(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Ca(a,this.localeData()),this.add(a-b,"d")):b}function Ka(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function La(a){if(!this.isValid())return null!=a?this:NaN;
// behaves the same as moment#day except
// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
// as a setter, sunday should belong to the previous week.
if(null!=a){var b=Da(a,this.localeData());return this.day(this.day()%7?b:b-7)}return this.day()||7}function Ma(a){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||Pa.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):(h(this,"_weekdaysRegex")||(this._weekdaysRegex=pe),this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex)}function Na(a){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||Pa.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(h(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=qe),this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Oa(a){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||Pa.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(h(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=re),this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Pa(){function a(a,b){return b.length-a.length}var b,c,d,e,f,g=[],h=[],i=[],k=[];for(b=0;7>b;b++)c=j([2e3,1]).day(b),d=this.weekdaysMin(c,""),e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),h.push(e),i.push(f),k.push(d),k.push(e),k.push(f);for(
// Sorting makes sure if one weekday (or abbr) is a prefix of another it
// will match the longer piece.
g.sort(a),h.sort(a),i.sort(a),k.sort(a),b=0;7>b;b++)h[b]=_(h[b]),i[b]=_(i[b]),k[b]=_(k[b]);this._weekdaysRegex=new RegExp("^("+k.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}
// FORMATTING
function Qa(){return this.hours()%12||12}function Ra(){return this.hours()||24}function Sa(a,b){T(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}
// PARSING
function Ta(a,b){return b._meridiemParse}
// LOCALES
function Ua(a){
// IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
// Using charAt should be more compatible.
return"p"===(a+"").toLowerCase().charAt(0)}function Va(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Wa(a){return a?a.toLowerCase().replace("_","-"):a}
// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function Xa(a){for(var b,c,d,e,f=0;f<a.length;){for(e=Wa(a[f]).split("-"),b=e.length,c=Wa(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=Ya(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&u(e,c,!0)>=b-1)
//the next array item is better than a shallower substring of this one
break;b--}f++}return null}function Ya(a){var b=null;
// TODO: Find a better way to register and load all the locales in Node
if(!we[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=se._abbr,require("./locale/"+a),
// because defineLocale currently also sets the global locale, we
// want to undo that for lazy loaded locales
Za(b)}catch(c){}return we[a]}
// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function Za(a,b){var c;
// moment.duration._locale = moment._locale = data;
return a&&(c=o(b)?ab(a):$a(a,b),c&&(se=c)),se._abbr}function $a(a,b){if(null!==b){var c=ve;
// treat as if there is no base config
// backwards compat for now: also set the locale
return b.abbr=a,null!=we[a]?(x("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),c=we[a]._config):null!=b.parentLocale&&(null!=we[b.parentLocale]?c=we[b.parentLocale]._config:x("parentLocaleUndefined","specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")),we[a]=new B(A(c,b)),Za(a),we[a]}
// useful for testing
return delete we[a],null}function _a(a,b){if(null!=b){var c,d=ve;
// MERGE
null!=we[a]&&(d=we[a]._config),b=A(d,b),c=new B(b),c.parentLocale=we[a],we[a]=c,
// backwards compat for now: also set the locale
Za(a)}else
// pass null for config to unupdate, useful for tests
null!=we[a]&&(null!=we[a].parentLocale?we[a]=we[a].parentLocale:null!=we[a]&&delete we[a]);return we[a]}
// returns locale data
function ab(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return se;if(!c(a)){if(b=Ya(a))return b;a=[a]}return Xa(a)}function bb(){return rd(we)}function cb(a){var b,c=a._a;return c&&-2===l(a).overflow&&(b=c[Zd]<0||c[Zd]>11?Zd:c[$d]<1||c[$d]>da(c[Yd],c[Zd])?$d:c[_d]<0||c[_d]>24||24===c[_d]&&(0!==c[ae]||0!==c[be]||0!==c[ce])?_d:c[ae]<0||c[ae]>59?ae:c[be]<0||c[be]>59?be:c[ce]<0||c[ce]>999?ce:-1,l(a)._overflowDayOfYear&&(Yd>b||b>$d)&&(b=$d),l(a)._overflowWeeks&&-1===b&&(b=de),l(a)._overflowWeekday&&-1===b&&(b=ee),l(a).overflow=b),a}
// date from iso format
function db(a){var b,c,d,e,f,g,h=a._i,i=xe.exec(h)||ye.exec(h);if(i){for(l(a).iso=!0,b=0,c=Ae.length;c>b;b++)if(Ae[b][1].exec(i[1])){e=Ae[b][0],d=Ae[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=Be.length;c>b;b++)if(Be[b][1].exec(i[3])){
// match[2] should be 'T' or space
f=(i[2]||" ")+Be[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!ze.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),jb(a)}else a._isValid=!1}
// date from iso format or fallback
function eb(b){var c=Ce.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(db(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}
// Pick the first defined of two or three arguments.
function fb(a,b,c){return null!=a?a:null!=b?b:c}function gb(b){
// hooks is actually the exported moment object
var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}
// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function hb(a){var b,c,d,e,f=[];if(!a._d){
// Default to current date.
// * if no year, month, day of month are given, default to today
// * if day of month is given, default month and year
// * if month is given, default only year
// * if year is given, don't default anything
for(d=gb(a),a._w&&null==a._a[$d]&&null==a._a[Zd]&&ib(a),a._dayOfYear&&(e=fb(a._a[Yd],d[Yd]),a._dayOfYear>oa(e)&&(l(a)._overflowDayOfYear=!0),c=sa(e,0,a._dayOfYear),a._a[Zd]=c.getUTCMonth(),a._a[$d]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];
// Zero out whatever was not defaulted, including time
for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];
// Check for 24:00:00.000
24===a._a[_d]&&0===a._a[ae]&&0===a._a[be]&&0===a._a[ce]&&(a._nextDay=!0,a._a[_d]=0),a._d=(a._useUTC?sa:ra).apply(null,f),
// Apply timezone offset from input. The actual utcOffset can be changed
// with parseZone.
null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[_d]=24)}}function ib(a){var b,c,d,e,f,g,h,i;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=fb(b.GG,a._a[Yd],va(rb(),1,4).year),d=fb(b.W,1),e=fb(b.E,1),(1>e||e>7)&&(i=!0)):(f=a._locale._week.dow,g=a._locale._week.doy,c=fb(b.gg,a._a[Yd],va(rb(),f,g).year),d=fb(b.w,1),null!=b.d?(e=b.d,(0>e||e>6)&&(i=!0)):null!=b.e?(e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):e=f),1>d||d>wa(c,f,g)?l(a)._overflowWeeks=!0:null!=i?l(a)._overflowWeekday=!0:(h=ua(c,d,e,f,g),a._a[Yd]=h.year,a._dayOfYear=h.dayOfYear)}
// date from string and format string
function jb(b){
// TODO: Move this to another part of the creation flow to prevent circular deps
if(b._f===a.ISO_8601)return void db(b);b._a=[],l(b).empty=!0;
// This array is used to make a Date, either with `new Date` or `Date.UTC`
var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=X(b._f,b._locale).match(Bd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(Z(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&l(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),Ed[f]?(d?l(b).empty=!1:l(b).unusedTokens.push(f),ca(f,d,b)):b._strict&&!d&&l(b).unusedTokens.push(f);
// add remaining unparsed input length to the string
l(b).charsLeftOver=i-j,h.length>0&&l(b).unusedInput.push(h),
// clear _12h flag if hour is <= 12
b._a[_d]<=12&&l(b).bigHour===!0&&b._a[_d]>0&&(l(b).bigHour=void 0),l(b).parsedDateParts=b._a.slice(0),l(b).meridiem=b._meridiem,
// handle meridiem
b._a[_d]=kb(b._locale,b._a[_d],b._meridiem),hb(b),cb(b)}function kb(a,b,c){var d;
// Fallback
return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}
// date from string and array of format strings
function lb(a){var b,c,d,e,f;if(0===a._f.length)return l(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=p({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],jb(b),m(b)&&(f+=l(b).charsLeftOver,f+=10*l(b).unusedTokens.length,l(b).score=f,(null==d||d>f)&&(d=f,c=b));i(a,c||b)}function mb(a){if(!a._d){var b=K(a._i);a._a=g([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),hb(a)}}function nb(a){var b=new q(cb(ob(a)));
// Adding is smart enough around DST
return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function ob(a){var b=a._i,d=a._f;return a._locale=a._locale||ab(a._l),null===b||void 0===d&&""===b?n({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),r(b)?new q(cb(b)):(c(d)?lb(a):f(b)?a._d=b:d?jb(a):pb(a),m(a)||(a._d=null),a))}function pb(b){var d=b._i;void 0===d?b._d=new Date(a.now()):f(d)?b._d=new Date(d.valueOf()):"string"==typeof d?eb(b):c(d)?(b._a=g(d.slice(0),function(a){return parseInt(a,10)}),hb(b)):"object"==typeof d?mb(b):"number"==typeof d?
// from milliseconds
b._d=new Date(d):a.createFromInputFallback(b)}function qb(a,b,f,g,h){var i={};
// object construction must be done this way.
// https://github.com/moment/moment/issues/1423
return"boolean"==typeof f&&(g=f,f=void 0),(d(a)&&e(a)||c(a)&&0===a.length)&&(a=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=h,i._l=f,i._i=a,i._f=b,i._strict=g,nb(i)}function rb(a,b,c,d){return qb(a,b,c,d,!1)}
// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function sb(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return rb();for(d=b[0],e=1;e<b.length;++e)b[e].isValid()&&!b[e][a](d)||(d=b[e]);return d}
// TODO: Use [].sort instead?
function tb(){var a=[].slice.call(arguments,0);return sb("isBefore",a)}function ub(){var a=[].slice.call(arguments,0);return sb("isAfter",a)}function vb(a){var b=K(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;
// representation for dateAddRemove
this._milliseconds=+k+1e3*j+// 1000
6e4*i+// 1000 * 60
1e3*h*60*60,//using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
// Because of dateAddRemove treats 24 hours as different from a
// day when working around DST, we need to store them separately
this._days=+g+7*f,
// It is impossible translate months into days without knowing
// which months you are are talking about, so we have to store
// it separately.
this._months=+e+3*d+12*c,this._data={},this._locale=ab(),this._bubble()}function wb(a){return a instanceof vb}function xb(a){return 0>a?-1*Math.round(-1*a):Math.round(a)}
// FORMATTING
function yb(a,b){T(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+S(~~(a/60),2)+b+S(~~a%60,2)})}function zb(a,b){var c=(b||"").match(a)||[],d=c[c.length-1]||[],e=(d+"").match(Ge)||["-",0,0],f=+(60*e[1])+t(e[2]);return"+"===e[0]?f:-f}
// Return a moment from input, that is local/utc/zone equivalent to model.
function Ab(b,c){var d,e;
// Use low-level api, because this fn is low-level api.
return c._isUTC?(d=c.clone(),e=(r(b)||f(b)?b.valueOf():rb(b).valueOf())-d.valueOf(),d._d.setTime(d._d.valueOf()+e),a.updateOffset(d,!1),d):rb(b).local()}function Bb(a){
// On Firefox.24 Date#getTimezoneOffset returns a floating point.
// https://github.com/moment/moment/pull/1871
return 15*-Math.round(a._d.getTimezoneOffset()/15)}
// MOMENTS
// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function Cb(b,c){var d,e=this._offset||0;return this.isValid()?null!=b?("string"==typeof b?b=zb(Td,b):Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Bb(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?Sb(this,Nb(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Bb(this):null!=b?this:NaN}function Db(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Eb(a){return this.utcOffset(0,a)}function Fb(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Bb(this),"m")),this}function Gb(){if(this._tzm)this.utcOffset(this._tzm);else if("string"==typeof this._i){var a=zb(Sd,this._i);0===a?this.utcOffset(0,!0):this.utcOffset(zb(Sd,this._i))}return this}function Hb(a){return this.isValid()?(a=a?rb(a).utcOffset():0,(this.utcOffset()-a)%60===0):!1}function Ib(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Jb(){if(!o(this._isDSTShifted))return this._isDSTShifted;var a={};if(p(a,this),a=ob(a),a._a){var b=a._isUTC?j(a._a):rb(a._a);this._isDSTShifted=this.isValid()&&u(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Kb(){return this.isValid()?!this._isUTC:!1}function Lb(){return this.isValid()?this._isUTC:!1}function Mb(){return this.isValid()?this._isUTC&&0===this._offset:!1}function Nb(a,b){var c,d,e,f=a,
// matching against regexp is expensive, do it on demand
g=null;// checks for null or undefined
return wb(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(f={},b?f[b]=a:f.milliseconds=a):(g=He.exec(a))?(c="-"===g[1]?-1:1,f={y:0,d:t(g[$d])*c,h:t(g[_d])*c,m:t(g[ae])*c,s:t(g[be])*c,ms:t(xb(1e3*g[ce]))*c}):(g=Ie.exec(a))?(c="-"===g[1]?-1:1,f={y:Ob(g[2],c),M:Ob(g[3],c),w:Ob(g[4],c),d:Ob(g[5],c),h:Ob(g[6],c),m:Ob(g[7],c),s:Ob(g[8],c)}):null==f?f={}:"object"==typeof f&&("from"in f||"to"in f)&&(e=Qb(rb(f.from),rb(f.to)),f={},f.ms=e.milliseconds,f.M=e.months),d=new vb(f),wb(a)&&h(a,"_locale")&&(d._locale=a._locale),d}function Ob(a,b){
// We'd normally use ~~inp for this, but unfortunately it also
// converts floats to ints.
// inp may be undefined, so careful calling replace on it.
var c=a&&parseFloat(a.replace(",","."));
// apply sign while we're at it
return(isNaN(c)?0:c)*b}function Pb(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Qb(a,b){var c;return a.isValid()&&b.isValid()?(b=Ab(b,a),a.isBefore(b)?c=Pb(a,b):(c=Pb(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}
// TODO: remove 'name' arg after deprecation is removed
function Rb(a,b){return function(c,d){var e,f;
//invert the arguments, but complain about it
return null===d||isNaN(+d)||(x(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Nb(c,d),Sb(this,e,a),this}}function Sb(b,c,d,e){var f=c._milliseconds,g=xb(c._days),h=xb(c._months);b.isValid()&&(e=null==e?!0:e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&P(b,"Date",O(b,"Date")+g*d),h&&ia(b,O(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function Tb(a,b){var c=a.diff(b,"days",!0);return-6>c?"sameElse":-1>c?"lastWeek":0>c?"lastDay":1>c?"sameDay":2>c?"nextDay":7>c?"nextWeek":"sameElse"}function Ub(b,c){
// We want to compare the start of today, vs this.
// Getting start-of-today depends on whether we're local/utc/offset or not.
var d=b||rb(),e=Ab(d,this).startOf("day"),f=a.calendarFormat(this,e)||"sameElse",g=c&&(y(c[f])?c[f].call(this,d):c[f]);return this.format(g||this.localeData().calendar(f,this,rb(d)))}function Vb(){return new q(this)}function Wb(a,b){var c=r(a)?a:rb(a);return this.isValid()&&c.isValid()?(b=J(o(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf()):!1}function Xb(a,b){var c=r(a)?a:rb(a);return this.isValid()&&c.isValid()?(b=J(o(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf()):!1}function Yb(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function Zb(a,b){var c,d=r(a)?a:rb(a);return this.isValid()&&d.isValid()?(b=J(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf())):!1}function $b(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function _b(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function ac(a,b,c){var d,e,f,g;// 1000
// 1000 * 60
// 1000 * 60 * 60
// 1000 * 60 * 60 * 24, negate dst
// 1000 * 60 * 60 * 24 * 7, negate dst
return this.isValid()?(d=Ab(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=J(b),"year"===b||"month"===b||"quarter"===b?(g=bc(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:s(g)):NaN):NaN}function bc(a,b){
// difference in months
var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),
// b is in (anchor - 1 month, anchor + 1 month)
f=a.clone().add(e,"months");
//check for negative zero, return zero if negative zero
// linear across the month
// linear across the month
return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)||0}function cc(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function dc(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?y(Date.prototype.toISOString)?this.toDate().toISOString():W(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):W(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function ec(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=W(this,b);return this.localeData().postformat(c)}function fc(a,b){return this.isValid()&&(r(a)&&a.isValid()||rb(a).isValid())?Nb({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function gc(a){return this.from(rb(),a)}function hc(a,b){return this.isValid()&&(r(a)&&a.isValid()||rb(a).isValid())?Nb({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function ic(a){return this.to(rb(),a)}
// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function jc(a){var b;return void 0===a?this._locale._abbr:(b=ab(a),null!=b&&(this._locale=b),this)}function kc(){return this._locale}function lc(a){
// the following switch intentionally omits break keywords
// to utilize falling through the cases.
switch(a=J(a)){case"year":this.month(0);/* falls through */
case"quarter":case"month":this.date(1);/* falls through */
case"week":case"isoWeek":case"day":case"date":this.hours(0);/* falls through */
case"hour":this.minutes(0);/* falls through */
case"minute":this.seconds(0);/* falls through */
case"second":this.milliseconds(0)}
// weeks are a special case
// quarters are also special
return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function mc(a){
// 'date' is an alias for 'day', so it should be considered as such.
return a=J(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function nc(){return this._d.valueOf()-6e4*(this._offset||0)}function oc(){return Math.floor(this.valueOf()/1e3)}function pc(){return new Date(this.valueOf())}function qc(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function rc(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function sc(){
// new Date(NaN).toJSON() === null
return this.isValid()?this.toISOString():null}function tc(){return m(this)}function uc(){return i({},l(this))}function vc(){return l(this).overflow}function wc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function xc(a,b){T(0,[a,a.length],0,b)}
// MOMENTS
function yc(a){return Cc.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function zc(a){return Cc.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Ac(){return wa(this.year(),1,4)}function Bc(){var a=this.localeData()._week;return wa(this.year(),a.dow,a.doy)}function Cc(a,b,c,d,e){var f;return null==a?va(this,d,e).year:(f=wa(a,d,e),b>f&&(b=f),Dc.call(this,a,b,c,d,e))}function Dc(a,b,c,d,e){var f=ua(a,b,c,d,e),g=sa(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}
// MOMENTS
function Ec(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}
// HELPERS
// MOMENTS
function Fc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function Gc(a,b){b[ce]=t(1e3*("0."+a))}
// MOMENTS
function Hc(){return this._isUTC?"UTC":""}function Ic(){return this._isUTC?"Coordinated Universal Time":""}function Jc(a){return rb(1e3*a)}function Kc(){return rb.apply(null,arguments).parseZone()}function Lc(a){return a}function Mc(a,b,c,d){var e=ab(),f=j().set(d,b);return e[c](f,a)}function Nc(a,b,c){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return Mc(a,b,c,"month");var d,e=[];for(d=0;12>d;d++)e[d]=Mc(a,d,c,"month");return e}
// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function Oc(a,b,c,d){"boolean"==typeof a?("number"==typeof b&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,"number"==typeof b&&(c=b,b=void 0),b=b||"");var e=ab(),f=a?e._week.dow:0;if(null!=c)return Mc(b,(c+f)%7,d,"day");var g,h=[];for(g=0;7>g;g++)h[g]=Mc(b,(g+f)%7,d,"day");return h}function Pc(a,b){return Nc(a,b,"months")}function Qc(a,b){return Nc(a,b,"monthsShort")}function Rc(a,b,c){return Oc(a,b,c,"weekdays")}function Sc(a,b,c){return Oc(a,b,c,"weekdaysShort")}function Tc(a,b,c){return Oc(a,b,c,"weekdaysMin")}function Uc(){var a=this._data;return this._milliseconds=Ue(this._milliseconds),this._days=Ue(this._days),this._months=Ue(this._months),a.milliseconds=Ue(a.milliseconds),a.seconds=Ue(a.seconds),a.minutes=Ue(a.minutes),a.hours=Ue(a.hours),a.months=Ue(a.months),a.years=Ue(a.years),this}function Vc(a,b,c,d){var e=Nb(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}
// supports only 2.0-style add(1, 's') or add(duration)
function Wc(a,b){return Vc(this,a,b,1)}
// supports only 2.0-style subtract(1, 's') or subtract(duration)
function Xc(a,b){return Vc(this,a,b,-1)}function Yc(a){return 0>a?Math.floor(a):Math.ceil(a)}function Zc(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;
// if we have a mix of positive and negative values, bubble down first
// check: https://github.com/moment/moment/issues/2166
// The following code bubbles up values, see the tests for
// examples of what that means.
// convert days to months
// 12 months -> 1 year
return f>=0&&g>=0&&h>=0||0>=f&&0>=g&&0>=h||(f+=864e5*Yc(_c(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=s(f/1e3),i.seconds=a%60,b=s(a/60),i.minutes=b%60,c=s(b/60),i.hours=c%24,g+=s(c/24),e=s($c(g)),h+=e,g-=Yc(_c(e)),d=s(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function $c(a){
// 400 years have 146097 days (taking into account leap year rules)
// 400 years have 12 months === 4800
return 4800*a/146097}function _c(a){
// the reverse of daysToMonths
return 146097*a/4800}function ad(a){var b,c,d=this._milliseconds;if(a=J(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+$c(b),"month"===a?c:c/12;switch(b=this._days+Math.round(_c(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;
// Math.floor prevents floating point math errors here
case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}
// TODO: Use this.as('ms')?
function bd(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*t(this._months/12)}function cd(a){return function(){return this.as(a)}}function dd(a){return a=J(a),this[a+"s"]()}function ed(a){return function(){return this._data[a]}}function fd(){return s(this.days()/7)}
// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function gd(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function hd(a,b,c){var d=Nb(a).abs(),e=jf(d.as("s")),f=jf(d.as("m")),g=jf(d.as("h")),h=jf(d.as("d")),i=jf(d.as("M")),j=jf(d.as("y")),k=e<kf.s&&["s",e]||1>=f&&["m"]||f<kf.m&&["mm",f]||1>=g&&["h"]||g<kf.h&&["hh",g]||1>=h&&["d"]||h<kf.d&&["dd",h]||1>=i&&["M"]||i<kf.M&&["MM",i]||1>=j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,gd.apply(null,k)}
// This function allows you to set the rounding function for relative time strings
function id(a){return void 0===a?jf:"function"==typeof a?(jf=a,!0):!1}
// This function allows you to set a threshold for relative time strings
function jd(a,b){return void 0===kf[a]?!1:void 0===b?kf[a]:(kf[a]=b,!0)}function kd(a){var b=this.localeData(),c=hd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function ld(){
// for ISO strings we do not use the normal bubbling rules:
//  * milliseconds bubble up until they become hours
//  * days do not bubble at all
//  * months bubble up until they become years
// This is because there is no context-free conversion between hours and days
// (think of clock changes)
// and also not between days and months (28-31 days per month)
var a,b,c,d=lf(this._milliseconds)/1e3,e=lf(this._days),f=lf(this._months);a=s(d/60),b=s(a/60),d%=60,a%=60,c=s(f/12),f%=12;
// inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(0>m?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var md,nd;nd=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;c>d;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};
// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var od=a.momentProperties=[],pd=!1,qd={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var rd;rd=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)h(a,b)&&c.push(b);return c};var sd,td={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},ud={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},vd="Invalid date",wd="%d",xd=/\d{1,2}/,yd={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},zd={},Ad={},Bd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Cd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Dd={},Ed={},Fd=/\d/,Gd=/\d\d/,Hd=/\d{3}/,Id=/\d{4}/,Jd=/[+-]?\d{6}/,Kd=/\d\d?/,Ld=/\d\d\d\d?/,Md=/\d\d\d\d\d\d?/,Nd=/\d{1,3}/,Od=/\d{1,4}/,Pd=/[+-]?\d{1,6}/,Qd=/\d+/,Rd=/[+-]?\d+/,Sd=/Z|[+-]\d\d:?\d\d/gi,Td=/Z|[+-]\d\d(?::?\d\d)?/gi,Ud=/[+-]?\d+(\.\d{1,3})?/,Vd=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Wd={},Xd={},Yd=0,Zd=1,$d=2,_d=3,ae=4,be=5,ce=6,de=7,ee=8;sd=Array.prototype.indexOf?Array.prototype.indexOf:function(a){
// I know
var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1},T("M",["MM",2],"Mo",function(){return this.month()+1}),T("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),T("MMMM",0,0,function(a){return this.localeData().months(this,a)}),I("month","M"),L("month",8),Y("M",Kd),Y("MM",Kd,Gd),Y("MMM",function(a,b){return b.monthsShortRegex(a)}),Y("MMMM",function(a,b){return b.monthsRegex(a)}),aa(["M","MM"],function(a,b){b[Zd]=t(a)-1}),aa(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[Zd]=e:l(c).invalidMonth=a});
// LOCALES
var fe=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,ge="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),he="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ie=Vd,je=Vd;
// FORMATTING
T("Y",0,0,function(){var a=this.year();return 9999>=a?""+a:"+"+a}),T(0,["YY",2],0,function(){return this.year()%100}),T(0,["YYYY",4],0,"year"),T(0,["YYYYY",5],0,"year"),T(0,["YYYYYY",6,!0],0,"year"),
// ALIASES
I("year","y"),
// PRIORITIES
L("year",1),
// PARSING
Y("Y",Rd),Y("YY",Kd,Gd),Y("YYYY",Od,Id),Y("YYYYY",Pd,Jd),Y("YYYYYY",Pd,Jd),aa(["YYYYY","YYYYYY"],Yd),aa("YYYY",function(b,c){c[Yd]=2===b.length?a.parseTwoDigitYear(b):t(b)}),aa("YY",function(b,c){c[Yd]=a.parseTwoDigitYear(b)}),aa("Y",function(a,b){b[Yd]=parseInt(a,10)}),
// HOOKS
a.parseTwoDigitYear=function(a){return t(a)+(t(a)>68?1900:2e3)};
// MOMENTS
var ke=N("FullYear",!0);
// FORMATTING
T("w",["ww",2],"wo","week"),T("W",["WW",2],"Wo","isoWeek"),
// ALIASES
I("week","w"),I("isoWeek","W"),
// PRIORITIES
L("week",5),L("isoWeek",5),
// PARSING
Y("w",Kd),Y("ww",Kd,Gd),Y("W",Kd),Y("WW",Kd,Gd),ba(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=t(a)});var le={dow:0,// Sunday is the first day of the week.
doy:6};
// FORMATTING
T("d",0,"do","day"),T("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),T("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),T("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),T("e",0,0,"weekday"),T("E",0,0,"isoWeekday"),
// ALIASES
I("day","d"),I("weekday","e"),I("isoWeekday","E"),
// PRIORITY
L("day",11),L("weekday",11),L("isoWeekday",11),
// PARSING
Y("d",Kd),Y("e",Kd),Y("E",Kd),Y("dd",function(a,b){return b.weekdaysMinRegex(a)}),Y("ddd",function(a,b){return b.weekdaysShortRegex(a)}),Y("dddd",function(a,b){return b.weekdaysRegex(a)}),ba(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);
// if we didn't get a weekday name, mark the date as invalid
null!=e?b.d=e:l(c).invalidWeekday=a}),ba(["d","e","E"],function(a,b,c,d){b[d]=t(a)});
// LOCALES
var me="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),ne="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),oe="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),pe=Vd,qe=Vd,re=Vd;T("H",["HH",2],0,"hour"),T("h",["hh",2],0,Qa),T("k",["kk",2],0,Ra),T("hmm",0,0,function(){return""+Qa.apply(this)+S(this.minutes(),2)}),T("hmmss",0,0,function(){return""+Qa.apply(this)+S(this.minutes(),2)+S(this.seconds(),2)}),T("Hmm",0,0,function(){return""+this.hours()+S(this.minutes(),2)}),T("Hmmss",0,0,function(){return""+this.hours()+S(this.minutes(),2)+S(this.seconds(),2)}),Sa("a",!0),Sa("A",!1),
// ALIASES
I("hour","h"),
// PRIORITY
L("hour",13),Y("a",Ta),Y("A",Ta),Y("H",Kd),Y("h",Kd),Y("HH",Kd,Gd),Y("hh",Kd,Gd),Y("hmm",Ld),Y("hmmss",Md),Y("Hmm",Ld),Y("Hmmss",Md),aa(["H","HH"],_d),aa(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),aa(["h","hh"],function(a,b,c){b[_d]=t(a),l(c).bigHour=!0}),aa("hmm",function(a,b,c){var d=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d)),l(c).bigHour=!0}),aa("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d,2)),b[be]=t(a.substr(e)),l(c).bigHour=!0}),aa("Hmm",function(a,b,c){var d=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d))}),aa("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d,2)),b[be]=t(a.substr(e))});var se,te=/[ap]\.?m?\.?/i,ue=N("Hours",!0),ve={calendar:td,longDateFormat:ud,invalidDate:vd,ordinal:wd,ordinalParse:xd,relativeTime:yd,months:ge,monthsShort:he,week:le,weekdays:me,weekdaysMin:oe,weekdaysShort:ne,meridiemParse:te},we={},xe=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,ye=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,ze=/Z|[+-]\d\d(?::?\d\d)?/,Ae=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],
// YYYYMM is NOT allowed by the standard
["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Be=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ce=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=w("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),
// constant that refers to the ISO standard
a.ISO_8601=function(){};var De=w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=rb.apply(null,arguments);return this.isValid()&&a.isValid()?this>a?this:a:n()}),Ee=w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=rb.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:n()}),Fe=function(){return Date.now?Date.now():+new Date};yb("Z",":"),yb("ZZ",""),
// PARSING
Y("Z",Td),Y("ZZ",Td),aa(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=zb(Td,a)});
// HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var Ge=/([\+\-]|\d\d)/gi;
// HOOKS
// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
a.updateOffset=function(){};
// ASP.NET json date format regex
var He=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Ie=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Nb.fn=vb.prototype;var Je=Rb(1,"add"),Ke=Rb(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Le=w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});
// FORMATTING
T(0,["gg",2],0,function(){return this.weekYear()%100}),T(0,["GG",2],0,function(){return this.isoWeekYear()%100}),xc("gggg","weekYear"),xc("ggggg","weekYear"),xc("GGGG","isoWeekYear"),xc("GGGGG","isoWeekYear"),
// ALIASES
I("weekYear","gg"),I("isoWeekYear","GG"),
// PRIORITY
L("weekYear",1),L("isoWeekYear",1),
// PARSING
Y("G",Rd),Y("g",Rd),Y("GG",Kd,Gd),Y("gg",Kd,Gd),Y("GGGG",Od,Id),Y("gggg",Od,Id),Y("GGGGG",Pd,Jd),Y("ggggg",Pd,Jd),ba(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=t(a)}),ba(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),
// FORMATTING
T("Q",0,"Qo","quarter"),
// ALIASES
I("quarter","Q"),
// PRIORITY
L("quarter",7),
// PARSING
Y("Q",Fd),aa("Q",function(a,b){b[Zd]=3*(t(a)-1)}),
// FORMATTING
T("D",["DD",2],"Do","date"),
// ALIASES
I("date","D"),
// PRIOROITY
L("date",9),
// PARSING
Y("D",Kd),Y("DD",Kd,Gd),Y("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),aa(["D","DD"],$d),aa("Do",function(a,b){b[$d]=t(a.match(Kd)[0],10)});
// MOMENTS
var Me=N("Date",!0);
// FORMATTING
T("DDD",["DDDD",3],"DDDo","dayOfYear"),
// ALIASES
I("dayOfYear","DDD"),
// PRIORITY
L("dayOfYear",4),
// PARSING
Y("DDD",Nd),Y("DDDD",Hd),aa(["DDD","DDDD"],function(a,b,c){c._dayOfYear=t(a)}),
// FORMATTING
T("m",["mm",2],0,"minute"),
// ALIASES
I("minute","m"),
// PRIORITY
L("minute",14),
// PARSING
Y("m",Kd),Y("mm",Kd,Gd),aa(["m","mm"],ae);
// MOMENTS
var Ne=N("Minutes",!1);
// FORMATTING
T("s",["ss",2],0,"second"),
// ALIASES
I("second","s"),
// PRIORITY
L("second",15),
// PARSING
Y("s",Kd),Y("ss",Kd,Gd),aa(["s","ss"],be);
// MOMENTS
var Oe=N("Seconds",!1);
// FORMATTING
T("S",0,0,function(){return~~(this.millisecond()/100)}),T(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),T(0,["SSS",3],0,"millisecond"),T(0,["SSSS",4],0,function(){return 10*this.millisecond()}),T(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),T(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),T(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),T(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),T(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),
// ALIASES
I("millisecond","ms"),
// PRIORITY
L("millisecond",16),
// PARSING
Y("S",Nd,Fd),Y("SS",Nd,Gd),Y("SSS",Nd,Hd);var Pe;for(Pe="SSSS";Pe.length<=9;Pe+="S")Y(Pe,Qd);for(Pe="S";Pe.length<=9;Pe+="S")aa(Pe,Gc);
// MOMENTS
var Qe=N("Milliseconds",!1);
// FORMATTING
T("z",0,0,"zoneAbbr"),T("zz",0,0,"zoneName");var Re=q.prototype;Re.add=Je,Re.calendar=Ub,Re.clone=Vb,Re.diff=ac,Re.endOf=mc,Re.format=ec,Re.from=fc,Re.fromNow=gc,Re.to=hc,Re.toNow=ic,Re.get=Q,Re.invalidAt=vc,Re.isAfter=Wb,Re.isBefore=Xb,Re.isBetween=Yb,Re.isSame=Zb,Re.isSameOrAfter=$b,Re.isSameOrBefore=_b,Re.isValid=tc,Re.lang=Le,Re.locale=jc,Re.localeData=kc,Re.max=Ee,Re.min=De,Re.parsingFlags=uc,Re.set=R,Re.startOf=lc,Re.subtract=Ke,Re.toArray=qc,Re.toObject=rc,Re.toDate=pc,Re.toISOString=dc,Re.toJSON=sc,Re.toString=cc,Re.unix=oc,Re.valueOf=nc,Re.creationData=wc,
// Year
Re.year=ke,Re.isLeapYear=qa,
// Week Year
Re.weekYear=yc,Re.isoWeekYear=zc,
// Quarter
Re.quarter=Re.quarters=Ec,
// Month
Re.month=ja,Re.daysInMonth=ka,
// Week
Re.week=Re.weeks=Aa,Re.isoWeek=Re.isoWeeks=Ba,Re.weeksInYear=Bc,Re.isoWeeksInYear=Ac,
// Day
Re.date=Me,Re.day=Re.days=Ja,Re.weekday=Ka,Re.isoWeekday=La,Re.dayOfYear=Fc,
// Hour
Re.hour=Re.hours=ue,
// Minute
Re.minute=Re.minutes=Ne,
// Second
Re.second=Re.seconds=Oe,
// Millisecond
Re.millisecond=Re.milliseconds=Qe,
// Offset
Re.utcOffset=Cb,Re.utc=Eb,Re.local=Fb,Re.parseZone=Gb,Re.hasAlignedHourOffset=Hb,Re.isDST=Ib,Re.isLocal=Kb,Re.isUtcOffset=Lb,Re.isUtc=Mb,Re.isUTC=Mb,
// Timezone
Re.zoneAbbr=Hc,Re.zoneName=Ic,
// Deprecations
Re.dates=w("dates accessor is deprecated. Use date instead.",Me),Re.months=w("months accessor is deprecated. Use month instead",ja),Re.years=w("years accessor is deprecated. Use year instead",ke),Re.zone=w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Db),Re.isDSTShifted=w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Jb);var Se=Re,Te=B.prototype;Te.calendar=C,Te.longDateFormat=D,Te.invalidDate=E,Te.ordinal=F,Te.preparse=Lc,Te.postformat=Lc,Te.relativeTime=G,Te.pastFuture=H,Te.set=z,
// Month
Te.months=ea,Te.monthsShort=fa,Te.monthsParse=ha,Te.monthsRegex=ma,Te.monthsShortRegex=la,
// Week
Te.week=xa,Te.firstDayOfYear=za,Te.firstDayOfWeek=ya,
// Day of Week
Te.weekdays=Ea,Te.weekdaysMin=Ga,Te.weekdaysShort=Fa,Te.weekdaysParse=Ia,Te.weekdaysRegex=Ma,Te.weekdaysShortRegex=Na,Te.weekdaysMinRegex=Oa,
// Hours
Te.isPM=Ua,Te.meridiem=Va,Za("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===t(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),
// Side effect imports
a.lang=w("moment.lang is deprecated. Use moment.locale instead.",Za),a.langData=w("moment.langData is deprecated. Use moment.localeData instead.",ab);var Ue=Math.abs,Ve=cd("ms"),We=cd("s"),Xe=cd("m"),Ye=cd("h"),Ze=cd("d"),$e=cd("w"),_e=cd("M"),af=cd("y"),bf=ed("milliseconds"),cf=ed("seconds"),df=ed("minutes"),ef=ed("hours"),ff=ed("days"),gf=ed("months"),hf=ed("years"),jf=Math.round,kf={s:45,// seconds to minute
m:45,// minutes to hour
h:22,// hours to day
d:26,// days to month
M:11},lf=Math.abs,mf=vb.prototype;mf.abs=Uc,mf.add=Wc,mf.subtract=Xc,mf.as=ad,mf.asMilliseconds=Ve,mf.asSeconds=We,mf.asMinutes=Xe,mf.asHours=Ye,mf.asDays=Ze,mf.asWeeks=$e,mf.asMonths=_e,mf.asYears=af,mf.valueOf=bd,mf._bubble=Zc,mf.get=dd,mf.milliseconds=bf,mf.seconds=cf,mf.minutes=df,mf.hours=ef,mf.days=ff,mf.weeks=fd,mf.months=gf,mf.years=hf,mf.humanize=kd,mf.toISOString=ld,mf.toString=ld,mf.toJSON=ld,mf.locale=jc,mf.localeData=kc,
// Deprecations
mf.toIsoString=w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ld),mf.lang=Le,
// Side effect imports
// FORMATTING
T("X",0,0,"unix"),T("x",0,0,"valueOf"),
// PARSING
Y("x",Rd),Y("X",Ud),aa("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),aa("x",function(a,b,c){c._d=new Date(t(a))}),
// Side effect imports
a.version="2.15.1",b(rb),a.fn=Se,a.min=tb,a.max=ub,a.now=Fe,a.utc=j,a.unix=Jc,a.months=Pc,a.isDate=f,a.locale=Za,a.invalid=n,a.duration=Nb,a.isMoment=r,a.weekdays=Rc,a.parseZone=Kc,a.localeData=ab,a.isDuration=wb,a.monthsShort=Qc,a.weekdaysMin=Tc,a.defineLocale=$a,a.updateLocale=_a,a.locales=bb,a.weekdaysShort=Sc,a.normalizeUnits=J,a.relativeTimeRounding=id,a.relativeTimeThreshold=jd,a.calendarFormat=Tb,a.prototype=Se;var nf=a;return nf});
/*

 bootpag - jQuery plugin for dynamic pagination

 Copyright (c) 2015 botmonster@7items.com

 Licensed under the MIT license:
   http://www.opensource.org/licenses/mit-license.php

 Project home:
   http://botmonster.com/jquery-bootpag/

 Version:  1.0.7

*/
(function(h,q){h.fn.bootpag=function(p){function m(c,b){b=parseInt(b,10);var d,e=0==a.maxVisible?1:a.maxVisible,k=1==a.maxVisible?0:1,n=Math.floor((b-1)/e)*e,f=c.find("li");a.page=b=0>b?0:b>a.total?a.total:b;f.removeClass(a.activeClass);d=1>b-1?1:a.leaps&&b-1>=a.maxVisible?Math.floor((b-1)/e)*e:b-1;a.firstLastUse&&f.first().toggleClass(a.disabledClass,1===b);e=f.first();a.firstLastUse&&(e=e.next());e.toggleClass(a.disabledClass,1===b).attr("data-lp",d).find("a").attr("href",g(d));k=1==a.maxVisible?
0:1;d=b+1>a.total?a.total:a.leaps&&b+1<a.total-a.maxVisible?n+a.maxVisible+k:b+1;e=f.last();a.firstLastUse&&(e=e.prev());e.toggleClass(a.disabledClass,b===a.total).attr("data-lp",d).find("a").attr("href",g(d));f.last().toggleClass(a.disabledClass,b===a.total);e=f.filter("[data-lp="+b+"]");k="."+[a.nextClass,a.prevClass,a.firstClass,a.lastClass].join(",.");if(!e.not(k).length){var m=b<=n?-a.maxVisible:0;f.not(k).each(function(b){d=b+1+n+m;h(this).attr("data-lp",d).toggle(d<=a.total).find("a").html(d).attr("href",
g(d))});e=f.filter("[data-lp="+b+"]")}e.not(k).addClass(a.activeClass);l.data("settings",a)}function g(c){return a.href.replace(a.hrefVariable,c)}var l=this,a=h.extend({total:0,page:1,maxVisible:null,leaps:!0,href:"javascript:void(0);",hrefVariable:"{{number}}",next:"&raquo;",prev:"&laquo;",firstLastUse:!1,first:'<span aria-hidden="true">&larr;</span>',last:'<span aria-hidden="true">&rarr;</span>',wrapClass:"pagination",activeClass:"active",disabledClass:"disabled",nextClass:"next",prevClass:"prev",
lastClass:"last",firstClass:"first"},l.data("settings")||{},p||{});if(0>=a.total)return this;h.isNumeric(a.maxVisible)||a.maxVisible||(a.maxVisible=parseInt(a.total,10));l.data("settings",a);return this.each(function(){var c,b,d=h(this);c=['<ul class="',a.wrapClass,' bootpag">'];a.firstLastUse&&(c=c.concat(['<li data-lp="1" class="',a.firstClass,'"><a href="',g(1),'">',a.first,"</a></li>"]));a.prev&&(c=c.concat(['<li data-lp="1" class="',a.prevClass,'"><a href="',g(1),'">',a.prev,"</a></li>"]));for(b=
1;b<=Math.min(a.total,a.maxVisible);b++)c=c.concat(['<li data-lp="',b,'"><a href="',g(b),'">',b,"</a></li>"]);a.next&&(b=a.leaps&&a.total>a.maxVisible?Math.min(a.maxVisible+1,a.total):2,c=c.concat(['<li data-lp="',b,'" class="',a.nextClass,'"><a href="',g(b),'">',a.next,"</a></li>"]));a.firstLastUse&&(c=c.concat(['<li data-lp="',a.total,'" class="last"><a href="',g(a.total),'">',a.last,"</a></li>"]));c.push("</ul>");d.find("ul.bootpag").remove();d.append(c.join(""));c=d.find("ul.bootpag");d.find("li").click(function(){var b=
h(this);if(!b.hasClass(a.disabledClass)&&!b.hasClass(a.activeClass)){var c=parseInt(b.attr("data-lp"),10);l.find("ul.bootpag").each(function(){m(h(this),c)});l.trigger("page",c)}});m(c,a.page)})}})(jQuery,window);

!function(a){"use strict";function b(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function c(a,b){return a<<b|a>>>32-b}function d(a,d,e,f,g,h){return b(c(b(b(d,a),b(f,h)),g),e)}function e(a,b,c,e,f,g,h){return d(b&c|~b&e,a,b,f,g,h)}function f(a,b,c,e,f,g,h){return d(b&e|c&~e,a,b,f,g,h)}function g(a,b,c,e,f,g,h){return d(b^c^e,a,b,f,g,h)}function h(a,b,c,e,f,g,h){return d(c^(b|~e),a,b,f,g,h)}function i(a,c){a[c>>5]|=128<<c%32,a[(c+64>>>9<<4)+14]=c;var d,i,j,k,l,m=1732584193,n=-271733879,o=-1732584194,p=271733878;for(d=0;d<a.length;d+=16)i=m,j=n,k=o,l=p,m=e(m,n,o,p,a[d],7,-680876936),p=e(p,m,n,o,a[d+1],12,-389564586),o=e(o,p,m,n,a[d+2],17,606105819),n=e(n,o,p,m,a[d+3],22,-1044525330),m=e(m,n,o,p,a[d+4],7,-176418897),p=e(p,m,n,o,a[d+5],12,1200080426),o=e(o,p,m,n,a[d+6],17,-1473231341),n=e(n,o,p,m,a[d+7],22,-45705983),m=e(m,n,o,p,a[d+8],7,1770035416),p=e(p,m,n,o,a[d+9],12,-1958414417),o=e(o,p,m,n,a[d+10],17,-42063),n=e(n,o,p,m,a[d+11],22,-1990404162),m=e(m,n,o,p,a[d+12],7,1804603682),p=e(p,m,n,o,a[d+13],12,-40341101),o=e(o,p,m,n,a[d+14],17,-1502002290),n=e(n,o,p,m,a[d+15],22,1236535329),m=f(m,n,o,p,a[d+1],5,-165796510),p=f(p,m,n,o,a[d+6],9,-1069501632),o=f(o,p,m,n,a[d+11],14,643717713),n=f(n,o,p,m,a[d],20,-373897302),m=f(m,n,o,p,a[d+5],5,-701558691),p=f(p,m,n,o,a[d+10],9,38016083),o=f(o,p,m,n,a[d+15],14,-660478335),n=f(n,o,p,m,a[d+4],20,-405537848),m=f(m,n,o,p,a[d+9],5,568446438),p=f(p,m,n,o,a[d+14],9,-1019803690),o=f(o,p,m,n,a[d+3],14,-187363961),n=f(n,o,p,m,a[d+8],20,1163531501),m=f(m,n,o,p,a[d+13],5,-1444681467),p=f(p,m,n,o,a[d+2],9,-51403784),o=f(o,p,m,n,a[d+7],14,1735328473),n=f(n,o,p,m,a[d+12],20,-1926607734),m=g(m,n,o,p,a[d+5],4,-378558),p=g(p,m,n,o,a[d+8],11,-2022574463),o=g(o,p,m,n,a[d+11],16,1839030562),n=g(n,o,p,m,a[d+14],23,-35309556),m=g(m,n,o,p,a[d+1],4,-1530992060),p=g(p,m,n,o,a[d+4],11,1272893353),o=g(o,p,m,n,a[d+7],16,-155497632),n=g(n,o,p,m,a[d+10],23,-1094730640),m=g(m,n,o,p,a[d+13],4,681279174),p=g(p,m,n,o,a[d],11,-358537222),o=g(o,p,m,n,a[d+3],16,-722521979),n=g(n,o,p,m,a[d+6],23,76029189),m=g(m,n,o,p,a[d+9],4,-640364487),p=g(p,m,n,o,a[d+12],11,-421815835),o=g(o,p,m,n,a[d+15],16,530742520),n=g(n,o,p,m,a[d+2],23,-995338651),m=h(m,n,o,p,a[d],6,-198630844),p=h(p,m,n,o,a[d+7],10,1126891415),o=h(o,p,m,n,a[d+14],15,-1416354905),n=h(n,o,p,m,a[d+5],21,-57434055),m=h(m,n,o,p,a[d+12],6,1700485571),p=h(p,m,n,o,a[d+3],10,-1894986606),o=h(o,p,m,n,a[d+10],15,-1051523),n=h(n,o,p,m,a[d+1],21,-2054922799),m=h(m,n,o,p,a[d+8],6,1873313359),p=h(p,m,n,o,a[d+15],10,-30611744),o=h(o,p,m,n,a[d+6],15,-1560198380),n=h(n,o,p,m,a[d+13],21,1309151649),m=h(m,n,o,p,a[d+4],6,-145523070),p=h(p,m,n,o,a[d+11],10,-1120210379),o=h(o,p,m,n,a[d+2],15,718787259),n=h(n,o,p,m,a[d+9],21,-343485551),m=b(m,i),n=b(n,j),o=b(o,k),p=b(p,l);return[m,n,o,p]}function j(a){var b,c="";for(b=0;b<32*a.length;b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);return c}function k(a){var b,c=[];for(c[(a.length>>2)-1]=void 0,b=0;b<c.length;b+=1)c[b]=0;for(b=0;b<8*a.length;b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;return c}function l(a){return j(i(k(a),8*a.length))}function m(a,b){var c,d,e=k(a),f=[],g=[];for(f[15]=g[15]=void 0,e.length>16&&(e=i(e,8*a.length)),c=0;16>c;c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];return d=i(f.concat(k(b)),512+8*b.length),j(i(g.concat(d),640))}function n(a){var b,c,d="0123456789abcdef",e="";for(c=0;c<a.length;c+=1)b=a.charCodeAt(c),e+=d.charAt(b>>>4&15)+d.charAt(15&b);return e}function o(a){return unescape(encodeURIComponent(a))}function p(a){return l(o(a))}function q(a){return n(p(a))}function r(a,b){return m(o(a),o(b))}function s(a,b){return n(r(a,b))}function t(a,b,c){return b?c?r(b,a):s(b,a):c?p(a):q(a)}"function"==typeof define&&define.amd?define(function(){return t}):a.md5=t}(this);
!function(){"use strict";function e(e){function t(t,n){var s,h,k=t==window,y=n&&void 0!==n.message?n.message:void 0;if(n=e.extend({},e.blockUI.defaults,n||{}),!n.ignoreIfBlocked||!e(t).data("blockUI.isBlocked")){if(n.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,n.overlayCSS||{}),s=e.extend({},e.blockUI.defaults.css,n.css||{}),n.onOverlayClick&&(n.overlayCSS.cursor="pointer"),h=e.extend({},e.blockUI.defaults.themedCSS,n.themedCSS||{}),y=void 0===y?n.message:y,k&&p&&o(window,{fadeOut:0}),y&&"string"!=typeof y&&(y.parentNode||y.jquery)){var m=y.jquery?y[0]:y,v={};e(t).data("blockUI.history",v),v.el=m,v.parent=m.parentNode,v.display=m.style.display,v.position=m.style.position,v.parent&&v.parent.removeChild(m)}e(t).data("blockUI.onUnblock",n.onUnblock);var g,I,w,U,x=n.baseZ;g=e(r||n.forceIframe?'<iframe class="blockUI" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+n.iframeSrc+'"></iframe>':'<div class="blockUI" style="display:none"></div>'),I=e(n.theme?'<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+x++ +';display:none"></div>':'<div class="blockUI blockOverlay" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),n.theme&&k?(U='<div class="blockUI '+n.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:fixed">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):n.theme?(U='<div class="blockUI '+n.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:absolute">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):U=k?'<div class="blockUI '+n.blockMsgClass+' blockPage" style="z-index:'+(x+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+n.blockMsgClass+' blockElement" style="z-index:'+(x+10)+';display:none;position:absolute"></div>',w=e(U),y&&(n.theme?(w.css(h),w.addClass("ui-widget-content")):w.css(s)),n.theme||I.css(n.overlayCSS),I.css("position",k?"fixed":"absolute"),(r||n.forceIframe)&&g.css("opacity",0);var C=[g,I,w],S=e(k?"body":t);e.each(C,function(){this.appendTo(S)}),n.theme&&n.draggable&&e.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var O=f&&(!e.support.boxModel||e("object,embed",k?null:t).length>0);if(u||O){if(k&&n.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(u||!e.support.boxModel)&&!k)var E=d(t,"borderTopWidth"),T=d(t,"borderLeftWidth"),M=E?"(0 - "+E+")":0,B=T?"(0 - "+T+")":0;e.each(C,function(e,t){var o=t[0].style;if(o.position="absolute",e<2)k?o.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+n.quirksmodeOffsetHack+') + "px"'):o.setExpression("height",'this.parentNode.offsetHeight + "px"'),k?o.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):o.setExpression("width",'this.parentNode.offsetWidth + "px"'),B&&o.setExpression("left",B),M&&o.setExpression("top",M);else if(n.centerY)k&&o.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),o.marginTop=0;else if(!n.centerY&&k){var i=n.css&&n.css.top?parseInt(n.css.top,10):0,s="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+i+') + "px"';o.setExpression("top",s)}})}if(y&&(n.theme?w.find(".ui-widget-content").append(y):w.append(y),(y.jquery||y.nodeType)&&e(y).show()),(r||n.forceIframe)&&n.showOverlay&&g.show(),n.fadeIn){var j=n.onBlock?n.onBlock:c,H=n.showOverlay&&!y?j:c,z=y?j:c;n.showOverlay&&I._fadeIn(n.fadeIn,H),y&&w._fadeIn(n.fadeIn,z)}else n.showOverlay&&I.show(),y&&w.show(),n.onBlock&&n.onBlock.bind(w)();if(i(1,t,n),k?(p=w[0],b=e(n.focusableElements,p),n.focusInput&&setTimeout(l,20)):a(w[0],n.centerX,n.centerY),n.timeout){var W=setTimeout(function(){k?e.unblockUI(n):e(t).unblock(n)},n.timeout);e(t).data("blockUI.timeout",W)}}}function o(t,o){var s,l=t==window,a=e(t),d=a.data("blockUI.history"),c=a.data("blockUI.timeout");c&&(clearTimeout(c),a.removeData("blockUI.timeout")),o=e.extend({},e.blockUI.defaults,o||{}),i(0,t,o),null===o.onUnblock&&(o.onUnblock=a.data("blockUI.onUnblock"),a.removeData("blockUI.onUnblock"));var r;r=l?e("body").children().filter(".blockUI").add("body > .blockUI"):a.find(">.blockUI"),o.cursorReset&&(r.length>1&&(r[1].style.cursor=o.cursorReset),r.length>2&&(r[2].style.cursor=o.cursorReset)),l&&(p=b=null),o.fadeOut?(s=r.length,r.stop().fadeOut(o.fadeOut,function(){0===--s&&n(r,d,o,t)})):n(r,d,o,t)}function n(t,o,n,i){var s=e(i);if(!s.data("blockUI.isBlocked")){t.each(function(e,t){this.parentNode&&this.parentNode.removeChild(this)}),o&&o.el&&(o.el.style.display=o.display,o.el.style.position=o.position,o.el.style.cursor="default",o.parent&&o.parent.appendChild(o.el),s.removeData("blockUI.history")),s.data("blockUI.static")&&s.css("position","static"),"function"==typeof n.onUnblock&&n.onUnblock(i,n);var l=e(document.body),a=l.width(),d=l[0].style.width;l.width(a-1).width(a),l[0].style.width=d}}function i(t,o,n){var i=o==window,l=e(o);if((t||(!i||p)&&(i||l.data("blockUI.isBlocked")))&&(l.data("blockUI.isBlocked",t),i&&n.bindEvents&&(!t||n.showOverlay))){var a="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t?e(document).bind(a,n,s):e(document).unbind(a,s)}}function s(t){if("keydown"===t.type&&t.keyCode&&9==t.keyCode&&p&&t.data.constrainTabKey){var o=b,n=!t.shiftKey&&t.target===o[o.length-1],i=t.shiftKey&&t.target===o[0];if(n||i)return setTimeout(function(){l(i)},10),!1}var s=t.data,a=e(t.target);return a.hasClass("blockOverlay")&&s.onOverlayClick&&s.onOverlayClick(t),a.parents("div."+s.blockMsgClass).length>0||0===a.parents().children().filter("div.blockUI").length}function l(e){if(b){var t=b[e===!0?b.length-1:0];t&&t.focus()}}function a(e,t,o){var n=e.parentNode,i=e.style,s=(n.offsetWidth-e.offsetWidth)/2-d(n,"borderLeftWidth"),l=(n.offsetHeight-e.offsetHeight)/2-d(n,"borderTopWidth");t&&(i.left=s>0?s+"px":"0"),o&&(i.top=l>0?l+"px":"0")}function d(t,o){return parseInt(e.css(t,o),10)||0}e.fn._fadeIn=e.fn.fadeIn;var c=e.noop||function(){},r=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),f=(document.documentMode||0,e.isFunction(document.createElement("div").style.setExpression));e.blockUI=function(e){t(window,e)},e.unblockUI=function(e){o(window,e)},e.growlUI=function(t,o,n,i){var s=e('<div class="growlUI"></div>');t&&s.append("<h1>"+t+"</h1>"),o&&s.append("<h2>"+o+"</h2>"),void 0===n&&(n=3e3);var l=function(t){t=t||{},e.blockUI({message:s,fadeIn:"undefined"!=typeof t.fadeIn?t.fadeIn:700,fadeOut:"undefined"!=typeof t.fadeOut?t.fadeOut:1e3,timeout:"undefined"!=typeof t.timeout?t.timeout:n,centerY:!1,showOverlay:!1,onUnblock:i,css:e.blockUI.defaults.growlCSS})};l();s.css("opacity");s.mouseover(function(){l({fadeIn:0,timeout:3e4});var t=e(".blockMsg");t.stop(),t.fadeTo(300,1)}).mouseout(function(){e(".blockMsg").fadeOut(1e3)})},e.fn.block=function(o){if(this[0]===window)return e.blockUI(o),this;var n=e.extend({},e.blockUI.defaults,o||{});return this.each(function(){var t=e(this);n.ignoreIfBlocked&&t.data("blockUI.isBlocked")||t.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,t(this,o)})},e.fn.unblock=function(t){return this[0]===window?(e.unblockUI(t),this):this.each(function(){o(this,t)})},e.blockUI.version=2.7,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var p=null,b=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();
!function(e){e(["jquery"],function(e){return function(){function t(e,t,n){return g({type:O.error,iconClass:m().iconClasses.error,message:e,optionsOverride:n,title:t})}function n(t,n){return t||(t=m()),v=e("#"+t.containerId),v.length?v:(n&&(v=d(t)),v)}function o(e,t,n){return g({type:O.info,iconClass:m().iconClasses.info,message:e,optionsOverride:n,title:t})}function s(e){C=e}function i(e,t,n){return g({type:O.success,iconClass:m().iconClasses.success,message:e,optionsOverride:n,title:t})}function a(e,t,n){return g({type:O.warning,iconClass:m().iconClasses.warning,message:e,optionsOverride:n,title:t})}function r(e,t){var o=m();v||n(o),u(e,o,t)||l(o)}function c(t){var o=m();return v||n(o),t&&0===e(":focus",t).length?void h(t):void(v.children().length&&v.remove())}function l(t){for(var n=v.children(),o=n.length-1;o>=0;o--)u(e(n[o]),t)}function u(t,n,o){var s=!(!o||!o.force)&&o.force;return!(!t||!s&&0!==e(":focus",t).length)&&(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){h(t)}}),!0)}function d(t){return v=e("<div/>").attr("id",t.containerId).addClass(t.positionClass),v.appendTo(e(t.target)),v}function p(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1}}function f(e){C&&C(e)}function g(t){function o(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(){c(),u(),d(),p(),g(),C(),l(),i()}function i(){var e="";switch(t.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive"}I.attr("aria-live",e)}function a(){E.closeOnHover&&I.hover(H,D),!E.onclick&&E.tapToDismiss&&I.click(b),E.closeButton&&j&&j.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&e.cancelBubble!==!0&&(e.cancelBubble=!0),E.onCloseClick&&E.onCloseClick(e),b(!0)}),E.onclick&&I.click(function(e){E.onclick(e),b()})}function r(){I.hide(),I[E.showMethod]({duration:E.showDuration,easing:E.showEasing,complete:E.onShown}),E.timeOut>0&&(k=setTimeout(b,E.timeOut),F.maxHideTime=parseFloat(E.timeOut),F.hideEta=(new Date).getTime()+F.maxHideTime,E.progressBar&&(F.intervalId=setInterval(x,10)))}function c(){t.iconClass&&I.addClass(E.toastClass).addClass(y)}function l(){E.newestOnTop?v.prepend(I):v.append(I)}function u(){if(t.title){var e=t.title;E.escapeHtml&&(e=o(t.title)),M.append(e).addClass(E.titleClass),I.append(M)}}function d(){if(t.message){var e=t.message;E.escapeHtml&&(e=o(t.message)),B.append(e).addClass(E.messageClass),I.append(B)}}function p(){E.closeButton&&(j.addClass(E.closeClass).attr("role","button"),I.prepend(j))}function g(){E.progressBar&&(q.addClass(E.progressClass),I.prepend(q))}function C(){E.rtl&&I.addClass("rtl")}function O(e,t){if(e.preventDuplicates){if(t.message===w)return!0;w=t.message}return!1}function b(t){var n=t&&E.closeMethod!==!1?E.closeMethod:E.hideMethod,o=t&&E.closeDuration!==!1?E.closeDuration:E.hideDuration,s=t&&E.closeEasing!==!1?E.closeEasing:E.hideEasing;if(!e(":focus",I).length||t)return clearTimeout(F.intervalId),I[n]({duration:o,easing:s,complete:function(){h(I),clearTimeout(k),E.onHidden&&"hidden"!==P.state&&E.onHidden(),P.state="hidden",P.endTime=new Date,f(P)}})}function D(){(E.timeOut>0||E.extendedTimeOut>0)&&(k=setTimeout(b,E.extendedTimeOut),F.maxHideTime=parseFloat(E.extendedTimeOut),F.hideEta=(new Date).getTime()+F.maxHideTime)}function H(){clearTimeout(k),F.hideEta=0,I.stop(!0,!0)[E.showMethod]({duration:E.showDuration,easing:E.showEasing})}function x(){var e=(F.hideEta-(new Date).getTime())/F.maxHideTime*100;q.width(e+"%")}var E=m(),y=t.iconClass||E.iconClass;if("undefined"!=typeof t.optionsOverride&&(E=e.extend(E,t.optionsOverride),y=t.optionsOverride.iconClass||y),!O(E,t)){T++,v=n(E,!0);var k=null,I=e("<div/>"),M=e("<div/>"),B=e("<div/>"),q=e("<div/>"),j=e(E.closeHtml),F={intervalId:null,hideEta:null,maxHideTime:null},P={toastId:T,state:"visible",startTime:new Date,options:E,map:t};return s(),r(),a(),f(P),E.debug&&console&&console.log(P),I}}function m(){return e.extend({},p(),b.options)}function h(e){v||(v=n()),e.is(":visible")||(e.remove(),e=null,0===v.children().length&&(v.remove(),w=void 0))}var v,C,w,T=0,O={error:"error",info:"info",success:"success",warning:"warning"},b={clear:r,remove:c,error:t,getContainer:n,info:o,options:{},subscribe:s,success:i,version:"2.1.3",warning:a};return b}()})}("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):window.toastr=t(window.jQuery)});
//# sourceMappingURL=toastr.js.map

+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof e&&e;!n&&/destroy|hide/.test(e)||(n||o.data("bs.tooltip",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};i.VERSION="3.3.5",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var r=n[s];if("click"==r)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=r){var a="hover"==r?"mouseenter":"focusin",l="hover"==r?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusin"==e.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusout"==e.type?"focus":"hover"]=!1),!i.isInStateTrue())return clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide()},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var n=this,s=this.tip(),r=this.getUID(this.type);this.setContent(),s.attr("id",r),this.$element.attr("aria-describedby",r),this.options.animation&&s.addClass("fade");var a="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,p=l.test(a);p&&(a=a.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var h=this.getPosition(),f=s[0].offsetWidth,c=s[0].offsetHeight;if(p){var u=a,d=this.getPosition(this.$viewport);a="bottom"==a&&h.bottom+c>d.bottom?"top":"top"==a&&h.top-c<d.top?"bottom":"right"==a&&h.right+f>d.width?"left":"left"==a&&h.left-f<d.left?"right":a,s.removeClass(u).addClass(a)}var g=this.getCalculatedOffset(a,h,f,c);this.applyPlacement(g,a);var v=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",v).emulateTransitionEnd(i.TRANSITION_DURATION):v()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,r=parseInt(o.css("margin-top"),10),a=parseInt(o.css("margin-left"),10);isNaN(r)&&(r=0),isNaN(a)&&(a=0),e.top+=r,e.left+=a,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,p=o[0].offsetHeight;"top"==i&&p!=s&&(e.top=e.top+s-p);var h=this.getViewportAdjustedDelta(i,e,l,p);h.left?e.left+=h.left:e.top+=h.top;var f=/top|bottom/.test(i),c=f?2*h.left-n+l:2*h.top-s+p,u=f?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(c,o[0][u],f)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function o(){"in"!=n.hoverState&&s.detach(),n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=t(this.$tip),r=t.Event("hide.bs."+this.type);if(this.$element.trigger(r),!r.isDefaultPrevented())return s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),this.hoverState=null,this},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=o?{top:0,left:0}:e.offset(),r={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},a=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,r,a,s)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-s-r.scroll,l=e.top+s-r.scroll+o;a<r.top?n.top=r.top-a:l>r.top+r.height&&(n.top=r.top+r.height-l)}else{var p=e.left-s,h=e.left+s+i;p<r.left?n.left=r.left-p:h>r.right&&(n.left=r.left+r.width-h)}return n},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),e?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null})};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery);
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function o(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function r(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(c," ")),u.json?JSON.parse(e):e}catch(n){}}function t(n,o){var i=u.raw?n:r(n);return e.isFunction(o)?o(i):i}var c=/\+/g,u=e.cookie=function(r,c,f){if(void 0!==c&&!e.isFunction(c)){if(f=e.extend({},u.defaults,f),"number"==typeof f.expires){var a=f.expires,d=f.expires=new Date;d.setTime(+d+864e5*a)}return document.cookie=[n(r),"=",i(c),f.expires?"; expires="+f.expires.toUTCString():"",f.path?"; path="+f.path:"",f.domain?"; domain="+f.domain:"",f.secure?"; secure":""].join("")}for(var p=r?void 0:{},s=document.cookie?document.cookie.split("; "):[],m=0,x=s.length;m<x;m++){var v=s[m].split("="),k=o(v.shift()),l=v.join("=");if(r&&r===k){p=t(l,c);break}r||void 0===(l=t(l))||(p[k]=l)}return p};u.defaults={},e.removeCookie=function(n,o){return void 0!==e.cookie(n)&&(e.cookie(n,"",e.extend({},o,{expires:-1})),!e.cookie(n))}});
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.7",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,"function"==typeof define&&define.amd?define(function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a[c]=ha}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.js.map
+function(t){"use strict";function e(e){return this.each(function(){var a=t(this),n=a.data("bs.alert");n||a.data("bs.alert",n=new r(this)),"string"==typeof e&&n[e].call(a)})}var a='[data-dismiss="alert"]',r=function(e){t(e).on("click",a,this.close)};r.VERSION="3.3.5",r.TRANSITION_DURATION=150,r.prototype.close=function(e){function a(){o.detach().trigger("closed.bs.alert").remove()}var n=t(this),s=n.attr("data-target");s||(s=n.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var o=t(s);e&&e.preventDefault(),o.length||(o=n.closest(".alert")),o.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(o.removeClass("in"),t.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",a).emulateTransitionEnd(r.TRANSITION_DURATION):a())};var n=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=r,t.fn.alert.noConflict=function(){return t.fn.alert=n,this},t(document).on("click.bs.alert.data-api",a,r.prototype.close)}(jQuery);
+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),a=n.data("bs.button"),o="object"==typeof e&&e;a||n.data("bs.button",a=new s(this,o)),"toggle"==e?a.toggle():e&&a.setState(e)})}var s=function(e,n){this.$element=t(e),this.options=t.extend({},s.DEFAULTS,n),this.isLoading=!1};s.VERSION="3.3.5",s.DEFAULTS={loadingText:"loading..."},s.prototype.setState=function(e){var s="disabled",n=this.$element,a=n.is("input")?"val":"html",o=n.data();e+="Text",null==o.resetText&&n.data("resetText",n[a]()),setTimeout(t.proxy(function(){n[a](null==o[e]?this.options[e]:o[e]),"loadingText"==e?(this.isLoading=!0,n.addClass(s).attr(s,s)):this.isLoading&&(this.isLoading=!1,n.removeClass(s).removeAttr(s))},this),0)},s.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var s=this.$element.find("input");"radio"==s.prop("type")?(s.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==s.prop("type")&&(s.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),s.prop("checked",this.$element.hasClass("active")),t&&s.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var n=t.fn.button;t.fn.button=e,t.fn.button.Constructor=s,t.fn.button.noConflict=function(){return t.fn.button=n,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(s){var n=t(s.target);n.hasClass("btn")||(n=n.closest(".btn")),e.call(n,"toggle"),t(s.target).is('input[type="radio"]')||t(s.target).is('input[type="checkbox"]')||s.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery);
+function(t){"use strict";function e(e){var a,s=e.attr("data-target")||(a=e.attr("href"))&&a.replace(/.*(?=#[^\s]+$)/,"");return t(s)}function a(e){return this.each(function(){var a=t(this),i=a.data("bs.collapse"),n=t.extend({},s.DEFAULTS,a.data(),"object"==typeof e&&e);!i&&n.toggle&&/show|hide/.test(e)&&(n.toggle=!1),i||a.data("bs.collapse",i=new s(this,n)),"string"==typeof e&&i[e]()})}var s=function(e,a){this.$element=t(e),this.options=t.extend({},s.DEFAULTS,a),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};s.VERSION="3.3.5",s.TRANSITION_DURATION=350,s.DEFAULTS={toggle:!0},s.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},s.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,i=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(i&&i.length&&(e=i.data("bs.collapse"),e&&e.transitioning))){var n=t.Event("show.bs.collapse");if(this.$element.trigger(n),!n.isDefaultPrevented()){i&&i.length&&(a.call(i,"hide"),e||i.data("bs.collapse",null));var l=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[l](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var o=function(){this.$element.removeClass("collapsing").addClass("collapse in")[l](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return o.call(this);var r=t.camelCase(["scroll",l].join("-"));this.$element.one("bsTransitionEnd",t.proxy(o,this)).emulateTransitionEnd(s.TRANSITION_DURATION)[l](this.$element[0][r])}}}},s.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var a=this.dimension();this.$element[a](this.$element[a]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[a](0).one("bsTransitionEnd",t.proxy(i,this)).emulateTransitionEnd(s.TRANSITION_DURATION):i.call(this)}}},s.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},s.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(a,s){var i=t(s);this.addAriaAndCollapsedClass(e(i),i)},this)).end()},s.prototype.addAriaAndCollapsedClass=function(t,e){var a=t.hasClass("in");t.attr("aria-expanded",a),e.toggleClass("collapsed",!a).attr("aria-expanded",a)};var i=t.fn.collapse;t.fn.collapse=a,t.fn.collapse.Constructor=s,t.fn.collapse.noConflict=function(){return t.fn.collapse=i,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(s){var i=t(this);i.attr("data-target")||s.preventDefault();var n=e(i),l=n.data("bs.collapse"),o=l?"toggle":i.data();a.call(n,o)})}(jQuery);
+function(t){"use strict";function o(o){var e=o.attr("data-target");e||(e=o.attr("href"),e=e&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var n=e&&t(e);return n&&n.length?n:o.parent()}function e(e){e&&3===e.which||(t(r).remove(),t(a).each(function(){var n=t(this),r=o(n),a={relatedTarget:this};r.hasClass("open")&&(e&&"click"==e.type&&/input|textarea/i.test(e.target.tagName)&&t.contains(r[0],e.target)||(r.trigger(e=t.Event("hide.bs.dropdown",a)),e.isDefaultPrevented()||(n.attr("aria-expanded","false"),r.removeClass("open").trigger("hidden.bs.dropdown",a))))}))}function n(o){return this.each(function(){var e=t(this),n=e.data("bs.dropdown");n||e.data("bs.dropdown",n=new d(this)),"string"==typeof o&&n[o].call(e)})}var r=".dropdown-backdrop",a='[data-toggle="dropdown"]',d=function(o){t(o).on("click.bs.dropdown",this.toggle)};d.VERSION="3.3.5",d.prototype.toggle=function(n){var r=t(this);if(!r.is(".disabled, :disabled")){var a=o(r),d=a.hasClass("open");if(e(),!d){"ontouchstart"in document.documentElement&&!a.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",e);var i={relatedTarget:this};if(a.trigger(n=t.Event("show.bs.dropdown",i)),n.isDefaultPrevented())return;r.trigger("focus").attr("aria-expanded","true"),a.toggleClass("open").trigger("shown.bs.dropdown",i)}return!1}},d.prototype.keydown=function(e){if(/(38|40|27|32)/.test(e.which)&&!/input|textarea/i.test(e.target.tagName)){var n=t(this);if(e.preventDefault(),e.stopPropagation(),!n.is(".disabled, :disabled")){var r=o(n),d=r.hasClass("open");if(!d&&27!=e.which||d&&27==e.which)return 27==e.which&&r.find(a).trigger("focus"),n.trigger("click");var i=" li:not(.disabled):visible a",s=r.find(".dropdown-menu"+i);if(s.length){var p=s.index(e.target);38==e.which&&p>0&&p--,40==e.which&&p<s.length-1&&p++,~p||(p=0),s.eq(p).trigger("focus")}}}};var i=t.fn.dropdown;t.fn.dropdown=n,t.fn.dropdown.Constructor=d,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=i,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",a,d.prototype.toggle).on("keydown.bs.dropdown.data-api",a,d.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",d.prototype.keydown)}(jQuery);
+function(t){"use strict";function e(e,o){return this.each(function(){var i=t(this),n=i.data("bs.modal"),a=t.extend({},s.DEFAULTS,i.data(),"object"==typeof e&&e);n||i.data("bs.modal",n=new s(this,a)),"string"==typeof e?n[e](o):a.show&&n.show(o)})}var o=0,i=!1,s=function(e,o){this.options=o,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};s.ALLOWED_CONTROL_CLASSES=["pl-combobox-filter-text"],s.VERSION="3.3.5",s.TRANSITION_DURATION=300,s.BACKDROP_TRANSITION_DURATION=150,s.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},s.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},s.prototype.show=function(e){var o=this,i=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(i),this.isShown||i.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var i=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),i&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var n=t.Event("shown.bs.modal",{relatedTarget:e});i?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(n)}).emulateTransitionEnd(s.TRANSITION_DURATION):o.$element.trigger("focus").trigger(n)}))},s.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(s.TRANSITION_DURATION):this.hideModal())},s.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(e){if(this.$element[0]!==e.target&&!this.$element.has(e.target).length){var o=t(e.target),i=s.ALLOWED_CONTROL_CLASSES.some(function(t){return o.hasClass(t)});i||this.$element.trigger("focus")}},this))},s.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},s.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},s.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},s.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},s.prototype.backdrop=function(e){var o=this,i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var n=t.support.transition&&i;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+i).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),n&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;n?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){o.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},s.prototype.handleUpdate=function(){this.adjustDialog()},s.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},s.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},s.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},s.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},s.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},s.prototype.measureScrollbar=function(){return i===!1&&(i=!0,o=this._measureScrollbar()),o},s.prototype._measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var n=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=s,t.fn.modal.noConflict=function(){return t.fn.modal=n,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(o){var i=t(this),s=i.attr("href"),n=t(i.attr("data-target")||s&&s.replace(/.*(?=#[^\s]+$)/,"")),a=n.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(s)&&s},n.data(),i.data());i.is("a")&&o.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")})}),e.call(n,a,this)})}(jQuery);
+function(t){"use strict";function o(o){return this.each(function(){var n=t(this),r=n.data("bs.popover"),i="object"==typeof o&&o;!r&&/destroy|hide/.test(o)||(r||n.data("bs.popover",r=new e(this,i)),"string"==typeof o&&r[o]())})}var e=function(t,o){this.init("popover",t,o)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");e.VERSION="3.3.5",e.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),e.prototype.constructor=e,e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.setContent=function(){var t=this.tip(),o=this.getTitle(),e=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](o),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof e?"html":"append":"text"](e),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},e.prototype.hasContent=function(){return this.getTitle()||this.getContent()},e.prototype.getContent=function(){var t=this.$element,o=this.options;return t.attr("data-content")||("function"==typeof o.content?o.content.call(t[0]):o.content)},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var n=t.fn.popover;t.fn.popover=o,t.fn.popover.Constructor=e,t.fn.popover.noConflict=function(){return t.fn.popover=n,this}}(jQuery);
+function(t){"use strict";function s(e,i){this.$body=t(document.body),this.$scrollElement=t(t(e).is(document.body)?window:e),this.options=t.extend({},s.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function e(e){return this.each(function(){var i=t(this),o=i.data("bs.scrollspy"),r="object"==typeof e&&e;o||i.data("bs.scrollspy",o=new s(this,r)),"string"==typeof e&&o[e]()})}s.VERSION="3.3.5",s.DEFAULTS={offset:10},s.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},s.prototype.refresh=function(){var s=this,e="offset",i=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(e="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var s=t(this),o=s.data("target")||s.attr("href"),r=/^#./.test(o)&&t(o);return r&&r.length&&r.is(":visible")&&[[r[e]().top+i,o]]||null}).sort(function(t,s){return t[0]-s[0]}).each(function(){s.offsets.push(this[0]),s.targets.push(this[1])})},s.prototype.process=function(){var t,s=this.$scrollElement.scrollTop()+this.options.offset,e=this.getScrollHeight(),i=this.options.offset+e-this.$scrollElement.height(),o=this.offsets,r=this.targets,l=this.activeTarget;if(this.scrollHeight!=e&&this.refresh(),s>=i)return l!=(t=r[r.length-1])&&this.activate(t);if(l&&s<o[0])return this.activeTarget=null,this.clear();for(t=o.length;t--;)l!=r[t]&&s>=o[t]&&(void 0===o[t+1]||s<o[t+1])&&this.activate(r[t])},s.prototype.activate=function(s){this.activeTarget=s,this.clear();var e=this.selector+'[data-target="'+s+'"],'+this.selector+'[href="'+s+'"]',i=t(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},s.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var i=t.fn.scrollspy;t.fn.scrollspy=e,t.fn.scrollspy.Constructor=s,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=i,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var s=t(this);e.call(s,s.data())})})}(jQuery);
+function(t){"use strict";function a(a){return this.each(function(){var n=t(this),i=n.data("bs.tab");i||n.data("bs.tab",i=new e(this)),"string"==typeof a&&i[a]()})}var e=function(a){this.element=t(a)};e.VERSION="3.3.5",e.TRANSITION_DURATION=150,e.prototype.show=function(){var a=this.element,e=a.closest("ul:not(.dropdown-menu)"),n=a.data("target");if(n||(n=a.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,"")),!a.parent("li").hasClass("active")){var i=e.find(".active:last a"),r=t.Event("hide.bs.tab",{relatedTarget:a[0]}),s=t.Event("show.bs.tab",{relatedTarget:i[0]});if(i.trigger(r),a.trigger(s),!s.isDefaultPrevented()&&!r.isDefaultPrevented()){var d=t(n);this.activate(a.closest("li"),e),this.activate(d,d.parent(),function(){i.trigger({type:"hidden.bs.tab",relatedTarget:a[0]}),a.trigger({type:"shown.bs.tab",relatedTarget:i[0]})})}}},e.prototype.activate=function(a,n,i){function r(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),a.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),d?(a[0].offsetWidth,a.addClass("in")):a.removeClass("fade"),a.parent(".dropdown-menu").length&&a.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),i&&i()}var s=n.find("> .active"),d=i&&t.support.transition&&(s.length&&s.hasClass("fade")||!!n.find("> .fade").length);s.length&&d?s.one("bsTransitionEnd",r).emulateTransitionEnd(e.TRANSITION_DURATION):r(),s.removeClass("in")};var n=t.fn.tab;t.fn.tab=a,t.fn.tab.Constructor=e,t.fn.tab.noConflict=function(){return t.fn.tab=n,this};var i=function(e){e.preventDefault(),a.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery);
+function(n){"use strict";function t(){var n=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in t)if(void 0!==n.style[i])return{end:t[i]};return!1}n.fn.emulateTransitionEnd=function(t){var i=!1,r=this;n(this).one("bsTransitionEnd",function(){i=!0});var e=function(){i||n(r).trigger(n.support.transition.end)};return setTimeout(e,t),this},n(function(){n.support.transition=t(),n.support.transition&&(n.event.special.bsTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(t){if(n(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery);
/*!
 * ASP.NET SignalR JavaScript Library v2.2.1
 * http://signalr.net/
 *
 * Copyright (c) .NET Foundation. All rights reserved.
 * Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
 *
 */
(function(n,t,i){function w(t,i){var u,f;if(n.isArray(t)){for(u=t.length-1;u>=0;u--)f=t[u],n.type(f)==="string"&&r.transports[f]||(i.log("Invalid transport: "+f+", removing it from the transports list."),t.splice(u,1));t.length===0&&(i.log("No transports remain within the specified transport array."),t=null)}else if(r.transports[t]||t==="auto"){if(t==="auto"&&r._.ieVersion<=8)return["longPolling"]}else i.log("Invalid transport: "+t.toString()+"."),t=null;return t}function b(n){return n==="http:"?80:n==="https:"?443:void 0}function a(n,t){return t.match(/:\d+$/)?t:t+":"+b(n)}function k(t,i){var u=this,r=[];u.tryBuffer=function(i){return t.state===n.signalR.connectionState.connecting?(r.push(i),!0):!1};u.drain=function(){if(t.state===n.signalR.connectionState.connected)while(r.length>0)i(r.shift())};u.clear=function(){r=[]}}var f={nojQuery:"jQuery was not found. Please ensure jQuery is referenced before the SignalR client JavaScript file.",noTransportOnInit:"No transport could be initialized successfully. Try specifying a different transport or none at all for auto initialization.",errorOnNegotiate:"Error during negotiation request.",stoppedWhileLoading:"The connection was stopped during page load.",stoppedWhileNegotiating:"The connection was stopped during the negotiate request.",errorParsingNegotiateResponse:"Error parsing negotiate response.",errorDuringStartRequest:"Error during start request. Stopping the connection.",stoppedDuringStartRequest:"The connection was stopped during the start request.",errorParsingStartResponse:"Error parsing start response: '{0}'. Stopping the connection.",invalidStartResponse:"Invalid start response: '{0}'. Stopping the connection.",protocolIncompatible:"You are using a version of the client that isn't compatible with the server. Client version {0}, server version {1}.",sendFailed:"Send failed.",parseFailed:"Failed at parsing response: {0}",longPollFailed:"Long polling request failed.",eventSourceFailedToConnect:"EventSource failed to connect.",eventSourceError:"Error raised by EventSource",webSocketClosed:"WebSocket closed.",pingServerFailedInvalidResponse:"Invalid ping response when pinging server: '{0}'.",pingServerFailed:"Failed to ping server.",pingServerFailedStatusCode:"Failed to ping server.  Server responded with status code {0}, stopping the connection.",pingServerFailedParse:"Failed to parse ping server response, stopping the connection.",noConnectionTransport:"Connection is in an invalid state, there is no transport active.",webSocketsInvalidState:"The Web Socket transport is in an invalid state, transitioning into reconnecting.",reconnectTimeout:"Couldn't reconnect within the configured timeout of {0} ms, disconnecting.",reconnectWindowTimeout:"The client has been inactive since {0} and it has exceeded the inactivity timeout of {1} ms. Stopping the connection."};if(typeof n!="function")throw new Error(f.nojQuery);var r,h,o=t.document.readyState==="complete",e=n(t),c="__Negotiate Aborted__",u={onStart:"onStart",onStarting:"onStarting",onReceived:"onReceived",onError:"onError",onConnectionSlow:"onConnectionSlow",onReconnecting:"onReconnecting",onReconnect:"onReconnect",onStateChanged:"onStateChanged",onDisconnect:"onDisconnect"},v=function(n,i){if(i!==!1){var r;typeof t.console!="undefined"&&(r="["+(new Date).toTimeString()+"] SignalR: "+n,t.console.debug?t.console.debug(r):t.console.log&&t.console.log(r))}},s=function(t,i,r){return i===t.state?(t.state=r,n(t).triggerHandler(u.onStateChanged,[{oldState:i,newState:r}]),!0):!1},y=function(n){return n.state===r.connectionState.disconnected},l=function(n){return n._.keepAliveData.activated&&n.transport.supportsKeepAlive(n)},p=function(i){var f,e;i._.configuredStopReconnectingTimeout||(e=function(t){var i=r._.format(r.resources.reconnectTimeout,t.disconnectTimeout);t.log(i);n(t).triggerHandler(u.onError,[r._.error(i,"TimeoutException")]);t.stop(!1,!1)},i.reconnecting(function(){var n=this;n.state===r.connectionState.reconnecting&&(f=t.setTimeout(function(){e(n)},n.disconnectTimeout))}),i.stateChanged(function(n){n.oldState===r.connectionState.reconnecting&&t.clearTimeout(f)}),i._.configuredStopReconnectingTimeout=!0)};if(r=function(n,t,i){return new r.fn.init(n,t,i)},r._={defaultContentType:"application/x-www-form-urlencoded; charset=UTF-8",ieVersion:function(){var i,n;return t.navigator.appName==="Microsoft Internet Explorer"&&(n=/MSIE ([0-9]+\.[0-9]+)/.exec(t.navigator.userAgent),n&&(i=t.parseFloat(n[1]))),i}(),error:function(n,t,i){var r=new Error(n);return r.source=t,typeof i!="undefined"&&(r.context=i),r},transportError:function(n,t,r,u){var f=this.error(n,r,u);return f.transport=t?t.name:i,f},format:function(){for(var t=arguments[0],n=0;n<arguments.length-1;n++)t=t.replace("{"+n+"}",arguments[n+1]);return t},firefoxMajorVersion:function(n){var t=n.match(/Firefox\/(\d+)/);return!t||!t.length||t.length<2?0:parseInt(t[1],10)},configurePingInterval:function(i){var f=i._.config,e=function(t){n(i).triggerHandler(u.onError,[t])};f&&!i._.pingIntervalId&&f.pingInterval&&(i._.pingIntervalId=t.setInterval(function(){r.transports._logic.pingServer(i).fail(e)},f.pingInterval))}},r.events=u,r.resources=f,r.ajaxDefaults={processData:!0,timeout:null,async:!0,global:!1,cache:!1},r.changeState=s,r.isDisconnecting=y,r.connectionState={connecting:0,connected:1,reconnecting:2,disconnected:4},r.hub={start:function(){throw new Error("SignalR: Error loading hubs. Ensure your hubs reference is correct, e.g. <script src='/signalr/js'><\/script>.");}},typeof e.on=="function")e.on("load",function(){o=!0});else e.load(function(){o=!0});r.fn=r.prototype={init:function(t,i,r){var f=n(this);this.url=t;this.qs=i;this.lastError=null;this._={keepAliveData:{},connectingMessageBuffer:new k(this,function(n){f.triggerHandler(u.onReceived,[n])}),lastMessageAt:(new Date).getTime(),lastActiveAt:(new Date).getTime(),beatInterval:5e3,beatHandle:null,totalTransportConnectTimeout:0};typeof r=="boolean"&&(this.logging=r)},_parseResponse:function(n){var t=this;return n?typeof n=="string"?t.json.parse(n):n:n},_originalJson:t.JSON,json:t.JSON,isCrossDomain:function(i,r){var u;return(i=n.trim(i),r=r||t.location,i.indexOf("http")!==0)?!1:(u=t.document.createElement("a"),u.href=i,u.protocol+a(u.protocol,u.host)!==r.protocol+a(r.protocol,r.host))},ajaxDataType:"text",contentType:"application/json; charset=UTF-8",logging:!1,state:r.connectionState.disconnected,clientProtocol:"1.5",reconnectDelay:2e3,transportConnectTimeout:0,disconnectTimeout:3e4,reconnectWindow:3e4,keepAliveWarnAt:2/3,start:function(i,h){var a=this,v={pingInterval:3e5,waitForPageLoad:!0,transport:"auto",jsonp:!1},d,y=a._deferral||n.Deferred(),b=t.document.createElement("a"),k,g;if(a.lastError=null,a._deferral=y,!a.json)throw new Error("SignalR: No JSON parser found. Please ensure json2.js is referenced before the SignalR.js file if you need to support clients without native JSON parsing support, e.g. IE<8.");if(n.type(i)==="function"?h=i:n.type(i)==="object"&&(n.extend(v,i),n.type(v.callback)==="function"&&(h=v.callback)),v.transport=w(v.transport,a),!v.transport)throw new Error("SignalR: Invalid transport(s) specified, aborting start.");return(a._.config=v,!o&&v.waitForPageLoad===!0)?(a._.deferredStartHandler=function(){a.start(i,h)},e.bind("load",a._.deferredStartHandler),y.promise()):a.state===r.connectionState.connecting?y.promise():s(a,r.connectionState.disconnected,r.connectionState.connecting)===!1?(y.resolve(a),y.promise()):(p(a),b.href=a.url,b.protocol&&b.protocol!==":"?(a.protocol=b.protocol,a.host=b.host):(a.protocol=t.document.location.protocol,a.host=b.host||t.document.location.host),a.baseUrl=a.protocol+"//"+a.host,a.wsProtocol=a.protocol==="https:"?"wss://":"ws://",v.transport==="auto"&&v.jsonp===!0&&(v.transport="longPolling"),a.url.indexOf("//")===0&&(a.url=t.location.protocol+a.url,a.log("Protocol relative URL detected, normalizing it to '"+a.url+"'.")),this.isCrossDomain(a.url)&&(a.log("Auto detected cross domain url."),v.transport==="auto"&&(v.transport=["webSockets","serverSentEvents","longPolling"]),typeof v.withCredentials=="undefined"&&(v.withCredentials=!0),v.jsonp||(v.jsonp=!n.support.cors,v.jsonp&&a.log("Using jsonp because this browser doesn't support CORS.")),a.contentType=r._.defaultContentType),a.withCredentials=v.withCredentials,a.ajaxDataType=v.jsonp?"jsonp":"text",n(a).bind(u.onStart,function(){n.type(h)==="function"&&h.call(a);y.resolve(a)}),a._.initHandler=r.transports._logic.initHandler(a),d=function(i,o){var c=r._.error(f.noTransportOnInit);if(o=o||0,o>=i.length){o===0?a.log("No transports supported by the server were selected."):o===1?a.log("No fallback transports were selected."):a.log("Fallback transports exhausted.");n(a).triggerHandler(u.onError,[c]);y.reject(c);a.stop();return}if(a.state!==r.connectionState.disconnected){var p=i[o],h=r.transports[p],v=function(){d(i,o+1)};a.transport=h;try{a._.initHandler.start(h,function(){var i=r._.firefoxMajorVersion(t.navigator.userAgent)>=11,f=!!a.withCredentials&&i;a.log("The start request succeeded. Transitioning to the connected state.");l(a)&&r.transports._logic.monitorKeepAlive(a);r.transports._logic.startHeartbeat(a);r._.configurePingInterval(a);s(a,r.connectionState.connecting,r.connectionState.connected)||a.log("WARNING! The connection was not in the connecting state.");a._.connectingMessageBuffer.drain();n(a).triggerHandler(u.onStart);e.bind("unload",function(){a.log("Window unloading, stopping the connection.");a.stop(f)});i&&e.bind("beforeunload",function(){t.setTimeout(function(){a.stop(f)},0)})},v)}catch(w){a.log(h.name+" transport threw '"+w.message+"' when attempting to start.");v()}}},k=a.url+"/negotiate",g=function(t,i){var e=r._.error(f.errorOnNegotiate,t,i._.negotiateRequest);n(i).triggerHandler(u.onError,e);y.reject(e);i.stop()},n(a).triggerHandler(u.onStarting),k=r.transports._logic.prepareQueryString(a,k),a.log("Negotiating with '"+k+"'."),a._.negotiateRequest=r.transports._logic.ajax(a,{url:k,error:function(n,t){t!==c?g(n,a):y.reject(r._.error(f.stoppedWhileNegotiating,null,a._.negotiateRequest))},success:function(t){var i,e,h,o=[],s=[];try{i=a._parseResponse(t)}catch(c){g(r._.error(f.errorParsingNegotiateResponse,c),a);return}if(e=a._.keepAliveData,a.appRelativeUrl=i.Url,a.id=i.ConnectionId,a.token=i.ConnectionToken,a.webSocketServerUrl=i.WebSocketServerUrl,a._.pollTimeout=i.ConnectionTimeout*1e3+1e4,a.disconnectTimeout=i.DisconnectTimeout*1e3,a._.totalTransportConnectTimeout=a.transportConnectTimeout+i.TransportConnectTimeout*1e3,i.KeepAliveTimeout?(e.activated=!0,e.timeout=i.KeepAliveTimeout*1e3,e.timeoutWarning=e.timeout*a.keepAliveWarnAt,a._.beatInterval=(e.timeout-e.timeoutWarning)/3):e.activated=!1,a.reconnectWindow=a.disconnectTimeout+(e.timeout||0),!i.ProtocolVersion||i.ProtocolVersion!==a.clientProtocol){h=r._.error(r._.format(f.protocolIncompatible,a.clientProtocol,i.ProtocolVersion));n(a).triggerHandler(u.onError,[h]);y.reject(h);return}n.each(r.transports,function(n){if(n.indexOf("_")===0||n==="webSockets"&&!i.TryWebSockets)return!0;s.push(n)});n.isArray(v.transport)?n.each(v.transport,function(t,i){n.inArray(i,s)>=0&&o.push(i)}):v.transport==="auto"?o=s:n.inArray(v.transport,s)>=0&&o.push(v.transport);d(o)}}),y.promise())},starting:function(t){var i=this;return n(i).bind(u.onStarting,function(){t.call(i)}),i},send:function(n){var t=this;if(t.state===r.connectionState.disconnected)throw new Error("SignalR: Connection must be started before data can be sent. Call .start() before .send()");if(t.state===r.connectionState.connecting)throw new Error("SignalR: Connection has not been fully initialized. Use .start().done() or .start().fail() to run logic after the connection has started.");return t.transport.send(t,n),t},received:function(t){var i=this;return n(i).bind(u.onReceived,function(n,r){t.call(i,r)}),i},stateChanged:function(t){var i=this;return n(i).bind(u.onStateChanged,function(n,r){t.call(i,r)}),i},error:function(t){var i=this;return n(i).bind(u.onError,function(n,r,u){i.lastError=r;t.call(i,r,u)}),i},disconnected:function(t){var i=this;return n(i).bind(u.onDisconnect,function(){t.call(i)}),i},connectionSlow:function(t){var i=this;return n(i).bind(u.onConnectionSlow,function(){t.call(i)}),i},reconnecting:function(t){var i=this;return n(i).bind(u.onReconnecting,function(){t.call(i)}),i},reconnected:function(t){var i=this;return n(i).bind(u.onReconnect,function(){t.call(i)}),i},stop:function(i,h){var a=this,v=a._deferral;if(a._.deferredStartHandler&&e.unbind("load",a._.deferredStartHandler),delete a._.config,delete a._.deferredStartHandler,!o&&(!a._.config||a._.config.waitForPageLoad===!0)){a.log("Stopping connection prior to negotiate.");v&&v.reject(r._.error(f.stoppedWhileLoading));return}if(a.state!==r.connectionState.disconnected)return a.log("Stopping connection."),t.clearTimeout(a._.beatHandle),t.clearInterval(a._.pingIntervalId),a.transport&&(a.transport.stop(a),h!==!1&&a.transport.abort(a,i),l(a)&&r.transports._logic.stopMonitoringKeepAlive(a),a.transport=null),a._.negotiateRequest&&(a._.negotiateRequest.abort(c),delete a._.negotiateRequest),a._.initHandler&&a._.initHandler.stop(),delete a._deferral,delete a.messageId,delete a.groupsToken,delete a.id,delete a._.pingIntervalId,delete a._.lastMessageAt,delete a._.lastActiveAt,a._.connectingMessageBuffer.clear(),s(a,a.state,r.connectionState.disconnected),n(a).triggerHandler(u.onDisconnect),a},log:function(n){v(n,this.logging)}};r.fn.init.prototype=r.fn;r.noConflict=function(){return n.connection===r&&(n.connection=h),r};n.connection&&(h=n.connection);n.connection=n.signalR=r})(window.jQuery,window),function(n,t,i){function s(n){n._.keepAliveData.monitoring&&l(n);u.markActive(n)&&(n._.beatHandle=t.setTimeout(function(){s(n)},n._.beatInterval))}function l(t){var i=t._.keepAliveData,u;t.state===r.connectionState.connected&&(u=(new Date).getTime()-t._.lastMessageAt,u>=i.timeout?(t.log("Keep alive timed out.  Notifying transport that connection has been lost."),t.transport.lostConnection(t)):u>=i.timeoutWarning?i.userNotified||(t.log("Keep alive has been missed, connection may be dead/slow."),n(t).triggerHandler(f.onConnectionSlow),i.userNotified=!0):i.userNotified=!1)}function e(n,t){var i=n.url+t;return n.transport&&(i+="?transport="+n.transport.name),u.prepareQueryString(n,i)}function h(n){this.connection=n;this.startRequested=!1;this.startCompleted=!1;this.connectionStopped=!1}var r=n.signalR,f=n.signalR.events,c=n.signalR.changeState,o="__Start Aborted__",u;r.transports={};h.prototype={start:function(n,r,u){var f=this,e=f.connection,o=!1;if(f.startRequested||f.connectionStopped){e.log("WARNING! "+n.name+" transport cannot be started. Initialization ongoing or completed.");return}e.log(n.name+" transport starting.");n.start(e,function(){o||f.initReceived(n,r)},function(t){return o||(o=!0,f.transportFailed(n,t,u)),!f.startCompleted||f.connectionStopped});f.transportTimeoutHandle=t.setTimeout(function(){o||(o=!0,e.log(n.name+" transport timed out when trying to connect."),f.transportFailed(n,i,u))},e._.totalTransportConnectTimeout)},stop:function(){this.connectionStopped=!0;t.clearTimeout(this.transportTimeoutHandle);r.transports._logic.tryAbortStartRequest(this.connection)},initReceived:function(n,i){var u=this,f=u.connection;if(u.startRequested){f.log("WARNING! The client received multiple init messages.");return}u.connectionStopped||(u.startRequested=!0,t.clearTimeout(u.transportTimeoutHandle),f.log(n.name+" transport connected. Initiating start request."),r.transports._logic.ajaxStart(f,function(){u.startCompleted=!0;i()}))},transportFailed:function(i,u,e){var o=this.connection,h=o._deferral,s;this.connectionStopped||(t.clearTimeout(this.transportTimeoutHandle),this.startRequested?this.startCompleted||(s=r._.error(r.resources.errorDuringStartRequest,u),o.log(i.name+" transport failed during the start request. Stopping the connection."),n(o).triggerHandler(f.onError,[s]),h&&h.reject(s),o.stop()):(i.stop(o),o.log(i.name+" transport failed to connect. Attempting to fall back."),e()))}};u=r.transports._logic={ajax:function(t,i){return n.ajax(n.extend(!0,{},n.signalR.ajaxDefaults,{type:"GET",data:{},xhrFields:{withCredentials:t.withCredentials},contentType:t.contentType,dataType:t.ajaxDataType},i))},pingServer:function(t){var e,f,i=n.Deferred();return t.transport?(e=t.url+"/ping",e=u.addQs(e,t.qs),f=u.ajax(t,{url:e,success:function(n){var u;try{u=t._parseResponse(n)}catch(e){i.reject(r._.transportError(r.resources.pingServerFailedParse,t.transport,e,f));t.stop();return}u.Response==="pong"?i.resolve():i.reject(r._.transportError(r._.format(r.resources.pingServerFailedInvalidResponse,n),t.transport,null,f))},error:function(n){n.status===401||n.status===403?(i.reject(r._.transportError(r._.format(r.resources.pingServerFailedStatusCode,n.status),t.transport,n,f)),t.stop()):i.reject(r._.transportError(r.resources.pingServerFailed,t.transport,n,f))}})):i.reject(r._.transportError(r.resources.noConnectionTransport,t.transport)),i.promise()},prepareQueryString:function(n,i){var r;return r=u.addQs(i,"clientProtocol="+n.clientProtocol),r=u.addQs(r,n.qs),n.token&&(r+="&connectionToken="+t.encodeURIComponent(n.token)),n.data&&(r+="&connectionData="+t.encodeURIComponent(n.data)),r},addQs:function(t,i){var r=t.indexOf("?")!==-1?"&":"?",u;if(!i)return t;if(typeof i=="object")return t+r+n.param(i);if(typeof i=="string")return u=i.charAt(0),(u==="?"||u==="&")&&(r=""),t+r+i;throw new Error("Query string property must be either a string or object.");},getUrl:function(n,i,r,f,e){var h=i==="webSockets"?"":n.baseUrl,o=h+n.appRelativeUrl,s="transport="+i;return!e&&n.groupsToken&&(s+="&groupsToken="+t.encodeURIComponent(n.groupsToken)),r?(o+=f?"/poll":"/reconnect",!e&&n.messageId&&(s+="&messageId="+t.encodeURIComponent(n.messageId))):o+="/connect",o+="?"+s,o=u.prepareQueryString(n,o),e||(o+="&tid="+Math.floor(Math.random()*11)),o},maximizePersistentResponse:function(n){return{MessageId:n.C,Messages:n.M,Initialized:typeof n.S!="undefined"?!0:!1,ShouldReconnect:typeof n.T!="undefined"?!0:!1,LongPollDelay:n.L,GroupsToken:n.G}},updateGroups:function(n,t){t&&(n.groupsToken=t)},stringifySend:function(n,t){return typeof t=="string"||typeof t=="undefined"||t===null?t:n.json.stringify(t)},ajaxSend:function(t,i){var h=u.stringifySend(t,i),c=e(t,"/send"),o,s=function(t,u){n(u).triggerHandler(f.onError,[r._.transportError(r.resources.sendFailed,u.transport,t,o),i])};return o=u.ajax(t,{url:c,type:t.ajaxDataType==="jsonp"?"GET":"POST",contentType:r._.defaultContentType,data:{data:h},success:function(n){var i;if(n){try{i=t._parseResponse(n)}catch(r){s(r,t);t.stop();return}u.triggerReceived(t,i)}},error:function(n,i){i!=="abort"&&i!=="parsererror"&&s(n,t)}})},ajaxAbort:function(n,t){if(typeof n.transport!="undefined"){t=typeof t=="undefined"?!0:t;var i=e(n,"/abort");u.ajax(n,{url:i,async:t,timeout:1e3,type:"POST"});n.log("Fired ajax abort async = "+t+".")}},ajaxStart:function(t,i){var h=function(n){var i=t._deferral;i&&i.reject(n)},s=function(i){t.log("The start request failed. Stopping the connection.");n(t).triggerHandler(f.onError,[i]);h(i);t.stop()};t._.startRequest=u.ajax(t,{url:e(t,"/start"),success:function(n,u,f){var e;try{e=t._parseResponse(n)}catch(o){s(r._.error(r._.format(r.resources.errorParsingStartResponse,n),o,f));return}e.Response==="started"?i():s(r._.error(r._.format(r.resources.invalidStartResponse,n),null,f))},error:function(n,i,u){i!==o?s(r._.error(r.resources.errorDuringStartRequest,u,n)):(t.log("The start request aborted because connection.stop() was called."),h(r._.error(r.resources.stoppedDuringStartRequest,null,n)))}})},tryAbortStartRequest:function(n){n._.startRequest&&(n._.startRequest.abort(o),delete n._.startRequest)},tryInitialize:function(n,t,i){t.Initialized&&i?i():t.Initialized&&n.log("WARNING! The client received an init message after reconnecting.")},triggerReceived:function(t,i){t._.connectingMessageBuffer.tryBuffer(i)||n(t).triggerHandler(f.onReceived,[i])},processMessages:function(t,i,r){var f;u.markLastMessage(t);i&&(f=u.maximizePersistentResponse(i),u.updateGroups(t,f.GroupsToken),f.MessageId&&(t.messageId=f.MessageId),f.Messages&&(n.each(f.Messages,function(n,i){u.triggerReceived(t,i)}),u.tryInitialize(t,f,r)))},monitorKeepAlive:function(t){var i=t._.keepAliveData;i.monitoring?t.log("Tried to monitor keep alive but it's already being monitored."):(i.monitoring=!0,u.markLastMessage(t),t._.keepAliveData.reconnectKeepAliveUpdate=function(){u.markLastMessage(t)},n(t).bind(f.onReconnect,t._.keepAliveData.reconnectKeepAliveUpdate),t.log("Now monitoring keep alive with a warning timeout of "+i.timeoutWarning+", keep alive timeout of "+i.timeout+" and disconnecting timeout of "+t.disconnectTimeout))},stopMonitoringKeepAlive:function(t){var i=t._.keepAliveData;i.monitoring&&(i.monitoring=!1,n(t).unbind(f.onReconnect,t._.keepAliveData.reconnectKeepAliveUpdate),t._.keepAliveData={},t.log("Stopping the monitoring of the keep alive."))},startHeartbeat:function(n){n._.lastActiveAt=(new Date).getTime();s(n)},markLastMessage:function(n){n._.lastMessageAt=(new Date).getTime()},markActive:function(n){return u.verifyLastActive(n)?(n._.lastActiveAt=(new Date).getTime(),!0):!1},isConnectedOrReconnecting:function(n){return n.state===r.connectionState.connected||n.state===r.connectionState.reconnecting},ensureReconnectingState:function(t){return c(t,r.connectionState.connected,r.connectionState.reconnecting)===!0&&n(t).triggerHandler(f.onReconnecting),t.state===r.connectionState.reconnecting},clearReconnectTimeout:function(n){n&&n._.reconnectTimeout&&(t.clearTimeout(n._.reconnectTimeout),delete n._.reconnectTimeout)},verifyLastActive:function(t){if((new Date).getTime()-t._.lastActiveAt>=t.reconnectWindow){var i=r._.format(r.resources.reconnectWindowTimeout,new Date(t._.lastActiveAt),t.reconnectWindow);return t.log(i),n(t).triggerHandler(f.onError,[r._.error(i,"TimeoutException")]),t.stop(!1,!1),!1}return!0},reconnect:function(n,i){var f=r.transports[i];if(u.isConnectedOrReconnecting(n)&&!n._.reconnectTimeout){if(!u.verifyLastActive(n))return;n._.reconnectTimeout=t.setTimeout(function(){u.verifyLastActive(n)&&(f.stop(n),u.ensureReconnectingState(n)&&(n.log(i+" reconnecting."),f.start(n)))},n.reconnectDelay)}},handleParseFailure:function(t,i,u,e,o){var s=r._.transportError(r._.format(r.resources.parseFailed,i),t.transport,u,o);e&&e(s)?t.log("Failed to parse server response while attempting to connect."):(n(t).triggerHandler(f.onError,[s]),t.stop())},initHandler:function(n){return new h(n)},foreverFrame:{count:0,connections:{}}}}(window.jQuery,window),function(n,t){var r=n.signalR,u=n.signalR.events,f=n.signalR.changeState,i=r.transports._logic;r.transports.webSockets={name:"webSockets",supportsKeepAlive:function(){return!0},send:function(t,f){var e=i.stringifySend(t,f);try{t.socket.send(e)}catch(o){n(t).triggerHandler(u.onError,[r._.transportError(r.resources.webSocketsInvalidState,t.transport,o,t.socket),f])}},start:function(e,o,s){var h,c=!1,l=this,a=!o,v=n(e);if(!t.WebSocket){s();return}e.socket||(h=e.webSocketServerUrl?e.webSocketServerUrl:e.wsProtocol+e.host,h+=i.getUrl(e,this.name,a),e.log("Connecting to websocket endpoint '"+h+"'."),e.socket=new t.WebSocket(h),e.socket.onopen=function(){c=!0;e.log("Websocket opened.");i.clearReconnectTimeout(e);f(e,r.connectionState.reconnecting,r.connectionState.connected)===!0&&v.triggerHandler(u.onReconnect)},e.socket.onclose=function(t){var i;this===e.socket&&(c&&typeof t.wasClean!="undefined"&&t.wasClean===!1?(i=r._.transportError(r.resources.webSocketClosed,e.transport,t),e.log("Unclean disconnect from websocket: "+(t.reason||"[no reason given]."))):e.log("Websocket closed."),s&&s(i)||(i&&n(e).triggerHandler(u.onError,[i]),l.reconnect(e)))},e.socket.onmessage=function(t){var r;try{r=e._parseResponse(t.data)}catch(u){i.handleParseFailure(e,t.data,u,s,t);return}r&&(n.isEmptyObject(r)||r.M?i.processMessages(e,r,o):i.triggerReceived(e,r))})},reconnect:function(n){i.reconnect(n,this.name)},lostConnection:function(n){this.reconnect(n)},stop:function(n){i.clearReconnectTimeout(n);n.socket&&(n.log("Closing the Websocket."),n.socket.close(),n.socket=null)},abort:function(n,t){i.ajaxAbort(n,t)}}}(window.jQuery,window),function(n,t){var i=n.signalR,u=n.signalR.events,e=n.signalR.changeState,r=i.transports._logic,f=function(n){t.clearTimeout(n._.reconnectAttemptTimeoutHandle);delete n._.reconnectAttemptTimeoutHandle};i.transports.serverSentEvents={name:"serverSentEvents",supportsKeepAlive:function(){return!0},timeOut:3e3,start:function(o,s,h){var c=this,l=!1,a=n(o),v=!s,y;if(o.eventSource&&(o.log("The connection already has an event source. Stopping it."),o.stop()),!t.EventSource){h&&(o.log("This browser doesn't support SSE."),h());return}y=r.getUrl(o,this.name,v);try{o.log("Attempting to connect to SSE endpoint '"+y+"'.");o.eventSource=new t.EventSource(y,{withCredentials:o.withCredentials})}catch(p){o.log("EventSource failed trying to connect with error "+p.Message+".");h?h():(a.triggerHandler(u.onError,[i._.transportError(i.resources.eventSourceFailedToConnect,o.transport,p)]),v&&c.reconnect(o));return}v&&(o._.reconnectAttemptTimeoutHandle=t.setTimeout(function(){l===!1&&o.eventSource.readyState!==t.EventSource.OPEN&&c.reconnect(o)},c.timeOut));o.eventSource.addEventListener("open",function(){o.log("EventSource connected.");f(o);r.clearReconnectTimeout(o);l===!1&&(l=!0,e(o,i.connectionState.reconnecting,i.connectionState.connected)===!0&&a.triggerHandler(u.onReconnect))},!1);o.eventSource.addEventListener("message",function(n){var t;if(n.data!=="initialized"){try{t=o._parseResponse(n.data)}catch(i){r.handleParseFailure(o,n.data,i,h,n);return}r.processMessages(o,t,s)}},!1);o.eventSource.addEventListener("error",function(n){var r=i._.transportError(i.resources.eventSourceError,o.transport,n);this===o.eventSource&&(h&&h(r)||(o.log("EventSource readyState: "+o.eventSource.readyState+"."),n.eventPhase===t.EventSource.CLOSED?(o.log("EventSource reconnecting due to the server connection ending."),c.reconnect(o)):(o.log("EventSource error."),a.triggerHandler(u.onError,[r]))))},!1)},reconnect:function(n){r.reconnect(n,this.name)},lostConnection:function(n){this.reconnect(n)},send:function(n,t){r.ajaxSend(n,t)},stop:function(n){f(n);r.clearReconnectTimeout(n);n&&n.eventSource&&(n.log("EventSource calling close()."),n.eventSource.close(),n.eventSource=null,delete n.eventSource)},abort:function(n,t){r.ajaxAbort(n,t)}}}(window.jQuery,window),function(n,t){var r=n.signalR,e=n.signalR.events,o=n.signalR.changeState,i=r.transports._logic,u=function(){var n=t.document.createElement("iframe");return n.setAttribute("style","position:absolute;top:0;left:0;width:0;height:0;visibility:hidden;"),n},f=function(){var i=null,f=1e3,n=0;return{prevent:function(){r._.ieVersion<=8&&(n===0&&(i=t.setInterval(function(){var n=u();t.document.body.appendChild(n);t.document.body.removeChild(n);n=null},f)),n++)},cancel:function(){n===1&&t.clearInterval(i);n>0&&n--}}}();r.transports.foreverFrame={name:"foreverFrame",supportsKeepAlive:function(){return!0},iframeClearThreshold:50,start:function(n,r,e){var l=this,s=i.foreverFrame.count+=1,h,o=u(),c=function(){n.log("Forever frame iframe finished loading and is no longer receiving messages.");e&&e()||l.reconnect(n)};if(t.EventSource){e&&(n.log("Forever Frame is not supported by SignalR on browsers with SSE support."),e());return}o.setAttribute("data-signalr-connection-id",n.id);f.prevent();h=i.getUrl(n,this.name);h+="&frameId="+s;t.document.documentElement.appendChild(o);n.log("Binding to iframe's load event.");o.addEventListener?o.addEventListener("load",c,!1):o.attachEvent&&o.attachEvent("onload",c);o.src=h;i.foreverFrame.connections[s]=n;n.frame=o;n.frameId=s;r&&(n.onSuccess=function(){n.log("Iframe transport started.");r()})},reconnect:function(n){var r=this;i.isConnectedOrReconnecting(n)&&i.verifyLastActive(n)&&t.setTimeout(function(){if(i.verifyLastActive(n)&&n.frame&&i.ensureReconnectingState(n)){var u=n.frame,t=i.getUrl(n,r.name,!0)+"&frameId="+n.frameId;n.log("Updating iframe src to '"+t+"'.");u.src=t}},n.reconnectDelay)},lostConnection:function(n){this.reconnect(n)},send:function(n,t){i.ajaxSend(n,t)},receive:function(t,u){var f,e,o;if(t.json!==t._originalJson&&(u=t._originalJson.stringify(u)),o=t._parseResponse(u),i.processMessages(t,o,t.onSuccess),t.state===n.signalR.connectionState.connected&&(t.frameMessageCount=(t.frameMessageCount||0)+1,t.frameMessageCount>r.transports.foreverFrame.iframeClearThreshold&&(t.frameMessageCount=0,f=t.frame.contentWindow||t.frame.contentDocument,f&&f.document&&f.document.body)))for(e=f.document.body;e.firstChild;)e.removeChild(e.firstChild)},stop:function(n){var r=null;if(f.cancel(),n.frame){if(n.frame.stop)n.frame.stop();else try{r=n.frame.contentWindow||n.frame.contentDocument;r.document&&r.document.execCommand&&r.document.execCommand("Stop")}catch(u){n.log("Error occurred when stopping foreverFrame transport. Message = "+u.message+".")}n.frame.parentNode===t.document.body&&t.document.body.removeChild(n.frame);delete i.foreverFrame.connections[n.frameId];n.frame=null;n.frameId=null;delete n.frame;delete n.frameId;delete n.onSuccess;delete n.frameMessageCount;n.log("Stopping forever frame.")}},abort:function(n,t){i.ajaxAbort(n,t)},getConnection:function(n){return i.foreverFrame.connections[n]},started:function(t){o(t,r.connectionState.reconnecting,r.connectionState.connected)===!0&&n(t).triggerHandler(e.onReconnect)}}}(window.jQuery,window),function(n,t){var r=n.signalR,u=n.signalR.events,e=n.signalR.changeState,f=n.signalR.isDisconnecting,i=r.transports._logic;r.transports.longPolling={name:"longPolling",supportsKeepAlive:function(){return!1},reconnectDelay:3e3,start:function(o,s,h){var a=this,v=function(){v=n.noop;o.log("LongPolling connected.");s?s():o.log("WARNING! The client received an init message after reconnecting.")},y=function(n){return h(n)?(o.log("LongPolling failed to connect."),!0):!1},c=o._,l=0,p=function(i){t.clearTimeout(c.reconnectTimeoutId);c.reconnectTimeoutId=null;e(i,r.connectionState.reconnecting,r.connectionState.connected)===!0&&(i.log("Raising the reconnect event"),n(i).triggerHandler(u.onReconnect))},w=36e5;o.pollXhr&&(o.log("Polling xhr requests already exists, aborting."),o.stop());o.messageId=null;c.reconnectTimeoutId=null;c.pollTimeoutId=t.setTimeout(function(){(function e(s,h){var g=s.messageId,nt=g===null,k=!nt,tt=!h,d=i.getUrl(s,a.name,k,tt,!0),b={};(s.messageId&&(b.messageId=s.messageId),s.groupsToken&&(b.groupsToken=s.groupsToken),f(s)!==!0)&&(o.log("Opening long polling request to '"+d+"'."),s.pollXhr=i.ajax(o,{xhrFields:{onprogress:function(){i.markLastMessage(o)}},url:d,type:"POST",contentType:r._.defaultContentType,data:b,timeout:o._.pollTimeout,success:function(r){var h,w=0,u,a;o.log("Long poll complete.");l=0;try{h=o._parseResponse(r)}catch(b){i.handleParseFailure(s,r,b,y,s.pollXhr);return}(c.reconnectTimeoutId!==null&&p(s),h&&(u=i.maximizePersistentResponse(h)),i.processMessages(s,h,v),u&&n.type(u.LongPollDelay)==="number"&&(w=u.LongPollDelay),f(s)!==!0)&&(a=u&&u.ShouldReconnect,!a||i.ensureReconnectingState(s))&&(w>0?c.pollTimeoutId=t.setTimeout(function(){e(s,a)},w):e(s,a))},error:function(f,h){var v=r._.transportError(r.resources.longPollFailed,o.transport,f,s.pollXhr);if(t.clearTimeout(c.reconnectTimeoutId),c.reconnectTimeoutId=null,h==="abort"){o.log("Aborted xhr request.");return}if(!y(v)){if(l++,o.state!==r.connectionState.reconnecting&&(o.log("An error occurred using longPolling. Status = "+h+".  Response = "+f.responseText+"."),n(s).triggerHandler(u.onError,[v])),(o.state===r.connectionState.connected||o.state===r.connectionState.reconnecting)&&!i.verifyLastActive(o))return;if(!i.ensureReconnectingState(s))return;c.pollTimeoutId=t.setTimeout(function(){e(s,!0)},a.reconnectDelay)}}}),k&&h===!0&&(c.reconnectTimeoutId=t.setTimeout(function(){p(s)},Math.min(1e3*(Math.pow(2,l)-1),w))))})(o)},250)},lostConnection:function(n){n.pollXhr&&n.pollXhr.abort("lostConnection")},send:function(n,t){i.ajaxSend(n,t)},stop:function(n){t.clearTimeout(n._.pollTimeoutId);t.clearTimeout(n._.reconnectTimeoutId);delete n._.pollTimeoutId;delete n._.reconnectTimeoutId;n.pollXhr&&(n.pollXhr.abort(),n.pollXhr=null,delete n.pollXhr)},abort:function(n,t){i.ajaxAbort(n,t)}}}(window.jQuery,window),function(n){function r(n){return n+e}function s(n,t,i){for(var f=n.length,u=[],r=0;r<f;r+=1)n.hasOwnProperty(r)&&(u[r]=t.call(i,n[r],r,n));return u}function h(t){return n.isFunction(t)?null:n.type(t)==="undefined"?null:t}function u(n){for(var t in n)if(n.hasOwnProperty(t))return!0;return!1}function f(n,t){var i=n._.invocationCallbacks,r,f;u(i)&&n.log("Clearing hub invocation callbacks with error: "+t+".");n._.invocationCallbackId=0;delete n._.invocationCallbacks;n._.invocationCallbacks={};for(f in i)r=i[f],r.method.call(r.scope,{E:t})}function i(n,t){return new i.fn.init(n,t)}function t(i,r){var u={qs:null,logging:!1,useDefaultPath:!0};return n.extend(u,r),(!i||u.useDefaultPath)&&(i=(i||"")+"/signalr"),new t.fn.init(i,u)}var e=".hubProxy",o=n.signalR;i.fn=i.prototype={init:function(n,t){this.state={};this.connection=n;this.hubName=t;this._={callbackMap:{}}},constructor:i,hasSubscriptions:function(){return u(this._.callbackMap)},on:function(t,i){var u=this,f=u._.callbackMap;return t=t.toLowerCase(),f[t]||(f[t]={}),f[t][i]=function(n,t){i.apply(u,t)},n(u).bind(r(t),f[t][i]),u},off:function(t,i){var e=this,o=e._.callbackMap,f;return t=t.toLowerCase(),f=o[t],f&&(f[i]?(n(e).unbind(r(t),f[i]),delete f[i],u(f)||delete o[t]):i||(n(e).unbind(r(t)),delete o[t])),e},invoke:function(t){var i=this,r=i.connection,e=n.makeArray(arguments).slice(1),c=s(e,h),f={H:i.hubName,M:t,A:c,I:r._.invocationCallbackId},u=n.Deferred(),l=function(f){var e=i._maximizeHubResponse(f),h,s;n.extend(i.state,e.State);e.Progress?u.notifyWith?u.notifyWith(i,[e.Progress.Data]):r._.progressjQueryVersionLogged||(r.log("A hub method invocation progress update was received but the version of jQuery in use ("+n.prototype.jquery+") does not support progress updates. Upgrade to jQuery 1.7+ to receive progress notifications."),r._.progressjQueryVersionLogged=!0):e.Error?(e.StackTrace&&r.log(e.Error+"\n"+e.StackTrace+"."),h=e.IsHubException?"HubException":"Exception",s=o._.error(e.Error,h),s.data=e.ErrorData,r.log(i.hubName+"."+t+" failed to execute. Error: "+s.message),u.rejectWith(i,[s])):(r.log("Invoked "+i.hubName+"."+t),u.resolveWith(i,[e.Result]))};return r._.invocationCallbacks[r._.invocationCallbackId.toString()]={scope:i,method:l},r._.invocationCallbackId+=1,n.isEmptyObject(i.state)||(f.S=i.state),r.log("Invoking "+i.hubName+"."+t),r.send(f),u.promise()},_maximizeHubResponse:function(n){return{State:n.S,Result:n.R,Progress:n.P?{Id:n.P.I,Data:n.P.D}:null,Id:n.I,IsHubException:n.H,Error:n.E,StackTrace:n.T,ErrorData:n.D}}};i.fn.init.prototype=i.fn;t.fn=t.prototype=n.connection();t.fn.init=function(t,i){var e={qs:null,logging:!1,useDefaultPath:!0},u=this;n.extend(e,i);n.signalR.fn.init.call(u,t,e.qs,e.logging);u.proxies={};u._.invocationCallbackId=0;u._.invocationCallbacks={};u.received(function(t){var f,o,e,i,s,h;t&&(typeof t.P!="undefined"?(e=t.P.I.toString(),i=u._.invocationCallbacks[e],i&&i.method.call(i.scope,t)):typeof t.I!="undefined"?(e=t.I.toString(),i=u._.invocationCallbacks[e],i&&(u._.invocationCallbacks[e]=null,delete u._.invocationCallbacks[e],i.method.call(i.scope,t))):(f=this._maximizeClientHubInvocation(t),u.log("Triggering client hub event '"+f.Method+"' on hub '"+f.Hub+"'."),s=f.Hub.toLowerCase(),h=f.Method.toLowerCase(),o=this.proxies[s],n.extend(o.state,f.State),n(o).triggerHandler(r(h),[f.Args])))});u.error(function(n,t){var i,r;t&&(i=t.I,r=u._.invocationCallbacks[i],r&&(u._.invocationCallbacks[i]=null,delete u._.invocationCallbacks[i],r.method.call(r.scope,{E:n})))});u.reconnecting(function(){u.transport&&u.transport.name==="webSockets"&&f(u,"Connection started reconnecting before invocation result was received.")});u.disconnected(function(){f(u,"Connection was disconnected before invocation result was received.")})};t.fn._maximizeClientHubInvocation=function(n){return{Hub:n.H,Method:n.M,Args:n.A,State:n.S}};t.fn._registerSubscribedHubs=function(){var t=this;t._subscribedToHubs||(t._subscribedToHubs=!0,t.starting(function(){var i=[];n.each(t.proxies,function(n){this.hasSubscriptions()&&(i.push({name:n}),t.log("Client subscribed to hub '"+n+"'."))});i.length===0&&t.log("No hubs have been subscribed to.  The client will not receive data from hubs.  To fix, declare at least one client side function prior to connection start for each hub you wish to subscribe to.");t.data=t.json.stringify(i)}))};t.fn.createHubProxy=function(n){n=n.toLowerCase();var t=this.proxies[n];return t||(t=i(this,n),this.proxies[n]=t),this._registerSubscribedHubs(),t};t.fn.init.prototype=t.fn;n.hubConnection=t}(window.jQuery,window),function(n){n.signalR.version="2.2.1"}(window.jQuery);
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["editMask"] = factory();
	else
		root["editMask"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 77);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var padEnd_1 = __webpack_require__(6);
var padStart_1 = __webpack_require__(34);
var DecimalPattern_1 = __webpack_require__(27);
var FixedWidthPattern = function (_super) {
    __extends(FixedWidthPattern, _super);
    function FixedWidthPattern(locale, template, name, options) {
        var _this = _super.call(this, locale, template, name, options) || this;
        _this.width = options.width;
        return _this;
    }
    FixedWidthPattern.prototype.getIsComplete = function () {
        return this.getIsValid();
    };
    FixedWidthPattern.prototype.getIsValid = function () {
        var text = this.getText();
        var digits = text.replace(/[^\d]/g, '');
        var value = parseInt(digits, 10);
        return value >= this.min && digits.length === this.width;
    };
    FixedWidthPattern.prototype.updateText = function () {
        var text = this.text || '';
        var digits = text.replace(/[^\d]/g, '');
        if (this.getIsEmpty()) {
            text = padEnd_1.padEnd(digits, this.width, this.getBlank());
        } else {
            text = this.isActive ? padEnd_1.padEnd(digits, this.width, this.getBlank()) : this.formatDecimal(digits);
        }
        this.setText(text);
    };
    FixedWidthPattern.prototype.getInputRegexp = function () {
        return new RegExp('^[\\d]{1,' + this.width + '}');
    };
    FixedWidthPattern.prototype.finalizeInput = function () {
        var finalize = false;
        if (this.getIsComplete()) {
            var text = this.getText();
            var digits = text.replace(/[^\d]/g, '');
            if (digits.length < this.width) {
                this.setText(this.formatDecimal(digits));
                finalize = true;
            }
        }
        return finalize;
    };
    FixedWidthPattern.prototype.formatDecimal = function (value) {
        return padStart_1.padStart(value, this.width, '0');
    };
    return FixedWidthPattern;
}(DecimalPattern_1.DecimalPattern);
exports.FixedWidthPattern = FixedWidthPattern;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var Pattern_1 = __webpack_require__(3);
var TemplatePattern = function (_super) {
    __extends(TemplatePattern, _super);
    function TemplatePattern(locale, template, isRequired) {
        var _this = _super.call(this, locale, template) || this;
        _this.isRequired = false;
        _this.isRequired = isRequired;
        return _this;
    }
    TemplatePattern.prototype.getIsRequired = function () {
        return this.isRequired;
    };
    TemplatePattern.prototype.getIsComplete = function () {
        return !this.getIsEmpty();
    };
    TemplatePattern.prototype.getIsEmpty = function () {
        var isEmpty;
        var text = this.text;
        if (text === null || typeof text === 'undefined' || text === '' || text.length === 0) {
            isEmpty = true;
        } else {
            isEmpty = this.cleanBlank(text).length === 0;
        }
        return isEmpty;
    };
    TemplatePattern.prototype.cleanBlank = function (text) {
        return _super.prototype.cleanBlank.call(this, text).replace(/\s/g, '');
    };
    TemplatePattern.prototype.updateText = function () {
        var text;
        if (this.getIsEmpty()) {
            text = this.getBlank();
        } else {
            text = this.cleanBlank(this.text).substr(0, 1);
        }
        this.setText(text);
    };
    TemplatePattern.prototype.setInput = function (input, cb) {
        var applyText = null;
        input = this.trimBlank(input);
        var test = input.substr(0, 1);
        if (this.validateInput(test)) {
            this.setText(test);
            applyText = test;
            input = input.substr(test.length);
        } else if (!this.getIsRequired() || test.length === 0) {
            applyText = '';
            this.setText(applyText);
        } else {}
        if (cb) {
            cb(input, applyText);
        }
        return input;
    };
    TemplatePattern.prototype.applyValue = function (value) {
        var char = value;
        var blank = this.getBlank();
        if (char === blank) {
            this.setText('');
        } else if (this.validateInput(char)) {
            this.setText(char);
        } else {}
    };
    TemplatePattern.prototype.getIsValid = function () {
        return !this.getIsRequired() || !this.getIsEmpty();
    };
    return TemplatePattern;
}(Pattern_1.Pattern);
exports.TemplatePattern = TemplatePattern;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var DecimalPattern_1 = __webpack_require__(27);
var padEnd_1 = __webpack_require__(6);
var FloatWidthPattern = function (_super) {
    __extends(FloatWidthPattern, _super);
    function FloatWidthPattern(locale, template, name, options) {
        var _this = _super.call(this, locale, template, name, options) || this;
        _this.minWidth = options.minWidth;
        _this.maxWidth = options.maxWidth;
        return _this;
    }
    FloatWidthPattern.prototype.updateText = function () {
        var text = this.text || '';
        var digits = text.replace(/[^\d]/g, '');
        if (this.getIsEmpty()) {
            text = padEnd_1.padEnd('', this.minWidth, this.getBlank());
        } else if (this.isActive) {
            text = padEnd_1.padEnd(digits, this.minWidth, this.getBlank());
        } else {
            text = padEnd_1.padEnd(digits.replace(/^0+/, '0'), this.minWidth, this.getBlank());
        }
        this.setText(text);
    };
    FloatWidthPattern.prototype.getInputRegexp = function () {
        return (/^\d+/
        );
    };
    return FloatWidthPattern;
}(DecimalPattern_1.DecimalPattern);
exports.FloatWidthPattern = FloatWidthPattern;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var BLANK_CHAR = '_';
var Pattern = function () {
    function Pattern(locale, template, name) {
        this.locale = locale;
        this.template = template;
        this.name = name;
        this.isActive = false;
        this.isEditable = true;
        this.blank = BLANK_CHAR;
    }
    Pattern.prototype.setBlank = function (blank) {
        this.blank = blank || BLANK_CHAR;
    };
    Pattern.prototype.getBlank = function () {
        return this.blank;
    };
    Pattern.prototype.getName = function () {
        return this.name;
    };
    Pattern.prototype.canActivate = function () {
        return true;
    };
    Pattern.prototype.setIsActive = function (isActive) {
        if (!this.canActivate()) {
            isActive = false;
        }
        this.isActive = isActive;
    };
    Pattern.prototype.getNextInput = function () {
        return this.getText();
    };
    Pattern.prototype.getPrevInput = function () {
        return this.getText();
    };
    Pattern.prototype.getText = function () {
        if (this.text === null || typeof this.text === 'undefined') {
            this.updateText();
        }
        return this.text;
    };
    Pattern.prototype.canInputChar = function (char) {
        return true;
    };
    Pattern.prototype.setText = function (text) {
        var changed = this.isEqualText(text, this.text);
        this.text = text;
        return changed;
    };
    Pattern.prototype.isEqualText = function (text1, text2) {
        return text1 === text2;
    };
    Pattern.prototype.trimBlankLeft = function (text) {
        var blank = this.getBlank();
        while (text.indexOf(blank) === 0) {
            text = text.substring(blank.length);
        }
        return text;
    };
    Pattern.prototype.trimBlankRight = function (text) {
        var blank = this.getBlank();
        while (text.lastIndexOf(blank) === text.length - 1) {
            text = text.substring(0, blank.length - 1);
        }
        return text;
    };
    Pattern.prototype.cleanBlank = function (text) {
        var blank = this.getBlank();
        while (text.indexOf(blank) !== -1) {
            text = text.replace(blank, '');
        }
        return text;
    };
    Pattern.prototype.trimBlank = function (text) {
        var blank = this.getBlank();
        while (text.substr(0, 1) === blank) {
            text = text.substr(1);
        }
        while (text.substr(text.length - 1) === blank) {
            text = text.substr(0, text.length - 1);
        }
        return text;
    };
    Pattern.prototype.finalizeInput = function () {
        return false;
    };
    Pattern.prototype.getValue = function () {
        return void 0;
    };
    return Pattern;
}();
exports.Pattern = Pattern;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function isCompleteHours(text) {
    var digits = text.replace(/[^\d]/g, '');
    var hours = parseInt(digits, 10);
    return hours > 2;
}
exports.isCompleteHours = isCompleteHours;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var padStart_1 = __webpack_require__(34);
var padEnd_1 = __webpack_require__(6);
var isEmpty_1 = __webpack_require__(17);
var NumberFormatter = function () {
    function NumberFormatter(locale) {
        this.locale = locale;
    }
    NumberFormatter.prototype.getDecimalSeparator = function () {
        return this.locale.numberDecimalSeparator;
    };
    NumberFormatter.prototype.getNegativePattern = function () {
        return this.locale.numberNegativePattern;
    };
    NumberFormatter.prototype.getPositivePattern = function () {
        return this.locale.numberPositivePattern;
    };
    NumberFormatter.prototype.getGroupSeparator = function () {
        return this.locale.numberGroupSeparator;
    };
    NumberFormatter.prototype.getGroupSize = function () {
        return this.locale.numberGroupSize;
    };
    NumberFormatter.prototype.formatEmpty = function (options) {
        var blank = options.blank;
        var formattedParts = [padStart_1.padStart('', 1, blank)];
        if (options.decimalDigits > 0) {
            formattedParts.push(padStart_1.padStart('', options.decimalDigits, blank));
        }
        var formattedText = formattedParts.join(this.getDecimalSeparator());
        return this.wrapSignPattern(formattedText, options);
    };
    NumberFormatter.prototype.format = function (text, options) {
        var formattedParts = [];
        var _a = this.splitNumberByParts(text),
            integral = _a.integral,
            fractional = _a.fractional;
        formattedParts.push(this.formatGroup(integral));
        if (options.decimalDigits > 0) {
            fractional = padEnd_1.padEnd(fractional || '', options.decimalDigits, '0');
            formattedParts.push(fractional.substr(0, options.decimalDigits));
        }
        var formattedText = formattedParts.join(this.getDecimalSeparator());
        return this.wrapSignPattern(formattedText, options);
    };
    NumberFormatter.prototype.formatValue = function (value, options) {
        if (isEmpty_1.isEmpty(value)) {
            return this.formatEmpty(options);
        } else {
            var text = value.toString(10).split('.').join(this.getDecimalSeparator());
            return this.format(text, options);
        }
    };
    NumberFormatter.prototype.formatInput = function (input, options) {
        var formattedParts = [];
        var _a = this.splitNumberByParts(input),
            integral = _a.integral,
            fractional = _a.fractional;
        var decimalDigits = options.decimalDigits;
        if (integral.length > 0) {
            formattedParts.push(this.formatGroup(integral));
        } else {
            formattedParts.push(padStart_1.padStart('', 1, options.blank));
        }
        if (options.decimalDigits > 0) {
            fractional = fractional || '';
            formattedParts.push(padEnd_1.padEnd(fractional.substr(0, decimalDigits), decimalDigits, options.blank));
        }
        var formattedText = formattedParts.join(this.getDecimalSeparator());
        return this.wrapSignPattern(formattedText, options);
    };
    NumberFormatter.prototype.getPattern = function (isNegative) {
        return isNegative ? this.getNegativePattern() : this.getPositivePattern();
    };
    NumberFormatter.prototype.getWrapper = function (options) {
        var pattern = this.getPattern(options.isNegative);
        return pattern.split(/n/i);
    };
    NumberFormatter.prototype.wrapSignPattern = function (text, options) {
        var wrapper = this.getWrapper(options);
        return wrapper.join(text);
    };
    NumberFormatter.prototype.splitNumberByParts = function (text) {
        var _a = text.split(this.getDecimalSeparator()).map(function (t) {
            return t.replace(/[^\d]/g, '');
        }),
            integral = _a[0],
            fractional = _a[1];
        return { integral: integral, fractional: fractional };
    };
    NumberFormatter.prototype.formatGroup = function (text) {
        var groups = [];
        var groupSize = this.getGroupSize();
        var groupSeparator = this.getGroupSeparator();
        for (var t = text; t.length > 0; t = t.substr(0, t.length - groupSize)) {
            groups.push(t.substr(-groupSize));
        }
        return groups.reverse().join(groupSeparator);
    };
    return NumberFormatter;
}();
exports.NumberFormatter = NumberFormatter;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function padEnd(text, length, pad) {
    pad = pad || ' ';
    if (text.length > length) {
        return text;
    } else {
        length = length - text.length;
        if (length > pad.length) {
            pad += pad.repeat(length / pad.length);
        }
        return text + pad.slice(0, length);
    }
}
exports.padEnd = padEnd;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Editor = function () {
    function Editor(el, mask) {
        this.el = el;
        this.mask = mask;
        this.subscribeToElementEvents();
        this.updateInputElement();
    }
    Editor.prototype.getValue = function () {
        return this.mask.getValue();
    };
    Editor.prototype.setValue = function (value) {
        this.mask.setValue(value);
        this.updateInputElement();
    };
    Editor.prototype.onChangeValue = function (handler) {
        this.mask.onChangeValue(handler);
    };
    Editor.prototype.onInvalidValue = function (handler) {
        this.mask.onInvalidValue(handler);
    };
    Editor.prototype.setCursorPosition = function (start, end) {
        var _this = this;
        end = end || start;
        this.el.setSelectionRange(start, end);
        setTimeout(function () {
            if (_this.el) {
                _this.el.setSelectionRange(start, end);
            }
        }, 4);
    };
    Editor.prototype.selectAll = function () {
        this.el.setSelectionRange(0, this.el.value.length);
    };
    Editor.prototype.subscribeToElementEvents = function () {
        this.el.addEventListener('keydown', this);
        this.el.addEventListener('input', this);
        this.el.addEventListener('focus', this);
        this.el.addEventListener('blur', this);
    };
    Editor.prototype.unsubscribeToElementEvents = function () {
        this.el.removeEventListener('keydown', this);
        this.el.removeEventListener('input', this);
        this.el.removeEventListener('focus', this);
        this.el.removeEventListener('blur', this);
    };
    Editor.prototype.destroy = function () {
        this.unsubscribeToElementEvents();
        this.mask.dispose();
        this.mask = null;
        this.el = null;
    };
    Editor.prototype.handleEvent = function (event) {
        switch (event.type) {
            case 'keydown':
                this.onKeydownHandler(event);
                break;
            case 'input':
                this.onInputHandler();
                break;
            case 'focus':
                this.onFocusHandler();
                break;
            case 'blur':
                this.onBlurHandler();
                break;
        }
    };
    Editor.prototype.onBlurHandler = function () {
        this.mask.updateDisplay();
        this.updateInputElement();
    };
    Editor.prototype.onFocusHandler = function () {
        if (this.mask.getIsEmpty()) {
            var position = this.el.selectionStart;
            var pos = this.mask.getInputPosition(position);
            this.updateInputElement(pos);
        }
    };
    Editor.prototype.onInputHandler = function () {
        var position = this.el.selectionStart;
        var text = this.el.value;
        var newPosition = this.mask.setInput(text, position);
        this.updateInputElement(newPosition);
    };
    Editor.prototype.onKeydownHandler = function (event) {
        if (event.altKey || event.ctrlKey || event.shiftKey) {
            return;
        }
        var position = this.el.selectionStart;
        var selection;
        switch (event.key) {
            case 'ArrowUp':
                event.preventDefault();
                selection = this.mask.setNextPatternValue(position);
                if (selection) {
                    this.updateInputElement(selection.start, selection.end);
                }
                break;
            case 'ArrowDown':
                event.preventDefault();
                selection = this.mask.setPrevPatternValue(position);
                if (selection) {
                    this.updateInputElement(selection.start, selection.end);
                }
                break;
        }
    };
    Editor.prototype.updateInputElement = function (start, end) {
        this.el.value = this.mask.getText();
        if (typeof start !== 'undefined' && start !== null) {
            end = end || start;
            if (this.mask.getInvalid()) {
                this.selectAll();
            } else {
                this.setCursorPosition(start, end);
            }
        } else if (this.mask.getInvalid()) {
            this.selectAll();
        }
    };
    return Editor;
}();
exports.Editor = Editor;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var Pattern_1 = __webpack_require__(3);
var BaseNumberPattern = function (_super) {
    __extends(BaseNumberPattern, _super);
    function BaseNumberPattern(locale, template, decimalDigits) {
        var _this = _super.call(this, locale, template, 'number') || this;
        _this.isNegative = false;
        _this.decimalDigits = decimalDigits;
        return _this;
    }
    BaseNumberPattern.prototype.setIsNegative = function (isNegative) {
        this.isNegative = isNegative;
    };
    BaseNumberPattern.prototype.getIsNegative = function () {
        return this.isNegative;
    };
    BaseNumberPattern.prototype.toggleSign = function () {
        this.isNegative = !this.isNegative;
    };
    BaseNumberPattern.prototype.getIsEmpty = function () {
        var isEmpty;
        if (this.text === null || typeof this.text === 'undefined') {
            isEmpty = true;
        } else {
            var digits = this.text.replace(/[^\d]/g, '');
            isEmpty = digits.length === 0;
        }
        return isEmpty;
    };
    BaseNumberPattern.prototype.getIsComplete = function () {
        return this.parser.isComplete(this.getText(), this.decimalDigits);
    };
    BaseNumberPattern.prototype.getIsValid = function () {
        return this.parser.isComplete(this.getText(), this.decimalDigits);
    };
    BaseNumberPattern.prototype.applyValue = function (value) {
        this.setIsNegative(value < 0);
        var text = '';
        if (value !== null && typeof value !== 'undefined') {
            if (isFinite(value) && !isNaN(value)) {
                value = Math.abs(value);
                text = this.formatter.formatValue(value, {
                    decimalDigits: this.decimalDigits,
                    isNegative: this.getIsNegative(),
                    blank: this.getBlank()
                });
            }
        }
        this.setText(text);
    };
    BaseNumberPattern.prototype.getNextInput = function () {
        var text = this.getText();
        var next;
        var result = this.parser.parse(text, {
            decimalDigits: this.decimalDigits,
            isNegative: this.getIsNegative()
        }, 0);
        var value = parseInt(result.integralPart.replace(/[^\d]/g, ''), 10);
        if (isFinite(value) && !isNaN(value)) {
            value++;
            next = value.toString(10) + result.separatorPart + result.fractionalPart;
        } else {
            next = '0' + result.separatorPart + result.fractionalPart;
        }
        return next;
    };
    BaseNumberPattern.prototype.getPrevInput = function () {
        var text = this.getText();
        var prev;
        var result = this.parser.parse(text, {
            decimalDigits: this.decimalDigits,
            isNegative: this.getIsNegative()
        }, 0);
        var value = parseInt(result.integralPart.replace(/[^\d]/g, ''), 10);
        if (isFinite(value) && !isNaN(value)) {
            value--;
            prev = value.toString(10) + result.separatorPart + result.fractionalPart;
        } else {
            prev = '0' + result.separatorPart + result.fractionalPart;
        }
        return prev;
    };
    BaseNumberPattern.prototype.updateText = function () {
        var text = this.text || '';
        var formattedText;
        var formatterOptions = {
            decimalDigits: this.decimalDigits,
            blank: this.getBlank(),
            isNegative: this.getIsNegative()
        };
        if (this.getIsEmpty()) {
            formattedText = this.formatter.formatEmpty(formatterOptions);
        } else if (this.isActive) {
            formattedText = this.formatter.formatInput(text, formatterOptions);
        } else {
            formattedText = this.formatter.format(text, formatterOptions);
        }
        this.setText(formattedText);
    };
    BaseNumberPattern.prototype.setInput = function (input, cb) {
        var applyText = null;
        var blank = this.getBlank();
        while (input.indexOf(blank) === 0) {
            input = input.substring(blank.length);
        }
        var result = this.parser.parse(input, {
            isNegative: this.getIsNegative(),
            decimalDigits: this.decimalDigits
        }, 0);
        if (result.input.length === 0) {
            applyText = '';
        } else {
            applyText = result.integralPart + result.separatorPart + result.fractionalPart;
        }
        if (applyText !== null) {
            this.setText(applyText);
        }
        if (cb) {
            cb(input, applyText);
        }
        return input;
    };
    BaseNumberPattern.prototype.getValue = function () {
        var text = this.getText();
        var result = this.parser.parse(text, {
            decimalDigits: this.decimalDigits,
            isNegative: this.getIsNegative()
        }, 0);
        var integralPart = result.integralPart.replace(/[^\d]/g, '');
        var fractionalPart = result.fractionalPart.replace(/[^\d]/g, '');
        var textValue = [integralPart, fractionalPart || '0'].join('.');
        var value = +textValue;
        if (isFinite(value) && !isNaN(value)) {
            if (this.getIsNegative()) {
                value = -value;
            }
        }
        return value;
    };
    return BaseNumberPattern;
}(Pattern_1.Pattern);
exports.BaseNumberPattern = BaseNumberPattern;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var StaticPattern_1 = __webpack_require__(29);
function buildStaticPattern(template, locale) {
    return new StaticPattern_1.StaticPattern(locale, template);
}
exports.buildStaticPattern = buildStaticPattern;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var PatternsList_1 = __webpack_require__(73);
var ValueModel_1 = __webpack_require__(76);
var restorePosition_1 = __webpack_require__(35);
var EventEmitter_1 = __webpack_require__(32);
var OutOfRangeEvent_1 = __webpack_require__(30);
var Mask = function () {
    function Mask(locale) {
        var _this = this;
        this.locale = locale;
        this.patterns = new PatternsList_1.PatternsList();
        this.invalid = false;
        this.value = new ValueModel_1.ValueModel();
        this.eventEmitter = new EventEmitter_1.EventEmitter();
        this.value.onChange(function (eventName, eventData) {
            return _this.onChangeValueHandler(eventData);
        });
    }
    Mask.prototype.setPatterns = function (list) {
        this.patterns.setList(list);
    };
    Mask.prototype.getInvalid = function () {
        return this.invalid;
    };
    Mask.prototype.getIsEmpty = function () {
        return this.patterns.getIsEmpty();
    };
    Mask.prototype.onChangeValue = function (handler) {
        return this.value.onChange(function (eventName, eventData) {
            return handler.call(null, eventData);
        });
    };
    Mask.prototype.onInvalidValue = function (cb) {
        return this.eventEmitter.on(OutOfRangeEvent_1.OutOfRangeEvent.eventName, cb);
    };
    Mask.prototype.onChangeValueHandler = function (eventData) {
        this.updateInvalid();
        if (typeof eventData.newValue === 'undefined') {
            return;
        }
        this.lastValue = eventData.newValue;
        if (eventData.params.update) {
            this.applyValue(eventData.newValue);
        }
    };
    Mask.prototype.applyValue = function (value) {
        this.patterns.getList().map(function (pattern, index) {
            return pattern.applyValue(value);
        });
        this.patterns.updateText();
    };
    Mask.prototype.getText = function () {
        return this.getInvalid() ? this.getInvalidText() : this.patterns.getText();
    };
    Mask.prototype.setNextPatternValue = function (position) {
        var res = this.patterns.setNextPatternValue(position);
        this.updateValue();
        return res;
    };
    Mask.prototype.setPrevPatternValue = function (position) {
        var res = this.patterns.setPrevPatternValue(position);
        this.updateValue();
        return res;
    };
    Mask.prototype.setInput = function (input, position) {
        var newPosition = this.patterns.setInput(input, position);
        var currentText = this.getText();
        this.patterns.updateText();
        var res = this.restorePosition(currentText, newPosition);
        this.updateValue();
        return res;
    };
    Mask.prototype.setValue = function (value) {
        this.value.setValue(value, { update: true });
    };
    Mask.prototype.getValue = function () {
        return this.value.getValue();
    };
    Mask.prototype.getInputPosition = function (position) {
        return this.patterns.getInputPosition(position);
    };
    Mask.prototype.handleKey = function (key, position) {
        return null;
    };
    Mask.prototype.restorePosition = function (text, position) {
        return restorePosition_1.restorePosition(text, this.getText(), position);
    };
    Mask.prototype.updateDisplay = function () {
        this.patterns.updateDisplay();
        return this;
    };
    Mask.prototype.updateValue = function () {
        var isValid = this.patterns.getIsValid();
        if (isValid) {
            var value = this.buildValue();
            if (this.validate(value)) {
                this.value.setValue(this.buildValue());
            }
        } else {
            this.value.setValue(void 0);
        }
    };
    Mask.prototype.updateInvalid = function () {};
    Mask.prototype.getInvalidText = function () {
        return 'Error';
    };
    Mask.prototype.setInvalid = function (invalid) {
        this.invalid = invalid;
    };
    Mask.prototype.validate = function (value) {
        return true;
    };
    Mask.prototype.dispose = function () {
        this.patterns.dispose();
        this.lastValue = null;
        this.value.dispose();
        this.eventEmitter.dispose();
    };
    return Mask;
}();
exports.Mask = Mask;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var MaskBuilder = function () {
    function MaskBuilder() {
        this.patternsBuilder = this.initPatternsBuilder();
    }
    MaskBuilder.prototype.build = function (template, locale) {
        var mask = this.createMask(locale);
        var patterns = this.patternsBuilder.build(template, locale);
        mask.setPatterns(patterns);
        return mask;
    };
    return MaskBuilder;
}();
exports.MaskBuilder = MaskBuilder;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var PatternsBuilder = function () {
    function PatternsBuilder(defaultPatternBuilder) {
        this.defaultPatternBuilder = defaultPatternBuilder;
        this.registeredPatterns = [];
    }
    PatternsBuilder.prototype.registerPattern = function (patternSelector, patternBuilder) {
        this.registeredPatterns.push({ patternSelector: patternSelector, patternBuilder: patternBuilder });
        return this;
    };
    PatternsBuilder.prototype.build = function (template, locale) {
        var _this = this;
        var patterns = [template];
        this.registeredPatterns.forEach(function (registered) {
            var i = 0;
            do {
                var test_1 = patterns[i];
                if (typeof test_1 === 'string' && test_1.length > 0) {
                    var info = registered.patternSelector.match(test_1);
                    if (info !== null) {
                        var parts = [test_1.substring(0, info.start), registered.patternBuilder(info.text, locale), test_1.substr(info.end)];
                        patterns.splice.apply(patterns, [i, 1].concat(parts));
                        i++;
                    }
                }
                i++;
            } while (i < patterns.length);
        });
        if (this.defaultPatternBuilder) {
            patterns.forEach(function (test, i) {
                if (typeof test === 'string' && test.length > 0) {
                    patterns[i] = _this.defaultPatternBuilder(test, locale);
                }
            });
        }
        patterns = patterns.filter(function (data) {
            return typeof data !== 'string';
        });
        return patterns;
    };
    return PatternsBuilder;
}();
exports.PatternsBuilder = PatternsBuilder;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var BaseNumberParser = function () {
    function BaseNumberParser(locale) {
        this.locale = locale;
    }
    BaseNumberParser.prototype.parse = function (text, options, start) {
        if (start === void 0) {
            start = 0;
        }
        var input = text.substr(start);
        return options.decimalDigits > 0 ? this.parseFloatNumber(input, options) : this.parseIntegerNumber(input, options);
    };
    BaseNumberParser.prototype.isComplete = function (text, decimalDigits) {
        var isComplete;
        var decimalSeparator = this.getDecimalSeparator();
        if (decimalDigits === 0) {
            var digits = text.replace(/[^\d]/g, '');
            isComplete = digits.length > 0;
        } else {
            var _a = text.split(decimalSeparator).map(function (t) {
                return t.replace(/[^\d]/g, '');
            }),
                int = _a[0],
                fract = _a[1];
            isComplete = int.length > 0 && fract.length > 0;
        }
        return isComplete;
    };
    BaseNumberParser.prototype.parseFloatNumber = function (text, options) {
        var result = {
            separatorPart: '',
            integralPart: '',
            fractionalPart: '',
            input: text
        };
        var parts = this.run(text, [this.integralPartParser, this.decimalSeparatorParser, this.fractionalPartParser], options);
        result.integralPart = parts[0];
        result.separatorPart = parts[1];
        result.fractionalPart = parts[2];
        result.input = parts.join('');
        return result;
    };
    BaseNumberParser.prototype.parseIntegerNumber = function (text, options) {
        var result = {
            integralPart: '',
            fractionalPart: '',
            input: text
        };
        var parts = this.run(text, [this.integralPartParser], options);
        result.integralPart = parts[0];
        result.input = parts.join('');
        return result;
    };
    BaseNumberParser.prototype.run = function (text, parsers, options) {
        var data = parsers.map(function (p) {
            return '';
        });
        for (var i = 0, index = 0; i < parsers.length; i = i + 1) {
            var result = parsers[i].parse(text, index, options);
            if (result === null) {
                break;
            }
            index = result.end;
            data[i] = result.text || '';
        }
        return data;
    };
    return BaseNumberParser;
}();
exports.BaseNumberParser = BaseNumberParser;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var DecimalSeparatorParser = function () {
    function DecimalSeparatorParser(decimalSeparator) {
        this.decimalSeparator = decimalSeparator;
    }
    DecimalSeparatorParser.prototype.parse = function (text, start, options) {
        var decimalSeparator = this.decimalSeparator;
        var result = null;
        if (text.indexOf(decimalSeparator, start) === start) {
            result = {
                text: decimalSeparator,
                start: start,
                end: start + decimalSeparator.length
            };
        }
        return result;
    };
    return DecimalSeparatorParser;
}();
exports.DecimalSeparatorParser = DecimalSeparatorParser;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var FractionalPartParser = function () {
    function FractionalPartParser() {}
    FractionalPartParser.prototype.parse = function (text, start, options) {
        var regexp = new RegExp('[\\d]{1,' + options.decimalDigits + '}');
        var result = null;
        var matches = text.substr(start).match(regexp);
        if (matches) {
            result = {
                text: matches[0],
                start: start + matches.index,
                end: start + matches.index + matches[0].length
            };
        }
        return result;
    };
    return FractionalPartParser;
}();
exports.FractionalPartParser = FractionalPartParser;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var IntegralPartParser = function () {
    function IntegralPartParser(groupSeparator, decimalSeparator) {
        this.groupSeparator = groupSeparator;
        this.decimalSeparator = decimalSeparator;
    }
    IntegralPartParser.prototype.parse = function (text, start, options) {
        var i = start;
        var rDigit = /\d/;
        var found = '';
        var groupSeparator = this.groupSeparator;
        while (i < text.length) {
            if (text.indexOf(groupSeparator, i) === i) {
                found += groupSeparator;
                i += groupSeparator.length;
            } else if (text[i].match(rDigit)) {
                found += text[i];
                i += 1;
            } else if (text.indexOf(this.decimalSeparator, i) === i) {
                break;
            } else {
                i++;
            }
        }
        return {
            text: found,
            start: i - found.length,
            end: i
        };
    };
    return IntegralPartParser;
}();
exports.IntegralPartParser = IntegralPartParser;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function isEmpty(value) {
    return typeof value === 'undefined' || value === null;
}
exports.isEmpty = isEmpty;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function getDay(value) {
    var text;
    if (value === null || typeof value === 'undefined') {
        text = '';
    } else {
        var day = new Date(value).getUTCDate();
        text = day.toString();
    }
    return text;
}
exports.getDay = getDay;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function getHours(value) {
    var text;
    if (value === null || typeof value === 'undefined') {
        text = '';
    } else {
        var hours = new Date(value).getUTCHours();
        text = hours.toString();
    }
    return text;
}
exports.getHours = getHours;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function getHours12(value) {
    var text;
    if (value === null || typeof value === 'undefined') {
        text = '';
    } else {
        var hours = new Date(value).getUTCHours();
        if (hours === 0) {
            text = '12';
        } else if (hours < 13) {
            text = hours.toString();
        } else {
            text = (hours - 12).toString();
        }
    }
    return text;
}
exports.getHours12 = getHours12;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function getMonth(value) {
    var text;
    if (value === null || typeof value === 'undefined') {
        text = '';
    } else {
        var month = new Date(value).getUTCMonth() + 1;
        text = month.toString();
    }
    return text;
}
exports.getMonth = getMonth;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function isCompleteDay(text) {
    var digits = text.replace(/[^\d]/g, '');
    var day = parseInt(digits, 10);
    return day > 3;
}
exports.isCompleteDay = isCompleteDay;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function isCompleteMinutes(text) {
    var digits = text.replace(/[^\d]/g, '');
    var minutes = parseInt(digits, 10);
    return minutes >= 6;
}
exports.isCompleteMinutes = isCompleteMinutes;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function isCompleteMonth(text) {
    var digits = text.replace(/[^\d]/g, '');
    var month = parseInt(digits, 10);
    return month >= 2;
}
exports.isCompleteMonth = isCompleteMonth;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function isCompleteSeconds(text) {
    var digits = text.replace(/[^\d]/g, '');
    var seconds = parseInt(digits, 10);
    return seconds >= 6;
}
exports.isCompleteSeconds = isCompleteSeconds;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseNumberPattern_1 = __webpack_require__(8);
var PercentParser_1 = __webpack_require__(85);
var PercentFormatter_1 = __webpack_require__(81);
var PercentPattern = function (_super) {
    __extends(PercentPattern, _super);
    function PercentPattern(locale, template, decimalDigits) {
        var _this = _super.call(this, locale, template, decimalDigits) || this;
        _this.parser = new PercentParser_1.PercentParser(locale);
        _this.formatter = new PercentFormatter_1.PercentFormatter(locale);
        return _this;
    }
    return PercentPattern;
}(BaseNumberPattern_1.BaseNumberPattern);
exports.PercentPattern = PercentPattern;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var Pattern_1 = __webpack_require__(3);
var DecimalPattern = function (_super) {
    __extends(DecimalPattern, _super);
    function DecimalPattern(locale, template, name, options) {
        var _this = _super.call(this, locale, template, name) || this;
        _this.min = options.min;
        _this.max = options.max;
        return _this;
    }
    DecimalPattern.prototype.getIsEmpty = function () {
        var isEmpty;
        if (this.text === null || typeof this.text === 'undefined') {
            isEmpty = true;
        } else {
            var digits = this.text.replace(/[^\d]/g, '');
            isEmpty = digits.length === 0;
        }
        return isEmpty;
    };
    DecimalPattern.prototype.getIsValid = function () {
        var text = this.getText();
        var digits = text.replace(/[^\d]/g, '');
        var month = parseInt(digits, 10);
        return month >= this.min && month <= this.max;
    };
    DecimalPattern.prototype.getNextInput = function () {
        var next;
        if (this.getIsEmpty()) {
            next = this.min.toString(10);
        } else {
            var text = this.getText();
            var data = parseInt(text.replace(/[^\d]/g, ''), 10);
            if (data < this.max) {
                next = '' + ++data;
            } else {
                next = text;
            }
        }
        return next;
    };
    DecimalPattern.prototype.getPrevInput = function () {
        var next;
        if (this.getIsEmpty()) {
            next = this.min.toString(10);
        } else {
            var text = this.getText();
            var data = parseInt(text.replace(/[^\d]/g, ''), 10);
            if (data > this.min) {
                next = '' + --data;
            } else {
                next = text;
            }
        }
        return next;
    };
    DecimalPattern.prototype.canInputChar = function (char) {
        return (/\d/.test(char)
        );
    };
    DecimalPattern.prototype.setInput = function (input, cb) {
        var _this = this;
        var applyText = null;
        input = this.trimBlankLeft(input);
        var matches = input.match(this.getInputRegexp());
        if (input.length === 0) {
            applyText = '';
        } else if (matches) {
            var digits = matches[0];
            var data = digits.split('').map(function (digit, i, digits) {
                return digits.slice(0, i + 1).join('');
            }).filter(function (month) {
                return parseInt(month, 10) <= _this.max;
            }).pop();
            if (data.length) {
                applyText = data;
                input = input.substring(matches.index + data.length);
            }
        }
        if (applyText !== null) {
            this.setText(applyText);
        }
        if (cb) {
            cb(input, applyText);
        }
        return input;
    };
    DecimalPattern.prototype.getValue = function () {
        var text = this.text || '';
        var digits = text.replace(/[^\d]/g, '');
        return digits.length === 0 ? null : parseInt(digits, 10);
    };
    return DecimalPattern;
}(Pattern_1.Pattern);
exports.DecimalPattern = DecimalPattern;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var Pattern_1 = __webpack_require__(3);
var padEnd_1 = __webpack_require__(6);
var ListPattern = function (_super) {
    __extends(ListPattern, _super);
    function ListPattern(locale, template, name, list) {
        var _this = _super.call(this, locale, template, name) || this;
        _this.list = list;
        _this.minWidth = list.map(function (t) {
            return t.length;
        }).sort()[0];
        return _this;
    }
    ListPattern.prototype.getIsEmpty = function () {
        var isEmpty;
        var text = this.text;
        if (text === null || typeof text === 'undefined') {
            isEmpty = true;
        } else {
            var blank = this.getBlank();
            while (text.indexOf(blank) !== -1) {
                text = text.replace(blank, '');
            }
            isEmpty = text.length === 0;
        }
        return isEmpty;
    };
    ListPattern.prototype.getNextInput = function () {
        var text = this.getText();
        var next = text;
        var i = this.list.map(function (t) {
            return t.toUpperCase();
        }).indexOf(text.toUpperCase());
        if (i === -1) {
            next = this.list[0];
        } else if (i + 1 < this.list.length) {
            next = this.list[i + 1];
        }
        return next;
    };
    ListPattern.prototype.getPrevInput = function () {
        var text = this.getText();
        var prev = text;
        var i = this.list.map(function (t) {
            return t.toUpperCase();
        }).indexOf(text.toUpperCase());
        if (i === -1) {
            prev = this.list[0];
        } else if (i - 1 >= 0) {
            prev = this.list[i - 1];
        }
        return prev;
    };
    ListPattern.prototype.getIsValid = function () {
        var text = this.getText().toUpperCase();
        return this.list.map(function (t) {
            return t.toUpperCase();
        }).some(function (t) {
            return t === text;
        });
    };
    ListPattern.prototype.getIsComplete = function () {
        return this.getIsValid();
    };
    ListPattern.prototype.updateText = function () {
        var text = this.text || '';
        var width = this.minWidth;
        if (!this.getIsEmpty()) {
            var txt_1 = text.toUpperCase();
            var longestText = this.list.map(function (t) {
                return t.toUpperCase();
            }).filter(function (t) {
                return t.indexOf(txt_1) !== -1;
            }).sort(function (a, b) {
                return a.length - b.length;
            }).pop();
            if (typeof longestText !== 'undefined') {
                width = longestText.length;
            }
        }
        text = padEnd_1.padEnd(text, width, this.getBlank());
        this.setText(text);
    };
    ListPattern.prototype.setInput = function (input, cb) {
        var applyText = null;
        if (input.length === 0) {
            applyText = '';
        } else {
            var list = this.list.map(function (t) {
                return t.toUpperCase();
            }).sort(function (a, b) {
                return a.length - b.length;
            });
            var width = Math.max.apply(Math, list.map(function (t) {
                return t.length;
            }));
            var inputs = [];
            var _loop_1 = function _loop_1(i) {
                var test_1 = input.substr(0, i);
                if (list.some(function (value) {
                    return value.substr(0, i) === test_1.toUpperCase();
                })) {
                    inputs.push(test_1);
                }
            };
            for (var i = 1; i <= Math.min(width, input.length); i = i + 1) {
                _loop_1(i);
            }
            var len = inputs.sort(function (a, b) {
                return a.length - b.length;
            }).map(function (a) {
                return a.length;
            }).pop();
            if (typeof len === 'undefined') {
                applyText = '';
            } else {
                applyText = input.substr(0, len);
                input = input.substr(len + 1);
            }
        }
        if (applyText !== null) {
            this.setText(applyText);
        }
        if (cb) {
            cb(input, applyText);
        }
        return input;
    };
    ListPattern.prototype.getValue = function () {
        var index = this.list.map(function (text) {
            return text.toUpperCase();
        }).indexOf(this.getText().toUpperCase());
        return index === -1 ? null : index;
    };
    ListPattern.prototype.finalizeInput = function () {
        var finalized = false;
        var text = this.getText().toUpperCase();
        var matched = this.list.filter(function (t) {
            return t.toUpperCase().indexOf(text) === 0;
        });
        if (matched.length === 1) {
            this.setText(matched[0]);
            finalized = true;
        }
        return finalized;
    };
    return ListPattern;
}(Pattern_1.Pattern);
exports.ListPattern = ListPattern;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var Pattern_1 = __webpack_require__(3);
var StaticPattern = function (_super) {
    __extends(StaticPattern, _super);
    function StaticPattern() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StaticPattern.prototype.getIsComplete = function () {
        return true;
    };
    StaticPattern.prototype.getIsValid = function () {
        return true;
    };
    StaticPattern.prototype.applyValue = function (value) {};
    StaticPattern.prototype.getIsEmpty = function () {
        return true;
    };
    StaticPattern.prototype.setInput = function (input, cb) {
        var text = this.getText();
        var applyText = '';
        var index = input.indexOf(text);
        if (index !== -1) {
            applyText = text;
            input = input.substring(0, index) + input.substring(index + text.length);
        }
        if (cb) {
            cb(input, applyText);
        }
        return input;
    };
    StaticPattern.prototype.updateText = function () {
        this.text = this.template;
    };
    StaticPattern.prototype.canActivate = function () {
        return false;
    };
    return StaticPattern;
}(Pattern_1.Pattern);
exports.StaticPattern = StaticPattern;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var OUT_OF_RANGE_EVENT = 'OutOfRangeEvent';
var OutOfRangeEvent = function () {
    function OutOfRangeEvent(value) {
        this.value = value;
    }
    return OutOfRangeEvent;
}();
OutOfRangeEvent.eventName = OUT_OF_RANGE_EVENT;
exports.OutOfRangeEvent = OutOfRangeEvent;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var StringSelector = function () {
    function StringSelector(text) {
        this.text = text;
    }
    StringSelector.prototype.match = function (text) {
        var match = null,
            start = text.indexOf(this.text);
        if (start !== -1) {
            match = {
                text: this.text,
                start: start,
                end: start + this.text.length
            };
        }
        return match;
    };
    return StringSelector;
}();
exports.StringSelector = StringSelector;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var EventEmitter = function () {
    function EventEmitter() {
        this.handlers = {};
    }
    EventEmitter.prototype.on = function (eventName, eventHandler) {
        var handlers = this.handlers[eventName];
        if (!handlers) {
            this.handlers[eventName] = handlers = [];
        }
        if (handlers.indexOf(eventHandler) === -1) {
            handlers.push(eventHandler);
        }
        return function () {
            var index = handlers.indexOf(eventHandler);
            if (index !== -1) {
                handlers.splice(index, 1);
            }
        };
    };
    EventEmitter.prototype.dispose = function () {
        var _this = this;
        Object.keys(this.handlers).forEach(function (name) {
            return delete _this.handlers[name];
        });
    };
    EventEmitter.prototype.emit = function (eventName, data) {
        var handlers = this.handlers[eventName];
        if (Array.isArray(handlers)) {
            handlers.forEach(function (handler) {
                return handler.call(null, eventName, data);
            });
        }
    };
    return EventEmitter;
}();
exports.EventEmitter = EventEmitter;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseNumberParser_1 = __webpack_require__(13);
var IntegralPartParser_1 = __webpack_require__(16);
var DecimalSeparatorParser_1 = __webpack_require__(14);
var FractionalPartParser_1 = __webpack_require__(15);
var NumberParser = function (_super) {
    __extends(NumberParser, _super);
    function NumberParser(locale) {
        var _this = _super.call(this, locale) || this;
        _this.locale = locale;
        _this.integralPartParser = new IntegralPartParser_1.IntegralPartParser(locale.numberGroupSeparator, locale.numberDecimalSeparator);
        _this.decimalSeparatorParser = new DecimalSeparatorParser_1.DecimalSeparatorParser(locale.numberDecimalSeparator);
        _this.fractionalPartParser = new FractionalPartParser_1.FractionalPartParser();
        return _this;
    }
    NumberParser.prototype.getDecimalSeparator = function () {
        return this.locale.numberDecimalSeparator;
    };
    return NumberParser;
}(BaseNumberParser_1.BaseNumberParser);
exports.NumberParser = NumberParser;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function padStart(text, length, pad) {
    pad = pad || ' ';
    if (text.length > length) {
        return text;
    } else {
        length = length - text.length;
        if (length > pad.length) {
            pad += pad.repeat(length / pad.length);
        }
        return pad.slice(0, length) + text;
    }
}
exports.padStart = padStart;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function restorePosition(before, after, position) {
    return before.substr(0, position).split('').reduce(function (offset, char) {
        var i = after.indexOf(char, offset);
        return i !== -1 ? i + 1 : offset;
    }, 0);
}
exports.restorePosition = restorePosition;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Builder_1 = __webpack_require__(74);
var Locale_1 = __webpack_require__(78);
var DateTimeMaskBuilder_1 = __webpack_require__(41);
var NumberMaskBuilder_1 = __webpack_require__(58);
var TemplateMaskBuilder_1 = __webpack_require__(67);
var DEFAULT_LOCALE_NAME = 'en';
var DATETIME_MASK = 'DateTime';
var NUMBER_MASK = 'Number';
var TEMPLATE_MASK = 'Template';
var API = function () {
    function API() {
        this.builder = new Builder_1.Builder();
        this.options = {
            locale: DEFAULT_LOCALE_NAME
        };
        this.initialized = false;
        this.builder.register('DateTime', new DateTimeMaskBuilder_1.DateTimeMaskBuilder());
        this.builder.register('Number', new NumberMaskBuilder_1.NumberMaskBuilder());
        this.builder.register('Template', new TemplateMaskBuilder_1.TemplateMaskBuilder());
    }
    API.prototype.init = function (options) {
        var _this = this;
        if (this.initialized) {
            return;
        }
        if (options) {
            Object.keys(options).forEach(function (key) {
                return _this.options[key] = options[key];
            });
        }
        this.locale = new Locale_1.Locale(this.options.locale);
        this.initialized = true;
    };
    API.prototype.getLocale = function () {
        this.initialize();
        return this.locale;
    };
    API.prototype.createDateTimeMask = function (template, options) {
        this.initialize();
        var mask = this.createMask(DATETIME_MASK, template);
        options = options || {};
        if (typeof options.timezoneOffset !== 'undefined') {
            mask.setTimezoneOffset(options.timezoneOffset);
        }
        return mask;
    };
    API.prototype.createNumberMask = function (template) {
        this.initialize();
        return this.createMask(NUMBER_MASK, template);
    };
    API.prototype.createTemplateMask = function (template, options) {
        this.initialize();
        options = options || {};
        var mask = this.createMask(TEMPLATE_MASK, template, options);
        if (typeof options.maskSaveLiteral !== 'undefined') {
            mask.setMaskSaveLiteral(options.maskSaveLiteral);
        }
        return mask;
    };
    API.prototype.createMask = function (name, template, options) {
        return this.builder.build(name, template, this.locale);
    };
    API.prototype.initialize = function () {
        this.init();
    };
    return API;
}();
exports.API = API;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var Editor_1 = __webpack_require__(7);
var DateTimeEditor = function (_super) {
    __extends(DateTimeEditor, _super);
    function DateTimeEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateTimeEditor.prototype.setTimezoneOffset = function (offset) {
        return this.getMask().setTimezoneOffset(offset);
    };
    DateTimeEditor.prototype.getTimezoneOffset = function () {
        return this.getMask().getTimezoneOffset();
    };
    DateTimeEditor.prototype.setMinValue = function (minValue) {
        this.getMask().setMinValue(minValue);
    };
    DateTimeEditor.prototype.getMinValue = function () {
        return this.getMask().getMinValue();
    };
    DateTimeEditor.prototype.setMaxValue = function (maxValue) {
        this.getMask().setMaxValue(maxValue);
    };
    DateTimeEditor.prototype.getMaxValue = function () {
        return this.getMask().getMaxValue();
    };
    DateTimeEditor.prototype.getMask = function () {
        return this.mask;
    };
    return DateTimeEditor;
}(Editor_1.Editor);
exports.DateTimeEditor = DateTimeEditor;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var Editor_1 = __webpack_require__(7);
var NumberEditor = function (_super) {
    __extends(NumberEditor, _super);
    function NumberEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberEditor.prototype.onKeydownHandler = function (event) {
        _super.prototype.onKeydownHandler.call(this, event);
        if (event.altKey || event.ctrlKey || event.shiftKey) {
            return;
        }
        var position = this.el.selectionStart;
        switch (event.key) {
            case '-':
                position = this.mask.handleKey(event.key, position);
                if (position !== null) {
                    event.preventDefault();
                    this.updateInputElement(position);
                }
                break;
        }
    };
    return NumberEditor;
}(Editor_1.Editor);
exports.NumberEditor = NumberEditor;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var Editor_1 = __webpack_require__(7);
var TemplateEditor = function (_super) {
    __extends(TemplateEditor, _super);
    function TemplateEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateEditor.prototype.setMaskSaveLiteral = function (maskSaveLiteral) {
        this.getMask().setMaskSaveLiteral(maskSaveLiteral);
    };
    TemplateEditor.prototype.getMaskSaveLiteral = function () {
        return this.getMask().getMaskSaveLiteral();
    };
    TemplateEditor.prototype.getMask = function () {
        return this.mask;
    };
    return TemplateEditor;
}(Editor_1.Editor);
exports.TemplateEditor = TemplateEditor;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var Mask_1 = __webpack_require__(10);
var isEmpty_1 = __webpack_require__(17);
var OutOfRangeEvent_1 = __webpack_require__(30);
var DateTimeMask = function (_super) {
    __extends(DateTimeMask, _super);
    function DateTimeMask() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timezoneOffset = 0;
        return _this;
    }
    DateTimeMask.prototype.setTimezoneOffset = function (offset) {
        this.timezoneOffset = offset;
    };
    DateTimeMask.prototype.getTimezoneOffset = function () {
        return this.timezoneOffset;
    };
    DateTimeMask.prototype.setMinValue = function (minValue) {
        this.minValue = minValue;
    };
    DateTimeMask.prototype.getMinValue = function () {
        return this.minValue;
    };
    DateTimeMask.prototype.setMaxValue = function (maxValue) {
        this.maxValue = maxValue;
    };
    DateTimeMask.prototype.getMaxValue = function () {
        return this.maxValue;
    };
    DateTimeMask.prototype.buildValue = function () {
        var lastValue = this.lastValue || 0;
        var defaultDate = new Date(lastValue - this.getTimezoneOffset() * 60 * 1000);
        var data = this.patterns.getPatternsValue();
        var year = isEmpty_1.isEmpty(data.year) ? defaultDate.getUTCFullYear() : data.year;
        var month = isEmpty_1.isEmpty(data.month) ? defaultDate.getUTCMonth() : data.month;
        var day = isEmpty_1.isEmpty(data.day) ? defaultDate.getUTCDate() : data.day;
        var hours;
        var minutes = isEmpty_1.isEmpty(data.minutes) ? defaultDate.getUTCMinutes() : data.minutes;
        var seconds = isEmpty_1.isEmpty(data.seconds) ? defaultDate.getUTCSeconds() : data.seconds;
        var milliseconds = isEmpty_1.isEmpty(data.milliseconds) ? defaultDate.getUTCMilliseconds() : data.milliseconds;
        if (isEmpty_1.isEmpty(data.hours)) {
            hours = defaultDate.getUTCHours();
        } else if (!isEmpty_1.isEmpty(data.meridiem)) {
            if (data.meridiem === 0 && data.hours === 12) {
                hours = 0;
            } else if (data.meridiem === 1 && data.hours === 12) {
                hours = 12;
            } else if (data.meridiem === 1) {
                hours = data.hours + 12;
            } else {
                hours = data.hours;
            }
        } else {
            hours = data.hours;
        }
        var value = Date.UTC(year, month, day, hours, minutes, seconds, milliseconds);
        return value + this.getTimezoneOffset() * 60 * 1000;
    };
    DateTimeMask.prototype.applyValue = function (value) {
        if (value !== null && typeof value !== 'undefined') {
            value = value - this.getTimezoneOffset() * 60 * 1000;
        }
        _super.prototype.applyValue.call(this, value);
    };
    DateTimeMask.prototype.validate = function (value) {
        var min = this.getMinValue();
        var max = this.getMaxValue();
        var valid;
        if (isEmpty_1.isEmpty(value)) {
            valid = true;
        } else if (!isEmpty_1.isEmpty(min) && !isEmpty_1.isEmpty(max)) {
            valid = value >= min && value <= max;
        } else if (!isEmpty_1.isEmpty(min)) {
            valid = value >= min;
        } else if (!isEmpty_1.isEmpty(max)) {
            valid = value <= max;
        } else {
            valid = true;
        }
        if (!valid) {
            var event_1 = new OutOfRangeEvent_1.OutOfRangeEvent(value);
            this.eventEmitter.emit(OutOfRangeEvent_1.OutOfRangeEvent.eventName, event_1);
        }
        return valid;
    };
    return DateTimeMask;
}(Mask_1.Mask);
exports.DateTimeMask = DateTimeMask;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var MaskBuilder_1 = __webpack_require__(11);
var DateTimeMask_1 = __webpack_require__(40);
var PatternsBuilder_1 = __webpack_require__(12);
var StaticPatternBuilder_1 = __webpack_require__(9);
var StringSelector_1 = __webpack_require__(31);
var YearPattern_1 = __webpack_require__(56);
var DayPattern_1 = __webpack_require__(42);
var MonthPattern_1 = __webpack_require__(48);
var HoursPattern_1 = __webpack_require__(45);
var MinutesPattern_1 = __webpack_require__(47);
var SecondsPattern_1 = __webpack_require__(49);
var ShortDayPattern_1 = __webpack_require__(50);
var ShortMonthPattern_1 = __webpack_require__(54);
var FullMonthPattern_1 = __webpack_require__(43);
var MeridiemPattern_1 = __webpack_require__(46);
var Hours12Pattern_1 = __webpack_require__(44);
var ShortMinutesPattern_1 = __webpack_require__(53);
var ShortHours12Pattern_1 = __webpack_require__(51);
var ShortHoursPatterm_1 = __webpack_require__(52);
var ShortSecondsPattern_1 = __webpack_require__(55);
var DateTimeMaskBuilder = function (_super) {
    __extends(DateTimeMaskBuilder, _super);
    function DateTimeMaskBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateTimeMaskBuilder.prototype.initPatternsBuilder = function () {
        var patternsBuilder = new PatternsBuilder_1.PatternsBuilder(StaticPatternBuilder_1.buildStaticPattern);
        return patternsBuilder.registerPattern(new StringSelector_1.StringSelector('dd'), function (template, locale) {
            return new DayPattern_1.DayPattern(locale, template);
        }).registerPattern(new StringSelector_1.StringSelector('d'), function (template, locale) {
            return new ShortDayPattern_1.ShortDayPattern(locale, template);
        }).registerPattern(new StringSelector_1.StringSelector('MMMM'), function (template, locale) {
            return new FullMonthPattern_1.FullMonthPattern(locale, template);
        }).registerPattern(new StringSelector_1.StringSelector('MM'), function (template, locale) {
            return new MonthPattern_1.MonthPattern(locale, template);
        }).registerPattern(new StringSelector_1.StringSelector('M'), function (template, locale) {
            return new ShortMonthPattern_1.ShortMonthPattern(locale, template);
        }).registerPattern(new StringSelector_1.StringSelector('yyyy'), function (template, locale) {
            return new YearPattern_1.YearPattern(locale, template);
        }).registerPattern(new StringSelector_1.StringSelector('HH'), function (template, locale) {
            return new HoursPattern_1.HoursPattern(locale, template);
        }).registerPattern(new StringSelector_1.StringSelector('H'), function (template, locale) {
            return new ShortHoursPatterm_1.ShortHoursPattern(locale, template);
        }).registerPattern(new StringSelector_1.StringSelector('hh'), function (template, locale) {
            return new Hours12Pattern_1.Hours12Pattern(locale, template);
        }).registerPattern(new StringSelector_1.StringSelector('h'), function (template, locale) {
            return new ShortHours12Pattern_1.ShortHours12Pattern(locale, template);
        }).registerPattern(new StringSelector_1.StringSelector('mm'), function (template, locale) {
            return new MinutesPattern_1.MinutesPattern(locale, template);
        }).registerPattern(new StringSelector_1.StringSelector('m'), function (template, locale) {
            return new ShortMinutesPattern_1.ShortMinutesPattern(locale, template);
        }).registerPattern(new StringSelector_1.StringSelector('ss'), function (template, locale) {
            return new SecondsPattern_1.SecondsPattern(locale, template);
        }).registerPattern(new StringSelector_1.StringSelector('s'), function (template, locale) {
            return new ShortSecondsPattern_1.ShortSecondsPattern(locale, template);
        }).registerPattern(new StringSelector_1.StringSelector('tt'), function (template, locale) {
            return new MeridiemPattern_1.MeridiemPattern(locale, template);
        });
    };
    DateTimeMaskBuilder.prototype.createMask = function (locale) {
        return new DateTimeMask_1.DateTimeMask(locale);
    };
    return DateTimeMaskBuilder;
}(MaskBuilder_1.MaskBuilder);
exports.DateTimeMaskBuilder = DateTimeMaskBuilder;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var FixedWidthPattern_1 = __webpack_require__(0);
var isCompleteDay_1 = __webpack_require__(22);
var getDay_1 = __webpack_require__(18);
var DayPattern = function (_super) {
    __extends(DayPattern, _super);
    function DayPattern(locale, template) {
        return _super.call(this, locale, template, 'day', { min: 1, max: 31, width: 2 }) || this;
    }
    DayPattern.prototype.getIsComplete = function () {
        return isCompleteDay_1.isCompleteDay(this.getText());
    };
    DayPattern.prototype.applyValue = function (value) {
        if (value === null || typeof value === 'undefined') {
            this.setText('');
        } else {
            var text = getDay_1.getDay(value);
            this.setText(this.formatDecimal(text));
        }
    };
    return DayPattern;
}(FixedWidthPattern_1.FixedWidthPattern);
exports.DayPattern = DayPattern;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var ListPattern_1 = __webpack_require__(28);
var MONTHS = 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',');
var FullMonthPattern = function (_super) {
    __extends(FullMonthPattern, _super);
    function FullMonthPattern(locale, template) {
        return _super.call(this, locale, template, 'month', locale.months.full) || this;
    }
    FullMonthPattern.prototype.applyValue = function (value) {
        var text;
        if (value === null || typeof value === 'undefined') {
            text = '';
        } else {
            var date = new Date(value);
            var month = date.getUTCMonth();
            var months = this.locale.months.full;
            text = months[month];
        }
        this.setText(text);
    };
    return FullMonthPattern;
}(ListPattern_1.ListPattern);
exports.FullMonthPattern = FullMonthPattern;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var FixedWidthPattern_1 = __webpack_require__(0);
var isCompleteHours_1 = __webpack_require__(4);
var getHours12_1 = __webpack_require__(20);
var Hours12Pattern = function (_super) {
    __extends(Hours12Pattern, _super);
    function Hours12Pattern(locale, template) {
        return _super.call(this, locale, template, 'hours', { min: 1, max: 12, width: 2 }) || this;
    }
    Hours12Pattern.prototype.getIsComplete = function () {
        return isCompleteHours_1.isCompleteHours(this.getText());
    };
    Hours12Pattern.prototype.applyValue = function (value) {
        var text = getHours12_1.getHours12(value);
        this.setText(this.formatDecimal(text));
    };
    return Hours12Pattern;
}(FixedWidthPattern_1.FixedWidthPattern);
exports.Hours12Pattern = Hours12Pattern;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var FixedWidthPattern_1 = __webpack_require__(0);
var isCompleteHours_1 = __webpack_require__(4);
var getHours_1 = __webpack_require__(19);
var HoursPattern = function (_super) {
    __extends(HoursPattern, _super);
    function HoursPattern(locale, template) {
        return _super.call(this, locale, template, 'hours', { min: 0, max: 23, width: 2 }) || this;
    }
    HoursPattern.prototype.getIsComplete = function () {
        return isCompleteHours_1.isCompleteHours(this.getText());
    };
    HoursPattern.prototype.applyValue = function (value) {
        if (value === null || typeof value === 'undefined') {
            this.setText('');
        } else {
            var text = getHours_1.getHours(value);
            this.setText(this.formatDecimal(text));
        }
    };
    return HoursPattern;
}(FixedWidthPattern_1.FixedWidthPattern);
exports.HoursPattern = HoursPattern;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var ListPattern_1 = __webpack_require__(28);
var AM_DESIGNATOR = 'AM';
var PM_DESIGNATOR = 'PM';
var MeridiemPattern = function (_super) {
    __extends(MeridiemPattern, _super);
    function MeridiemPattern(locale, template) {
        return _super.call(this, locale, template, 'meridiem', [AM_DESIGNATOR, PM_DESIGNATOR]) || this;
    }
    MeridiemPattern.prototype.applyValue = function (value) {
        var text;
        if (value === null || typeof value === 'undefined') {
            text = '';
        } else {
            var date = new Date(value);
            var hours = date.getUTCHours();
            text = hours >= 12 ? PM_DESIGNATOR : AM_DESIGNATOR;
        }
        this.setText(text);
    };
    return MeridiemPattern;
}(ListPattern_1.ListPattern);
exports.MeridiemPattern = MeridiemPattern;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var FixedWidthPattern_1 = __webpack_require__(0);
var isCompleteMinutes_1 = __webpack_require__(23);
var MinutesPattern = function (_super) {
    __extends(MinutesPattern, _super);
    function MinutesPattern(locale, template) {
        return _super.call(this, locale, template, 'minutes', { min: 0, max: 59, width: 2 }) || this;
    }
    MinutesPattern.prototype.getIsComplete = function () {
        return isCompleteMinutes_1.isCompleteMinutes(this.getText());
    };
    MinutesPattern.prototype.applyValue = function (value) {
        if (value === null || typeof value === 'undefined') {
            this.setText('');
        } else {
            var minutes = new Date(value).getUTCMinutes();
            this.setText(this.formatDecimal(minutes.toString()));
        }
    };
    return MinutesPattern;
}(FixedWidthPattern_1.FixedWidthPattern);
exports.MinutesPattern = MinutesPattern;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var FixedWidthPattern_1 = __webpack_require__(0);
var isCompleteMonth_1 = __webpack_require__(24);
var getMonth_1 = __webpack_require__(21);
var MonthPattern = function (_super) {
    __extends(MonthPattern, _super);
    function MonthPattern(locale, template) {
        return _super.call(this, locale, template, 'month', { min: 1, max: 12, width: 2 }) || this;
    }
    MonthPattern.prototype.getIsComplete = function () {
        return isCompleteMonth_1.isCompleteMonth(this.getText());
    };
    MonthPattern.prototype.applyValue = function (value) {
        if (value === null || typeof value === 'undefined') {
            this.setText('');
        } else {
            var text = getMonth_1.getMonth(value - 1);
            this.setText(this.formatDecimal(text));
        }
    };
    MonthPattern.prototype.getValue = function () {
        var value = _super.prototype.getValue.call(this);
        return value === null ? value : value - 1;
    };
    return MonthPattern;
}(FixedWidthPattern_1.FixedWidthPattern);
exports.MonthPattern = MonthPattern;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var FixedWidthPattern_1 = __webpack_require__(0);
var isCompleteSeconds_1 = __webpack_require__(25);
var SecondsPattern = function (_super) {
    __extends(SecondsPattern, _super);
    function SecondsPattern(locale, template) {
        return _super.call(this, locale, template, 'seconds', { min: 0, max: 59, width: 2 }) || this;
    }
    SecondsPattern.prototype.getIsComplete = function () {
        return isCompleteSeconds_1.isCompleteSeconds(this.getText());
    };
    SecondsPattern.prototype.applyValue = function (value) {
        if (value === null || typeof value === 'undefined') {
            this.setText('');
        } else {
            var seconds = new Date(value).getUTCSeconds();
            this.setText(this.formatDecimal(seconds.toString()));
        }
    };
    return SecondsPattern;
}(FixedWidthPattern_1.FixedWidthPattern);
exports.SecondsPattern = SecondsPattern;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var FloatWidthPattern_1 = __webpack_require__(2);
var isCompleteDay_1 = __webpack_require__(22);
var getDay_1 = __webpack_require__(18);
var ShortDayPattern = function (_super) {
    __extends(ShortDayPattern, _super);
    function ShortDayPattern(locale, template) {
        return _super.call(this, locale, template, 'day', { min: 1, max: 31, minWidth: 1, maxWidth: 2 }) || this;
    }
    ShortDayPattern.prototype.getIsComplete = function () {
        return isCompleteDay_1.isCompleteDay(this.getText());
    };
    ShortDayPattern.prototype.applyValue = function (value) {
        this.setText(getDay_1.getDay(value));
    };
    return ShortDayPattern;
}(FloatWidthPattern_1.FloatWidthPattern);
exports.ShortDayPattern = ShortDayPattern;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var isCompleteHours_1 = __webpack_require__(4);
var FloatWidthPattern_1 = __webpack_require__(2);
var getHours12_1 = __webpack_require__(20);
var ShortHours12Pattern = function (_super) {
    __extends(ShortHours12Pattern, _super);
    function ShortHours12Pattern(locale, template) {
        return _super.call(this, locale, template, 'hours', { min: 1, max: 12, minWidth: 1, maxWidth: 2 }) || this;
    }
    ShortHours12Pattern.prototype.getIsComplete = function () {
        return isCompleteHours_1.isCompleteHours(this.getText());
    };
    ShortHours12Pattern.prototype.applyValue = function (value) {
        if (value === null || typeof value === 'undefined') {
            this.setText('');
        } else {
            var text = getHours12_1.getHours12(value);
            this.setText(text);
        }
    };
    return ShortHours12Pattern;
}(FloatWidthPattern_1.FloatWidthPattern);
exports.ShortHours12Pattern = ShortHours12Pattern;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var isCompleteHours_1 = __webpack_require__(4);
var FloatWidthPattern_1 = __webpack_require__(2);
var getHours_1 = __webpack_require__(19);
var ShortHoursPattern = function (_super) {
    __extends(ShortHoursPattern, _super);
    function ShortHoursPattern(locale, template) {
        return _super.call(this, locale, template, 'hours', { min: 0, max: 23, minWidth: 1, maxWidth: 2 }) || this;
    }
    ShortHoursPattern.prototype.getIsComplete = function () {
        return isCompleteHours_1.isCompleteHours(this.getText());
    };
    ShortHoursPattern.prototype.applyValue = function (value) {
        if (value === null || typeof value === 'undefined') {
            this.setText('');
        } else {
            var text = getHours_1.getHours(value);
            this.setText(text);
        }
    };
    return ShortHoursPattern;
}(FloatWidthPattern_1.FloatWidthPattern);
exports.ShortHoursPattern = ShortHoursPattern;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var FloatWidthPattern_1 = __webpack_require__(2);
var isCompleteMinutes_1 = __webpack_require__(23);
var ShortMinutesPattern = function (_super) {
    __extends(ShortMinutesPattern, _super);
    function ShortMinutesPattern(locale, template) {
        return _super.call(this, locale, template, 'minutes', { min: 0, max: 59, minWidth: 1, maxWidth: 2 }) || this;
    }
    ShortMinutesPattern.prototype.getIsComplete = function () {
        return isCompleteMinutes_1.isCompleteMinutes(this.getText());
    };
    ShortMinutesPattern.prototype.applyValue = function (value) {
        if (value === null || typeof value === 'undefined') {
            this.setText('');
        } else {
            var minutes = new Date(value).getUTCMinutes();
            this.setText(minutes.toString());
        }
    };
    return ShortMinutesPattern;
}(FloatWidthPattern_1.FloatWidthPattern);
exports.ShortMinutesPattern = ShortMinutesPattern;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var FloatWidthPattern_1 = __webpack_require__(2);
var isCompleteMonth_1 = __webpack_require__(24);
var getMonth_1 = __webpack_require__(21);
var ShortMonthPattern = function (_super) {
    __extends(ShortMonthPattern, _super);
    function ShortMonthPattern(locale, template) {
        return _super.call(this, locale, template, 'month', { min: 1, max: 12, minWidth: 1, maxWidth: 2 }) || this;
    }
    ShortMonthPattern.prototype.getIsComplete = function () {
        return isCompleteMonth_1.isCompleteMonth(this.getText());
    };
    ShortMonthPattern.prototype.applyValue = function (value) {
        this.setText(getMonth_1.getMonth(value));
    };
    ShortMonthPattern.prototype.getValue = function () {
        var value = _super.prototype.getValue.call(this);
        return value === null ? value : value - 1;
    };
    return ShortMonthPattern;
}(FloatWidthPattern_1.FloatWidthPattern);
exports.ShortMonthPattern = ShortMonthPattern;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var FloatWidthPattern_1 = __webpack_require__(2);
var isCompleteSeconds_1 = __webpack_require__(25);
var ShortSecondsPattern = function (_super) {
    __extends(ShortSecondsPattern, _super);
    function ShortSecondsPattern(locale, template) {
        return _super.call(this, locale, template, 'seconds', { min: 0, max: 59, minWidth: 1, maxWidth: 2 }) || this;
    }
    ShortSecondsPattern.prototype.getIsComplete = function () {
        return isCompleteSeconds_1.isCompleteSeconds(this.getText());
    };
    ShortSecondsPattern.prototype.applyValue = function (value) {
        if (value === null || typeof value === 'undefined') {
            this.setText('');
        } else {
            var seconds = new Date(value).getUTCSeconds();
            this.setText(seconds.toString());
        }
    };
    return ShortSecondsPattern;
}(FloatWidthPattern_1.FloatWidthPattern);
exports.ShortSecondsPattern = ShortSecondsPattern;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var FixedWidthPattern_1 = __webpack_require__(0);
var YearPattern = function (_super) {
    __extends(YearPattern, _super);
    function YearPattern(locale, template) {
        return _super.call(this, locale, template, 'year', { min: 1, max: 9999, width: 4 }) || this;
    }
    YearPattern.prototype.applyValue = function (value) {
        if (value === null || typeof value === 'undefined') {
            this.setText('');
        } else {
            var year = new Date(value).getUTCFullYear();
            this.setText(this.formatDecimal(year.toString()));
        }
    };
    return YearPattern;
}(FixedWidthPattern_1.FixedWidthPattern);
exports.YearPattern = YearPattern;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var Mask_1 = __webpack_require__(10);
var restoreNumberPrecision_1 = __webpack_require__(86);
var NumberMask = function (_super) {
    __extends(NumberMask, _super);
    function NumberMask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberMask.prototype.buildValue = function () {
        var pattern = this.patterns.getInputPattern();
        return pattern.getValue();
    };
    NumberMask.prototype.handleKey = function (key, position) {
        var newPosition = null;
        switch (key) {
            case '-':
                var pattern = this.patterns.getInputPattern();
                if (pattern) {
                    var text = this.getText();
                    pattern.toggleSign();
                    this.patterns.updateText();
                    newPosition = this.restorePosition(text, position);
                    this.updateValue();
                }
                break;
        }
        return newPosition;
    };
    NumberMask.prototype.restorePosition = function (text, position) {
        var groupSeparator = this.locale.numberGroupSeparator;
        var left = text.substring(0, position);
        var right = text.substr(position);
        var pos = position;
        while (left.indexOf(groupSeparator) !== -1) {
            left = left.replace(groupSeparator, '');
            pos -= groupSeparator.length;
        }
        while (right.indexOf(groupSeparator) !== -1) {
            right = right.replace(groupSeparator, '');
        }
        return _super.prototype.restorePosition.call(this, left + right, pos);
    };
    NumberMask.prototype.setNextPatternValue = function (position) {
        if (this.patterns.getIsValid()) {
            var value = this.value.getValue();
            var nextValue = restoreNumberPrecision_1.restoreNumberPrecision(value, value + 1);
            this.value.setValue(nextValue, { update: true });
        }
        return this.patterns.getInputPatternSelection();
    };
    NumberMask.prototype.setPrevPatternValue = function (position) {
        if (this.patterns.getIsValid()) {
            var value = this.value.getValue();
            var prevValue = restoreNumberPrecision_1.restoreNumberPrecision(value, value - 1);
            this.value.setValue(prevValue, { update: true });
        }
        return this.patterns.getInputPatternSelection();
    };
    NumberMask.prototype.getInvalidText = function () {
        var value = this.value.getValue();
        var notEmpty = typeof value !== 'undefined' && value !== null;
        var text = null;
        var locale = this.locale;
        if (notEmpty && isNaN(value)) {
            text = locale.NaNSymbol;
        } else if (notEmpty && !isFinite(value)) {
            text = value === Number.POSITIVE_INFINITY ? locale.positiveInfinitySymbol : locale.negativeInfinitySymbol;
        } else {}
        return text;
    };
    NumberMask.prototype.updateInvalid = function () {
        var value = this.value.getValue();
        var notEmpty = typeof value !== 'undefined' && value !== null;
        if (notEmpty && isNaN(value)) {
            this.setInvalid(true);
        } else if (notEmpty && !isFinite(value)) {
            this.setInvalid(true);
        } else {
            this.setInvalid(false);
        }
    };
    return NumberMask;
}(Mask_1.Mask);
exports.NumberMask = NumberMask;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var NumberMask_1 = __webpack_require__(57);
var MaskBuilder_1 = __webpack_require__(11);
var PatternsBuilder_1 = __webpack_require__(12);
var StaticPatternBuilder_1 = __webpack_require__(9);
var RegExpSelector_1 = __webpack_require__(75);
var NumberPatternsBuilder_1 = __webpack_require__(60);
var CurrencyPatternBuilder_1 = __webpack_require__(59);
var PercentPatternBuilder_1 = __webpack_require__(61);
var PercentTransformedPatternBuilder_1 = __webpack_require__(62);
var NumberMaskBuilder = function (_super) {
    __extends(NumberMaskBuilder, _super);
    function NumberMaskBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberMaskBuilder.prototype.createMask = function (locale) {
        return new NumberMask_1.NumberMask(locale);
    };
    NumberMaskBuilder.prototype.initPatternsBuilder = function () {
        var patternsBuilder = new PatternsBuilder_1.PatternsBuilder(StaticPatternBuilder_1.buildStaticPattern);
        return patternsBuilder.registerPattern(new RegExpSelector_1.RegExpSelector(/n\d*/i), NumberPatternsBuilder_1.buildNumberPattern).registerPattern(new RegExpSelector_1.RegExpSelector(/c\d*/i), CurrencyPatternBuilder_1.buildCurrencyPattern).registerPattern(new RegExpSelector_1.RegExpSelector(/p\d*/), PercentPatternBuilder_1.buildPercentPattern).registerPattern(new RegExpSelector_1.RegExpSelector(/P\d*/), PercentTransformedPatternBuilder_1.buildPercentTransformedPattern);
    };
    return NumberMaskBuilder;
}(MaskBuilder_1.MaskBuilder);
exports.NumberMaskBuilder = NumberMaskBuilder;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var CurrencyPattern_1 = __webpack_require__(63);
function buildCurrencyPattern(template, locale) {
    var regexp = /c(\d*)/i;
    var matches = template.match(regexp);
    var decimalDigits = matches[1];
    return new CurrencyPattern_1.CurrencyPattern(locale, template, decimalDigits.length === 0 ? locale.currencyDecimalDigits : parseInt(decimalDigits, 10));
}
exports.buildCurrencyPattern = buildCurrencyPattern;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var NumberPattern_1 = __webpack_require__(64);
function buildNumberPattern(template, locale) {
    var regexp = /n(\d*)/i;
    var matches = template.match(regexp);
    var decimalDigits = matches[1];
    return new NumberPattern_1.NumberPattern(locale, template, decimalDigits.length === 0 ? locale.numberDecimalDigits : parseInt(decimalDigits, 10));
}
exports.buildNumberPattern = buildNumberPattern;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var PercentPattern_1 = __webpack_require__(26);
function buildPercentPattern(template, locale) {
    var regexp = /p(\d*)/;
    var matches = template.match(regexp);
    var decimalDigits = matches[1];
    return new PercentPattern_1.PercentPattern(locale, template, decimalDigits.length === 0 ? locale.percentDecimalDigits : parseInt(decimalDigits, 10));
}
exports.buildPercentPattern = buildPercentPattern;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var PercentTransformedPattern_1 = __webpack_require__(65);
function buildPercentTransformedPattern(template, locale) {
    var regexp = /P(\d*)/;
    var matches = template.match(regexp);
    var decimalDigits = matches[1];
    return new PercentTransformedPattern_1.PercentTransformedPattern(locale, template, decimalDigits.length === 0 ? locale.percentDecimalDigits : parseInt(decimalDigits, 10));
}
exports.buildPercentTransformedPattern = buildPercentTransformedPattern;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseNumberPattern_1 = __webpack_require__(8);
var CurrencyParser_1 = __webpack_require__(84);
var CurrencyFormatter_1 = __webpack_require__(80);
var CurrencyPattern = function (_super) {
    __extends(CurrencyPattern, _super);
    function CurrencyPattern(locale, template, decimalDigits) {
        var _this = _super.call(this, locale, template, decimalDigits) || this;
        _this.parser = new CurrencyParser_1.CurrencyParser(locale);
        _this.formatter = new CurrencyFormatter_1.CurrencyFormatter(locale);
        return _this;
    }
    return CurrencyPattern;
}(BaseNumberPattern_1.BaseNumberPattern);
exports.CurrencyPattern = CurrencyPattern;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseNumberPattern_1 = __webpack_require__(8);
var NumberParser_1 = __webpack_require__(33);
var NumberFormatter_1 = __webpack_require__(5);
var NumberPattern = function (_super) {
    __extends(NumberPattern, _super);
    function NumberPattern(locale, template, decimalDigits) {
        var _this = _super.call(this, locale, template, decimalDigits) || this;
        _this.parser = new NumberParser_1.NumberParser(locale);
        _this.formatter = new NumberFormatter_1.NumberFormatter(locale);
        return _this;
    }
    return NumberPattern;
}(BaseNumberPattern_1.BaseNumberPattern);
exports.NumberPattern = NumberPattern;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var PercentPattern_1 = __webpack_require__(26);
var isEmpty_1 = __webpack_require__(17);
var PercentTransformedPattern = function (_super) {
    __extends(PercentTransformedPattern, _super);
    function PercentTransformedPattern() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PercentTransformedPattern.prototype.applyValue = function (value) {
        if (!isEmpty_1.isEmpty(value) && isFinite(value) && !isNaN(value)) {
            value = value * 100;
        }
        _super.prototype.applyValue.call(this, value);
    };
    PercentTransformedPattern.prototype.getValue = function () {
        var value = _super.prototype.getValue.call(this);
        if (!isEmpty_1.isEmpty(value) && isFinite(value) && !isNaN(value)) {
            value = value / 100;
        }
        return value;
    };
    return PercentTransformedPattern;
}(PercentPattern_1.PercentPattern);
exports.PercentTransformedPattern = PercentTransformedPattern;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var Mask_1 = __webpack_require__(10);
var StaticPattern_1 = __webpack_require__(29);
var TemplatePattern_1 = __webpack_require__(1);
var TemplateMask = function (_super) {
    __extends(TemplateMask, _super);
    function TemplateMask() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maskSaveLiteral = true;
        return _this;
    }
    TemplateMask.prototype.setMaskSaveLiteral = function (maskSaveLiteral) {
        this.maskSaveLiteral = maskSaveLiteral;
    };
    TemplateMask.prototype.applyValue = function (value) {
        value = value || '';
        var patterns = this.patterns;
        var list = patterns.getList();
        if (this.getMaskSaveLiteral()) {
            list.forEach(function (pattern, i) {
                return pattern.applyValue(value.substr(i, 1));
            });
        } else {
            var i_1 = 0;
            list.filter(function (pattern) {
                return !(pattern instanceof StaticPattern_1.StaticPattern);
            }).forEach(function (pattern) {
                return pattern.applyValue(value.substr(i_1++, 1));
            });
        }
        this.patterns.updateText();
    };
    TemplateMask.prototype.getMaskSaveLiteral = function () {
        return this.maskSaveLiteral;
    };
    TemplateMask.prototype.buildValue = function () {
        var _this = this;
        return this.patterns.getList().filter(function (pattern) {
            return _this.getMaskSaveLiteral() ? true : pattern instanceof TemplatePattern_1.TemplatePattern;
        }).map(function (pattern) {
            return pattern.getText();
        }).join('');
    };
    return TemplateMask;
}(Mask_1.Mask);
exports.TemplateMask = TemplateMask;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var MaskBuilder_1 = __webpack_require__(11);
var PatternsBuilder_1 = __webpack_require__(12);
var TemplateMask_1 = __webpack_require__(66);
var StaticPatternBuilder_1 = __webpack_require__(9);
var StringSelector_1 = __webpack_require__(31);
var DigitTemplatePattern_1 = __webpack_require__(70);
var SignTemplatePattern_1 = __webpack_require__(72);
var CharTemplatePattern_1 = __webpack_require__(69);
var LetterTemplatePattern_1 = __webpack_require__(71);
var AlphanumericTemplatePattern_1 = __webpack_require__(68);
var TemplateMaskBuilder = function (_super) {
    __extends(TemplateMaskBuilder, _super);
    function TemplateMaskBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateMaskBuilder.prototype.initPatternsBuilder = function () {
        var patternsBuilder = new PatternsBuilder_1.PatternsBuilder(StaticPatternBuilder_1.buildStaticPattern);
        return patternsBuilder.registerPattern(new StringSelector_1.StringSelector('#'), function (template, locale) {
            return new SignTemplatePattern_1.SignTemplatePattern(locale, template, false);
        }).registerPattern(new StringSelector_1.StringSelector('9'), function (template, locale) {
            return new DigitTemplatePattern_1.DigitTemplatePattern(locale, template, false);
        }).registerPattern(new StringSelector_1.StringSelector('0'), function (template, locale) {
            return new DigitTemplatePattern_1.DigitTemplatePattern(locale, template, true);
        }).registerPattern(new StringSelector_1.StringSelector('c'), function (template, locale) {
            return new CharTemplatePattern_1.CharTemplatePattern(locale, template, false);
        }).registerPattern(new StringSelector_1.StringSelector('C'), function (template, locale) {
            return new CharTemplatePattern_1.CharTemplatePattern(locale, template, true);
        }).registerPattern(new StringSelector_1.StringSelector('l'), function (template, locale) {
            return new LetterTemplatePattern_1.LetterTemplatePattern(locale, template, false);
        }).registerPattern(new StringSelector_1.StringSelector('L'), function (template, locale) {
            return new LetterTemplatePattern_1.LetterTemplatePattern(locale, template, true);
        }).registerPattern(new StringSelector_1.StringSelector('a'), function (template, locale) {
            return new AlphanumericTemplatePattern_1.AlphanumericTemplatePattern(locale, template, false);
        }).registerPattern(new StringSelector_1.StringSelector('A'), function (template, locale) {
            return new AlphanumericTemplatePattern_1.AlphanumericTemplatePattern(locale, template, true);
        });
    };
    TemplateMaskBuilder.prototype.createMask = function (locale) {
        return new TemplateMask_1.TemplateMask(locale);
    };
    return TemplateMaskBuilder;
}(MaskBuilder_1.MaskBuilder);
exports.TemplateMaskBuilder = TemplateMaskBuilder;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var TemplatePattern_1 = __webpack_require__(1);
var AlphanumericTemplatePattern = function (_super) {
    __extends(AlphanumericTemplatePattern, _super);
    function AlphanumericTemplatePattern(locale, template, isRequired) {
        var _this = _super.call(this, locale, template, isRequired) || this;
        _this.regexpLetter = new RegExp('[0-9' + locale.letter + ']');
        return _this;
    }
    AlphanumericTemplatePattern.prototype.validateInput = function (input) {
        return this.regexpLetter.test(input);
    };
    return AlphanumericTemplatePattern;
}(TemplatePattern_1.TemplatePattern);
exports.AlphanumericTemplatePattern = AlphanumericTemplatePattern;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var TemplatePattern_1 = __webpack_require__(1);
var CharTemplatePattern = function (_super) {
    __extends(CharTemplatePattern, _super);
    function CharTemplatePattern() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CharTemplatePattern.prototype.validateInput = function (input) {
        return (/^.*$/.test(input)
        );
    };
    return CharTemplatePattern;
}(TemplatePattern_1.TemplatePattern);
exports.CharTemplatePattern = CharTemplatePattern;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var TemplatePattern_1 = __webpack_require__(1);
var DigitTemplatePattern = function (_super) {
    __extends(DigitTemplatePattern, _super);
    function DigitTemplatePattern() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DigitTemplatePattern.prototype.validateInput = function (input) {
        return (/\d/.test(input)
        );
    };
    return DigitTemplatePattern;
}(TemplatePattern_1.TemplatePattern);
exports.DigitTemplatePattern = DigitTemplatePattern;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var TemplatePattern_1 = __webpack_require__(1);
var LetterTemplatePattern = function (_super) {
    __extends(LetterTemplatePattern, _super);
    function LetterTemplatePattern(locale, template, isRequired) {
        var _this = _super.call(this, locale, template, isRequired) || this;
        _this.regexpLetter = new RegExp('[' + locale.letter + ']');
        return _this;
    }
    LetterTemplatePattern.prototype.validateInput = function (input) {
        return this.regexpLetter.test(input);
    };
    return LetterTemplatePattern;
}(TemplatePattern_1.TemplatePattern);
exports.LetterTemplatePattern = LetterTemplatePattern;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var TemplatePattern_1 = __webpack_require__(1);
var SignTemplatePattern = function (_super) {
    __extends(SignTemplatePattern, _super);
    function SignTemplatePattern() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SignTemplatePattern.prototype.validateInput = function (input) {
        return (/^[\d+-]$/.test(input)
        );
    };
    return SignTemplatePattern;
}(TemplatePattern_1.TemplatePattern);
exports.SignTemplatePattern = SignTemplatePattern;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var strDiff_1 = __webpack_require__(87);
var restorePosition_1 = __webpack_require__(35);
var PatternsList = function () {
    function PatternsList() {
        this.list = [];
    }
    PatternsList.prototype.setList = function (list) {
        this.list = list.slice();
    };
    PatternsList.prototype.getList = function () {
        return this.list;
    };
    PatternsList.prototype.getIsComplete = function () {
        return this.list.every(function (pattern) {
            return pattern.getIsComplete();
        });
    };
    PatternsList.prototype.getIsValid = function () {
        return this.list.every(function (pattern) {
            return pattern.getIsValid();
        });
    };
    PatternsList.prototype.getIsEmpty = function () {
        return this.list.every(function (pattern) {
            return pattern.getIsEmpty();
        });
    };
    PatternsList.prototype.setInput = function (input, position) {
        var text = this.getText();
        var textDiff = strDiff_1.strDiff(text, input, position);
        var newPosition = position || 0;
        var updatePosition = true;
        switch (textDiff.operation) {
            case strDiff_1.DiffOperation.Insert:
                if (textDiff.dst.length === 1 && this.isSeparator(textDiff.dst, textDiff.position)) {
                    newPosition = this.getNextPatternOffset(position);
                    updatePosition = false;
                } else {
                    newPosition = this.inputInsert(textDiff.position, textDiff.dst);
                }
                break;
            case strDiff_1.DiffOperation.Change:
                newPosition = this.inputChange(textDiff.position, textDiff.src, textDiff.dst);
                break;
            case strDiff_1.DiffOperation.Delete:
                newPosition = this.inputDelete(textDiff.position, textDiff.src);
                break;
        }
        return newPosition;
    };
    PatternsList.prototype.isSeparator = function (text, position) {
        var isSeparator = false;
        var pattern = this.getPatternByPositionLeft(position);
        var index = this.list.indexOf(pattern);
        var nextPattern = this.list[index + 1];
        if (nextPattern && nextPattern.canActivate() === false) {
            isSeparator = text === nextPattern.getText();
        }
        return isSeparator;
    };
    PatternsList.prototype.getNextPatternOffset = function (position) {
        var newPosition = position;
        var pattern = this.getPatternByPositionLeft(position);
        var nextPattern = this.getNextPattern(pattern);
        if (nextPattern) {
            newPosition = this.getPatternOffset(nextPattern);
        }
        return newPosition;
    };
    PatternsList.prototype.getNextPattern = function (pattern) {
        var index = this.list.indexOf(pattern);
        return this.list.slice(index + 1).filter(function (pattern) {
            return pattern.canActivate();
        })[0];
    };
    PatternsList.prototype.inputInsert = function (position, insert) {
        var pattern = this.getInputPatternByPosition(position);
        if (!pattern) {
            return position;
        }
        var patternText = pattern.getText();
        var patternOffset = this.getPatternOffset(pattern);
        var before = patternText.substring(0, position - patternOffset);
        var after = patternText.substring(position - patternOffset);
        var newPatternText = before + insert + after;
        if (insert.length === 1 && position >= patternOffset && position < patternOffset + patternText.length) {
            if (!pattern.canInputChar(insert)) {
                return position;
            }
        }
        var text = newPatternText;
        var usedText = '';
        var lastUsedPattern;
        var _loop_1 = function _loop_1(i) {
            var currentPattern = this_1.list[i];
            if (currentPattern !== pattern && !currentPattern.getIsEmpty()) {
                return "break";
            }
            currentPattern.setInput(text, function (restText, applyText) {
                text = restText;
                if (applyText && applyText.length) {
                    usedText += applyText;
                    lastUsedPattern = currentPattern;
                }
            });
            if (text.length === 0) {
                return "break";
            }
        };
        var this_1 = this;
        for (var i = this.list.indexOf(pattern); i < this.list.length; i++) {
            var state_1 = _loop_1(i);
            if (state_1 === "break") break;
        }
        if (lastUsedPattern) {
            this.setActive(lastUsedPattern);
            var usedLeft = '';
            var left = before + insert;
            if (lastUsedPattern.finalizeInput()) {
                if (pattern === lastUsedPattern) {
                    usedText = left = lastUsedPattern.getText();
                }
            }
            var displayText_1 = this.list.slice(this.list.indexOf(pattern), this.list.indexOf(lastUsedPattern) + 1).map(function (pattern) {
                return pattern.getText();
            }).join('');
            for (var i = 0, start = 0; i < left.length; i++) {
                var char = left.substr(i, 1);
                var index = usedText.indexOf(char, start);
                if (index !== -1) {
                    usedLeft += char;
                    start = index + 1;
                }
            }
            position = patternOffset + usedLeft.split('').reduce(function (offset, char) {
                var i = displayText_1.indexOf(char, offset);
                return i !== -1 ? i + 1 : offset;
            }, 0);
            if (lastUsedPattern.getIsComplete()) {
                var offset = this.getPatternOffset(lastUsedPattern);
                var text_1 = lastUsedPattern.getText();
                if (offset + text_1.length === position) {
                    position = this.forwardPosition(position);
                }
            }
        }
        return position;
    };
    PatternsList.prototype.forwardPosition = function (position) {
        var patternLeft = this.getPatternByPositionLeft(position);
        var patternRight = this.getPatternByPositionRight(position);
        var forwardPosition = position;
        if (patternLeft !== patternRight && !patternRight.canActivate()) {
            var index = this.list.indexOf(patternRight);
            var pattern = void 0;
            for (var i = index + 1; i < this.list.length; i++) {
                if (this.list[i].canActivate()) {
                    pattern = this.list[i];
                    break;
                }
            }
            if (pattern) {
                forwardPosition = this.getPatternOffset(pattern);
            }
        }
        return forwardPosition;
    };
    PatternsList.prototype.inputChange = function (position, from, to) {
        var pattern1 = this.getPatternByPositionRight(position);
        var pattern2 = this.getPatternByPositionLeft(position + from.length);
        var patternText = pattern1.getText();
        var patternOffset = this.getPatternOffset(pattern1);
        var before = patternText.substring(0, position - patternOffset);
        var after = patternText.substring(position - patternOffset + from.length);
        var newPatternText = before + to + after;
        var lastUsedPattern;
        var usedText = '';
        if (pattern1 === pattern2) {
            lastUsedPattern = pattern1;
            pattern1.setInput(newPatternText, function (restText, applyText) {
                if (applyText && applyText.length) {
                    usedText = applyText;
                }
            });
            if (pattern1.getIsEmpty()) {
                position = patternOffset;
            }
        } else {
            var index1 = this.list.indexOf(pattern1);
            var index2 = this.list.indexOf(pattern2);
            var text_2 = newPatternText;
            var _loop_2 = function _loop_2(i) {
                var currentPattern = this_2.list[i];
                currentPattern.setInput(text_2, function (restText, applyText) {
                    text_2 = restText;
                    if (applyText && applyText.length) {
                        usedText += applyText;
                        lastUsedPattern = currentPattern;
                    }
                });
            };
            var this_2 = this;
            for (var i = index1; i <= index2; i++) {
                _loop_2(i);
            }
        }
        if (lastUsedPattern) {
            this.setActive(lastUsedPattern);
            var displayText_2 = this.list.slice(this.list.indexOf(pattern1), this.list.indexOf(lastUsedPattern) + 1).map(function (pattern) {
                return pattern.getText();
            }).join('');
            var usedLeft = '';
            var left = before + to;
            for (var i = 0, start = 0; i < left.length; i++) {
                var char = left.substr(i, 1);
                var index = usedText.indexOf(char, start);
                if (index !== -1) {
                    usedLeft += char;
                    start = index + 1;
                }
            }
            position = patternOffset + usedLeft.split('').reduce(function (offset, char) {
                var i = displayText_2.indexOf(char, offset);
                return i !== -1 ? i + 1 : offset;
            }, 0);
        }
        return position;
    };
    PatternsList.prototype.inputDelete = function (position, deleted) {
        var pattern1 = this.getPatternByPositionRight(position);
        var pattern2 = this.getPatternByPositionLeft(position + deleted.length);
        var index1 = this.list.indexOf(pattern1);
        var index2 = this.list.indexOf(pattern2);
        if (pattern1 === pattern2) {
            var patternText = pattern1.getText();
            var patternOffset = this.getPatternOffset(pattern1);
            var before_1 = patternText.substring(0, position - patternOffset);
            var after_1 = patternText.substring(position - patternOffset + deleted.length);
            this.setActive(pattern1);
            var usedText_1 = '';
            pattern1.setInput(before_1 + after_1, function (restText, applyText) {
                usedText_1 = applyText;
            });
            if (pattern1.canActivate() && pattern1.getIsEmpty()) {
                position = patternOffset;
            } else {
                position = patternOffset + restorePosition_1.restorePosition(patternText, usedText_1, position - patternOffset);
            }
        } else {
            var patternText = pattern2.getText();
            var patternOffset = this.getPatternOffset(pattern2);
            var newText = patternText.substring(position - patternOffset + deleted.length);
            pattern2.setInput(newText);
            patternText = pattern1.getText();
            patternOffset = this.getPatternOffset(pattern1);
            newText = patternText.substring(0, position - patternOffset);
            pattern1.setInput(newText);
            this.list.slice(index1 + 1, index2).forEach(function (pattern) {
                return pattern.setInput('');
            });
            if (pattern1.canActivate() && pattern1.getIsEmpty()) {
                position = patternOffset;
            }
            this.setActive(pattern1);
        }
        return position;
    };
    PatternsList.prototype.setNextPatternValue = function (position) {
        var selection = null;
        var pattern = this.getPatternByPositionRight(position);
        if (pattern.canActivate()) {
            var input = pattern.getNextInput();
            pattern.setInput(input);
            this.clearActive();
            this.updateText();
            var patternOffset = this.getPatternOffset(pattern);
            selection = {
                start: patternOffset,
                end: patternOffset + pattern.getText().length
            };
        }
        return selection;
    };
    PatternsList.prototype.setPrevPatternValue = function (position) {
        var selection = null;
        var pattern = this.getPatternByPositionRight(position);
        if (pattern.canActivate()) {
            var input = pattern.getPrevInput();
            pattern.setInput(input);
            this.clearActive();
            this.updateText();
            var patternOffset = this.getPatternOffset(pattern);
            selection = {
                start: patternOffset,
                end: patternOffset + pattern.getText().length
            };
        }
        return selection;
    };
    PatternsList.prototype.getInputPosition = function (position) {
        var pattern = this.getInputPatternByPosition(position);
        var inputPosition;
        var index = this.list.indexOf(pattern);
        var patterns = this.list.slice(0, index + 1).filter(function (pattern) {
            return pattern.canActivate();
        }).reverse();
        var input;
        for (var i = 0; i < patterns.length; i = i + 1) {
            if (!patterns[i].getIsEmpty()) {
                input = patterns[i];
                break;
            }
        }
        if (input) {
            var patternOffset = this.getPatternOffset(input);
            var patternText = input.getText();
            if (position > patternOffset + patternText.length) {
                inputPosition = patternOffset + patternText.length;
            } else if (position < patternOffset) {
                inputPosition = patternOffset;
            } else {
                inputPosition = position;
            }
        } else {
            input = patterns.pop();
            inputPosition = this.getPatternOffset(input);
        }
        return inputPosition;
    };
    PatternsList.prototype.clearActive = function () {
        this.list.forEach(function (p) {
            return p.setIsActive(false);
        });
    };
    PatternsList.prototype.setActive = function (pattern) {
        this.list.forEach(function (p) {
            return p.setIsActive(p === pattern);
        });
    };
    PatternsList.prototype.getText = function () {
        return this.list.map(function (pattern) {
            return pattern.getText();
        }).join('');
    };
    PatternsList.prototype.getPatternByPosition = function (position) {
        var map = [];
        this.list.forEach(function (pattern) {
            var text = pattern.getText();
            text.split('').forEach(function (char) {
                return map.push(pattern);
            });
        });
        return map[position];
    };
    PatternsList.prototype.getPatternsByPosition = function (position) {
        var map = [];
        this.list.forEach(function (pattern) {
            var text = pattern.getText();
            text.split('').forEach(function (char) {
                return map.push(pattern);
            });
        });
        var leftPattern = map.slice(0, position).filter(function (pattern) {
            return pattern !== null;
        }).pop();
        var rightPattern = map.slice(position).filter(function (pattern) {
            return pattern !== null;
        }).reverse().pop();
        return [leftPattern, rightPattern];
    };
    PatternsList.prototype.getInputPatternByPosition = function (position) {
        var map = [];
        var inputPattern;
        this.list.forEach(function (pattern) {
            var text = pattern.getText();
            text.split('').forEach(function (char) {
                return map.push(pattern);
            });
        });
        var leftPatterns = map.slice(0, position).filter(function (pattern) {
            return pattern !== null;
        }).reverse();
        var rightPatterns = map.slice(position).filter(function (pattern) {
            return pattern !== null;
        });
        var pattern = rightPatterns[0];
        if (pattern && pattern.canActivate()) {
            inputPattern = pattern;
        } else if (leftPatterns[0] && leftPatterns[0].canActivate()) {
            pattern = leftPatterns[0];
            inputPattern = pattern.canActivate() ? pattern : rightPatterns[0];
        } else {
            for (var i = 0; i < rightPatterns.length; i++) {
                if (rightPatterns[i].canActivate()) {
                    inputPattern = rightPatterns[i];
                    break;
                }
            }
        }
        return inputPattern;
    };
    PatternsList.prototype.getPatternByPositionRight = function (position) {
        var patterns = this.getPatternsByPosition(position);
        return patterns[1] || patterns[0];
    };
    PatternsList.prototype.getPatternByPositionLeft = function (position) {
        var patterns = this.getPatternsByPosition(position);
        return patterns[0] || patterns[1];
    };
    PatternsList.prototype.getPatternOffset = function (pattern) {
        var offset = 0;
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i] === pattern) {
                break;
            }
            offset += this.list[i].getText().length;
        }
        return offset;
    };
    PatternsList.prototype.getInputPatternSelection = function () {
        var pattern = this.getInputPattern();
        var offset = this.getPatternOffset(pattern);
        return {
            start: offset,
            end: offset + pattern.getText().length
        };
    };
    PatternsList.prototype.getInputPattern = function () {
        var inputPattern = null;
        for (var i = 0; i < this.list.length; i = i + 1) {
            var pattern = this.list[i];
            if (pattern.canActivate()) {
                inputPattern = pattern;
                break;
            }
        }
        return inputPattern;
    };
    PatternsList.prototype.getPatternsValue = function () {
        var map = {};
        this.list.forEach(function (pattern) {
            var name = pattern.getName();
            if (name) {
                map[name] = pattern.getValue();
            }
        });
        return map;
    };
    PatternsList.prototype.updateText = function () {
        this.list.forEach(function (pattern) {
            return pattern.updateText();
        });
    };
    PatternsList.prototype.updateDisplay = function () {
        this.setActive(null);
        this.updateText();
    };
    PatternsList.prototype.dispose = function () {
        this.list.length = 0;
    };
    return PatternsList;
}();
exports.PatternsList = PatternsList;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Builder = function () {
    function Builder() {
        this.builders = {};
    }
    Builder.prototype.build = function (name, template, locale) {
        var maskBuilder = this.builders[name];
        return maskBuilder.build(template, locale);
    };
    Builder.prototype.register = function (name, builder) {
        this.builders[name] = builder;
    };
    return Builder;
}();
exports.Builder = Builder;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var RegExpSelector = function () {
    function RegExpSelector(regexp) {
        this.regexp = regexp;
    }
    RegExpSelector.prototype.match = function (text) {
        var data = null,
            patternText,
            patternStart,
            match = text.match(this.regexp);
        if (match) {
            patternText = match[0];
            patternStart = text.indexOf(patternText);
            data = {
                text: patternText,
                start: patternStart,
                end: patternStart + patternText.length
            };
        }
        return data;
    };
    return RegExpSelector;
}();
exports.RegExpSelector = RegExpSelector;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var EventEmitter_1 = __webpack_require__(32);
var CHANGE_EVENT = 'change';
var ValueModel = function () {
    function ValueModel() {
        this.eventEmitter = new EventEmitter_1.EventEmitter();
    }
    ValueModel.prototype.setValue = function (value, params) {
        var changed = this.value !== value;
        if (typeof value === 'number' && typeof this.value === 'number') {
            if (isNaN(value) && isNaN(this.value)) {
                changed = false;
            }
        }
        var oldValue = this.value;
        this.value = value;
        if (changed) {
            var data = {
                oldValue: oldValue,
                newValue: value,
                params: params || {}
            };
            this.eventEmitter.emit(CHANGE_EVENT, data);
        }
    };
    ValueModel.prototype.getValue = function () {
        return this.value;
    };
    ValueModel.prototype.onChange = function (handler) {
        return this.eventEmitter.on(CHANGE_EVENT, handler);
    };
    ValueModel.prototype.dispose = function () {
        this.eventEmitter.dispose();
        this.value = null;
    };
    return ValueModel;
}();
exports.ValueModel = ValueModel;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var API_1 = __webpack_require__(36);
var DateTimeEditor_1 = __webpack_require__(37);
var TemplateEditor_1 = __webpack_require__(39);
var NumberEditor_1 = __webpack_require__(38);
var Mask = function () {
    function Mask() {}
    Mask.dateTime = function (el, template, options) {
        var mask = Mask.api.createDateTimeMask(template, options);
        return new DateTimeEditor_1.DateTimeEditor(el, mask);
    };
    Mask.template = function (el, template, options) {
        var mask = Mask.api.createTemplateMask(template, options);
        return new TemplateEditor_1.TemplateEditor(el, mask);
    };
    Mask.number = function (el, template) {
        var mask = Mask.api.createNumberMask(template);
        return new NumberEditor_1.NumberEditor(el, mask);
    };
    return Mask;
}();
Mask.api = new API_1.API();
exports.Mask = Mask;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var NumberParser_1 = __webpack_require__(33);
var NumberFormatter_1 = __webpack_require__(5);
var Localization_1 = __webpack_require__(79);
var Locale = function () {
    function Locale(lang) {
        var _this = this;
        this.numberParser = new NumberParser_1.NumberParser(this);
        this.numberFormatter = new NumberFormatter_1.NumberFormatter(this);
        var localization = new Localization_1.Localization();
        var current = localization.getLocalization(lang);
        Object.keys(current).forEach(function (name) {
            return _this[name] = current[name];
        });
    }
    return Locale;
}();
exports.Locale = Locale;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var ru_1 = __webpack_require__(83);
var en_1 = __webpack_require__(82);
var Localization = function () {
    function Localization() {}
    Localization.prototype.getLocalization = function (lang) {
        lang = lang.toUpperCase();
        var localization;
        switch (lang) {
            case 'RU':
                localization = new ru_1.Ru();
                break;
            case 'EN':
                localization = new en_1.En();
                break;
            default:
                localization = this.getDefaultLocalization();
        }
        return localization;
    };
    Localization.prototype.getDefaultLocalization = function () {
        return new ru_1.Ru();
    };
    return Localization;
}();
exports.Localization = Localization;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var NumberFormatter_1 = __webpack_require__(5);
var CurrencyFormatter = function (_super) {
    __extends(CurrencyFormatter, _super);
    function CurrencyFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CurrencyFormatter.prototype.getDecimalSeparator = function () {
        return this.locale.currencyDecimalSeparator;
    };
    CurrencyFormatter.prototype.getNegativePattern = function () {
        return this.locale.currencyNegativePattern;
    };
    CurrencyFormatter.prototype.getPositivePattern = function () {
        return this.locale.currencyPositivePattern;
    };
    CurrencyFormatter.prototype.getGroupSeparator = function () {
        return this.locale.currencyGroupSeparator;
    };
    CurrencyFormatter.prototype.getCurrencySymbol = function () {
        return this.locale.currencySymbol;
    };
    CurrencyFormatter.prototype.getWrapper = function (options) {
        var _this = this;
        var pattern = this.getPattern(options.isNegative);
        return pattern.split(/c/i).map(function (t) {
            return t.replace('$', _this.getCurrencySymbol());
        });
    };
    return CurrencyFormatter;
}(NumberFormatter_1.NumberFormatter);
exports.CurrencyFormatter = CurrencyFormatter;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var NumberFormatter_1 = __webpack_require__(5);
var PercentFormatter = function (_super) {
    __extends(PercentFormatter, _super);
    function PercentFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PercentFormatter.prototype.getDecimalSeparator = function () {
        return this.locale.percentDecimalSeparator;
    };
    PercentFormatter.prototype.getNegativePattern = function () {
        return this.locale.percentNegativePattern;
    };
    PercentFormatter.prototype.getPositivePattern = function () {
        return this.locale.percentPositivePattern;
    };
    PercentFormatter.prototype.getGroupSeparator = function () {
        return this.locale.percentGroupSeparator;
    };
    PercentFormatter.prototype.getPercentSymbol = function () {
        return this.locale.percentSymbol;
    };
    PercentFormatter.prototype.getWrapper = function (options) {
        var _this = this;
        var pattern = this.getPattern(options.isNegative);
        return pattern.split(/p/i).map(function (t) {
            return t.replace('%', _this.getPercentSymbol());
        });
    };
    return PercentFormatter;
}(NumberFormatter_1.NumberFormatter);
exports.PercentFormatter = PercentFormatter;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var En = function () {
    function En() {
        this.letter = 'a-zA-Z';
        this.numberDecimalDigits = 2;
        this.numberDecimalSeparator = '.';
        this.numberGroupSeparator = ',';
        this.numberGroupSize = 3;
        this.numberNegativePattern = '-n';
        this.numberPositivePattern = 'n';
        this.percentDecimalDigits = 2;
        this.percentDecimalSeparator = '.';
        this.percentGroupSeparator = ',';
        this.percentSymbol = '%';
        this.percentNegativePattern = '-p %';
        this.percentPositivePattern = 'p %';
        this.currencyDecimalDigits = 2;
        this.currencyDecimalSeparator = '.';
        this.currencyGroupSeparator = ',';
        this.currencySymbol = '$';
        this.currencyNegativePattern = '($c)';
        this.currencyPositivePattern = '$c';
        this.negativeInfinitySymbol = '-Infinity';
        this.positiveInfinitySymbol = 'Infinity';
        this.NaNSymbol = 'NaN';
        this.months = {
            full: 'January,February,March,April,May,June,July,August,September,October,November,December'.split(',')
        };
    }
    return En;
}();
exports.En = En;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Ru = function () {
    function Ru() {
        this.letter = 'а-яА-Яa-zA-Z';
        this.numberDecimalDigits = 2;
        this.numberDecimalSeparator = ',';
        this.numberGroupSeparator = ' ';
        this.numberGroupSize = 3;
        this.numberNegativePattern = '-n';
        this.numberPositivePattern = 'n';
        this.percentDecimalDigits = 2;
        this.percentDecimalSeparator = ',';
        this.percentGroupSeparator = ' ';
        this.percentSymbol = '%';
        this.percentNegativePattern = '-p %';
        this.percentPositivePattern = 'p %';
        this.currencyDecimalDigits = 2;
        this.currencyDecimalSeparator = ',';
        this.currencyGroupSeparator = ' ';
        this.currencySymbol = 'р.';
        this.currencyNegativePattern = '-c$';
        this.currencyPositivePattern = 'c$';
        this.negativeInfinitySymbol = '-бесконечность';
        this.positiveInfinitySymbol = 'бесконечность';
        this.NaNSymbol = 'NaN';
        this.months = {
            full: 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',')
        };
    }
    return Ru;
}();
exports.Ru = Ru;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseNumberParser_1 = __webpack_require__(13);
var IntegralPartParser_1 = __webpack_require__(16);
var DecimalSeparatorParser_1 = __webpack_require__(14);
var FractionalPartParser_1 = __webpack_require__(15);
var CurrencyParser = function (_super) {
    __extends(CurrencyParser, _super);
    function CurrencyParser(locale) {
        var _this = _super.call(this, locale) || this;
        _this.locale = locale;
        _this.integralPartParser = new IntegralPartParser_1.IntegralPartParser(locale.currencyGroupSeparator, locale.currencyDecimalSeparator);
        _this.decimalSeparatorParser = new DecimalSeparatorParser_1.DecimalSeparatorParser(locale.currencyDecimalSeparator);
        _this.fractionalPartParser = new FractionalPartParser_1.FractionalPartParser();
        return _this;
    }
    CurrencyParser.prototype.getDecimalSeparator = function () {
        return this.locale.currencyDecimalSeparator;
    };
    return CurrencyParser;
}(BaseNumberParser_1.BaseNumberParser);
exports.CurrencyParser = CurrencyParser;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseNumberParser_1 = __webpack_require__(13);
var IntegralPartParser_1 = __webpack_require__(16);
var DecimalSeparatorParser_1 = __webpack_require__(14);
var FractionalPartParser_1 = __webpack_require__(15);
var PercentParser = function (_super) {
    __extends(PercentParser, _super);
    function PercentParser(locale) {
        var _this = _super.call(this, locale) || this;
        _this.locale = locale;
        _this.integralPartParser = new IntegralPartParser_1.IntegralPartParser(locale.percentGroupSeparator, locale.percentDecimalSeparator);
        _this.decimalSeparatorParser = new DecimalSeparatorParser_1.DecimalSeparatorParser(locale.percentDecimalSeparator);
        _this.fractionalPartParser = new FractionalPartParser_1.FractionalPartParser();
        return _this;
    }
    PercentParser.prototype.getDecimalSeparator = function () {
        return this.locale.percentDecimalSeparator;
    };
    return PercentParser;
}(BaseNumberParser_1.BaseNumberParser);
exports.PercentParser = PercentParser;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function restoreNumberPrecision(value1, value2) {
    var _a = value1.toString(10).split('.'),
        _b = _a[1],
        fract = _b === void 0 ? '' : _b;
    return +value2.toFixed(fract.length);
}
exports.restoreNumberPrecision = restoreNumberPrecision;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var DiffOperation;
(function (DiffOperation) {
    DiffOperation[DiffOperation["Insert"] = 0] = "Insert";
    DiffOperation[DiffOperation["Delete"] = 1] = "Delete";
    DiffOperation[DiffOperation["Change"] = 2] = "Change";
    DiffOperation[DiffOperation["None"] = 3] = "None";
})(DiffOperation = exports.DiffOperation || (exports.DiffOperation = {}));
function strDiff(text1, text2, position) {
    var operation = DiffOperation.None,
        result = { operation: operation };
    if (text1 === text2) {
        result = {
            operation: DiffOperation.None
        };
    } else if (text2.length === 0) {
        result = {
            operation: DiffOperation.Delete,
            src: text1,
            position: 0
        };
    } else {
        var atBegin = getCommonAtBegin(text1, text2);
        var atEnd = getCommonAtEnd(text1.substr(atBegin), text2.substr(atBegin));
        var src = void 0,
            dst = void 0,
            position_1 = atBegin;
        if (atBegin === 0 && atEnd === 0) {
            operation = DiffOperation.Change;
            src = text1;
            dst = text2;
        } else if (atBegin + atEnd < text1.length) {
            operation = DiffOperation.Change;
            src = text1.substr(atBegin, text1.length - atBegin - atEnd);
            dst = text2.substr(atBegin, text2.length - atBegin - atEnd);
            if (dst.length === 0 && src.length > 0) {
                dst = void 0;
                operation = DiffOperation.Delete;
            }
        } else if (text1.length > text2.length) {
            operation = DiffOperation.Delete;
            src = text1.substr(atBegin, text1.length - atBegin - atEnd);
        } else if (text1.length < text2.length) {
            operation = DiffOperation.Insert;
            dst = text2.substr(atBegin, text2.length - atBegin - atEnd);
        } else {
            operation = DiffOperation.Change;
            src = text1.substr(atBegin, text1.length - atBegin - atEnd);
            dst = text2.substr(atBegin, text2.length - atBegin - atEnd);
        }
        result = {
            operation: operation,
            src: src,
            dst: dst,
            position: position_1
        };
    }
    return checkAmbiguousOperation(text1, text2, result, position);
}
exports.strDiff = strDiff;
function checkAmbiguousOperation(text1, text2, diff, position) {
    switch (diff.operation) {
        case DiffOperation.Insert:
            diff = checkAmbiguousInsert(text1, text2, diff, position);
            break;
        case DiffOperation.Delete:
            diff = checkAmbiguousDelete(text1, text2, diff, position);
            break;
    }
    return diff;
}
function checkAmbiguousInsert(text1, text2, diff, position) {
    var updatedPosition = null;
    for (var i = diff.position; i >= 0; i = i - diff.dst.length) {
        var checkPosition = i - diff.dst.length;
        if (text2.substring(checkPosition, i) === diff.dst) {
            if (checkPosition === position - diff.dst.length) {
                updatedPosition = checkPosition;
                break;
            }
        }
    }
    if (updatedPosition !== null) {
        diff.position = updatedPosition;
    }
    return diff;
}
function checkAmbiguousDelete(text1, text2, diff, position) {
    var updatedPosition = null;
    for (var i = diff.position; i >= 0; i = i - diff.src.length) {
        var checkPosition = i - diff.src.length;
        if (text1.substring(checkPosition, i) === diff.src) {
            if (checkPosition >= position) {
                updatedPosition = checkPosition;
            } else {
                break;
            }
        }
    }
    if (updatedPosition !== null) {
        diff.position = updatedPosition;
    }
    return diff;
}
function getCommonAtBegin(text1, text2) {
    var len = Math.min(text1.length, text2.length);
    var common = 0;
    for (var i = 0; i < len; i = i + 1) {
        if (text1[i] !== text2[i]) {
            break;
        }
        common++;
    }
    return common;
}
function getCommonAtEnd(text1, text2) {
    var arr1 = text1.split('').reverse();
    var arr2 = text2.split('').reverse();
    var common = 0;
    var len = Math.min(arr1.length, arr2.length);
    for (var i = 0; i < len; i = i + 1) {
        if (arr1[i] !== arr2[i]) {
            break;
        }
        common++;
    }
    return common;
}

/***/ })
/******/ ]);
});