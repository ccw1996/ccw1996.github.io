"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[1159],{8634:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var r=t(5893),o=t(1151);const c={title:"C++11\u5b8c\u7f8e\u8f6c\u53d1\u53ca\u5b9e\u73b0\u65b9\u6cd5\u8be6\u89e3"},i=void 0,a={id:"cpp/perfect_forwarding",title:"C++11\u5b8c\u7f8e\u8f6c\u53d1\u53ca\u5b9e\u73b0\u65b9\u6cd5\u8be6\u89e3",description:"\u9996\u5148\u89e3\u91ca\u4e00\u4e0b\u4ec0\u4e48\u662f\u5b8c\u7f8e\u8f6c\u53d1\uff0c\u5b83\u6307\u7684\u662f\u51fd\u6570\u6a21\u677f\u53ef\u4ee5\u5c06\u81ea\u5df1\u7684\u53c2\u6570\u201c\u5b8c\u7f8e\u201d\u5730\u8f6c\u53d1\u7ed9\u5185\u90e8\u8c03\u7528\u7684\u5176\u5b83\u51fd\u6570\u3002\u6240\u8c13\u5b8c\u7f8e\uff0c\u5373\u4e0d\u4ec5\u80fd\u51c6\u786e\u5730\u8f6c\u53d1\u53c2\u6570\u7684\u503c\uff0c\u8fd8\u80fd\u4fdd\u8bc1\u88ab\u8f6c\u53d1\u53c2\u6570\u7684\u5de6\u3001\u53f3\u503c\u5c5e\u6027\u4e0d\u53d8\u3002",source:"@site/docs/cpp/perfect_forwarding.md",sourceDirName:"cpp",slug:"/cpp/perfect_forwarding",permalink:"/docs/cpp/perfect_forwarding",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cpp/perfect_forwarding.md",tags:[],version:"current",lastUpdatedAt:1699710675,formattedLastUpdatedAt:"Nov 11, 2023",frontMatter:{title:"C++11\u5b8c\u7f8e\u8f6c\u53d1\u53ca\u5b9e\u73b0\u65b9\u6cd5\u8be6\u89e3"},sidebar:"tutorialSidebar",previous:{title:"\u591a\u7ebf\u7a0b\u603b\u7ed3",permalink:"/docs/cpp/multi_thread"},next:{title:"\u5de6\u503c\u548c\u53f3\u503c",permalink:"/docs/cpp/rvalue"}},s={},d=[];function p(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u9996\u5148\u89e3\u91ca\u4e00\u4e0b\u4ec0\u4e48\u662f\u5b8c\u7f8e\u8f6c\u53d1\uff0c\u5b83\u6307\u7684\u662f\u51fd\u6570\u6a21\u677f\u53ef\u4ee5\u5c06\u81ea\u5df1\u7684\u53c2\u6570\u201c\u5b8c\u7f8e\u201d\u5730\u8f6c\u53d1\u7ed9\u5185\u90e8\u8c03\u7528\u7684\u5176\u5b83\u51fd\u6570\u3002\u6240\u8c13\u5b8c\u7f8e\uff0c\u5373\u4e0d\u4ec5\u80fd\u51c6\u786e\u5730\u8f6c\u53d1\u53c2\u6570\u7684\u503c\uff0c\u8fd8\u80fd\u4fdd\u8bc1\u88ab\u8f6c\u53d1\u53c2\u6570\u7684\u5de6\u3001\u53f3\u503c\u5c5e\u6027\u4e0d\u53d8\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\u5b50\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"template<typename T>\nvoid function(T t) {\n    otherdef(t);\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u4e0a\u6240\u793a\uff0cfunction() \u51fd\u6570\u6a21\u677f\u4e2d\u8c03\u7528\u4e86 otherdef() \u51fd\u6570\u3002\u5728\u6b64\u57fa\u7840\u4e0a\uff0c\u5b8c\u7f8e\u8f6c\u53d1\u6307\u7684\u662f\uff1a\u5982\u679c function() \u51fd\u6570\u63a5\u6536\u5230\u7684\u53c2\u6570 t \u4e3a\u5de6\u503c\uff0c\u90a3\u4e48\u8be5\u51fd\u6570\u4f20\u9012\u7ed9 otherdef() \u7684\u53c2\u6570 t \u4e5f\u662f\u5de6\u503c\uff1b\u53cd\u4e4b\u5982\u679c function() \u51fd\u6570\u63a5\u6536\u5230\u7684\u53c2\u6570 t \u4e3a\u53f3\u503c\uff0c\u90a3\u4e48\u4f20\u9012\u7ed9 otherdef() \u51fd\u6570\u7684\u53c2\u6570 t \u4e5f\u5fc5\u987b\u4e3a\u53f3\u503c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"C++11 \u6807\u51c6\u4e2d\u89c4\u5b9a\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\u53f3\u503c\u5f15\u7528\u5f62\u5f0f\u7684\u53c2\u6570\u53ea\u80fd\u63a5\u6536\u53f3\u503c\uff0c\u4e0d\u80fd\u63a5\u6536\u5de6\u503c\u3002\u4f46\u5bf9\u4e8e\u51fd\u6570\u6a21\u677f\u4e2d\u4f7f\u7528\u53f3\u503c\u5f15\u7528\u8bed\u6cd5\u5b9a\u4e49\u7684\u53c2\u6570\u6765\u8bf4\uff0c\u5b83\u4e0d\u518d\u9075\u5b88\u8fd9\u4e00\u89c4\u5b9a\uff0c\u65e2\u53ef\u4ee5\u63a5\u6536\u53f3\u503c\uff0c\u4e5f\u53ef\u4ee5\u63a5\u6536\u5de6\u503c\uff08\u6b64\u65f6\u7684\u53f3\u503c\u5f15\u7528\u53c8\u88ab\u79f0\u4e3a\u201c\u4e07\u80fd\u5f15\u7528\u201d\uff09\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"template <typename T>\nvoid function(T&& t) {\n    otherdef(t);\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u5b9e\u53c2\u4e3a\u5de6\u503c\u6216\u8005\u5de6\u503c\u5f15\u7528\uff08A&\uff09\u65f6\uff0c\u51fd\u6570\u6a21\u677f\u4e2d T&& \u5c06\u8f6c\u53d8\u4e3a A&\uff08A& && = A&\uff09\uff1b\n\u5f53\u5b9e\u53c2\u4e3a\u53f3\u503c\u6216\u8005\u53f3\u503c\u5f15\u7528\uff08A&&\uff09\u65f6\uff0c\u51fd\u6570\u6a21\u677f\u4e2d T&& \u5c06\u8f6c\u53d8\u4e3a A&&\uff08A&& && = A&&\uff09\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\nusing namespace std;\n//\u91cd\u8f7d\u88ab\u8c03\u7528\u51fd\u6570\uff0c\u67e5\u770b\u5b8c\u7f8e\u8f6c\u53d1\u7684\u6548\u679c\nvoid otherdef(int & t) {\n    cout << "lvalue\\n";\n}\nvoid otherdef(const int & t) {\n    cout << "rvalue\\n";\n}\n//\u5b9e\u73b0\u5b8c\u7f8e\u8f6c\u53d1\u7684\u51fd\u6570\u6a21\u677f\ntemplate <typename T>\nvoid function(T&& t) {\n    otherdef(forward<T>(t));\n}\nint main()\n{\n    function(5);\n    int  x = 1;\n    function(x);\n    return 0;\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(7294);const o={},c=r.createContext(o);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);