(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1293:function(e,t,n){"use strict";n.r(t);n(370);var i=n(3),o=n(127),l=Object(i.c)({props:{picked:{type:Object,default:null},savingMode:{type:Boolean,default:!1},collectionIndex:{type:Number,default:null},collection:{type:Object,default:function(){}},doc:Boolean,isFiltered:Boolean},setup:function(){return{tippyActions:Object(i.o)(null),options:Object(i.o)(null),requestAction:Object(i.o)(null),folderAction:Object(i.o)(null),edit:Object(i.o)(null),deleteAction:Object(i.o)(null)}},data:function(){return{showChildren:!1,dragging:!1,selectedFolder:{},confirmRemove:!1}},computed:{isSelected:function(){return this.picked&&"gql-my-collection"===this.picked.pickedType&&this.picked.collectionIndex===this.collectionIndex},getCollectionIcon:function(){return this.isSelected?"check-circle":(this.showChildren||this.isFiltered)&&(this.showChildren||this.isFiltered)?"folder-open":"folder"}},methods:{pick:function(){this.$emit("select",{picked:{pickedType:"gql-my-collection",collectionIndex:this.collectionIndex}})},toggleShowChildren:function(){this.savingMode&&this.pick(),this.showChildren=!this.showChildren},removeCollection:function(){this.picked&&"gql-my-collection"===this.picked.pickedType&&this.picked.collectionIndex===this.collectionIndex&&this.$emit("select",{picked:null}),Object(o.r)(this.collectionIndex),this.$toast.success("".concat(this.$t("state.deleted")))},dropEvent:function(e){var t=e.dataTransfer;this.dragging=!this.dragging;var n=t.getData("folderPath"),i=t.getData("requestIndex");Object(o.p)(n,i,"".concat(this.collectionIndex))}}}),c=n(25),r=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col",class:[{"bg-primaryLight":e.dragging}]},[n("div",{staticClass:"flex items-stretch group",on:{dragover:[function(e){e.preventDefault()},function(t){e.dragging=!0}],drop:[function(t){return t.preventDefault(),e.dropEvent.apply(null,arguments)},function(t){e.dragging=!1}],dragleave:function(t){e.dragging=!1},dragend:function(t){e.dragging=!1},contextmenu:function(t){t.preventDefault(),e.options.tippy().show()}}},[n("span",{staticClass:"flex items-center justify-center px-4 cursor-pointer",on:{click:function(t){return e.toggleShowChildren()}}},[n("SmartIcon",{staticClass:"svg-icons",class:{"text-accent":e.isSelected},attrs:{name:e.getCollectionIcon}})],1),e._v(" "),n("span",{staticClass:"flex flex-1 min-w-0 py-2 pr-2 cursor-pointer transition group-hover:text-secondaryDark",on:{click:function(t){return e.toggleShowChildren()}}},[n("span",{staticClass:"truncate",class:{"text-accent":e.isSelected}},[e._v("\n        "+e._s(e.collection.name)+"\n      ")])]),e._v(" "),n("div",{staticClass:"flex"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"hidden group-hover:inline-flex",attrs:{svg:"file-plus",title:e.$t("request.new")},nativeOn:{click:function(t){return e.$emit("add-request",{path:""+e.collectionIndex})}}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"hidden group-hover:inline-flex",attrs:{svg:"folder-plus",title:e.$t("folder.new")},nativeOn:{click:function(t){return e.$emit("add-folder",{path:""+e.collectionIndex})}}}),e._v(" "),n("span",[n("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:"","on-shown":function(){return e.tippyActions.focus()}},scopedSlots:e._u([{key:"trigger",fn:function(){return[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("action.more"),svg:"more-vertical"}})]},proxy:!0}])},[e._v(" "),n("div",{ref:"tippyActions",staticClass:"flex flex-col focus:outline-none",attrs:{tabindex:"0",role:"menu"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"r",void 0,t.key,void 0)?null:e.requestAction.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"n",void 0,t.key,void 0)?null:e.folderAction.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"e",void 0,t.key,void 0)?null:e.edit.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.deleteAction.$el.click()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"escape",void 0,t.key,void 0))return null;e.options.tippy().hide()}]}},[n("SmartItem",{ref:"requestAction",attrs:{svg:"file-plus",label:""+e.$t("request.new"),shortcut:["R"]},nativeOn:{click:function(t){return function(){e.$emit("add-request",{path:""+e.collectionIndex}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),n("SmartItem",{ref:"folderAction",attrs:{svg:"folder-plus",label:""+e.$t("folder.new"),shortcut:["N"]},nativeOn:{click:function(t){return function(){e.$emit("add-folder",{path:""+e.collectionIndex}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),n("SmartItem",{ref:"edit",attrs:{svg:"edit",label:""+e.$t("action.edit"),shortcut:["E"]},nativeOn:{click:function(t){return function(){e.$emit("edit-collection"),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),n("SmartItem",{ref:"deleteAction",attrs:{svg:"trash-2",label:""+e.$t("action.delete"),shortcut:["⌫"]},nativeOn:{click:function(t){return function(){e.confirmRemove=!0,e.options.tippy().hide()}.apply(null,arguments)}}})],1)])],1)],1)]),e._v(" "),e.showChildren||e.isFiltered?n("div",{staticClass:"flex"},[n("div",{staticClass:"bg-dividerLight cursor-nsResize flex ml-5.5 transform transition w-1 hover:bg-dividerDark hover:scale-x-125",on:{click:function(t){return e.toggleShowChildren()}}}),e._v(" "),n("div",{staticClass:"flex flex-col flex-1 truncate"},[e._l(e.collection.folders,(function(t,i){return n("CollectionsGraphqlFolder",{key:"folder-"+String(i),attrs:{picked:e.picked,"saving-mode":e.savingMode,folder:t,"folder-index":i,"folder-path":e.collectionIndex+"/"+String(i),"collection-index":e.collectionIndex,doc:e.doc,"is-filtered":e.isFiltered},on:{"add-request":function(t){return e.$emit("add-request",t)},"add-folder":function(t){return e.$emit("add-folder",t)},"edit-folder":function(t){return e.$emit("edit-folder",t)},"edit-request":function(t){return e.$emit("edit-request",t)},"duplicate-request":function(t){return e.$emit("duplicate-request",t)},select:function(t){return e.$emit("select",t)}}})})),e._v(" "),e._l(e.collection.requests,(function(t,i){return n("CollectionsGraphqlRequest",{key:"request-"+String(i),attrs:{picked:e.picked,"saving-mode":e.savingMode,request:t,"collection-index":e.collectionIndex,"folder-index":-1,"folder-name":e.collection.name,"folder-path":""+e.collectionIndex,"request-index":i,doc:e.doc},on:{"edit-request":function(t){return e.$emit("edit-request",t)},"duplicate-request":function(t){return e.$emit("duplicate-request",t)},select:function(t){return e.$emit("select",t)}}})})),e._v(" "),0===e.collection.folders.length&&0===e.collection.requests.length?n("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[n("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 mb-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/pack.svg",loading:"lazy",alt:""+e.$t("empty.collection")}}),e._v(" "),n("span",{staticClass:"text-center"},[e._v("\n          "+e._s(e.$t("empty.collection"))+"\n        ")])]):e._e()],2)]):e._e(),e._v(" "),n("SmartConfirmModal",{attrs:{show:e.confirmRemove,title:""+e.$t("confirm.remove_collection")},on:{"hide-modal":function(t){e.confirmRemove=!1},resolve:e.removeCollection}})],1)}),[],!1,null,null,null);t.default=r.exports;installComponents(r,{SmartIcon:n(117).default,ButtonSecondary:n(108).default,SmartItem:n(148).default,CollectionsGraphqlFolder:n(1041).default,CollectionsGraphqlRequest:n(1038).default,SmartConfirmModal:n(513).default})}}]);