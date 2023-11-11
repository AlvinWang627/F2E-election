<script setup>
import headerView from './views/headerView.vue'
</script>

<template>
  <div class="container">
    <!-- header -->
    <header class="header-wrapper">
      <headerView />
    </header>
    <main>
      <!-- section1 台灣的明天 -->
      <!-- marquee -->
      <!-- scetion2 候選人主張 -->
      <!-- 最新活動 -->
      <!-- 政策議題 -->
      <!-- 捐款 -->
      <!-- 喵先鋪路 -->
      <!-- footer   -->
    </main>
    <footer></footer>
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
