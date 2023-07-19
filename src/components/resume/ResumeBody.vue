<template>
  <div ref="containerRef" class="resume-body">
    <!-- <ResumeSection title="CAREER SUMMARY"> Hey hey hey </ResumeSection> -->
    <VuePdf
      style="position: absolute; top: -220px; left: 0; z-index: -1"
      :style="{ width: `${width}px` }"
      :source="resumeFileUrl"
      :width="1000"
      :height="2828"
      disable-annotation-layer
    />
    <!-- <section>
      <embed :src="resumeFileUrl" width="800px" height="2100px" />
    </section> -->
  </div>
</template>

<script lang="ts" setup>
import VuePdf from "vue-pdf-embed";
const resumeFileUrl = encodeURI(
  `${import.meta.env.BASE_URL}resume_Elliott_ZWERTVAEGHER.pdf`
);

const containerRef = ref<HTMLDivElement>();
const { width } = useElementSize(containerRef);
</script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";

.resume-body {
  position: relative;
  // padding: 3rem;
  background-color: map.get($colors, "white");
}
</style>
