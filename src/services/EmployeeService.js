import axios from 'axios';
const EMPLOYEES_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEES_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEES_API_BASE_URL , employee);
    }

    getEmployeeById(id){
        return axios.get(EMPLOYEES_API_BASE_URL + '/' +id)
    }
    UpdateEmployee(employee,id){
        return axios.put(EMPLOYEES_API_BASE_URL + '/' +id,employee)
    }
}
export default new EmployeeService()