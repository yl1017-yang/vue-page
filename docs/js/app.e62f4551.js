(function(t){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],u=0,v=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&v.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);p&&p(e);while(v.length)v.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-page/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var p=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0a68":function(t,e,a){"use strict";a("d6cc")},"21bb":function(t,e,a){"use strict";a("4850")},4850:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("a026"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[a("Header"),a("router-view"),a("Footer")],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:"header_bg",flat:""}},[a("v-card-title",{staticClass:"text-center justify-center py-6"},[a("router-link",{attrs:{to:"/vue-page/"}},[a("h1",{staticClass:"font-weight-bold header_title"},[t._v(" YANG ")])])],1),a("v-tabs",{staticClass:"nav",attrs:{"background-color":"transparent","fixed-tabs":""}},[a("v-tabs-slider"),a("router-link",{attrs:{to:"/vue-page/"}},[a("v-tab",[t._v("HOME")])],1),a("router-link",{attrs:{to:"/vue-page/views/about"}},[a("v-tab",[t._v("ABOUT")])],1),a("router-link",{attrs:{to:"/vue-page/views/product"}},[a("v-tab",[t._v("PRODUCT")])],1),a("router-link",{attrs:{to:"/vue-page/views/list"}},[a("v-tab",[t._v("NEWS")])],1)],1)],1)},r=[],l={name:"header"},c=l,p=a("2877"),u=a("6544"),v=a.n(u),f=a("b0af"),d=a("99d9"),g=a("71a3"),h=a("fe57"),_=a("9a96"),m=Object(p["a"])(c,o,r,!1,null,"d211b346",null),b=m.exports;v()(m,{VCard:f["a"],VCardTitle:d["a"],VTab:g["a"],VTabs:h["a"],VTabsSlider:_["a"]});var w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[t._v(" YANG COMPANY CO Ltd. ")])},C=[],x={name:"footer"},y=x,V=(a("0a68"),Object(p["a"])(y,w,C,!1,null,"63fb0f1f",null)),j=V.exports,k={name:"App",components:{Header:b,Footer:j},methods:{changeRTL:function(){this.$vuetify.rtl=!0}},data:function(){return{}}},O=k,$=a("7496"),S=Object(p["a"])(O,i,n,!1,null,null,null),P=S.exports;v()(S,{VApp:$["a"]});var T=a("8c4f"),D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","pa-0":""}},[a("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption,role:"tablist"}},[a("swiper-slide",{staticClass:"swiper_bg1",attrs:{role:"tab"}},[t._v(" 새롭게 달라진 "),a("span",{staticClass:"subtxt"},[t._v("YANG POINT")])]),a("swiper-slide",{staticClass:"swiper_bg2",attrs:{role:"tab"}},[t._v(" 일상을 바꾸는 "),a("span",{staticClass:"subtxt"},[t._v("즐거운 하루")])]),a("swiper-slide",{staticClass:"swiper_bg3",attrs:{role:"tab"}},[t._v(" 언제 끝내냐? "),a("span",{staticClass:"subtxt"},[t._v("퓨~")])]),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),a("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],1),a("v-layout",{attrs:{column:"",wrap:""}},[a("h3",{staticClass:"banner_title"},[t._v(" YANG 버킷리스트 ")]),a("v-row",{staticClass:"banner",attrs:{"no-gutters":""}},[a("v-col",[a("v-card",{attrs:{flat:"",color:"#fffbed"}},[t._v(" 첫번째, "),a("span",[t._v("행복하기")]),a("v-icon",[t._v("heart_broken")])],1)],1),a("v-col",[a("v-card",{attrs:{flat:"",color:"#e7dae2"}},[t._v(" 두번째, "),a("span",[t._v("미치기")]),a("v-icon",[t._v("sentiment_satisfied_alt")])],1)],1),a("v-col",[a("v-card",{attrs:{flat:"",color:"#edebe4"}},[t._v(" 세번째, "),a("span",[t._v("집중하기")]),a("v-icon",[t._v("forum")])],1)],1)],1),a("section",{staticClass:"shop_section"},[a("h3",{staticClass:"shop_title"},[t._v(" 상품리스트 ")]),a("ul",{staticClass:"shop_list"},[a("li",[a("figure",{staticClass:"thumb_img"},[a("img",{attrs:{src:"https://cdn.pixabay.com/photo/2022/02/11/14/52/waffles-7007465_960_720.jpg",alt:"상품 이미지"}})]),a("p",{staticClass:"info_title"},[a("span",{staticClass:"info_title_name"},[t._v(" 행복한 닭이 낳은 동물복지 유정란 (10입) ")]),a("span",{staticClass:"info_price_cost"},[t._v(" 판매가 3,800원 ")])])]),a("li",[a("figure",{staticClass:"thumb_img"},[a("img",{attrs:{src:"https://cdn.pixabay.com/photo/2016/10/31/18/14/dessert-1786311_960_720.jpg",alt:"상품 이미지"}})]),a("p",{staticClass:"info_title"},[a("span",{staticClass:"info_title_name"},[t._v(" 슈가 두부도너츠 (45g) ")]),a("span",{staticClass:"info_price_cost"},[t._v(" 판매가 3,800원 ")])])]),a("li",[a("figure",{staticClass:"thumb_img"},[a("img",{attrs:{src:"https://cdn.pixabay.com/photo/2016/10/27/22/52/apples-1776744_960_720.jpg",alt:"상품 이미지"}})]),a("p",{staticClass:"info_title"},[a("span",{staticClass:"info_title_name"},[t._v(" 한끼연두부 오리엔탈유자 (118gx2EA) ")]),a("span",{staticClass:"info_price_cost"},[t._v(" 판매가 3,800원 ")])])]),a("li",[a("figure",{staticClass:"thumb_img"},[a("img",{attrs:{src:"https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg",alt:"상품 이미지"}})]),a("p",{staticClass:"info_title"},[a("span",{staticClass:"info_title_name"},[t._v(" 식물성 유니짜장면 2인분 (620g) ")]),a("span",{staticClass:"info_price_cost"},[t._v(" 판매가 3,800원 ")])])]),a("li",[a("figure",{staticClass:"thumb_img"},[a("img",{attrs:{src:"https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_960_720.jpg",alt:"상품 이미지"}})]),a("p",{staticClass:"info_title"},[a("span",{staticClass:"info_title_name"},[t._v(" 자연은 맛있다 백면 (101.5gx4봉) ")]),a("span",{staticClass:"info_price_cost"},[t._v(" 판매가 3,800원 ")])])]),a("li",[a("figure",{staticClass:"thumb_img"},[a("img",{attrs:{src:"https://cdn.pixabay.com/photo/2017/07/28/14/29/macarons-2548827_960_720.jpg",alt:"상품 이미지"}})]),a("p",{staticClass:"info_title"},[a("span",{staticClass:"info_title_name"},[t._v(" 나폴리식 미트라구 파스타 (2인분) (600g) ")]),a("span",{staticClass:"info_price_cost"},[t._v(" 판매가 3,800원 ")])])]),a("li",[a("figure",{staticClass:"thumb_img"},[a("img",{attrs:{src:"https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg",alt:"상품 이미지"}})]),a("p",{staticClass:"info_title"},[a("span",{staticClass:"info_title_name"},[t._v(" 식물성 유니짜장면 2인분 (620g) ")]),a("span",{staticClass:"info_price_cost"},[t._v(" 판매가 3,800원 ")])])]),a("li",[a("figure",{staticClass:"thumb_img"},[a("img",{attrs:{src:"https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg",alt:"상품 이미지"}})]),a("p",{staticClass:"info_title"},[a("span",{staticClass:"info_title_name"},[t._v(" 슈가 두부도너츠 (45g) ")]),a("span",{staticClass:"info_price_cost"},[t._v(" 판매가 3,800원 ")])])])])])],1)],1)},A=[],E=a("7212"),L=(a("a7a3"),{name:"Home",components:{Swiper:E["Swiper"],SwiperSlide:E["SwiperSlide"]},data:function(){return{swiperOption:{slidesPerView:1,centeredSlides:!0,speed:800,loop:!0,autoplay:{delay:3e3,stopOnLastSlide:!1,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0,type:"bullets"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}}}),N=L,M=(a("21bb"),a("62ad")),q=a("a523"),F=a("132d"),I=a("a722"),R=a("0fd9"),H=Object(p["a"])(N,D,A,!1,null,null,null),Y=H.exports;v()(H,{VCard:f["a"],VCol:M["a"],VContainer:q["a"],VIcon:F["a"],VLayout:I["a"],VRow:R["a"]});var z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","pa-0":""}},[a("v-img",{attrs:{"max-height":"300","max-width":"100%",src:"https://cdn.pixabay.com/photo/2021/10/22/00/59/restaurant-6730811_1280.jpg"}}),a("v-layout",{attrs:{column:"",wrap:""}},[a("v-row",t._l(9,(function(e){return a("v-col",{key:e,staticClass:"d-flex child-flex",attrs:{cols:"4"}},[a("v-img",{staticClass:"grey lighten-2",attrs:{src:"https://picsum.photos/500/300?image="+(5*e+10),"lazy-src":"https://picsum.photos/10/6?image="+(5*e+10),"aspect-ratio":"1"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)})),1)],1)],1)},B=[],G={name:"About",components:{}},W=G,J=a("adda"),U=a("490a"),K=Object(p["a"])(W,z,B,!1,null,null,null),Q=K.exports;v()(K,{VCol:M["a"],VContainer:q["a"],VImg:J["a"],VLayout:I["a"],VProgressCircular:U["a"],VRow:R["a"]});var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","pa-0":""}},[a("v-img",{attrs:{"max-height":"120","max-width":"100%",src:"https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"}}),a("v-layout",{attrs:{column:"",wrap:""}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v(" News "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{staticClass:"boardType1",attrs:{headers:t.headers,items:t.contents,page:t.page,"items-per-page":t.itemsPerPage,search:t.search,"hide-default-footer":"","fixed-header":""},on:{"update:page":function(e){t.page=e},"click:row":t.rowClick,"page-count":function(e){t.pageCount=e}}})],1),a("div",{staticClass:"text-center pt-2"},[a("v-pagination",{attrs:{length:t.pageCount,depressed:"",color:"#444","prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-btn",{attrs:{tile:"",depressed:"",color:"#eee"},on:{click:t.writeClick}},[t._v(" 작성 ")])],1),a("div",{staticClass:"blind"},[t._v(" 참고 https://dollvin.tistory.com/61 "),a("br"),t._v(" https://fyzh99.tistory.com/44"),a("br"),t._v(" LAPM( 리눅스 + 아파치 + PHP + MySql) 깃 설치 : https://dollvin.tistory.com/25?category=620148"),a("br"),t._v(" https://v15.vuetifyjs.com/ko/ ")])],1)],1)},Z=[],tt=a("bc3a"),et=a.n(tt),at={name:"boardList",created:function(){this.fetch()},methods:{fetch:function(){console.log("fetch list"),et.a.get("http://localhost:8000/api/board/list").then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},writeClick:function(){this.$router.push("/vue-page/views/writer")},rowClick:function(t){this.$router.push("/vue-page/views/view/"+t.seq)}},data:function(){return{text:"Welcome to AyoteraLab",page:1,perPage:9,pageCount:0,pages:[],itemsPerPage:10,totalVisible:10,headers:[{text:"순서",align:"center",sortable:!1,value:"number"},{text:"제목",value:"title"},{text:"날짜",align:"center",value:"regDt"}],contents:[{number:1,title:"공지사항입니다.",regDt:"2022-02-14"},{number:2,title:"그래 그럴수 있어~",regDt:"2022-02-14"},{number:3,title:"꼭 해야 하는 걸까?",regDt:"2022-02-30"}]}}},st=at,it=a("8336"),nt=a("8fea"),ot=a("891e"),rt=a("2fa4"),lt=a("8654"),ct=Object(p["a"])(st,X,Z,!1,null,null,null),pt=ct.exports;v()(ct,{VBtn:it["a"],VCard:f["a"],VCardTitle:d["a"],VContainer:q["a"],VDataTable:nt["a"],VImg:J["a"],VLayout:I["a"],VPagination:ot["a"],VRow:R["a"],VSpacer:rt["a"],VTextField:lt["a"]});var ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","pa-0":""}},[a("v-img",{attrs:{"max-height":"120","max-width":"100%",src:"https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"}}),a("v-layout",{attrs:{column:"",wrap:""}},[a("v-form",[a("v-row",{attrs:{outline:"","no-gutters":""}},[t._v(" "+t._s(t.title)+" ")]),a("v-row",{attrs:{outline:"","no-gutters":""}},[t._v(" "+t._s(t.context)+" ")]),a("v-row",{attrs:{"no-gutters":""}},[a("v-btn",{attrs:{block:"",tile:"",depressed:"",color:"#eee"},on:{click:t.listClick}},[t._v(" 목록 ")])],1)],1)],1)],1)},vt=[],ft={name:"boardView",created:function(){this.fetch()},methods:{fetch:function(){et.a.get("http://localhost:8000/api/board/"+this.$router.params.seq).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},listClick:function(){this.$router.push("/vue-page/views/list")},deleteClick:function(){var t=this;this.$data.seq&&et.a.delete("http://localhost:8000/api/board/"+this.$data.seq).then((function(e){console.log(e),t.$router.push("/vue-page/views/list")})).catch((function(t){console.log(t)}))}},data:function(){return{title:"[제목] 그래 그럴수 있다",context:"마음이 불편한 휴식 중이라면 오랜만에 갖는 휴식 하지만 산책을 하거나, 여행이라도 가지 않으면, 허비하는 시간 같아서 불편한 마음 한 켠 아무것도 하지 않는 시간에 죄책감을 느끼며 제대로 된 휴식을 취하지 못하는 분들을 위해 휴식 다운 휴식"}}},dt=ft,gt=a("4bd4"),ht=Object(p["a"])(dt,ut,vt,!1,null,null,null),_t=ht.exports;v()(ht,{VBtn:it["a"],VContainer:q["a"],VForm:gt["a"],VImg:J["a"],VLayout:I["a"],VRow:R["a"]});var mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","pa-0":""}},[a("v-img",{attrs:{"max-height":"120","max-width":"100%",src:"https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"}}),a("v-layout",{attrs:{column:"",wrap:""}},[a("v-form",[a("v-row",[t._v(" 제목 ")]),a("v-row",[a("v-text-field",{attrs:{counter:50,label:"제목",name:"title",required:"",outline:"",maxlength:"50"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),a("v-row",[t._v(" 내용 ")]),a("v-row",[a("v-textarea",{attrs:{name:"context",label:"내용을 입력해주세요.",counter:1e3,outline:"",maxlength:"1000"},model:{value:t.context,callback:function(e){t.context=e},expression:"context"}})],1),a("v-row",[a("v-btn",{attrs:{tile:"",depressed:"",color:"#eee"},on:{click:t.writeClick}},[t._v(" 등록 ")])],1)],1)],1)],1)},bt=[],wt=(a("d3b7"),a("25f0"),{name:"boardWriter",methods:{writeClick:function(){var t=this;this.$route.params.seq?et.a.put("http://localhost:8080/api/board",this.$data).then((function(e){console.log(e),t.$router.push("/vue-page/views/list")})).catch((function(t){console.log(t)})):(this.$data.regDt=this.getNowDate(),this.$data.uptDt=this.getNowDate(),et.a.post("http://localhost:8080/api/board",this.$data).then((function(e){console.log(e),t.$router.push("/vue-page/views/list")})).catch((function(t){console.log(t)})))},getNowDate:function(){var t=new Date,e=t.getFullYear().toString(),a=(t.getMonth()+1).toString(),s=t.getDate().toString();return e+"-"+(a[1]?a:"0"+a[0])+"-"+(s[1]?s:"0"+s[0])}},data:function(){return{title:"그럴수 있따...",context:"",uptDt:"",regDt:""}}}),Ct=wt,xt=a("a844"),yt=Object(p["a"])(Ct,mt,bt,!1,null,null,null),Vt=yt.exports;v()(yt,{VBtn:it["a"],VContainer:q["a"],VForm:gt["a"],VImg:J["a"],VLayout:I["a"],VRow:R["a"],VTextField:lt["a"],VTextarea:xt["a"]}),s["default"].use(T["a"]);var jt=[{path:"/vue-page/",name:"Home",component:Y},{path:"/vue-page/views/about",name:"About",component:Q},{path:"/vue-page/views/list",name:"boardList",component:pt},{path:"/vue-page/views/view/:seq",name:"boardView",component:_t},{path:"/vue-page/views/writer",name:"boardWriter",component:Vt}],kt=new T["a"]({mode:"history",routes:jt}),Ot=kt,$t=a("f309");a("bf40"),a("d1e78"),a("5a41");s["default"].use($t["a"]);var St=new $t["a"]({icons:{iconfont:"mdi"}});s["default"].config.productionTip=!1,new s["default"]({router:Ot,vuetify:St,render:function(t){return t(P)}}).$mount("#app")},"5a41":function(t,e,a){},d6cc:function(t,e,a){}});
//# sourceMappingURL=app.e62f4551.js.map