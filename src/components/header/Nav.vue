<template>
  <nav class="header__nav text-sm">
    <ul class="header__nav-links flex gap-10">
      <NavLink :link="{ name: 'home' }">Магазин</NavLink>
      <NavLink :link="{ name: 'new-products' }">Новинки</NavLink>
      <NavLink :link="{ name: 'brands' }">Бренды</NavLink>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import NavLink from './NavLink.vue'
</script>

<style scoped lang="scss">
.header__nav-link--dropdown:hover {
  @apply text-slate-600;
}
</style>
