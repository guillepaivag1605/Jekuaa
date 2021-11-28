var lt=Object.defineProperty,rt=Object.defineProperties;var dt=Object.getOwnPropertyDescriptors;var nt=Object.getOwnPropertySymbols;var ct=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable;var it=(i,o,t)=>o in i?lt(i,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[o]=t,I=(i,o)=>{for(var t in o||(o={}))ct.call(o,t)&&it(i,t,o[t]);if(nt)for(var t of nt(o))ut.call(o,t)&&it(i,t,o[t]);return i},b=(i,o)=>rt(i,dt(o));exports.ids=[16,17,20],exports.modules={256:function(i,o){i.exports={}},267:function(i,o,t){"use strict";var r=t(178),M=t.n(r),m=t(179),f=t.n(m),B=t(180),T=t.n(B),P=t(181),c=t.n(P),d=t(182),E=t.n(d),C=t(183),U=t.n(C),R=t(184),W=t.n(R),K=t(185),_=t.n(K),h=t(186),a=t.n(h),j=t(187),v=t.n(j),x=t(188),J=t.n(x),$=t(189),tt=t.n($),H=t(190),et=t.n(H),Q=t(256),q=t.n(Q),X=t(1),Y=t.n(X),k=t(30),N=t(0);const F=["sm","md","lg","xl"],e=(()=>F.reduce((u,l)=>(u[l]={type:[Boolean,String,Number],default:!1},u),{}))(),O=(()=>F.reduce((u,l)=>(u["offset"+Object(N.J)(l)]={type:[String,Number],default:null},u),{}))(),s=(()=>F.reduce((u,l)=>(u["order"+Object(N.J)(l)]={type:[String,Number],default:null},u),{}))(),n={col:Object.keys(e),offset:Object.keys(O),order:Object.keys(s)};function y(u,l,p){let G=u;if(!(p==null||p===!1))return l&&(G+=`-${l.replace(u,"")}`),u==="col"&&(p===""||p===!0)||(G+=`-${p}`),G.toLowerCase()}const A=new Map;o.a=Y.a.extend({name:"v-col",functional:!0,props:b(I(b(I(b(I({cols:{type:[Boolean,String,Number],default:!1}},e),{offset:{type:[String,Number],default:null}}),O),{order:{type:[String,Number],default:null}}),s),{alignSelf:{type:String,default:null,validator:u=>["auto","start","end","center","baseline","stretch"].includes(u)},tag:{type:String,default:"div"}}),render(u,{props:l,data:p,children:G,parent:st}){let z="";for(const g in l)z+=String(l[g]);let D=A.get(z);if(!D){D=[];let g;for(g in n)n[g].forEach(L=>{const Z=l[L],V=y(g,L,Z);V&&D.push(V)});const S=D.some(L=>L.startsWith("col-"));D.push({col:!S||!l.cols,[`col-${l.cols}`]:l.cols,[`offset-${l.offset}`]:l.offset,[`order-${l.order}`]:l.order,[`align-self-${l.alignSelf}`]:l.alignSelf}),A.set(z,D)}return u(l.tag,Object(k.a)(p,{class:D}),G)}})},268:function(i,o,t){"use strict";var r=t(178),M=t.n(r),m=t(179),f=t.n(m),B=t(180),T=t.n(B),P=t(181),c=t.n(P),d=t(182),E=t.n(d),C=t(183),U=t.n(C),R=t(184),W=t.n(R),K=t(185),_=t.n(K),h=t(186),a=t.n(h),j=t(187),v=t.n(j),x=t(188),J=t.n(x),$=t(189),tt=t.n($),H=t(190),et=t.n(H),Q=t(256),q=t.n(Q),X=t(1),Y=t.n(X),k=t(30),N=t(0);const F=["sm","md","lg","xl"],e=["start","end","center"];function O(D,g){return F.reduce((S,L)=>(S[D+Object(N.J)(L)]=g(),S),{})}const s=D=>[...e,"baseline","stretch"].includes(D),n=O("align",()=>({type:String,default:null,validator:s})),y=D=>[...e,"space-between","space-around"].includes(D),A=O("justify",()=>({type:String,default:null,validator:y})),u=D=>[...e,"space-between","space-around","stretch"].includes(D),l=O("alignContent",()=>({type:String,default:null,validator:u})),p={align:Object.keys(n),justify:Object.keys(A),alignContent:Object.keys(l)},G={align:"align",justify:"justify",alignContent:"align-content"};function st(D,g,S){let L=G[D];if(S!=null)return g&&(L+=`-${g.replace(D,"")}`),L+=`-${S}`,L.toLowerCase()}const z=new Map;o.a=Y.a.extend({name:"v-row",functional:!0,props:I(b(I(b(I({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:s}},n),{justify:{type:String,default:null,validator:y}}),A),{alignContent:{type:String,default:null,validator:u}}),l),render(D,{props:g,data:S,children:L}){let Z="";for(const w in g)Z+=String(g[w]);let V=z.get(Z);if(!V){V=[];let w;for(w in p)p[w].forEach(ot=>{const _t=g[ot],at=st(w,ot,_t);at&&V.push(at)});V.push({"no-gutters":g.noGutters,"row--dense":g.dense,[`align-${g.align}`]:g.align,[`justify-${g.justify}`]:g.justify,[`align-content-${g.alignContent}`]:g.alignContent}),z.set(Z,V)}return D(g.tag,Object(k.a)(S,{staticClass:"row",class:V}),L)}})},272:function(i,o,t){"use strict";var r=t(273),M=t.n(r),m=t(121),f=t(47),B=t(56),T=t(96),P=t(94),c=t(89),d=t(95),E=t(10),C=t(55),U=t(2),R=t(3),W=t(0);const K=Object(U.a)(f.a,B.a,T.a,P.a,c.a,d.a,E.a);o.a=K.extend({name:"v-dialog",directives:{ClickOutside:C.b},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(_){if(_)this.show(),this.hideScroll();else{var h;this.removeOverlay(),this.unbind(),(h=this.previousActiveElement)==null||h.focus()}},fullscreen(_){!this.isActive||(_?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(R.e)("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){typeof window!="undefined"&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(_){const h=_.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(h)||this.overlay&&h&&!this.overlay.$el.contains(h))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):P.a.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$nextTick(()=>{this.previousActiveElement=document.activeElement,this.$refs.content.focus(),this.bind()})})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(_){this.$emit("click:outside",_),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(_){if(_.keyCode===W.A.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const h=this.getActivator();this.$nextTick(()=>h&&h.focus())}this.$emit("keydown",_)},onFocusin(_){if(!_||!this.retainFocus)return;const h=_.target;if(!!h&&![document,this.$refs.content].includes(h)&&!this.$refs.content.contains(h)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(a=>a.contains(h))){const j=[...this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].find(v=>!v.hasAttribute("disabled"));j&&j.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(m.a,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:I({role:"document",tabindex:this.isActive?0:void 0},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const _=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[_]):_},genInnerContent(){const _={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(_.style=b(I({},_.style),{maxWidth:this.maxWidth==="none"?void 0:Object(W.h)(this.maxWidth),width:this.width==="auto"?void 0:Object(W.h)(this.width)})),this.$createElement("div",_,this.getContentSlot())}},render(_){return _("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":this.attach===""||this.attach===!0||this.attach==="attach"},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},273:function(i,o){i.exports={}},308:function(i,o,t){"use strict";let r={};M([{uid:"informatica",nombre:"Inform\xE1tica"},{uid:"matematica",nombre:"Matem\xE1tica"}]),m([{uid:"algoritmos",nombre:"Algoritmos"},{uid:"desarrollo-web",nombre:"Desarrollo Web"},{uid:"redes",nombre:"Redes"}],"informatica"),m([{uid:"calculo",nombre:"C\xE1lculo"}],"matematica"),f([{uid:"busqueda",nombre:"Busqueda"},{uid:"eficiencia",nombre:"Eficiencia"},{uid:"ordenacion",nombre:"Ordenaci\xF3n"}],"informatica","algoritmos"),f([{uid:"disenho-web",nombre:"Dise\xF1o web"},{uid:"vuejs",nombre:"Vue.js"}],"informatica","desarrollo-web"),f([{uid:"tcp",nombre:"TCP"}],"informatica","redes"),f([{uid:"derivada",nombre:"Derivada"}],"matematica","calculo"),o.a=r;function M(c){for(let d=0;d<c.length;d++){const E=c[d];B(E)}}function m(c,d){for(let E=0;E<c.length;E++){const C=c[E];T(C,d)}}function f(c,d,E){for(let C=0;C<c.length;C++){const U=c[C];P(U,d,E)}}function B(c){r[c.uid]=b(I({},c),{categorias:{}})}function T(c,d){r[d].categorias[c.uid]=b(I({},c),{subCategorias:{}})}function P(c,d,E){r[d].categorias[E].subCategorias[c.uid]=c}},322:function(i,o){i.exports={}},323:function(i,o){i.exports={}},330:function(i,o,t){"use strict";t.r(o);var r=function(){var a=this,j=a.$createElement,v=a._self._c||j;return v("div",[a._ssrNode('<div class="titulos" data-v-593eaf75><b class="titulo-text" data-v-593eaf75>'+a._ssrEscape(a._s(a.seccion.nombre)+" / ")+'</b> <b class="titulo-text categoria-text" data-v-593eaf75>'+a._ssrEscape(`
            `+a._s(a.categoriaSeleccionada.nombre)+`
        `)+"</b></div> "),v("v-dialog",{attrs:{scrollable:"","max-width":"300px"},model:{value:a.dialog,callback:function(x){a.dialog=x},expression:"dialog"}},[v("v-card",[v("v-card-title",[a._v("Categorias: "+a._s(a.seccion.nombre))]),a._v(" "),v("v-divider"),a._v(" "),v("v-card-text",{staticStyle:{height:"300px"}},a._l(a.categorias,function(x,J){return v("div",{key:J,staticClass:"mt-1"},[v("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"#683bce",block:"",disabled:a.categoriaSeleccionada.uid==x.uid},on:{click:function($){a.categoriaSeleccionada=x},mouseover:function($){a.hoverCategoria=x.uid},mouseleave:function($){a.hoverCategoria=null}}},[a.hoverCategoria===x.uid?v("v-icon",{staticClass:"mr-2",attrs:{right:"",dark:""}},[a._v(`
                            mdi-check
                        `)]):a._e(),a._v(" "),v("p",{staticClass:"textoBotonLista"},[a._v(`
                            `+a._s(x.nombre)+`
                        `)])],1)],1)}),0),a._v(" "),v("v-divider"),a._v(" "),v("v-card-actions",{staticClass:"justify-center"})],1)],1)],2)},M=[],m=t(308),f={data:()=>({categorias:[],categoriaSeleccionada:{uid:"",nombre:""},dialog:!1,hoverCategoria:null,informacionSecciones:m.a}),props:{seccion:Object},components:{},computed:{},watch:{categoriaSeleccionada:function(a,j){a.uid!==j.uid&&this.$emit("categoriaSeleccionada",a)}},methods:{inicializarListaCategorias(){let a=Object.keys(this.informacionSecciones[this.seccion.uid].categorias);for(let j=0;j<a.length;j++){const v=a[j];this.categorias.push({uid:this.informacionSecciones[this.seccion.uid].categorias[v].uid,nombre:this.informacionSecciones[this.seccion.uid].categorias[v].nombre})}this.categoriaSeleccionada=this.categorias[0]}},created(){this.inicializarListaCategorias()}},B=f,T=t(7),P=t(8),c=t.n(P),d=t(52),E=t(82),C=t(34),U=t(272),R=t(196),W=t(72);function K(a){var j=t(413);j.__inject__&&j.__inject__(a)}var _=Object(T.a)(B,r,M,!1,K,"593eaf75","b925d9dc"),h=o.default=_.exports;c()(_,{VBtn:d.a,VCard:E.a,VCardActions:C.b,VCardText:C.d,VCardTitle:C.e,VDialog:U.a,VDivider:R.a,VIcon:W.a})},331:function(i,o,t){"use strict";t.r(o);var r=function(){var d=this,E=d.$createElement,C=d._self._c||E;return C("div",{attrs:{id:"spinner"}},[])},M=[],m={name:"Spinner"},f=m,B=t(7);function T(d){var E=t(414);E.__inject__&&E.__inject__(d)}var P=Object(B.a)(f,r,M,!1,T,null,"33ca98b0"),c=o.default=P.exports},332:function(i,o){i.exports={}},413:function(i,o,t){"use strict";t.r(o);var r=t(322),M=t.n(r);for(var m in r)["default"].indexOf(m)<0&&function(f){t.d(o,f,function(){return r[f]})}(m)},414:function(i,o,t){"use strict";t.r(o);var r=t(323),M=t.n(r);for(var m in r)["default"].indexOf(m)<0&&function(f){t.d(o,f,function(){return r[f]})}(m)},418:function(i,o){i.exports={}},419:function(i,o){i.exports={}},420:function(i,o,t){"use strict";t.r(o);var r=t(332),M=t.n(r);for(var m in r)["default"].indexOf(m)<0&&function(f){t.d(o,f,function(){return r[f]})}(m)},424:function(i,o,t){"use strict";t.r(o);var r=function(){var e=this,O=e.$createElement,s=e._self._c||O;return s("div",{staticClass:"newMovies mt-10 mb-10"},[e._ssrNode("<div data-v-786d38f9>","</div>",[s("client-only",[s("ListaCategorias",{attrs:{seccion:e.seccion},on:{categoriaSeleccionada:function(n){e.categoria=n}}}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.mostrarCarga,expression:"mostrarCarga"}],attrs:{id:"loadingMovie"}},[s("Spinner")],1),e._v(" "),!e.mostrarCarga&&e.categoria.uid&&e.listaDatosBlogs.length?s("div",{staticClass:"custom-carousel"},[s("VueSlickCarousel",e._b({scopedSlots:e._u([{key:"prevArrow",fn:function(n){return[s("div",{staticClass:"custom-arrow arrow-prev"},[s("v-icon",{staticClass:"only-arrow",attrs:{color:"#683bce",right:"",dark:""}},[e._v(`
                mdi-skip-backward
              `)])],1)]}},{key:"nextArrow",fn:function(n){return[s("div",{staticClass:"custom-arrow arrow-next"},[s("v-icon",{staticClass:"only-arrow",attrs:{color:"#683bce",right:"",dark:""}},[e._v(`
                mdi-skip-forward
              `)])],1)]}}],null,!1,3354093529)},"VueSlickCarousel",e.settings,!1),e._l(e.listaDatosBlogs,function(n,y){return s("div",{key:y+Date.now(),staticClass:"movieDiv"},[s("v-card",{staticClass:"mx-auto imagemPosterSlide",attrs:{color:"#683bce",dark:"","max-width":"400"},on:{click:function(A){return e.mostrarDatosBlog(y)}}},[s("v-card-title",[s("span",{staticClass:"text-h6 ml-1 font-weight-light"},[e._v("Jekuaa")])]),e._v(" "),s("v-card-text",{staticClass:"text-h5 font-weight titulo"},[e._v(`
                `+e._s(n.blog.titulo)+`
              `)]),e._v(" "),s("v-card-actions",[s("v-list-item",{staticClass:"grow"},[s("v-list-item-avatar",{attrs:{color:"#ffffff"}},[n.publicador.fotoPerfil?s("v-img",{staticClass:"elevation-6",attrs:{alt:"",src:n.publicador.fotoPerfil}}):n.publicador.nombreUsuario?s("span",{staticClass:"headline inicialNombreUsuario"},[e._v(`
                      `+e._s(e.inicialNombreUsuario(n.publicador.nombreUsuario))+`
                    `)]):s("span",{staticClass:"headline inicialNombreUsuario"},[e._v(`
                      ...
                    `)])],1),e._v(" "),s("v-list-item-content",[n.publicador.nombreUsuario?s("v-list-item-title",[e._v(`
                      `+e._s(n.publicador.nombreUsuario)+`
                    `)]):s("v-list-item-title",[e._v(`
                      Cargando...
                    `)])],1),e._v(" "),s("v-row",{staticClass:"mr-0",attrs:{align:"center",justify:"end"}},[s("v-icon",{staticClass:"mr-1"},[e._v(`
                      mdi-heart
                    `)]),e._v(" "),s("span",{staticClass:"subheading mr-2"},[e._v(`
                      `+e._s(n.blog.cantidadMeGusta)+`
                    `)])],1)],1)],1)],1)],1)}),0)],1):e._e(),e._v(" "),s("v-dialog",{attrs:{"max-width":"800px"},model:{value:e.dialogDatosBlog,callback:function(n){e.dialogDatosBlog=n},expression:"dialogDatosBlog"}},[e.datosBlog?s("v-card",[s("v-img",{staticClass:"white--text",attrs:{src:e.datosBlog.imgBlog,height:"200px"}},[s("v-card-title",[s("span",[e._v(`
                `+e._s(e.datosBlog.blog.titulo)+`
              `)]),e._v(" "),s("v-spacer"),e._v(" "),s("v-btn",{attrs:{icon:"",color:"white"},on:{click:function(n){e.dialogDatosBlog=!1}}},[s("v-icon",[e._v(`
                  mdi-close
                `)])],1)],1)],1),e._v(" "),s("v-card-title",[e._v(`
            `+e._s(e.datosBlog.blog.titulo)+`
          `)]),e._v(" "),s("v-card-subtitle",[e._v(`
            `+e._s(e.datosBlog.blog.cantidadMeGusta)+` me gusta
          `)]),e._v(" "),s("v-card-text",[s("div",{},[s("v-row",{staticClass:"mb-6",attrs:{"no-gutters":""}},[s("v-col",{attrs:{lg:"8",md:"8"}},[s("div",{staticClass:"mt-4 pb-3"},[e._v(`
                    `+e._s(e.datosBlog.blog.descripcion)+`
                  `)]),e._v(" "),s("v-divider"),e._v(" "),s("div",{staticClass:"mt-5",staticStyle:{display:"block"}},[s("b",[e._v("Fecha creaci\xF3n: ")]),e._v(" "+e._s(e.timeAgo(e.datosBlog.blog.fechaCreacion))+`
                  `)]),e._v(" "),s("div",{staticStyle:{display:"block"}},[s("b",[e._v("Fecha actualizaci\xF3n: ")]),e._v(" "+e._s(e.timeAgo(e.datosBlog.blog.fechaActualizacion))+`
                  `)])],1),e._v(" "),s("v-col",[s("div",[s("v-card-text",[e._v(`
                      Secci\xF3n: `),s("nuxt-link",{staticClass:"link-detalle",attrs:{to:"/blogs/"+e.seccion.uid}},[e._v(" "+e._s(e.seccion.nombre)+" ")])],1),e._v(" "),s("v-card-text",[e._v(`
                      Categoria: `),s("nuxt-link",{staticClass:"link-detalle",attrs:{to:"/blogs/"+e.seccion.uid+"/"+e.categoria.uid}},[e._v(" "+e._s(e.categoria.nombre)+" ")])],1),e._v(" "),s("v-card-text",[e._v(`
                      Sub-categorias: `),e._l(e.datosBlog.blog.subCategorias,function(n,y){return s("div",{key:y,staticStyle:{display:"inline"}},[y<e.datosBlog.blog.subCategorias.length-1?s("nuxt-link",{staticClass:"link-detalle",attrs:{to:"/blogs/"+e.seccion.uid+"/"+e.categoria.uid+"/"+n}},[e._v(`
                          `+e._s(n)+`, 
                        `)]):s("nuxt-link",{staticClass:"link-detalle",attrs:{to:"/blogs/"+e.seccion.uid+"/"+e.categoria.uid+"/"+n}},[e._v(`
                          `+e._s(n)+`
                        `)])],1)})],2)],1)])],1)],1)]),e._v(" "),s("v-card-actions",[s("v-spacer"),e._v(" "),s("v-btn",{attrs:{color:"#683bce",text:"",to:"/blog/"+e.datosBlog.blog.referencia}},[e._v(`
              Ver blog
            `)])],1)],1):e._e()],1)],1)],1)])},M=[],m=t(232),f=t.n(m),B=t(418),T=t(419),P=t(330),c=t(233),d=t.n(c),E=t(234),C=t.n(E),U=t(331);d.a.addLocale(C.a),d.a.setDefaultLocale("es");var R={name:"ListaBlogs",data(){return{listaDatosBlogs:[],mostrarCarga:!0,paginationButtons:!1,cantidadBlogs:5,categoria:{uid:"",nombre:""},dialogDatosBlog:!1,datosBlog:null,settings:{infinite:!1,arrows:!0,slidesPerRow:5,speed:1e3,responsive:[{breakpoint:1930,settings:{slidesPerRow:4}},{breakpoint:1550,settings:{slidesPerRow:3}},{breakpoint:1180,settings:{slidesPerRow:2}},{breakpoint:800,settings:{slidesPerRow:1}}]}}},props:{seccion:Object},components:{Spinner:U.default,VueSlickCarousel:f.a,ListaCategorias:P.default},methods:{mostrarDatosBlog(e){this.dialogDatosBlog=!0,this.datosBlog=this.listaDatosBlogs[e]},timeAgo(e){return new d.a("es-ES").format(e._seconds*1e3)},inicialNombreUsuario(e){return e?e[0].toUpperCase():""}},computed:{listarSubCategorias:function(){const e=this.datosBlog.blog.subCategorias;let O="";for(let s=0;s<e.length;s++)O+=`${e[s]}`,s<e.length-1&&(O+=", ");return O}},watch:{dialogDatosBlog:function(e,O){e||(this.datosBlog=null)},categoria:async function(e,O){if(e.uid!==O.uid)try{this.mostrarCarga=!0;let s={seccion:this.seccion.uid,categoria:this.categoria.uid,cantidad:this.cantidadBlogs},n={headers:{"Content-Type":"application/json"}};const A=(await this.$axios.post("/blog/estudiante/listaBlogsPorMG",s,n)).data.resultado;let u=[];for(let l=0;l<A.length;l++){const p=A[l];u.push({blog:p,publicador:{fotoPerfil:"",nombreUsuario:""}})}this.listaDatosBlogs=u}catch(s){console.error(s);const n=await this.$store.dispatch("modules/sistema/errorHandler",s)}finally{this.mostrarCarga=!1}},listaDatosBlogs:async function(e,O){let s={headers:{"Content-Type":"application/json"}};for(let n=0;n<e.length;n++){const A={uid:e[n].blog.publicador},u=await this.$axios.post("/usuarios/estudiante/authUsuario",A,s);this.listaDatosBlogs[n].publicador.nombreUsuario=u.data.resultado.displayName,this.listaDatosBlogs[n].publicador.fotoPerfil=u.data.resultado.photoURL}}},async mounted(){}},W=R,K=t(7),_=t(8),h=t.n(_),a=t(52),j=t(82),v=t(34),x=t(267),J=t(272),$=t(196),tt=t(72),H=t(62),et=t(53),Q=t(81),q=t(11),X=t(268),Y=t(209);function k(e){var O=t(420);O.__inject__&&O.__inject__(e)}var N=Object(K.a)(W,r,M,!1,k,"786d38f9","657887e2"),F=o.default=N.exports;h()(N,{ListaCategorias:t(330).default,Spinner:t(331).default}),h()(N,{VBtn:a.a,VCard:j.a,VCardActions:v.b,VCardSubtitle:v.c,VCardText:v.d,VCardTitle:v.e,VCol:x.a,VDialog:J.a,VDivider:$.a,VIcon:tt.a,VImg:H.a,VListItem:et.a,VListItemAvatar:Q.a,VListItemContent:q.g,VListItemTitle:q.k,VRow:X.a,VSpacer:Y.a})}};

//# sourceMappingURL=lista-blogs.js.map