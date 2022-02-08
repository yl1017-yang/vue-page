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
                YANG 버킷리스트
            </h3>

            <v-row no-gutters class="banner">
                <v-col>
                <v-card
                    flat
                    color="#fffbed"
                >
                    첫번째, <span>행복하기</span>
                    <v-icon>heart_broken</v-icon>
                </v-card>
                </v-col>
                <v-col>
                <v-card
                    flat
                    color="#e7dae2"
                >
                    두번째, <span>미치기</span>
                    <v-icon>sentiment_satisfied_alt</v-icon>
                </v-card>
                </v-col>
                <v-col>
                <v-card
                    flat
                    color="#edebe4"
                >
                    세번째, <span>집중하기</span>
                    <v-icon>forum</v-icon>
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
                //spaceBetween: 30, 
                centeredSlides: true,
                speed: 800,
                loop: true, 
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                pagination: { 
                    el: '.swiper-pagination', 
                    clickable: true,
                    type: "bullets"
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


</style>