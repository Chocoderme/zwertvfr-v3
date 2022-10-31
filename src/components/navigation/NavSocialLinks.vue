<template>
  <ul class="nav-social-links">
    <li v-for="(lnk, index) of snsLinks" :key="index" class="nav-social-link" @click.stop="openLink(lnk)">
      <component :is="lnk.icon" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import GithubIcon from "@/assets/icons/github.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";
import StackoverflowIcon from "@/assets/icons/stackoverflow.svg";

const snsLinks = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/elliott-zwertvaegher-8133a590/",
    icon: LinkedInIcon,
  },
  { title: "Github", url: "https://github.com/shoko31", icon: GithubIcon },
  {
    title: "Stackoverflow",
    url: "https://stackoverflow.com/users/3147985/shoko",
    icon: StackoverflowIcon,
  },
];

const openLink = (link: typeof snsLinks[number]) => {
  window.open(link.url, "_blank");
};
</script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";
@use "sass:math";

.nav-social-links {
  // position: relative;
  list-style: none;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  gap: 5px;
  height: 100%;

  .nav-social-link {
    color: rgba(map.get($colors, "white"), 1);
    cursor: pointer;
    padding: 10px;
    padding: 10px;
    line-height: 0;
    border-radius: 999px;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    transition: background-color 0.2s ease-in-out;

    svg {
      height: 1em;
      width: 1em;
      color: inherit;
    }

    &.active {
      color: map.get($colors, "white");
    }

    &:hover {
      background-color: rgba(map.get($colors, "black"), 0.3);
    }
  }
}
</style>
