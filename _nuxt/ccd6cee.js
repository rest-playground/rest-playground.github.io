(window.webpackJsonp=window.webpackJsonp||[]).push([[154,112,113],{1009:function(e,t,n){"use strict";n(954)},1010:function(e,t,n){var a=n(120)(!1);a.push([e.i,'.tabs[data-v-e717ed90] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  white-space: nowrap;\n  overflow: auto;\n  -ms-flex-negative: 0;\n  -webkit-flex-shrink: 0;\n  flex-shrink: 0;\n}\n.tabs .tab[data-v-e717ed90] {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -ms-flex-negative: 0;\n  -webkit-flex-shrink: 0;\n  flex-shrink: 0;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  color: var(--secondary-color);\n  font-weight: 600;\n  cursor: pointer;\n}\n.tabs .tab[data-v-e717ed90]:hover {\n  color: var(--secondary-dark-color);\n}\n.tabs .tab[data-v-e717ed90]:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.tabs .tab[data-v-e717ed90]:focus-visible {\n  color: var(--secondary-dark-color);\n}\n.tabs .tab .tab-info[data-v-e717ed90] {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  width: 1.25rem;\n  height: 1rem;\n  margin-left: 0.5rem;\n  font-size: 8px;\n  line-height: 1;\n  border-color: var(--divider-color);\n  border-width: 1px;\n  border-radius: 0.25rem;\n  color: var(--secondary-light-color);\n}\n.tabs .tab[data-v-e717ed90]::after {\n  position: absolute;\n  left: 1rem;\n  right: 1rem;\n  bottom: 0px;\n  background-color: transparent;\n  z-index: 2;\n  height: 0.125rem;\n  content: "";\n}\n.tabs .tab[data-v-e717ed90]:focus::after {\n  background-color: var(--divider-color);\n}\n.tabs .tab.active[data-v-e717ed90] {\n  color: var(--secondary-dark-color);\n}\n.tabs .tab.active .tab-info[data-v-e717ed90] {\n  color: var(--secondary-color);\n  border-color: var(--divider-dark-color);\n}\n.tabs .tab.active[data-v-e717ed90]::after {\n  background-color: var(--accent-color);\n}\n.tabs .tab.vertical[data-v-e717ed90] {\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n}\n.tabs .tab.vertical[data-v-e717ed90]:focus::after {\n  display: none;\n}\n.tabs .tab.vertical.active[data-v-e717ed90] {\n  color: var(--accent-color);\n}\n.tabs .tab.vertical.active .tab-info[data-v-e717ed90] {\n  color: var(--secondary-color);\n  border-color: var(--divider-dark-color);\n}\n.tabs .tab.vertical.active[data-v-e717ed90]::after {\n  display: none;\n}',""]),e.exports=a},2444:function(e,t,n){"use strict";n.r(t);n(386),n(60),n(161),n(149),n(137),n(4);var a=n(3),r=n(26),i={setup:function(e,t){var n=Object(r.d)(),i=Object(r.e)(),l=i.localePath,c=i.getRouteBaseName,o=Object(a.x)(),s=Object(a.w)(),d=[{target:"websocket",title:n("tab.websocket")},{target:"sse",title:n("tab.sse")},{target:"socketio",title:n("tab.socketio")},{target:"mqtt",title:n("tab.mqtt")}],u=Object(a.o)("websocket");return Object(a.z)(u,(function(e){o.push(l("/realtime/".concat(e)))})),Object(a.z)(s,(function(e){var t,n=c(e);if(n.endsWith("realtime"))o.replace(l("/realtime/websocket"));else{var a=n.split("realtime-")[1],r=null===(t=d.find((function(e){return e.target===a})))||void 0===t?void 0:t.target;r&&(u.value=r)}}),{immediate:!0}),{REALTIME_NAVIGATION:d,currentTab:u}}},l=i,c=n(23),o=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("SmartTabs",{model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}},e._l(e.REALTIME_NAVIGATION,(function(e){var t=e.target,a=e.title;return n("SmartTab",{key:t,attrs:{id:t,label:a}},[n("NuxtChild")],1)})),1)}),[],!1,null,null,null);t.default=o.exports;installComponents(o,{SmartTab:n(979).default,SmartTabs:n(980).default})},954:function(e,t,n){var a=n(1010);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(121).default)("4820eb94",a,!0,{sourceMap:!1})},962:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){throw new Error(e)}},979:function(e,t,n){"use strict";n.r(t);var a=n(3),r={};r.props={label:{type:String,default:null},info:{type:String,default:null},indicator:{type:Boolean,default:!1},icon:{type:String,default:null},id:{type:String,default:null,required:!0},selected:{type:Boolean,default:!1}},r.setup=function(e,t){var n=e,r=Object(a.a)((function(){return{icon:n.icon,indicator:n.indicator,info:n.info,label:n.label}})),i=Object(a.e)("tabs-system"),l=i.activeTabID,c=i.renderInactive,o=i.addTabEntry,s=i.updateTabEntry,d=i.removeTabEntry,u=Object(a.a)((function(){return l.value===n.id})),b=Object(a.a)((function(){return!!c.value||u.value}));return Object(a.j)((function(){o(n.id,r.value)})),Object(a.z)(r,(function(e){s(n.id,e)})),Object(a.i)((function(){d(n.id)})),{active:u,shouldRender:b}};var i=r,l=n(23),c=Object(l.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.shouldRender?n("div",{directives:[{name:"show",rawName:"v-show",value:e.active,expression:"active"}],staticClass:"flex flex-col flex-1"},[e._t("default")],2):e._e()}),[],!1,null,null,null);t.default=c.exports},980:function(e,t,n){"use strict";n.r(t);var a=n(53),r=n(1),i=n(207),l=n(87),c=n(52),o=n(3),s=n(962),d={};d.props={styles:{type:String,default:""},renderInactiveTabs:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},value:{type:String,required:!0}},d.setup=function(e,t){var n=e,d=t.emit,u=Object(o.o)([]);Object(o.l)("tabs-system",{renderInactive:Object(o.a)((function(){return n.renderInactiveTabs})),activeTabID:Object(o.a)((function(){return n.value})),addTabEntry:function(e,t){u.value=Object(r.pipe)(u.value,c.fromPredicate(Object(i.not)(l.exists((function(t){return Object(a.a)(t,1)[0]===e})))),c.map(l.append([e,t])),c.getOrElseW((function(){return Object(s.a)("Tab with duplicate ID created: '".concat(e,"'"))})))},updateTabEntry:function(e,t){u.value=Object(r.pipe)(u.value,l.findIndex((function(t){return Object(a.a)(t,1)[0]===e})),c.chain((function(n){return Object(r.pipe)(u.value,l.updateAt(n,[e,t]))})),c.getOrElseW((function(){return Object(s.a)("Failed to update tab entry: ".concat(e))})))},removeTabEntry:function(e){u.value=Object(r.pipe)(u.value,l.findIndex((function(t){return Object(a.a)(t,1)[0]===e})),c.chain((function(e){return Object(r.pipe)(u.value,l.deleteAt(e))})),c.getOrElseW((function(){return Object(s.a)("Failed to remove tab entry: ".concat(e))}))),n.value===e&&u.value.length>0&&b(u.value[0][0])}});var b=function(e){d("input",e)};return{tabEntries:u,selectTab:b}};var u=d,b=(n(1009),n(23)),f=Object(b.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-1 h-full flex-nowrap",class:{"flex-col h-auto":!e.vertical}},[n("div",{staticClass:"relative tabs hide-scrollbar",class:[{"border-r border-dividerLight":e.vertical},e.styles]},[n("div",{staticClass:"flex flex-1"},[n("div",{staticClass:"flex justify-between flex-1",class:{"flex-col":e.vertical}},[n("div",{staticClass:"flex",class:{"flex-col space-y-2 p-2":e.vertical}},e._l(e.tabEntries,(function(t,a){var r=t[0],i=t[1];return n("button",{key:"tab-"+a,staticClass:"tab",class:[{active:e.value===r},{vertical:e.vertical}],attrs:{"aria-label":i.label||"",role:"button"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectTab(r)},click:function(t){return e.selectTab(r)}}},[i.icon?n("SmartIcon",{staticClass:"svg-icons",attrs:{name:i.icon}}):e._e(),e._v(" "),e.vertical&&i.label?n("tippy",{attrs:{placement:"left",theme:"tooltip",content:i.label}}):i.label?n("span",[e._v(e._s(i.label))]):e._e(),e._v(" "),i.info&&"null"!==i.info?n("span",{staticClass:"tab-info"},[e._v("\n              "+e._s(i.info)+"\n            ")]):e._e(),e._v(" "),i.indicator?n("span",{staticClass:"w-1 h-1 ml-2 rounded-full bg-accentLight"}):e._e()],1)})),0),e._v(" "),n("div",{staticClass:"flex items-center justify-center"},[e._t("actions")],2)])])]),e._v(" "),n("div",{staticClass:"w-full h-full contents",class:{"!flex flex-col flex-1 overflow-y-auto hide-scrollbar":e.vertical}},[e._t("default")],2)])}),[],!1,null,"e717ed90",null);t.default=f.exports;installComponents(f,{SmartIcon:n(117).default})}}]);