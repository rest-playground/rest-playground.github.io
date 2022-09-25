(window.webpackJsonp=window.webpackJsonp||[]).push([[33,110,113,114],{1072:function(e,t,a){"use strict";a.r(t);a(36),a(43);var n=a(3),l=Object(n.c)({data:()=>({observer:null}),mounted(){this.observer=new IntersectionObserver((e=>{var[t]=e;t&&t.isIntersecting&&this.$emit("intersecting",t)})),this.observer.observe(this.$refs.container)},beforeDestroy(){var e;null===(e=this.observer)||void 0===e||e.disconnect()}}),r=a(17),i=Object(r.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{ref:"container"},[e._t("default")],2)}),[],!1,null,null,null);t.default=i.exports},1233:function(e,t,a){"use strict";a.r(t);var n=a(3),l=a(15),r=a(325),i=a(326),o=a(18),c=a(256),s={};s.props={doc:{key:"doc",required:!0,type:Boolean},show:{key:"show",required:!0,type:Boolean},collectionsType:{key:"collectionsType",required:!0,type:Object}},s.setup=(e,t)=>{var a=Object(n.o)("my-collections"),s=t.emit,d=Object(o.g)(r.a,null),u=new i.a(!0),b=Object(o.g)(u.teamList$,null),v=Object(c.c)("REMEMBERED_TEAM_ID"),f=!1;Object(n.z)(b,(e=>{if(e&&!f&&(f=!0,v.value&&d)){var t=e.find((e=>e.id===v.value));t&&m(t)}})),Object(l.j)((()=>{u.initialize()}));var p=Object(n.o)(null),m=e=>{v.value=null==e?void 0:e.id,s("update-selected-team",e)};return Object(n.z)(a,(e=>{s("update-collection-type",e)})),{selectedCollectionTab:a,currentUser:d,myTeams:b,onTeamSelectIntersect:()=>{u.fetchList()},options:p,updateSelectedTeam:m}};var d=s,u=a(17),b=Object(u.a)(d,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[a("SmartTabs",{attrs:{id:"collections_tab","render-inactive-tabs":""},model:{value:e.selectedCollectionTab,callback:function(t){e.selectedCollectionTab=t},expression:"selectedCollectionTab"}},[a("SmartTab",{attrs:{id:"my-collections",label:""+e.$t("collection.my_collections")}}),e._v(" "),e.currentUser&&!e.doc?a("SmartTab",{attrs:{id:"team-collections",label:""+e.$t("collection.team_collections")}},[a("SmartIntersection",{on:{intersecting:e.onTeamSelectIntersect}},[a("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:"",placement:"bottom"},scopedSlots:e._u([{key:"trigger",fn:function(){return[a("span",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"bg-transparent border-t border-dividerLight select-wrapper",attrs:{title:""+e.$t("collection.select_team")}},[e.collectionsType.selectedTeam?a("ButtonSecondary",{staticClass:"flex-1 !justify-start pr-8 rounded-none",attrs:{svg:"users",label:e.collectionsType.selectedTeam.name}}):a("ButtonSecondary",{staticClass:"flex-1 !justify-start pr-8 rounded-none",attrs:{label:""+e.$t("collection.select_team")}})],1)]},proxy:!0}],null,!1,3305228278)},[e._v(" "),a("div",{staticClass:"flex flex-col",attrs:{role:"menu"}},e._l(e.myTeams,(function(t,n){var l,r;return a("SmartItem",{key:"team-"+n,attrs:{label:t.name,"info-icon":t.id===(null===(l=e.collectionsType.selectedTeam)||void 0===l?void 0:l.id)?"done":"","active-info-icon":t.id===(null===(r=e.collectionsType.selectedTeam)||void 0===r?void 0:r.id),svg:"users"},nativeOn:{click:function(a){return function(){e.updateSelectedTeam(t),e.options.tippy().hide()}.apply(null,arguments)}}})})),1)])],1)],1):e._e()],1)],1)}),[],!1,null,null,null);t.default=b.exports;installComponents(b,{SmartTab:a(896).default,ButtonSecondary:a(88).default,SmartItem:a(122).default,SmartIntersection:a(1072).default,SmartTabs:a(897).default})},871:function(e,t,a){var n=a(926);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(97).default)("4820eb94",n,!0,{sourceMap:!1})},879:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=e=>{throw new Error(e)}},896:function(e,t,a){"use strict";a.r(t);var n=a(3),l={};l.props={label:{type:String,default:null},info:{type:String,default:null},indicator:{type:Boolean,default:!1},icon:{type:String,default:null},id:{type:String,default:null,required:!0},selected:{type:Boolean,default:!1}},l.setup=(e,t)=>{var a=e,l=Object(n.a)((()=>({icon:a.icon,indicator:a.indicator,info:a.info,label:a.label}))),{activeTabID:r,renderInactive:i,addTabEntry:o,updateTabEntry:c,removeTabEntry:s}=Object(n.e)("tabs-system"),d=Object(n.a)((()=>r.value===a.id)),u=Object(n.a)((()=>!!i.value||d.value));return Object(n.j)((()=>{o(a.id,l.value)})),Object(n.z)(l,(e=>{c(a.id,e)})),Object(n.i)((()=>{s(a.id)})),{active:d,shouldRender:u}};var r=l,i=a(17),o=Object(i.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.shouldRender?a("div",{directives:[{name:"show",rawName:"v-show",value:e.active,expression:"active"}],staticClass:"flex flex-col flex-1"},[e._t("default")],2):e._e()}),[],!1,null,null,null);t.default=o.exports},897:function(e,t,a){"use strict";a.r(t);a(36),a(43);var n=a(1),l=a(173),r=a(71),i=a(45),o=a(3),c=a(879),s={};s.props={styles:{type:String,default:""},renderInactiveTabs:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},value:{type:String,required:!0}},s.setup=(e,t)=>{var a=e,s=t.emit,d=Object(o.o)([]);Object(o.l)("tabs-system",{renderInactive:Object(o.a)((()=>a.renderInactiveTabs)),activeTabID:Object(o.a)((()=>a.value)),addTabEntry:(e,t)=>{d.value=Object(n.pipe)(d.value,i.fromPredicate(Object(l.not)(r.exists((t=>{var[a]=t;return a===e})))),i.map(r.append([e,t])),i.getOrElseW((()=>Object(c.a)("Tab with duplicate ID created: '".concat(e,"'")))))},updateTabEntry:(e,t)=>{d.value=Object(n.pipe)(d.value,r.findIndex((t=>{var[a]=t;return a===e})),i.chain((a=>Object(n.pipe)(d.value,r.updateAt(a,[e,t])))),i.getOrElseW((()=>Object(c.a)("Failed to update tab entry: ".concat(e)))))},removeTabEntry:e=>{d.value=Object(n.pipe)(d.value,r.findIndex((t=>{var[a]=t;return a===e})),i.chain((e=>Object(n.pipe)(d.value,r.deleteAt(e)))),i.getOrElseW((()=>Object(c.a)("Failed to remove tab entry: ".concat(e))))),a.value===e&&d.value.length>0&&u(d.value[0][0])}});var u=e=>{s("input",e)};return{tabEntries:d,selectTab:u}};var d=s,u=(a(925),a(17)),b=Object(u.a)(d,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-1 h-full flex-nowrap",class:{"flex-col h-auto":!e.vertical}},[a("div",{staticClass:"relative tabs hide-scrollbar",class:[{"border-r border-dividerLight":e.vertical},e.styles]},[a("div",{staticClass:"flex flex-1"},[a("div",{staticClass:"flex justify-between flex-1",class:{"flex-col":e.vertical}},[a("div",{staticClass:"flex",class:{"flex-col space-y-2 p-2":e.vertical}},e._l(e.tabEntries,(function(t,n){var l=t[0],r=t[1];return a("button",{key:"tab-"+n,staticClass:"tab",class:[{active:e.value===l},{vertical:e.vertical}],attrs:{"aria-label":r.label||"",role:"button"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectTab(l)},click:function(t){return e.selectTab(l)}}},[r.icon?a("SmartIcon",{staticClass:"svg-icons",attrs:{name:r.icon}}):e._e(),e._v(" "),e.vertical&&r.label?a("tippy",{attrs:{placement:"left",theme:"tooltip",content:r.label}}):r.label?a("span",[e._v(e._s(r.label))]):e._e(),e._v(" "),r.info&&"null"!==r.info?a("span",{staticClass:"tab-info"},[e._v("\n              "+e._s(r.info)+"\n            ")]):e._e(),e._v(" "),r.indicator?a("span",{staticClass:"w-1 h-1 ml-2 rounded-full bg-accentLight"}):e._e()],1)})),0),e._v(" "),a("div",{staticClass:"flex items-center justify-center"},[e._t("actions")],2)])])]),e._v(" "),a("div",{staticClass:"w-full h-full contents",class:{"!flex flex-col flex-1 overflow-y-auto hide-scrollbar":e.vertical}},[e._t("default")],2)])}),[],!1,null,"e717ed90",null);t.default=b.exports;installComponents(b,{SmartIcon:a(94).default})},925:function(e,t,a){"use strict";a(871)},926:function(e,t,a){var n=a(96)(!1);n.push([e.i,'.tabs[data-v-e717ed90] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  white-space: nowrap;\n  overflow: auto;\n  -ms-flex-negative: 0;\n  -webkit-flex-shrink: 0;\n  flex-shrink: 0;\n}\n.tabs .tab[data-v-e717ed90] {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -ms-flex-negative: 0;\n  -webkit-flex-shrink: 0;\n  flex-shrink: 0;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  color: var(--secondary-color);\n  font-weight: 600;\n  cursor: pointer;\n}\n.tabs .tab[data-v-e717ed90]:hover {\n  color: var(--secondary-dark-color);\n}\n.tabs .tab[data-v-e717ed90]:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.tabs .tab[data-v-e717ed90]:focus-visible {\n  color: var(--secondary-dark-color);\n}\n.tabs .tab .tab-info[data-v-e717ed90] {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  width: 1.25rem;\n  height: 1rem;\n  margin-left: 0.5rem;\n  font-size: 8px;\n  line-height: 1;\n  border-color: var(--divider-color);\n  border-width: 1px;\n  border-radius: 0.25rem;\n  color: var(--secondary-light-color);\n}\n.tabs .tab[data-v-e717ed90]::after {\n  position: absolute;\n  left: 1rem;\n  right: 1rem;\n  bottom: 0px;\n  background-color: transparent;\n  z-index: 2;\n  height: 0.125rem;\n  content: "";\n}\n.tabs .tab[data-v-e717ed90]:focus::after {\n  background-color: var(--divider-color);\n}\n.tabs .tab.active[data-v-e717ed90] {\n  color: var(--secondary-dark-color);\n}\n.tabs .tab.active .tab-info[data-v-e717ed90] {\n  color: var(--secondary-color);\n  border-color: var(--divider-dark-color);\n}\n.tabs .tab.active[data-v-e717ed90]::after {\n  background-color: var(--accent-color);\n}\n.tabs .tab.vertical[data-v-e717ed90] {\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n}\n.tabs .tab.vertical[data-v-e717ed90]:focus::after {\n  display: none;\n}\n.tabs .tab.vertical.active[data-v-e717ed90] {\n  color: var(--accent-color);\n}\n.tabs .tab.vertical.active .tab-info[data-v-e717ed90] {\n  color: var(--secondary-color);\n  border-color: var(--divider-dark-color);\n}\n.tabs .tab.vertical.active[data-v-e717ed90]::after {\n  display: none;\n}',""]),e.exports=n}}]);