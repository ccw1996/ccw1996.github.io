"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[5053],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={title:"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f",description:"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f",sidebar_position:4,tags:["design","interview"],editor:"caroot"},a=void 0,l={unversionedId:"design_model/Simple_Factory",id:"design_model/Simple_Factory",title:"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f",description:"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f",source:"@site/docs/design_model/Simple_Factory.md",sourceDirName:"design_model",slug:"/design_model/Simple_Factory",permalink:"/docs/design_model/Simple_Factory",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/design_model/Simple_Factory.md",tags:[{label:"design",permalink:"/docs/tags/design"},{label:"interview",permalink:"/docs/tags/interview"}],version:"current",sidebarPosition:4,frontMatter:{title:"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f",description:"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f",sidebar_position:4,tags:["design","interview"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"\u5355\u4f8b\u6a21\u5f0f",permalink:"/docs/design_model/Singleton"},next:{title:"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f",permalink:"/docs/design_model/Abstract_Factory"}},c={},s=[{value:"class diagram",id:"class-diagram",level:2},{value:"\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f",id:"\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"class-diagram"},"class diagram"),(0,o.kt)("p",null,"\u7b80\u5355\u5de5\u5382\u628a\u5b9e\u4f8b\u5316\u7684\u64cd\u4f5c\u5355\u72ec\u653e\u5230\u4e00\u4e2a\u7c7b\u4e2d\uff0c\u8fd9\u4e2a\u7c7b\u5c31\u6210\u4e3a\u7b80\u5355\u5de5\u5382\u7c7b\uff0c\u8ba9\u7b80\u5355\u5de5\u5382\u7c7b\u6765\u51b3\u5b9a\u5e94\u8be5\u7528\u54ea\u4e2a\u5177\u4f53\u5b50\u7c7b\u6765\u5b9e\u4f8b\u5316\u3002"),(0,o.kt)("p",null,"\u8fd9\u6837\u505a\u80fd\u628a\u5ba2\u6237\u7c7b\u548c\u5177\u4f53\u5b50\u7c7b\u7684\u5b9e\u73b0\u89e3\u8026\uff0c\u5ba2\u6237\u7c7b\u4e0d\u518d\u9700\u8981\u77e5\u9053\u6709\u54ea\u4e9b\u5b50\u7c7b\u4ee5\u53ca\u5e94\u5f53\u5b9e\u4f8b\u5316\u54ea\u4e2a\u5b50\u7c7b\u3002\u5ba2\u6237\u7c7b\u5f80\u5f80\u6709\u591a\u4e2a\uff0c\u5982\u679c\u4e0d\u4f7f\u7528\u7b80\u5355\u5de5\u5382\uff0c\u90a3\u4e48\u6240\u6709\u7684\u5ba2\u6237\u7c7b\u90fd\u8981\u77e5\u9053\u6240\u6709\u5b50\u7c7b\u7684\u7ec6\u8282\u3002\u800c\u4e14\u4e00\u65e6\u5b50\u7c7b\u53d1\u751f\u6539\u53d8\uff0c\u4f8b\u5982\u589e\u52a0\u5b50\u7c7b\uff0c\u90a3\u4e48\u6240\u6709\u7684\u5ba2\u6237\u7c7b\u90fd\u8981\u8fdb\u884c\u4fee\u6539\u3002"),(0,o.kt)("h2",{id:"\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f"},"\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f"),(0,o.kt)("p",null,"\u5de5\u5382\u65b9\u6cd5\u5c06\u521b\u5efa\u4ea7\u54c1\u7684\u4ee3\u7801\u4e0e\u5b9e\u9645\u4f7f\u7528\u4ea7\u54c1\u7684\u4ee3\u7801\u5206\u79bb\uff0c \u4ece\u800c\u80fd\u5728\u4e0d\u5f71\u54cd\u5176\u4ed6\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\u6269\u5c55\u4ea7\u54c1\u521b\u5efa\u90e8\u5206\u4ee3\u7801\u3002"))}u.isMDXComponent=!0}}]);