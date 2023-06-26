<template>
  <Toast />
  <form class="flex flex-col gap-6 items-center" @submit.prevent="onLogin">
    <div class="flex flex-col gap-4">
      <span class="p-input-icon-left">
        <i class="pi pi-inbox" />
        <InputText v-model="form.email" placeholder="Введите вашу почту" />
      </span>

      <div class="card flex justify-content-center">
        <Password
          :feedback="false"
          v-model="form.password"
          placeholder="Введите пароль"
          toggleMask
        />
      </div>
    </div>

    <div class="card flex justify-content-center">
      <Button :loading="isLoading" type="submit" label="Авторизоваться" />
    </div>
    <p class="text-sm">
      Нету аккаунта?
      <router-link :to="{ name: 'signup' }" class="text-gray-400 hover:underline"
        >Зарегистрироваться</router-link
      >
    </p>
  </form>
</template>

<script setup lang="ts">
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import client from '@/services/httpClient'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuthStore from '@/stores/authStore'

const authStore = useAuthStore()
const router = useRouter()
const toast = useToast()

const isLoading = ref(false)
const form = ref({
  email: '',
  password: ''
})

async function onLogin() {
  isLoading.value = true

  try {
    const res = await client.post('/users/login', {
      email: form.value.email,
      password: form.value.password
    })
    router.replace({ name: 'home' })

    authStore.setToken(res.data.token)
    authStore.setUserRole(res.data.data.user.role)

    location.reload()
  } catch (err: any) {
    show(err.response.data.message)
  } finally {
    isLoading.value = false
  }
}

function show(msg: string) {
  toast.add({ severity: 'error', summary: 'Ошибка', detail: msg, life: 3000 })
}
</script>
