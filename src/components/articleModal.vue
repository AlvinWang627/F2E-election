<template>
  <div class="modal">
    <div class="modal-overlay" @click="$emit('close')"></div>
    <div class="modal-wrapper">
      <div class="modal-header">
        <h4 class="modal-header__category">
          <slot name="category"> </slot>
        </h4>
        <img
          src="@/assets/icon/cancel.svg"
          class="modal-header__close"
          @click="$emit('close')"
          alt="cancel icon"
        />
      </div>
      <div class="modal-body">
        <el-scrollbar height="100%" ref="refScroll">
          <article class="article">
            <div class="article-left">
              <img class="modal-body__img" :src="renderData['img']" alt="圖片" />
              <div class="modal-body__img-title">{{ renderData.title }}</div>
              <div class="modal-body__social">
                分享
                <img src="@/assets/icon/fb.svg" alt="" />
                <img src="@/assets/icon/ig.svg" alt="" />
                <img src="@/assets/icon/line.svg" alt="" />
                <img src="@/assets/icon/twitter.svg" alt="" />
              </div>
            </div>
            <div class="article-right">
              <h4 class="modal-body__title">{{ renderData.title }}</h4>
              <div class="modal-body__date">{{ renderData['date'] }}</div>
              <div class="modal-body__desc">{{ renderData['description'] }}</div>
              <div class="more-wrapper">
                <div class="more-title">
                  <slot name="more-title"></slot>
                </div>
                <div class="more-card-wrapper">
                  <div
                    v-for="item in otherData"
                    :key="item['id']"
                    class="more-card"
                    @click="updateRenderData(item['id'])"
                  >
                    <img :src="item['img']" alt="圖片" />
                    <div class="more-card-wrapper__title">{{ item['title'] }}</div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const refScroll = ref(null)
defineEmits(['close'])
const props = defineProps({
  data: { type: Array, required: true },
  id: { type: Number, required: true }
})

const renderData = ref({
  id: -1,
  title: '',
  description: '',
  img: ''
})
const otherData = ref([])
renderData.value = props.data.find((item) => {
  return item.id === props.id
})
let otherDataCount = 0
for (let i = 0; i < props.data.length; i++) {
  if (otherDataCount < 2) {
    if (props.data[i].id !== props.id) {
      otherData.value.push(props.data[i])
      otherDataCount++
    }
  }
}
function updateRenderData(id) {
  renderData.value = props.data.find((item) => {
    return item.id === id
  })
  let otherDataCount = 0
  otherData.value = []
  for (let i = 0; i < props.data.length; i++) {
    if (otherDataCount < 2) {
      if (props.data[i].id !== id) {
        otherData.value.push(props.data[i])
        otherDataCount++
      }
    }
  }
  // otherData.value = props.data.filter((item) => {
  //   return item.id !== id
  // })
  let scroll = refScroll.value
  scroll.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped lang="scss">
img {
  width: 100%;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  &-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  &-category {
    display: flex;
    height: 30px;
    width: 100%;
    background-color: #fff;
    @media screen and (min-width: $xxl) {
      font-size: 32px;
    }
  }
  &-wrapper {
    width: 100%;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: $spacer-16;
    border-radius: 24px;
    @media screen and (min-width: $xxl) {
      max-width: 1400px;
      height: 900px;
      padding: $spacer-24 $spacer-48 $spacer-48 $spacer-48;
    }
  }
  &-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: $spacer-8;
    &__close {
      cursor: pointer;
      font-size: 40px;
      width: 24px;
      @media screen and (min-width: $xxl) {
        width: 32px;
      }
    }
  }
  &-body {
    .article {
      display: flex;
      flex-direction: column;
      @media screen and (min-width: $xxl) {
        flex-direction: row;
        &-left {
          margin-right: 32px;
          flex: 0 0 507px;
        }
        &-right {

        }
      }
    }
    overflow: hidden;
    &__img {
      margin-bottom: $spacer-16;
    }
    &__img-title {
      @include body;
      margin-bottom: $spacer-8;
      @media screen and (min-width: $xxl) {
        font-size: 14px;
      }
    }
    &__social {
      @include body;
      display: flex;
      gap: 16px;
      margin-bottom: $spacer-32;
      @media screen and (min-width: $xxl) {
        margin-bottom: 0;
      }
      img {
        width: 28px;
      }
    }
    &__title {
      color: $primary;
      @media screen and (min-width: $xxl) {
        font-size: 32px;
      }
    }
    &__date {
      margin: $spacer-8 0;
      font-size: 14px;
      color: $slate-500;
    }
    &__desc {
      margin: $spacer-32 0 $spacer-96 0;
      min-width: 192px;
      @media screen and (min-width: $xxl) {
        min-width: 144px;
      }
    }
    .more-wrapper {
      padding: $spacer-16;
      background-color: $slate-50;
      border-radius: 12px;
      .more-title {
        font-size: 16px;
        line-height: normal;
        font-weight: 600;
        margin-bottom: $spacer-16;
      }
      .more-card-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: $spacer-16;
        cursor: pointer;
        @media screen and (min-width: $xxl) {
          grid-template-columns: 244px 244px auto;
        }
        img {
          margin-bottom: $spacer-12;
        }
        &__title {
        }
      }
    }
  }
}
</style>
