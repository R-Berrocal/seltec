import{j as o,c as p,b as f,n as g,p as x,L as U,Q as h,q as r}from"./index-d3a1a1dc.js";import{T as v,c as E}from"./table-00201c6d.js";import{A as L}from"./alert-d0d3a546.js";import{a as j}from"./block_role-b3da2c39.js";import{u as S,U as b}from"./user-4a4e26f3.js";import"./useQuery-de5810bc.js";const s=E(),C=[s.accessor("full_name",{header:()=>"Nombre",cell:e=>e.getValue(),footer:e=>e.column.id}),s.accessor("email",{header:()=>"Email",cell:e=>e.getValue(),footer:e=>e.column.id}),s.accessor("role",{header:()=>"Rol",cell:e=>e.getValue(),footer:e=>e.column.id}),s.accessor("is_deleted",{header:()=>"Estado",cell:e=>o.jsx(p.Chip,{className:"text-center",size:"sm",color:e.getValue()?"red":"green",value:e.getValue()?"Inactivo":"Activo"}),footer:e=>e.column.id})];function q(){const{users:e,isLoading:l}=S(),{id:c,closeAlert:i,user:a}=f(t=>t),n=g(),u=j.includes((a==null?void 0:a.role)||""),{mutate:d,isLoading:m}=x(()=>b.deleteUser(c),{onSuccess:()=>{i(),n.invalidateQueries([h.USER]),r("User eliminado de forma exitosa",null)},onError:t=>{r(`opps! algo no va bien ${t}`,"error")}});return l||m?o.jsx(U,{}):o.jsxs("div",{className:"",children:[o.jsx(v,{total:(e==null?void 0:e.count)||0,data:(e==null?void 0:e.results)||[],columns:C,showDelete:!1,showUpdate:!u}),o.jsx(L,{acction:d,title:"Seguro que desea realizar esta acccion?",description:"esta accion no es revercible"})]})}export{q as default};