import { defineStore } from 'pinia'
import { type Product, setImageCover } from './catalogStore'

const useCartStore = defineStore('CartStore', {
  state: () => ({
    products: [] as Product[]
  }),
  getters: {
    allProducts: (state) => state.products,
    productInCart: (state) => (id: string) => state.products.some((p) => p._id === id)
  },
  actions: {
    setProducts(products: Product[]) {
      this.products = products.map(setImageCover)
    },
    removeProductById(id: string) {
      const index = this.products.findIndex((p) => p._id === id)
      this.products.splice(index, 1)
    }
  }
})

export default useCartStore
