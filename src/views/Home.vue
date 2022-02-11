<template>
    <v-main>
        <swiper class="swiper" :options="swiperOption" role="tablist">
            <swiper-slide class="swiper_bg1" role="tab">새롭게 달라진 <br>YANG POINT</swiper-slide>
            <swiper-slide class="swiper_bg2" role="tab">일상을 바꾸는 <br>즐거운 하루</swiper-slide>
            <swiper-slide class="swiper_bg3" role="tab">npm install swiper@5.3.7 vue-awesome-swiper --save<br>npm install --save-dev sass-loader@7.1.0</swiper-slide>
            
            <div class="swiper-pagination" slot="pagination"></div> 
            <div class="swiper-button-prev" slot="button-prev"></div> 
            <div class="swiper-button-next" slot="button-next"></div> 
        </swiper>

        <v-container>
            <!-- 배너 -->
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
            <!-- //배너 -->

            <!-- 상품 -->
            <section class="fb__main__section best-item__area">
                <div class="section__inner">
                    <h3 class="section__title">
                        타이틀
                    </h3>
                    <div>
                        상품카테고리
                    </div>
                </div>
            </section>
            <!-- //상품 -->

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

<style lang="scss">

        .best-item {
            &__area {
                width: 100%;
                max-width: 1920px;
                min-width: 1168px;
                margin-left: auto;
                margin-right: auto;
                padding-top: 60px;
                background: #eee;

                .fb__category-tab {
                    input {
                        & + .fb__category-tab__btn {
                            display: inline-block;
                            text-align: center;
                            vertical-align: middle;
                            &::before {
                                content: attr(data-text);
                                display: block;
                                font-weight: bold;
                                height: 0;
                                overflow: hidden;
                                visibility: hidden;
                            }
                        }
                    }
                }

                .fb__product {
                    &__list {
                        padding-bottom: 60px;
                        counter-reset: list-number;
                    }

                    &__item {
                        position: relative;
                        counter-increment: list-number;

                        &:before {
                            content: counter(list-number, decimal-leading-zero);
                            position: absolute;
                            top: 0;
                            left: 0;
                            z-index: 1;
                            width: 44px;
                            height: 44px;
                            padding-top: 19px;
                            background: pink;
                            border-radius: 8px 0 8px 0;
                            font-family: Noto Sans KR;
                            font-size: 14px;
                            letter-spacing: -0.2px;
                            line-height: 20px;
                            color: #fff;
                            text-align: center;
                            box-sizing: border-box;
                        }

                        &:after {
                            content: "BEST";
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 44px;
                            padding-top: 6px;
                            z-index: 1;
                            font-size: 12px;
                            letter-spacing: -0.2px;
                            line-height: 16px;
                            color: #fff;
                            text-align: center;
                        }
                    }
                }
            }

            &__nav {
                margin-bottom: 20px;
            }
        }

</style>