<template>
  <section class="section-hero">
    <HeroCarousel>
      <div class="hero__text-box">
        <h1 class="heading-primary">Погрузитесь в мир электронных возможностей</h1>
        <router-link :to="{ name: 'catalog' }" class="btn-cta mb-12">
          Начать покупки
        </router-link>
        <div class="hero__paginator">
          <div class=""></div>
          <div class="hero__paginator-dot hero__paginator-dot--active"></div>
          <div class="hero__paginator-dot"></div>
          <div class="hero__paginator-dot"></div>
          <div class="hero__paginator-dot"></div>
          <div class="hero__paginator-dot"></div>
        </div>
      </div>
    </HeroCarousel>
  </section>
</template>

<script setup lang="ts">
import HeroCarousel from '@/components/hero-section/HeroCarousel.vue'
import BaseButtonCTA from '@/components/BaseButtonCTA.vue'
</script>

<style scoped lang="scss">
.hero {
  &__text-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    text-align: center;
  }

  &__paginator {
    @apply flex gap-1.5 text-center justify-center;
  }

  &__paginator-dot {
    background-color: rgb(201, 201, 201);
    border-radius: 9999px;
    width: 0.45rem;
    height: 0.45rem;
  }

  &__paginator-dot--active {
    background-color: #fff;
    box-shadow: 0 0 10px #fff;
    width: 0.5rem;
    height: 0.5rem;
  }
}

.btn-cta {
  display: inline-block;
  background-color: #fff;
  color: #475569;
  font-family: Inter, sans-serif;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 7px;
}
</style>
