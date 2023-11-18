<template>
  <div class="modal">
    <div class="modal-overlay" @click="$emit('close')"></div>
    <div class="modal-wrapper">
      <div class="modal-header">
        <h4 class="modal-header__category">小額捐款</h4>
        <img
          src="@/assets/icon/cancel.svg"
          class="modal-header__close"
          @click="$emit('close')"
          alt="cancel icon"
          title="close"
        />
      </div>
      <el-scrollbar height="100%" ref="refScroll">
        <div class="modal-body">
          <section class="donate-left">
            <div>
              <div class="donate-left__desc">
                您的小筆捐款
                <div class="donate-left__desc">是每隻毛孩未來的大大動力！</div>
              </div>
              <div class="donate-left__price-title">目前小額贊助總金額</div>
              <h5 class="donate-left__price">987,655,873</h5>
            </div>
            <img class="donate-left__img" src="@/assets/donate.png" alt="donate" />
          </section>
          <section class="donate-right" v-if="!submitSuccess">
            <h5>捐款方案</h5>
            <div :class="['card-wrapper', { active: radio === 1 }]" @click="radio = 1">
              <h5 class="card-wrapper__title">喵星人之友</h5>
              <div class="card-wrapper__body">
                <div class="card-wrapper__price-title">
                  NT$
                  <h4 class="card-wrapper__price">600</h4>
                </div>
                <div class="card-wrapper__person">已有 9,957 人贊助</div>
              </div>
            </div>
            <div :class="['card-wrapper', { active: radio === 2 }]" @click="radio = 2">
              <h5 class="card-wrapper__title">喵星大使</h5>
              <div class="card-wrapper__body">
                <div class="card-wrapper__price-title">
                  NT$
                  <h4 class="card-wrapper__price">6000</h4>
                </div>
                <div class="card-wrapper__person">已有 2,000 人贊助</div>
              </div>
            </div>
            <div :class="['card-wrapper', { active: radio === 3 }]" @click="radio = 3">
              <h5 class="card-wrapper__title">喵星傳奇</h5>
              <div class="card-wrapper__body">
                <div class="card-wrapper__price-title">
                  NT$
                  <h4 class="card-wrapper__price">60000</h4>
                </div>
                <div class="card-wrapper__person">已有 999 人贊助</div>
              </div>
            </div>
            <div
              :class="['card-wrapper', 'custom-wrapper', { active: radio === 4 }]"
              @click="radio = 4"
            >
              <h5 class="card-wrapper__title">自訂贊助金額</h5>
              <div class="card-wrapper__body">
                <div class="card-wrapper__custom-wrapper">
                  <div class="card-wrapper__custom-wrapper__price-title">NT$</div>
                  <input class="card-wrapper__custom-wrapper__price" placeholder="輸入金額" />
                </div>
              </div>
            </div>
            <div class="donate-submit" @click="submitHandler()">前往捐款</div>
          </section>
          <section class="donate-success" v-else-if="submitSuccess">
            <h3>感謝您的捐款</h3>
            <img src="@\assets\icon\Vector.svg" alt="" />
            <div
              title="close"
              class="close-button"
              @click="(submitSuccess = false), $emit('close')"
            >
              關閉
            </div>
          </section>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineEmits(['close'])
const refScroll = ref(null)
const submitSuccess = ref(false)
const radio = ref(1)
function submitHandler() {
  submitSuccess.value = true
}
</script>

<style lang="scss" scoped>
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
      max-height: 836px;
      padding: $spacer-24 $spacer-48 $spacer-48 $spacer-48;
    }
  }
  &-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: $spacer-16;
    align-items: center;
    @media screen and (min-width: $xxl) {
      margin-bottom: $spacer-24;
    }
    &__close {
      cursor: pointer;
      font-size: 40px;
      width: 24px;
    }
    &__category {
      @media screen and (min-width: $xxl) {
        font-size: 32px;
      }
    }
  }
  &-body {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: $xxl) {
      display: grid;
      grid-template-columns: 731px 541px;
      grid-gap: 32px;
    }
  }
}
.donate-left {
  display: flex;
  justify-content: center;
  padding: 24px;
  background-color: $bg-2;
  border-radius: 25px;
  margin-bottom: $spacer-24;
  @media screen and (min-width: $xxl) {
    flex-direction: column;
    margin-bottom: 0;
    padding: 60px;
  }
  &__desc {
    color: $primary;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
    @media screen and (min-width: $xxl) {
      font-size: 40px;
    }
  }
  &__price-title {
    @include small;
  }
  &__price {
    @media screen and (min-width: $xxl) {
      font-size: 32px;
    }
  }
  &__img {
    width: 95px;
    @media screen and (min-width: $xxl) {
      margin: 0 auto;
      width: 336px;
    }
  }
}
.donate-right {
  display: flex;
  flex-direction: column;
  gap: 16px;
  .card-wrapper {
    display: flex;
    flex-direction: column;
    border: 2px solid $slate-200;
    padding: $spacer-24 $spacer-16;
    border-radius: 16px;
    min-height: 123px;
    gap: 8px;
    &.active {
      border-color: $primary;
    }
    &.custom-wrapper {
      height: 129px;
      padding: 16px;
    }
    @media screen and (min-width: $xxl) {
      height: 85px;
    }
    cursor: pointer;
    &:hover {
      border-color: $primary;
    }
    &:active {
      border-color: $primary;
    }
    &__title {
      color: $primary;
    }
    &__body {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__price-title {
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__price {
      margin-left: 8px;
    }
    &__person {
      @include small;
    }
    &__custom-wrapper {
      background-color: $slate-100;
      padding: $spacer-16 15px;
      display: flex;
      height: 59px;
      border-radius: 8px;
      width: 100%;
      @media screen and (min-width: $xxl) {
      }
      &__price-title {
        margin-right: 10px;
        font-size: 16px;
      }
      &__price {
        width: 100%;
        border: 0;
        background-color: $slate-100;
        &:focus,
        &:active,
        &:focus-visible {
          border: 0;
          outline: 0;
        }
      }
    }
  }
  .donate-submit {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $white;
    font-size: 16px;
    font-weight: 600;
    padding: $spacer-24 $spacer-32;
    background-color: $primary;
    border-radius: 500px;
  }
}
.donate-success {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: $spacer-32;
  h3 {
    font-size: 28px;
    font-weight: 700;
  }
  .close-button {
    cursor: pointer;
    padding: $spacer-16 $spacer-96;
    color: $slate-700;
    background-color: $slate-100;
    border-radius: 500px;
    font-weight: 600;
    &:hover {
      background-color: $slate-200;
    }
    &:active {
      background-color: $slate-300;
    }
  }
}
</style>
