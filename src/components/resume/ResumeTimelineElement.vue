<template>
  <li class="resume-timeline-element">
    <div class="resume-timeline-element-circle" />
    <div class="resume-timeline-element-header">
      <h3 class="name">{{ name }}</h3>
      <div class="location" v-if="location">{{ typeof location === 'string' ? location : location.name }}<span
          class="country" v-if="typeof location !== 'string'">{{
            location.country }}</span></div>
      <sub class="date" v-if="date">{{ date }}</sub>
    </div>
    <div class="resume-timeline-element-content">
      <slot />
    </div>
  </li>
</template>

<script lang="ts" setup>
export interface Props {
  name: string;
  location?: string | { name: string; country: string };
  date?: string;
}
export type TimelineElement = Props;

defineProps<Props>();

</script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";

.resume-timeline-element {
  padding-left: 25px;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 2.5em;
  }

  .resume-timeline-element-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 1em;

    .name {
      margin: 0 0 0.4em 0;
      padding: 0;
      font-size: 1.2em;
      font-weight: bold;
      color: map.get($text-colors, "title", "base");
    }

    .location {
      text-align: right;
      font-size: 1em;
      font-weight: normal;
      color: map.get($text-colors, "title", "base");

      .country {
        color: map.get($text-colors, "title", "secondary");
        text-transform: uppercase;
        margin-left: 0.8ch;
      }
    }

    .date {
      font-size: 0.8em;
      color: map.get($text-colors, "title", "sub");
      grid-column: auto / span 2;
    }
  }

  .resume-timeline-element-circle {
    position: absolute;
    left: 0;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 9999px;
    background-color: map.get($colors, "white");
    border: 5px solid #434e5e;
    translate: -7px 0;
  }
}
</style>