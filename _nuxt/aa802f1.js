(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{2085:function(e,t,r){"use strict";t.a=function(e){return e>=100&&e<200?{name:"informational",className:"info-response"}:e>=200&&e<300?{name:"successful",className:"success-response"}:e>=300&&e<400?{name:"redirection",className:"redir-response"}:e>=400&&e<500?{name:"client error",className:"cl-error-response"}:e>=500&&e<600?{name:"server error",className:"sv-error-response"}:{name:"unknown",className:"missing-data-response"}}},2452:function(e,t,r){"use strict";r.r(t);r(11);var n=r(3),s=r(2085),a=r(26),o={props:{entry:{key:"entry",required:!0,type:null},showMore:{key:"showMore",required:!0,type:null}},setup:function(e,t){var r=e,o=Object(a.d)();return{duration:Object(n.a)((function(){if(r.entry.responseMeta.duration){var e=r.entry.responseMeta.duration;return e?e>0?"".concat(o("request.duration"),": ").concat(e,"ms"):o("error.no_duration"):""}return o("error.no_duration")})),entryStatus:Object(n.a)((function(){return Object(s.a)(r.entry.responseMeta.statusCode)||{className:""}}))}}},i=o,c=r(23),l=Object(c.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex items-stretch group"},[r("span",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip",delay:[500,20]},expression:"{ theme: 'tooltip', delay: [500, 20] }"}],staticClass:"flex items-center justify-center w-16 px-2 truncate cursor-pointer",class:e.entryStatus.className,attrs:{"data-testid":"restore_history_entry",title:""+e.duration},on:{click:function(t){return e.$emit("use-entry")}}},[e._v("\n    "+e._s(e.entry.request.method)+"\n  ")]),e._v(" "),r("span",{staticClass:"flex flex-1 min-w-0 py-2 pr-2 cursor-pointer transition group-hover:text-secondaryDark",attrs:{"data-testid":"restore_history_entry"},on:{click:function(t){return e.$emit("use-entry")}}},[r("span",{staticClass:"truncate"},[e._v("\n      "+e._s(e.entry.request.endpoint)+"\n    ")]),e._v(" "),e.entry.updatedOn?r("tippy",{attrs:{theme:"tooltip",delay:[500,20],content:""+new Date(e.entry.updatedOn).toLocaleString()}}):e._e()],1),e._v(" "),r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"hidden group-hover:inline-flex",attrs:{svg:"trash",color:"red",title:e.$t("action.remove"),"data-testid":"delete_history_entry"},nativeOn:{click:function(t){return e.$emit("delete-entry")}}}),e._v(" "),r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],class:{"group-hover:inline-flex hidden":!e.entry.star},attrs:{title:e.entry.star?e.$t("remove.star"):e.$t("add.star"),svg:e.entry.star?"star-solid":"star",color:"yellow","data-testid":"star_button"},nativeOn:{click:function(t){return e.$emit("toggle-star")}}})],1)}),[],!1,null,null,null);t.default=l.exports;installComponents(l,{ButtonSecondary:r(108).default})}}]);