<template>
  <ul class="resume-education">
    <li class="resume-education-item" v-for="item of items" :key="item.name">
      <p class="name">{{ item.name }}</p>
      <p class="description" v-if="item.description">{{ item.description }}</p>
      <p class="date" v-if="item.date">{{ item.date }}</p>
    </li>
  </ul>
</template>

<script lang="ts" setup>
export type ResumeEducationItem = {
  name: string;
  description?: string;
  date?: string;
};
export interface Props {
  items: ResumeEducationItem[];
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";

.resume-education {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  flex-wrap: wrap;

  .resume-education-item {
    color: map.get($text-colors, "content", "base");

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    p {
      margin: 0;
      padding: 0;
    }

    .name {
      font-weight: normal;
      font-size: 1em;
      color: map.get($text-colors, "title", "base");
    }

    .description {
      font-weight: normal;
      font-size: 0.9em;
      color: map.get($text-colors, "content", "base");
    }

    .date {
      font-weight: normal;
      font-size: 0.8em;
      color: map.get($text-colors, "content", "sub");
    }
  }
}
</style>
