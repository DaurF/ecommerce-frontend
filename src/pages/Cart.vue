<template>
  <div class="">
    <h3 class="text-2xl font-bold mb-8">Корзина</h3>
    <CartList v-if="products.length" :products="products" class="d mb-72" />
    <h5 v-else class="mb-96">В корзине ничего не найдено</h5>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import { getAllProductsForCart } from '@/services'
import useCartStore from '@/stores/cartStore'
import CartList from '@/components/cart/CartList.vue'

const cartStore = useCartStore()
onBeforeMount(async () => await getAllProductsForCart())
const products = computed(() => cartStore.allProducts)
</script>
