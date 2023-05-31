import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Catalog from "@/pages/catalog/Catalog.vue";
import NotFound from "@/pages/NotFound.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
