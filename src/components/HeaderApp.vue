<template>
    <div class="header" id="header">
        <div class="header__wrap">
            <div class="header__wrap_left">
                <!-- <img src="@/assets/logo.png" alt=""> -->
                <p @click="$router.push({name: 'home'})" class="header__wrap_left-logo">Заречье</p>
                <p @click="$router.push({name: 'home', hash: '#home'})" class="header__wrap_left-link">Главная</p>
                <p @click="$router.push({name: 'home', hash: '#about'})" class="header__wrap_left-link">О нас</p>
                <p @click="$router.push({name: 'home', hash: '#apartments'})" class="header__wrap_left-link">Номера</p>
                <!-- <p class="header__wrap_left-link">Пляж</p> -->
            </div>
            <div class="header__wrap_right">
                <a href="tel:+79281556910" class="header__wrap_right-link">
                    +7 (928) 155-69-10
                </a>
            </div>
            <div class="header__wrap_mb">
                <div class="header__wrap_mb-empty"></div>
                <h2 @click="$router.push({name: 'home'})">Заречье</h2>
                <img v-if="isOpenMobileMenu" @click="isOpenMobileMenu =  false" style="transform: scale(0.7)" class="header__wrap_left-menu-img" src="@/assets/cross.svg" alt="">
                <img v-else src="@/assets/menu.svg" @click="openMobileMenu" alt="">
            </div>
        </div>
    </div>
    <MobileMenu v-if="isOpenMobileMenu" @close="isOpenMobileMenu =  false" :links="links"/>
</template>
<script>
import MobileMenu from '@/components/MobileMenu.vue'
import { postAction } from '@/api/useApi'
export default {
    props:{
        links: Array,
    },
    components:{
        MobileMenu,
    },
    data(){
        return{
            isOpenMobileMenu: false,
        }
    },
    methods: {
        openMobileMenu(){
            console.log(this.isOpenMobileMenu)
            this.isOpenMobileMenu = true
            postAction('Переход в мобильное меню')
            .catch(() => {
                console.warn('postAction Error');
            })
            
        }
    }
}
</script>
<style lang="scss">
    .header{
        width: 100vw;
        height: 80px;
        display: flex;
        justify-content: center;
        background: var(--lightBlue);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 11;
        background: white;
        box-shadow: 6px 6px 14px 3px rgba(0, 0, 0, 0.03);
        &__wrap{
            width: var(--width);
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &_mb{
                display: none;
            }
            &_left{
                display: flex;
                align-items: center;
                & > img{
                    width: 36px;
                    height: 36px;
                    margin-right: 16px;
                }
                &-logo{
                    @include baseText(24px);
                    font-weight: bold;
                    margin-right: 20px;
                    font-family: "Montserrat-alt";
                    color: var(--mainColor);
                    cursor: pointer;
                }
                &-link{
                    @include baseText(20px);
                    margin-left: 80px;
                    cursor: pointer;
                    &:hover{
                        color: var(--mainColor) ;
                    }
                }
            }
            &_right{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                &-link{
                    @include baseText(16px);
                    margin-right: 0px;
                    height: 40px;
                    width: 220px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 8px;
                    line-height: 1em;
                    border: 2px solid var(--mainColor);
                    color: var(--mainColor);
                    transition: .2s;
                    &:hover{
                        background: var(--mainColor);
                        color: white
                    }
                }
                &-login{
                    @include baseText(var(--little));
                    color: black;
                    margin-left: 12px;
                }
                &-reg{
                    @include baseText(var(--little));
                    padding: 15px 56px;
                    border: 1px solid var(--mainColor);
                    color: var(--mainColor);
                    border-radius: 4px;
                    margin-left: 20px;
                }
            }
        }
    }
    @media screen and (max-width: $mediaQuery2) {
        .header{
            height: 60px;
            
            &__wrap{
                &_left{
                    display: none;
                }
                &_right{
                    display: none;
                }
                &_mb{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    & > img{
                        height: 30px;
                        box-sizing: content-box;
                        padding: 3vw;
                    }
                    & > h2{
                        font-size: var(--big);
                        font-weight: 400;
                        font-family: "Montserrat-alt";
                        color: var(--mainColor);
                    }
                    &-empty{
                        width: 30px;
                        box-sizing: content-box;
                        padding: 3vw;
                    }
                }
            }
        }
    }
</style>