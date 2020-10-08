import axios from 'axios';

const ITEM_LINE_URL = "http://localhost:8081/api/v1/ItemLineDetails";

class ItemLineServices{


    getItemDetails() {
        return axios.get(ITEM_LINE_URL);
    }
    
    getItemDetailsById(ItemCode) {
        return axios.get(ITEM_LINE_URL + '/' + ItemCode);
        // return axios.get("http://localhost:8081/api/v1/ItemLineDetails/1");
       
    }
}
export default new ItemLineServices()