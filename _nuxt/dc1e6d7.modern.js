(window.webpackJsonp=window.webpackJsonp||[]).push([[119,28,111],{1949:function(t,e,n){var i=n(2014);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(97).default)("72eb9380",i,!0,{sourceMap:!1})},2013:function(t,e,n){"use strict";n(1949)},2014:function(t,e,n){var i=n(96)(!1);i.push([t.i,".logo[data-v-2b49380f] {\n  animation: 200ms appear-data-v-2b49380f;\n}\n@keyframes appear-data-v-2b49380f {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}",""]),t.exports=i},2190:function(t,e,n){"use strict";n.r(e);n(2013);var i=n(17),a=Object(i.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"logo",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M17 10.54C16.78 7.44 14.63 5 12 5s-4.78 2.44-5 5.54C4 11.23 2 12.5 2 14c0 2.21 4.5 4 10 4s10-1.79 10-4c0-1.5-2-2.77-5-3.46m-2.07 1.3c-1.9.21-3.96.21-5.86 0c-.04-.28-.07-.56-.07-.84c0-2.2 1.35-4 3-4s3 1.8 3 4c0 .28 0 .56-.07.84z",fill:"currentColor"}})])}),[],!1,null,"2b49380f",null);e.default=a.exports},2253:function(t,e,n){"use strict";n.r(e);var i=n(17),a=Object(i.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-sm text-secondaryLight animate-pulse"},[e("AppLogo",{staticClass:"w-8 h-8"})],1)}),[],!1,null,null,null);e.default=a.exports;installComponents(a,{AppLogo:n(2190).default})},2308:function(t,e,n){"use strict";n.r(e);var i=n(13),a=(n(64),n(338),n(3)),r=n(227),s=n(15),o=n(80),l=Object(a.c)({layout:"empty",data:()=>({signingInWithEmail:!1,error:null}),beforeMount(){Object(r.a)()},mounted(){var t=this;return Object(i.a)((function*(){if(Object(s.g)(window.location.href)){t.signingInWithEmail=!0;var e=Object(o.a)("emailForSignIn");e||(e=window.prompt("Please provide your email for confirmation")),yield Object(s.s)(e,window.location.href).then((()=>{Object(o.b)("emailForSignIn"),t.$router.push({path:"/"})})).catch((e=>{t.signingInWithEmail=!1,t.error=e.message})).finally((()=>{t.signingInWithEmail=!1}))}}))()}}),c=n(17),u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col items-center justify-center min-h-screen"},[t.signingInWithEmail?n("SmartSpinner"):n("SmartLoadingIndicator"),t._v(" "),t.error?n("pre",[t._v(t._s(t.error))]):t._e()],1)}),[],!1,null,null,null);e.default=u.exports;installComponents(u,{SmartSpinner:n(145).default,SmartLoadingIndicator:n(2253).default})}}]);