<script setup>
import headerView from './views/headerView.vue'
import firstSection from './views/firstSection.vue'
import marqueeView from './views/marqueeView.vue'
import advocateView from './views/advocateView.vue'
import activityView from './views/activityView.vue'
import policyView from './views/policyView.vue'
import donateEmailView from './views/donateEmailView.vue'
import lastSection from './views/lastSection.vue'
import footerView from './views/footerView.vue'
</script>

<template>
  <div class="container">
    <el-scrollbar height="100%" :wrap-style="[{ scrollBehavior: 'smooth' }]">
      <!-- header -->
      <header class="header-wrapper">
        <headerView />
      </header>
      <main>
        <!-- section1 台灣的明天 -->
        <firstSection />
        <!-- marquee -->
        <marqueeView />
        <!-- scetion2 候選人主張 -->
        <advocateView />
        <!-- 最新活動 -->
        <activityView />
        <!-- 政策議題 -->
        <policyView />
        <!-- 捐款 -->
        <donateEmailView />
        <!-- 喵先鋪路 -->
        <lastSection />
        <!-- footer   -->
        <footerView />
      </main>
      <footer></footer>
    </el-scrollbar>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100dvh;

  .header-wrapper {
    height: 56px;
    margin-bottom: $spacer-16;
    background-color: $bg;
    @media screen and (min-width: $md) {
      height: 99px;
      margin-bottom: 0;
    }
  }
}
</style>
