<template>
  <div class="mb-16">
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
        <template v-if="loggedIn">
          <Button @click="addToCart" v-if="!productInCart" class="flex gap-2 items-start">
            <ShoppingCart />
            <span class="font-medium">Добавить в корзину</span>
          </Button>
          <Button @click="remove" v-else class="flex gap-2 items-center">
            <TrashDelete class="text-white" />
            <span class="font-semibold">Удалить из корзины</span>
          </Button>
        </template>

        <router-link
          v-else
          class="bg-slate-800 text-white px-4 py-2 inline-block rounded-full"
          :to="{ name: 'login' }"
          >Войти для покупки
        </router-link>
      </div>
    </div>
    <div class="reviews">
      <h3 class="font-bold text-2xl mb-5">Отзывы</h3>
      <template v-if="reviews.length > 0">
        <TransitionGroup name="list" tag="ul">
          <li v-for="review in reviews" :key="review.id" class="review">
            <h6 class="review__author font-extrabold mb-1">{{ review.user.name }}</h6>
            <Rating class="mb-1" v-model="review.rating" :cancel="false" readonly />
            <p class="review__content">{{ review.review }}</p>
          </li>
        </TransitionGroup>
      </template>
      <h6 v-else>Отзывов не найдено</h6>

      <InputReview @submit="onAddReview" class="mt-10" />
    </div>
  </div>
</template>

<script setup lang="ts">
import client from '@/services/httpClient'
import { ref, onBeforeMount, computed } from 'vue'
import useAuthStore from '@/stores/authStore'
import Breadcrumb from 'primevue/breadcrumb'
import Rating from 'primevue/rating'
import InputReview from '@/components/product/InputReview.vue'
import Button from 'primevue/button'
import ShoppingCart from '@/components/icons/ShoppingCart.vue'
import { useRouter } from 'vue-router'
import useCartStore from '@/stores/cartStore'
import TrashDelete from '@/components/icons/TrashDelete.vue'
import { getAllReviewsOnProduct } from '@/services'
import useReviewsStore from '@/stores/reviewsStore'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const reviewsStore = useReviewsStore()
const authStore = useAuthStore()
const loggedIn = authStore.isLoggedIn
const product = ref()
const rating = ref(undefined)
const reviews = computed(() => reviewsStore.allReviews)
const cartStore = useCartStore()
const router = useRouter()

async function addToCart() {
  try {
    await client.post(`/users/addToCart`, { _id: product.value._id })
    router.push({ name: 'cart' })
  } catch (err) {
    console.error(err)
  }
}

async function remove() {
  try {
    const productId = props.id
    await client.post(`/users/removeFromCart`, { _id: productId })
    cartStore.removeProductById(productId)
  } catch (err) {
    console.error(err)
  }
}

onBeforeMount(async () => {
  const response = await client.get(`/products/${props.id}`)

  product.value = {
    ...response.data.data.data,
    imageCover: `http://127.0.0.1:8000/img/${response.data.data.data.imageCover}.jpg`
  }
  rating.value = product.value.ratingsAverage

  await getAllReviewsOnProduct(props.id)
})

const productInCart = computed(() => cartStore.productInCart(props.id))

const home = ref({
  icon: 'pi pi-home',
  to: { name: 'home' }
})

const items = ref([
  { label: 'Browse Products', to: '/catalog' },
  { label: 'Product', to: '/' }
])

async function onAddReview(text: string, rating: number) {
  const reviewText = text.replace(/<\/?[^>]+(>|$)/g, '')

  try {
    const response = await client.post(`/products/${props.id}/reviews`, {
      rating,
      review: reviewText
    })

    console.log(response)

    reviewsStore.addReview(response.data.data.data)
  } catch (err) {
    console.error(err)
  }
}
</script>

<style scoped>
.breadcrumb {
  border: none;
}

.review:not(:last-of-type) {
  margin-bottom: 2rem;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
