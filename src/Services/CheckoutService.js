import axios from 'axios';

const CHECKOUT_BASE_URL = "http://localhost:8080/api/v1/CheckoutDetails";

class CheckoutService {

    getCheckoutDetails() {
        return axios.get(CHECKOUT_BASE_URL);
    }

    createCheckout(checkoutdetails) {
        return axios.post(CHECKOUT_BASE_URL, checkoutdetails);
    }

    getCheckoutDetailsById(CheckoutId) {
        return axios.get(CHECKOUT_BASE_URL + '/' + CheckoutId);
    }

    updateCheckoutDetails(checkoutdetails,CheckoutId) {
        return axios.put(CHECKOUT_BASE_URL + '/' + CheckoutId, checkoutdetails);
    }

    deleteCheckout(CheckoutId){
        return axios.delete(CHECKOUT_BASE_URL + '/' + CheckoutId);
    }
}

export default new CheckoutService()