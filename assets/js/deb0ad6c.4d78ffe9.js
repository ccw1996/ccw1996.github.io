"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[4718],{6325:(l,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>r});var t=e(5893),i=e(1151);const o={title:"\u7a00\u758f\u77e9\u9635\u9ad8\u6027\u80fd\u90e8\u7f72",description:"\u7a00\u758f\u77e9\u9635\u9ad8\u6027\u80fd\u90e8\u7f72",sidebar_position:2,tags:["machine learning","interview","sparse"],editor:"caroot"},a=void 0,s={id:"ml/sparse_tensorrt",title:"\u7a00\u758f\u77e9\u9635\u9ad8\u6027\u80fd\u90e8\u7f72",description:"\u7a00\u758f\u77e9\u9635\u9ad8\u6027\u80fd\u90e8\u7f72",source:"@site/docs/ml/sparse_tensorrt.md",sourceDirName:"ml",slug:"/ml/sparse_tensorrt",permalink:"/docs/ml/sparse_tensorrt",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/sparse_tensorrt.md",tags:[{label:"machine learning",permalink:"/docs/tags/machine-learning"},{label:"interview",permalink:"/docs/tags/interview"},{label:"sparse",permalink:"/docs/tags/sparse"}],version:"current",lastUpdatedAt:1705157542,formattedLastUpdatedAt:"Jan 13, 2024",sidebarPosition:2,frontMatter:{title:"\u7a00\u758f\u77e9\u9635\u9ad8\u6027\u80fd\u90e8\u7f72",description:"\u7a00\u758f\u77e9\u9635\u9ad8\u6027\u80fd\u90e8\u7f72",sidebar_position:2,tags:["machine learning","interview","sparse"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"yolo\u540e\u5904\u7406",permalink:"/docs/ml/yolo_postprocess"},next:{title:"transformer \u89e3\u8bfb",permalink:"/docs/ml/attention_is_all_you_need"}},c={},r=[{value:"gemm",id:"gemm",level:2},{value:"stencil computation",id:"stencil-computation",level:3},{value:"\u7a7a\u95f4\u4f9d\u8d56",id:"\u7a7a\u95f4\u4f9d\u8d56",level:4},{value:"\u65f6\u95f4\u4f9d\u8d56",id:"\u65f6\u95f4\u4f9d\u8d56",level:4},{value:"gemm library",id:"gemm-library",level:2},{value:"cutlass",id:"cutlass",level:3},{value:"tensorrt plugin",id:"tensorrt-plugin",level:3}];function _(l){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...l.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"gemm",children:"gemm"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5206\u5757\u4e58\u6cd5"}),"\n",(0,t.jsx)(n.li,{children:"stencil computation"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"stencil-computation",children:"stencil computation"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5e38\u89c1\u7684\u6570\u503c\u95ee\u9898\u4e2d\uff0c\u4f9d\u8d56\u5206\u4e3a\u4e24\u79cd\uff1a\u7a7a\u95f4\u4f9d\u8d56\u548c\u65f6\u95f4\u4f9d\u8d56"}),"\n",(0,t.jsx)(n.h4,{id:"\u7a7a\u95f4\u4f9d\u8d56",children:"\u7a7a\u95f4\u4f9d\u8d56"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u5b58\u5728\u7a7a\u95f4\u4f9d\u8d56\uff0c\u53ef\u4ee5\u8bbe\u8ba1\u591a\u7ebf\u7a0b\u7684\u65b9\u5f0f\u8fdb\u884c\u5e76\u884c\uff0c\u8981\u5c0f\u5fc3\u7ebf\u7a0b\u4e4b\u95f4\u7684\u7ade\u4e89\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6b64\u65f6\u65e0\u6cd5\u76f4\u63a5\u901a\u8fc7\u591a\u8fdb\u7a0b/\u591a\u6838\u5e76\u884c\u8fdb\u884c\u5904\u7406\uff0c\u9700\u8981\u8fdb\u7a0b\u95f4\u901a\u8baf\uff0c\u6b64\u65f6\u7684\u591a\u8fdb\u7a0b\u4f18\u5316\uff0c\u9700\u8981\u8003\u8651\u8fdb\u7a0b\u95f4\u901a\u4fe1\u7684\u4ee3\u4ef7\u3002\u9700\u8981\u5c0f\u5fc3\u5730\u8bbe\u8ba1\u5e76\u884c\u65b9\u5f0f\u3002"}),"\n",(0,t.jsx)(n.h4,{id:"\u65f6\u95f4\u4f9d\u8d56",children:"\u65f6\u95f4\u4f9d\u8d56"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u5b58\u5728\u65f6\u95f4\u4f9d\u8d56\u3002\u5e76\u884c\u4f18\u5316\u53d8\u5f97\u56f0\u96be\uff0c\u4f46\u662f\u7ecf\u8fc7\u5148\u54f2\u4eec\u7684\u4e0d\u61c8\u52aa\u529b\uff0c\u4e5f\u6709\u4e86\u4e00\u4e9b\u65b9\u6848\uff0c\u4e4b\u540e\u4f1a\u9010\u6e10\u4ecb\u7ecd\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cuda",children:"ptr_t stencil_7(ptr_t grid, ptr_t aux, const dist_grid_info_t *grid_info, int nt) {\n    ptr_t buffer[2] = {grid, aux};\n    int nx = grid_info->global_size_x;\n    int ny = grid_info->global_size_y;\n    int nz = grid_info->global_size_z;\n    dim3 grid_size (ceiling(nx, BLOCK_X), ceiling(ny, BLOCK_Y), ceiling(nz, BLOCK_Z));\n    dim3 block_size (BLOCK_X, BLOCK_Y, BLOCK_Z);\n    for(int t = 0; t < nt; ++t) {\n        stencil_7_naive_kernel_1step<<<grid_size, block_size>>>(\\\n            buffer[t % 2], buffer[(t + 1) % 2], nx, ny, nz, \\\n                grid_info->halo_size_x, grid_info->halo_size_y, grid_info->halo_size_z);\n    }\n    return buffer[nt % 2];\n}\n\n__global__ void stencil_7_naive_kernel_1step(cptr_t in, ptr_t out, \\\n                                int nx, int ny, int nz, \\\n                                int halo_x, int halo_y, int halo_z) {\n    int tx = threadIdx.x  + blockDim.x * blockIdx.x;// \u7ebf\u7a0b\u8d1f\u8d23\u7684\u6570\u636e\u5728\u5168\u5c40\u7684\u5750\u6807\uff08\u4f46\u6ce8\u610f\u4e0d\u542bhalo\u7684offset\uff01\uff09\n    int ty = threadIdx.y  + blockDim.y * blockIdx.y;\n    int tz = threadIdx.z  + blockDim.z * blockIdx.z;\n    int ldxx = BLOCK_X+2;// local_g\u7684\u5bbd\u5ea6\n    int ldyy = BLOCK_Y+2;\n\n    __shared__ double local_g[(BLOCK_X+2)*(BLOCK_Y+2)*(BLOCK_Z+2)];\n    if(tx < nx && ty < ny && tz < nz) {// \u4fdd\u8bc1\u8d85\u51fa\u4e86\u8ba1\u7b97\u8303\u56f4\u7684\u7ebf\u7a0b\u4e0d\u7528\u5de5\u4f5c\n        int ldx = nx + halo_x * 2;\n        int ldy = ny + halo_y * 2;\n        int offset_x, offset_y, offset_z;\n        int x = tx + halo_x;// \u7ebf\u7a0b\u8d1f\u8d23\u7684\u6570\u636e\u5728\u5168\u5c40\u6570\u7ec4\u4e2d\u7684\u5750\u6807\uff0c\u9700\u8981\u52a0\u4e0ahalo\u4f5c\u4e3aoffset\n        int y = ty + halo_y;\n        int z = tz + halo_z;\n        int local_x = threadIdx.x + halo_x;// \u7ebf\u7a0b\u8d1f\u8d23\u7684\u6570\u636e\u5728local_g\u4e2d\u7684\u5750\u6807\uff0c\u9700\u8981\u52a0\u4e0ahalo\u4f5c\u4e3aoffset\n        int local_y = threadIdx.y + halo_y;\n        int local_z = threadIdx.z + halo_z;\n\n        // local_g\u7684\u5185\u90e8\u533a\u57df\u62f7\u8d1d\n        local_g[INDEX(local_x, local_y, local_z, ldxx, ldyy)] = in[INDEX(x, y, z, ldx, ldy)];\n        // \u5982\u679c\u7ebf\u7a0b\u8d1f\u8d23\u8ba1\u7b97\u7684\u6570\u636e\u5728local_g\u4e2d\u5904\u4e8e\u6709\u6548\u533a\u57df\u7684\u8fb9\u7f18\uff08\u4e0ehalo\u533a\u7d27\u6328\u7740\uff09\uff0c\u5219\u8d1f\u8d23\u5c06halo\u6570\u636e\u505a\u586b\u5145\n        offset_x = (local_x == 1) ? -1 : (local_x == BLOCK_X) ? 1 : 0;\n        offset_y = (local_y == 1) ? -1 : (local_y == BLOCK_Y) ? 1 : 0;\n        offset_z = (local_z == 1) ? -1 : (local_z == BLOCK_Z) ? 1 : 0;\n        if (offset_x)   local_g[INDEX(local_x+offset_x, local_y, local_z, ldxx, ldyy)] = in[INDEX(x+offset_x, y, z, ldx, ldy)];\n        if (offset_y)   local_g[INDEX(local_x, local_y+offset_y, local_z, ldxx, ldyy)] = in[INDEX(x, y+offset_y, z, ldx, ldy)];\n        if (offset_z)   local_g[INDEX(local_x, local_y, local_z+offset_z, ldxx, ldyy)] = in[INDEX(x, y, z+offset_z, ldx, ldy)];\n        \n        __syncthreads();\n        \n        out[INDEX(x, y, z, ldx, ldy)] \\\n            = \n            ALPHA_ZZZ * local_g[INDEX(local_x, local_y, local_z, ldxx, ldyy)] \\\n            + ALPHA_NZZ * local_g[INDEX(local_x-1, local_y, local_z, ldxx, ldyy)] \\\n            + ALPHA_PZZ * local_g[INDEX(local_x+1, local_y, local_z, ldxx, ldyy)] \\\n            + ALPHA_ZNZ * local_g[INDEX(local_x, local_y-1, local_z, ldxx, ldyy)] \\\n            + ALPHA_ZPZ * local_g[INDEX(local_x, local_y+1, local_z, ldxx, ldyy)] \\\n            + ALPHA_ZZN * local_g[INDEX(local_x, local_y, local_z-1, ldxx, ldyy)] \\\n            + ALPHA_ZZP * local_g[INDEX(local_x, local_y, local_z+1, ldxx, ldyy)];\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"gemm-library",children:"gemm library"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"cublas"}),"\n",(0,t.jsx)(n.li,{children:"cutlass"}),"\n",(0,t.jsx)(n.li,{children:"cutensor"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"cutlass",children:"cutlass"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"cutlass.png",src:e(4580).Z+"",width:"939",height:"450"}),"\n",(0,t.jsx)(n.img,{alt:"cutlass_tile.png",src:e(719).Z+"",width:"912",height:"514"})]}),"\n",(0,t.jsx)(n.h3,{id:"tensorrt-plugin",children:"tensorrt plugin"}),"\n",(0,t.jsx)(n.p,{children:"\u9700\u8981\u9002\u914d"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"declaration"}),"\n",(0,t.jsx)(n.li,{children:"datatype"}),"\n"]})]})}function d(l={}){const{wrapper:n}={...(0,i.a)(),...l.components};return n?(0,t.jsx)(n,{...l,children:(0,t.jsx)(_,{...l})}):_(l)}},4580:(l,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/cutlass-7c910345366167eda5f7e7ea7e6126f3.png"},719:(l,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/cutlass_tile-591e400d2404d7fb0a59c0b060fdd00d.png"},1151:(l,n,e)=>{e.d(n,{Z:()=>s,a:()=>a});var t=e(7294);const i={},o=t.createContext(i);function a(l){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof l?l(n):{...n,...l}}),[n,l])}function s(l){let n;return n=l.disableParentContext?"function"==typeof l.components?l.components(i):l.components||i:a(l.components),t.createElement(o.Provider,{value:n},l.children)}}}]);