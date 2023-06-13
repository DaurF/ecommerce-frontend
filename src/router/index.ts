import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Catalog from '@/pages/catalog/Catalog.vue'
import Auth from '@/pages/auth/Auth.vue'
import NotFound from '@/pages/NotFound.vue'
import Login from '@/components/auth/Login.vue'
import Signup from '@/components/auth/Signup.vue'
import Product from '@/pages/product/Product.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth,
    children: [
      {
        path: '',
        name: 'login',
        component: Login
      },
      {
        path: 'signup',
        name: 'signup',
        component: Signup
      }
    ]
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '/products/:id',
    name: 'product',
    props: true,
    component: Product
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
