<template>
  <ul class="project-tags">
    <li class="project-tag" v-for="(tag, index) of _tags" :key="index">
      <Badge>{{ tag }}</Badge>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { Project } from "@/stores/project";

export interface Props {
  tags: Project["tags"];
}
const props = defineProps<Props>();
const _tags = useVModel(props, "tags");
</script>

<style lang="scss" scoped>
.project-tags {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}
</style>
