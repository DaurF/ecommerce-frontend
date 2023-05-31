<template>
  <div class="catalog__list">

  </div>
</template>

<script setup lang="ts">

interface Product {
  ratingsAverage: number;
  ratingsQuantity: number;
  images: string[];
  _id: string;
  name: string;
  price: number;
  imageCover: string;
}

const products = [
  {
    ratingsAverage: 4.5,
    ratingsQuantity: 1,
    images: [
      'product-1-1',
      'product-1-2',
      'product-1-3'
    ],
    _id: '1',
    name: ''
  }
] as Product[]

</script>

<style lang="scss" scoped>
.catalog__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
</style>
