(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],v=0,p=[];v<s.length;v++)i=s[v],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-page/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0a68":function(t,e,a){"use strict";a("d6cc")},"21bb":function(t,e,a){"use strict";a("4850")},4850:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("a026"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[a("Header"),a("router-view"),a("Footer")],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:"header_bg",flat:""}},[a("v-card-title",{staticClass:"text-center justify-center py-6"},[a("router-link",{attrs:{to:"/vue-page/"}},[a("h1",{staticClass:"font-weight-bold text-h3 header_title"},[t._v(" YANG ")])])],1),a("v-tabs",{staticClass:"nav",attrs:{"background-color":"transparent","fixed-tabs":""}},[a("v-tabs-slider"),a("router-link",{attrs:{to:"/vue-page/"}},[a("v-tab",{staticClass:"text-h6"},[t._v("HOME")])],1),a("router-link",{attrs:{to:"/vue-page/views/about"}},[a("v-tab",{staticClass:"text-h6"},[t._v("ABOUT")])],1),a("router-link",{attrs:{to:"/vue-page/views/product"}},[a("v-tab",{staticClass:"text-h6"},[t._v("PRODUCT")])],1),a("router-link",{attrs:{to:"/vue-page/views/list"}},[a("v-tab",{staticClass:"text-h6"},[t._v("NEWS")])],1)],1)],1)},s=[],l={name:"header"},c=l,u=a("2877"),v=a("6544"),p=a.n(v),d=a("b0af"),f=a("99d9"),h=a("71a3"),b=a("fe57"),g=a("9a96"),m=Object(u["a"])(c,i,s,!1,null,"127e6bb0",null),w=m.exports;p()(m,{VCard:d["a"],VCardTitle:f["a"],VTab:h["a"],VTabs:b["a"],VTabsSlider:g["a"]});var _=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[t._v(" YANG COMPANY CO Ltd. ")])},x=[],C={name:"footer"},V=C,y=(a("0a68"),Object(u["a"])(V,_,x,!1,null,"63fb0f1f",null)),k=y.exports,O={name:"App",components:{Header:w,Footer:k},methods:{changeRTL:function(){this.$vuetify.rtl=!0}},data:function(){return{}}},$=O,j=a("7496"),S=Object(u["a"])($,r,o,!1,null,null,null),P=S.exports;p()(S,{VApp:j["a"]});var M=a("8c4f"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",[a("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption,role:"tablist"}},[a("swiper-slide",{staticClass:"swiper_bg1",attrs:{role:"tab"}},[t._v("새롭게 달라진 "),a("br"),t._v("YANG POINT")]),a("swiper-slide",{staticClass:"swiper_bg2",attrs:{role:"tab"}},[t._v("일상을 바꾸는 "),a("br"),t._v("즐거운 하루")]),a("swiper-slide",{staticClass:"swiper_bg3",attrs:{role:"tab"}},[t._v("npm install swiper@5.3.7 vue-awesome-swiper --save"),a("br"),t._v("npm install --save-dev sass-loader@7.1.0")]),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),a("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],1),a("v-container",[a("h3",{staticClass:"banner_title"},[t._v(" YANG 버킷리스트 ")]),a("v-row",{staticClass:"banner",attrs:{"no-gutters":""}},[a("v-col",[a("v-card",{attrs:{flat:"",color:"#fffbed"}},[t._v(" 첫번째, "),a("span",[t._v("행복하기")]),a("v-icon",[t._v("heart_broken")])],1)],1),a("v-col",[a("v-card",{attrs:{flat:"",color:"#e7dae2"}},[t._v(" 두번째, "),a("span",[t._v("미치기")]),a("v-icon",[t._v("sentiment_satisfied_alt")])],1)],1),a("v-col",[a("v-card",{attrs:{flat:"",color:"#edebe4"}},[t._v(" 세번째, "),a("span",[t._v("집중하기")]),a("v-icon",[t._v("forum")])],1)],1)],1),a("section",{staticClass:"fb__main__section best-item__area"},[a("div",{staticClass:"section__inner"},[a("h3",{staticClass:"section__title"},[t._v(" 타이틀 ")]),a("div",[t._v(" 상품카테고리 ")])])])],1)],1)},D=[],E=a("7212"),A=(a("a7a3"),{name:"Home",components:{Swiper:E["Swiper"],SwiperSlide:E["SwiperSlide"]},data:function(){return{swiperOption:{slidesPerView:1,centeredSlides:!0,speed:800,loop:!0,autoplay:{delay:3e3,stopOnLastSlide:!1,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0,type:"bullets"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}}}),N=A,q=(a("21bb"),a("62ad")),R=a("a523"),F=a("132d"),H=a("f6c4"),L=a("0fd9"),Y=Object(u["a"])(N,T,D,!1,null,null,null),B=Y.exports;p()(Y,{VCard:d["a"],VCol:q["a"],VContainer:R["a"],VIcon:F["a"],VMain:H["a"],VRow:L["a"]});var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",[a("v-img",{attrs:{"max-height":"300","max-width":"100%",src:"https://cdn.pixabay.com/photo/2021/10/22/00/59/restaurant-6730811_1280.jpg"}}),a("v-container",[a("v-row",t._l(9,(function(e){return a("v-col",{key:e,staticClass:"d-flex child-flex",attrs:{cols:"4"}},[a("v-img",{staticClass:"grey lighten-2",attrs:{src:"https://picsum.photos/500/300?image="+(5*e+10),"lazy-src":"https://picsum.photos/10/6?image="+(5*e+10),"aspect-ratio":"1"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)})),1)],1)],1)},I=[],W={name:"About",components:{}},J=W,U=a("adda"),z=a("490a"),K=Object(u["a"])(J,G,I,!1,null,null,null),Q=K.exports;p()(K,{VCol:q["a"],VContainer:R["a"],VImg:U["a"],VMain:H["a"],VProgressCircular:z["a"],VRow:L["a"]});var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",[a("v-container",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts,"items-per-page":10},on:{"click:row":t.rowClick}}),a("v-row",[a("v-btn",{attrs:{outlined:"",color:"black"},on:{click:t.writeClick}},[t._v(" 작성 ")])],1),a("div",[t._v("참고 https://dollvin.tistory.com/61")]),a("div",[t._v("LAPM( 리눅스 + 아파치 + PHP + MySql) 깃 설치 : https://dollvin.tistory.com/25?category=620148")])],1)],1)},Z=[],tt=a("bc3a"),et=a.n(tt),at={name:"boardList",created:function(){this.fetch()},methods:{fetch:function(){console.log("fetch list"),et.a.get("http://localhost:8000/api/board/list").then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},writeClick:function(){this.$router.push("/vue-page/views/writer")},rowClick:function(t){this.$router.push("/vue-page/views/view/"+t.seq)}},data:function(){return{headers:[{text:"순서",align:"center",sortable:!1,value:"number"},{text:"제목",align:"center",value:"title"},{text:"날짜",align:"center",value:"regDt"}],desserts:[]}}},nt=at,rt=a("8336"),ot=a("8fea"),it=Object(u["a"])(nt,X,Z,!1,null,null,null),st=it.exports;p()(it,{VBtn:rt["a"],VContainer:R["a"],VDataTable:ot["a"],VMain:H["a"],VRow:L["a"]});var lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",[a("v-form",[a("v-container",[a("v-row",[t._v(" 제목 ")]),a("v-row",[t._v(" "+t._s(t.title)+" ")]),a("v-row",[t._v(" 내용 ")]),a("v-row",[t._v(" "+t._s(t.context)+" ")]),a("v-row",[a("v-btn",{attrs:{block:"",outlined:"",color:"blue"},on:{click:t.listClick}},[t._v(" 목록 ")])],1)],1)],1)],1)},ct=[],ut={name:"boardView",created:function(){this.fetch()},methods:{fetch:function(){et.a.get("http://localhost:8080/api/board/"+this.$router.params.seq).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},listClick:function(){this.$router.push("/")},deleteClick:function(){var t=this;this.$data.seq&&et.a.delete("http://localhost:8080/api/board/"+this.$data.seq).then((function(e){console.log(e),t.$router.push("/")})).catch((function(t){console.log(t)}))}},data:function(){return{title:"",context:""}}},vt=ut,pt=a("4bd4"),dt=Object(u["a"])(vt,lt,ct,!1,null,null,null),ft=dt.exports;p()(dt,{VBtn:rt["a"],VContainer:R["a"],VForm:pt["a"],VMain:H["a"],VRow:L["a"]});var ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",[a("v-form",[a("v-container",[a("v-row",[t._v(" 제목 ")]),a("v-row",[a("v-text-field",{attrs:{counter:50,label:"제목",name:"title",required:"",maxlength:"50"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),a("v-row",[t._v(" 내용 ")]),a("v-row",[a("v-textarea",{attrs:{filled:"",name:"context",hint:"내용을 입력해주세요.",counter:1e3,maxlength:"1000"},model:{value:t.context,callback:function(e){t.context=e},expression:"context"}})],1),a("v-row",[a("v-btn",{attrs:{block:"",outlined:"",color:"blue"},on:{click:t.writeClick}},[t._v(" 등록 ")])],1)],1)],1)],1)},bt=[],gt=(a("d3b7"),a("25f0"),{name:"boardWriter",methods:{writeClick:function(){var t=this;this.$route.params.seq?et.a.put("http://localhost:8080/api/board",this.$data).then((function(e){console.log(e),t.$router.push("/")})).catch((function(t){console.log(t)})):(this.$data.regDt=this.getNowDate(),this.$data.uptDt=this.getNowDate(),et.a.post("http://localhost:8080/api/board",this.$data).then((function(e){console.log(e),t.$router.push("/")})).catch((function(t){console.log(t)})))},getNowDate:function(){var t=new Date,e=t.getFullYear().toString(),a=(t.getMonth()+1).toString(),n=t.getDate().toString();return e+"-"+(a[1]?a:"0"+a[0])+"-"+(n[1]?n:"0"+n[0])}},data:function(){return{title:"",context:"",uptDt:"",regDt:""}}}),mt=gt,wt=a("8654"),_t=a("a844"),xt=Object(u["a"])(mt,ht,bt,!1,null,null,null),Ct=xt.exports;p()(xt,{VBtn:rt["a"],VContainer:R["a"],VForm:pt["a"],VMain:H["a"],VRow:L["a"],VTextField:wt["a"],VTextarea:_t["a"]}),n["default"].use(M["a"]);var Vt=[{path:"/vue-page/",name:"Home",component:B},{path:"/vue-page/views/about",name:"About",component:Q},{path:"/vue-page/views/list",name:"boardList",component:st},{path:"/vue-page/views/view/:seq",name:"boardView",component:ft},{path:"/vue-page/views/writer",name:"boardWriter",component:Ct}],yt=new M["a"]({mode:"history",routes:Vt}),kt=yt,Ot=a("f309");a("bf40"),a("d1e78"),a("5a41");n["default"].use(Ot["a"]);var $t=new Ot["a"]({icons:{iconfont:"mdi"}});n["default"].config.productionTip=!1,new n["default"]({router:kt,vuetify:$t,render:function(t){return t(P)}}).$mount("#app")},"5a41":function(t,e,a){},d6cc:function(t,e,a){}});
//# sourceMappingURL=app.d302de2e.js.map