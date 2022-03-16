<script setup>
import HeaderNav from './HeaderNav.vue'
import SlidesView from './SlidesView.vue'
import DefaultFooter from './DefaultFooter.vue'
</script>

<template>
  <div class="main-page">
      <div class="main-page__wrapper">
        <header-nav />
        <slides-view />
      </div>
      <default-footer />
  </div>
</template>

<style lang="scss">
@import "@/styles/_media.scss";

.main-page {

  &__wrapper {
    max-width: 1180px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 60px;
    min-height: calc(100vh - 82px);

    @include tablet {
      min-height: calc(100vh - 52px);
    }

    @include phone {
      padding: 0 30px;
    }
  }
}
</style>
