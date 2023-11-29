"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[3923],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},g=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=i,d=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return t?r.createElement(d,a(a({ref:n},g),{},{components:t})):r.createElement(d,a({ref:n},g))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3028:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const o={sidebar_position:5,slug:"/miniprogram/3.8/plugins",title:"\u63d2\u4ef6"},a=void 0,p={unversionedId:"miniprogram/3.8/plugins/index",id:"miniprogram/3.8/plugins/index",title:"\u63d2\u4ef6",description:"\u4ee5\u4e0b\u6211\u4eec\u5217\u51fa\u4e86\u6240\u6709\u5c0f\u7a0b\u5e8f SDK \u652f\u6301\u7684\u63d2\u4ef6\uff0c\u8bf7\u6309\u9700\u52a0\u8f7d\u4f7f\u7528\u3002",source:"@site/docs/miniprogram/3.8/plugins/index.md",sourceDirName:"miniprogram/3.8/plugins",slug:"/miniprogram/3.8/plugins",permalink:"/growingio-sdk-docs-v3/docs/miniprogram/3.8/plugins",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-v3/edit/master/docs/miniprogram/3.8/plugins/index.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"/miniprogram/3.8/plugins",title:"\u63d2\u4ef6"},sidebar:"gioSidebar",previous:{title:"\u6570\u636e\u91c7\u96c6API",permalink:"/growingio-sdk-docs-v3/docs/miniprogram/3.8/commonlyApi"},next:{title:"\u65e0\u57cb\u70b9",permalink:"/growingio-sdk-docs-v3/docs/miniprogram/3.8/plugins/eventAutoTracking"}},l={},s=[{value:"\u65e0\u57cb\u70b9\u63d2\u4ef6\uff08gioEventAutoTracking\uff09",id:"\u65e0\u57cb\u70b9\u63d2\u4ef6gioeventautotracking",level:2},{value:"\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u63d2\u4ef6\uff08gioImpressionTracking\uff09",id:"\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u63d2\u4ef6gioimpressiontracking",level:2},{value:"\u6570\u636e\u52a0\u5bc6\u538b\u7f29\u63d2\u4ef6\uff08gioCompress\uff09",id:"\u6570\u636e\u52a0\u5bc6\u538b\u7f29\u63d2\u4ef6giocompress",level:2},{value:"\u591a\u9879\u76ee\u6253\u901a\u63d2\u4ef6\uff08gioMultiIntegrate\uff09",id:"\u591a\u9879\u76ee\u6253\u901a\u63d2\u4ef6giomultiintegrate",level:2},{value:"\u6027\u80fd\u76d1\u63a7",id:"\u6027\u80fd\u76d1\u63a7",level:2}],g={toc:s};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4ee5\u4e0b\u6211\u4eec\u5217\u51fa\u4e86\u6240\u6709\u5c0f\u7a0b\u5e8f SDK \u652f\u6301\u7684\u63d2\u4ef6\uff0c\u8bf7\u6309\u9700\u52a0\u8f7d\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u4e00\u822c\u53ea\u8981\u60a8\u52a0\u8f7d\u4e86\u63d2\u4ef6\u529f\u80fd\u4f1a\u81ea\u52a8\u52a0\u8f7d\u5e76\u542f\u7528\uff0c\u5982\u679c\u60a8\u4e0d\u60f3\u4f7f\u7528\u5176\u4e2d\u7684\u529f\u80fd\uff0c\u79fb\u9664\u5bf9\u5e94\u63d2\u4ef6\u5373\u53ef\u3002"),(0,i.kt)("p",null,"\u63d2\u4ef6\u5728\u672a\u660e\u786e\u6807\u660e\u6709\u4e92\u65a5\u7684\u60c5\u51b5\u4e0b\u53ef\u540c\u65f6\u591a\u4e2a\u4ee5\u6570\u7ec4\u7684\u5f62\u5f0f\u8fdb\u884c\u4e00\u6b21\u6027\u6ce8\u518c\u3002\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"gdp('registerPlugins', [\n  gioEventAutoTracking,\n  gioCompress,\n  gioImpressionTracking,\n]);\n")),(0,i.kt)("p",null,"\u63d2\u4ef6\u5408\u96c6\uff1a\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{size:"3"},(0,i.kt)("a",{parentName:"strong",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.18/plugins.zip"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.18/plugins.zip"))),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"))),(0,i.kt)("h2",{id:"\u65e0\u57cb\u70b9\u63d2\u4ef6gioeventautotracking"},"\u65e0\u57cb\u70b9\u63d2\u4ef6\uff08gioEventAutoTracking\uff09"),(0,i.kt)("p",null,"\u81ea\u52a8\u91c7\u96c6 ",(0,i.kt)("inlineCode",{parentName:"p"},"tap"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"longtap"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"change"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"submit")," \u4e8b\u4ef6\u7684\u63d2\u4ef6\u3002",(0,i.kt)("br",null),"\n",(0,i.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/plugins/eventAutoTracking"},"\u53c2\u8003\u6587\u6863")),(0,i.kt)("h2",{id:"\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u63d2\u4ef6gioimpressiontracking"},"\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u63d2\u4ef6\uff08gioImpressionTracking\uff09"),(0,i.kt)("p",null,"\u7528\u6237\u6807\u8bb0\u4e00\u4e2a\u5143\u7d20\u5e76\u63d0\u4f9b\u57cb\u70b9\u4e8b\u4ef6\uff0cSDK \u8d1f\u8d23\u76d1\u63a7\u6307\u5b9a\u5143\u7d20\uff0c\u5f53\u6b64\u5143\u7d20\u51fa\u73b0\u5728\u5c4f\u5e55\u53ef\u89c6\u533a\u57df\u4e2d\u65f6\u53d1\u9001\u7528\u6237\u914d\u7f6e\u7684\u57cb\u70b9\u4e8b\u4ef6\u7684\u63d2\u4ef6\u3002",(0,i.kt)("br",null),"\n",(0,i.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/plugins/impressionTracking"},"\u53c2\u8003\u6587\u6863")),(0,i.kt)("h2",{id:"\u6570\u636e\u52a0\u5bc6\u538b\u7f29\u63d2\u4ef6giocompress"},"\u6570\u636e\u52a0\u5bc6\u538b\u7f29\u63d2\u4ef6\uff08gioCompress\uff09"),(0,i.kt)("p",null,"\u4e0a\u62a5\u8bf7\u6c42\u7684\u6570\u636e\u8fdb\u884c\u52a0\u5bc6\u538b\u7f29\u3002",(0,i.kt)("br",null),"\n",(0,i.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/plugins/compress"},"\u53c2\u8003\u6587\u6863")),(0,i.kt)("h2",{id:"\u591a\u9879\u76ee\u6253\u901a\u63d2\u4ef6giomultiintegrate"},"\u591a\u9879\u76ee\u6253\u901a\u63d2\u4ef6\uff08gioMultiIntegrate\uff09"),(0,i.kt)("p",null,"\u5f53\u4e14\u4ec5\u5f53\u5f00\u53d1\u5c0f\u7a0b\u5e8f\u65f6\u4f7f\u7528\u72ec\u7acb\u5f00\u53d1\u7684\u5206\u5305 ",(0,i.kt)("strong",{parentName:"p"},"\uff08\u5373\u4e3b\u5305\u4e0e\u5206\u5305\u4e0d\u5728\u540c\u4e00\u9879\u76ee\u4e2d\u4e14\u4e0d\u540c\u6846\u67b6\u65f6\uff09")," \u65f6\uff0c\u63d2\u4ef6\u7528\u4e8e\u6253\u901a\u4e0d\u540c\u6846\u67b6\u95f4\u7528\u6237\u6570\u636e\u548c\u9875\u9762\u6570\u636e\uff0c\u5408\u5e76\u4e3a\u4e00\u4e2a SDK \u8fd0\u884c\u903b\u8f91\u3002",(0,i.kt)("br",null),"\n",(0,i.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/plugins/multiIntegrate"},"\u53c2\u8003\u6587\u6863")),(0,i.kt)("h2",{id:"\u6027\u80fd\u76d1\u63a7"},"\u6027\u80fd\u76d1\u63a7"),(0,i.kt)("p",null,"\u63d0\u4f9b\u5c0f\u7a0b\u5e8f\u9996\u5c4f\u52a0\u8f7d\u76d1\u63a7\u3001\u9519\u8bef\u76d1\u63a7\u548c\u7f51\u7edc\u8bf7\u6c42\u76d1\u63a7\u7684\u5168\u65b9\u4f4d\u6027\u80fd\u76d1\u63a7\u91c7\u96c6\u63d2\u4ef6\u3002",(0,i.kt)("br",null),"\n",(0,i.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.8/plugins/performance"},"\u53c2\u8003\u6587\u6863")))}c.isMDXComponent=!0}}]);