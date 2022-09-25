/*! For license information please see component---src-pages-index-js-6e7581ff9bac7b71ec95.js.LICENSE.txt */
(self.webpackChunkwoogi_blog=self.webpackChunkwoogi_blog||[]).push([[678],{7091:function(t){"use strict";var e="%[a-f0-9]{2}",r=new RegExp(e,"gi"),n=new RegExp("("+e+")+","gi");function o(t,e){try{return decodeURIComponent(t.join(""))}catch(a){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],o(r),o(n))}function a(t){try{return decodeURIComponent(t)}catch(a){for(var e=t.match(r),n=1;n<e.length;n++)e=(t=o(e,n).join("")).match(r);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"��","%FF%FE":"��"},o=n.exec(t);o;){try{r[o[0]]=decodeURIComponent(o[0])}catch(e){var i=a(o[0]);i!==o[0]&&(r[o[0]]=i)}o=n.exec(t)}r["%C2"]="�";for(var l=Object.keys(r),c=0;c<l.length;c++){var s=l[c];t=t.replace(new RegExp(s,"g"),r[s])}return t}(t)}}},8616:function(t){"use strict";t.exports=function(t,e){for(var r={},n=Object.keys(t),o=Array.isArray(e),a=0;a<n.length;a++){var i=n[a],l=t[i];(o?-1!==e.indexOf(i):e(i,l,t))&&(r[i]=l)}return r}},2203:function(t,e,r){"use strict";var n=r(8416),o=r(7424),a=r(861);function i(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c=r(8936),s=r(7091),u=r(4734),f=r(8616),p=Symbol("encodeFragmentIdentifier");function d(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function m(t,e){return e.encode?e.strict?c(t):encodeURIComponent(t):t}function y(t,e){return e.decode?s(t):t}function h(t){return Array.isArray(t)?t.sort():"object"==typeof t?h(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}function v(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function g(t){var e=(t=v(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function b(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function x(t,e){d((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"colon-list-separator":return function(t,r,n){e=/(:list)$/.exec(t),t=t.replace(/:list$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return function(e,r,n){var o="string"==typeof r&&r.includes(t.arrayFormatSeparator),a="string"==typeof r&&!o&&y(r,t).includes(t.arrayFormatSeparator);r=a?y(r,t):r;var i=o||a?r.split(t.arrayFormatSeparator).map((function(e){return y(e,t)})):null===r?r:y(r,t);n[e]=i};case"bracket-separator":return function(e,r,n){var o=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),o){var a=null===r?[]:r.split(t.arrayFormatSeparator).map((function(e){return y(e,t)}));void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=a}else n[e]=r?y(r,t):r};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),n=Object.create(null);if("string"!=typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;var a,l=i(t.split("&"));try{for(l.s();!(a=l.n()).done;){var c=a.value;if(""!==c){var s=u(e.decode?c.replace(/\+/g," "):c,"="),f=o(s,2),p=f[0],m=f[1];m=void 0===m?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?m:y(m,e),r(y(p,e),m,n)}}}catch(C){l.e(C)}finally{l.f()}for(var v=0,g=Object.keys(n);v<g.length;v++){var x=g[v],S=n[x];if("object"==typeof S&&null!==S)for(var E=0,w=Object.keys(S);E<w.length;E++){var O=w[E];S[O]=b(S[O],e)}else n[x]=b(S,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((function(t,e){var r=n[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=h(r):t[e]=r,t}),Object.create(null))}e.extract=g,e.parse=x,e.stringify=function(t,e){if(!t)return"";d((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var r=function(r){return e.skipNull&&null==t[r]||e.skipEmptyString&&""===t[r]},n=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var o=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[m(e,t),"[",o,"]"].join("")]:[[m(e,t),"[",m(o,t),"]=",m(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[m(e,t),"[]"].join("")]:[[m(e,t),"[]=",m(n,t)].join("")])}};case"colon-list-separator":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[m(e,t),":list="].join("")]:[[m(e,t),":list=",m(n,t)].join("")])}};case"comma":case"separator":case"bracket-separator":var e="bracket-separator"===t.arrayFormat?"[]=":"=";return function(r){return function(n,o){return void 0===o||t.skipNull&&null===o||t.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[m(r,t),e,m(o,t)].join("")]:[[n,m(o,t)].join(t.arrayFormatSeparator)])}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[m(e,t)]:[[m(e,t),"=",m(n,t)].join("")])}}}}(e),o={},i=0,l=Object.keys(t);i<l.length;i++){var c=l[i];r(c)||(o[c]=t[c])}var s=Object.keys(o);return!1!==e.sort&&s.sort(e.sort),s.map((function(r){var o=t[r];return void 0===o?"":null===o?m(r,e):Array.isArray(o)?0===o.length&&"bracket-separator"===e.arrayFormat?m(r,e)+"[]":o.reduce(n(r),[]).join("&"):m(r,e)+"="+m(o,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){e=Object.assign({decode:!0},e);var r=u(t,"#"),n=o(r,2),a=n[0],i=n[1];return Object.assign({url:a.split("?")[0]||"",query:x(g(t),e)},e&&e.parseFragmentIdentifier&&i?{fragmentIdentifier:y(i,e)}:{})},e.stringifyUrl=function(t,r){r=Object.assign(n({encode:!0,strict:!0},p,!0),r);var o=v(t.url).split("?")[0]||"",a=e.extract(t.url),i=e.parse(a,{sort:!1}),l=Object.assign(i,t.query),c=e.stringify(l,r);c&&(c="?".concat(c));var s=function(t){var e="",r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url);return t.fragmentIdentifier&&(s="#".concat(r[p]?m(t.fragmentIdentifier,r):t.fragmentIdentifier)),"".concat(o).concat(c).concat(s)},e.pick=function(t,r,o){o=Object.assign(n({parseFragmentIdentifier:!0},p,!1),o);var a=e.parseUrl(t,o),i=a.url,l=a.query,c=a.fragmentIdentifier;return e.stringifyUrl({url:i,query:f(l,r),fragmentIdentifier:c},o)},e.exclude=function(t,r,n){var o=Array.isArray(r)?function(t){return!r.includes(t)}:function(t,e){return!r(t,e)};return e.pick(t,o,n)}},7214:function(t,e,r){var n,o;o=void 0!==r.g?r.g:"undefined"!=typeof window?window:this,n=function(){return function(t){"use strict";var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},r=function(){var t={};return Array.prototype.forEach.call(arguments,(function(e){for(var r in e){if(!e.hasOwnProperty(r))return;t[r]=e[r]}})),t},n=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,r=String(t),n=r.length,o=-1,a="",i=r.charCodeAt(0);++o<n;){if(0===(e=r.charCodeAt(o)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=1<=e&&e<=31||127==e||0===o&&48<=e&&e<=57||1===o&&48<=e&&e<=57&&45===i?"\\"+e.toString(16)+" ":128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?r.charAt(o):"\\"+r.charAt(o)}return"#"+a},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(e){return e?(r=e,parseInt(t.getComputedStyle(r).height,10)+e.offsetTop):0;var r},i=function(e,r,n){0===e&&document.body.focus(),n||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),t.scrollTo(0,r))},l=function(e,r,n,o){if(r.emitEvents&&"function"==typeof t.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(a)}};return function(c,s){var u,f,p,d,m={cancelScroll:function(t){cancelAnimationFrame(d),d=null,t||l("scrollCancel",u)},animateScroll:function(n,c,s){m.cancelScroll();var f=r(u||e,s||{}),y="[object Number]"===Object.prototype.toString.call(n),h=y||!n.tagName?null:n;if(y||h){var v=t.pageYOffset;f.header&&!p&&(p=document.querySelector(f.header));var g,b,x,S,E,w,O,C,j=a(p),k=y?n:function(e,r,n,a){var i=0;if(e.offsetParent)for(;i+=e.offsetTop,e=e.offsetParent;);return i=Math.max(i-r-n,0),a&&(i=Math.min(i,o()-t.innerHeight)),i}(h,j,parseInt("function"==typeof f.offset?f.offset(n,c):f.offset,10),f.clip),A=k-v,I=o(),M=0,T=(g=A,x=(b=f).speedAsDuration?b.speed:Math.abs(g/1e3*b.speed),b.durationMax&&x>b.durationMax?b.durationMax:b.durationMin&&x<b.durationMin?b.durationMin:parseInt(x,10)),_=function e(r){var o,a,s;S||(S=r),M+=r-S,w=v+A*(a=E=1<(E=0===T?0:M/T)?1:E,"easeInQuad"===(o=f).easing&&(s=a*a),"easeOutQuad"===o.easing&&(s=a*(2-a)),"easeInOutQuad"===o.easing&&(s=a<.5?2*a*a:(4-2*a)*a-1),"easeInCubic"===o.easing&&(s=a*a*a),"easeOutCubic"===o.easing&&(s=--a*a*a+1),"easeInOutCubic"===o.easing&&(s=a<.5?4*a*a*a:(a-1)*(2*a-2)*(2*a-2)+1),"easeInQuart"===o.easing&&(s=a*a*a*a),"easeOutQuart"===o.easing&&(s=1- --a*a*a*a),"easeInOutQuart"===o.easing&&(s=a<.5?8*a*a*a*a:1-8*--a*a*a*a),"easeInQuint"===o.easing&&(s=a*a*a*a*a),"easeOutQuint"===o.easing&&(s=1+--a*a*a*a*a),"easeInOutQuint"===o.easing&&(s=a<.5?16*a*a*a*a*a:1+16*--a*a*a*a*a),o.customEasing&&(s=o.customEasing(a)),s||a),t.scrollTo(0,Math.floor(w)),function(e,r){var o=t.pageYOffset;if(e==r||o==r||(v<r&&t.innerHeight+o)>=I)return m.cancelScroll(!0),i(n,r,y),l("scrollStop",f,n,c),!(d=S=null)}(w,k)||(d=t.requestAnimationFrame(e),S=r)};0===t.pageYOffset&&t.scrollTo(0,0),O=n,C=f,y||history.pushState&&C.updateURL&&history.pushState({smoothScroll:JSON.stringify(C),anchor:O.id},document.title,O===document.documentElement?"#top":"#"+O.id),"matchMedia"in t&&t.matchMedia("(prefers-reduced-motion)").matches?i(n,Math.floor(k),!1):(l("scrollStart",f,n,c),m.cancelScroll(!0),t.requestAnimationFrame(_))}}},y=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(f=e.target.closest(c))&&"a"===f.tagName.toLowerCase()&&!e.target.closest(u.ignore)&&f.hostname===t.location.hostname&&f.pathname===t.location.pathname&&/#/.test(f.href)){var r,o;try{r=n(decodeURIComponent(f.hash))}catch(e){r=n(f.hash)}if("#"===r){if(!u.topOnEmptyHash)return;o=document.documentElement}else o=document.querySelector(r);(o=o||"#top"!==r?o:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var r=t.location.hash;r=r||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:r||t.pageYOffset},document.title,r||t.location.href)}}(u),m.animateScroll(o,f))}},h=function(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(u)){var e=history.state.anchor;"string"==typeof e&&e&&!(e=document.querySelector(n(history.state.anchor)))||m.animateScroll(e,null,{updateURL:!1})}};return m.destroy=function(){u&&(document.removeEventListener("click",y,!1),t.removeEventListener("popstate",h,!1),m.cancelScroll(),d=p=f=u=null)},function(){if(!("querySelector"in document&&"addEventListener"in t&&"requestAnimationFrame"in t&&"closest"in t.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";m.destroy(),u=r(e,s||{}),p=u.header?document.querySelector(u.header):null,document.addEventListener("click",y,!1),u.updateURL&&u.popstate&&t.addEventListener("popstate",h,!1)}(),m}}(o)}.apply(e,[]),void 0===n||(t.exports=n)},9634:function(t){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var r,n=t.HTMLElement||t.Element,o={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:n.prototype.scroll||l,scrollIntoView:n.prototype.scrollIntoView},a=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,i=(r=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(r)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?m.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):o.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?o.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):m.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var t=arguments[0].left,e=arguments[0].top;m.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var r=p(this),n=r.getBoundingClientRect(),a=this.getBoundingClientRect();r!==e.body?(m.call(this,r,r.scrollLeft+a.left-n.left,r.scrollTop+a.top-n.top),"fixed"!==t.getComputedStyle(r).position&&t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):t.scrollBy({left:a.left,top:a.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(t,e){this.scrollLeft=t,this.scrollTop=e}function c(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(t,e){return"Y"===e?t.clientHeight+i<t.scrollHeight:"X"===e?t.clientWidth+i<t.scrollWidth:void 0}function u(e,r){var n=t.getComputedStyle(e,null)["overflow"+r];return"auto"===n||"scroll"===n}function f(t){var e=s(t,"Y")&&u(t,"Y"),r=s(t,"X")&&u(t,"X");return e||r}function p(t){for(;t!==e.body&&!1===f(t);)t=t.parentNode||t.host;return t}function d(e){var r,n,o,i,l=(a()-e.startTime)/468;i=l=l>1?1:l,r=.5*(1-Math.cos(Math.PI*i)),n=e.startX+(e.x-e.startX)*r,o=e.startY+(e.y-e.startY)*r,e.method.call(e.scrollable,n,o),n===e.x&&o===e.y||t.requestAnimationFrame(d.bind(t,e))}function m(r,n,i){var c,s,u,f,p=a();r===e.body?(c=t,s=t.scrollX||t.pageXOffset,u=t.scrollY||t.pageYOffset,f=o.scroll):(c=r,s=r.scrollLeft,u=r.scrollTop,f=l),d({scrollable:c,method:f,startTime:p,startX:s,startY:u,x:n,y:i})}}}}()},4734:function(t){"use strict";t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},8936:function(t){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},448:function(t,e,r){"use strict";r.r(e),r.d(e,{Head:function(){return C},default:function(){return O}});var n,o=r(7294),a=r(1597),i=r(4908),l=r.n(i),c=r(3494),s=r(8771),u=r(5976),f=r(9357),p=function(t){var e=t.title,r=t.selectedCategory,n=t.onClick,a=t.scrollToCenter,i=(0,o.useRef)(null),l=(0,o.useCallback)((function(){a(i),n(e)}),[i]);return(0,o.useEffect)((function(){r===e&&a(i)}),[r,i]),o.createElement("li",{ref:i,className:"item",role:"tab","aria-selected":r===e?"true":"false"},o.createElement("div",{onClick:l},e))},d=r(9175),m=function(t){var e=t.categories,r=t.category,n=t.selectCategory,a=(0,o.useRef)(null),i=(0,o.useCallback)((function(t){var e=t.current.offsetWidth,r=a.current,n=r.scrollLeft,o=r.offsetWidth,i=n+(t.current.getBoundingClientRect().left-a.current.getBoundingClientRect().left)-o/2+e/2;a.current.scroll({left:i,top:0,behavior:"smooth"})}),[a]);return o.createElement("ul",{ref:a,className:"category-container",role:"tablist",id:"category",style:{margin:"0 -"+(0,d.qZ)(3/4)}},o.createElement(p,{title:"All",selectedCategory:r,onClick:n,scrollToCenter:i}),e.map((function(t,e){return o.createElement(p,{key:e,title:t,selectedCategory:r,onClick:n,scrollToCenter:i})})))},y=r(2203),h=r(7214),v=r.n(h),g=r(9634),b=r.n(g);function x(t){if(!n)throw Error("Not founded SmoothScroll instance");return t<window.scrollY&&n.animateScroll(t),n}var S="All";function E(){var t=(0,o.useState)(S),e=t[0],r=t[1],a=(0,o.useCallback)((function(t){r(t),x(316),window.history.pushState({category:t},"",window.location.pathname+"?"+y.stringify({category:t}))}),[]),i=(0,o.useCallback)((function(t){void 0===t&&(t=!0);var e=y.parse(window.location.search).category;r(null==e?S:e),t&&x(316)}),[]);return(0,o.useEffect)((function(){return b().polyfill(),n=new(v())('a[href*="#"]',{speed:500,speedAsDuration:!0}),function(){!function(){if(!n)throw Error("Not founded SmoothScroll instance");n.destroy(),n=null}()}}),[]),(0,o.useEffect)((function(){return window.addEventListener("popstate",i),function(){window.removeEventListener("popstate",i)}}),[]),(0,o.useEffect)((function(){i(!1)}),[]),[e,a]}var w=c.default.span.withConfig({displayName:"pages__Tag",componentId:"sc-5rpeow-0"})(["padding:1px 7px;border-radius:10px;margin-bottom:5px;background-color:#c69b69;color:#fefefe;font-weight:500;"]),O=function(t){var e,r=t.data,n=t.location,i=(null===(e=r.site.siteMetadata)||void 0===e?void 0:e.title)||"Title",c=r.allMarkdownRemark.nodes,f=E(),p=f[0],d=f[1],y=o.useMemo((function(){return l()(c.map((function(t){var e;return null==t||null===(e=t.frontmatter)||void 0===e?void 0:e.category})))}),[c]),h=o.useMemo((function(){return c.filter((function(t){var e;return"All"===p||(null==t||null===(e=t.frontmatter)||void 0===e?void 0:e.category)===p}))}),[p,c]);return 0===c.length?o.createElement(u.Z,{location:n,title:i},o.createElement(s.Z,null),o.createElement("p",null,"준비 중입니다. 조금만 기다려주세요.")):o.createElement(u.Z,{location:n,title:i},o.createElement(s.Z,null),o.createElement(m,{categories:y,category:p,selectCategory:d}),o.createElement("ol",{style:{listStyle:"none"}},null==h?void 0:h.map((function(t){var e=t.frontmatter.title||t.fields.slug;return o.createElement("li",{key:t.fields.slug},o.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},o.createElement("header",null,o.createElement(w,null,t.frontmatter.category),o.createElement("h2",null,o.createElement(a.Link,{to:t.fields.slug,itemProp:"url"},o.createElement("span",{itemProp:"headline"},e))),o.createElement("small",null,t.frontmatter.date)),o.createElement("section",null,o.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt},itemProp:"description"}))))}))))},C=function(){return o.createElement(f.Z,{title:"Home"})}},1196:function(t){t.exports=function(t,e,r){for(var n=-1,o=null==t?0:t.length;++n<o;)if(r(e,t[n]))return!0;return!1}},5652:function(t,e,r){var n=r(8668),o=r(7443),a=r(1196),i=r(4757),l=r(3593),c=r(1814);t.exports=function(t,e,r){var s=-1,u=o,f=t.length,p=!0,d=[],m=d;if(r)p=!1,u=a;else if(f>=200){var y=e?null:l(t);if(y)return c(y);p=!1,u=i,m=new n}else m=e?[]:d;t:for(;++s<f;){var h=t[s],v=e?e(h):h;if(h=r||0!==h?h:0,p&&v==v){for(var g=m.length;g--;)if(m[g]===v)continue t;e&&m.push(v),d.push(h)}else u(m,v,r)||(m!==d&&m.push(v),d.push(h))}return d}},3593:function(t,e,r){var n=r(8525),o=r(308),a=r(1814),i=n&&1/a(new n([,-0]))[1]==1/0?function(t){return new n(t)}:o;t.exports=i},4908:function(t,e,r){var n=r(5652);t.exports=function(t){return t&&t.length?n(t):[]}},3897:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.__esModule=!0,t.exports.default=t.exports},5372:function(t){t.exports=function(t){if(Array.isArray(t))return t},t.exports.__esModule=!0,t.exports.default=t.exports},3405:function(t,e,r){var n=r(3897);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.__esModule=!0,t.exports.default=t.exports},8416:function(t){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports},9498:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},8872:function(t){t.exports=function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(c){l=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}},t.exports.__esModule=!0,t.exports.default=t.exports},2218:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},2281:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},7424:function(t,e,r){var n=r(5372),o=r(8872),a=r(6116),i=r(2218);t.exports=function(t,e){return n(t)||o(t,e)||a(t,e)||i()},t.exports.__esModule=!0,t.exports.default=t.exports},861:function(t,e,r){var n=r(3405),o=r(9498),a=r(6116),i=r(2281);t.exports=function(t){return n(t)||o(t)||a(t)||i()},t.exports.__esModule=!0,t.exports.default=t.exports},6116:function(t,e,r){var n=r(3897);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=component---src-pages-index-js-6e7581ff9bac7b71ec95.js.map