import{m as f,b as x,n as j,p as h,j as o,L,T as t,q as b,Q as g,t as i}from"./index-147be8e0.js";import{A as v}from"./alert-7f577afc.js";import{D as A}from"./download-06bde357.js";import{B as G}from"./block_role-55ad1a6d.js";import{u as Y,G as C}from"./group-90d34ab9.js";import"./useQuery-2739f2d7.js";const r=b(),M=[r.accessor("id",{header:()=>"Id",cell:e=>e.getValue(),footer:e=>e.column.id}),r.accessor("name",{header:()=>"Cargo",cell:e=>e.getValue(),footer:e=>e.column.id}),r.accessor("createdAt",{header:()=>"Fecha de creacion",cell:e=>f(e.getValue()).format("YYYY-MM-DD"),footer:e=>e.column.id})],q=()=>{const{groups:e,isLoading:l}=Y(),{id:c,closeAlert:n,user:s}=x(a=>a),d=j(),u=G.includes((s==null?void 0:s.role)||""),{mutate:m,isLoading:p}=h(()=>C.deleteGroup(c),{onSuccess:()=>{n(),d.invalidateQueries([g.GROUP]),i("Grupo eliminado de forma exitosa",null)},onError:a=>{i(`opps! algo no va bien ${a}`,"error")}});return l||p?o.jsx(L,{}):o.jsxs("div",{className:"relative",children:[(s==null?void 0:s.role)==="ADMIN"&&o.jsx("div",{className:"absolute z-20 right-[210px] -top-12",children:o.jsx(A,{data:(e==null?void 0:e.results)||[],fileName:"bloques"})}),o.jsxs(t,{data:(e==null?void 0:e.results)||[],columns:M,showActions:!u,children:[o.jsx(t.RowHeader,{}),o.jsx(t.Body,{})]}),o.jsx(v,{acction:m,title:"Seguro que desea realizar esta acccion?",description:"esta accion no es revercible"})]})};export{q as default};
