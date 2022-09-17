"use strict";(self.webpackChunkwoogi_blog=self.webpackChunkwoogi_blog||[]).push([[84],{3723:function(e,t,a){a.d(t,{L:function(){return m},M:function(){return E},P:function(){return b},S:function(){return R},_:function(){return s},a:function(){return o},b:function(){return c},g:function(){return d},h:function(){return l}});var r=a(7294),n=(a(2369),a(5697)),i=a.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,a,r,n){return void 0===n&&(n={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,s,l){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}var u,p=["children"],g=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){var t=e.children,a=s(e,p);return r.createElement(r.Fragment,null,r.createElement(g,o({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,d=s(e,f);return r.createElement("img",o({},d,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},v=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,l=void 0===i||i,c=s(e,h),d=c.sizes||(null==t?void 0:t.sizes),u=r.createElement(y,o({},c,t,{sizes:d,shouldLoad:l}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:d})})),u):u};y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var w=["fallback"],b=function(e){var t=e.fallback,a=s(e,w);return t?r.createElement(v,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};b.displayName="Placeholder",b.propTypes={fallback:n.string,sources:null==(u=v.propTypes)?void 0:u.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var E=function(e){return r.createElement(r.Fragment,null,r.createElement(v,o({},e)),r.createElement("noscript",null,r.createElement(v,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=v.propTypes;var x,k,L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),o=3;o<r;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:i().object.isRequired,alt:L},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],T=new Set,_=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,d=e.backgroundColor,u=e.className,p=e.class,g=e.onStartLoad,m=e.onLoad,f=e.onError,h=s(e,S),y=i.width,v=i.height,w=i.layout,b=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(y,v,w),E=b.style,L=b.className,C=s(b,N),_=(0,r.useRef)(),q=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);p&&(u=p);var z=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,y,v);return(0,r.useEffect)((function(){x||(x=Promise.all([a.e(774),a.e(217)]).then(a.bind(a,9217)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=_.current.querySelector("[data-gatsby-image-ssr]");return r&&l()?(r.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),r.addEventListener("load",(function e(){r.removeEventListener("load",e),null==m||m({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(q)):k&&T.has(q)?void 0:(x.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;_.current&&(_.current.innerHTML=r(o({isLoading:!0,isLoaded:T.has(q),image:i},h)),T.has(q)||(e=requestAnimationFrame((function(){_.current&&(t=n(_.current,q,T,c,g,m,f))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){T.has(q)&&k&&(_.current.innerHTML=k(o({isLoading:T.has(q),isLoaded:T.has(q),image:i},h)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[i]),(0,r.createElement)(n,o({},C,{style:o({},E,c,{backgroundColor:d}),className:L+(u?" "+u:""),ref:_,dangerouslySetInnerHTML:{__html:z},suppressHydrationWarning:!0}))},q=(0,r.memo)((function(e){return e.image?(0,r.createElement)(_,e):null}));q.propTypes=C,q.displayName="GatsbyImage";var z,O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],I=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},j=new Set(["fixed","fullWidth","constrained"]),A={src:i().string.isRequired,alt:L,width:I,height:I,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!j.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(z=q,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=s(e,O);return n&&console.warn(n),a?r.createElement(z,o({image:a},i)):(console.warn("Image not loaded",t),null)});R.displayName="StaticImage",R.propTypes=A},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},8771:function(e,t,a){var r=a(7294),n=a(1597),i=a(3723),o=a(3494).default.div.withConfig({displayName:"bio__StyledBio",componentId:"sc-1luv4tg-0"})(["display:flex;flex-direction:column;margin-bottom:10px;div{display:flex;}.author-socials{gap:10px;color:#1a202c;font-weight:500;}a{:hover{color:#0077aa;}}"]);t.Z=function(){var e,t,s=(0,n.useStaticQuery)("4234858013"),l=null===(e=s.site.siteMetadata)||void 0===e?void 0:e.author,c=null===(t=s.site.siteMetadata)||void 0===t?void 0:t.social;return r.createElement(o,null,r.createElement("div",null,r.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"https://avatars.githubusercontent.com/u/56660101?v=4",width:75,height:75,quality:95,alt:"Profile picture",__imageData:a(387)}),r.createElement("p",null,"Written by ",r.createElement("strong",null,l.name),r.createElement("br",null),"문의사항이 있다면 연락주세요:)",r.createElement("br",null),r.createElement("a",{href:"https://www.nextunicorn.kr",target:"_blank"},"@nextunicorn")," frontend")),r.createElement("div",{className:"author-socials"},c.github&&r.createElement("a",{href:"https://github.com/"+c.github,target:"_blank"},"GitHub"),c.velog&&r.createElement("a",{href:"https://velog.io/"+c.velog,target:"_blank"},"Velog")))}},9226:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),n=a(1597),i=(0,a(3494).createGlobalStyle)(["@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);@import url(//fonts.googleapis.com/css?family=Monoton|Nanum+Gothic&display=swap);body{color:#333;font-weight:300;font-size:17px;font-family:'Spoqa Han Sans','Nanum Gothic',sans-serif;line-height:1.5;word-break:keep-all;background-color:white;}a{color:#333;text-decoration:none;}"]),o=function(e){var t,a=e.location,o=e.title,s=e.children,l="/"===a.pathname;return t=l?r.createElement("div",null,r.createElement("div",{style:{display:"flex",flexDirection:"row-reverse"}},r.createElement(n.Link,{to:"/about"},"about")),r.createElement("h1",{className:"main-heading"},r.createElement(n.Link,{to:"/"},o))):r.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.createElement(n.Link,{className:"header-link-home",to:"/"},o),r.createElement(n.Link,{to:"/about"},"about")),r.createElement("div",{className:"global-wrapper","data-is-root-path":l},r.createElement(i,null),r.createElement("header",{className:"global-header"},r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),r.createElement("link",{rel:"manifest",href:"/site.webmanifest"}),t),r.createElement("main",null,s),r.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},387:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#888898","images":{"fallback":{"src":"/static/a901642fdace39f458e466696de1cfd9/d8275/56660101.jpg","srcSet":"/static/a901642fdace39f458e466696de1cfd9/d8275/56660101.jpg 75w,\\n/static/a901642fdace39f458e466696de1cfd9/b5649/56660101.jpg 150w","sizes":"75px"},"sources":[{"srcSet":"/static/a901642fdace39f458e466696de1cfd9/26941/56660101.avif 75w,\\n/static/a901642fdace39f458e466696de1cfd9/95309/56660101.avif 150w","type":"image/avif","sizes":"75px"},{"srcSet":"/static/a901642fdace39f458e466696de1cfd9/a18cc/56660101.webp 75w,\\n/static/a901642fdace39f458e466696de1cfd9/7ddcc/56660101.webp 150w","type":"image/webp","sizes":"75px"}]},"width":75,"height":75}')}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-722d99f619db3469f5d3.js.map