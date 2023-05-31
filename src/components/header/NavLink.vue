<template>
  <li>
    <a href="#" class="header__nav-link">
      <slot />
    </a>
  </li>
</template>

<style scoped lang="scss">
.header__nav-link:hover {
  @apply text-slate-600 underline underline-offset-1 decoration-slate-600;
}
</style>
