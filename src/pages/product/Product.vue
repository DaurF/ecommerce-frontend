<template>
  <div>
    <Breadcrumb class="breadcrumb mb-4" :home="home" :model="items" />
    <div class="grid grid-cols-2 gap-4 my-24">
      <img
        crossorigin="anonymous"
        class="mb-2 border p-4 max-h-96 justify-self-center max-w-xl"
        :src="product?.imageCover"
        alt=""
      />
      <div v-if="product">
        <h3 class="text-lg font-extrabold mb-1">
          {{ `${product.manufacturer} ${product.model}` }}
        </h3>
        <div class="flex items-start gap-1">
          <Rating class="mb-4" v-model="rating" :cancel="false" readonly />
          <span>{{ `(${product.ratingsAverage})` }}</span>
        </div>
        <h4 class="text-xl font-bold">
          {{ `${product.price} &#8376;` }}
        </h4>
        <hr class="block my-4" />
        <p>{{ product.description }}</p>
        <hr class="block my-4" />
        <BaseButton @click="checkout" v-if="loggedIn" label="Приобрести" />
        <router-link
          v-else
          class="bg-slate-800 text-white px-4 py-2 inline-block rounded-full"
          :to="{ name: 'login' }"
          >Войти для покупки</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from 'primevue/breadcrumb'
import { ref, onBeforeMount } from 'vue'
import client from '@/services/httpClient'
import Rating from 'primevue/rating'
import { useAuthStore } from '@/stores/authStore'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const authStore = useAuthStore()
const loggedIn = authStore.isLoggedIn
const product = ref()
const rating = ref(undefined)

async function checkout() {
  const res = await client.get(`/orders/checkout-session/${product.value._id}`)
  const { url } = res.data.session
  window.location = url
}

onBeforeMount(async () => {
  const response = await client.get(`/products/${props.id}`)

  product.value = {
    ...response.data.data.data,
    imageCover: `http://127.0.0.1:8000/img/${response.data.data.data.imageCover}.jpg`
  }
  rating.value = product.value.ratingsAverage

  console.log(product.value)
})

// const product = ref({
//   ...res.data.data.product,
//   imageCover: `http://127.0.0.1:8000/img/${res.data.data.product.imageCover}.jpg`
// })
// console.log(product.value.imageCover)

const home = ref({
  icon: 'pi pi-home',
  to: { name: 'home' }
})

const items = ref([
  { label: 'Browse Products', to: '/catalog' },
  { label: 'Product', to: '/' }
])
</script>

<style scoped>
.breadcrumb {
  border: none;
}
</style>
