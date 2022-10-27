<template>
  <ul class="nav-links" @mouseleave="mouseOverLink(-1)">
    <li v-for="(lnk, index) of navLinks" :key="index" class="nav-link" :class="{ active: route.path === lnk.url }"
      :ref="linkRefs.set" @mouseover="mouseOverLink(index)" @click.stop="navigateTo(lnk.url)">
      {{ lnk.name }}
    </li>
    <div :style="{
      width: `${width}px`,
      left: `${left}px`,
    }" class="link-slider" />
  </ul>
</template>

<script lang="ts" setup>
const navLinks = [
  { name: "About", url: "/" },
  { name: "Resume", url: "/resume" },
  { name: "Projects", url: "/projects" },
  { name: "Contact", url: "/contact" },
];

const route = useRoute();
const router = useRouter();
const linkRefs = useTemplateRefsList<HTMLLIElement>();

const sliderLink = ref<HTMLLIElement>();
const { left, width, update } = useElementBounding(sliderLink, {
  immediate: true,
  reset: true,
  windowResize: true,
  windowScroll: true,
});

const mouseOverLink = (index: number) => {
  if (index === -1) {
    const activeLink = linkRefs.value.find((l) =>
      l.classList.contains("active")
    );
    sliderLink.value = activeLink;
    return;
  }
  sliderLink.value = linkRefs.value[index];
};

const navigateTo = (path: string) => {
  router.push({ path });
};

onMounted(() => {
  setTimeout(() => {
    update();
    mouseOverLink(-1);
  }, 100);
});
router.afterEach(() => {
  setTimeout(() => {
    update();
    mouseOverLink(-1);
  }, 100);
});
</script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";
@use "sass:math";

.nav-links {
  // position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 5px;

  .nav-link {
    color: rgba(map.get($colors, "white"), 0.55);
    cursor: pointer;
    padding-left: 5px;
    padding-right: 5px;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    display: inline-flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease-in-out;

    &.active {
      color: map.get($colors, "white");
    }
  }

  .link-slider {
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color: map.get($colors, "white");
    transition: all 0.2s ease-in-out;
    transition-property: left, width;
  }
}
</style>
