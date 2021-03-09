import axios from "axios";

const PRODUCT_API_BASE_URL="http://localhost:8080";
class MenuItemsService{
    getItems(bank){
        return axios.get(PRODUCT_API_BASE_URL+"/"+bank);
    }
}
export default new MenuItemsService()
