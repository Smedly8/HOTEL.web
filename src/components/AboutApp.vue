<template>
    <div class="about" id="about">
        <div class="about__wrap">
            <div class="about__wrap_topRow">
                <div class="about__wrap_topRow-left">
                    Гостевой дом <br> “Заречье”
                </div>
                <div class="about__wrap_topRow-separator"></div>
                <div class="about__wrap_topRow-right">
                    Наш гостевой дом расположен <br> в тихом центре курорта Ольгинка. <br>
                        В дали от шумных заведений,<br> среди тихой природы.
                </div>

            </div>
            <div class="about__wrap_cards">

                <div class="about__wrap_cards-card">
                    <div class="about__wrap_cards-card-imgWrap">
                        <!-- <img src="@/assets/cards/1.webp" alt="" class="about__wrap_cards-card-imgWrap-img"> -->
                        <div class="about__wrap_cards-card-imgWrap-img">
                            <SliderApp :slides="slides1"/>
                        </div>
                    </div>
                    <div class="about__wrap_cards-card-textWrap">
                        <h2>Комфорт и уют</h2>
                        <p>
                            Уютные обустроенные места на открытом воздухе, есть где спокойно провести время наслаждаясь природой
                        </p>
                    </div>
                </div>

                <div class="about__wrap_cards-card">
                    <div class="about__wrap_cards-card-imgWrap">
                        <!-- <img src="@/assets/cards/1.webp" alt="" class="about__wrap_cards-card-imgWrap-img"> -->
                        <div class="about__wrap_cards-card-imgWrap-img">
                            <SliderApp :slides="slides2"/>
                        </div>
                    </div>
                    <div class="about__wrap_cards-card-textWrap">
                        <h2>Бассейн</h2>
                        <p>
                            Во дворе есть небольшой каркасный бассейн, можно освежиться в любое время не выходя со двора
                        </p>
                    </div>
                </div>

                <div class="about__wrap_cards-card">
                    <div class="about__wrap_cards-card-imgWrap">
                        <!-- <img src="@/assets/cards/1.webp" alt="" class="about__wrap_cards-card-imgWrap-img"> -->
                        <div class="about__wrap_cards-card-imgWrap-img">
                            <SliderApp :slides="slides3"/>
                        </div>
                    </div>
                    <div class="about__wrap_cards-card-textWrap">
                        <h2>Мангальная зона и парковка</h2>
                        <p>
                            На территории двора располагается удобная мангальная зона и парковка     
                        </p>
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
</template>
<script>
import SliderApp from '@/components/SliderApp.vue'
export default {
    components: {
        SliderApp
    },
    data(){
        return{
            slides1 : [
                require('@/assets/cards/1/0.webp'), 
                require('@/assets/cards/1/1.webp'), 
                require('@/assets/cards/1/2.webp'), 
                require('@/assets/cards/1/3.webp'),
                require('@/assets/cards/1/4.webp'),
                require('@/assets/cards/1/5.webp'),
                require('@/assets/cards/1/6.webp'),
                require('@/assets/cards/1/11.jpg'),
                require('@/assets/cards/1/7.webp'),
                require('@/assets/cards/1/8.webp'),
                require('@/assets/cards/1/9.webp'),
                require('@/assets/cards/1/10.webp'),
            ],
            slides2: [
                require('@/assets/cards/2/0.jpg'), 
                require('@/assets/cards/2/1.webp'), 
                require('@/assets/cards/2/2.webp'), 
                require('@/assets/cards/2/3.webp'), 
                require('@/assets/cards/2/4.webp'), 
                require('@/assets/cards/2/6.webp'), 
                require('@/assets/cards/2/7.webp'), 
            ],
            slides3: [
                require('@/assets/cards/3/1.webp'), 
                require('@/assets/cards/3/2.webp'), 
            ],
        }
    }
}
</script>
<style lang="scss">
.about{
    display: flex;
    justify-content: center;
    &__wrap{
        &_topRow{
            width: var(--width);
            display: flex;
            justify-content: space-between;
            height: 400px;
        
            &-left{
                width: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 50px;
                font-weight: 700;
            }
            &-separator{
                width: 2px;
                height: 200px;
                margin-top: 100px;
                background: #CCCCCC;;
            }
            &-right{
                width: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 22px;
                font-family: "Montserrat-alt";
                text-align: left;
                line-height: 1.9em;
            }
        }
        &_cards{
            display: flex;
            flex-direction: column;
            &-card{
                display: flex;
                justify-content: center;
                height: 360px;
                width:var(--width);
                max-width: 100%;
                border-radius: 32px;
                overflow: hidden;
                background: white;
                box-shadow: 6px 6px 14px 3px rgba(0, 0, 0, 0.08);
                margin-bottom: 100px;
                &:nth-child(odd){
                    flex-direction: row-reverse;
                }
                &-imgWrap{
                    width: 50%;
                    &-img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
                &-textWrap{
                    width: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    text-align: left;
                    font-family: "Montserrat";
                    flex-direction: column;
                    padding-left: 80px;
                    & > h2{
                        font-size: 24px;
                        margin-bottom: 12px;
                    }
                    & > p{
                        font-size: 18px;
                        line-height: 1.8em;
                        width: 350px;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: $mediaQuery2) {
    .about{
        &__wrap{
            &_topRow{
                height: 55vw;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                &-separator{
                    display: none;
                }
                &-left{
                    width: 100%;
                    font-size: 5.2vw;
                    margin-bottom: 2vw;
                    & > br{
                        display: none;
                    }
                }
                &-right{
                    width: 100%;
                    font-size: 3.6vw;
                    text-align: center;
                }
            }
            &_cards{
                &-card{
                    flex-direction: column !important;
                    justify-content: flex-start;
                    height: auto;
                    margin-bottom: 10vw;
                    border-radius: 5vw;
                    &-imgWrap{
                        width: 100%;
                        &-img{
                            height: 55vw;
                        }
                    }
                    &-textWrap{
                        width: 100%;
                        padding: 3vw 5vw 5vw ;
                        & > h2{
                            font-size: 4.2vw;
                            width: 100%;
                            margin-bottom: 1vw;
                            // text-align: center;
                        }
                        & > p{
                            margin-top: 1vw;
                            font-size: 3.8vw;
                            width: 100%;
                            line-height: 1.5em;
                            // text-align: center;
                        }
                    }
                }
            }
        }
    }
}
</style>