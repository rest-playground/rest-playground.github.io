(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1151:function(e,t,r){"use strict";var n;r.d(t,"a",(function(){return u}));var a=new Uint8Array(16);function u(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(a)}},1153:function(e,t,r){"use strict";var n=r(1151),a=r(977);t.a=function(e,t,r){var u=(e=e||{}).random||(e.rng||n.a)();if(u[6]=15&u[6]|64,u[8]=63&u[8]|128,t){r=r||0;for(var o=0;o<16;++o)t[r+o]=u[o];return t}return Object(a.a)(u)}},1979:function(e,t,r){"use strict";var n=r(23),a=r(27),u=r(2009),o=r(314),c="ArrayBuffer",i=u.ArrayBuffer;n({global:!0,forced:a.ArrayBuffer!==i},{ArrayBuffer:i}),o(c)},2007:function(e,t,r){"use strict";r.d(t,"b",(function(){return P})),r.d(t,"c",(function(){return x})),r.d(t,"a",(function(){return A}));var n=r(34),a=(r(64),r(10),r(4),r(76),r(73),r(202),r(7),r(376),r(107)),u=r(304),o=r.n(u),c=r(44),i=r(55),s=r(1),f=(r(8),r(9),r(14),r(13),r(87),r(57),r(99),r(60),r(95),r(100),r(53)),p=(r(371),r(128),r(208)),d=r.n(p),l=r(1153);r(1979),r(1379),r(1932),r(1933),r(1934),r(1935),r(1936),r(1937),r(1938),r(1939),r(1940),r(1941),r(1942),r(1943),r(1944),r(1945),r(1946),r(1947),r(1948),r(1949),r(1950),r(1951),r(1952),r(1953),r(1954),r(1955),r(161);var b=r(24);function y(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,o=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){c=!0,u=e},f:function(){try{o||null==r.return||r.return()}finally{if(c)throw u}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=d.a.CancelToken.source(),j=function(e){return Object(s.pipe)(i.a,i.b("processedReq",(function(){return i.r(function(e){var t,r=o()(e);if(r.params instanceof URLSearchParams){try{var n,a=new URL(null!==(t=r.url)&&void 0!==t?t:""),u=y(r.params.entries());try{for(u.s();!(n=u.n()).done;){var c=Object(f.a)(n.value,2),i=c[0],s=c[1];a.searchParams.append(i,s)}}catch(e){u.e(e)}finally{u.f()}r.url=a.toString()}catch(e){}r.params={}}return r}(e))})),i.b("multipartKey",(function(e){var t=e.processedReq;return i.r(t.data instanceof FormData?Object(l.a)():null)})),i.b("headers",(function(e){var t=e.processedReq,r=e.multipartKey;return i.r(t.data instanceof FormData?{"multipart-part-key":"proxyRequestData-".concat(r)}:{})})),i.b("payload",(function(e){var t=e.processedReq,r=e.multipartKey;return i.r(function(e,t){var r=m(m({},e),{},{wantsBinary:!0});if(r.data instanceof FormData){var n=r.data;r.data="",n.append(t,JSON.stringify(r)),r=n}return r}(t,r))})),i.d((function(e){var t=e.payload,r=e.headers;return i.v((function(){return d.a.post(b.i.value.PROXY_URL||"https://proxy.hoppscotch.io",t,{headers:r,cancelToken:O.token})}),(function(e){return d.a.isCancel(e)?"cancellation":e}))})),i.d(i.i((function(e){return e.data.success}),(function(e){return e.data.data.message||"Proxy Error"}))),i.d((function(e){var t=e.data;return t.isBinary&&(t.data=function(e){var t,r,n,a,u,o,c=Math.floor(e.length/4*3),i=new ArrayBuffer(c),s=new Uint8Array(i),f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",p=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");for(var d=0;d<c;d+=3)t=f.indexOf(e.charAt(p++))<<2|(a=f.indexOf(e.charAt(p++)))>>4,r=(15&a)<<4|(u=f.indexOf(e.charAt(p++)))>>2,n=(3&u)<<6|(o=f.indexOf(e.charAt(p++))),s[d]=t,64!==u&&(s[d+1]=r),64!==o&&(s[d+2]=n);return i}(t.data)),i.r(t)})))},g=function(e){return Object(s.pipe)(i.v((function(){return d()(m(m({},e),{},{cancelToken:O&&O.token||"",responseType:"arraybuffer"}))}),(function(e){return d.a.isCancel(e)?"cancellation":e})),i.s((function(e){return"cancellation"!==e&&e.response?i.t(e.response):i.m(e)})))},w=function(e){return Object(s.pipe)(e,b.i.value.PROXY_ENABLED?j:g)},q=r(386),k=function(){return b.i.value.EXTENSIONS_ENABLED},R=function(e){return k()&&Object(q.d)()?Object(q.b)(e):w(e)};function P(){return k()&&Object(q.d)()?"extension":b.i.value.PROXY_ENABLED?"proxy":"normal"}var x=function(e){return Object(s.pipe)(R(e),i.k((function(e){throw e})))()};function A(e){var t=new a.a({type:"loading",req:e});return Object(s.pipe)(i.a,i.b("req",(function(){return i.r(o()(e))})),i.b("headers",(function(e){var t=e.req;return i.r(t.effectiveFinalHeaders.reduce((function(e,t){var r=t.key,a=t.value;return Object.assign(e,Object(n.a)({},r,a))}),{}))})),i.b("params",(function(e){var t=e.req,r=new URLSearchParams;return t.effectiveFinalParams.forEach((function(e){r.append(e.key,e.value)})),i.r(r)})),i.b("backupTimeStart",(function(){return i.r(Date.now())})),i.b("res",(function(e){var t=e.req,r=e.headers,n=e.params;return R({method:t.method,url:t.effectiveFinalURL.trim(),headers:r,params:n,data:t.effectiveFinalBody})})),i.b("backupTimeEnd",(function(){return i.r(Date.now())})),i.f((function(e){var t=e.req,r=e.res,n=e.backupTimeEnd;return function(e,t,r,n,a){return Object(s.pipe)(i.a,i.b("contentLength",(function(){return i.r(e.headers["content-length"]?parseInt(e.headers["content-length"]):e.data.byteLength)})),i.n((function(u){var o=u.contentLength;return{type:a,statusCode:e.status,body:e.data,headers:Object.keys(e.headers).map((function(t){return{key:t,value:e.headers[t]}})),meta:{responseSize:o,responseDuration:n-r},req:t}})))}(r,t,e.backupTimeStart,n,"success")})),i.d((function(e){return t.next(e),t.complete(),i.r(e)})),i.l((function(r){var n={type:"network_fail",error:r,req:e};return t.next(n),t.complete(),c.k(n)})))(),t}},2341:function(e,t,r){"use strict";r.r(t);var n=r(125),a=r(2007),u=r(26),o=r(931),c={props:{conn:{key:"conn",required:!0,type:null}},setup:function(e,t){var r=Object(u.d)(),c=e,i=Object(u.g)(c.conn.connected$,!1),s=Object(u.g)(o.c,[]),f=Object(u.h)(o.f,"",o.m);return{t:r,connected:i,url:f,onConnectClick:function(){i.value?c.conn.disconnect():(c.conn.connect(f.value,s.value),Object(n.b)({platform:"graphql-schema",strategy:Object(a.b)()}))}}}},i=c,s=r(25),f=Object(s.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sticky top-0 z-10 flex flex-shrink-0 p-4 overflow-x-auto space-x-2 bg-primary hide-scrollbar"},[r("div",{staticClass:"inline-flex flex-1 space-x-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],staticClass:"w-full px-4 py-2 border rounded bg-primaryLight border-divider text-secondaryDark",attrs:{id:"url",type:"url",autocomplete:"off",spellcheck:"false",placeholder:""+e.t("request.url"),disabled:e.connected},domProps:{value:e.url},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onConnectClick.apply(null,arguments)},input:function(t){t.target.composing||(e.url=t.target.value)}}}),e._v(" "),r("ButtonPrimary",{staticClass:"w-32",attrs:{id:"get",name:"get",label:e.connected?e.t("action.disconnect"):e.t("action.connect")},nativeOn:{click:function(t){return e.onConnectClick.apply(null,arguments)}}})],1)])}),[],!1,null,null,null);t.default=f.exports;installComponents(f,{ButtonPrimary:r(201).default})},931:function(e,t,r){"use strict";r.d(t,"m",(function(){return y})),r.d(t,"i",(function(){return h})),r.d(t,"j",(function(){return v})),r.d(t,"n",(function(){return m})),r.d(t,"k",(function(){return O})),r.d(t,"a",(function(){return j})),r.d(t,"l",(function(){return g})),r.d(t,"o",(function(){return w})),r.d(t,"h",(function(){return q})),r.d(t,"f",(function(){return R})),r.d(t,"d",(function(){return P})),r.d(t,"g",(function(){return x})),r.d(t,"c",(function(){return A})),r.d(t,"e",(function(){return S})),r.d(t,"b",(function(){return C}));r(10),r(8),r(14),r(7),r(13);var n=r(40),a=r(34),u=(r(11),r(9),r(4),r(64),r(57),r(46)),o=r(50),c=r(74),i=r(47),s=r(26);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={request:Object(c.makeGQLRequest)({name:"Untitled request",url:"https://echo.hoppscotch.io/graphql",headers:[],variables:'{\n  "id": "1"\n}',query:"query Request {\n  method\n  url\n  headers {\n    key\n    value\n  }\n}\n",auth:{authType:"none",authActive:!0}}),schema:"",response:""},l=Object(i.b)({setSession:function(e,t){return t.session},setName:function(e,t){var r=t.newName;return{request:p(p({},e.request),{},{name:r})}},setURL:function(e,t){var r=t.newURL;return{request:p(p({},e.request),{},{url:r})}},setHeaders:function(e,t){var r=t.headers;return{request:p(p({},e.request),{},{headers:r})}},addHeader:function(e,t){var r=t.header;return{request:p(p({},e.request),{},{headers:[].concat(Object(n.a)(e.request.headers),[r])})}},removeHeader:function(e,t){var r=t.headerIndex;return{request:p(p({},e.request),{},{headers:e.request.headers.filter((function(e,t){return t!==r}))})}},updateHeader:function(e,t){var r=t.headerIndex,n=t.updatedHeader;return{request:p(p({},e.request),{},{headers:e.request.headers.map((function(e,t){return t===r?n:e}))})}},setQuery:function(e,t){var r=t.newQuery;return{request:p(p({},e.request),{},{query:r})}},setVariables:function(e,t){var r=t.newVariables;return{request:p(p({},e.request),{},{variables:r})}},setResponse:function(e,t){return{response:t.newResponse}},setAuth:function(e,t){var r=t.newAuth;return{request:p(p({},e.request),{},{auth:r})}}}),b=new i.a(d,l);function y(e){b.dispatch({dispatcher:"setURL",payload:{newURL:e}})}function h(e){b.dispatch({dispatcher:"setHeaders",payload:{headers:e}})}function v(e){b.dispatch({dispatcher:"setQuery",payload:{newQuery:e}})}function m(e){b.dispatch({dispatcher:"setVariables",payload:{newVariables:e}})}function O(e){b.dispatch({dispatcher:"setResponse",payload:{newResponse:e}})}function j(){return b.value}function g(e){b.dispatch({dispatcher:"setSession",payload:{session:e}})}function w(){return Object(s.h)(k,b.value.request.name,(function(e){b.dispatch({dispatcher:"setName",payload:{newName:e}})}))}function q(e){b.dispatch({dispatcher:"setAuth",payload:{newAuth:e}})}var k=b.subject$.pipe(Object(u.a)("request","name"),Object(o.a)()),R=b.subject$.pipe(Object(u.a)("request","url"),Object(o.a)()),P=b.subject$.pipe(Object(u.a)("request","query"),Object(o.a)()),x=b.subject$.pipe(Object(u.a)("request","variables"),Object(o.a)()),A=b.subject$.pipe(Object(u.a)("request","headers"),Object(o.a)()),S=b.subject$.pipe(Object(u.a)("response"),Object(o.a)()),C=b.subject$.pipe(Object(u.a)("request","auth"),Object(o.a)())},977:function(e,t,r){"use strict";for(var n=r(979),a=[],u=0;u<256;++u)a.push((u+256).toString(16).substr(1));t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]).toLowerCase();if(!Object(n.a)(r))throw TypeError("Stringified UUID is invalid");return r}},979:function(e,t,r){"use strict";var n=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;t.a=function(e){return"string"==typeof e&&n.test(e)}}}]);