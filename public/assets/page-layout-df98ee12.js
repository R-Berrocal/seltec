import{j as e,r as y,L as b,k as w,l as o,c as h,f as N,d as k,b as i}from"./index-d0930347.js";const O=({data:s})=>e.jsx(y.Suspense,{fallback:e.jsx(b,{}),children:e.jsxs(w,{children:[e.jsx(o,{path:s.mainpage.path,element:s.mainpage.element}),s.routes.map(({element:l,path:a},r)=>e.jsx(o,{path:a,element:l},`${a}-${r}`))]})}),v=["roles","groups"],P=({title:s,description:l,IconButtonCreate:a,titleButtonCreate:r})=>{const{isDark:n}=h(f=>f),{pathname:d}=N(),x=k(),t=d.split("/"),{user:c,showDrawer:m}=h(),p=v.includes(t[1])&&(c==null?void 0:c.role)==="COMPANY"||(c==null?void 0:c.role)==="USER",u=t.includes("edit")||t.includes("create"),g=()=>{x("create")},j=t.includes("employees");return t.includes("info")?e.jsxs("header",{className:"flex justify-between items-center",children:[e.jsx(i.Typography,{variant:"h2",color:n?"white":"blue-gray",className:"capitalize",children:"Informacion"}),j&&e.jsx(i.Button,{onClick:m,children:"Agregar Observacion"})]}):u?e.jsx("header",{children:e.jsxs(i.Typography,{variant:"h2",color:n?"white":"blue-gray",className:"capitalize",children:[t.includes("edit")?"editar":"crear"," ",r??s.substring(0,s.length-1)]})}):e.jsxs("header",{className:"flex justify-between ",children:[e.jsxs("div",{children:[e.jsx(i.Typography,{variant:"h2",color:n?"white":"blue-gray",className:"capitalize",children:s}),e.jsx(i.Typography,{color:n?"blue":"gray",className:"mt-1 font-normal max-w-xs",children:l})]}),!p&&e.jsx("div",{className:"mb-3 flex items-center justify-between gap-8 px-2",children:e.jsx("div",{className:"flex shrink-0 flex-col gap-2 sm:flex-row",children:e.jsxs(i.Button,{onClick:g,className:"flex items-center gap-3 dark:text-white",size:"sm",children:[e.jsx(a,{strokeWidth:2,className:"h-4 w-4"}),"agregar"," ",r??s.substring(0,s.length-1)]})})})]})},T=({title:s,description:l,children:a,IconButtonCreate:r,titleButtonCreate:n})=>e.jsxs("section",{children:[e.jsx(P,{description:l,title:s,IconButtonCreate:r,titleButtonCreate:n}),a]});export{T as P,O as a};