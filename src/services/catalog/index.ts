import client from '../httpClient'
// @ts-ignore
import { useCatalogStore } from '@/stores/catalogStore'

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
    catalogStore.setProducts(data.data.products)
  } catch (err) {
    console.error(err)
  }
}

export { getAllProducts }
