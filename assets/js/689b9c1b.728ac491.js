"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[7788],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4364:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Batch Normalization\u539f\u7406\u4e0e\u5b9e\u6218",tags:["work"]},l=void 0,i={unversionedId:"ml/paper/batch_norm",id:"ml/paper/batch_norm",title:"Batch Normalization\u539f\u7406\u4e0e\u5b9e\u6218",description:"https://zhuanlan.zhihu.com/p/34879333",source:"@site/docs/ml/paper/batch_norm.md",sourceDirName:"ml/paper",slug:"/ml/paper/batch_norm",permalink:"/docs/ml/paper/batch_norm",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/paper/batch_norm.md",tags:[{label:"work",permalink:"/docs/tags/work"}],version:"current",lastUpdatedAt:1696954797,formattedLastUpdatedAt:"Oct 10, 2023",frontMatter:{title:"Batch Normalization\u539f\u7406\u4e0e\u5b9e\u6218",tags:["work"]},sidebar:"tutorialSidebar",previous:{title:"RepVGG \u8be6\u89e3",permalink:"/docs/ml/paper/RepVGG"},next:{title:"quantize",permalink:"/docs/ml/quantize/"}},p={},c=[{value:"\u4e0a\u5c42\u7f51\u7edc\u9700\u8981\u4e0d\u505c\u8c03\u6574\u6765\u9002\u5e94\u8f93\u5165\u6570\u636e\u5206\u5e03\u7684\u53d8\u5316\uff0c\u5bfc\u81f4\u7f51\u7edc\u5b66\u4e60\u901f\u5ea6\u7684\u964d\u4f4e",id:"\u4e0a\u5c42\u7f51\u7edc\u9700\u8981\u4e0d\u505c\u8c03\u6574\u6765\u9002\u5e94\u8f93\u5165\u6570\u636e\u5206\u5e03\u7684\u53d8\u5316\u5bfc\u81f4\u7f51\u7edc\u5b66\u4e60\u901f\u5ea6\u7684\u964d\u4f4e",level:2},{value:"\u7f51\u7edc\u7684\u8bad\u7ec3\u8fc7\u7a0b\u5bb9\u6613\u9677\u5165\u68af\u5ea6\u9971\u548c\u533a\uff0c\u51cf\u7f13\u7f51\u7edc\u6536\u655b\u901f\u5ea6",id:"\u7f51\u7edc\u7684\u8bad\u7ec3\u8fc7\u7a0b\u5bb9\u6613\u9677\u5165\u68af\u5ea6\u9971\u548c\u533a\u51cf\u7f13\u7f51\u7edc\u6536\u655b\u901f\u5ea6",level:2}],u={toc:c},m="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/34879333"},"https://zhuanlan.zhihu.com/p/34879333"))),(0,a.kt)("h1",{id:"internal-covariate-shift\u4f1a\u5e26\u6765\u4ec0\u4e48\u95ee\u9898"},"Internal Covariate Shift\u4f1a\u5e26\u6765\u4ec0\u4e48\u95ee\u9898\uff1f"),(0,a.kt)("h2",{id:"\u4e0a\u5c42\u7f51\u7edc\u9700\u8981\u4e0d\u505c\u8c03\u6574\u6765\u9002\u5e94\u8f93\u5165\u6570\u636e\u5206\u5e03\u7684\u53d8\u5316\u5bfc\u81f4\u7f51\u7edc\u5b66\u4e60\u901f\u5ea6\u7684\u964d\u4f4e"},"\u4e0a\u5c42\u7f51\u7edc\u9700\u8981\u4e0d\u505c\u8c03\u6574\u6765\u9002\u5e94\u8f93\u5165\u6570\u636e\u5206\u5e03\u7684\u53d8\u5316\uff0c\u5bfc\u81f4\u7f51\u7edc\u5b66\u4e60\u901f\u5ea6\u7684\u964d\u4f4e"),(0,a.kt)("p",null,"\u6211\u4eec\u5728\u4e0a\u9762\u63d0\u5230\u4e86\u68af\u5ea6\u4e0b\u964d\u7684\u8fc7\u7a0b\u4f1a\u8ba9\u6bcf\u4e00\u5c42\u7684\u53c2\u6570wl\u548cbl\u53d1\u751f\u53d8\u5316\uff0c\u8fdb\u800c\u4f7f\u5f97\u6bcf\u4e00\u5c42\u7684\u7ebf\u6027\u4e0e\u975e\u7ebf\u6027\u8ba1\u7b97\u7ed3\u679c\u5206\u5e03\u4ea7\u751f\u53d8\u5316\u3002\u540e\u5c42\u7f51\u7edc\u5c31\u8981\u4e0d\u505c\u5730\u53bb\u9002\u5e94\u8fd9\u79cd\u5206\u5e03\u53d8\u5316\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u4f1a\u4f7f\u5f97\u6574\u4e2a\u7f51\u7edc\u7684\u5b66\u4e60\u901f\u7387\u8fc7\u6162\u3002"),(0,a.kt)("h2",{id:"\u7f51\u7edc\u7684\u8bad\u7ec3\u8fc7\u7a0b\u5bb9\u6613\u9677\u5165\u68af\u5ea6\u9971\u548c\u533a\u51cf\u7f13\u7f51\u7edc\u6536\u655b\u901f\u5ea6"},"\u7f51\u7edc\u7684\u8bad\u7ec3\u8fc7\u7a0b\u5bb9\u6613\u9677\u5165\u68af\u5ea6\u9971\u548c\u533a\uff0c\u51cf\u7f13\u7f51\u7edc\u6536\u655b\u901f\u5ea6"),(0,a.kt)("h1",{id:"layer-normalization"},"Layer Normalization"),(0,a.kt)("p",null,"\u7528\u4e8e\u89e3\u51b3BN\u65e0\u6cd5\u5f88\u597d\u5730\u5904\u7406\u6587\u672c\u6570\u636e\u957f\u5ea6\u4e0d\u4e00\u7684\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\uff0c\u901a\u5e38\u4f1a\u5bf9\u8bed\u8a00\u7c7b\u7684\u6570\u636e\u8bbe\u7f6e\u4e00\u4e2amax_len\uff0c\u591a\u88c1\u5c11pad\uff0c\u8fd9\u65f6\u6ca1\u6709\u4e0a\u9762\u6240\u8bf4\u7684\u8fd9\u4e2a\u95ee\u9898\u3002\u4f46\u8fd9\u91cc\u6211\u4eec\u8ba8\u8bba\u7684\u662f\u7406\u8bba\u4e0a\u7684\u60c5\u51b5\uff0c\u5373\u7406\u8bba\u4e0a\uff0c\u8bf8\u5982Transformer\u8fd9\u6837\u7684\u6a21\u578b\uff0c\u662f\u652f\u6301\u4efb\u610f\u957f\u5ea6\u7684\u8f93\u5165\u6570\u636e\u7684"),(0,a.kt)("p",null,"\u957f\u77ed\u4e0d\u4e00\u7684\u60c5\u51b5\u4e0b\uff0c\u6587\u672c\u4e2d\u7684\u67d0\u4e9b\u4f4d\u7f6e\u6ca1\u6709\u8db3\u591f\u7684batch_size\u7684\u6570\u636e\uff0c\u4f7f\u5f97\u8ba1\u7b97\u51fa\u6765\u7684\u5747\u503c\u548c\u65b9\u5dee\u4ea7\u751f\u504f\u5dee\u3002"),(0,a.kt)("p",null,"\u6574\u4f53\u505a\u6cd5\u7c7b\u4f3c\u4e8eBN\uff0c\u4e0d\u540c\u7684\u662fLN\u4e0d\u662f\u5728\u7279\u5f81\u95f4\u8fdb\u884c\u6807\u51c6\u5316\u64cd\u4f5c\uff08\u6a2a\u5411\u64cd\u4f5c\uff09\uff0c\u800c\u662f\u5728\u6574\u6761\u6570\u636e\u95f4\u8fdb\u884c\u6807\u51c6\u5316\u64cd\u4f5c\uff08\u7eb5\u5411\u64cd\u4f5c\uff09\u3002\u5728\u56fe\u50cf\u95ee\u9898\u4e2d\uff0cLN\u662f\u6307\u5bf9\u4e00\u6574\u5f20\u56fe\u7247\u8fdb\u884c\u6807\u51c6\u5316\u5904\u7406\uff0c\u5373\u5728\u4e00\u5f20\u56fe\u7247\u6240\u6709channel\u7684pixel\u8303\u56f4\u5185\u8ba1\u7b97\u5747\u503c\u548c\u65b9\u5dee\u3002\u800c\u5728NLP\u7684\u95ee\u9898\u4e2d\uff0cLN\u662f\u6307\u5728\u4e00\u4e2a\u53e5\u5b50\u7684\u4e00\u4e2atoken\u7684\u8303\u56f4\u5185\u8fdb\u884c\u6807\u51c6\u5316\u3002"))}s.isMDXComponent=!0}}]);