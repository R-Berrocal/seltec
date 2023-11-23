import{n as L,o as w,w as Y,q as v,k,b as D,r as u,m as y,l as P,s as $,j as o,e as Q,I as f,a as z,t as F}from"./index-5c19e2b0.js";import{S as x}from"./select-261fe60b.js";import{Q as B}from"./query-keys-c2ebbff1.js";import{u as G,U as q}from"./user-2eab2176.js";import{Y as H}from"./validations-ded1d560.js";import{a as K}from"./company-3360875d.js";const Z={full_name:"",email:""},J=L().shape({full_name:w().required("El nombre es requerido!"),email:w().required("El email es requerido!"),role:H.required("El rol es requerido!"),password:w().when("email",(l,i)=>window.location.pathname.split("/").includes("create")?i.required("la contraseña es requerida").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,"la contrasena debe de tener por lo menos un menor, una mayuscula y una minuscula").min(6,"debe de tener por lo menos 6 caracteres"):i),passwordConfirmation:w().oneOf([Y("password"),""],"las contraseñas deben ser iguales ").when("password",(l,i)=>l[0].length>0?i.required("requerido"):i)});function W(){const l=v(),i=k(),p=D(),{user:e,isLoading:C}=G(),h=u.useMemo(()=>{var a,t,r;return{full_name:(e==null?void 0:e.full_name)||"",email:(e==null?void 0:e.email)||"",password:"",phone:(e==null?void 0:e.phone)||"",role:{label:(e==null?void 0:e.role)||"USER",value:(e==null?void 0:e.role)||"USER",id:(e==null?void 0:e.role)||"USER"},company:e!=null&&e.company?{id:((a=e==null?void 0:e.company)==null?void 0:a.id)||"",value:((t=e==null?void 0:e.company)==null?void 0:t.id)||"",label:((r=e==null?void 0:e.company)==null?void 0:r.name)||""}:null,is_deleted:{label:e!=null&&e.is_deleted?"INACTIVO":"ACTIVO",value:e==null?void 0:e.is_deleted,id:(e!=null&&e.is_deleted,"INACTIVO")}}},[e]),b=u.useCallback(async a=>{var t,r,m;try{await q.editUser(l.id||"",{...a,is_deleted:(t=a.is_deleted)==null?void 0:t.value,role:(r=a.role)==null?void 0:r.value,company:((m=a.company)==null?void 0:m.id)||null,password:a!=null&&a.password?a==null?void 0:a.password:void 0}),y("Usuario actualizado exitosamente",null)}catch(d){y(`opps!! algo no va bien ${d.response.data.message||""}`,"error"),console.error(d)}},[l]),s=u.useCallback(async a=>{var t,r,m;try{const d=await q.createUser({...a,is_deleted:(t=a.is_deleted)==null?void 0:t.value,role:(r=a.role)==null?void 0:r.value,company:((m=a.company)==null?void 0:m.id)||null,password:a.password});return y("Usuario creado exitosamente",null),p("/users"),d}catch(d){y(`opps!! algo no va bien ${d.response.data.message||""}`,"error"),console.error(d)}},[p]),{mutateAsync:g,isLoading:n}=P(l.id?b:s,{onSuccess:()=>{i.invalidateQueries([B.USER])}});return{isLoading:n||C,submit:g,formValues:{defaultValues:l.id?h:Z},status:l.id?"Editar usuario":"Crear usuario",isEditing:!!l.id}}const X=[{label:"ADMINISTRADOR",value:"ADMIN",id:"ADMIN"},{label:"USUARIO",value:"USER",id:"USER"},{label:"EMPRESA",value:"COMPANY",id:"COMPANY"}],ee=[{label:"ACTIVO",value:!1,id:"ACTIVO"},{label:"INACTIVO",value:!0,id:"INACTIVO"}],ne=()=>{var E,S,A,I,N,_,M,U,O,j,V;const{submit:l,isLoading:i,formValues:{defaultValues:p},status:e,isEditing:C}=W(),{handleSubmit:h,reset:b,formState:{errors:s},watch:g,control:n}=$({mode:"all",defaultValues:p,resolver:F(J)}),[a,t]=u.useState(!1),{companies:r,isLoading:m}=K();u.useEffect(()=>{const c=g(T=>{var R;((R=T.role)==null?void 0:R.value)==="COMPANY"?t(!0):t(!1)});return()=>c.unsubscribe()},[g]),u.useEffect(()=>{b(p)},[b,p]);const d=c=>{l(c)};return i||m?o.jsx(Q,{}):o.jsxs("form",{onSubmit:h(d),autoComplete:"off",className:"bg-white dark:bg-black mt-5 flex flex-col space-y-4",children:[o.jsxs("div",{className:"flex gap-4",children:[o.jsx(f,{control:n,name:"full_name",label:"Nombre",errorMessage:((E=s.full_name)==null?void 0:E.message)||"",error:!!s.full_name}),o.jsx(f,{control:n,name:"phone",type:"number",label:"Numero de telefono",errorMessage:((S=s.phone)==null?void 0:S.message)||"",error:!!s.phone})]}),o.jsx(f,{control:n,name:"email",label:"correo electronico",type:"email",errorMessage:((A=s.email)==null?void 0:A.message)||"",error:!!s.email}),o.jsxs("div",{className:"flex gap-4",children:[o.jsx(f,{control:n,name:"password",label:"contraseña",type:"password",errorMessage:((I=s.password)==null?void 0:I.message)||"",error:!!s.password}),o.jsx(f,{control:n,name:"passwordConfirmation",label:"Confirmar contraseña",type:"password",errorMessage:((N=s.passwordConfirmation)==null?void 0:N.message)||"",error:!!s.passwordConfirmation})]}),o.jsxs("div",{className:"flex gap-4",children:[o.jsx(x,{control:n,name:"role",options:X,placeholder:"Rol",errorMessage:((M=(_=s.role)==null?void 0:_.label)==null?void 0:M.message)||""}),a&&o.jsx(x,{control:n,name:"company",options:((U=r==null?void 0:r.results)==null?void 0:U.map(c=>({id:c.id,label:c.name,value:c.id})))||[],placeholder:"Empresa",errorMessage:((j=(O=s.company)==null?void 0:O.label)==null?void 0:j.message)||""})]}),C&&o.jsx(x,{control:n,name:"is_deleted",placeholder:"Estado",options:ee,errorMessage:((V=s.is_deleted)==null?void 0:V.message)||""}),o.jsx(z.Button,{type:"submit",className:"mt-10",children:e})]})};export{ne as default};