"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[5635],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>s});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),m=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},l="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=m(r),d=n,s=l["".concat(p,".").concat(d)]||l[d]||g[d]||o;return r?a.createElement(s,i(i({ref:t},u),{},{components:r})):a.createElement(s,i({ref:t},u))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:n,i[1]=c;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const o={title:"opencv",tags:["machine learning framework","interview"],editor:"caroot"},i="cv::cuda::GpuMat\u6570\u636e\u6392\u5e03\u7684\u8bef\u533a",c={unversionedId:"ml/framework/opencv",id:"ml/framework/opencv",title:"opencv",description:"\u5230\u9053\u7406\uff0c\u4e3b\u8981\u505a\u4e86\u8bfb\u53d6\u4e00\u5f20\u56fe\u7247\u8d4b\u7ed9 img\uff0cimg \u662f cpu \u4e0a\u7684 cvMat\uff0c\u7136\u540e\u5c06\u5b83 upload \u7ed9 gimg\uff0c\u5b83\u662f gpu \u4e0a\u7684 cvMat\uff0c\u7136\u540e\u8fd9\u91cc\u8fd8\u6709\u4e2a\u6570\u636e\u662f gpuBuf\uff0c\u5b83\u662f\u5c55\u5e73\u540e\u7684 gpu \u4e0a\u7684\u6570\u636e\u3002",source:"@site/docs/ml/framework/opencv.md",sourceDirName:"ml/framework",slug:"/ml/framework/opencv",permalink:"/docs/ml/framework/opencv",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/framework/opencv.md",tags:[{label:"machine learning framework",permalink:"/docs/tags/machine-learning-framework"},{label:"interview",permalink:"/docs/tags/interview"}],version:"current",lastUpdatedAt:1696954797,formattedLastUpdatedAt:"Oct 10, 2023",frontMatter:{title:"opencv",tags:["machine learning framework","interview"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"mmpretrain\u8bad\u7ec3\u6a21\u578b",permalink:"/docs/ml/framework/mmpretain"},next:{title:"TIDL",permalink:"/docs/ml/framework/tidl"}},p={},m=[],u={toc:m},l="wrapper";function g(e){let{components:t,...o}=e;return(0,n.kt)(l,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cvcudagpumat\u6570\u636e\u6392\u5e03\u7684\u8bef\u533a"},"cv::cuda::GpuMat\u6570\u636e\u6392\u5e03\u7684\u8bef\u533a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'# cpu\u6570\u636e\ncv::Mat img = cv::imread("./data/img.png");\ncv::cvtColor(img, img, cv::COLOR_BGR2RGB, 0);\n\n# gpu\u6570\u636e\nuint8_t *gpuBuf;\ncudaMalloc(&gpuBuf, sizeof(u_int8_t) * img.cols * img.rows * 3);\ncv::cuda::GpuMat gimg;\ngimg.upload(img);\ncv::uint8_t *data = (cv::uint8_t *)gpuBuf;\ncv::cuda::GpuMat dst(cv::Size(img.cols, img.rows), CV_8UC3, data);\ngimg.copyTo(dst);\n\n# \u4e0b\u653ecpu\u6570\u636e\ncv::Mat cimg;\ngimg.download(cimg);\n')),(0,n.kt)("p",null,"\u5230\u9053\u7406\uff0c\u4e3b\u8981\u505a\u4e86\u8bfb\u53d6\u4e00\u5f20\u56fe\u7247\u8d4b\u7ed9 img\uff0cimg \u662f cpu \u4e0a\u7684 cvMat\uff0c\u7136\u540e\u5c06\u5b83 upload \u7ed9 gimg\uff0c\u5b83\u662f gpu \u4e0a\u7684 cvMat\uff0c\u7136\u540e\u8fd9\u91cc\u8fd8\u6709\u4e2a\u6570\u636e\u662f gpuBuf\uff0c\u5b83\u662f\u5c55\u5e73\u540e\u7684 gpu \u4e0a\u7684\u6570\u636e\u3002"),(0,n.kt)("p",null,"\u90a3\u4e48\u8fd9\u4e2a\u65f6\u5019\u4f60\u53ef\u4ee5\u8003\u8651\u4e00\u4e0b\uff0c\u4e0d\u8003\u8651 device \u7684\u8bdd\uff0c\u5355\u7eaf\u4ece\u6570\u503c\u6765\u770b\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"img.data == gimg.data == gpuBuf"),"? \u6210\u7acb\u5417\uff0c\u4f30\u8ba1\u5927\u90e8\u5206\u4eba\u90fd\u4f1a\u89c9\u5f97\u662f\u6210\u7acb\u7684\uff0c\u56e0\u4e3a\u4e2d\u95f4\u54b1\u4eec\u53ea\u662f\u505a\u4e86\u4e00\u4e9b\u5185\u5b58\u62f7\u8d1d\u7684\u64cd\u4f5c\uff0c\u5e76\u6ca1\u6709\u592a\u591a\u7279\u6b8a\u7684\u64cd\u4f5c\uff0c\u6570\u636e\u5e94\u8be5\u662f\u4e0d\u4f1a\u6539\u52a8\u7684\u3002\u6211\u6765\u7ed9\u7b54\u6848\uff0c\u5b83\u4eec\u662f\u4e0d\u5b8c\u5168\u4e00\u81f4\u7684\u3002\u54ea\u4e2a\u6709\u95ee\u9898\u5462\uff0c\u7b54\u6848\u662f gimg.data\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(3038).Z,width:"955",height:"450"})),(0,n.kt)("p",null,"\u5de6\u8fb9\u662f img.data (gpuBuf \u548c img.data \u4e00\u81f4)\uff0c\u53f3\u8fb9\u662f gimg.data\u3002\u53ef\u4ee5\u770b\u5230 gimg.data \u540e\u9762\u6709\u5f88\u591a\u8865\u96f6\uff0c\u8fd9\u662f\u56e0\u4e3a cv::cuda::GpuMat.data \u7684\u6570\u636e\u662f 2048 \u5b57\u8282\u8865\u9f50\u7684\uff0c\u800c\u540c\u4e3a cpu \u7248\u7684 mat.data \u5c31\u4e0d\u4f1a\u6709\u8fd9\u4e2a\u95ee\u9898\uff0c\u8fd9\u4e2a\u8bef\u533a\u5f88\u5bb9\u6613\u8ba9\u4eba\u72af\u9519\u3002\u6bd4\u5982\u4f60\u5982\u679c\u7528 gimg.data \u6765\u4ee3\u66ff gpuBuf \u4f7f\u7528\uff0c\u7ed3\u679c\u5c31\u4f1a\u6709\u95ee\u9898\uff1b\u6216\u8005\u4f60\u53ef\u80fd\u5b9e\u9a8c\u4e86\u5c06 gimg download \u5230 cpu mat (\u4e5f\u5c31\u662f\u4ee3\u7801\u4e2d\u7684 cimg)\uff0c\u7136\u540e\u7ed3\u679c\u53c8\u662f\u6b63\u786e\u7684\uff0c\u5c31\u8ba4\u4e3a gimg.data \u6ca1\u6709\u95ee\u9898\uff0c\u60f3\u5f53\u7136\u5730\u8ba4\u4e3a gimg.data \u7b49\u4ef7\u4e8e cimg.data\uff0c\u8fd9\u6837\u5176\u5b9e\u8fdb\u4e00\u6b65\u5bfc\u81f4\u8fd9\u4e2a\u95ee\u9898\u5e76\u4e0d\u592a\u5bb9\u6613\u88ab\u53d1\u73b0\u3002"))}g.isMDXComponent=!0},3038:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/image-0486d7b74b269aea47b299d4d210ea5f.png"}}]);