(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{2450:function(e,t,a){"use strict";a.r(t);var l=a(3),o=Object(l.c)({props:{to:{type:String,default:""},exact:{type:Boolean,default:!0},blank:{type:Boolean,default:!1},label:{type:String,default:""},icon:{type:String,default:""},svg:{type:String,default:""},color:{type:String,default:""},disabled:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1}}}),n=a(23),s=Object(n.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("SmartLink",{staticClass:"inline-flex items-center px-4 py-2 truncate rounded transition focus:outline-none",class:[e.color?"text-"+e.color+"-500 hover:text-"+e.color+"-600 focus-visible:text-"+e.color+"-600":"hover:text-secondaryDark focus-visible:text-accent",{"opacity-75 cursor-not-allowed":e.disabled},{"flex-row-reverse":e.reverse}],attrs:{to:""+(/^\/(?!\/).*$/.test(e.to)?e.localePath(e.to):e.to),exact:e.exact,blank:e.blank,disabled:e.disabled}},[e.icon?a("i",{staticClass:"opacity-75 material-icons",class:e.label?e.reverse?"ml-4":"mr-4":""},[e._v("\n    "+e._s(e.icon)+"\n  ")]):e._e(),e._v(" "),e.svg?a("SmartIcon",{staticClass:"opacity-75 svg-icons",class:e.label?e.reverse?"ml-4":"mr-4":"",attrs:{name:e.svg}}):e._e(),e._v("\n  "+e._s(e.label)+"\n")],1)}),[],!1,null,null,null);t.default=s.exports;installComponents(s,{SmartIcon:a(117).default,SmartLink:a(250).default})}}]);