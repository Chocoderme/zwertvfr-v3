<template>
  <div style="min-height: 100vh">
    <NavigationBar />
    <main>
      <RouterView v-slot="{ Component }">
        <!-- <transition name="fade-in" mode="out-in"> -->
        <component :is="Component" />
        <!-- </transition> -->
      </RouterView>
    </main>
    <!-- <Footer /> -->
    <!-- <ElBacktop /> -->
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
main {
  position: relative;
}
</style>
