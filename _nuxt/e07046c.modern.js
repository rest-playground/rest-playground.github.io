(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1320:function(e,t,a){"use strict";a.r(t);a(35),a(42),a(8);var r=a(257),l=(a(483),a(80)),n=a(3),s=a(17),o=a(71),i={};i.props={layoutId:{type:String,default:null}},i.setup=(e,t)=>{var a=Object(s.k)("SIDEBAR_ON_LEFT"),r=Object(l.useBreakpoints)(l.breakpointsTailwind).greater("md"),i=Object(s.k)("COLUMN_LAYOUT"),c=Object(s.k)("SIDEBAR"),u=Object(n.y)(),_=Object(n.a)((()=>!!u.sidebar)),v=e,E=Object(n.o)(25),d=Object(n.o)(75),O=Object(n.o)(45),f=Object(n.o)(65);function A(e){var t="".concat(v.layoutId,"-pane-config-").concat(e),a=Object(o.a)(t);return a?JSON.parse(a):null}return i.value||(O.value=50,f.value=50),function(){if(v.layoutId){var e=A("vertical");if(e){var[t,a]=e;d.value=null==t?void 0:t.size,E.value=null==a?void 0:a.size}var r=A("horizontal");if(r){var[l,n]=r;O.value=null==l?void 0:l.size,f.value=null==n?void 0:n.size}}}(),{SIDEBAR_ON_LEFT:a,mdAndLarger:r,COLUMN_LAYOUT:i,SIDEBAR:c,hasSidebar:_,PANE_SIDEBAR_SIZE:E,PANE_MAIN_SIZE:d,PANE_MAIN_TOP_SIZE:O,PANE_MAIN_BOTTOM_SIZE:f,setPaneEvent:function(e,t){if(v.layoutId){var a="".concat(v.layoutId,"-pane-config-").concat(t);Object(o.c)(a,JSON.stringify(e))}}}},i.components=Object.assign({Splitpanes:r.b,Pane:r.a},i.components);var c=i,u=a(16),_=Object(u.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Splitpanes",{staticClass:"smart-splitter",class:{"!flex-row-reverse":e.SIDEBAR_ON_LEFT&&e.mdAndLarger},attrs:{rtl:e.SIDEBAR_ON_LEFT&&e.mdAndLarger,horizontal:!e.mdAndLarger},on:{resize:function(t){return e.setPaneEvent(t,"vertical")}}},[a("Pane",{staticClass:"hide-scrollbar !overflow-auto flex flex-col",attrs:{size:e.PANE_MAIN_SIZE,"min-size":"65"}},[a("Splitpanes",{staticClass:"smart-splitter",attrs:{horizontal:e.COLUMN_LAYOUT},on:{resize:function(t){return e.setPaneEvent(t,"horizontal")}}},[a("Pane",{staticClass:"hide-scrollbar !overflow-auto flex flex-col",attrs:{size:e.PANE_MAIN_TOP_SIZE}},[e._t("primary")],2),e._v(" "),a("Pane",{staticClass:"flex flex-col hide-scrollbar !overflow-auto",attrs:{size:e.PANE_MAIN_BOTTOM_SIZE}},[e._t("secondary")],2)],1)],1),e._v(" "),e.SIDEBAR&&e.hasSidebar?a("Pane",{staticClass:"hide-scrollbar !overflow-auto flex flex-col",attrs:{size:e.PANE_SIDEBAR_SIZE,"min-size":"20"}},[e._t("sidebar")],2):e._e()],1)}),[],!1,null,null,null);t.default=_.exports}}]);