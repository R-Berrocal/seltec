import{y as r,ad as t,Q as e}from"./index-147be8e0.js";import{u as i}from"./useQuery-2739f2d7.js";function d(){const s=r(),{data:a,isLoading:o}=i([e.OBSERVATION,s.id],()=>t.getObservation(s.id||""),{enabled:!!s.id});return{observation:a,isLoading:o}}function O(){const{data:s,isLoading:a}=i(e.OBSERVATION,()=>t.listObservations());return{observations:s,isLoading:a}}export{d as a,O as u};
