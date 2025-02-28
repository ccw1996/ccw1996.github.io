"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[5087],{84:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"25-02/pytorch_profiler","title":"PyTorch Profiler TensorBoard","description":"\u4f7f\u7528\u65b9\u6cd5\uff1a","source":"@site/docs/25-02/pytorch_profiler.md","sourceDirName":"25-02","slug":"/25-02/pytorch_profiler","permalink":"/docs/25-02/pytorch_profiler","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/25-02/pytorch_profiler.md","tags":[{"inline":true,"label":"performance","permalink":"/docs/tags/performance"}],"version":"current","lastUpdatedAt":1740785860000,"frontMatter":{"title":"PyTorch Profiler TensorBoard","tags":["performance"]},"sidebar":"tutorialSidebar","previous":{"title":"\u6742\u8bb0","permalink":"/docs/25-02/other"},"next":{"title":"LLM","permalink":"/docs/LLM/"}}');var n=t(4848),i=t(8453);const c={title:"PyTorch Profiler TensorBoard",tags:["performance"]},s="\u6559\u7a0b\u5730\u5740",l={},a=[];function p(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"\u4f7f\u7528\u65b9\u6cd5\uff1a"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'with torch.profiler.profile(activities=[torch.profiler.ProfilerActivity.CPU, torch.profiler.ProfilerActivity.CUDA]) as prof:\n    # \u4f60\u7684\u4ee3\u7801\u5757\n    model(input)\nprof.export_chrome_trace("trace.json")\n\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'with torch.profiler.profile(activities=[torch.profiler.ProfilerActivity.CPU, torch.profiler.ProfilerActivity.CUDA],scedule=torch.profiler.schedule(wait=1, warmup=1, active=3), on_trace_ready=torch.profiler.tensorboard_trace_handler("logdir"), with_stack=True,  record_shapes=True) as prof:\n    # \u4f60\u7684\u4ee3\u7801\u5757\n    model(input)\n    prof.step()\nprof.dump(profile_path="profile.json")\n\n'})}),"\n",(0,n.jsxs)(r.p,{children:["\u6211\u65e5\u5e38\u662f\u4f7f\u7528 tensorboard --logdir=./samples --bind_all \u8fd9\u6761\u547d\u4ee4\u6765\u628a\u53ef\u89c6\u5316\u7ed3\u679c\u6620\u5c04\u5230\u672c\u5730\u6d4f\u89c8\u5668\u91cc\u9762\uff08\u901a\u8fc7\u6253\u5f00\uff1a",(0,n.jsx)(r.a,{href:"http://localhost:6006/#pytorch_profiler",children:"http://localhost:6006/#pytorch_profiler"})," \uff09\u3002\n",(0,n.jsx)(r.img,{alt:"alt text",src:t(2628).A+"",width:"800",height:"374"})]}),"\n",(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"\u6559\u7a0b\u5730\u5740",children:"\u6559\u7a0b\u5730\u5740"})}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/pytorch/kineto/blob/main/tb_plugin/README.md",children:"https://github.com/pytorch/kineto/blob/main/tb_plugin/README.md"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},2628:(e,r,t)=>{t.d(r,{A:()=>o});const o=t.p+"assets/images/image-3ffb5ef8563543c1e4171c61c2aa45d2.png"},8453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>s});var o=t(6540);const n={},i=o.createContext(n);function c(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);