<template>
  <ul class="resume-languages">
    <li class="resume-language" v-for="language of languages" :key="language.name">{{ language.name }} <span>({{
      language.level
    }})</span></li>
  </ul>
</template>

<script lang="ts" setup>
export type ResumeLanguage = {
  name: string;
  level: string;
}
export interface Props {
  languages: ResumeLanguage[];
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";

.resume-languages {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  flex-wrap: wrap;

  .resume-language {
    color: map.get($text-colors, "content", "base");

    span {
      font-weight: bold;
      font-size: 0.85em;
      color: map.get($text-colors, "content", "sub");
    }
  }

}
</style>