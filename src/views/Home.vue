<template>
    <v-main>
        <v-container>
            Hello World
        </v-container>
    </v-main> 
</template>

<script>
//import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
//import 'swiper/dist/css/swiper.css'

export default {
    name: "Home",
    components: {
        //Swiper,
        //SwiperSlide
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }        
    }
}
</script>

<style scoped>
.swiper { 
    height: 300px; width: 100%;     
}
.swiper .swiper-slide { 
    display: flex; justify-content: center; align-items: center; text-align: center; font-weight: bold; 
    } 
</style>