import axios from 'axios';

const CUSTOMER_API_BASE_URL ="http://localhost:8080/api/v1/users"
const CUSTOMER_API_BASE_URL2 ="http://localhost:8080/api/v1/opUsers"

class UserService{
    getCustomers(){
        return axios.get(CUSTOMER_API_BASE_URL);


    }

    addCustomer(customer){
        return axios.post(CUSTOMER_API_BASE_URL,customer);


    }

    getUserById(cEmail){
        return axios.get(CUSTOMER_API_BASE_URL + '/' +cEmail);

    }
    getUserByIdOptional(cEmail){
        return axios.get(CUSTOMER_API_BASE_URL2 + '/' +cEmail);

    }

    updateCustomer(customerEmail,customer){
        return axios.put(CUSTOMER_API_BASE_URL + '/' + customerEmail,customer);
    }

    deleteCustomer(customerEmail){
        return axios.delete(CUSTOMER_API_BASE_URL + '/' + customerEmail);
    }


}

export default new UserService();