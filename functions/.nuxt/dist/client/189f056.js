(window.webpackJsonp=window.webpackJsonp||[]).push([[27,18,25],{478:function(e,t,n){},479:function(e,t,n){var map={"./informatica.webp":486,"./sinSeccion.webp":487,"./sinSeccion1.webp":488,"./sinSeccion2.webp":489};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=479},486:function(e,t,n){e.exports=n.p+"img/informatica.292d832.webp"},487:function(e,t,n){e.exports=n.p+"img/sinSeccion.4de0f3c.webp"},488:function(e,t,n){e.exports=n.p+"img/sinSeccion1.0b4ce86.webp"},489:function(e,t,n){e.exports=n.p+"img/sinSeccion2.42c6954.webp"},496:function(e,t,n){"use strict";n(478)},501:function(e,t,n){"use strict";n.r(t);var r={name:"visualizador-blog",props:{contenidoBlog:String}},o=(n(496),n(31)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"ProseMirror mt-5 mb-5",domProps:{innerHTML:e._s(e.contenidoBlog)}})}),[],!1,null,"a858709c",null);t.default=component.exports},545:function(e,t,n){e.exports=n.p+"img/portada-usuario.899fd65.jpg"},546:function(e,t,n){},596:function(e,t,n){"use strict";n(546)},624:function(e,t,n){},629:function(e,t,n){"use strict";n.r(t);var r=n(17),o=(n(71),n(35),n(69),{name:"carta-presentacion",data:function(){return{informacionUsuario:null,usuario:null,show:!1}},props:{uidUsuario:String},computed:{descripcion:function(){return this.informacionUsuario.descripcion.replace(/\n/g,"<br>")}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$firebase.firestore().collection("Usuarios").doc(e.uidUsuario),t.next=3,n.get();case 3:return r=t.sent,e.usuario=r.data(),o=e.$firebase.firestore().collection("InformacionUsuarios").doc(e.uidUsuario),t.next=8,o.get();case 8:c=t.sent,e.informacionUsuario=c.data();case 10:case"end":return t.stop()}}),t)})))()}}),c=(n(596),n(31)),l=n(44),d=n.n(l),v=n(139),m=n(214),f=n(105),_=n(433),h=n(102),x=n(207),w=n(177),C=n(446),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.usuario&&e.informacionUsuario?r("div",{staticClass:"container"},[r("h3",{staticClass:"mb-5 titulo-presentacion"},[e._v("\n        Presentación del publicador:\n    ")]),e._v(" "),r("div",[r("v-card",{staticClass:"mx-auto"},[r("v-img",{attrs:{src:n(545),height:"200px"}}),e._v(" "),r("v-card-title",[e._v("\n                ¡Hola, soy "),r("b",{staticClass:"texto-nombreCompleto ml-1"},[e._v(" "+e._s(e.usuario.nombreCompleto)+"!")])]),e._v(" "),r("v-card-subtitle",[e._v("\n                "+e._s(e.usuario.nombreUsuario)+" - "+e._s(e.informacionUsuario.rolDescriptivo)+"\n            ")]),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"#683bce",text:"",to:"/estudiante/"+e.usuario.nombreUsuario}},[e._v("\n                Mi perfil\n            ")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"#683bce",text:""},on:{click:function(t){e.show=!e.show}}},[r("b",[e._v("Información")]),e._v(" "),r("v-icon",[e._v(e._s(e.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),e._v(" "),r("v-expand-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[r("v-divider"),e._v(" "),r("v-card-text",{domProps:{innerHTML:e._s(e.descripcion)}})],1)])],1)],1)]):e._e()}),[],!1,null,"5e834442",null);t.default=component.exports;d()(component,{VBtn:v.a,VCard:m.a,VCardActions:f.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VDivider:_.a,VExpandTransition:h.a,VIcon:x.a,VImg:w.a,VSpacer:C.a})},699:function(e,t,n){"use strict";n(624)},758:function(e,t,n){"use strict";n.r(t);var r=n(17),o=(n(71),n(509)),c=n.n(o),l=n(501),d={name:"",data:function(){return{referenciaBlog:"",blog:{},contenidoBlog:"",meGustaEsteBlog:!1,dialogRegistro:!1}},components:{"carta-presentacion":n(629).default,"visualizador-blog":l.default},methods:{accionMeGusta:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.verificarSiInicioSesion()){t.next=3;break}return e.dialogRegistro=!0,t.abrupt("return");case 3:if(!e.meGustaEsteBlog){t.next=7;break}return t.next=6,e.quitarMeGusta();case 6:return t.abrupt("return");case 7:return t.next=9,e.darMeGusta();case 9:case"end":return t.stop()}}),t)})))()},darMeGusta:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,body,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=e.$firebase.auth().currentUser){t.next=4;break}return t.abrupt("return",null);case 4:return t.next=6,n.getIdToken();case 6:r=t.sent,e.$store.commit("modules/usuarios/setTOKEN",r),body={meGusta:!0},o={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}},e.$axios.post("/blog/estudiante/meGusta/".concat(e.blog.uid),body,o),e.meGustaEsteBlog=!0,e.blog.cantidadMeGusta++,t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),console.log("error: ",t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))()},quitarMeGusta:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,body,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=e.$firebase.auth().currentUser){t.next=4;break}return t.abrupt("return",null);case 4:return t.next=6,n.getIdToken();case 6:r=t.sent,e.$store.commit("modules/usuarios/setTOKEN",r),body={meGusta:!1},o={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}},e.$axios.post("/blog/estudiante/meGusta/".concat(e.blog.uid),body,o),e.meGustaEsteBlog=!1,e.blog.cantidadMeGusta--,t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),console.log("error: ",t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))()},verificarSiInicioSesion:function(){return!!this.$store.state.modules.usuarios.uid}},computed:{},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((n=e.$store.state.modules.usuarios).uid){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,e.$firebase.firestore().collection("Usuarios").doc(n.uid).collection("BlogsMG").doc(e.blog.uid).get();case 5:r=t.sent,e.meGustaEsteBlog=!!r.exists;case 7:case"end":return t.stop()}}),t)})))()},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,d,v,m,f,_,h,x,w,C;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.app,n=e.$firebase,r=e.$axios,o=e.redirect,l=e.params,d=l.referencia,v={},m="",t.prev=4,f=n.firestore().collection("Blogs").where("referencia","==",d).where("habilitado","==",!0).where("publicado","==",!0),t.next=8,f.get();case 8:return(_=t.sent).empty&&o("/blogs"),h=_.docs[0],v=h.data(),x={headers:{"Content-Type":"application/json"}},t.next=15,r.get("/blog/estudiante/obtenerContenido/".concat(v.uid),x);case 15:return w=t.sent,C=new c.a.Converter,m=C.makeHtml(w.data.resultado),t.abrupt("return",{referenciaBlog:d,blog:v,contenidoBlog:m});case 21:t.prev=21,t.t0=t.catch(4),console.log("err",t.t0),o("/blogs");case 25:case"end":return t.stop()}}),t,null,[[4,21]])})))()}},v=(n(699),n(31)),m=n(44),f=n.n(m),_=n(139),h=n(214),x=n(105),w=n(527),C=n(537),k=n(433),G=n(207),V=n(599),S=n(528),B=n(446),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-parallax",{attrs:{dark:"",src:n(479)("./"+(e.blog.seccion?e.blog.seccion:"sinSeccion")+".webp"),height:"350"}},[r("div",{staticClass:"contenedor_contenido_padre"},[r("div",{staticClass:"contenedor_contenido"},[r("h1",{staticClass:"text-h4 font-weight-thin mb-4"},[e._v("\n                    Jekuaapy\n                ")]),e._v(" "),r("h4",{staticClass:"subheading"},[e._v("\n                    "+e._s(e.blog.titulo)+"\n                ")])])])]),e._v(" "),r("div",{staticClass:"container mt-10 mb-5"},[r("div",{staticClass:"mb-10"},[r("h2",{staticClass:"subtitulos"},[e._v(" Descripción ")]),e._v(" "),r("v-divider",{staticClass:"mt-3 mb-3"}),e._v("\n            "+e._s(e.blog.descripcion)+"\n        ")],1),e._v(" "),r("v-btn",{staticClass:"iconoMeGusta",attrs:{icon:"",color:e.meGustaEsteBlog?"#ff1d89":""},on:{click:e.accionMeGusta}},[r("v-icon",[e._v("mdi-heart")])],1),e._v("\n        "+e._s(e.blog.cantidadMeGusta)+"\n\n        "),r("v-divider",{}),e._v(" "),r("div",{},[r("visualizador-blog",{attrs:{contenidoBlog:e.contenidoBlog}})],1),e._v(" "),r("v-divider",{}),e._v(" "),r("v-btn",{staticClass:"iconoMeGusta",attrs:{icon:"",color:e.meGustaEsteBlog?"#ff1d89":""},on:{click:e.accionMeGusta}},[r("v-icon",[e._v("mdi-heart")])],1),e._v("\n        "+e._s(e.blog.cantidadMeGusta)+"\n\n        "),r("v-row",{staticClass:"mt-10 mb-10",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"6"}},[r("div",{staticClass:"contenido-l"},[r("h2",{staticClass:"subtitulos"},[e._v(" Fecha creación: ")]),e._v(" "),r("v-divider",{staticClass:"mt-3 mb-3"}),e._v("\n                    "+e._s(new Date(1e3*e.blog.fechaCreacion.seconds).toISOString().substr(0,10))+"\n                ")],1)]),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("div",{staticClass:"contenido-d"},[r("h2",{staticClass:"subtitulos"},[e._v(" Fecha actualización: ")]),e._v(" "),r("v-divider",{staticClass:"mt-3 mb-3"}),e._v("\n                    "+e._s(new Date(1e3*e.blog.fechaActualizacion.seconds).toISOString().substr(0,10))+"\n                ")],1)])],1)],1),e._v(" "),r("div",{staticClass:"mb-15"},[r("carta-presentacion",{attrs:{uidUsuario:e.blog.publicador}})],1),e._v(" "),r("v-dialog",{attrs:{width:"500"},model:{value:e.dialogRegistro,callback:function(t){e.dialogRegistro=t},expression:"dialogRegistro"}},[r("v-card",[r("v-card-title",{staticClass:"text-h6 cabecera_registro"},[e._v("\n                Primero debes iniciar sesión\n            ")]),e._v(" "),r("v-card-text",[r("p",[e._v("Para dar "),r("b",[e._v("me gusta")]),e._v(" a este blog de Jekuaapy debes registrarte o iniciar sesión.")]),e._v(" "),r("v-divider",{staticClass:"mb-6"}),e._v(" "),r("p",[e._v("Si tienes una cuenta en Jekuaapy puedes iniciar sesión "),r("nuxt-link",{attrs:{to:"/autenticacion/inicioSesion"}},[e._v("aquí")]),e._v(".")],1),e._v(" "),r("p",[e._v("En caso que no tengas una cuenta en Jekuaapy puedes registrarte "),r("nuxt-link",{attrs:{to:"/autenticacion/registro"}},[e._v("aquí")])],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"#683bce",text:""},on:{click:function(t){e.dialogRegistro=!1}}},[e._v("\n                Cerrar\n            ")])],1)],1)],1)],1)}),[],!1,null,"04a83e9b",null);t.default=component.exports;f()(component,{VBtn:_.a,VCard:h.a,VCardActions:x.a,VCardText:x.c,VCardTitle:x.d,VCol:w.a,VDialog:C.a,VDivider:k.a,VIcon:G.a,VParallax:V.a,VRow:S.a,VSpacer:B.a})}}]);