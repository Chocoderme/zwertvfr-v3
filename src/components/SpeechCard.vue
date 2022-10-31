<template>
  <Card class="speech-card">
    <slot />
  </Card>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";

.speech-card {
  &::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid map.get($colors, "white");
    position: absolute;
    top: -10px;
    left: 50%;
    margin-left: -10px;
  }
}
</style>