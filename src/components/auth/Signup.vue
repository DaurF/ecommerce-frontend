<template>
  <Toast />
  <form class="flex flex-col gap-6 items-center" @submit.prevent="onSignup">
    <div class="flex flex-col gap-4">
      <span class="p-input-icon-left">
        <i class="pi pi-user" />
        <InputText v-model="form.name" placeholder="Введите ваше имя" />
      </span>

      <span class="p-input-icon-left">
        <i class="pi pi-inbox" />
        <InputText v-model="form.email" placeholder="Введите вашу почту" />
      </span>

      <div class="card flex justify-content-center">
        <Password v-model="form.password" placeholder="Введите пароль" toggleMask />
      </div>

      <div class="card flex justify-content-center">
        <Password v-model="form.passwordConfirm" placeholder="Подтвердите пароль" toggleMask />
      </div>
    </div>

    <div class="card flex justify-content-center">
      <Button :loading="isLoading" type="submit" label="Создать аккаунт" />
    </div>

    <p class="text-sm">
      Уже имеется аккаунт?
      <router-link class="text-gray-400 hover:underline" :to="{ name: 'login' }"
        >Авторизоваться</router-link
      >
    </p>
  </form>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import client from '@/services/httpClient'
import { ref } from 'vue'
import useAuthStore from '@/stores/authStore'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'
import { useRouter } from 'vue-router'

const router = useRouter()
const toast = useToast()
const authStore = useAuthStore()

const isLoading = ref(false)
const form = ref({
  name: '',
  email: '',
  password: '',
  passwordConfirm: ''
})

async function onSignup() {
  isLoading.value = true
  try {
    const res = await client.post('/users/signup', {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
      passwordConfirm: form.value.passwordConfirm
    })

    authStore.setToken(res.data.token)
    authStore.setUserRole(res.data.data.user.role)
    router.replace({ name: 'home' })

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
