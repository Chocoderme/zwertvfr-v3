<template>
  <div class="skill" :class="{ [`skill-${type}`]: true }">
    <div class="skill-name">{{ name }}</div>
    <ul class="skill-bar" v-if="numberLevel && type === 'bar'">
      <li v-for="i of 3" :key="i" :class="{ active: i <= numberLevel }" />
    </ul>
  </div>
</template>

<script lang="ts" setup>
export type Level = "novice" | "intermediate" | "advanced" | "expert";
export interface Props {
  name: string;
  level?: Level;
  type?: "bar" | "chip"
}

const levels = ["novice", "intermediate", "advanced", "expert"] as const;
const props = withDefaults(defineProps<Props>(), { type: 'chip' });

const level = useVModel(props, "level");
const numberLevel = computed(() => {
  return level.value === undefined ? undefined : Math.max(levels.findIndex(val => val === level.value), 0);
})
</script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";

.skill {
  .skill-name {
    font-size: 1.125em;
    font-weight: 700;
    color: map.get($text-colors, "base");
    margin-bottom: 0.125em;
  }

  &.skill-chip {
    .skill-name {
      background-color: #eaecef;
      transition: background-color 0.3s ease-in-out;
      padding: 0.1em 0.6em;
      border-radius: 0.1em;
    }
  }

  .skill-bar {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    gap: 0.25em;

    li {
      content: " ";
      height: 1.2em;
      flex-grow: 1;
      display: block;
      width: 100%;
      transition: background-color 0.3s ease-in-out;
      background-color: #eaecef;
      border-radius: 0.25em;

      &.active {
        background-color: #434e5e;
      }
    }
  }
}

html.dark {
  .skill {
    &.skill-chip {
      .skill-name {
        background-color: #c4c4c4;
      }
    }

    .skill-bar {
      li {
        background-color: #c4c4c4;

        &.active {
          background-color: #434e5e;
        }
      }

    }
  }
}
</style>
