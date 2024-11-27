<template>
  <div class="contact">
    <HeroPresentation>
      <h1>Contact</h1>
    </HeroPresentation>
    <section>
      <div class="container small">
        <Avatar style="margin-bottom: 1rem" />
        <SpeechCard>
          <p>I'm currently in <a
              href="https://www.google.com/maps/place/Paris/@48.8588475,2.3058358,13z/data=!3m1!4b1!4m6!3m5!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.8575475!4d2.3513765!16zL20vMDVxdGo"
              target="_blank">Paris, France</a>. If you are interested in hiring me for your project please use the
            form below to get in touch. Want to know how I work and what I can offer? Check out <router-link
              :to="{ name: RouteNames.PROJECTS }">my project case studies</router-link>
            and <router-link :to="{ name: RouteNames.RESUME }">resume</router-link>.</p>
        </SpeechCard>
      </div>
    </section>
    <section>
      <div class="container small">
        <ContactCard style="margin-bottom: 2rem" />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { RouteNames } from "@/router"
</script>

<style lang="scss" scoped>
.contact {
  box-sizing: border-box;
  position: relative;

  section {
    padding-top: 3rem;
    text-align: center;
  }
}
</style>
