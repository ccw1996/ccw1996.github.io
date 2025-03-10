"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[6996],{6892:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"cpp/map","title":"\u5982\u4f55\u4fee\u6539map\u5bb9\u5668","description":"\u73b0\u4ee3\u65b9\u6cd5","source":"@site/docs/cpp/map.md","sourceDirName":"cpp","slug":"/cpp/map","permalink":"/docs/cpp/map","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/cpp/map.md","tags":[],"version":"current","lastUpdatedAt":1740785860000,"frontMatter":{"title":"\u5982\u4f55\u4fee\u6539map\u5bb9\u5668"},"sidebar":"tutorialSidebar","previous":{"title":"C++ \u7684 lambda \u8868\u8fbe\u5f0f","permalink":"/docs/cpp/lambda"},"next":{"title":"\u591a\u7ebf\u7a0b\u603b\u7ed3","permalink":"/docs/cpp/multi_thread"}}');var r=e(4848),s=e(8453);const a={title:"\u5982\u4f55\u4fee\u6539map\u5bb9\u5668"},c="\u4fee\u6539key\u503c",o={},p=[{value:"\u73b0\u4ee3\u65b9\u6cd5",id:"\u73b0\u4ee3\u65b9\u6cd5",level:2}];function d(t){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u4fee\u6539key\u503c",children:"\u4fee\u6539key\u503c"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"\nint main ()\n{\n  std::map<char,int> first;\n\n  first['a']=10;\n  first['b']=30;\n  first['c']=50;\n  first['d']=70;\n  std::map<char,int>::iterator it = first.begin();\n  int i=0;\n  for(;it!=first.end();it++)\n  {\n      char *p;\n      p=(char*)(&it->first);\n      (*p)=('e'+i);\n      i++;\n  }\n  for(it = first.begin();it!=first.end();it++)\n  {\n      std::cout<<it->first<<\",\";\n  }\n  return 0;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u73b0\u4ee3\u65b9\u6cd5",children:"\u73b0\u4ee3\u65b9\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"\nint main ()\n{\n  std::map<char,int> first;\n  first['a']=10;\n  first['b']=30;\n  first['c']=50;\n  first['d']=70;\n  std::map<char,int>::iterator it = first.find('b'),it_1=first.find('d');\n  auto a{first.extract(it->first)};\n  auto b{first.extract(it_1->first)};\n  a.key()='e';\n  b.key()='f';\n  first.insert(move(a));\n  first.insert(move(b));\n  for(it = first.begin();it!=first.end();it++)\n  {\n      std::cout<<it->first<<\",\";\n  }\n  return 0;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u4e0a\u4ee3\u7801\u901a\u8fc7\u73b0\u4ee3C++\u63d0\u4f9b\u7684extract\u65b9\u6cd5\u62bd\u53d6\u6307\u5b9akey\u7684\u5143\u7d20\uff0c\u7136\u540e\u518d\u5bf9key\u8fdb\u884c\u4fee\u6539\uff0c\u6700\u540e\u91cd\u65b0\u63d2\u5165\u5230map\u5bb9\u5668\u4e2d\u3002\u6700\u7ec8\u5b9e\u73b0\u4e86key\u503c\u7684\u66ff\u6362\u3002"})]})}function f(t={}){const{wrapper:n}={...(0,s.R)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},8453:(t,n,e)=>{e.d(n,{R:()=>a,x:()=>c});var i=e(6540);const r={},s=i.createContext(r);function a(t){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:a(t.components),i.createElement(s.Provider,{value:n},t.children)}}}]);