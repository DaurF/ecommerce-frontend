<template>
  <section class="section-popular-products">
    <h2 class="heading-secondary">Популярное</h2>
    <div class="products">
      <figure class="product">
        <router-link to="/" class="product__img-wrapper">
          <img src="@/assets/img/popular-products/popular-product-1.webp" alt="Popular product 1"/>
        </router-link>
        <div class="flex justify-between">
          <div>
            <p class="product__name">Air Jordan 11 CMFT Low</p>
            <span class="product__price">105 400&#8376;</span>
          </div>
        </div>
      </figure>

      <figure class="product">
        <router-link to="/" class="product__img-wrapper">
          <img src="@/assets/img/popular-products/popular-product-1.webp" alt="Popular product 1"/>
        </router-link>
        <div class="flex justify-between">
          <div>
            <p class="product__name">Air Jordan 11 CMFT Low</p>
            <span class="product__price">105 400&#8376;</span>
          </div>
        </div>
      </figure>

      <figure class="product">
        <router-link to="/" class="product__img-wrapper">
          <img src="@/assets/img/popular-products/popular-product-1.webp" alt="Popular product 1"/>
        </router-link>
        <div class="flex justify-between">
          <div>
            <p class="product__name">Air Jordan 11 CMFT Low</p>
            <span class="product__price">105 400&#8376;</span>
          </div>
        </div>
      </figure>
    </div>
  </section>
</template>

<style scoped lang="scss">
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  column-gap: 2rem;
}

.product {
  &__img-wrapper {
    display: inline-block;
    height: 30rem;
    overflow: hidden;
    border-radius: 11px;
    margin-bottom: 1rem;

    img {
      margin-top: -4rem;
    }
  }

  &__name {
    letter-spacing: -0.5px;
    margin-bottom: 0.2rem;
  }

  &__price {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.8px;
  }
}
</style>
