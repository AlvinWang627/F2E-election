<template>
  <div class="footer-container">
    <section class="">
      <div>3喵立翰 Miao Li-Han</div>
      <div>
        <img src="@/assets/icon/fb.svg" alt="fb icon" />
        <img src="@/assets/icon/ig.svg" alt="ig icon" />
        <img src="@/assets/icon/yt.svg" alt="yt icon" />
      </div>
      <div>© 2023 喵立翰 Miao Li-Han 版權所有</div>
    </section>
    <section class="">
      <h4>競選總部</h4>
      <div>辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓</div>
      <div>電話：(02) 888-5678</div>
      <div>電子郵件地址：meowoffice@linmeow.tw</div>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer-container {
  width: 100%;
  background-color: $bg-2;
  height: 443px;
  @media screen and (min-width: $md) {
    height: 419px;
  }
  @media screen and (min-width: $xxl) {
    height: 271px;
  }
}
</style>
