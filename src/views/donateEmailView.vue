<template>
  <div class="donate-email-container">
    <section class="donate">
      <div class="donate-title">小額支持喵喵</div>
      <div class="donate-subtitle">您的小筆捐款，是每隻毛孩未來的大大動力！</div>
      <div class="button-wrapper">
        <div class="donate-button" @click="isDonateModalOpen = true">
          小額捐款
          <img src="@/assets/icon/arrow_forward.svg" alt="arrow icon" />
        </div>
        <img class="donate-picture" src="@/assets/donate.png" alt="donate image" />
      </div>
    </section>
    <section class="email">
      <div class="donate-title">民眾服務信箱</div>
      <div class="donate-subtitle">親愛的鄉親，每一位市民的意見都是我們社區前進的原動力</div>
      <div class="button-wrapper">
        <div class="donate-button" @click="isEmailModalOpen = true">
          填寫表單
          <img src="@/assets/icon/arrow_forward.svg" alt="arrow icon" />
        </div>
        <img class="email-picture" src="@/assets/email.png" alt="donate image" />
      </div>
    </section>
  </div>
  <teleport to="body">
    <donateModal v-if="isDonateModalOpen" @close="isDonateModalOpen = false"> </donateModal>
    <emailModal v-if="isEmailModalOpen" @close="isEmailModalOpen = false">
      <template #category>民眾服務信箱</template>
      <template #body>捐款方案</template>
    </emailModal>
  </teleport>
</template>

<script setup>
import { ref } from 'vue'
import donateModal from '@/components/donateModal.vue'
import emailModal from '@/components/emailModal.vue'
const isDonateModalOpen = ref(false)
const isEmailModalOpen = ref(false)
</script>

<style lang="scss" scoped>
.donate-email-container {
  padding: $spacer-64 $spacer-16;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
  align-items: center;
  @media screen and (min-width: $md) {
    padding: 60px 0;
    flex-direction: row;
    max-width: 696px;
  }
  @media screen and (min-width: $xxl) {
    padding: 104px 0;
    max-width: 1320px;
  }
}
.donate,
.email {
  width: 100%;
  max-width: 343px;
  height: 352px;
  background-color: $primary;
  border-radius: $spacer-32;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: $spacer-40 $spacer-24;
  @media screen and (min-width: $md) {
    max-width: 336px;
  }
  @media screen and (min-width: $xxl) {
    max-width: 648px;
    height: 596px;
    padding: $spacer-96;
  }
  &-title {
    font-size: 40px;
    line-height: normal;
    color: $white;
    margin-bottom: $spacer-16;
    font-family: Mantou Sans;
    @media screen and (min-width: $xxl) {
      font-size: 52px;
    }
  }
  &-subtitle {
    color: $white;
    font-size: 20px;
    margin-bottom: 24px;
    font-weight: 600;
  }
  .button-wrapper {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: start;
    @media screen and (min-width: $xxl) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .donate-button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      width: 152px;
      font-size: 16px;
      font-weight: 700;
      background-color: $white;
      color: $slate-700;
      padding: 16px 24px;
      flex: 0 0 152px;
      height: 64px;
      border-radius: 500px;
      cursor: pointer;
      transition: all ease-in-out 0.2s;
      &:hover {
        background-color: $slate-200;
      }
      &:active {
        background-color: $slate-300;
      }
      img {
        width: 26px;
      }
    }
    .donate-picture {
      width: 135px;
      @media screen and (min-width: $md) {
        width: 128px;
        height: 126px;
      }
      @media screen and (min-width: $xxl) {
        width: 224px;
        height: 241px;
      }
    }
  }
}
.email {
  background-color: $slate-700;
  .button-wrapper {
    @media screen and (min-width: $xxl) {
      display: grid;
      grid-template-columns: 192px 456px;
    }

    .email-picture {
      width: 135px;
      @media screen and (min-width: $md) {
        width: 128px;
      }
      @media screen and (min-width: $xxl) {
        width: 256px;
      }
    }
  }
}
</style>
