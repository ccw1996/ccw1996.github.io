"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[4198],{81:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>_});const r=JSON.parse('{"id":"ml/polygraphy","title":"Polygraphy\u9010\u5c42\u5bf9\u6bd4onnx\u548ctensorrt\u6a21\u578b\u7684\u8f93\u51fa","description":"https://zhuanlan.zhihu.com/p/436017991","source":"@site/docs/ml/polygraphy.md","sourceDirName":"ml","slug":"/ml/polygraphy","permalink":"/docs/ml/polygraphy","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/polygraphy.md","tags":[{"inline":true,"label":"machine learning","permalink":"/docs/tags/machine-learning"},{"inline":true,"label":"interview","permalink":"/docs/tags/interview"}],"version":"current","lastUpdatedAt":1735748685000,"frontMatter":{"title":"Polygraphy\u9010\u5c42\u5bf9\u6bd4onnx\u548ctensorrt\u6a21\u578b\u7684\u8f93\u51fa","tags":["machine learning","interview"]},"sidebar":"tutorialSidebar","previous":{"title":"Batch Normalization\u539f\u7406\u4e0e\u5b9e\u6218","permalink":"/docs/ml/paper/batch_norm"},"next":{"title":"quantize","permalink":"/docs/ml/quantize/"}}');var l=t(4848),o=t(8453);const a={title:"Polygraphy\u9010\u5c42\u5bf9\u6bd4onnx\u548ctensorrt\u6a21\u578b\u7684\u8f93\u51fa",tags:["machine learning","interview"]},i="\u4fdd\u5b58\u6a21\u578b\u8f93\u51fa\u4e3apkl\u6587\u4ef6",s={},_=[{value:"\u9010\u5c42\u5bf9\u6bd4\u7cbe\u5ea6",id:"\u9010\u5c42\u5bf9\u6bd4\u7cbe\u5ea6",level:2},{value:"\u5206\u6790\u9519\u8bef\u8282\u70b9",id:"\u5206\u6790\u9519\u8bef\u8282\u70b9",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://zhuanlan.zhihu.com/p/436017991",children:"https://zhuanlan.zhihu.com/p/436017991"})}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u5206\u6790\u6b65\u9aa4\u5982\u4e0b\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u5206\u522b\u4fdd\u5b58onnx\u548ctensorrt\u6a21\u578b\u7684\u5168\u90e8\u7684\u7f51\u7edc\u5c42\u8f93\u51fa"}),"\n",(0,l.jsx)(e.li,{children:"\u901a\u8fc7\u5faa\u73af\u904d\u5386\u5404\u4e2a\u5c42\uff0c\u627e\u5230\u7cbe\u5ea6\u65e0\u6cd5\u5339\u914d\u7684\u5c42\u8282\u70b9\u4f4d\u7f6e"}),"\n",(0,l.jsx)(e.li,{children:"\u5206\u6790\u8be5\u4f4d\u7f6e\u5bf9\u5e94\u7684onnx\u8282\u70b9\u627e\u5230\u53ef\u80fd\u7684\u9519\u8bef\uff0c\u5982tensorrt\u4e0d\u652f\u6301\u7684\u8282\u70b9"}),"\n"]}),"\n",(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"\u4fdd\u5b58\u6a21\u578b\u8f93\u51fa\u4e3apkl\u6587\u4ef6",children:"\u4fdd\u5b58\u6a21\u578b\u8f93\u51fa\u4e3apkl\u6587\u4ef6"})}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u7ec8\u7aef\u8f93\u5165\u5982\u4e0b\u7684\u6307\u4ee4\u4fdd\u5b58onnx\u5404\u5c42\u7684\u8f93\u51fa"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"polygraphy run yolov5s.onnx --onnxrt --onnx-outputs mark all --save-results=onnx_out.pkl\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u7ec8\u7aef\u8f93\u5165\u5982\u4e0b\u7684\u6307\u4ee4\u4fdd\u5b58tensorrt\u5404\u4e2a\u5c42\u7684\u8f93\u51fa"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"polygraphy run yolov5/yolov5s.onnx --trt --validate --trt-outputs mark all --save-results=trt_out.pkl\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9010\u5c42\u5bf9\u6bd4\u7cbe\u5ea6",children:"\u9010\u5c42\u5bf9\u6bd4\u7cbe\u5ea6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"import pickle\nimport numpy as np\n\nf = open('onnx_out.pkl','rb')\ninfo_onnx = pickle.load(f)\n# print(info_onnx)\nf = open('trt_out.pkl','rb')\ninfo_trt = pickle.load(f)\n# print(info)\nrunners_trt = list(info_trt.keys())\nrunners_onnx = list(info_onnx.keys())\n\nprint('onnx:', len(info_onnx.__getitem__(runners_onnx[0])[0]))\nprint('tensorrt:', len(info_trt.__getitem__(runners_trt[0])[0]))\n\nfor layer in info_onnx.__getitem__(runners_onnx[0])[0]:\n    if layer in info_trt.__getitem__(runners_trt[0])[0]:    # \u53ea\u5206\u6790\u76f8\u540c\u540d\u79f0\u7684\u8282\u70b9\u8f93\u51fa\n        print('--------------------------')\n        print(layer, info_onnx.__getitem__(runners_onnx[0])[0][layer].shape, info_trt.__getitem__(runners_trt[0])[0][layer].shape)\n        onnx_out = info_onnx.__getitem__(runners_onnx[0])[0][layer]\n        trt_out = info_trt.__getitem__(runners_trt[0])[0][layer]\n        np.testing.assert_allclose(onnx_out, trt_out, 0.0001, 0.0001)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u5206\u6790\u9519\u8bef\u8282\u70b9",children:"\u5206\u6790\u9519\u8bef\u8282\u70b9"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"layer = '368'\ntrt_layer_value = info_trt.__getitem__(runners_trt[0])[0][layer].flatten()\nonnx_layer_value = info_onnx.__getitem__(runners_onnx[0])[0][layer].flatten()\nnp.testing.assert_allclose(onnx_layer_value, trt_layer_value, 0.001, 0.001)\nprint(trt_layer_value)\nprint(onnx_layer_value)\n\nlayer = '369'\nonnx_layer_value2 = info_onnx.__getitem__(runners_onnx[0])[0][layer].flatten()\ntrt_layer_value2 = info_trt.__getitem__(runners_trt[0])[0][layer].flatten()\nnp.testing.assert_allclose(onnx_layer_value2, trt_layer_value2, 0.001, 0.001)\nprint(trt_layer_value2)\nprint(onnx_layer_value2)\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u4ece\u4e0a\u8ff0\u7ed3\u679c\u4e2d\u53ef\u4ee5\u770b\u51fa\uff0c368\u8282\u70b9\u7684\u8f93\u51fa\u7cbe\u5ea6\u662f\u5339\u914d\u7684\uff0c\u800c\u6ca1\u6709\u627e\u5230369\u5bf9\u5e94\u7684key\uff0c\u8fd9\u662f\u7531\u4e8e369\u8282\u70b9\u662f\u6a21\u578b\u4e2d\u7684\u5e38\u91cf\uff0c\u4e0d\u4f5c\u4e3a\u8f93\u51fa\u5c42\uff0c\u56e0\u6b64\u5728\u7b2c\u4e00\u6b65\u4e2d\u662f\u65e0\u6cd5\u4fdd\u5b58\u8be5\u8282\u70b9\u7684\u8f93\u51fa\uff0c\u4ece\u5f53\u524d\u7684\u7cbe\u5ea6\u5bf9\u6bd4\u60c5\u51b5\u5982\u4e0b\uff1a\n",(0,l.jsx)(e.code,{children:"368\u8282\u70b9 * 369\u8282\u70b9 = 370\u8282\u70b9"})]})]})}function c(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(p,{...n})}):p(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>i});var r=t(6540);const l={},o=r.createContext(l);function a(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:a(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);