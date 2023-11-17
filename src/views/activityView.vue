<template>
  <div class="activity-container">
    <div class="activity-label">LATEST EVENTS</div>
    <div class="activity-title">最新活動</div>

    <div class="activity-list">
      <div
        v-for="(activity, index) in activities.slice(0, 1)"
        :key="activity.id"
        class="big-card"
        @click="(modalId = activity.id), (isOpen = true)"
      >
        <img class="card-img" :src="activity.img" :alt="activity.title" />
        <div class="card-date">{{ activity.date }}</div>
        <h5 class="card-title">{{ activity.title }}</h5>
        <div class="card-desc">{{ activity.description.slice(0, 84) }}</div>
      </div>
      <div class="small-card-group">
        <div
          v-for="(activity, index) in activities.slice(1, 4)"
          :key="activity.id"
          class="small-card"
          @click="(modalId = activity.id), (isOpen = true)"
        >
          <img class="card-img" :src="activity.img" :alt="activity.title" />
          <div class="card-info">
            <div class="card-date">{{ activity.date }}</div>
            <h6 class="card-title">{{ activity.title }}</h6>
            <div class="card-desc">{{ activity.description }}</div>
          </div>
        </div>
        <div class="more-button">
          查看更多
          <img src="@\assets\icon\arrow_forward.svg" alt="arrow icon" />
        </div>
      </div>
    </div>
  </div>
  <teleport to="body">
    <articleModal v-if="isOpen" :data="activities" :id="modalId" @close="isOpen = false">
      <template #category>最新活動 </template>
      <template #more-title>更多活動</template>
    </articleModal>
  </teleport>
</template>

<script setup>
import activity_1 from '@/assets/activity-1.png'
import activity_2 from '@/assets/activity-2.png'
import activity_3 from '@/assets/activity-3.png'
import activity_4 from '@/assets/activity-4.png'
const activities = [
  {
    id: 0,
    title: '參與台北寵物論壇，爭取貓咪友善環境',
    date: '2023/12/24',
    img: activity_1,
    description:
      '台北市 — 今日，立法院喵星區的優秀立法委員喵力翰在台北寵物論壇中發表了一場引人注目的演講，強調了打造貓咪友善環境的重要性，並提出一系列相應政策的建議。在演講中，喵力翰立委強調了現代社會中寵物貓咪對人們生活的重要性，並指出我們應該共同努力，確保牠們在城市中擁有安全、舒適的生活空間。他提到，貓咪的存在不僅僅是寵物，更是家庭成員，應該得到應有的尊重與照顧。喵力翰在演講中呼籲增加公共空間中的貓咪友善設施，包括貓咪休息區、遊戲區和專屬的餵食站。他表示，這不僅能提高城市的宜居性，還能促進社區的凝聚力，讓人們更好地享受城市生活。為了實現這一目標，喵力翰提出了一系列具體的政策建議。首先，他建議增加城市中的貓咪專屬公園，提供一個安全、無車輛的環境，讓貓咪可以自由遊玩。其次，他呼籲建立動物友善型社區，推動居民更多地參與動物保護活動，共同建設一個和諧的生活環境。在論壇中，喵力翰提到，他將致力於推動一系列法案，以保障貓咪的權益。其中包括建立貓咪訓練中心，提高領養貓咪的知識普及度，以及加強動物保護法規。他認為，這些舉措將有助於提升社會對貓咪的關注度，並確保牠們在人類社會中得到應有的尊重。此外，立委喵力翰表示，他將積極與其他立法委員合作，共同推動這一系列的法案。他強調，這不僅是一個為貓咪發聲的行動，更是為了建立一個更加友善、關愛的社會，讓每一個家庭都能夠擁有一個快樂、和諧的生活環境。這場寵物論壇為我們提供了一個思考如何打造更友善社會的契機，立委喵力翰的參與使得這一目標更加具體可行。台灣將因有如喵力翰這樣關心動物權益的立法委員而變得更加溫馨。'
  },
  {
    id: 1,
    title: '掃街模式開啟！帶著你的貓耳，來和我一起走！',
    description:
      '我將致力於推動立法，加強寵物福祉保障。透過強化動物保護法規，確保所有寵物擁有基本的生活需求與權益，建立更完善的寵物領養、保護體系。',
    date: '2023/12/26',
    img: activity_2
  },
  {
    id: 2,
    title: '收容所模特兒大比拼！',
    description:
      '我是這場收容所模特兒大比拼的參賽者，非常榮幸能夠在此分享我的寵物政見。我深知，每一位毛小孩都是獨特的個體，擁有無盡的愛和忠誠。在我擔任模特兒的同時，我將不遺餘力地推動以下寵物政見',
    date: '2023/12/20',
    img: activity_3
  },
  {
    id: 3,
    title: '爭取台北市每區皆有寵物公園',
    description:
      '我們都深知寵物在我們生活中所扮演的重要角色，是我們的忠實伙伴、家庭的一份子。為了創造更友善、宜居的城市環境，我承諾在未來的市政工作中，將積極推動「每區皆有寵物公園」的計畫，以提供更多空間，讓我們的毛小孩們也能享受自由奔跑、社交互動的機會。',
    date: '2023/12/21',
    img: activity_4
  }
]
import { ref } from 'vue'
import articleModal from '@/components/articleModal.vue'
const isOpen = ref(false)
const modalId = ref(null)
</script>

<style lang="scss" scoped>
.activity {
  &-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: $spacer-64 $spacer-16;
    margin: 0 auto;
    @media screen and (min-width: $md) {
      padding: $spacer-64 0;
      max-width: 696px;
    }
    @media screen and (min-width: $xxl) {
      max-width: 1320px;
    }
  }
  &-label {
    @include black-button;
  }
  &-title {
    margin-bottom: 40px;
    @include big;
    background: $gradient;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media screen and (min-width: $xxl) {
      font-size: 64px;
    }
  }
  &-list {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: $xxl) {
      flex-direction: row;
    }
    .big-card {
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
      cursor: pointer;
      @media screen and (min-width: $xxl) {
        margin-bottom: 0;
        margin-right: 24px;
        flex: 0 0 648px;
        &:hover {
          h5 {
            color: $primary;
          }
        }
      }
      .card-img {
        width: 100%;
        margin-bottom: $spacer-16;
      }
      .card-date {
        @include small;
        margin-bottom: $spacer-8;
      }
      .card-title {
        margin-bottom: $spacer-8;
      }
      .card-desc {
        @include body;
      }
    }
    .small-card-group {
      .small-card {
        display: flex;
        margin-bottom: 24px;
        height: 128px;
        overflow: hidden;
        cursor: pointer;
        @media screen and (min-width: $xxl) {
          &:hover {
            h6 {
              color: $primary;
            }
          }
        }
      }
      .more-button {
        font-size: 16px;
        font-weight: 600;
        line-height: normal;
        padding: $spacer-16 $spacer-24;
        display: flex;
        gap: 8px;
        align-items: center;
        border-radius: 500px;
        border: 1px solid $white;
        background-color: $slate-100;
        width: 152px;
        cursor: pointer;
        @media screen and (min-width: $xxl) {
          &:hover {
            background-color: $slate-200;
          }
          &:active {
            background-color: $slate-300;
          }
        }
      }
    }
    .card-img {
      width: 109px;
      margin-right: 16px;
      object-fit: cover;
      border-radius: $spacer-8;
      @media screen and (min-width: $xxl) {
        width: 201px;
      }
    }
    .card-info {
      display: flex;
      flex-direction: column;
      .card-date {
        @include small;
        margin-bottom: $spacer-8;
      }
      .card-title {
        margin-bottom: $spacer-8;
      }
      .card-desc {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        @include small;
      }
    }
  }
}
</style>
