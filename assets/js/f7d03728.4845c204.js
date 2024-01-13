"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[2929],{6743:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>m,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var n=a(5893),l=a(1151);const i={title:"transformer \u89e3\u8bfb",tags:["machine learning","interview"]},m="attention\u673a\u5236",t={id:"ml/attention_is_all_you_need",title:"transformer \u89e3\u8bfb",description:"Alt text",source:"@site/docs/ml/attention_is_all_you_need.md",sourceDirName:"ml",slug:"/ml/attention_is_all_you_need",permalink:"/docs/ml/attention_is_all_you_need",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/attention_is_all_you_need.md",tags:[{label:"machine learning",permalink:"/docs/tags/machine-learning"},{label:"interview",permalink:"/docs/tags/interview"}],version:"current",lastUpdatedAt:1705157542,formattedLastUpdatedAt:"Jan 13, 2024",frontMatter:{title:"transformer \u89e3\u8bfb",tags:["machine learning","interview"]},sidebar:"tutorialSidebar",previous:{title:"\u7a00\u758f\u77e9\u9635\u9ad8\u6027\u80fd\u90e8\u7f72",permalink:"/docs/ml/sparse_tensorrt"},next:{title:"CPU Cache\u7684\u6d4b\u91cf\u65b9\u6cd5",permalink:"/docs/ml/cache"}},r={},c=[{value:"encoder",id:"encoder",level:2},{value:"decoder",id:"decoder",level:2}];function h(s){const e={a:"a",annotation:"annotation",blockquote:"blockquote",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",msup:"msup",ol:"ol",p:"p",semantics:"semantics",span:"span",...(0,l.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Alt text",src:a(3118).Z+"",width:"559",height:"819"})}),"\n",(0,n.jsx)(e.h1,{id:"attention\u673a\u5236",children:"attention\u673a\u5236"}),"\n",(0,n.jsxs)(e.p,{children:["Attention\u901a\u5e38\u53ef\u4ee5\u8fdb\u884c\u5982\u4e0b\u63cf\u8ff0\uff0c\u8868\u793a\u4e3a\u5c06query(Q)\u548ckey-value pairs ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"K"}),(0,n.jsx)(e.mi,{children:"i"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"V"}),(0,n.jsx)(e.mi,{children:"i"})]}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"m"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"{K_{i},V_{i}|i=1,2,...,m}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.2222em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord",children:"..."}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"m"})]})]})})]}),"\n\u6620\u5c04\u5230\u8f93\u51fa\u4e0a\uff0c\u5176\u4e2dquery\u3001\u6bcf\u4e2akey\u3001\u6bcf\u4e2avalue\u90fd\u662f\u5411\u91cf\uff0c\u8f93\u51fa\u662fV\u4e2d\u6240\u6709values\u7684\u52a0\u6743\uff0c\u5176\u4e2d\u6743\u91cd\u662f\u7531Query\u548c\u6bcf\u4e2akey\u8ba1\u7b97\u51fa\u6765\u7684\uff0c\u8ba1\u7b97\u65b9\u6cd5\u5206\u4e3a\u4e09\u6b65\uff1a\n",(0,n.jsx)(e.img,{alt:"Alt text",src:a(9498).Z+"",width:"949",height:"987"})]}),"\n",(0,n.jsx)(e.h1,{id:"transformer\u67b6\u6784",children:"transformer\u67b6\u6784"}),"\n",(0,n.jsx)(e.h2,{id:"encoder",children:"encoder"}),"\n",(0,n.jsx)(e.p,{children:"Encoder\u6709N=6\u5c42\uff0c\u6bcf\u5c42\u5305\u62ec\u4e24\u4e2asub-layers:"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"\u7b2c\u4e00\u4e2asub-layer\u662fmulti-head self-attention mechanism\uff0c\u7528\u6765\u8ba1\u7b97\u8f93\u5165\u7684self-attention"}),"\n",(0,n.jsx)(e.li,{children:"\u7b2c\u4e8c\u4e2asub-layer\u662f\u7b80\u5355\u7684\u5168\u8fde\u63a5\u7f51\u7edc\u3002"}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["\u5728\u6bcf\u4e2asub-layer\u6211\u4eec\u90fd\u6a21\u62df\u4e86\u6b8b\u5dee\u7f51\u7edc\uff0c\u6bcf\u4e2asub-layer\u7684\u8f93\u51fa\u90fd\u662f\n",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"L"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"N"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mi,{children:"S"}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mi,{children:"b"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"LayerNorm(x+Sublayer(x))"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"L"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"yer"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"or"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"b"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"yer"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mclose",children:"))"})]})]})]}),"\n\u5176\u4e2dSublayer(x) \u8868\u793aSub-layer\u5bf9\u8f93\u5165x\u505a\u7684\u6620\u5c04\uff0c\u4e3a\u4e86\u786e\u4fdd\u8fde\u63a5\uff0c\u6240\u6709\u7684sub-layers\u548cembedding layer\u8f93\u51fa\u7684\u7ef4\u6570\u90fd\u76f8\u540cd=512"]}),"\n",(0,n.jsx)(e.h2,{id:"decoder",children:"decoder"}),"\n",(0,n.jsx)(e.p,{children:"Decoder\u4e5f\u662fN=6\u5c42\uff0c\u6bcf\u5c42\u5305\u62ec3\u4e2asub-layers\uff1a"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"\u7b2c\u4e00\u4e2a\u662fMasked multi-head self-attention\uff0c\u4e5f\u662f\u8ba1\u7b97\u8f93\u5165\u7684self-attention\uff0c\u4f46\u662f\u56e0\u4e3a\u662f\u751f\u6210\u8fc7\u7a0b\uff0c\u56e0\u6b64\u5728\u65f6\u523bi\u7684\u65f6\u5019\uff0c\u5927\u4e8ei\u7684\u65f6\u523b\u90fd\u6ca1\u6709\u7ed3\u679c\uff0c\u53ea\u6709\u5c0f\u4e8ei\u7684\u65f6\u523b\u6709\u7ed3\u679c\uff0c\u56e0\u6b64\u9700\u8981\u505aMask"}),"\n",(0,n.jsx)(e.li,{children:"\u7b2c\u4e8c\u4e2asub-layer\u662f\u5168\u8fde\u63a5\u7f51\u7edc\uff0c\u4e0eEncoder\u76f8\u540c"}),"\n",(0,n.jsx)(e.li,{children:"\u7b2c\u4e09\u4e2asub-layer\u662f\u5bf9encoder\u7684\u8f93\u5165\u8fdb\u884cattention\u8ba1\u7b97\u3002"}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"\u540c\u65f6Decoder\u4e2d\u7684self-attention\u5c42\u9700\u8981\u8fdb\u884c\u4fee\u6539\uff0c\u56e0\u4e3a\u53ea\u80fd\u83b7\u53d6\u5230\u5f53\u524d\u65f6\u523b\u4e4b\u524d\u7684\u8f93\u5165\uff0c\u56e0\u6b64\u53ea\u5bf9\u65f6\u523bt\u4e4b\u524d\u7684\u65f6\u523b\u8f93\u5165\u8fdb\u884cattention\u8ba1\u7b97\uff0c\u8fd9\u4e5f\u79f0\u4e3aMask\u64cd\u4f5c\u3002"}),"\n",(0,n.jsx)(e.h1,{id:"attention\u673a\u5236-1",children:"attention\u673a\u5236"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Alt text",src:a(162).Z+"",width:"947",height:"353"})}),"\n",(0,n.jsx)(e.p,{children:"\u90a3\u4e48Scaled Dot-Product Attention\u7684\u793a\u610f\u56fe\u5982\u4e0b\u6240\u793a\uff0cMask\u662f\u53ef\u9009\u7684(opt.)\uff0c\u5982\u679c\u662f\u80fd\u591f\u83b7\u53d6\u5230\u6240\u6709\u65f6\u523b\u7684\u8f93\u5165(K, V), \u90a3\u4e48\u5c31\u4e0d\u4f7f\u7528Mask\uff1b\u5982\u679c\u662f\u4e0d\u80fd\u83b7\u53d6\u5230\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u4f7f\u7528Mask\u3002\u4f7f\u7528\u4e86Mask\u7684Transformer\u6a21\u578b\u4e5f\u88ab\u79f0\u4e3aTransformer Decoder\uff0c\u4e0d\u4f7f\u7528Mask\u7684Transformer\u6a21\u578b\u4e5f\u88ab\u79f0\u4e3aTransformer Encoder\u3002"}),"\n",(0,n.jsx)(e.h1,{id:"qkv\u600e\u4e48\u6765\u7684",children:"Q\u3001K\u3001V\u600e\u4e48\u6765\u7684"}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"https://www.zhihu.com/tardis/zm/art/414084879?source_id=1005",children:"https://www.zhihu.com/tardis/zm/art/414084879?source_id=1005"})}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["Q\u3001K\u3001V\u5176\u5b9e\u90fd\u662f\u4ece\u540c\u6837\u7684\u8f93\u5165\u77e9\u9635X\u7ebf\u6027\u53d8\u6362\u800c\u6765\u7684\u3002\u6211\u4eec\u53ef\u4ee5\u7b80\u5355\u7406\u89e3\u6210\uff1a\n",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"Q"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"X"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"W"}),(0,n.jsx)(e.mi,{children:"Q"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:" Q=XW^{Q}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"Q"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8413em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"W"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8413em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"Q"})})})]})})})})})]})]})]})]}),"\n",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"K"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"X"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"W"}),(0,n.jsx)(e.mi,{children:"K"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:" K=XW^{K}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8413em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"W"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8413em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.07153em"},children:"K"})})})]})})})})})]})]})]})]}),"\n",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"V"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"X"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"W"}),(0,n.jsx)(e.mi,{children:"V"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:" V=XW^{V}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8413em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"W"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8413em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.22222em"},children:"V"})})})]})})})})})]})]})]})]})]}),"\n",(0,n.jsx)(e.p,{children:"\u5176\u4e2d\uff0cW^Q\uff0cW^K\u548cW^V\u662f\u4e09\u4e2a\u53ef\u8bad\u7ec3\u7684\u53c2\u6570\u77e9\u9635\u3002"}),"\n",(0,n.jsxs)(e.p,{children:["q1 = X1 * WQ\uff0cq1\u4e3aQ\u77e9\u9635\u4e2d\u7684\u884c\u5411\u91cf\uff0ck1\u7b49\u4e0e\u4e4b\u7c7b\u4f3c\u3002\n",(0,n.jsx)(e.img,{alt:"Alt text",src:a(4344).Z+"",width:"875",height:"552"})]}),"\n",(0,n.jsx)(e.h1,{id:"multi-head-attention",children:"multi-head attention"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Alt text",src:a(3041).Z+"",width:"1080",height:"1187"})}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"https://hackmd.io/@abliu/BkXmzDBmr",children:"https://hackmd.io/@abliu/BkXmzDBmr"})}),"\n"]})]})}function d(s={}){const{wrapper:e}={...(0,l.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},3118:(s,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-4-4e37a12345f7b6e97476ac34e35312ed.png"},9498:(s,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-5-74cf0d2313fafa5992ab94c1ce7e1248.png"},162:(s,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-6-f1229057405d072e7983a3e9ee6f9970.png"},4344:(s,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-7-23050ae8e4d56d6918d14af8a8a18d72.png"},3041:(s,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-8-7bd3d982bea63ec0a715d52f907c9b58.png"},1151:(s,e,a)=>{a.d(e,{Z:()=>t,a:()=>m});var n=a(7294);const l={},i=n.createContext(l);function m(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:m(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);