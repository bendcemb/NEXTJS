(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(4529)}])},6691:function(e,t){"use strict";var r,n,o,i;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_FAST_REFRESH:function(){return c},ACTION_NAVIGATE:function(){return u},ACTION_PREFETCH:function(){return f},ACTION_REFRESH:function(){return l},ACTION_RESTORE:function(){return s},ACTION_SERVER_ACTION:function(){return d},ACTION_SERVER_PATCH:function(){return a},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r},isThenable:function(){return p}});let l="refresh",u="navigate",s="restore",a="server-patch",f="prefetch",c="fast-refresh",d="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(o=r||(r={})).AUTO="auto",o.FULL="full",o.TEMPORARY="temporary",(i=n||(n={})).fresh="fresh",i.reusable="reusable",i.expired="expired",i.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4318:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8364),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6541:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let n=r(8754),o=r(1757),i=r(5893),l=o._(r(7294)),u=n._(r(3935)),s=n._(r(7828)),a=r(7367),f=r(7903),c=r(4938);r(1997);let d=r(9953),p=n._(r(6663)),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,n,o,i,l){let u=null==e?void 0:e.src;e&&e["data-loaded-src"]!==u&&(e["data-loaded-src"]=u,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function m(e){return l.use?{fetchPriority:e}:{fetchpriority:e}}let v=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:u,width:s,decoding:a,className:f,style:c,fetchPriority:d,placeholder:p,loading:h,unoptimized:v,fill:b,onLoadRef:y,onLoadingCompleteRef:_,setBlurComplete:j,setShowAltText:x,sizesInput:w,onLoad:C,onError:P,...E}=e;return(0,i.jsx)("img",{...E,...m(d),loading:h,width:s,height:u,decoding:a,"data-nimg":b?"fill":"1",className:f,style:c,sizes:o,srcSet:n,src:r,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(P&&(e.src=e.src),e.complete&&g(e,p,y,_,j,v,w))},[r,p,y,_,j,P,v,w,t]),onLoad:e=>{g(e.currentTarget,p,y,_,j,v,w)},onError:e=>{x(!0),"empty"!==p&&j(!0),P&&P(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...m(r.fetchPriority)};return t&&u.default.preload?(u.default.preload(r.src,n),null):(0,i.jsx)(s.default,{children:(0,i.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let y=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(d.RouterContext),n=(0,l.useContext)(c.ImageConfigContext),o=(0,l.useMemo)(()=>{let e=h||n||f.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:u,onLoadingComplete:s}=e,g=(0,l.useRef)(u);(0,l.useEffect)(()=>{g.current=u},[u]);let m=(0,l.useRef)(s);(0,l.useEffect)(()=>{m.current=s},[s]);let[y,_]=(0,l.useState)(!1),[j,x]=(0,l.useState)(!1),{props:w,meta:C}=(0,a.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:y,showAltText:j});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v,{...w,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:g,onLoadingCompleteRef:m,setBlurComplete:_,setShowAltText:x,sizesInput:e.sizes,ref:t}),C.priority?(0,i.jsx)(b,{isAppRouter:!r,imgAttributes:w}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9577:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let n=r(8754),o=r(5893),i=n._(r(7294)),l=r(1401),u=r(2045),s=r(7420),a=r(7201),f=r(1443),c=r(9953),d=r(5320),p=r(2905),h=r(4318),g=r(953),m=r(6691),v=new Set;function b(e,t,r,n,o,i){if(i||(0,u.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(v.has(o))return;v.add(o)}(async()=>i?e.prefetch(t,o):e.prefetch(t,r,n))().catch(e=>{})}}function y(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let _=i.default.forwardRef(function(e,t){let r,n;let{href:s,as:v,children:_,prefetch:j=null,passHref:x,replace:w,shallow:C,scroll:P,locale:E,onClick:S,onMouseEnter:O,onTouchStart:R,legacyBehavior:M=!1,...I}=e;r=_,M&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let z=i.default.useContext(c.RouterContext),A=i.default.useContext(d.AppRouterContext),T=null!=z?z:A,k=!z,N=!1!==j,L=null===j?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:D,as:F}=i.default.useMemo(()=>{if(!z){let e=y(s);return{href:e,as:v?y(v):e}}let[e,t]=(0,l.resolveHref)(z,s,!0);return{href:e,as:v?(0,l.resolveHref)(z,v):t||e}},[z,s,v]),B=i.default.useRef(D),U=i.default.useRef(F);M&&(n=i.default.Children.only(r));let G=M?n&&"object"==typeof n&&n.ref:t,[H,K,V]=(0,p.useIntersection)({rootMargin:"200px"}),W=i.default.useCallback(e=>{(U.current!==F||B.current!==D)&&(V(),U.current=F,B.current=D),H(e),G&&("function"==typeof G?G(e):"object"==typeof G&&(G.current=e))},[F,G,D,V,H]);i.default.useEffect(()=>{T&&K&&N&&b(T,D,F,{locale:E},{kind:L},k)},[F,D,K,E,N,null==z?void 0:z.locale,T,k,L]);let q={ref:W,onClick(e){M||"function"!=typeof S||S(e),M&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,r,n,o,l,s,a,f){let{nodeName:c}=e.currentTarget;if("A"===c.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!(0,u.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==s||s;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,locale:a,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};f?i.default.startTransition(d):d()}(e,T,D,F,w,C,P,E,k)},onMouseEnter(e){M||"function"!=typeof O||O(e),M&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),T&&(N||!k)&&b(T,D,F,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:L},k)},onTouchStart:function(e){M||"function"!=typeof R||R(e),M&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),T&&(N||!k)&&b(T,D,F,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:L},k)}};if((0,a.isAbsoluteUrl)(F))q.href=F;else if(!M||x||"a"===n.type&&!("href"in n.props)){let e=void 0!==E?E:null==z?void 0:z.locale,t=(null==z?void 0:z.isLocaleDomain)&&(0,h.getDomainLocale)(F,e,null==z?void 0:z.locales,null==z?void 0:z.domainLocales);q.href=t||(0,g.addBasePath)((0,f.addLocale)(F,e,null==z?void 0:z.defaultLocale))}return M?i.default.cloneElement(n,q):(0,o.jsx)("a",{...I,...q,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2905:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(7294),o=r(3815),i="function"==typeof IntersectionObserver,l=new Map,u=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,a=s||!i,[f,c]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(i){if(a||f)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},u.push(r),l.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!f){let e=(0,o.requestIdleCallback)(()=>c(!0));return()=>(0,o.cancelIdleCallback)(e)}},[a,r,t,f,d.current]),[p,f,(0,n.useCallback)(()=>{c(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7367:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return u}}),r(1997);let n=r(9919),o=r(7903);function i(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e,t){var r;let u,s,a,{src:f,sizes:c,unoptimized:d=!1,priority:p=!1,loading:h,className:g,quality:m,width:v,height:b,fill:y=!1,style:_,overrideSrc:j,onLoad:x,onLoadingComplete:w,placeholder:C="empty",blurDataURL:P,fetchPriority:E,layout:S,objectFit:O,objectPosition:R,lazyBoundary:M,lazyRoot:I,...z}=e,{imgConf:A,showAltText:T,blurComplete:k,defaultLoader:N}=t,L=A||o.imageConfigDefault;if("allSizes"in L)u=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);u={...L,allSizes:e,deviceSizes:t}}if(void 0===N)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let D=z.loader||N;delete z.loader,delete z.srcSet;let F="__next_img_default"in D;if(F){if("custom"===u.loader)throw Error('Image with src "'+f+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:r,...n}=t;return e(n)}}if(S){"fill"===S&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[S];t&&!c&&(c=t)}let B="",U=l(v),G=l(b);if("object"==typeof(r=f)&&(i(r)||void 0!==r.src)){let e=i(f)?f.default:f;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,a=e.blurHeight,P=P||e.blurDataURL,B=e.src,!y){if(U||G){if(U&&!G){let t=U/e.width;G=Math.round(e.height*t)}else if(!U&&G){let t=G/e.height;U=Math.round(e.width*t)}}else U=e.width,G=e.height}}let H=!p&&("lazy"===h||void 0===h);(!(f="string"==typeof f?f:B)||f.startsWith("data:")||f.startsWith("blob:"))&&(d=!0,H=!1),u.unoptimized&&(d=!0),F&&f.endsWith(".svg")&&!u.dangerouslyAllowSVG&&(d=!0),p&&(E="high");let K=l(m),V=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:R}:{},T?{}:{color:"transparent"},_),W=k||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:U,heightInt:G,blurWidth:s,blurHeight:a,blurDataURL:P||"",objectFit:V.objectFit})+'")':'url("'+C+'")',q=W?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:W}:{},Y=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:l,loader:u}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:a}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,l),f=s.length-1;return{sizes:l||"w"!==a?l:"100vw",srcSet:s.map((e,n)=>u({config:t,src:r,quality:i,width:e})+" "+("w"===a?e:n+1)+a).join(", "),src:u({config:t,src:r,quality:i,width:s[f]})}}({config:u,src:f,unoptimized:d,width:U,quality:K,sizes:c,loader:D});return{props:{...z,loading:H?"lazy":h,fetchPriority:E,width:U,height:G,decoding:"async",className:g,style:{...V,...q},sizes:Y.sizes,srcSet:Y.srcSet,src:j||Y.src},meta:{unoptimized:d,priority:p,placeholder:C,fill:y}}}},9919:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:l}=e,u=n?40*n:t,s=o?40*o:r,a=u&&s?"viewBox='0 0 "+u+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+a+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(a?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5666:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return u}});let n=r(8754),o=r(7367),i=r(6541),l=n._(r(6663));function u(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=i.Image},6663:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},4529:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893);r(9311);var o=r(1664),i=r.n(o),l=r(5675),u=r.n(l);function s(){return(0,n.jsxs)("nav",{children:[(0,n.jsx)("div",{className:"logo",children:(0,n.jsx)(i(),{href:"/",children:(0,n.jsx)(u(),{src:"/bag.png",width:50,height:50,alt:"logo"})})}),(0,n.jsxs)("div",{className:"logo-name",children:[(0,n.jsx)("h2",{children:"B"}),(0,n.jsx)("h3",{children:"BEARS"})]}),(0,n.jsx)(i(),{href:"/",children:"หน้าแรก"}),(0,n.jsx)(i(),{href:"/about",children:"เกี่ยวกับเรา"}),(0,n.jsx)(i(),{href:"/products",children:"สินค้าทั้งหมด"})]})}function a(){return(0,n.jsx)("footer",{children:"copyright 2024 | Ben Bears"})}function f(e){let{children:t}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)(s,{}),t,(0,n.jsx)(a,{})]})}function c(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)(f,{children:(0,n.jsx)(t,{...r})})}r(7201)},9311:function(){},5675:function(e,t,r){e.exports=r(5666)},1664:function(e,t,r){e.exports=r(9577)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(9090)}),_N_E=e.O()}]);