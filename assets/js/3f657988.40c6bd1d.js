"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[1235],{4583:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(5893),o=t(1151);const a={title:"GEMM_GPU",description:"GEMM GPU",sidebar_position:1,tags:["gemm","optimization","interview"],editor:"caroot"},l=void 0,r={id:"ml/optimization/gemm_GPU",title:"GEMM_GPU",description:"GEMM GPU",source:"@site/docs/ml/optimization/gemm_GPU.md",sourceDirName:"ml/optimization",slug:"/ml/optimization/gemm_GPU",permalink:"/docs/ml/optimization/gemm_GPU",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/optimization/gemm_GPU.md",tags:[{label:"gemm",permalink:"/docs/tags/gemm"},{label:"optimization",permalink:"/docs/tags/optimization"},{label:"interview",permalink:"/docs/tags/interview"}],version:"current",lastUpdatedAt:1705157542,formattedLastUpdatedAt:"Jan 13, 2024",sidebarPosition:1,frontMatter:{title:"GEMM_GPU",description:"GEMM GPU",sidebar_position:1,tags:["gemm","optimization","interview"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"optimization",permalink:"/docs/ml/optimization/"},next:{title:"AudioLDM 2\uff0c\u52a0\u901f",permalink:"/docs/ml/optimization/SD\u6a21\u578b\u4f18\u5316"}},d={},c=[{value:"naive",id:"naive",level:2},{value:"Tile",id:"tile",level:2},{value:"Coalescing",id:"coalescing",level:2},{value:"no bank conflicts",id:"no-bank-conflicts",level:2},{value:"unroll",id:"unroll",level:2}];function s(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/hova88/cuda-template/tree/main/src/matmul",children:"https://github.com/hova88/cuda-template/tree/main/src/matmul"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"naive",children:"naive"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cuda",children:"__global__ void naiveSgemm(\n    float * __restrict__ a, float * __restrict__ b, float * __restrict__ c,\n    const int M, const int N, const int K) {\n\n    int n = blockIdx.x * blockDim.x + threadIdx.x;\n    int m = blockIdx.y * blockDim.y + threadIdx.y;\n    if (m < M && n < N) {\n        float psum = 0.0;\n        #pragma unroll\n        for (int k = 0; k < K; k++) {\n            psum += a[OFFSET(m, k, K)] * b[OFFSET(k, n, N)];\n        }\n        c[OFFSET(m, n, N)] = psum;\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"tile",children:"Tile"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"for (int m = 0; m < M; m += Mtile)                // iterate over M dimension\n    for (int n = 0; n < N; n += Ntile)            // iterate over N dimension\n        for (int k = 0; k < K; ++k)       //----\x3e like above example\n            for (int i = 0; i < Mtile; ++i)       // compute one tile \n                for (int j = 0; j < Ntile; ++j) {\n                    int row = m + i;\n                    int col = n + j;\n                    C[row][col] += A[row][k] * B[k][col];\n                }\n"})}),"\n",(0,i.jsx)(n.h2,{id:"coalescing",children:"Coalescing"}),"\n",(0,i.jsx)(n.p,{children:"Memory Coalescing \u5408\u5e76\u53d1\u751f\u5728\u4e0d\u540c\u7ebf\u7a0b\u4e4b\u95f4\uff0c\u800c\u4e0d\u662f\u7ebf\u7a0b\u5185\u90e8\u7684\u4e0d\u540c\u8fed\u4ee3\u4e4b\u95f4\u3002\nwarp\u4e2d\u7684\u6240\u6709\u7ebf\u7a0b\u90fd\u6267\u884c\u76f8\u540c\u7684\u6307\u4ee4\uff0c\u5b83\u4eec\u5728\u4efb\u4f55\u65f6\u5019\u90fd\u5728\u540c\u65f6\u6267\u884c\u7b2ck\u6b21\u8fed\u4ee3\u3002\u56e0\u6b64\uff0c\u4e00\u4e2a\u7ebf\u7a0b\u5728\u5176\u751f\u547d\u5468\u671f\u5185\u662f\u5426\u8bfb\u53d6\u6574\u884c\u6570\u636e\u5e76\u4e0d\u91cd\u8981\u3002\u91cd\u8981\u7684\u662f\uff0cwrap\u5185\u7684\u6240\u6709\u7ebf\u7a0b\u5728\u6bcf\u6b21\u5185\u5b58\u8bbf\u95ee\u65f6\u53ef\u4ee5\u5408\u5e76\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0a\u56fe\u4e2d\uff0c\u77e9\u9635M\u5185\u5b58\u8bbf\u95ee\u6a21\u5f0f\u662f\u4f4e\u6548\u7684\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Warp \u4e2d\u7684\u7ebf\u7a0b\u8bfb\u53d6\u76f8\u90bb\u884c\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u7b2c0\u6b21\u8fed\u4ee3\uff0cwrap \u4e2d\u7684\u6bcf\u4e2a\u7ebf\u7a0b\u8bfb\u53d6\u7b2c0-31\u884c\u7684\u7b2c0\u4e2a\u5143\u7d20\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u7b2c1\u6b21\u8fed\u4ee3\uff0c\u8fd9\u4e9b\u7ebf\u7a0b\u518d\u8bfb\u53d6\u7b2c0-31\u884c\u7684\u7b2c1\u4e2a\u5143\u7d20\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u4efb\u4f55\u8bbf\u95ee\u90fd\u4e0d\u4f1a\u88ab\u5408\u5e76\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u77e9\u9635N\u7684\u8bbf\u95ee\u6a21\u578b\u662f\u9ad8\u6548\u7684\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Warp \u4e2d\u7684\u7ebf\u7a0b\u8bfb\u53d6\u76f8\u90bb\u5217\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u7b2c0\u6b21\u8fed\u4ee3\u671f\u95f4\uff0cwarp \u4e2d\u7684\u7ebf\u7a0b\u8bfb\u53d6\u7b2c0-31\u5217\u7684\u5143\u7d200\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u6240\u6709\u7ebf\u7a0b\u7684\u8bbf\u95ee\u5c06\u88ab\u5408\u5e76\u6210\u4e00\u4e2a\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cuda",children:"__global__ void MatrixMulKernel (float* M, float* N, float* P, int Width){\n    // calculate the row index of the P element and M\n    int Row = blockIdx.y * blockDim.y + threadIdx.y;\n    // calculate the col index of the P element and N\n    int Col = blockIdx.x * blockDim.x + threadIdx.x;\n\n    if((Row < Width) && (Col < Width)){\n        float Pvalue = 0;\n        //each thread computes one element of the block sub-matrix\n        for(int k = 0; k < Width; k++) {\n            Pvalue += M[Row*Width + k] * N[k*Width + Col];\n        }\n        P[Row * Width + Col] = Pvalue;\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"no-bank-conflicts",children:"no bank conflicts"}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u901a\u8fc7\u6539\u53d8\u5171\u4eab\u5185\u5b58\u6570\u7ec4\u7684\u5927\u5c0f\u6765\u6d88\u9664\u6216\u51cf\u8f7bbank\u51b2\u7a81\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cuda",children:" __shared__ float S[TILE_DIM][TILE_DIM + 1];\n"})}),"\n",(0,i.jsx)(n.h2,{id:"unroll",children:"unroll"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cuda",children:"__global__ void\n unroll_kernel( float* C, float* A, float* B,  int interDim)\n {\n\n     // Declaration of the shared memory array As used to\n     // store the sub-matrix of A\n    __shared__ float As_trans[12];\n    // As[threadIdx.x * blockDim.y + threadIdx.y] = A[threadIdx.x * blockDim.y + threadIdx.y];\n    As_trans[threadIdx.y * blockDim.x + threadIdx.x] = A[threadIdx.x * blockDim.y + threadIdx.y]; //\u4f7f\u7528\u8f6c\u7f6e\uff0c\u8ba9\u7d22\u5f15\u4e4b\u95f4\u91cc\u7684\u66f4\u8fd1\uff0c\u52a0\u901f\u8bbf\u95ee[coalescing]\n    \n    __syncthreads();\n    // Declaration of the shared memory array Bs used to\n    // store the sub-matrix of B\n    float cv[12] =  {0,0,0,0, \\\n                     0,0,0,0, \\\n                     0,0,0,0};\n\n    // \u4f7f\u7528\u5916\u5faa\u73af\u7684\u65b9\u5f0f\u6765\u66ff\u4ee3\u5185\u5faa\u73af\n    // 1.\u63d0\u9ad8shared memory\u7684\u5229\u7528\u7387\n    // 2.\u7b80\u5316\u6d41\u5904\u7406\u5668\u7684\u8ba1\u7b97\u6307\u4ee4\n#pragma unroll\n    for (int i = 0 ; i < interDim; ++i) {\n        cv[threadIdx.x * interDim + threadIdx.y] += B[i * interDim +threadIdx.y] \\\n                                                 * As_trans[i * blockDim.x + threadIdx.x];\n    }\n    __syncthreads();\n \n     // Write the block sub-matrix to device memory;\n     // each thread writes one element\n    C[threadIdx.x * blockDim.y + threadIdx.y] = cv[threadIdx.x * blockDim.y + threadIdx.y];\n }\n"})})]})}function m(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>l});var i=t(7294);const o={},a=i.createContext(o);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);