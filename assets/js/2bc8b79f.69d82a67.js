"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[8372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,_=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?o.createElement(_,a(a({ref:t},s),{},{components:n})):o.createElement(_,a({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={title:"clip\u5bfc\u51fa\u4e3aonnx",description:"clip\u5bfc\u51fa\u4e3aonnx",tags:["work"],editor:"caroot"},a=void 0,l={unversionedId:"LLM/export_clip_onnx",id:"LLM/export_clip_onnx",title:"clip\u5bfc\u51fa\u4e3aonnx",description:"clip\u5bfc\u51fa\u4e3aonnx",source:"@site/docs/LLM/export_clip_onnx.md",sourceDirName:"LLM",slug:"/LLM/export_clip_onnx",permalink:"/docs/LLM/export_clip_onnx",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/LLM/export_clip_onnx.md",tags:[{label:"work",permalink:"/docs/tags/work"}],version:"current",frontMatter:{title:"clip\u5bfc\u51fa\u4e3aonnx",description:"clip\u5bfc\u51fa\u4e3aonnx",tags:["work"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"DINOv2",permalink:"/docs/LLM/Dinov2"},next:{title:"minigpt4\u672c\u5730\u90e8\u7f72",permalink:"/docs/LLM/local_minigpt4"}},p={},c=[{value:"\u9488\u5bf9image\u548ctext\u5355\u72ec\u63d0\u53d6onnx",id:"\u9488\u5bf9image\u548ctext\u5355\u72ec\u63d0\u53d6onnx",level:2},{value:"\u5408\u5e76\u6210\u4e00\u4e2a\u5b8c\u6574\u7684onnx",id:"\u5408\u5e76\u6210\u4e00\u4e2a\u5b8c\u6574\u7684onnx",level:2}],s={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u9488\u5bf9image\u548ctext\u5355\u72ec\u63d0\u53d6onnx"},"\u9488\u5bf9image\u548ctext\u5355\u72ec\u63d0\u53d6onnx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import torch\nimport torch.nn as nn\nimport clip\nfrom PIL import Image\n \ndevice = \"cuda\" if torch.cuda.is_available() else \"cpu\"\nmodel, preprocess = clip.load(\"ViT-B/32\", device=device)\n \nmodel.float()\nmodel.eval()\n \nimage = preprocess(Image.open(\"clip_dog.png\")).unsqueeze(0).to(device)\ntext = clip.tokenize([\"a dog\", \"a cat\"]).to(device)\n \nprint(\"text:\", text)\n \nwith torch.no_grad():\n    image_features = model.encode_image(image)\n    text_features = model.encode_text(text)\n \n    logits_per_image, logits_per_text = model(image, text)\n    probs = logits_per_image.softmax(dim=-1).cpu().numpy()\n \nprint(\"Label probs:\", probs)  # prints: [[0.9927937  0.00421068 0.00299572]]\n \n# export to ONNX\n \n \nclass ImgModelWrapper(nn.Module):\n    def __init__(self):\n        super(ImgModelWrapper, self).__init__()\n        self.model = model\n \n    def forward(self, image):\n        image_features = model.encode_image(image)\n        return image_features\n \n \nclass TxtModelWrapper(nn.Module):\n    def __init__(self):\n        super(TxtModelWrapper, self).__init__()\n        self.model = model\n \n    def forward(self, image):\n        text_features = model.encode_text(text)\n        return text_features\n \n \nimg_model = ImgModelWrapper()\ntxt_model = TxtModelWrapper()\n \ntorch.onnx.export(img_model,               # model being run\n                  image,                         # model input (or a tuple for multiple inputs)\n                  \"openai_vit_img.onnx\",   # where to save the model (can be a file or file-like object)\n                  export_params=True,        # store the trained parameter weights inside the model file\n                  opset_version=12,          # the ONNX version to export the model to\n                  do_constant_folding=False,  # whether to execute constant folding for optimization\n                  input_names=['input'],   # the model's input names\n                  output_names=['output'],  # the model's output names\n                  dynamic_axes={'input': {0: 'batch'}})\ntorch.onnx.export(txt_model,               # model being run\n                  text,                         # model input (or a tuple for multiple inputs)\n                  \"openai_vit_txt.onnx\",   # where to save the model (can be a file or file-like object)\n                  export_params=True,        # store the trained parameter weights inside the model file\n                  opset_version=12,          # the ONNX version to export the model to\n                  do_constant_folding=False,  # whether to execute constant folding for optimization\n                  input_names=['input'],   # the model's input names\n                  output_names=['output'],  # the model's output names\n                  dynamic_axes={'input': {0: 'batch'}})\n")),(0,r.kt)("h2",{id:"\u5408\u5e76\u6210\u4e00\u4e2a\u5b8c\u6574\u7684onnx"},"\u5408\u5e76\u6210\u4e00\u4e2a\u5b8c\u6574\u7684onnx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import clip\nimport torch\nfrom PIL import Image\n\ndevice = "cuda" if torch.cuda.is_available() else "cpu"\nmodel, preprocess = clip.load("ViT-B/32", device=device)\n \nmodel.float()\nmodel.eval()\nnpx=model.visual.input_resolution\nimage = preprocess(Image.open("clip_dog.png")).unsqueeze(0).to(device)\ntext = clip.tokenize(["a dog", "a cat"]).to(device)\n\nmodel.forward(image,text)\ntorch.onnx.export(model,(image,text),"clip.onnx",export_params=True,input_names=["IMAGE", "TEXT"],\n  output_names=["LOGITS_PER_IMAGE", "LOGITS_PER_TEXT"],\n  opset_version=14,\n  dynamic_axes={\n      "IMAGE": {\n          0: "image_batch_size",\n      },\n      "TEXT": {\n          0: "text_batch_size",\n      },\n      "LOGITS_PER_IMAGE": {\n          0: "image_batch_size",\n          1: "text_batch_size",\n      },\n      "LOGITS_PER_TEXT": {\n          0: "text_batch_size",\n          1: "image_batch_size",\n      },\n  })\n')))}m.isMDXComponent=!0}}]);