(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{24:function(e,t,n){e.exports=n.p+"static/media/logo.2a4d0e80.png"},31:function(e,t,n){e.exports=n(42)},36:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(9),r=n.n(c),o=(n(36),n(28)),u=n(16),m=n(24),i=n.n(m),s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header"},l.a.createElement("img",{src:i.a,alt:"logo",width:"70",height:"70"}),l.a.createElement("h1",null," Zahid's Keep")))},E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \xa9 All Rights Reserved     !!! ZAHID")))},f=n(18),p=n(21),d=n(57),g=n(26),b=n.n(g),h=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)({title:"",content:""}),m=Object(u.a)(o,2),i=m[0],s=m[1],E=function(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(f.a)({},n,a))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main_note",onDoubleClick:function(){r(!1)}},l.a.createElement("form",null,c?l.a.createElement("input",{value:i.title,onChange:E,name:"title",type:"text",placeholder:"Title",autoComplete:"off"}):null,l.a.createElement("textarea",{value:i.content,onChange:E,name:"content",columns:"",rows:"",placeholder:"Write a Note",autoComplete:"off",onClick:function(){r(!0)}}),c?l.a.createElement(d.a,{onClick:function(){e.passNote(i),s({title:"",content:""})}},l.a.createElement(b.a,{className:"plus_sign"})):null)))},v=n(27),j=n.n(v),O=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("br",null),l.a.createElement("p",null,e.content),l.a.createElement("button",{className:"btn",onClick:function(){e.deleteItem(e.id)}},l.a.createElement(j.a,{className:"deleteIcon"}))))},C=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=function(e){c((function(t){return t.filter((function(t,n){return n!==e}))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null),l.a.createElement(E,null),l.a.createElement(h,{passNote:function(e){c((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(O,{key:t,id:t,title:e.title,content:e.content,deleteItem:r})})))};r.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(C,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.4fb7dc98.chunk.js.map