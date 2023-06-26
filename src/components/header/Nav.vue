<template>
  <nav class="header__nav text-sm">
    <ul class="header__nav-links flex gap-6">
      <!-- TODO dropdown cmp -->
      <!-- <li>
        <a
          href="#"
          class="header__nav-link header__nav-link--dropdown flex gap-1.5 items-center hover:"
        >
          <span>Магазин</span>
        </a>
      </li> -->
      <NavLink :link="{ name: 'home' }">Магазин</NavLink>
      <NavLink :link="{}">Новинки</NavLink>
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
