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
          <p>
            I'm currently in
            <a
              href="https://www.google.com/maps/place/Seoul/data=!4m2!3m1!1s0x357ca2012d5c39cf:0x7e11eca1405bf29b?sa=X&ved=2ahUKEwj3r-j54oH7AhUREogKHdyQDdwQ8gF6BQiFARAB"
              target="_blank"
              >Seoul, South Korea</a
            >. If you are interested in hiring me for your project please use
            form below to get in touch. Want to know how I work and what I can
            offer? Check out my project case studies
            <router-link :to="{ name: 'resume' }">resume</router-link>.
          </p>
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
