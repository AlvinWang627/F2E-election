<template>
  <div class="policy-container" id="policyView">
    <div class="policy-label">POLICY ISSUES</div>
    <div class="policy-title">政策議題</div>
    <div class="policy-list">
      <div
        class="policy-wrapper"
        v-for="policy in policies"
        :key="policy"
        @click="(modalId = policy.id), openModal()"
      >
        <h4>{{ policy.title }}</h4>
        <img class="policy-img" :src="policy.img" :alt="policy.title" />
      </div>
    </div>
  </div>
  <teleport to="body">
    <articleModal v-if="isOpen" :data="policies" :id="modalId" @close="closeModal()">
      <template #category>政策議題</template>
      <template #more-title>更多政策議題</template>
    </articleModal>
  </teleport>
</template>

<script setup>
import pocily_1 from '@/assets/policy-1.png'
import pocily_2 from '@/assets/policy-2.png'
import pocily_3 from '@/assets/policy-3.png'
import { ref } from 'vue'
import articleModal from '@/components/articleModal.vue'
const policies = [
  {
    id: 11,
    title: '為毛孩子謀福利！推動寵物醫療保障方案',
    tag: '喵的保障',
    description: '設立寵物醫療基金，每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用',
    img: pocily_1
  },
  {
    id: 12,
    title: '打造休閒天堂！推廣寵物休閒與娛樂場所',
    tag: '喵的娛樂',
    description: '創建寵物樂活基金，每年投注新台幣 10 億元，特別用於資助家庭寵物的娛樂開支。',
    img: pocily_2
  },
  {
    id: 13,
    title: '推廣寵物飼養教育，讓愛更加專業',
    tag: '喵的教育',
    description:
      '寵物是人類生活中不可或缺的一部分，然而，隨著社會進步，寵物飼養所面臨的挑戰也日益增多。為了促進寵物福祉，我們將致力於推動專業寵物飼養教育，加強社會對愛護動物的關注，確保每一隻寵物都能夠在良好的環境中生活。',
    img: pocily_3
  }
]
const isOpen = ref(false)
const modalId = ref(null)
const body = document.body
function openModal() {
  isOpen.value = true
  body.style.overflow = 'hidden'
}
function closeModal() {
  isOpen.value = false
  body.style.overflow = 'auto'
}
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
let tl
onMounted(() => {
  tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.policy-container',
      start: 'top 40%'
    }
  })
  tl.to('.policy-label', { opacity: 1, duration: 0.5, x: 0 })
  tl.to('.policy-title', { opacity: 1, duration: 0.5, x: 0 }, '<')
  tl.to('.policy-list', { opacity: 1, duration: 0.5 })
})
onUnmounted(() => {
  tl.revert() // <- Easy Cleanup!
})
</script>

<style lang="scss" scoped>
.policy-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: $spacer-64 $spacer-16;
  margin: 0 auto;
  @media screen and (min-width: $xxl) {
    padding: 104px 0;
  }
}
.policy-label {
  transform: translateX(-50px);
  opacity: 0;
  @include black-button;
}
.policy-title {
  transform: translateX(-50px);
  opacity: 0;
  @include big;
  background-clip: text;
  -webkit-background-clip: text;
  margin-bottom: $spacer-40;
  @media screen and (min-width: $md) {
    margin-bottom: 80px;
  }
  @media screen and (min-width: $xxl) {
    margin-bottom: $spacer-64;
    font-size: 64px;
  }
}
.policy-list {
  opacity: 0;
  display: grid;
  gap: $spacer-64;

  @media screen and (min-width: $md) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: $spacer-24 $spacer-64;
    max-width: 696px;
  }
  @media screen and (min-width: $xxl) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: $spacer-64;
    max-width: 1320px;
  }
}
.policy-wrapper {
  display: grid;
  grid-template-rows: 72px auto;
  gap: 16px;
  cursor: pointer;
  @media screen and (min-width: $xxl) {
    &:hover {
      h4 {
        color: $primary;
      }
    }
  }

  .policy-img {
    width: 100%;
    border-radius: $spacer-16;
    object-fit: cover;
    height: 100%;
    @media screen and (min-width: $md) {
      height: 235px;
    }
    @media screen and (min-width: $xxl) {
      height: 267px;
    }
  }
}
</style>
