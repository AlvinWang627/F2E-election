<template>
  <div class="modal">
    <div class="modal-overlay" @click="$emit('close')"></div>
    <div class="modal-wrapper">
      <div class="modal-header">
        <h4 class="modal-header__category">民眾服務信箱</h4>
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
          <section class="email-left">
            <div>
              <div class="email-left__desc">
                分享您的想法
                <div class="email-left__desc">一同為我們的未來</div>
                <div class="email-left__desc">打造更美好！</div>
              </div>
            </div>
            <img class="email-left__img" src="@/assets/emailBig.png" alt="email" />
          </section>
          <section class="email-right" v-if="!submitSuccess">
            <form action="" class="form">
              <label for="name" class="form-label">您的姓名</label>
              <input required class="form-input" type="text" placeholder="輸入內容" id="name" />
              <label for="email" class="form-label">Email</label>
              <input required class="form-input" type="text" placeholder="email" id="email" />
              <label for="phone" class="form-label">手機</label>
              <input required class="form-input" type="text" placeholder="手機號碼" id="phone" />
              <label for="suggest" class="form-label">您的建言</label>
              <textarea
                required
                class="form-textarea"
                id="suggest"
                name=""
                cols="30"
                rows="10"
                placeholder="輸入內容"
              ></textarea>
            </form>
            <div class="email-submit" @click="submitHandler()">送出意見</div>
          </section>
          <section class="email-success" v-else-if="submitSuccess">
            <h3>感謝您的意見</h3>
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
.email-left {
  display: flex;
  justify-content: start;
  padding: 24px;
  background-color: #e3f8ff;
  border-radius: 25px;
  margin-bottom: $spacer-24;
  position: relative;
  height: 147px;
  @media screen and (min-width: $xxl) {
    height: 779px;
    flex-direction: column;
    margin-bottom: 0;
    padding: 60px;
  }
  &__desc {
    color: $slate-700;
    font-size: 16px;
    font-weight: 700;
    @media screen and (min-width: $xxl) {
      font-size: 40px;
    }
  }
  &__img {
    width: 206px;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);

    @media screen and (min-width: $xxl) {
      margin: 0 auto;
      width: 731px;
    }
  }
}
.email-right {
  display: flex;
  flex-direction: column;
  .form {
    display: flex;
    flex-direction: column;
    &-label {
      margin-bottom: $spacer-8;
      font-size: 20px;
      font-weight: 700;
    }
    .form-input,
    .form-textarea {
      margin-bottom: 24px;
      padding: $spacer-16 15px;
      border: 0;
      background-color: $slate-100;
      font-size: 18px;
      font-weight: 400;
      border-radius: $spacer-8;
      &:hover,
      &:active,
      &:focus-visible {
        border: 0;
        outline: 0;
      }
    }
    .form-textarea {
      height: 176px;
    }
  }
  .email-submit {
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
.email-success {
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
