"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[7756],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>p});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var a=o.createContext({}),s=function(e){var r=o.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return o.createElement(a.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},g=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),g=s(t),p=n,b=g["".concat(a,".").concat(p)]||g[p]||d[p]||i;return t?o.createElement(b,l(l({ref:r},c),{},{components:t})):o.createElement(b,l({ref:r},c))}));function p(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=g;var u={};for(var a in r)hasOwnProperty.call(r,a)&&(u[a]=r[a]);u.originalType=e,u.mdxType="string"==typeof e?e:n,l[1]=u;for(var s=2;s<i;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5330:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var o=t(7462),n=(t(7294),t(3905));const i={sidebar_position:4,title:"Debugger \u6a21\u5757"},l=void 0,u={unversionedId:"ios/modules/MobileDebugger Module",id:"ios/modules/MobileDebugger Module",title:"Debugger \u6a21\u5757",description:"GrowingIO SDK \u652f\u6301\u7684 Mobile Debugger \u5de5\u5177\uff0c\u53ef\u5bf9\u5e94\u7528\u4e2d\u96c6\u6210\u7684SDK\u4e8b\u4ef6\u53d1\u9001\u8fdb\u884c\u8c03\u8bd5\u548c\u6821\u9a8c\u3002",source:"@site/docs/ios/modules/MobileDebugger Module.md",sourceDirName:"ios/modules",slug:"/ios/modules/MobileDebugger Module",permalink:"/growingio-sdk-docs-v3/docs/ios/modules/MobileDebugger Module",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-v3/edit/master/docs/ios/modules/MobileDebugger Module.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Debugger \u6a21\u5757"},sidebar:"gioSidebar",previous:{title:"\u5708\u9009\u6a21\u5757",permalink:"/growingio-sdk-docs-v3/docs/ios/modules/WebCircle Module"},next:{title:"\u5e7f\u544a\u6a21\u5757",permalink:"/growingio-sdk-docs-v3/docs/ios/modules/Advert Module"}},a={},s=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:3}],c={toc:s};function d(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"GrowingIO SDK \u652f\u6301\u7684 Mobile Debugger \u5de5\u5177\uff0c\u53ef\u5bf9\u5e94\u7528\u4e2d\u96c6\u6210\u7684SDK\u4e8b\u4ef6\u53d1\u9001\u8fdb\u884c\u8c03\u8bd5\u548c\u6821\u9a8c\u3002"),(0,n.kt)("p",null,"\u5728\u5524\u8d77 Debugger \u7684 APP \u540e\uff0c\u8be5 APP \u91c7\u96c6\u7684\u884c\u4e3a\u6570\u636e\u4ee5\u53ca\u5f53\u524d\u9875\u9762\u622a\u56fe\u5c31\u4f1a\u51fa\u73b0\u5728\u7f51\u9875\u4e0a\uff0c\u6d4b\u8bd5\u540c\u5b66\u53ef\u4ee5\u6839\u636e\u6570\u636e\u770b\u6570\u636e\u7684\u91c7\u96c6\u4ee5\u53ca\u53d1\u9001\u60c5\u51b5\uff0c\u5bf9\u6570\u636e\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u5f53\u4f60\u96c6\u6210\u65e0\u57cb\u70b9 / \u57cb\u70b9 SDK \u65f6\uff0cDebugger \u6a21\u5757\u4f1a\u9ed8\u8ba4\u96c6\u6210\u5230 SDK \u4e2d\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u82e5\u4e0d\u60f3\u8981\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u96c6\u6210 Debugger \u6a21\u5757\uff0c\u53ef\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"/blog/custom%20ios%20sdk"},"\u57fa\u4e8e GrowingIO \u73b0\u6709 SDK \u57fa\u7840\u4e0a\u7684\u4e8c\u6b21\u5f00\u53d1"),"\uff0c\u81ea\u5b9a\u4e49 SDK \u6a21\u5757\u3002")),(0,n.kt)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,n.kt)("p",null,"\u767b\u5f55 GrowingIO CDP \u7ba1\u7406\u5e73\u53f0\uff08\u4e00\u822c\u6765\u8bf4\uff0cCDP \u90fd\u4f1a\u914d\u6709\u6570\u636e\u7ba1\u7406\uff09\uff0c\u5728\u5e73\u53f0\u7ba1\u7406---\x3e\u5ba2\u6237\u6570\u636e\u5e73\u53f0---\x3e\u6570\u636e\u6821\u9a8c---\x3eMobile Debugger \u8fdb\u5165 Mobile Debugger \u542f\u52a8\u9875\u3002\n\u5177\u4f53\u64cd\u4f5c\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"/docs/debugverify/mobiledebugger"},"Mobile Debugger")," \u5373\u53ef\u3002"))}d.isMDXComponent=!0}}]);