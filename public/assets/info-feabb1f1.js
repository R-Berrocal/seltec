import{r as l,j as a,L as i}from"./index-d3a1a1dc.js";import{M as n,I as r}from"./more-03b508dc.js";import{T as m,c as d}from"./table-00201c6d.js";import{T as u}from"./tabs-aef8579c.js";import{a as f}from"./role-caaa9234.js";import"./useQuery-de5810bc.js";const t=d(),p=[t.accessor("id",{header:()=>"Id",cell:e=>e.getValue(),footer:e=>e.column.id}),t.accessor("identification",{header:()=>"Identificacion",cell:e=>e.getValue(),footer:e=>e.column.id}),t.accessor("name",{header:()=>"Nombre",cell:e=>e.getValue(),footer:e=>e.column.id}),t.accessor("email",{header:()=>"Email",cell:e=>e.getValue(),footer:e=>e.column.id})],I=()=>{const{role:e,isLoading:o}=f(),s=l.useMemo(()=>[{title:"id",value:e==null?void 0:e.id},{title:"cargo",value:e==null?void 0:e.name},{title:"fecha de creacion",value:new Date(e==null?void 0:e.createdAt).toLocaleString()},{title:"fecha de actulizacion",value:new Date(e==null?void 0:e.updatedAt).toLocaleString()}],[e]),c=[{label:"Empleados",value:"employees",desc:a.jsx(m,{total:(e==null?void 0:e.employees.length)||0,columns:p,data:(e==null?void 0:e.employees)||[],showActions:!1,showUpdate:!1})}];return o?a.jsx(i,{}):a.jsxs(n,{children:[a.jsx(r,{data:s}),a.jsx(u,{tabs:c})]})};export{I as default};