<template>
  <section class="offer">
    <div class="offer__wrap">

        <div class="offer__wrap_left">
            <h2>Хотите так же?</h2>
            <p>Закажите обратный звонок и мы <br> обязательно с Вами свяжемся</p>
            <input type="text">
            <input type="text">
            <button>Заказать звонок</button>
        </div>

        <div class="offer__wrap_right">
          <img src="@/assets/want.png" alt="">
        </div>
    </div>
  </section>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style lang="scss">
.offer{
  display: flex;
  justify-content: center;
  background-color: #F2F5F7;
  &__wrap {
    width: 1200px;
    display: flex;
    align-items: center;
    // flex-direction: column;
    padding-top: 80px;
    display: flex;
    justify-content: space-between;
    &_left{
        display: flex;
        flex-direction: column;
        & > h2{
            @include baseText(64px);
            color: var(--mainColor);
        }
        & > p{
           @include baseText;
           margin-bottom: 8px; 
        }
        & > input{
          border: 1px solid #6B717B;
          height: 54px;
          background-color: transparent;
          margin-top: 16px;
        }
        & > button{
          @include blueButton;
          margin-top: 24px;
        }
    }
    &_right{
      & > img{
        height: 455px;
      }
    }
  }
}
</style>