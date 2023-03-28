"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[2571],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1471:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:7,title:"\u670d\u52a1\u7aef \u5e38\u89c1\u95ee\u9898"},l=void 0,s={unversionedId:"server",id:"server",title:"\u670d\u52a1\u7aef \u5e38\u89c1\u95ee\u9898",description:"1. \u65e5\u5fd7\u4e2d\u53ef\u4ee5\u770b\u5230\u57cb\u70b9\u6570\u636e\uff0c\u4f46\u662f\u5e73\u53f0\u6216\u6570\u636e\u5e93\u4e2d\u67e5\u4e0d\u5230\u6570\u636e\uff0c\u662f\u54ea\u91cc\u7684\u95ee\u9898\uff1f",source:"@site/question/server.md",sourceDirName:".",slug:"/server",permalink:"/growingio-sdk-docs-saas/question/server",draft:!1,editUrl:"https://github.com/growingio/growingio-sdk-docs-saas/edit/master/question/server.md",tags:[],version:"current",lastUpdatedAt:1679985419,formattedLastUpdatedAt:"Mar 28, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"\u670d\u52a1\u7aef \u5e38\u89c1\u95ee\u9898"},sidebar:"question",previous:{title:"\u4e09\u65b9\u6846\u67b6 \u5e38\u89c1\u95ee\u9898",permalink:"/growingio-sdk-docs-saas/question/other"}},i={},p=[{value:"1. \u65e5\u5fd7\u4e2d\u53ef\u4ee5\u770b\u5230\u57cb\u70b9\u6570\u636e\uff0c\u4f46\u662f\u5e73\u53f0\u6216\u6570\u636e\u5e93\u4e2d\u67e5\u4e0d\u5230\u6570\u636e\uff0c\u662f\u54ea\u91cc\u7684\u95ee\u9898\uff1f",id:"1-\u65e5\u5fd7\u4e2d\u53ef\u4ee5\u770b\u5230\u57cb\u70b9\u6570\u636e\u4f46\u662f\u5e73\u53f0\u6216\u6570\u636e\u5e93\u4e2d\u67e5\u4e0d\u5230\u6570\u636e\u662f\u54ea\u91cc\u7684\u95ee\u9898",level:3},{value:"2. \u670d\u52a1\u7aef\u57cb\u70b9\u62a5\u9519\uff1aPKIX path validation failed: java.security.cert.CertPathValidatorException:",id:"2-\u670d\u52a1\u7aef\u57cb\u70b9\u62a5\u9519pkix-path-validation-failed-javasecuritycertcertpathvalidatorexception",level:3},{value:"3. JAVA SDK\u8bf7\u6c42\u62a5\u8bc1\u4e66\u9519\u8bef\uff0cjs\u7aef \u548c iOS\u7aef \u8bf7\u6c42\u90fd\u6ca1\u95ee\u9898\uff0c\u53ef\u4ee5\u6b63\u5e38\u4e0a\u4f20\uff0chttps://uatcollect.gmcc.net/healthy-check \u4e5fOK\uff0c\u8be5\u600e\u4e48\u5904\u7406\uff1f",id:"3-java-sdk\u8bf7\u6c42\u62a5\u8bc1\u4e66\u9519\u8befjs\u7aef-\u548c-ios\u7aef-\u8bf7\u6c42\u90fd\u6ca1\u95ee\u9898\u53ef\u4ee5\u6b63\u5e38\u4e0a\u4f20httpsuatcollectgmccnethealthy-check-\u4e5fok\u8be5\u600e\u4e48\u5904\u7406",level:3},{value:"Java SDK",id:"java-sdk",level:2},{value:"1. \u62a5\u9519\u5982\u4e0b\u56fe\u6240\u793a:\u663e\u793ahost\u8fde\u63a5\u8d85\u65f6\uff0c\u4f46\u662f\u5728\u6211\u4eec\u81ea\u5df1\u7684demo\u4f7f\u7528\u5ba2\u6237\u7684host\u53d1\u6570\u636e\u662f\u6ca1\u6709\u95ee\u9898?",id:"1-\u62a5\u9519\u5982\u4e0b\u56fe\u6240\u793a\u663e\u793ahost\u8fde\u63a5\u8d85\u65f6\u4f46\u662f\u5728\u6211\u4eec\u81ea\u5df1\u7684demo\u4f7f\u7528\u5ba2\u6237\u7684host\u53d1\u6570\u636e\u662f\u6ca1\u6709\u95ee\u9898",level:3},{value:"2. \u5728pom\u4e2d\u6dfb\u52a0\u4f9d\u8d56\u65f6\uff0c\u4e3a\u4ec0\u4e48\u627e\u4e0d\u5230 jar\u5305\uff1f",id:"2-\u5728pom\u4e2d\u6dfb\u52a0\u4f9d\u8d56\u65f6\u4e3a\u4ec0\u4e48\u627e\u4e0d\u5230-jar\u5305",level:3},{value:"3.\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u6ca1\u6709\u5728console\u4e2d\u6253\u5370\u65e5\u5fd7\u4fe1\u606f\uff1f",id:"3\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u6ca1\u6709\u5728console\u4e2d\u6253\u5370\u65e5\u5fd7\u4fe1\u606f",level:3},{value:"4.\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u670d\u52a1\u7aef\u6ca1\u6709\u6536\u5230\u6570\u636e\uff1f",id:"4\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u670d\u52a1\u7aef\u6ca1\u6709\u6536\u5230\u6570\u636e",level:3},{value:"PHP",id:"php",level:2},{value:"1.\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u6ca1\u6709\u5728console\u4e2d\u6253\u5370\u65e5\u5fd7\u4fe1\u606f\uff1f",id:"1\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u6ca1\u6709\u5728console\u4e2d\u6253\u5370\u65e5\u5fd7\u4fe1\u606f",level:3},{value:"2.\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u670d\u52a1\u7aef\u6ca1\u6709\u6536\u5230\u6570\u636e\uff1f",id:"2\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u670d\u52a1\u7aef\u6ca1\u6709\u6536\u5230\u6570\u636e",level:3}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-\u65e5\u5fd7\u4e2d\u53ef\u4ee5\u770b\u5230\u57cb\u70b9\u6570\u636e\u4f46\u662f\u5e73\u53f0\u6216\u6570\u636e\u5e93\u4e2d\u67e5\u4e0d\u5230\u6570\u636e\u662f\u54ea\u91cc\u7684\u95ee\u9898"},"1. \u65e5\u5fd7\u4e2d\u53ef\u4ee5\u770b\u5230\u57cb\u70b9\u6570\u636e\uff0c\u4f46\u662f\u5e73\u53f0\u6216\u6570\u636e\u5e93\u4e2d\u67e5\u4e0d\u5230\u6570\u636e\uff0c\u662f\u54ea\u91cc\u7684\u95ee\u9898\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," \u670d\u52a1\u7aefSDK \u5f00\u542f\u65e5\u5fd7\u6a21\u5f0f\u65f6\uff0c\u4e0d\u5411\u670d\u52a1\u7aef\u53d1\u9001\u6570\u636e\u3002\u9700\u8981\u5173\u95ed\u65e5\u5fd7\u6a21\u5f0f\u3002"),(0,a.kt)("h3",{id:"2-\u670d\u52a1\u7aef\u57cb\u70b9\u62a5\u9519pkix-path-validation-failed-javasecuritycertcertpathvalidatorexception"},"2. \u670d\u52a1\u7aef\u57cb\u70b9\u62a5\u9519\uff1aPKIX path validation failed: java.security.cert.CertPathValidatorException:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," validty check fail\n\u6570\u636e\u9a8c\u8bc1\u9519\u8bef\uff0c\u68c0\u67e5ssl\u8bc1\u4e66\u662f\u5426\u8fc7\u671f\uff0c\u91cd\u65b0\u914d\u7f6e\u8bc1\u4e66\uff0c\u6216\u8005\u91cd\u542fnginx"),(0,a.kt)("h3",{id:"3-java-sdk\u8bf7\u6c42\u62a5\u8bc1\u4e66\u9519\u8befjs\u7aef-\u548c-ios\u7aef-\u8bf7\u6c42\u90fd\u6ca1\u95ee\u9898\u53ef\u4ee5\u6b63\u5e38\u4e0a\u4f20httpsuatcollectgmccnethealthy-check-\u4e5fok\u8be5\u600e\u4e48\u5904\u7406"},"3. JAVA SDK\u8bf7\u6c42\u62a5\u8bc1\u4e66\u9519\u8bef\uff0cjs\u7aef \u548c iOS\u7aef \u8bf7\u6c42\u90fd\u6ca1\u95ee\u9898\uff0c\u53ef\u4ee5\u6b63\u5e38\u4e0a\u4f20\uff0c",(0,a.kt)("a",{parentName:"h3",href:"https://uatcollect.gmcc.net/healthy-check"},"https://uatcollect.gmcc.net/healthy-check")," \u4e5fOK\uff0c\u8be5\u600e\u4e48\u5904\u7406\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," \u53ef\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://www.myssl.cn/tools/check-server-cert.html"},"https://www.myssl.cn/tools/check-server-cert.html")," \u68c0\u67e5\u4e2d\u95f4\u8bc1\u4e66\u662f\u5426\u5b8c\u6574\n\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://www.ssllabs.com/ssltest/analyze.html"},"https://www.ssllabs.com/ssltest/analyze.html"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"https://myssl.com/ssl.html"},"https://myssl.com/ssl.html")," \u5bf9 https\u8fdb\u884c\u6df1\u5ea6\u68c0\u67e5"),(0,a.kt)("h2",{id:"java-sdk"},"Java SDK"),(0,a.kt)("h3",{id:"1-\u62a5\u9519\u5982\u4e0b\u56fe\u6240\u793a\u663e\u793ahost\u8fde\u63a5\u8d85\u65f6\u4f46\u662f\u5728\u6211\u4eec\u81ea\u5df1\u7684demo\u4f7f\u7528\u5ba2\u6237\u7684host\u53d1\u6570\u636e\u662f\u6ca1\u6709\u95ee\u9898"},"1. \u62a5\u9519\u5982\u4e0b\u56fe\u6240\u793a:\u663e\u793ahost\u8fde\u63a5\u8d85\u65f6\uff0c\u4f46\u662f\u5728\u6211\u4eec\u81ea\u5df1\u7684demo\u4f7f\u7528\u5ba2\u6237\u7684host\u53d1\u6570\u636e\u662f\u6ca1\u6709\u95ee\u9898?"),(0,a.kt)("p",null,"Failed to connect xxxxxx, cause connect timed out\n",(0,a.kt)("img",{alt:"Failed to connect",src:r(4057).Z,width:"1920",height:"887"}),"\n",(0,a.kt)("strong",{parentName:"p"},"A:")," \u89e3\u51b3\u65b9\u6cd5\uff1a\u5220\u9664\u6216\u6ce8\u91ca \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u9ed8\u8ba4\u914d\u7f6eproxy\u8bbe\u7f6e"),(0,a.kt)("h3",{id:"2-\u5728pom\u4e2d\u6dfb\u52a0\u4f9d\u8d56\u65f6\u4e3a\u4ec0\u4e48\u627e\u4e0d\u5230-jar\u5305"},"2. \u5728pom\u4e2d\u6dfb\u52a0\u4f9d\u8d56\u65f6\uff0c\u4e3a\u4ec0\u4e48\u627e\u4e0d\u5230 jar\u5305\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," \u9700\u8981\u5728pom \u548c settings.xml \u4e2d\u6dfb\u52a0\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<id>oss.sonatype.org-snapshot</id>\n<url>https://oss.sonatype.org/content/repositories/snapshots</url> \n")),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u6839\u8def\u5f84\u4e0b\u8fdb\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn-U clean compile -DskipTtests")),(0,a.kt)("h3",{id:"3\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u6ca1\u6709\u5728console\u4e2d\u6253\u5370\u65e5\u5fd7\u4fe1\u606f"},"3.\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u6ca1\u6709\u5728console\u4e2d\u6253\u5370\u65e5\u5fd7\u4fe1\u606f\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A"),"\uff1a\u9700\u8981\u5728gio.properties\u914d\u7f6e\u6587\u4ef6\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"run.mode"),"\u5b9a\u4e49\u4e3atest\uff0c\u624d\u80fd\u5728\u8f93\u51fa\u65e5\u5fd7\u3002\n\u4e5f\u53ef\u901a\u8fc7\u5728gio.properties\u4e2d\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"logger.implementation=io.growing.sdk.java.logger.GioLoggerImpl"),"\n\u5b9e\u73b0\u4e00\u4e2a\u65e5\u5fd7\u6253\u5370\u7684\u7c7b\uff0c\u4e5f\u53ef\u8f93\u5165\u65e5\u5fd7"),(0,a.kt)("h3",{id:"4\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u670d\u52a1\u7aef\u6ca1\u6709\u6536\u5230\u6570\u636e"},"4.\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u670d\u52a1\u7aef\u6ca1\u6709\u6536\u5230\u6570\u636e\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A"),":\u9700\u8981\u5728gio.properties\u914d\u7f6e\u6587\u4ef6\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"run.mode"),"\u5b9a\u4e49\u4e3aproduction\uff0c\u624d\u4f1a\u5411\u91c7\u96c6\u670d\u52a1\u5668\u53d1\u9001\u6570\u636e\u3002"),(0,a.kt)("h2",{id:"php"},"PHP"),(0,a.kt)("h3",{id:"1\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u6ca1\u6709\u5728console\u4e2d\u6253\u5370\u65e5\u5fd7\u4fe1\u606f"},"1.\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u6ca1\u6709\u5728console\u4e2d\u6253\u5370\u65e5\u5fd7\u4fe1\u606f\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A"),":\u9700\u8981\u5728\u521d\u59cb\u5316\u65f6\uff0c\u914d\u7f6e\u989d\u5916\u7684\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"$props = array('debug' => true)"),"\u3002"),(0,a.kt)("h3",{id:"2\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u670d\u52a1\u7aef\u6ca1\u6709\u6536\u5230\u6570\u636e"},"2.\u7a0b\u5e8f\u8c03\u7528\u540e\u4e3a\u4ec0\u4e48\u670d\u52a1\u7aef\u6ca1\u6709\u6536\u5230\u6570\u636e\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A"),":\u521d\u59cb\u5316\u65f6\u914d\u7f6e\u4e86\u989d\u5916\u53c2\u6570 debug \u4e3a true\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u6b64\u6a21\u5f0f\u4ec5\u6253\u5370\u65e5\u5fd7\uff0c\u4e0d\u53d1\u9001\u6570\u636e"),"\uff1b\u9700\u8981\u8bbe\u7f6e\u4e3a false\u6216\u4e0d\u8bbe\u7f6e\uff0c\u624d\u4f1a\u5411\u91c7\u96c6\u670d\u52a1\u5668\u53d1\u9001\u6570\u636e\u3002"))}d.isMDXComponent=!0},4057:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/failedtoconnect-4d1f655d24f88fdf81ea2ab7e579fb69.png"}}]);