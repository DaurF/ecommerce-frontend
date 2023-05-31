<template>
  <section class="categories-section">
    <h2 class="heading-secondary">Категории</h2>

    <!-- TODO extract to distinct components -->
    <div class="categories">
      <article class="category">
        <img src="@/assets/img/categories/best-seller.jpg" alt="Category Best Seller" />
        <Button class="btn-cta" icon="pi pi-arrow-right" label="Best Seller" icon-pos="right" />
      </article>

      <article class="category">
        <img src="@/assets/img/categories/best-seller.jpg" alt="Category Best Seller" />
        <Button class="btn-cta" icon="pi pi-arrow-right" label="Best Seller" icon-pos="right" />
      </article>

      <article class="category">
        <img src="@/assets/img/categories/best-seller.jpg" alt="Category Best Seller" />
        <Button class="btn-cta" icon="pi pi-arrow-right" label="Best Seller" icon-pos="right" />
      </article>

      <article class="category">
        <img src="@/assets/img/categories/best-seller.jpg" alt="Category Best Seller" />
        <Button class="btn-cta" icon="pi pi-arrow-right" label="Best Seller" icon-pos="right" />
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
</script>

<style scoped lang="scss">
.categories {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
}

.category {
  position: relative;
  overflow: hidden;
  border-radius: 9px;

  &:hover {
    img {
      transform: scale(1.2);
    }
  }

  img {
    height: 18rem;
    background-size: cover;

    transition: all 0.3s ease-in;
    filter: brightness(0.8);
  }
}

.btn-cta {
  background-color: white !important;
  color: #475569 !important;
  font-family: Inter !important;
  font-weight: 400 !important;
  transition: all 0.2s;
  @apply absolute bottom-[10%] left-1/2 -translate-x-1/2 w-3/5 py-2.5 border-0;

  box-shadow: 0 3px 20px rgb(85, 85, 85);

  &:active {
    transform: translate(-50%, 3px);
    box-shadow: 0 1px 20px rgb(69, 69, 69);
  }
}
</style>
