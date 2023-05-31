<template>
  <span class="p-input-icon-left">
    <i class="pi pi-search" />
    <InputText v-model="term" placeholder="Поиск..." class="p-inputtext-sm" />
  </span>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputText from 'primevue/inputtext'

const term = ref('')
</script>

<style scoped>
.p-inputtext-sm {
  width: 16rem;
  font-family: 'Inter';
}
</style>
