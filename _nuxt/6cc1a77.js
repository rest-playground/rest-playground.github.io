(window.webpackJsonp=window.webpackJsonp||[]).push([[53,10,105],{1039:function(e,t,r){"use strict";var o=r(24),n=r(27),a=r(43),l=r(36),c=r(111),i=r(58),d=r(308),u=r(80),s=r(162),v=r(309),m=r(522),p=r(62),f=r(106),b=p("replace"),g=RegExp.prototype,y=n.TypeError,h=l(v),k=l("".indexOf),O=l("".replace),x=l("".slice),j=Math.max,C=function(e,t,r){return r>e.length?-1:""===t?r:k(e,t,r)};o({target:"String",proto:!0},{replaceAll:function(e,t){var r,o,n,l,v,p,w,E,_,S=c(this),B=0,I=0,L="";if(null!=e){if((r=d(e))&&(o=u(c("flags"in g?e.flags:h(e))),!~k(o,"g")))throw y("`.replaceAll` does not allow non-global regexes");if(n=s(e,b))return a(n,e,S,t);if(f&&r)return O(u(S),e,t)}for(l=u(S),v=u(e),(p=i(t))||(t=u(t)),w=v.length,E=j(1,w),B=C(l,v,0);-1!==B;)_=p?u(t(v,B,l)):m(v,l,B,[],void 0,t),L+=x(l,I,B)+_,I=B+w,B=C(l,v,B+E);return I<l.length&&(L+=x(l,I)),L}})},2051:function(e,t,r){"use strict";r.r(t);r(10),r(8),r(9),r(4),r(14),r(7),r(13);var o=r(34),n=r(40),a=(r(369),r(64),r(11),r(57),r(182),r(241)),l=r.n(a),c=r(3),i=r(16),d=r(87),u=r(52),s=r(1),v=r(74),m=r(12),p=r(105),f=r(26);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y={};y.props={show:{key:"show",required:!1,type:Boolean,default:!1},action:{key:"action",required:!1,type:String,default:"edit"},editingEnvironmentIndex:{key:"editingEnvironmentIndex",required:!1,type:[Number,String,null],default:null},envVars:{key:"envVars",required:!1,type:Function,default:function(){return[]}}},y.setup=function(e,t){var r=Object(f.d)(),o=Object(f.j)(),a=e,b=t.emit,y=Object(c.o)(0),h=Object(c.o)(null),k=Object(c.o)([{id:y.value++,env:{key:"",value:""}}]),O=Object(m.refAutoReset)("trash-2",1e3),x=Object(f.g)(p.m,[]),j=Object(c.a)((function(){return"Global"===a.editingEnvironmentIndex?{name:"Global",variables:Object(p.l)()}:"new"===a.action?{name:"",variables:a.envVars()}:null!==a.editingEnvironmentIndex?Object(p.k)(a.editingEnvironmentIndex):null})),C=Object(f.g)(p.g,[])||a.envVars(),w=Object(c.a)((function(){var e=Object(s.pipe)(k.value,d.map((function(e){return e.env})));return Object(s.pipe)(e,d.exists((function(t){var r=t.value;return i.isLeft(Object(v.parseTemplateStringE)(r,e))})))})),E=Object(c.a)((function(){return w?[]:"Global"===a.editingEnvironmentIndex?Object(n.a)(k.value.map((function(e){return g(g({},e),{},{source:h.value})}))):[].concat(Object(n.a)(k.value.map((function(e){return g(g({},e),{},{source:h.value})}))),Object(n.a)(x.value.map((function(e){return g(g({},e),{},{source:"Global"})}))))}));Object(c.z)((function(){return a.show}),(function(e){var t,r,o,n;e&&(h.value=null!==(r=null===(t=j.value)||void 0===t?void 0:t.name)&&void 0!==r?r:null,k.value=Object(s.pipe)(null!==(n=null===(o=j.value)||void 0===o?void 0:o.variables)&&void 0!==n?n:[],d.map((function(e){return{id:y.value++,env:l()(e)}}))))}));var _=function(){h.value=null,b("hide-modal")};return{t:r,name:h,vars:k,clearIcon:O,evnExpandError:w,liveEnvs:E,clearContent:function(){k.value=[{id:y.value++,env:{key:"",value:""}}],O.value="check",o.success("".concat(r("state.cleared")))},addEnvironmentVariable:function(){k.value.push({id:y.value++,env:{key:"",value:""}})},removeEnvironmentVariable:function(e){k.value.splice(e,1)},saveEnvironment:function(){if(h.value){var e=Object(s.pipe)(k.value,d.filterMap(Object(s.flow)(u.fromPredicate((function(e){return""!==e.env.key})),u.map((function(e){return e.env}))))),t={name:h.value,variables:e};"new"===a.action?(Object(p.d)(h.value),Object(p.s)(C.value.length-1,t),Object(p.p)(C.value.length-1),o.success("".concat(r("environment.created")))):"Global"===a.editingEnvironmentIndex?(Object(p.r)(t.variables),o.success("".concat(r("environment.updated")))):null!==a.editingEnvironmentIndex&&(Object(p.s)(a.editingEnvironmentIndex,t),o.success("".concat(r("environment.updated")))),_()}else o.error("".concat(r("environment.invalid_name")))},hideModal:_}};var h=y,k=r(23),O=Object(k.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.show?r("SmartModal",{attrs:{dialog:"",title:e.t("environment."+e.action)},on:{close:e.hideModal},scopedSlots:e._u([{key:"body",fn:function(){return[r("div",{staticClass:"flex flex-col px-2"},[r("div",{staticClass:"relative flex"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelEnvEdit",placeholder:" ",type:"text",autocomplete:"off",disabled:"Global"===e.editingEnvironmentIndex},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveEnvironment.apply(null,arguments)},input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),r("label",{attrs:{for:"selectLabelEnvEdit"}},[e._v("\n          "+e._s(e.t("action.label"))+"\n        ")])]),e._v(" "),r("div",{staticClass:"flex items-center justify-between flex-1"},[r("label",{staticClass:"p-4",attrs:{for:"variableList"}},[e._v("\n          "+e._s(e.t("environment.variable_list"))+"\n        ")]),e._v(" "),r("div",{staticClass:"flex"},[r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.clear_all"),svg:e.clearIcon},nativeOn:{click:function(t){return e.clearContent()}}}),e._v(" "),r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{svg:"plus",title:e.t("add.new")},nativeOn:{click:function(t){return e.addEnvironmentVariable.apply(null,arguments)}}})],1)]),e._v(" "),e.evnExpandError?r("div",{staticClass:"w-full px-4 py-2 mb-2 overflow-auto font-mono text-red-400 whitespace-normal rounded bg-primaryLight"},[e._v("\n        "+e._s(e.t("environment.nested_overflow"))+"\n      ")]):e._e(),e._v(" "),r("div",{staticClass:"border rounded divide-y divide-dividerLight border-divider"},[e._l(e.vars,(function(t,o){var n=t.id,a=t.env;return r("div",{key:"variable-"+n+"-"+o,staticClass:"flex divide-x divide-dividerLight"},[r("input",{directives:[{name:"model",rawName:"v-model",value:a.key,expression:"env.key"}],staticClass:"flex flex-1 px-4 py-2 bg-transparent",attrs:{placeholder:""+e.t("count.variable",{count:o+1}),name:"param"+o},domProps:{value:a.key},on:{input:function(t){t.target.composing||e.$set(a,"key",t.target.value)}}}),e._v(" "),r("SmartEnvInput",{attrs:{placeholder:""+e.t("count.value",{count:o+1}),envs:e.liveEnvs,name:"value"+o},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"env.value"}}),e._v(" "),r("div",{staticClass:"flex"},[r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{id:"variable",title:e.t("action.remove"),svg:"trash",color:"red"},nativeOn:{click:function(t){return e.removeEnvironmentVariable(o)}}})],1)],1)})),e._v(" "),0===e.vars.length?r("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[r("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/blockchain.svg",loading:"lazy",alt:""+e.t("empty.environments")}}),e._v(" "),r("span",{staticClass:"pb-4 text-center"},[e._v("\n            "+e._s(e.t("empty.environments"))+"\n          ")]),e._v(" "),r("ButtonSecondary",{staticClass:"mb-4",attrs:{label:""+e.t("add.new"),filled:""},nativeOn:{click:function(t){return e.addEnvironmentVariable.apply(null,arguments)}}})],1):e._e()],2)])]},proxy:!0},{key:"footer",fn:function(){return[r("span",[r("ButtonPrimary",{attrs:{label:""+e.t("action.save")},nativeOn:{click:function(t){return e.saveEnvironment.apply(null,arguments)}}}),e._v(" "),r("ButtonSecondary",{attrs:{label:""+e.t("action.cancel")},nativeOn:{click:function(t){return e.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,1975024075)}):e._e()}),[],!1,null,null,null);t.default=O.exports;installComponents(O,{ButtonSecondary:r(108).default,SmartEnvInput:r(963).default,ButtonPrimary:r(176).default,SmartModal:r(116).default})},941:function(e,t,r){"use strict";r.d(t,"b",(function(){return h})),r.d(t,"d",(function(){return k})),r.d(t,"a",(function(){return j})),r.d(t,"c",(function(){return C}));var o=r(40),n=(r(57),r(1047),r(11),r(916)),a=r(955),l=r(1048),c=r(915),i=r(966),d=r(929),u=r(1041),s=r(959),v=r(1043),m=r(1049),p=r(1051),f=r(958),b=r(1052),g=r(1050),y=r(960),h=n.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)",top:"var(--lower-tertiary-sticky-fold) !important","z-index":"10"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-tooltip-arrow:after":{borderColor:"transparent !important"},".cm-tooltip-arrow:before":{borderColor:"transparent !important"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"0.5em",paddingRight:"0.5em"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),k=n.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-sans)",color:"var(--secondary-dark-color)",backgroundColor:"transparent"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-tooltip-arrow:after":{borderColor:"transparent !important"},".cm-tooltip-arrow:before":{borderColor:"transparent !important"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.2rem",paddingBottom:"0.2rem"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),O="var(--editor-name-color)",x="var(--editor-constant-color)",j=a.a.define([{tag:a.d.keyword,color:"var(--editor-keyword-color)"},{tag:[a.d.name,a.d.deleted,a.d.character,a.d.propertyName,a.d.macroName],color:O},{tag:[a.d.function(a.d.variableName),a.d.labelName],color:"var(--editor-variable-color)"},{tag:[a.d.color,a.d.constant(a.d.name),a.d.standard(a.d.name)],color:x},{tag:[a.d.definition(a.d.name),a.d.separator],color:"var(--editor-separator-color)"},{tag:[a.d.typeName,a.d.className,a.d.number,a.d.changed,a.d.annotation,a.d.modifier,a.d.self,a.d.namespace],color:"var(--editor-type-color)"},{tag:[a.d.operator,a.d.operatorKeyword,a.d.url,a.d.escape,a.d.regexp,a.d.link,a.d.special(a.d.string)],color:"var(--editor-operator-color)"},{tag:[a.d.meta,a.d.comment],color:"var(--editor-meta-color)"},{tag:a.d.strong,fontWeight:"bold"},{tag:a.d.emphasis,fontStyle:"italic"},{tag:a.d.strikethrough,textDecoration:"line-through"},{tag:a.d.link,color:"var(--editor-link-color)",textDecoration:"underline"},{tag:a.d.heading,fontWeight:"bold",color:O},{tag:[a.d.atom,a.d.bool,a.d.special(a.d.variableName)],color:x},{tag:[a.d.processingInstruction,a.d.string,a.d.inserted],color:"var(--editor-process-color)"},{tag:a.d.invalid,color:"var(--editor-invalid-color)"}]),C=[Object(u.d)(),Object(u.c)(),Object(n.l)(),Object(i.a)(),Object(l.a)({openText:"▾",closedText:"▸"}),Object(n.i)(),Object(n.j)(),c.g.allowMultipleSelections.of(!0),Object(d.p)(),a.b.fallback,Object(v.a)(),Object(m.a)(),Object(f.a)(),Object(g.b)(),Object(g.a)(),Object(n.k)(),Object(p.a)(),n.m.of([].concat(Object(o.a)(m.b),Object(o.a)(s.a),Object(o.a)(p.c),Object(o.a)(i.b),Object(o.a)(l.b),Object(o.a)(b.a),Object(o.a)(f.c),Object(o.a)(y.a))),Object(p.b)({top:!0})]},942:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return g}));var o=r(109),n=r(110),a=(r(60),r(88),r(137),r(4),r(3)),l=r(915),c=r(961),i=r(916),d=r(16),u=r(74),s=r(105),v=/(<<[a-zA-Z0-9-_]+>>)/g,m=function(e){return Object(c.b)((function(t,r,o){for(var n,a,l,c,i=t.state.doc.lineAt(r),s=i.from,m=i.to,p=i.text,f=r,b=r;f>s&&/[a-zA-Z0-9-_]+/.test(p[f-s-1]);)f--;for(;b<m&&/[a-zA-Z0-9-_]+/.test(p[b-s]);)b++;if(f===r&&o<0||b===r&&o>0||!v.test(p.slice(f-s-2,b-s+2)))return null;var g=null!==(a=null===(n=e.find((function(e){return e.key===p.slice(f-s,b-s)})))||void 0===n?void 0:n.sourceEnv)&&void 0!==a?a:"choose an environment",y=null!==(c=null===(l=e.find((function(e){return e.key===p.slice(f-s,b-s)})))||void 0===l?void 0:l.value)&&void 0!==c?c:"not found",h=Object(u.parseTemplateStringE)(y,e),k=d.isLeft(h)?"error":h.right;return{pos:f,end:m,above:!0,arrow:!0,create:function(){var e=document.createElement("span"),t=document.createElement("xmp");return t.textContent=k,e.appendChild(document.createTextNode("".concat(g," "))),e.appendChild(t),e.className="tooltip-theme",{dom:e}}}}),{hoverTime:1})};var p=function(e){return new i.e({regexp:v,decoration:function(t){return function(e,t){var r=t.find((function(t){return t.key===e.slice(2,-2)}))?"bg-accentDark text-accentContrast hover:bg-accent":"bg-red-500 text-accentContrast hover:bg-red-600";return i.b.mark({class:"".concat("cursor-help transition rounded px-1 focus:outline-none mx-0.5 env-highlight"," ").concat(r)})}(t[0],e)}})},f=function(e){var t=p(e);return i.g.define((function(e){return{decorations:t.createDeco(e),update:function(e){this.decorations=t.updateDeco(e,this.decorations)}}}),{decorations:function(e){return e.decorations}})},b=function(){function e(t,r){var n=this;Object(o.a)(this,e),this.editorView=r,this.compartment=new l.e,this.envs=[],this.envs=Object(s.i)(),t(s.b,(function(e){var t;n.envs=e,null===(t=n.editorView.value)||void 0===t||t.dispatch({effects:n.compartment.reconfigure([m(n.envs),f(n.envs)])})}))}return Object(n.a)(e,[{key:"extension",get:function(){return this.compartment.of([m(this.envs),f(this.envs)])}}]),e}(),g=function(){function e(t,r){var n=this;Object(o.a)(this,e),this.editorView=r,this.compartment=new l.e,this.envs=[],Object(a.z)(t,(function(e){var t;n.envs=e,null===(t=n.editorView.value)||void 0===t||t.dispatch({effects:n.compartment.reconfigure([m(n.envs),f(n.envs)])})}),{immediate:!0})}return Object(n.a)(e,[{key:"extension",get:function(){return this.compartment.of([m(this.envs),f(this.envs)])}}]),e}()},963:function(e,t,r){"use strict";r.r(t);var o=r(40),n=r(109),a=r(110),l=(r(60),r(161),r(984),r(177),r(1006),r(64),r(137),r(4),r(3)),c=r(916),i=r(915),d=r(241),u=r.n(d),s=r(961),v=r(966),m=r(941),p=r(942),f=r(26),b=r(105),g={};g.props={value:{key:"value",required:!1,type:String,default:""},placeholder:{key:"placeholder",required:!1,type:String,default:""},styles:{key:"styles",required:!1,type:String,default:""},envs:{key:"envs",required:!1,type:[Array,null],default:null},focus:{key:"focus",required:!1,type:Boolean,default:!1},readonly:{key:"readonly",required:!1,type:Boolean,default:!1}},g.setup=function(e,t){var r=e,d=t.emit,g=Object(l.o)(r.value),y=Object(l.o)(),h=Object(l.o)(null);Object(l.z)((function(){return r.value}),(function(e){var t,r,o=e.replaceAll("\n",""),n=null===(t=y.value)||void 0===t?void 0:t.state.doc.toJSON().join(y.value.state.lineBreak);g.value===o&&e===n||(g.value=o,null===(r=y.value)||void 0===r||r.dispatch({filter:!1,changes:{from:0,to:y.value.state.doc.length,insert:o}}))}),{immediate:!0,flush:"sync"});var k=null,O=null,x=Object(f.g)(b.b,[]),j=Object(l.a)((function(){return r.envs?r.envs.map((function(e){return{key:e.key,value:e.value,sourceEnv:e.source}})):x.value})),C=new p.b(j,y),w=function(e){var t=[c.d.contentAttributes.of({"aria-label":r.placeholder}),c.d.updateListener.of((function(e){r.readonly&&(e.view.contentDOM.inputMode="none")})),i.g.changeFilter.of((function(){return!r.readonly})),m.d,r.readonly?c.d.theme({".cm-content":{caretColor:"var(--secondary-dark-color) !important",color:"var(--secondary-dark-color) !important",backgroundColor:"var(--divider-color) !important",opacity:.25}}):c.d.theme({}),Object(s.d)({position:"absolute"}),C,Object(c.o)(r.placeholder),c.d.domEventHandlers({paste:function(e){var t,r;k=e,O=null!==(r=null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text"))&&void 0!==r?r:""},drop:function(e){e.preventDefault()}}),c.g.fromClass(function(){function e(){Object(n.a)(this,e)}return Object(a.a)(e,[{key:"update",value:function(e){if(!r.readonly&&e.docChanged){var t=u()(g.value);g.value=e.state.doc.toJSON().join(e.state.lineBreak);var o=u()(g.value).replaceAll("\n","");if(d("input",o),d("change",o),!!e.transactions.find((function(e){return e.isUserEvent("input.paste")}))&&k){var n=O;Object(l.g)((function(){d("paste",{pastedValue:n,prevValue:t})}))}else k=null,O=null}}}]),e}()),Object(v.a)(),c.m.of(Object(o.a)(v.b))];y.value=new c.d({parent:e,state:i.g.create({doc:r.value,extensions:t})})};return Object(l.j)((function(){h.value&&(y.value||w(h.value))})),Object(l.z)(h,(function(){var e;h.value?y.value||w(h.value):(null===(e=y.value)||void 0===e||e.destroy(),y.value=void 0)})),{emit:d,editor:h}};var y=g,h=r(23),k=Object(h.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex items-center flex-1 flex-shrink-0 overflow-auto whitespace-nowrap hide-scrollbar"},[r("div",{ref:"editor",staticClass:"flex flex-1",class:e.styles,attrs:{placeholder:e.placeholder},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.emit("enter",t))},function(t){return e.emit("keydown",t)}],keyup:function(t){return e.emit("keyup",t)},click:function(t){return e.emit("click",t)}}})])}),[],!1,null,null,null);t.default=k.exports},984:function(e,t,r){r(1039)}}]);