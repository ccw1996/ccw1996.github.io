"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[7586],{9128:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"ml/quantize/pytorch_int8","title":"PyTorch\u6a21\u578b\u9759\u6001\u91cf\u5316\u3001\u4fdd\u5b58\u3001\u52a0\u8f7dint8\u91cf\u5316\u6a21\u578b","description":"\u5176\u4e00\uff0c\u51cf\u5c11memory footprint\u3002\u6211\u4eec\u77e5\u9053\u5f88\u591a\u65f6\u5019\u63a8\u7406\u6027\u80fd\u7684\u74f6\u9888\u4e0d\u5728\u4e8e\u8ba1\u7b97\u800c\u5728\u4e8e\u8bbf\u5b58\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u63d0\u9ad8\u8ba1\u7b97\u5bc6\u5ea6\u4f1a\u5bf9\u8017\u65f6\u6709\u663e\u8457\u7684\u4f18\u5316\u6548\u679c\uff1b","source":"@site/docs/ml/quantize/pytorch_int8.md","sourceDirName":"ml/quantize","slug":"/ml/quantize/pytorch_int8","permalink":"/docs/ml/quantize/pytorch_int8","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/quantize/pytorch_int8.md","tags":[{"inline":true,"label":"work","permalink":"/docs/tags/work"}],"version":"current","lastUpdatedAt":1735748685000,"frontMatter":{"title":"PyTorch\u6a21\u578b\u9759\u6001\u91cf\u5316\u3001\u4fdd\u5b58\u3001\u52a0\u8f7dint8\u91cf\u5316\u6a21\u578b","tags":["work"]},"sidebar":"tutorialSidebar","previous":{"title":"2D\u548c3D\u76ee\u6807\u68c0\u6d4b\u5668\u90fd\u9002\u7528\u7684int8\u91cf\u5316\u65b9\u6cd5\u2014\u2014DetPTQ","permalink":"/docs/ml/quantize/det-qat"},"next":{"title":"QAT\u91cf\u5316","permalink":"/docs/ml/quantize/qat"}}');var l=n(4848),i=n(8453);const r={title:"PyTorch\u6a21\u578b\u9759\u6001\u91cf\u5316\u3001\u4fdd\u5b58\u3001\u52a0\u8f7dint8\u91cf\u5316\u6a21\u578b",tags:["work"]},c="\u6a21\u578b\u91cf\u5316\u6709\u4ec0\u4e48\u597d\u5904",t={},m=[];function h(s){const e={a:"a",annotation:"annotation",blockquote:"blockquote",h1:"h1",header:"header",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",mtext:"mtext",p:"p",semantics:"semantics",span:"span",ul:"ul",...(0,i.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"\u6a21\u578b\u91cf\u5316\u6709\u4ec0\u4e48\u597d\u5904",children:"\u6a21\u578b\u91cf\u5316\u6709\u4ec0\u4e48\u597d\u5904"})}),"\n",(0,l.jsx)(e.p,{children:"\u5176\u4e00\uff0c\u51cf\u5c11memory footprint\u3002\u6211\u4eec\u77e5\u9053\u5f88\u591a\u65f6\u5019\u63a8\u7406\u6027\u80fd\u7684\u74f6\u9888\u4e0d\u5728\u4e8e\u8ba1\u7b97\u800c\u5728\u4e8e\u8bbf\u5b58\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u63d0\u9ad8\u8ba1\u7b97\u5bc6\u5ea6\u4f1a\u5bf9\u8017\u65f6\u6709\u663e\u8457\u7684\u4f18\u5316\u6548\u679c\uff1b"}),"\n",(0,l.jsx)(e.p,{children:"\u5176\u4e8c\uff0c\u8282\u7701\u5b58\u50a8\u7a7a\u95f4\uff0c\u51cf\u5c11\u5e94\u7528\u7684size\uff0c\u540c\u65f6\u4fbf\u4e8e\u8f6f\u4ef6\u7684\u5347\u7ea7\u66f4\u65b0\u3002"}),"\n",(0,l.jsx)(e.h1,{id:"\u91cf\u5316\u7684\u5bf9\u8c61\u662f\u4ec0\u4e48",children:"\u91cf\u5316\u7684\u5bf9\u8c61\u662f\u4ec0\u4e48\uff1f"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"weight\uff08\u6743\u91cd\uff09\uff1aweight\u7684\u91cf\u5316\u662f\u6700\u5e38\u89c4\u4e5f\u662f\u6700\u5e38\u89c1\u7684\u3002\u91cf\u5316weight\u53ef\u8fbe\u5230\u51cf\u5c11\u6a21\u578b\u5927\u5c0f\u5185\u5b58\u548c\u5360\u7528\u7a7a\u95f4\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"activation\uff08\u6fc0\u6d3b\u51fd\u6570\u8f93\u51fa\uff09\uff1a\u5b9e\u9645\u4e2dactivation\u5f80\u5f80\u662f\u5360\u5185\u5b58\u4f7f\u7528\u7684\u5927\u5934\uff0c\u56e0\u6b64\u91cf\u5316activation\u4e0d\u4ec5\u53ef\u4ee5\u5927\u5927\u51cf\u5c11\u5185\u5b58\u5360\u7528\u3002\u66f4\u91cd\u8981\u7684\u662f\uff0c\u7ed3\u5408weight\u7684\u91cf\u5316\u53ef\u4ee5\u5145\u5206\u5229\u7528\u6574\u6570\u8ba1\u7b97\u83b7\u5f97\u6027\u80fd\u63d0\u5347\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"gradient\uff08\u68af\u5ea6\uff09\u76f8\u5bf9\u4e0a\u9762\u4e24\u8005\u7565\u5fae\u5c0f\u4f17\u4e00\u4e9b\uff0c\u56e0\u4e3a\u4e3b\u8981\u7528\u4e8e\u8bad\u7ec3\u3002\u5b83\u4e3b\u8981\u4f5c\u7528\u662f\u5728\u5206\u5e03\u5f0f\u8ba1\u7b97\u4e2d\u51cf\u5c11\u901a\u4fe1\u5f00\u9500\uff0c\u5355\u673a\u8bad\u7ec3\u65f6\u4e5f\u53ef\u4ee5\u51cf\u5c11backward\u65f6\u7684\u5f00\u9500\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h1,{id:"\u91cf\u5316\u7684\u5206\u7c7b",children:"\u91cf\u5316\u7684\u5206\u7c7b"}),"\n",(0,l.jsx)(e.p,{children:"Level 1:\u65e0\u6570\u636e\u79bb\u7ebf\u91cf \u65e0\u9700\u6570\u636e\uff0c\u4e0d\u9700\u8981\u53cd\u5411\u4f20\u64ad\uff0c\u4e00\u4e2a API \u8c03\u7528\u5b8c\u6210\u91cf\u5316\u6a21\u578b\u751f\u4ea7"}),"\n",(0,l.jsx)(e.p,{children:"Level 2:\u6709\u6570\u636e\u79bb\u7ebf\u91cf\u5316 \u9700\u8981\u6570\u636e\uff0c\u4e0d\u9700\u8981\u53cd\u5411\u4f20\u64ad\uff0c\u6570\u636e\u7528\u4e8e\u6821\u51c6 BN\uff0c\u6216\u8005\u7edf\u8ba1\u6fc0\u6d3b\u503c\u5206\u5e03\uff0c\u7528\u4e8e\u964d\u4f4e\u8bb2\u8bdd\uff1f\u8bef\u5dee"}),"\n",(0,l.jsx)(e.p,{children:"Level 3:\u91cf\u5316\u611f\u77e5\u8bad\u7ec3 \u9700\u8981\u6570\u636e\uff0c\u9700\u8981\u53cd\u5411\u4f20\u64ad\u3002\u901a\u8fc7\u8bad\u7ec3\u548c\u5fae\u8c03\u4f7f\u91cf\u5316\u6a21\u578b\u8fbe\u5230\u53ef\u63a5\u53d7\u7684\u7cbe\u5ea6\uff0c\u4e00\u822c\u9700\u8981\u5b8c\u6574\u7684\u8bad\u7ec3\u8fc7\u7a0b\u548c\u8d85\u53c2\u6570\u8c03\u6574"}),"\n",(0,l.jsx)(e.p,{children:"Level 4:\u4fee\u6539\u7f51\u7edc\u7ed3\u6784\u7684\u91cf\u5316\u611f\u77e5\u8bad\u7ec3 \u9700\u8981\u6570\u636e\uff0c\u9700\u8981\u53cd\u5411\u4f20\u64ad\uff0c\u540c\u65f6\u8c03\u6574\u7f51\u7edc\u7ed3\u6784\u3002\u9700\u8981\u660e\u663e\u66f4\u591a\u7684\u8bad\u7ec3\u65f6\u95f4\u548c\u7ec6\u81f4\u7684\u8d85\u53c2\u6570\u8c03\u6574"}),"\n",(0,l.jsx)(e.h1,{id:"\u6a21\u578b\u91cf\u5316\u7684\u8fc7\u7a0b",children:"\u6a21\u578b\u91cf\u5316\u7684\u8fc7\u7a0b"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"Q"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mi,{children:"r"}),(0,l.jsx)(e.mi,{children:"o"}),(0,l.jsx)(e.mi,{children:"u"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"d"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"s"}),(0,l.jsx)(e.mi,{children:"c"}),(0,l.jsx)(e.mi,{children:"a"}),(0,l.jsx)(e.mi,{children:"l"}),(0,l.jsx)(e.mi,{children:"e"}),(0,l.jsx)(e.mi,{children:"f"}),(0,l.jsx)(e.mi,{children:"a"}),(0,l.jsx)(e.mi,{children:"c"}),(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mi,{children:"o"}),(0,l.jsx)(e.mi,{children:"r"}),(0,l.jsx)(e.mo,{children:"\u2217"}),(0,l.jsx)(e.mi,{children:"c"}),(0,l.jsx)(e.mi,{children:"l"}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mi,{children:"p"}),(0,l.jsx)(e.mtext,{children:"\uff08"}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mi,{children:"\u03b1"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mi,{children:"\u03b2"}),(0,l.jsx)(e.mtext,{children:"\uff09"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mi,{children:"z"}),(0,l.jsx)(e.mi,{children:"e"}),(0,l.jsx)(e.mi,{children:"r"}),(0,l.jsx)(e.mi,{children:"o"}),(0,l.jsx)(e.mi,{children:"p"}),(0,l.jsx)(e.mi,{children:"o"}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"t"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:" Q = round(scale factor * clip\uff08x,\u03b1,\u03b2\uff09)+ zero point"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"Q"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"ro"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"sc"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"or"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(e.span,{className:"mord cjk_fallback",children:"\uff08"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.0037em"},children:"\u03b1"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,l.jsx)(e.span,{className:"mord cjk_fallback",children:"\uff09"}),(0,l.jsx)(e.span,{className:"mclose",children:")"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"zero"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"in"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"})]})]})]})}),"\n",(0,l.jsx)(e.h1,{id:"\u6a21\u578b\u7684\u91cf\u5316\u7c92\u5ea6",children:"\u6a21\u578b\u7684\u91cf\u5316\u7c92\u5ea6"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u901a\u9053\u91cf\u5316\uff08Per-axis/per-channel\uff09\uff1a\u5bf9tensor\u7684\u5355\u4e2a\u8f74\u6709\u5355\u72ec\u7684\u91cf\u5316\u53c2\u6570\uff0c\u5982per-channel\u5c31\u662fweight\u7684\u6bcf\u4e2achannel\u4f7f\u7528\u5355\u72ec\u7684\u91cf\u5316\u53c2\u6570\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0cper-channel \u56e0\u4e3a\u91cf\u5316\u7684\u7c92\u5ea6\u66f4\u7ec6\u81f4\uff0c\u91cf\u5316\u53c2\u6570\u7684\u81ea\u7531\u5ea6\u66f4\u9ad8\uff0c\u5f80\u5f80\u66f4\u4f18\u4e8e per-tensor \u7684\u91cf\u5316\u7cbe\u5ea6\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5c42\u91cf\u5316\uff08Per-tensor/per-layer\uff09\uff1a\u6bcf\u4e2atensor\u6709\u5355\u72ec\u7684\u91cf\u5316\u53c2\u6570\u3002\u5bf9\u4e8e\u5377\u79ef\u6216\u5168\u8fde\u63a5\u5c42\u8fd9\u4e9b\u7684\u8bdd\u8fd9\u4e5f\u5c31\u610f\u5473\u7740\u6bcf\u5c42\u72ec\u7acb\u7684\u91cf\u5316\u53c2\u6570\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Global\uff1a\u5373\u6574\u4e2a\u7f51\u7edc\u4f7f\u7528\u76f8\u540c\u7684\u91cf\u5316\u53c2\u6570\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u5bf9\u4e8e8\u4f4d\u91cf\u5316\uff0c\u5168\u5c40\u91cf\u5316\u53c2\u6570\u5f71\u54cd\u4e0d\u660e\u663e\uff0c\u4f46\u5230\u66f4\u4f4e\u7cbe\u5ea6\uff0c\u5c31\u4f1a\u5bf9\u51c6\u786e\u7387\u6709\u8f83\u5927\u5f71\u54cd\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Pytorch\u7684\u91cf\u5316"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://zhuanlan.zhihu.com/p/299108528",children:"https://zhuanlan.zhihu.com/p/299108528"})}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"1.\u6570\u636e\u96c6\u4e0b\u8f7d\uff08\u5728\u505a\u9759\u6001\u91cf\u5316\u65f6\u9700\u8981\u5bf9\u6570\u636e\u96c6\u8fdb\u884c\u63a8\u7406\u83b7\u53d6\u6570\u636e\u7684\u5206\u5e03\u7279\u70b9\u3001\u5b9a\u6807\uff09\uff0c\u7528MSCOCO\u7684\u9a8c\u8bc1\u96c6\uff0c\u9009100\u5f20\u5de6\u53f3MSCOCO_val2017"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"http://images.cocodataset.org/zips/val2017.zip",children:"http://images.cocodataset.org/zips/val2017.zip"})}),"\n",(0,l.jsx)(e.p,{children:"2.Pytorch\u6a21\u578b\u6587\u4ef6\u53ef\u4ee5\u4ece\u8fd9\u91cc\u4e0b\u8f7dPose_Model\u63d0\u53d6\u5bc6\u7801\uff1as7qh."}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://pan.baidu.com/s/1nvml9pB",children:"https://pan.baidu.com/s/1nvml9pB"})}),"\n",(0,l.jsx)(e.p,{children:"3.\u91cf\u5316\u4ee3\u7801\u4e0b\u8f7dPytorch_Model_Quantization"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://github.com/Laicheng0830/Pytorch_Model_Quantization",children:"https://github.com/Laicheng0830/Pytorch_Model_Quantization"})}),"\n",(0,l.jsx)(e.p,{children:"\u6ce8\u610f\uff1a\u91cf\u5316\u540e\u6a21\u578b\u7684forward\u4ee3\u7801\u7a0d\u6709\u6539\u52a8\uff0c\u9700\u8981\u5728\u6a21\u578b\u8f93\u5165\u524d\u540e\u5b89\u63d2\u91cf\u5316\u548c\u89e3\u91cf\u5316\u3002\u5982\u4e0b\u793a\u4f8b\uff1a"})]})}function d(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}},8453:(s,e,n)=>{n.d(e,{R:()=>r,x:()=>c});var a=n(6540);const l={},i=a.createContext(l);function r(s){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:r(s.components),a.createElement(i.Provider,{value:e},s.children)}}}]);