import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home/Home.vue'
const Catalog = () => import('@/pages/catalog/Catalog.vue')

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/catalog',
      name: 'Catalog',
      component: Catalog
    }
  ]
})
