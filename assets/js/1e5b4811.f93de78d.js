"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[5330],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=i,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7294),i=r(6010),o=r(3438),a=r(9960),l=r(3919),c=r(5999);const s="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",s)},r)}function d(e){let{href:t,icon:r,title:o,description:a}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:o},r," ",o),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",p),title:a},a))}function f(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:null==i?void 0:i.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(k,e);const a=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}},851:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(7462),i=(r(7294),r(3905)),o=r(2991),a=r(3438);const l={slug:"/webjs",title:"Web JS SDK"},c=void 0,s={unversionedId:"webjs/index",id:"webjs/index",title:"Web JS SDK",description:"3.3",source:"@site/docs/webjs/index.md",sourceDirName:"webjs",slug:"/webjs",permalink:"/growingio-sdk-docs-v3/docs/webjs",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-v3/edit/master/docs/webjs/index.md",tags:[],version:"current",frontMatter:{slug:"/webjs",title:"Web JS SDK"},sidebar:"gioSidebar",previous:{title:"\u6027\u80fd\u76d1\u63a7",permalink:"/growingio-sdk-docs-v3/docs/miniprogram/3.8/plugins/performance"},next:{title:"Web JS SDK\uff083.3\uff09",permalink:"/growingio-sdk-docs-v3/docs/webjs/3.3"}},u={},p=[{value:"3.3",id:"33",level:2},{value:"3.8",id:"38",level:2}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"33"},"3.3"),(0,i.kt)("p",null,"\u5177\u5907\u4ee5\u4e0b\u7279\u6027\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u57cb\u70b9\u80fd\u529b\uff0c\u5f00\u53d1\u540c\u5b66\u8c03\u7528API\u4e3b\u52a8\u91c7\u96c6\u57cb\u70b9\u4e8b\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u65e0\u57cb\u70b9\u80fd\u529b\uff0c\u81ea\u52a8\u91c7\u96c6\u7528\u6237\u884c\u4e3a\u4e8b\u4ef6\uff0c\u53ef\u901a\u8fc7\u5f00\u5173\u63a7\u5236"),(0,i.kt)("li",{parentName:"ul"},"\u5c0f\u7a0b\u5e8f\u6253\u901a\uff0c\u65b9\u4fbf\u4e8e\u5c0f\u7a0b\u5e8f\u6253\u901a\u8bbf\u95ee\u7528\u6237"),(0,i.kt)("li",{parentName:"ul"},"\u539f\u751f\u6253\u901a\uff0c\u65b9\u4fbf\u4e8e\u539f\u751fApp\u6253\u901a\u8bbf\u95ee\u7528\u6237"),(0,i.kt)("li",{parentName:"ul"},"Web\u53ef\u89c6\u5316\u5708\u9009\u652f\u6301"),(0,i.kt)("li",{parentName:"ul"},"Hybrid\u53ef\u89c6\u5316\u5708\u9009\u652f\u6301")),(0,i.kt)("h2",{id:"38"},"3.8"),(0,i.kt)("p",null,"\u5177\u5907\u4ee5\u4e0b\u7279\u6027\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u57cb\u70b9\u80fd\u529b\uff0c\u5f00\u53d1\u540c\u5b66\u53ef\u8c03\u7528API\u4e3b\u52a8\u91c7\u96c6\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u65e0\u57cb\u70b9\u80fd\u529b\uff0c\u81ea\u52a8\u91c7\u96c6\u7528\u6237\u884c\u4e3a\u4e8b\u4ef6\uff0c\u53ef\u901a\u8fc7\u5f00\u5173\u548c\u63d2\u4ef6\u63a7\u5236\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5c0f\u7a0b\u5e8f\u6253\u901a\uff0c\u65b9\u4fbf\u4e8e\u5c0f\u7a0b\u5e8f\u6253\u901a\u8bbf\u95ee\u7528\u6237\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u539f\u751f\u6253\u901a\uff0c\u65b9\u4fbf\u4e8e\u539f\u751fApp\u6253\u901a\u8bbf\u95ee\u7528\u6237\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u80fd\u529b\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4f9d\u636e\u4f7f\u7528\u573a\u666f\u81ea\u7531\u642d\u914dSDK\u63d2\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301CDN\u548cnpm\u96c6\u6210\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u5b9a\u4e49\u63d2\u4ef6\u5f00\u53d1\u3002\uff08\u5b9e\u9a8c\u6027\u529f\u80fd\uff0c\u6682\u672a\u5f00\u653e\uff09")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{color:"#FC5F3A"},"\u6ce8\u610f\uff1a")),(0,i.kt)("br",null)),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"WebJS SDK 3.8 \u5df2\u7ecf\u53d1\u5e03\u6b63\u5f0f\u7248\u672c\uff0c\u5df2\u7ecf\u5728\u591a\u5bb6\u5ba2\u6237\u73af\u5883\u5f97\u5230\u9a8c\u8bc1\u5e76\u7a33\u5b9a\u8fd0\u884c\uff0c\u53ef\u653e\u5fc3\u4f7f\u7528\u3002\u5982\u679c\u60a8\u6709\u5347\u7ea7\u7684\u6761\u4ef6\u8bf7\u5c3d\u5feb\u5347\u7ea7\u81f33.8\u3002"),(0,i.kt)("p",{parentName:"admonition"},"WebJS SDK 3.3 \u76ee\u524d\u4ecd\u7136\u53ef\u4ee5\u4f7f\u7528\uff0c\u4f46\u8fd8\u662f\u5efa\u8bae\u4f7f\u75283.8\u7248\u672c\uff0c\u529f\u80fd\u66f4\u4e30\u5bcc\uff0c\u573a\u666f\u66f4\u5b8c\u5584\u3002")),(0,i.kt)(o.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);