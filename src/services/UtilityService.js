import axios from 'axios';

const Utility_API_BASE_URL = "http://localhost:8081/api/v1/utility";

class UtilityService {

    getUtility() {
        return axios.get(Utility_API_BASE_URL);
    }

    createUtility(utility) {
        return axios.post(Utility_API_BASE_URL, utility);
    }

    getUtilityById(utilityId) {
        return axios.get(Utility_API_BASE_URL + '/' + utilityId);
    }

    updateUtility(utility, utilityId) {
        return axios.put(Utility_API_BASE_URL + '/' + utilityId, utility);
    }

    deleteUtility(utilityId) {
        return axios.delete(Utility_API_BASE_URL + '/' + utilityId);
    }

}

export default new UtilityService();