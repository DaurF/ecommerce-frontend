<template>
  <div class="card">
    <form @submit.prevent="onSubmit">
      <Editor v-model="value" editorStyle="height: 320px" class="mb-4">
        <template v-slot:toolbar>
        <span class="ql-formats">
            <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
            <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
            <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
        </span>
        </template>
      </Editor>
      <Rating v-model="rating" :cancel="false" class="mb-10"></Rating>
      <div class="flex flex-wrap justify-content-between align-items-center gap-3 mt-3">
        <Button type="submit" label="Submit"/>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import Editor from 'primevue/editor'
import Button from 'primevue/button'
import Rating from 'primevue/rating'

import { ref } from 'vue'

const value = ref('')
const rating = ref()
const emit = defineEmits(['submit'])

const onSubmit = () => {
  if (value.value.length > 0 && rating) emit('submit', value.value, rating.value)
}
</script>
