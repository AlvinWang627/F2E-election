<template>
  <swiper
    class="marquee-wrapper"
    :slides-per-view="'auto'"
    loop
    :allowTouchMove="false"
    :speed="3000"
    :autoplay="{
      delay: 0,
      disableOnInteraction: false
    }"
    :modules="modules"
  >
    <swiper-slide class="marquee-text" v-for="(marquee, index) in marqueeData" :key="index">
      {{ marquee }}
    </swiper-slide>
  </swiper>
</template>

<script setup>
const marqueeData = [
  '為喵星人，護台灣！',
  '從喵的眼中，看見台灣 ',
  '喵的未來，人的希望 ',
  '為喵星人，護台灣！ ',
  '從喵的眼中，看見台灣 ',
  '喵的未來，人的希望 '
]
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

const modules = [Autoplay]
</script>

<style lang="scss" scoped>
:deep(.swiper-wrapper) {
  transition-timing-function: linear !important;
}
.marquee {
  &-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: 62px;
    background-color: $primary;
    color: $white;
    text-wrap: nowrap;
    overflow: hidden;
    @media screen and (min-width: $xxl) {
      height: 87px;
    }
  }
  &-text {
    width: auto;
    margin-right: $spacer-24;
    color: $white;
    @include big;
    font-size: 40px;
    line-height: 62px;
    @media screen and (min-width: $xxl) {
      line-height: 87px;
      font-size: 64px;
    }
  }
}
</style>
