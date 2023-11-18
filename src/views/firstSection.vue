<template>
  <div class="section-one">
    <div class="title-wrapper">
      <div class="title-wrapper__taiwan">台灣的明天</div>
      <div class="title-wrapper__meow">喵先鋪路</div>
    </div>
    <div class="sub-title">
      <h5 class="sub-title__position">2024 立委參選人</h5>
      <div class="sub-title__group">
        <div class="sub-title__group-number">3</div>
        <h3 class="sub-title__group-name">喵立翰 Miao Li-Han</h3>
      </div>
    </div>
    <img src="@/assets/avatar.png" alt="election avatar" class="election-picture" />
    <div class="social-media">
      <img src="@/assets/icon/fb.svg" alt="fb-icon" />
      <img src="@/assets/icon/ig.svg" alt="ig icon" />
      <img src="@/assets/icon/yt.svg" alt="yt icon" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.section-one {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: $white;
  position: relative;
  .title-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: $spacer-32 0 $spacer-16 0;
    @media screen and (min-width: $xxl) {
      margin-top: $spacer-96;
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
        font-size: 96px;
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
      align-items: center;
      width: auto;
      display: flex;
      justify-content: space-between;
      padding: $spacer-12 $spacer-16;
      border-radius: $spacer-16;
      border: 1px solid $white;
      background-color: rgba(255, 255, 255, 0.9);
      box-shadow: 0px 4px 12px 0px rgba(163, 180, 203, 0.2);
      @media screen and (min-width: $md) {
        height: 66px;
      }
      @media screen and (min-width: $xxl) {
        height: 84px;
        margin-left: $spacer-16;
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
  .election-picture {
    margin-top: $spacer-16;
    width: 327px;
    @media screen and (min-width: $md) {
      margin-top: $spacer-24;
      width: 343px;
    }
    @media screen and (min-width: $xxl) {
      margin-top: $spacer-24;
      width: 723px;
    }
  }
  .social-media {
    position: absolute;
    bottom: 21px;
    left: 50%;
    transform: translateX(-50%);
    width: 208px;
    background-color: $white;
    display: flex;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    border-radius: $spacer-12;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
    img {
      margin-right: 18px;
      width: 32px;
      &:nth-last-child(1) {
        margin: 0;
      }
    }
    @media screen and (min-width: $md) {
      display: none;
    }
  }
}
</style>
