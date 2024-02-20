"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[5291],{8615:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=r(5893),i=r(1151);const o={title:"\u81ea\u52a8\u9a7e\u9a76\u4e2d\u57fa\u4e8eTransformer\u7684\u6a21\u578b\u548c\u786c\u4ef6\u52a0\u901f\u5206\u6790",tags:["transformer","optimization","interview"],editor:"caroot"},a=void 0,s={id:"ml/optimization/transformer",title:"\u81ea\u52a8\u9a7e\u9a76\u4e2d\u57fa\u4e8eTransformer\u7684\u6a21\u578b\u548c\u786c\u4ef6\u52a0\u901f\u5206\u6790",description:"https://arxiv.org/abs/2304.10891",source:"@site/docs/ml/optimization/transformer.md",sourceDirName:"ml/optimization",slug:"/ml/optimization/transformer",permalink:"/docs/ml/optimization/transformer",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/optimization/transformer.md",tags:[{label:"transformer",permalink:"/docs/tags/transformer"},{label:"optimization",permalink:"/docs/tags/optimization"},{label:"interview",permalink:"/docs/tags/interview"}],version:"current",lastUpdatedAt:1708438540,formattedLastUpdatedAt:"Feb 20, 2024",frontMatter:{title:"\u81ea\u52a8\u9a7e\u9a76\u4e2d\u57fa\u4e8eTransformer\u7684\u6a21\u578b\u548c\u786c\u4ef6\u52a0\u901f\u5206\u6790",tags:["transformer","optimization","interview"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"ViT-int8 on TVM\uff1a\u63d0\u901f4.6\u500d\uff0c\u6bd4TRT\u5feb1.5\u500d",permalink:"/docs/ml/optimization/speed_vit_in_tvm"},next:{title:"paper",permalink:"/docs/ml/paper/"}},l={},m=[{value:"\u7b97\u5b50\u52a0\u901f\u5206\u6790",id:"\u7b97\u5b50\u52a0\u901f\u5206\u6790",level:2},{value:"softmax",id:"softmax",level:3},{value:"Layer Normalization",id:"layer-normalization",level:3},{value:"GeLU",id:"gelu",level:3}];function c(e){const t={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://arxiv.org/abs/2304.10891",children:"https://arxiv.org/abs/2304.10891"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"\u7528\u4e8e\u5728\u4fbf\u643a\u5f0f\u786c\u4ef6\u4e0a\u5b9e\u73b0Transformer\u67b6\u6784\u7684op\u5217\u8868",src:r(8877).Z+"",width:"720",height:"752"})}),"\n",(0,n.jsx)(t.h2,{id:"\u7b97\u5b50\u52a0\u901f\u5206\u6790",children:"\u7b97\u5b50\u52a0\u901f\u5206\u6790"}),"\n",(0,n.jsx)(t.h3,{id:"softmax",children:"softmax"}),"\n",(0,n.jsxs)(t.p,{children:["\u4e3a\u4e86\u9632\u6b62\u5206\u6bcd\u4e2d\u7684\u591a\u9879\u5f0f\u6c42\u548c\u6ea2\u51fa\uff0c\u9700\u8981\u5728\u786c\u4ef6\u52a0\u901f\u671f\u95f4\u6267\u884c\u6570\u503c\u7a33\u5b9a\u7684\u5904\u7406\uff0c\u6211\u4eec\u5b9a\u4e49m=max\uff08x\uff09\u5e76\u6267\u884c\u4f4e\u7cbe\u5ea6\uff0c\u5c06\u5e95\u90e8e\u66ff\u6362\u4e3a2\u4ee5\u83b7\u5f97\n",(0,n.jsx)(t.img,{alt:"softmax",src:r(3088).Z+"",width:"818",height:"106"}),"\n\u5728\u5728\u7ebf\u64cd\u4f5c\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4e13\u6ce8\u4e8e\u5e76\u884c\u5316\u548c\u5b58\u50a8\u4f18\u5316\uff0c\u5e76\u89c2\u5bdf\u5230\u6574\u4e2a\u8fc7\u7a0b\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a3 O\uff08n\uff09\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6\u4e3aS\uff08n+1\uff09\u3002\u8be5\u65b9\u6cd5\u9700\u8981\u4e09\u4e2a\u5faa\u73af\u5e76\u5b58\u50a8N+1\u4e2a\u4e2d\u95f4\u7ed3\u679c\u3002\u4e3a\u4e86\u8fdb\u4e00\u6b65\u4f18\u5316\u8fc7\u7a0b\uff0c\u5c06\u5168\u5c40\u6700\u5927\u503c\u66ff\u6362\u4e3a\u5c40\u90e8\u6700\u5927\u503c\uff0c\u4f7f\u8ba1\u7b97\u80fd\u591f\u5728\u4e24\u4e2a\u5faa\u73af\u4e2d\u5b8c\u6210\u3002\u8fd9\u5c06\u65f6\u95f4\u590d\u6742\u6027\u964d\u4f4e\u52302 O\uff08n\uff09\uff0c\u5e76\u51cf\u5c11\u4e86\u4e2d\u95f4\u7ed3\u679c\u7684\u5b58\u50a8\u3002"]}),"\n",(0,n.jsx)(t.h3,{id:"layer-normalization",children:"Layer Normalization"}),"\n",(0,n.jsx)(t.p,{children:"LN\u4e0eBN\u7684\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff0c\u5b83\u8de8\u901a\u9053\u800c\u975e\u6279\u91cf\u8fdb\u884c\u89c4\u8303\u5316\uff0c\u89e3\u51b3\u4e86Transformer\u6a21\u578b\u5728\u901a\u9053\u65b9\u5411\u4e0a\u7684\u5927\u91cf\u8ba1\u7b97\u3002\u8fd9\u79cd\u89c4\u8303\u5316\u6280\u672f\u6709\u6548\u5730\u7f13\u89e3\u4e86Transformer\u6a21\u578b\u4e2d\u7684\u68af\u5ea6\u6d88\u5931\u548c\u89e3\u91ca\u95ee\u9898\u3002\u6b64\u5916\uff0c\u5c42\u5f52\u4e00\u5316\u6d89\u53ca\u9664\u6cd5\u3001\u5e73\u65b9\u548c\u5e73\u65b9\u6839\u7b49\u8fd0\u7b97\uff0c\u5c42\u5f52\u4e00\u5316\u7684\u66ff\u6362\u4ee5\u53ca\u6574\u6570Transformer\u4e2d\u7684\u6ce8\u610f\u529b\u5b8c\u5168\u652f\u6301INT8\u63a8\u7406\u3002"}),"\n",(0,n.jsx)(t.h3,{id:"gelu",children:"GeLU"})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},3088:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-1-1225b6befe324678cfe378e156104f27.png"},8877:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-eba22abd3e2f83453d7070cbc2a0c388.png"},1151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>a});var n=r(7294);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);