import{t as b,v as x,x as y,n as R,r as c,d as h,q as i,p as v,Q as E,a as C,j as u,L,I as S,c as V,o as j}from"./index-d3a1a1dc.js";import{a as N,R as f}from"./role-caaa9234.js";import"./useQuery-de5810bc.js";const k=b().shape({name:x().required("El nombre es requerido!")}),q={name:""};function w(){const e=y(),l=R(),{role:a,isLoading:m}=N(),d=c.useMemo(()=>({name:(a==null?void 0:a.name)||""}),[a]),t=h(),o=c.useCallback(async r=>{try{await f.editRole(e.id||"",r),i("Cargo actualizado exitosamente",null)}catch(s){i(`opps!! algo no va bien ${s.response.data.message||""}`,"error"),console.error(s)}},[e]),p=c.useCallback(async r=>{try{const s=await f.createRole(r);return i("Cargo creado exitosamente",null),t("/roles"),s}catch(s){i(`opps!! algo no va bien ${s.response.data.message||""}`,"error"),console.error(s)}},[t]),{mutateAsync:g,isLoading:n}=v(e.id?o:p,{onSuccess:()=>{l.invalidateQueries([E.GROUP])}});return{isLoading:m||n,submit:g,formValues:{defaultValues:e.id?d:q},status:e.id?"Editar cargo":"Crear cargo",isEditing:!!e.id}}const $=()=>{var n;const{submit:e,isLoading:l,formValues:{defaultValues:a},status:m}=w(),{handleSubmit:d,reset:t,formState:{errors:o},control:p}=C({mode:"all",defaultValues:a,resolver:j(k)});c.useEffect(()=>{t(a)},[t,a]);const g=r=>{e(r)};return l?u.jsx(L,{}):u.jsxs("form",{onSubmit:d(g),className:"bg-white dark:bg-black mt-5 flex flex-col space-y-4",children:[u.jsx(S,{control:p,name:"name",label:"Nombre",errorMessage:((n=o.name)==null?void 0:n.message)||"",error:!!o.name}),u.jsx(V.Button,{type:"submit",className:"mt-10",children:m})]})};export{$ as default};