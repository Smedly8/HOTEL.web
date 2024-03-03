<template>
    <div class="slider" id="slider">
        <picture>
            <source media="(max-width: 800px)" srcset="@/assets/main-small.webp">
            <img src="@/assets/main.webp" alt="">
        </picture>
        <div class="slider__textWrap">
            <h1>Заречье</h1>
            <p>Тихий и уютный двор в центре Ольгинки</p>
        </div>
    </div>
</template>
<style lang="scss">
    .slider{
        width: 100vw;
        height: 100vh;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        & > picture{
            & > img{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        &__textWrap{
            width: var(--width);
            display: flex;
            flex-direction: column;
            position: relative;
            z-index: 2;
            padding-top: 400px;
            & > p{
                font-size: 55px;
                color: white;
                font-family: 'Neucha',
            }
            & > h1{
                font-size: 120px;
                color: white;
                font-family: 'Neucha';
                margin: 30px 0 0 0;
            }
        }
    }
    @media screen and (max-width: $mediaQuery2) {
        .slider{
            height: 80vw;
            &__textWrap{
                padding-top: 20vw;
                & > p{
                    font-size: 5.5vw;
                }
                & > h1{
                    font-size: 12vw;
                }
            }
        }
    }
</style>