<template>
  <div class="resume-skill-section">
    <div class="resume-skill-section-title">{{ title }}</div>
    <ul class="resume-skill-section-skills" :class="{ [`resume-skill-section-${type}-skills`]: true }">
      <li class="resume-skill-section-skill" v-for="{ name, level } of skills" :key="name">
        <ResumeSkill :name="name" :level="level" :type="type" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { Props as SkillProps } from "@/components/resume/ResumeSkill.vue";

export type Skill = Omit<SkillProps, "type">;
export interface Props {
  title: string;
  skills: Skill[]
  type?: SkillProps['type']
}

withDefaults(defineProps<Props>(), { type: 'chip' });
</script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";

.resume-skill-section {

  margin-bottom: 1em;

  .resume-skill-section-title {
    font-size: 1.3em;
    font-weight: 700;
    color: map.get($text-colors, "base");
    margin-bottom: 0.6em;
  }

  .resume-skill-section-skills {
    list-style: none;
    margin: 0;
    padding: 0;

    &.resume-skill-section-chip-skills {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0.6em;
    }

    .resume-skill-section-skill {
      margin-bottom: 0.6em;
    }
  }

}
</style>