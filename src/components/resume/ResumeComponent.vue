<template>
  <article class="resume">
    <ResumeHeader />
    <ResumeBody />
  </article>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";

.resume {
  display: block;
  width: 100%;
  max-width: 1000px;
  box-sizing: border-box;
  margin: auto;
}
</style>
