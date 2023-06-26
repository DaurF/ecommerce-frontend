<template>
  <TransitionGroup name="list" tag="ul" class="flex flex-col gap-5">
    <CartListItem v-for="product in products" :key="product._id" :product="product" />
  </TransitionGroup>
</template>

<script setup lang="ts">
import CartListItem from './CartListItem.vue'
import { type Product } from '@/stores/catalogStore'

defineProps<{
  products: Product[]
}>()
</script>

<style scoped lang="scss">
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
