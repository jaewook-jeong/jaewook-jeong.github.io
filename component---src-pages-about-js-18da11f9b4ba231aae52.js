(self.webpackChunkwoogi_blog=self.webpackChunkwoogi_blog||[]).push([[682],{9357:function(t,n,e){"use strict";var r=e(7294),o=e(1597),c=function(t){var n,e=t.description,c=(t.lang,t.title),i=t.children,u=(0,o.useStaticQuery)("2841359383").site,a=e||u.siteMetadata.description,l=null===(n=u.siteMetadata)||void 0===n?void 0:n.title;return r.createElement(r.Fragment,null,r.createElement("title",null,l?c+" | "+l:c),r.createElement("meta",{name:"description",content:a}),r.createElement("meta",{property:"og:title",content:c}),r.createElement("meta",{property:"og:description",content:a}),r.createElement("meta",{property:"og:type",content:"website"}),i)};c.defaultProps={description:""},n.Z=c},4633:function(t,n,e){"use strict";e.r(n);var r=e(7294),o=e(1597),c=e(9175),i=e(9357);n.default=function(){var t=(0,o.useStaticQuery)("1518250040"),n=t.site.siteMetadata.resume,e=t.allMarkdownRemark.edges[0].node;return r.createElement(r.Fragment,null,r.createElement(i.Z,{title:n.title,description:n.description}),r.createElement("div",{className:"about",style:{marginLeft:"auto",marginRight:"auto",maxWidth:(0,c.qZ)(28),padding:(0,c.qZ)(.5)+" "+(0,c.qZ)(3/4)+" "+(0,c.qZ)(1.5)+" "+(0,c.qZ)(3/4)}},r.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}})))}},2705:function(t,n,e){var r=e(5639).Symbol;t.exports=r},577:function(t,n,e){var r=e(852)(e(5639),"WeakMap");t.exports=r},6874:function(t){t.exports=function(t,n,e){switch(e.length){case 0:return t.call(n);case 1:return t.call(n,e[0]);case 2:return t.call(n,e[0],e[1]);case 3:return t.call(n,e[0],e[1],e[2])}return t.apply(n,e)}},7412:function(t){t.exports=function(t,n){for(var e=-1,r=null==t?0:t.length;++e<r&&!1!==n(t[e],e,t););return t}},3118:function(t,n,e){var r=e(3218),o=Object.create,c=function(){function t(){}return function(n){if(!r(n))return{};if(o)return o(n);t.prototype=n;var e=new t;return t.prototype=void 0,e}}();t.exports=c},4239:function(t,n,e){var r=e(2705),o=e(9607),c=e(2333),i=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):c(t)}},8458:function(t,n,e){var r=e(3560),o=e(5346),c=e(3218),i=e(346),u=/^\[object .+?Constructor\]$/,a=Function.prototype,l=Object.prototype,f=a.toString,s=l.hasOwnProperty,p=RegExp("^"+f.call(s).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!c(t)||o(t))&&(r(t)?p:u).test(i(t))}},5976:function(t,n,e){var r=e(6557),o=e(5357),c=e(61);t.exports=function(t,n){return c(o(t,n,r),t+"")}},6560:function(t,n,e){var r=e(5703),o=e(8777),c=e(6557),i=o?function(t,n){return o(t,"toString",{configurable:!0,enumerable:!1,value:r(n),writable:!0})}:c;t.exports=i},278:function(t){t.exports=function(t,n){var e=-1,r=t.length;for(n||(n=Array(r));++e<r;)n[e]=t[e];return n}},4429:function(t,n,e){var r=e(5639)["__core-js_shared__"];t.exports=r},8777:function(t,n,e){var r=e(852),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(n){}}();t.exports=o},1957:function(t,n,e){var r="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g;t.exports=r},852:function(t,n,e){var r=e(8458),o=e(7801);t.exports=function(t,n){var e=o(t,n);return r(e)?e:void 0}},9607:function(t,n,e){var r=e(2705),o=Object.prototype,c=o.hasOwnProperty,i=o.toString,u=r?r.toStringTag:void 0;t.exports=function(t){var n=c.call(t,u),e=t[u];try{t[u]=void 0;var r=!0}catch(a){}var o=i.call(t);return r&&(n?t[u]=e:delete t[u]),o}},7801:function(t){t.exports=function(t,n){return null==t?void 0:t[n]}},5776:function(t){var n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&n.test(t))&&t>-1&&t%1==0&&t<e}},5346:function(t,n,e){var r,o=e(4429),c=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!c&&c in t}},2333:function(t){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},5357:function(t,n,e){var r=e(6874),o=Math.max;t.exports=function(t,n,e){return n=o(void 0===n?t.length-1:n,0),function(){for(var c=arguments,i=-1,u=o(c.length-n,0),a=Array(u);++i<u;)a[i]=c[n+i];i=-1;for(var l=Array(n+1);++i<n;)l[i]=c[i];return l[n]=e(a),r(t,this,l)}}},5639:function(t,n,e){var r=e(1957),o="object"==typeof self&&self&&self.Object===Object&&self,c=r||o||Function("return this")();t.exports=c},61:function(t,n,e){var r=e(6560),o=e(1275)(r);t.exports=o},1275:function(t){var n=Date.now;t.exports=function(t){var e=0,r=0;return function(){var o=n(),c=16-(o-r);if(r=o,c>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}},346:function(t){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(e){}try{return t+""}catch(e){}}return""}},5703:function(t){t.exports=function(t){return function(){return t}}},6557:function(t){t.exports=function(t){return t}},1469:function(t){var n=Array.isArray;t.exports=n},3560:function(t,n,e){var r=e(4239),o=e(3218);t.exports=function(t){if(!o(t))return!1;var n=r(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n}},3218:function(t){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},3448:function(t,n,e){var r=e(4239),o=e(7005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}}}]);
//# sourceMappingURL=component---src-pages-about-js-18da11f9b4ba231aae52.js.map