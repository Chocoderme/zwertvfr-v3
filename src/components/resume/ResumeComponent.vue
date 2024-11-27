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
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1300px;
  box-sizing: border-box;
  margin: auto;
  container-type: inline-size;
}
</style>
