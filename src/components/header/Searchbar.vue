<template>
  <form class="p-input-icon-left" @submit.prevent="onSearch">
    <i class="pi pi-search" />
    <InputText v-model="term" placeholder="Поиск..." class="p-inputtext-sm" />
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import { useRouter } from 'vue-router'

const router = useRouter()
const term = ref('')

function onSearch() {
  router.push({ name: 'catalog' })
}
</script>

<style scoped>
.p-inputtext-sm {
  width: 16rem;
  font-family: 'Inter';
}
</style>
