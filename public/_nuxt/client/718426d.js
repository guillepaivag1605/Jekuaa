(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{1079:function(e,r,t){"use strict";t.r(r);var n=t(165),o=t(241),c=t(76),d=t(514),l=t(232),v=t(18),f=(t(52),{name:"",middleware:"accesoAutenticado",data:function(){return{estadoCorreoVerificacion:""}},methods:{reeviarCorreoVerificacion:function(){var e=this;return Object(v.a)(regeneratorRuntime.mark((function r(){var t,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,e.estadoCorreoVerificacion="reenviando",!(t=e.$firebase.auth().currentUser)){r.next=9;break}return r.next=6,t.getIdToken();case 6:r.t0=r.sent,r.next=10;break;case 9:r.t0="";case 10:return t=r.t0,r.next=13,e.$store.dispatch("modules/usuarios/setTOKEN",t);case 13:return n={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}},r.next=16,e.$axios.$get("/serviceUsuario/reeviarCorreoVerificacion",n);case 16:r.sent,e.estadoCorreoVerificacion="reenviado",r.next=25;break;case 20:return r.prev=20,r.t1=r.catch(0),r.next=24,e.$store.dispatch("modules/sistema/errorHandler",r.t1);case 24:r.sent;case 25:case"end":return r.stop()}}),r,null,[[0,20]])})))()}},asyncData:function(e){return Object(v.a)(regeneratorRuntime.mark((function r(){var t,n,o,c,d,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.isDev,e.$firebase,t=e.$axios,e.route,e.store,e.env,n=e.params,e.query,e.req,e.res,o=e.redirect,e.error,c=n.uidUsuario,d={headers:{"Content-Type":"application/json"}},r.next=5,t.$get("/serviceUsuario/obtenerAuthentication/uid/".concat(c),d);case 5:return(l=r.sent).resultado.emailVerified&&o("/"),r.abrupt("return",{uid:l.resultado.uid,email:l.resultado.email,emailVerified:l.resultado.emailVerified});case 8:case"end":return r.stop()}}),r)})))()}}),m=(t(960),t(32)),component=Object(m.a)(f,(function(){var e=this,r=e._self._c;return r("div",{staticClass:"container"},[r(o.a,{staticClass:"mx-auto text-center mt-10",attrs:{"max-width":"500"}},[r(c.c,[r("p",{staticClass:"text-h6 text--primary"},[e._v("\n                ¡Solo falta un paso para despegar! 🚀\n            ")]),e._v(" "),r(d.a),e._v(" "),r("div",{staticClass:"letra mt-5"},[e._v("¡Tu cuenta ha sido creada! Pero aún tu correo no a sido verificado.")]),e._v(" "),r("div",{staticClass:"text--primary mt-3"},[r("p",{staticClass:"letra"},[e._v("Muchas gracias por formar parte de Classfii. Esperamos que tengas una buena experiencia.")]),e._v(" "),r("p",{staticClass:"letra"},[e._v("Solo falta verificar tu correo para acceder a Classfii y poder utilizar los servicios.")]),e._v(" "),r("p",{staticStyle:{"font-size":"17px"}},[e._v("¡Te esperamos "+e._s(e.email)+"!")])])],1),e._v(" "),r(c.a,[r(n.a,{attrs:{text:"",block:"",color:"deep-purple accent-4"},on:{click:e.reeviarCorreoVerificacion}},["reenviando"===e.estadoCorreoVerificacion?r("div",[r(l.a,{attrs:{left:""}},[e._v("\n                        mdi-loading\n                    ")]),e._v("\n\n                    Reenviando\n                ")],1):e._e(),e._v(" "),"reenviado"===e.estadoCorreoVerificacion?r("div",[r(l.a,{attrs:{left:""}},[e._v("\n                        mdi-checkbox-marked-circle-outline\n                    ")]),e._v("\n\n                    Reenviado\n                ")],1):e._e(),e._v(" "),""===e.estadoCorreoVerificacion?r("div",[e._v("\n                    Reenviar correo de verificación\n                ")]):e._e()])],1)],1)],1)}),[],!1,null,"5cb6851f",null);r.default=component.exports},761:function(e,r,t){},960:function(e,r,t){"use strict";t(761)}}]);