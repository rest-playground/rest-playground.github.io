(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{900:function(e,t,a){"use strict";a.r(t);var l=a(3),n={};n.props={label:{type:String,default:null},info:{type:String,default:null},indicator:{type:Boolean,default:!1},icon:{type:String,default:null},id:{type:String,default:null,required:!0},selected:{type:Boolean,default:!1}},n.setup=(e,t)=>{var a=e,n=Object(l.a)((()=>({icon:a.icon,indicator:a.indicator,info:a.info,label:a.label}))),{activeTabID:i,renderInactive:r,addTabEntry:u,updateTabEntry:c,removeTabEntry:d}=Object(l.e)("tabs-system"),o=Object(l.a)((()=>i.value===a.id)),s=Object(l.a)((()=>!!r.value||o.value));return Object(l.j)((()=>{u(a.id,n.value)})),Object(l.z)(n,(e=>{c(a.id,e)})),Object(l.i)((()=>{d(a.id)})),{active:o,shouldRender:s}};var i=n,r=a(16),u=Object(r.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.shouldRender?a("div",{directives:[{name:"show",rawName:"v-show",value:e.active,expression:"active"}],staticClass:"flex flex-col flex-1"},[e._t("default")],2):e._e()}),[],!1,null,null,null);t.default=u.exports}}]);