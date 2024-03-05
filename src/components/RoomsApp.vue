<template>
    <div class="rooms" id="apartments">
        <div class="rooms__wrap">
            <h2 class="rooms__wrap_title">
                {{ isRoomPage ? 'Другие номера' : 'Номера' }}
            </h2>
            <ul class="rooms__wrap_rooms">
                <li v-for="(room, idx) in roomsToView" :key="idx" @click="$router.push({ name: 'apartments', params: { id: room.idx } })" class="rooms__wrap_rooms-room">
                    <img :src="room.images[0]" alt="" class="rooms__wrap_rooms-room-img">
                    <div class="rooms__wrap_rooms-room-bottomWrap">
                        <h2 class="rooms__wrap_rooms-room-title">{{room.name}} </h2>
                        <div class="rooms__wrap_rooms-room-subtitle">
                            <img src="@/assets/icons/bed.svg" alt="">
                            <p>{{room.places}}</p>
                        </div>
                        <div class="rooms__wrap_rooms-room-bottomRow">
                            <button > <p> Цены </p> <img src="@/assets/arrow_right.svg" alt=""></button>
                            <div class="rooms__wrap_rooms-room-bottomRow-price">
                                <h2>от {{room.price_from}} ₽</h2>
                                <p>за дом в сутки</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return{
        }
    },
    props:{
        rooms: Array,
    },

    computed: {
        isRoomPage(){
            return this.$route.params.id != null
        },

        roomsToView(){
            if(this.isRoomPage){
                return this.rooms.filter((el, idx) => el.idx != this.$route.params.id)
            }
            return this.rooms
        }
    },
    
}
</script>
<style lang="scss">
    .rooms{
        display: flex;
        justify-content: center;
        &__wrap{
            width: var(--width);
            &_title{
                font-size: 32px;
                font-family: "Montserrat";
                margin-bottom: 20px;
            }
            &_rooms{
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 40px;
                &-room{
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    overflow: hidden;
                    border-radius: 8px;
                    background: white;
                    box-shadow: 6px 6px 14px 3px rgba(0, 0, 0, 0.08);
                    padding-bottom: 6px;
                    &-img{
                        height: 385px;
                        object-fit: cover;
                    }
                    &-bottomWrap{
                        display: flex;
                        flex-direction: column;
                        padding: 14px 24px;
                    }
                    &-title{
                        font-size: 20px;
                        color: #2F3544;
                    }
                    &-subtitle{
                        display: flex;
                        align-items: center;
                        & > p{
                            font-size: 14px;
                            color: #959595;
                        }
                        & > img{
                            height: 16px;
                            object-fit: contain;
                            margin-right: 8px;
                        }
                    }
                    &-bottomRow{
                        display: flex;
                        justify-content: space-between;
                        margin-top: 18px;
                        font-family: "Montserrat";
                        & > button{
                            width: 180px;
                            height: 45px;
                            border: 2px solid var(--mainColor);
                            color: var(--mainColor);
                            border-radius: 8px;
                            transition: .2s;
                            justify-content: center;
                            align-items: center;
                            display: flex;
                            & > img {
                                display: none;
                            }
                            &:hover{
                                background: var(--mainColor);
                                color: white;
                            }
                        }
                        &-price{
                            display: flex;
                            flex-direction: column;
                            align-items: flex-end;
                            & > h2{
                                font-size: 18px;
                                color: #2F3544;
                                line-height: 1.2em;
                            }
                            & > p{
                                font-size: 14px;
                                color: #959595;
                                line-height: 1.2em;
                            }
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: $mediaQuery2) {
        .rooms{
            padding-top: 3vw;
            &__wrap{
                &_title{
                    font-size: var(--big);
                }
                &_rooms{
                    grid-template-columns: 1fr;
                    gap: 10vw;
                    &-room{
                        &-bottomWrap{
                            padding: 2vw 5vw 2vw;
                        }
                        &-img{
                            height: 60vw;
                            object-fit: cover;
                        }
                        &-title{
                            font-size: var(--big);
                            font-size: 4vw;
                        }
                        &-subtitle{
                            margin-top: 2vw;
                            & > img{
                                width: 5vw;
                            }
                            & > p{
                                line-height: 1em;
                            }
                        }
                        &-bottomRow{
                            margin-top: 4vw;
                           & > button{
                                width: 30vw;
                                height: 10vw;
                                border-width: 1px;
                                font-size: var(--middle);
                                background: var(--mainColor);
                                color: white;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                
                                & > p {
                                    line-height: 1em;
                                    margin-bottom: 0.4vw;
                                    font-size: 4vw !important;
                                }
                                & > img {
                                    display: block;
                                    width: 1.8vw;
                                    margin-left: 4vw;
                                    filter: brightness(0) invert(1) ;
                                    animation: jumpSide infinite 3s ease;
                                }
                           } 
                           &-price{
                            height: 100%;
                            justify-content: flex-end;
                             & > h2{
                                font-size: 4vw;
                             }
                             & > p{
                                font-size: var(--middle);
                             }
                           }
                        }
                    }
                }
            }
        }
    }
    @keyframes jumpSide {
        0%, 43%, 57%, 63%, 77% {
            transform: none;  
        }
        50%, 70%{
            transform: translateX(0.8vw);
        }
    }
</style>