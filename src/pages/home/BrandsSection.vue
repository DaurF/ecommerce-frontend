<template>
  <section class="section-brands">
    <h3 class="heading-tertiary mb-14">Бренды</h3>
    <div class="logos">
      <img src="@/assets/img/brand-logos/amd.png" alt="AMD logo" />
      <img src="@/assets/img/brand-logos/logitech.png" alt="Logitech logo" />
      <img src="@/assets/img/brand-logos/intel.png" alt="Intel logo" />
      <img src="@/assets/img/brand-logos/nvidia.png" alt="Nvidia logo" />
      <img src="@/assets/img/brand-logos/asus.svg" alt="Asus logo" />
      <img src="@/assets/img/brand-logos/apple.png" alt="Apple logo" />
      <!--      <img src="@/assets/img/brand-logos/reebok.png" alt="Reebok logo"/>-->
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
