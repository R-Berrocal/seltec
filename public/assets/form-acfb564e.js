import{t as O,v as h,x as q,n as E,r as p,d as N,aa as L,q as u,p as $,Q as S,a as I,f as V,j as r,L as C,b as j,o as M}from"./index-d0930347.js";import{S as k}from"./select-f7f42a5f.js";import{T as w}from"./text-area-cb8d5bb3.js";import{D as Q}from"./date-picker-f8eca823.js";import{a as T}from"./observation-dfb02177.js";import{Y}from"./validations-11ac4e3d.js";import{u as F}from"./employee-66af281a.js";import"./useQuery-90db40b4.js";const R=O().shape({employeeId:Y.required("El empleado es requerido!"),observation:h().required("La observacion es requerida!"),date:O().shape({startDate:h().required(),endDate:h().required()}).required("Las fechas son requieridas")}),v={observation:"",date:{startDate:"",endDate:""}};function A(){const i=q(),f=E(),{observation:e,isLoading:y}=T(),b=p.useMemo(()=>{var a,t,s,l,m;return{observation:(e==null?void 0:e.observation)||"",date:{startDate:(e==null?void 0:e.initDate)||"",endDate:(e==null?void 0:e.endDate)||"",selection:"selection"},employeeId:{id:((a=e==null?void 0:e.employee)==null?void 0:a.id)||"",value:((t=e==null?void 0:e.employee)==null?void 0:t.id)||"",label:`${(s=e==null?void 0:e.employee)==null?void 0:s.identification} - ${(l=e==null?void 0:e.employee)==null?void 0:l.name} ${(m=e==null?void 0:e.employee)==null?void 0:m.lastName}`}}},[e]),d=N(),o=p.useCallback(async a=>{var t;try{await L.editObservation(i.id||"",{...a,employeeId:(t=a==null?void 0:a.employeeId)==null?void 0:t.id,date:{endDate:a.date.endDate,startDate:a.date.startDate}}),u("Observacion actualizado exitosamente",null)}catch(s){u(`opps!! algo no va bien ${s.response.data.message||""}`,"error"),console.error(s)}},[i]),c=p.useCallback(async a=>{var t;try{const s=await L.createObservation({...a,employeeId:(t=a==null?void 0:a.employeeId)==null?void 0:t.id,date:{endDate:a.date.endDate,startDate:a.date.startDate}});return u("Observacion creada exitosamente",null),d("/employee/observations"),s}catch(s){u(`opps!! algo no va bien ${s.response.data.message||""}`,"error"),console.error(s)}},[d]),{mutateAsync:g,isLoading:x}=$(i.id?o:c,{onSuccess:()=>{f.invalidateQueries([S.OBSERVATION])}});return{isLoading:y||x,submit:g,formValues:{defaultValues:i.id?b:v},status:i.id?"Editar Observacion":"Crear Observacion",isEditing:!!i.id}}const J=()=>{var s,l,m,D;const{submit:i,isLoading:f,formValues:{defaultValues:e},status:y}=A(),{handleSubmit:b,reset:d,formState:{errors:o},control:c}=I({mode:"all",defaultValues:e,resolver:M(R)}),{pathname:g}=V();p.useEffect(()=>{d(e)},[d,e]);const x=n=>{i(n)},{employees:a,isLoading:t}=F();return f||t?r.jsx(C,{}):r.jsxs("form",{onSubmit:b(x),className:"bg-white dark:bg-black mt-5 flex flex-col space-y-4",children:[r.jsx("div",{className:"flex gap-4",children:r.jsx(w,{control:c,name:"observation",label:"Observacion",errorMessage:((s=o.observation)==null?void 0:s.message)||"",error:!!o.observation})}),r.jsx("div",{className:"flex gap-4",children:!g.split("/").includes("info")&&r.jsx(k,{control:c,name:"employeeId",options:((l=a==null?void 0:a.results)==null?void 0:l.map(n=>({id:n.id,label:`${n.identification} - ${n.name} ${n.lastName}`,value:n.id})))||[],errorMessage:((D=(m=o.employeeId)==null?void 0:m.label)==null?void 0:D.message)||"",placeholder:"Empleado"})}),r.jsxs("div",{className:"w-full",children:[r.jsx(j.Typography,{variant:"h4",className:`${o.date?"text-red-300":""}`,children:"Fechas de inicio y salida"}),r.jsx(Q,{control:c,name:"date",errorMessage:o.date?"las fechas de inico y salida son requieridas":""})]}),r.jsx(j.Button,{type:"submit",className:"mt-10",children:y})]})};export{J as default};