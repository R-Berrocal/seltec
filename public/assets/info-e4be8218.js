import{r as v,m as r,j as o,T as s,L as b,q as d}from"./index-147be8e0.js";import{M as Y,I as V}from"./more-c75c6473.js";import{T as M}from"./tabs-f7778d04.js";import{a as D}from"./employee-75ad9128.js";import"./useQuery-2739f2d7.js";const t=d(),n=d(),i=d(),w=()=>{const{employee:a,isLoading:m}=D(),f=v.useMemo(()=>{var e,c,u;return[{title:"nombre",value:a==null?void 0:a.name},{title:"apellido",value:a==null?void 0:a.lastName},{title:"identificacion",value:a==null?void 0:a.identification},{title:"correo electronico",value:a==null?void 0:a.email},{title:"empresa",value:(e=a==null?void 0:a.company)==null?void 0:e.name},{title:"cargo",value:(c=a==null?void 0:a.roleEmployee)==null?void 0:c.name},{title:"direccion",value:(a==null?void 0:a.address)||""},{title:"bloques",value:(u=a==null?void 0:a.groups)==null?void 0:u.map(l=>l==null?void 0:l.name).join(", ")}]},[a]),g=[t.accessor("vehicle.plate",{header:()=>"Placa",cell:e=>e.getValue(),footer:e=>e.column.id}),t.accessor("operationType",{header:()=>"Tipo de operacion",cell:e=>e.getValue(),footer:e=>e.column.id}),t.accessor("daysService",{header:()=>"Dias de servicio",cell:e=>e.getValue(),footer:e=>e.column.id}),t.accessor("createdAt",{header:()=>"Fecha de creacion",cell:e=>r(e.getValue()).format("YYYY-MMM-DD"),footer:e=>e.column.id})],h=[n.accessor("id",{header:()=>"Id",cell:e=>e.getValue(),footer:e=>e.column.id}),n.accessor("name",{header:()=>"Nombre",cell:e=>e.getValue(),footer:e=>e.column.id}),n.accessor("createdAt",{header:()=>"Fecha de creacion",cell:e=>r(e.getValue()).format("YYYY-MM-DD"),footer:e=>e.column.id})],x=[i.accessor("observation",{header:()=>"Observacion",cell:e=>{const{getIsExpanded:c}=e.row;return console.log(c()),e.getValue()},footer:e=>e.column.id}),i.accessor("initDate",{header:()=>"Fecha de ingreso",cell:e=>r(e.getValue()).format("YYYY-MM-DD"),footer:e=>e.column.id}),i.accessor("endDate",{header:()=>"Fecha de salida",cell:e=>r(e.getValue()).format("YYYY-MM-DD"),footer:e=>e.column.id})],j=[{label:"Observaciones",value:"observations",desc:o.jsxs(s,{columns:x,data:(a==null?void 0:a.observations)||[],children:[o.jsx(s.RowHeader,{}),o.jsx(s.Body,{})]})},{label:"Vehiculos asignados",value:"asigned",desc:o.jsxs(s,{columns:g,data:(a==null?void 0:a.assignedVehicles)||[],children:[o.jsx(s.RowHeader,{}),o.jsx(s.Body,{})]})},{label:"Bloques",value:"groups",desc:o.jsxs(s,{columns:h,data:(a==null?void 0:a.groups)||[],children:[o.jsx(s.RowHeader,{}),o.jsx(s.Body,{})]})}];return m?o.jsx(b,{}):o.jsxs(Y,{children:[o.jsx(V,{data:f}),o.jsx(M,{tabs:j})]})};export{w as default};