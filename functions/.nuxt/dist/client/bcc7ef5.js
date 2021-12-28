(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{606:function(e,t,o){},676:function(e,t,o){"use strict";o(606)},749:function(e,t,o){"use strict";o.r(t);var c=o(17),r=o(19),n=(o(71),o(100),o(184),o(499)),l=o(500),d={mixins:[n.validationMixin],validations:{descripcion:{minLength:Object(l.minLength)(0),maxLength:Object(l.maxLength)(1e3)},especializaciones:{minLength:Object(l.minLength)(0),maxLength:Object(l.maxLength)(1e3)},intereses:{minLength:Object(l.minLength)(0),maxLength:Object(l.maxLength)(1e3)}},data:function(){return{actual:{},descripcion:"",especializaciones:"",intereses:"",redesSociales:[],rolDescriptivo:"Estudiante de Jekuaapy",listaRedesSocialesCodigoSeleccionado:[],listaRedesSociales:[{icon:"mdi-github",texto:"GitHub",codigo:"github"},{icon:"mdi-instagram",texto:"Instagram",codigo:"instagram"},{icon:"mdi-facebook",texto:"Facebook",codigo:"facebook"},{icon:"mdi-twitter",texto:"Twitter",codigo:"twitter"},{icon:"mdi-twitch",texto:"Twitch",codigo:"twitch"},{icon:"mdi-linkedin",texto:"LinkedIn",codigo:"linkedin"},{icon:"mdi-web",texto:"Mi sitio web",codigo:"web"}],cargando:!1}},components:{},watch:{listaRedesSocialesCodigoSeleccionado:function(e,t){var o;if(e.length<t.length)return o=this.obtenerRedSocialEscrito(t,e),void this.quitar(o);o=this.obtenerRedSocialEscrito(e,t),this.seleccionar(o)}},methods:{getRedSocialPorCodigo:function(e){return this.listaRedesSociales.find((function(t){return t.codigo===e}))},obtenerRedSocialEscrito:function(e,t){for(var o=function(i){var o=e[i];if(!!!t.find((function(e){return e===o})))return{v:o}},i=0;i<e.length;i++){var c=o(i);if("object"===Object(r.a)(c))return c.v}},seleccionar:function(e){e&&(!!this.redesSociales.find((function(t){return t.redSocial===e}))||this.redesSociales.push({redSocial:e,urlPerfil:""}))},quitar:function(e){if(e&&!!this.redesSociales.find((function(t){return t.redSocial===e})))for(var i=0;i<this.redesSociales.length;i++)this.redesSociales[i].redSocial===e&&this.redesSociales.splice(i,1)},estaSeleccionado:function(e){for(var i=0;i<this.listaRedesSocialesCodigoSeleccionado.length;i++){if(this.listaRedesSocialesCodigoSeleccionado[i]===e.codigo)return!0}return!1},obtenerDatosActualizados:function(){var e=this.actual,t={};this.descripcion!==e.descripcion&&(t.descripcion=this.descripcion),this.especializaciones!==e.especializaciones&&(t.especializaciones=this.especializaciones),this.intereses!==e.intereses&&(t.intereses=this.intereses);var o,c=this.redesSociales.length!==e.redesSociales.length;if(!c)for(var i=0;i<this.redesSociales.length;i++){var element=this.redesSociales[i];o=!1;for(var r=0;r<e.redesSociales.length;r++){var n=e.redesSociales[r];if(element.redSocial===n.redSocial){o=!0;break}}if(!o)break}return o&&!c||this.redesSociales!==e.redesSociales&&(t.redesSociales=this.redesSociales),t},actualizar:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var o,c,body,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$v.anyError){t.next=2;break}return t.abrupt("return");case 2:if(o=e.obtenerDatosActualizados(),t.prev=3,!(c=e.$firebase.auth().currentUser)){t.next=11;break}return t.next=8,c.getIdToken();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0="";case 12:return c=t.t0,t.next=15,e.$store.dispatch("modules/usuarios/setTOKEN",c);case 15:return body=o,r={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)}},t.next=19,e.$axios.$put("/usuarios/estudiante/actualizarInformacion",body,r);case 19:t.sent,t.next=28;break;case 22:return t.prev=22,t.t1=t.catch(3),console.log("error",t.t1),t.next=27,e.$store.dispatch("modules/sistema/errorHandler",t.t1);case 27:t.sent;case 28:case"end":return t.stop()}}),t,null,[[3,22]])})))()},reiniciar:function(){var e=JSON.parse(JSON.stringify(this.actual));this.descripcion=e.descripcion,this.especializaciones=e.especializaciones,this.intereses=e.intereses,this.redesSociales=e.redesSociales,this.rolDescriptivo=e.rolDescriptivo,this.listaRedesSocialesCodigoSeleccionado=e.listaRedesSocialesCodigoSeleccionado}},computed:{listaNombresRedesSociales:{get:function(){for(var e=[],i=0;i<this.listaRedesSociales.length;i++){var element=this.listaRedesSociales[i];e.push(element.texto)}return e}},erroresDescripcion:function(){var e=[];return this.$v.descripcion.$dirty?(!this.$v.descripcion.minLength&&e.push("¡El texto es muy corto!"),!this.$v.descripcion.maxLength&&e.push("¡El texto es muy largo!"),e):e},erroresEspecializaciones:function(){var e=[];return this.$v.especializaciones.$dirty?(!this.$v.especializaciones.minLength&&e.push("¡El texto es muy corto!"),!this.$v.especializaciones.maxLength&&e.push("¡El texto es muy largo!"),e):e},erroresIntereses:function(){var e=[];return this.$v.intereses.$dirty?(!this.$v.intereses.minLength&&e.push("¡El texto es muy corto!"),!this.$v.intereses.maxLength&&e.push("¡El texto es muy largo!"),e):e}},created:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var o,c,r,data,n,i,element,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.cargando=!0,o=e.$firebase.firestore(),c=o.collection("InformacionUsuarios").doc(e.$store.state.modules.usuarios.uid),t.next=5,c.get();case 5:for(r=t.sent,data=r.data(),e.descripcion=data.descripcion,e.especializaciones=data.especializaciones,e.intereses=data.intereses,e.redesSociales=data.redesSociales,e.rolDescriptivo=data.rolDescriptivo,n=[],i=0;i<e.redesSociales.length;i++)element=e.redesSociales[i],n.push(element.redSocial);e.listaRedesSocialesCodigoSeleccionado=n,l=JSON.parse(JSON.stringify(data)),e.actual.descripcion=l.descripcion,e.actual.especializaciones=l.especializaciones,e.actual.intereses=l.intereses,e.actual.redesSociales=l.redesSociales,e.actual.rolDescriptivo=l.rolDescriptivo,e.actual.listaRedesSocialesCodigoSeleccionado=JSON.parse(JSON.stringify(n)),e.cargando=!1;case 23:case"end":return t.stop()}}),t)})))()}},v=(o(676),o(31)),h=o(44),m=o.n(h),f=o(139),S=o(481),x=o(527),_=o(433),C=o(207),$=o(528),R=o(576),z=o(434),k=o(554),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"mb-15"},[o("h3",{staticClass:"mt-4 subtitulos"},[e._v(" Rol descriptivo: ")]),e._v(" "),o("v-divider"),e._v(" "),o("div",{staticClass:"mt-0 mb-5"},[o("v-text-field",{attrs:{readonly:""},model:{value:e.rolDescriptivo,callback:function(t){e.rolDescriptivo=t},expression:"rolDescriptivo"}})],1),e._v(" "),o("div",{},[o("h3",{staticClass:"mt-4 subtitulos"},[e._v(" Descripción: ")]),e._v(" "),o("v-divider"),e._v(" "),o("v-textarea",{staticClass:"mt-2 mb-5",attrs:{name:"input-7-1",label:"Mi descripción","error-messages":e.erroresDescripcion,counter:1e3,required:"",loading:e.cargando},on:{input:function(t){return e.$v.descripcion.$touch()},blur:function(t){return e.$v.descripcion.$touch()}},model:{value:e.descripcion,callback:function(t){e.descripcion=t},expression:"descripcion"}})],1),e._v(" "),o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"12",sm:"6"}},[o("div",{staticClass:"componente"},[o("h3",{staticClass:"mt-4 subtitulos"},[e._v(" Especializaciones: ")]),e._v(" "),o("v-divider"),e._v(" "),o("v-textarea",{staticClass:"mt-2 mb-5",attrs:{name:"input-7-1",label:"Mis especializaciones","error-messages":e.erroresEspecializaciones,counter:1e3,required:"",loading:e.cargando},on:{input:function(t){return e.$v.especializaciones.$touch()},blur:function(t){return e.$v.especializaciones.$touch()}},model:{value:e.especializaciones,callback:function(t){e.especializaciones=t},expression:"especializaciones"}})],1)]),e._v(" "),o("v-col",{attrs:{cols:"12",sm:"6"}},[o("div",{staticClass:"componente"},[o("h3",{staticClass:"mt-4 subtitulos"},[e._v(" Intereses: ")]),e._v(" "),o("v-divider"),e._v(" "),o("v-textarea",{staticClass:"mt-2 mb-5",attrs:{name:"input-7-1",label:"Mis intereses","error-messages":e.erroresIntereses,counter:1e3,required:"",loading:e.cargando},on:{input:function(t){return e.$v.intereses.$touch()},blur:function(t){return e.$v.intereses.$touch()}},model:{value:e.intereses,callback:function(t){e.intereses=t},expression:"intereses"}})],1)])],1),e._v(" "),o("h3",{staticClass:"mt-4 subtitulos"},[e._v(" Redes sociales: ")]),e._v(" "),o("v-divider"),e._v(" "),o("v-row",{staticClass:"mt-3",attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"12",md:"5"}},[o("div",{staticClass:"componente"},[o("v-select",{attrs:{items:e.listaRedesSociales,chips:"",label:"Redes sociales","item-text":"texto","item-value":"codigo",multiple:"",loading:e.cargando},scopedSlots:e._u([{key:"selection",fn:function(t){var c=t.item;return[o("div",{staticClass:"ml-2 mr-2"},[o("v-chip",{attrs:{color:"#683bce","text-color":"#ffffff"}},[o("v-icon",{attrs:{size:"23px",color:"#ffffff"}},[e._v(e._s(c.icon))]),e._v(" "),o("b",{staticClass:"ml-3"},[e._v("\n                      "+e._s(c.texto)+"\n                    ")])],1)],1)]}},{key:"item",fn:function(t){t.active;var c=t.item;return[e.estaSeleccionado(c)?o("div",{staticClass:"itemRedSocial seleccionado"},[o("v-icon",{attrs:{color:"#683bce"}},[e._v(e._s(c.icon))]),e._v(" "),o("b",{staticClass:"ml-3"},[e._v("\n                    "+e._s(c.texto)+"\n                  ")])],1):o("div",{staticClass:"itemRedSocial"},[o("v-icon",[e._v(e._s(c.icon))]),e._v(" "),o("b",{staticClass:"ml-3"},[e._v("\n                    "+e._s(c.texto)+"\n                  ")])],1)]}}]),model:{value:e.listaRedesSocialesCodigoSeleccionado,callback:function(t){e.listaRedesSocialesCodigoSeleccionado=t},expression:"listaRedesSocialesCodigoSeleccionado"}})],1)]),e._v(" "),o("v-col",{attrs:{cols:"12",md:"7"}},[o("div",{staticClass:"componente"},e._l(e.redesSociales,(function(t,c){return o("div",{key:c},[o("v-row",{attrs:{"no-gutters":""}},[o("v-icon",{staticClass:"align--center ml-2 mr-2 mb-3",attrs:{size:"40px",color:"#683bce"}},[e._v(e._s(e.getRedSocialPorCodigo(t.redSocial).icon))]),e._v(" "),o("v-text-field",{attrs:{label:e.getRedSocialPorCodigo(t.redSocial).texto},model:{value:e.redesSociales[c].urlPerfil,callback:function(t){e.$set(e.redesSociales[c],"urlPerfil",t)},expression:"redesSociales[index].urlPerfil"}})],1)],1)})),0)])],1),e._v(" "),o("v-divider",{staticClass:"mt-15 mb-15"}),e._v(" "),o("div",{staticClass:"text-center contenedor_botonesDeAcciones"},[o("div",{staticClass:"botonesDeAcciones"},[o("v-btn",{staticClass:"mb-5",attrs:{block:"",outlined:"",color:"#683bce",disabled:e.$v.$anyError||e.cargando},on:{click:e.actualizar}},[e._v("\n            Actualizar\n          ")]),e._v(" "),o("v-btn",{staticClass:"mt-0",attrs:{block:"",outlined:"",color:"#ff1d89"},on:{click:e.reiniciar}},[e._v("\n            Reiniciar\n          ")])],1)])],1)])}),[],!1,null,"30764bad",null);t.default=component.exports;m()(component,{VBtn:f.a,VChip:S.a,VCol:x.a,VDivider:_.a,VIcon:C.a,VRow:$.a,VSelect:R.a,VTextField:z.a,VTextarea:k.a})}}]);