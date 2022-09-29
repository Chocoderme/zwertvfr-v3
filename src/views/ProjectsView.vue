<template>
  <div class="projects">
    <HeroPresentation>
      <h1>Projects</h1>
      <div class="page-heading">A quick overview of my side projects</div>
    </HeroPresentation>
    <section>
      <div class="container">
        <ProjectFilters style="margin-bottom: 3rem" />
        <ProjectCards />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";

.projects {
  box-sizing: border-box;
  position: relative;

  h1 {
    font-weight: bold;
    font-size: 2rem;
    padding: 0;
    margin: 0;
    margin-bottom: 1rem;
    color: map.get($colors, "white");
  }

  .page-heading {
    max-width: 700px;
    font-size: 1.25rem;
    color: map.get($colors, "white");
  }

  section {
    padding-top: 3rem;
  }
}
</style>
