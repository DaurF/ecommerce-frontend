<template>
  <div class="mb-16">
    <Breadcrumb class="breadcrumb mb-4" :home="home" :model="items"/>
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
          <Rating class="mb-4" v-model="rating" :cancel="false" readonly/>
          <span>{{ `(${product.ratingsAverage})` }}</span>
        </div>
        <h4 class="text-xl font-bold">
          {{ `${product.price} &#8376;` }}
        </h4>
        <hr class="block my-4"/>
        <p>{{ product.description }}</p>
        <hr class="block my-4"/>
        <BaseButton @click="checkout" v-if="loggedIn" label="Приобрести"/>
        <router-link
            v-else
            class="bg-slate-800 text-white px-4 py-2 inline-block rounded-full"
            :to="{ name: 'login' }"
        >Войти для покупки
        </router-link
        >
      </div>
    </div>
    <div class="reviews">
      <h3 class="font-bold text-2xl mb-5">Отзывы</h3>
      <div v-for="review in reviews" :key="review.id" class="review">

        <h6 class="review__author font-extrabold mb-1">{{ review.user.name }}</h6>
        <Rating class="mb-1" v-model="review.rating" :cancel="false" readonly/>
        <p class="review__content">{{ review.review }}</p>

      </div>

      <InputReview @submit="onAddReview" class="mt-10"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from 'primevue/breadcrumb'
import {ref, onBeforeMount} from 'vue'
import client from '@/services/httpClient'
import Rating from 'primevue/rating'
import {useAuthStore} from '@/stores/authStore'
import InputReview from '@/components/product/InputReview.vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const authStore = useAuthStore()
const loggedIn = authStore.isLoggedIn
const product = ref()
const rating = ref(undefined);
const reviews = ref()

async function checkout() {
  const res = await client.get(`/orders/checkout-session/${product.value._id}`)
  const {url} = res.data.session
  window.location = url
}

onBeforeMount(async () => {
  const response = await client.get(`/products/${props.id}`)

  product.value = {
    ...response.data.data.data,
    imageCover: `http://127.0.0.1:8000/img/${response.data.data.data.imageCover}.jpg`
  }
  rating.value = product.value.ratingsAverage

  const reviewsResponse = await client.get(`/products/${props.id}/reviews`);
  reviews.value = reviewsResponse.data.data.data
  console.log(reviews.value)

})

// const product = ref({
//   ...res.data.data.product,
//   imageCover: `http://127.0.0.1:8000/img/${res.data.data.product.imageCover}.jpg`
// })
// console.log(product.value.imageCover)

const home = ref({
  icon: 'pi pi-home',
  to: {name: 'home'}
})

const items = ref([
  {label: 'Browse Products', to: '/catalog'},
  {label: 'Product', to: '/'}
])

async function onAddReview(text: string, rating: number) {
  const review = text.replace(/<\/?[^>]+(>|$)/g, "");
  const response = await client.post(`/products/${props.id}/reviews`, {
    rating,
    review
  })
  console.log(response)
}
</script>

<style scoped>
.breadcrumb {
  border: none;
}

.review:not(:last-of-type) {
  margin-bottom: 2rem;
}
</style>
