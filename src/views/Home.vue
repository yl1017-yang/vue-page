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
            <section class="shop_section">
                <h3 class="shop_title">
                    YANG 상품리스트
                </h3>
                <ul class="shop_list">
                    <li>
                        <figure class="thumb_img">
                            <img src="https://shoppulmuone.cdn.ntruss.com/BOS/il/2021/06/03/320_C1DFAF22585E48A985CA.jpg" alt="상품 이미지">
                        </figure>
                        <p class="info_title">
                            <span class="info_title_name">
                                행복한 닭이 낳은 동물복지 유정란 (10입) 
                            </span>
                            <span class="info_price_cost">
                                판매가 3,800원
                            </span>
                        </p>
                    </li>
                    <li>
                        <figure class="thumb_img">
                            <img src="https://shoppulmuone.cdn.ntruss.com/BOS/il/2022/02/12/320_CC8CF8AD1FC749EAB465.jpg" alt="상품 이미지">
                        </figure>
                        <p class="info_title">
                            <span class="info_title_name">
                                 슈가 두부도너츠 (45g) 
                            </span>
                            <span class="info_price_cost">
                                판매가 3,800원
                            </span>
                        </p>
                    </li>
                    <li>
                        <figure class="thumb_img">
                            <img src="https://shoppulmuone.cdn.ntruss.com/BOS/il/2020/12/15/320_1A7FE1DB7B1E40D09BB4.jpg" alt="상품 이미지">
                        </figure>
                        <p class="info_title">
                            <span class="info_title_name">
                                 한끼연두부 오리엔탈유자 (118gx2EA) 
                            </span>
                            <span class="info_price_cost">
                                판매가 3,800원
                            </span>
                        </p>
                    </li>
                    <li>
                        <figure class="thumb_img">
                            <img src="https://shoppulmuone.cdn.ntruss.com/BOS/il/2021/06/07/320_5FAB0C8818764C55987A.jpg" alt="상품 이미지">
                        </figure>
                        <p class="info_title">
                            <span class="info_title_name">
                                 식물성 유니짜장면 2인분 (620g) 
                            </span>
                            <span class="info_price_cost">
                                판매가 3,800원
                            </span>
                        </p>
                    </li>
                    <li>
                        <figure class="thumb_img">
                            <img src="https://shoppulmuone.cdn.ntruss.com/BOS/il/2020/12/15/320_1A7FE1DB7B1E40D09BB4.jpg" alt="상품 이미지">
                        </figure>
                        <p class="info_title">
                            <span class="info_title_name">
                                 자연은 맛있다 백면 (101.5gx4봉) 
                            </span>
                            <span class="info_price_cost">
                                판매가 3,800원
                            </span>
                        </p>
                    </li>
                    <li>
                        <figure class="thumb_img">
                            <img src="https://shoppulmuone.cdn.ntruss.com/BOS/il/2021/06/07/320_5FAB0C8818764C55987A.jpg" alt="상품 이미지">
                        </figure>
                        <p class="info_title">
                            <span class="info_title_name">
                                 나폴리식 미트라구 파스타 (2인분) (600g) 
                            </span>
                            <span class="info_price_cost">
                                판매가 3,800원
                            </span>
                        </p>
                    </li>
                    <li>
                        <figure class="thumb_img">
                            <img src="https://shoppulmuone.cdn.ntruss.com/BOS/il/2021/06/07/320_5FAB0C8818764C55987A.jpg" alt="상품 이미지">
                        </figure>
                        <p class="info_title">
                            <span class="info_title_name">
                                 식물성 유니짜장면 2인분 (620g) 
                            </span>
                            <span class="info_price_cost">
                                판매가 3,800원
                            </span>
                        </p>
                    </li>
                    <li>
                        <figure class="thumb_img">
                            <img src="https://shoppulmuone.cdn.ntruss.com/BOS/il/2022/02/12/320_CC8CF8AD1FC749EAB465.jpg" alt="상품 이미지">
                        </figure>
                        <p class="info_title">
                            <span class="info_title_name">
                                 슈가 두부도너츠 (45g) 
                            </span>
                            <span class="info_price_cost">
                                판매가 3,800원
                            </span>
                        </p>
                    </li>
                </ul>
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