"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[7042],{3900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"design_model/design_model","title":"design_model","description":"","source":"@site/docs/design_model/design_model.md","sourceDirName":"design_model","slug":"/design_model/","permalink":"/docs/design_model/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/design_model/design_model.md","tags":[],"version":"current","lastUpdatedAt":1735748685000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"shared_memory","permalink":"/docs/cuda/shared_memory"},"next":{"title":"\u9762\u5411\u5bf9\u8c61\u601d\u60f3","permalink":"/docs/design_model/object_model"}}');var o=n(4848),s=n(8453),i=n(3514);const c={},l=void 0,a={},d=[];function u(e){return(0,o.jsx)(i.A,{})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u()}},3514:(e,t,n)=>{n.d(t,{A:()=>_});n(6540);var r=n(4164),o=n(6972),s=n(8774),i=n(5846),c=n(6654),l=n(1312),a=n(1107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(4848);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:o,description:s}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:o,children:[n," ",o]}),s&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,u.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(h,{item:t});case"category":return(0,u.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,o.$S)();return(0,u.jsx)(_,{items:n.items,className:t})}function _(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const s=(0,o.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},5846:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(6540),o=n(4586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(6540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);