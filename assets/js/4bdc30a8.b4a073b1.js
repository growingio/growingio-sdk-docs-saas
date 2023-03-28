"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[7766],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),g=a,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(7294),a=r(6010),o=r(3438),i=r(9960),l=r(3919),s=r(5999);const c="cardContainer_fWXF",p="cardTitle_rnsV",u="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",c)},r)}function g(e){let{href:t,icon:r,title:o,description:i}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",p),title:o},r," ",o),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",u),title:i},i))}function d(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(g,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return n.createElement(g,{href:t.href,icon:r,title:t.label,description:null==a?void 0:a.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(k,{items:r.items,className:t})}function k(e){const{items:t,className:r}=e;if(!t)return n.createElement(f,e);const i=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}},9008:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),o=r(2991),i=r(3438);const l={slug:"/webjs/3.8",title:"Web JS SDK\uff083.8\uff09"},s=void 0,c={unversionedId:"webjs/3.8/index",id:"webjs/3.8/index",title:"Web JS SDK\uff083.8\uff09",description:"Tips\uff1a3.8\u6587\u6863\u4e2d\u51fa\u73b0\u7684\u201c\u65e7\u7248\u672c\u201d\u7279\u6307 3.8.0 \u4ee5\u4e0b\u7684\u65e7\u67b6\u6784\u7248\u672c\u3002",source:"@site/docs/webjs/3.8/index.md",sourceDirName:"webjs/3.8",slug:"/webjs/3.8",permalink:"/growingio-sdk-docs-saas/docs/webjs/3.8",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-saas/edit/master/docs/webjs/3.8/index.md",tags:[],version:"current",frontMatter:{slug:"/webjs/3.8",title:"Web JS SDK\uff083.8\uff09"},sidebar:"gioSidebar",previous:{title:"\u6570\u636e\u91c7\u96c6API",permalink:"/growingio-sdk-docs-saas/docs/webjs/3.3/api"},next:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs-saas/docs/webjs/3.8/version"}},p={},u=[{value:"\u4f7f\u7528\u524d\u987b\u77e5",id:"\u4f7f\u7528\u524d\u987b\u77e5",level:2},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",id:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",level:2}],m={toc:u};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Tips\uff1a3.8\u6587\u6863\u4e2d\u51fa\u73b0\u7684\u201c\u65e7\u7248\u672c\u201d\u7279\u6307 ",(0,a.kt)("inlineCode",{parentName:"em"},"3.8.0")," \u4ee5\u4e0b\u7684\u65e7\u67b6\u6784\u7248\u672c\u3002"))),(0,a.kt)("h2",{id:"\u4f7f\u7528\u524d\u987b\u77e5"},"\u4f7f\u7528\u524d\u987b\u77e5"),(0,a.kt)("p",null,"\u6211\u4eec\u4e8e2022\u5e7412\u670827\u65e5\u53d1\u5e03\u4e863.8.0\u6b63\u5f0f\u7248\uff0c\u8bf7\u4f7f\u75283.8.0-rc.1~rc.10\u7248\u672c\u7684\u7528\u6237\u5c3d\u5feb\u5347\u7ea7\u81f3\u6b63\u5f0f\u7248\u3002"),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"WebJS SDK3.8\u76ee\u524d\u5177\u5907\u4ee5\u4e0b\u7279\u6027\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57cb\u70b9\u80fd\u529b\uff0c\u5f00\u53d1\u540c\u5b66\u53ef\u8c03\u7528API\u4e3b\u52a8\u91c7\u96c6\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u65e0\u57cb\u70b9\u80fd\u529b\uff0c\u81ea\u52a8\u91c7\u96c6\u7528\u6237\u884c\u4e3a\u4e8b\u4ef6\uff0c\u53ef\u901a\u8fc7\u5f00\u5173\u548c\u63d2\u4ef6\u63a7\u5236\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u534a\u81ea\u52a8\u57cb\u70b9\u6d4f\u89c8\u80fd\u529b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4f9d\u636e\u4f7f\u7528\u573a\u666f\u81ea\u7531\u642d\u914dSDK\u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301CDN\u548cnpm\u96c6\u6210\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u5b9a\u4e49\u63d2\u4ef6\u5f00\u53d1\u3002\uff08\u5b9e\u9a8c\u6027\u529f\u80fd\uff0c\u6682\u672a\u5f00\u653e\uff09")),(0,a.kt)("h2",{id:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027"},"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src//archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png",alt:"IE",width:"24px",height:"24px"})),(0,a.kt)("br",null),"InternetExplorer"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png",alt:"Edge",width:"24px",height:"24px"})),(0,a.kt)("br",null),"Edge"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png",alt:"Firefox",width:"24px",height:"24px"})),(0,a.kt)("br",null),"Firefox"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png",alt:"Chrome",width:"24px",height:"24px"})),(0,a.kt)("br",null),"Chrome"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png",alt:"Safari",width:"24px",height:"24px"})),(0,a.kt)("br",null),"Safari"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png",alt:"Opera",width:"24px",height:"24px"})),(0,a.kt)("br",null),"Opera"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png",alt:"Electron",width:"24px",height:"24px"})),(0,a.kt)("br",null),"Electron"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"11"),(0,a.kt)("td",{parentName:"tr",align:null},">= 15"),(0,a.kt)("td",{parentName:"tr",align:null},">= 54"),(0,a.kt)("td",{parentName:"tr",align:null},">= 51"),(0,a.kt)("td",{parentName:"tr",align:null},">= 10"),(0,a.kt)("td",{parentName:"tr",align:null},">= 38"),(0,a.kt)("td",{parentName:"tr",align:null},">= 10")))),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(o.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);