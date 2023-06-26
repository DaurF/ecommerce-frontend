<template>
  <HeroSection class="mb-20" />
  <BrandsSection class="mb-20" />
  <FeaturesSection class="mb-20" />
  <CategoriesSection class="mb-20" />
  <PopularProductsSection class="mb-20" />
  <CTASection class="mb-24" />
</template>

<script setup lang="ts">
import HeroSection from './HeroSection.vue'
import BrandsSection from './BrandsSection.vue'
import FeaturesSection from './FeaturesSection.vue'
import CategoriesSection from './CategoriesSection.vue'
import PopularProductsSection from './PopularProductsSection.vue'
import CTASection from './CTASection.vue'
import { onBeforeMount } from 'vue'

import { getAllProductsForCart } from '@/services'

onBeforeMount(() => getAllProductsForCart())
</script>

<style scoped></style>
