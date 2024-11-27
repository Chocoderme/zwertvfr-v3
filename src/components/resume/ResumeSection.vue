<template>
  <section class="resume-section resume-introduction">
    <slot name="title">
      <h2 class="resume-section-title">{{ title }}</h2>
    </slot>
    <div class="resume-section-content">
      <slot name="default" />
    </div>
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
    margin-top: 0;

    &:after {
      content: " ";
      position: absolute;
      left: 0;
      bottom: 1px;
      width: 100%;
      height: 2px;
      border-radius: 25px;
      background: map.get($text-colors, "light");
    }
  }

  .resume-section-content {
    font-size: 1rem;
    font-weight: normal;
    color: map.get($text-colors, "content", "base");

    :deep(b) {
      font-weight: 700;
    }
  }
}
</style>
