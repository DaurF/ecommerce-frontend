import client from '../httpClient'
// @ts-ignore
import {useCatalogStore} from "@/stores/catalogStore";

const getAllProducts = async () => {
  try {
    const {data} = await client.get('/products');
    console.log(data.data);
    useCatalogStore().setProducts(data.data.products);
  } catch (err) {
    console.error(err)
  }
};

export {getAllProducts}
