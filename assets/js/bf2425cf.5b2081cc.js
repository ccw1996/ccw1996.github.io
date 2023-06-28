"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[400],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>b});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(t),f=o,b=s["".concat(i,".").concat(f)]||s[f]||d[f]||c;return t?n.createElement(b,a(a({ref:r},u),{},{components:t})):n.createElement(b,a({ref:r},u))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=f;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p[s]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<c;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7161:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>p,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const c={title:"\u5341\u516d\u8fdb\u5236\u8f6cdouble",description:"\u5341\u516d\u8fdb\u5236\u8f6cdouble",tags:["cpp","work"],editor:"caroot"},a=void 0,p={unversionedId:"cpp/work/hex2double",id:"cpp/work/hex2double",title:"\u5341\u516d\u8fdb\u5236\u8f6cdouble",description:"\u5341\u516d\u8fdb\u5236\u8f6cdouble",source:"@site/docs/cpp/work/hex2double.md",sourceDirName:"cpp/work",slug:"/cpp/work/hex2double",permalink:"/docs/cpp/work/hex2double",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cpp/work/hex2double.md",tags:[{label:"cpp",permalink:"/docs/tags/cpp"},{label:"work",permalink:"/docs/tags/work"}],version:"current",frontMatter:{title:"\u5341\u516d\u8fdb\u5236\u8f6cdouble",description:"\u5341\u516d\u8fdb\u5236\u8f6cdouble",tags:["cpp","work"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"FPS\u8ba1\u7b97\u65b9\u5f0f",permalink:"/docs/cpp/work/fps_calc"},next:{title:"cuda",permalink:"/docs/cuda/"}},i={},l=[],u={toc:l},s="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(s,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <stdio.h>\n\nint main() {\n    double x = 123.45;\n    char* p = (char*)(&x);\n    for (int i = sizeof(double) - 1; i >= 0; --i) {\n        for (int j = 7; j >= 0; --j) {\n            printf(\"%c\", '0' + ((p[i] >> j) & 1));\n        }\n    }\n    return 0;\n}\n")))}d.isMDXComponent=!0}}]);