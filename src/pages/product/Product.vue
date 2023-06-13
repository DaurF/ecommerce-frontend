<template>
  <div>
    <Breadcrumb class="breadcrumb mb-4" :home="home" :model="items" />
    <div class="grid grid-cols-2">
      <img crossorigin="anonymous" class="mb-2" :src="product.imageCover" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from 'primevue/breadcrumb'
import { ref } from 'vue'
import client from '@/services/httpClient'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const res = await client.get(`/products/${props.id}`)
const product = ref(res.data.data.product)
console.log(product.value.imageCover)

const home = ref({
  icon: 'pi pi-home',
  to: { name: 'home' }
})

const items = ref([
  { label: 'Browse Products', to: '/catalog' },
  { label: 'Product', to: '/' }
])
</script>

<style scoped>
.breadcrumb {
  border: none;
}
</style>
