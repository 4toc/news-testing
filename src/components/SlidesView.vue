<script>
import SlidesViewHeader from './SlidesViewHeader.vue'
import SlidesViewItem from './SlidesViewItem.vue';

import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {SlidesViewHeader, SlidesViewItem},
  computed: {
    ...mapGetters(['getNewsData'])
  },
  mounted() {
    this.generateData()
    console.log(this.getNewsData)
  },
  methods: {
    ...mapMutations(['generateData'])
  }
}

</script>

<template>
  <div class="slides-view">
    <slides-view-header />

    <div class="slides-view__list">
      <slides-view-item v-for="item in getNewsData" :item="item" />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/_media.scss";

.slides-view {
  padding-bottom: 30px;

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-column-gap: 30px;
    grid-row-gap: 72px;

    @include tablet {
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
      grid-column-gap: 20px;
      grid-row-gap: 48px;
    }

    @include phone {
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      grid-column-gap: 20px;
      grid-row-gap: 32px;
    }
  }
}
</style>
