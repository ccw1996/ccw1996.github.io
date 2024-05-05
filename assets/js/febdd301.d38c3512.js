"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[8368],{7767:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var t=e(5893),i=e(1151);const r={title:"onnx \u6a21\u578b\u4fee\u6539",description:"onnx \u6a21\u578b\u4fee\u6539",tags:["work","interview"],editor:"caroot"},a=void 0,l={id:"ml/optimization/onnx_modify",title:"onnx \u6a21\u578b\u4fee\u6539",description:"onnx \u6a21\u578b\u4fee\u6539",source:"@site/docs/ml/optimization/onnx_modify.md",sourceDirName:"ml/optimization",slug:"/ml/optimization/onnx_modify",permalink:"/docs/ml/optimization/onnx_modify",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/optimization/onnx_modify.md",tags:[{label:"work",permalink:"/docs/tags/work"},{label:"interview",permalink:"/docs/tags/interview"}],version:"current",lastUpdatedAt:1714915113,formattedLastUpdatedAt:"May 5, 2024",frontMatter:{title:"onnx \u6a21\u578b\u4fee\u6539",description:"onnx \u6a21\u578b\u4fee\u6539",tags:["work","interview"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"\u518d\u6b21\u7406\u89e3 im2col",permalink:"/docs/ml/optimization/im2col"},next:{title:"reduce\u4f18\u5316\u601d\u8def",permalink:"/docs/ml/optimization/reduce\u4f18\u5316"}},s={},p=[{value:"\u4fee\u6539\u7b97\u5b50",id:"\u4fee\u6539\u7b97\u5b50",level:2}];function d(n){const o={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:"\u76ee\u6807\u662f\u5c06onnx\u6a21\u578b\u624b\u52a8\u6dfb\u52a0\u4e00\u4e2aQuantizeLinear\u7b97\u5b50"}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"\u4fee\u6539\u7b97\u5b50",children:"\u4fee\u6539\u7b97\u5b50"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-python",children:"import numpy as np\nimport onnx\nfrom onnx import onnx_pb as onnx_proto\n\nonnx_model = onnx.load(\"test.onnx\")\nonnx_model.opset_import[0].version = 13\nonnx_model.ir_version = 7\ngraph=onnx_model.graph\n\nfor node in onnx_model.graph.node:\n    node.input[0]='input2'\n\nnode = onnx.helper.make_node('QuantizeLinear',['input', 'y_scale', 'y_zero_point'],['input2'],'input2')\n\ny_scale = np.float32(2)\ny_zero_point = np.uint8(128)\n\nscale_initializer = onnx.helper.make_tensor('y_scale', onnx_proto.TensorProto.FLOAT, [], [y_scale])\nzero_initializer = onnx.helper.make_tensor('y_zero_point', onnx_proto.TensorProto.INT8, [], [y_zero_point])\ngraph.initializer.append(scale_initializer)\ngraph.initializer.append(zero_initializer)\n\nonnx_model.graph.node.insert(0,node)\n\nonnx.checker.check_model(onnx_model)\nonnx.save_model(onnx_model,'test.onnx')\n\n"})})]})}function c(n={}){const{wrapper:o}={...(0,i.a)(),...n.components};return o?(0,t.jsx)(o,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},1151:(n,o,e)=>{e.d(o,{Z:()=>l,a:()=>a});var t=e(7294);const i={},r=t.createContext(i);function a(n){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(o):{...o,...n}}),[o,n])}function l(n){let o;return o=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),t.createElement(r.Provider,{value:o},n.children)}}}]);