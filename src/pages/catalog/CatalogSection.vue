<template>
  <section class="catalog-section">
    <aside>
      <CatalogFilters/>
    </aside>
    <CatalogList/>
  </section>
</template>

<script setup lang="ts">
import CatalogFilters from "@/components/catalog/CatalogFilters.vue";
import CatalogList from '@/components/catalog/CatalogList.vue'
</script>

<style scoped lang="scss">
.catalog-section {
  display: grid;
  grid-template-columns: 20rem 1fr;
}
</style>
