<template>
  <div class="features">
    <Feature title="Оригинальные продукты">
      <template #icon>
        <ShieldCheck />
      </template>
      Мы предоставляем гарантию возврата денег, если продукты не являются оригинальными
    </Feature>

    <Feature title="Гарантия удовлетворенности">
      <template #icon>
        <FaceSmile />
      </template>
      Вы можете обменять товар, который вы приобрели, если он не подходит вам по размеру
    </Feature>

    <Feature title="Ежедневное поступление новых товаров">
      <template #icon>
        <PlusCircle />
      </template>
      Мы обновляем наши коллекции практически каждый день.
    </Feature>

    <Feature title="Быстрая и бесплатная доставка">
      <template #icon>
        <Flash />
      </template>
      Мы предлагаем быструю и бесплатную доставку для наших постоянных клиентов.
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
