<template>
  <div class="resume-body">
    <ResumeSection title="CAREER SUMMARY"> Hey hey hey </ResumeSection>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";

.resume-body {
  padding: 3rem;
  background-color: map.get($colors, "white");
}
</style>
