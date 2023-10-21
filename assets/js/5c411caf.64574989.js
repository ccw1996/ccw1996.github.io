"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[4673],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function _(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},E=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=_(e,["components","mdxType","originalType","parentName"]),m=l(t),E=a,d=m["".concat(i,".").concat(E)]||m[E]||s[E]||o;return t?r.createElement(d,c(c({ref:n},p),{},{components:t})):r.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=E;var _={};for(var i in n)hasOwnProperty.call(n,i)&&(_[i]=n[i]);_.originalType=e,_[m]="string"==typeof e?e:a,c[1]=_;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}E.displayName="MDXCreateElement"},6203:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>_,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={title:"TIDL",tags:["work"],editor:"caroot"},c=void 0,_={unversionedId:"ml/framework/tidl",id:"ml/framework/tidl",title:"TIDL",description:"X86 int8 im2col+gemm",source:"@site/docs/ml/framework/tidl.md",sourceDirName:"ml/framework",slug:"/ml/framework/tidl",permalink:"/docs/ml/framework/tidl",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/framework/tidl.md",tags:[{label:"work",permalink:"/docs/tags/work"}],version:"current",lastUpdatedAt:1697901933,formattedLastUpdatedAt:"Oct 21, 2023",frontMatter:{title:"TIDL",tags:["work"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"opencv",permalink:"/docs/ml/framework/opencv"},next:{title:"onnx\u64cd\u4f5c",permalink:"/docs/ml/onnx"}},i={},l=[],p={toc:l},m="wrapper";function s(e){let{components:n,...o}=e;return(0,a.kt)(m,(0,r.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"X86 int8 im2col+gemm\n\u6211\u7684\u505a\u6cd5\n8\u4f4d\u4e588\u4f4d\uff0c\u752832\u4f4d\u505a\u4e58\u52a0\u64cd\u4f5c\n\u73b0\u6709\u7684\u6307\u4ee4\n",(0,a.kt)("inlineCode",{parentName:"p"},"_mm256_maddubs_epi16"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"_mm256_madd_epi16"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"_mm256_add_epi32"),"\n\u4f46\u662f\u7b2c\u4e00\u4e2a\u6307\u4ee4\u53ea\u80fd\u7528\u4e8eu8",(0,a.kt)("em",{parentName:"p"},"s8\n\u5982\u679c\u6211\u8981s8"),"s8\u5462\n\u5728\u8fd0\u884c\u65f6\uff0c\u8d1f\u503c\u52a0128\u505a\u8865\u507f\u3002\u8fd8\u662f\u4f1a\u53ef\u80fd\u6ea2\u51fa\uff0c\u7528\u7f29\u653e\u56e0\u5b50\u518d\u53bb\u505a\u8865\u507f\uff0c0.5\n",(0,a.kt)("a",{parentName:"p",href:"https://www.intel.com/content/www/us/en/develop/documentation/onednn-developer-guide-and-reference/top/advanced-topics/nuances-of-int8-computations.html"},"https://www.intel.com/content/www/us/en/develop/documentation/onednn-developer-guide-and-reference/top/advanced-topics/nuances-of-int8-computations.html"),"\nsoftmax\u7b97\u5b50\n\u4e0b\u9762\u7684\u516c\u5f0f\u4e2d exp \u662f\u9010\u5143\u7d20\u64cd\u4f5c\uff0c\u5206\u6bcd\u4e3a\u5bf9\u6574\u4e2a\u5411\u91cf\u6c42\u548c\u3002\nhalide\nHalide\u5c06\u4ee3\u7801\u5206\u4e3aAlgorithm\u548cSchedule\u4e24\u4e2a\u90e8\u5206\uff0cAlgorithm\u90e8\u5206\u4ec5\u4ec5\u63cf\u8ff0\u7b97\u6cd5\u7684\u529f\u80fd\uff0c\u4e0d\u8fdb\u884c\u5b9e\u9645\u7684\u5b9e\u73b0\uff1bSchedule\u90e8\u5206\u6307\u5b9a\u7b97\u6cd5\u5728\u4f55\u65f6\u4f55\u5904\u8fdb\u884c\u8ba1\u7b97\u3002\u4f7f\u5f97\u6bd4\u8d77\u7528\u4f20\u7edf\u8bed\u8a00\u7f16\u5199\u7684\u4ee3\u7801\uff0c\u7528Halide\u7f16\u5199\u7684\u7a0b\u5e8f\u4e0d\u4ec5\u66f4\u5bb9\u6613\u9605\u8bfb\u3001\u7f16\u5199\u548c\u4fee\u6539\uff0c\u800c\u4e14 Halide\u80fd\u591f\u81ea\u52a8\u4f18\u5316\u4ee3\u7801\uff0c\u800c\u4eba\u5de5\u5bf9\u4ee3\u7801\u8fdb\u884c\u4f18\u5316\u52a0\u901f\n",(0,a.kt)("strong",{parentName:"p"},"Halide\u7684\u7279\u70b9\u662f\u5176\u56fe\u50cf\u7b97\u6cd5\u7684\u8ba1\u7b97\u7684\u5b9e\u73b0\uff08Function\u548cExpression\uff09\u548c\u8fd9\u4e9b\u8ba1\u7b97\u5728\u8ba1\u7b97\u786c\u4ef6\u5355\u5143\u4e0a\u7684\u8c03\u5ea6\uff08Schedule\uff09\u662f\u5206\u79bb\u7684"),"\uff0c\u5176\u8c03\u5ea6\u4ee5Function\u4e3a\u5355\u4f4d\u3002\u6700\u7ec8\u5c06\u6574\u4e2a\u56fe\u50cf\u7b97\u6cd5\u8f6c\u6362\u4e3a\u9ad8\u6548\u7387\u7684\u591a\u5c42for\u5faa\u73af\uff0cfor\u5faa\u73af\u7684\u5206\u90e8\u6570\u636e\u8303\u56f4\u5212\u5206\u548c\u6570\u636e\u52a0\u8f7d\u90fd\u662f\u7531Halide\u6765\u5b8c\u6210\u7684\uff0c\u800c\u4e14\u53ef\u4ee5\u5b9e\u73b0\u6570\u636e\u7684\u52a0\u8f7d\u548c\u7b97\u6cd5\u8ba1\u7b97\u7684Overlay\uff0c\u63a9\u76d6\u6570\u636e\u52a0\u8f7d\u5bfc\u81f4\u7684\u5ef6\u8fdf\u3002\nC7x\n\u662f\u4e00\u5757\u5411\u91cfDSP\uff0c8TOPS\n\u4e0eC66\u7684\u533a\u522b\n\u5177\u6709\u795e\u7ecf\u7f51\u7edc\u52a0\u901f\u5668\n\u5177\u5907\u66f4\u5bbd\u7684SIMD\n\u66f4\u591a\u7684\u9ad8\u7ea7ISA\u6307\u4ee4\u548c\u9644\u52a0\u6307\u4ee4\u5355\u5143\nTI\u7684\u4f18\u5316\u5efa\u8bae\n\u603b\u7684\u6765\u8bf4\u4f7f\u7528 C++ \u662f OK \u7684\u3002\n\u53ef\u4ee5\u653e\u5fc3\u4f7f\u7528 C++ \u7684\u91cd\u8f7d\u529f\u80fd\u3002\n\u4e0d\u7528\u592a\u62c5\u5fc3\u6a21\u677f\u7684\u4f7f\u7528\u3002\n\u4f7f\u7528\xa0",(0,a.kt)("em",{parentName:"p"},"class\xa0"),"\u65f6\u8981\u5c0f\u5fc3\uff0c\u5c24\u5176\u6d89\u53ca\u7ee7\u627f\u4e0e\u6d3e\u751f\u3002\n\u4f7f\u7528 C++ \u65f6\u5c3d\u91cf\u4f7f\u7528\xa0",(0,a.kt)("em",{parentName:"p"},"malloc\xa0"),"\u4ee3\u66ff\xa0",(0,a.kt)("em",{parentName:"p"},"new"),"\uff0c\u56e0\u4e3a\xa0",(0,a.kt)("em",{parentName:"p"},"new\xa0"),"\u6d88\u8017\u8d44\u6e90\u6bd4\xa0",(0,a.kt)("em",{parentName:"p"},"malloc\xa0"),"\u9ad8 (\u4e0d\u8fc7\u4e5f\u4e0d\u4f1a\u9ad8\u592a\u591a)\u3002\u57fa\u4e8e\u540c\u6837\u7684\u7406\u7531\u5c3d\u91cf\u4e0d\u4f7f\u7528 std \u5e93 (\u8c01\u77e5\u9053\u91cc\u9762\u7528\u4e86\u591a\u5c11\xa0",(0,a.kt)("em",{parentName:"p"},"new"),"\xa0\u5462)\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \xa0 \u5411\u91cf\u6570\u636e\u7c7b\u578b\n    \u5411\u91cf\u6570\u636e\u7c7b\u578b\u540d\u7531\u6807\u91cf\u6570\u636e\u7c7b\u578b\u540d\u53ca\u5143\u7d20\u4e2a\u6570\u7ec4\u6210\u3002\u6570\u636e\u7c7b\u578b\u540d\u8868\u793a\u5143\u7d20\u6240\u5360\u5185\u5b58\u7a7a\u95f4\u4ee5\u53ca\u662f\u5426\u6709\u7b26\u53f7\uff0c\u5143\u7d20\u4e2a\u6570\u4e3a 2, 3, 4, 8, 16, 32, \u6216 64\u3002\n\n    | \u5143\u7d20\u7c7b\u578b\u540d | \u5143\u7d20\u7c7b\u578b\u8bf4\u660e | \u5411\u91cf\u6570\u636e\u7c7b\u578b |\n    |---|---|---|\n    | char | 8 \u6bd4\u7279\u6709\u7b26\u53f7\u6574\u6570 | char2, char3, char4, char8, char16, char32, char64 |\n    | uchar | 8 \u6bd4\u7279\u65e0\u7b26\u53f7\u6574\u6570 | uchar2, uchar3, uchar4, uchar8, uchar16, uchar32, uchar64 |\n    | short | 16 \u6bd4\u7279\u6709\u7b26\u53f7\u6574\u6570 | short2, short3, short4, short8, short16, short32 |\n    | ushort | 16 \u6bd4\u7279\u65e0\u7b26\u53f7\u6574\u6570 | ushort2, ushort3, ushort4, ushort8, ushort16, ushort32 |\n    | int | 32 \u6bd4\u7279\u6709\u7b26\u53f7\u6574\u6570 | int2, int3, int4, int8, int16 |\n    | uint | 32 \u6bd4\u7279\u65e0\u7b26\u53f7\u6574\u6570 | uint2, uint3, uint4, uint8, uint16 |\n    | long | 64 \u6bd4\u7279\u6709\u7b26\u53f7\u6574\u6570 | long2, long3, long4, long8 |\n    | ulong | 64 \u6bd4\u7279\u65e0\u7b26\u53f7\u6574\u6570 | ulong2, ulong3, ulong4, ulong8 |\n    | float | 32 \u6bd4\u7279\u5355\u7cbe\u5ea6\u6d6e\u70b9\u6570 | float2, float3, float4, float8, float16 |\n    | double | 64 \u6bd4\u7279\u53cc\u7cbe\u5ea6\u6d6e\u70b9\u6570 | double2, double3, double4, double8 |\n    | cchar | \u5b9e\u90e8\u548c\u865a\u90e8\u5747\u4e3a 8 \u6bd4\u7279\u6709\u7b26\u53f7\u6574\u6570 | cchar2, cchar4, cchar8, cchar16, cchar32 |\n    | cshort | \u5b9e\u90e8\u548c\u865a\u90e8\u5747\u4e3a 16 \u6bd4\u7279\u6709\u7b26\u53f7\u6574\u6570 | cshort2, cshort4, cshort8, cshort16 |\n    | cint | \u5b9e\u90e8\u548c\u865a\u90e8\u5747\u4e3a 32 \u6bd4\u7279\u6709\u7b26\u53f7\u6574\u6570 | cint2, cint4, cint8 |\n    | clong | \u5b9e\u90e8\u548c\u865a\u90e8\u5747\u4e3a 64 \u6bd4\u7279\u6709\u7b26\u53f7\u6574\u6570 | clong2, clong4 |\n    | cfloat | \u5b9e\u90e8\u548c\u865a\u90e8\u5747\u4e3a 32 \u6bd4\u7279\u5355\u7cbe\u5ea6\u6d6e\u70b9\u6570 | cfloat2, cfloat4, cfloat8 |\n    | cdouble | \u5b9e\u90e8\u548c\u865a\u90e8\u5747\u4e3a 64 \u6bd4\u7279\u53cc\u7cbe\u5ea6\u6d6e\u70b9\u6570 | cdouble2, cdouble4 |\n    \u5982\u679c\u5360\u7528\u7684\u5185\u5b58\u5927\u5c0f\u8d85\u8fc7 64 \u6bd4\u7279\uff0c\u5219\u5728\u5185\u5b58\u4e2d\u6309\u7167 8 \u5b57\u8282\u5bf9\u9f50 (\u5373\u5360\u7528\u7a7a\u95f4\u7684\u9996\u5730\u5740\u80fd\u88ab 8 \u6574\u9664)\uff1b\u5982\u679c\u5360\u7528\u5185\u5b58\u5927\u5c0f\u4e0d\u8d85\u8fc7 64 \u6bd4\u7279\uff0c\u5219\u5728\u5185\u5b58\u4e2d\u6309\u7167\u5176\u5360\u636e\u7684\u5b57\u8282\u6570\u5bf9\u9f50 (\u4f8b\u5982\xa0_short2\xa0_\u5360\u636e 4 \u5b57\u8282\uff0c\u5728\u5185\u5b58\u4e2d\u6309\u7167 4 \u5b57\u8282\u5bf9\u9f50)\u3002\n    ## \u591a\u7ef4\u6570\u636e\u7684\u5b58\u50a8\u53ca\u904d\u5386\n        \u4e00\u6b21\u8bfb\u53d6\u591a\u4e2a\u6570\u636e\u4ee5\u914d\u5408 SIMD (\u4f8b\u5982\u4e00\u6b21\u8bfb\u53d6 64 \u5b57\u8282)\uff0c\u8fd9\u4e9b\u6570\u636e\u5728\u5185\u5b58\u4e2d\u8fde\u7eed\u3002\n        \u4e00\u6b21\u8bfb\u53d6\u7684\u6570\u636e\u4e0d\u201c\u8de8\u884c\u201d\u3002\u8fd9\u91cc\u7684\u201c\u884c\u201d\u5b9a\u4e49\u4e3a\u4e0a\u56fe\u4e2d\u7684\u6a59\u8272\u77e9\u5f62\u6846\uff0c\u5373\u4e00\u884c\u5305\u542b\xa0_N0_\xa0\u4e2a\u6570\u636e\u3002\u7531\u4e8e\u8981\u6c42\u8bfb\u53d6\u7684\u6570\u636e\u5728\u5185\u5b58\u4e2d\u8fde\u7eed\uff0c\u5982\u679c\u5b58\u5728\u7528\u4e8e\u5b57\u8282\u5bf9\u9f50\u7684\xa0_Buf_\xa0(\u4e0a\u56fe\u4e2d\u7684\u7070\u8272\u77e9\u5f62\u6846)\uff0c\u90a3\u4e48\u8de8\u884c\u8bfb\u53d6\u4f1a\u5305\u542b\u810f\u6570\u636e\u3002\n        \u9650\u5236\u4e86\u8de8\u884c\u8bfb\u53d6\u540e\uff0c\u6bcf\u884c\u6570\u636e\u7684\u6700\u540e\u4e00\u6b21\u8bfb\u53d6\uff0c\u672b\u5c3e\u53ef\u80fd\u5305\u542b\u591a\u4e2a\u65e0\u6548\u6570\u636e\uff0c\u4e14\u9700\u8981\u7279\u522b\u6ce8\u610f\u4ee5\u9632\u6b62\u6570\u7ec4\u8d8a\u754c\u884c\u4e3a\u3002\n    ## \u5982\u4f55\u586b\u6ee1 512 \u6bd4\u7279\u6570\u636e\n        \u6d41\u5f15\u64ce\u4ece\u5185\u5b58\u4e2d\u83b7\u53d6\u6570\u636e\u3002\u6d41\u5f15\u64ce\u83b7\u53d6\u7684\u6570\u636e\u4e0d\u4e00\u5b9a\u6b63\u597d\u4e3a 512 \u6bd4\u7279\u3002\u4f8b\u5982\xa0_ELETYPE_\xa0\u4e3a\xa0_**SE_ELETYPE_8BIT\xa0_\u3001\xa0_VECLEN\xa0_\u4e3a\xa0**_SE_VECLEN_2ELEMS_\uff0c\u5219\u6d41\u5f15\u64ce\u4e00\u6b21\u53ea\u83b7\u53d6 16 \u6bd4\u7279\u7684\u6570\u636e\u3002\n        \u6d41\u5f15\u64ce\u5c06\u83b7\u53d6\u7684\u6570\u636e\u586b\u5165\u7279\u5b9a\u7684\u53ea\u8bfb\u5bc4\u5b58\u5668\u3002\u5c3d\u7ba1\u83b7\u53d6\u7684\u6570\u636e\u4e0d\u4e00\u5b9a\u4e3a 512 \u6bd4\u7279\uff0c\u4f46\u8be5\u53ea\u8bfb\u5bc4\u5b58\u5668\u4f1a\u63d0\u4f9b 512 \u6bd4\u7279\u7684\u6570\u636e\u3002\u5728\u4e0a\u8ff0\u53ea\u83b7\u53d6 16 \u6bd4\u7279\u6570\u636e\u7684\u4f8b\u5b50\u4e2d\uff0c\u8fd9 16 \u6bd4\u7279\u7684\u6570\u636e\u4f1a\u5199\u5165\u53ea\u8bfb\u5bc4\u5b58\u5668\u7684\u4f4e 16 \u4f4d\uff0c\u5269\u4e0b\u7684 496 \u4f4d\u586b 0\u3002(\u6ce8\uff0c\u8fd9\u91cc\u4e0d\u8003\u8651\u8d8a\u754c\u68c0\u6d4b\u95ee\u9898\u3002)\n        \u7528\u6237\u89e3\u6790\u8be5\u53ea\u8bfb\u5bc4\u5b58\u5668\u4e2d\u7684\u6570\u636e\u3002\u5728\u8c03\u7528\xa0_**SEn()_\xa0\u6216\xa0**_SEnADV()_\xa0(n = 0,1) \u63a5\u53e3\u65f6\uff0c\u4f20\u5165\u7684\u7c7b\u578b\u53c2\u6570\xa0_type_\xa0\u8868\u793a\u8981\u5982\u4f55\u89e3\u6790\u53ea\u8bfb\u5bc4\u5b58\u5668\u4e2d\u7684\u6570\u636e\u3002\u5982\u679c\xa0_type_\xa0\u7c7b\u578b\u5360\u636e\u7684\u5185\u5b58\u7a7a\u95f4\u5c0f\u4e8e 512 \u6bd4\u7279\uff0c\u5219\u53ea\u4f1a\u89e3\u6790\u53ea\u8bfb\u5bc4\u5b58\u5668\u4e2d\u4f4e\u4f4d\u7684\u6570\u636e\u3002\u4f8b\u5982\xa0_type_\xa0\u4e3a\xa0_char32_\uff0c\u5219\u53ea\u89e3\u6790\u53ea\u8bfb\u5bc4\u5b58\u5668\u7684\u4f4e 256 \u6bd4\u7279\u7684\u6570\u636e\u3002\n        ### ELETYPE & VECLEN\n          \n        \u8fd9\u4e24\u4e2a\u662f\u6700\u57fa\u7840\u4e14\u5fc5\u987b\u7684\u914d\u7f6e\uff0c\u4ec5\u8003\u8651\u8fd9\u4e24\u4e2a\u914d\u7f6e\u3002\u82e5\u5e0c\u671b\u4ee5\u6b64\u83b7\u53d6 512 \u6bd4\u7279\u7684\u6570\u636e\uff0c\u9700\u8981\xa0_ELETYPE\xa0_\xd7\xa0_VECLEN\xa0_= 512 \u6bd4\u7279\u3002\u4f8b\u5982\xa0_ELETYPE\xa0_\u4e3a\xa0_**SE_ELETYPE_8BIT_\uff0c\u5219\xa0_VECLEN\xa0_\u4e3a\xa0**_SE_VECLEN_64ELEMS_\u3002  \n        ### ELETYPE & VECLEN & PROMOTE\n          \n        *PROMOTE\xa0_\u7684\u529f\u80fd\u4e3a\u5bf9\u8bfb\u53d6\u7684\u6570\u636e\u8fdb\u884c\u6269\u5bb9\uff0c\u9700\u8981\xa0_ELETYPE\xa0_\xd7\xa0_VECLEN\xa0_\xd7\xa0_PROMOTE\xa0*= 512 \u6bd4\u7279\u3002  \n          \n        \u4f8b\u5982\xa0_ELETYPE\xa0_\u4e3a\xa0_**SE_ELETYPE_8BIT_\uff0c\u5373\u6bcf\u4e2a\u6570\u636e\u5927\u5c0f\u4e3a 8 \u6bd4\u7279\u3002\u5982\u679c\xa0_PROMOTE\xa0_\u4e3a\xa0***SE_PROMOTE_2X_ZEROEXT_\uff0c\u5219\u8bfb\u53d6\u540e\u6bcf\u4e2a\u6570\u636e\u7684\u5927\u5c0f\u4e3a 16 \u6bd4\u7279\u3002\u6b64\u65f6\xa0_VECLEN\xa0_\u9700\u4e3a\xa0*__SE_VECLEN_32ELEMS_\u3002  \n          \n        \u6269\u5bb9\u529f\u80fd\u89e3\u51b3\u6570\u636e\u6ea2\u51fa\u7684\u95ee\u9898\u3002\u4f8b\u5982\u671f\u671b\u8fdb\u884c\xa0_uchar64\xa0_\u6570\u636e\u4e4b\u95f4\u7684\u76f8\u4e58\uff0c\u6839\u636e C7x DSP \u76f8\u5173\u6307\u4ee4\uff0c\u7ed3\u679c\u4ecd\u7136\u4e3a\xa0_uchar64\xa0_\u6570\u636e\uff0c\u5f88\u53ef\u80fd\u6ea2\u51fa\uff0c\u5c06\u6570\u636e\u6269\u5bb9\u6210\xa0_ushort32\xa0_\u53ef\u89e3\u51b3\u8be5\u95ee\u9898\u3002\u5f53\u7136\uff0c\u6269\u5bb9\u540e\u6570\u636e\u8bfb\u53d6\u6b21\u6570\u53ca\u4e58\u6cd5\u8fd0\u7b97\u6b21\u6570\u5747\u662f\u539f\u6765\u7684 2 \u500d\u3002  \n        ### ELETYPE & VECLEN & ELEDUP\n          \n        \u8981\u586b\u6ee1 512 \u6bd4\u7279\u6570\u636e\u4ecd\u8981\u6c42\xa0_ELETYPE\xa0_\xd7\xa0_VECLEN\xa0_= 512 \u6bd4\u7279\uff0c\u4e0d\u8fc7\u8fd9\u4e9b\u6570\u636e\u53ea\u6765\u81ea\xa0_VECLEN\xa0_/\xa0_ELEDUP\xa0_\u4e2a\u201c\u539f\u59cb\u201d\u6570\u636e\u3002\u4f8b\u5982\xa0_ELETYPE\xa0_\u4e3a\xa0_**SE_ELETYPE_8BIT_\uff0c\xa0_VECLEN\xa0_\u4e3a\xa0***SE_VECLEN_64ELEMS_\uff0c_ELEDUP\xa0_\u4e3a\xa0*__SE_ELEDUP_4X_\uff0c\u90a3\u4e48\u6d41\u5f15\u64ce\u4e00\u6b21\u83b7\u53d6 16 \u4e2a\u6570\u636e\u5e76\u5bf9\u6bcf\u4e2a\u6570\u636e\u590d\u5236\u6210 4 \u4efd\u3002  \n        ### ELETYPE & VECLEN & GRPDUP\n          \n        *GRPDUP\xa0_\u8bbe\u7f6e\u4e3a\xa0***SE_GRPDUP_ON\xa0_\u4ee5\u5f00\u542f\u201c\u7fa4\u590d\u5236\u201d\u529f\u80fd\u3002\u7fa4\u590d\u5236\u7684\u590d\u5236\u6b21\u6570\u662f\u6839\u636e\u5176\u5b83\u6210\u5458\u81ea\u52a8\u63a8\u65ad\u7684\uff0c\u4f8b\u5982\xa0_ELETYPE\xa0_\u4e3a\xa0***SE_ELETYPE_8BIT_\uff0c\xa0_VECLEN\xa0_\u4e3a\xa0***SE_VECLEN_64ELEMS_\uff0c\u5219\u4e0d\u4f1a\u8fdb\u884c\u7fa4\u590d\u5236\uff0c\u56e0\u4e3a\u5df2\u7ecf\u586b\u6ee1\u4e86 512 \u6bd4\u7279\u7684\u6570\u636e\u3002\u53c8\u5982\xa0_ELETYPE\xa0_\u4e3a\xa0***SE_ELETYPE_8BIT_\uff0c\xa0_VECLEN\xa0_\u4e3a\xa0*__SE_VECLEN_16ELEMS_\uff0c\u5219\u4f1a\u5bf9\u83b7\u53d6\u7684 16 \u4e2a\u6570\u636e**\u6574\u4f53**\u590d\u5236 4 \u6b21\uff0c\u4ece\u800c\u586b\u6ee1 512 \u6bd4\u7279\u7684\u6570\u636e**\u3002**  \n    ## \u6570\u636e\u7684\u771f\u5b9e\u7ef4\u5ea6 V.S. \u6d41\u5f15\u64ce\u770b\u5230\u7684\u7ef4\u5ea6\n        \u6211\u5728\u4e0a\u4e00\u7bc7\u6587\u7ae0\u672b\u5c3e\u63d0\u5230\u6d41\u5f15\u64ce\u662f\u5982\u4f55\u786e\u5b9a\u4e0b\u4e00\u6b21\u83b7\u53d6\u6570\u636e\u7684\u7d22\u5f15\uff0c\u5373\n        ![image.png](../assets/image_1658210559360_0.png){:height 31, :width 667}\n        \u5176\u4e2d\xa0_i0_\xa0~\xa0_i5_\xa0\u662f\u6d41\u5f15\u64ce\u5185\u90e8\u7ef4\u62a4\u7684\u53d8\u91cf\uff0c\u6ee1\u8db3\xa0_in_\xa0<\xa0_ICNTn_\xa0(*ICNT0_\xa0~\xa0_ICNT5_\xa0\u4e3a\u6d41\u5f15\u64ce\u914d\u7f6e\u7ed3\u6784\u4f53\u7684\u6210\u5458\uff0c\u610f\u4e3a\u6bcf\u4e2a\u7ef4\u5ea6\u7684\u957f\u5ea6)\u3002_DIM1\xa0*~\xa0_DIM5\xa0_\u662f\u914d\u7f6e\u7ed3\u6784\u4f53\u6210\u5458\uff0c\u610f\u4e3a\u4ec5\xa0_in_\xa0\u589e\u52a0 1 \u65f6\u7d22\u5f15\u589e\u52a0\u503c\u3002\n    ## \u8d8a\u754c\u68c0\u6d4b\n        ### \u6bd4\u8f83 \xa0 *ICNT0\xa0* \u53ca \xa0 *i0*\n          \n        \u5728\u67d0\u4e00\u6b21\u8bfb\u53d6\u4e2d\uff0c\u5047\u8bbe\u4f1a\u8bfb\u53d6\xa0_N_\xa0\u4e2a\u6570\u636e\uff0c\u5219\u8fd9\xa0_N_\xa0\u4e2a\u6570\u636e\u7684\u7d22\u5f15\u5206\u522b\u4e3a (\u8fd9\u91cc\u7701\u7565\xa0_i1\xa0_~*\xa0i5_\xa0\u5bf9\u7d22\u5f15\u503c\u7684\u8ba1\u7b97)\uff1a_i0_\uff0c_i0*+1, ...\xa0_i0_+*N*-1\u3002\u5047\u5982\u7b2c\xa0_k_\xa0(<*N*) \u4e2a\u6570\u636e\u7684\u7d22\u5f15\u6b63\u597d\u6ee1\u8db3\xa0_i0_+*k*-1 =\xa0_ICNT0_-1\uff0c\u5219\u5269\u4e0b\u7684\xa0_N_-_k_\xa0\u4e2a\u6570\u636e\u4f1a\u4f7f\u7528 0 \u6765\u4ee3\u66ff\u3002  \n    C7x DSP \u4e8c\u7ea7\u7f13\u5b58\u603b\u5927\u5c0f\u4e3a 512 K\uff0c\u5212\u5206\u4e3a SRAM \u53ca Cache \u4e24\u90e8\u5206\u3002\u5176\u4e2d Cache \u5728\xa0_vision_apps_\xa0\u4e2d\u4f5c\u4e3a Scratch Memory (\u4e0d\u592a\u6e05\u695a\u5982\u4f55\u7ffb\u8bd1\uff0c\u6682\u5b58\u5668\uff1f) \u6765\u4f7f\u7528\uff0c\u4e5f\u662f\u672c\u6587\u7684\u4ecb\u7ecd\u5bf9\u8c61\u3002Scratch Memory \u7531\u6240\u6709\u4efb\u52a1\u5171\u7528 (C7x DSP \u8fd0\u884c RTOS \u7cfb\u7edf)\uff0c\u5373\u4e24\u4e2a\u4efb\u52a1\u53ef\u80fd\u4f1a\u5bf9 Scratch Memory \u5185\u540c\u4e00\u5730\u5740\u8fdb\u884c\u8bfb\u5199\u3002\u76ee\u524d\u6ca1\u6709\u53d1\u73b0\u5207\u6362\u4efb\u52a1\u65f6\u4f1a\u4fdd\u5b58 Scratch Memory \u6570\u636e\u7684\u673a\u5236\uff0c\u5982\u679c\u62c5\u5fc3 Scratch Memory \u4e2d\u7684\u6570\u636e\u88ab\u6c61\u67d3\uff0c\u53ef\u4ee5\u8c03\u7528\u76f8\u5173\u63a5\u53e3\u6682\u65f6\u5c4f\u853d\u4e2d\u65ad\u4ee5\u963b\u6b62\u4efb\u52a1\u8c03\u5ea6\u3002\n    \u8981\u4f7f\u7528 Scratch Memory \u4ecd\u7136\u9700\u8981\u8c03\u7528\u76f8\u5173\u63a5\u53e3\u7533\u8bf7\u5185\u5b58\uff0c\u5982\u679c\u4f7f\u7528 TIOVX\uff0c\u5219\u8c03\u7528\xa0_tivxMemAlloc()_\xa0\u63a5\u53e3\u3002\u5982\u679c\u6df1\u7a76\xa0_tivxMemAlloc()_\xa0\u7684\u6e90\u7801\uff0c\u5c31\u4f1a\u53d1\u73b0\u5176\u5185\u90e8\u8c03\u7528\xa0_appMemAlloc()_\xa0\u51fd\u6570\u5b8c\u6210\u5185\u5b58\u7533\u8bf7\u2014\u2014\u5373\u9700\u8981\u4f7f\u7528\u8005\u81ea\u884c\u63d0\u4f9b\xa0_appMemAlloc()_\xa0\u51fd\u6570\u7684\u5b9e\u73b0\uff0c\u5f53\u7136\xa0_vision_apps_\xa0\u5df2\u7ecf\u66ff\u4f7f\u7528\u8005\u63d0\u4f9b\u4e86\u5b9e\u73b0 Demo\u3002\n    *vision_apps_\xa0\u6309\u7167\u7ebf\u6027\u5185\u5b58\u5206\u914d\u7684\u65b9\u5f0f\u7ba1\u7406 Scratch Memory\u3002\u5047\u5982 Scratch Memory \u7684\u9996\u5730\u5740\u4e3a\xa0_head_\uff0c\u5df2\u7ecf\u5206\u914d\u7684\u5185\u5b58\u4e3a\xa0_m_\uff0c\u5219\u4e0b\u4e00\u6b21\u5206\u914d\u7684\u5185\u5b58\u9996\u5730\u5740\xa0_addr_next\xa0_\u6ee1\u8db3\xa0_addr_next\xa0_\u2265_\xa0head\xa0*+*\xa0m\xa0_\u4e14\xa0_addr_next\xa0_\u6ee1\u8db3\u5b57\u8282\u5bf9\u9f50 (\u5982\u6ee1\u8db3 8 \u5b57\u8282\u5bf9\u9f50\uff0c\u5373\xa0_addr_next\xa0*% 8 == 0)\u3002\n    ### N \u7ef4\u6570\u636e\u4f20\u8f93\u914d\u7f6e\u7ed3\u6784\u4f53\n    _vision_apps/apps/basic_demos/app_c7x_kernel/_\xa0\u4e2d\u63d0\u4f9b\u4e86\u4e00\u4e2a\u793a\u4f8b\uff0c\u5b9e\u73b0\u4e24\u4e2a\u56fe\u50cf\u5bf9\u5e94\u50cf\u7d20\u7684\u76f8\u52a0\u64cd\u4f5c\u3002\u8be5\u793a\u4f8b\u5b9e\u73b0\u4e3a 3 \u6bb5\u6d41\u6c34\u7ebf\u6a21\u578b\uff0c\u6bcf\u6bb5\u7684\u529f\u80fd\u5206\u522b\u4e3a\uff1a\n    \u5206\u522b\u4f7f\u7528 DMA \u4ece\u5916\u90e8\u5185\u5b58\u83b7\u53d6\u4e24\u4e2a\u56fe\u50cf\u7684\u6570\u636e\uff0c\u5e76\u642c\u8fd0\u5230 Scratch Memory \u4e2d\u3002\n    \u4ece Scratch Memory \u4e2d\u83b7\u53d6\u56fe\u50cf\u6570\u636e\u5e76\u8fdb\u884c\u5bf9\u5e94\u50cf\u7d20\u7684\u76f8\u52a0\u64cd\u4f5c\uff0c\u8ba1\u7b97\u7ed3\u679c\u5b58\u5165 Scratch Memory \u4e2d\u3002\n    \u4f7f\u7528 DMA \u5c06\u8ba1\u7b97\u7ed3\u679c\u4ece Scratch Memory \u642c\u8fd0\u5230\u5916\u90e8\u5185\u5b58\u4e2d\u3002\n\u771f\u6b63\u768464\u4f4d\u8bbe\u5907\uff0c64\u4f4d\u5185\u5b58\u5bfb\u5740\uff0c\u5355\u5468\u671f64\u4f4d\u57fa\u672c\u7b97\u6570\u64cd\u4f5c\u3002\n\u4e0eC66\u76f8\u6bd4\uff0c\u5177\u67094-32\u500d\u7684\u5904\u7406\u901f\u5ea6\u3002\n## **C7x DSP \u4e3b\u8981\u6a21\u5757**\n    \u77e9\u9635\u4e58\u6cd5\u52a0\u901f\u5668(MMA)\u4f5c\u4e3aC71x CorePac CPU\u7684\u7279\u6b8a\u529f\u80fd\u5355\u5143\n    L1\u7a0b\u5e8f\u5185\u5b58\u63a7\u5236\u5668(PMC)\u5177\u670932KB\u7684L1\u5185\u5b58\n    L1\u6570\u636e\u5185\u5b58\u63a7\u5236\u5668(DMC)\u5177\u670948KB L1D\u5185\u5b58\uff0c\u53ef\u914d\u7f6e\u4e3a\u7f13\u5b58\u548c/\u6216SRAM\n    L2\u7edf\u4e00\u5185\u5b58\u63a7\u5236\u5668(UMC)\uff0c 512KB L2\u5185\u5b58\uff0c\u53ef\u914d\u7f6e\u4e3a\u7f13\u5b58\u548c/\u6216SRAM\n\u53cc\u6570\u636e\u8def\u5f84 A-64\u4f4d\u6807\u91cf \u548c B-512\u4f4d\u77e2\u91cf\nA\u9762\u53ef\u5728\u540c\u4e00\u65f6\u949f\u5468\u671f\u5185\u5e76\u53d1\u591a\u79cd\u6807\u91cf\u8fd0\u7b97\u548c\u5185\u5b58\u642c\u8fd0\nB\u9762 \u53ef\u5728\u540c\u4e00\u65f6\u949f\u5468\u671f\u5185\u5e76\u53d1\u591a\u79cd\u77e2\u91cf\uff08\u5b9a\u70b9\u3001\u6d6e\u70b9\uff09\u8fd0\u7b97\u548c\u5185\u5b58\u642c\u8fd0\n")),(0,a.kt)("h1",{id:"winograd"},"winograd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u4e00\u7ef4\u5377\u79ef\n    \u8f93\u51fa\u4e3a m\uff0c\u5377\u79ef\u6838\u957f\u4e3a r\uff0c\u5bf9\u5e94\u7684\u4e58\u6cd5\u8ba1\u7b97\u6b21\u6570\u4e3a m+r-1 \u6b21\n\u4e8c\u7ef4\u5377\u79ef\n    \u5982\u679c\u8f93\u51fa\u7ef4\u5ea6\u662f m x n\uff0c\u5377\u79ef\u6838\u7ef4\u5ea6\u4e3a r x s\uff0c\u5219\u9700\u8981\u7684\u4e58\u6cd5\u6b21\u6570\u662f (m+r-1) x (n+s-1)\nwinograd \u7b97\u6cd5\u901a\u8fc7\u51cf\u5c11\u4e58\u6cd5\u6b21\u6570\u6765\u5b9e\u73b0\u63d0\u901f\uff0c\u4f46\u662f\u52a0\u6cd5\u7684\u6570\u91cf\u4f1a\u76f8\u5e94\u589e\u52a0\uff0c\u540c\u65f6\u9700\u8981\u989d\u5916\u7684\u8f6c\u6362\u8ba1\u7b97\u4ee5\u53ca\u5b58\u50a8\u8f6c\u6362\u77e9\u9635\n\u9700\u8981\u8003\u8651\u52a0\u6cd5\u3001\u8f6c\u6362\u8ba1\u7b97 \u548c \u5b58\u50a8 \u7684\u4ee3\u4ef7\n")),(0,a.kt)("p",null,"\u4e3a\u4ec0\u4e48\xa0 ",(0,a.kt)("inlineCode",{parentName:"p"},"NHWC")," \xa0\u6bd4\xa0 ",(0,a.kt)("inlineCode",{parentName:"p"},"NCHW")," \xa0\u66f4\u5408\u9002 GPU\n",(0,a.kt)("img",{alt:"Alt text",src:t(1567).Z,width:"861",height:"568"}),"\n\u5bf9\u4e8e NHWC Layout \u6765\u8bf4\uff0cfeature map \u7684\u6570\u636e\u5b58\u50a8\u65b9\u5f0f\u4e3a a0a1a2b0b1b2c0c1c2d0d1d2e0e1e2f0f1f2g0g1g2h0h1h2i0i1i2j0j1j2k0k1k2l0l1l2m0m1m2n0n1n2o0o1o2p0p1p2\u3002\u4ee5 3_x_3 \u5377\u79ef\uff0c\u5bf9\u4e8e\u4e00\u6b21\u5377\u79ef\u52a8\u4f5c\u6765\u8bf4\uff0cfeature map \u53ea\u9700\u8981 3 \u6b21\u6570\u636e\u53d6\u52a8\u4f5c\uff0c\u5206\u522b\u662f a0a1a2b0b1b2c0c1c2\u3001e0e1e2f0f1f2g0g1g2\u3001i0i1i2j0j1j2k0k1k2\u3002\u8fd9\u6837\uff0c\u4ec5\u4e00\u4e2a\u5377\u79ef\u52a8\u4f5c\uff0cNHWC \u5c31\u6bd4 NCHW \u51cf\u5c11\u4e86 6 \u6b21\u6570\u636e\u53d6\u64cd\u4f5c\u3002\n\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014",(0,a.kt)("br",{parentName:"p"}),"\n","\u7248\u6743\u58f0\u660e\uff1a\u672c\u6587\u4e3aCSDN\u535a\u4e3b\u300c\u6781\u667a\u89c6\u754c\u300d\u7684\u539f\u521b\u6587\u7ae0\uff0c\u9075\u5faaCC 4.0 BY-SA\u7248\u6743\u534f\u8bae\uff0c\u8f6c\u8f7d\u8bf7\u9644\u4e0a\u539f\u6587\u51fa\u5904\u94fe\u63a5\u53ca\u672c\u58f0\u660e\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u539f\u6587\u94fe\u63a5\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_42405819/article/details/119348563"},"https://blog.csdn.net/weixin_42405819/article/details/119348563"),(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("img",{alt:"Alt text",src:t(1815).Z,width:"448",height:"92"}),"\n",(0,a.kt)("img",{alt:"Alt text",src:t(4236).Z,width:"373",height:"71"}),"\n1.1 OriNet\n",(0,a.kt)("img",{alt:"Alt text",src:t(8858).Z,width:"750",height:"308"}),"\n",(0,a.kt)("img",{alt:"Alt text",src:t(8501).Z,width:"798",height:"353"}),"\n\u5de6\u56fe\uff1a\u539f\u59cbRGB\u56fe\u50cf\u4e3a\u8f93\u5165\uff0c\u4e0d\u5408\u5e76BN\u5c42\u7684\u7f51\u7edc\u7ed3\u6784\n\u4e2d\u56fe\uff1a\u76f8\u540c\u6a21\u578b\uff0c\u5728import\u8fc7\u7a0b\u52a0\u5165YUV\u8f6cRGB\u7ed3\u6784\uff0c\u4e0d\u5408\u5e76BN\u5c42\u7684\u7f51\u7edc\u7ed3\u6784\n\u53f3\u56fe\uff1a\u76f8\u540c\u6a21\u578b\uff0cimport\u65f6OptimizeNet\nBN\u5c42\uff1a\u4e24\u5e45\u56fe\u4e2d\u7684\u7b2c\u4e00\u4e2aBN\u5c42\u90fd\u662f\u7528\u4e8e\u5bf9\u8f93\u5165\u56fe\u7247\u505a\u5f52\u4e00\u5316\uff08\u5728TI\u4e2d\u4f7f\u7528BN\u5b9e\u73b0\uff09\n\u7b2c\u4e00\u4e2a 1x1 Conv2D\u5c42\uff1a\u5de6\u56fe\u4e2d\u989d\u5916\u6dfb\u52a0 1x1 Conv2D\u5c42\u505a\u6052\u7b49\u53d8\u6362\uff0c\u53f3\u56fe\u4e2d\u7406\u8bba\u4e0a\u7b2c\u4e00\u4e2a 1x1 Conv2D\u5c42\u505aYUV\u8f6cRGB\u7684\u53d8\u6362\u3002\n\u7ed3\u8bba\uff1a\n\uff081\uff09TIDL OptimizeNet\u53ea\u4f1a\u5bf9Conv2D->BN->ReLU\u8fd9\u4e2a\u5355\u5143\u5408\u5e76\uff0c\u5982\u679c\u4e24\u4e2a\u5377\u79ef\u76f4\u63a5\u76f8\u8fde\uff0c\u4e0d\u4f1a\u5728\u4f18\u5316\u65f6\u5408\u5e76\u3002"))}s.isMDXComponent=!0},1567:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image-1-4a9d9c5f0f34ce8b5caab131a39dd93c.png"},1815:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image-2-9a0ceb0f00952d63326e208ad1dff9ae.png"},4236:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image-3-53ffa14e215d59d2780e04b6198d80f9.png"},8858:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image-4-6f3b94eb3cb557bd7133c25fd42dc89d.png"},8501:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image-5-af3505db35772c575f8a8eae7bc20d80.png"}}]);