<template>
  <section class="section-features">
    <div class="grid grid-cols-3 mb-12">
      <h2 class="heading-secondary">Мы обеспечиваем незабываемые впечатления для наших клиентов</h2>

      <div class="border-l-4 border-l-slate-600 col-start-3 px-4 flex justify-center items-center">
        <p class="content text-sm text-slate-500">
          Мы гарантируем, что наши клиенты получат лучший опыт покупок
        </p>
      </div>
    </div>

    <FeatureList />
  </section>
</template>

<script lang="ts" setup>
import FeatureList from '@/components/feature-section/FeatureList.vue'
</script>
