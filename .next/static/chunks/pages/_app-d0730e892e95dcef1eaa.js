(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6426:function(e,t,r){"use strict";r.d(t,{kZ:function(){return f},rg:function(){return c}});var n=r(7294);const o=(0,n.createContext)(null);function c({clientId:e,onScriptLoadSuccess:t,onScriptLoadError:r,children:c}){const u=function(e={}){const{onScriptLoadSuccess:t,onScriptLoadError:r}=e,[o,c]=(0,n.useState)(!1),u=(0,n.useRef)(t);u.current=t;const i=(0,n.useRef)(r);return i.current=r,(0,n.useEffect)((()=>{const e=document.createElement("script");return e.src="https://accounts.google.com/gsi/client",e.async=!0,e.defer=!0,e.onload=()=>{var e;c(!0),null===(e=u.current)||void 0===e||e.call(u)},e.onerror=()=>{var e;c(!1),null===(e=i.current)||void 0===e||e.call(i)},document.body.appendChild(e),()=>{document.body.removeChild(e)}}),[]),o}({onScriptLoadSuccess:t,onScriptLoadError:r}),i=(0,n.useMemo)((()=>({clientId:e,scriptLoadedSuccessfully:u})),[e,u]);return n.createElement(o.Provider,{value:i},c)}function u(){const e=(0,n.useContext)(o);if(!e)throw new Error("Google OAuth components must be used within GoogleOAuthProvider");return e}function i(e){var t;return null!==(t=null===e||void 0===e?void 0:e.clientId)&&void 0!==t?t:null===e||void 0===e?void 0:e.client_id}const s={large:40,medium:32,small:20};function f({onSuccess:e,onError:t,useOneTap:r,promptMomentNotification:o,type:c="standard",theme:f="outline",size:a="large",text:l,shape:d,logo_alignment:p,width:y,locale:b,...v}){const m=(0,n.useRef)(null),{clientId:S,scriptLoadedSuccessfully:h}=u(),g=(0,n.useRef)(e);g.current=e;const w=(0,n.useRef)(t);w.current=t;const E=(0,n.useRef)(o);return E.current=o,(0,n.useEffect)((()=>{var e,t,n;if(h)return null===(e=window.google)||void 0===e||e.accounts.id.initialize({client_id:S,callback:e=>{var t;if(!(null===e||void 0===e?void 0:e.credential))return null===(t=w.current)||void 0===t?void 0:t.call(w);const{credential:r,select_by:n}=e;g.current({credential:r,clientId:i(e),select_by:n})},...v}),null===(t=window.google)||void 0===t||t.accounts.id.renderButton(m.current,{type:c,theme:f,size:a,text:l,shape:d,logo_alignment:p,width:y,locale:b}),r&&(null===(n=window.google)||void 0===n||n.accounts.id.prompt(E.current)),()=>{var e;r&&(null===(e=window.google)||void 0===e||e.accounts.id.cancel())}}),[S,h,r,c,f,a,l,d,p,y,b]),n.createElement("div",{ref:m,style:{height:s[a]}})}},8679:function(e,t,r){"use strict";var n=r(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function s(e){return n.isMemo(e)?u:i[e.$$typeof]||o}i[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[n.Memo]=u;var f=Object.defineProperty,a=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(y){var o=p(r);o&&o!==y&&e(t,o,n)}var u=a(r);l&&(u=u.concat(l(r)));for(var i=s(t),b=s(r),v=0;v<u.length;++v){var m=u[v];if(!c[m]&&(!n||!n[m])&&(!b||!b[m])&&(!i||!i[m])){var S=d(r,m);try{f(t,m,S)}catch(h){}}}}return t}},7292:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,{default:function(){return v}});r(2243);var o=r(6426),c=r(5998);function u(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var i="function"===typeof Symbol&&Symbol.observable||"@@observable",s=function(){return Math.random().toString(36).substring(7).split("").join(".")},f={INIT:"@@redux/INIT"+s(),REPLACE:"@@redux/REPLACE"+s(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+s()}};function a(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function l(e,t,r){var n;if("function"===typeof t&&"function"===typeof r||"function"===typeof r&&"function"===typeof arguments[3])throw new Error(u(0));if("function"===typeof t&&"undefined"===typeof r&&(r=t,t=void 0),"undefined"!==typeof r){if("function"!==typeof r)throw new Error(u(1));return r(l)(e,t)}if("function"!==typeof e)throw new Error(u(2));var o=e,c=t,s=[],d=s,p=!1;function y(){d===s&&(d=s.slice())}function b(){if(p)throw new Error(u(3));return c}function v(e){if("function"!==typeof e)throw new Error(u(4));if(p)throw new Error(u(5));var t=!0;return y(),d.push(e),function(){if(t){if(p)throw new Error(u(6));t=!1,y();var r=d.indexOf(e);d.splice(r,1),s=null}}}function m(e){if(!a(e))throw new Error(u(7));if("undefined"===typeof e.type)throw new Error(u(8));if(p)throw new Error(u(9));try{p=!0,c=o(c,e)}finally{p=!1}for(var t=s=d,r=0;r<t.length;r++){(0,t[r])()}return e}function S(e){if("function"!==typeof e)throw new Error(u(10));o=e,m({type:f.REPLACE})}function h(){var e,t=v;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new Error(u(11));function r(){e.next&&e.next(b())}return r(),{unsubscribe:t(r)}}})[i]=function(){return this},e}return m({type:f.INIT}),(n={dispatch:m,subscribe:v,getState:b,replaceReducer:S})[i]=h,n}var d=r(5893);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setUser":return y(y({},e),{},{user:t.user});default:return e}}));var v=function(e){var t=e.Component,r=e.pageProps;return(0,d.jsx)(c.zt,{store:b,children:(0,d.jsx)(o.rg,{clientId:"1081541241057-9c2u4qf18ubnkk5aeinnh75ihlj5eso5.apps.googleusercontent.com",children:(0,d.jsx)(t,y({},r))})})}},1780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7292)}])},2243:function(){},9921:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,a=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,m=r?Symbol.for("react.block"):60121,S=r?Symbol.for("react.fundamental"):60117,h=r?Symbol.for("react.responder"):60118,g=r?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case a:case l:case c:case i:case u:case p:return e;default:switch(e=e&&e.$$typeof){case f:case d:case v:case b:case s:return e;default:return t}}case o:return t}}}function E(e){return w(e)===l}t.AsyncMode=a,t.ConcurrentMode=l,t.ContextConsumer=f,t.ContextProvider=s,t.Element=n,t.ForwardRef=d,t.Fragment=c,t.Lazy=v,t.Memo=b,t.Portal=o,t.Profiler=i,t.StrictMode=u,t.Suspense=p,t.isAsyncMode=function(e){return E(e)||w(e)===a},t.isConcurrentMode=E,t.isContextConsumer=function(e){return w(e)===f},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===c},t.isLazy=function(e){return w(e)===v},t.isMemo=function(e){return w(e)===b},t.isPortal=function(e){return w(e)===o},t.isProfiler=function(e){return w(e)===i},t.isStrictMode=function(e){return w(e)===u},t.isSuspense=function(e){return w(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===c||e===l||e===i||e===u||e===p||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===b||e.$$typeof===s||e.$$typeof===f||e.$$typeof===d||e.$$typeof===S||e.$$typeof===h||e.$$typeof===g||e.$$typeof===m)},t.typeOf=w},9864:function(e,t,r){"use strict";e.exports=r(9921)},5998:function(e,t,r){"use strict";r.d(t,{zt:function(){return h},I0:function(){return x},v9:function(){return y}});var n=r(1688),o=r(2798),c=r(3935);let u=function(e){e()};const i=()=>u;var s=r(7294);const f=(0,s.createContext)(null);function a(){return(0,s.useContext)(f)}let l=()=>{throw new Error("uSES not initialized!")};const d=(e,t)=>e===t;function p(e=f){const t=e===f?a:()=>(0,s.useContext)(e);return function(e,r=d){const{store:n,subscription:o,getServerState:c}=t(),u=l(o.addNestedSub,n.getState,c||n.getState,e,r);return(0,s.useDebugValue)(u),u}}const y=p();r(8679),r(2973);const b={notify(){},get:()=>[]};function v(e,t){let r,n=b;function o(){u.onStateChange&&u.onStateChange()}function c(){r||(r=t?t.addNestedSub(o):e.subscribe(o),n=function(){const e=i();let t=null,r=null;return{clear(){t=null,r=null},notify(){e((()=>{let e=t;for(;e;)e.callback(),e=e.next}))},get(){let e=[],r=t;for(;r;)e.push(r),r=r.next;return e},subscribe(e){let n=!0,o=r={callback:e,next:null,prev:r};return o.prev?o.prev.next=o:t=o,function(){n&&null!==t&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}const u={addNestedSub:function(e){return c(),n.subscribe(e)},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(r)},trySubscribe:c,tryUnsubscribe:function(){r&&(r(),r=void 0,n.clear(),n=b)},getListeners:()=>n};return u}const m=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement)?s.useLayoutEffect:s.useEffect;let S=null;var h=function({store:e,context:t,children:r,serverState:n}){const o=(0,s.useMemo)((()=>{const t=v(e);return{store:e,subscription:t,getServerState:n?()=>n:void 0}}),[e,n]),c=(0,s.useMemo)((()=>e.getState()),[e]);m((()=>{const{subscription:t}=o;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),c!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}}),[o,c]);const u=t||f;return s.createElement(u.Provider,{value:o},r)};function g(e=f){const t=e===f?a:()=>(0,s.useContext)(e);return function(){const{store:e}=t();return e}}const w=g();function E(e=f){const t=e===f?w:g(e);return function(){return t().dispatch}}const x=E();var O,P;O=o.useSyncExternalStoreWithSelector,l=O,(e=>{S=e})(n.useSyncExternalStore),P=c.unstable_batchedUpdates,u=P},8359:function(e,t){"use strict";var r,n=Symbol.for("react.element"),o=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),f=Symbol.for("react.context"),a=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),v=Symbol.for("react.offscreen");function m(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case c:case i:case u:case d:case p:return e;default:switch(e=e&&e.$$typeof){case a:case f:case l:case b:case y:case s:return e;default:return t}}case o:return t}}}r=Symbol.for("react.module.reference")},2973:function(e,t,r){"use strict";r(8359)},3250:function(e,t,r){"use strict";var n=r(7294);var o="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},c=n.useState,u=n.useEffect,i=n.useLayoutEffect,s=n.useDebugValue;function f(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!o(e,r)}catch(n){return!0}}var a="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=c({inst:{value:r,getSnapshot:t}}),o=n[0].inst,a=n[1];return i((function(){o.value=r,o.getSnapshot=t,f(o)&&a({inst:o})}),[e,r,t]),u((function(){return f(o)&&a({inst:o}),e((function(){f(o)&&a({inst:o})}))}),[e]),s(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:a},139:function(e,t,r){"use strict";var n=r(7294),o=r(1688);var c="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},u=o.useSyncExternalStore,i=n.useRef,s=n.useEffect,f=n.useMemo,a=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var l=i(null);if(null===l.current){var d={hasValue:!1,value:null};l.current=d}else d=l.current;l=f((function(){function e(e){if(!s){if(s=!0,u=e,e=n(e),void 0!==o&&d.hasValue){var t=d.value;if(o(t,e))return i=t}return i=e}if(t=i,c(u,e))return t;var r=n(e);return void 0!==o&&o(t,r)?t:(u=e,i=r)}var u,i,s=!1,f=void 0===r?null:r;return[function(){return e(t())},null===f?void 0:function(){return e(f())}]}),[t,r,n,o]);var p=u(e,l[0],l[1]);return s((function(){d.hasValue=!0,d.value=p}),[p]),a(p),p}},1688:function(e,t,r){"use strict";e.exports=r(3250)},2798:function(e,t,r){"use strict";e.exports=r(139)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(4651)}));var r=e.O();_N_E=r}]);