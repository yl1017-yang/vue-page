<template>
    <v-main>
        <v-container>
            <div>
                샘플사이트
            </div>

            <swiper class="swiper" :options="swiperOption" role="tablist">
                <swiper-slide role="tab">I'm Slide 1</swiper-slide>
                <swiper-slide role="tab">I'm Slide 2</swiper-slide>
                <swiper-slide role="tab">
                    npm install swiper@4.4.1 vue-awesome-swiper@3 --save<br>
                    npm uninstall swiper vue-awesome-swiper --save
                    npm install swiper@5.3.7 vue-awesome-swiper --save<br>
                    npm install sass-loader@10<br>
                    npm install --save-dev sass-loader@7.1.0<br>
                    npm uninstall --save-dev sass-loader
                </swiper-slide>
                
                <div class="swiper-pagination" slot="pagination"></div> 
                <div class="swiper-button-prev" slot="button-prev"></div> 
                <div class="swiper-button-next" slot="button-next"></div> 
            </swiper>

        </v-container>
    </v-main> 
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    name: 'awesomeSwiper',
    components: {
        Swiper,
        SwiperSlide
    },
    data() { 
        return { 
            swiperOption: { 
                slidesPerView: 1, 
                spaceBetween: 30, 
                loop: true, 
                pagination: { 
                    el: '.swiper-pagination', clickable: true 
                }, 
                navigation: { 
                    nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' 
                } 
            } 
        } 
    }
}
</script>

<style lang="scss" scoped>
.swiper { 
    height: 500px; width: 100%; background: #fffbd5;
    .swiper-slide { 
        display: flex; justify-content: center; align-items: center; text-align: center; font-weight: bold; 
    } 
}

</style>