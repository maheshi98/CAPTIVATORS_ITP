import axios from 'axios';

const CUSTOMER_API_BASE_URL ="http://localhost:8080/api/v1/customers"
const CUSTOMER_API_BASE_URL2 ="http://localhost:8080/api/v1/addcustomer"


class CustomerService{
    getCustomers(){
        return axios.get(CUSTOMER_API_BASE_URL);


    }

    addCustomer(customer){
        return axios.post(CUSTOMER_API_BASE_URL2,customer);


    }

    getCustomerById(cEmail){
        return axios.get(CUSTOMER_API_BASE_URL + '/' +cEmail);

    }

}

export default new CustomerService();