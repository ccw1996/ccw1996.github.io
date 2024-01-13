"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[4262],{4288:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(5893),o=n(1151);const s={title:"2D\u548c3D\u76ee\u6807\u68c0\u6d4b\u5668\u90fd\u9002\u7528\u7684int8\u91cf\u5316\u65b9\u6cd5\u2014\u2014DetPTQ",tags:["work"]},a=void 0,l={id:"ml/quantize/det-qat",title:"2D\u548c3D\u76ee\u6807\u68c0\u6d4b\u5668\u90fd\u9002\u7528\u7684int8\u91cf\u5316\u65b9\u6cd5\u2014\u2014DetPTQ",description:"https://zhuanlan.zhihu.com/p/627159717",source:"@site/docs/ml/quantize/det-qat.md",sourceDirName:"ml/quantize",slug:"/ml/quantize/det-qat",permalink:"/docs/ml/quantize/det-qat",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/quantize/det-qat.md",tags:[{label:"work",permalink:"/docs/tags/work"}],version:"current",lastUpdatedAt:1705157542,formattedLastUpdatedAt:"Jan 13, 2024",frontMatter:{title:"2D\u548c3D\u76ee\u6807\u68c0\u6d4b\u5668\u90fd\u9002\u7528\u7684int8\u91cf\u5316\u65b9\u6cd5\u2014\u2014DetPTQ",tags:["work"]},sidebar:"tutorialSidebar",previous:{title:"\u91cf\u5316",permalink:"/docs/ml/quantize/summary"},next:{title:"PyTorch\u6a21\u578b\u9759\u6001\u91cf\u5316\u3001\u4fdd\u5b58\u3001\u52a0\u8f7dint8\u91cf\u5316\u6a21\u578b",permalink:"/docs/ml/quantize/pytorch_int8"}},r={},c=[];function u(t){const e={a:"a",blockquote:"blockquote",li:"li",p:"p",ul:"ul",...(0,o.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://zhuanlan.zhihu.com/p/627159717",children:"https://zhuanlan.zhihu.com/p/627159717"})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u91cf\u5316\u7684\u76ee\u6807\u662f\u627e\u5230\u5141\u8bb8\u91cf\u5316\u7f51\u7edc\u5b9e\u73b0\u6700\u4f73\u4efb\u52a1\u6027\u80fd\u7684\u6700\u4f73\u91cf\u5316\u53c2\u6570\uff08\u6700\u5c0f\u5316\u4efb\u52a1\u635f\u5931\u6216\u6700\u5927\u5316\u8bf8\u5982mAP\u4e4b\u7c7b\u7684\u5ea6\u91cf\uff09\u3002\u7136\u800c\uff0c\u7531\u4e8e\u6821\u51c6\u6570\u636e\u5728PTQ\u4e2d\u4e0d\u53ef\u7528\uff0c\u56e0\u6b64\u65e0\u6cd5\u76f4\u63a5\u8bc4\u4f30\u7f51\u7edc\u7684\u4efb\u52a1\u6027\u80fd\u3002\u4e3a\u4e86\u8fd1\u4f3c\u4efb\u52a1\u635f\u5931\uff0c\u5148\u524d\u7684PTQ\u65b9\u6cd5\u901a\u5e38\u9010\u5c42\u6216\u9010\u5757\u4f18\u5316\u91cf\u5316\u53c2\u6570\uff0c\u4ee5\u6700\u5c0f\u5316\u4e2d\u95f4\u5c42\u6216\u5757\u7684\u8f93\u51fa\u7684\u91cd\u5efa\u635f\u5931\uff0c\u79f0\u4e3a\u5c40\u90e8\u91cf\u5316\u91cd\u5efa\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u672c\u6587\u4e2d\u4f5c\u8005\u8ba4\u4e3a\u4f7f\u7528\u56fa\u5b9a\u5ea6\u91cf\u800c\u4e0d\u8003\u8651\u5176\u5bf9\u4efb\u52a1\u6027\u80fd\u7684\u654f\u611f\u6027\u5c06\u5bf9\u91cf\u5316\u6027\u80fd\u4ea7\u751f\u8d1f\u9762\u5f71\u54cd\u3002\u4f5c\u8005\u53d1\u73b0lp\u5ea6\u91cf\u4e2d\u7684\u53c2\u6570p\u5bf9\u76ee\u6807\u68c0\u6d4b\u7f51\u7edc\u7684\u91cf\u5316\u6709\u663e\u8457\u5f71\u54cd\u3002\u4f5c\u8005\u7814\u7a76\u4e86\u4e0d\u540clp\u5ea6\u91cf\u5bf9\u5c40\u90e8\u91cf\u5316\u91cd\u5efa\u751f\u6210\u7684\u91cf\u5316\u53c2\u6570\u7684\u5f71\u54cd\u3002\u8fd8\u53ef\u89c6\u5316\u4e86\u5177\u6709\u4e0d\u540clp\u5ea6\u91cf\u7684\u91cf\u5316\u7279\u5f81\u56fe\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"LAPQ\u53d1\u73b0\u6765\u81ea\u4e0d\u540cLp\u5ea6\u91cf\u7684\u6bd4\u4f8b\u56e0\u5b50\u5c06\u5bfc\u81f4\u4e0d\u540c\u7684\u91cf\u5316\u8bef\u5dee\u3002\u5b83\u91c7\u7528Powell\u7b97\u6cd5\u6765\u8054\u5408\u4f18\u5316\u6765\u81ea\u4e0d\u540cLp\u5ea6\u91cf\u7684\u5c3a\u5ea6\u56e0\u5b50\u3002"}),"\n",(0,i.jsx)(e.li,{children:"PTQ4ViT\u63d0\u51fa\u5229\u7528Hessian-guided\u5ea6\u91cf\u6765\u8bc4\u4f30Vision-Transformer\u7684\u4e0d\u540cscale\u3002"}),"\n",(0,i.jsx)(e.li,{children:"RAPQ\u7ed9\u51fa\u7ed3\u8bba\uff1a\u5373p\u503c\u4e0eLp\u635f\u5931\u503c\u5bf9\u5f02\u5e38\u503c\u7684\u654f\u611f\u6027\u5448\u6b63\u76f8\u5173\u3002\u5b83\u4f7f\u7528\u6765\u81eaBN\u7684\u65b9\u5dee\u4fe1\u606f\u6765\u5b9a\u4e49\u57fa\u4e8eBN\u7684Lp\u635f\u5931"}),"\n"]})]})}function d(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(u,{...t})}):u(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>l,a:()=>a});var i=n(7294);const o={},s=i.createContext(o);function a(t){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:a(t.components),i.createElement(s.Provider,{value:e},t.children)}}}]);