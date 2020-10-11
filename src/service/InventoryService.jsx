import axios from 'axios';
const INVENTORY_API_BASE_URL = "http://localhost:8000/inventory"; 

class InventoryService{

    getInventory(){
        return axios.get(INVENTORY_API_BASE_URL + "/product");
    }

    createInventory(inventory){
        return axios.post(INVENTORY_API_BASE_URL + "/product", inventory);
    }

}

export default new InventoryService()