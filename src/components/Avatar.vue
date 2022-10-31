<template>
  <img :src="ProfilePictureUrl" class="avatar" />
</template>

<script lang="ts" setup>
import ProfilePictureUrl from "@/assets/imgs/elliott_profile.jpg";
</script>

<style lang="scss" scoped>
.avatar {
  display: inline-block;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  vertical-align: middle;
  box-sizing: border-box;
  text-align: center;
  object-fit: cover;
}
</style>