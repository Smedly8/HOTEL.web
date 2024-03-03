<template>
  <section class="func">
    <div class="func__line"></div>
    <div class="func__wrap">
      <h2>Функционал</h2>
      <p>
        Одно предназначение и все функици для построения<br />
        дружественных отношений
      </p>
      <ul class="func__wrap_cards">
        <li
          v-for="(card, idx) in cards"
          :key="idx"
          class="func__wrap_cards-card"
        >
        <img :src="card.back" class="func__wrap_cards-card-back" alt="">
          <div class="func__wrap_cards-card-imgWrap">
            <img :src="card.img" alt="">
          </div>
          <h2>{{card.name}}</h2>
          <p>
            {{card.text}}
          </p>
        </li>
      </ul>
      <div class="func__wrap_main">

        <div class="func__wrap_main-left">

            <div class="func__wrap_main-left-take">
                <h2>Мы не</h2>
                <p>стремимся заменить соцсети, битрикс, платформы обучения или КЭДО</p>
            </div>

            <div class="func__wrap_main-left-take">
                <h2>МЫ ДЕЛАЕМ</h2>
                <p>приложение с простым и понятным созданием мероприятий и возможностью внутреннего обучения. Внедрение займёт у вас минуты, результат будет надолго.</p>
            </div>
        </div>

        <div class="func__wrap_main-right">
            <img src="@/assets/func.png" alt="">
        </div>

      </div>
    </div>
  </section>
</template>
<script>
export default {
    data(){
        return{
            cards: [
                {
                    name: 'Клубы',
                    text: 'Коллеги будут находить себе друзей по интересам. Обучение и задачи будут даваться легче. От друзей сложнее уйти, чем  с работы.',
                    img: require('@/assets/func/1.svg'),
                    back: require('@/assets/func/1b.svg'),
                },
                {
                    name: 'Клубы',
                    text: 'Коллеги будут находить себе друзей по интересам. Обучение и задачи будут даваться легче. От друзей сложнее уйти, чем  с работы.',
                    img: require('@/assets/func/2.svg'),
                    back: require('@/assets/func/2b.svg'),
                },
                {
                    name: 'Клубы',
                    text: 'Коллеги будут находить себе друзей по интересам. Обучение и задачи будут даваться легче. От друзей сложнее уйти, чем  с работы.',
                    img: require('@/assets/func/3.svg'),
                    back: require('@/assets/func/3b.svg'),
                },
                {
                    name: 'Клубы',
                    text: 'Коллеги будут находить себе друзей по интересам. Обучение и задачи будут даваться легче. От друзей сложнее уйти, чем  с работы.',
                    img: require('@/assets/func/4.svg'),
                    back: require('@/assets/func/4b.svg'),
                },
            ],
        }
    }
}
</script>
<style lang="scss">
.func {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  &__line{
    position: absolute;
    z-index: 0;
    right: 0;
    bottom: 154px;
    height: 365px;
    width: 48vw;
    background-color: var(--accentBlue);
  }
  &__wrap {
    width: var(--width);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 80px;
    & > h2 {
      @include baseText(var(--big));
    }
    & > p {
      margin-top: 15px;
      @include baseText;
      text-align: center;
      line-height: 1.5em;
    }
    &_cards {
      width: 100%;
      margin-top: 78px;
      display: flex;
      justify-content: space-between;
      &-card {
        background: var(--lightGray);
        width: 350px;
        height: 325px;
        padding: 28px;
        position: relative;
        & > :not(img){
            position: relative;
            z-index: 2;
        }
        &-back{
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            left: 0;
            top: 0;
            z-index: 0;
        }
        &-imgWrap {
          width: 54px;
          height: 54px;
          background-color: var(--accentBlue);
          border-radius: 4px;
          display: flex; 
          justify-content: center;
          align-items: center;
          
        }
        & > h2 {
          @include baseText;
          margin-top: 44px;
        }
        & > p {
          @include baseText(var(--little));
        }
      }
    }
    &_main{
        width: 1200px;
        margin-top: 170px;
        display: flex;
        justify-content: space-between;
        &-left{
            width: 470px;
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
            padding-bottom: 154px;
            &-take{
                & > h2{
                    @include baseText;
                    text-transform: uppercase;
                    margin-top: 80px;
                    margin-bottom: 10px;
                }
                & > p{
                    margin-top: 0px;
                    @include baseText;
                }
            }
        }
        &-right{
            position: relative;
            z-index: 2;
            & > img{
                height: 820px;
            }
        }
    }
  }
}
</style>