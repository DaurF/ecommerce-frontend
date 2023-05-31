<template>
  <div class="menu">
    <SearchBar />
    <a href="#" class="menu__btn">
      <ShoppingCart />
    </a>
    <a href="#" class="menu__btn">
      <User />
    </a>
  </div>
</template>

<style scoped lang="scss">
.menu {
  display: flex;
  gap: 1.5rem;
  align-items: center;

  &__btn:hover {
    @apply text-slate-400;
  }
}
</style>

<script setup lang="ts">
import User from '@/components/icons/User.vue'
import ShoppingCart from '@/components/icons/ShoppingCart.vue'
import SearchBar from './Searchbar.vue'
</script>
