<template>
  <a class="download-button">
    <slot />
  </a>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";

.download-button {
  padding: 0.375rem 1rem;
  display: inline-block;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  font-weight: 700;
  text-decoration: none;
  vertical-align: middle;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  border: none !important;
  border-radius: 0.375rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: map.get($colors, "white");

  &:not(:disabled) {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
  }

  &:hover {
    color: map.get($colors, "white");
    background: rgba(0, 0, 0, 0.3);
  }

  &:active {
    color: map.get($colors, "white");
    background: rgba(0, 0, 0, 0.4);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: mix(map.get($colors, "white"), map.get($text-colors, "link"), 30%);
  }
}
</style>