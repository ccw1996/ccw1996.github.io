"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[525],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),c=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return i.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return t?i.createElement(f,o(o({ref:n},s),{},{components:t})):i.createElement(f,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var c=2;c<l;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1167:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var i=t(7462),r=(t(7294),t(3905));const l={title:"inline \u603b\u7ed3",description:"inline \u603b\u7ed3",sidebar_position:2,tags:["cpp","basic"],editor:"caroot"},o=void 0,a={unversionedId:"cpp/inline",id:"cpp/inline",title:"inline \u603b\u7ed3",description:"inline \u603b\u7ed3",source:"@site/docs/cpp/inline.md",sourceDirName:"cpp",slug:"/cpp/inline",permalink:"/docs/cpp/inline",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cpp/inline.md",tags:[{label:"cpp",permalink:"/docs/tags/cpp"},{label:"basic",permalink:"/docs/tags/basic"}],version:"current",sidebarPosition:2,frontMatter:{title:"inline \u603b\u7ed3",description:"inline \u603b\u7ed3",sidebar_position:2,tags:["cpp","basic"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"\u603b\u7ed3 C/C++ \u77e5\u8bc6",permalink:"/docs/cpp/summarycpp"},next:{title:"index",permalink:"/docs/ml/"}},p={},c=[{value:"\u7f16\u8bd1\u5668\u5bf9inline\u5904\u7406",id:"\u7f16\u8bd1\u5668\u5bf9inline\u5904\u7406",level:2},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9",level:2},{value:"\u4f18\u70b9",id:"\u4f18\u70b9",level:3},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:3}],s={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u7f16\u8bd1\u5668\u5bf9inline\u5904\u7406"},"\u7f16\u8bd1\u5668\u5bf9inline\u5904\u7406"),(0,r.kt)("p",null,"\u7f16\u8bd1\u5668\u5728\u7f16\u8bd1\u9636\u6bb5\u5b8c\u6210\u5bf9 inline \u51fd\u6570\u7684\u5904\u7406\uff0c\u5373\u5bf9 inline \u51fd\u6570\u7684\u8c03\u7528\u66ff\u6362\u4e3a\u51fd\u6570\u7684\u672c\u4f53\u3002\u4f46 inline \u5173\u952e\u5b57\u5bf9\u7f16\u8bd1\u5668\u53ea\u662f\u4e00\u79cd\u5efa\u8bae\uff0c\u7f16\u8bd1\u5668\u53ef\u4ee5\u8fd9\u6837\u53bb\u505a\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u53bb\u505a\u3002\u4ece\u903b\u8f91\u4e0a\u6765\u8bf4\uff0c\u7f16\u8bd1\u5668\u5bf9 inline \u51fd\u6570\u7684\u5904\u7406\u6b65\u9aa4\u4e00\u822c\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5c06 inline \u51fd\u6570\u4f53\u590d\u5236\u5230inline\u51fd\u6570\u8c03\u7528\u5904\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u4e3a\u6240\u7528 inline \u51fd\u6570\u4e2d\u7684\u5c40\u90e8\u53d8\u91cf\u5206\u914d\u5185\u5b58\u7a7a\u95f4\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5c06 inline \u51fd\u6570\u7684\u7684\u8f93\u5165\u53c2\u6570\u548c\u8fd4\u56de\u503c\u6620\u5c04\u5230\u8c03\u7528\u65b9\u6cd5\u7684\u5c40\u90e8\u53d8\u91cf\u7a7a\u95f4\u4e2d\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c inline \u51fd\u6570\u6709\u591a\u4e2a\u8fd4\u56de\u70b9\uff0c\u5c06\u5176\u8f6c\u53d8\u4e3a inline \u51fd\u6570\u4ee3\u7801\u5757\u672b\u5c3e\u7684\u5206\u652f\uff08\u4f7f\u7528GOTO\uff09\u3002")),(0,r.kt)("p",null,"\u51fd\u6570\u5b9a\u4e49\u65f6\uff0c\u5728\u8fd4\u56de\u7c7b\u578b\u524d\u52a0\u4e0a\u5173\u952e\u5b57 inline \u5373\u628a\u51fd\u6570\u6307\u5b9a\u4e3a\u5185\u8054\uff0c\u51fd\u6570\u7533\u660e\u65f6\u53ef\u52a0\u4e5f\u53ef\u4e0d\u52a0\u3002"),(0,r.kt)("h2",{id:"\u4f18\u7f3a\u70b9"},"\u4f18\u7f3a\u70b9"),(0,r.kt)("h3",{id:"\u4f18\u70b9"},"\u4f18\u70b9"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5185\u8054\u51fd\u6570\u540c\u5b8f\u51fd\u6570\u4e00\u6837\u5c06\u5728\u88ab\u8c03\u7528\u5904\u8fdb\u884c\u4ee3\u7801\u5c55\u5f00\uff0c\u7701\u53bb\u4e86\u53c2\u6570\u538b\u6808\u3001\u6808\u5e27\u5f00\u8f9f\u4e0e\u56de\u6536\uff0c\u7ed3\u679c\u8fd4\u56de\u7b49\uff0c\u4ece\u800c\u63d0\u9ad8\u7a0b\u5e8f\u8fd0\u884c\u901f\u5ea6\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5185\u8054\u51fd\u6570\u76f8\u6bd4\u5b8f\u51fd\u6570\u6765\u8bf4\uff0c\u5728\u4ee3\u7801\u5c55\u5f00\u65f6\uff0c\u4f1a\u505a\u5b89\u5168\u68c0\u67e5\u6216\u81ea\u52a8\u7c7b\u578b\u8f6c\u6362\uff08\u540c\u666e\u901a\u51fd\u6570\uff09\uff0c\u800c\u5b8f\u5b9a\u4e49\u5219\u4e0d\u4f1a\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u7c7b\u4e2d\u58f0\u660e\u540c\u65f6\u5b9a\u4e49\u7684\u6210\u5458\u51fd\u6570\uff0c\u81ea\u52a8\u8f6c\u5316\u4e3a\u5185\u8054\u51fd\u6570\uff0c\u56e0\u6b64\u5185\u8054\u51fd\u6570\u53ef\u4ee5\u8bbf\u95ee\u7c7b\u7684\u6210\u5458\u53d8\u91cf\uff0c\u5b8f\u5b9a\u4e49\u5219\u4e0d\u80fd\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5185\u8054\u51fd\u6570\u5728\u8fd0\u884c\u65f6\u53ef\u8c03\u8bd5\uff0c\u800c\u5b8f\u5b9a\u4e49\u4e0d\u53ef\u4ee5\u3002")),(0,r.kt)("h3",{id:"\u7f3a\u70b9"},"\u7f3a\u70b9"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4ee3\u7801\u81a8\u80c0"),(0,r.kt)("li",{parentName:"ol"},"inline \u51fd\u6570\u65e0\u6cd5\u968f\u7740\u51fd\u6570\u5e93\u5347\u7ea7\u800c\u5347\u7ea7\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u662f\u5426\u5185\u8054\uff0c\u7a0b\u5e8f\u5458\u4e0d\u53ef\u63a7\u3002")))}u.isMDXComponent=!0}}]);