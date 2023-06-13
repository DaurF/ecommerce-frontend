<template>
  <form class="flex flex-col gap-6 items-center" @submit.prevent="onLogin">
    <div class="flex flex-col gap-4">
      <span class="p-input-icon-left">
        <i class="pi pi-inbox" />
        <InputText v-model="form.email" placeholder="Введите вашу почту" />
      </span>

      <div class="card flex justify-content-center">
        <Password v-model="form.password" toggleMask />
      </div>
    </div>

    <div class="card flex justify-content-center">
      <Button type="submit" label="Авторизоваться" />
    </div>
  </form>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import client from '@/services/httpClient'
import { ref } from 'vue'

const form = ref({
  email: '',
  password: ''
})

async function onLogin() {
  const res = await client.post('/users/login', {
    email: form.value.email,
    password: form.value.password
  })
  console.log(res)
}
</script>
