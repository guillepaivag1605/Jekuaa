(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{647:function(e,t,n){},689:function(e,t,n){"use strict";n(647)},787:function(e,t,n){"use strict";n.r(t);var o=n(165),d=(n(34),n(6),n(48),n(51),n(636),n(354),{name:"",data:function(){return{file:null,urlVideo:""}},components:{},props:{uidCurso:String,uidUnidad:String,uidClase:String},methods:{launchFilePicker:function(){this.$refs.file.click()},onFileChange:function(e,t){this.file=t[0],this.urlVideo=URL.createObjectURL(this.file)},sendVideo:function(){this.$emit("sendVideo",{uidCurso:this.uidCurso,uidUnidad:this.uidUnidad,uidClase:this.uidClase,file:this.file,urlVideo:this.urlVideo})}}}),r=(n(689),n(32)),component=Object(r.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-center"},[t("input",{ref:"file",attrs:{type:"file"},on:{change:function(t){return e.onFileChange(t.target.name,t.target.files)}}}),e._v(" "),t("div",{staticClass:"my-7 contenedor_contenido_video"},[e.file&&e.urlVideo?t("video",{attrs:{controls:"",poster:"",preload:"auto","data-setup":"{}",controlslist:"nodownload",src:e.urlVideo}},[t("p",{},[e._v("\n                To view this video please enable JavaScript, and consider upgrading to a\n                web browser that supports HTML5 video\n            ")])]):t("div",[t("p",{staticClass:"texto_sin_video"},[e._v("\n                Nos falta un video para continuar :c\n            ")])])]),e._v(" "),t(o.a,{attrs:{disabled:!e.file,color:"primary",text:""},on:{click:e.sendVideo}},[e._v("\n        Subir video\n    ")])],1)}),[],!1,null,"712056bb",null);t.default=component.exports}}]);