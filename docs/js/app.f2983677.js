(function(t){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],u=0,v=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&v.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);p&&p(e);while(v.length)v.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-page/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var p=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0a68":function(t,e,a){"use strict";a("d6cc")},"21bb":function(t,e,a){"use strict";a("4850")},4850:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("a026"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[a("Header"),a("router-view"),a("Footer")],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:"header_bg",flat:""}},[a("v-card-title",{staticClass:"text-center justify-center py-6"},[a("router-link",{attrs:{to:"/vue-page/"}},[a("h1",{staticClass:"font-weight-bold header_title"},[t._v(" YANG ")])])],1),a("v-tabs",{staticClass:"nav",attrs:{"background-color":"transparent","fixed-tabs":""}},[a("v-tabs-slider"),a("router-link",{attrs:{to:"/vue-page/"}},[a("v-tab",[t._v("HOME")])],1),a("router-link",{attrs:{to:"/vue-page/views/about"}},[a("v-tab",[t._v("ABOUT")])],1),a("router-link",{attrs:{to:"/vue-page/views/product"}},[a("v-tab",[t._v("PRODUCT")])],1),a("router-link",{attrs:{to:"/vue-page/views/list"}},[a("v-tab",[t._v("NEWS")])],1)],1)],1)},r=[],l={name:"header"},c=l,p=a("2877"),u=a("6544"),v=a.n(u),d=a("b0af"),f=a("99d9"),g=a("71a3"),h=a("fe57"),_=a("9a96"),m=Object(p["a"])(c,o,r,!1,null,"d211b346",null),b=m.exports;v()(m,{VCard:d["a"],VCardTitle:f["c"],VTab:g["a"],VTabs:h["a"],VTabsSlider:_["a"]});var w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[t._v(" YANG COMPANY CO Ltd. ")])},C=[],x={name:"footer"},y=x,V=(a("0a68"),Object(p["a"])(y,w,C,!1,null,"63fb0f1f",null)),k=V.exports,j={name:"App",components:{Header:b,Footer:k},methods:{changeRTL:function(){this.$vuetify.rtl=!0}},data:function(){return{}}},O=j,P=a("7496"),S=Object(p["a"])(O,i,n,!1,null,null,null),$=S.exports;v()(S,{VApp:P["a"]});var T=a("8c4f"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","pa-0":""}},[a("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},[a("swiper-slide",{staticClass:"swiper_bg1"},[t._v(" 새롭게 달라진 "),a("span",{staticClass:"subtxt"},[t._v("YANG POINT")])]),a("swiper-slide",{staticClass:"swiper_bg2"},[t._v(" 일상을 바꾸는 "),a("span",{staticClass:"subtxt"},[t._v("즐거운 하루")])]),a("swiper-slide",{staticClass:"swiper_bg3"},[t._v(" 언제 끝내냐? "),a("span",{staticClass:"subtxt"},[t._v("퓨~")])]),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),a("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],1),a("v-layout",{attrs:{column:"",wrap:""}},[a("h3",{staticClass:"banner_title"},[t._v(" YANG 버킷리스트 ")]),a("v-row",{staticClass:"banner",attrs:{"no-gutters":""}},[a("v-col",[a("v-card",{attrs:{flat:"",color:"#fffbed"}},[a("v-dialog",{attrs:{width:"300"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"#fffbed",flat:"",depressed:""}},"v-btn",i,!1),s),[t._v(" 첫번째, "),a("br"),t._v(" Click Me ")]),a("v-icon",[t._v("heart_broken")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v(" 첫번째 클릭 내용 ")]),a("v-card-text",[t._v(" Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running. ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Disagree ")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Agree ")])],1)],1)],1)],1)],1),a("v-col",[a("v-card",{attrs:{flat:"",color:"#e7dae2"}},[t._v(" 두번째, "),a("span",[t._v("미치기")]),a("v-icon",[t._v("sentiment_satisfied_alt")])],1)],1),a("v-col",[a("v-card",{attrs:{flat:"",color:"#edebe4"}},[t._v(" 세번째, "),a("span",[t._v("집중하기")]),a("v-icon",[t._v("forum")])],1)],1)],1),a("h3",{staticClass:"banner_title"},[t._v(" YANG 매거진 ")]),a("swiper",{staticClass:"swiper_magezine",attrs:{options:t.swiperOption_megezine}},[a("swiper-slide",[a("p",{staticClass:"tit"},[t._v("오늘 하루는 고생 많았어"),a("br"),t._v("이제는 쉬자")]),a("figure",{staticClass:"thumbnail"},[a("img",{attrs:{src:"https://cdn.pixabay.com/photo/2022/02/12/21/22/toast-7009956_960_720.jpg",alt:""}})])]),a("swiper-slide",[a("p",{staticClass:"tit"},[t._v("다시 꿈꾸고 싶다 "),a("br"),t._v("진짜?")]),a("figure",{staticClass:"thumbnail"},[a("img",{attrs:{src:"https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg",alt:""}})])]),a("swiper-slide",[a("p",{staticClass:"tit"},[t._v("여전히 서툴고 좀 부족해 보여도"),a("br"),t._v("언제까지나 내곁에 있을께")]),a("figure",{staticClass:"thumbnail"},[a("img",{attrs:{src:"https://cdn.pixabay.com/photo/2016/07/22/09/59/fruits-1534494_960_720.jpg",alt:""}})])]),a("div",{staticClass:"swiper-button-prev magezine_prev",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{staticClass:"swiper-button-next magezine_next",attrs:{slot:"button-next"},slot:"button-next"})],1),a("section",{staticClass:"shop_section"},[a("h3",{staticClass:"shop_title"},[t._v(" 상품리스트 ")]),a("ul",{staticClass:"shop_list"},[a("li",[a("a",{attrs:{href:"#"}},[a("figure",{staticClass:"thumb_img"},[a("img",{attrs:{src:"https://cdn.pixabay.com/photo/2022/02/11/14/52/waffles-7007465_960_720.jpg",alt:"상품 이미지"}})]),a("p",{staticClass:"info_title"},[a("span",{staticClass:"info_title_name"},[t._v(" 행복한 닭이 낳은 동물복지 유정란 (10입) ")]),a("span",{staticClass:"info_price_cost"},[t._v(" 판매가 3,800원 ")])])])]),a("li",[a("a",{attrs:{href:"#"}},[a("figure",{staticClass:"thumb_img"},[a("img",{attrs:{src:"https://cdn.pixabay.com/photo/2016/10/31/18/14/dessert-1786311_960_720.jpg",alt:"상품 이미지"}})]),a("p",{staticClass:"info_title"},[a("span",{staticClass:"info_title_name"},[t._v(" 슈가 두부도너츠 (45g) ")]),a("span",{staticClass:"info_price_cost"},[t._v(" 판매가 3,800원 ")])])])]),a("li",[a("a",{attrs:{href:"#"}},[a("figure",{staticClass:"thumb_img"},[a("img",{attrs:{src:"https://cdn.pixabay.com/photo/2015/03/14/14/00/carrots-673184_960_720.jpg",alt:"상품 이미지"}})]),a("p",{staticClass:"info_title"},[a("span",{staticClass:"info_title_name"},[t._v(" 한끼연두부 오리엔탈유자 (118gx2EA) ")]),a("span",{staticClass:"info_price_cost"},[t._v(" 판매가 3,800원 ")])])])]),a("li",[a("a",{attrs:{href:"#"}},[a("figure",{staticClass:"thumb_img"},[a("img",{attrs:{src:"https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg",alt:"상품 이미지"}})]),a("p",{staticClass:"info_title"},[a("span",{staticClass:"info_title_name"},[t._v(" 식물성 유니짜장면 2인분 (620g) ")]),a("span",{staticClass:"info_price_cost"},[t._v(" 판매가 3,800원 ")])])])]),a("li",[a("a",{attrs:{href:"#"}},[a("figure",{staticClass:"thumb_img"},[a("img",{attrs:{src:"https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_960_720.jpg",alt:"상품 이미지"}})]),a("p",{staticClass:"info_title"},[a("span",{staticClass:"info_title_name"},[t._v(" 자연은 맛있다 백면 (101.5gx4봉) ")]),a("span",{staticClass:"info_price_cost"},[t._v(" 판매가 3,800원 ")])])])]),a("li",[a("a",{attrs:{href:"#"}},[a("figure",{staticClass:"thumb_img"},[a("img",{attrs:{src:"https://cdn.pixabay.com/photo/2017/07/28/14/29/macarons-2548827_960_720.jpg",alt:"상품 이미지"}})]),a("p",{staticClass:"info_title"},[a("span",{staticClass:"info_title_name"},[t._v(" 나폴리식 미트라구 파스타 (2인분) (600g) ")]),a("span",{staticClass:"info_price_cost"},[t._v(" 판매가 3,800원 ")])])])]),a("li",[a("a",{attrs:{href:"#"}},[a("figure",{staticClass:"thumb_img"},[a("img",{attrs:{src:"https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg",alt:"상품 이미지"}})]),a("p",{staticClass:"info_title"},[a("span",{staticClass:"info_title_name"},[t._v(" 식물성 유니짜장면 2인분 (620g) ")]),a("span",{staticClass:"info_price_cost"},[t._v(" 판매가 3,800원 ")])])])]),a("li",[a("a",{attrs:{href:"#"}},[a("figure",{staticClass:"thumb_img"},[a("img",{attrs:{src:"https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg",alt:"상품 이미지"}})]),a("p",{staticClass:"info_title"},[a("span",{staticClass:"info_title_name"},[t._v(" 슈가 두부도너츠 (45g) ")]),a("span",{staticClass:"info_price_cost"},[t._v(" 판매가 3,800원 ")])])])])])])],1)],1)},E=[],D=a("7212"),L=(a("a7a3"),{name:"Home",components:{Swiper:D["Swiper"],SwiperSlide:D["SwiperSlide"]},data:function(){return{swiperOption:{slidesPerView:1,centeredSlides:!0,speed:800,loop:!0,autoplay:{delay:3e3,stopOnLastSlide:!1,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0,type:"bullets"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},swiperOption_megezine:{effect:"fade",fadeEffect:{crossFade:!0},observer:!0,observeParents:!0,slidesPerView:1,speed:800,loop:!0,grabCursor:!0,autoplay:{delay:3e3,stopOnLastSlide:!1,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1024:{slidesPerView:1,spaceBetween:0},768:{slidesPerView:1,spaceBetween:0},640:{slidesPerView:1,spaceBetween:0},320:{slidesPerView:1,spaceBetween:0}}}}},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}}}),N=L,M=(a("21bb"),a("8336")),z=a("62ad"),B=a("a523"),I=a("169a"),q=a("132d"),F=a("a722"),G=a("0fd9"),R=a("2fa4"),Y=Object(p["a"])(N,A,E,!1,null,null,null),H=Y.exports;v()(Y,{VBtn:M["a"],VCard:d["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VCol:z["a"],VContainer:B["a"],VDialog:I["a"],VIcon:q["a"],VLayout:F["a"],VRow:G["a"],VSpacer:R["a"]});var W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","pa-0":""}},[a("v-img",{attrs:{"max-height":"300","max-width":"100%",src:"https://cdn.pixabay.com/photo/2021/10/22/00/59/restaurant-6730811_1280.jpg"}}),a("v-layout",{attrs:{column:"",wrap:""}},[a("v-row",t._l(9,(function(e){return a("v-col",{key:e,staticClass:"d-flex child-flex",attrs:{cols:"4"}},[a("v-img",{staticClass:"grey lighten-2",attrs:{src:"https://picsum.photos/500/300?image="+(5*e+10),"lazy-src":"https://picsum.photos/10/6?image="+(5*e+10),"aspect-ratio":"1"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)})),1)],1)],1)},J=[],U={name:"About",components:{}},K=U,Q=a("adda"),X=a("490a"),Z=Object(p["a"])(K,W,J,!1,null,null,null),tt=Z.exports;v()(Z,{VCol:z["a"],VContainer:B["a"],VImg:Q["a"],VLayout:F["a"],VProgressCircular:X["a"],VRow:G["a"]});var et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","pa-0":""}},[a("v-img",{attrs:{"max-height":"120","max-width":"100%",src:"https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"}}),a("v-layout",{attrs:{column:"",wrap:""}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v(" News "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{staticClass:"boardType1",attrs:{headers:t.headers,items:t.contents,page:t.page,"items-per-page":t.itemsPerPage,search:t.search,"hide-default-footer":"","fixed-header":""},on:{"update:page":function(e){t.page=e},"click:row":t.rowClick,"page-count":function(e){t.pageCount=e}}})],1),a("div",{staticClass:"text-center pt-2"},[a("v-pagination",{attrs:{length:t.pageCount,depressed:"",color:"#444","prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-btn",{attrs:{tile:"",depressed:"",color:"#eee"},on:{click:t.writeClick}},[t._v(" 글작성 ")])],1),a("div",{staticClass:"blind"},[t._v(" 참고 https://dollvin.tistory.com/61 "),a("br"),t._v(" https://fyzh99.tistory.com/44"),a("br"),t._v(" LAPM( 리눅스 + 아파치 + PHP + MySql) 깃 설치 : https://dollvin.tistory.com/25?category=620148"),a("br"),t._v(" https://v15.vuetifyjs.com/ko/ ")])],1)],1)},at=[],st=(a("d3b7"),a("bc3a")),it=a.n(st),nt={name:"boardList",created:function(){this.fetch()},methods:{fetch:function(){var t=this;console.log("fetch list"),it.a.get("http://localhost:3000/arr").then((function(e){console.log("arr:",e.data),t.exampleItems=e.data})).catch((function(t){console.log(t)})).finally((function(){console.log("항상 마지막에 실행")}))},writeClick:function(){this.$router.push("/vue-page/views/writer")},rowClick:function(t){this.$router.push("/vue-page/views/view/"+t.seq)}},mounted:function(){this.fetch()},data:function(){return{text:"Welcome to AyoteraLab",page:1,perPage:9,pageCount:0,pages:[],itemsPerPage:10,totalVisible:10,headers:[{text:"순서",align:"center",sortable:!1,value:"number"},{text:"제목",value:"title"},{text:"날짜",align:"center",value:"regDt"}],contents:[]}}},ot=nt,rt=a("8fea"),lt=a("891e"),ct=a("8654"),pt=Object(p["a"])(ot,et,at,!1,null,null,null),ut=pt.exports;v()(pt,{VBtn:M["a"],VCard:d["a"],VCardTitle:f["c"],VContainer:B["a"],VDataTable:rt["a"],VImg:Q["a"],VLayout:F["a"],VPagination:lt["a"],VRow:G["a"],VSpacer:R["a"],VTextField:ct["a"]});var vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","pa-0":""}},[a("v-img",{attrs:{"max-height":"120","max-width":"100%",src:"https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"}}),a("v-layout",{attrs:{column:"",wrap:""}},[a("v-form",[a("v-row",{attrs:{outline:"","no-gutters":""}},[t._v(" "+t._s(t.title)+" ")]),a("v-row",{attrs:{outline:"","no-gutters":""}},[t._v(" "+t._s(t.context)+" ")]),a("v-row",{attrs:{"no-gutters":""}},[a("v-btn",{attrs:{block:"",tile:"",depressed:"",color:"#eee"},on:{click:t.listClick}},[t._v(" 목록 ")])],1)],1)],1)],1)},dt=[],ft={name:"boardView",created:function(){this.fetch()},methods:{fetch:function(){it.a.get("http://localhost:8080/vue-page/board/"+this.$router.params.seq).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},listClick:function(){this.$router.push("/vue-page/views/list")},deleteClick:function(){var t=this;this.$data.seq&&it.a.delete("http://localhost:8080/vue-page/board/"+this.$data.seq).then((function(e){console.log(e),t.$router.push("/vue-page/views/list")})).catch((function(t){console.log(t)}))}},data:function(){return{title:"[제목] 그래 그럴수 있다",context:"마음이 불편한 휴식 중이라면 오랜만에 갖는 휴식 하지만 산책을 하거나, 여행이라도 가지 않으면, 허비하는 시간 같아서 불편한 마음 한 켠 아무것도 하지 않는 시간에 죄책감을 느끼며 제대로 된 휴식을 취하지 못하는 분들을 위해 휴식 다운 휴식"}}},gt=ft,ht=a("4bd4"),_t=Object(p["a"])(gt,vt,dt,!1,null,null,null),mt=_t.exports;v()(_t,{VBtn:M["a"],VContainer:B["a"],VForm:ht["a"],VImg:Q["a"],VLayout:F["a"],VRow:G["a"]});var bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","pa-0":""}},[a("v-img",{attrs:{"max-height":"120","max-width":"100%",src:"https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"}}),a("v-layout",{attrs:{column:"",wrap:""}},[a("v-form",[a("v-row",[t._v(" 제목 ")]),a("v-row",[a("v-text-field",{attrs:{counter:50,label:"제목",name:"title",required:"",outline:"",maxlength:"50"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),a("v-row",[t._v(" 내용 ")]),a("v-row",[a("v-textarea",{attrs:{name:"context",label:"내용을 입력해주세요.",counter:1e3,outline:"",maxlength:"1000"},model:{value:t.context,callback:function(e){t.context=e},expression:"context"}})],1),a("v-row",[a("v-btn",{attrs:{tile:"",depressed:"",color:"#eee"},on:{click:t.writeClick}},[t._v(" 등록 ")])],1)],1)],1)],1)},wt=[],Ct=(a("25f0"),{name:"boardWriter",methods:{writeClick:function(){var t=this;this.$route.params.seq?it.a.put("http://localhost:8080/vue-page/board",this.$data).then((function(e){console.log(e),t.$router.push("/vue-page/views/list")})).catch((function(t){console.log(t)})):(this.$data.regDt=this.getNowDate(),this.$data.uptDt=this.getNowDate(),it.a.post("http://localhost:8080/vue-page/board",this.$data).then((function(e){console.log(e),t.$router.push("/vue-page/views/list")})).catch((function(t){console.log(t)})))},getNowDate:function(){var t=new Date,e=t.getFullYear().toString(),a=(t.getMonth()+1).toString(),s=t.getDate().toString();return e+"-"+(a[1]?a:"0"+a[0])+"-"+(s[1]?s:"0"+s[0])}},data:function(){return{title:"그럴수 있따...",context:"",uptDt:"",regDt:""}}}),xt=Ct,yt=a("a844"),Vt=Object(p["a"])(xt,bt,wt,!1,null,null,null),kt=Vt.exports;v()(Vt,{VBtn:M["a"],VContainer:B["a"],VForm:ht["a"],VImg:Q["a"],VLayout:F["a"],VRow:G["a"],VTextField:ct["a"],VTextarea:yt["a"]}),s["default"].use(T["a"]);var jt=[{path:"/vue-page/",name:"Home",component:H},{path:"/vue-page/views/about",name:"About",component:tt},{path:"/vue-page/views/list",name:"boardList",component:ut},{path:"/vue-page/views/view/:seq",name:"boardView",component:mt},{path:"/vue-page/views/writer",name:"boardWriter",component:kt}],Ot=new T["a"]({mode:"history",routes:jt}),Pt=Ot,St=a("f309");a("bf40"),a("d1e78"),a("5a41");s["default"].use(St["a"]);var $t=new St["a"]({icons:{iconfont:"mdi"}});s["default"].config.productionTip=!1,new s["default"]({router:Pt,vuetify:$t,render:function(t){return t($)}}).$mount("#app")},"5a41":function(t,e,a){},d6cc:function(t,e,a){}});
//# sourceMappingURL=app.f2983677.js.map