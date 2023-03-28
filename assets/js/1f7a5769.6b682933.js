"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[9693],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(a),c=r,g=s["".concat(d,".").concat(c)]||s[c]||k[c]||l;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},5162:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function i(t){let{children:e,hidden:a,className:i}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},e)}},5488:(t,e,a)=>{a.d(e,{Z:()=>c});var n=a(7462),r=a(7294),l=a(6010),i=a(2389),o=a(7392),d=a(7094),p=a(2466);const m="tabList__CuJ",k="tabItem_LNqP";function s(t){var e;const{lazy:a,block:i,defaultValue:s,values:c,groupId:g,className:u}=t,N=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=c??N.map((t=>{let{props:{value:e,label:a,attributes:n}}=t;return{value:e,label:a,attributes:n}})),b=(0,o.l)(f,((t,e)=>t.value===e.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===s?s:s??(null==(e=N.find((t=>t.props.default)))?void 0:e.props.value)??N[0].props.value;if(null!==v&&!f.some((t=>t.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:C}=(0,d.U)(),[y,S]=(0,r.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=g){const t=h[g];null!=t&&t!==y&&f.some((e=>e.value===t))&&S(t)}const I=t=>{const e=t.currentTarget,a=w.indexOf(e),n=f[a].value;n!==y&&(E(e),S(n),null!=g&&C(g,String(n)))},D=t=>{var e;let a=null;switch(t.key){case"Enter":I(t);break;case"ArrowRight":{const e=w.indexOf(t.currentTarget)+1;a=w[e]??w[0];break}case"ArrowLeft":{const e=w.indexOf(t.currentTarget)-1;a=w[e]??w[w.length-1];break}}null==(e=a)||e.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},u)},f.map((t=>{let{value:e,label:a,attributes:i}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,key:e,ref:t=>w.push(t),onKeyDown:D,onClick:I},i,{className:(0,l.Z)("tabs__item",k,null==i?void 0:i.className,{"tabs__item--active":y===e})}),a??e)}))),a?(0,r.cloneElement)(N.filter((t=>t.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==y})))))}function c(t){const e=(0,i.Z)();return r.createElement(s,(0,n.Z)({key:String(e)},t))}},3426:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>k});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),i=a(5162);const o={sidebar_position:2,title:"\u521d\u59cb\u5316\u914d\u7f6e"},d=void 0,p={unversionedId:"ios/Configuration",id:"ios/Configuration",title:"\u521d\u59cb\u5316\u914d\u7f6e",description:"\u5728\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\uff0cSDK \u4f1a\u63a5\u6536\u4e00\u4e2a\u7531\u7528\u6237\u4f20\u5165\u7684\u9ed8\u8ba4\u914d\u7f6e Configuration\uff0c\u914d\u7f6e\u76f8\u5173\u8bf4\u660e\u5982\u4e0b\u8868\uff1a",source:"@site/docs/ios/Configuration.md",sourceDirName:"ios",slug:"/ios/Configuration",permalink:"/growingio-sdk-docs-saas/docs/ios/Configuration",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-saas/edit/master/docs/ios/Configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u521d\u59cb\u5316\u914d\u7f6e"},sidebar:"gioSidebar",previous:{title:"\u5982\u4f55\u96c6\u6210",permalink:"/growingio-sdk-docs-saas/docs/ios/Introduce"},next:{title:"\u6570\u636e\u91c7\u96c6API",permalink:"/growingio-sdk-docs-saas/docs/ios/api"}},m={},k=[{value:"\u914d\u7f6e\u8868\u683c",id:"\u914d\u7f6e\u8868\u683c",level:3},{value:"\u8be6\u7ec6\u8bf4\u660e",id:"\u8be6\u7ec6\u8bf4\u660e",level:3},{value:"1. <strong>projectId</strong>\uff0c <strong>urlScheme</strong>\uff0c <strong>setDataSourceId</strong>\uff0c <strong>setDataCollectionServerHost</strong>",id:"1-projectid-urlscheme-setdatasourceid-setdatacollectionserverhost",level:4},{value:"2. <strong>debugEnabled</strong>",id:"2-debugenabled",level:4},{value:"3. <strong>cellularDataLimit</strong>",id:"3-cellulardatalimit",level:4},{value:"4. <strong>dataUploadInterval</strong>",id:"4-datauploadinterval",level:4},{value:"5. <strong>sessionInterval</strong>",id:"5-sessioninterval",level:4},{value:"6. <strong>dataCollectionEnabled</strong>",id:"6-datacollectionenabled",level:4},{value:"7. <strong>excludeEvent</strong>",id:"7-excludeevent",level:4},{value:"8. <strong>ignoreField</strong>",id:"8-ignorefield",level:4},{value:"9. <strong>impressionScale</strong>",id:"9-impressionscale",level:4},{value:"10. <strong>idMappingEnabled</strong>",id:"10-idmappingenabled",level:4},{value:"11. <strong>urlScheme</strong>",id:"11-urlscheme",level:4},{value:"12. <strong>encryptEnabled</strong>",id:"12-encryptenabled",level:4},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2},{value:"1. <strong>\u7981\u7528IDFA</strong>",id:"1-\u7981\u7528idfa",level:3}],s={toc:k};function c(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\uff0cSDK \u4f1a\u63a5\u6536\u4e00\u4e2a\u7531\u7528\u6237\u4f20\u5165\u7684\u9ed8\u8ba4\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration"),"\uff0c\u914d\u7f6e\u76f8\u5173\u8bf4\u660e\u5982\u4e0b\u8868\uff1a"),(0,r.kt)("h3",{id:"\u914d\u7f6e\u8868\u683c"},"\u914d\u7f6e\u8868\u683c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Config"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5176\u5b83"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"projectId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NSString")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9879\u76ee ID(AccountID)\uff0c\u6bcf\u4e2a\u5e94\u7528\u5bf9\u5e94\u552f\u4e00\u503c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dataSourceId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NSString")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5e94\u7528\u7684 DataSourceId\uff0c\u552f\u4e00\u503c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dataCollectionServerHost")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NSString")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u7aef\u90e8\u7f72\u540e\u7684  ServerHost"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"debugEnabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BOOL")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NO")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8c03\u8bd5\u6a21\u5f0f\uff0c\u4f1a\u6253\u5370 SDK log\uff0c\u629b\u51fa\u9519\u8bef\u5f02\u5e38\uff0c\u5728\u7ebf\u4e0a\u73af\u5883\u8bf7\u5173\u95ed"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cellularDataLimit")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NSUInteger")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6bcf\u5929\u53d1\u9001\u6570\u636e\u7684\u6d41\u91cf\u9650\u5236\uff0c\u5355\u4f4d MB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dataUploadInterval")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NSTimeInterval")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"15")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u53d1\u9001\u7684\u95f4\u9694\uff0c\u5355\u4f4d\u79d2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sessionInterval")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NSTimeInterval")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"30")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4f1a\u8bdd\u540e\u53f0\u7559\u5b58\u65f6\u957f\uff0c\u5355\u4f4d\u79d2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dataCollectionEnabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BOOL")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"YES")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u91c7\u96c6\u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"excludeEvent")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u4e8b\u4ef6\u8fc7\u6ee4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("font",{color:"red"},">=3.2.1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ignoreField")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u4e8b\u4ef6\u5c5e\u6027\u8fc7\u6ee4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("font",{color:"red"},">=3.2.1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"impressionScale")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5143\u7d20\u66dd\u5149\u4e8b\u4ef6\u4e2d\u7684\u6bd4\u4f8b\u56e0\u5b50,\u8303\u56f4 ","[0-1]"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("font",{color:"red"},"\u65e0\u57cb\u70b9\u72ec\u6709")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"idMappingEnabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BOOL")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NO")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5f00\u542f\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("font",{color:"red"},">=3.3.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"urlScheme")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NSString")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u81ea\u5b9a\u4e49 URL Scheme"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("font",{color:"red"},">=3.3.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"encryptEnabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BOOL")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NO")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5f00\u542f\u7f51\u7edc\u4f20\u8f93\u52a0\u5bc6"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("font",{color:"red"},">=3.3.2"))))),(0,r.kt)("h3",{id:"\u8be6\u7ec6\u8bf4\u660e"},"\u8be6\u7ec6\u8bf4\u660e"),(0,r.kt)("h4",{id:"1-projectid-urlscheme-setdatasourceid-setdatacollectionserverhost"},"1. ",(0,r.kt)("strong",{parentName:"h4"},"projectId"),"\uff0c ",(0,r.kt)("strong",{parentName:"h4"},"urlScheme"),"\uff0c ",(0,r.kt)("strong",{parentName:"h4"},"setDataSourceId"),"\uff0c ",(0,r.kt)("strong",{parentName:"h4"},"setDataCollectionServerHost")),(0,r.kt)("p",null,"urlScheme \u662f SDK 3.3.0 \u53ca\u5176\u4e4b\u540e\u5fc5\u4f20\u53c2\u6570\uff0c\u5176\u4ed6\u53c2\u6570\u4e3a\u5fc5\u4f20\u53c2\u6570\uff0c\u82e5\u4e0d\u6e05\u695a\u5177\u4f53\u6570\u503c\u8bf7\u8be2\u95ee\u76f8\u5173\u670d\u52a1\u7aef\u5bf9\u63a5\u7684\u5f00\u53d1\u540c\u4e8b\u3002"),(0,r.kt)("h4",{id:"2-debugenabled"},"2. ",(0,r.kt)("strong",{parentName:"h4"},"debugEnabled")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u4e0d\u5f00\u542f\uff0c\u5f00\u542f\u540e\u4f1a\u8f93\u51fa SDK Log \u65e5\u5fd7\u3002"),(0,r.kt)("h4",{id:"3-cellulardatalimit"},"3. ",(0,r.kt)("strong",{parentName:"h4"},"cellularDataLimit")),(0,r.kt)("p",null,"\u4e3a\u6bcf\u65e5\u5728 4G/5G \u73af\u5883\u4e0b\u7684\u6d41\u91cf\u9650\u5236\uff0c\u9ed8\u8ba4\u4e3a 10M\u3002WIFI \u73af\u5883\u4e0b\u5219\u4e0d\u8ba1\u6d41\u91cf\u3002"),(0,r.kt)("h4",{id:"4-datauploadinterval"},"4. ",(0,r.kt)("strong",{parentName:"h4"},"dataUploadInterval")),(0,r.kt)("p",null,"\u4e0a\u62a5\u95f4\u9694\uff0cGrowingIO SDK \u4f1a\u5148\u5c06\u4e8b\u4ef6\u5b58\u5165\u6570\u636e\u5e93\u4e2d\uff0c\u7136\u540e\u4ee5\u6bcf\u9694\u9ed8\u8ba4\u65f6\u95f4 15 \u79d2\u7684\u60c5\u51b5\u4e0b\u5411\u670d\u52a1\u5668\u53d1\u9001\u4e8b\u4ef6\u5305\uff08\u6700\u5927 500 \u6761\u4e8b\u4ef6\uff09\u3002"),(0,r.kt)("h4",{id:"5-sessioninterval"},"5. ",(0,r.kt)("strong",{parentName:"h4"},"sessionInterval")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u4f1a\u8bdd\u540e\u53f0\u7559\u5b58\u65f6\u957f\uff0c\u6307\u5f53\u524d\u4f1a\u8bdd\u5728\u5e94\u7528\u8fdb\u5165\u540e\u53f0\u540e\u7684\u6700\u5927\u7559\u5b58\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a 30 \u79d2\u3002\u53e6\u5916\uff0c\u5176\u4ed6\u60c5\u51b5\u4e0b\u4e5f\u4f1a\u91cd\u65b0\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u4f1a\u8bdd\uff0c\u5982\u8bbe\u7f6e\u7528\u6237 ID \u7b49\u6838\u5fc3\u4fe1\u606f\uff0c\u91cd\u65b0\u6253\u5f00\u6570\u636e\u6536\u96c6\u7b49\u3002"),(0,r.kt)("h4",{id:"6-datacollectionenabled"},"6. ",(0,r.kt)("strong",{parentName:"h4"},"dataCollectionEnabled")),(0,r.kt)("p",null,"\u6570\u636e\u6536\u96c6\uff0c\u5f53\u6570\u636e\u6536\u96c6\u5173\u95ed\u65f6\uff0cSDK \u5c06\u4e0d\u4f1a\u518d\u83b7\u53d6\u8bbe\u5907\u4fe1\u606f\uff0c\u4e5f\u4e0d\u4f1a\u4ea7\u751f\u4e8b\u4ef6\u548c\u4e0a\u62a5\u4e8b\u4ef6\u3002"),(0,r.kt)("h4",{id:"7-excludeevent"},"7. ",(0,r.kt)("strong",{parentName:"h4"},"excludeEvent")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"SDK \u7248\u672c>=3.2.1")),(0,r.kt)("p",null,"\u4e8b\u4ef6\u8fc7\u6ee4\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e8b\u4ef6\u4e0d\u4f1a\u8fdb\u884c\u8fc7\u6ee4\u3002\u4f46\u82e5\u4e0d\u60f3\u91c7\u96c6\u67d0\u4e9b\u4e8b\u4ef6\u53ef\u4ee5\u5728\u6b64\u8bbe\u7f6e\u3002\u4e8b\u4ef6\u7c7b\u578b\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-ios-autotracker/blob/master/GrowingTrackerCore/Public/GrowingEventFilter.h"},"GrowingEventFilter")),(0,r.kt)("h4",{id:"8-ignorefield"},"8. ",(0,r.kt)("strong",{parentName:"h4"},"ignoreField")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"SDK \u7248\u672c>=3.2.1")),(0,r.kt)("p",null,"\u4e8b\u4ef6\u5c5e\u6027\u8fc7\u6ee4\uff0c\u4e8b\u4ef6\u5c5e\u6027\u6307\u4e0a\u62a5\u4e8b\u4ef6\u4e2d\u643a\u5e26\u7684\u5c5e\u6027\u53c2\u6570\u3002\u53ef\u8fc7\u6ee4\u4e8b\u4ef6\u5c5e\u6027\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/growingio/growingio-sdk-ios-autotracker/blob/master/GrowingTrackerCore/Public/GrowingFieldsIgnore.h"},"GrowingFieldsIgnore")),(0,r.kt)("h4",{id:"9-impressionscale"},"9. ",(0,r.kt)("strong",{parentName:"h4"},"impressionScale")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u65e0\u57cb\u70b9 SDK \u72ec\u6709")),(0,r.kt)("p",null,"\u66dd\u5149\u6bd4\u4f8b\uff0c\u4e0e\u66dd\u5149\u4e8b\u4ef6\u7ed3\u5408\u4f7f\u7528\u3002\u66dd\u5149\u6bd4\u4f8b\u662f\u6307\u5f53\u4e00\u4e2a\u66dd\u5149\u7684 View \u51fa\u73b0\u5728\u5c4f\u5e55\u65f6\u53ef\u89c1\u7684\u90e8\u5206\u5360\u636e\u81ea\u8eab\u5c3a\u5bf8\u7684\u6bd4\u4f8b\uff0c\u6bd4\u5982\u8bf4\u82e5\u8bbe\u4e3a 0 \u5219\u8868\u793a\u53ea\u8981\u51fa\u73b0\u5373\u4ea7\u751f\u66dd\u5149\u4e8b\u4ef6\uff0c\u82e5\u8bbe\u4e3a 1 \u5219\u8868\u793a\u8981\u6574\u4e2a View \u90fd\u51fa\u73b0\u5728\u5c4f\u5e55\u4e2d\u3002"),(0,r.kt)("h4",{id:"10-idmappingenabled"},"10. ",(0,r.kt)("strong",{parentName:"h4"},"idMappingEnabled")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"SDK \u7248\u672c>=3.3.0")),(0,r.kt)("p",null,"\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5\uff0c\u662f\u5426\u652f\u6301\u591a\u7528\u6237\u8eab\u4efd\u4e0a\u62a5\uff0c\u9ed8\u8ba4\u4e0d\u652f\u6301\u3002\u4e0e API \u63a5\u53e3",(0,r.kt)("inlineCode",{parentName:"p"},"setLoginUserId:userKey:"),"\u5bf9\u5e94\uff0c\u5f00\u542f\u65f6\uff0cuserKey \u4f1a\u5728\u6bcf\u6b21\u4e0a\u62a5\u6570\u636e\u65f6\u643a\u5e26\uff1b\u5173\u95ed\u65f6\uff0c\u63a5\u53e3\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"setLoginUserId"),"\u4f5c\u7528\u76f8\u540c"),(0,r.kt)("h4",{id:"11-urlscheme"},"11. ",(0,r.kt)("strong",{parentName:"h4"},"urlScheme")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"SDK \u7248\u672c>=3.3.0")),(0,r.kt)("p",null,"\u81ea\u5b9a\u4e49 URL Scheme\uff0c\u5982\u5b58\u5728\u591a\u73af\u5883\u914d\u7f6e\uff0c\u53ef\u57fa\u4e8e\u4e0d\u540c\u73af\u5883\u8fdb\u884c\u81ea\u5b9a\u4e49\uff0c\u9700\u540c\u65f6\u5728\u5de5\u7a0b\u4e2d\u6dfb\u52a0\u8be5 ",(0,r.kt)("a",{parentName:"p",href:"/docs/ios/Introduce#%E6%B7%BB%E5%8A%A0-url-scheme"},"URL Scheme")),(0,r.kt)("h4",{id:"12-encryptenabled"},"12. ",(0,r.kt)("strong",{parentName:"h4"},"encryptEnabled")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"SDK \u7248\u672c>=3.3.2\uff0cpod ENABLE_ENCRYPTION \u5df2\u88ab\u5e9f\u5f03, \u8bf7\u4f7f\u7528 -","[GrowingTrackConfiguration setEncryptEnabled]"," \u8fdb\u884c\u914d\u7f6e")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u4e3a YES \u65f6\uff0c\u7f51\u7edc\u4f20\u8f93\u5185\u5bb9\u5c06\u4f1a\u52a0\u5bc6\uff0c\u4e0d\u4f1a\u660e\u6587\u663e\u793a\u3002"),(0,r.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,r.kt)("h3",{id:"1-\u7981\u7528idfa"},"1. ",(0,r.kt)("strong",{parentName:"h3"},"\u7981\u7528IDFA")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u91c7\u96c6 SDK \u7248\u672c >=3.2.0")),(0,r.kt)("p",null,"\u7981\u7528 IDFA\uff0c\u4e14 SDK \u4e2d\u4e0d\u4f1a\u518d\u6709\u76f8\u5173\u83b7\u53d6 IDFA \u4ee3\u7801\u903b\u8f91"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"cocoapods",label:"Cocoapods\u96c6\u6210",default:!0,mdxType:"TabItem"},(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u65f6\u6ce8\u610f\u6a21\u5757\u7248\u672c\u9700\u8981\u4e0e\u91c7\u96c6 SDK \u7248\u672c\u4fdd\u6301\u4e00\u81f4"))),(0,r.kt)("p",null,"\u5728\u60a8\u7684 Podfile \u6587\u4ef6\u4e2d\u6dfb\u52a0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"pod 'GrowingAnalytics/DISABLE_IDFA'\n")),(0,r.kt)("p",null,"\u6253\u5f00\u7ec8\u7aef\uff0c\u5207\u6362\u5230\u9879\u76ee\u76ee\u5f55\uff0c\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"pod update"))),(0,r.kt)(i.Z,{value:"swiftPM",label:"Swift Package Manager\u96c6\u6210",mdxType:"TabItem"},(0,r.kt)("p",null,"\u53bb\u6389\u539f\u5148\u96c6\u6210\u7684 ",(0,r.kt)("strong",{parentName:"p"},"GrowingAutotracker_cdp"),"(\u65e0\u57cb\u70b9) / ",(0,r.kt)("strong",{parentName:"p"},"GrowingTracker_cdp"),"(\u57cb\u70b9) Package\uff0c\u9009\u62e9\u5bf9\u5e94\u7684 ",(0,r.kt)("strong",{parentName:"p"},"GrowingAutotracker_cdp_NoIDFA"),"(\u65e0\u57cb\u70b9) / ",(0,r.kt)("strong",{parentName:"p"},"GrowingTracker_cdp_NoIDFA"),"(\u57cb\u70b9)  Package"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"add Package NoIDFA",src:a(2824).Z,width:"400",height:"460"})))),(0,r.kt)("p",null,"\u9879\u76ee\u4e2d\u65e0\u9700\u5176\u4ed6\u989d\u5916\u8bbe\u7f6e"))}c.isMDXComponent=!0},2824:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/add_package_autotracker_noidfa-eaf05dac83b5c4408eb6d679242e1d36.png"}}]);