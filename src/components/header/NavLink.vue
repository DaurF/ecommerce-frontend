<template>
  <li>
    <router-link :to="link" class="header__nav-link">
      <slot />
    </router-link>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  link: object
}>()
</script>

<style scoped lang="scss">
.header__nav-link:hover {
  @apply text-slate-600 underline underline-offset-1 decoration-slate-600;
}
</style>
