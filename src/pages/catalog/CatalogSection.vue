<template>
  <section class="catalog-section">
    <aside>
      <CatalogFilters/>
    </aside>
    <CatalogList :products="products"/>
  </section>
</template>

<script setup lang="ts">
import CatalogFilters from "@/components/catalog/CatalogFilters.vue";
import CatalogList from '@/components/catalog/CatalogList.vue'
import {getAllProducts} from '@/services/catalog';
import {useCatalogStore} from "@/stores/catalogStore";
import {computed} from "vue";

getAllProducts()

const catalogStore = useCatalogStore();
const products = computed(() => catalogStore.prods)
</script>

<style scoped lang="scss">
.catalog-section {
  display: grid;
  grid-template-columns: 20rem 1fr;
  column-gap: 1.5rem;
}
</style>
