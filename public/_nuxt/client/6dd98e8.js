(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{661:function(t,n,r){"use strict";r.r(n);var o=r(514),l=r(232),e=r(236),c=r(167),d=r(237),v=r(7),_=r(239),m=r(528),f=(r(36),r(28),r(82),{name:"",props:{uidCurso:String,unidades:Array},methods:{secondsToString:function(t){var n=Math.floor(t/3600);n=n<10?"0"+n:n;var r=Math.floor(t/60%60),o=t%60;return o=o<10?"0"+o:o,n+":"+(r=r<10?"0"+r:r)+":"+String(o).split(".")[0]}}}),y=r(32),component=Object(y.a)(f,(function(){var t=this,n=t._self._c;return n("div",[n(e.a,{staticStyle:{height:"50vh","overflow-y":"scroll"}},t._l(t.unidades,(function(r,e){return n("div",{key:e,staticClass:"mb-8"},[n("h4",{staticClass:"tituloUnidad mb-1"},[t._v(" "+t._s(r.data.nombreUnidad)+" ")]),t._v(" "),n(_.a,{attrs:{color:"primary"}},t._l(r.clases,(function(r,e){return n("div",{key:e},[n(c.a,{attrs:{to:"/moderador/curso-publicado/".concat(t.uidCurso,"/clase/").concat(r.data.uid)}},[n(v.a,[n(v.c,{staticClass:"tituloClase"},["video"===r.data.tipoClase?n(l.a,{attrs:{size:"18",color:"#683bce"}},[t._v("\n                                    mdi-play-circle\n                                ")]):t._e(),t._v(" "),"articulo"===r.data.tipoClase?n(l.a,{attrs:{size:"18",color:"#683bce"}},[t._v("\n                                    mdi-file-multiple\n                                ")]):t._e(),t._v(" "),n("p",{staticStyle:{display:"inline","margin-left":"5px !important"}},[t._v(t._s(r.data.titulo))])],1)],1),t._v(" "),n(m.a),t._v(" "),n("p",{staticStyle:{display:"inline","font-size":"13px","margin-top":"16px","margin-right":"-8px"}},[t._v("\n                            "+t._s(t.secondsToString(r.data.duracion))+"\n                        ")]),t._v(" "),n(d.a,[n(l.a,{attrs:{color:"gray"}},[t._v("\n                                mdi-star\n                            ")])],1)],1),t._v(" "),n(o.a)],1)})),0)],1)})),0)],1)}),[],!1,null,null,null);n.default=component.exports}}]);