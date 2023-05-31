<template>
  <div class="flex justify-content-center">
    <Breadcrumb class="breadcrumb" :home="home" :model="items" />
  </div>
  <div class="flex">
    <aside>
      <Filter />
    </aside>
    <main></main>
  </div>
</template>

<style scoped lang="scss">
.breadcrumb {
  border: none;
}
</style>

<script setup lang="ts">
import Breadcrumb from 'primevue/breadcrumb'
import { ref } from 'vue'

const home = ref({
  icon: 'pi pi-home',
  to: '/'
})
const items = ref([{ label: 'Browse Products', to: '/catalog' }])
</script>
