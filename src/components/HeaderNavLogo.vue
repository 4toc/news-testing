<template>
  <div class="header-nav-logo">
    <span class="header-nav-logo__black">News</span>
    <span class="header-nav-logo__white">Portal</span>
  </div>
</template>

<style lang="scss">
@import "@/styles/_variables.scss";

.header-nav-logo {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;


  &__black {
    background: $black1;
    padding: 8px;
    border-radius: 4px;
    color: $white2;
  }

  &__white {
    margin-left: 8px;
  }
}

</style>
