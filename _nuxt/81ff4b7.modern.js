(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1220:function(e,t,n){"use strict";n.r(t);var l=n(34),o=n(3),a=n(104);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=Object(o.c)({props:{show:Boolean,editingCollection:{type:Object,default:()=>{}},editingCollectionIndex:{type:Number,default:null},editingCollectionName:{type:String,default:null}},data:()=>({name:null}),watch:{editingCollectionName(e){this.name=e}},methods:{saveCollection(){if(this.name){var e=r(r({},this.editingCollection),{},{name:this.name});Object(a.g)(this.editingCollectionIndex,e),this.hideModal()}else this.$toast.error("".concat(this.$t("collection.invalid_name")))},hideModal(){this.name=null,this.$emit("hide-modal")}}}),s=n(16),u=Object(s.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("SmartModal",{attrs:{dialog:"",title:""+e.$t("collection.edit")},on:{close:e.hideModal},scopedSlots:e._u([{key:"body",fn:function(){return[n("div",{staticClass:"flex flex-col px-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelGqlEdit",placeholder:" ",type:"text",autocomplete:"off"},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveCollection.apply(null,arguments)},input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),n("label",{attrs:{for:"selectLabelGqlEdit"}},[e._v("\n        "+e._s(e.$t("action.label"))+"\n      ")])])]},proxy:!0},{key:"footer",fn:function(){return[n("span",[n("ButtonPrimary",{attrs:{label:""+e.$t("action.save")},nativeOn:{click:function(t){return e.saveCollection.apply(null,arguments)}}}),e._v(" "),n("ButtonSecondary",{attrs:{label:""+e.$t("action.cancel")},nativeOn:{click:function(t){return e.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,2641254919)}):e._e()}),[],!1,null,null,null);t.default=u.exports;installComponents(u,{ButtonPrimary:n(145).default,ButtonSecondary:n(88).default,SmartModal:n(93).default})}}]);