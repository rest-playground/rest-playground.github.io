(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{2111:function(e,t,n){"use strict";n.r(t);n(369);var i=n(3),o=n(304),r=n.n(o),l=n(105),c=n(26),a={};a.props={environment:{key:"environment",required:!0,type:null},environmentIndex:{key:"environmentIndex",required:!0,type:[Number,String,null]}},a.setup=function(e,t){var n=Object(c.d)(),o=Object(c.j)(),a=e,u=t.emit,s=Object(i.o)(!1),p=Object(i.o)(null),d=Object(i.o)(null),m=Object(i.o)(null),v=Object(i.o)(null),f=Object(i.o)(null);return{t:n,emit:u,confirmRemove:s,tippyActions:p,options:d,edit:m,duplicate:v,deleteAction:f,removeEnvironment:function(){null!==a.environmentIndex&&("Global"!==a.environmentIndex&&Object(l.e)(a.environmentIndex),o.success("".concat(n("state.deleted"))))},duplicateEnvironments:function(){null!==a.environmentIndex&&("Global"===a.environmentIndex?(Object(l.d)("Global - ".concat(n("action.duplicate"))),Object(l.q)(l.h.value.environments.length-1,r()(Object(l.l)()))):Object(l.f)(a.environmentIndex))}}};var u=a,s=n(23),p=Object(s.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex items-stretch group",on:{contextmenu:function(t){t.preventDefault(),e.options.tippy().show()}}},[n("span",{staticClass:"flex items-center justify-center px-4 cursor-pointer",on:{click:function(t){return e.emit("edit-environment")}}},[n("SmartIcon",{staticClass:"svg-icons",attrs:{name:"layers"}})],1),e._v(" "),n("span",{staticClass:"flex flex-1 min-w-0 py-2 pr-2 cursor-pointer transition group-hover:text-secondaryDark",on:{click:function(t){return e.emit("edit-environment")}}},[n("span",{staticClass:"truncate"},[e._v("\n      "+e._s(e.environment.name)+"\n    ")])]),e._v(" "),n("span",[n("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:"","on-shown":function(){return e.tippyActions.focus()}},scopedSlots:e._u([{key:"trigger",fn:function(){return[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.more"),svg:"more-vertical"}})]},proxy:!0}])},[e._v(" "),n("div",{ref:"tippyActions",staticClass:"flex flex-col focus:outline-none",attrs:{tabindex:"0",role:"menu"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"e",void 0,t.key,void 0)?null:e.edit.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"d",void 0,t.key,void 0)?null:e.duplicate.$el.click()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"]))return null;"Global"!==e.environmentIndex&&e.deleteAction.$el.click()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"escape",void 0,t.key,void 0))return null;e.options.tippy().hide()}]}},[n("SmartItem",{ref:"edit",attrs:{svg:"edit",label:""+e.t("action.edit"),shortcut:["E"]},nativeOn:{click:function(t){return function(){e.emit("edit-environment"),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),n("SmartItem",{ref:"duplicate",attrs:{svg:"copy",label:""+e.t("action.duplicate"),shortcut:["D"]},nativeOn:{click:function(t){return function(){e.duplicateEnvironments(),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),"Global"!==e.environmentIndex?n("SmartItem",{ref:"deleteAction",attrs:{svg:"trash-2",label:""+e.t("action.delete"),shortcut:["⌫"]},nativeOn:{click:function(t){return function(){e.confirmRemove=!0,e.options.tippy().hide()}.apply(null,arguments)}}}):e._e()],1)])],1),e._v(" "),n("SmartConfirmModal",{attrs:{show:e.confirmRemove,title:""+e.t("confirm.remove_environment")},on:{"hide-modal":function(t){e.confirmRemove=!1},resolve:e.removeEnvironment}})],1)}),[],!1,null,null,null);t.default=p.exports;installComponents(p,{SmartIcon:n(117).default,ButtonSecondary:n(108).default,SmartItem:n(128).default,SmartConfirmModal:n(371).default})}}]);