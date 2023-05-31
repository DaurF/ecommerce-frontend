<template>
  <div class="features">
    <Feature title="Original Products">
      <template #icon>
        <ShieldCheck />
      </template>
      We provide money back guarantee if the product are not original
    </Feature>

    <Feature title="Satisfaction Guarantee">
      <template #icon>
        <FaceSmile />
      </template>
      Exchange the product you've purchased if it doesn't fit on you
    </Feature>

    <Feature title="New Arrival Everyday">
      <template #icon>
        <PlusCircle />
      </template>
      We updates our collections almost everyday
    </Feature>

    <Feature title="Fast & Free Shipping">
      <template #icon>
        <Flash />
      </template>
      We offer fast and free shipping for our loyal customers
    </Feature>
  </div>
</template>

<script setup lang="ts">
import ShieldCheck from '@/components/icons/ShieldCheck.vue'
import FaceSmile from '@/components/icons/FaceSmile.vue'
import Flash from '@/components/icons/Flash.vue'
import PlusCircle from '@/components/icons/PlusCircle.vue'
import Feature from '@/components/feature-section/Feature.vue'
</script>

<style scoped lang="scss">
.features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
}
</style>
