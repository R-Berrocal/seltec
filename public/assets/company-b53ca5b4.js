import{J as r,u as i,F as p}from"./index-38497bf7.js";import{u as t,Q as n}from"./query-keys-cd3f1922.js";const c={getcompany:async o=>{try{return(await r.get(`/company/${o}`)).data}catch(a){throw console.error("error",a),a}},getCompanyCount:async()=>{try{const o=await r.get("/company/count-employees"),a=await r.get("/company/count-vehicles"),e=await r.get("/group/count-employees");return await Promise.all([o.data,a.data,e.data])}catch(o){throw console.error("error",o),o}},listcompanies:async()=>{try{return(await r.get("/company?limit=1000")).data}catch(o){throw console.error("error",o),o}},createCompany:async o=>{try{return(await r.post("/company",o)).data}catch(a){throw console.error("error",a),a}},editcompany:async(o,a)=>{try{return(await r.put(`/company/${o}`,a)).data}catch(e){throw console.error("error",e),e}},deleteCompany:async o=>{try{await r.delete(`/company/${o}`)}catch(a){throw console.error("error",a),a}}};function u(){const o=p(),{data:a,isLoading:e}=t([n.COMPANY,o.id],()=>c.getcompany(o.id||""),{enabled:!!o.id});return{company:a,isLoading:e}}function l(){const{user:o}=i(),{data:a,isLoading:e}=t(n.COMPANY,()=>c.listcompanies(),{enabled:(o==null?void 0:o.role)==="ADMIN"||(o==null?void 0:o.role)==="USER"});return{companies:a,isLoading:e}}function g(){const{id:o,isOpenDialog:a}=i(),e=p(),{data:s,isLoading:m}=t([n.COMPANY,e.id?e.id:o],()=>c.getcompany(e.id?e.id:o),{enabled:o.length>0&&a||!!e.id});return{company:s,isLoading:m}}function C(){const{data:o,isLoading:a}=t([n.COMPANY],()=>c.getCompanyCount());return{employeesCount:o,isLoading:a}}export{c as C,l as a,g as b,u as c,C as u};
