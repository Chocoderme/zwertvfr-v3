<template>
  <div class="project-card">
    <div class="card-header" @mouseenter="detailedOverlayVisible = true" @mouseleave="detailedOverlayVisible = false">
      <transition name="fade-in-fast" mode="out-in">
        <img :key="_project.image" v-if="_project.image" :src="_project.image" alt="project image" />
      </transition>
      <transition name="fade-in-fast">
        <div class="title-overlay" v-if="!detailedOverlayVisible">
          <transition name="fade-in-fast" mode="out-in">
            <h3 :key="_project.title">{{ _project.title }}</h3>
          </transition>
        </div>
      </transition>
      <transition name="slide-bottom-fast">
        <div class="detailed-overlay" v-if="detailedOverlayVisible">
          <h3>{{ _project.title }}</h3>
          <span>{{ _project.summary }}</span>
        </div>
      </transition>
    </div>
    <div class="card-body">
      <transition name="fade-in-fast" mode="out-in">
        <h4 :key="_project.type">{{ _project.type }}</h4>
      </transition>
    </div>
    <div class="card-footer">
      <transition name="fade-in-fast" mode="out-in">
        <ProjectTags :tags="_project.tags" :key="_project.title" />
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Project } from "@/stores/project";

export interface Props {
  project: Project;
}
const props = defineProps<Props>();

const _project = useVModel(props, "project");

const detailedOverlayVisible = ref(false);
</script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";

.project-card {
  border-radius: 0;
  margin-bottom: 3rem;
  border: 0;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
  height: auto;
  background: map.get($colors, "white");
  width: 100%;
  position: relative;

  .card-header {
    width: 100%;
    aspect-ratio: 3 / 2;
    background-color: map.get($colors, "info", "dark-5");
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      inset: 0;
      object-fit: cover;
      object-position: center center;
      height: 100%;
      width: 100%;
      z-index: 0;
    }

    .title-overlay {
      position: absolute;
      inset: 0;
      z-index: 1;
      background-color: rgba(67, 78, 94, 0.6);
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 1rem;

      h3 {
        color: map.get($colors, "white");
      }

      &.fade-in-fast-enter-active {
        transition-delay: 0.3s;
      }
    }

    .detailed-overlay {
      position: absolute;
      inset: 0;
      z-index: 1;
      background-color: rgba(map.get($colors, "primary", "base"), 0.95);
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      padding: 1rem;
      transform: translateY(0%);

      h3,
      span {
        color: map.get($colors, "white");
      }

      &.slide-bottom-fast-enter-active {
        transition-delay: 0.3s;
      }
    }
  }

  .card-body {
    padding: 1rem 1rem 0 1rem;

    h4 {
      text-align: center;
      font-size: 1.125rem;
      margin: 0;
      padding: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 500;
      line-height: 1.2;
      color: map.get($text-colors, "title", "base");
    }
  }

  .card-footer {
    padding: 0.75rem 1rem 1.5rem 1rem;
    text-align: center;
  }
}

html.dark {
  .project-card {
    background: map.get($colors, "info", "dark-3");

    .detailed-overlay {
      background-color: rgba(map.get($colors, "primary", "dark-4"), 0.95);
    }
  }

  .card-body {
    h4 {
      color: map.get($colors, "white");
    }
  }
}
</style>
