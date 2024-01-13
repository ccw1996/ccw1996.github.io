"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[7635],{6729:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=t(5893),r=t(1151);const a={title:"mobileViT \u8be6\u89e3",description:"mobileViT \u8be6\u89e3",sidebar_position:1,tags:["machine learning","interview"],editor:"caroot"},s=void 0,o={id:"ml/paper/mobileVIT",title:"mobileViT \u8be6\u89e3",description:"mobileViT \u8be6\u89e3",source:"@site/docs/ml/paper/mobileVIT.md",sourceDirName:"ml/paper",slug:"/ml/paper/mobileVIT",permalink:"/docs/ml/paper/mobileVIT",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/paper/mobileVIT.md",tags:[{label:"machine learning",permalink:"/docs/tags/machine-learning"},{label:"interview",permalink:"/docs/tags/interview"}],version:"current",lastUpdatedAt:1705157542,formattedLastUpdatedAt:"Jan 13, 2024",sidebarPosition:1,frontMatter:{title:"mobileViT \u8be6\u89e3",description:"mobileViT \u8be6\u89e3",sidebar_position:1,tags:["machine learning","interview"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"paper",permalink:"/docs/ml/paper/"},next:{title:"RepVGG \u8be6\u89e3",permalink:"/docs/ml/paper/RepVGG"}},l={},d=[{value:"\u4f30\u7b97transformer\u6a21\u578b\u7684\u5185\u5b58",id:"\u4f30\u7b97transformer\u6a21\u578b\u7684\u5185\u5b58",level:2},{value:"\u4f30\u7b97transformer\u4e2d\u95f4\u53d8\u91cf\u7684\u5185\u5b58",id:"\u4f30\u7b97transformer\u4e2d\u95f4\u53d8\u91cf\u7684\u5185\u5b58",level:2},{value:"mobilevit \u7ed3\u6784",id:"mobilevit-\u7ed3\u6784",level:2},{value:"transformer encoder",id:"transformer-encoder",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://blog.csdn.net/qq_37541097/article/details/126715733",children:"https://blog.csdn.net/qq_37541097/article/details/126715733"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4f30\u7b97transformer\u6a21\u578b\u7684\u5185\u5b58",children:"\u4f30\u7b97transformer\u6a21\u578b\u7684\u5185\u5b58"}),"\n",(0,i.jsx)(n.p,{children:"GPT\u7531\u8bb8\u591atransformer\u5757\u7ec4\u6210"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"multi_headed_attention --\x3e layer_normalization --\x3e MLP --\x3elayer_normalization"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u6bcf\u4e2amulti_headed_attention\u5143\u7d20\u90fd\u7531\u952e\uff0c\u503c\u548c\u67e5\u8be2\u7ec4\u6210\u3002\u5176\u4e2d\u5305\u62ecn_head\u4e2a\u6ce8\u610f\u529b\u5934\u548cdim\u4e2a\u7ef4\u5ea6\u3002MLP\u662f\u5305\u542b\u6709n_head * dim\u7684\u5c3a\u5bf8\u3002\u8fd9\u4e9b\u6743\u91cd\u90fd\u662f\u8981\u5360\u7528\u5185\u5b58\u7684\uff0c\u90a3\u4e48"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:" memory_modal = memory of multi_headed_attention + memory of MLP\n  = memory of value + memory of key + memory of query + memory of MLP\n  = square_of(n_head * dim) + square_of(n_head * dim) + square_of(n_head * dim) + square_of(n_head * dim)\n  = 4*square_of(n_head * dim)\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u56e0\u4e3a\u6211\u4eec\u7684\u6a21\u578b\u5305\u542b\u4e86n\u4e2a\u5355\u5143\u3002\u6240\u4ee5\u6700\u540e\u5185\u5b58\u5c31\u53d8\u4e3a\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:" memory_modal = 4*n_tr_blocks*square_of(n_head * dim)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4f30\u7b97transformer\u4e2d\u95f4\u53d8\u91cf\u7684\u5185\u5b58",children:"\u4f30\u7b97transformer\u4e2d\u95f4\u53d8\u91cf\u7684\u5185\u5b58"}),"\n",(0,i.jsx)(n.p,{children:"\u591a\u5934\u6ce8\u610f\u529b\u901a\u5e38\u4f7f\u7528softmax\uff0c\u53ef\u4ee5\u5199\u6210:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"multi_headed_attention = softmax(query * key * sequence_length) * value\n"})}),"\n",(0,i.jsx)(n.p,{children:"k,q,v\u7684\u7ef4\u5ea6\u662f\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"[batch_size, n_head, sequence_length, dim]\n"})}),"\n",(0,i.jsx)(n.p,{children:"multi_headed_attention\u64cd\u4f5c\u4f1a\u5f97\u51fa\u5982\u4e0b\u5f62\u72b6\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"[batch_size, n_head, sequence_length, sequence_length]\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6240\u4ee5\u6700\u7ec8\u5f97\u5185\u5b58\u4e3a\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"memory_softmax = batch_size * n_head * square_of(sequence_length)\n"})}),"\n",(0,i.jsx)(n.p,{children:"MLP\u4e5f\u6709\u76f8\u540c\u7684\u7ef4\u5ea6\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"memory of MLP = batch_size * n_head * sequence_length * dim\nmemory of value = batch_size * n_head * sequence_length * dim\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u628a\u4e0a\u9762\u7684\u6574\u5408\u5728\u4e00\u8d77\uff0c\u5355\u4e2atransformer\u7684\u4e2d\u95f4\u53d8\u91cf\u4e3a\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"memory_activations = memory_softmax + memory_value + memory_MLP\n= batch_size * n_head * square_of(sequence_length)\n  + batch_size * n_head * sequence_length * dim\n  + batch_size * n_head * sequence_length * dim\n= batch_size * n_head * sequence_length * (sequence_length + 2*dim)\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u518d\u4e58\u4ee5\u5757\u7684\u6570\u91cf\uff0c\u6a21\u578b\u6240\u6709\u7684memory_activations\u5c31\u662f\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:" n_tr_blocks * (batch_size * n_head * sequence_length * (sequence_length + 2*dim))\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8bad\u7ec3\u65f6\u9700\u8981\u7684\u5185\u5b58\u603b\u91cf\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"total_memory = memory_modal + 2 * memory_activations\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"R = n_tr_blocks = transformer\u5c42\u5806\u53e0\u7684\u6570\u91cf\nN = n_head = \u6ce8\u610f\u529b\u5934\u6570\u91cf\nD = dim = \u6ce8\u610f\u529b\u5934\u7684\u7ef4\u5ea6\nB = batch_size = \u6279\u5927\u5c0f\nS = sequence_length =\u8f93\u5165\u5e8f\u5217\u7684\u957f\u5ea6"}),"\n",(0,i.jsx)(n.p,{children:"memory modal = 4 * R * N^2 * D^2"}),"\n",(0,i.jsx)(n.p,{children:"memory activations = RBNS(S + 2D)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"mobilevit-\u7ed3\u6784",children:"mobilevit \u7ed3\u6784"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"mobilevit.png",src:t(2056).Z+"",width:"1177",height:"564"})}),"\n",(0,i.jsx)(n.h3,{id:"transformer-encoder",children:"transformer encoder"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"tranform_encoder.png",src:t(6253).Z+"",width:"1170",height:"649"})}),"\n",(0,i.jsx)(n.p,{children:"mobilevit\u7684self-attention\u8ddf\u666e\u901a\u7684self-attention\u6709\u6240\u533a\u522b"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u9996\u5148\u5c06\u7279\u5f81\u56fe\u5212\u5206\u4e3a\u4e00\u4e2a\u4e2apatch\uff0c\u4ee52*2\u7684\u5927\u5c0f\u4e3a\u4f8b"}),"\n",(0,i.jsx)(n.li,{children:"\u5728\u5b9e\u9645\u505aattention\u4e2d\uff0c\u5c06patch\u4e2d\u5bf9\u6bcf\u4e00\u4e2a\u76f8\u540c\u4f4d\u7f6e\u7684\u6570\u636e\u505aself-attention,\u5373\u5c06\u989c\u8272\u76f8\u540c\u7684\u505aself-attention(\u539f\u59cbattention\uff0c\u6bcf\u4e2atoken\u8981\u4e0e\u6240\u6709token\u8ba1\u7b97attention)"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5bf9\u4e8e\u666e\u901a\u7684Self-Attention\u8ba1\u7b97\u524d\uff0c\u4e00\u822c\u662f\u76f4\u63a5\u5c55\u5e73H, W\u4e24\u4e2a\u7ef4\u5ea6\u5f97\u5230\u4e00\u4e2aToken\u5e8f\u5217\uff0c\u5373\u5c06[N, H, W, C] -> [N, H*W, C]\u5176\u4e2dN\u8868\u793aBatch\u7ef4\u5ea6\u3002\u4f46\u5728MobileViT block\u7684Self-Attention\u8ba1\u7b97\u4e2d\uff0c\u53ea\u662f\u5c06\u989c\u8272\u76f8\u540c\u7684Token\u8fdb\u884c\u4e86Attention\uff0c\u6240\u4ee5\u4e0d\u80fd\u7b80\u5355\u7c97\u66b4\u7684\u5c55\u5e73H, W\u7ef4\u5ea6\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u6587\u4e2d\u7684Unfold\u5c31\u662f\u5c06\u76f8\u540c\u989c\u8272\u7684Token\u5c55\u5e73\u5728\u4e00\u4e2a\u5e8f\u5217\u4e2d\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u666e\u901a\u7684Self-Attention\u5e76\u884c\u8ba1\u7b97\u6bcf\u4e2a\u5e8f\u5217\u7684Attention\u4e86\u3002\u6700\u540e\u5728\u901a\u8fc7Fold\u6298\u53e0\u56de\u539f\u7279\u5f81\u56fe\u5373\u53ef\u3002\n",(0,i.jsx)(n.img,{alt:"fold.png",src:t(6616).Z+"",width:"1052",height:"296"})]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},6616:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/fold-6d8a953e0109c32def839e1e20e9eb5c.png"},2056:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/mobilevit-79fe9ff82d22563ad77e684b2714b925.png"},6253:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/tranform_encoder-c29f4fc5fa585d2801e25e32e8d68eb0.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var i=t(7294);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);