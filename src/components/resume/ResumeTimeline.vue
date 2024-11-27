<template>
  <ul class="resume-timeline">
    <div class="line" />
    <slot />
  </ul>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.resume-timeline {
  list-style: none;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1em 0 2em 0 !important;

  .line {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 5px;
    background-color: #9ba1a9;
    border-radius: 25px;
  }
}
</style>