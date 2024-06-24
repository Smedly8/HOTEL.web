<template>
    <div class="homeSlider">

        <div @click="prevSlide" class="homeSlider__wrap_navigWrap-button">
            <img class="homeSlider__wrap_navigWrap-button-img" style="transform: rotate(180deg);" src="@/assets/arrow-g.svg" alt="">
        </div>
        <div @click="nextSlide" class="homeSlider__wrap_navigWrap-button">
            <img class="homeSlider__wrap_navigWrap-button-img" src="@/assets/arrow-g.svg" alt="">
        </div>

        <swiper
            :slides-per-view="1"
            :space-between="20"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :loop="true"
            class="homeSlider__swiper"

        >
            <swiper-slide v-for="(slide, idx) in slides" :key="idx">
            
                <div class="homeSlider__wrap">
                    
                    <img class="homeSlider__wrap_img" :src="slide">
                </div>
            </swiper-slide>
        </swiper>


    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Fade } from 'swiper';

export default {
    components:{
        Swiper,
        SwiperSlide,
    }, 
    props:{
        slides: Array,
    },
    data(){
        return{

            swiper: null,
            
        }
    },

    methods:{
        onSwiper(swiper){
            this.swiper = swiper 
        },  
        onSlideChange(){
            console.log(this.swiper?.activeIndex)
        },   
        nextSlide(){
            this.swiper.slideNext()
        },
        prevSlide(){
            this.swiper.slidePrev()
        },
    },
}
</script>
<style lang="scss" scoped>
@import '@/style/template.scss';
@import '@/style/swiperCustom.scss';
.homeSlider{
    padding: 0px 0;
    position: relative;
    height: 100%;
    width: 100%;
    &__swiper{
        width: var(--maxW);
        width: 100%;
        height: 100%;
    }
    &__wrap{
        height: 100%;
        
        border-radius: 0px;
        width: var(--maxW);
        margin: 0 auto;
        position: relative;
        &_img{
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            // filter: brightness(70%);
            border-radius: 0px;
        }
        &_topWrap{
            position: absolute;
            top: 36px;
            right: 36px;

            display: flex;
            flex-direction: row;
            &-banner{
                // @include blueBase;
                margin-right: 15px;
                padding: 7px 17px;
                background-color: white;
                // border-radius: 4px;
                &:last-child{
                    margin-right: 0;
                }
            }
        }
        &_mainWrap{
            position: absolute;
            top: 0;
            left: 0;
            padding-left: 48px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            &-title{
                font-family: "Halvar";
                font-size: 70px;
                color: white;
            }
            &-text{
                font-family: "Halvar";
                font-size: 25px;
                color: white;
                width: 310px;
                text-align: left;
            }
            &-button{
                // @include blueButton;
                margin-top: 25px;
                cursor: pointer;
            }
        }
        &_navigWrap{
            position: absolute;
            bottom: 90px;
            right: 66px;
            display: flex;
            flex-direction: row;
            z-index: 10;
            &-button{
                position: absolute;
                z-index: 10;
                left: 20px;
                
                width: 60px;
                height: 60px;
                background: #ffffff3a;
                background: var(--mainColor);
                background: rgb(252, 252, 252);
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 10px;
                border-radius: 40px;
                backdrop-filter: blur(0.4px);
                cursor: pointer;
                transition: 0.2s;
                top: 45%;
                &:nth-child(2){
                    margin-right: 0;
                    left: auto;
                    right: 20px;
                }
                &:hover{
                    background: #ffffff50;
                }
                &-img{
                    width:  40px;
                    color: green;
                }
            }
        }
    }
}
@media screen and (max-width: $mediaQuery2) {
    .homeSlider{
        width: 100%;
        position: relative;
        &__wrap{
            height: 100%;
            width: 100vw;
            &_navigWrap{
                top: 0;
                left: 0;
                // opacity: 0;
                // pointer-events: none;
                bottom: 10vw;
                right: 10vw;
                width: 100%;
                height: 100%;
                &-button{
                    position: absolute;
                    width: 10vw;
                    height: 10vw;
                    z-index: 10;
                    left: 4vw;
                    top: 46%;
                    &:nth-child(2){
                        left: auto;
                        right: 4vw;
                    }
                    &-img{
                        width: 7vw;
                        
                    }
                }
            }
            &_img{
                border-radius: 0;
            }
        }
        .swiper{
            width: 100%;
        }
    }
}
</style>