import axios from 'axios';
const SALARY_API_BASE_URL = "http://localhost:8080/api/v1/Salary";

class SalaryService{

    getSalary(){
        return axios.get(SALARY_API_BASE_URL);
    }

    createSalary(salary){
        return axios.post(SALARY_API_BASE_URL , salary)
    }

    getSalaryById(id){
        return axios.get(SALARY_API_BASE_URL+ '/'+id);
    }

    UpdateSalary(salary, salaryId){
        return axios.put(SALARY_API_BASE_URL + '/' + salaryId, salary);
    }
}
export default new SalaryService()