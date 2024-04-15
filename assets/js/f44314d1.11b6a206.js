"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[4449],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,g=m["".concat(l,".").concat(c)]||m[c]||d[c]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7462),a=n(7294),o=n(6010),i=n(2389),p=n(7392),l=n(7094),u=n(2466);const s="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:c,groupId:g,className:v}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??y.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),f=(0,p.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===m?m:m??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:I}=(0,l.U)(),[w,x]=(0,a.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=g){const e=h[g];null!=e&&e!==w&&k.some((t=>t.value===e))&&x(e)}const j=e=>{const t=e.currentTarget,n=N.indexOf(t),r=k[n].value;r!==w&&(T(t),x(r),null!=g&&I(g,String(r)))},D=e=>{var t;let n=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},v)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:D,onClick:j},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,a.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},6168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>v,frontMatter:()=>p,metadata:()=>u,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(5488),i=n(5162);const p={sidebar_position:1,title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"},l=void 0,u={unversionedId:"miniprogram/3.3/integration/wx",id:"miniprogram/3.3/integration/wx",title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",description:"\u96c6\u6210\u51c6\u5907",source:"@site/docs/miniprogram/3.3/integration/wx.md",sourceDirName:"miniprogram/3.3/integration",slug:"/miniprogram/3.3/integration/wx",permalink:"/growingio-sdk-docs-v3/docs/miniprogram/3.3/integration/wx",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-v3/edit/master/docs/miniprogram/3.3/integration/wx.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"},sidebar:"gioSidebar",previous:{title:"\u7248\u672c\u8bb0\u5f55",permalink:"/growingio-sdk-docs-v3/docs/miniprogram/3.3/version"},next:{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",permalink:"/growingio-sdk-docs-v3/docs/miniprogram/3.3/integration/alipay"}},s={},d=[{value:"\u96c6\u6210\u51c6\u5907",id:"\u96c6\u6210\u51c6\u5907",level:3},{value:"\u83b7\u53d6SDK\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570\uff1aAccountID\u3001DataSourceID\u3001AppId\u3001Host",id:"\u83b7\u53d6sdk\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570accountiddatasourceidappidhost",level:4},{value:"\u521b\u5efa",id:"\u521b\u5efa",level:5},{value:"\u67e5\u770b",id:"\u67e5\u770b",level:5},{value:"\u96c6\u6210",id:"\u96c6\u6210",level:2},{value:"\u4e0b\u8f7dSDK",id:"\u4e0b\u8f7dsdk",level:3},{value:"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 <code>\u94fe\u63a5\u5b58\u50a8\u4e3a...</code> \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)",id:"\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\u9009\u62e9-\u94fe\u63a5\u5b58\u50a8\u4e3a-\u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d",level:5},{value:"\u539f\u751f\u5f00\u53d1",id:"\u539f\u751f\u5f00\u53d1",level:3},{value:"Taro",id:"taro",level:3},{value:"uni-app",id:"uni-app",level:3},{value:"WePY",id:"wepy",level:3},{value:"\u6dfb\u52a0\u767d\u540d\u5355",id:"\u6dfb\u52a0\u767d\u540d\u5355",level:2},{value:"\u6570\u636e\u6821\u9a8c",id:"\u6570\u636e\u6821\u9a8c",level:2}],m=(c="ImageLoader",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const g={toc:d};function v(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u96c6\u6210\u51c6\u5907"},"\u96c6\u6210\u51c6\u5907"),(0,a.kt)("h4",{id:"\u83b7\u53d6sdk\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570accountiddatasourceidappidhost"},"\u83b7\u53d6SDK\u521d\u59cb\u5316\u5fc5\u4f20\u53c2\u6570\uff1aAccountID\u3001DataSourceID\u3001AppId\u3001Host"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"AccountID\uff1a\u9879\u76eeID\uff0c\u4ee3\u8868\u4e00\u4e2a\u9879\u76ee",(0,a.kt)("br",null),"\nDataSourceID\uff1a\u6570\u636e\u6e90ID\uff0c\u4ee3\u8868\u4e00\u4e2a\u6570\u636e\u6e90",(0,a.kt)("br",null),"\nAppId\uff1a\u5c0f\u7a0b\u5e8f\u5e94\u7528ID",(0,a.kt)("br",null),"\nHost\uff1a\u91c7\u96c6\u6570\u636e\u4e0a\u62a5\u7684\u670d\u52a1\u5668\u5730\u5740\uff0c\u975e\u5e73\u53f0\u5730\u5740",(0,a.kt)("br",null)),(0,a.kt)("p",{parentName:"admonition"},"AccountID\u3001DataSourceID\u3001AppId \u9700\u8981\u5728CDP\u589e\u957f\u5e73\u53f0\u4e0a\u65b0\u5efa\u6570\u636e\u6e90\uff0c\u6216\u4ece\u5df2\u521b\u5efa\u7684\u6570\u636e\u6e90\u4e2d\u83b7\u53d6, \u5982\u4e0d\u6e05\u695a\u6216\u65e0\u6743\u9650\u8bf7\u8054\u7cfb\u60a8\u7684\u4e13\u5c5e\u9879\u76ee\u7ecf\u7406\u6216\u6280\u672f\u652f\u6301")),(0,a.kt)("h5",{id:"\u521b\u5efa"},"\u521b\u5efa"),(0,a.kt)(m,{path:"img/common/createapplication",mdxType:"ImageLoader"}),(0,a.kt)("h5",{id:"\u67e5\u770b"},"\u67e5\u770b"),(0,a.kt)(m,{path:"img/miniprogram/dataSourceInfo",mdxType:"ImageLoader"}),(0,a.kt)("h2",{id:"\u96c6\u6210"},"\u96c6\u6210"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u591a\u6837\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u6211\u4eec\u7ed9\u51fa\u4e86\u4e3b\u6d41\u5f00\u53d1\u65b9\u5f0f\u7684\u96c6\u6210\u65b9\u6cd5\u53c2\u8003\u3002\u5982\u60a8\u4f7f\u7528\u4e86\u5176\u4ed6\u5f00\u53d1\u65b9\u5f0f\uff0c\u8bf7\u54a8\u8be2\u6211\u4eec\u3002"),(0,a.kt)("p",null,"\u96c6\u6210\u65b9\u5f0f\u53c2\u8003\u793a\u4f8b\u4ee3\u7801\uff0c\u6ce8\u610f\u4e0d\u8981\u968f\u610f\u4fee\u6539\u521d\u59cb\u5316\u4ee3\u7801\u4f4d\u7f6e\u3002",(0,a.kt)("strong",{parentName:"p"},"SDK\u4e0d\u652f\u6301\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u4efb\u610f\u751f\u547d\u5468\u671f\u4e2d\u8fdb\u884c\u521d\u59cb\u5316\u3002")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u4f7f\u7528\u6709GrowingIO \u5c0f\u7a0b\u5e8f\u8fd0\u8425SDK\uff0c \u4e14\u96c6\u6210\u672c\u6587\u6863\u4e2d\u7684SDK\u7248\u672c >=3.3.2\uff0c\u8bf7\u5728\u521d\u59cb\u5316SDK\u65f6\uff0c\u589e\u52a0\u914d\u7f6e\u9879 ",(0,a.kt)("inlineCode",{parentName:"p"},"enableEventStore: true"))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\u6ce8\uff1a\u5c0f\u7a0b\u5e8fSDK 3.3\u7248\u672c\u5df2\u4e0d\u518d\u7ef4\u62a4\uff0c\u8bf7\u5c3d\u5feb\u5347\u7ea7\u81f33.8\u62164.0\u7248\u672c\uff0c\u5177\u4f53\u5347\u7ea7\u6b65\u9aa4\u8bf7\u54a8\u8be2\u6211\u4eec\u7684\u6280\u672f\u652f\u6301\u3002"))),(0,a.kt)("h3",{id:"\u4e0b\u8f7dsdk"},"\u4e0b\u8f7dSDK"),(0,a.kt)("a",{href:"https://assets.giocdn.com/sdk/cdp/3.0/gio-minp.js",download:"https://assets.giocdn.com/sdk/cdp/3.0/gio-minp.js"},"\u70b9\u51fb\u4e0b\u8f7dSDK"),"\uff0c\u5b58\u653e\u5728\u9879\u76ee\u4e2d\uff0c\u4e0b\u6587\u4e2d\u4ee5`utils/gio`\u76ee\u5f55\u4e3a\u4f8b\u3002",(0,a.kt)("h5",{id:"\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\u9009\u62e9-\u94fe\u63a5\u5b58\u50a8\u4e3a-\u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d"},"(\u5982\u679c\u60a8\u70b9\u51fb\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u6587\u4ef6\u5e76\u4e0d\u662f\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u5c1d\u8bd5\u53f3\u952e\u70b9\u51fb\u94fe\u63a5\uff0c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"h5"},"\u94fe\u63a5\u5b58\u50a8\u4e3a...")," \u5373\u53ef\u6b63\u5e38\u89e6\u53d1\u4e0b\u8f7d)"),(0,a.kt)("h3",{id:"\u539f\u751f\u5f00\u53d1"},"\u539f\u751f\u5f00\u53d1"),(0,a.kt)("p",null,"\u5728\u6839\u76ee\u5f55app.js\u6587\u4ef6\u7684\u9876\u90e8\u6dfb\u52a0\u8ddf\u8e2a\u4ee3\u7801\uff1a"),(0,a.kt)(o.Z,{groupId:"1",defaultValue:"\u539f\u751f",values:[{label:"\u539f\u751f",value:"\u539f\u751f"},{label:"\u539f\u751f+\u7b2c\u4e09\u65b9\u63d2\u4ef6",value:"\u539f\u751f+\u7b2c\u4e09\u65b9\u63d2\u4ef6"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"\u539f\u751f",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nvar gdp = require(\"utils/gio/gio-minp.js\").default;\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'your serverHost',\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n"))),(0,a.kt)(i.Z,{value:"\u539f\u751f+\u7b2c\u4e09\u65b9\u63d2\u4ef6",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nvar gdp = require(\"utils/gio/gio-minp.js\").default;\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'your serverHost',\n    usePlugin: true,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\nconst App = global.GioApp;\n")))),(0,a.kt)("h3",{id:"taro"},"Taro"),(0,a.kt)("p",null,"\u5728\u6839\u76ee\u5f55app.jsx\u6587\u4ef6\u7684\u9876\u90e8\u6dfb\u52a0\u8ddf\u8e2a\u4ee3\u7801"),(0,a.kt)(o.Z,{groupId:"2",defaultValue:"2.x",values:[{label:"Taro2(React)",value:"2.x"},{label:"Taro3(React)",value:"3.x"},{label:"Taro3(vue2)",value:"3.x(vue2)"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"2.x",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.jsx\nimport Taro, { Component } from '@tarojs/taro';\nvar gdp = require(\"utils/gio/gio-minp.js\").default;\n\ngdp('init','your GrowingIO accountId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'your serverHost',\n    taro: Taro,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n\nclass App extends Component { ... }\nTaro.render(<App />, document.getElementById('app'));\n"))),(0,a.kt)(i.Z,{value:"3.x",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install babel-plugin-setname --save\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// babel.config.js\nmodule.exports = {\n  plugins: [\n    [\n      "babel-plugin-setname",\n      {\n        includes: ["src"],\n        lower: false,\n      }\n    ]\n  ]\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport React, { Component } from 'react';\nimport Taro from '@tarojs/taro';\nvar gdp = require(\"utils/gio/gio-minp.js\").default;\n\ngdp('init','your GrowingIO accountId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'your serverHost',\n    taro: Taro,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n\nclass App extends Component { ... }\nexport default App;\n"))),(0,a.kt)(i.Z,{value:"3.x(vue2)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport Vue from 'vue';\nimport Taro from '@tarojs/taro';\nvar gdp = require(\"utils/gio/gio-minp.js\").default;\n\ngdp('init','your GrowingIO accountId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'your serverHost',\n    taro: Taro,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n\n// \u6ce8\u610fvue2\u4e2dApp\u5b9e\u4f8b\u5728\u521d\u59cb\u5316\u4e4b\u540e\nconst App = { ... };\nexport default App;\n")))),(0,a.kt)("h3",{id:"uni-app"},"uni-app"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport Vue from 'vue';\nimport App from './App.vue';\nApp.mpType = 'app';\nvar gdp = require(\"utils/gio/gio-minp.js\").default;\n\ngdp('init', 'your GrowingIO accountId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'your serverHost',\n    vue: Vue,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n")),(0,a.kt)("h3",{id:"wepy"},"WePY"),(0,a.kt)(o.Z,{groupId:"4",defaultValue:"1.x",values:[{label:"WePY 1.x",value:"1.x"},{label:"WePY 1.x+\u7b2c\u4e09\u65b9\u63d2\u4ef6",value:"1.x+\u63d2\u4ef6"},{label:"WePY 2.x",value:"2.x"},{label:"WePY 2.x+\u7b2c\u4e09\u65b9\u63d2\u4ef6",value:"2.x+\u63d2\u4ef6"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"1.x",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.wpy\nimport Vue from 'vue';\nvar gdp = require(\"utils/gio/gio-minp.js\").default;\n\ngdp('init','your GrowingIO accountId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'your serverHost',\n    vue: Vue,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n"))),(0,a.kt)(i.Z,{value:"1.x+\u63d2\u4ef6",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.wpy\nimport Vue from 'vue';\nvar gdp = require(\"utils/gio/gio-minp.js\").default;\n\ngdp('init','your GrowingIO accountId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'your serverHost',\n    usePlugin: true,\n    vue: Vue,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n"))),(0,a.kt)(i.Z,{value:"2.x",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.wpy\nimport Wepy from '@wepy/core';\nvar gdp = require(\"utils/gio/gio-minp.js\").default;\n\ngdp('init','your GrowingIO accountId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'your serverHost',\n    wepy: Wepy,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n"))),(0,a.kt)(i.Z,{value:"2.x+\u63d2\u4ef6",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// app.wpy\nimport Wepy from '@wepy/core';\nvar gdp = require(\"utils/gio/gio-minp.js\").default;\n\ngdp('init','your GrowingIO accountId', 'your dataSourceID', 'your AppId', {\n    version: '\u5c0f\u7a0b\u5e8f\u7248\u672c',\n    host: 'your serverHost',\n    usePlugin: true,\n    wepy: Wepy,\n    ...\u5176\u4ed6\u914d\u7f6e\u9879\n});\n")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u66f4\u591a\u914d\u7f6e\u9879\u8bf7\u5728",(0,a.kt)("a",{parentName:"em",href:"/docs/miniprogram/3.3/initSettings"},"\u96c6\u6210\u914d\u7f6e"),"\u83dc\u5355\u4e2d\u67e5\u770b"))),(0,a.kt)("h2",{id:"\u6dfb\u52a0\u767d\u540d\u5355"},"\u6dfb\u52a0\u767d\u540d\u5355"),(0,a.kt)("p",null,"\u7531\u4e8e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5bf9\u7f51\u7edc\u8bf7\u6c42\u7684\u9650\u5236",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html"},"\u53c2\u8003\u6587\u6863"),"\uff0c\u60a8\u9700\u8981\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"https://your serverHost")," \u5728\u300c\u5c0f\u7a0b\u5e8f\u540e\u53f0-\u5f00\u53d1-\u5f00\u53d1\u8bbe\u7f6e-\u670d\u52a1\u5668\u57df\u540d\u300d\u4e2d\u6dfb\u52a0\u4e3arequest\u5408\u6cd5\u57df\u540d\u3002",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/"},"\u5c0f\u7a0b\u5e8f\u540e\u53f0")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5c0f\u7a0b\u5e8f\u901a\u8fc7\u7b2c\u4e09\u65b9\u5e73\u53f0\u53d1\u5e03\u4ee3\u7801\uff0c\u5728\u53d1\u5e03\u4ee3\u7801\u4e4b\u524d\uff0c\u9700\u8981\u8c03\u7528\u63a5\u53e3\u5728requestdomain\u4e2d\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"p"},"https://your serverHost"),"\uff0c\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/Mini_Program_Basic_Info/Server_Address_Configuration.html"},"\u5c0f\u7a0b\u5e8f\u5b98\u65b9\u7b2c\u4e09\u65b9\u8bf4\u660e"),"\u3002")),(0,a.kt)("h2",{id:"\u6570\u636e\u6821\u9a8c"},"\u6570\u636e\u6821\u9a8c"),(0,a.kt)("p",null,"\u8bf7\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u521d\u59cb\u5316\u914d\u7f6e\u9879\u4e2d\uff0c\u5c06 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"debug"))," \u8bbe\u7f6e\u4e3a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"true"))," \u6253\u5f00\u8c03\u8bd5\u6a21\u5f0f\uff0c\u7136\u540e\u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e2dConsole\u6807\u7b7e\u4e2d\u5373\u53ef\u5b9e\u65f6\u67e5\u770bSDK\u4e0a\u62a5\u7684log\u6570\u636e\u3002\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)(m,{path:"img/miniprogram/3.0_wx_debug",mdxType:"ImageLoader"}))}v.isMDXComponent=!0}}]);