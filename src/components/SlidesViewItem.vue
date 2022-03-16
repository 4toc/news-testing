<script>
import {formatDate} from '../utils/utils';

export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    formatDate,
  }
}
</script>

<template>
  <div class="slides-view-item">
    <div class="slides-view-item__image">
      <img :src="item.image" alt="">
    </div>
    <h4 class="slides-view-item__title">{{ item.title }}</h4>
    <div class="slides-view-item__info">
      <div class="slides-view-item__date">{{ formatDate(item.date) }}</div>
      <div class="slides-view-item__origin">{{ item.origin }}</div>
    </div>
    <div class="slides-view-item__text">
      {{ item.text }}
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/_variables.scss";
@import "@/styles/_media.scss";

.slides-view-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 560px;

  &__image {
    width: 100%;

    img {
      width: 100%;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    margin-bottom: 16px;

    @include tablet {
      font-size: 18px;
      line-height: 24px;
    }

    @include phone {
      font-size: 16px;
      line-height: 21px;
      margin-top: 8px;
      margin-bottom: 12px;
    }
  }

  &__info {
    display: flex;
    align-items: center;
    font-family: 'Roboto';
    color: $black4;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }

  &__date {
    margin-right: 16px;
  }

  &__text {
    font-weight: 400;
    font-size: 14px;
    line-height: 180%;
    color: $black2;
    max-height: 275px;
    margin-top: 16px;

    @include phone {
      font-size: 12px;
      margin-top: 12px;
    }
  }
}
</style>
