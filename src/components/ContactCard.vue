<template>
  <Card>
    <h3>Get In Touch</h3>
    <form @submit.prevent>
      <div class="row">
        <InputElement :disabled="isLoading" id="cname" name="name" type="text" autocomplete="name" placeholder="Name"
          v-model="contactForm.name" required />
        <InputElement :disabled="isLoading" id="email" name="email" type="email" autocomplete="email"
          placeholder="Email" v-model="contactForm.email" required />
      </div>
      <div class="row">
        <TextAreaElement :disabled="isLoading" id="message" :rows="8" name="message" autocomplete="off"
          placeholder="Message..." v-model="contactForm.message" required :minlength="minMessageLength" />
      </div>
      <div class="row">
        <SubmitButton :disabled="isLoading" @click="sendEmail">Send It</SubmitButton>
      </div>
    </form>
  </Card>
</template>

<script lang="ts" setup>
import { send } from "@emailjs/browser"

const contactForm = reactive({
  name: '',
  email: '',
  message: '',
});

const isLoading = ref(false);
const minMessageLength = 20;

const sendEmail = async () => {
  if (isLoading.value) return;
  if (!contactForm.email || contactForm.email.length < 4 || !contactForm.email.includes("@")) return;
  if (!contactForm.name || contactForm.name.length < 1) return;
  if (!contactForm.message || contactForm.message.length < minMessageLength) return;
  isLoading.value = !isLoading.value;
  // Todo : Send email

  try {
    const formatMessage = contactForm.message.replace(/</g, '	&lt;').replace(/\n/g, '<br />');
    await send(import.meta.env.VITE_EMAILJS_SERVICE_ID, 'template_mtq1u3p', {
      from_name: contactForm.name,
      from_email: contactForm.email,
      message: formatMessage,
    }, import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    contactForm.name = "";
    contactForm.email = "";
    contactForm.message = "";
  } catch {
    alert("Failed to send email!")
  } finally {
    isLoading.value = false;
  }
}
</script>

<style lang="scss" scoped>
@use "@/assets/vars.scss" as *;
@use "sass:map";

.row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  &>* {
    flex: 1 1;
  }
}
</style>