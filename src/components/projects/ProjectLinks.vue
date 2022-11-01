<template>
  <span class="project-links">
    <a :href="link.url" target="_blank" class="project-link" v-for="link of links">
      <component :is="getIcon(link)" />
    </a>
  </span>
</template>

<script lang="ts" setup>
import type { Project } from "@/stores/project";

import GithubIcon from "@/assets/icons/github.svg?component";
import ExternalUrlIcon from "@/assets/icons/external-link.svg?component";

export interface Props {
  links: Exclude<Project['links'], undefined>;
}
defineProps<Props>();

const getIcon = (link: Exclude<Project['links'], undefined>[number]) => {
  if (link.icon === 'github') return GithubIcon;
  return ExternalUrlIcon;
}
</script>

<style lang="scss" scoped>
.project-link {
  margin-left: 5px;
  font-size: 0.8em;

  svg {
    height: 1em;
  }
}
</style>
