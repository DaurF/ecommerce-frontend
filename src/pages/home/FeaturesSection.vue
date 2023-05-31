<template>
  <section class="section-features">
    <div class="grid grid-cols-3 mb-12">
      <h2 class="heading-secondary">We provide best customer experiences</h2>

      <div class="border-l-4 border-l-slate-600 col-start-3 px-4 flex justify-center items-center">
        <p class="content text-sm text-slate-500">
          We ensure our customers have the best shopping experience
        </p>
      </div>
    </div>

    <FeatureList />
  </section>
</template>

<script lang="ts" setup>
import FeatureList from '@/components/feature-section/FeatureList.vue'
</script>
