import axios from 'axios';

const CART_BASE_URI = "http://localhost:8080/api/v1/shopping"

class ShoppingCartService {

    getShoppinCart() {
        return axios.get(CART_BASE_URI)
    }

    AddToCart(menuDetails) {
        console.log(menuDetails);
        
        return axios({
            url:CART_BASE_URI,
            method : "post",
            data : menuDetails
        })
        // return axios.post(CART_BASE_URI, menuDetails)
    }

    DeleteFromCart(id){
        return axios({
            url:`${CART_BASE_URI}/${id}`,
            method : "delete",
        })
    }

    UpdateShoppingcart(id , quantity){
        return axios({
            url :`${CART_BASE_URI}/${id}//${quantity}`,
            method : "put",
        })
    }

    // getOrderbyId(id) {
    //     return axios.get(ORDER_BASE_URI + '/' + id);
    // }
    // deletecheckOrder(id) {
    //     // console.log('here',id)
        
    //     // console.log()
    //     // return axios.delete("http://localhost:8080/api/v1/orderdet/" +id)
    // }













}

export default new ShoppingCartService()