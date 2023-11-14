import{W as D,t as P,X as $,Y as x,Z as A,$ as K,a0 as Y,a1 as L,a2 as _,a3 as j,a4 as V,a5 as Q,a6 as W,R as b,k as G,a7 as q,a8 as H}from"./index-602d4f83.js";var X=function(a){D(o,a);function o(n,t){var e;return e=a.call(this)||this,e.client=n,e.options=t,e.trackedProps=[],e.selectError=null,e.bindMethods(),e.setOptions(t),e}var s=o.prototype;return s.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},s.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),w(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},s.onUnsubscribe=function(){this.listeners.length||this.destroy()},s.shouldFetchOnReconnect=function(){return g(this.currentQuery,this.options,this.options.refetchOnReconnect)},s.shouldFetchOnWindowFocus=function(){return g(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},s.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},s.setOptions=function(t,e){var i=this.options,r=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();var c=this.hasListeners();c&&k(this.currentQuery,r,this.options,i)&&this.executeFetch(),this.updateResult(e),c&&(this.currentQuery!==r||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();var u=this.computeRefetchInterval();c&&(this.currentQuery!==r||this.options.enabled!==i.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)},s.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),i=this.client.getQueryCache().build(this.client,e);return this.createResult(i,e)},s.getCurrentResult=function(){return this.currentResult},s.trackResult=function(t,e){var i=this,r={},c=function(h){i.trackedProps.includes(h)||i.trackedProps.push(h)};return Object.keys(t).forEach(function(u){Object.defineProperty(r,u,{configurable:!1,enumerable:!0,get:function(){return c(u),t[u]}})}),(e.useErrorBoundary||e.suspense)&&c("error"),r},s.getNextResult=function(t){var e=this;return new Promise(function(i,r){var c=e.subscribe(function(u){u.isFetching||(c(),u.isError&&(t!=null&&t.throwOnError)?r(u.error):i(u))})})},s.getCurrentQuery=function(){return this.currentQuery},s.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},s.refetch=function(t){return this.fetch(P({},t,{meta:{refetchPage:t==null?void 0:t.refetchPage}}))},s.fetchOptimistic=function(t){var e=this,i=this.client.defaultQueryObserverOptions(t),r=this.client.getQueryCache().build(this.client,i);return r.fetch().then(function(){return e.createResult(r,i)})},s.fetch=function(t){var e=this;return this.executeFetch(t).then(function(){return e.updateResult(),e.currentResult})},s.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch($)),e},s.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!(x||this.currentResult.isStale||!A(this.options.staleTime))){var e=K(this.currentResult.dataUpdatedAt,this.options.staleTime),i=e+1;this.staleTimeoutId=setTimeout(function(){t.currentResult.isStale||t.updateResult()},i)}},s.computeRefetchInterval=function(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1},s.updateRefetchInterval=function(t){var e=this;this.clearRefetchInterval(),this.currentRefetchInterval=t,!(x||this.options.enabled===!1||!A(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(e.options.refetchIntervalInBackground||Y.isFocused())&&e.executeFetch()},this.currentRefetchInterval))},s.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},s.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},s.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},s.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},s.createResult=function(t,e){var i=this.currentQuery,r=this.options,c=this.currentResult,u=this.currentResultState,h=this.currentResultOptions,f=t!==i,p=f?t.state:this.currentQueryInitialState,y=f?this.currentResult:this.previousQueryResult,l=t.state,m=l.dataUpdatedAt,I=l.error,C=l.errorUpdatedAt,S=l.isFetching,d=l.status,T=!1,U=!1,v;if(e.optimisticResults){var F=this.hasListeners(),M=!F&&w(t,e),B=F&&k(t,i,e,r);(M||B)&&(S=!0,m||(d="loading"))}if(e.keepPreviousData&&!l.dataUpdateCount&&(y!=null&&y.isSuccess)&&d!=="error")v=y.data,m=y.dataUpdatedAt,d=y.status,T=!0;else if(e.select&&typeof l.data<"u")if(c&&l.data===(u==null?void 0:u.data)&&e.select===this.selectFn)v=this.selectResult;else try{this.selectFn=e.select,v=e.select(l.data),e.structuralSharing!==!1&&(v=L(c==null?void 0:c.data,v)),this.selectResult=v,this.selectError=null}catch(O){_().error(O),this.selectError=O}else v=l.data;if(typeof e.placeholderData<"u"&&typeof v>"u"&&(d==="loading"||d==="idle")){var R;if(c!=null&&c.isPlaceholderData&&e.placeholderData===(h==null?void 0:h.placeholderData))R=c.data;else if(R=typeof e.placeholderData=="function"?e.placeholderData():e.placeholderData,e.select&&typeof R<"u")try{R=e.select(R),e.structuralSharing!==!1&&(R=L(c==null?void 0:c.data,R)),this.selectError=null}catch(O){_().error(O),this.selectError=O}typeof R<"u"&&(d="success",v=R,U=!0)}this.selectError&&(I=this.selectError,v=this.selectResult,C=Date.now(),d="error");var N={status:d,isLoading:d==="loading",isSuccess:d==="success",isError:d==="error",isIdle:d==="idle",data:v,dataUpdatedAt:m,error:I,errorUpdatedAt:C,failureCount:l.fetchFailureCount,errorUpdateCount:l.errorUpdateCount,isFetched:l.dataUpdateCount>0||l.errorUpdateCount>0,isFetchedAfterMount:l.dataUpdateCount>p.dataUpdateCount||l.errorUpdateCount>p.errorUpdateCount,isFetching:S,isRefetching:S&&d!=="loading",isLoadingError:d==="error"&&l.dataUpdatedAt===0,isPlaceholderData:U,isPreviousData:T,isRefetchError:d==="error"&&l.dataUpdatedAt!==0,isStale:E(t,e),refetch:this.refetch,remove:this.remove};return N},s.shouldNotifyListeners=function(t,e){if(!e)return!0;var i=this.options,r=i.notifyOnChangeProps,c=i.notifyOnChangePropsExclusions;if(!r&&!c||r==="tracked"&&!this.trackedProps.length)return!0;var u=r==="tracked"?this.trackedProps:r;return Object.keys(t).some(function(h){var f=h,p=t[f]!==e[f],y=u==null?void 0:u.some(function(m){return m===h}),l=c==null?void 0:c.some(function(m){return m===h});return p&&!l&&(!u||y)})},s.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!j(this.currentResult,e)){var i={cache:!0};(t==null?void 0:t.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,e)&&(i.listeners=!0),this.notify(P({},i,t))}},s.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))}},s.onQueryUpdate=function(t){var e={};t.type==="success"?e.onSuccess=!0:t.type==="error"&&!V(t.error)&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},s.notify=function(t){var e=this;Q.batch(function(){t.onSuccess?(e.options.onSuccess==null||e.options.onSuccess(e.currentResult.data),e.options.onSettled==null||e.options.onSettled(e.currentResult.data,null)):t.onError&&(e.options.onError==null||e.options.onError(e.currentResult.error),e.options.onSettled==null||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach(function(i){i(e.currentResult)}),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})})},o}(W);function Z(a,o){return o.enabled!==!1&&!a.state.dataUpdatedAt&&!(a.state.status==="error"&&o.retryOnMount===!1)}function w(a,o){return Z(a,o)||a.state.dataUpdatedAt>0&&g(a,o,o.refetchOnMount)}function g(a,o,s){if(o.enabled!==!1){var n=typeof s=="function"?s(a):s;return n==="always"||n!==!1&&E(a,o)}return!1}function k(a,o,s,n){return s.enabled!==!1&&(a!==o||n.enabled===!1)&&(!s.suspense||a.state.status!=="error")&&E(a,s)}function E(a,o){return a.isStaleByTime(o.staleTime)}function z(){var a=!1;return{clearReset:function(){a=!1},reset:function(){a=!0},isReset:function(){return a}}}var J=b.createContext(z()),ee=function(){return b.useContext(J)};function te(a,o){var s=b.useRef(!1),n=b.useState(0),t=n[1],e=G(),i=ee(),r=e.defaultQueryObserverOptions(a);r.optimisticResults=!0,r.onError&&(r.onError=Q.batchCalls(r.onError)),r.onSuccess&&(r.onSuccess=Q.batchCalls(r.onSuccess)),r.onSettled&&(r.onSettled=Q.batchCalls(r.onSettled)),r.suspense&&(typeof r.staleTime!="number"&&(r.staleTime=1e3),r.cacheTime===0&&(r.cacheTime=1)),(r.suspense||r.useErrorBoundary)&&(i.isReset()||(r.retryOnMount=!1));var c=b.useState(function(){return new o(e,r)}),u=c[0],h=u.getOptimisticResult(r);if(b.useEffect(function(){s.current=!0,i.clearReset();var f=u.subscribe(Q.batchCalls(function(){s.current&&t(function(p){return p+1})}));return u.updateResult(),function(){s.current=!1,f()}},[i,u]),b.useEffect(function(){u.setOptions(r,{listeners:!1})},[r,u]),r.suspense&&h.isLoading)throw u.fetchOptimistic(r).then(function(f){var p=f.data;r.onSuccess==null||r.onSuccess(p),r.onSettled==null||r.onSettled(p,null)}).catch(function(f){i.clearReset(),r.onError==null||r.onError(f),r.onSettled==null||r.onSettled(void 0,f)});if(h.isError&&!i.isReset()&&!h.isFetching&&q(r.suspense,r.useErrorBoundary,[h.error,u.getCurrentQuery()]))throw h.error;return r.notifyOnChangeProps==="tracked"&&(h=u.trackResult(h,r)),h}function se(a,o,s){var n=H(a,o,s);return te(n,X)}const ne={EMPLOYEE:"employee",COMPANY:"company",GROUP:"group",ROLE:"role",VEHICLE:"vehicle",ASSIGNED:"assigned",OBSERVATION:"observations"};export{ne as Q,se as u};
