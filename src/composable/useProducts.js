import { ref } from "vue";

import api from "../api";

export function useProducts() {
  const products = ref([]);
  const error = ref(null);
  const loading = ref(true);
  const limit = ref(8);
  const skip = ref(0);

  const fetchProducts = () => {
    api
      .get(`/products?limit=${limit.value}&skip=${skip.value}`)
      .then((res) => {
        products.value = [...products.value, ...res.data.products];
        skip.value += limit.value;
      })
      .catch((err) => {
        error.value = err;
      })
      .finally(() => {
        loading.value = false;
      });
  };

  return { products, error, loading, fetchProducts }
}
