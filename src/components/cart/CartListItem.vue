<template>
  <li>
    <hr />
    <div class="flex mt-6">
      <img
        crossorigin="anonymous"
        :src="product.imageCover"
        :alt="name"
        class="w-32 h-32 border rounded-3xl"
      />
      <div class="flex mt-1.5 w-full justify-between items-start">
        <h6 class="ml-5 font-semibold">{{ name }}</h6>
        <h6 class="font-semibold">{{ product.price }} &#8376;</h6>
        <div class="flex flex-col gap-3 items-center">
          <Button @click="checkout" class="flex gap-2 items-center">
            <ParkBuy />
            <span class="font-medium">Приобрести</span>
          </Button>
          <button @click="remove" class="flex gap-2 items-center">
            <TrashDelete class="text-slate-900" />
            <span class="font-semibold">Удалить</span>
          </button>
        </div>
      </div>
    </div>
  </li>
</template>
<script setup lang="ts">
import useCartStore from '@/stores/cartStore'
import { type Product } from '@/stores/catalogStore'
import { computed, onBeforeMount } from 'vue'
import client from '@/services/httpClient'
import ParkBuy from '@/components/icons/ParkBuy.vue'
import TrashDelete from '@/components/icons/TrashDelete.vue'
import Button from 'primevue/button'

const cartStore = useCartStore()

const props = defineProps<{ product: Product }>()

onBeforeMount(() => console.log(props.product))
const name = computed(() => `${props.product.manufacturer} ${props.product.model}`)

async function checkout() {
  const res = await client.get(`/orders/checkout-session/${props.product._id}`)
  const { url } = res.data.session
  window.location = url
}

async function remove() {
  try {
    const productId = props.product._id
    await client.post(`/users/removeFromCart`, { _id: productId })
    cartStore.removeProductById(productId)
  } catch (err) {
    console.error(err)
  }
}
</script>
<style scoped lang="scss"></style>
