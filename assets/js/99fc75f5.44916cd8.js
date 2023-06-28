"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[6731],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2439:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"BLIP2 huggingface \u4f7f\u7528",description:"BLIP2 huggingface \u4f7f\u7528",tags:["work"],editor:"caroot"},i=void 0,l={unversionedId:"LLM/BLIP2",id:"LLM/BLIP2",title:"BLIP2 huggingface \u4f7f\u7528",description:"BLIP2 huggingface \u4f7f\u7528",source:"@site/docs/LLM/BLIP2.md",sourceDirName:"LLM",slug:"/LLM/BLIP2",permalink:"/docs/LLM/BLIP2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/LLM/BLIP2.md",tags:[{label:"work",permalink:"/docs/tags/work"}],version:"current",frontMatter:{title:"BLIP2 huggingface \u4f7f\u7528",description:"BLIP2 huggingface \u4f7f\u7528",tags:["work"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"LLM",permalink:"/docs/LLM/"},next:{title:"DINOv2",permalink:"/docs/LLM/Dinov2"}},s={},p=[{value:"obtain images",id:"obtain-images",level:2},{value:"load model from hugging face API",id:"load-model-from-hugging-face-api",level:2},{value:"set device id",id:"set-device-id",level:2},{value:"image caption",id:"image-caption",level:2},{value:"Prompted image captioning",id:"prompted-image-captioning",level:2},{value:"Visual question answering",id:"visual-question-answering",level:2},{value:"Chat-based prompting",id:"chat-based-prompting",level:2},{value:"generate prompt",id:"generate-prompt",level:3},{value:"inference chat",id:"inference-chat",level:3},{value:"\u8bba\u6587\u89e3\u8bfb",id:"\u8bba\u6587\u89e3\u8bfb",level:2},{value:"\u80cc\u666f\u548c\u52a8\u673a",id:"\u80cc\u666f\u548c\u52a8\u673a",level:3},{value:"BLIP-2 \u67b6\u6784",id:"blip-2-\u67b6\u6784",level:3},{value:"Q-Former \u8bad\u7ec3\u7b2c1\u6b65\uff1a\u8054\u5408\u89c6\u89c9\u7f16\u7801\u5668\u8bad\u7ec3",id:"q-former-\u8bad\u7ec3\u7b2c1\u6b65\u8054\u5408\u89c6\u89c9\u7f16\u7801\u5668\u8bad\u7ec3",level:3},{value:"1 \u56fe\u6587\u5bf9\u6bd4\u5b66\u4e60 (Image-Text Contrastive Learning, ITC)",id:"1-\u56fe\u6587\u5bf9\u6bd4\u5b66\u4e60-image-text-contrastive-learning-itc",level:4},{value:"\u57fa\u4e8e\u56fe\u50cf\u7684\u6587\u672c\u751f\u6210 (Image-Grounded Text Generation, ITG)",id:"\u57fa\u4e8e\u56fe\u50cf\u7684\u6587\u672c\u751f\u6210-image-grounded-text-generation-itg",level:4},{value:"\u56fe\u6587\u5339\u914d\u4efb\u52a1 (Image-Text Matching, ITM)",id:"\u56fe\u6587\u5339\u914d\u4efb\u52a1-image-text-matching-itm",level:4},{value:"Q-Former \u8bad\u7ec3\u7b2c2\u6b65\uff1a\u8054\u5408\u89c6\u89c9\u7f16\u7801\u5668\u548c\u5927\u578b\u8bed\u8a00\u6a21\u578b\u8bad\u7ec3",id:"q-former-\u8bad\u7ec3\u7b2c2\u6b65\u8054\u5408\u89c6\u89c9\u7f16\u7801\u5668\u548c\u5927\u578b\u8bed\u8a00\u6a21\u578b\u8bad\u7ec3",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://huggingface.co/blog/blip-2"},"https://huggingface.co/blog/blip-2"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"an image transformer that interacts with the frozen image encoder for visual feature extraction"),(0,o.kt)("li",{parentName:"ul"},"a text transformer that can function as both a text encoder and a text decoder")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pip install git+https://github.com/huggingface/transformers.git")),(0,o.kt)("h2",{id:"obtain-images"},"obtain images"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import requests\nfrom PIL import Image\n\nurl = 'https://media.newyorker.com/cartoons/63dc6847be24a6a76d90eb99/master/w_1160,c_limit/230213_a26611_838.jpg'\nimage = Image.open(requests.get(url, stream=True).raw).convert('RGB')  \ndisplay(image.resize((596, 437)))\n")),(0,o.kt)("h2",{id:"load-model-from-hugging-face-api"},"load model from hugging face API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from transformers import AutoProcessor, Blip2ForConditionalGeneration\nimport torch\n\nprocessor = AutoProcessor.from_pretrained("Salesforce/blip2-opt-2.7b")\nmodel = Blip2ForConditionalGeneration.from_pretrained("Salesforce/blip2-opt-2.7b", torch_dtype=torch.float16)\n')),(0,o.kt)("h2",{id:"set-device-id"},"set device id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'device = "cuda" if torch.cuda.is_available() else "cpu"\nmodel.to(device)\n')),(0,o.kt)("h2",{id:"image-caption"},"image caption"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'inputs = processor(image, return_tensors="pt").to(device, torch.float16)\n\ngenerated_ids = model.generate(**inputs, max_new_tokens=20)\ngenerated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0].strip()\nprint(generated_text)\n')),(0,o.kt)("h2",{id:"prompted-image-captioning"},"Prompted image captioning"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'prompt = "this is a cartoon of"\n\ninputs = processor(image, text=prompt, return_tensors="pt").to(device, torch.float16)\n\ngenerated_ids = model.generate(**inputs, max_new_tokens=20)\ngenerated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0].strip()\nprint(generated_text)\n')),(0,o.kt)("p",null,"or "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'prompt = "they look like they are"\n\ninputs = processor(image, text=prompt, return_tensors="pt").to(device, torch.float16)\n\ngenerated_ids = model.generate(**inputs, max_new_tokens=20)\ngenerated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0].strip()\nprint(generated_text)\n')),(0,o.kt)("h2",{id:"visual-question-answering"},"Visual question answering"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'prompt = "Question: What is a dinosaur holding? Answer:"\n\ninputs = processor(image, text=prompt, return_tensors="pt").to(device, torch.float16)\n\ngenerated_ids = model.generate(**inputs, max_new_tokens=10)\ngenerated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0].strip()\nprint(generated_text)\n')),(0,o.kt)("h2",{id:"chat-based-prompting"},"Chat-based prompting"),(0,o.kt)("h3",{id:"generate-prompt"},"generate prompt"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'context = [\n   ("What is a dinosaur holding?", "a torch"),\n   ("Where are they?", "In the woods.")\n]\nquestion = "What for?"\ntemplate = "Question: {} Answer: {}."\n\nprompt = " ".join([template.format(context[i][0], context[i][1]) for i in range(len(context))]) + " Question: " + question + " Answer:"\n\nprint(prompt)\n')),(0,o.kt)("h3",{id:"inference-chat"},"inference chat"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'inputs = processor(image, text=prompt, return_tensors="pt").to(device, torch.float16)\n\ngenerated_ids = model.generate(**inputs, max_new_tokens=10)\ngenerated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0].strip()\nprint(generated_text)\n')),(0,o.kt)("h2",{id:"\u8bba\u6587\u89e3\u8bfb"},"\u8bba\u6587\u89e3\u8bfb"),(0,o.kt)("h3",{id:"\u80cc\u666f\u548c\u52a8\u673a"},"\u80cc\u666f\u548c\u52a8\u673a"),(0,o.kt)("p",null,"Q-Former \u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7 Transformer\uff0c\u5b83\u4f7f\u7528\u4e00\u7ec4\u53ef\u5b66\u4e60\u7684 Query \u5411\u91cf\u4ece\u51bb\u7ed3\u7684\u89c6\u89c9\u7f16\u7801\u5668\u4e2d\u63d0\u53d6\u89c6\u89c9\u7279\u5f81\uff0c\u5e76\u5145\u5f53\u89c6\u89c9\u7f16\u7801\u5668\u548c\u6587\u672c\u7f16\u7801\u5668\u4e4b\u95f4\u7684\u74f6\u9888\u3002Q-Former \u628a\u5173\u952e\u7684\u89c6\u89c9\u4fe1\u606f\u4f20\u9012\u7ed9 LLM\uff0c\u7b2c\u4e00\u4e2a\u9884\u8bad\u7ec3\u9636\u6bb5\uff0c\u5f3a\u5236 Q-Former \u5b66\u4e60\u4e0e\u6587\u672c\u6700\u76f8\u5173\u7684\u89c6\u89c9\u8868\u5f81\u3002\u7b2c\u4e8c\u4e2a\u9884\u8bad\u7ec3\u9636\u6bb5\uff0c\u901a\u8fc7\u5c06 Q-Former \u7684\u8f93\u51fa\u8fde\u63a5\u5230\u51bb\u7ed3\u7684 LLM \u6765\u6267\u884c\u89c6\u89c9\u8bed\u8a00\u751f\u6210\u5b66\u4e60\uff0c\u4f7f\u5176\u8f93\u51fa\u7684\u89c6\u89c9\u8868\u5f81\u53ef\u4ee5\u76f4\u63a5\u7531 LLM \u89e3\u91ca\u3002"),(0,o.kt)("h3",{id:"blip-2-\u67b6\u6784"},"BLIP-2 \u67b6\u6784"),(0,o.kt)("p",null,"BLIP-2 \u7531\u9884\u8bad\u7ec3\u597d\u7684\uff0c\u51bb\u7ed3\u53c2\u6570\u7684\u89c6\u89c9\u6a21\u578b\u548c\u6587\u672c\u6a21\u578b\uff0c\u5916\u52a0\u6240\u63d0\u51fa\u7684\u53ef\u8bad\u7ec3\u7684 Q-Former \u6784\u6210\u3002\u56fa\u5b9a\u7684\u56fe\u50cf\u7f16\u7801\u5668\u4ece\u8f93\u5165\u56fe\u7247\u4e2d\u63d0\u53d6\u89c6\u89c9\u7279\u5f81\uff0cQ-Former \u67b6\u6784\u662f\u75312\u4e2a Transformer \u5b50\u6a21\u5757\u6784\u6210\uff0c\u5176\u4e2d\u6ce8\u610f Self-Attention \u662f\u5171\u4eab\u7684\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a Self-Attention \u7684\u8f93\u5165\u67092\u4e2a\uff0c\u5373\uff1aQueries \u548c Text\u3002"),(0,o.kt)("p",null,"\u7b2c1\u4e2a Transformer \u5b50\u6a21\u5757\uff1a\u662f Image Transformer\uff0c\u5b83\u4e0e\u56fe\u50cf\u7f16\u7801\u5668\u4ea4\u4e92\uff0c\u7528\u4e8e\u89c6\u89c9\u7279\u5f81\u63d0\u53d6\u3002\u5b83\u7684\u8f93\u5165\u662f\u53ef\u5b66\u4e60\u7684 Queries\uff0c\u5b83\u4eec\u5148\u901a\u8fc7 Self-Attention \u5efa\u6a21\u4e92\u76f8\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u518d\u901a\u8fc7 Cross-Attention \u5efa\u6a21 Queries \u548c\u56fe\u7247\u7279\u5f81\u7684\u4f9d\u8d56\u5173\u7cfb\u3002\u56e0\u4e3a\u4e24\u4e2a Transformer \u7684\u5b50\u6a21\u5757\u662f\u5171\u4eab\u53c2\u6570\u7684\uff0c\u6240\u4ee5 Queries \u4e5f\u53ef\u4ee5\u4e0e\u6587\u672c\u8f93\u5165\u505a\u4ea4\u4e92\u3002"),(0,o.kt)("p",null,"\u7b2c2\u4e2a Transformer \u5b50\u6a21\u5757\uff1a\u662f Text Transformer\uff0c\u5b83\u65e2\u53ef\u4ee5\u4f5c\u4e3a\u6587\u672c\u7f16\u7801\u5668\uff0c\u4e5f\u53ef\u4ee5\u5145\u5f53\u6587\u672c\u89e3\u7801\u5668\u3002"),(0,o.kt)("p",null,"Q-Former \u4e00\u5171\u5305\u542b\u4e86 188M \u53c2\u6570\uff0c\u5176\u6743\u91cd\u4f7f\u7528 BERT-Base \u505a\u521d\u59cb\u5316\uff0cCross-Attention \u7684\u53c2\u6570\u505a\u968f\u673a\u521d\u59cb\u5316\u3002\u4f5c\u8005\u4f7f\u7528 32 \u4e2a Queries\uff0c\u5176\u4e2d\u6bcf\u4e2a Queries \u7684\u7ef4\u5ea6\u4e3a 768\u3002Queries \u968f\u7740\u9884\u8bad\u7ec3\u76ee\u6807\u4e00\u8d77\u8bad\u7ec3\uff0c\u8feb\u4f7f\u5b83\u4eec\u63d0\u53d6\u5230\u4e0e\u6587\u672c\u6700\u76f8\u5173\u7684\u89c6\u89c9\u4fe1\u606f\u3002"),(0,o.kt)("h3",{id:"q-former-\u8bad\u7ec3\u7b2c1\u6b65\u8054\u5408\u89c6\u89c9\u7f16\u7801\u5668\u8bad\u7ec3"},"Q-Former \u8bad\u7ec3\u7b2c1\u6b65\uff1a\u8054\u5408\u89c6\u89c9\u7f16\u7801\u5668\u8bad\u7ec3"),(0,o.kt)("p",null,"Q-Former \u8bad\u7ec3\u7684\u7b2c\u4e00\u6b65\uff0c\u4f5c\u8005\u5c06 Q-Former \u8fde\u63a5\u5230\u51bb\u7ed3\u53c2\u6570\u7684\u56fe\u50cf\u7f16\u7801\u5668\uff0c\u5e76\u4f7f\u7528\u56fe\u50cf-\u6587\u672c\u5bf9\u8fdb\u884c\u9884\u8bad\u7ec3\uff0c\u90a3\u4e48\u8fd9\u4e00\u6b65\u7684\u76ee\u6807\u662f\u8bad\u7ec3\u597d Q-Former\uff0c\u4ee5\u4fbf Queries \u53ef\u4ee5\u5b66\u4e60\u5230\u5982\u4f55\u66f4\u597d\u5730\u7ed3\u5408\u6587\u672c\u63d0\u53d6\u56fe\u7247\u4fe1\u606f\u3002"),(0,o.kt)("p",null,"\u8bad\u7ec3\u7684\u76ee\u6807\u51fd\u6570\uff0c\u4f5c\u8005\u9075\u5faa BLIP \u7684\u505a\u6cd5\uff0c\u8054\u5408\u4f18\u53163\u4e2a\u5177\u6709\u76f8\u540c\u8f93\u5165\u683c\u5f0f\u548c\u6a21\u578b\u53c2\u6570\u7684\u9884\u8bad\u7ec3\u76ee\u6807\uff0c\u6bcf\u4e2a\u76ee\u6807\u51fd\u6570\u4f7f\u7528\u4e0d\u540c\u7684 mask Attention \u6765\u63a7\u5236\u6ce8\u610f\u529b\u7684\u4ea4\u4e92\u3002"),(0,o.kt)("h4",{id:"1-\u56fe\u6587\u5bf9\u6bd4\u5b66\u4e60-image-text-contrastive-learning-itc"},"1 \u56fe\u6587\u5bf9\u6bd4\u5b66\u4e60 (Image-Text Contrastive Learning, ITC)"),(0,o.kt)("p",null,"\u8fd9\u662f\u591a\u6a21\u6001\u9884\u8bad\u7ec3\u4e2d\u7684\u7ecf\u5178\u76ee\u6807\u51fd\u6570\uff0c\u65e8\u5728\u5bf9\u9f50\u56fe\u50cf\u548c\u6587\u672c\u7684\u8868\u5f81\uff0c\u4f7f\u5176\u4e92\u4fe1\u606f\u6700\u5927\u5316\u3002"),(0,o.kt)("p",null,"ITC \u5b9e\u73b0\u7684\u65b9\u5f0f\u662f\uff1a\u8ba9\u6b63\u6837\u672c (\u914d\u5bf9\u7684\u56fe\u7247\u6587\u672c\u5bf9) \u7684\u76f8\u4f3c\u5ea6\u5c3d\u91cf\u9ad8\uff0c\u540c\u65f6\u8ba9\u8d1f\u6837\u672c (\u4e0d\u914d\u5bf9\u7684\u56fe\u7247\u6587\u672c\u5bf9) \u7684\u76f8\u4f3c\u5ea6\u5c3d\u91cf\u4f4e\u3002\u90a3\u4e48\u5bf9\u4e8e Q-Former \u4f5c\u8005\u5b9e\u73b0 ITC \u7684\u65b9\u6cd5\u662f\u8ba1\u7b97 Queries \u7684\u8f93\u51fa Z \u548c Text Transformer \u7684 ","[CLS]"," token \u8f93\u51fa t \u7684\u5bf9\u6bd4\u5b66\u4e60\u635f\u5931\u3002\u56e0\u4e3a Z \u5305\u542b\u4e86\u591a\u4e2a Queries \u7684\u8f93\u51fa\uff0c\u56e0\u6b64\u4f5c\u8005\u9996\u5148\u8ba1\u7b97\u6bcf\u4e2a Queries \u7684\u8f93\u51fa\u548c t \u4e4b\u95f4\u7684\u6210\u5bf9\u76f8\u4f3c\u5ea6\uff0c\u7136\u540e\u9009\u62e9\u6700\u9ad8\u7684\u4e00\u4e2a\u4f5c\u4e3a\u6700\u7ec8\u7684\u56fe\u6587\u76f8\u4f3c\u5ea6\u3002ITC \u7684 Attention Mask \u65b9\u6cd5\u5982\u56fe3\u7684\u6700\u53f3\u4fa7\u6240\u793a\uff0c\u5c5e\u4e8e Uni-modal Self-Attention Mask\uff0c\u4e0d\u5141\u8bb8 Queries \u548c Text \u76f8\u4e92\u770b\u5230 (\u76f8\u4e92\u4e4b\u95f4\u7684\u6ce8\u610f\u529b\u503c\u4e3a0)\u3002"),(0,o.kt)("h4",{id:"\u57fa\u4e8e\u56fe\u50cf\u7684\u6587\u672c\u751f\u6210-image-grounded-text-generation-itg"},"\u57fa\u4e8e\u56fe\u50cf\u7684\u6587\u672c\u751f\u6210 (Image-Grounded Text Generation, ITG)"),(0,o.kt)("p",null,"ITG \u7ed9\u5b9a\u4e00\u5f20\u8f93\u5165\u56fe\u7247\uff0c\u65e8\u5728\u8bad\u7ec3 Q-Former \u751f\u6210\u5bf9\u5e94\u7684\u6587\u672c\u63cf\u8ff0\u3002"),(0,o.kt)("p",null,"\u8981\u5b9e\u73b0\u8fd9\u4e00\u76ee\u7684\uff0c\u89c6\u89c9\u7f16\u7801\u5668\u548c\u6587\u672c\u89e3\u7801\u5668\u4e4b\u95f4\u5e94\u8be5\u6709\u4ea4\u4e92\u3002\u800c Q-Former \u6070\u6070\u963b\u6b62\u4e86\u8fd9\u79cd\u76f4\u63a5\u4ea4\u4e92\uff0c\u56e0\u6b64 Queries \u5728\u8fd9\u91cc\u5c31\u626e\u6f14\u4e86\u63d0\u53d6\u51fa\u6765\u751f\u6210\u6587\u672c\u6240\u9700\u8981\u7684\u4fe1\u606f\uff0c\u7136\u540e\u901a\u8fc7 Self-Attention \u5c42\u4f20\u9012\u7ed9 Text token\u3002\u7b80\u800c\u8a00\u4e4b\uff0cQueries \u5e94\u8be5\u5177\u5907\u8fd9\u6837\u4e00\u79cd\u80fd\u529b\uff1a\u63d0\u53d6\u6355\u83b7\u4e86\u6240\u6709\u6587\u672c\u4fe1\u606f\u7684\u89c6\u89c9\u7279\u5f81\u3002\u56e0\u6b64\uff0cITG \u7684 Attention Mask \u65b9\u6cd5\u5982\u56fe3\u4e2d\u95f4\u6240\u793a\uff0c\u5c5e\u4e8e Multi-modal Causal Self-Attention Mask\uff0c\u5141\u8bb8 Text \u770b\u5230 Queries (Queries \u91cc\u9762\u6709\u89c6\u89c9\u4fe1\u606f)\uff0c\u540c\u65f6\u6bcf\u4e2a Text token \u53ea\u80fd\u770b\u5230\u5b83\u4e4b\u524d\u7684 Text token (\u751f\u6210\u5f0f\u4efb\u52a1\u7684\u57fa\u672c\u505a\u6cd5)\u3002\u4f46\u662f\u4e0d\u5141\u8bb8 Queries \u770b\u5230 Text \u7684\u4fe1\u606f\uff0c\u53ea\u80fd\u770b\u5230\u81ea\u5df1\u7684\u4fe1\u606f\u3002\u6b64\u5916\u4f5c\u8005\u8fd8\u5c06 ","[CLS]"," token \u66ff\u6362\u4e3a\u4e00\u4e2a\u65b0\u7684 ","[DEC]"," token \u4f5c\u4e3a\u7b2c\u4e00\u4e2a Text token \u6765\u6307\u793a\u89e3\u7801\u4efb\u52a1\u3002"),(0,o.kt)("h4",{id:"\u56fe\u6587\u5339\u914d\u4efb\u52a1-image-text-matching-itm"},"\u56fe\u6587\u5339\u914d\u4efb\u52a1 (Image-Text Matching, ITM)"),(0,o.kt)("p",null,"\u8fd9\u662f\u591a\u6a21\u6001\u9884\u8bad\u7ec3\u4e2d\u7684\u7ecf\u5178\u76ee\u6807\u51fd\u6570\uff0c\u65e8\u5728\u66f4\u52a0\u7ec6\u7c92\u5ea6\u5730\u5bf9\u9f50\u56fe\u50cf\u548c\u6587\u672c\u7684\u8868\u5f81\uff0c\u4f7f\u5176\u4e92\u4fe1\u606f\u6700\u5927\u5316\u3002ITM \u662f\u4e2a\u4e8c\u5206\u7c7b\u4efb\u52a1\uff0c\u8981\u6c42\u6a21\u578b\u9884\u6d4b\u56fe\u50cf-\u6587\u672c\u5bf9\u662f\u6b63\u6837\u672c (\u5339\u914d) \u8fd8\u662f\u8d1f\u6837\u672c (\u4e0d\u5339\u914d)\u3002ITM \u7684 Attention Mask \u65b9\u6cd5\u5982\u56fe3\u7684\u6700\u5de6\u4fa7\u6240\u793a\uff0c\u5c5e\u4e8e Bi-directional Self-Attention Mask\uff0c\u5141\u8bb8 Queries \u548c Text \u76f8\u4e92\u770b\u5230\u3002"),(0,o.kt)("p",null,"Queries \u7684\u8f93\u51fa Z \u6355\u83b7\u4e86\u591a\u6a21\u6001\u4fe1\u606f\uff0c\u628a\u6bcf\u4e2a\u8f93\u51fa\u7684 Queries Embedding \u901a\u8fc7\u4e00\u4e2a\u4e8c\u7c7b\u7ebf\u6027\u5206\u7c7b\u5668\u4e2d\u4ee5\u83b7\u5f97 logit\uff0c\u5e76\u5c06 logit \u7684\u8f93\u51fa\u505a\u5e73\u5747\u4f5c\u4e3a\u6700\u7ec8\u7684\u5206\u6570\u3002"),(0,o.kt)("p",null,"BLIP-2 \u7684 ITM \u76ee\u6807\u51fd\u6570\u540c\u6837\u4f7f\u7528\u4e86 ALBEF \u4e2d\u7684 hard negative mining \u7b56\u7565\u3002"),(0,o.kt)("h3",{id:"q-former-\u8bad\u7ec3\u7b2c2\u6b65\u8054\u5408\u89c6\u89c9\u7f16\u7801\u5668\u548c\u5927\u578b\u8bed\u8a00\u6a21\u578b\u8bad\u7ec3"},"Q-Former \u8bad\u7ec3\u7b2c2\u6b65\uff1a\u8054\u5408\u89c6\u89c9\u7f16\u7801\u5668\u548c\u5927\u578b\u8bed\u8a00\u6a21\u578b\u8bad\u7ec3"),(0,o.kt)("p",null,"\u5728\u751f\u6210\u9884\u8bad\u7ec3\u7684\u9636\u6bb5\uff0c\u4f5c\u8005\u628a Q-Former \u548c\u51bb\u7ed3\u53c2\u6570\u7684 LLM \u8fde\u63a5\u8d77\u6765\uff0c\u4ee5\u5229\u7528 LLM \u7684\u6587\u672c\u751f\u6210\u80fd\u529b\u3002\u9996\u5148\u8f93\u5165\u56fe\u7247\u8fd8\u662f\u76f4\u63a5\u8f93\u5165\u51bb\u7ed3\u53c2\u6570\u7684 Image Encoder\uff0c\u5f97\u5230\u56fe\u50cf\u7684\u8868\u5f81\u3002\u7136\u540e\u56fe\u50cf\u7684\u8868\u5f81\u548c Queries \u4e00\u8d77\u9001\u5165 Q-Former\uff0c\u5f97\u5230 Queries \u7684\u8f93\u51fa Z \uff0c\u7ecf\u8fc7\u4e00\u4e2a\u5168\u8fde\u63a5\u5c42\u4e0e Text token \u7684\u7ef4\u5ea6\u5bf9\u9f50\u4e4b\u540e\u8f93\u5165\u7ed9 LLM Decoder\u3002\u8fd9\u4e2a Queries \u7684\u8f93\u51fa\u5c31\u8574\u542b\u4e86\u89c6\u89c9\u4fe1\u606f\uff0c\u5728\u8f93\u5165\u7ed9 LLM \u7684\u65f6\u5019\u5c31\u5145\u5f53\u4e86 Soft Visual Prompt \u7684\u4f5c\u7528\u3002"),(0,o.kt)("p",null,"Queries \u5728\u7ecf\u8fc7\u4e86\u7b2c1\u9636\u6bb5\u7684\u8bad\u7ec3\u4e4b\u540e\uff0c\u5df2\u7ecf\u5b66\u4e60\u5230\u4e86\u5982\u4f55\u66f4\u597d\u5730\u7ed3\u5408\u6587\u672c\u63d0\u53d6\u56fe\u7247\u4fe1\u606f\uff0c\u56e0\u6b64\u5b83\u53ef\u4ee5\u6709\u6548\u5730\u5c06\u6700\u6709\u7528\u7684\u56fe\u7247\u4fe1\u606f\u63d0\u4f9b\u7ed9 LLM\uff0c\u540c\u65f6\u5220\u9664\u4e0d\u76f8\u5173\u7684\u89c6\u89c9\u4fe1\u606f\u3002\u8fd9\u51cf\u5c11\u4e86 LLM \u5b66\u4e60\u89c6\u89c9\u8bed\u8a00\u5bf9\u9f50\u7684\u8d1f\u62c5\u3002"),(0,o.kt)("p",null,"\u4f5c\u8005\u5c1d\u8bd5\u4e862\u79cd\u5927\u578b\u8bed\u8a00\u6a21\u578b\uff0c\u5206\u522b\u662f\u57fa\u4e8e\u7eaf Decoder \u67b6\u6784\u7684\u548c\u57fa\u4e8e Encoder-Decoder \u67b6\u6784\u7684\u3002\u5bf9\u4e8e\u57fa\u4e8e\u7eaf Decoder \u67b6\u6784\u7684\u6a21\u578b\uff0c\u4f7f\u7528\u8bed\u8a00\u5efa\u6a21\u76ee\u6807\u51fd\u6570\u8fdb\u884c\u8bad\u7ec3\u3002\u51bb\u7ed3\u53c2\u6570\u7684 LLM \u7684\u4efb\u52a1\u662f\u6839\u636e Q-Former \u63d0\u4f9b\u7684\u89c6\u89c9\u8868\u5f81\u6765\u751f\u6210\u6587\u672c\u3002\u5bf9\u4e8e\u57fa\u4e8e Encoder-Decoder \u67b6\u6784\u7684\u6a21\u578b\uff0c\u628a\u6587\u672c\u5206\u6210\u4e24\u6bb5\uff0c\u524d\u7f00\u968f\u7740 Queries \u7684\u8f93\u51fa\u5582\u7ed9 LLM \u7684 Encoder\uff0c\u5e0c\u671b Decoder \u8f93\u51fa\u540e\u7f00\u3002"))}d.isMDXComponent=!0}}]);