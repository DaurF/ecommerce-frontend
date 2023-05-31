<template>
  <router-link :to="to">
    <Button class="btn-cta" v-bind="$attrs" icon="pi pi-arrow-right" icon-pos="right"/>
  </router-link>
</template>

<script setup lang="ts">
import Button from 'primevue/button';

defineProps<{
  to: object;
}>()
</script>

<style scoped>

</style>
