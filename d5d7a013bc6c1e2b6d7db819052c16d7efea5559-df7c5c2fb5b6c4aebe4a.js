(self.webpackChunkwoogi_blog=self.webpackChunkwoogi_blog||[]).push([[669],{9316:function(t,e,n){var r=n(7294);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var i=r.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},r.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),a=r.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},r.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function s(t){if(7===t.length)return t;for(var e="#",n=1;n<4;n+=1)e+=t[n]+t[n];return e}function c(t,e,n,r,o){return function(t,e,n,r,o){var i=(t-n)/(e-n);if(0===i)return r;if(1===i)return o;for(var a="#",s=1;s<6;s+=2){var c=parseInt(r.substr(s,2),16),u=parseInt(o.substr(s,2),16),l=Math.round((1-i)*c+i*u).toString(16);1===l.length&&(l="0"+l),a+=l}return a}(t,e,n,s(r),s(o))}var u=function(t){function e(e){t.call(this,e);var n=e.height,r=e.width,o=e.checked;this.t=e.handleDiameter||n-2,this.i=Math.max(r-n,r-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={s:o?this.i:this.o},this.n=0,this.e=0,this.h=this.h.bind(this),this.r=this.r.bind(this),this.a=this.a.bind(this),this.c=this.c.bind(this),this.l=this.l.bind(this),this.u=this.u.bind(this),this.f=this.f.bind(this),this.p=this.p.bind(this),this.b=this.b.bind(this),this.g=this.g.bind(this),this.v=this.v.bind(this),this.w=this.w.bind(this)}return t&&(e.__proto__=t),((e.prototype=Object.create(t&&t.prototype)).constructor=e).prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({s:this.props.checked?this.i:this.o})},e.prototype.k=function(t){this.y.focus(),this.setState({C:t,M:!0,m:Date.now()})},e.prototype.x=function(t){var e=this.state,n=e.C,r=e.s,o=(this.props.checked?this.i:this.o)+t-n;e.R||t===n||this.setState({R:!0});var i=Math.min(this.i,Math.max(this.o,o));i!==r&&this.setState({s:i})},e.prototype.S=function(t){var e=this.state,n=e.s,r=e.R,o=e.m,i=this.props.checked,a=(this.i+this.o)/2,s=Date.now()-o;!r||s<250?this.T(t):i?a<n?this.setState({s:this.i}):this.T(t):n<a?this.setState({s:this.o}):this.T(t),this.setState({R:!1,M:!1}),this.n=Date.now()},e.prototype.h=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.k(t.clientX),window.addEventListener("mousemove",this.r),window.addEventListener("mouseup",this.a))},e.prototype.r=function(t){t.preventDefault(),this.x(t.clientX)},e.prototype.a=function(t){this.S(t),window.removeEventListener("mousemove",this.r),window.removeEventListener("mouseup",this.a)},e.prototype.c=function(t){this.$=null,this.k(t.touches[0].clientX)},e.prototype.l=function(t){this.x(t.touches[0].clientX)},e.prototype.u=function(t){t.preventDefault(),this.S(t)},e.prototype.p=function(t){50<Date.now()-this.n&&(this.T(t),50<Date.now()-this.e&&this.setState({M:!1}))},e.prototype.b=function(){this.e=Date.now()},e.prototype.g=function(){this.setState({M:!0})},e.prototype.v=function(){this.setState({M:!1})},e.prototype.w=function(t){this.y=t},e.prototype.f=function(t){t.preventDefault(),this.y.focus(),this.T(t),this.setState({M:!1})},e.prototype.T=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.disabled,n=t.className,i=t.offColor,a=t.onColor,s=t.offHandleColor,u=t.onHandleColor,l=t.checkedIcon,f=t.uncheckedIcon,p=t.boxShadow,h=t.activeBoxShadow,d=t.height,v=t.width,g=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&-1===e.indexOf(r)&&(n[r]=t[r]);return n}(t,["disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","boxShadow","activeBoxShadow","height","width","handleDiameter"]),m=this.state,y=m.s,b=m.R,w=m.M,x={position:"relative",display:"inline-block",textAlign:"left",opacity:e?.5:1,direction:"ltr",borderRadius:d/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},_={height:d,width:v,margin:Math.max(0,(this.t-d)/2),position:"relative",background:c(y,this.i,this.o,i,a),borderRadius:d/2,cursor:e?"default":"pointer",WebkitTransition:b?null:"background 0.25s",MozTransition:b?null:"background 0.25s",transition:b?null:"background 0.25s"},E={height:d,width:Math.min(1.5*d,v-(this.t+d)/2+1),position:"relative",opacity:(y-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:b?null:"opacity 0.25s",MozTransition:b?null:"opacity 0.25s",transition:b?null:"opacity 0.25s"},k={height:d,width:Math.min(1.5*d,v-(this.t+d)/2+1),position:"absolute",opacity:1-(y-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:b?null:"opacity 0.25s",MozTransition:b?null:"opacity 0.25s",transition:b?null:"opacity 0.25s"},S={height:this.t,width:this.t,background:c(y,this.i,this.o,s,u),display:"inline-block",cursor:e?"default":"pointer",borderRadius:"50%",position:"absolute",transform:"translateX("+y+"px)",top:Math.max(0,(d-this.t)/2),outline:0,boxShadow:w?h:p,border:0,WebkitTransition:b?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:b?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:b?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"};return r.createElement("div",{className:n,style:x},r.createElement("div",{className:"react-switch-bg",style:_,onClick:e?null:this.f,onMouseDown:function(t){return t.preventDefault()}},l&&r.createElement("div",{style:E},l),f&&r.createElement("div",{style:k},f)),r.createElement("div",{className:"react-switch-handle",style:S,onClick:function(t){return t.preventDefault()},onMouseDown:e?null:this.h,onTouchStart:e?null:this.c,onTouchMove:e?null:this.l,onTouchEnd:e?null:this.u,onTouchCancel:e?null:this.v}),r.createElement("input",o({},{type:"checkbox",role:"switch",disabled:e,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},g,{ref:this.w,onFocus:this.g,onBlur:this.v,onKeyUp:this.b,onChange:this.p})))},e}(r.Component);u.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:i,checkedIcon:a,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=u},7534:function(t,e,n){t.exports=n(9316)},3723:function(t,e,n){"use strict";n.d(e,{L:function(){return d},M:function(){return x},P:function(){return w},S:function(){return R},_:function(){return s},a:function(){return a},b:function(){return u},g:function(){return l},h:function(){return c}});var r=n(7294),o=(n(2369),n(5697)),i=n.n(o);function a(){return a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function s(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e.indexOf(n=i[r])>=0||(o[n]=t[n]);return o}var c=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function u(t,e,n,r,o){return void 0===o&&(o={}),a({},n,{loading:r,shouldLoad:t,"data-main-image":"",style:a({},o,{opacity:e?1:0})})}function l(t,e,n,r,o,i,s,c){var u={};i&&(u.backgroundColor=i,"fixed"===n?(u.width=r,u.height=o,u.backgroundColor=i,u.position="relative"):("constrained"===n||"fullWidth"===n)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),s&&(u.objectFit=s),c&&(u.objectPosition=c);var l=a({},t,{"aria-hidden":!0,"data-placeholder-image":"",style:a({opacity:e?0:1,transition:"opacity 500ms linear"},u)});return l}var f,p=["children"],h=function(t){var e=t.layout,n=t.width,o=t.height;return"fullWidth"===e?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:o/n*100+"%"}}):"constrained"===e?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+o+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},d=function(t){var e=t.children,n=s(t,p);return r.createElement(r.Fragment,null,r.createElement(h,a({},n)),e,null)},v=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],m=function(t){var e=t.src,n=t.srcSet,o=t.loading,i=t.alt,c=void 0===i?"":i,u=t.shouldLoad,l=s(t,v);return r.createElement("img",a({},l,{decoding:"async",loading:o,src:u?e:void 0,"data-src":u?void 0:e,srcSet:u?n:void 0,"data-srcset":u?void 0:n,alt:c}))},y=function(t){var e=t.fallback,n=t.sources,o=void 0===n?[]:n,i=t.shouldLoad,c=void 0===i||i,u=s(t,g),l=u.sizes||(null==e?void 0:e.sizes),f=r.createElement(m,a({},u,e,{sizes:l,shouldLoad:c}));return o.length?r.createElement("picture",null,o.map((function(t){var e=t.media,n=t.srcSet,o=t.type;return r.createElement("source",{key:e+"-"+o+"-"+n,type:o,media:e,srcSet:c?n:void 0,"data-srcset":c?void 0:n,sizes:l})})),f):f};m.propTypes={src:o.string.isRequired,alt:o.string.isRequired,sizes:o.string,srcSet:o.string,shouldLoad:o.bool},y.displayName="Picture",y.propTypes={alt:o.string.isRequired,shouldLoad:o.bool,fallback:o.exact({src:o.string.isRequired,srcSet:o.string,sizes:o.string}),sources:o.arrayOf(o.oneOfType([o.exact({media:o.string.isRequired,type:o.string,sizes:o.string,srcSet:o.string.isRequired}),o.exact({media:o.string,type:o.string.isRequired,sizes:o.string,srcSet:o.string.isRequired})]))};var b=["fallback"],w=function(t){var e=t.fallback,n=s(t,b);return e?r.createElement(y,a({},n,{fallback:{src:e},"aria-hidden":!0,alt:""})):r.createElement("div",a({},n))};w.displayName="Placeholder",w.propTypes={fallback:o.string,sources:null==(f=y.propTypes)?void 0:f.sources,alt:function(t,e,n){return t[e]?new Error("Invalid prop `"+e+"` supplied to `"+n+"`. Validation failed."):null}};var x=function(t){return r.createElement(r.Fragment,null,r.createElement(y,a({},t)),r.createElement("noscript",null,r.createElement(y,a({},t,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=y.propTypes;var _,E,k=function(t,e,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),a=3;a<r;a++)o[a-3]=arguments[a];return t.alt||""===t.alt?i().string.apply(i(),[t,e,n].concat(o)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:i().object.isRequired,alt:k},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],T=new Set,j=function(t){var e=t.as,o=void 0===e?"div":e,i=t.image,u=t.style,l=t.backgroundColor,f=t.className,p=t.class,h=t.onStartLoad,d=t.onLoad,v=t.onError,g=s(t,C),m=i.width,y=i.height,b=i.layout,w=function(t,e,n){var r={},o="gatsby-image-wrapper";return"fixed"===n?(r.width=t,r.height=e):"constrained"===n&&(o="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:o,"data-gatsby-image-wrapper":"",style:r}}(m,y,b),x=w.style,k=w.className,S=s(w,L),j=(0,r.useRef)(),O=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);p&&(f=p);var M=function(t,e,n){var r="";return"fullWidth"===t&&(r='<div aria-hidden="true" style="padding-top: '+n/e*100+'%;"></div>'),"constrained"===t&&(r='<div style="max-width: '+e+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+e+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,m,y);return(0,r.useEffect)((function(){_||(_=Promise.all([n.e(774),n.e(217)]).then(n.bind(n,9217)).then((function(t){var e=t.renderImageToString,n=t.swapPlaceholderImage;return E=e,{renderImageToString:e,swapPlaceholderImage:n}})));var t,e,r=j.current.querySelector("[data-gatsby-image-ssr]");return r&&c()?(r.complete?(null==h||h({wasCached:!0}),null==d||d({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):(null==h||h({wasCached:!0}),r.addEventListener("load",(function t(){r.removeEventListener("load",t),null==d||d({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(O)):E&&T.has(O)?void 0:(_.then((function(n){var r=n.renderImageToString,o=n.swapPlaceholderImage;j.current&&(j.current.innerHTML=r(a({isLoading:!0,isLoaded:T.has(O),image:i},g)),T.has(O)||(t=requestAnimationFrame((function(){j.current&&(e=o(j.current,O,T,u,h,d,v))}))))})),function(){t&&cancelAnimationFrame(t),e&&e()})}),[i]),(0,r.useLayoutEffect)((function(){T.has(O)&&E&&(j.current.innerHTML=E(a({isLoading:T.has(O),isLoaded:T.has(O),image:i},g)),null==h||h({wasCached:!0}),null==d||d({wasCached:!0}))}),[i]),(0,r.createElement)(o,a({},S,{style:a({},x,u,{backgroundColor:l}),className:k+(f?" "+f:""),ref:j,dangerouslySetInnerHTML:{__html:M},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(t){return t.image?(0,r.createElement)(j,t):null}));O.propTypes=S,O.displayName="GatsbyImage";var M,I=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],N=function(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return"fullWidth"!==t.layout||"width"!==e&&"height"!==e||!t[e]?i().number.apply(i(),[t,e].concat(r)):new Error('"'+e+'" '+t[e]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),D={src:i().string.isRequired,alt:k,width:N,height:N,sizes:i().string,layout:function(t){if(void 0!==t.layout&&!A.has(t.layout))return new Error("Invalid value "+t.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(M=O,function(t){var e=t.src,n=t.__imageData,o=t.__error,i=s(t,I);return o&&console.warn(o),n?r.createElement(M,a({image:n},i)):(console.warn("Image not loaded",e),null)});R.displayName="StaticImage",R.propTypes=D},2369:function(t){"use strict";var e=function(t,e){if("string"!=typeof t&&!Array.isArray(t))throw new TypeError("Expected the input to be `string | string[]`");e=Object.assign({pascalCase:!1},e);var n;return t=Array.isArray(t)?t.map((function(t){return t.trim()})).filter((function(t){return t.length})).join("-"):t.trim(),0===t.length?"":1===t.length?e.pascalCase?t.toUpperCase():t.toLowerCase():(t!==t.toLowerCase()&&(t=function(t){for(var e=!1,n=!1,r=!1,o=0;o<t.length;o++){var i=t[o];e&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(t=t.slice(0,o)+"-"+t.slice(o),e=!1,r=n,n=!0,o++):n&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(t=t.slice(0,o-1)+"-"+t.slice(o-1),r=n,n=!1,e=!0):(e=i.toLowerCase()===i&&i.toUpperCase()!==i,r=n,n=i.toUpperCase()===i&&i.toLowerCase()!==i)}return t}(t)),t=t.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(t,e){return e.toUpperCase()})).replace(/\d+(\w|$)/g,(function(t){return t.toUpperCase()})),n=t,e.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n)};t.exports=e,t.exports.default=e},8771:function(t,e,n){"use strict";var r=n(7294),o=n(1082),i=n(3723),a=n(3494).default.div.withConfig({displayName:"bio__StyledBio",componentId:"sc-1luv4tg-0"})(["display:flex;flex-direction:column;margin-bottom:10px;div{display:flex;}.author-socials{gap:10px;color:#1a202c;font-weight:500;}a{:hover{color:#0077aa;}}"]);e.Z=function(){var t,e,s=(0,o.useStaticQuery)("4234858013"),c=null===(t=s.site.siteMetadata)||void 0===t?void 0:t.author,u=null===(e=s.site.siteMetadata)||void 0===e?void 0:e.social;return r.createElement(a,null,r.createElement("div",null,r.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"https://avatars.githubusercontent.com/u/56660101?v=4",width:75,height:75,quality:95,alt:"Profile picture",__imageData:n(387)}),r.createElement("p",null,"Written by ",r.createElement("strong",null,c.name),r.createElement("br",null),"문의사항이 있다면 연락주세요:)",r.createElement("br",null),r.createElement("a",{href:"https://toss.im/",target:"_blank"},"@toss")," ","frontend")),r.createElement("div",{className:"author-socials"},u.github&&r.createElement("a",{href:"https://github.com/"+u.github,target:"_blank"},"GitHub"),u.velog&&r.createElement("a",{href:"https://velog.io/"+u.velog,target:"_blank"},"Velog")))}},8047:function(t,e,n){"use strict";n.d(e,{Z:function(){return w}});var r=n(7294),o=n(1082),i=n(3494),a=(0,i.createGlobalStyle)(["@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);@import url(//fonts.googleapis.com/css?family=Monoton|Nanum+Gothic&display=swap);body{color:#333;font-weight:300;font-size:17px;font-family:'Spoqa Han Sans','Nanum Gothic',sans-serif;line-height:1.5;word-break:keep-all;background-color:white;}a{color:#333;text-decoration:none;}"]),s=n(7534),c=n(164),u=n(6870),l=n(3131),f=n.n(l),p="undefined"!=typeof window?window:{},h=p.localStorage;p.sessionStorage;function d(t){return!t||t==={}}var v=f()((function(t,e,n){if(!d(t))return t.setItem(e,JSON.stringify(n))}),h),g=f()((function(t,e){if(!d(t)){var n=t.getItem(e);if(n)return JSON.parse(n)}}),h),m="_woogi_blog_/theme";var y=i.default.div.withConfig({displayName:"themeSelector__SwitchContainer",componentId:"sc-t7p1jf-0"})(["margin-top:10px;text-align:right;.icon{text-align:center;color:#222;font-size:18px;line-height:26px;font-weight:900;}"]);var b=function(){var t=(0,r.useState)(!1),e=t[0],n=t[1],o=function(t){var e=function(t){return t?u.C.DARK:u.C.LIGHT}(t);v(m+"/theme",t),n(t),function(t){switch(t){case u.C.LIGHT:c.Dt(u.C.LIGHT),c.J2(u.C.DARK);break;case u.C.DARK:c.Dt(u.C.DARK),c.J2(u.C.LIGHT)}}(e)};return(0,r.useEffect)((function(){var t,e=(t=c.j8(u.C.DARK),g(m+"/theme")||t);o(e)}),[]),r.createElement(y,{className:"switch-container"},r.createElement("label",{htmlFor:"normal-switch"},r.createElement(s.default,{onChange:o,checked:e,id:"normal-switch",height:26,width:48,checkedIcon:r.createElement("div",{className:"icon checkedIcon"},"🌒"),uncheckedIcon:r.createElement("div",{className:"icon uncheckedIcon"},"🌕"),offColor:"#ddd",offHandleColor:"#ddd",onColor:"#666",onHandleColor:"#666"})))},w=function(t){var e,n=t.location,i=t.title,s=t.children,c="/"===n.pathname;return e=c?r.createElement("div",null,r.createElement("div",{style:{display:"flex",flexDirection:"row-reverse"},className:"about"},r.createElement(o.Link,{to:"/about"},"📝 About")),r.createElement("h1",{className:"main-heading"},r.createElement(o.Link,{to:"/"},i)),r.createElement(b,null)):r.createElement("div",{className:"about",style:{display:"flex",justifyContent:"space-between"}},r.createElement(o.Link,{className:"header-link-home",to:"/"},i),r.createElement(o.Link,{to:"/about"},"📝 About")),r.createElement("div",{className:"global-wrapper","data-is-root-path":c},r.createElement(a,null),r.createElement("header",{className:"global-header"},r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),r.createElement("link",{rel:"manifest",href:"/site.webmanifest"}),e),r.createElement("main",null,s),r.createElement("footer",null,"© Chris(재욱), Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},9357:function(t,e,n){"use strict";var r=n(7294),o=n(1082),i=function(t){var e,n=t.description,i=(t.lang,t.title),a=t.children,s=(0,o.useStaticQuery)("2841359383").site,c=n||s.siteMetadata.description,u=null===(e=s.siteMetadata)||void 0===e?void 0:e.title;return r.createElement(r.Fragment,null,r.createElement("title",null,u?i+" | "+u:i),r.createElement("meta",{name:"description",content:c}),r.createElement("meta",{property:"og:title",content:i}),r.createElement("meta",{property:"og:description",content:c}),r.createElement("meta",{property:"og:type",content:"website"}),a)};i.defaultProps={description:""},e.Z=i},6870:function(t,e,n){"use strict";n.d(e,{C:function(){return r}});var r={LIGHT:"light",DARK:"dark"}},164:function(t,e,n){"use strict";n.d(e,{Dt:function(){return i},J2:function(){return a},j8:function(){return s}});var r=function(t){return document.querySelector(t)},o=function(){return r("body")},i=function(t){return function(t,e){return t.classList.add(e)}(o(),t)},a=function(t){return function(t,e){return t.classList.remove(e)}(o(),t)},s=function(t){return function(t,e){return t.classList.contains(e)}(o(),t)}},6425:function(t,e,n){var r=n(3118),o=n(9435),i=4294967295;function a(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=i,this.__views__=[]}a.prototype=r(o.prototype),a.prototype.constructor=a,t.exports=a},7548:function(t,e,n){var r=n(3118),o=n(9435);function i(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=void 0}i.prototype=r(o.prototype),i.prototype.constructor=i,t.exports=i},2705:function(t,e,n){var r=n(5639).Symbol;t.exports=r},577:function(t,e,n){var r=n(852)(n(5639),"WeakMap");t.exports=r},6874:function(t){t.exports=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},7412:function(t){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}},7443:function(t,e,n){var r=n(2118);t.exports=function(t,e){return!!(null==t?0:t.length)&&r(t,e,0)>-1}},3118:function(t,e,n){var r=n(3218),o=Object.create,i=function(){function t(){}return function(e){if(!r(e))return{};if(o)return o(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();t.exports=i},1848:function(t){t.exports=function(t,e,n,r){for(var o=t.length,i=n+(r?1:-1);r?i--:++i<o;)if(e(t[i],i,t))return i;return-1}},4239:function(t,e,n){var r=n(2705),o=n(9607),i=n(2333),a="[object Null]",s="[object Undefined]",c=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?s:a:c&&c in Object(t)?o(t):i(t)}},2118:function(t,e,n){var r=n(1848),o=n(2722),i=n(2351);t.exports=function(t,e,n){return e==e?i(t,e,n):r(t,o,n)}},2722:function(t){t.exports=function(t){return t!=t}},8458:function(t,e,n){var r=n(3560),o=n(5346),i=n(3218),a=n(346),s=/^\[object .+?Constructor\]$/,c=Function.prototype,u=Object.prototype,l=c.toString,f=u.hasOwnProperty,p=RegExp("^"+l.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(r(t)?p:s).test(a(t))}},9435:function(t){t.exports=function(){}},5976:function(t,e,n){var r=n(6557),o=n(5357),i=n(61);t.exports=function(t,e){return i(o(t,e,r),t+"")}},8045:function(t,e,n){var r=n(6557),o=n(9250),i=o?function(t,e){return o.set(t,e),t}:r;t.exports=i},6560:function(t,e,n){var r=n(5703),o=n(8777),i=n(6557),a=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:i;t.exports=a},7561:function(t,e,n){var r=n(7990),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},2157:function(t){var e=Math.max;t.exports=function(t,n,r,o){for(var i=-1,a=t.length,s=r.length,c=-1,u=n.length,l=e(a-s,0),f=Array(u+l),p=!o;++c<u;)f[c]=n[c];for(;++i<s;)(p||i<a)&&(f[r[i]]=t[i]);for(;l--;)f[c++]=t[i++];return f}},4054:function(t){var e=Math.max;t.exports=function(t,n,r,o){for(var i=-1,a=t.length,s=-1,c=r.length,u=-1,l=n.length,f=e(a-c,0),p=Array(f+l),h=!o;++i<f;)p[i]=t[i];for(var d=i;++u<l;)p[d+u]=n[u];for(;++s<c;)(h||i<a)&&(p[d+r[s]]=t[i++]);return p}},278:function(t){t.exports=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}},4429:function(t,e,n){var r=n(5639)["__core-js_shared__"];t.exports=r},7991:function(t){t.exports=function(t,e){for(var n=t.length,r=0;n--;)t[n]===e&&++r;return r}},2402:function(t,e,n){var r=n(1774),o=n(5639),i=1;t.exports=function(t,e,n){var a=e&i,s=r(t);return function e(){return(this&&this!==o&&this instanceof e?s:t).apply(a?n:this,arguments)}}},1774:function(t,e,n){var r=n(3118),o=n(3218);t.exports=function(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var n=r(t.prototype),i=t.apply(n,e);return o(i)?i:n}}},6347:function(t,e,n){var r=n(6874),o=n(1774),i=n(6935),a=n(4487),s=n(893),c=n(6460),u=n(5639);t.exports=function(t,e,n){var l=o(t);return function o(){for(var f=arguments.length,p=Array(f),h=f,d=s(o);h--;)p[h]=arguments[h];var v=f<3&&p[0]!==d&&p[f-1]!==d?[]:c(p,d);return(f-=v.length)<n?a(t,e,i,o.placeholder,void 0,p,v,void 0,void 0,n-f):r(this&&this!==u&&this instanceof o?l:t,this,p)}}},6935:function(t,e,n){var r=n(2157),o=n(4054),i=n(7991),a=n(1774),s=n(4487),c=n(893),u=n(451),l=n(6460),f=n(5639),p=1,h=2,d=8,v=16,g=128,m=512;t.exports=function t(e,n,y,b,w,x,_,E,k,S){var C=n&g,L=n&p,T=n&h,j=n&(d|v),O=n&m,M=T?void 0:a(e);return function p(){for(var h=arguments.length,d=Array(h),v=h;v--;)d[v]=arguments[v];if(j)var g=c(p),m=i(d,g);if(b&&(d=r(d,b,w,j)),x&&(d=o(d,x,_,j)),h-=m,j&&h<S){var I=l(d,g);return s(e,n,t,p.placeholder,y,d,I,E,k,S-h)}var N=L?y:this,A=T?N[e]:e;return h=d.length,E?d=u(d,E):O&&h>1&&d.reverse(),C&&k<h&&(d.length=k),this&&this!==f&&this instanceof p&&(A=M||a(A)),A.apply(N,d)}}},4375:function(t,e,n){var r=n(6874),o=n(1774),i=n(5639),a=1;t.exports=function(t,e,n,s){var c=e&a,u=o(t);return function e(){for(var o=-1,a=arguments.length,l=-1,f=s.length,p=Array(f+a),h=this&&this!==i&&this instanceof e?u:t;++l<f;)p[l]=s[l];for(;a--;)p[l++]=arguments[++o];return r(h,c?n:this,p)}}},4487:function(t,e,n){var r=n(6528),o=n(258),i=n(9255),a=1,s=2,c=4,u=8,l=32,f=64;t.exports=function(t,e,n,p,h,d,v,g,m,y){var b=e&u;e|=b?l:f,(e&=~(b?f:l))&c||(e&=~(a|s));var w=[t,e,h,b?d:void 0,b?v:void 0,b?void 0:d,b?void 0:v,g,m,y],x=n.apply(void 0,w);return r(t)&&o(x,w),x.placeholder=p,i(x,t,e)}},7727:function(t,e,n){var r=n(8045),o=n(2402),i=n(6347),a=n(6935),s=n(4375),c=n(6833),u=n(3833),l=n(258),f=n(9255),p=n(554),h="Expected a function",d=1,v=2,g=8,m=16,y=32,b=64,w=Math.max;t.exports=function(t,e,n,x,_,E,k,S){var C=e&v;if(!C&&"function"!=typeof t)throw new TypeError(h);var L=x?x.length:0;if(L||(e&=~(y|b),x=_=void 0),k=void 0===k?k:w(p(k),0),S=void 0===S?S:p(S),L-=_?_.length:0,e&b){var T=x,j=_;x=_=void 0}var O=C?void 0:c(t),M=[t,e,n,x,_,T,j,E,k,S];if(O&&u(M,O),t=M[0],e=M[1],n=M[2],x=M[3],_=M[4],!(S=M[9]=void 0===M[9]?C?0:t.length:w(M[9]-L,0))&&e&(g|m)&&(e&=~(g|m)),e&&e!=d)I=e==g||e==m?i(t,e,S):e!=y&&e!=(d|y)||_.length?a.apply(void 0,M):s(t,e,n,x);else var I=o(t,e,n);return f((O?r:l)(I,M),t,e)}},8777:function(t,e,n){var r=n(852),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();t.exports=o},1957:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},6833:function(t,e,n){var r=n(9250),o=n(308),i=r?function(t){return r.get(t)}:o;t.exports=i},7658:function(t,e,n){var r=n(2060),o=Object.prototype.hasOwnProperty;t.exports=function(t){for(var e=t.name+"",n=r[e],i=o.call(r,e)?n.length:0;i--;){var a=n[i],s=a.func;if(null==s||s==t)return a.name}return e}},893:function(t){t.exports=function(t){return t.placeholder}},852:function(t,e,n){var r=n(8458),o=n(7801);t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},9607:function(t,e,n){var r=n(2705),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,s=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(c){}var o=a.call(t);return r&&(e?t[s]=n:delete t[s]),o}},7801:function(t){t.exports=function(t,e){return null==t?void 0:t[e]}},8775:function(t){var e=/\{\n\/\* \[wrapped with (.+)\] \*/,n=/,? & /;t.exports=function(t){var r=t.match(e);return r?r[1].split(n):[]}},3112:function(t){var e=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;t.exports=function(t,n){var r=n.length;if(!r)return t;var o=r-1;return n[o]=(r>1?"& ":"")+n[o],n=n.join(r>2?", ":" "),t.replace(e,"{\n/* [wrapped with "+n+"] */\n")}},5776:function(t){var e=9007199254740991,n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,r){var o=typeof t;return!!(r=null==r?e:r)&&("number"==o||"symbol"!=o&&n.test(t))&&t>-1&&t%1==0&&t<r}},6528:function(t,e,n){var r=n(6425),o=n(6833),i=n(7658),a=n(8111);t.exports=function(t){var e=i(t),n=a[e];if("function"!=typeof n||!(e in r.prototype))return!1;if(t===n)return!0;var s=o(n);return!!s&&t===s[0]}},5346:function(t,e,n){var r,o=n(4429),i=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!i&&i in t}},3833:function(t,e,n){var r=n(2157),o=n(4054),i=n(6460),a="__lodash_placeholder__",s=1,c=2,u=4,l=8,f=128,p=256,h=Math.min;t.exports=function(t,e){var n=t[1],d=e[1],v=n|d,g=v<(s|c|f),m=d==f&&n==l||d==f&&n==p&&t[7].length<=e[8]||d==(f|p)&&e[7].length<=e[8]&&n==l;if(!g&&!m)return t;d&s&&(t[2]=e[2],v|=n&s?0:u);var y=e[3];if(y){var b=t[3];t[3]=b?r(b,y,e[4]):y,t[4]=b?i(t[3],a):e[4]}return(y=e[5])&&(b=t[5],t[5]=b?o(b,y,e[6]):y,t[6]=b?i(t[5],a):e[6]),(y=e[7])&&(t[7]=y),d&f&&(t[8]=null==t[8]?e[8]:h(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=v,t}},9250:function(t,e,n){var r=n(577),o=r&&new r;t.exports=o},2333:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5357:function(t,e,n){var r=n(6874),o=Math.max;t.exports=function(t,e,n){return e=o(void 0===e?t.length-1:e,0),function(){for(var i=arguments,a=-1,s=o(i.length-e,0),c=Array(s);++a<s;)c[a]=i[e+a];a=-1;for(var u=Array(e+1);++a<e;)u[a]=i[a];return u[e]=n(c),r(t,this,u)}}},2060:function(t){t.exports={}},451:function(t,e,n){var r=n(278),o=n(5776),i=Math.min;t.exports=function(t,e){for(var n=t.length,a=i(e.length,n),s=r(t);a--;){var c=e[a];t[a]=o(c,n)?s[c]:void 0}return t}},6460:function(t){var e="__lodash_placeholder__";t.exports=function(t,n){for(var r=-1,o=t.length,i=0,a=[];++r<o;){var s=t[r];s!==n&&s!==e||(t[r]=e,a[i++]=r)}return a}},5639:function(t,e,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},258:function(t,e,n){var r=n(8045),o=n(1275)(r);t.exports=o},61:function(t,e,n){var r=n(6560),o=n(1275)(r);t.exports=o},9255:function(t,e,n){var r=n(8775),o=n(3112),i=n(61),a=n(7241);t.exports=function(t,e,n){var s=e+"";return i(t,o(s,a(r(s),n)))}},1275:function(t){var e=800,n=16,r=Date.now;t.exports=function(t){var o=0,i=0;return function(){var a=r(),s=n-(a-i);if(i=a,s>0){if(++o>=e)return arguments[0]}else o=0;return t.apply(void 0,arguments)}}},2351:function(t){t.exports=function(t,e,n){for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}},346:function(t){var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(n){}try{return t+""}catch(n){}}return""}},7990:function(t){var e=/\s/;t.exports=function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}},7241:function(t,e,n){var r=n(7412),o=n(7443),i=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]];t.exports=function(t,e){return r(i,(function(n){var r="_."+n[0];e&n[1]&&!o(t,r)&&t.push(r)})),t.sort()}},169:function(t,e,n){var r=n(6425),o=n(7548),i=n(278);t.exports=function(t){if(t instanceof r)return t.clone();var e=new o(t.__wrapped__,t.__chain__);return e.__actions__=i(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}},5703:function(t){t.exports=function(t){return function(){return t}}},6557:function(t){t.exports=function(t){return t}},1469:function(t){var e=Array.isArray;t.exports=e},3560:function(t,e,n){var r=n(4239),o=n(3218),i="[object AsyncFunction]",a="[object Function]",s="[object GeneratorFunction]",c="[object Proxy]";t.exports=function(t){if(!o(t))return!1;var e=r(t);return e==a||e==s||e==i||e==c}},3218:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},3448:function(t,e,n){var r=n(4239),o=n(7005),i="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&r(t)==i}},308:function(t){t.exports=function(){}},3131:function(t,e,n){var r=n(5976),o=n(7727),i=n(893),a=n(6460),s=r((function(t,e){var n=a(e,i(s));return o(t,32,void 0,e,n)}));s.placeholder={},t.exports=s},8601:function(t,e,n){var r=n(4841),o=1/0,i=17976931348623157e292;t.exports=function(t){return t?(t=r(t))===o||t===-o?(t<0?-1:1)*i:t==t?t:0:0===t?t:0}},554:function(t,e,n){var r=n(8601);t.exports=function(t){var e=r(t),n=e%1;return e==e?n?e-n:e:0}},4841:function(t,e,n){var r=n(7561),o=n(3218),i=n(3448),a=NaN,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return a;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=c.test(t);return n||u.test(t)?l(t.slice(2),n?2:8):s.test(t)?a:+t}},8111:function(t,e,n){var r=n(6425),o=n(7548),i=n(9435),a=n(1469),s=n(7005),c=n(169),u=Object.prototype.hasOwnProperty;function l(t){if(s(t)&&!a(t)&&!(t instanceof r)){if(t instanceof o)return t;if(u.call(t,"__wrapped__"))return c(t)}return new o(t)}l.prototype=i.prototype,l.prototype.constructor=l,t.exports=l},387:function(t){"use strict";t.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#888898","images":{"fallback":{"src":"/static/a901642fdace39f458e466696de1cfd9/d8275/56660101.jpg","srcSet":"/static/a901642fdace39f458e466696de1cfd9/d8275/56660101.jpg 75w,\\n/static/a901642fdace39f458e466696de1cfd9/b5649/56660101.jpg 150w","sizes":"75px"},"sources":[{"srcSet":"/static/a901642fdace39f458e466696de1cfd9/26941/56660101.avif 75w,\\n/static/a901642fdace39f458e466696de1cfd9/95309/56660101.avif 150w","type":"image/avif","sizes":"75px"},{"srcSet":"/static/a901642fdace39f458e466696de1cfd9/a18cc/56660101.webp 75w,\\n/static/a901642fdace39f458e466696de1cfd9/7ddcc/56660101.webp 150w","type":"image/webp","sizes":"75px"}]},"width":75,"height":75}')}}]);
//# sourceMappingURL=d5d7a013bc6c1e2b6d7db819052c16d7efea5559-df7c5c2fb5b6c4aebe4a.js.map