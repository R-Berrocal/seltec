import{u as c,j as e,a as s}from"./index-dea8633d.js";function i({handleRemove:t}){const{isAlertOpen:a,closeAlert:r,showAlert:o}=c();return e.jsxs(s.Dialog,{size:"xs",open:a,handler:a?r:o,children:[e.jsx(s.DialogHeader,{className:"text-sm md:text-base",children:"Seguro que desea realizar esta acccion?"}),e.jsx(s.DialogBody,{children:e.jsx(s.Typography,{variant:"paragraph",color:"red",className:"text-xs md:text-base",children:"Esta accion no es reversible"})}),e.jsxs(s.DialogFooter,{children:[e.jsx(s.Button,{variant:"text",size:"sm",onClick:r,className:"mr-1",children:"cancelar"}),e.jsx(s.Button,{variant:"text",color:"red",onClick:t,className:"mr-1",children:"confirmar"})]})]})}const l=["USER"],x=["USER","COMPANY"];export{i as A,l as B,x as a};
