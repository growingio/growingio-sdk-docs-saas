"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[4541],{3905:(e,t,l)=>{l.d(t,{Zo:()=>m,kt:()=>v});var a=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function n(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):n(n({},t),e)),l},m=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var l=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),c=o(l),v=r,d=c["".concat(p,".").concat(v)]||c[v]||k[v]||i;return l?a.createElement(d,n(n({ref:t},m),{},{components:l})):a.createElement(d,n({ref:t},m))}));function v(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=l.length,n=new Array(i);n[0]=c;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,n[1]=u;for(var o=2;o<i;o++)n[o]=l[o];return a.createElement.apply(null,n)}return a.createElement.apply(null,l)}c.displayName="MDXCreateElement"},2204:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var a=l(7462),r=(l(7294),l(3905));const i={sidebar_position:0,title:"\u7248\u672c\u8bb0\u5f55"},n=void 0,u={unversionedId:"miniprogram/version",id:"miniprogram/version",title:"\u7248\u672c\u8bb0\u5f55",description:"SDK \u5386\u53f2\u7248\u672c\u4e0b\u8f7d\u5730\u5740\uff1a",source:"@site/docs/miniprogram/version.md",sourceDirName:"miniprogram",slug:"/miniprogram/version",permalink:"/growingio-sdk-docs-saas/docs/miniprogram/version",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-saas/edit/master/docs/miniprogram/version.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"\u7248\u672c\u8bb0\u5f55"},sidebar:"gioSidebar",previous:{title:"\u5c0f\u7a0b\u5e8f SDK",permalink:"/growingio-sdk-docs-saas/docs/miniprogram/"},next:{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",permalink:"/growingio-sdk-docs-saas/docs/miniprogram/integration/wechat"}},p={},o=[{value:"V3.8.14 - 2023/03/22",id:"v3814---20230322",level:3},{value:"V3.8.13 - 2023/02/21",id:"v3813---20230221",level:3},{value:"V3.8.12 - 2023/01/11",id:"v3812---20230111",level:3},{value:"V3.8.11 - 2022/12/22",id:"v3811---20221222",level:3},{value:"V3.8.10 - 2022/11/17",id:"v3810---20221117",level:3},{value:"V3.8.9 - 2022/10/11",id:"v389---20221011",level:3},{value:"V3.8.8 - 2022/09/22",id:"v388---20220922",level:3},{value:"V3.8.7 - 2022/09/14",id:"v387---20220914",level:3},{value:"V3.8.6 - 2022/09/06",id:"v386---20220906",level:3},{value:"V3.8.5 - 2022/08/09",id:"v385---20220809",level:3},{value:"V3.8.4 - 2022/08/05",id:"v384---20220805",level:3},{value:"V3.8.3 - 2022/08/01",id:"v383---20220801",level:3},{value:"V3.8.2 - 2022/07/20",id:"v382---20220720",level:3},{value:"V3.8.1 - 2022/07/15",id:"v381---20220715",level:3},{value:"V3.8.0 - 2022/06/29",id:"v380---20220629",level:3},{value:"V3.8.0-rc.10 - 2022/6/14",id:"v380-rc10---2022614",level:3},{value:"V3.8.0-rc.9 - 2022/5/29",id:"v380-rc9---2022529",level:3},{value:"V3.8.0-rc.8 - 2022/5/24",id:"v380-rc8---2022524",level:3},{value:"V3.8.0-rc.7 - 2022/5/16",id:"v380-rc7---2022516",level:3},{value:"V3.8.0-rc.6 - 2022/5/6",id:"v380-rc6---202256",level:3},{value:"V3.8.0-rc.5 - 2022/4/29",id:"v380-rc5---2022429",level:3},{value:"V3.8.0-rc.4 - 2022/4/25",id:"v380-rc4---2022425",level:3},{value:"V3.8.0-rc.3 - 2022/4/20",id:"v380-rc3---2022420",level:3},{value:"V3.8.0-rc.2 - 2022/4/14",id:"v380-rc2---2022414",level:3},{value:"V3.8.0-rc.1 - 2022/3/30",id:"v380-rc1---2022330",level:3}],m={toc:o};function k(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"SDK \u5386\u53f2\u7248\u672c\u4e0b\u8f7d\u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-miniprogram-autotracker/releases"},"https://github.com/growingio/growingio-sdk-miniprogram-autotracker/releases")),(0,r.kt)("h3",{id:"v3814---20230322"},"V3.8.14 - 2023/03/22"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u5206\u4eab\u4e8b\u4ef6\u53ef\u80fd\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u4e22\u5931\u9ed8\u8ba4\u9875\u9762\u53c2\u6570\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf1f \u4f18\u5316\u964d\u4f4e\u672c\u5730\u5b58\u50a8\u7684\u5b58\u53d6\u9891\u7387\uff0c\u51cf\u5c11\u5bf9\u6027\u80fd\u7684\u5f71\u54cd\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf1f \u4f18\u5316\u4e8b\u4ef6\u53d1\u9001\u5931\u8d25\u65f6\u91cd\u53d1\u903b\u8f91\uff0c\u63d0\u9ad8\u91cd\u53d1\u6210\u529f\u7387\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf1f \u4f18\u5316\u8fd0\u8425SDK\u521d\u59cb\u5316\u903b\u8f91\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf89 \u65b0\u589euni-appVue3\u3001Taro3Vue3 ","<","script setup",">"," \u5199\u6cd5\u7684\u652f\u6301\u3002")),(0,r.kt)("h3",{id:"v3813---20230221"},"V3.8.13 - 2023/02/21"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u4e22\u5931\u52a0\u5bc6\u6807\u8bb0\u5bfc\u81f4\u52a0\u5bc6\u6570\u636e\u4e0a\u62a5\u65e0\u6cd5\u89e3\u6790\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u4f7f\u7528\u8d44\u6e90\u4f4d\u7ec4\u4ef6\u65f6\u67d0\u4e9b\u60c5\u51b5\u4e0b\u62a5\u9519\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d Taro3react \u6846\u67b6\u4e2d FunctionComponent \u8c03\u7528 hooks \u62a5\u9519\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d uniappVue3 \u6846\u67b6\u4e2d\u7f16\u8bd1\u6253\u5305\u540e\u70b9\u51fb\u4e8b\u4ef6\u4e22\u5931\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf1f \u4fee\u6539\u9875\u9762\u5206\u4eab\u3001\u5206\u4eab\u670b\u53cb\u5708\u3001\u6dfb\u52a0\u6536\u85cf\u4e8b\u4ef6\u548c\u5c5e\u6027\u6807\u8bc6\u7b26\u3002")),(0,r.kt)("h3",{id:"v3812---20230111"},"V3.8.12 - 2023/01/11"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u5e73\u53f0\u6ca1\u6709\u8fd0\u884c\u4e2d\u7684\u8fd0\u8425\u5f39\u7a97\u4efb\u52a1\u65f6\u5168\u91cf\u5b58\u50a8\u57cb\u70b9\u5bfc\u81f4\u672c\u5730\u5b58\u50a8\u8d85\u9650\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u5f39\u7a97\u7ec4\u4ef6\u591a\u4e2a\u540c\u65f6\u4f7f\u7528\u65f6\u591a\u6b21\u5f39\u7a97\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf1f \u4fee\u6539\u57cb\u70b9\u4e8b\u4ef6\u65f6\u957f\u3001\u6027\u80fd\u5206\u6790\u4e8b\u4ef6\u548c\u5c5e\u6027\u6807\u8bc6\u7b26\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf89 \u65b0\u589e\u624b\u52a8\u66f4\u65b0\u534a\u81ea\u52a8\u57cb\u70b9\u76d1\u63a7\u7684\u529f\u80fd\uff08\u4ee5\u5e94\u5bf9\u52a8\u6001\u6e32\u67d3\u534a\u81ea\u52a8\u57cb\u70b9\u8282\u70b9\u65e0\u6cd5\u88ab\u76d1\u542c\u7684\u95ee\u9898\uff09\u3002",(0,r.kt)("a",{parentName:"li",href:"/docs/miniprogram/plugins/impressionTracking#%E6%89%8B%E5%8A%A8%E6%9B%B4%E6%96%B0%E5%8D%8A%E8%87%AA%E5%8A%A8%E5%9F%8B%E7%82%B9%E7%9B%91%E5%90%AC"},"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h3",{id:"v3811---20221222"},"V3.8.11 - 2022/12/22"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u5728\u7279\u5b9a\u6761\u4ef6\u4e0b\u8c03\u7528 getApp \u4f1a\u5bfc\u81f4\u6b7b\u5faa\u73af\u5361\u6b7b\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d Taro2 \u6846\u67b6\u4e2d\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u548c\u767e\u5ea6\u5c0f\u7a0b\u5e8f Page \u4e8b\u4ef6\u4e22\u5931\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d uniapp \u6846\u67b6\u4e2d\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u5076\u73b0\u62a5\u9519\u6216\u62a5\u8b66\u544a\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf1f \u4f18\u5316\u4f7f\u7528 Component \u4f5c\u4e3a\u9875\u9762\u65f6\u81ea\u52a8\u9002\u914d\uff0c\u540c\u65f6\u79fb\u9664",(0,r.kt)("inlineCode",{parentName:"li"},"comAsPage"),"\u521d\u59cb\u5316\u914d\u7f6e\u9879\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf1f \u4f18\u5316\u4fee\u6539 gioPageTitle \u8bbe\u7f6e\u9875\u9762\u6807\u9898\u4e3a setNavigationBarTitle \u751f\u6548\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf89 \u65b0\u589e\u9875\u9762\u5c5e\u6027\u529f\u80fd\u3002")),(0,r.kt)("h3",{id:"v3810---20221117"},"V3.8.10 - 2022/11/17"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u5728\u5c0f\u7a0b\u5e8f\u9875\u9762\u578b\u63d2\u4ef6\u4e2d\u96c6\u6210\u62a5\u9519\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d remax \u6846\u67b6\u90e8\u5206\u4e8b\u4ef6\u4e0d\u89e6\u53d1\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d Taro3react \u65e0\u57cb\u70b9 xpath \u53d6\u503c\u9519\u8bef\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\uff08\u542b\u539f\u751f\u53ca\u5404\u6846\u67b6\uff09\u9875\u9762\u53c2\u6570\u4e22\u5931\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d iOS \u4e0b\u5c0f\u7a0b\u5e8f\u5206\u4eab\u5b8c\u6210\u540e\u5076\u73b0\u4e8b\u4ef6\u5361\u4f4f\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf1f \u4f18\u5316\u521d\u59cb\u5316\u5173\u95ed\u6570\u636e\u91c7\u96c6\u6216\u65e0\u57cb\u70b9\u65f6\uff0c\u6ca1\u6709\u63d0\u793a\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf1f \u4f18\u5316\u4e0a\u62a5\u4e8b\u4ef6\u5c5e\u6027\u6807\u8bc6\u7b26\u5b57\u7b26\u957f\u5ea6\u7531 50 \u4fee\u6539\u4e3a 100\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf89 \u65b0\u589e\u6027\u80fd\u76d1\u63a7\u529f\u80fd\u3002",(0,r.kt)("a",{parentName:"li",href:"/docs/miniprogram/plugins/performance"},"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h3",{id:"v389---20221011"},"V3.8.9 - 2022/10/11"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d uniapp \u6846\u67b6\u4e2d\u5076\u73b0\u70b9\u51fb\u4e8b\u4ef6\u4e22\u5931\u7684\u95ee\u9898\u3002")),(0,r.kt)("h3",{id:"v388---20220922"},"V3.8.8 - 2022/09/22"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d Taro \u6846\u67b6\u4e2d\u963b\u6b62\u5192\u6ce1\u5931\u6548\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u52a0\u5bc6\u4e0a\u62a5\u5931\u8d25\u91cd\u8bd5\u65f6\u4e8b\u4ef6\u4e71\u7801\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf1f \u4f18\u5316\u66dd\u5149\u76d1\u542c\u903b\u8f91\uff0c\u51cf\u5c11\u6027\u80fd\u5f71\u54cd\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf1f \u4f18\u5316\u65e0\u57cb\u70b9\u5904\u7406\u903b\u8f91\uff0c\u51cf\u5c11\u6027\u80fd\u5f71\u54cd\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf89 \u65b0\u589e\u4e8b\u4ef6\u65f6\u957f\u7edf\u8ba1\u529f\u80fd\u3002",(0,r.kt)("a",{parentName:"li",href:"/docs/miniprogram/commonlyApi#%E4%BA%8B%E4%BB%B6%E6%97%B6%E9%95%BF%E7%BB%9F%E8%AE%A1"},"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h3",{id:"v387---20220914"},"V3.8.7 - 2022/09/14"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d",(0,r.kt)("inlineCode",{parentName:"li"},"onShareTimeline"),"\u8fd4\u56de\u53d6\u503c\u9519\u8bef\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf89 \u65b0\u589e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u3001QQ \u5c0f\u7a0b\u5e8f",(0,r.kt)("inlineCode",{parentName:"li"},"onAddToFavorites"),"\u9884\u7f6e\u57cb\u70b9\u4e8b\u4ef6\u652f\u6301\u3002")),(0,r.kt)("h3",{id:"v386---20220906"},"V3.8.6 - 2022/09/06"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d esid \u603b\u662f\u4e3a 1 \u4e0d\u7d2f\u52a0\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u90e8\u5206\u5de5\u5177\u7c7b\u65b9\u6cd5\u6781\u7aef\u53d6\u503c\u65f6\u8fd0\u884c\u9519\u8bef\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u8fd0\u8425\u5f39\u7a97\u6761\u4ef6\u590d\u6742\u65f6\u8fd0\u884c\u62a5\u9519\u7684\u95ee\u9898\u3002")),(0,r.kt)("h3",{id:"v385---20220809"},"V3.8.5 - 2022/08/09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u8fd0\u8425\u5f39\u7a97\u57cb\u70b9\u5b58\u50a8\u8fc7\u591a\u5bfc\u81f4\u5b58\u50a8\u53ef\u80fd\u8d85\u9650\u548c\u6821\u9a8c\u6b21\u6570\u8fc7\u591a\u5f71\u54cd\u6027\u80fd\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u4ece\u5f00\u542f\u81f3\u5173\u95ed",(0,r.kt)("inlineCode",{parentName:"li"},"enableIdMapping"),"\u540e\u4ecd\u7136\u4f1a\u4e0a\u62a5",(0,r.kt)("inlineCode",{parentName:"li"},"userKey"),"\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf89 \u65b0\u589e\u534a\u81ea\u52a8\u6d4f\u89c8\u4e8b\u4ef6\u5355\u6b21\u53d1\u9001\u529f\u80fd\u3002")),(0,r.kt)("h3",{id:"v384---20220805"},"V3.8.4 - 2022/08/05"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u5f00\u542f",(0,r.kt)("inlineCode",{parentName:"li"},"forceLogin"),"\u4e14\u672a\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"identify"),"\u65f6\u5173\u95ed\u5c0f\u7a0b\u5e8f\u4f1a\u4e0a\u62a5\u533f\u540d\u7528\u6237\u6570\u636e\u7684\u95ee\u9898\u3002")),(0,r.kt)("h3",{id:"v383---20220801"},"V3.8.3 - 2022/08/01"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d",(0,r.kt)("inlineCode",{parentName:"li"},"onShareAppMessage"),"\u5f02\u6b65\u8fd4\u56de\u81ea\u5b9a\u4e49\u53c2\u6570\u65f6 SDK \u53d6\u503c\u9519\u8bef\u5bfc\u81f4\u5206\u4eab\u94fe\u63a5\u9519\u8bef\u7684\u95ee\u9898\u3002")),(0,r.kt)("h3",{id:"v382---20220720"},"V3.8.2 - 2022/07/20"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf89 \u65b0\u589e\u8bbe\u7f6e\u57cb\u70b9\u901a\u7528\u5c5e\u6027",(0,r.kt)("inlineCode",{parentName:"li"},"setGeneralProps"),"\u548c\u6e05\u9664",(0,r.kt)("inlineCode",{parentName:"li"},"clearGeneralProps"),"\u63a5\u53e3\u3002")),(0,r.kt)("h3",{id:"v381---20220715"},"V3.8.1 - 2022/07/15"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u5728 appOnLaunch \u4e2d\u7684\u57cb\u70b9 session \u53d6\u503c\u53ef\u80fd\u4e0e visit \u4e8b\u4ef6\u4e0d\u4e00\u81f4\u5bfc\u81f4\u5e73\u53f0\u7edf\u8ba1\u4e22\u5931\u7684\u95ee\u9898\u3002")),(0,r.kt)("h3",{id:"v380---20220629"},"V3.8.0 - 2022/06/29"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf1f \u4f18\u5316\u6570\u636e\u4e0a\u62a5\u903b\u8f91\uff0c\u51cf\u5c11\u4e22\u6570\u6982\u7387\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf89 \u65b0\u589e\u5feb\u624b\u5c0f\u7a0b\u5e8f\u7684\u9002\u914d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf89 3.8.0 \u6b63\u5f0f\u7248\u3002")),(0,r.kt)("h3",{id:"v380-rc10---2022614"},"V3.8.0-rc.10 - 2022/6/14"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u5206\u4eab\u5e26\u53c2\u6570\u7684\u9875\u9762\u65f6\uff0c\u9875\u9762\u53c2\u6570\u4e22\u5931\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf89 \u65b0\u589e",(0,r.kt)("inlineCode",{parentName:"li"},"uploadInterval"),"\u521d\u59cb\u5316\u914d\u7f6e\u9879\uff0c\u5141\u8bb8\u81ea\u884c\u8bbe\u7f6e\u6570\u636e\u4e0a\u62a5\u7684\u5ef6\u65f6\u95f4\u9694\u3002")),(0,r.kt)("h3",{id:"v380-rc9---2022529"},"V3.8.0-rc.9 - 2022/5/29"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d taro2 page \u4e8b\u4ef6\u4e22\u5931\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d visit \u4e8b\u4ef6\u4e22\u5931\u8fdb\u5165\u5c0f\u7a0b\u5e8f\u65f6\u7684 utm \u53c2\u6570\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d",(0,r.kt)("inlineCode",{parentName:"li"},"setUserAttributes"),"\u5728 AppOnShow \u4e2d\u5f02\u6b65\u8c03\u7528\u65f6 path \u548c query \u53ef\u80fd\u53d6\u503c\u9519\u8bef\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf89 \u65b0\u589e\u6570\u636e\u91c7\u96c6\u8865\u5145\u6807\u8bb0\uff0c\u5141\u8bb8\u81ea\u5b9a\u4e49\u8bbe\u7f6e SDK \u4e0a\u62a5\u65f6\u7684\u9875\u9762 title\u3002")),(0,r.kt)("h3",{id:"v380-rc8---2022524"},"V3.8.0-rc.8 - 2022/5/24"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f\u5f02\u6b65\u8fd4\u56de\u8fc7\u6162\u5bfc\u81f4\u4e8b\u4ef6\u88ab\u5361\u4f4f\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u5c0f\u90e8\u4ef6\u4e2d visit \u4e8b\u4ef6\u4e22\u5931\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u5f00\u542f comAsPage \u65f6\uff0cComponent \u9875\u9762\u4e2d page \u4e8b\u4ef6\u53ea\u89e6\u53d1\u4e00\u6b21\u7684\u95ee\u9898\u3002")),(0,r.kt)("h3",{id:"v380-rc7---2022516"},"V3.8.0-rc.7 - 2022/5/16"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d",(0,r.kt)("inlineCode",{parentName:"li"},"setUserId"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"setUserAttributes"),"\u5f02\u6b65\u8c03\u7528\u4e14\u5148\u4e8e",(0,r.kt)("inlineCode",{parentName:"li"},"identify"),"\u8c03\u7528\u65f6\uff0c\u53ef\u80fd\u51fa\u73b0 deviceId \u53d6\u503c\u9519\u8bef\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u96c6\u6210\u591a\u6846\u67b6\u96c6\u6210\u63d2\u4ef6\u4e14\u9996\u6b21\u8fdb\u5165\u5c0f\u7a0b\u5e8f\u4e3a\u5206\u5305\u9875\u9762\u65f6\uff0c\u53ef\u80fd\u51fa\u73b0 deviceId \u53d6\u503c\u9519\u8bef\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf89 \u65b0\u589e\u83b7\u53d6 deviceId(\u533f\u540d\u7528\u6237 Id)\u7684\u63a5\u53e3\u3002")),(0,r.kt)("h3",{id:"v380-rc6---202256"},"V3.8.0-rc.6 - 2022/5/6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d taro3 vue3 \u4e2d\u90e8\u5206\u65e0\u57cb\u70b9\u4e8b\u4ef6 xpath \u53d6\u503c\u9519\u8bef\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u8865\u53d1 visit \u65f6\u4e22\u5931 path \u5b57\u6bb5\u7684\u95ee\u9898\u3002")),(0,r.kt)("h3",{id:"v380-rc5---2022429"},"V3.8.0-rc.5 - 2022/4/29"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u4e0a\u62a5\u5b57\u6bb5\u5728\u5e73\u53f0\u4e2d\u65e0\u6cd5\u533a\u5206 os \u7684\u95ee\u9898(deviceType->operatingSystem)"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf1f \u79fb\u9664 getLocation \u76f8\u5173\u903b\u8f91\uff0c\u540c\u65f6\u5e9f\u5f03 getLocation \u7684\u521d\u59cb\u5316\u914d\u7f6e\u9879\u548c api \u8c03\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf89 \u65b0\u589e setLocation api\uff0c\u4ee5\u66ff\u4ee3 getLocation \u7684\u529f\u80fd\u3002")),(0,r.kt)("h3",{id:"v380-rc4---2022425"},"V3.8.0-rc.4 - 2022/4/25"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u767e\u5ea6\u3001\u5b57\u8282\u3001QQ \u5c0f\u7a0b\u5e8f\u4e0a\u62a5\u9875\u9762 title \u65e0\u53d6\u503c\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d uni-app vue3 \u4e2d\u76d1\u542c",(0,r.kt)("inlineCode",{parentName:"li"},'@click="$emit(xxx)"'),"\u5f62\u5f0f\u7684\u65b9\u6cd5\u8c03\u7528\u4e0d\u4f1a\u89e6\u53d1\u65e0\u57cb\u70b9\u70b9\u51fb\u4e8b\u4ef6\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u5fae\u4fe1\u5c0f\u7a0b\u5e8f getGioInfo \u83b7\u53d6\u5230\u7684 platform \u9519\u8bef\u5bfc\u81f4 H5 \u6253\u901a\u5931\u8d25\u7684\u95ee\u9898\u3002")),(0,r.kt)("h3",{id:"v380-rc3---2022420"},"V3.8.0-rc.3 - 2022/4/20"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u963f\u91cc(\u652f\u4ed8\u5b9d)\u5c0f\u7a0b\u5e8f/\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f",(0,r.kt)("inlineCode",{parentName:"li"},"platform"),"\u5b57\u6bb5\u53d6\u503c\u9519\u8bef\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d uni-app vue3 \u548c taro3 vue3 \u4e2d setup \u5b9a\u4e49\u7684\u65b9\u6cd5\u4e0d\u4f1a\u89e6\u53d1\u65e0\u57cb\u70b9\u70b9\u51fb\u4e8b\u4ef6\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u5feb\u5e94\u7528\u96c6\u6210\u65f6\u62a5\u9519\u7684\u95ee\u9898\u3002")),(0,r.kt)("h3",{id:"v380-rc2---2022414"},"V3.8.0-rc.2 - 2022/4/14"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u90e8\u5206\u5916\u7f6e\u63d2\u4ef6\u7684\u751f\u547d\u5468\u671f\u4e0d\u80fd\u6b63\u5e38\u6267\u884c\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d",(0,r.kt)("inlineCode",{parentName:"li"},"setUserId"),"\u65b9\u6cd5\u4e2d",(0,r.kt)("inlineCode",{parentName:"li"},"userKey"),"\u7684\u8bbe\u503c\u903b\u8f91\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d\u9996\u6b21\u8fdb\u5165\u7684\u9875\u9762 referralPage \u5b57\u6bb5\u53d6\u503c\u9519\u8bef\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u6dd8\u5b9d\u5c0f\u7a0b\u5e8f\u4e2d\u5c0f\u90e8\u4ef6\u67d0\u4e9b\u60c5\u51b5\u4e0b\u52a0\u8f7d\u62a5\u9519\u548c\u4e0a\u62a5\u6570\u636e\u5931\u6548\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u5f00\u542f",(0,r.kt)("inlineCode",{parentName:"li"},"subpackage"),"\u914d\u7f6e\u9879\u7684\u5c0f\u7a0b\u5e8f\u72ec\u7acb\u4f7f\u7528\u65f6\u62a5\u9519\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1e \u4fee\u590d\u591a\u6846\u67b6\u96c6\u6210\u63d2\u4ef6\u4e2d\u591a\u4e2a\u5206\u5305\u65f6\u5b9e\u4f8b\u53d6\u503c\u9519\u8bef\u7684\u95ee\u9898\u3002")),(0,r.kt)("h3",{id:"v380-rc1---2022330"},"V3.8.0-rc.1 - 2022/3/30"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf89 \u53d1\u5e03 3.8.0 \u7b2c\u4e00\u4e2a rc \u7248\u672c\u3002")))}k.isMDXComponent=!0}}]);