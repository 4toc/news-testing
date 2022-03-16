<script setup>
import HeaderNavLogo from './HeaderNavLogo.vue'
import HeaderNavSearch from './HeaderNavSearch.vue'
</script>

<template>
  <div class="header-nav">
    <header-nav-logo />
    <header-nav-search />
  </div>
</template>

<style lang="scss">
.header-nav {
  padding: 32px 0;
  display: flex;
  justify-content: space-between;
}
</style>
