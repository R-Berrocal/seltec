import{B as g,D as G,F as x,k as y,r as l,b as h,m as i,l as E,G as j,j as c,e as v,I as S,a as V,H as k}from"./index-4f0194d7.js";import{Q as L}from"./query-keys-2b4b518a.js";import{b as C,G as f}from"./group-3c67903e.js";const N=g().shape({name:G().required("El nombre es requerido!")}),w={name:""};function M(){const a=x(),m=y(),{group:e,isLoading:d}=C(),o=l.useMemo(()=>({name:(e==null?void 0:e.name)||""}),[e]),r=h(),n=l.useCallback(async t=>{try{await f.editGroup(a.id||"",t),i("Grupo actualizado exitosamente",null)}catch(s){i(`opps!! algo no va bien ${s.response.data.message||""}`,"error"),console.error(s)}},[a]),p=l.useCallback(async t=>{try{const s=await f.createGroup(t);return i("Grupo creado exitosamente",null),r("/groups"),s}catch(s){i(`opps!! algo no va bien ${s.response.data.message||""}`,"error"),console.error(s)}},[r]),{mutateAsync:b,isLoading:u}=E(a.id?n:p,{onSuccess:()=>{m.invalidateQueries([L.GROUP])}});return{isLoading:d||u,submit:b,formValues:{defaultValues:Object.keys(o).length<0?w:o},status:a.id?"Editar grupo":"Crear grupo",isEditing:!!a.id}}const F=()=>{var u;const{submit:a,isLoading:m,formValues:{defaultValues:e},status:d}=M(),{handleSubmit:o,reset:r,formState:{errors:n},control:p}=j({mode:"all",defaultValues:e,resolver:k(N)});l.useEffect(()=>{r(e)},[r,e]);const b=t=>{a(t)};return m?c.jsx(v,{}):c.jsxs("form",{onSubmit:o(b),className:"bg-white dark:bg-black mt-5 flex flex-col space-y-4",children:[c.jsx(S,{control:p,name:"name",label:"Nombre",errorMessage:((u=n.name)==null?void 0:u.message)||"",error:!!n.name}),c.jsx(V.Button,{type:"submit",className:"mt-10",children:d})]})};export{F as default};
