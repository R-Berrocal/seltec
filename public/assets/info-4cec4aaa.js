import{r as c,j as a,L as i}from"./index-d0930347.js";import{M as n,I as r}from"./more-37fd38bd.js";import{a as m}from"./group-c99f38ae.js";import{T as d,c as f}from"./table-822d250b.js";import{T as u}from"./tabs-9d410933.js";import"./useQuery-90db40b4.js";const t=f(),h=[t.accessor("id",{header:()=>"Id",cell:e=>e.getValue(),footer:e=>e.column.id}),t.accessor("identification",{header:()=>"Identificacion",cell:e=>e.getValue(),footer:e=>e.column.id}),t.accessor("name",{header:()=>"Nombre",cell:e=>e.getValue(),footer:e=>e.column.id}),t.accessor("email",{header:()=>"Email",cell:e=>e.getValue(),footer:e=>e.column.id})],I=()=>{const{group:e,isLoading:o}=m(),s=c.useMemo(()=>[{title:"id",value:e==null?void 0:e.id},{title:"nombre",value:e==null?void 0:e.name},{title:"fecha de creacion",value:new Date((e==null?void 0:e.createdAt)||"").toLocaleString()},{title:"fecha de actulizacion",value:new Date((e==null?void 0:e.updatedAt)||"").toLocaleString()}],[e]),l=[{label:"Empleados",value:"employees",desc:a.jsx(d,{total:(e==null?void 0:e.employees.length)||0,columns:h,data:(e==null?void 0:e.employees)||[],showActions:!1,showUpdate:!1,showDelete:!1})}];return o?a.jsx(i,{}):a.jsxs(n,{children:[a.jsx(r,{data:s}),a.jsx(u,{tabs:l})]})};export{I as default};