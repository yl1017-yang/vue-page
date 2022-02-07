<template>
    <v-main>
        <v-container>
            


        </v-container>
    </v-main> 
</template>

<script>
//import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
//import 'swiper/dist/css/swiper.css'

export default {
    name: "Home",
    components: {
        // Swiper,
        // SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
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