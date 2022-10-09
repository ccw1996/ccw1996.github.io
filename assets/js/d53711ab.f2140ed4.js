"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[9854],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3909:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={title:"\u591a\u7ebf\u7a0b\u603b\u7ed3",description:"\u591a\u7ebf\u7a0b\u603b\u7ed3",sidebar_position:3,tags:["cpp","basic"],editor:"caroot"},a=void 0,c={unversionedId:"cpp/multi_thread",id:"cpp/multi_thread",title:"\u591a\u7ebf\u7a0b\u603b\u7ed3",description:"\u591a\u7ebf\u7a0b\u603b\u7ed3",source:"@site/docs/cpp/multi_thread.md",sourceDirName:"cpp",slug:"/cpp/multi_thread",permalink:"/docs/cpp/multi_thread",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cpp/multi_thread.md",tags:[{label:"cpp",permalink:"/docs/tags/cpp"},{label:"basic",permalink:"/docs/tags/basic"}],version:"current",sidebarPosition:3,frontMatter:{title:"\u591a\u7ebf\u7a0b\u603b\u7ed3",description:"\u591a\u7ebf\u7a0b\u603b\u7ed3",sidebar_position:3,tags:["cpp","basic"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"inline \u603b\u7ed3",permalink:"/docs/cpp/inline"},next:{title:"design_model",permalink:"/docs/design_model/"}},p={},l=[{value:"\u521b\u5efa\u7ebf\u7a0b",id:"\u521b\u5efa\u7ebf\u7a0b",level:2}],s={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u521b\u5efa\u7ebf\u7a0b"},"\u521b\u5efa\u7ebf\u7a0b"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"std::thread th1(func1, a1,b1)")," \u521b\u5efa\u4e00\u4e2a\u540d\u4e3ath1\u7684\u7ebf\u7a0b\uff0c\u5e76\u4e14\u4f20\u5165a1,b1\uff0c\u540c\u65f6\u7ebf\u7a0bth1\u5f00\u59cb\u6267\u884c\u3002"),(0,o.kt)("p",null,"\u53ea\u8981\u521b\u5efa\u4e86\u7ebf\u7a0b\u5bf9\u8c61\uff0c\u7ebf\u7a0b\u5c31\u5f00\u59cb\u6267\u884c\u3002\u6240\u4ee5\u4e0d\u5e94\u8be5\u5728\u521b\u5efa\u4e86\u7ebf\u7a0b\u540e\u9a6c\u4e0ajoin, \u8fd9\u6837\u4f1a\u9a6c\u4e0a\u963b\u585e\u4e3b\u7ebf\u7a0b\uff0c\u521b\u5efa\u4e86\u7ebf\u7a0b\u548c\u6ca1\u6709\u521b\u5efa\u4e00\u6837\uff0c\u5e94\u8be5\u5728\u665a\u4e00\u70b9\u7684\u4f4d\u7f6e\u8c03\u7528join"),(0,o.kt)("p",null,"\u5f53\u7ebf\u7a0b\u542f\u52a8\u540e\uff0c\u4e00\u5b9a\u8981\u5728\u548c\u7ebf\u7a0b\u76f8\u5173\u8054\u7684std::thread\u5bf9\u8c61\u9500\u6bc1\u524d\uff0c\u5bf9\u7ebf\u7a0b\u8fd0\u7528join()\u6216\u8005detach()\u65b9\u6cd5\u3002"),(0,o.kt)("p",null,"join()\u4e0edetach()\u90fd\u662fstd::thread\u7c7b\u7684\u6210\u5458\u51fd\u6570\uff0c\u662f\u4e24\u79cd\u7ebf\u7a0b\u963b\u585e\u65b9\u6cd5\uff0c\u4e24\u8005\u7684\u533a\u522b\u662f\u662f\u5426\u7b49\u5f85\u5b50\u7ebf\u7a0b\u6267\u884c\u7ed3\u675f\u3002"),(0,o.kt)("p",null,"\u7b49\u5f85\u8c03\u7528\u7ebf\u7a0b\u8fd0\u884c\u7ed3\u675f\u540e\u5f53\u524d\u7ebf\u7a0b\u518d\u7ee7\u7eed\u8fd0\u884c\uff0c\u4f8b\u5982\uff0c\u4e3b\u51fd\u6570\u4e2d\u6709\u4e00\u6761\u8bed\u53e5th1.join(),\u90a3\u4e48\u6267\u884c\u5230\u8fd9\u91cc\uff0c\u4e3b\u51fd\u6570\u963b\u585e\uff0c\u76f4\u5230\u7ebf\u7a0bth1\u8fd0\u884c\u7ed3\u675f\uff0c\u4e3b\u51fd\u6570\u518d\u7ee7\u7eed\u8fd0\u884c\u3002"))}u.isMDXComponent=!0}}]);