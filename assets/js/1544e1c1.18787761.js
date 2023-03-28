"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[1856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:4,title:"\u5c0f\u7a0b\u5e8f SDK \u5408\u89c4\u8bf4\u660e"},a=void 0,l={unversionedId:"compliance/minpCompliance",id:"compliance/minpCompliance",title:"\u5c0f\u7a0b\u5e8f SDK \u5408\u89c4\u8bf4\u660e",description:"\u6536\u96c6\u7684\u6570\u636e",source:"@site/docs/compliance/minpCompliance.md",sourceDirName:"compliance",slug:"/compliance/minpCompliance",permalink:"/growingio-sdk-docs-saas/docs/compliance/minpCompliance",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-saas/edit/master/docs/compliance/minpCompliance.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u5c0f\u7a0b\u5e8f SDK \u5408\u89c4\u8bf4\u660e"},sidebar:"gioSidebar",previous:{title:"Web JS SDK \u5408\u89c4\u8bf4\u660e",permalink:"/growingio-sdk-docs-saas/docs/compliance/webCompliance"},next:{title:"Android SDK",permalink:"/growingio-sdk-docs-saas/docs/android"}},p={},c=[{value:"\u6536\u96c6\u7684\u6570\u636e",id:"\u6536\u96c6\u7684\u6570\u636e",level:2},{value:"\u5408\u89c4\u6b65\u9aa4",id:"\u5408\u89c4\u6b65\u9aa4",level:2},{value:"\u9690\u79c1\u4fdd\u62a4\u6307\u5f15",id:"\u9690\u79c1\u4fdd\u62a4\u6307\u5f15",level:3},{value:"\u6570\u636e\u52a0\u5bc6\u4f20\u8f93\u8bf4\u660e",id:"\u6570\u636e\u52a0\u5bc6\u4f20\u8f93\u8bf4\u660e",level:2},{value:"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e",id:"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e",level:2},{value:"GDPR",id:"gdpr",level:3}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6536\u96c6\u7684\u6570\u636e"},"\u6536\u96c6\u7684\u6570\u636e"),(0,o.kt)("p",null,"\u6309\u7167 GDPR \u7684\u754c\u5b9a\uff0cGrowingIO \u5c5e\u4e8e\u6570\u636e\u5904\u7406\u65b9\uff0c\u8fd9\u662f\u56e0\u4e3a GrowingIO \u4f1a\u6309\u7167\u5ba2\u6237\u7684\u6307\u793a\u4ee3\u8868\u5ba2\u6237\u6536\u96c6\u548c\u5904\u7406\u6570\u636e\u3002\u6211\u4eec\u7684\u5ba2\u6237\u5219\u662f\u6570\u636e\u63a7\u5236\u65b9\uff0c\u4ed6\u4eec\u62e5\u6709\u6240\u6709\u76f8\u5173\u6743\u5229\uff0c\u53ef\u4ee5\u4f7f\u7528\u63a5\u53e3\u968f\u65f6\u63a7\u5236\u662f\u5426\u5f00\u542f\u6570\u636e\u6536\u96c6\u548c\u5904\u7406\u3002"),(0,o.kt)("p",null,"\u6536\u96c6\u4fe1\u606f\u662f\u4e3a\u4e86\u60a8\u7684\u7f51\u7ad9\u5411\u6240\u6709\u7528\u6237\u63d0\u4f9b\u66f4\u597d\u7684\u670d\u52a1\u3002GrowingIO \u5c0f\u7a0b\u5e8f SDK \u5c06\u4f1a\u6536\u96c6\u5c0f\u7a0b\u5e8f\u8fd0\u884c\u76f8\u5173\u7684\u73af\u5883\u4fe1\u606f\uff0c\u5305\u62ec\u5fae\u4fe1\u7248\u672c\u53f7\uff0c\u5c0f\u7a0b\u5e8f\u573a\u666f\u503c\uff0c\u8bbe\u5907\u4fe1\u606f\uff0c\u7f51\u7edc\u4fe1\u606f\u3002\u4f7f\u7528 localstorage \u6765\u5b58\u50a8 SDK \u81ea\u52a8\u751f\u6210\u7684\u8bbf\u95ee\u7528\u6237ID\u3002\u91c7\u96c6\u7684\u7528\u6237\u4fe1\u606f\u90fd\u662f\u5ba2\u6237\u5c0f\u7a0b\u5e8f\u9700\u8981\u8bf7\u6c42\u7528\u6237\u6388\u6743\u7684\uff0c\u8b6c\u5982\uff1a openid\uff0c\u5fae\u4fe1\u5934\u50cf\uff0c\u6635\u79f0\uff0c\u5b9a\u4f4d\u3002"),(0,o.kt)("h2",{id:"\u5408\u89c4\u6b65\u9aa4"},"\u5408\u89c4\u6b65\u9aa4"),(0,o.kt)("h3",{id:"\u9690\u79c1\u4fdd\u62a4\u6307\u5f15"},"\u9690\u79c1\u4fdd\u62a4\u6307\u5f15"),(0,o.kt)("p",null,"\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7528\u6237\u9690\u79c1\u4fdd\u62a4")),(0,o.kt)("h2",{id:"\u6570\u636e\u52a0\u5bc6\u4f20\u8f93\u8bf4\u660e"},"\u6570\u636e\u52a0\u5bc6\u4f20\u8f93\u8bf4\u660e"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSDK\u5173\u95ed\u6570\u636e\u52a0\u5bc6\uff0c\u53ef\u4ee5\u901a\u8fc7\u521d\u59cb\u5316\u65f6\u8bbe\u7f6e compress: true \u6253\u5f00\u6570\u636e\u52a0\u5bc6\u3002\n\u4f7f\u7528\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/docs/miniprogram/3.3/initSettings#compress"},"SDK\u6570\u636e\u52a0\u5bc6\u4f20\u8f93 compress"),"\u3002"),(0,o.kt)("h2",{id:"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e"},"\u6570\u636e\u5b58\u50a8\u53d1\u9001\u7b56\u7565\u8bf4\u660e"),(0,o.kt)("p",null,"\u5c0f\u7a0b\u5e8f SDK \u91c7\u96c6\u7684\u7528\u6237\u884c\u4e3a\u6570\u636e\u91c7\u7528\u8282\u6d411\u79d2\u949f(\u5373\u5982\u679c\u6709\u6570\u636e\u52191\u79d2\u949f\u53d1\u4e00\u6b21)\u53d1\u9001\u7684\u7b56\u7565\uff0c\u5f53\u8282\u6d41\u961f\u5217\u91cc\u5927\u4e8e50\u6761\u884c\u4e3a\u6570\u636e\u540e\u7acb\u5373\u6253\u5305\u53d1\u4e00\u6b21\uff0c\u884c\u4e3a\u6570\u636e\u7f13\u5b58\u91c7\u7528\u5185\u5b58\u7f13\u5b58\u3002\u5f53\u7528\u6237\u5f00\u542f\u5f3a\u5236\u767b\u5f55\u6a21\u5f0f(forceLogin \u8bbe\u7f6e\u4e3a true)\uff0c\u5728\u8c03\u7528 identify \u63a5\u53e3\u4e4b\u524d\uff0c\u884c\u4e3a\u6570\u636e\u91c7\u7528\u5185\u5b58\u7f13\u5b58\uff0c\u8c03\u7528 identify \u540e\u7acb\u5373\u4e0a\u62a5\u7f13\u5b58\u7684\u884c\u4e3a\u6570\u636e\u3002"),(0,o.kt)("h3",{id:"gdpr"},"GDPR"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E6%AD%90%E7%9B%9F%E4%B8%80%E8%88%AC%E8%B3%87%E6%96%99%E4%BF%9D%E8%AD%B7%E8%A6%8F%E7%AF%84"},"\u200bGeneral Data Protection Regulation \u6b27\u76df\u901a\u7528\u6570\u636e\u4fdd\u62a4\u6761\u4f8b"),"\u200b"),(0,o.kt)("p",null,"GrowingIO \u4f5c\u4e3a\u6570\u636e\u5904\u7406\u65b9\uff0c\u4e3a\u7b26\u5408 GDPR\uff0c\u5c0f\u7a0b\u5e8f SDK \u63d0\u4f9b\u8bbe\u7f6e\u63a5\u53e3\uff0c\u53ef\u5728\u7528\u6237\u672a\u540c\u610f\u9690\u79c1\u534f\u8bae\u65f6\uff0c\u521d\u59cb\u5316\u65f6\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"dataCollect"),"\u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," \uff0c\u7981\u6b62\u6570\u636e\u91c7\u96c6\u3002",(0,o.kt)("br",null),"\u5728\u7528\u6237\u540c\u610f\u9690\u79c1\u534f\u8bae\u540e\uff0c\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"setDataCollect"),"\u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5f00\u542f\u6570\u636e\u91c7\u96c6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"gdp('init', 'your GrowingIO accountId', 'your dataSourceID', 'your AppId', {\n  host: 'your apiServerHost', \n  version: '1.0.0',\n  dataCollect: false,\n  debug: true  // \u6253\u5f00debug\u8c03\u8bd5\u80fd\u529b\n});\n\n\n// \u5982\u679c\u7528\u6237\u672a\u540c\u610f\u9690\u79c1\u534f\u8bae\uff0c\u5f39\u51fa\u9690\u79c1\u534f\u8bae\u5f39\u6846\uff0c\u7528\u6237\u540c\u610f\u9690\u79c1\u534f\u8bae\u540e\uff0c\u8bbe\u7f6e\u5f00\u542f\u6570\u636e\u91c7\u96c6\u3002\ngdp('setDataCollect', true);\n\n// \u5982\u679c\u540c\u610f\u9690\u79c1\u534f\u8bae\uff0c\u8bbe\u7f6e\u5f00\u542f\u6570\u636e\u91c7\u96c6\u3002\u53ef\u5199\u5728 app.js \u7684 onshow \u65b9\u6cd5\u4e2d\ngdp('setDataCollect', true);\n")))}d.isMDXComponent=!0}}]);