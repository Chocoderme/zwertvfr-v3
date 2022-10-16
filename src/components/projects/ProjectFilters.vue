<template>
  <div>
    <ul class="filters">
      <li
        v-for="tag of tags.filter(
          (t) => !['Frontend', 'Backend'].includes(t.label)
        )"
        class="filter"
        :class="{
          active:
            (tag.label === 'All' && projectStore.activeTags.length === 0) ||
            tag === projectStore.activeTags[0],
        }"
        @click="tagClicked(tag)"
      >
        {{ tag.label }}
      </li>
    </ul>
    <ul class="filters">
      <li
        v-for="tag of tags.filter((t) =>
          ['Frontend', 'Backend'].includes(t.label)
        )"
        class="filter"
        :class="{
          active:
            (tag.label === 'All' && projectStore.activeTags.length === 0) ||
            tag === projectStore.activeTags[0],
        }"
        @click="tagClicked(tag)"
      >
        {{ tag.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useProjectStore } from "@/stores/project";

const projectStore = useProjectStore();
const tags = computed(() => [
  { label: "All", values: [] },
  ...projectStore.tags,
]);
const tagClicked = (tag: typeof tags.value[number]) => {
  if (tag.label === "All") {
    projectStore.activeTags = [];
  } else {
    projectStore.activeTags = [tag];
  }
};
</script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";

.filters {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;

  .filter {
    display: block;
    padding: 0.275rem 0.875rem;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    border-radius: 4px;
    color: map.get($text-colors, "base");

    &:hover {
      background-color: rgba(map.get($colors, "info", "light-6"), 0.2);
    }

    &.active {
      background-color: map.get($colors, "primary", "base");
      color: map.get($colors, "white");
    }
  }
}

html.dark {
  .filter {
    color: map.get($colors, "info", "light-5");

    &.active {
      background-color: map.get($colors, "primary", "dark-4");
      color: map.get($colors, "white");
    }
  }
}
</style>
