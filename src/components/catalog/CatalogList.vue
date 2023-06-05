<template>
  <ul class="catalog__list">
    <li v-for="product in products" :key="product._id">
      <router-link to="/">
        <article class="catalog__item">
          <img
            class="mb-2"
            :src="product.imageCover"
            alt="">
          <div class="flex justify-between">
            <h6 class="product-title">{{ product.name }}</h6>
            <span class="product-price">${{ product.price }}</span>
          </div>
        </article>
      </router-link>

    </li>
  </ul>
</template>


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

<script setup lang="ts">
import {Product} from '@/stores/catalogStore'

const props = defineProps<{
  products: Product[]
}>();
</script>
