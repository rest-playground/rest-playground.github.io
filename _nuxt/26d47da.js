(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{979:function(e,t,n){"use strict";n.r(t);var a=n(3),i={};i.props={label:{type:String,default:null},info:{type:String,default:null},indicator:{type:Boolean,default:!1},icon:{type:String,default:null},id:{type:String,default:null,required:!0},selected:{type:Boolean,default:!1}},i.setup=function(e,t){var n=e,i=Object(a.a)((function(){return{icon:n.icon,indicator:n.indicator,info:n.info,label:n.label}})),l=Object(a.e)("tabs-system"),u=l.activeTabID,r=l.renderInactive,c=l.addTabEntry,o=l.updateTabEntry,d=l.removeTabEntry,f=Object(a.a)((function(){return u.value===n.id})),s=Object(a.a)((function(){return!!r.value||f.value}));return Object(a.j)((function(){c(n.id,i.value)})),Object(a.z)(i,(function(e){o(n.id,e)})),Object(a.i)((function(){d(n.id)})),{active:f,shouldRender:s}};var l=i,u=n(23),r=Object(u.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.shouldRender?n("div",{directives:[{name:"show",rawName:"v-show",value:e.active,expression:"active"}],staticClass:"flex flex-col flex-1"},[e._t("default")],2):e._e()}),[],!1,null,null,null);t.default=r.exports}}]);