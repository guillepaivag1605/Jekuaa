(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{529:function(b,D,e){},530:function(b,D,e){"use strict";var E=e(28),X=e(85),T=e(15),K=e(99),x=e(111),k=e(6),C=k.default.extend({name:"rippleable",directives:{ripple:x.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.ripple?(p.staticClass="v-input--selection-controls__ripple",p.directives=p.directives||[],p.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",p)):null}}}),V=e(543),A=e(8);function B(_){_.preventDefault()}var L=D.a=Object(A.a)(K.a,C,V.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(!!this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return this.multiple===!0||this.multiple===null&&Array.isArray(this.internalValue)},isActive:function(){var p=this,u=this.value,h=this.internalValue;return this.isMultiple?Array.isArray(h)?h.some(function(d){return p.valueComparator(d,u)}):!1:this.trueValue===void 0||this.falseValue===void 0?u?this.valueComparator(u,h):Boolean(h):this.valueComparator(h,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return!this.isDisabled&&!this.validationState?void 0:this.validationState}},watch:{inputValue:function(p){this.lazyValue=p,this.hasColor=p}},methods:{genLabel:function(){var p=K.a.options.methods.genLabel.call(this);return p&&(p.data.on={click:B},p)},genInput:function(p,u){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:p,type:p},u),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:B},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(p){this.onChange(),this.$emit("click",p)},onChange:function(){var p=this;if(!!this.isInteractive){var u=this.value,h=this.internalValue;if(this.isMultiple){Array.isArray(h)||(h=[]);var d=h.length;h=h.filter(function(U){return!p.valueComparator(U,u)}),h.length===d&&h.push(u)}else this.trueValue!==void 0&&this.falseValue!==void 0?h=this.valueComparator(h,this.trueValue)?this.falseValue:this.trueValue:u?h=this.valueComparator(h,u)?null:u:h=!h;this.validate(!0,h),this.internalValue=h,this.hasColor=h}},onFocus:function(){this.isFocused=!0},onKeydown:function(p){}}})},615:function(b,D,e){},733:function(b,D,e){},734:function(b,D,e){},735:function(b,D,e){},736:function(b,D,e){},801:function(b,D,e){"use strict";var E=e(14),X=e.n(E),T=e(12),K=e.n(T),x=e(17),k=e.n(x),C=e(13),V=e.n(C),A=e(18),B=e.n(A),L=e(4),_=e(174),p=e.n(_),u=e(24),h=e.n(u),d=e(36),U=e.n(d),Y=e(15),G=e.n(Y),g=e(733),st=e.n(g),J=e(144),Q=e(130),Z=e(137),y=e(8),$=e(16);function M(m,c){var f=Object.keys(m);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(m);c&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(m,t).enumerable})),f.push.apply(f,n)}return f}function R(m){for(var c=1;c<arguments.length;c++){var f=arguments[c]!=null?arguments[c]:{};c%2?M(Object(f),!0).forEach(function(n){Object(L.a)(m,n,f[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(f)):M(Object(f)).forEach(function(n){Object.defineProperty(m,n,Object.getOwnPropertyDescriptor(f,n))})}return m}var P=Object(y.a)(J.a,Object(Q.b)("stepper"),Z.a);D.a=P.extend({name:"v-stepper",provide:function(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{altLabels:Boolean,nonLinear:Boolean,flat:Boolean,vertical:Boolean},data:function(){var c={isBooted:!1,steps:[],content:[],isReverse:!1};return c.internalLazyValue=this.value!=null?this.value:(c[0]||{}).step||1,c},computed:{classes:function(){return R({"v-stepper--flat":this.flat,"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear},J.a.options.computed.classes.call(this))},styles:function(){return R({},J.a.options.computed.styles.call(this))}},watch:{internalValue:function(c,f){this.isReverse=Number(c)<Number(f),f&&(this.isBooted=!0),this.updateView()}},created:function(){this.$listeners.input&&Object($.a)("@input","@change",this)},mounted:function(){this.updateView()},methods:{register:function(c){c.$options.name==="v-stepper-step"?this.steps.push(c):c.$options.name==="v-stepper-content"&&(c.isVertical=this.vertical,this.content.push(c))},unregister:function(c){c.$options.name==="v-stepper-step"?this.steps=this.steps.filter(function(f){return f!==c}):c.$options.name==="v-stepper-content"&&(c.isVertical=this.vertical,this.content=this.content.filter(function(f){return f!==c}))},stepClick:function(c){var f=this;this.$nextTick(function(){return f.internalValue=c})},updateView:function(){for(var c=this.steps.length;--c>=0;)this.steps[c].toggle(this.internalValue);for(var f=this.content.length;--f>=0;)this.content[f].toggle(this.internalValue,this.isReverse)}},render:function(c){return c(this.tag,{staticClass:"v-stepper",class:this.classes,style:this.styles},this.$slots.default)}})},802:function(b,D,e){"use strict";var E=e(24),X=e.n(E),T=e(57),K=e.n(T),x=e(28),k=e.n(x),C=e(85),V=e.n(C),A=e(124),B=e(130),L=e(2),_=e(8),p=Object(_.a)(Object(B.a)("stepper","v-stepper-content","v-stepper"));D.a=p.extend().extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data:function(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{computedTransition:function(){var h=this.$vuetify.rtl?!this.isReverse:this.isReverse;return h?A.f:A.g},styles:function(){return this.isVertical?{height:Object(L.f)(this.height)}:{}}},watch:{isActive:function(h,d){if(h&&d==null){this.height="auto";return}!this.isVertical||(this.isActive?this.enter():this.leave())}},mounted:function(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition:function(h){!this.isActive||h.propertyName!=="height"||(this.height="auto")},enter:function(){var h=this,d=0;requestAnimationFrame(function(){d=h.$refs.wrapper.scrollHeight}),this.height=0,setTimeout(function(){return h.isActive&&(h.height=d||"auto")},450)},leave:function(){var h=this;this.height=this.$refs.wrapper.clientHeight,setTimeout(function(){return h.height=0},10)},toggle:function(h,d){this.isActive=h.toString()===this.step.toString(),this.isReverse=d}},render:function(h){var d={staticClass:"v-stepper__content"},U={staticClass:"v-stepper__wrapper",style:this.styles,ref:"wrapper"};this.isVertical||(d.directives=[{name:"show",value:this.isActive}]);var Y=h("div",U,[this.$slots.default]),G=h("div",d,[Y]);return h(this.computedTransition,{on:this.$listeners},[G])}})},803:function(b,D,e){"use strict";var E=e(24),X=e.n(E),T=e(28),K=e.n(T),x=e(85),k=e.n(x),C=e(63),V=e(25),A=e(130),B=e(111),L=e(8),_=Object(L.a)(V.a,Object(A.a)("stepper","v-stepper-step","v-stepper"));D.a=_.extend().extend({name:"v-stepper-step",directives:{ripple:B.a},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},errorIcon:{type:String,default:"$error"},rules:{type:Array,default:function(){return[]}},step:[Number,String]},data:function(){return{isActive:!1,isInactive:!0}},computed:{classes:function(){return{"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error error--text":this.hasError,"v-stepper__step--complete":this.complete}},hasError:function(){return this.rules.some(function(u){return u()!==!0})}},mounted:function(){this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.stepper&&this.stepper.unregister(this)},methods:{click:function(u){u.stopPropagation(),this.$emit("click",u),this.editable&&this.stepClick(this.step)},genIcon:function(u){return this.$createElement(C.a,u)},genLabel:function(){return this.$createElement("div",{staticClass:"v-stepper__label"},this.$slots.default)},genStep:function(){var u=!this.hasError&&(this.complete||this.isActive)?this.color:!1;return this.$createElement("span",this.setBackgroundColor(u,{staticClass:"v-stepper__step__step"}),this.genStepContent())},genStepContent:function(){var u=[];return this.hasError?u.push(this.genIcon(this.errorIcon)):this.complete?this.editable?u.push(this.genIcon(this.editIcon)):u.push(this.genIcon(this.completeIcon)):u.push(String(this.step)),u},toggle:function(u){this.isActive=u.toString()===this.step.toString(),this.isInactive=Number(u)<Number(this.step)}},render:function(u){return u("div",{staticClass:"v-stepper__step",class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click}},[this.genStep(),this.genLabel()])}})},804:function(b,D,e){"use strict";var E=e(14),X=e.n(E),T=e(12),K=e.n(T),x=e(15),k=e.n(x),C=e(17),V=e.n(C),A=e(13),B=e.n(A),L=e(18),_=e.n(L),p=e(125),u=e(4),h=e(174),d=e.n(h),U=e(529),Y=e.n(U),G=e(734),g=e.n(G),st=e(530),J=e(99),Q=e(131),Z=e(124),y=e(239),$=e(2),M=["title"];function R(m,c){var f=Object.keys(m);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(m);c&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(m,t).enumerable})),f.push.apply(f,n)}return f}function P(m){for(var c=1;c<arguments.length;c++){var f=arguments[c]!=null?arguments[c]:{};c%2?R(Object(f),!0).forEach(function(n){Object(u.a)(m,n,f[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(f)):R(Object(f)).forEach(function(n){Object.defineProperty(m,n,Object.getOwnPropertyDescriptor(f,n))})}return m}D.a=st.a.extend({name:"v-switch",directives:{Touch:Q.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return P(P({},J.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){if(this.hasError&&this.shouldValidate)return"error";if(this.hasSuccess)return"success";if(this.hasColor!==null)return this.computedColor},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var c=this.attrs$,f=c.title,n=Object(p.a)(c,M);return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",P(P({},this.attrs),n)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",P({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",P({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(Z.c,{},[this.loading===!1?null:this.$slots.progress||this.$createElement(y.a,{props:{color:this.loading===!0||this.loading===""?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(c){(c.keyCode===$.s.left&&this.isActive||c.keyCode===$.s.right&&!this.isActive)&&this.onChange()}}})},840:function(b,D,e){"use strict";var E=e(29),X=e(80),T=e(35),K=e(56),x=e(24),k=e(43),C=e(87),V=e(33),A=e(151),B=e(86),L=e(109),_=e(736),p=e(577),u=e(563),h=e(8),d;(function(o){o[o.Hour=1]="Hour",o[o.Minute=2]="Minute",o[o.Second=3]="Second"})(d||(d={}));var U=Object(h.a)(p.a).extend({name:"v-time-picker-title",props:{ampm:Boolean,ampmReadonly:Boolean,disabled:Boolean,hour:Number,minute:Number,second:Number,period:{type:String,validator:function(i){return i==="am"||i==="pm"}},readonly:Boolean,useSeconds:Boolean,selecting:Number},methods:{genTime:function(){var i=this.hour;this.ampm&&(i=i?(i-1)%12+1:12);var s=this.hour==null?"--":this.ampm?String(i):Object(u.a)(i),l=this.minute==null?"--":Object(u.a)(this.minute),v=[this.genPickerButton("selecting",d.Hour,s,this.disabled),this.$createElement("span",":"),this.genPickerButton("selecting",d.Minute,l,this.disabled)];if(this.useSeconds){var I=this.second==null?"--":Object(u.a)(this.second);v.push(this.$createElement("span",":")),v.push(this.genPickerButton("selecting",d.Second,I,this.disabled))}return this.$createElement("div",{class:"v-time-picker-title__time"},v)},genAmPm:function(){return this.$createElement("div",{staticClass:"v-time-picker-title__ampm",class:{"v-time-picker-title__ampm--readonly":this.ampmReadonly}},[!this.ampmReadonly||this.period==="am"?this.genPickerButton("period","am",this.$vuetify.lang.t("$vuetify.timePicker.am"),this.disabled||this.readonly):null,!this.ampmReadonly||this.period==="pm"?this.genPickerButton("period","pm",this.$vuetify.lang.t("$vuetify.timePicker.pm"),this.disabled||this.readonly):null])}},render:function(i){var s=[this.genTime()];return this.ampm&&s.push(this.genAmPm()),i("div",{staticClass:"v-time-picker-title"},s)}}),Y=e(4),G=e(578),g=e(14),st=e(12),J=e(15),Q=e(17),Z=e(13),y=e(18),$=e(735),M=e(25),R=e(22);function P(o,i){var s=Object.keys(o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(o);i&&(l=l.filter(function(v){return Object.getOwnPropertyDescriptor(o,v).enumerable})),s.push.apply(s,l)}return s}function m(o){for(var i=1;i<arguments.length;i++){var s=arguments[i]!=null?arguments[i]:{};i%2?P(Object(s),!0).forEach(function(l){Object(Y.a)(o,l,s[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(s)):P(Object(s)).forEach(function(l){Object.defineProperty(o,l,Object.getOwnPropertyDescriptor(s,l))})}return o}var c=Object(h.a)(M.a,R.a).extend({name:"v-time-picker-clock",props:{allowedValues:Function,ampm:Boolean,disabled:Boolean,double:Boolean,format:{type:Function,default:function(i){return i}},max:{type:Number,required:!0},min:{type:Number,required:!0},scrollable:Boolean,readonly:Boolean,rotate:{type:Number,default:0},step:{type:Number,default:1},value:Number},data:function(){return{inputValue:this.value,isDragging:!1,valueOnMouseDown:null,valueOnMouseUp:null}},computed:{count:function(){return this.max-this.min+1},degreesPerUnit:function(){return 360/this.roundCount},degrees:function(){return this.degreesPerUnit*Math.PI/180},displayedValue:function(){return this.value==null?this.min:this.value},innerRadiusScale:function(){return .62},roundCount:function(){return this.double?this.count/2:this.count}},watch:{value:function(i){this.inputValue=i}},methods:{wheel:function(i){i.preventDefault();var s=Math.sign(-i.deltaY||1),l=this.displayedValue;do l=l+s,l=(l-this.min+this.count)%this.count+this.min;while(!this.isAllowed(l)&&l!==this.displayedValue);l!==this.displayedValue&&this.update(l)},isInner:function(i){return this.double&&i-this.min>=this.roundCount},handScale:function(i){return this.isInner(i)?this.innerRadiusScale:1},isAllowed:function(i){return!this.allowedValues||this.allowedValues(i)},genValues:function(){for(var i=[],s=this.min;s<=this.max;s=s+this.step){var l=s===this.value&&(this.color||"accent");i.push(this.$createElement("span",this.setBackgroundColor(l,{staticClass:"v-time-picker-clock__item",class:{"v-time-picker-clock__item--active":s===this.displayedValue,"v-time-picker-clock__item--disabled":this.disabled||!this.isAllowed(s)},style:this.getTransform(s),domProps:{innerHTML:"<span>".concat(this.format(s),"</span>")}})))}return i},genHand:function(){var i="scaleY(".concat(this.handScale(this.displayedValue),")"),s=this.rotate+this.degreesPerUnit*(this.displayedValue-this.min),l=this.value!=null&&(this.color||"accent");return this.$createElement("div",this.setBackgroundColor(l,{staticClass:"v-time-picker-clock__hand",class:{"v-time-picker-clock__hand--inner":this.isInner(this.value)},style:{transform:"rotate(".concat(s,"deg) ").concat(i)}}))},getTransform:function(i){var s=this.getPosition(i),l=s.x,v=s.y;return{left:"".concat(50+l*50,"%"),top:"".concat(50+v*50,"%")}},getPosition:function(i){var s=this.rotate*Math.PI/180;return{x:Math.sin((i-this.min)*this.degrees+s)*this.handScale(i),y:-Math.cos((i-this.min)*this.degrees+s)*this.handScale(i)}},onMouseDown:function(i){i.preventDefault(),this.valueOnMouseDown=null,this.valueOnMouseUp=null,this.isDragging=!0,this.onDragMove(i)},onMouseUp:function(i){i.stopPropagation(),this.isDragging=!1,this.valueOnMouseUp!==null&&this.isAllowed(this.valueOnMouseUp)&&this.$emit("change",this.valueOnMouseUp)},onDragMove:function(i){if(i.preventDefault(),!(!this.isDragging&&i.type!=="click"||!this.$refs.clock))for(var s=this.$refs.clock.getBoundingClientRect(),l=s.width,v=s.top,I=s.left,j=this.$refs.innerClock.getBoundingClientRect(),w=j.width,q=("touches"in i)?i.touches[0]:i,tt=q.clientX,nt=q.clientY,W={x:l/2,y:-l/2},et={x:tt-I,y:v-nt},it=Math.round(this.angle(W,et)-this.rotate+360)%360,H=this.double&&this.euclidean(W,et)<(w+w*this.innerRadiusScale)/4,F=Math.ceil(15/this.degreesPerUnit),N,z=0;z<F;z++){if(N=this.angleToValue(it+z*this.degreesPerUnit,H),this.isAllowed(N))return this.setMouseDownValue(N);if(N=this.angleToValue(it-z*this.degreesPerUnit,H),this.isAllowed(N))return this.setMouseDownValue(N)}},angleToValue:function(i,s){var l=(Math.round(i/this.degreesPerUnit)+(s?this.roundCount:0))%this.count+this.min;return i<360-this.degreesPerUnit/2?l:s?this.max-this.roundCount+1:this.min},setMouseDownValue:function(i){this.valueOnMouseDown===null&&(this.valueOnMouseDown=i),this.valueOnMouseUp=i,this.update(i)},update:function(i){this.inputValue!==i&&(this.inputValue=i,this.$emit("input",i))},euclidean:function(i,s){var l=s.x-i.x,v=s.y-i.y;return Math.sqrt(l*l+v*v)},angle:function(i,s){var l=2*Math.atan2(s.y-i.y-this.euclidean(i,s),s.x-i.x);return Math.abs(l*180/Math.PI)}},render:function(i){var s=this,l={staticClass:"v-time-picker-clock",class:m({"v-time-picker-clock--indeterminate":this.value==null},this.themeClasses),on:this.readonly||this.disabled?void 0:{mousedown:this.onMouseDown,mouseup:this.onMouseUp,mouseleave:function(I){return s.isDragging&&s.onMouseUp(I)},touchstart:this.onMouseDown,touchend:this.onMouseUp,mousemove:this.onDragMove,touchmove:this.onDragMove},ref:"clock"};return this.scrollable&&l.on&&(l.on.wheel=this.wheel),i("div",l,[i("div",{staticClass:"v-time-picker-clock__inner",ref:"innerClock"},[this.genHand(),this.genValues()])])}}),f=e(640),n=e(2),t=Object(n.g)(24),r=Object(n.g)(12),a=r.map(function(o){return o+12}),O=Object(n.g)(60),S={1:"hour",2:"minute",3:"second"},rt=D.a=Object(h.a)(f.a,p.a).extend({name:"v-time-picker",props:{allowedHours:[Function,Array],allowedMinutes:[Function,Array],allowedSeconds:[Function,Array],disabled:Boolean,format:{type:String,default:"ampm",validator:function(i){return["ampm","24hr"].includes(i)}},min:String,max:String,readonly:Boolean,scrollable:Boolean,useSeconds:Boolean,value:null,ampmInTitle:Boolean},data:function(){return{inputHour:null,inputMinute:null,inputSecond:null,lazyInputHour:null,lazyInputMinute:null,lazyInputSecond:null,period:"am",selecting:d.Hour}},computed:{selectingHour:{get:function(){return this.selecting===d.Hour},set:function(i){this.selecting=d.Hour}},selectingMinute:{get:function(){return this.selecting===d.Minute},set:function(i){this.selecting=d.Minute}},selectingSecond:{get:function(){return this.selecting===d.Second},set:function(i){this.selecting=d.Second}},isAllowedHourCb:function(){var i=this,s;if(this.allowedHours instanceof Array?s=function(j){return i.allowedHours.includes(j)}:s=this.allowedHours,!this.min&&!this.max)return s;var l=this.min?Number(this.min.split(":")[0]):0,v=this.max?Number(this.max.split(":")[0]):23;return function(I){return I>=l*1&&I<=v*1&&(!s||s(I))}},isAllowedMinuteCb:function(){var i=this,s,l=!this.isAllowedHourCb||this.inputHour===null||this.isAllowedHourCb(this.inputHour);if(this.allowedMinutes instanceof Array?s=function(F){return i.allowedMinutes.includes(F)}:s=this.allowedMinutes,!this.min&&!this.max)return l?s:function(){return!1};var v=this.min?this.min.split(":").map(Number):[0,0],I=Object(E.a)(v,2),j=I[0],w=I[1],q=this.max?this.max.split(":").map(Number):[23,59],tt=Object(E.a)(q,2),nt=tt[0],W=tt[1],et=j*60+w*1,it=nt*60+W*1;return function(H){var F=60*i.inputHour+H;return F>=et&&F<=it&&l&&(!s||s(H))}},isAllowedSecondCb:function(){var i=this,s,l=!this.isAllowedHourCb||this.inputHour===null||this.isAllowedHourCb(this.inputHour),v=l&&(!this.isAllowedMinuteCb||this.inputMinute===null||this.isAllowedMinuteCb(this.inputMinute));if(this.allowedSeconds instanceof Array?s=function(ot){return i.allowedSeconds.includes(ot)}:s=this.allowedSeconds,!this.min&&!this.max)return v?s:function(){return!1};var I=this.min?this.min.split(":").map(Number):[0,0,0],j=Object(E.a)(I,3),w=j[0],q=j[1],tt=j[2],nt=this.max?this.max.split(":").map(Number):[23,59,59],W=Object(E.a)(nt,3),et=W[0],it=W[1],H=W[2],F=w*3600+q*60+(tt||0)*1,N=et*3600+it*60+(H||0)*1;return function(z){var ot=3600*i.inputHour+60*i.inputMinute+z;return ot>=F&&ot<=N&&v&&(!s||s(z))}},isAmPm:function(){return this.format==="ampm"}},watch:{value:"setInputData"},mounted:function(){this.setInputData(this.value),this.$on("update:period",this.setPeriod)},methods:{genValue:function(){return this.inputHour!=null&&this.inputMinute!=null&&(!this.useSeconds||this.inputSecond!=null)?"".concat(Object(u.a)(this.inputHour),":").concat(Object(u.a)(this.inputMinute))+(this.useSeconds?":".concat(Object(u.a)(this.inputSecond)):""):null},emitValue:function(){var i=this.genValue();i!==null&&this.$emit("input",i)},setPeriod:function(i){if(this.period=i,this.inputHour!=null){var s=this.inputHour+(i==="am"?-12:12);this.inputHour=this.firstAllowed("hour",s),this.emitValue()}},setInputData:function(i){if(i==null||i==="")this.inputHour=null,this.inputMinute=null,this.inputSecond=null;else if(i instanceof Date)this.inputHour=i.getHours(),this.inputMinute=i.getMinutes(),this.inputSecond=i.getSeconds();else{var s=i.trim().toLowerCase().match(/^(\d+):(\d+)(:(\d+))?([ap]m)?$/)||new Array(6),l=Object(E.a)(s,6),v=l[1],I=l[2],j=l[4],w=l[5];this.inputHour=w?this.convert12to24(parseInt(v,10),w):parseInt(v,10),this.inputMinute=parseInt(I,10),this.inputSecond=parseInt(j||0,10)}this.period=this.inputHour==null||this.inputHour<12?"am":"pm"},convert24to12:function(i){return i?(i-1)%12+1:12},convert12to24:function(i,s){return i%12+(s==="pm"?12:0)},onInput:function(i){this.selecting===d.Hour?this.inputHour=this.isAmPm?this.convert12to24(i,this.period):i:this.selecting===d.Minute?this.inputMinute=i:this.inputSecond=i,this.emitValue()},onChange:function(i){this.$emit("click:".concat(S[this.selecting]),i);var s=this.selecting===(this.useSeconds?d.Second:d.Minute);if(this.selecting===d.Hour?this.selecting=d.Minute:this.useSeconds&&this.selecting===d.Minute&&(this.selecting=d.Second),!(this.inputHour===this.lazyInputHour&&this.inputMinute===this.lazyInputMinute&&(!this.useSeconds||this.inputSecond===this.lazyInputSecond))){var l=this.genValue();l!==null&&(this.lazyInputHour=this.inputHour,this.lazyInputMinute=this.inputMinute,this.useSeconds&&(this.lazyInputSecond=this.inputSecond),s&&this.$emit("change",l))}},firstAllowed:function(i,s){var l=i==="hour"?this.isAllowedHourCb:i==="minute"?this.isAllowedMinuteCb:this.isAllowedSecondCb;if(!l)return s;var v=i==="minute"||i==="second"?O:this.isAmPm?s<12?r:a:t,I=v.find(function(j){return l((j+s)%v.length+v[0])});return((I||0)+s)%v.length+v[0]},genClock:function(){return this.$createElement(c,{props:{allowedValues:this.selecting===d.Hour?this.isAllowedHourCb:this.selecting===d.Minute?this.isAllowedMinuteCb:this.isAllowedSecondCb,color:this.color,dark:this.dark,disabled:this.disabled,double:this.selecting===d.Hour&&!this.isAmPm,format:this.selecting===d.Hour?this.isAmPm?this.convert24to12:function(i){return i}:function(i){return Object(u.a)(i,2)},light:this.light,max:this.selecting===d.Hour?this.isAmPm&&this.period==="am"?11:23:59,min:this.selecting===d.Hour&&this.isAmPm&&this.period==="pm"?12:0,readonly:this.readonly,scrollable:this.scrollable,size:Number(this.width)-(!this.fullWidth&&this.landscape?80:20),step:this.selecting===d.Hour?1:5,value:this.selecting===d.Hour?this.inputHour:this.selecting===d.Minute?this.inputMinute:this.inputSecond},on:{input:this.onInput,change:this.onChange},ref:"clock"})},genClockAmPm:function(){return this.$createElement("div",this.setTextColor(this.color||"primary",{staticClass:"v-time-picker-clock__ampm"}),[this.genPickerButton("period","am",this.$vuetify.lang.t("$vuetify.timePicker.am"),this.disabled||this.readonly),this.genPickerButton("period","pm",this.$vuetify.lang.t("$vuetify.timePicker.pm"),this.disabled||this.readonly)])},genPickerBody:function(){return this.$createElement("div",{staticClass:"v-time-picker-clock__container",key:this.selecting},[!this.ampmInTitle&&this.isAmPm&&this.genClockAmPm(),this.genClock()])},genPickerTitle:function(){var i=this;return this.$createElement(U,{props:{ampm:this.isAmPm,ampmReadonly:this.isAmPm&&!this.ampmInTitle,disabled:this.disabled,hour:this.inputHour,minute:this.inputMinute,second:this.inputSecond,period:this.period,readonly:this.readonly,useSeconds:this.useSeconds,selecting:this.selecting},on:{"update:selecting":function(l){return i.selecting=l},"update:period":function(l){return i.$emit("update:period",l)}},ref:"title",slot:"title"})}},render:function(){return this.genPicker("v-picker--time")}})},846:function(b,D,e){"use strict";var E=e(14),X=e(12),T=e(15),K=e(17),x=e(13),k=e(18),C=e(20),V=e(4),A=e(28),B=e(85),L=e(109),_=e(267),p=e(49),u=e(36),h=e(35),d=e(56),U=e(214),Y=e(213),G=e(615),g=e(635),st=e(80),J=e(86),Q=e(262),Z=e(88),y=e(2);function $(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter(function(O){return Object.getOwnPropertyDescriptor(n,O).enumerable})),r.push.apply(r,a)}return r}function M(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?$(Object(r),!0).forEach(function(a){Object(V.a)(n,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(r,a))})}return n}var R=M(M({},g.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1}),P=g.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,r,a){return a.toLocaleLowerCase().indexOf(r.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:g.a.options.props.menuProps.type,default:function(){return R}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return M(M({},g.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map(function(r){return t.getValue(r)})},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some(function(r){return!t.hasItem(r)}):this.filteredItems.length>0},currentRange:function(){return this.selectedItem==null?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||this.internalSearch==null?this.allItems:this.allItems.filter(function(r){var a=Object(y.n)(r,t.itemText),O=a!=null?String(a):"";return t.filter(r,String(t.internalSearch),O)})},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return this.isFocused?this.hasDisplayedItems||!this.hideNoData:!1},$_menuProps:function(){var t=g.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),M(M({},R),t)},searchIsDirty:function(){return this.internalSearch!=null&&this.internalSearch!==""},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find(function(r){return t.valueComparator(t.getValue(r),t.getValue(t.internalValue))})},listData:function(){var t=g.a.options.computed.listData.call(this);return t.props=M(M({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive:function(t){t||!this.hasSlot||(this.lazySearch=null)},items:function(t,r){!(r&&r.length)&&this.hideNoData&&this.isFocused&&!this.isMenuActive&&t.length&&this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,r){var a=this;t!==r&&(this.setMenuIndex(-1),this.$nextTick(function(){!a.internalSearch||t.length!==1&&!a.autoSelectFirst||(a.$refs.menu.getTiles(),a.setMenuIndex(0))}))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===y.s.left?this.selectedIndex===-1?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===y.s.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:(t===y.s.backspace||t===y.s.delete)&&this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,r=this.selectedItems[t];if(!(!this.isInteractive||this.getDisabled(r))){var a=this.selectedItems.length-1;if(this.selectedIndex===-1&&a!==0){this.selectedIndex=a;return}var O=this.selectedItems.length,S=t!==O-1?t:t-1,rt=this.selectedItems[S];rt?this.selectItem(r):this.setValue(this.multiple?[]:null),this.selectedIndex=S}},clearableCallback:function(){this.internalSearch=null,g.a.options.methods.clearableCallback.call(this)},genInput:function(){var t=Q.a.options.methods.genInput.call(this);return t.data=Object(Z.a)(t.data,{attrs:{"aria-activedescendant":Object(y.m)(this.$refs.menu,"activeTile.id"),autocomplete:Object(y.m)(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=g.a.options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?g.a.options.methods.genSelections.call(this):[]},onClick:function(t){!this.isInteractive||(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1||!t.target)){var r=t.target,a=r.value;r.value&&this.activateMenu(),this.internalSearch=a,this.badInput=r.validity&&r.validity.badInput}},onKeyDown:function(t){var r=t.keyCode;(t.ctrlKey||![y.s.home,y.s.end].includes(r))&&g.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(r)},onSpaceDown:function(t){},onTabDown:function(t){g.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){g.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){g.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick(function(){(!t.multiple||!t.internalSearch||!t.isMenuActive)&&(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))})},updateSelf:function(){!this.searchIsDirty&&!this.internalValue||!this.multiple&&!this.valueComparator(this.internalSearch,this.getValue(this.internalValue))&&this.setSearch()},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var r,a;if(this.selectedIndex!==-1){var O=this.selectedItems[this.selectedIndex],S=this.getText(O);(r=t.clipboardData)==null||r.setData("text/plain",S),(a=t.clipboardData)==null||a.setData("text/vnd.vuetify.autocomplete.item+plain",S),t.preventDefault()}}}});function m(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter(function(O){return Object.getOwnPropertyDescriptor(n,O).enumerable})),r.push.apply(r,a)}return r}function c(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?m(Object(r),!0).forEach(function(a){Object(V.a)(n,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(r,a))})}return n}var f=D.a=P.extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return g.a.options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return this.isFocused?this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData:!1},searchIsDirty:function(){return this.internalSearch!=null}},methods:{onInternalSearchChanged:function(t){if(t&&this.multiple&&this.delimiters.length){var r=this.delimiters.find(function(a){return t.endsWith(a)});r!=null&&(this.internalSearch=t.slice(0,t.length-r.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var t=P.options.methods.genInput.call(this);return delete t.data.attrs.name,t.data.on.paste=this.onPaste,t},genChipSelection:function(t,r){var a=this,O=g.a.options.methods.genChipSelection.call(this,t,r);return this.multiple&&(O.componentOptions.listeners=c(c({},O.componentOptions.listeners),{},{dblclick:function(){a.editingIndex=r,a.internalSearch=a.getText(t),a.selectedIndex=-1}})),O},onChipInput:function(t){g.a.options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown:function(t){t.preventDefault(),!(this.getMenuIndex()>-1)&&this.$nextTick(this.updateSelf)},onFilteredItemsChanged:function(t,r){!this.autoSelectFirst||P.options.methods.onFilteredItemsChanged.call(this,t,r)},onKeyDown:function(t){var r=t.keyCode;(t.ctrlKey||![y.s.home,y.s.end].includes(r))&&g.a.options.methods.onKeyDown.call(this,t),this.multiple&&r===y.s.left&&this.$refs.input.selectionStart===0?this.updateSelf():r===y.s.enter&&this.onEnterDown(t),this.changeSelectedIndex(r)},onTabDown:function(t){if(this.multiple&&this.internalSearch&&this.getMenuIndex()===-1)return t.preventDefault(),t.stopPropagation(),this.updateTags();P.options.methods.onTabDown.call(this,t)},selectItem:function(t){this.editingIndex>-1?this.updateEditing():(P.options.methods.selectItem.call(this,t),this.internalSearch&&this.multiple&&this.getText(t).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems:function(){this.internalValue==null||this.internalValue===""?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(t){g.a.options.methods.setValue.call(this,t!=null?t:this.internalSearch)},updateEditing:function(){var t=this,r=this.internalValue.slice(),a=this.selectedItems.findIndex(function(S){return t.getText(S)===t.internalSearch});if(a>-1){var O=Object(C.a)(r[a])==="object"?Object.assign({},r[a]):r[a];r.splice(a,1),r.push(O)}else r[this.editingIndex]=this.internalSearch;this.setValue(r),this.editingIndex=-1,this.internalSearch=null},updateCombobox:function(){if(!!this.searchIsDirty){this.internalSearch!==this.getText(this.internalValue)&&this.setValue();var t=Boolean(this.$scopedSlots.selection)||this.hasChips;t&&(this.internalSearch=null)}},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var t=this,r=this.getMenuIndex();if(!(r<0&&!this.searchIsDirty||!this.internalSearch)){if(this.editingIndex>-1)return this.updateEditing();var a=this.selectedItems.findIndex(function(rt){return t.internalSearch===t.getText(rt)}),O=a>-1&&Object(C.a)(this.selectedItems[a])==="object"?Object.assign({},this.selectedItems[a]):this.internalSearch;if(a>-1){var S=this.internalValue.slice();S.splice(a,1),this.setValue(S)}if(r>-1)return this.internalSearch=null;this.selectItem(O),this.internalSearch=null}},onPaste:function(t){var r;if(!(!this.multiple||this.searchIsDirty)){var a=(r=t.clipboardData)==null?void 0:r.getData("text/vnd.vuetify.autocomplete.item+plain");a&&this.findExistingIndex(a)===-1&&(t.preventDefault(),g.a.options.methods.selectItem.call(this,a))}},clearableCallback:function(){this.editingIndex=-1,P.options.methods.clearableCallback.call(this)}}})}}]);
