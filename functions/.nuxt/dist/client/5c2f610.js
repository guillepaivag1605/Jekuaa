(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{545:function(r,n,o){r.exports=o.p+"img/portada-usuario.899fd65.jpg"},546:function(r,n,o){},596:function(r,n,o){"use strict";o(546)},629:function(r,n,o){"use strict";o.r(n);var t=o(17),e=(o(71),o(35),o(69),{name:"carta-presentacion",data:function(){return{informacionUsuario:null,usuario:null,show:!1}},props:{uidUsuario:String},computed:{descripcion:function(){return this.informacionUsuario.descripcion.replace(/\n/g,"<br>")}},created:function(){var r=this;return Object(t.a)(regeneratorRuntime.mark((function n(){var o,t,e,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=r.$firebase.firestore().collection("Usuarios").doc(r.uidUsuario),n.next=3,o.get();case 3:return t=n.sent,r.usuario=t.data(),e=r.$firebase.firestore().collection("InformacionUsuarios").doc(r.uidUsuario),n.next=8,e.get();case 8:c=n.sent,r.informacionUsuario=c.data();case 10:case"end":return n.stop()}}),n)})))()}}),c=(o(596),o(31)),d=o(44),v=o.n(d),l=o(139),m=o(214),f=o(105),_=o(433),h=o(102),w=o(207),x=o(177),U=o(446),component=Object(c.a)(e,(function(){var r=this,n=r.$createElement,t=r._self._c||n;return r.usuario&&r.informacionUsuario?t("div",{staticClass:"container"},[t("h3",{staticClass:"mb-5 titulo-presentacion"},[r._v("\n        Presentación del publicador:\n    ")]),r._v(" "),t("div",[t("v-card",{staticClass:"mx-auto"},[t("v-img",{attrs:{src:o(545),height:"200px"}}),r._v(" "),t("v-card-title",[r._v("\n                ¡Hola, soy "),t("b",{staticClass:"texto-nombreCompleto ml-1"},[r._v(" "+r._s(r.usuario.nombreCompleto)+"!")])]),r._v(" "),t("v-card-subtitle",[r._v("\n                "+r._s(r.usuario.nombreUsuario)+" - "+r._s(r.informacionUsuario.rolDescriptivo)+"\n            ")]),r._v(" "),t("v-card-actions",[t("v-btn",{attrs:{color:"#683bce",text:"",to:"/estudiante/"+r.usuario.nombreUsuario}},[r._v("\n                Mi perfil\n            ")]),r._v(" "),t("v-spacer"),r._v(" "),t("v-btn",{attrs:{color:"#683bce",text:""},on:{click:function(n){r.show=!r.show}}},[t("b",[r._v("Información")]),r._v(" "),t("v-icon",[r._v(r._s(r.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),r._v(" "),t("v-expand-transition",[t("div",{directives:[{name:"show",rawName:"v-show",value:r.show,expression:"show"}]},[t("v-divider"),r._v(" "),t("v-card-text",{domProps:{innerHTML:r._s(r.descripcion)}})],1)])],1)],1)]):r._e()}),[],!1,null,"5e834442",null);n.default=component.exports;v()(component,{VBtn:l.a,VCard:m.a,VCardActions:f.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VDivider:_.a,VExpandTransition:h.a,VIcon:w.a,VImg:x.a,VSpacer:U.a})}}]);