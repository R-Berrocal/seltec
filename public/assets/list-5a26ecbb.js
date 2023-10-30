import{r as m,j as s,f as u,u as w,g as b,h as g,i as n}from"./index-2849c0a5.js";import{D as p,I as N,T as l,A}from"./info-58bfefeb.js";import{a as C,u as E,C as L}from"./company-138f15b2.js";import{Q as v}from"./query-keys-5a8e9e35.js";import{A as d}from"./accodion-icon-9b81c0b6.js";import"./ChevronDownIcon-1f50c7aa.js";const M=()=>{const{company:e,isLoading:t}=C(),r=m.useMemo(()=>[{title:"nombre",value:e==null?void 0:e.name},{title:"nombre legal",value:e==null?void 0:e.legalName},{title:"correo electronico",value:e==null?void 0:e.email},{title:"dirección",value:(e==null?void 0:e.address)||""},{title:"teléfono",value:(e==null?void 0:e.phone)||""},{title:"sitio web",value:(e==null?void 0:e.webSite)||""}],[e]);return s.jsx(p,{title:"Información sobre la empresa",children:t?s.jsx(u,{}):s.jsxs(N,{data:r,children:[s.jsx(d,{position:1,title:"Empleados",body:s.jsx("section",{className:"",children:s.jsx(l,{heads:["identificacion","nombre","lastname","email"],rows:(e==null?void 0:e.employees.map(o=>({none:o.id,identificacion:o.identification,nombre:o.name,lastName:o.lastName,email:o.email})))||[],showFooter:!1,showHeader:!1,showActions:!1})})}),s.jsx(d,{position:2,title:"Autos",body:s.jsx("section",{className:"",children:s.jsx(l,{heads:["Placa","Tipo de vehiculo","Modelo","Dueño"],rows:(e==null?void 0:e.vehicles.map(o=>({id:o.id,placa:o.plate,type:o.type,modelo:o.model,owner:o.owner})))||[],showFooter:!1,showHeader:!1,showActions:!1})})})]})})};function T(){const{companies:e,isLoading:t}=E(),{idRemove:r,closeAlert:o}=w(i=>i),c=b(),{mutate:f,isLoading:h}=g(()=>L.deleteCompany(r),{onSuccess:()=>{o(),c.invalidateQueries([v.COMPANY]),n("Empresa eliminada de forma exitosa",null)},onError:i=>{n(`opps! algo no va bien ${i}`,"error")}}),x=m.useMemo(()=>{var i;return((i=e==null?void 0:e.results)==null?void 0:i.map(a=>({id:a.id,name:a.name,leagalName:a.legalName,address:a.address,email:a.email})))||[]},[e]),j=["Nombre","Nombre Legal","Dirección","Email","Acciones"];return t||h?s.jsx(u,{}):s.jsxs("div",{className:"",children:[s.jsx(l,{heads:j,rows:x||[]}),s.jsx(M,{}),s.jsx(A,{handleRemove:f})]})}export{T as default};
