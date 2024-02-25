"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[1396],{3612:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=t(5893),i=t(1151);const o={title:"\u5341\u5206\u949f\u8bfb\u61c2Stable Diffusion\u8fd0\u884c\u539f\u7406",tags:["work"]},r="\u6a21\u5757\u5206\u6790",l={id:"stable_diffusion/\u8fd0\u884c\u539f\u7406",title:"\u5341\u5206\u949f\u8bfb\u61c2Stable Diffusion\u8fd0\u884c\u539f\u7406",description:"https://zhuanlan.zhihu.com/p/628714183",source:"@site/docs/stable_diffusion/\u8fd0\u884c\u539f\u7406.md",sourceDirName:"stable_diffusion",slug:"/stable_diffusion/\u8fd0\u884c\u539f\u7406",permalink:"/docs/stable_diffusion/\u8fd0\u884c\u539f\u7406",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/stable_diffusion/\u8fd0\u884c\u539f\u7406.md",tags:[{label:"work",permalink:"/docs/tags/work"}],version:"current",lastUpdatedAt:1708864280,formattedLastUpdatedAt:"Feb 25, 2024",frontMatter:{title:"\u5341\u5206\u949f\u8bfb\u61c2Stable Diffusion\u8fd0\u884c\u539f\u7406",tags:["work"]},sidebar:"tutorialSidebar",previous:{title:"stable_diffusion",permalink:"/docs/stable_diffusion/"},next:{title:"time",permalink:"/docs/time/"}},a={},d=[{value:"UNET",id:"unet",level:2},{value:"SpatialTransformer \u7ed3\u6784",id:"spatialtransformer-\u7ed3\u6784",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://zhuanlan.zhihu.com/p/628714183",children:"https://zhuanlan.zhihu.com/p/628714183"})}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"\u6a21\u5757\u5206\u6790",children:"\u6a21\u5757\u5206\u6790"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Stable Diffusion\u6587\u751f\u56fe\u6846\u67b6",src:t(5763).Z+"",width:"640",height:"316"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8bad\u7ec3\u9636\u6bb5"}),"\uff0c\u5305\u542b\u4e86\u56fe\u91cc PART1 CLIP \u6a21\u578b\u548c PART2 Unet \u8bad\u7ec3\uff0c\u5206\u6210\u4e09\u6b65\uff1a"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u7528 AutoEncoderKL \u81ea\u7f16\u7801\u5668\u628a\u8f93\u5165\u56fe\u7247\u4ece\u50cf\u7d20\u7a7a\u95f4\u6620\u5c04\u5230\u9690\u5411\u91cf\u7a7a\u95f4\uff0c\u628a RGB \u56fe\u7247\u8f6c\u6362\u5230\u9690\u5f0f\u5411\u91cf\u8868\u8fbe\u3002\u5176\u4e2d\uff0c\u5728\u8bad\u7ec3 Unet \u65f6\u81ea\u7f16\u7801\u5668\u53c2\u6570\u5df2\u7ecf\u8bad\u7ec3\u597d\u548c\u56fa\u5b9a\u7684\uff0c\u81ea\u7f16\u7801\u5668\u628a\u8f93\u5165\u56fe\u7247\u5f20\u91cf\u8fdb\u884c\u964d\u7ef4\u5f97\u5230\u9690\u5411\u91cf\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u7528 FrozenCLIPEmbedder \u6587\u672c\u7f16\u7801\u5668\u6765\u7f16\u7801\u8f93\u5165\u63d0\u793a\u8bcd Prompt\uff0c\u751f\u6210\u5411\u91cf\u8868\u793a context\uff0c\u8fd9\u91cc\u9700\u8981\u89c4\u5b9a\u6587\u672c\u6700\u5927\u7f16\u7801\u957f\u5ea6\u548c\u5411\u91cf\u5d4c\u5165\u5927\u5c0f\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5bf9\u8f93\u5165\u56fe\u50cf\u7684\u9690\u5f0f\u5411\u91cf\u65bd\u52a0\u4e0d\u540c\u5f3a\u5ea6\u566a\u58f0\uff0c\u518d\u628a\u52a0\u566a\u540e\u9690\u5411\u91cf\u8f93\u5165\u5230 UNetModel \u6765\u8f93\u51fa\u9884\u4f30\u566a\u58f0\uff0c\u548c\u771f\u5b9e\u566a\u58f0\u4fe1\u606f\u6807\u7b7e\u4f5c\u6bd4\u8f83\u6765\u8ba1\u7b97 KL \u6563\u5ea6 loss\uff0c\u5e76\u901a\u8fc7\u53cd\u5411\u4f20\u64ad\u7b97\u6cd5\u66f4\u65b0 UNetModel \u6a21\u578b\u53c2\u6570\uff1b\u5f15\u5165\u6587\u672c\u5411\u91cf context \u540e\uff0cUNetModel \u5728\u8bad\u7ec3\u65f6\u628a\u5176\u4f5c\u4e3a condition\uff0c\u5229\u7528\u6ce8\u610f\u529b\u673a\u5236\u6765\u66f4\u597d\u5730\u5f15\u5bfc\u56fe\u50cf\u5f80\u6587\u672c\u5411\u91cf\u65b9\u5411\u751f\u6210\uff1b"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u91c7\u6837\u9636\u6bb5"}),"\uff0c\u5305\u542b\u4e86\u56fe\u91cc PART1 CLIP \u6a21\u578b\u548c PART3 \u91c7\u6837\u5668\u8fed\u4ee3\uff0c\u5206\u6210\u4e09\u6b65\uff1a"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u7528 FrozenCLIPEmbedder \u6587\u672c\u7f16\u7801\u5668\u628a\u8f93\u5165\u63d0\u793a\u8bcd Prompt \u8fdb\u884c\u7f16\u7801\uff0c\u751f\u6210\u7ef4\u5ea6\u4e3a[B, K, E]\u7684\u5411\u91cf\u8868\u793a context\uff0c\u4e0e\u8bad\u7ec3\u9636\u6bb5\u7684\u7b2c 2 \u6b65\u4e00\u81f4\uff1b"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5229\u7528\u968f\u673a\u79cd\u5b50\u968f\u673a\u4ea7\u51fa\u56fa\u5b9a\u7ef4\u5ea6\u7684\u566a\u58f0\u9690\u7a7a\u95f4\u5411\u91cf\uff0c\u5229\u7528\u8bad\u7ec3\u597d\u7684 UNetModel \u6a21\u578b\uff0c\u7ed3\u5408\u4e0d\u540c\u91c7\u6837\u5668\uff08\u5982 DDPM/DDIM/PLMS\uff09\u8fed\u4ee3 T \u6b21\u4e0d\u65ad\u53bb\u9664\u566a\u58f0\uff0c\u5f97\u5230\u5177\u6709\u6587\u672c\u4fe1\u606f\u7684\u9690\u5411\u91cf\u8868\u5f81\uff1b"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u7528 AutoEncoderKL \u81ea\u7f16\u7801\u5668\u628a\u4e0a\u9762\u5f97\u5230\u7684\u56fe\u50cf\u9690\u5411\u91cf\u8fdb\u884c\u89e3\u7801\uff0c\u5f97\u5230\u88ab\u6620\u5c04\u5230\u50cf\u7d20\u7a7a\u95f4\u7684\u751f\u6210\u56fe\u50cf\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e0a\u9762\u5bf9 stable diffusion \u603b\u4f53\u67b6\u6784\u8fdb\u884c\u4e86\u4ecb\u7ecd\uff0c\u90a3\u63a5\u4e0b\u6765\u8fdb\u4e00\u6b65\u5206\u6790\u4ecb\u7ecd\u4e0b\u6bcf\u4e2a\u91cd\u8981\u7ec4\u6210\u6a21\u5757\uff0c\u5206\u522b\u662f Unet \u7f51\u7edc\u3001\u91c7\u6837\u5668\u548c CLIP \u6a21\u578b\u4e09\u4e2a\u4e3b\u8981\u6a21\u5757\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"unet",children:"UNET"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:" Unet\u7f51\u7edc\u7ed3\u6784\u793a\u610f\u56fe",src:t(5160).Z+"",width:"640",height:"300"})}),"\n",(0,s.jsx)(n.p,{children:"\u6a21\u578b\u8f93\u5165\u5305\u62ec 3 \u4e2a\u90e8\u5206\uff0c(1) \u56fe\u50cf\u8868\u793a\uff0c\u7528\u9690\u7a7a\u95f4\u5411\u91cf\u8f93\u5165\u7684\u7ef4\u5ea6\u4e3a[B, Z, H/8, W/8]\uff1b(2) timesteps \u503c\uff0c\u7ef4\u5ea6\u4e3a[B, ]\uff1b(3) \u6587\u672c\u5411\u91cf\u8868\u793a context\uff0c\u7ef4\u5ea6\u4e3a[B, K, E]\u3002\u5176\u4e2d[B, Z, H, W]\u5206\u522b\u8868\u793a[batch_size \u56fe\u7247\u6570\uff0cC \u9690\u7a7a\u95f4\u901a\u9053\u6570\uff0cheight \u957f\u5ea6\uff0cweight \u5bbd\u5ea6]\uff0cK \u548c E \u5206\u522b\u8868\u793a\u6587\u672c\u6700\u5927\u7f16\u7801\u957f\u5ea6 max length \u548c\u5411\u91cf\u5d4c\u5165\u5927\u5c0f\u3002"}),"\n",(0,s.jsx)(n.p,{children:"timestep_embedding \u7684\u751f\u6210\u65b9\u5f0f\uff0c\u7528\u7684\u662f\u201cAttention is All you Need\u201d\u8bba\u6587\u7684 Transformer \u65b9\u6cd5\uff0c\u901a\u8fc7 sin \u548c cos \u51fd\u6570\u518d\u7ecf\u8fc7\u4e24\u4e2a Linear \u8fdb\u884c\u53d8\u6362\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"spatialtransformer-\u7ed3\u6784",children:"SpatialTransformer \u7ed3\u6784"}),"\n",(0,s.jsx)(n.p,{children:"SpatialTransformer \u8fd9\u91cc\uff0c\u5305\u542b\u6a21\u5757\u6bd4\u8f83\u591a\uff0c\u6709\u4e24\u4e2a\u8f93\u5165\u5206\u522b\u662f \u2460 \u6765\u81ea\u4e0a\u4e00\u4e2a\u6a21\u5757\u7684\u8f93\u5165\u548c \u2461 \u63d0\u793a\u8bcd Prompt \u6587\u672c\u7684\u5d4c\u5165\u8868\u793a context \u4f5c\u4e3a condition\uff0c\u4e24\u8005\u4f7f\u7528 cross attention \u8fdb\u884c\u5efa\u6a21\u3002\u5176\u4e2d\uff0cSpatialTransformer \u91cc\u9762\u7684\u6ce8\u610f\u529b\u6a21\u5757 CrossAttention \u7ed3\u6784\uff0c\u628a\u56fe\u50cf\u5411\u91cf\u4f5c\u4e3a Query\uff0c\u6587\u672c\u8868\u793a context \u4f5c\u4e3a Key&Value\uff0c\u5229\u7528 Cross Attention \u6a21\u5757\u6765\u5b66\u4e60\u56fe\u50cf\u548c\u6587\u672c\u5bf9\u5e94\u5185\u5bb9\u7684\u76f8\u5173\u6027\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Alt text",src:t(622).Z+"",width:"640",height:"383"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},5160:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/image-1-af732d127a2ef6d52b77f88f06e8fb34.png"},622:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/image-2-b3a737e7713e98c4ade60bb20e3ee93d.png"},5763:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/image-f803cac0c14bcabd9a0374c5f3fdda46.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var s=t(7294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);