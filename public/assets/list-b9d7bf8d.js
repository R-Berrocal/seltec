import{m as i,b as x,n as v,p as b,j as a,L as g,T as r,q as h,Q as j,t as l,ad as Y}from"./index-147be8e0.js";import{A as O}from"./alert-7f577afc.js";import{D}from"./download-06bde357.js";import{B as L}from"./block_role-55ad1a6d.js";import{u as M}from"./observation-9649c52f.js";import"./useQuery-2739f2d7.js";const s=h(),A=[s.accessor("employee.name",{header:()=>"Empleado",cell:e=>e.getValue(),footer:e=>e.column.id}),s.accessor("observation",{header:()=>"Observacion",cell:e=>e.getValue(),footer:e=>e.column.id}),s.accessor("initDate",{header:()=>"Fecha de ingreso",cell:e=>i(e.getValue()).format("YYYY-MM-DD"),footer:e=>e.column.id}),s.accessor("endDate",{header:()=>"Fecha de salida",cell:e=>i(e.getValue()).format("YYYY-MM-DD"),footer:e=>e.column.id})];function R(){const{observations:e,isLoading:n}=M(),{id:c,closeAlert:d,user:o}=x(t=>t),u=v(),m=L.includes((o==null?void 0:o.role)||""),{mutate:p,isLoading:f}=b(()=>Y.deleteObservation(c),{onSuccess:()=>{d(),u.invalidateQueries([j.OBSERVATION]),l("Observacion eliminada de forma exitosa",null)},onError:t=>{l(`opps! algo no va bien ${t}`,"error")}});return n||f?a.jsx(g,{}):a.jsxs("div",{className:"relative",children:[(o==null?void 0:o.role)==="ADMIN"&&a.jsx("div",{className:"absolute z-20 right-[230px] -top-12",children:a.jsx(D,{data:(e==null?void 0:e.results)||[],fileName:"observaciones"})}),a.jsxs(r,{data:(e==null?void 0:e.results)||[],columns:A,showActions:!m,children:[a.jsx(r.RowHeader,{}),a.jsx(r.Body,{})]}),a.jsx(O,{acction:p,title:"Seguro que desea realizar esta acccion?",description:"esta accion no es revercible"})]})}export{R as default};