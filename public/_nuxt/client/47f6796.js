(window.webpackJsonp=window.webpackJsonp||[]).push([[100,43],{1072:function(t,e,r){"use strict";r.r(e);var n=r(165),o=r(564),c=r(563),l=(r(49),r(6),r(34),r(56),r(48),r(28),r(10),r(63),r(67),r(51),r(18)),d=(r(52),r(110)),f=r(661);function v(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}d.b.firestore();var C={name:"",layout:"moderador",middleware:"esModerador",data:function(){return{uidCurso:this.$route.params.uidCurso,listaClases:!0,unidades:[]}},components:{ListaUnidadesClases:f.default},methods:{quitarListaClases:function(){this.listaClases=!1},agregarListaClases:function(){this.listaClases=!0}},watch:{},mounted:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r,n,i,o,c,l,f,m,C,h,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=d.b.firestore(),e.next=3,r.collection("CursosPublicado").doc(t.uidCurso).collection("UnidadesPublicado").orderBy("ordenUnidad").get();case 3:n=e.sent,i=0,o=[],c=v(n.docs),e.prev=7,c.s();case 9:if((l=c.n()).done){e.next=20;break}return f=l.value,o.push({data:f.data(),clases:[]}),e.next=14,r.collection("CursosPublicado").doc(t.uidCurso).collection("UnidadesPublicado").doc(f.id).collection("ClasesPublicado").orderBy("ordenClase").get();case 14:m=e.sent,C=v(m.docs);try{for(C.s();!(h=C.n()).done;)y=h.value,o[i].clases.push({data:y.data(),contenido:null})}catch(t){C.e(t)}finally{C.f()}i++;case 18:e.next=9;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(7),c.e(e.t0);case 25:return e.prev=25,c.f(),e.finish(25);case 28:t.unidades=o;case 29:case"end":return e.stop()}}),e,null,[[7,22,25,28]])})))()},created:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=d.b.firestore(),e.next=3,r.collection("CursosPublicado").doc(t.uidCurso).get();case 3:if(e.sent.exists){e.next=6;break}return e.abrupt("return",t.$router.push("/moderador/cursos/publicados"));case 6:case"end":return e.stop()}}),e)})))()}},h=(r(948),r(32)),component=Object(h.a)(C,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"mb-10 mt-10"},[e(c.a,[e(o.a,{attrs:{cols:"12",md:t.listaClases?"8":"12"}},[e("nuxt-child",{attrs:{listaClases:t.listaClases,unidades:t.unidades},on:{agregarListaClases:function(e){return t.agregarListaClases(e)}}})],1),t._v(" "),t.listaClases?e(o.a,{attrs:{cols:"12",md:"4"}},[e(n.a,{staticClass:"btnAgregarListaClases mb-3",attrs:{outlined:"",block:"",color:"#683bce"},on:{click:t.quitarListaClases}},[t._v("\n                    Quitar lista de clases\n                ")]),t._v(" "),e("ListaUnidadesClases",{attrs:{uidCurso:t.uidCurso,unidades:t.unidades}})],1):t._e()],1)],1)])}),[],!1,null,"b6e5e354",null);e.default=component.exports},661:function(t,e,r){"use strict";r.r(e);var n=r(514),o=r(232),c=r(236),l=r(167),d=r(237),f=r(7),v=r(239),m=r(528),C=(r(36),r(28),r(82),{name:"",props:{uidCurso:String,unidades:Array},methods:{secondsToString:function(t){var e=Math.floor(t/3600);e=e<10?"0"+e:e;var r=Math.floor(t/60%60),n=t%60;return n=n<10?"0"+n:n,e+":"+(r=r<10?"0"+r:r)+":"+String(n).split(".")[0]}}}),h=r(32),component=Object(h.a)(C,(function(){var t=this,e=t._self._c;return e("div",[e(c.a,{staticStyle:{height:"50vh","overflow-y":"scroll"}},t._l(t.unidades,(function(r,c){return e("div",{key:c,staticClass:"mb-8"},[e("h4",{staticClass:"tituloUnidad mb-1"},[t._v(" "+t._s(r.data.nombreUnidad)+" ")]),t._v(" "),e(v.a,{attrs:{color:"primary"}},t._l(r.clases,(function(r,c){return e("div",{key:c},[e(l.a,{attrs:{to:"/moderador/curso-publicado/".concat(t.uidCurso,"/clase/").concat(r.data.uid)}},[e(f.a,[e(f.c,{staticClass:"tituloClase"},["video"===r.data.tipoClase?e(o.a,{attrs:{size:"18",color:"#683bce"}},[t._v("\n                                    mdi-play-circle\n                                ")]):t._e(),t._v(" "),"articulo"===r.data.tipoClase?e(o.a,{attrs:{size:"18",color:"#683bce"}},[t._v("\n                                    mdi-file-multiple\n                                ")]):t._e(),t._v(" "),e("p",{staticStyle:{display:"inline","margin-left":"5px !important"}},[t._v(t._s(r.data.titulo))])],1)],1),t._v(" "),e(m.a),t._v(" "),e("p",{staticStyle:{display:"inline","font-size":"13px","margin-top":"16px","margin-right":"-8px"}},[t._v("\n                            "+t._s(t.secondsToString(r.data.duracion))+"\n                        ")]),t._v(" "),e(d.a,[e(o.a,{attrs:{color:"gray"}},[t._v("\n                                mdi-star\n                            ")])],1)],1),t._v(" "),e(n.a)],1)})),0)],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports},753:function(t,e,r){},948:function(t,e,r){"use strict";r(753)}}]);