 import axios from 'axios';

 const Menu_ApI_BASE_URL = "http://localhost:8081/api/v1/menuDetails";

class MenuService{
    getMenuDetails(){
        return axios.get(Menu_ApI_BASE_URL);
    }
    addMenuDetails(Menu){
        return axios.post(Menu_ApI_BASE_URL,Menu);
    }
    getMenuById(id){
        return axios.get(Menu_ApI_BASE_URL + '/' + id);
    }

    updateMenu(menuDetails, id) {
        return axios.put(Menu_ApI_BASE_URL + '/' + id, menuDetails);
    }

   deleteMenu(id) {
      
         return axios.delete(Menu_ApI_BASE_URL + '/' +id);
    }

}
export default new MenuService()