<script>
import SortIcon from '@/assets/sort.svg'
import {ref, computed} from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    const getCurrentDate = () => {
      return new Date().toLocaleString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    }

    return {
      isSortAscending: computed(() => store.getters.getIsSortAscending),
      changeSortState: () => store.commit('changeSortState'),
      SortIcon,
      getCurrentDate
    }
  },
}
</script>

<template>
  <div class="slides-view-header">
    <h1 class="slides-view-header__h1">Latest news</h1>
    <div class="slides-view-header__info">
      <span class="slides-view-header__date">{{ getCurrentDate() }}</span>
      <div class="slides-view-header__filter" @click="changeSortState" :class="{'slides-view-header__filter--up': isSortAscending}">
        <img :src="SortIcon" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/_media.scss";

.slides-view-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__h1 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    margin-bottom: 24px;
    margin-top: 40px;

    @include tablet {
      font-size: 24px;
      line-height: 28px;
      margin-top: 16px;
    }

    @include phone {
      margin-bottom: 16px;
      margin-top: 8px;
    }
  }

  &__info {
    display: flex;
    align-items: center;
  }

  &__date {
    font-family: 'Arial';
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;

    @include phone {
      font-size: 12px;
    }
  }

  &__filter {
    margin-left: 10px;

    &:hover {
      cursor: pointer;
    }

    &--up {
      transform: rotate(181deg);
    }
  }
}
</style>
