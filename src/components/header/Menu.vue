<template>
  <div class="menu">
    <SearchBar />
    <div class="flex" v-if="isLoggedIn">
      <router-link to="/cart" class="menu__btn">
        <ShoppingCart />
      </router-link>
      <router-link to="/profile" class="menu__btn ml-2.5">
        <User />
      </router-link>
      <button @click="onLogout" class="ml-4">
        <Logout />
      </button>
    </div>
    <div class="flex gap-2" v-else>
      <router-link to="/auth" class="menu__btn border border-gray-400 hover:bg-slate-100">
        Войти
      </router-link>
      <router-link
        to="/auth/signup"
        class="menu__btn border bg-blue-700 text-white hover:bg-blue-600"
      >
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
import useAuthStore from '@/stores/authStore'

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
    padding: 0.4rem 0.8rem;
    border-radius: 100px;
    transition: all 0.2s;
  }
}
</style>
