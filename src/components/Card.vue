<template>
  <div class="card">
    <slot />
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";
@use "sass:math";

.card {
  position: relative;
  display: block;
  padding: 3rem;
  background-color: map.get($colors, "white");
  box-sizing: border-box;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);

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

html.dark {
  .card {
    background-color: mix(map.get($colors, "black"),
        map.get($colors, "white"),
        math.percentage(math.div(1, 10)));
  }
}
</style>