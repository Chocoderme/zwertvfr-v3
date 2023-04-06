<template>
  <article class="resume">
    <header class="resume-header">
      <!-- // image -->
      <img
        src="https://fastly.picsum.photos/id/930/300/300.jpg?hmac=RgiMCCklyXwMJodQkK8gSZGtGM8nCWGi5HfgcPrADc4"
      />
      <!-- // Infos -->
      <div class="infos">
        <div class="personal-infos">
          <h1 class="name">Elliott Zwertvaegher</h1>
          <p class="job-title">Developer</p>
          <p class="email">Elliott.zz59@gmail.com</p>
          <p class="phone">010 - 9549 - 9295</p>
        </div>
        <SocialContacts :links="socialLinks" />
      </div>
    </header>
  </article>
</template>

<script lang="ts" setup>
import GithubIcon from "@/assets/icons/github.svg?component";
import LinkedInIcon from "@/assets/icons/linkedin.svg?component";
import WebsiteIcon from "@/assets/icons/website.svg?component";

const socialLinks = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/elliott-zwertvaegher-8133a590/",
    icon: LinkedInIcon,
  },
  { title: "Github", url: "https://github.com/shoko31", icon: GithubIcon },
  { title: "Website", url: "https://zwertv.fr/", icon: WebsiteIcon },
];
</script>

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
      gap: 20px;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;

      .personal-infos {
        .name {
          padding: 0;
          margin: 0;
          margin-bottom: 0.25rem;
          font-size: 2.25rem;
          letter-spacing: 0.175rem;
          font-weight: 900;
          box-sizing: border-box;
          line-height: 1.2;
          text-transform: uppercase;
        }

        .job-title {
          padding: 0;
          margin: 0;
          font-weight: 400;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          box-sizing: border-box;
          color: rgba(map.get($colors, "white"), 0.9);
        }

        .email,
        .phone {
          margin: 0;
          margin-bottom: 0.5rem;
          color: rgba(map.get($colors, "white"), 0.6);

          &:last-child {
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
}
</style>
