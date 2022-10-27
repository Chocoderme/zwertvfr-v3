<template>
  <div class="speech-card">
    <slot />
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";

.speech-card {
  position: relative;
  display: block;
  padding: 3rem;
  background-color: map.get($colors, "white");
  box-sizing: border-box;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);

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

  :slotted(p) {
    text-align: left;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: block;
    color: map.get($text-colors, "base");
    font-weight: 400;
    line-height: 1.5;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
}
</style>