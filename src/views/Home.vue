<template>
    <v-main>
        <swiper class="swiper" :options="swiperOption" role="tablist">
            <swiper-slide class="swiper_bg1" role="tab">새롭게 달라진 <br>YANG POINT</swiper-slide>
            <swiper-slide class="swiper_bg2" role="tab">일상을 바꾸는 <br>즐거운 스와이프</swiper-slide>
            <swiper-slide class="swiper_bg3" role="tab">npm install swiper@5.3.7 vue-awesome-swiper --save<br>npm install --save-dev sass-loader@7.1.0</swiper-slide>
            
            <div class="swiper-pagination" slot="pagination"></div> 
            <div class="swiper-button-prev" slot="button-prev"></div> 
            <div class="swiper-button-next" slot="button-next"></div> 
        </swiper>

        <v-container>
            <h3 class="banner_title">
                YANG 내용
            </h3>

            <v-row no-gutters>
                <v-col>
                <v-card
                    flat
                    color="#fffbed"
                    class="banner"
                >
                    첫번째, 양하기
                </v-card>
                </v-col>
                <v-col order="12">
                <v-card
                    flat
                    color="#e7dae2"
                    class="banner"
                >
                    두번째, 기부하기
                </v-card>
                </v-col>
                <v-col order="1">
                <v-card
                    flat
                    color="#edebe4"
                    class="banner"
                >
                    세번재, 선물하기
                </v-card>
                </v-col>
            </v-row>

        </v-container>
    </v-main> 
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    name: 'Home',
    components: {
        Swiper,
        SwiperSlide
    },
    data() { 
        return { 
            swiperOption: { 
                slidesPerView: 1, 
                spaceBetween: 30, 
                centeredSlides: true,
                speed: 800,
                loop: true, 
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: { 
                    el: '.swiper-pagination', 
                    clickable: true 
                }, 
                navigation: { 
                    nextEl: '.swiper-button-next', 
                    prevEl: '.swiper-button-prev',
                },
            } 
        } 
    },
}
</script>

<style lang="scss" scoped>
.swiper { 
    height: 500px; 
    width: 100%; 
    .swiper-slide { 
        display: flex; 
        justify-content: center; 
        align-items: center; 
        text-align: center; 
        color:#fff;
        font-weight: bold; 
        font-size: 50px;
    } 
    .swiper_bg1 {
        background: #f17ea5;
    }
    .swiper_bg2 {
        background: #8890ff;
    }
    .swiper_bg3 {
        background: #2fbd9c;
    }
}
.banner_title {
    font-size:30px;
}
.banner{ 
    width:95%; 
    height:180px;
    padding:30px;
    font-size:22px;
    margin:15px 0 0;
    
    $card-border-radius:20px;
}

</style>