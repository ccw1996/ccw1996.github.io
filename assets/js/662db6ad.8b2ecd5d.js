"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[2182],{8342:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"other/docker","title":"docker FAQ","description":"docker FAQ","source":"@site/docs/other/docker.md","sourceDirName":"other","slug":"/other/docker","permalink":"/docs/other/docker","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/other/docker.md","tags":[{"inline":true,"label":"docker","permalink":"/docs/tags/docker"}],"version":"current","lastUpdatedAt":1735748685000,"frontMatter":{"title":"docker FAQ","description":"docker FAQ","tags":["docker"],"editor":"caroot"},"sidebar":"tutorialSidebar","previous":{"title":"\u521b\u4e1a\u601d\u8003","permalink":"/docs/other/business_start"},"next":{"title":"\u8bbe\u8ba1\u6587\u6863\u7684\u8bbe\u8ba1","permalink":"/docs/other/docs_design"}}');var n=o(4848),c=o(8453);const s={title:"docker FAQ",description:"docker FAQ",tags:["docker"],editor:"caroot"},i=void 0,d={},l=[{value:"\u6ce8\u610f\u6784\u5efa\u8fd0\u884c\u9047\u5230\u8fd9\u4e2a\u95ee\u9898\u7684\u8bdd [output clipped, log limit 1MiB reached]",id:"\u6ce8\u610f\u6784\u5efa\u8fd0\u884c\u9047\u5230\u8fd9\u4e2a\u95ee\u9898\u7684\u8bdd-output-clipped-log-limit-1mib-reached",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\u6ce8\u610f\u6784\u5efa\u8fd0\u884c\u9047\u5230\u8fd9\u4e2a\u95ee\u9898\u7684\u8bdd-output-clipped-log-limit-1mib-reached",children:"\u6ce8\u610f\u6784\u5efa\u8fd0\u884c\u9047\u5230\u8fd9\u4e2a\u95ee\u9898\u7684\u8bdd [output clipped, log limit 1MiB reached]"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'# ubuntu \u4fee\u6539\u65e5\u5fd7\u5185\u5b58\u9650\u5236\nvim  /etc/systemd/system/multi-user.target.wants/docker.service \n\n# \u6dfb\u52a0\u4ee5\u4e0b\u4fe1\u606f \n[Service]\nEnvironment="BUILDKIT_STEP_LOG_MAX_SIZE=1073741824"\nEnvironment="BUILDKIT_STEP_LOG_MAX_SPEED=10240000"\n\n# \u91cd\u542f\nsystemctl daemon-reload\nsystemctl restart docker.service\n'})}),"\n",(0,n.jsx)(t.h1,{id:"\u65b0\u5efacontainer",children:"\u65b0\u5efacontainer"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"docker run --gpus all --name tvm -v D:\\docker_folder:/root/tvm -it nvcr.io/nvidia/pytorch:23.10-py3 /bin/bash\n"})})]})}function u(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>i});var r=o(6540);const n={},c=r.createContext(n);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);