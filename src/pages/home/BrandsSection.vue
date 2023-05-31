<template>
  <section class="section-brands">
    <h3 class="heading-tertiary mb-14">Бренды</h3>
    <div class="logos">
      <img src="@/assets/img/brand-logos/new-balance.png" alt="New Balance logo" />
      <img src="@/assets/img/brand-logos/nike.png" alt="Nike logo" />
      <img src="@/assets/img/brand-logos/puma.png" alt="Puma logo" />
      <img src="@/assets/img/brand-logos/adidas.png" alt="Adidas logo" />
      <img src="@/assets/img/brand-logos/under-armour.png" alt="Under Armour logo" />
      <img src="@/assets/img/brand-logos/vans.png" alt="Vans logo" />
      <img src="@/assets/img/brand-logos/reebok.png" alt="Reebok logo" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.logos {
  display: flex;
  justify-content: space-between;
  img {
    height: 2.4rem;
    filter: brightness(0);
    opacity: 60%;
  }
}
</style>
