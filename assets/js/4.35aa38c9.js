(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{194:function(t,i,e){"use strict";
/**
  * Hopper 0.2.1
  * (c) 2019
    * @license MIT
    */
function s(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}function n(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{},n=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.forEach(function(i){s(t,i,e[i])})}return t}function o(){return Date.now()}function r(t,i){this.create=function(){return window.setInterval(t,i)},this.stop=function(){this.timer&&(window.clearInterval(this.timer),this.timer=null)},this.start=function(){this.timer||(this.timer=this.create())},this.restart=function(t){i=t||i,this.stop(),this.start()},this.timer=this.create()}function a(t,i){return t<0?(t+i)%i:t%i}function c(t,i){var e=t.context&&t.context.$createElement,s=t.componentOptions.children,o=function(t,i){var e=t.componentOptions;return{class:t.data.class,staticClass:t.data.staticClass,style:t.data.style,attrs:t.data.attrs,props:n({},e.propsData,{isClone:!0,index:i}),on:e.listeners,nativeOn:t.data.nativeOn,directives:t.data.directives,scopesSlots:t.data.scopesSlots,slot:t.data.slot,ref:t.data.ref,key:t.data.key?"".concat(i,"-clone"):void 0}}(t,i);return e(t.componentOptions.Ctor,o,s)}e.d(i,"a",function(){return h}),e.d(i,"e",function(){return d}),e.d(i,"d",function(){return p}),e.d(i,"c",function(){return v}),e.d(i,"b",function(){return g});var l=function(t,i,e,s,n,o,r,a,c,l){"boolean"!=typeof r&&(c=a,a=r,r=!1);var h,d="function"==typeof e?e.options:e;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,n&&(d.functional=!0)),s&&(d._scopeId=s),o?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},d._ssrRegister=h):i&&(h=r?function(){i.call(this,l(this.$root.$options.shadowRoot))}:function(t){i.call(this,a(t))}),h)if(d.functional){var u=d.render;d.render=function(t,i){return h.call(i),u(t,i)}}else{var f=d.beforeCreate;d.beforeCreate=f?[].concat(f,h):[h]}return e},h=l({render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{staticClass:"hooper",class:{"is-vertical":t.config.vertical,"is-rtl":t.config.rtl},attrs:{tabindex:"0"},on:{mouseover:function(i){t.isHover=!0},mouseleave:function(i){t.isHover=!1},focusin:function(i){t.isFocus=!0},focusout:function(i){t.isFocus=!1}}},[e("div",{staticClass:"hooper-list"},[e("ul",{ref:"track",staticClass:"hooper-track",class:{"is-dragging":t.isDragging},style:t.trackTransform+t.trackTransition,on:{transitionend:t.onTransitionend}},[t._t("clone-before"),t._v(" "),t._t("default"),t._v(" "),t._t("clone-after")],2)]),t._v(" "),t._t("hooper-addons"),t._v(" "),e("div",{staticClass:"hooper-liveregion hooper-sr-only",attrs:{"aria-live":"polite","aria-atomic":"true"}},[t._v("\n    "+t._s("Item "+(t.currentSlide+1)+" of "+t.slidesCount)+"\n  ")])],2)},staticRenderFns:[]},void 0,{name:"Hooper",provide:function(){return{$hooper:this}},props:{itemsToShow:{default:1,type:Number},itemsToSlide:{default:1,type:Number},initialSlide:{default:0,type:Number},infiniteScroll:{default:!1,type:Boolean},centerMode:{default:!1,type:Boolean},vertical:{default:!1,type:Boolean},rtl:{default:null,type:Boolean},autoPlay:{default:!1,type:Boolean},playSpeed:{default:2e3,type:Number},mouseDrag:{default:!0,type:Boolean},touchDrag:{default:!0,type:Boolean},wheelControl:{default:!0,type:Boolean},keysControl:{default:!0,type:Boolean},shortDrag:{default:!0,type:Boolean},transition:{default:300,type:Number},sync:{default:"",type:String},hoverPause:{default:!0,type:Boolean},trimWhiteSpace:{default:!1,type:Boolean},settings:{default:function(){return{}},type:Object}},data:function(){return{isDragging:!1,isSliding:!1,isTouch:!1,isHover:!1,isFocus:!1,slideWidth:0,slideHeight:0,slidesCount:0,trimStart:0,trimEnd:1,currentSlide:null,timer:null,slides:[],defaults:{},breakpoints:{},delta:{x:0,y:0},config:{}}},computed:{trackTransform:function(){var t=this.config,i=t.infiniteScroll,e=t.vertical,s=t.rtl,n=t.centerMode,o=s?-1:1,r=e?this.slideHeight:this.slideWidth,a=e?this.containerHeight:this.containerWidth,c=(e?this.delta.y:this.delta.x)+o*((n?(a-r)/2:0)-(i?r*this.slidesCount:0)-this.currentSlide*r);return e?"transform: translate(0, ".concat(c,"px);"):"transform: translate(".concat(c,"px, 0);")},trackTransition:function(){return this.isSliding?"transition: ".concat(this.config.transition,"ms"):""}},methods:{slideTo:function(t){var i=this,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.isSliding&&t!==this.currentSlide){this.$emit("beforeSlide",{currentSlide:this.currentSlide,slideTo:d});var s,n,o,r=this.config,c=r.infiniteScroll,l=r.transition,h=this.currentSlide,d=c?t:(s=t,n=this.trimStart,o=this.slidesCount-this.trimEnd,Math.max(Math.min(s,o),n));this.syncEl&&!e&&this.syncEl.slideTo(t,!0),this.currentSlide=d,this.isSliding=!0,window.setTimeout(function(){i.isSliding=!1,i.currentSlide=a(d,i.slidesCount)},l),this.$emit("slide",{currentSlide:this.currentSlide,slideFrom:h})}},slideNext:function(){this.slideTo(this.currentSlide+this.config.itemsToSlide)},slidePrev:function(){this.slideTo(this.currentSlide-this.config.itemsToSlide)},initEvents:function(){null===this.defaults.rtl&&(this.defaults.rtl="rtl"===getComputedStyle(this.$el).direction),this.config.autoPlay&&this.initAutoPlay(),this.config.mouseDrag&&this.$refs.track.addEventListener("mousedown",this.onDragStart),this.config.touchDrag&&this.$refs.track.addEventListener("touchstart",this.onDragStart,{passive:!0}),this.config.keysControl&&this.$el.addEventListener("keydown",this.onKeypress),this.config.wheelControl&&(this.lastScrollTime=o(),this.$el.addEventListener("wheel",this.onWheel,{passive:!1})),window.addEventListener("resize",this.update)},initSync:function(){this.config.sync&&(!this.$parent.$refs[this.config.sync]&&process,this.syncEl=this.$parent.$refs[this.config.sync],this.syncEl.syncEl=this)},initAutoPlay:function(){var t=this;this.timer=new r(function(){t.isSliding||t.isDragging||t.isHover&&t.config.hoverPause||t.isFocus||(t.currentSlide!==t.slidesCount-1||t.config.infiniteScroll?t.slideNext():t.slideTo(0))},this.config.playSpeed)},initDefaults:function(){this.breakpoints=this.settings.breakpoints,this.defaults=Object.assign({},this.$props,this.settings),this.config=Object.assign({},this.defaults)},initSlides:function(){var t=this;if(this.slides=this.filteredSlides(),this.slidesCount=this.slides.length,this.slides.forEach(function(t,i){t.componentOptions.propsData.index=i}),this.config.infiniteScroll){var i=[],e=[];this.slides.forEach(function(s,n){i.push(c(s,n-t.slidesCount)),e.push(c(s,n+t.slidesCount))}),this.$slots["clone-before"]=i,this.$slots["clone-after"]=e}},update:function(){this.breakpoints&&this.updateConfig(),this.updateWidth(),this.updateTrim(),this.$emit("updated",{containerWidth:this.containerWidth,containerHeight:this.containerHeight,slideWidth:this.slideWidth,slideHeight:this.slideHeight,settings:this.config})},updateTrim:function(){var t=this.config,i=t.trimWhiteSpace,e=t.itemsToShow,s=t.centerMode,n=t.infiniteScroll;if(!i||n)return this.trimStart=0,void(this.trimEnd=1);this.trimStart=s?Math.floor((e-1)/2):0,this.trimEnd=s?Math.ceil(e/2):e},updateWidth:function(){var t=this.$el.getBoundingClientRect();this.containerWidth=t.width,this.containerHeight=t.height,this.config.vertical?this.slideHeight=this.containerHeight/this.config.itemsToShow:this.slideWidth=this.containerWidth/this.config.itemsToShow},updateConfig:function(){var t,i=this;Object.keys(this.breakpoints).sort(function(t,i){return i-t}).some(function(e){if(t=window.matchMedia("(min-width: ".concat(e,"px)")).matches)return i.config=Object.assign({},i.config,i.defaults,i.breakpoints[e]),!0}),t||(this.config=Object.assign(this.config,this.defaults))},restartTimer:function(){this.timer&&this.timer.restart()},restart:function(){var t=this;this.initSlides(),this.$nextTick(function(){t.update()})},onDragStart:function(t){this.isTouch="touchstart"===t.type,(this.isTouch||0===t.button)&&(this.startPosition={x:0,y:0},this.endPosition={x:0,y:0},this.isDragging=!0,this.startPosition.x=this.isTouch?t.touches[0].clientX:t.clientX,this.startPosition.y=this.isTouch?t.touches[0].clientY:t.clientY,document.addEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag),document.addEventListener(this.isTouch?"touchend":"mouseup",this.onDragEnd),t.preventDefault())},onDrag:function(t){this.isSliding||(this.endPosition.x=this.isTouch?t.touches[0].clientX:t.clientX,this.endPosition.y=this.isTouch?t.touches[0].clientY:t.clientY,this.delta.x=this.endPosition.x-this.startPosition.x,this.delta.y=this.endPosition.y-this.startPosition.y,t.preventDefault())},onDragEnd:function(){var t=this.config.shortDrag?.5:.15;if(this.isDragging=!1,this.config.vertical){var i=Math.round(Math.abs(this.delta.y/this.slideHeight)+t);this.slideTo(this.currentSlide-Math.sign(this.delta.y)*i)}if(!this.config.vertical){var e=(this.config.rtl?-1:1)*Math.sign(this.delta.x),s=Math.round(Math.abs(this.delta.x/this.slideWidth)+t);this.slideTo(this.currentSlide-e*s)}this.delta.x=0,this.delta.y=0,document.removeEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag),document.removeEventListener(this.isTouch?"touchend":"mouseup",this.onDragEnd),this.restartTimer()},onTransitionend:function(){this.isSliding=!1,this.$emit("afterSlide",{currentSlide:this.currentSlide})},onKeypress:function(t){var i=t.key;return i.startsWith("Arrow")&&t.preventDefault(),this.config.vertical?("ArrowUp"===i&&this.slidePrev(),void("ArrowDown"===i&&this.slideNext())):this.config.rtl?("ArrowRight"===i&&this.slidePrev(),void("ArrowLeft"===i&&this.slideNext())):("ArrowRight"===i&&this.slideNext(),void("ArrowLeft"===i&&this.slidePrev()))},onWheel:function(t){if(t.preventDefault(),!(o()-this.lastScrollTime<200)){this.lastScrollTime=o();var i=t.wheelDelta||-t.deltaY,e=Math.sign(i);-1===e&&this.slideNext(),1===e&&this.slidePrev()}},filteredSlides:function(){return this.$slots.default.filter(function(t){return!(!t.componentOptions||!t.componentOptions.Ctor)&&"HooperSlide"===t.componentOptions.Ctor.options.name})}},beforeUpdate:function(){var t=this.config.infiniteScroll&&(!this.$slots["clone-before"]||!this.$slots["clone-after"]),i=this.filteredSlides().length!==this.slidesCount;(t||i)&&this.initSlides()},created:function(){this.initDefaults(),this.initSlides()},mounted:function(){var t=this;this.initEvents(),this.$nextTick(function(){t.initSync(),t.update(),t.slideTo(t.config.initialSlide),t.$emit("loaded")})},beforeDestroy:function(){window.removeEventListener("resize",this.update),this.timer&&this.timer.stop()}},void 0,!1,void 0,void 0,void 0),d=l({render:function(){var t=this,i=t.$createElement;return(t._self._c||i)("li",{staticClass:"hooper-slide",class:{"is-clone":t.isClone,"is-active":t.isActive,"is-prev":t.isPrev,"is-next":t.isNext,"is-current":t.isCurrent},style:t.style,attrs:{"aria-hidden":t.isActive}},[t._t("default")],2)},staticRenderFns:[]},void 0,{name:"HooperSlide",inject:["$hooper"],props:{isClone:{type:Boolean,default:!1},index:{type:Number,default:0,required:!0}},computed:{style:function(){var t=this.$hooper||{},i=t.config,e=t.slideHeight,s=t.slideWidth;return i.vertical?"height: ".concat(e,"px"):"width: ".concat(s,"px")},lower:function(){var t=this.$hooper||{},i=t.config,e=t.currentSlide,s=(t.slidesCount,i.itemsToShow);return i.centerMode?Math.ceil(e-s/2):e},upper:function(){var t=this.$hooper||{},i=t.config,e=t.currentSlide,s=(t.slidesCount,i.itemsToShow);return i.centerMode?Math.floor(e+s/2):Math.floor(e+s-1)},isActive:function(){return this.index>=this.lower&&this.index<=this.upper},isPrev:function(){return this.index<=this.lower-1},isNext:function(){return this.index>=this.upper+1},isCurrent:function(){return this.index===this.$hooper.currentSlide}}},void 0,!1,void 0,void 0,void 0),u={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},f={name:"HooperIcon",functional:!0,inheritAttrs:!0,props:{name:{type:String,required:!0,validator:function(t){return t in u}}},render:function(t,i){var e,s=i.props,n=u[s.name],o=[];return o.push(t("title",(e=(e=s.name).replace(/([A-Z]+)/g," $1")).charAt(0).toUpperCase()+e.slice(1))),o.push(t("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})),o.push(t("path",{attrs:{d:n}})),t("svg",{attrs:{class:"icon icon-".concat(s.name),viewBox:"0 0 24 24",width:"24px",height:"24px"}},o)}},p=l({render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"hooper-progress"},[i("div",{staticClass:"hooper-progress-inner",style:"width: "+this.progress+"%"})])},staticRenderFns:[]},void 0,{inject:["$hooper"],name:"HooperProgress",computed:{currentSlide:function(){return a(this.$hooper.currentSlide,this.$hooper.slidesCount)},progress:function(){var t=this.$hooper.slidesCount-this.$hooper.trimStart-this.$hooper.trimEnd;return 100*(this.currentSlide-this.$hooper.trimStart)/t}}},void 0,!1,void 0,void 0,void 0),v=l({render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"hooper-pagination",class:{"is-vertical":t.$hooper.config.vertical}},["indicator"===t.mode?e("ol",{staticClass:"hooper-indicators"},t._l(t.slides,function(i){return e("li",{key:i},[e("button",{staticClass:"hooper-indicator",class:{"is-active":t.currentSlide===i},on:{click:function(e){return t.$hooper.slideTo(i)}}},[e("span",{staticClass:"hooper-sr-only"},[t._v("item "+t._s(i))])])])}),0):t._e(),t._v(" "),"fraction"===t.mode?[e("span",[t._v(t._s(t.currentSlide+1))]),t._v(" "),e("span",[t._v("/")]),t._v(" "),e("span",[t._v(t._s(t.$hooper.slidesCount))])]:t._e()],2)},staticRenderFns:[]},void 0,{inject:["$hooper"],name:"HooperPagination",props:{mode:{default:"indicator",type:String}},computed:{currentSlide:function(){return a(this.$hooper.currentSlide,this.$hooper.slidesCount)},slides:function(){var t=this.$hooper.slides.map(function(t,i){return i});return t.slice(this.$hooper.trimStart,this.$hooper.slidesCount-this.$hooper.trimEnd+1)}}},void 0,!1,void 0,void 0,void 0),g=l({render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"hooper-navigation",class:{"is-vertical":t.$hooper.config.vertical,"is-rtl":t.$hooper.config.rtl}},[e("button",{staticClass:"hooper-prev",class:{"is-disabled":t.isPrevDisabled},attrs:{type:"button"},on:{click:t.slidePrev}},[t._t("hooper-prev",[e("icons",{attrs:{name:t.isVertical?"arrowUp":t.isRTL?"arrowRight":"arrowLeft"}})])],2),t._v(" "),e("button",{staticClass:"hooper-next",class:{"is-disabled":t.isNextDisabled},attrs:{type:"button"},on:{click:t.slideNext}},[t._t("hooper-next",[e("icons",{attrs:{name:t.isVertical?"arrowDown":t.isRTL?"arrowLeft":"arrowRight"}})])],2)])},staticRenderFns:[]},void 0,{inject:["$hooper"],name:"HooperNavigation",components:{Icons:f},computed:{isPrevDisabled:function(){return!this.$hooper.config.infiniteScroll&&0===this.$hooper.currentSlide},isNextDisabled:function(){return!this.$hooper.config.infiniteScroll&&this.$hooper.currentSlide===this.$hooper.slidesCount-1},isRTL:function(){return this.$hooper.config.rtl},isVertical:function(){return this.$hooper.config.vertical}},methods:{slideNext:function(){this.$hooper.slideNext(),this.$hooper.restartTimer()},slidePrev:function(){this.$hooper.slidePrev(),this.$hooper.restartTimer()}}},void 0,!1,void 0,void 0,void 0)},195:function(t,i,e){}}]);