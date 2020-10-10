import axios from 'axios';

const CASHIER_BASE_URL = "http://localhost:8080/api/v1/CashierDetails";

class CashierService {

    getCashierDetails() {
        return axios.get(CASHIER_BASE_URL);
    }

    createCashier(cashierdetails) {
        return axios.post(CASHIER_BASE_URL, cashierdetails);
    }

    getCheckoutDetailsById(CashierId) {
        return axios.get(CASHIER_BASE_URL + '/' + CashierId);
    }

    updateCheckoutDetails(cashierdetails,CashierId) {
        return axios.put(CASHIER_BASE_URL + '/' + CashierId, cashierdetails);
    }

    deleteCheckout(CashierId){
        return axios.delete(CASHIER_BASE_URL + '/' + CashierId);
    }
}

export default new CashierService()