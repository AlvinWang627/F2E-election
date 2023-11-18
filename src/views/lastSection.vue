<template>
  <div class="last-container">
    <div class="title-wrapper">
      <div class="title-wrapper__taiwan">台灣的明天</div>
      <div class="title-wrapper__meow">喵先鋪路</div>
    </div>
    <div class="sub-title">
      <div class="sub-title__group">
        <div class="sub-title__group-number">3</div>
        <h3 class="sub-title__group-name">喵立翰 Miao Li-Han</h3>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.last-container {
  padding: 104px 0;
  .title-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 $spacer-24 0;
    @media screen and (min-width: $xxl) {
      margin: 0 0 $spacer-16 0;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
    }
    &__taiwan {
      @media screen and (min-width: $xxl) {
        margin-right: $spacer-16;
      }
    }
    &__taiwan,
    &__meow {
      @include big;
      line-height: 105%;
      letter-spacing: 2px;
      background-image: $gradient;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @media screen and (min-width: $xxl) {
        font-size: 64px;
      }
    }
  }
  .sub-title {
    display: flex;
    align-items: center;
    flex-direction: column;
    @media screen and (min-width: $md) {
      flex-direction: row;
      justify-content: center;
    }
    &__position {
      padding: $spacer-12;
      background-color: $slate-700;
      color: $white;
      border-radius: $spacer-16;
      width: 189px;
      @media screen and (min-width: $xxl) {
        width: 252px;
        font-size: 28px;
        padding: $spacer-12 $spacer-16;
      }
    }
    &__group {
      width: auto;
      display: flex;
      justify-content: space-between;
      padding: $spacer-12 $spacer-16;

      @media screen and (min-width: $md) {
        height: 66px;
      }
      @media screen and (min-width: $xxl) {
        border-radius: $spacer-16;
        border: 1px solid $white;
        background-color: rgba(255, 255, 255, 0.9);
        box-shadow: 0px 4px 12px 0px rgba(163, 180, 203, 0.2);
        height: 84px;
      }
      &-number {
        font-family: inter;
        text-align: center;
        line-height: 40px;
        font-weight: 900;
        color: $white;
        width: 40px;
        height: 40px;
        margin-right: $spacer-16;
        border-radius: 50%;
        background-image: $gradient;
        @media screen and (min-width: $xxl) {
          font-size: 32px;
          width: 50px;
          height: 50px;
          line-height: 50px;
        }
      }
      &-name {
        display: flex;
        align-items: center;
        color: $primary;
        @media screen and (min-width: $md) {
          font-size: 28px;
        }
        @media screen and (min-width: $xxl) {
          font-size: 40px;
        }
      }
    }
  }
}
</style>
