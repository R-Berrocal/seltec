import{t as E,v as S,x as w,n as A,c as h,r as b,d as q,q as x,p as Y,Q as $,a as k,j as t,L as I,I as f,b as O,o as Q}from"./index-d0930347.js";import{S as D}from"./select-f7f42a5f.js";import{a as z,V as N}from"./vehicle-a9c13b62.js";import{a as F}from"./company-efc6b59d.js";import"./useQuery-90db40b4.js";const H=E().shape({plate:S().required("La placa es requerida!").max(6,"solo pueden ser 6 digitos").matches(/^[aA-zZ0-9]{6}$/,{message:"placa no valida"})}),R={plate:"",type:"",model:"",trailerPlate:"",owner:""};function B(){const m=w(),V=A(),{vehicle:e,isLoading:d}=z(),{user:a}=h(),j=b.useMemo(()=>{var s,n,i,o,g,y;return{plate:(e==null?void 0:e.plate)||"",type:(e==null?void 0:e.type)||"",model:(e==null?void 0:e.model)||"",trailerPlate:(e==null?void 0:e.trailerPlate)||"",owner:(e==null?void 0:e.owner)||"",company:(a==null?void 0:a.role)==="COMPANY"?{label:((s=a.company)==null?void 0:s.id)||"",value:((n=a.company)==null?void 0:n.id)||"",id:((i=a.company)==null?void 0:i.id)||""}:{id:((o=e==null?void 0:e.company)==null?void 0:o.id)||"",label:((g=e==null?void 0:e.company)==null?void 0:g.name)||"",value:((y=e==null?void 0:e.company)==null?void 0:y.id)||""}}},[e,a]),p=q(),r=b.useCallback(async s=>{var n,i;try{await N.editVehicle(m.id||"",{...s,company:(a==null?void 0:a.role)==="COMPANY"?((n=a.company)==null?void 0:n.id)||"":(i=s==null?void 0:s.company)==null?void 0:i.value}),x("Vehiculo actualizado exitosamente",null)}catch(o){x(`opps!! algo no va bien ${o.response.data.message||""}`,"error"),console.error(o)}},[m,a]),c=b.useCallback(async s=>{var n,i;try{const o=await N.createVehicle({...s,company:(a==null?void 0:a.role)==="COMPANY"?((n=a.company)==null?void 0:n.id)||"":(i=s==null?void 0:s.company)==null?void 0:i.value});return x("Vehiculo creado exitosamente",null),p("/vehicles"),o}catch(o){x(`opps!! algo no va bien ${o.response.data.message||""}`,"error"),console.error(o)}},[p,a]),{mutateAsync:M,isLoading:u}=Y(m.id?r:c,{onSuccess:()=>{V.invalidateQueries([$.VEHICLE])}});return{isLoading:d||u,submit:M,formValues:{defaultValues:m.id?j:R},status:m.id?"Editar vehiculo":"Crear vehiculo",isEditing:!!m.id}}const _=()=>{var n,i,o,g,y,P,L,C;const{user:m}=h(),{submit:V,isLoading:e,formValues:{defaultValues:d},status:a}=B(),{handleSubmit:j,reset:p,formState:{errors:r},control:c}=k({mode:"all",defaultValues:d,resolver:Q(H)});b.useEffect(()=>{p(d)},[p,d]);const M=l=>{V(l)},{companies:u,isLoading:s}=F();return e||s?t.jsx(I,{}):t.jsxs("form",{onSubmit:j(M),className:"bg-white dark:bg-black mt-5 flex flex-col space-y-4",children:[t.jsxs("div",{className:"flex gap-4",children:[t.jsx(f,{control:c,name:"plate",label:"Placa",errorMessage:((n=r.plate)==null?void 0:n.message)||"",error:!!r.plate}),t.jsx(f,{control:c,name:"type",label:"Tipo",errorMessage:((i=r.type)==null?void 0:i.message)||"",error:!!r.type})]}),t.jsxs("div",{className:"flex gap-4",children:[t.jsx(f,{control:c,name:"model",label:"Modelo",errorMessage:((o=r.model)==null?void 0:o.message)||"",error:!!r.model}),t.jsx(f,{control:c,name:"trailerPlate",label:"Placa de remolque",errorMessage:((g=r.trailerPlate)==null?void 0:g.message)||"",error:!!r.trailerPlate})]}),t.jsx("div",{className:"flex gap-4",children:t.jsx(f,{control:c,name:"owner",label:"Dueño",errorMessage:((y=r.owner)==null?void 0:y.message)||"",error:!!r.owner})}),(m==null?void 0:m.role)==="ADMIN"&&t.jsx(D,{control:c,name:"company",options:((P=u==null?void 0:u.results)==null?void 0:P.map(l=>({id:l==null?void 0:l.id,label:l==null?void 0:l.name,value:l==null?void 0:l.id})))||[],errorMessage:((C=(L=r.company)==null?void 0:L.label)==null?void 0:C.message)||"",placeholder:"Empresa"}),t.jsx(O.Button,{type:"submit",className:"mt-10",children:a})]})};export{_ as default};
