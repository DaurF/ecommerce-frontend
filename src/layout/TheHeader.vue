<template>
  <header class="header">
    <router-link :to="{ name: 'home' }" class="header__logo-wrapper">
      <img src="@/assets/img/brand-logos/adidas.png" alt="Website Logo" class="header__logo"/>
    </router-link>
    <Nav/>
    <Menu/>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__logo {
    height: 1.8rem;
  }

  &__nav-link:not(&__nav-link--dropdown):hover {
    @apply text-slate-600 underline underline-offset-1 decoration-slate-600;
  }
}
</style>

<script setup lang="ts">
import Menu from '@/components/header/Menu.vue'
import Nav from '@/components/header/Nav.vue'
</script>
