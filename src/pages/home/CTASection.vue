<template>
  <section class="section-cta">
    <div class="offer mb-20">
      <img src="@/assets/img/limited-offer.jpg" alt="Limited Offer picture" />
      <div class="offer__text-content">
        <span class="uppercase text-slate-500 text-sm tracking-widest mb-1"
          >ОГРАНИЧЕННОЕ ПРЕДЛОЖЕНИЕ</span
        >
        <h3 class="offer__title mb-8">Скидка 35% только в эту пятницу и получи подарок</h3>
        <BaseButtonCTA :to="{ name: 'home' }" label="Получить" />
      </div>
    </div>

    <div class="subscription">
      <h3 class="subscription__title mb-3">
        Подпишитесь на нашу рассылку, чтобы получать обновления наших последних коллекций
      </h3>
      <p class="subscription__sub mb-7">
        Получите скидку 20% на первый заказ, просто подписавшись на нашу рассылку
      </p>

      <div class="flex gap-2 mb-4">
        <span class="p-input-icon-left">
          <i class="pi pi-inbox" />
          <InputText placeholder="Введите вашу почту" />
        </span>
        <BaseButton label="Подписаться" />
      </div>

      <span class="text-[0.8rem] text-slate-500">Вы можете отписаться в любое время.</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButtonCTA from '@/components/BaseButtonCTA.vue'
import BaseButton from '@/components/BaseButton.vue'
import InputText from 'primevue/inputtext'
</script>

<style scoped lang="scss">
.offer {
  display: grid;
  grid-template-columns: 2fr 3fr;
  @apply bg-slate-900;
  border-radius: 9px;
  overflow: hidden;

  &__title {
    font-size: 3rem;
    line-height: 1.12;
    font-weight: 600;
    letter-spacing: 1px;
  }

  &__text-content {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 0 2rem;
    align-items: flex-start;
  }
}

.subscription {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40rem;

  &__title {
    font-size: 1.6rem;
    font-weight: 700;
    text-align: center;
    line-height: 1.4;
  }

  &__sub {
    @apply text-slate-500 font-semibold text-sm;
  }
}
</style>
