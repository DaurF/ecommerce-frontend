<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="grid grid-cols-8 py-10">
        <div class="col col--left">
          <p></p>
        </div>

        <div class="col col--shop">
          <h5 class="col__heading col__heading--shop">Покупки</h5>

          <div class="col__content col__content--shop">
            <a href="#" class="col__link">Все категории</a>
            <a href="#" class="col__link">Скидки</a>
          </div>
        </div>

        <div class="col col--company">
          <h5 class="col__heading col__heading--company">Компания</h5>

          <div class="col__content col__content--company">
            <a href="#" class="col__link">О нас</a>
            <a href="#" class="col__link">Контакты</a>
            <a href="#" class="col__link">Партнерская программа</a>
          </div>
        </div>

        <div class="col col--support">
          <h5 class="col__heading col__heading--support">Поддержка</h5>

          <div class="col__content col__content--support">
            <a href="#" class="col__link">FAQs</a>
            <a href="#" class="col__link">Политика Cookie</a>
            <a href="#" class="col__link">Условия использования</a>
          </div>
        </div>

        <div class="col col--payment-methods">
          <h5 class="col__heading col__heading--payment-methods">Способы оплаты</h5>

          <div class="col__content col__content--payment-methods">
            <img src="@/assets/img/payment-methods/mastercard.png" alt="Master Card" />
            <img src="@/assets/img/payment-methods/visa.png" alt="Visa" />
            <img src="@/assets/img/payment-methods/paypal.png" alt="PayPal" />
          </div>
        </div>
      </div>
      <hr class="divider" />

      <p class="copyright py-6 text-center">Copyright &copy;2023. Все права защинены</p>
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
