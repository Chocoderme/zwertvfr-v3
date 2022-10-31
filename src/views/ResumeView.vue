<script setup lang="ts">
import DownloadIcon from "@/assets/icons/download.svg?component";
</script>

<template>
  <div class="resume">
    <HeroPresentation>
      <h1>Resume<DownloadButton>
          <DownloadIcon class="icon" />Download
          PDF Version
        </DownloadButton>
      </h1>
    </HeroPresentation>
  </div>
</template>

<style lang="scss" scoped>
.resume {
  box-sizing: border-box;
  position: relative;
}

h1 {
  position: relative;

  .download-button {
    .icon {
      display: inline-block;
      height: 1em;
      margin-right: 0.5rem;
      overflow: visible;
      box-sizing: content-box;
    }

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }
}
</style>
