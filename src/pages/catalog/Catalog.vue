<template>
  <div class="mb-20">
    <Breadcrumb class="breadcrumb mb-4" :home="home" :model="items"/>
    <CatalogSection/>
  </div>
</template>

<style scoped lang="scss">
.breadcrumb {
  border: none;
}
</style>

<script setup lang="ts">
import {ref} from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import CatalogSection from "./CatalogSection.vue";

const home = ref({
  icon: 'pi pi-home',
  to: {name: 'home'},
});

const items = ref([{label: 'Browse Products', to: '/catalog'}])
</script>
