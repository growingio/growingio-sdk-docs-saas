"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[6372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=s(n),m=i,k=g["".concat(l,".").concat(m)]||g[m]||u[m]||a;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1,title:"\u65e0\u57cb\u70b9"},o=void 0,p={unversionedId:"miniprogram/plugins/eventAutoTracking",id:"miniprogram/plugins/eventAutoTracking",title:"\u65e0\u57cb\u70b9",description:"\u7b80\u4ecb\uff08gioEventAutoTracking\uff09",source:"@site/docs/miniprogram/plugins/eventAutoTracking.md",sourceDirName:"miniprogram/plugins",slug:"/miniprogram/plugins/eventAutoTracking",permalink:"/growingio-sdk-docs-saas/docs/miniprogram/plugins/eventAutoTracking",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-saas/edit/master/docs/miniprogram/plugins/eventAutoTracking.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u65e0\u57cb\u70b9"},sidebar:"gioSidebar",previous:{title:"\u63d2\u4ef6",permalink:"/growingio-sdk-docs-saas/docs/miniprogram/plugins/"},next:{title:"\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8",permalink:"/growingio-sdk-docs-saas/docs/miniprogram/plugins/impressionTracking"}},l={},s=[{value:"\u7b80\u4ecb\uff08gioEventAutoTracking\uff09",id:"\u7b80\u4ecbgioeventautotracking",level:2},{value:"\u96c6\u6210",id:"\u96c6\u6210",level:2},{value:"1\u3001\u5f15\u5165",id:"1\u5f15\u5165",level:3},{value:"\u4e0b\u8f7d\u96c6\u6210\u5f15\u5165",id:"\u4e0b\u8f7d\u96c6\u6210\u5f15\u5165",level:4},{value:"npm \u96c6\u6210\u5f15\u5165",id:"npm-\u96c6\u6210\u5f15\u5165",level:4},{value:"2\u3001\u6ce8\u518c",id:"2\u6ce8\u518c",level:3},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u7b80\u4ecbgioeventautotracking"},"\u7b80\u4ecb\uff08gioEventAutoTracking\uff09"),(0,i.kt)("p",null,"\u81ea\u52a8\u91c7\u96c6 ",(0,i.kt)("inlineCode",{parentName:"p"},"tap"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"longtap"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"change"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"submit")," \u4e8b\u4ef6\u7684\u63d2\u4ef6\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u70b9\u51fb\u4e8b\u4ef6(tap)\uff1a")," \u5bf9\u5e94 ",(0,i.kt)("inlineCode",{parentName:"p"},"VIEW_CLICK")," \u4e8b\u4ef6\u3002\u81ea\u52a8\u4e0a\u62a5\uff0c\u5f53\u5c0f\u7a0b\u5e8f\u4e2d",(0,i.kt)("strong",{parentName:"p"},"\u7ed1\u5b9a\u7684\u70b9\u51fb\u4e8b\u4ef6"),"\u89e6\u53d1\u65f6\u4e0a\u62a5\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u957f\u6309\u4e8b\u4ef6(longtap)\uff1a")," \u5bf9\u5e94 ",(0,i.kt)("inlineCode",{parentName:"p"},"VIEW_CLICK")," \u4e8b\u4ef6\u3002\u81ea\u52a8\u4e0a\u62a5\uff0c\u5f53\u5c0f\u7a0b\u5e8f\u4e2d",(0,i.kt)("strong",{parentName:"p"},"\u7ed1\u5b9a\u7684\u957f\u6309\u4e8b\u4ef6"),"\u89e6\u53d1\u65f6\u4e0a\u62a5\u3002\uff08\u963f\u91cc(\u652f\u4ed8\u5b9d)\u5c0f\u7a0b\u5e8f/\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u4e0d\u652f\u6301\uff09"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53d8\u66f4\u4e8b\u4ef6(change)\uff1a")," \u5bf9\u5e94 ",(0,i.kt)("inlineCode",{parentName:"p"},"VIEW_CHANGE")," \u4e8b\u4ef6\u3002\u81ea\u52a8\u4e0a\u62a5\uff0c\u5f53\u5c0f\u7a0b\u5e8f\u4e2d",(0,i.kt)("strong",{parentName:"p"},"\u7ed1\u5b9a\u7684\u53d8\u66f4\u4e8b\u4ef6"),"\u89e6\u53d1\u65f6\u4e0a\u62a5\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8868\u5355\u63d0\u4ea4\u4e8b\u4ef6(submit)\uff1a")," \u5bf9\u5e94 ",(0,i.kt)("inlineCode",{parentName:"p"},"FORM_SUBMIT")," \u4e8b\u4ef6\u3002\u81ea\u52a8\u4e0a\u62a5\uff0c\u5f53\u5c0f\u7a0b\u5e8f\u4e2d",(0,i.kt)("strong",{parentName:"p"},"\u7ed1\u5b9a\u7684\u8868\u5355\u63d0\u4ea4\u4e8b\u4ef6"),"\u89e6\u53d1\u65f6\u4e0a\u62a5\u3002(\u5feb\u5e94\u7528\u4e0d\u652f\u6301)"),(0,i.kt)("h2",{id:"\u96c6\u6210"},"\u96c6\u6210"),(0,i.kt)("h3",{id:"1\u5f15\u5165"},"1\u3001\u5f15\u5165"),(0,i.kt)("h4",{id:"\u4e0b\u8f7d\u96c6\u6210\u5f15\u5165"},"\u4e0b\u8f7d\u96c6\u6210\u5f15\u5165"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u63d2\u4ef6\u5e76\u590d\u5236\u81f3\u9879\u76ee\u4e2d\uff1a\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{size:"3"},(0,i.kt)("a",{parentName:"strong",href:"https://assets.giocdn.com/sdk/minip/cdp/3.8.14/plugins/gioEventAutoTracking.js"},"https://assets.giocdn.com/sdk/minip/cdp/3.8.14/plugins/gioEventAutoTracking.js"))),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{size:"2"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"strong"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5f15\u5165\u63d2\u4ef6"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import gioEventAutoTracking from './utils/plugins/gioEventAutoTracking';\n")),(0,i.kt)("h4",{id:"npm-\u96c6\u6210\u5f15\u5165"},"npm \u96c6\u6210\u5f15\u5165"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import gioEventAutoTracking from 'gio-webjs-sdk-cdp/plugins/gioEventAutoTracking';\n")),(0,i.kt)("h3",{id:"2\u6ce8\u518c"},"2\u3001\u6ce8\u518c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"gdp('registerPlugins', [gioEventAutoTracking]);\ngdp('init', xxxx);\n")),(0,i.kt)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,i.kt)("p",null,"1\u3001\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u52a0\u8f7d\u8be5\u63d2\u4ef6\u540e\u81ea\u52a8\u5f00\u542f\u65e0\u57cb\u70b9\u529f\u80fd\u3002"),(0,i.kt)("p",null,"2\u3001\u521d\u59cb\u5316\u914d\u7f6e\u9879 ",(0,i.kt)("inlineCode",{parentName:"p"},"autotrack")," \u4f9d\u7136\u6709\u6548\u5e76\u80fd\u63a7\u5236\u8be5\u529f\u80fd\u662f\u5426\u542f\u7528\uff0c\u8bf7\u7559\u610f",(0,i.kt)("inlineCode",{parentName:"p"},"autotrack"),"\u662f\u5426\u5728\u5f00\u542f\u72b6\u6001\u3002"),(0,i.kt)("p",null,"3\u3001\u4f7f\u7528 vue2/3 \u8bed\u8a00\u6a21\u5f0f\u5f00\u53d1\u70b9\u51fb\u4e8b\u4ef6\u9700\u8981\u4f20\u53c2\u65f6\uff0c\u53ef\u80fd\u4f1a\u65e0\u6cd5\u89e6\u53d1 CLICK \u4e8b\u4ef6\uff0c\u6b64\u65f6\u60a8\u9700\u8981\u518d\u989d\u5916\u5728\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u4e2d\u4f20\u5165",(0,i.kt)("inlineCode",{parentName:"p"},"$event"),"\uff0c\u4ee5\u4fdd\u8bc1\u539f\u751f\u4e8b\u4ef6\u80fd\u4f20\u5165\u65b9\u6cd5\u4e2d\uff0c\u624d\u80fd\u89e6\u53d1\u70b9\u51fb\u4e8b\u4ef6\uff08\u51fd\u6570\u5b9a\u4e49\u65f6\u53ef\u5ffd\u7565$event \u7684\u53c2\u6570\u63a5\u53d7\u5b9a\u4e49\uff0c\u53ea\u5b9a\u4e49\u81ea\u8eab\u4e1a\u52a1\u6240\u9700\u53c2\u6570\u5373\u53ef\uff09\u3002\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button @click="myClick(param1, param2, ..., $event)"></button>\n')),(0,i.kt)("p",null,"4\u3001\u4f7f\u7528 vue3 \u8bed\u8a00\u6a21\u5f0f\u5f00\u53d1\u4f7f\u7528 ","<","script setup",">"," \u8bed\u6cd5\u65f6\uff0c\u8bf7\u5728\u6700\u540e\u5c06\u7528\u4e8e\u76f4\u63a5\u89e6\u53d1\u70b9\u51fb\u4e8b\u4ef6\u7684\u65b9\u6cd5\uff0c\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"defineExpose"),"\u8fdb\u884c\u5bfc\u51fa\u3002\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <button @tap=\"onBtnClick\">\u89e6\u53d1\u5b8c\u6574\u5c5e\u6027\u70b9\u51fb</button>\n</template>\n\n<script setup>\n  const onBtnClick = (e) => console.log('\u89e6\u53d1click', e);\n  defineExpose({ onBtnClick });\n<\/script>\n")))}u.isMDXComponent=!0}}]);