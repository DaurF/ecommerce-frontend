import client from './httpClient'
// @ts-ignore
import { useCatalogStore } from '@/stores/catalogStore'
import useReviewsStore from '@/stores/reviewsStore'
import useCartStore from '@/stores/cartStore'
import useAuthStore from '@/stores/authStore'

const getAllProducts = async () => {
  try {
    const catalogStore = useCatalogStore()
    const filtersStr = catalogStore.allFilters.join(',')
    let params = {}

    if (filtersStr) {
      params = { ...params, category: filtersStr }
    }

    if (catalogStore.gMinPrice) {
      params = { ...params, 'price[gte]': catalogStore.gMinPrice }
    }

    if (catalogStore.gMaxPrice) {
      params = { ...params, 'price[lte]': catalogStore.gMaxPrice }
    }

    const { data } = await client.get('/products', { params })
    catalogStore.setProducts(data.data.data)
  } catch (err) {
    console.error(err)
  }
}

const getAllProductsForCart = async () => {
  const cartStore = useCartStore()
  const { token } = useAuthStore().allCredentials

  const response = await client.get(`/users/${token}/cart`)
  cartStore.setProducts(response.data.data.data)
}

const getAllReviewsOnProduct = async (id: string) => {
  const reviewsStore = useReviewsStore()
  const reviewsResponse = await client.get(`/products/${id}/reviews`)
  reviewsStore.setReviews(reviewsResponse.data.data.data)
}

export { getAllProducts, getAllProductsForCart, getAllReviewsOnProduct }
