<template>
  <RouterLink to="/" custom>
    <Button class="btn-cta" v-bind="$attrs" icon="pi pi-arrow-right" icon-pos="right" />
  </RouterLink>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
</script>

<style scoped>
.btn-cta {
  background-color: white !important;
  color: #475569 !important;
  font-family: Inter !important;
  font-weight: 400 !important;
}
</style>
