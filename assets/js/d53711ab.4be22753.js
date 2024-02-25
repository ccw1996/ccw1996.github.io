"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[9854],{2688:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var l=t(5893),d=t(1151);const i={title:"\u591a\u7ebf\u7a0b\u603b\u7ed3",description:"\u591a\u7ebf\u7a0b\u603b\u7ed3",tags:["cpp","basic"],editor:"caroot"},s=void 0,r={id:"cpp/multi_thread",title:"\u591a\u7ebf\u7a0b\u603b\u7ed3",description:"\u591a\u7ebf\u7a0b\u603b\u7ed3",source:"@site/docs/cpp/multi_thread.md",sourceDirName:"cpp",slug:"/cpp/multi_thread",permalink:"/docs/cpp/multi_thread",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cpp/multi_thread.md",tags:[{label:"cpp",permalink:"/docs/tags/cpp"},{label:"basic",permalink:"/docs/tags/basic"}],version:"current",lastUpdatedAt:1708864280,formattedLastUpdatedAt:"Feb 25, 2024",frontMatter:{title:"\u591a\u7ebf\u7a0b\u603b\u7ed3",description:"\u591a\u7ebf\u7a0b\u603b\u7ed3",tags:["cpp","basic"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"C++ \u7684 lambda \u8868\u8fbe\u5f0f",permalink:"/docs/cpp/lambda"},next:{title:"C++11\u5b8c\u7f8e\u8f6c\u53d1\u53ca\u5b9e\u73b0\u65b9\u6cd5\u8be6\u89e3",permalink:"/docs/cpp/perfect_forwarding"}},c={},o=[{value:"\u521b\u5efa\u7ebf\u7a0b",id:"\u521b\u5efa\u7ebf\u7a0b",level:2},{value:"\u6b7b\u9501\u6761\u4ef6",id:"\u6b7b\u9501\u6761\u4ef6",level:2},{value:"\u9501\u7684\u7c7b\u578b",id:"\u9501\u7684\u7c7b\u578b",level:2},{value:"lock_guard",id:"lock_guard",level:2},{value:"unique_lock",id:"unique_lock",level:2},{value:"std::unique_lock\u6240\u6709\u6743\u8f6c\u79fb",id:"stdunique_lock\u6240\u6709\u6743\u8f6c\u79fb",level:3},{value:"condition_variable",id:"condition_variable",level:2},{value:"\u5f02\u6b65\u7ebf\u7a0b",id:"\u5f02\u6b65\u7ebf\u7a0b",level:2},{value:"async\u548cfuture",id:"async\u548cfuture",level:3},{value:"shared_future",id:"shared_future",level:2},{value:"\u539f\u5b50\u7c7b\u578batomic",id:"\u539f\u5b50\u7c7b\u578batomic",level:2},{value:"std::promise",id:"stdpromise",level:2},{value:"std::this_thread",id:"stdthis_thread",level:2},{value:"\u5411\u7ebf\u7a0b\u51fd\u6570\u4f20\u9012\u53c2\u6570",id:"\u5411\u7ebf\u7a0b\u51fd\u6570\u4f20\u9012\u53c2\u6570",level:2},{value:"\u51b3\u5b9a\u7ebf\u7a0b\u6570\u91cf",id:"\u51b3\u5b9a\u7ebf\u7a0b\u6570\u91cf",level:2},{value:"\u8bc6\u522b\u7ebf\u7a0b",id:"\u8bc6\u522b\u7ebf\u7a0b",level:2},{value:"\u7ebf\u7a0b\u6c60",id:"\u7ebf\u7a0b\u6c60",level:2},{value:"\u7ebf\u7a0b\u95f4\u5171\u4eab\u6570\u636e",id:"\u7ebf\u7a0b\u95f4\u5171\u4eab\u6570\u636e",level:2},{value:"\u4e92\u65a5\u91cf",id:"\u4e92\u65a5\u91cf",level:3},{value:"\u7ba1\u7406mutex\u7684RAII\u7c7b",id:"\u7ba1\u7406mutex\u7684raii\u7c7b",level:3},{value:"once_flag\u548ccall_once",id:"once_flag\u548ccall_once",level:2},{value:"recursive_mutex\u5faa\u73af\u9501",id:"recursive_mutex\u5faa\u73af\u9501",level:2},{value:"RAII",id:"raii",level:2}];function a(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u521b\u5efa\u7ebf\u7a0b",children:"\u521b\u5efa\u7ebf\u7a0b"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"std::thread th1(func1, a1,b1)"})," \u521b\u5efa\u4e00\u4e2a\u540d\u4e3ath1\u7684\u7ebf\u7a0b\uff0c\u5e76\u4e14\u4f20\u5165a1,b1\uff0c\u540c\u65f6\u7ebf\u7a0bth1\u5f00\u59cb\u6267\u884c\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u53ea\u8981\u521b\u5efa\u4e86\u7ebf\u7a0b\u5bf9\u8c61\uff0c\u7ebf\u7a0b\u5c31\u5f00\u59cb\u6267\u884c\u3002\u6240\u4ee5\u4e0d\u5e94\u8be5\u5728\u521b\u5efa\u4e86\u7ebf\u7a0b\u540e\u9a6c\u4e0ajoin, \u8fd9\u6837\u4f1a\u9a6c\u4e0a\u963b\u585e\u4e3b\u7ebf\u7a0b\uff0c\u521b\u5efa\u4e86\u7ebf\u7a0b\u548c\u6ca1\u6709\u521b\u5efa\u4e00\u6837\uff0c\u5e94\u8be5\u5728\u665a\u4e00\u70b9\u7684\u4f4d\u7f6e\u8c03\u7528join"}),"\n",(0,l.jsx)(n.p,{children:"\u5f53\u7ebf\u7a0b\u542f\u52a8\u540e\uff0c\u4e00\u5b9a\u8981\u5728\u548c\u7ebf\u7a0b\u76f8\u5173\u8054\u7684std::thread\u5bf9\u8c61\u9500\u6bc1\u524d\uff0c\u5bf9\u7ebf\u7a0b\u8fd0\u7528join()\u6216\u8005detach()\u65b9\u6cd5\u3002"}),"\n",(0,l.jsx)(n.p,{children:"join()\u4e0edetach()\u90fd\u662fstd::thread\u7c7b\u7684\u6210\u5458\u51fd\u6570\uff0c\u662f\u4e24\u79cd\u7ebf\u7a0b\u963b\u585e\u65b9\u6cd5\uff0c\u4e24\u8005\u7684\u533a\u522b\u662f\u662f\u5426\u7b49\u5f85\u5b50\u7ebf\u7a0b\u6267\u884c\u7ed3\u675f\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u7b49\u5f85\u8c03\u7528\u7ebf\u7a0b\u8fd0\u884c\u7ed3\u675f\u540e\u5f53\u524d\u7ebf\u7a0b\u518d\u7ee7\u7eed\u8fd0\u884c\uff0c\u4f8b\u5982\uff0c\u4e3b\u51fd\u6570\u4e2d\u6709\u4e00\u6761\u8bed\u53e5th1.join(),\u90a3\u4e48\u6267\u884c\u5230\u8fd9\u91cc\uff0c\u4e3b\u51fd\u6570\u963b\u585e\uff0c\u76f4\u5230\u7ebf\u7a0bth1\u8fd0\u884c\u7ed3\u675f\uff0c\u4e3b\u51fd\u6570\u518d\u7ee7\u7eed\u8fd0\u884c\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u8c03\u7528join()\u4f1a\u6e05\u7406\u7ebf\u7a0b\u76f8\u5173\u7684\u5b58\u50a8\u90e8\u5206\uff0c\u8fd9\u4ee3\u8868join()\u53ea\u80fd\u8c03\u7528\u4e00\u6b21\u3002\u4f7f\u7528joinable()\u6765\u5224\u65adjoin()\u662f\u5426\u53ef\u8c03\u7528\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u4f7f\u7528detach()\uff0c\u5fc5\u987b\u4fdd\u8bc1\u7ebf\u7a0b\u7ed3\u675f\u4e4b\u524d\u53ef\u8bbf\u95ee\u6570\u636e\u7684\u6709\u6548\u6027\u3002\u7531\u4e8edetach\u4e0d\u963b\u585e\uff0c\u5f88\u6709\u53ef\u80fd\u8bbf\u95ee\u5230\u5df2\u7ecf\u6790\u6784\u7684\u5bf9\u8c61\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u6b7b\u9501\u6761\u4ef6",children:"\u6b7b\u9501\u6761\u4ef6"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e92\u65a5\uff08\u8d44\u6e90\u540c\u4e00\u65f6\u523b\u53ea\u80fd\u88ab\u4e00\u4e2a\u8fdb\u7a0b\u4f7f\u7528\uff09"}),"\n",(0,l.jsx)(n.li,{children:"\u8bf7\u6c42\u5e76\u4fdd\u6301\uff08\u8fdb\u7a0b\u5728\u8bf7\u8d44\u6e90\u65f6\uff0c\u4e0d\u91ca\u653e\u81ea\u5df1\u5df2\u7ecf\u5360\u6709\u7684\u8d44\u6e90\uff09"}),"\n",(0,l.jsx)(n.li,{children:"\u4e0d\u5265\u593a\uff08\u8fdb\u7a0b\u5df2\u7ecf\u83b7\u5f97\u7684\u8d44\u6e90\uff0c\u5728\u8fdb\u7a0b\u4f7f\u7528\u5b8c\u524d\uff0c\u4e0d\u80fd\u5f3a\u5236\u5265\u593a\uff09"}),"\n",(0,l.jsx)(n.li,{children:"\u5faa\u73af\u7b49\u5f85\uff08\u8fdb\u7a0b\u95f4\u5f62\u6210\u73af\u72b6\u7684\u8d44\u6e90\u5faa\u73af\u7b49\u5f85\u5173\u7cfb\uff09"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u9501\u7684\u7c7b\u578b",children:"\u9501\u7684\u7c7b\u578b"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e92\u65a5\u9501"}),"\n",(0,l.jsx)(n.li,{children:"\u8bfb\u5199\u9501"}),"\n",(0,l.jsx)(n.li,{children:"\u81ea\u65cb\u9501"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"lock_guard",children:"lock_guard"}),"\n",(0,l.jsxs)(n.p,{children:["\u901a\u8fc7\u8bbe\u5b9a\u4f5c\u7528\u57df\uff0c\u4f7f\u5f97std::lock_guard\u5728\u5408\u9002\u7684\u5730\u65b9\u88ab\u6790\u6784\uff08\u5728\u4e92\u65a5\u91cf\u9501\u5b9a\u5230\u4e92\u65a5\u91cf\u89e3\u9501\u4e4b\u95f4\u7684\u4ee3\u7801\u53eb\u505a\u4e34\u754c\u533a\uff08\u9700\u8981\u4e92\u65a5\u8bbf\u95ee\u5171\u4eab\u8d44\u6e90\u7684\u90a3\u6bb5\u4ee3\u7801\u79f0\u4e3a\u4e34\u754c\u533a\uff09\uff0c\u4e34\u754c\u533a\u8303\u56f4\u5e94\u8be5\u5c3d\u53ef\u80fd\u7684\u5c0f\uff0c\u5373lock\u4e92\u65a5\u91cf\u540e\u5e94\u8be5\u5c3d\u65e9unlock\uff09\uff0c\u901a\u8fc7\u4f7f\u7528","\u6765\u8c03\u6574\u4f5c\u7528\u57df\u8303\u56f4\uff0c\u53ef\u4f7f\u5f97\u4e92\u65a5\u91cfm\u5728\u5408\u9002\u7684\u5730\u65b9\u88ab\u89e3\u9501"]}),"\n",(0,l.jsx)(n.h2,{id:"unique_lock",children:"unique_lock"}),"\n",(0,l.jsx)(n.p,{children:"\u4f7f\u7528std::lock_guard\u540e\u4e0d\u80fd\u624b\u52a8lock()\u4e0e\u624b\u52a8unlock();\u4f7f\u7528std::unique_lock\u540e\u53ef\u4ee5\u624b\u52a8lock()\u4e0e\u624b\u52a8unlock(); std::unique_lock\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u9664\u4e86\u53ef\u4ee5\u662fadopt_lock,\u8fd8\u53ef\u4ee5\u662ftry_to_lock\u4e0edefer_lock;"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"try_to_lock: \u5c1d\u8bd5\u53bb\u9501\u5b9a\uff0c\u5f97\u4fdd\u8bc1\u9501\u5904\u4e8eunlock\u7684\u72b6\u6001,\u7136\u540e\u5c1d\u8bd5\u73b0\u5728\u80fd\u4e0d\u80fd\u83b7\u5f97\u9501\uff1b\u5c1d\u8bd5\u7528mutx\u7684lock()\u53bb\u9501\u5b9a\u8fd9\u4e2amutex\uff0c\u4f46\u5982\u679c\u6ca1\u6709\u9501\u5b9a\u6210\u529f\uff0c\u4f1a\u7acb\u5373\u8fd4\u56de\uff0c\u4e0d\u4f1a\u963b\u585e\u5728\u90a3\u91cc\uff0c\u5e76\u7ee7\u7eed\u5f80\u4e0b\u6267\u884c\uff1b"}),"\n",(0,l.jsx)(n.li,{children:"defer_lock: \u521d\u59cb\u5316\u4e86\u4e00\u4e2a\u6ca1\u6709\u52a0\u9501\u7684mutex;"}),"\n",(0,l.jsx)(n.li,{children:"adopt_lock_t\uff0c\u5047\u8bbe\u8c03\u7528\u65b9\u7ebf\u7a0b\u5df2\u62e5\u6709\u4e92\u65a5\u7684\u6240\u6709\u6743\u3002\u6b64\u65f6\u4e0d\u518d\u4e0a\u9501\uff0c\u53ea\u4f1a\u8f6c\u79fb\u6240\u6709\u6743\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u4f7f\u7528try_to_lock\u8981\u5c0f\u5fc3\uff0c\u56e0\u4e3atry_to_lock\u5c1d\u8bd5\u9501\u5931\u8d25\u540e\u4e0d\u4f1a\u963b\u585e\u7ebf\u7a0b\uff0c\u800c\u662f\u7ee7\u7eed\u5f80\u4e0b\u6267\u884c\u7a0b\u5e8f\uff0c\u56e0\u6b64\uff0c\u9700\u8981\u4f7f\u7528if-else\u8bed\u53e5\u6765\u5224\u65ad\u662f\u5426\u9501\u6210\u529f,\u53ea\u6709\u9501\u6210\u529f\u540e\u624d\u80fd\u53bb\u6267\u884c\u4e92\u65a5\u4ee3\u7801\u6bb5\u3002\u800c\u4e14\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u56e0\u4e3atry_to_lock\u5c1d\u8bd5\u9501\u5931\u8d25\u540e\u4ee3\u7801\u7ee7\u7eed\u5f80\u4e0b\u6267\u884c\u4e86\uff0c\u56e0\u6b64\u8be5\u8bed\u53e5\u4e0d\u4f1a\u518d\u6b21\u53bb\u5c1d\u8bd5\u9501\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"stdunique_lock\u6240\u6709\u6743\u8f6c\u79fb",children:"std::unique_lock\u6240\u6709\u6743\u8f6c\u79fb"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u8fd9\u91cc\u7684\u8f6c\u79fb\u6307\u7684\u662fstd::unique_lock\u5bf9\u8c61\u95f4\u7684\u8f6c\u79fb\uff1bstd::mutex\u5bf9\u8c61\u7684\u6240\u6709\u6743\u4e0d\u9700\u8981\u624b\u52a8\u8f6c\u79fb\u7ed9std::unique_lock,std::unique_lock\u5bf9\u8c61\u5b9e\u4f8b\u5316\u540e\u4f1a\u76f4\u63a5\u63a5\u7ba1std::mutex\u3002"})}),"\n",(0,l.jsx)(n.h2,{id:"condition_variable",children:"condition_variable"}),"\n",(0,l.jsx)(n.p,{children:"std::condition_variable\u7c7b\u642d\u914dstd::mutex\u7c7b\u6765\u4f7f\u7528\uff0cstd::condition_variable\u5bf9\u8c61(std::condition_variable cond;)\u7684\u4f5c\u7528\u4e0d\u662f\u7528\u6765\u7ba1\u7406\u4e92\u65a5\u91cf\u7684\uff0c\u5b83\u7684\u4f5c\u7528\u662f\u7528\u6765\u540c\u6b65\u7ebf\u7a0b\uff0c\u5b83\u7684\u7528\u6cd5\u76f8\u5f53\u4e8e\u7f16\u7a0b\u4e2d\u5e38\u89c1\u7684flag\u6807\u5fd7\uff08A\u3001B\u4e24\u4e2a\u4eba\u7ea6\u5b9aflag=true\u4e3a\u884c\u52a8\u53f7\u89d2\uff0c\u9ed8\u8ba4flag\u4e3afalse,A\u4e0d\u65ad\u7684\u68c0\u67e5flag\u7684\u503c,\u53ea\u8981B\u5c06flag\u4fee\u6539\u4e3atrue\uff0cA\u5c31\u5f00\u59cb\u884c\u52a8\uff09\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u7c7b\u6bd4\u5230std::condition_variable\uff0cA\u3001B\u4e24\u4e2a\u4eba\u7ea6\u5b9anotify_one\u4e3a\u884c\u52a8\u53f7\u89d2\uff0cA\u5c31\u7b49\u7740\uff08\u8c03\u7528wait(),\u963b\u585e\uff09,\u53ea\u8981B\u4e00\u8c03\u7528notify_one\uff0cA\u5c31\u5f00\u59cb\u884c\u52a8\uff08\u4e0d\u518d\u963b\u585e\uff09\u3002"}),"\n",(0,l.jsx)(n.p,{children:"wait(locker) :"}),"\n",(0,l.jsx)(n.p,{children:"wait\u51fd\u6570\u9700\u8981\u4f20\u5165\u4e00\u4e2astd::mutex\uff08\u4e00\u822c\u4f1a\u4f20\u5165std::unique_lock\u5bf9\u8c61\uff09,\u5373\u4e0a\u8ff0\u7684locker\u3002wait\u51fd\u6570\u4f1a\u81ea\u52a8\u8c03\u7528 locker.unlock() \u91ca\u653e\u9501\uff08\u56e0\u4e3a\u9700\u8981\u91ca\u653e\u9501\uff0c\u6240\u4ee5\u8981\u4f20\u5165mutex\uff09\u5e76\u963b\u585e\u5f53\u524d\u7ebf\u7a0b\uff0c\u672c\u7ebf\u7a0b\u91ca\u653e\u9501\u4f7f\u5f97\u5176\u4ed6\u7684\u7ebf\u7a0b\u5f97\u4ee5\u7ee7\u7eed\u7ade\u4e89\u9501\u3002\u4e00\u65e6\u5f53\u524d\u7ebf\u7a0b\u83b7\u5f97notify(\u901a\u5e38\u662f\u53e6\u5916\u67d0\u4e2a\u7ebf\u7a0b\u8c03\u7528 notify_* \u5524\u9192\u4e86\u5f53\u524d\u7ebf\u7a0b)\uff0cwait() \u51fd\u6570\u6b64\u65f6\u518d\u81ea\u52a8\u8c03\u7528 locker.lock()\u4e0a\u9501\u3002"}),"\n",(0,l.jsx)(n.p,{children:"cond.notify_one(): \u968f\u673a\u5524\u9192\u4e00\u4e2a\u7b49\u5f85\u7684\u7ebf\u7a0b"}),"\n",(0,l.jsx)(n.p,{children:"cond.notify_all(): \u5524\u9192\u6240\u6709\u7b49\u5f85\u7684\u7ebf\u7a0b"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"center"},children:"\u6210\u5458\u51fd\u6570"}),(0,l.jsx)(n.th,{style:{textAlign:"center"},children:"\u529f \u80fd"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"wait()"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"\u963b\u585e\u5f53\u524d\u7ebf\u7a0b\uff0c\u7b49\u5f85\u6761\u4ef6\u6210\u7acb\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"wait_for()"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"\u963b\u585e\u5f53\u524d\u7ebf\u7a0b\u7684\u8fc7\u7a0b\u4e2d\uff0c\u8be5\u51fd\u6570\u4f1a\u81ea\u52a8\u8c03\u7528 unlock() \u51fd\u6570\u89e3\u9501\u4e92\u65a5\u9501\uff0c\u4ece\u800c\u4ee4\u5176\u4ed6\u7ebf\u7a0b\u4f7f\u7528\u516c\u5171\u8d44\u6e90\u3002\u5f53\u6761\u4ef6\u6210\u7acb\u6216\u8005\u8d85\u8fc7\u4e86\u6307\u5b9a\u7684\u7b49\u5f85\u65f6\u95f4\uff08\u6bd4\u5982 3 \u79d2\uff09\uff0c\u8be5\u51fd\u6570\u4f1a\u81ea\u52a8\u8c03\u7528 lock() \u51fd\u6570\u5bf9\u4e92\u65a5\u9501\u52a0\u9501\uff0c\u540c\u65f6\u4ee4\u7ebf\u7a0b\u7ee7\u7eed\u6267\u884c\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"wait_until()"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"\u548c wait_for() \u529f\u80fd\u7c7b\u4f3c\uff0c\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff0cwait_until() \u51fd\u6570\u53ef\u4ee5\u8bbe\u5b9a\u4e00\u4e2a\u5177\u4f53\u65f6\u95f4\u70b9\uff08\u4f8b\u5982 2021\u5e744\u67088\u65e5 \u7684\u67d0\u4e2a\u5177\u4f53\u65f6\u95f4\uff09\uff0c\u5f53\u6761\u4ef6\u6210\u7acb\u6216\u8005\u7b49\u5f85\u65f6\u95f4\u8d85\u8fc7\u4e86\u6307\u5b9a\u7684\u65f6\u95f4\u70b9\uff0c\u51fd\u6570\u4f1a\u81ea\u52a8\u5bf9\u4e92\u65a5\u9501\u52a0\u9501\uff0c\u540c\u65f6\u7ebf\u7a0b\u7ee7\u7eed\u6267\u884c\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"notify_one()"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"\u5411\u5176\u4e2d\u4e00\u4e2a\u6b63\u5728\u7b49\u5f85\u7684\u7ebf\u7a0b\u53d1\u9001\u201c\u6761\u4ef6\u6210\u7acb\u201d\u7684\u4fe1\u53f7\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"notify_all()"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"\u5411\u6240\u6709\u7b49\u5f85\u7684\u7ebf\u7a0b\u53d1\u9001\u201c\u6761\u4ef6\u6210\u7acb\u201d\u7684\u4fe1\u53f7\u3002"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u5f02\u6b65\u7ebf\u7a0b",children:"\u5f02\u6b65\u7ebf\u7a0b"}),"\n",(0,l.jsxs)(n.p,{children:["\u9700\u8981",(0,l.jsx)(n.code,{children:"#include <future>"})]}),"\n",(0,l.jsx)(n.h3,{id:"async\u548cfuture",children:"async\u548cfuture"}),"\n",(0,l.jsx)(n.p,{children:"\u521a\u5b9e\u4f8b\u5316\u7684future\u662f\u6ca1\u6709\u50a8\u5b58\u503c\u7684\uff0c\u4f46\u5728\u8c03\u7528std::future\u5bf9\u8c61\u7684get()\u6210\u5458\u51fd\u6570\u65f6\uff0c\u4e3b\u7ebf\u7a0b\u4f1a\u88ab\u963b\u585e\u76f4\u5230\u5f02\u6b65\u7ebf\u7a0b\u6267\u884c\u7ed3\u675f\uff0c\u5e76\u628a\u8fd4\u56de\u7ed3\u679c\u4f20\u9012\u7ed9std::future\uff0c\u5373\u901a\u8fc7FutureObject.get()\u83b7\u53d6\u51fd\u6570\u8fd4\u56de\u503c\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u76f8\u5f53\u4e8e\u4f60\u53bb\u529e\u653f\u5e9c\u529e\u4e1a\u52a1\uff08\u4e3b\u7ebf\u7a0b\uff09\uff0c\u628a\u8d44\u6599\u4ea4\u7ed9\u4e86\u524d\u53f0\uff0c\u524d\u53f0\u5b89\u6392\u4e86\u4eba\u5458\u53bb\u7ed9\u4f60\u529e\u7406\uff08std::async\u521b\u5efa\u5b50\u7ebf\u7a0b\uff09\uff0c\u524d\u53f0\u7ed9\u4e86\u4f60\u4e00\u4e2a\u5355\u636e\uff08std::future\u5bf9\u8c61\uff09\uff0c\u8bf4\u4f60\u7684\u4e1a\u52a1\u6b63\u5728\u7ed9\u4f60\u529e\uff08\u5b50\u7ebf\u7a0b\u6b63\u5728\u8fd0\u884c\uff09\uff0c\u7b49\u6bb5\u65f6\u95f4\u4f60\u518d\u8fc7\u6765\u51ed\u8fd9\u4e2a\u5355\u636e\u53d6\u7ed3\u679c\u3002\u8fc7\u4e86\u6bb5\u65f6\u95f4\uff0c\u4f60\u53bb\u524d\u53f0\u53d6\u7ed3\u679c\uff08\u8c03\u7528get()\uff09\uff0c\u4f46\u662f\u7ed3\u679c\u8fd8\u6ca1\u51fa\u6765\uff08\u5b50\u7ebf\u7a0b\u8fd8\u6ca1return\uff09\uff0c\u4f60\u5c31\u5728\u524d\u53f0\u7b49\u7740\uff08\u963b\u585e\uff09\uff0c\u76f4\u5230\u4f60\u62ff\u5230\u7ed3\u679c\uff08\u5b50\u7ebf\u7a0breturn\uff09\uff0c\u4f60\u624d\u79bb\u5f00\uff08\u4e0d\u518d\u963b\u585e\uff09\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"shared_future",children:"shared_future"}),"\n",(0,l.jsxs)(n.p,{children:["std::future\u7684get()\u6210\u5458\u51fd\u6570\u662f\u8f6c\u79fb\u6570\u636e\u6240\u6709\u6743;std::shared_future\u7684get()\u6210\u5458\u51fd\u6570\u662f\u590d\u5236\u6570\u636e\u3002\u56e0\u6b64\uff1a",(0,l.jsx)(n.strong,{children:"future\u5bf9\u8c61\u7684get()\u53ea\u80fd\u8c03\u7528\u4e00\u6b21"}),"\uff1b\u65e0\u6cd5\u5b9e\u73b0\u591a\u4e2a\u7ebf\u7a0b\u7b49\u5f85\u540c\u4e00\u4e2a\u5f02\u6b65\u7ebf\u7a0b\uff0c\u4e00\u65e6\u5176\u4e2d\u4e00\u4e2a\u7ebf\u7a0b\u83b7\u53d6\u4e86\u5f02\u6b65\u7ebf\u7a0b\u7684\u8fd4\u56de\u503c\uff0c\u5176\u4ed6\u7ebf\u7a0b\u5c31\u65e0\u6cd5\u518d\u6b21\u83b7\u53d6\u3002 ",(0,l.jsx)(n.strong,{children:"std::shared_future\u5bf9\u8c61\u7684get()\u53ef\u4ee5\u8c03\u7528\u591a\u6b21"}),"\uff1b\u53ef\u4ee5\u5b9e\u73b0\u591a\u4e2a\u7ebf\u7a0b\u7b49\u5f85\u540c\u4e00\u4e2a\u5f02\u6b65\u7ebf\u7a0b\uff0c\u6bcf\u4e2a\u7ebf\u7a0b\u90fd\u53ef\u4ee5\u83b7\u53d6\u5f02\u6b65\u7ebf\u7a0b\u7684\u8fd4\u56de\u503c\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u539f\u5b50\u7c7b\u578batomic",children:"\u539f\u5b50\u7c7b\u578batomic"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u5373\u4f7f\u4f7f\u7528\u4e86std::atomic\uff0c\u4e5f\u8981\u6ce8\u610f\u6267\u884c\u7684\u64cd\u4f5c\u662f\u5426\u652f\u6301\u539f\u5b50\u6027"}),"\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u4f60\u4e0d\u8981\u89c9\u5f97\u7528\u7684\u662f\u5177\u6709\u539f\u5b50\u6027\u7684\u53d8\u91cf\uff08\u51c6\u786e\u8bf4\u662f\u5bf9\u8c61\uff09\u5c31\u53ef\u4ee5\u4e3a\u6240\u6b32\u4e3a\u4e86\uff0c\u4f60\u5bf9\u5b83\u8fdb\u884c\u7684\u8fd0\u7b97\u4e0d\u652f\u6301\u539f\u5b50\u6027\u7684\u8bdd\uff0c\u4e5f\u4e0d\u80fd\u5b9e\u73b0\u5176\u539f\u5b50\u6548\u679c\u3002\u4e00\u822c\u9488\u5bf9",(0,l.jsx)(n.code,{children:"++\uff0c\u2013\uff0c+=\uff0c-=\uff0c&=\uff0c|=\uff0c^="}),"\u662f\u652f\u6301\u7684\uff0c\u8fd9\u4e9b\u539f\u5b50\u64cd\u4f5c\u662f\u901a\u8fc7\u5728std::atomic\u5bf9\u8c61\u5185\u90e8\u8fdb\u884c\u8fd0\u7b97\u7b26\u91cd\u8f7d\u5b9e\u73b0\u7684\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"stdpromise",children:"std::promise"}),"\n",(0,l.jsx)(n.h2,{id:"stdthis_thread",children:"std::this_thread"}),"\n",(0,l.jsx)(n.h2,{id:"\u5411\u7ebf\u7a0b\u51fd\u6570\u4f20\u9012\u53c2\u6570",children:"\u5411\u7ebf\u7a0b\u51fd\u6570\u4f20\u9012\u53c2\u6570"}),"\n",(0,l.jsx)(n.p,{children:"\u4e3e\u4e2a\u4f8b\u5b50\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:" void update_data_for_widget(widget_id w,widget_data& data); // \u5f15\u7528\u4f20\u53c2\n void oops_again(widget_id w)\n {\n     widget_data data;\n     std::thread t(update_data_for_widget,w,data); // error \u53f3\u503c\u4e0d\u53ef\u4ee5\u5339\u914d\u5230\u5de6\u503c\u5f15\u7528\n     display_status();\n     t.join();\n }\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u56e0\u4e3a\u5728\u7b2c\u4e8c\u6b21\u4f20\u53c2\u65f6\uff0c\u53d1\u751f\u4e86std::move\u5f3a\u8f6c\u4e3a\u53f3\u503c\uff0c\u4e0d\u80fd\u5339\u914d",(0,l.jsx)(n.code,{children:"widget_data&"}),"\u5de6\u503c\u5f15\u7528\uff0c\u81ea\u7136\u62a5\u9519\u3002\u5982\u679c\u975e\u8981\u7528\u5f15\u7528\u4f20\u53c2\uff0c\u9700\u8981\u7528",(0,l.jsx)(n.code,{children:"std::ref"}),"\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u628a\u90a3\u4e00\u884c\u4ee3\u7801\u6539\u4e3a",(0,l.jsx)(n.code,{children:"std::thread t(update_data_for_widget,w,std::ref(data));"}),"\u5c31\u53ef\u4ee5\u4e86\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u51b3\u5b9a\u7ebf\u7a0b\u6570\u91cf",children:"\u51b3\u5b9a\u7ebf\u7a0b\u6570\u91cf"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"std::thread::hardware_concurrency()"}),"\u5728\u65b0\u7248C++\u6807\u51c6\u5e93\u4e2d\u662f\u4e00\u4e2a\u5f88\u6709\u7528\u7684\u51fd\u6570\u3002\u8fd9\u4e2a\u51fd\u6570\u5c06\u8fd4\u56de\u80fd\u540c\u65f6\u5e76\u53d1\u5728\u4e00\u4e2a\u7a0b\u5e8f\u4e2d\u7684\u7ebf\u7a0b\u6570\u91cf\u3002\u4f8b\u5982\uff0c\u591a\u6838\u7cfb\u7edf\u4e2d\uff0c\u8fd4\u56de\u503c\u53ef\u4ee5\u662fCPU\u6838\u82af\u7684\u6570\u91cf\u3002\u8fd4\u56de\u503c\u4e5f\u4ec5\u4ec5\u662f\u4e00\u4e2a\u63d0\u793a\uff0c\u5f53\u7cfb\u7edf\u4fe1\u606f\u65e0\u6cd5\u83b7\u53d6\u65f6\uff0c\u51fd\u6570\u4e5f\u4f1a\u8fd4\u56de0\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8bc6\u522b\u7ebf\u7a0b",children:"\u8bc6\u522b\u7ebf\u7a0b"}),"\n",(0,l.jsxs)(n.p,{children:["\u7ebf\u7a0b\u6807\u8bc6\u7c7b\u578b\u662fstd:","\ud83e\uddf5",":id\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u8fdb\u884c\u68c0\u7d22\u3002"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7b2c\u4e00\u79cd\uff0c\u6210\u5458\u51fd\u6570get_id()\u6765\u76f4\u63a5\u83b7\u53d6\uff1b"}),"\n",(0,l.jsx)(n.li,{children:"\u7b2c\u4e8c\u79cd\uff0c\u5f53\u524d\u7ebf\u7a0b\u4e2d\u8c03\u7528std::this_thread::get_id()\uff1b"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679cstd::thread\u5bf9\u8c61\u6ca1\u6709\u4e0e\u4efb\u4f55\u6267\u884c\u7ebf\u7a0b\u76f8\u5173\u8054\uff0cget_id()\u5c06\u8fd4\u56destd:","\ud83e\uddf5",":type\u9ed8\u8ba4\u6784\u9020\u503c\uff0c\u8fd9\u4e2a\u503c\u8868\u793a\u201c\u6ca1\u6709\u7ebf\u7a0b\u201d\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u7ebf\u7a0b\u6c60",children:"\u7ebf\u7a0b\u6c60"}),"\n",(0,l.jsx)(n.p,{children:"\u4e0d\u91c7\u7528\u7ebf\u7a0b\u6c60\u65f6\uff1a"}),"\n",(0,l.jsx)(n.p,{children:"\u521b\u5efa\u7ebf\u7a0b -> \u7531\u8be5\u7ebf\u7a0b\u6267\u884c\u4efb\u52a1 -> \u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\u540e\u9500\u6bc1\u7ebf\u7a0b\u3002\u5373\u4f7f\u9700\u8981\u4f7f\u7528\u5230\u5927\u91cf\u7ebf\u7a0b\uff0c\u6bcf\u4e2a\u7ebf\u7a0b\u90fd\u8981\u6309\u7167\u8fd9\u4e2a\u6d41\u7a0b\u6765\u521b\u5efa\u3001\u6267\u884c\u4e0e\u9500\u6bc1\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u7ebf\u7a0b\u6c60\u7684\u7b56\u7565\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u7a0b\u5e8f\u542f\u52a8\u540e\uff0c\u9884\u5148\u521b\u5efa\u4e00\u5b9a\u6570\u91cf\u7684\u7ebf\u7a0b\u653e\u5165\u7a7a\u95f2\u961f\u5217\u4e2d\uff0c\u8fd9\u4e9b\u7ebf\u7a0b\u90fd\u662f\u5904\u4e8e\u963b\u585e\u72b6\u6001\uff0c\u57fa\u672c\u4e0d\u6d88\u8017CPU\uff0c\u53ea\u5360\u7528\u8f83\u5c0f\u7684\u5185\u5b58\u7a7a\u95f4\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u63a5\u6536\u5230\u4efb\u52a1\u540e\uff0c\u4efb\u52a1\u88ab\u6302\u5728\u4efb\u52a1\u961f\u5217\uff0c\u7ebf\u7a0b\u6c60\u9009\u62e9\u4e00\u4e2a\u7a7a\u95f2\u7ebf\u7a0b\u6765\u6267\u884c\u6b64\u4efb\u52a1\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u4e0d\u9500\u6bc1\u7ebf\u7a0b\uff0c\u7ebf\u7a0b\u7ee7\u7eed\u4fdd\u6301\u5728\u6c60\u4e2d\u7b49\u5f85\u4e0b\u4e00\u6b21\u7684\u4efb\u52a1\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u7ebf\u7a0b\u6c60\u6240\u89e3\u51b3\u7684\u95ee\u9898\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u9700\u8981\u9891\u7e41\u521b\u5efa\u4e0e\u9500\u6bc1\u5927\u91cf\u7ebf\u7a0b\u7684\u60c5\u51b5\u4e0b\uff0c\u7531\u4e8e\u7ebf\u7a0b\u9884\u5148\u5c31\u521b\u5efa\u597d\u4e86\uff0c\u63a5\u5230\u4efb\u52a1\u5c31\u80fd\u9a6c\u4e0a\u4ece\u7ebf\u7a0b\u6c60\u4e2d\u8c03\u7528\u7ebf\u7a0b\u6765\u5904\u7406\u4efb\u52a1\uff0c\u51cf\u5c11\u4e86\u521b\u5efa\u4e0e\u9500\u6bc1\u7ebf\u7a0b\u5e26\u6765\u7684\u65f6\u95f4\u5f00\u9500\u548cCPU\u8d44\u6e90\u5360\u7528\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u9700\u8981\u5e76\u53d1\u7684\u4efb\u52a1\u5f88\u591a\u65f6\u5019\uff0c\u65e0\u6cd5\u4e3a\u6bcf\u4e2a\u4efb\u52a1\u6307\u5b9a\u4e00\u4e2a\u7ebf\u7a0b\uff08\u7ebf\u7a0b\u4e0d\u591f\u5206\uff09\uff0c\u4f7f\u7528\u7ebf\u7a0b\u6c60\u53ef\u4ee5\u5c06\u63d0\u4ea4\u7684\u4efb\u52a1\u6302\u5728\u4efb\u52a1\u961f\u5217\u4e0a\uff0c\u7b49\u5230\u6c60\u4e2d\u6709\u7a7a\u95f2\u7ebf\u7a0b\u65f6\u5c31\u53ef\u4ee5\u4e3a\u8be5\u4efb\u52a1\u6307\u5b9a\u7ebf\u7a0b\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u7ebf\u7a0b\u95f4\u5171\u4eab\u6570\u636e",children:"\u7ebf\u7a0b\u95f4\u5171\u4eab\u6570\u636e"}),"\n",(0,l.jsx)(n.h3,{id:"\u4e92\u65a5\u91cf",children:"\u4e92\u65a5\u91cf"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"std::mutex\u7528\u4e8e\u4e92\u65a5\u9501\u7684\u4e92\u65a5\u91cf"}),"\n",(0,l.jsx)(n.li,{children:"std::shared_mutex\u7528\u4e8e\u8bfb\u5199\u9501\u7684\u4e92\u65a5\u91cf"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u7ba1\u7406mutex\u7684raii\u7c7b",children:"\u7ba1\u7406mutex\u7684RAII\u7c7b"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"std::lock_guard(C++11)\u6700\u7b80\u5355\uff0c\u6784\u9020\u65f6lock\uff0c\u6790\u6784\u65f6unlock"}),"\n",(0,l.jsx)(n.li,{children:"std::unique_lock(C++11)\u652f\u6301\u79fb\u52a8\uff0c\u52a0\u9501\u89e3\u9501\u7075\u6d3b"}),"\n",(0,l.jsx)(n.li,{children:"std::share_lock(C++14)\u9488\u5bf9\u8bfb\u5199\u9501\uff0c\u6784\u9020\u65f6lock_shared\uff0c\u6790\u6784\u65f6unlock_shared"}),"\n",(0,l.jsx)(n.li,{children:"std::scoped_lock(C++17)\u652f\u6301\u6279\u91cf\u52a0\u9501\uff0c\u6279\u91cf\u89e3\u9501"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"once_flag\u548ccall_once",children:"once_flag\u548ccall_once"}),"\n",(0,l.jsx)(n.p,{children:"\u5f88\u591a\u65f6\u5019\u6211\u4eec\u7684\u4ee3\u7801\u53ea\u9700\u8981\u6267\u884c\u4e00\u6b21\uff0c\u6bd4\u5982\u521d\u59cb\u5316\u65f6\uff0c\u5148\u5224\u65ad\u6570\u636e\u662f\u5426\u5df2\u88ab\u521d\u59cb\u5316\uff0c\u82e5\u672a\u521d\u59cb\u5316\u5219\u8c03\u7528\u521d\u59cb\u5316\u65b9\u6cd5\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u5728\u5355\u7ebf\u7a0b\u4e2d\u662f\u5b89\u5168\u7684\uff0c\u5728\u591a\u7ebf\u7a0b\u4e2d\u662f\u4e0d\u5b89\u5168\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u8981\u7528\u4e92\u65a5\u91cf\u8fdb\u884c\u4e92\u65a5\u8bbf\u95ee\uff0c\u4f46\u76f4\u63a5\u4e0a\u9501\u4f1a\u592a\u6d6a\u8d39\uff0c\u9020\u6210\u4e0d\u5fc5\u8981\u7684\u963b\u585e\u540c\u6b65\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:" std::shared_ptr<some_resource> resource_ptr;\n std::once_flag resource_flag; \n // \u7528\u6765\u6307\u793a\u662f\u5426\u8c03\u7528\u8fc7\uff0c\u5f53call_once\u8c03\u7528\u5b8c\u5c31\u6539\u53d8\n void init_resource()\n {\n     resource_ptr.reset(new some_resource);\n }\n \u200b\n void foo()\n {\n     std::call_once(resource_flag,init_resource); // \u53ef\u4ee5\u5b8c\u6574\u7684\u8fdb\u884c\u4e00\u6b21\u521d\u59cb\u5316\n     resource_ptr->do_something();\n }\n\n"})}),"\n",(0,l.jsx)(n.h2,{id:"recursive_mutex\u5faa\u73af\u9501",children:"recursive_mutex\u5faa\u73af\u9501"}),"\n",(0,l.jsxs)(n.p,{children:["\u5f53\u4e00\u4e2a\u7ebf\u7a0b\u5df2\u7ecf\u83b7\u53d6\u4e00\u4e2a",(0,l.jsx)(n.code,{children:"std::mutex"}),"\u65f6\uff08\u5df2\u7ecf\u4e0a\u9501\uff09\uff0c\u5e76\u5bf9\u5176\u518d\u6b21\u4e0a\u9501\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u5c31\u662f\u9519\u8bef\u7684\uff0c\u5e76\u4e14\u7ee7\u7eed\u5c1d\u8bd5\u8fd9\u6837\u505a\u7684\u8bdd\uff0c\u5c31\u4f1a\u4ea7\u751f\u672a\u5b9a\u4e49\u884c\u4e3a\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u7136\u800c\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e2a\u7ebf\u7a0b\u5c1d\u8bd5\u83b7\u53d6\u540c\u4e00\u4e2a\u4e92\u65a5\u91cf\u591a\u6b21\uff0c \u800c\u6ca1\u6709\u5bf9\u5176\u8fdb\u884c\u4e00\u6b21\u91ca\u653e\u662f\u53ef\u4ee5\u7684\u3002 \u4e4b\u6240\u4ee5\u53ef\u4ee5\uff0c \u662f\u56e0\u4e3aC++\u6807\u51c6\u5e93\u63d0\u4f9b\u4e86",(0,l.jsx)(n.code,{children:"std::recursive_mutex"}),"\u7c7b\u3002 \u4e92\u65a5\u91cf\u9501\u4f4f\u5176\u4ed6\u7ebf\u7a0b\u524d\uff0c \u5fc5\u987b\u91ca\u653e\u62e5\u6709\u7684\u6240\u6709\u9501\uff0c \u6240\u4ee5\u5f53\u8c03\u7528",(0,l.jsx)(n.code,{children:"lock()"}),"\u4e09\u6b21\u540e\uff0c \u4e5f\u5fc5\u987b\u8c03\u7528",(0,l.jsx)(n.code,{children:"unlock()"}),"\u4e09\u6b21\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"raii",children:"RAII"}),"\n",(0,l.jsx)(n.p,{children:"\u8bf4\u767d\u4e86\u5c31\u662f\u4e0d\u8981\u76f4\u63a5\u7528new\u3001delete\u52a8\u6001\u5206\u914d\u5185\u5b58\uff0c\u800c\u5e94\u8be5\u662f\u7528\u5bf9\u8c61\u7ba1\u7406\u8d44\u6e90\uff0c\u8fd9\u6837\u5f53\u5bf9\u8c61\u79bb\u5f00\u4f5c\u7528\u57df\u65f6\uff0c\u4f1a\u81ea\u52a8\u8c03\u7528\u6790\u6784\u51fd\u6570\u91ca\u653e\u8d44\u6e90\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u5c24\u5176\u662f\u5f53\u53d1\u751f\u5f02\u5e38\u65f6\uff0c\u4f1a\u8df3\u8fc7\u5f02\u5e38\u70b9\u540e\u9762\u7684\u6790\u6784\u8bed\u53e5\uff0c\u8fd9\u65f6\u53d1\u751f\u5185\u5b58\u6cc4\u6f0f\uff0c\u800c\u91c7\u7528RAII\u6280\u672f\uff0c\u6839\u636e\u5f02\u5e38\u7684\u6808\u5c55\u5f00\u7279\u70b9\uff0c\u4f1a\u88ab\u81ea\u52a8\u6790\u6784\uff0c\u65e0\u9700\u7a0b\u5e8f\u733f\u62c5\u5fc3\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u603b\u662f\u6df1\u590d\u5236\u3002\u4f46\u662f\u968f\u4e4b\u800c\u6765\u7684\u5f00\u9500\u4e5f\u662f\u5de8\u5927\u7684\uff1b"}),"\n",(0,l.jsx)(n.li,{children:"\u7981\u6b62\u590d\u5236\uff0c\u7981\u6b62\u7f16\u8bd1\u5668\u81ea\u52a8\u751f\u6210copy construct\uff0c\u5982c++11\u7684=delete\u8bed\u6cd5\uff1b"}),"\n",(0,l.jsx)(n.li,{children:"\u5f15\u7528\u8ba1\u6570\uff0c\u5982shared_ptr\u667a\u80fd\u6307\u9488\uff1b"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var l=t(7294);const d={},i=l.createContext(d);function s(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);