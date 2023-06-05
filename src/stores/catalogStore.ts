import {defineStore} from 'pinia';

interface Product {
  _id: string;
  name: string;
  rating: number;
  reviewsCount: number;
  price: number;
  priceDiscount?: number;
  description: string;
  imageCover: string;
  images?: string[];
  createdAt: Date
}

const useCatalogStore = defineStore('CatalogStore', {
  state: () => ({
    products: [] as Product[]
  }),
  getters: {
    prods: (state) => state.products
  },
  actions: {
    setProducts(products: Product[]) {
      products.forEach(p => p.imageCover = `http://127.0.0.1:8000/img/${p.imageCover}.png`)
      console.log(products)
      this.products = products;
    }
  }
})

export {useCatalogStore, type Product};
