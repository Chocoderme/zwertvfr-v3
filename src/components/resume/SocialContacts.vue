<template>
  <ul class="sns-contacts">
    <li
      class="contact"
      v-for="link of links"
      :key="link.title"
      @click="openLink(link)"
    >
      <i v-if="link.icon" class="contact-icon"
        ><img v-if="typeof link.icon == 'string'" :src="link.icon" />
        <component v-else :is="link.icon" /> </i
      >{{ link.title }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { FunctionalComponent } from "vue";

export interface SNSLink {
  title: string;
  url: string;
  icon?: string | FunctionalComponent;
}

export interface Props {
  links: SNSLink[];
}
const props = defineProps<Props>();

const links = useVModel(props, "links");

const openLink = (link: SNSLink) => {
  window.open(link.url, "_blank");
};
</script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";

.sns-contacts {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  box-sizing: border-box;

  .contact {
    margin-bottom: 1rem !important;
    color: rgba(map.get($colors, "white"), 0.6);
    text-decoration: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0.875rem;
    cursor: pointer;
    transition: color 0.1s ease-in-out;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1ch;

    svg,
    img {
      $growSize: 3px;
      color: map.get($text-colors, "base");
      background-color: rgba(map.get($colors, "white"), 0.6);
      padding: $growSize;
      border-radius: $growSize;
      margin-left: -$growSize * 2;
      margin-top: -$growSize;
      margin-bottom: -$growSize;
      transition: background-color 0.1s ease-in-out;
    }

    &:hover {
      text-decoration: underline;
      color: rgba(map.get($colors, "white"), 1);

      svg,
      img {
        background-color: rgba(map.get($colors, "white"), 1);
      }
    }

    .contact-icon {
      display: inline-block;
      height: 1rem;
      width: 1rem;
      color: inherit;
    }
  }
}
</style>
