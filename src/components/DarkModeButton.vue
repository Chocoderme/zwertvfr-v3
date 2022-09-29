<template>
  <span class="toggle-dark-mode-btn" @click="toggleDarkMode">
    <!-- <transition name="fade-in-fast" mode="out-in"> -->
    <SunIcon v-if="!darkMode" />
    <MoonIcon v-else />
    <!-- </transition> -->
  </span>
</template>

<script lang="ts" setup>
import SunIcon from "@/assets/icons/sun.svg";
import MoonIcon from "@/assets/icons/moon.svg";

const darkMode = useDark();
const isDarkModePreferred = usePreferredDark();

const toggleDarkMode = () => {
  if (window.localStorage) {
    window.localStorage.setItem("ez-dark-mode", `${!darkMode.value}`);
  }
  darkMode.value = !darkMode.value;
};

if (window.localStorage) {
  darkMode.value =
    (window.localStorage.getItem("ez-dark-mode") ??
      `${isDarkModePreferred.value}`) === "true";
}
</script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";
@use "sass:math";

.toggle-dark-mode-btn {
  display: inline-block;
  width: 1em;
  height: 1em;
  color: map.get($colors, "white");
  cursor: pointer;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;

  &:hover {
    color: var(--el-menu-hover-text-color);
  }
}
</style>
