import{b as g,n as h,p as f,j as s,L as A,T as c,q as x,Q as V,t as l}from"./index-00a53ffa.js";import{A as v}from"./alert-cd0f6524.js";import{B as S}from"./block_role-55ad1a6d.js";import{u as j,A as L}from"./assigned-vehicle-f89c7d96.js";import"./useQuery-400e87ec.js";const i=x(),y=[i.accessor("operationType",{header:()=>"Operacion",cell:e=>e.getValue(),footer:e=>e.column.id}),i.accessor("daysService",{header:()=>"Dias de servicios",cell:e=>e.getValue(),footer:e=>e.column.id}),i.accessor("employee",{header:()=>"Empleado",cell:e=>{var o,a;return`${(o=e.getValue())==null?void 0:o.name} ${(a=e.getValue())==null?void 0:a.lastName}`},footer:e=>e.column.id}),i.accessor("vehicle.plate",{header:()=>"Vehiculo - placa",cell:e=>e.getValue(),footer:e=>e.column.id})];function R(){const{assigneds:e,isLoading:o}=j(),{id:a,closeAlert:n,user:r}=g(t=>t),d=h(),u=S.includes((r==null?void 0:r.role)||""),{mutate:m,isLoading:p}=f(()=>L.deleteAssignedVehicle(a),{onSuccess:()=>{n(),d.invalidateQueries([V.ASSIGNED]),l("operacion realizada de forma exitosa",null)},onError:t=>{l(`opps! algo no va bien ${t}`,"error")}});return o||p?s.jsx(A,{}):s.jsxs("div",{className:"relative",children:[s.jsxs(c,{data:(e==null?void 0:e.results)||[],columns:y,showActions:!u,children:[s.jsx(c.RowHeader,{}),s.jsx(c.Body,{})]}),s.jsx(v,{acction:m,title:"Seguro que desea realizar esta acccion?",description:"esta accion no es revercible"})]})}export{R as default};
