import axios from "axios";

const PRODUCT_API_BASE_URL="http://localhost:8080";
class MenuItemsService{
    getItems(codeBank){
        return axios.get(PRODUCT_API_BASE_URL+"/"+codeBank);
    }
}
export default new MenuItemsService()
