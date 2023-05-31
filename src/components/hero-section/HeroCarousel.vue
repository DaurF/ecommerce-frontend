<template>
  <div class="hero-carousel">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.hero-carousel {
  height: 32rem;
  background-image: linear-gradient(rgba(34, 34, 34, 0.6), rgba(34, 34, 34, 0.6)),
    url(@/assets/img/hero.jpg);
  background-size: cover;
  background-position: center;
  border-radius: 9px;
  color: white;
}
</style>
