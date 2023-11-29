"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[6906],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(r),p=i,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7294),i=r(6010),o=r(3438),c=r(9960),a=r(3919),l=r(5999);const s="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return n.createElement(c.Z,{href:t,className:(0,i.Z)("card padding--lg",s)},r)}function p(e){let{href:t,icon:r,title:o,description:c}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:o},r," ",o),c&&n.createElement("p",{className:(0,i.Z)("text--truncate",m),title:c},c))}function f(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:null==i?void 0:i.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(b,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(w,{items:r.items,className:t})}function w(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const c=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},5046:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var n=r(7462),i=(r(7294),r(3905)),o=r(2991),c=r(3438);const a={slug:"/webjs/3.3",title:"Web JS SDK\uff083.3\uff09"},l=void 0,s={unversionedId:"webjs/3.3/index",id:"webjs/3.3/index",title:"Web JS SDK\uff083.3\uff09",description:"Web JS SDK3.0 \u5c06H5\u5185\u5d4c\u9875\uff0cHybrid SDK\uff0cWeb JS SDK\u96c6\u6210\u4e0e\u4e00\u4f53\uff0c\u5177\u5907\u4ee5\u4e0b\u7279\u6027\uff1a",source:"@site/docs/webjs/3.3/index.md",sourceDirName:"webjs/3.3",slug:"/webjs/3.3",permalink:"/growingio-sdk-docs-v3/docs/webjs/3.3",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-v3/edit/master/docs/webjs/3.3/index.md",tags:[],version:"current",frontMatter:{slug:"/webjs/3.3",title:"Web JS SDK\uff083.3\uff09"},sidebar:"gioSidebar",previous:{title:"Web JS SDK",permalink:"/growingio-sdk-docs-v3/docs/webjs"},next:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs-v3/docs/webjs/3.3/version"}},u={},m=[],d={toc:m};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Web JS SDK3.0 \u5c06H5\u5185\u5d4c\u9875\uff0cHybrid SDK\uff0cWeb JS SDK\u96c6\u6210\u4e0e\u4e00\u4f53\uff0c\u5177\u5907\u4ee5\u4e0b\u7279\u6027\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u57cb\u70b9\u80fd\u529b\uff0c\u5f00\u53d1\u540c\u5b66\u8c03\u7528API\u4e3b\u52a8\u91c7\u96c6\u57cb\u70b9\u4e8b\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u65e0\u57cb\u70b9\u80fd\u529b\uff0c\u81ea\u52a8\u91c7\u96c6\u7528\u6237\u884c\u4e3a\u4e8b\u4ef6\uff0c\u53ef\u901a\u8fc7\u5f00\u5173\u63a7\u5236"),(0,i.kt)("li",{parentName:"ul"},"\u5c0f\u7a0b\u5e8f\u6253\u901a\uff0c\u65b9\u4fbf\u4e8e\u5c0f\u7a0b\u5e8f\u6253\u901a\u8bbf\u95ee\u7528\u6237"),(0,i.kt)("li",{parentName:"ul"},"\u539f\u751f\u6253\u901a\uff0c\u65b9\u4fbf\u4e8e\u539f\u751fApp\u6253\u901a\u8bbf\u95ee\u7528\u6237"),(0,i.kt)("li",{parentName:"ul"},"Web\u53ef\u89c6\u5316\u5708\u9009\u652f\u6301"),(0,i.kt)("li",{parentName:"ul"},"Hybrid\u53ef\u89c6\u5316\u5708\u9009\u652f\u6301")),(0,i.kt)(o.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);