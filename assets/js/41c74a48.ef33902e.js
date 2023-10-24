"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[7654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(k,a(a({ref:t},s),{},{components:n})):r.createElement(k,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:3,title:"iOS \u5e38\u89c1\u95ee\u9898"},a=void 0,l={unversionedId:"ios",id:"ios",title:"iOS \u5e38\u89c1\u95ee\u9898",description:"1. \u5982\u4f55\u7981\u7528GrowingIO iOS SDK \u8c03\u7528\u83b7\u53d6 IDFA \u76f8\u5173\u4ee3\u7801\uff1f",source:"@site/question/ios.md",sourceDirName:".",slug:"/ios",permalink:"/growingio-sdk-docs-saas/question/ios",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-saas/edit/master/question/ios.md",tags:[],version:"current",lastUpdatedAt:1698113404,formattedLastUpdatedAt:"Oct 24, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"iOS \u5e38\u89c1\u95ee\u9898"},sidebar:"question",previous:{title:"Android \u5e38\u89c1\u95ee\u9898",permalink:"/growingio-sdk-docs-saas/question/android"},next:{title:"Web JS \u5e38\u89c1\u95ee\u9898",permalink:"/growingio-sdk-docs-saas/question/web-js"}},p={},d=[{value:"1. \u5982\u4f55\u7981\u7528GrowingIO iOS SDK \u8c03\u7528\u83b7\u53d6 IDFA \u76f8\u5173\u4ee3\u7801\uff1f",id:"1-\u5982\u4f55\u7981\u7528growingio-ios-sdk-\u8c03\u7528\u83b7\u53d6-idfa-\u76f8\u5173\u4ee3\u7801",level:3},{value:"2. iOS SDK pod install \u63d0\u793a could not find compatible versions\uff0c\u8be5\u600e\u4e48\u5904\u7406\uff1f",id:"2-ios-sdk-pod-install-\u63d0\u793a-could-not-find-compatible-versions\u8be5\u600e\u4e48\u5904\u7406",level:3},{value:"3\uff1aApp\u4e00\u5f00\u59cb\u7981\u6b62\u4e86<code>IDFA</code>\u6743\u9650\uff0c\u540e\u7eed\u5141\u8bb8\u4e86<code>IDFA</code> \u6743\u9650\uff0c\u6570\u636e\u4f1a\u6709\u4ec0\u4e48\u53d8\u5316\uff1f",id:"3app\u4e00\u5f00\u59cb\u7981\u6b62\u4e86idfa\u6743\u9650\u540e\u7eed\u5141\u8bb8\u4e86idfa-\u6743\u9650\u6570\u636e\u4f1a\u6709\u4ec0\u4e48\u53d8\u5316",level:3},{value:"4.\u5ef6\u8fdf\u521d\u59cb\u5316\u4e4b\u540e\uff0c\u53d1\u73b0\u4e22\u6389\u4e86\u90e8\u5206\u4e8b\u4ef6\uff0c\u4e3a\u4ec0\u4e48\uff1f",id:"4\u5ef6\u8fdf\u521d\u59cb\u5316\u4e4b\u540e\u53d1\u73b0\u4e22\u6389\u4e86\u90e8\u5206\u4e8b\u4ef6\u4e3a\u4ec0\u4e48",level:3},{value:"5. pod install/update\u66f4\u65b0\u6162\uff0c\u8be5\u600e\u4e48\u89e3\u51b3",id:"5-pod-installupdate\u66f4\u65b0\u6162\u8be5\u600e\u4e48\u89e3\u51b3",level:3},{value:"6.\u96c6\u6210SDK\u540e\uff0c\u4e3a\u4ec0\u4e48\u63a5\u6536\u4e0d\u5230\u6570\u636e\uff1f",id:"6\u96c6\u6210sdk\u540e\u4e3a\u4ec0\u4e48\u63a5\u6536\u4e0d\u5230\u6570\u636e",level:3},{value:"7. SDK\u5982\u4f55\u652f\u6301\u5408\u89c4\uff0c\u4ee5\u53caGDPR\uff08\u6b27\u76df\u300a\u4e00\u822c\u6570\u636e\u4fdd\u62a4\u6761\u4f8b\u300b\uff09\uff1f",id:"7-sdk\u5982\u4f55\u652f\u6301\u5408\u89c4\u4ee5\u53cagdpr\u6b27\u76df\u4e00\u822c\u6570\u636e\u4fdd\u62a4\u6761\u4f8b",level:3}],s=(c="ImageLoader",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const u={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-\u5982\u4f55\u7981\u7528growingio-ios-sdk-\u8c03\u7528\u83b7\u53d6-idfa-\u76f8\u5173\u4ee3\u7801"},"1. \u5982\u4f55\u7981\u7528GrowingIO iOS SDK \u8c03\u7528\u83b7\u53d6 IDFA \u76f8\u5173\u4ee3\u7801\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A\uff1a"),"\u4f7f\u7528\u573a\u666f\uff1a\u4e09\u65b9\u76d1\u6d4b\u673a\u6784\u626b\u63cfAPP\u6216APP\u4e0a\u67b6\u53d1\u73b0 GIO SDK \u6709\u8c03\u7528\u6709\u83b7\u53d6IDFA \u76f8\u5173\u4ee3\u7801\uff08\u5982\u513f\u7ae5\u7c7b\u5e94\u7528\uff09\uff0c\u4e14APP\u4e2d\u53c8\u6ca1\u6709\u4f7f \u7528IDFA\u65f6\uff08\u6b64\u65f6IDFA\u4e0d\u4f1a\u88ab\u4f5c\u4e3a\u8bbf\u95ee\u7528\u6237ID\uff09\u3002",(0,o.kt)("br",null),"\n\u53ea\u6dfb\u52a0\u4f9d\u8d56\u5e93\u5c31\u53ef\u4ee5\u5b9e\u73b0\uff0c\u539f\u7406\u662f: \u4f9d\u8d56\u5e93\u4e2d\u5b9a\u4e49\u6709\u5b8f\uff0cSDK\u4f1a\u6839\u636e\u5b8f\u5224\u65ad\uff0c\u662f\u5426\u6267\u884c\u83b7\u53d6\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C"},"pod 'GrowingAnalytics/DISABLE_IDFA'\n")),(0,o.kt)("h3",{id:"2-ios-sdk-pod-install-\u63d0\u793a-could-not-find-compatible-versions\u8be5\u600e\u4e48\u5904\u7406"},"2. iOS SDK pod install \u63d0\u793a could not find compatible versions\uff0c\u8be5\u600e\u4e48\u5904\u7406\uff1f"),(0,o.kt)("p",null,"\u5982\u56fe: ",(0,o.kt)("br",null)),(0,o.kt)(s,{path:"img/question/noversions",mdxType:"ImageLoader"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A\uff1a")," \u6309\u7167\u63d0\u793a\u6267\u884c\u547d\u4ee4\uff0c\u6216\u5207\u6362\u7f51\u7edc\u73af\u5883\uff0c\u5927\u90e8\u5206\u662f\u7f51\u7edc\u73af\u5883\u95ee\u9898\u65e0\u6cd5\u4e0b\u7838\u4f9d\u8d56\u3002"),(0,o.kt)("h3",{id:"3app\u4e00\u5f00\u59cb\u7981\u6b62\u4e86idfa\u6743\u9650\u540e\u7eed\u5141\u8bb8\u4e86idfa-\u6743\u9650\u6570\u636e\u4f1a\u6709\u4ec0\u4e48\u53d8\u5316"},"3\uff1aApp\u4e00\u5f00\u59cb\u7981\u6b62\u4e86",(0,o.kt)("inlineCode",{parentName:"h3"},"IDFA"),"\u6743\u9650\uff0c\u540e\u7eed\u5141\u8bb8\u4e86",(0,o.kt)("inlineCode",{parentName:"h3"},"IDFA")," \u6743\u9650\uff0c\u6570\u636e\u4f1a\u6709\u4ec0\u4e48\u53d8\u5316\uff1f"),(0,o.kt)("p",null,"A\uff1a\u5bf9\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"IDFA"),"\uff0cApp\u751f\u547d\u5468\u671f\u5185\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"IDFA")," \u53ea\u4f1a\u83b7\u53d6\u4e00\u6b21\uff0c\u5c31\u7b97\u540e\u7eed IDFA \u6743\u9650\u6253\u5f00\u4e86\uff0c\u4e5f\u4e0d\u4f1a\u518d\u83b7\u53d6\uff0c\u53ef\u4ee5\u5728\u4e0b\u4e00\u6b21App\u542f\u52a8\u540e\u751f\u6548\u3002\u5bf9\u4e8e \u8bbe\u5907\u6807\u8bc6\uff0c\u4ec5\u4e14\u5728 App\u7b2c\u4e00\u6b21\u542f\u52a8\u65f6\u751f\u6210\uff0c\u540e\u7eed\u4e0d\u518d\u6539\u53d8\uff0c\u4f18\u5148\u7ea7\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"IDFA"),"> ",(0,o.kt)("inlineCode",{parentName:"p"},"IDFV")," > \u968f\u673a\u5b57\u7b26\u4e32\uff0c\u5982\u679c ",(0,o.kt)("inlineCode",{parentName:"p"},"IDFA")," \u65e0\u6cd5\u83b7\u53d6\uff0c\u5219\u4f1a\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"IDFV")," \u4e14\u4e0d\u518d\u53d8\u52a8\uff0c\u4f1a\u5b58\u5165",(0,o.kt)("inlineCode",{parentName:"p"},"Keychain"),"\uff0c\u5378\u8f7d\u4e5f\u65e0\u6cd5\u4fee\u6539\u3002\u5982\u679c\u8981\u8bbe\u5907\u6807\u8bc6 \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"IDFA")," \u7ed1\u5b9a\uff0c\u5219\u9700\u8981\u5728\u7528\u6237\u540c\u610f ",(0,o.kt)("inlineCode",{parentName:"p"},"IDFA"),"\u6743\u9650\u4e4b\u540e\u8fdb\u884c\u7b2c\u4e00\u6b21SDK\u521d\u59cb\u5316\u64cd\u4f5c\u3002"),(0,o.kt)("h3",{id:"4\u5ef6\u8fdf\u521d\u59cb\u5316\u4e4b\u540e\u53d1\u73b0\u4e22\u6389\u4e86\u90e8\u5206\u4e8b\u4ef6\u4e3a\u4ec0\u4e48"},"4.\u5ef6\u8fdf\u521d\u59cb\u5316\u4e4b\u540e\uff0c\u53d1\u73b0\u4e22\u6389\u4e86\u90e8\u5206\u4e8b\u4ef6\uff0c\u4e3a\u4ec0\u4e48\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A\uff1a"),"\u5bf9\u4e8eSDK\u521d\u59cb\u5316\u4e4b\u524d\uff0c\u6216\u8005\u5f00\u542f\u6570\u636e\u91c7\u96c6\u4e4b\u524d\u53d1\u751f\u7684\u4e8b\u4ef6\uff0c\u4e00\u6982\u4e22\u5f03\u3002"),(0,o.kt)("h3",{id:"5-pod-installupdate\u66f4\u65b0\u6162\u8be5\u600e\u4e48\u89e3\u51b3"},"5. pod install/update\u66f4\u65b0\u6162\uff0c\u8be5\u600e\u4e48\u89e3\u51b3"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A\uff1a")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"pod repo remove master\npod repo add master https://gitee.com/mirrors/CocoaPods-Specs.git\npod repo update\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u79d1\u5b66\u4e0a\u7f51")),(0,o.kt)("h3",{id:"6\u96c6\u6210sdk\u540e\u4e3a\u4ec0\u4e48\u63a5\u6536\u4e0d\u5230\u6570\u636e"},"6.\u96c6\u6210SDK\u540e\uff0c\u4e3a\u4ec0\u4e48\u63a5\u6536\u4e0d\u5230\u6570\u636e\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A\uff1a")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"dataCollectionServerHost\u3001accountId \u3001dataSourceId \u914d\u7f6e\u9519\u8bef"),(0,o.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u7f51\u7edc\u73af\u5883\u662f\u5426\u53ef\u8bbf\u95ee")),(0,o.kt)("h3",{id:"7-sdk\u5982\u4f55\u652f\u6301\u5408\u89c4\u4ee5\u53cagdpr\u6b27\u76df\u4e00\u822c\u6570\u636e\u4fdd\u62a4\u6761\u4f8b"},"7. SDK\u5982\u4f55\u652f\u6301\u5408\u89c4\uff0c\u4ee5\u53caGDPR\uff08\u6b27\u76df\u300a\u4e00\u822c\u6570\u636e\u4fdd\u62a4\u6761\u4f8b\u300b\uff09\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A\uff1a"),"\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/docs/compliance/iosCompliance"},"iOS SDK\u5408\u89c4\u8bf4\u660e")))}m.isMDXComponent=!0}}]);