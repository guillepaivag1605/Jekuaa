(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{785:function(o,t,e){"use strict";e.r(t);var c=e(165),n=e(241),r=e(76),d={props:{curso:Object},methods:{estaEnDescuento:function(o){if(!o)return!1;var t=Date.now()/1e3;return t>=o.fechaInicio.seconds&&t<o.fechaFin.seconds}}},l=e(32),component=Object(l.a)(d,(function(){var o=this,t=o._self._c;return t("div",[t(n.a,{staticClass:"mx-auto",attrs:{"max-width":"470"}},[t(r.c,[t("p",{staticClass:"text-h4 text--primary"},[o._v("\n                Sin acceso\n            ")]),o._v(" "),t("p",[o._v("\n                Classfii\n            ")]),o._v(" "),t("div",{staticClass:"text--primary"},[o._v("\n                Para ver este contenido por favor compra el curso. "),t("br"),o._v("\n                Y comienza con un mundo de aprendizaje 🚀\n            ")])]),o._v(" "),t(r.a,[0===o.curso.datosPrecio.precio?t(c.a,{attrs:{outlined:"",text:"",color:"#683bce",to:"/pedidos/nuevo/curso/".concat(o.curso.uid)}},[o._v("\n                Reclamar gratis\n            ")]):o.estaEnDescuento(o.curso.datosPrecio.descuento)?t(c.a,{attrs:{outlined:"",text:"",color:"#683bce",to:"/pedidos/nuevo/curso/".concat(o.curso.uid)}},[o._v("\n                "+o._s(0===o.curso.datosPrecio.descuento.precio?"Reclamar gratis":"Comprar")+"\n            ")]):t(c.a,{attrs:{outlined:"",text:"",color:"#683bce",to:"/pedidos/nuevo/curso/".concat(o.curso.uid)}},[o._v("\n                Comprar\n            ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);