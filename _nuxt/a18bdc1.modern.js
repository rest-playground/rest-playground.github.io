(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1238:function(t,e,n){"use strict";n.r(e);var a=n(3),l=Object(a.c)({props:{show:Boolean,loadingState:Boolean},data:()=>({name:null}),methods:{addNewCollection(){this.name?this.$emit("submit",this.name):this.$toast.error(this.$t("collection.invalid_name"))},hideModal(){this.name=null,this.$emit("hide-modal")}}}),o=n(16),i=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("SmartModal",{attrs:{dialog:"",title:t.$t("collection.new")},on:{close:t.hideModal},scopedSlots:t._u([{key:"body",fn:function(){return[n("div",{staticClass:"flex flex-col px-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelAdd",placeholder:" ",type:"text",autocomplete:"off"},domProps:{value:t.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addNewCollection.apply(null,arguments)},input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("label",{attrs:{for:"selectLabelAdd"}},[t._v("\n        "+t._s(t.$t("action.label"))+"\n      ")])])]},proxy:!0},{key:"footer",fn:function(){return[n("span",[n("ButtonPrimary",{attrs:{label:t.$t("action.save"),loading:t.loadingState},nativeOn:{click:function(e){return t.addNewCollection.apply(null,arguments)}}}),t._v(" "),n("ButtonSecondary",{attrs:{label:t.$t("action.cancel")},nativeOn:{click:function(e){return t.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,2883550694)}):t._e()}),[],!1,null,null,null);e.default=i.exports;installComponents(i,{ButtonPrimary:n(145).default,ButtonSecondary:n(88).default,SmartModal:n(93).default})}}]);