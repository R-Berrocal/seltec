import{J as o,u as d,F as c}from"./index-38497bf7.js";import{u as s,Q as a}from"./query-keys-cd3f1922.js";const n={getObservation:async r=>{try{return(await o.get(`/observations/${r}`)).data}catch(t){throw console.error("error",t),t}},listObservations:async()=>{try{return(await o.get("/observations?limit=1000")).data}catch(r){throw console.error("error",r),r}},createObservation:async r=>{try{return(await o.post("/observations",{...r,initDate:String(r.date.startDate),endDate:String(r.date.endDate)})).data}catch(t){throw console.error("error",t),t}},editObservation:async(r,t)=>{try{return(await o.put(`/observations/${r}`,{...t,initDate:String(t.date.startDate),endDate:String(t.date.endDate)})).data}catch(e){throw console.error("error",e),e}},deleteObservation:async r=>{try{await o.delete(`/observations/${r}`)}catch(t){throw console.error("error",t),t}}};function O(){const r=c(),{data:t,isLoading:e}=s([a.OBSERVATION,r.id],()=>n.getObservation(r.id||""),{enabled:!!r.id});return{observation:t,isLoading:e}}function l(){const{data:r,isLoading:t}=s(a.OBSERVATION,()=>n.listObservations());return{observations:r,isLoading:t}}function g(){const{id:r,isOpenDialog:t}=d(),e=c(),{data:i,isLoading:b}=s([a.OBSERVATION,e.id?e.id:r],()=>n.getObservation(e.id?e.id:r),{enabled:r.length>0&&t||!!e.id});return{observation:i,isLoading:b}}export{n as O,l as a,O as b,g as u};
