const BASE_URL = "https://fakestoreapi.com/products";

export default {
  getAllProducts: async () => {
    let response = await fetch(`${BASE_URL}`);
    let data = await response.json();
    return data;
  },
  getProductById: async (productId) => {
    let response = await fetch(`${BASE_URL}/${productId}`);
    let data = await response.json();
    return data;
  },
};
