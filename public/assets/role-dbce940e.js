import{x as t,q as c}from"./index-dea8633d.js";import{u as a,Q as s}from"./query-keys-9f424c63.js";const l={getRole:async e=>{try{return(await t.get(`/role-employee/${e}`)).data}catch(r){throw console.error("error",r),r}},listRole:async()=>{try{return(await t.get("/role-employee?limit=1000")).data}catch(e){throw console.error("error",e),e}},createRole:async e=>{try{return(await t.post("/role-employee",e)).data}catch(r){throw console.error("error",r),r}},editRole:async(e,r)=>{try{return(await t.put(`/role-employee/${e}`,r)).data}catch(o){throw console.error("error",o),o}},deleteRole:async e=>{try{await t.delete(`/role-employee/${e}`)}catch(r){throw console.error("error",r),r}}};function y(){const e=c(),{data:r,isLoading:o}=a([s.ROLE,e.id],()=>l.getRole(e.id||""),{enabled:!!e.id});return{role:r,isLoading:o}}function d(){const{data:e,isLoading:r}=a(s.ROLE,()=>l.listRole());return{roles:e,isLoading:r}}export{l as R,y as a,d as u};
