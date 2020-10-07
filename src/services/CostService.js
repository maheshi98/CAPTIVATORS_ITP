import axios from 'axios';
//import UtilityCost from '../Components/UtilityCost';

const UtilityCost_API_BASE_URL = "http://localhost:8081/api/v1/utilitycost";

class CostService{
    getUtilityCost() {
        return axios.get(UtilityCost_API_BASE_URL);
    }

    createUtilityCost(utilitycost) {
        return axios.post(UtilityCost_API_BASE_URL, utilitycost);
    }

    getUtilityCostById(utilitycostId) {
        return axios.get(UtilityCost_API_BASE_URL + '/' + utilitycostId);
    }

   
    updateUtilityCost(utilitycost, utilitycostId) {
        return axios.put(UtilityCost_API_BASE_URL + '/' + utilitycostId, utilitycost);
    }

    deleteUtilityCost(utilitycostId) {
        return axios.delete(UtilityCost_API_BASE_URL + '/' + utilitycostId);
    }
}

export default new CostService();