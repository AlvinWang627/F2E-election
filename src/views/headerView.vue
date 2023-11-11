<template>
  <div class="header">
    <div class="logo-group">
      <img class="logo-group__img" src="@/assets/logo.png" alt="" />
      <h5 class="logo-group__text">喵立翰 Miao Li-Han</h5>
    </div>
    <menu class="menu-desktop">
      <div class="menu-desktop__text">候選人主張</div>
      <div class="menu-desktop__text">最新活動</div>
      <div class="menu-desktop__text">政策議題</div>
      <div class="menu-desktop__text">小額捐款</div>
      <div class="menu-desktop__text">民眾服務信箱</div>
    </menu>
    <div class="social-media">
      <img class="social-media__icon" src="@/assets/icon/fb.svg" alt="facebook icon" />
      <img class="social-media__icon" src="@/assets/icon/ig.svg" alt="instagram icon" />
      <img class="social-media__icon" src="@/assets/icon/yt.svg" alt="youtube icon" />
    </div>
  </div>
  <menu class="menu mobile">
    <div class="menu-group" @click="test">
      <img class="menu-group__img" src="@/assets/icon/user.svg" alt="user icon" />
      <div class="menu-group__text">候選人主張</div>
    </div>
    <div class="menu-group">
      <img class="menu-group__img" src="@/assets/icon/activity.svg" alt="activity icon" />
      <div class="menu-group__text">最新活動</div>
    </div>
    <div class="menu-group">
      <img class="menu-group__img" src="@/assets/icon/issue.svg" alt="issue icon" />
      <div class="menu-group__text">政策議題</div>
    </div>
    <div class="menu-group">
      <img class="menu-group__img" src="@/assets/icon/money.svg" alt="money icon" />
      <div class="menu-group__text">小額捐款</div>
    </div>
    <div class="menu-group">
      <img class="menu-group__img" src="@/assets/icon/mail.svg" alt="mail icon" />
      <div class="menu-group__text">服務信箱</div>
    </div>
  </menu>
</template>

<script setup>
function test() {
  console.log('test')
}
</script>

<style lang="scss" scoped>
.header {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  width: 100vw;
  height: 56px;
  display: flex;
  align-items: center;
  padding: $spacer-12 $spacer-16;
  position: fixed;
  top: 0;
  @media screen and (min-width: $md) {
    height: 67px;
    justify-content: space-between;
    border-radius: $spacer-16;
    width: calc(100vw - 48px);
    padding: $spacer-12 $spacer-24;
    top: $spacer-16;
    left: 50%;
    transform: translateX(-50%);
  }
  .logo-group {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &__img {
      width: 34px;
      height: 28px;
      margin-right: $spacer-8;
      @media screen and (min-width: $md) {
        width: 52px;
        height: 43px;
      }
    }
    &__text {
      color: $primary;
      font-weight: 700;
      @media screen and (min-width: $md) {
        font-size: 24px;
      }
    }
  }
  .menu-desktop {
    display: none;
    @media screen and (min-width: $xxl) {
      display: grid;
      grid-template-columns: repeat(5, auto);
      grid-gap: $spacer-8;
      &__text {
        padding: $spacer-8;
        color: $text-primary-700;
      }
    }
  }
  .social-media {
    display: none;
    @media screen and (min-width: $md) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0 18px;
    }
    &__icon {
      cursor: pointer;
      width: 32px;
      height: 32px;
    }
  }
}
.menu.mobile {
  width: 100vw;
  height: 68px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0 8px;
  padding: 0 8px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  @media screen and (min-width: $xxl) {
    display: none;
  }
  .menu-group {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__text {
      color: $text-primary-700;
      font-size: 10px;
      font-weight: 400;
      line-height: normal;
    }
    &__img {
      width: 24px;
      height: 24px;
      margin-bottom: 4px;
    }
  }
}
</style>
