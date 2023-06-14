<template>
  <div class="menu">
    <SearchBar />
    <router-link to="/cart" class="menu__btn">
      <ShoppingCart />
    </router-link>
    <router-link to="/auth" class="menu__btn">
      <User />
    </router-link>
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
