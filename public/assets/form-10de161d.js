import{n as P,o as g,p as Q,q as D,k as F,u as I,r as E,b as B,m as f,l as H,s as K,j as r,e as U,I as b,a as _,t as z}from"./index-bbfb2b48.js";import{S as N}from"./select-3349b55e.js";import{Q as J}from"./query-keys-f38cae6f.js";import{b as T,E as G}from"./employee-f8758d6c.js";import{Y as j}from"./validations-8443da6f.js";import{a as W}from"./company-19698cd9.js";import{u as X}from"./group-aa11acf8.js";import{u as Z}from"./role-bf4599b8.js";const v=P().shape({name:g().required("El nombre es requerido!"),lastName:g().required("El apellido es requerido!"),email:g().required("El correo electronico es requerido!"),identification:g().required("La identificacion es requerida!"),role:j.required("El rol es requerido!"),company:j.required("La empresa es requerida!"),groups:Q().of(j.required("Los grupos son requeridos!")).required("Los grupos son requeridos!")}),ee={name:"",lastName:"",email:"",identification:"",groups:[]};function ae(){const n=D(),x=F(),{employee:e,isLoading:u}=T(),{user:l}=I(),L=E.useMemo(()=>{var a,s,d;return{name:(e==null?void 0:e.name)||"",lastName:(e==null?void 0:e.lastName)||"",email:(e==null?void 0:e.email)||"",identification:(e==null?void 0:e.identification)||"",role:{value:(e==null?void 0:e.roleEmployee.id)||"",label:(e==null?void 0:e.roleEmployee.name)||"",id:(e==null?void 0:e.roleEmployee.id)||""},company:(l==null?void 0:l.role)==="COMPANY"?{label:((a=l.company)==null?void 0:a.id)||"",value:((s=l.company)==null?void 0:s.id)||"",id:((d=l.company)==null?void 0:d.id)||""}:{id:(e==null?void 0:e.company.id)||"",label:(e==null?void 0:e.company.name)||"",value:(e==null?void 0:e.company.id)||""},groups:(e==null?void 0:e.groups.map(t=>({label:(t==null?void 0:t.name)||"",id:(t==null?void 0:t.id)||"",value:(t==null?void 0:t.id)||""})))||[]}},[e,l]),c=B(),o=E.useCallback(async a=>{try{await G.editEmployee(n.id||"",{...a,groups:a.groups.map(s=>s.id),role:a.role.value,company:a.company.value}),f("Empleado editado de forma correcta",null)}catch(s){f(`opps!! algo no va bien ${s.response.data.message||""}`,"error"),console.error(s)}},[n]),m=E.useCallback(async a=>{try{const s=await G.createEmployee({...a,groups:a.groups.map(d=>d.id),role:a.role.value,company:a.company.value});return f("Empleado creado",null),c("/employee/employees"),s}catch(s){f(`opps!! algo no va bien ${s.response.data.message||""}`,"error"),console.error(s)}},[c]),{mutateAsync:p,isLoading:q}=H(n.id?o:m,{onSuccess:()=>{x.invalidateQueries([J.EMPLOYEE])}});return{isLoading:u||q,submit:p,formValues:{defaultValues:n.id?L:ee},status:n.id?"Editar empleado":"Crear empleado",isEditing:!!n.id}}const de=()=>{var y,h,M,S,C,V,Y,k,R,$,w,A;const{user:n}=I(),{submit:x,isLoading:e,formValues:{defaultValues:u},status:l}=ae(),{handleSubmit:L,reset:c,formState:{errors:o},control:m}=K({mode:"all",defaultValues:u,resolver:z(v)}),{companies:p,isLoading:q}=W(),{groups:a,isLoading:s}=X(),{roles:d,isLoading:t}=Z();E.useEffect(()=>{c(u)},[c,u]);const O=i=>{x(i)};return e||q||s||t?r.jsx(U,{}):r.jsxs("form",{onSubmit:L(O),className:"bg-white dark:bg-black mt-5 flex flex-col space-y-4",children:[r.jsxs("div",{className:"flex gap-4",children:[r.jsx(b,{control:m,name:"name",label:"Nombre",errorMessage:((y=o.name)==null?void 0:y.message)||"",error:!!o.name}),r.jsx(b,{control:m,name:"lastName",label:"Apellido",errorMessage:((h=o.lastName)==null?void 0:h.message)||"",error:!!o.lastName})]}),r.jsxs("div",{className:"flex gap-4",children:[r.jsx(b,{control:m,name:"email",label:"Correo electronico",type:"email",errorMessage:((M=o.email)==null?void 0:M.message)||"",error:!!o.email}),r.jsx(b,{control:m,name:"identification",label:"Identificacion",errorMessage:((S=o.identification)==null?void 0:S.message)||"",error:!!o.identification})]}),r.jsx("div",{className:"flex gap-4",children:(n==null?void 0:n.role)==="ADMIN"&&r.jsx(N,{control:m,name:"company",options:((C=p==null?void 0:p.results)==null?void 0:C.map(i=>({id:i.id,label:i.name,value:i.id})))||[],placeholder:"Empresa",errorMessage:((Y=(V=o.company)==null?void 0:V.label)==null?void 0:Y.message)||""})}),r.jsxs("div",{className:"flex gap-4",children:[r.jsx(N,{control:m,name:"groups",isMulti:!0,options:((k=a==null?void 0:a.results)==null?void 0:k.map(i=>({id:i.id,label:i.name,value:i.id})))||[],placeholder:"Grupo",errorMessage:((R=o.groups)==null?void 0:R.message)||""}),r.jsx(N,{control:m,name:"role",options:(($=d==null?void 0:d.results)==null?void 0:$.map(i=>({id:i.id,label:i.name,value:i.id})))||[],placeholder:"Rol",errorMessage:((A=(w=o.role)==null?void 0:w.label)==null?void 0:A.message)||""})]}),r.jsx(_.Button,{type:"submit",className:"mt-10",children:l})]})};export{de as default};