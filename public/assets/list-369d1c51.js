import{u as f,k as h,l as x,j as o,e as g,m as i}from"./index-a20a86ba.js";import{T as v,c as G}from"./table-4d488073.js";import{a as L,A as R}from"./block_role-cb526c06.js";import{Q as j}from"./query-keys-94b21177.js";import{u as C,G as A}from"./group-d56c92fe.js";const a=G(),y=()=>{const{groups:s,isLoading:l}=C(),{idRemove:n,closeAlert:c,user:r}=f(e=>e),u=h(),t=L.includes((r==null?void 0:r.role)||""),{mutate:d,isLoading:m}=x(()=>A.deleteGroup(n),{onSuccess:()=>{c(),u.invalidateQueries([j.GROUP]),i("Grupo eliminado de forma exitosa",null)},onError:e=>{i(`opps! algo no va bien ${e}`,"error")}}),p=[a.accessor("id",{header:()=>"Id",cell:e=>e.getValue(),footer:e=>e.column.id}),a.accessor("name",{header:()=>"Cargo",cell:e=>e.getValue(),footer:e=>e.column.id}),a.accessor("createdAt",{header:()=>"Fecha de creacion",cell:e=>e.getValue(),footer:e=>e.column.id})];return l||m?o.jsx(g,{}):o.jsxs("div",{children:[o.jsx(v,{data:(s==null?void 0:s.results)||[],columns:p,showDelete:!t,showUpdate:!t}),o.jsx(R,{handleRemove:d})]})};export{y as default};