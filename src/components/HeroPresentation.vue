<template>
  <div class="hero-presentation">
    <div class="container"><slot /></div>
  </div>
</template>

<style lang="ts" setup></style>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";
@use "sass:math";

.hero-presentation {
  background-color: map.get($colors, "primary", "base");
  color: var(--el-color-white);
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
  transition: all 0.3s ease-in-out;
}

html.dark {
  .hero-presentation {
    background-color: mix(
      map.get($colors, "black"),
      map.get($colors, "primary", "base"),
      math.percentage(math.div(3, 10))
    );
  }
}
</style>
