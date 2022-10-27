<script setup lang="ts"></script>

<template>
  <div class="contact">
    <HeroPresentation>
      <h1>Contact</h1>
    </HeroPresentation>
    <section>
      <div class="container small">
        <Avatar style="margin-bottom: 1rem" />
        <SpeechCard>
          <p>I'm currently taking on freelance work. If you are interested in hiring me for your project please use the
            form below to get in touch. Want to know how I work and what I can offer? Check out my project case studies
            and <router-link :to="{ name: 'resume' }">resume</router-link>.</p>
        </SpeechCard>
      </div>
    </section>
  </div>
</template>

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
