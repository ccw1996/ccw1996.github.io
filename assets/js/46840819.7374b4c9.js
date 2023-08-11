"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[4948],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(t),d=i,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[f]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3740:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const o={title:"\u5377\u79ef\u795e\u7ecf\u7f51\u7edc(CNN)\u5f20\u91cf(\u56fe\u50cf)\u7684\u5c3a\u5bf8\u548c\u53c2\u6570\u8ba1\u7b97",tags:["work"],editor:"caroot"},a="\u56fe\u50cf\u5927\u5c0f",s={unversionedId:"ml/size",id:"ml/size",title:"\u5377\u79ef\u795e\u7ecf\u7f51\u7edc(CNN)\u5f20\u91cf(\u56fe\u50cf)\u7684\u5c3a\u5bf8\u548c\u53c2\u6570\u8ba1\u7b97",description:"## \u5377\u79ef\u5c42",source:"@site/docs/ml/size.md",sourceDirName:"ml",slug:"/ml/size",permalink:"/docs/ml/size",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/size.md",tags:[{label:"work",permalink:"/docs/tags/work"}],version:"current",frontMatter:{title:"\u5377\u79ef\u795e\u7ecf\u7f51\u7edc(CNN)\u5f20\u91cf(\u56fe\u50cf)\u7684\u5c3a\u5bf8\u548c\u53c2\u6570\u8ba1\u7b97",tags:["work"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"QAT\u91cf\u5316",permalink:"/docs/ml/quantize/qat"},next:{title:"other",permalink:"/docs/other/"}},l={},p=[],c={toc:p},f="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(f,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u56fe\u50cf\u5927\u5c0f"},"\u56fe\u50cf\u5927\u5c0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"## \u5377\u79ef\u5c42\n    O=\u8f93\u51fa\u56fe\u50cf\u7684\u5c3a\u5bf8\u3002\n    I=\u8f93\u5165\u56fe\u50cf\u7684\u5c3a\u5bf8\u3002\n    K=\u5377\u79ef\u5c42\u7684\u6838\u5c3a\u5bf8\n    N=\u6838\u6570\u91cf\n    S=\u79fb\u52a8\u6b65\u957f\n    P\xa0=\u586b\u5145\u6570\n    ### \u8f93\u51fa\u56fe\u50cf\u5c3a\u5bf8\u7684\u516c\u5f0f\uff1a\n")),(0,i.kt)("p",null,"$$O=(I-K+2P)/2+1$$ \u8f93\u51fa\u56fe\u50cf\u7684\u901a\u9053\u6570\u7b49\u4e8e\u6838\u6570\u91cfN\n\u4f8b\uff1aAlexNet\u4e2d\u8f93\u5165\u56fe\u50cf\u7684\u5c3a\u5bf8\u4e3a227",(0,i.kt)("em",{parentName:"p"},"227"),"3.\u7b2c\u4e00\u4e2a\u5377\u79ef\u5c42\u670996\u4e2a\u5c3a\u5bf8\u4e3a11",(0,i.kt)("em",{parentName:"p"},"11"),"3\u7684\u6838\u3002\u6b65\u957f\u4e3a4\uff0c\u586b\u5145\u4e3a0.\n\u8f93\u51fa\u7684\u56fe\u50cf\u4e3a55",(0,i.kt)("em",{parentName:"p"},"55"),"96\uff08\u6bcf\u4e2a\u6838\u5bf9\u5e941\u4e2a\u901a\u9053\uff09\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"## \u6c60\u5316\u5c42\n    O=\u8f93\u51fa\u56fe\u50cf\u7684\u5c3a\u5bf8\u3002\n    I=\u8f93\u5165\u56fe\u50cf\u7684\u5c3a\u5bf8\u3002  \n    S=\u79fb\u52a8\u6b65\u957f  \n    PS=\u6c60\u5316\u5c42\u5c3a\u5bf8  \n    ### \u8f93\u51fa\u56fe\u50cf\u5c3a\u5bf8\u7684\u516c\u5f0f\uff1a\n")),(0,i.kt)("p",null,"$$O=(I-Ps)/S+1$$ \u4e0d\u540c\u4e8e\u5377\u79ef\u5c42\uff0c\u6c60\u5316\u5c42\u7684\u8f93\u51fa\u901a\u9053\u6570\u4e0d\u6539\u53d8\u3002\n\u4f8b\uff1a\u6bcf1\u5c42\u5377\u79ef\u5c42\u540e\u7684\u6c60\u5316\u5c42\u7684\u6c60\u5316\u5c42\u5c3a\u5bf8\u4e3a3",(0,i.kt)("em",{parentName:"p"},"3\uff0c\u6b65\u957f\u4e3a2\u3002\u6839\u636e\u524d\u9762\u5377\u79ef\u5c42\u7684\u8f93\u51fa\u4e3a55"),"55",(0,i.kt)("em",{parentName:"p"},"96\u3002\n\u8f93\u51fa\u5c3a\u5bf8\u4e3a27"),"27*96\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"## \u5168\u8fde\u63a5\u5c42\n    \u5168\u8fde\u63a5\u5c42\u8f93\u51fa\u5411\u91cf\u957f\u5ea6\u7b49\u4e8e\u795e\u7ecf\u5143\u7684\u6570\u91cf\u3002\n")),(0,i.kt)("h1",{id:"\u53c2\u6570\u91cf"},"\u53c2\u6570\u91cf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"## \u5377\u79ef\u5c42\n    WC=\u5377\u79ef\u5c42\u7684weights\u6570\u91cf\n    BC=\u5377\u79ef\u5c42\u7684biases\u6570\u91cf\n    PC=\u6240\u6709\u53c2\u6570\u7684\u6570\u91cf\n    K=\u6838\u5c3a\u5bf8\n    N=\u6838\u6570\u91cf\n    C\xa0=\u8f93\u5165\u56fe\u50cf\u901a\u9053\u6570\n    ### \u8f93\u51fa\u53c2\u6570\u516c\u5f0f\n        \u5377\u79ef\u5c42\u4e2d,\u6838\u7684\u6df1\u5ea6\u7b49\u4e8e\u8f93\u5165\u56fe\u50cf\u7684\u901a\u9053\u6570.\u4e8e\u662f\u6bcf\u4e2a\u6838\u6709K*K\u4e2a\u53c2\u6570.\u5e76\u4e14\u6709N\u4e2a\u6838\n        $Wv=K*K*C*N$\n        $Bv=N$\n        $Pv=Wv+Bv$\n        \u4f8b\uff1aAlexNet\u7f51\u7edc\u4e2d,\u7b2c1\u4e2a\u5377\u79ef\u5c42,\u8f93\u5165\u56fe\u50cf\u7684\u901a\u9053\u6570(C)\u662f3,\u6838\u5c3a\u5bf8(K)\u662f11*11,\u6838\u6570\u91cf\u662f96\n            Wv=11*11*3*96=34848\n            Bv=96\n            Pv=34848+96=34944\n## \u6c60\u5316\u5c42\n    \u6ca1\u6709\u4e0eMaxPool layer\u76f8\u5173\u7684\u53c2\u6570\u91cf.\u5c3a\u5bf8,\u6b65\u957f\u548c\u586b\u5145\u6570\u90fd\u662f\u8d85\u53c2\u6570.\n## \u5168\u8fde\u63a5\u5c42\n    \u8fde\u63a5\u5230Conv Layer\n        Wcf= weights\u7684\u6570\u91cf\n        Bcf= biases\u7684\u6570\u91cf\n        O=\xa0\u524d\u5377\u79ef\u5c42\u7684\u8f93\u51fa\u56fe\u50cf\u7684\u5c3a\u5bf8\n        N\xa0=\xa0\u524d\u5377\u79ef\u5c42\u7684\u6838\u6570\u91cf\n        F\xa0=\xa0\u5168\u8fde\u63a5\u5c42\u7684\u795e\u7ecf\u5143\u6570\u91cf\n        ### \u8f93\u51fa\u53c2\u6570\u516c\u5f0f\n            $Wvf=O*O*N*F$\n            $Bvf=F$\n            $Pvf=Wvf+Bvf$\n            \u4f8b\uff1aAlexNet\u7f51\u7edc\u4e2d\u7b2c1\u4e2aFC\u5c42\u8fde\u63a5\u81f3Conv Layer.\u8be5\u5c42\u7684O\u4e3a6,N\u4e3a256,F\u4e3a4096.\n                Wvf=6*6*256*4096=37748736\n                Bvf=4096\n                Pvf=Wvf+Bvf=37752832\n    \u8fde\u63a5\u5230FC Layer\n        Wff= weights\u7684\u6570\u91cf\n        Bff= biases\u7684\u6570\u91cf\n        Pff=\xa0\u603b\u53c2\u6570\u7684\u6570\u91cf\n        F=\xa0\u5f53\u524dFC\u5c42\u7684\u795e\u7ecf\u5143\u6570\u91cf\n        F1\xa0=\xa0\u524dFC\u5c42\u7684\u795e\u7ecf\u5143\u6570\u91cf\n            ### \u8f93\u51fa\u53c2\u6570\u516c\u5f0f\n                $Wff=F1*F$\n                $Bff=F$\n                $Pff=Wff+Bff$\n                \u4f8b\uff1aAlexNet\u7684\u6700\u540e1\u4e2a\u5168\u8fde\u63a5\u5c42, \xa0\xa0F-1=4096,F=1000\n                    Wff=4096*1000=4096000\n                    Bff=1000\n                    Pff=Wff+Bff=4097000\n")),(0,i.kt)("h1",{id:"\u8ba1\u7b97\u91cf"},"\u8ba1\u7b97\u91cf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u4e00\u822c\u6765\u8bf4\uff0c\u5c06\u4e00\u4e2a\u957f\u5ea6\u4e3aI\u7684\u5411\u91cf\u4e0e\u4e00\u4e2aI\xd7J\u7684\u77e9\u9635\u76f8\u4e58\uff0c\u5f97\u5230\u4e00\u4e2a\u957f\u5ea6\u4e3aJ\u7684\u5411\u91cf\uff0c\u9700\u8981I\xd7J\u7684MACC\u6216\uff082I-1\uff09\xd7J\u7684FLOPS\u3002\n## \u5168\u8fde\u63a5\u5c42\n    I\u8f93\u51fa\u5c42\uff0cJ\u8f93\u51fa\u5c42(\u591abatch\u5f97\u4e58\u4ee5batch)\n        I*J MACs\n        (2I-1)*J FLOPs \uff08\u4e0d\u8003\u8651bias\u65f6\u6709-1\uff0c\u6709bias\u65f6\u6ca1\u6709-1\u3002\uff09\n## \u6fc0\u6d3b\u51fd\u6570\n    Relu\n        J\u4e2a\u8f93\u51fa\u5143\uff0cJFLOPs\n    Sigmod\n        J*4 FLOPs\n## LSTM\n    \u5b9e\u9645\u4e0aLSTM\u91cc\u9762\u6709 4 \u4e2a\u975e\u7ebf\u6027\u53d8\u6362\uff083 \u4e2a \u95e8 + 1 \u4e2a tanh\uff09\uff0c\u6bcf\u4e00\u4e2a\u975e\u7ebf\u6027\u53d8\u6362\u8bf4\u767d\u4e86\u5c31\u662f\u4e00\u4e2a\u5168\u8fde\u63a5\u7f51\u7edc\n    \u7ef4\u5ea6\u5c31\u662fembedding_size + hidden_size\uff0c\u7b2c\u4e8c\u5c42\u5c31\u662f\u8f93\u51fa\u5c42\uff0c\u7ef4\u5ea6\u4e3a hidden_size\uff0c\u5219\u5b83\u7684\u8ba1\u7b97\u91cf\u6309\u7167\u4e0a\u6587\u6211\u4eec\u5bf9\u5168\u8fde\u63a5\u5c42\u7684\u9610\u8ff0\uff0c\u6613\u5f97MACC\u4e3a\uff1a\n    `(embedding_size + hidden_size) * hidden_size * 4`\n    `(embedding_size + hidden_size) * hidden_size * 4 \u4e2aMACC`\n    `embedding_size * hidden_size * 8 + hidden_size * (hidden_size + 20) \u4e2aFLOPS`  \n    \u53c2\u6570\u91cf:\n        `((embedding_size + hidden_size) * hidden_size + hidden_size) * 4`\n## \u5377\u79ef\u5c42\n    MACC:  $K*K*Cin*Hout*Wout*Cout$\n        stride\u5982\u679c\u4e0d\u662f1\uff0c\u90a3\u8f93\u51fa\u7279\u5f81\u56fe\u4fbf\u51cf\u5c11\uff0cMACC\u4e5f\u4f1a\u51cf\u5c11\n    FLOPs: $(2*Kw*Kh*Cin/g-1)*Cout*Hout*Wout$\n        \u82e5\u6709bias\uff0c\u4e0d\u9700\u8981-1\uff0cg\u4e3a\u5206\u7ec4\u5377\u79ef\u7684\u5206\u7ec4\u6570\n## \u6df1\u5ea6\u53ef\u5206\u79bb\u5377\u79ef\n    \u6df1\u5ea6\u5377\u79ef\uff1a\n        MACC: $K*K*Cin*Hout*Wout$\n    \u9010\u70b9\u5377\u79ef\uff1a\n        MACC\uff1a $Cin*Hout*Wout*Cout$\n    \u603b\u8ba1\u7b97\uff1a\n        MACC\uff1a $Cin*Hout*Wout*(K*K+Cout)$\n    MobileNetV2\n        \u8fd9\u79cd\u6269\u5c55\u5757\u4e2dMACC\u6570\u91cf\u7684\u516c\u5f0f\uff1aCexp = (Cin \xd7 expansion_factor)\uff0c\uff08expansion_factor\u7528\u4e8e\u521b\u5efa\u6df1\u5ea6\u5c42\u8981\u5904\u7406\u7684\u989d\u5916\u901a\u9053\uff0c\u4f7f\u5f97Cexp\u5728\u6b64\u5757\u5185\u4f7f\u7528\u7684\u901a\u9053\u6570\u91cf\uff09\n        ![Alt text](image-1.png)\n        ![Alt text](image.png)\n## **\u6c60\u5316\u5c42**\n    max\u3001sum\u3001avg pooling\n        FLOPs\uff1a $Hin*Win*Cin$\n    \u4e00\u822c\u7684\u6c60\u5316\n        FLOPs\uff1a $K*K*Hout*Wout*Cout$\n")))}u.isMDXComponent=!0}}]);