<template>
  <img :src="profilePictureUrl" class="avatar" />
</template>

<script lang="ts" setup>
const profilePictureUrl = 'https://themes.3rdwavemedia.com/instance/bs5/2.0/assets/images/profile.jpg';
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
}
</style>