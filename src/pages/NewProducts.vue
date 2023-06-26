<template>
  <main class="mb-10">
    <h1 class="heading-tertiary mb-10">Новинки</h1>
    <ul class="new-products">
      <li v-for="product in products" :key="product._id">
        <router-link :to="{ name: 'product', params: { id: product._id } }">
          <Card>
            <template #header>
              <img
                crossorigin="anonymous"
                class="h-44 object-cover mx-auto"
                :src="product.imageCover"
                :alt="product.model"
              />
            </template>
            <template #title>
              <span class="text-xl truncate">{{ `${product.manufacturer} ${product.model}` }}</span>
            </template>
            <template #content>
              <span class="product-price">{{ product.price }} &#8376;</span>
            </template>
          </Card>
        </router-link>
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import client from '@/services/httpClient'
import { type Product, setImageCover } from '@/stores/catalogStore'
import Card from 'primevue/card'

const products = ref<Product[]>([])

onBeforeMount(async () => {
  const response = await client('/products?sort=-createdAt&limit=3')
  products.value = response.data.data.data.map(setImageCover)
})
</script>

<style scoped lang="scss">
.new-products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  img {
    height: 18rem;
    object-fit: cover;
    border-radius: 7px;
  }
}

.product {
  &-title {
    font-size: 0.9rem;
  }

  &-price {
    font-size: 1.2rem;
    font-weight: 700;
  }
}
</style>
