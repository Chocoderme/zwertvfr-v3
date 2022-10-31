<template>
  <button type="submit" :disabled="disabled">
    <slot />
  </button>
</template>

<script lang="ts" setup>
interface Props {
  disabled?: boolean;
}
withDefaults(defineProps<Props>(), {
  disabled: false,
});
</script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";

button {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
  display: inline-block;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  border: 1px solid map.get($text-colors, "link");
  border-radius: 0.375rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: map.get($colors, "white");

  &:not(:disabled) {
    cursor: pointer;
    background-color: map.get($text-colors, "link");
  }

  &:hover {
    color: map.get($colors, "white");
    background: mix(#000, map.get($text-colors, "link"), 5%);
    border-color: mix(#000, map.get($text-colors, "link"), 5%);
  }

  &:active {
    color: map.get($colors, "white");
    background: mix(#000, map.get($text-colors, "link"), 10%);
    border-color: mix(#000, map.get($text-colors, "link"), 10%);
  }

  &:disabled {
    cursor: not-allowed;
    border-color: mix(map.get($colors, "white"), map.get($text-colors, "link"), 30%);
    background-color: mix(map.get($colors, "white"), map.get($text-colors, "link"), 30%);
  }
}
</style>