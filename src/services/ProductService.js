import axios from "axios";
const PRODUCT_API_BASE_URL="http://localhost:8080";
class ProductService{
  getProducts(bank){
      return axios.get(PRODUCT_API_BASE_URL+"/"+bank+"/products");
  }
  createProduct(product){
      return axios.post(PRODUCT_API_BASE_URL,product);
  }
  getProductById(productId){
      return axios.get(PRODUCT_API_BASE_URL+"/"+productId);
  }
  updateProduct(product,productId){
      return axios.put(PRODUCT_API_BASE_URL+"/"+productId,product);
  }
  deleteProduct(productId){
      return axios.delete(PRODUCT_API_BASE_URL+"/"+productId);
  }
  getProductParams(bank){
      return axios.get(PRODUCT_API_BASE_URL+"/"+bank+"/Add-product");
  }
}
export default new ProductService()
