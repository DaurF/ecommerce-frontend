<script setup lang="ts"></script>

<template>
  <div class="container mx-auto 2xl:px-20">
    <TheHeader class="mb-8" />
    <router-view />
  </div>
  <TheFooter />
</template>

<script setup lang="ts">
import TheHeader from '@/layout/TheHeader.vue'
import TheFooter from '@/layout/TheFooter.vue'
</script>

<style lang="scss">
@import '@/assets/theme.css';
@import 'primevue/resources/primevue.min.css';
@import 'primeicons/primeicons.css';

@import '@/assets/main.scss';
</style>
