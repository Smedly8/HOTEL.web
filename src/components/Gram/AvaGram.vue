<template>
    <section class="gram">
        <div class="gram__wrap">
            <div class="gram__wrap_left">
                <div class="gram__wrap_left-banners">
                    <a href="">IOS</a>
                    <a href="">Android</a>
                </div>
                <h2 class="gram__wrap_left-title">AVAgram</h2>
                <p class="gram__wrap_left-text">Приложение внутренниих коммуникаций <br>для любой компании.</p>
                <div class="gram__wrap_left-buttons">
                    <div class="gram__wrap_left-buttons-button">
                        Купить продукт
                    </div>
                    <div class="gram__wrap_left-buttons-button gram__wrap_left-buttons-button--white">
                        Оставить заявку
                    </div>
                </div>
            </div>
            <div class="gram__wrap_right">
                <img src="@/assets/3_phones.png" alt="">
            </div>


        </div>
    </section>
</template>
<style lang="scss">
    .gram{
        background: var(--lightBlue);
        justify-content: center;
        display: flex;
        &__wrap{
            width: var(--width);
            height: calc(100vh - 80px);
            display: flex;
            justify-content: space-between;
            align-items: center;
            &_left{
                display: flex;
                justify-content: flex-start;
                flex-direction: column;
                width: 475px;
                &-banners{
                    display: flex;
                    & > a{
                        @include baseText(14px);
                        margin-right: 24px;
                        padding: 8px 12px;
                        color: var(--mainColor);
                        background-color: var(--accentBlue);
                        border-radius: 50px;
                    }
                }
                &-title{
                    @include baseText(84px);
                    color: var(--mainColor);
                    font-weight: 900;
                }
                &-text{
                    @include baseText(var(--middle));
                    line-height: 1.7em;
                }
                &-buttons{
                    display: flex;
                    justify-content: space-between;
                    gap: 24px;
                    margin-top: 42px;
                    &-button{
                        width: 100%;
                        border-radius: 4px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 52px;
                        background: var(--mainColor);
                        @include baseText(var(--little));
                        color: white;
                        &--white{
                            color: var(--mainColor);
                            background: white;
                            border: 2px solid var(--mainColor);
                        }
                    }
                }
            }
            &_right{
                & > img{
                    height: 800px;
                }
            }
        }
    }
</style>