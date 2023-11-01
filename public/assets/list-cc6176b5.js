import{r as l,j as s,f as m,u as b,g as w,h as E,i as d}from"./index-2417ad1b.js";import{D as v,I as g,T as t,A}from"./info-14c61dd3.js";import{u as p,a as D,E as N}from"./employee-e5f804c0.js";import{A as c}from"./accodion-icon-83caeba0.js";import{Q as L}from"./query-keys-96a731f2.js";import"./ChevronDownIcon-27c90561.js";const F=()=>{const{employee:e,isLoading:n}=p(),r=l.useMemo(()=>[{title:"nombre",value:e==null?void 0:e.name},{title:"apellido",value:e==null?void 0:e.lastName},{title:"identificacion",value:e==null?void 0:e.identification},{title:"correo electronico",value:e==null?void 0:e.email},{title:"empresa",value:e==null?void 0:e.company.name},{title:"cargo",value:e==null?void 0:e.roleEmployee.name},{title:"direccion",value:(e==null?void 0:e.address)||""}],[e]);return s.jsx(v,{title:"Informacion sobre el empleado",children:n?s.jsx(m,{}):s.jsxs(g,{data:r,children:[s.jsx(c,{position:1,title:"Bloques",body:s.jsx("section",{className:"",children:s.jsx(t,{heads:["Id","Nombre","Fecha de creacion"],rows:(e==null?void 0:e.groups.map(o=>({none:o.id,id:o.id,nombre:o.name,fecha:new Date(o.createdAt).toLocaleString()})))||[],showFooter:!1,showHeader:!1,showActions:!1})})}),s.jsx(c,{position:2,title:"Autos",body:s.jsx("section",{className:"",children:s.jsx(t,{heads:["Operacion","Dias de servicio","Nombre","Dueño"],rows:(e==null?void 0:e.assignedVehicles.map(o=>({id:o.id,operacion:o.observations,days:o.daysService,nombre:o.vehicle.model,owner:o.vehicle.owner})))||[],showFooter:!1,showHeader:!1,showActions:!1})})}),s.jsx(c,{position:2,title:"Observaciones",body:s.jsx("section",{className:"",children:s.jsx(t,{heads:["Observation","Fecha de ingreso","Fecha de salida"],rows:(e==null?void 0:e.observations.map(o=>({id:o.id,observation:o.observation,initDate:o.initDate,endDate:o.endDate})))||[],showFooter:!1,showHeader:!1,showActions:!1})})})]})})};function C(){const{employees:e,isLoading:n}=D(),{idRemove:r,closeAlert:o}=b(a=>a),f=w(),{mutate:h,isLoading:u}=E(()=>N.deleteEmployee(r),{onSuccess:()=>{o(),f.invalidateQueries([L.EMPLOYEE]),d("Empleado eliminado de forma exitosa",null)},onError:a=>{d(`opps! algo no va bien ${a}`,"error")}}),x=l.useMemo(()=>{var a;return((a=e==null?void 0:e.results)==null?void 0:a.map(i=>({id:i.id,fullName:`${i==null?void 0:i.name} ${(i==null?void 0:i.lastName)||""}`,email:i.email,identification:i.identification,role:new Date(i.createdAt).toLocaleString()})))||[]},[e]),j=["Nombre","Correo","Identificacion","Fecha de creacion","Acciones"];return n||u?s.jsx(m,{}):s.jsxs("div",{className:"",children:[s.jsx(t,{heads:j,rows:x||[]}),s.jsx(F,{}),s.jsx(A,{handleRemove:h})]})}export{C as default};
