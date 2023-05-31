<template>
  <div class="filters">
    <h4 class="filters__title mb-3">Фильтры</h4>
    <ul class="filters__list">
      <li>
        <button @click="show.categories = !show.categories">
          <h6>Категории</h6>
          <i v-if="show.categories" class="pi pi-angle-up"></i>
          <i v-if="!show.categories" class="pi pi-angle-down"></i>
        </button>

        <ul v-if="show.categories" class="categories">
          <li v-for="category in categories" :key="category.key" class="flex gap-3">
            <Checkbox v-model="selectedCategories" :input-id="category.key" :value="category.name"/>
            <label :for="category.key">{{ category.label }}</label>
          </li>
        </ul>
      </li>

      <li>
        <button @click="show.price = !show.price">
          <h6>Цена</h6>
          <i v-if="show.price" class="pi pi-angle-up"></i>
          <i v-if="!show.price" class="pi pi-angle-down"></i>
        </button>

        <template v-if="show.price">
          <div class="p-inputgroup flex-1 mb-4">
            <span class="p-inputgroup-addon">$</span>
            <InputNumber v-model="price.min" placeholder="Минимум"/>
          </div>

          <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">$</span>
            <InputNumber v-model="price.max" placeholder="Максимум"/>
          </div>
        </template>

      </li>
    </ul>
  </div>
</template>


<script setup lang="ts">
import {reactive, ref} from "vue";
import Checkbox from 'primevue/checkbox'
import InputNumber from 'primevue/inputnumber'


const show = reactive({
  categories: true,
  price: true
})

const categories = ref([
  {name: 'computers', label: 'Компьютеры', key: 'COMPUTERS'},
  {name: 'peripherals', label: 'Периферия', key: 'PERIPHERALS'},
  {name: 'smartphones', label: 'Смартфоны', key: 'SMARTPHONES'},
  {name: 'laptops', label: 'Ноутбуки', key: 'LAPTOPS'},
])

const price = ref({
  min: null,
  max: null
})

const selectedCategories = ref(['computers'])
</script>

<style scoped lang="scss">
h6 {
  font-weight: 500;
  font-size: 1.15rem;
}

.filters {
  @apply border border-gray-200;
  padding: 1rem;
  border-radius: 7px;

  &__title {
    font-size: 1.3rem;
    font-weight: 600;
  }

  &__list {
    & > li {
      padding: 1rem 0;

    }


    button {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;

      i {
        @apply text-gray-500;
        font-size: 1.4rem;
      }
    }
  }
}

.categories {
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  @apply text-gray-500;
}


</style>

