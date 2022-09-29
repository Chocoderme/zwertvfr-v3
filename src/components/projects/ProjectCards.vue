<template>
  <div class="project-cards">
    <TransitionGroup name="zoom-in">
      <ProjectCard
        v-for="(project, index) of projectStore.activeProjects"
        :key="index"
        :project="project"
      />
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
import { useProjectStore } from "@/stores/project";

const projectStore = useProjectStore();
</script>

<style lang="scss" scoped>
.project-cards {
  display: grid;
  grid-template-columns: 1fr;
  // flex-direction: row;
  // flex-wrap: wrap;
  gap: 25px;
  justify-content: stretch;
  align-items: stretch;
}

@media (min-width: 768px) {
  .project-cards {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
