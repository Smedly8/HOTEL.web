<template>
    <div class="descr">
        <div class="descr__wrap">
            <h2>{{currentRoom.name}}</h2>
            <div class="descr__wrap_places">
                <img src="@/assets/icons/bed.svg" alt="">
                <p>{{currentRoom.places}}</p>
            </div>
            <div class="descr__wrap_sliderWrap">
                <SliderApp :slides="currentRoom.images"/>         
            </div>
            <!-- <div class="descr__wrap_imageWrap">
                <img :src="currentRoom.images[0]" class="descr__wrap_imageWrap-main">       
                <div class="descr__wrap_imageWrap-side">
                    <img :src="currentRoom.images[1]" alt="">
                    <img :src="currentRoom.images[2]" alt="">
                </div>    
            </div> -->
            <div class="descr__wrap_descrWrap">
                <!-- <h2>Описание</h2>
                <p>У коттеджей "Фламинго" и "Лесик" имеются отдельная зона с мангалом, садовая качель. У коттеджей "Фламинго" и "Лесик" имеются отдельная зона с мангалом, садовая качель</p> -->
                <ul class="descr__wrap_descrWrap-comforts">

                    <li v-for="add in currentRoom.adds" :key="add" class="descr__wrap_descrWrap-comforts-comfort">
                        <img src="@/assets/check.svg" alt="">
                        <p>{{add}}</p>
                    </li>

                </ul>
            </div>
            <div class="descr__wrap_bottomDescr">
                <div class="descr__wrap_bottomDescr-comforts" v-if="currentRoom.comforts.length > 0">
                    <h2>Удобства</h2>
                    <div v-if="currentRoom.comforts.includes(1)" class="descr__wrap_bottomDescr-comforts-row">
                        <img src="@/assets/icons/1.svg" alt="">
                        Телевизор
                    </div>
                    <div v-if="currentRoom.comforts.includes(2)" class="descr__wrap_bottomDescr-comforts-row">
                        <img src="@/assets/icons/2.svg" alt="">
                        Холодильник
                    </div>
                    <div v-if="currentRoom.comforts.includes(3)" class="descr__wrap_bottomDescr-comforts-row">
                        <img src="@/assets/icons/3.svg" alt="">
                        Система кондиционирования
                    </div>
                    <div v-if="currentRoom.comforts.includes(4)" class="descr__wrap_bottomDescr-comforts-row">
                        <img src="@/assets/icons/4.svg" alt="">
                        Душ
                    </div>
                    <div v-if="currentRoom.comforts.includes(5)" class="descr__wrap_bottomDescr-comforts-row">
                        <img src="@/assets/icons/5.svg" alt="">
                        Кухня
                    </div>
                </div>
            

                <div class="descr__wrap_bottomDescr-comforts">
                    <h2>Цены</h2>
                    <div v-for="price in currentRoom.prices" :key="price.id" class="descr__wrap_bottomDescr-comforts-row descr__wrap_bottomDescr-comforts-row--price">
                        {{price[0]}}
                        <h2>{{price[1]}} ₽</h2>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import SliderApp from '@/components/SliderApp.vue'
import { postAction } from '@/api/useApi'
export default{
    components:{
        SliderApp,
    },
    props:{
        rooms: Array,
    },
    data(){
        return{
            currentRoom: null,
        }
    },
    created(){
        this.currentRoom = this.rooms.find(el => this.$route.params.id == el.idx)
        postAction(`просмотр номера: "${this.currentRoom.name}"`)
    },
}
</script>
<style lang="scss">
.descr{
    display: flex;
    justify-content: center;
    margin-top: 100px;
    padding-bottom: 20px;
    &__wrap{
        padding-top: 10px;
        width: var(--width);
        padding-bottom: 15px;
        &_sliderWrap{
            height: 650px;
            border-radius: 8px;
            overflow: hidden;
            margin-top: 16px;
        }
        &_places{
            display: flex;
            margin-top: 6px;
            margin-bottom: 10px;
            & > p{
                margin-left: 5px;
                font-size: 14px;
                color: var(--deepGray);
            }
        }
        & > h2{
            font-size: 32px;
            color: #2c3e50;
            font-family: "Montserrat";
        }
        &_imageWrap{
            width: 100%;
            display: flex;
            margin-top: 20px;
            gap: 10px;
            &-main{
                width: 764px;
            }
            &-side{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                flex-grow: 1;
                & > img{
                    width: 100%;
                }
            }
        }
        &_descrWrap{
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            & > h2{
                @include baseText;
            }
            & > p{
                @include grayText;  
                width: 600px;
                margin-top: 5px;
            }
            &-comforts{
                display: flex;
                flex-direction: column;
                gap: 14px;
                margin-top: 30px;
                &-comfort{
                    display: flex;
                    & > img{
                        margin-right: 10px;
                        width: 20px;
                    }
                    & > p{
                        @include baseText;
                        font-size: 16px;
                    }
                }
            }
        }
        &_bottomDescr{
            display: flex;
            margin-top: 45px;
            margin-bottom: 50px;
            gap: 300px;
            &-comforts{
                display: flex;
                flex-direction: column;
                & > h2{
                    @include baseText(20px);
                    margin-bottom: 7px;
                }
                &-row{
                    margin: 7px 0;
                    display: flex;
                    gap: 8px;
                    @include grayText(16px);
                    &--price{
                        width: 300px;
                        padding: 4px 0;
                        margin: 4px 0;
                        justify-content: space-between;
                        border-bottom: 1px solid #e8e8e8;
                        &:last-child{
                            border: none
                        }
                    }
                    & > h2{
                        @include baseText(16px);
                        font-weight: 700;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: $mediaQuery2) {
    .descr{
        padding-bottom: 0;
        margin-top: calc(60px + 5vw);
        &__wrap{
            &_places{
                margin-top: 1vw;
            }
            &_sliderWrap{
                height: 70vw;
                width: 100vw;
                margin-left: -5vw;
                border-radius: 0;
                position: relative;
            }
            width: var(--width);
            & > h2{
                font-size: var(--big);
            }
            &_descrWrap{
                // width: var(--width);
                & > p{
                    width: auto;
                }
            }
            &_bottomDescr{
                gap: 10vw;
                flex-direction: column;     
                &-comforts{
                    &-row{
                        width: 100%;
                    }   
                }
            }
        }
    }
}

</style>