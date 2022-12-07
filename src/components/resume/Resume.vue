<template>
  <article class="resume">
    <header class="resume-header">
      <!-- // image -->
      <img src="https://i.picsum.photos/id/930/300/300.jpg?hmac=RgiMCCklyXwMJodQkK8gSZGtGM8nCWGi5HfgcPrADc4" />
      <!-- // Infos -->
      <div class="infos">
        <div class="personal-infos">
          <h1>Elliott Zwertvaegher</h1>
        </div>
        <ul class="sns-contacts">
          <li class="contact">Linked In</li>
          <li class="contact">Github</li>
          <li class="contact">Website</li>
        </ul>
      </div>
    </header>
  </article>
</template>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";

.resume {
  display: block;
  width: 100%;
  max-width: 1000px;
  box-sizing: border-box;
  margin: auto;

  .resume-header {
    height: 220px;
    display: flex;
    flex-direction: row;
    background-color: map.get($text-colors, "title", "base");

    img {
      height: inherit;
      aspect-ratio: 1 / 1;
      object-fit: cover;
    }

    .infos {
      flex: 1 1;
      color: map.get($colors, "white");
      padding: 1.5rem;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;

      .sns-contacts {
        list-style: none;
        margin: 0;
        padding: 0;
      }
    }
  }
}
</style>
