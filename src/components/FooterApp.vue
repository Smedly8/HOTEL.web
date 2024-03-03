<template>
    <footer class="footer">
        <div class="footer__wrap">
            <div class="footer__wrap_top">
                <h2>Заречье</h2>
            </div>
            <div class="footer__wrap_navRow">
                <div @click="$router.push({name: 'home', hash: '#home'})" class="footer__wrap_navRow-link">Главная</div>
                <div @click="$router.push({name: 'home', hash: '#about'})" class="footer__wrap_navRow-link">О нас</div>
                <div @click="$router.push({name: 'home', hash: '#apartments'})" class="footer__wrap_navRow-link">Номера</div>
                <!-- <div v-for="(link, idx) in links" :key="idx" class="footer__wrap_navRow-link">{{ link.name }}</div> -->
            </div>
            <div class="footer__wrap_bottomRow">
                <div class="footer__wrap_bottomRow-contacts">
                    <!-- <p>Анжелика</p>
                    <a href="tel:+79189574049"><h2> +7 (918) 957-40-49</h2></a> -->
                    <p>Дмитрий</p>
                    <a href="tel:+79281556910"><h2> +7 (928) 155-69-10</h2></a>
                </div>
                <div class="footer__wrap_bottomRow-contacts footer__wrap_bottomRow-contacts--right">
                    <p>Адрес</p>
                    <h2>Ольгинка, ул. Заречная, 8</h2>
                    <p>Почта</p>
                    <a href="mailto:dozdm@mail.ru"><h2>dozdm@mail.ru</h2></a>
                    
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    props:{
        links: Array,
    },
}
</script>
<style lang="scss">
    .footer{
        background: white;
        display: flex;
        justify-content: center;
        margin-top: 70px;
        padding-bottom: 20px;
        &__wrap{
            border-bottom: 1px solid #dedede;
            width: var(--width);
            padding-bottom: 10px;
            &_top{
                margin-top: 33px;
                & > h2{
                    font-size: 24px;
                    color: var(--mainColor);
                    font-family: "Montserrat-alt";
                    cursor: pointer;
                }
            }
            &_navRow{
                display: flex;
                gap: 50px;
                margin-top: 50px;
                &-link{
                    font-size: 20px;
                    color: #6C6C6C;
                    font-family: "Montserrat";
                    cursor: pointer;
                    &:hover{
                        color: #2F3544;
                    }
                }
            }
            &_bottomRow{
                display: flex;
                justify-content: space-between;
                &-contacts{
                    padding-top: 50px;
                    display: flex;
                    flex-direction: column;
                    &--right{
                        *{text-align: right;}
                    }
                    
                    & > p{
                        color: #acacac;
                        font-size: 14px;
                        font-family: "Montserrat";
                        margin-bottom: 5px;
                    }
                    & > h2{
                            font-size: 18px;
                            color: #2F3544;
                            margin-bottom: 30px;
                            font-family: "Montserrat-rg";
                        }
                    & > a{
                        & > h2{
                            font-size: 18px;
                            color: #2F3544;
                            margin-bottom: 30px;
                            font-family: "Montserrat-rg";
                        }
                    
                    }
                }
            }
        }
    }
    @media screen and (max-width: $mediaQuery2) {
        .footer{
            margin-top: 10vw;
            &__wrap{
                &_top{
                    & > h2{
                        text-align: center;
                    }
                }
                &_navRow{
                    display: none;
                    flex-direction: column;
                    gap: 6vw;
                    margin-top: 8vw;
                }
                &_bottomRow{
                    flex-direction: column;
                    &-contacts{
                        padding-top: 8vw;
                        &--right{
                            padding-top: 0vw;
                        }
                        *{text-align: center;}
                    }
                    & h2{
                        font-size: 4.2vw !important;
                    }
                }
            }
        }
    }
</style>