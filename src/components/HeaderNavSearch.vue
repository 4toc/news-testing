<script>
import SearchLogo from '@/assets/find.svg'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    const changeSearch = (text) => {
      store.commit('setSearch', text.target.value)
    }

    return {
      SearchLogo,
      changeSearch
    }
  },
}
</script>

<template>
  <div class="header-nav-search">
    <input id="searchIcon" type="text" class="header-nav-search__input" :value="searchField" @input="changeSearch">
    <div class="header-nav-search__border"></div>
    <label for="searchIcon" class="header-nav-search__icon">
      <img :src="SearchLogo" alt="">
    </label>
  </div>
</template>

<style lang="scss">
@import "@/styles/_variables.scss";

.header-nav-search {
  position: relative;
  display: flex;
  align-items: center;

  &__border {
    border-bottom: 1px solid $black4;
    position: absolute;
    bottom: 0;
    top: 0;
    margin: auto;
    height: 28px;
    right: 0;
    width: 0;
  }

  &__input {
    position: absolute;
    right: 0;
    height: 28px;
    top: 0;
    bottom: 0;
    margin: auto;
    border: none;
    width: 120px;
    padding-right: 30px;
    text-indent: 5px;
    overflow: hidden;

    &:focus {
      outline: none;

      &~ .header-nav-search__border {
        transition: 0.4s;
        width: 150px;
      }
    }
  }

  &__icon {
    position: relative;
    z-index: 5;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
