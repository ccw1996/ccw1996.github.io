"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[4783],{5636:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"ml/optimization/SD\u6a21\u578b\u4f18\u5316","title":"AudioLDM 2\uff0c\u52a0\u901f","description":"Flash \u6ce8\u610f\u529b","source":"@site/docs/ml/optimization/SD\u6a21\u578b\u4f18\u5316.md","sourceDirName":"ml/optimization","slug":"/ml/optimization/SD\u6a21\u578b\u4f18\u5316","permalink":"/docs/ml/optimization/SD\u6a21\u578b\u4f18\u5316","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/optimization/SD\u6a21\u578b\u4f18\u5316.md","tags":[{"inline":true,"label":"machine learning","permalink":"/docs/tags/machine-learning"},{"inline":true,"label":"interview","permalink":"/docs/tags/interview"}],"version":"current","lastUpdatedAt":1735748685000,"frontMatter":{"title":"AudioLDM 2\uff0c\u52a0\u901f","tags":["machine learning","interview"]},"sidebar":"tutorialSidebar","previous":{"title":"GEMM_GPU","permalink":"/docs/ml/optimization/gemm_GPU"},"next":{"title":"onnx \u81ea\u5b9a\u4e49op\u5e76\u5bfc\u51fa","permalink":"/docs/ml/optimization/custom_onnx_op"}}');var o=n(4848),l=n(8453);const r={title:"AudioLDM 2\uff0c\u52a0\u901f",tags:["machine learning","interview"]},s="latent diffusion model\u4f18\u5316",c={},a=[{value:"Flash \u6ce8\u610f\u529b",id:"flash-\u6ce8\u610f\u529b",level:2},{value:"\u534a\u7cbe\u5ea6",id:"\u534a\u7cbe\u5ea6",level:2},{value:"Torch Compile",id:"torch-compile",level:2},{value:"\u8c03\u5ea6\u5668(\u4ec5\u9488\u5bf9huggingface diffuser)",id:"\u8c03\u5ea6\u5668\u4ec5\u9488\u5bf9huggingface-diffuser",level:2}];function d(e){const i={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"latent-diffusion-model\u4f18\u5316",children:"latent diffusion model\u4f18\u5316"})}),"\n",(0,o.jsx)(i.h2,{id:"flash-\u6ce8\u610f\u529b",children:"Flash \u6ce8\u610f\u529b"}),"\n",(0,o.jsx)(i.p,{children:"PyTorch 2.0 \u53ca\u66f4\u9ad8\u7248\u672c\u5305\u542b\u4e86\u4e00\u4e2a\u4f18\u5316\u8fc7\u7684\u5185\u5b58\u9ad8\u6548\u7684\u6ce8\u610f\u529b\u673a\u5236\u7684\u5b9e\u73b0\uff0c\u7528\u6237\u53ef\u901a\u8fc7 torch.nn.function.scaled_dot_product_attention (SDPA) \u51fd\u6570\u6765\u8c03\u7528\u8be5\u4f18\u5316\u3002\u8be5\u51fd\u6570\u4f1a\u6839\u636e\u8f93\u5165\u81ea\u52a8\u4f7f\u80fd\u591a\u4e2a\u5185\u7f6e\u4f18\u5316\uff0c\u56e0\u6b64\u6bd4\u666e\u901a\u7684\u6ce8\u610f\u529b\u5b9e\u73b0\u8fd0\u884c\u5f97\u66f4\u5feb\u3001\u66f4\u8282\u7701\u5185\u5b58\u3002"}),"\n",(0,o.jsx)(i.p,{children:"\u5982\u679c\u5b89\u88c5\u4e86 PyTorch 2.0 \u4e14 torch.nn.function.scaled_dot_product_attention \u53ef\u7528\uff0cDiffusers \u5c06\u9ed8\u8ba4\u542f\u7528\u8be5\u51fd\u6570\u3002"}),"\n",(0,o.jsx)(i.h2,{id:"\u534a\u7cbe\u5ea6",children:"\u534a\u7cbe\u5ea6"}),"\n",(0,o.jsx)(i.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c AudioLDM2Pipeline \u4ee5 float32 (\u5168) \u7cbe\u5ea6\u65b9\u5f0f\u52a0\u8f7d\u6a21\u578b\u6743\u91cd\u3002\u6240\u6709\u6a21\u578b\u8ba1\u7b97\u4e5f\u4ee5 float32 \u7cbe\u5ea6\u6267\u884c\u3002\u5bf9\u63a8\u7406\u800c\u8a00\uff0c\u6211\u4eec\u53ef\u4ee5\u5b89\u5168\u5730\u5c06\u6a21\u578b\u6743\u91cd\u548c\u8ba1\u7b97\u8f6c\u6362\u4e3a float16 (\u534a) \u7cbe\u5ea6\uff0c\u8fd9\u80fd\u6539\u5584\u63a8\u7406\u65f6\u95f4\u548c GPU \u5185\u5b58\uff0c\u540c\u65f6\u5bf9\u751f\u6210\u8d28\u91cf\u7684\u5f71\u54cd\u5fae\u4e4e\u5176\u5fae\u3002"}),"\n",(0,o.jsx)(i.h2,{id:"torch-compile",children:"Torch Compile"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-python",children:'pipe.unet = torch.compile(pipe.unet, mode="reduce-overhead", fullgraph=True)\n'})}),"\n",(0,o.jsx)(i.h2,{id:"\u8c03\u5ea6\u5668\u4ec5\u9488\u5bf9huggingface-diffuser",children:"\u8c03\u5ea6\u5668(\u4ec5\u9488\u5bf9huggingface diffuser)"}),"\n",(0,o.jsx)(i.p,{children:"\u4f60\u53ef\u4ee5\u8c03\u7528 schedulers.compatibles \u5c5e\u6027\u6765\u67e5\u770b\u54ea\u4e9b\u8c03\u5ea6\u5668\u4e0e AudioLDM2Pipeline \u517c\u5bb9"}),"\n",(0,o.jsx)(i.p,{children:"\u597d\uff01\u73b0\u5728\u6211\u4eec\u6709\u4e00\u957f\u4e32\u7684\u8c03\u5ea6\u5668\u5907\u9009 \u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cAudioLDM 2 \u4f7f\u7528 DDIMScheduler\uff0c\u5176\u9700\u8981 200 \u4e2a\u63a8\u7406\u6b65\u624d\u80fd\u751f\u6210\u9ad8\u8d28\u91cf\u7684\u97f3\u9891\u3002\u4f46\u662f\uff0c\u6027\u80fd\u66f4\u9ad8\u7684\u8c03\u5ea6\u7a0b\u5e8f\uff0c\u4f8b\u5982 DPMSolverMultistepScheduler\uff0c\u53ea\u9700 20-25 \u4e2a\u63a8\u7406\u6b65 \u5373\u53ef\u83b7\u5f97\u7c7b\u4f3c\u7684\u7ed3\u679c\u3002"}),"\n",(0,o.jsx)(i.p,{children:"\u8ba9\u6211\u4eec\u770b\u770b\u5982\u4f55\u5c06 AudioLDM 2 \u8c03\u5ea6\u5668\u4ece DDIM \u5207\u6362\u5230 DPM Multistep \u3002\u6211\u4eec\u9700\u8981\u4f7f\u7528 ConfigMixin.from_config() \u65b9\u6cd5\u4ee5\u7528\u539f\u59cb DDIMScheduler \u7684\u914d\u7f6e\u6765\u52a0\u8f7d DPMSolverMultistepScheduler:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-python",children:"from diffusers import DPMSolverMultistepScheduler\n\npipe.scheduler = DPMSolverMultistepScheduler.from_config(pipe.scheduler.config)\n"})})]})}function u(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>s});var t=n(6540);const o={},l=t.createContext(o);function r(e){const i=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);