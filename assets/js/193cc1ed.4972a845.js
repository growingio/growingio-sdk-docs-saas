"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[6092],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,c=s["".concat(p,".").concat(u)]||s[u]||k[u]||l;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:3,title:"\u521d\u59cb\u5316\u914d\u7f6e"},i=void 0,o={unversionedId:"webjs/3.8/initSettings",id:"webjs/3.8/initSettings",title:"\u521d\u59cb\u5316\u914d\u7f6e",description:"\u914d\u7f6e\u4e00\u89c8\u8868",source:"@site/docs/webjs/3.8/initSettings.md",sourceDirName:"webjs/3.8",slug:"/webjs/3.8/initSettings",permalink:"/growingio-sdk-docs-v3/docs/webjs/3.8/initSettings",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-v3/edit/master/docs/webjs/3.8/initSettings.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u521d\u59cb\u5316\u914d\u7f6e"},sidebar:"gioSidebar",previous:{title:"\u96c6\u6210",permalink:"/growingio-sdk-docs-v3/docs/webjs/3.8/integrate"},next:{title:"\u6570\u636e\u91c7\u96c6API",permalink:"/growingio-sdk-docs-v3/docs/webjs/3.8/commonlyApi"}},p={},d=[{value:"\u914d\u7f6e\u4e00\u89c8\u8868",id:"\u914d\u7f6e\u4e00\u89c8\u8868",level:2},{value:"\u914d\u7f6e\u9879\u8be6\u89e3",id:"\u914d\u7f6e\u9879\u8be6\u89e3",level:2},{value:"autotrack",id:"autotrack",level:3},{value:"cookieDomain",id:"cookiedomain",level:3},{value:"compress",id:"compress",level:3},{value:"dataCollect",id:"datacollect",level:3},{value:"debug",id:"debug",level:3},{value:"enableIdMapping",id:"enableidmapping",level:3},{value:"hashtag",id:"hashtag",level:3},{value:"ignoreFields",id:"ignorefields",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"requestTimeout",id:"requesttimeout",level:3},{value:"sendType",id:"sendtype",level:3},{value:"scheme",id:"scheme",level:3}],m={toc:d};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u914d\u7f6e\u4e00\u89c8\u8868"},"\u914d\u7f6e\u4e00\u89c8\u8868"),(0,r.kt)("p",null,"\u4e0b\u8868\u4e2d\u5217\u51fa\u4e86\u6240\u6709WebJS SDK\u7684\u914d\u7f6e\u9879\uff0c\u8bf7\u6309\u9700\u8bbe\u7f6e\u3002\u5982\u60a8\u4e0d\u786e\u5b9a\u662f\u5426\u9700\u8981\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u5b57\u6bb5\u540d")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u53c2\u6570\u7c7b\u578b")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u9ed8\u8ba4\u503c")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"autotrack")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u65e0\u57cb\u70b9\u91c7\u96c6\uff0c\u96c6\u6210\u65e0\u57cb\u70b9\u63d2\u4ef6\u540e\u9ed8\u8ba4\u5f00\u542f\u65e0\u57cb\u70b9\u91c7\u96c6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cookieDomain")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\u5f53\u524d\u7ad9\u70b9\u7684\u4e00\u7ea7\u57df\u540d")),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49cookie\u5b58\u50a8\u7684\u57df")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"compress")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u6570\u636e\u52a0\u5bc6\uff0c\u96c6\u6210\u52a0\u5bc6\u63d2\u4ef6\u540e\u9ed8\u8ba4\u5f00\u542f\u52a0\u5bc6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dataCollect")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u6570\u636e\u91c7\u96c6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"debug")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u8c03\u8bd5\u6a21\u5f0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"enableIdMapping")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hashtag")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542fhash\u89e3\u6790")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"host")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u4e0a\u62a5\u7684\u670d\u52a1\u7aef\u5730\u5740(\u65e0\u9700\u643a\u5e26\u534f\u8bae\u5934)",(0,r.kt)("strong",{parentName:"td"},"(\u5fc5\u586b)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ignoreFields")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0a\u62a5\u5ffd\u7565\u5b57\u6bb5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"requestTimeout")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5000")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0a\u62a5\u964d\u7ea7\u81f3xhr\u548c\u56fe\u7247\u65f6\uff0c\u8bf7\u6c42\u7684\u8d85\u65f6\u65f6\u957f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sendType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"beacon")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u4e0a\u62a5\u4f18\u5148\u65b9\u5f0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scheme")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"location.protocol")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f51\u7edc\u534f\u8bae")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"storageType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cookie")),(0,r.kt)("td",{parentName:"tr",align:null},"SDK\u4fe1\u606f\u7684\u6301\u4e45\u5316\u5b58\u50a8\u7684\u7c7b\u578b(\u4ec5\u652f\u6301cookie\u6216localStorage)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"version")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-")),(0,r.kt)("td",{parentName:"tr",align:null},"Web\u5e94\u7528\u53d1\u7248\u7248\u672c\u53f7(\u5efa\u8bae\u586b\u5199)")))),(0,r.kt)("h2",{id:"\u914d\u7f6e\u9879\u8be6\u89e3"},"\u914d\u7f6e\u9879\u8be6\u89e3"),(0,r.kt)("h3",{id:"autotrack"},"autotrack"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u65e0\u57cb\u70b9\u5f00\u5173\u9ed8\u8ba4\u5f00\u542f\u3002\u5f53\u5728 SDK \u4e2d\u52a0\u8f7d\u4e86\u65e0\u57cb\u70b9\u63d2\u4ef6\u65f6\u4f1a\u81ea\u52a8\u542f\u7528\u65e0\u57cb\u70b9\u91c7\u96c6\u529f\u80fd\u3002\u5982\u679c\u60a8\u4e0d\u9700\u8981\u65e0\u57cb\u70b9\u91c7\u96c6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u8fdb\u884c\u5173\u95ed\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u65b9\u5f0f\u4e00\uff1a"),"\u5168\u91cf\u96c6\u6210\u65f6 \u6216 \u6309\u9700\u96c6\u6210\u5df2\u6ce8\u518c\u63d2\u4ef6\uff0c\u521d\u59cb\u5316\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"autotrack: false")," \u8fdb\u884c\u5173\u95ed\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"gdp('init', accountId, datasourceId, { autotrack: false });\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u65b9\u5f0f\u4e8c\uff1a"),"\u6309\u9700\u96c6\u6210\u65f6\u79fb\u9664\u65e0\u57cb\u70b9\u63d2\u4ef6\u5373\u53ef\u3002"),(0,r.kt)("p",null,"\u5173\u95ed\u65e0\u57cb\u70b9\u540e ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"VIEW_CLICK")," , ",(0,r.kt)("inlineCode",{parentName:"strong"},"VIEW_CHANGE")," , ",(0,r.kt)("inlineCode",{parentName:"strong"},"FORM_SUBMIT"))," \u4e8b\u4ef6\u5c06\u4e0d\u4f1a\u518d\u88ab\u91c7\u96c6\u548c\u4e0a\u62a5\u3002"),(0,r.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528\u52a8\u6001\u4fee\u6539\u914d\u7f6e\u63a5\u53e3\u6765\u4fee\u6539\u5b83\u3002",(0,r.kt)("a",{parentName:"p",href:"/docs/webjs/3.8/commonlyApi#1%E5%BC%80%E5%90%AF%E5%85%B3%E9%97%AD%E6%97%A0%E5%9F%8B%E7%82%B9%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86autotrack"},"\u53c2\u8003\u6587\u6863")),(0,r.kt)("h3",{id:"cookiedomain"},"cookieDomain"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSDK\u7684\u7528\u6237\u4fe1\u606f\uff08deviceId\u3001userId\u3001sessionId\u7b49\uff09\u90fd\u662f\u5b58\u50a8\u5728\u60a8\u7ad9\u70b9\u7684\u4e3b\u57df\u540d\u4e0b\uff0c\u5b50\u57df\u540d\u90fd\u96c6\u6210SDK\u65f6\u4f1a\u5171\u4eab\u7528\u6237\u4fe1\u606f\u3002\u4f46\u5982\u679c\u60a8\u9700\u8981\u8fdb\u884c\u533a\u5206\uff0c\u914d\u7f6e\u6b64\u9879\u5e76\u6307\u5b9a\u4e3a\u5f53\u524d\u7684\u5b50\u57df\u540d\u5373\u53ef\u533a\u5206\u7528\u6237\u4fe1\u606f\u8fdb\u884c\u6570\u636e\u9694\u79bb\u3002"),(0,r.kt)("p",null,"\u4f8b\uff1a\u60a8\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"a.growingio.com"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"b.growingio.com"),"\u4e24\u4e2a\u6216\u591a\u4e2a\u5b50\u57df\u540d\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\u90fd\u96c6\u6210SDK\u8bbf\u95ee\u65f6\u4f1a\u5171\u4eab\u7528\u6237\u4fe1\u606f\uff0c\u5373\u89c6\u4e3a\u540c\u4e00\u4e2a\u7528\u6237\u3002\u5982\u679c\u60a8\u5e0c\u671b\u8fdb\u884c\u533a\u5206\u548c\u6570\u636e\u9694\u79bb\uff0c\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"cookieDomain"),"\u4e3a\u5404\u81ea\u7684\u5b8c\u6574\u5b50\u57df\u540d\u5373\u53ef\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("font",{color:"#FC5F3A"},"\u6ce8\u610f\uff1a"),"SDK\u7248\u672c>=3.8.0-rc.9\u652f\u6301\u3002")),(0,r.kt)("h3",{id:"compress"},"compress"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u52a0\u5bc6\u5f00\u5173\u9ed8\u8ba4\u5f00\u542f\u3002\u5f53\u5728 SDK \u4e2d\u52a0\u8f7d\u4e86\u52a0\u5bc6\u63d2\u4ef6\u65f6\u81ea\u52a8\u542f\u7528\u6570\u636e\u52a0\u5bc6\u529f\u80fd\u3002\u5982\u679c\u60a8\u4e0d\u9700\u8981\u6570\u636e\u52a0\u5bc6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u8fdb\u884c\u5173\u95ed\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u65b9\u5f0f\u4e00\uff1a"),"\u5168\u91cf\u96c6\u6210\u65f6 \u6216 \u6309\u9700\u96c6\u6210\u5df2\u6ce8\u518c\u63d2\u4ef6\uff0c\u521d\u59cb\u5316\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"compress: false")," \u8fdb\u884c\u5173\u95ed\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"gdp('init', accountId, datasourceId, { compress: false });\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u65b9\u5f0f\u4e8c\uff1a"),"\u6309\u9700\u96c6\u6210\u65f6\u79fb\u9664\u52a0\u5bc6\u63d2\u4ef6\u5373\u53ef\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("font",{color:"#FC5F3A"},"\u6ce8\u610f\uff1a"),"\u5f00\u542f\u52a0\u5bc6\u540e\u6293\u5305\u5de5\u5177\u65e0\u6cd5\u6293\u53d6\u4e0a\u62a5\u7684\u660e\u6587\u6570\u636e\uff0c\u4f46debug\u6a21\u5f0f\u5f00\u542f\u65f6\u5f00\u53d1\u8005\u5de5\u5177\u4e2d\u4ecd\u80fd\u770b\u5230\u672a\u52a0\u5bc6\u7684\u4e0a\u62a5\u6570\u636e\u3002")),(0,r.kt)("h3",{id:"datacollect"},"dataCollect"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6570\u636e\u91c7\u96c6\u5f00\u5173\u9ed8\u8ba4\u5f00\u542f\u3002\u5982\u679c\u60a8\u9700\u8981\u521d\u59cb\u5316\u65f6\u6682\u65f6\u5173\u95ed\u6570\u636e\u91c7\u96c6\uff08\u4f8b\u5982\u9690\u79c1\u534f\u8bae\u7684\u573a\u666f\uff09\uff0c\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"dataCollect: false")," \u5173\u95ed\u3002\n\u9700\u8981\u5f00\u542f\u6570\u636e\u91c7\u96c6\u65f6\u518d\u901a\u8fc7\u8c03\u7528\u52a8\u6001\u4fee\u6539\u914d\u7f6e\u63a5\u53e3\u6765\u4fee\u6539\u5b83\u3002",(0,r.kt)("a",{parentName:"p",href:"/docs/webjs/3.8/commonlyApi#2%E5%BC%80%E5%90%AF%E5%85%B3%E9%97%AD%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86datacollect"},"\u53c2\u8003\u6587\u6863")),(0,r.kt)("p",null,"\u521d\u59cb\u5316\u5173\u95ed\u6570\u636e\u91c7\u96c6\u540e\uff0c\u81f3\u60a8\u6253\u5f00\u6570\u636e\u91c7\u96c6\u4e4b\u524d\u90fd\u4e0d\u4f1a\u91c7\u96c6\u6570\u636e\u548c\u4e0a\u62a5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"gdp('init', accountId, datasourceId, { dataCollect: false });\n")),(0,r.kt)("h3",{id:"debug"},"debug"),(0,r.kt)("p",null,"\u5728\u5f00\u53d1\u65f6\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"debug: true"),"\uff0c\u6253\u5f00\u5f00\u53d1\u8005\u5de5\u5177\u63a7\u5236\u53f0\uff0c\u5373\u53ef\u770b\u5230\u5b9e\u65f6\u91c7\u96c6\u7684\u6570\u636e\u3002\u6ce8\u610f\u6b63\u5f0f\u4e0a\u7ebf\u65f6\u5173\u95ed\u5b83\uff0c\u5c24\u5176\u662f\u5f00\u542f\u4e86\u6570\u636e\u52a0\u5bc6\u65f6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"gdp('init', accountId, datasourceId, { debug: true });\n")),(0,r.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528\u52a8\u6001\u4fee\u6539\u914d\u7f6e\u63a5\u53e3\u6765\u4fee\u6539\u5b83\u3002",(0,r.kt)("a",{parentName:"p",href:"/docs/webjs/3.8/commonlyApi#3%E5%BC%80%E5%90%AF%E5%85%B3%E9%97%AD%E8%B0%83%E8%AF%95%E6%A8%A1%E5%BC%8Fdebug"},"\u53c2\u8003\u6587\u6863")),(0,r.kt)("h3",{id:"enableidmapping"},"enableIdMapping"),(0,r.kt)("p",null,"\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5\uff0c\u662f\u5426\u5f00\u542f\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5\uff0c\u9ed8\u8ba4\u4e0d\u5f00\u542f\u3002\u5f00\u542f\u540e\uff0c\u8c03\u7528\u8bbe\u7f6e\u767b\u5f55\u7528\u6237ID\u63a5\u53e3\u65f6\uff0c\u8bbe\u7f6e userKey\uff0c\u670d\u52a1\u7aef\u8c03\u7528\u7528\u6237\u8eab\u4efd\u878d\u5408API\u65f6\uff0c\u53ef\u5c06\u4e0d\u540c\u7684\u767b\u5f55\u7528\u6237ID\u8bc6\u522b\u4e3a\u540c\u4e00\u7528\u6237\u3002\u5f00\u542f\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5\u540e\uff0c\u9700\u8981\u5728\u8bbe\u7f6e\u767b\u5f55\u7528\u6237ID\u65f6\u8bbe\u7f6euserKey\u3002",(0,r.kt)("a",{parentName:"p",href:"/docs/webjs/3.8/commonlyApi#2%E8%AE%BE%E7%BD%AE%E7%99%BB%E5%BD%95%E7%94%A8%E6%88%B7idsetuserid"},"\u53c2\u8003\u6587\u6863")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"gdp('init', accountId, datasourceId, { enableIdMapping: true });\n")),(0,r.kt)("h3",{id:"hashtag"},"hashtag"),(0,r.kt)("p",null,"GrowingIO \u9ed8\u8ba4\u4e0d\u4f1a\u628ahash\u8bc6\u522b\u6210\u9875\u9762URL\u7684\u4e00\u90e8\u5206\u3002\u5bf9\u4e8e\u4f7f\u7528hash\u8fdb\u884c\u9875\u9762\u8f6c\u8df3\u7684\u5355\u9875\u9762\u7f51\u7ad9\u5e94\u7528\u6765\u8bf4\uff0c\u53ef\u4ee5\u542f\u7528hashtag\u4f5c\u4e3a\u6807\u8bc6\u9875\u9762\u7684\u4e00\u90e8\u5206\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"gdp('init', accountId, datasourceId, { hashtag: true });\n")),(0,r.kt)("h3",{id:"ignorefields"},"ignoreFields"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSDK\u4f1a\u4e0a\u62a5\u8bbe\u5907\u7684\u76f8\u5173\u4fe1\u606f\u3002\u5982\u679c\u60a8\u4e0d\u9700\u8981\u8fd9\u4e9b\u6570\u636e\uff0c\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"ignoreFields: [xxx,xxx]")," \u6765\u5ffd\u7565\u6307\u5b9a\u5b57\u6bb5\u7684\u4e0a\u62a5\u3002\n\u60a8\u53ef\u4ee5\u6307\u5b9a\u4e00\u9879\u6216\u591a\u9879\u5b57\u6bb5\uff0c\u4f46\u5747\u9700\u4e3a\u6570\u7ec4\u683c\u5f0f\u8fdb\u884c\u8bbe\u7f6e\u3002\u652f\u6301\u5b57\u6bb5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"screenHeight      \u5c4f\u5e55\u9ad8\u5ea6\nscreenWidth       \u5c4f\u5e55\u5bbd\u5ea6\n")),(0,r.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"gdp('init', '91eaf9b283361032', 'ae45f95742195faa', 'wx123456', {\n  version: '1.0.1',\n  debug: true,\n  ignoreFields: [\n    'screenHeight',\n    'screenWidth'\n  ],\n});\n")),(0,r.kt)("h3",{id:"requesttimeout"},"requestTimeout"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSDK\u7684\u4e0a\u62a5\u8bf7\u6c42\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"XHR"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"\u56fe\u7247"),"\u7684\u5f62\u5f0f\u4e0b\u8d85\u65f6\u65f6\u957f\u4e3a 5000\u6beb\u79d2\uff08\u53735\u79d2\uff09\uff0c\u8d85\u65f6\u5373\u81ea\u52a8\u5931\u8d25\u3002\u5f53\u60a8\u9700\u8981\u63a7\u5236\u964d\u7ea7\u81f3XHR\u548c\u56fe\u7247\u7684\u6570\u636e\u4e0a\u62a5\u53d1\u9001\u65b9\u5f0f\u8bf7\u6c42\u8d85\u65f6\u65f6\u957f\u65f6\u53ef\u4fee\u6539\uff0c\u4ee5\u907f\u514d\u4e00\u4e9b\u610f\u5916\u7684\u7f51\u7edc\u8bf7\u6c42\u963b\u585e\u7684\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u914d\u7f6e\u9879\u53d6\u503c\uff1a\u6574\u6570\u5927\u4e8e0\uff0c\u5355\u4f4d\u6beb\u79d2\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("font",{color:"#FC5F3A"},"\u6ce8\u610f\uff1a"),"\u8be5\u914d\u7f6e\u9879\u4ec5\u5728",(0,r.kt)("inlineCode",{parentName:"strong"},"XHR"),"\u548c",(0,r.kt)("inlineCode",{parentName:"strong"},"\u56fe\u7247"),"\u8bf7\u6c42\u65f6\u751f\u6548\uff0c",(0,r.kt)("inlineCode",{parentName:"strong"},"beacon"),"\u8bf7\u6c42\u65e0\u6cd5\u63a7\u5236\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"gdp('init', accountId, datasourceId, { requestTimeout: '3000' });\n")),(0,r.kt)("h3",{id:"sendtype"},"sendType"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSDK\u4e0a\u62a5\u6570\u636e\u7684\u8bf7\u6c42\u65b9\u5f0f\u4e3a\u81ea\u52a8\u5224\u65ad\uff0c\u4f18\u5148\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"sendBeacon"),"\u8fdb\u884c\u4e0a\u62a5\uff1b\u5f53sendBeacon\u65e0\u6cd5\u652f\u6301\u6216\u961f\u5217\u7e41\u5fd9\u65e0\u6cd5\u7ee7\u7eed\u4f7f\u7528\u65f6\uff0c\u4f1a\u81ea\u52a8\u964d\u7ea7\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),"\u5f02\u6b65\u8bf7\u6c42\uff1b\u5f53XMLHttpRequest\u9047\u5230\u95ee\u9898\u53d1\u9001\u5931\u8d25\u65f6\uff0c\u4f1a\u81ea\u52a8\u964d\u7ea7\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"\u56fe\u7247"),"\u8bf7\u6c42\u7ee7\u7eed\u4e0a\u62a5\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u7684\u7ad9\u70b9\u5bf9\u67d0\u4e9b\u8bf7\u6c42\u65b9\u5f0f\u6709\u7279\u6b8a\u9650\u5236\u6216\u66f4\u613f\u610f\u4f7f\u7528\u5176\u4e2d\u67d0\u79cd\u65b9\u5f0f\u65f6\uff0c\u53ef\u6307\u5b9a\u4f18\u5148\u4e0a\u62a5\u7684\u65b9\u5f0f\uff0c\u5931\u8d25\u65f6\u4f9d\u7136\u4f1a\u6309\u4e0a\u8ff0\u4f18\u5148\u7ea7\u81ea\u52a8\u964d\u7ea7\u3002"),(0,r.kt)("p",null,"\u914d\u7f6e\u9879\u53d6\u503c\uff1a",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"beacon"),"\u3001",(0,r.kt)("inlineCode",{parentName:"strong"},"xhr"),"\u3001",(0,r.kt)("inlineCode",{parentName:"strong"},"image")),"\uff0c\u9ed8\u8ba4\u503c",(0,r.kt)("inlineCode",{parentName:"p"},"beacon"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("font",{color:"#FC5F3A"},"\u6ce8\u610f\uff1a"),"\u5728\u60a8\u4fee\u6539\u9ed8\u8ba4\u7684\u4f18\u5148\u4e0a\u62a5\u65b9\u5f0f\u4e4b\u524d\uff0c\u8bf7\u5728\u7f51\u7edc\u4e0a\u67e5\u9605\u76f8\u5173\u8d44\u6599\u4ee5\u5145\u5206\u4e86\u89e33\u79cd\u53d1\u9001\u65b9\u5f0f\u7684\u533a\u522b\u53ca\u4f18\u7f3a\u70b9\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"gdp('init', accountId, datasourceId, { sendType: 'xhr' });\n")),(0,r.kt)("h3",{id:"scheme"},"scheme"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7f51\u7edc\u534f\u8bae\u4e3a\u81ea\u52a8\u83b7\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"location.protocol"),"\uff0c\u4f46\u8003\u8651\u5230\u5728\u5f00\u53d1\u7684\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u9700\u8981\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"http"),"\u7b49\u6307\u5b9a\u534f\u8bae\u7684\u6d4b\u8bd5\u670d\u52a1\uff0c\u56e0\u6b64\u6211\u4eec\u63d0\u4f9b\u4e86\u521d\u59cb\u5316\u4fee\u6539\u6570\u636e\u4e0a\u62a5\u7f51\u7edc\u534f\u8bae\u7684\u914d\u7f6e\u3002\u6ce8\u610f\u6b63\u5f0f\u4e0a\u7ebf\u65f6\u5173\u95ed\u5b83\u6216\u6307\u5b9a\u6b63\u786e\u7684\u534f\u8bae\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u56e0\u4e3a\u8de8\u57df\u7b49\u95ee\u9898\u5bfc\u81f4\u6570\u636e\u4e0a\u62a5\u5931\u8d25\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"gdp('init', accountId, datasourceId, { scheme: 'http' });\n")),(0,r.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528\u52a8\u6001\u4fee\u6539\u914d\u7f6e\u63a5\u53e3\u6765\u4fee\u6539\u5b83\u3002",(0,r.kt)("a",{parentName:"p",href:"/docs/webjs/3.8/commonlyApi#4%E4%BF%AE%E6%94%B9%E8%AF%B7%E6%B1%82%E5%8D%8F%E8%AE%AEscheme"},"\u53c2\u8003\u6587\u6863")))}k.isMDXComponent=!0}}]);