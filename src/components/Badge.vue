<template>
  <div class="badge"><slot /></div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";

.badge {
  padding: 0.35em 0.7em;
  padding-bottom: 0.4em;
  border-radius: 10rem;
  color: map.get($colors, "white");
  background: map.get($colors, "info", "dark-4");
  font-size: 0.75rem;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  display: inline-block;
  box-sizing: border-box;
}
</style>
