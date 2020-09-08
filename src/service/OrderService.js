
import axios from 'axios';

const ORDER_BASE_URI = "http://localhost:8080/api/v1/checkout"

class OrderService {

    getOrder(){
        return axios.get(ORDER_BASE_URI)
    }

    createOrder(order){
        return axios.post(ORDER_BASE_URI , order)
    }

    getOrderbyId(id){
        return axios.get(ORDER_BASE_URI + '/' +id);
    }
    deletecheckOrder(id){
        return axios.delete(ORDER_BASE_URI + '/' +id)
    }













}

export default new OrderService()