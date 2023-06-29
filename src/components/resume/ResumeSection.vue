<template>
  <section class="resume-section resume-introduction">
    <slot name="title"
      ><h2 class="resume-section-title">{{ title }}</h2></slot
    >
    <div class="resume-section-content"><slot name="default" /></div>
  </section>
</template>

<script lang="ts" setup>
export interface Props {
  title: string;
}
defineProps<Props>();
</script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";

.resume-section {
  .resume-section-title {
    font-size: 1.25rem;
    position: relative;
    color: map.get($text-colors, "title", "base");
    font-weight: 700;
    text-transform: uppercase;
    padding-bottom: 1rem;

    &:after {
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1.5px;
      background: map.get($text-colors, "light");
    }
  }

  .resume-section-content {
    color: map.get($text-colors, "secondary");
  }
}
</style>
