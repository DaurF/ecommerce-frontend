<template>
  <main class="mb-80">
    <h1 class="heading-tertiary mb-16">Профиль</h1>
    <p class="text-lg">
      Псевдоним: <span class="font-semibold">{{ user.name }}</span>
    </p>
    <p class="text-lg">
      Email: <span class="font-semibold">{{ user.email }}</span>
    </p>
  </main>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import client from '@/services/httpClient'

const user = ref()

onBeforeMount(async () => {
  const response = await client.get('/users/me')
  const { name, email } = response.data.data.data
  user.value = { name, email }
})
</script>

<style scoped lang="scss"></style>
