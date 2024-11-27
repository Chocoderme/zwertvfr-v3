<script setup lang="ts">
import DownloadIcon from "@/assets/icons/download.svg?component";
const resumeFileUrl = encodeURI(
  `${import.meta.env.BASE_URL}resume_Elliott_ZWERTVAEGHER.pdf`
);
</script>

<template>
  <div class="resume-view">
    <HeroPresentation>
      <h1>
        Resume<DownloadButton :url="resumeFileUrl" file-name="Resume - Elliott ZWERTVAEGHER.pdf">
          <DownloadIcon class="icon" />Download PDF Version
        </DownloadButton>
      </h1>
      <div style="height: 160px" />
    </HeroPresentation>
    <section>
      <ResumeComponent style="margin-top: -180px" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.resume-view {
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
