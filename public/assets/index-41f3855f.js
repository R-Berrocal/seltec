import{r as e,f as o,j as t}from"./index-a20a86ba.js";import{P as l,a as c}from"./page-layout-a5513bbe.js";function d({title:r,titleId:a,...s},i){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":a},s),r?e.createElement("title",{id:a},r):null,e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"}))}const m=e.forwardRef(d),p=m,u=e.lazy(()=>o(()=>import("./list-f398067f.js"),["assets/list-f398067f.js","assets/index-a20a86ba.js","assets/index-2ac47479.css","assets/table-4d488073.js","assets/block_role-cb526c06.js","assets/query-keys-94b21177.js","assets/observation-d42cda45.js"])),n=e.lazy(()=>o(()=>import("./form-eaefaf84.js"),["assets/form-eaefaf84.js","assets/index-a20a86ba.js","assets/index-2ac47479.css","assets/select-453db961.js","assets/text-area-be264caa.js","assets/query-keys-94b21177.js","assets/observation-d42cda45.js","assets/validations-ba7cc727.js","assets/employee-771dc1c5.js"])),_=e.lazy(()=>o(()=>import("./info-9f35920d.js"),["assets/info-9f35920d.js","assets/index-a20a86ba.js","assets/index-2ac47479.css","assets/more-82c2d5bf.js","assets/tabs-946c0bb3.js","assets/observation-d42cda45.js","assets/query-keys-94b21177.js"])),v={mainpage:{path:"/",element:t.jsx(u,{})},routes:[{path:"/create",element:t.jsx(n,{})},{path:"/edit/:id",element:t.jsx(n,{})},{path:"/info/:id",element:t.jsx(_,{})}]},E=()=>t.jsx(l,{description:"",title:"Observaciones",titleButtonCreate:"Observacion",IconButtonCreate:p,children:t.jsx(c,{data:v})});export{E as default};