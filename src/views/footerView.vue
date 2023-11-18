<template>
  <div class="footer-container">
    <div class="footer-wrapper">
      <section class="section-left">
        <div class="title-group">
          <div class="title-group__number">3</div>
          <h3 class="title-group__name">喵立翰 Miao Li-Han</h3>
        </div>
        <div class="social-media">
          <div>
            <img src="@/assets/icon/fb.svg" alt="fb icon" />
          </div>
          <div>
            <img src="@/assets/icon/ig.svg" alt="ig icon" />
          </div>
          <div>
            <img src="@/assets/icon/yt.svg" alt="yt icon" />
          </div>
        </div>
        <div class="copyright">© 2023 喵立翰 Miao Li-Han 版權所有</div>
      </section>
      <section class="section-right">
        <h4>競選總部</h4>
        <div>辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓</div>
        <div>電話：(02) 888-5678</div>
        <div>電子郵件地址：meowoffice@linmeow.tw</div>
      </section>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer-container {
  width: 100%;
  background-color: $bg-2;
  .footer-wrapper {
    max-width: 1368px;
    height: 443px;
    padding: $spacer-64 $spacer-16;
    margin-bottom: 64px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media screen and (min-width: $md) {
      padding: $spacer-64 $spacer-36;

      height: 419px;
    }
    @media screen and (min-width: $xxl) {
      gap: 16px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: $spacer-64 0;
      margin: 0 auto;
      height: 271px;
    }
  }
  .title-group {
    display: flex;
    margin-bottom: $spacer-16;
    align-items: center;
    &__number {
      font-family: inter;
      text-align: center;
      line-height: 32px;
      font-weight: 900;
      color: $white;
      width: 32px;
      height: 32px;
      margin-right: $spacer-16;
      border-radius: 50%;
      background-image: $gradient;
    }
    &__name {
      display: flex;
      align-items: center;
      color: $primary;
      font-size: 28px;
      font-weight: 700;
    }
  }
  .social-media {
    display: flex;
    gap: $spacer-8;
    margin-bottom: $spacer-16;
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      background-color: $white;
      border-radius: 500px;
    }
    img {
      width: 28px;
    }
  }
  .copyright {
    @include small;
  }
  .section-right {
    h4 {
      margin-bottom: $spacer-16;
    }
    > div {
      font-size: 16px;
    }
  }
}
</style>
