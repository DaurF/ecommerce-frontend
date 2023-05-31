<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="grid grid-cols-8 py-10">
        <div class="col col--left">
          <p>Selling high-quality, stylish clothes</p>
        </div>

        <div class="col col--shop">
          <h5 class="col__heading col__heading--shop">Shop</h5>

          <div class="col__content col__content--shop">
            <a href="#" class="col__link">All Collections</a>
            <a href="#" class="col__link">Winter Edition</a>
            <a href="#" class="col__link">Discount</a>
          </div>
        </div>

        <div class="col col--company">
          <h5 class="col__heading col__heading--company">Company</h5>

          <div class="col__content col__content--company">
            <a href="#" class="col__link">About us</a>
            <a href="#" class="col__link">Contact</a>
            <a href="#" class="col__link">Affiliates</a>
          </div>
        </div>

        <div class="col col--support">
          <h5 class="col__heading col__heading--support">Support</h5>

          <div class="col__content col__content--support">
            <a href="#" class="col__link">FAQs</a>
            <a href="#" class="col__link">Cookie Policy</a>
            <a href="#" class="col__link">Terms of Use</a>
          </div>
        </div>

        <div class="col col--payment-methods">
          <h5 class="col__heading col__heading--payment-methods">Payment methods</h5>

          <div class="col__content col__content--payment-methods">
            <img src="@/assets/img/payment-methods/mastercard.png" alt="Master Card" />
            <img src="@/assets/img/payment-methods/visa.png" alt="Visa" />
            <img src="@/assets/img/payment-methods/paypal.png" alt="PayPal" />
          </div>
        </div>
      </div>
      <hr class="divider" />

      <p class="copyright py-6 text-center">Copyright &copy;2022 Даурен. Все права защинены</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  @apply bg-slate-200 text-sm;

  &__content {
    @apply container mx-auto 2xl:px-20;
  }
}

.copyright {
  @apply text-slate-500;
}

.col {
  &--left,
  &__content {
    @apply text-slate-500;
  }

  &__heading,
  &__link {
    letter-spacing: 0.3px;
  }

  &__heading {
    @apply text-slate-700;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  &__link {
    display: block;
    margin-bottom: 0.5rem;
    transition: all 0.2s;

    &:hover {
      @apply text-slate-700;
    }
  }

  &--left {
    grid-column: 1 / 3;
    align-self: center;
  }

  &--shop {
    grid-column: 4 / 5;
  }

  &__content--payment-methods {
    display: flex;
    gap: 1rem;

    img {
      height: 1rem;
      margin-top: 0.5rem;
    }
  }
}

.divider {
  display: block;
  height: 1.5px;
  background-color: #bababa;
}
</style>
