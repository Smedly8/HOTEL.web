<template>
  <section class="solution">
    <span class="solution__line"></span>
    <div class="solution__wrap">
      <h2 class="solution__wrap_title">Проблема</h2>
      <div class="solution__wrap_problems">
        <div class="solution__wrap_problems-problem">
          <h2>21%</h2>
          <p>
            Увольнений приходится на то, что человек <br />
            не смог найти себя в коллективе.
          </p>
        </div>
        <div class="solution__wrap_problems-problem">
          <h2>12%</h2>
          <p>
            От фонда оплаты труда компании тратят на <br />
            онбординг и адаптацию.
          </p>
        </div>
      </div>
      <div class="solution__wrap_main">
        <img src="@/assets/solution.png" alt="" />
        <div class="solution__wrap_main-right">
          <h2>Решение</h2>
          <p>
            Приложение, специализированное под решение задач внутренних коммуникаций и онбординга. То, что вовлекает, знакомит и не является рутиной или бюрократией.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.solution {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
  &__line{
    position: absolute;
    z-index: 1;
    height: 360px;
    width: 48vw;
    left: 0;
    bottom: 138px;
    background: var(--accentBlue);
  }
  &__wrap {
    // width: var(--width);
    width: 1200px;
    padding-top: 76px;
    position: relative;
    z-index: 3;
    &_title {
      @include baseText();
    }
    &_problems {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      &-problem {
        & > h2 {
          @include baseText(64px);
          color: var(--mainColor);
        }
        & > p {
          @include baseText;
        }
      }
    }
    &_main {
      display: flex;
      justify-content: space-between;
      margin-top: 166px;
      & > img {
        height: 820px;
        margin-left: 70px;
      }
      &-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        & > h2 {
        }
        & > p {
            @include baseText;
            width: 460px;
            margin-top: 20px;
            line-height: 1.6em;
        }
      }
    }
  }
  
}
</style>