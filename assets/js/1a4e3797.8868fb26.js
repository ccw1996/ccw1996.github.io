"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[7920],{8824:(e,t,a)=>{a.d(t,{c:()=>o});var r=a(7294),n=a(2263);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function o(){const e=u();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}},1473:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var r=a(7294),n=a(2263),l=a(179),s=a(5742),c=a(9960),u=a(5999),o=a(373),m=a(902),h=a(8824),i=a(143),p=a(6550),g=a(412);const d=function(){const e=(0,p.k6)(),t=(0,p.TH)(),{siteConfig:{baseUrl:a}}=(0,n.Z)();return{searchValue:g.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const r=new URLSearchParams(t.search);a?r.set("q",a):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}};var f=a(22),y=a(8202),E=a(2539),I=a(726),S=a(1073),R=a(311),w=a(3926),b=a(1029);const P={searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr"};function F(){const{siteConfig:{baseUrl:e}}=(0,n.Z)(),t=(0,i.gA)();let a=e;try{const{preferredVersion:e}=(0,o.J)(t?.pluginId??b.gQ);e&&!e.isLast&&(a=e.path+"/")}catch(C){if(b.l9&&!(C instanceof m.i6))throw C}const{selectMessage:l}=(0,h.c)(),{searchValue:c,updateSearchPath:p}=d(),[g,E]=(0,r.useState)(c),[I,S]=(0,r.useState)(),[w,F]=(0,r.useState)(),k=(0,r.useMemo)((()=>g?(0,u.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:g}):(0,u.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[g]);(0,r.useEffect)((()=>{p(g),I&&(g?I(g,(e=>{F(e)})):F(void 0))}),[g,I]);const v=(0,r.useCallback)((e=>{E(e.target.value)}),[]);return(0,r.useEffect)((()=>{c&&c!==g&&E(c)}),[c]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,f.w)(a);S((()=>(0,y.v)(e,t,100)))}()}),[a]),r.createElement(r.Fragment,null,r.createElement(s.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,k)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,k),r.createElement("input",{type:"search",name:"q",className:P.searchQueryInput,"aria-label":"Search",onChange:v,value:g,autoComplete:"off",autoFocus:!0}),!I&&g&&r.createElement("div",null,r.createElement(R.Z,null)),w&&(w.length>0?r.createElement("p",null,l(w.length,(0,u.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:w.length}))):r.createElement("p",null,(0,u.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,w&&w.map((e=>r.createElement(_,{key:e.document.i,searchResult:e}))))))}function _(e){let{searchResult:{document:t,type:a,page:n,tokens:l,metadata:s}}=e;const u=0===a,o=2===a,m=(u?t.b:n.b).slice(),h=o?t.s:t.t;return u||m.push(n.t),r.createElement("article",{className:P.searchResultItem},r.createElement("h2",null,r.createElement(c.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,E.C)(h,l):(0,I.o)(h,(0,S.m)(s,"t"),l,100)}})),m.length>0&&r.createElement("p",{className:P.searchResultItemPath},(0,w.e)(m)),o&&r.createElement("p",{className:P.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,I.o)(t.t,(0,S.m)(s,"t"),l,100)}}))}const k=function(){return r.createElement(l.Z,null,r.createElement(F,null))}}}]);