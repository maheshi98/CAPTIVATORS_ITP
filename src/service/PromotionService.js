import axios from 'axios';

const PROMOTION_API_BASE_URL ="http://localhost:8080/api/v1/promotions"
const CUSTOMER_API_BASE_URL2 ="http://localhost:8080/api/v1/addpromotion"
const CUSTOMER_API_BASE_URL3 ="http://localhost:8080/api/v1/uppromotions"


class PromotionService{
    getPromotions(){
        return axios.get(PROMOTION_API_BASE_URL);

    }

    addPromotion(promotion){

        return axios.post(PROMOTION_API_BASE_URL,promotion);


    }

    getPromotionById(promotionCode){
        
        return axios.get(PROMOTION_API_BASE_URL + '/' + promotionCode);
    }

    updatePromotion(promotionCode,promotion){
        return axios.put(PROMOTION_API_BASE_URL + '/' + promotionCode,promotion);
    }

    deletePromotion(promotionCode){
        return axios.delete(PROMOTION_API_BASE_URL + '/' + promotionCode);
    }
}

export default new PromotionService();