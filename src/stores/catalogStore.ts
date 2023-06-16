import { defineStore } from 'pinia'

interface Product {
  _id: string
  manufacturer: string
  model: string
  rating: number
  reviewsCount: number
  price: number
  priceDiscount?: number
  description: string
  imageCover: string
  images?: string[]
  createdAt: Date
}

const useCatalogStore = defineStore('CatalogStore', {
  state: () => ({
    products: [] as Product[],
    filters: [] as string[],
    minPrice: 0 as number | null,
    maxPrice: Number.MAX_SAFE_INTEGER as number | null
  }),
  getters: {
    allProducts: (state) => state.products,
    allFilters: (state) => state.filters,
    gMinPrice: (state) => state.minPrice,
    gMaxPrice: (state) => state.maxPrice
  },
  actions: {
    setProducts(products: Product[]) {
      console.log(products)

      products.forEach((p) => (p.imageCover = `http://127.0.0.1:8000/img/${p.imageCover}.jpg`))
      this.products = products
    },
    setFilters(filters: string[]) {
      this.filters = filters
    },
    setMinPrice(price: number | null) {
      this.minPrice = price
    },
    setMaxPrice(price: number | null) {
      this.maxPrice = price
    },
    clearFilters() {
      this.filters = []
      this.minPrice = 0;
      this.maxPrice = Number.MAX_SAFE_INTEGER;
    }
  }
})

export { useCatalogStore, type Product }
