(function(e){function t(t){for(var r,i,u=t[0],p=t[1],c=t[2],s=0,f=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(e[r]=p[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var p=n[u];0!==a[p]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-page/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=p;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"3a61":function(e,t,n){"use strict";n("51d2")},"51d2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"app"}},[n("Header"),n("v-main",[n("router-view")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{absolute:"",color:"#444",dark:"",flat:"",fixed:"",height:"50"},scopedSlots:e._u([{key:"extension",fn:function(){return[n("v-tabs",{attrs:{"align-with-title":""}},[n("v-tab",[n("router-link",{attrs:{to:"/vue-page/"}},[e._v("HOME")])],1),n("v-tab",[n("router-link",{attrs:{to:"/vue-page/views/about"}},[e._v("ABOUT")])],1)],1)]},proxy:!0}])},[n("v-app-bar-title",[e._v("YANG")])],1)},u=[],p={name:"header"},c=p,l=n("2877"),s=n("6544"),f=n.n(s),v=n("40dc"),d=n("bb78"),b=n("71a3"),h=n("fe57"),m=Object(l["a"])(c,i,u,!1,null,"671ed0d0",null),g=m.exports;f()(m,{VAppBar:v["a"],VAppBarTitle:d["a"],VTab:b["a"],VTabs:h["a"]});var w={name:"App",components:{Header:g},methods:{changeRTL:function(){this.$vuetify.rtl=!0}},data:function(){return{}}},y=w,_=(n("034f"),n("7496")),O=n("f6c4"),x=Object(l["a"])(y,a,o,!1,null,null,null),V=x.exports;f()(x,{VApp:_["a"],VMain:O["a"]});var j=n("8c4f"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-main",[n("v-container",[e._v(" Hello World ")])],1)},A=[],M={name:"Home",components:{},data:function(){return{swiperOption:{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}}},P=M,T=(n("3a61"),n("a523")),E=Object(l["a"])(P,k,A,!1,null,"05324ef8",null),H=E.exports;f()(E,{VContainer:T["a"],VMain:O["a"]});var S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-main",[n("v-container",[e._v(" about "),n("v-img",{attrs:{"lazy-src":"https://picsum.photos/id/11/10/6","max-height":"250","max-width":"350",src:"https://picsum.photos/id/11/500/300"}}),n("v-btn",{attrs:{elevation:"2",rounded:""}},[e._v("버튼 테스트 ")]),n("v-card",{attrs:{elevation:"2",shaped:""}},[e._v(" 생기다 만 카드 테스트 "),n("br"),e._v(" 맘에안듬 ")])],1)],1)},$=[],B={name:"About",components:{}},C=B,J=n("8336"),z=n("b0af"),G=n("adda"),I=Object(l["a"])(C,S,$,!1,null,null,null),L=I.exports;f()(I,{VBtn:J["a"],VCard:z["a"],VContainer:T["a"],VImg:G["a"],VMain:O["a"]}),r["a"].use(j["a"]);var N=[{path:"/vue-page/",name:"Home",component:H},{path:"/vue-page/views/about",name:"About",component:L}],R=new j["a"]({mode:"history",routes:N}),U=R,W=(n("bf40"),n("d1e78"),n("f309"));r["a"].use(W["a"]);var Y=new W["a"]({icons:{iconfont:"md"}});r["a"].config.productionTip=!1,new r["a"]({router:U,vuetify:Y,render:function(e){return e(V)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.1bf5d1be.js.map