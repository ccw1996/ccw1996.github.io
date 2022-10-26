"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[4690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"FPS\u8ba1\u7b97\u65b9\u5f0f",description:"FPS\u8ba1\u7b97\u65b9\u5f0f",tags:["work"],editor:"caroot"},o=void 0,l={unversionedId:"cpp/work/fps_calc",id:"cpp/work/fps_calc",title:"FPS\u8ba1\u7b97\u65b9\u5f0f",description:"FPS\u8ba1\u7b97\u65b9\u5f0f",source:"@site/docs/cpp/work/fps_calc.md",sourceDirName:"cpp/work",slug:"/cpp/work/fps_calc",permalink:"/docs/cpp/work/fps_calc",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cpp/work/fps_calc.md",tags:[{label:"work",permalink:"/docs/tags/work"}],version:"current",frontMatter:{title:"FPS\u8ba1\u7b97\u65b9\u5f0f",description:"FPS\u8ba1\u7b97\u65b9\u5f0f",tags:["work"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"work",permalink:"/docs/cpp/work/"},next:{title:"\u5341\u516d\u8fdb\u5236\u8f6cdouble",permalink:"/docs/cpp/work/hex2double"}},p={},c=[{value:"\u56fa\u5b9a\u65f6\u95f4\u5e27\u6570\u6cd5",id:"\u56fa\u5b9a\u65f6\u95f4\u5e27\u6570\u6cd5",level:2},{value:"\u56fa\u5b9a\u5e27\u6570\u65f6\u95f4\u6cd5",id:"\u56fa\u5b9a\u5e27\u6570\u65f6\u95f4\u6cd5",level:2},{value:"\u5b9e\u65f6\u8ba1\u7b97\u6cd5",id:"\u5b9e\u65f6\u8ba1\u7b97\u6cd5",level:2},{value:"\u603b\u5e73\u5747\u6cd5",id:"\u603b\u5e73\u5747\u6cd5",level:2},{value:"\u7cbe\u786e\u91c7\u6837\u6cd5",id:"\u7cbe\u786e\u91c7\u6837\u6cd5",level:2},{value:"\u5e73\u5747\u91c7\u6837\u6cd5",id:"\u5e73\u5747\u91c7\u6837\u6cd5",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u56fa\u5b9a\u65f6\u95f4\u5e27\u6570\u6cd5"},"\u56fa\u5b9a\u65f6\u95f4\u5e27\u6570\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"fps = frameNum / elapsedTime;\n")),(0,a.kt)("h2",{id:"\u56fa\u5b9a\u5e27\u6570\u65f6\u95f4\u6cd5"},"\u56fa\u5b9a\u5e27\u6570\u65f6\u95f4\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"fps = frameNum / elapsedTime;\n")),(0,a.kt)("h2",{id:"\u5b9e\u65f6\u8ba1\u7b97\u6cd5"},"\u5b9e\u65f6\u8ba1\u7b97\u6cd5"),(0,a.kt)("p",null,"\u5b9e\u65f6\u8ba1\u7b97\u6cd5\u76f4\u63a5\u4f7f\u7528\u4e0a\u4e00\u5e27\u7684\u65f6\u95f4\u95f4\u9694\u8fdb\u884c\u8ba1\u7b97"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int fps(int deltaTime) // ms\n{\n    int fps = static_cast<int>(1.f / deltaTime * 1000); // \u522b\u5fd8\u4e86\u5148\u8f6c\u6362\u4e3a\u6d6e\u70b9\u6570\uff0c\u5426\u5219\u4f1a\u6709\u7cbe\u5ea6\u4e22\u5931\n    return fps;\n}\n")),(0,a.kt)("h2",{id:"\u603b\u5e73\u5747\u6cd5"},"\u603b\u5e73\u5747\u6cd5"),(0,a.kt)("p",null,"\u603b\u5e73\u5747\u6cd5\u4f7f\u7528\u5168\u5c40\u5e27\u6570\u9664\u4ee5\u5168\u5c40\u65f6\u95f4\uff0c\u4ee5\u6c42\u51fa\u5e27\u7387\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int beginTime = getTime();\n\nint fps()\n{\n    static int frameCount = 0;\n\n    ++frameCount;\n\n    int deltaTime = getTime() - beginTime();\n    return static_cast<int>(frameCount * 1.f / deltaTime * 1000); // \u522b\u5fd8\u4e86\u5148\u8f6c\u6362\u4e3a\u6d6e\u70b9\u6570\uff0c\u5426\u5219\u4f1a\u6709\u7cbe\u5ea6\u4e22\u5931\n}\n")),(0,a.kt)("h2",{id:"\u7cbe\u786e\u91c7\u6837\u6cd5"},"\u7cbe\u786e\u91c7\u6837\u6cd5"),(0,a.kt)("p",null,"\u7cbe\u786e\u91c7\u6837\u6cd5\u91c7\u6837\u524dN\u4e2a\u5e27\uff0c\u7136\u540e\u8ba1\u7b97\u5e73\u5747\u503c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int fps(int deltaTime) // ms\n{\n    static std::queue<int> q;\n    static int sumDuration = 0; // ms\n\n    int fps = 0;\n    if (q.size() < 100) // \u6837\u672c\u6570\u8bbe\u4e3a100\n    {\n        sumDuration += deltaTime;\n        q.push(deltaTime);\n        fps = static_cast<int>(q.size() * 1.f / sumDuration * 1000.f); // \u522b\u5fd8\u4e86\u8f6c\u6362\u4e3a\u6d6e\u70b9\u6570\uff0c\u5426\u5219\u4f1a\u6709\u7cbe\u5ea6\u4e22\u5931\n    }\n    else\n    {\n        sumDuration -= q.front();\n        sumDuration += deltaTime;\n        sumDuration.pop();\n        sumDuration.push(deltaTime);\n        fps = static_cast<int>(100.f / sumDuration * 1000.f); // \u522b\u5fd8\u4e86\u8f6c\u6362\u4e3a\u6d6e\u70b9\u6570\uff0c\u5426\u5219\u4f1a\u6709\u7cbe\u5ea6\u4e22\u5931\n    }\n    return fps;\n}\n")),(0,a.kt)("h2",{id:"\u5e73\u5747\u91c7\u6837\u6cd5"},"\u5e73\u5747\u91c7\u6837\u6cd5"),(0,a.kt)("p",null,"\u5e73\u5747\u91c7\u6837\u6cd5\u5229\u7528\u4e0a\u6b21\u7684\u7edf\u8ba1\u7ed3\u679c\uff0c\u514b\u670d\u4e86\u7cbe\u786e\u91c7\u6837\u6cd5\u9700\u8981\u4f7f\u7528\u989d\u5916\u7a7a\u95f4\u7684\u7f3a\u70b9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int fps(int deltaTime) // ms\n{\n    static float avgDuration = 0.f;\n    static alpha = 1.f / 100.f; // \u91c7\u6837\u6570\u8bbe\u7f6e\u4e3a100\n    static int frameCount = 0;\n\n    ++frameCount;\n\n    int fps = 0;\n    if (1 == frameCount)\n    {\n        avgDuration = static_cast<float>(deltaTime);\n    }\n    else\n    {\n        avgDuration = avgDuration * (1 - alpha) + deltaTime * alpha; \n    }\n\n    fps = static_cast<int>(1.f / avgDuration * 1000);\n    return fps;\n}\n")))}u.isMDXComponent=!0}}]);