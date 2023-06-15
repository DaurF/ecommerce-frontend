<template>
  <ul class="catalog__list">
    <li v-for="product in products" :key="product._id">
      <router-link :to="{ name: 'product', params: { id: product._id } }">
        <Card>
          <template #header>
            <img
              crossorigin="anonymous"
              class="mb-2"
              :src="product.imageCover"
              :alt="product.model"
            />
          </template>
          <template #title>
            {{ `${product.manufacturer} ${product.model}` }}
          </template>
          <template #content>
            <span class="product-price">${{ product.price }}</span>
          </template>

          <!-- <article class="catalog__item">
              <div class="flex justify-between">
                <h6 class="product-title"></h6>
                <span class="product-price">${{ product.price }}</span>
              </div>
            </article> -->
        </Card>
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { type Product } from '@/stores/catalogStore'
import { onMounted } from 'vue'
import Card from 'primevue/card'

const props = defineProps<{
  products: Product[]
}>()

onMounted(() => {
  console.log(props.products)
})
</script>

<style lang="scss" scoped>
.catalog {
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  &__item {
    img {
      height: 18rem;
      object-fit: cover;
      border-radius: 7px;
    }
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
