<template>
  <header class="resume-header">
    <!-- // image -->
    <img :src="ProfilePicture" />
    <!-- // Infos -->
    <div class="infos">
      <div class="personal-infos">
        <h1 class="name">Elliott Zwertvaegher</h1>
        <p class="job-title">Developer</p>
        <p class="email">
          <a href="mailto:elliott.zwertvaegher@gmail.com">elliott.zz59@gmail.com</a>
        </p>
        <p class="phone"><a href="tel:+33759626122">07 59 62 61 22</a></p>
      </div>
      <SocialContacts :links="socialLinks" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import GithubIcon from "@/assets/icons/github.svg?component";
import LinkedInIcon from "@/assets/icons/linkedin.svg?component";
import WebsiteIcon from "@/assets/icons/website.svg?component";
import ProfilePicture from "@/assets/imgs/elliott_profile.jpg";

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
        text-wrap: wrap;
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

        a {
          color: inherit;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.1s ease-in-out;

          &:hover {
            text-decoration: underline;
            color: rgba(map.get($colors, "white"), 1);
          }
        }
      }
    }
  }
}

@container (max-width: 699px) {
  .resume-header {
    flex-direction: column;
    height: auto;

    img {
      max-width: unset;
    }

    .infos {
      flex-direction: column;
      gap: 0;

      .sns-contacts {
        margin-bottom: 0;
      }
    }
  }
}
</style>
