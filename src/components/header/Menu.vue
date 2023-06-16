<template>
  <div class="menu">
    <SearchBar />
    <div class="flex gap-2" v-if="isLoggedIn">
      <router-link to="/cart" class="menu__btn">
        <ShoppingCart />
      </router-link>
      <router-link to="/profile" class="menu__btn">
        <User />
      </router-link>
      <button @click="onLogout">
        <Logout />
      </button>
    </div>
    <div class="flex gap-2" v-else>
      <router-link to="/auth" class="menu__btn border border-black"> Войти </router-link>
      <router-link to="/auth/signup" class="menu__btn border bg-blue-700 text-white">
        Зарегистрироваться
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import User from '@/components/icons/User.vue'
import Logout from '@/components/icons/Logout.vue'
import ShoppingCart from '@/components/icons/ShoppingCart.vue'
import SearchBar from './Searchbar.vue'
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()
const isLoggedIn = authStore.isLoggedIn

function onLogout() {
  localStorage.removeItem('jwt')
  localStorage.removeItem('userRole')
  location.reload()
}
</script>

<style scoped lang="scss">
.menu {
  display: flex;
  gap: 1.5rem;
  align-items: center;

  &__btn {
    font-size: 0.9rem;
    padding: 0.3rem 0.6rem;
    border-radius: 100px;

    &:hover {
      @apply text-slate-400;
    }
  }
}
</style>
