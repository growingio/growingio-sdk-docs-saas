"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),o=n(6010),i=n(2389),l=n(7392),s=n(7094),p=n(2466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:g,className:v}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),f=(0,l.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==h&&!k.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:D}=(0,s.U)(),[w,I]=(0,a.useState)(h),N=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=g){const e=y[g];null!=e&&e!==w&&k.some((t=>t.value===e))&&I(e)}const S=e=>{const t=e.currentTarget,n=N.indexOf(t),r=k[n].value;r!==w&&(O(t),I(r),null!=g&&D(g,String(r)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},v)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:E,onClick:S},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,a.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},4964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));n(5488),n(5162);const o={sidebar_position:2,title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"},i=void 0,l={unversionedId:"miniprogram/3.3/integration/alipay",id:"miniprogram/3.3/integration/alipay",title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",description:"\u96c6\u6210\u51c6\u5907",source:"@site/docs/miniprogram/3.3/integration/alipay.md",sourceDirName:"miniprogram/3.3/integration",slug:"/miniprogram/3.3/integration/alipay",permalink:"/growingio-sdk-docs-v3/docs/miniprogram/3.3/integration/alipay",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-v3/edit/master/docs/miniprogram/3.3/integration/alipay.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"},sidebar:"gioSidebar",previous:{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",permalink:"/growingio-sdk-docs-v3/docs/miniprogram/3.3/integration/wx"},next:{title:"\u521d\u59cb\u5316\u914d\u7f6e",permalink:"/growingio-sdk-docs-v3/docs/miniprogram/3.3/initSettings"}},s={},p=[{value:"\u96c6\u6210\u51c6\u5907",id:"\u96c6\u6210\u51c6\u5907",level:3},{value:"\u83b7\u53d6SDK\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570\uff1aAccountID\u3001DataSourceID\u3001 AppId\u3001Host",id:"\u83b7\u53d6sdk\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570accountiddatasourceid-appidhost",level:4},{value:"\u521b\u5efa",id:"\u521b\u5efa",level:5},{value:"\u67e5\u770b",id:"\u67e5\u770b",level:5},{value:"\u96c6\u6210",id:"\u96c6\u6210",level:2},{value:"\u4e0b\u8f7dSDK",id:"\u4e0b\u8f7dsdk",level:3},{value:"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 <code>\u94fe\u63a5\u5b58\u50a8\u4e3a...</code> \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)",id:"\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\u9009\u62e9-\u94fe\u63a5\u5b58\u50a8\u4e3a-\u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d",level:5},{value:"\u5f15\u5165SDK\uff0c\u6dfb\u52a0\u521d\u59cb\u5316\u4ee3\u7801",id:"\u5f15\u5165sdk\u6dfb\u52a0\u521d\u59cb\u5316\u4ee3\u7801",level:3},{value:"\u6dfb\u52a0\u767d\u540d\u5355",id:"\u6dfb\u52a0\u767d\u540d\u5355",level:2},{value:"\u6570\u636e\u6821\u9a8c",id:"\u6570\u636e\u6821\u9a8c",level:2}],u=(c="ImageLoader",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u96c6\u6210\u51c6\u5907"},"\u96c6\u6210\u51c6\u5907"),(0,a.kt)("h4",{id:"\u83b7\u53d6sdk\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570accountiddatasourceid-appidhost"},"\u83b7\u53d6SDK\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570\uff1aAccountID\u3001DataSourceID\u3001 AppId\u3001Host"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"AccountID\uff1a\u9879\u76eeID\uff0c\u4ee3\u8868\u4e00\u4e2a\u9879\u76ee",(0,a.kt)("br",null),"\nDataSourceID\uff1a\u6570\u636e\u6e90ID\uff0c\u4ee3\u8868\u4e00\u4e2a\u6570\u636e\u6e90",(0,a.kt)("br",null),"\nAppId\uff1a\u5c0f\u7a0b\u5e8f\u5e94\u7528ID",(0,a.kt)("br",null),"\nHost\uff1a\u91c7\u96c6\u6570\u636e\u4e0a\u62a5\u7684\u670d\u52a1\u5668\u5730\u5740\uff0c\u975e\u5e73\u53f0\u5730\u5740",(0,a.kt)("br",null)),(0,a.kt)("p",{parentName:"admonition"},"Account ID\u3001DataSource ID\u3001AppId \u9700\u8981\u5728CDP\u589e\u957f\u5e73\u53f0\u4e0a\u65b0\u5efa\u6570\u636e\u6e90\uff0c\u6216\u4ece\u5df2\u521b\u5efa\u7684\u6570\u636e\u6e90\u4e2d\u83b7\u53d6, \u5982\u4e0d\u6e05\u695a\u6216\u65e0\u6743\u9650\u8bf7\u8054\u7cfb\u60a8\u7684\u4e13\u5c5e\u9879\u76ee\u7ecf\u7406\u6216\u6280\u672f\u652f\u6301")),(0,a.kt)("h5",{id:"\u521b\u5efa"},"\u521b\u5efa"),(0,a.kt)(u,{path:"img/common/createapplication",mdxType:"ImageLoader"}),(0,a.kt)("h5",{id:"\u67e5\u770b"},"\u67e5\u770b"),(0,a.kt)(u,{path:"img/miniprogram/dataSourceInfo",mdxType:"ImageLoader"}),(0,a.kt)("h2",{id:"\u96c6\u6210"},"\u96c6\u6210"),(0,a.kt)("p",null,"\u76ee\u524d\u6211\u4eec\u4ec5\u652f\u6301\u539f\u751f\u5f00\u53d1\u7684\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u3002\u5982\u60a8\u4f7f\u7528\u4e86\u5176\u4ed6\u5f00\u53d1\u65b9\u5f0f\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u3002"),(0,a.kt)("p",null,"\u96c6\u6210\u65b9\u5f0f\u53c2\u8003\u793a\u4f8b\u4ee3\u7801\uff0c\u6ce8\u610f\u4e0d\u8981\u968f\u610f\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801\u4f4d\u7f6e\u3002",(0,a.kt)("strong",{parentName:"p"},"SDK\u4e0d\u652f\u6301\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u4efb\u610f\u751f\u547d\u5468\u671f\u4e2d\u8fdb\u884c\u521d\u59cb\u5316\u3002")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u4f7f\u7528\u6709GrowingIO \u5c0f\u7a0b\u5e8f\u8fd0\u8425SDK\uff0c \u4e14\u96c6\u6210\u672c\u6587\u6863\u4e2d\u7684SDK\u7248\u672c >=3.3.2\uff0c\u8bf7\u5728\u521d\u59cb\u5316SDK\u65f6\uff0c\u589e\u52a0\u914d\u7f6e\u9879 ",(0,a.kt)("inlineCode",{parentName:"p"},"enableEventStore: true"))),(0,a.kt)("h3",{id:"\u4e0b\u8f7dsdk"},"\u4e0b\u8f7dSDK"),(0,a.kt)("a",{href:"https://assets.giocdn.com/sdk/cdp/3.0/gio-alip.js",download:"https://assets.giocdn.com/sdk/cdp/3.0/gio-alip.js"},"\u70b9\u51fb\u4e0b\u8f7dSDK"),"\uff0c\u5b58\u653e\u5728\u9879\u76ee\u4e2d\uff0c\u4e0b\u6587\u4e2d\u4ee5`utils/gio`\u76ee\u5f55\u4e3a\u4f8b\u3002",(0,a.kt)("h5",{id:"\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\u9009\u62e9-\u94fe\u63a5\u5b58\u50a8\u4e3a-\u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"h5"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"),(0,a.kt)("h3",{id:"\u5f15\u5165sdk\u6dfb\u52a0\u521d\u59cb\u5316\u4ee3\u7801"},"\u5f15\u5165SDK\uff0c\u6dfb\u52a0\u521d\u59cb\u5316\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nconst gdp = require('./utils/gio/gio-alip.js').default;\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {\n    version: 'miniProgram version',\n    host: 'your serverHost',\n    ...other settings\n});\n\n// \u4fee\u6539\u9879\u76ee\u4e2d\u7684App\u548cPage\uff0c\u5982\u4e0b\uff1a\n// App({})\u6539\u5199\u4e3a:\nApp($global.trackApp({ ... }))\n\n// \u6240\u6709\u7684Page({})\u6539\u5199\u4e3a\uff1a\n$global.GioPage({ ... })\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u66f4\u591a\u914d\u7f6e\u9879\u8bf7\u5728",(0,a.kt)("a",{parentName:"em",href:"/docs/miniprogram/3.3/initSettings"},"\u96c6\u6210\u914d\u7f6e"),"\u83dc\u5355\u4e2d\u67e5\u770b"))),(0,a.kt)("h2",{id:"\u6dfb\u52a0\u767d\u540d\u5355"},"\u6dfb\u52a0\u767d\u540d\u5355"),(0,a.kt)("p",null,"\u7531\u4e8e\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u5bf9\u7f51\u7edc\u8bf7\u6c42\u7684\u9650\u5236",(0,a.kt)("a",{parentName:"p",href:"https://opendocs.alipay.com/mini/008gq6"},"\u53c2\u8003\u6587\u6863"),"\uff0c\u60a8\u9700\u8981\u5728\u300c\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u4e2d\u5fc3-\u5c0f\u7a0b\u5e8f\u8be6\u60c5-\u8bbe\u7f6e-\u5f00\u53d1\u8bbe\u7f6e-\u670d\u52a1\u5668\u57df\u540d\u767d\u540d\u5355\u300d\u4e2d\u6dfb\u52a0request\u5408\u6cd5\u57df\u540d\u3002",(0,a.kt)("a",{parentName:"p",href:"https://open.alipay.com/mini/dev/list"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u4e2d\u5fc3")),(0,a.kt)("h2",{id:"\u6570\u636e\u6821\u9a8c"},"\u6570\u636e\u6821\u9a8c"),(0,a.kt)("p",null,"\u8bf7\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u521d\u59cb\u5316\u914d\u7f6e\u9879\u4e2d\uff0c\u5c06 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"debug"))," \u8bbe\u7f6e\u4e3a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"true"))," \u6253\u5f00\u8c03\u8bd5\u6a21\u5f0f\uff0c\u7136\u540e\u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e2dConsole\u6807\u7b7e\u4e2d\u5373\u53ef\u5b9e\u65f6\u67e5\u770bSDK\u4e0a\u62a5\u7684log\u6570\u636e\u3002\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)(u,{path:"img/miniprogram/3.0_my_debug",mdxType:"ImageLoader"}))}m.isMDXComponent=!0}}]);