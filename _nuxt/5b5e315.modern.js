(window.webpackJsonp=window.webpackJsonp||[]).push([[90,92,93],{857:function(o,r,e){"use strict";e.d(r,"b",(function(){return f})),e.d(r,"d",(function(){return k})),e.d(r,"a",(function(){return C})),e.d(r,"c",(function(){return w}));e(35),e(42);var t=e(837),a=e(875),c=e(965),n=e(833),l=e(885),i=e(850),d=e(935),s=e(881),m=e(963),p=e(966),v=e(968),u=e(878),b=e(969),g=e(967),h=e(882),f=t.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)",top:"var(--lower-tertiary-sticky-fold) !important","z-index":"10"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-tooltip-arrow:after":{borderColor:"transparent !important"},".cm-tooltip-arrow:before":{borderColor:"transparent !important"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"0.5em",paddingRight:"0.5em"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),k=t.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-sans)",color:"var(--secondary-dark-color)",backgroundColor:"transparent"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-tooltip-arrow:after":{borderColor:"transparent !important"},".cm-tooltip-arrow:before":{borderColor:"transparent !important"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.2rem",paddingBottom:"0.2rem"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),y="var(--editor-name-color)",x="var(--editor-constant-color)",C=a.a.define([{tag:a.d.keyword,color:"var(--editor-keyword-color)"},{tag:[a.d.name,a.d.deleted,a.d.character,a.d.propertyName,a.d.macroName],color:y},{tag:[a.d.function(a.d.variableName),a.d.labelName],color:"var(--editor-variable-color)"},{tag:[a.d.color,a.d.constant(a.d.name),a.d.standard(a.d.name)],color:x},{tag:[a.d.definition(a.d.name),a.d.separator],color:"var(--editor-separator-color)"},{tag:[a.d.typeName,a.d.className,a.d.number,a.d.changed,a.d.annotation,a.d.modifier,a.d.self,a.d.namespace],color:"var(--editor-type-color)"},{tag:[a.d.operator,a.d.operatorKeyword,a.d.url,a.d.escape,a.d.regexp,a.d.link,a.d.special(a.d.string)],color:"var(--editor-operator-color)"},{tag:[a.d.meta,a.d.comment],color:"var(--editor-meta-color)"},{tag:a.d.strong,fontWeight:"bold"},{tag:a.d.emphasis,fontStyle:"italic"},{tag:a.d.strikethrough,textDecoration:"line-through"},{tag:a.d.link,color:"var(--editor-link-color)",textDecoration:"underline"},{tag:a.d.heading,fontWeight:"bold",color:y},{tag:[a.d.atom,a.d.bool,a.d.special(a.d.variableName)],color:x},{tag:[a.d.processingInstruction,a.d.string,a.d.inserted],color:"var(--editor-process-color)"},{tag:a.d.invalid,color:"var(--editor-invalid-color)"}]),w=[Object(d.d)(),Object(d.c)(),Object(t.l)(),Object(l.a)(),Object(c.a)({openText:"▾",closedText:"▸"}),Object(t.i)(),Object(t.j)(),n.g.allowMultipleSelections.of(!0),Object(i.p)(),a.b.fallback,Object(m.a)(),Object(p.a)(),Object(u.a)(),Object(g.b)(),Object(g.a)(),Object(t.k)(),Object(v.a)(),t.m.of([...p.b,...s.a,...v.c,...l.b,...c.b,...b.a,...u.c,...h.a]),Object(v.b)({top:!0})]},858:function(o,r,e){"use strict";e.d(r,"a",(function(){return u})),e.d(r,"b",(function(){return b}));e(63);var t=e(3),a=e(833),c=e(880),n=e(837),l=e(9),i=e(61),d=e(85),s=/(<<[a-zA-Z0-9-_]+>>)/g,m=o=>Object(c.b)(((r,e,t)=>{for(var a,c,n,d,{from:m,to:p,text:v}=r.state.doc.lineAt(e),u=e,b=e;u>m&&/[a-zA-Z0-9-_]+/.test(v[u-m-1]);)u--;for(;b<p&&/[a-zA-Z0-9-_]+/.test(v[b-m]);)b++;if(u===e&&t<0||b===e&&t>0||!s.test(v.slice(u-m-2,b-m+2)))return null;var g=null!==(c=null===(a=o.find((o=>o.key===v.slice(u-m,b-m))))||void 0===a?void 0:a.sourceEnv)&&void 0!==c?c:"choose an environment",h=null!==(d=null===(n=o.find((o=>o.key===v.slice(u-m,b-m))))||void 0===n?void 0:n.value)&&void 0!==d?d:"not found",f=Object(i.parseTemplateStringE)(h,o),k=l.isLeft(f)?"error":f.right;return{pos:u,end:p,above:!0,arrow:!0,create(){var o=document.createElement("span"),r=document.createElement("xmp");return r.textContent=k,o.appendChild(document.createTextNode("".concat(g," "))),o.appendChild(r),o.className="tooltip-theme",{dom:o}}}}),{hoverTime:1});var p=o=>new n.e({regexp:s,decoration:r=>function(o,r){var e=r.find((r=>r.key===o.slice(2,-2)))?"bg-accentDark text-accentContrast hover:bg-accent":"bg-red-500 text-accentContrast hover:bg-red-600";return n.b.mark({class:"".concat("cursor-help transition rounded px-1 focus:outline-none mx-0.5 env-highlight"," ").concat(e)})}(r[0],o)}),v=o=>{var r=p(o);return n.g.define((o=>({decorations:r.createDeco(o),update(o){this.decorations=r.updateDeco(o,this.decorations)}})),{decorations:o=>o.decorations})};class u{constructor(o,r){this.editorView=r,this.compartment=new a.e,this.envs=[],this.envs=Object(d.i)(),o(d.b,(o=>{var r;this.envs=o,null===(r=this.editorView.value)||void 0===r||r.dispatch({effects:this.compartment.reconfigure([m(this.envs),v(this.envs)])})}))}get extension(){return this.compartment.of([m(this.envs),v(this.envs)])}}class b{constructor(o,r){this.editorView=r,this.compartment=new a.e,this.envs=[],Object(t.z)(o,(o=>{var r;this.envs=o,null===(r=this.editorView.value)||void 0===r||r.dispatch({effects:this.compartment.reconfigure([m(this.envs),v(this.envs)])})}),{immediate:!0})}get extension(){return this.compartment.of([m(this.envs),v(this.envs)])}}},872:function(o,r,e){"use strict";e.d(r,"b",(function(){return t})),e.d(r,"a",(function(){return a}));e(63);var t=[{title:"request.content_type_titles.text",contentTypes:["application/json","application/ld+json","application/hal+json","application/vnd.api+json","application/xml"]},{title:"request.content_type_titles.structured",contentTypes:["application/x-www-form-urlencoded","multipart/form-data"]},{title:"request.content_type_titles.others",contentTypes:["text/html","text/plain"]}];function a(o){return/\bjson\b/i.test(o)}}}]);