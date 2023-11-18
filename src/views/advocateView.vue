<template>
  <div class="advocate-container" id="advocateView">
    <div class="advocate-wrapper">
      <section class="advocate">
        <div class="advocate-label">ADVOCATE</div>
        <div class="advocate-title">候選人主張</div>
        <h3 class="advocate-subtitle">
          我堅信 ! 藉由推動更完善的<span>貓咪政策</span>和相關政策，更是間接地投資於<span>
            台灣的未來
          </span>
          。
        </h3>
        <p class="advocate__des">
          畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP
          經濟帶來巨大效益。
        </p>
        <p>
          因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
        </p>
      </section>
      <picture>
        <source srcset="@/assets/advocate-xxl.png" media="(min-width: 1400px)" />
        <source srcset="@/assets/advocate-md.png" media="(min-width: 768px)" />
        <img src="@/assets/advocate-xxl.png" class="advocate-img" />
      </picture>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.advocate-container {
  background: $bg-2;
}
.advocate-wrapper {
  display: flex;
  flex-direction: column;
  padding: $spacer-64 $spacer-16;
  align-items: center;
  margin: 0 auto;
  @media screen and (min-width: $md) {
    max-width: 696px;
    padding: $spacer-64 0;
  }
  @media screen and (min-width: $xxl) {
    padding: 104px 0;
    flex-direction: row;
    max-width: 1320px;
    margin: 0 auto;
  }
}
.advocate {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: $spacer-40 $spacer-24;
  border-radius: $spacer-24 $spacer-24 0 0;
  background-color: $white;
  @media screen and (min-width: $xxl) {
    border-radius: $spacer-24 0 0 $spacer-24;
    padding: $spacer-64 $spacer-64 $spacer-64 $spacer-40;
  }
  &-label {
    @include black-button;
  }
  &-title {
    margin-bottom: 32px;
    @include big;
    background: $gradient;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media screen and (min-width: $xxl) {
      font-size: 64px;
    }
  }
  &-subtitle {
    margin-bottom: 32px;
    span {
      color: $primary;
    }
  }
  &-des {
  }
  &-img {
    display: flex;
    border-radius: 0 0 $spacer-24 $spacer-24;
    width: 100%;
    @media screen and (min-width: $xxl) {
      width: 648px;
      border-radius: 0 $spacer-24 $spacer-24 0;
    }
  }
}
</style>
