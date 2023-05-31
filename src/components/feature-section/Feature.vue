<template>
  <div class="feature">
    <span class="feature__icon-wrapper">
      <slot name="icon" />
    </span>
    <p class="feature__title">{{ title }}</p>
    <p class="feature__summary">
      <slot>Feature Summary</slot>
    </p>
  </div>
</template>

<style scoped lang="scss">
.feature {
  &__icon-wrapper {
    @apply inline-block p-3 bg-neutral-100 rounded-lg mb-2;
  }

  &__title {
    font-weight: 600;
    margin-bottom: 0.4rem;
  }

  &__summary {
    @apply text-slate-500;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.3px;
  }
}
</style>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
