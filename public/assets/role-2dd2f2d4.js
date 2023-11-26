import{z as t,x as c,Q as a}from"./index-d0930347.js";import{u as s}from"./useQuery-90db40b4.js";const l={getRole:async e=>{try{return(await t.get(`/role-employee/${e}`)).data}catch(r){throw console.error("error",r),r}},listRole:async()=>{try{return(await t.get("/role-employee?limit=1000")).data}catch(e){throw console.error("error",e),e}},createRole:async e=>{try{return(await t.post("/role-employee",e)).data}catch(r){throw console.error("error",r),r}},editRole:async(e,r)=>{try{return(await t.put(`/role-employee/${e}`,r)).data}catch(o){throw console.error("error",o),o}},deleteRole:async e=>{try{await t.delete(`/role-employee/${e}`)}catch(r){throw console.error("error",r),r}}};function y(){const e=c(),{data:r,isLoading:o}=s([a.ROLE,e.id],()=>l.getRole(e.id||""),{enabled:!!e.id});return{role:r,isLoading:o}}function d(){const{data:e,isLoading:r}=s(a.ROLE,()=>l.listRole());return{roles:e,isLoading:r}}export{l as R,y as a,d as u};
