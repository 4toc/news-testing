<template>
  <div class="default-footer">
    Copyright 2022 News Portal
  </div>
</template>

<style lang="scss">
@import "@/styles/_variables.scss";
@import "@/styles/_media.scss";

.default-footer {
  background: $white2;
  height: 82px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  margin-top: auto;

  @include tablet {
    height: 52px;
  }
}

</style>
