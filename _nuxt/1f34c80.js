(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{2451:function(e,t,r){"use strict";r.r(t);r(60),r(149),r(11),r(88),r(57);var n=r(3),s=r(74),a=r(240),u=r(935),i={props:{entry:{key:"entry",required:!0,type:null},showMore:{key:"showMore",required:!0,type:null}},setup:function(e,t){var r=e,i=Object(n.o)(!1),o=Object(n.a)((function(){return i.value?r.entry.request.query.split("\n"):r.entry.request.query.split("\n").slice(0,2).concat(["..."])}));return{expand:i,query:o,useEntry:function(){Object(u.l)({request:Object(a.cloneDeep)(Object(s.makeGQLRequest)({name:r.entry.request.name,url:r.entry.request.url,headers:r.entry.request.headers,query:r.entry.request.query,variables:r.entry.request.variables,auth:r.entry.request.auth})),schema:"",response:r.entry.response})}}}},o=i,c=r(23),p=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col group"},[r("div",{staticClass:"flex items-center"},[r("span",{staticClass:"flex flex-1 min-w-0 py-2 pl-4 pr-2 cursor-pointer transition group-hover:text-secondaryDark",attrs:{"data-testid":"restore_history_entry"},on:{click:e.useEntry}},[r("span",{staticClass:"truncate"},[e._v("\n        "+e._s(e.entry.request.url)+"\n      ")]),e._v(" "),e.entry.updatedOn?r("tippy",{attrs:{theme:"tooltip",delay:[500,20],content:""+new Date(e.entry.updatedOn).toLocaleString()}}):e._e()],1),e._v(" "),r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"hidden group-hover:inline-flex",attrs:{svg:"trash",color:"red",title:e.$t("action.remove"),"data-testid":"delete_history_entry"},nativeOn:{click:function(t){return e.$emit("delete-entry")}}}),e._v(" "),r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"hidden group-hover:inline-flex",attrs:{title:e.expand?e.$t("hide.more"):e.$t("show.more"),svg:e.expand?"minimize-2":"maximize-2"},nativeOn:{click:function(t){e.expand=!e.expand}}}),e._v(" "),r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],class:{"group-hover:inline-flex hidden":!e.entry.star},attrs:{title:e.entry.star?e.$t("remove.star"):e.$t("add.star"),svg:e.entry.star?"star-solid":"star",color:"yellow","data-testid":"star_button"},nativeOn:{click:function(t){return e.$emit("toggle-star")}}})],1),e._v(" "),r("div",{staticClass:"flex flex-col text-tiny"},e._l(e.query,(function(t,n){return r("span",{key:"line-"+n,staticClass:"px-4 font-mono truncate whitespace-pre cursor-pointer text-secondaryLight",attrs:{"data-testid":"restore_history_entry"},on:{click:e.useEntry}},[e._v(e._s(t))])})),0)])}),[],!1,null,null,null);t.default=p.exports;installComponents(p,{ButtonSecondary:r(108).default})},935:function(e,t,r){"use strict";r.d(t,"m",(function(){return f})),r.d(t,"i",(function(){return v})),r.d(t,"j",(function(){return b})),r.d(t,"n",(function(){return q})),r.d(t,"k",(function(){return m})),r.d(t,"a",(function(){return O})),r.d(t,"l",(function(){return j})),r.d(t,"o",(function(){return w})),r.d(t,"h",(function(){return x})),r.d(t,"f",(function(){return _})),r.d(t,"d",(function(){return k})),r.d(t,"g",(function(){return $})),r.d(t,"c",(function(){return R})),r.d(t,"e",(function(){return C})),r.d(t,"b",(function(){return S}));r(10),r(8),r(14),r(7),r(13);var n=r(40),s=r(34),a=(r(11),r(9),r(4),r(64),r(57),r(46)),u=r(50),i=r(74),o=r(47),c=r(26);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={request:Object(i.makeGQLRequest)({name:"Untitled request",url:"https://echo.hoppscotch.io/graphql",headers:[],variables:'{\n  "id": "1"\n}',query:"query Request {\n  method\n  url\n  headers {\n    key\n    value\n  }\n}\n",auth:{authType:"none",authActive:!0}}),schema:"",response:""},h=Object(o.b)({setSession:function(e,t){return t.session},setName:function(e,t){var r=t.newName;return{request:d(d({},e.request),{},{name:r})}},setURL:function(e,t){var r=t.newURL;return{request:d(d({},e.request),{},{url:r})}},setHeaders:function(e,t){var r=t.headers;return{request:d(d({},e.request),{},{headers:r})}},addHeader:function(e,t){var r=t.header;return{request:d(d({},e.request),{},{headers:[].concat(Object(n.a)(e.request.headers),[r])})}},removeHeader:function(e,t){var r=t.headerIndex;return{request:d(d({},e.request),{},{headers:e.request.headers.filter((function(e,t){return t!==r}))})}},updateHeader:function(e,t){var r=t.headerIndex,n=t.updatedHeader;return{request:d(d({},e.request),{},{headers:e.request.headers.map((function(e,t){return t===r?n:e}))})}},setQuery:function(e,t){var r=t.newQuery;return{request:d(d({},e.request),{},{query:r})}},setVariables:function(e,t){var r=t.newVariables;return{request:d(d({},e.request),{},{variables:r})}},setResponse:function(e,t){return{response:t.newResponse}},setAuth:function(e,t){var r=t.newAuth;return{request:d(d({},e.request),{},{auth:r})}}}),y=new o.a(l,h);function f(e){y.dispatch({dispatcher:"setURL",payload:{newURL:e}})}function v(e){y.dispatch({dispatcher:"setHeaders",payload:{headers:e}})}function b(e){y.dispatch({dispatcher:"setQuery",payload:{newQuery:e}})}function q(e){y.dispatch({dispatcher:"setVariables",payload:{newVariables:e}})}function m(e){y.dispatch({dispatcher:"setResponse",payload:{newResponse:e}})}function O(){return y.value}function j(e){y.dispatch({dispatcher:"setSession",payload:{session:e}})}function w(){return Object(c.h)(g,y.value.request.name,(function(e){y.dispatch({dispatcher:"setName",payload:{newName:e}})}))}function x(e){y.dispatch({dispatcher:"setAuth",payload:{newAuth:e}})}var g=y.subject$.pipe(Object(a.a)("request","name"),Object(u.a)()),_=y.subject$.pipe(Object(a.a)("request","url"),Object(u.a)()),k=y.subject$.pipe(Object(a.a)("request","query"),Object(u.a)()),$=y.subject$.pipe(Object(a.a)("request","variables"),Object(u.a)()),R=y.subject$.pipe(Object(a.a)("request","headers"),Object(u.a)()),C=y.subject$.pipe(Object(a.a)("response"),Object(u.a)()),S=y.subject$.pipe(Object(a.a)("request","auth"),Object(u.a)())}}]);