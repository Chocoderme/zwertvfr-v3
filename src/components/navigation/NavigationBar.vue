<template>
  <!-- <ElAffix> -->
  <nav class="navigation-bar">
    <NavSocialLinks />
    <!-- <li class="block sns-links" role="menuitem">
      <ElButton
        v-for="snsLink of snsLinks"
        type="default"
        circle
        text
        :icon="snsLink.icon"
        @click="openLink(snsLink)"
        :title="snsLink.title"
        :style="{ color: 'var(--el-menu-text-color)' }"
      />
    </li> -->
    <!-- <ElMenuItem index="/">
        <img :src="LogoImage" :alt="`${title} logo`" height="32" />
        <label class="title">{{ title }}</label>
      </ElMenuItem> -->
    <div class="flex-grow" />
    <NavLinks />
    <DarkModeButton style="margin-left: 10px" />
  </nav>
  <!-- </ElAffix> -->
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";

.flex-grow {
  flex-grow: 1;
}

.navigation-bar {
  height: var(--el-header-height);
  border-bottom: none;
  height: $header-height;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: map.get($colors, "primary", "dark-3");
  color: map.get($colors, "white");
  padding-left: 20px;
  padding-right: 20px;
}
</style>
