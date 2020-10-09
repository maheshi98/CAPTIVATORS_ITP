import React,{Component} from 'react';
import { Card , ButtonGroup} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import SalaryService from '../services/SalaryService';
import axios from 'axios';
export default class SalaryList extends Component{
  constructor(props){
    super(props);
    this.state={
      salary:[],
      empID:'',
      basicSalary:'',
      deduction:'',
      allowance:'',
      netSalary:''
    }
    this.editSalary = this.editSalary.bind(this);
  }
  
  editSalary(id){
       this.props.history.push(`/UpdateSalary/${id}`);
  }

  componentDidMount(){
    SalaryService.getSalary().then((res) =>{
      {/*console.log(res.data);*/}
      this.setState({salary:res.data});
    });
  }
  deleteSalary = (id) => {


    axios.delete("http://localhost:8080/api/v1/Salary/" + id, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin": "*"
        }
    }).then(res => {
        this.setState({ salary: this.state.salary.filter(salary => salary.id !== id) })
        this.componentDidMount();
    })
  }
    render(){
      return(
        <div class="form-wrapper">
    <Card style={{ alignContent:'center' , width : '30cm' , paddingLeft : "5.5m"}} >
      <h3 className="titel"><center>Salary Details List</center></h3>

   <Table striped border hover variant="dark">
    <thead>
      <tr>
        <th>Employee ID</th>
        <th>Basic Salary</th>
        <th>Allowances</th>
        <th>Deduction</th>
        <th>Net Salary</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        this.state.salary.map(
          salary=>
          <tr key ={salary.id}>
            <td>{salary.empID}</td>
             <td>{salary.basicSalary}</td>
             <td>{salary.allowance}</td>
             <td>{salary.deduction}</td>
             <td>{salary.netSalary}</td>
            <td>
              <ButtonGroup>
                <button className="btn btn-danger" onClick={ ()=>{this.deleteSalary(salary.id)}}>Delete</button>
                <button className="btn btn-info" onClick={ ()=> this.editSalary(salary.id)}>{salary.id}</button>
              </ButtonGroup>
            </td>

          </tr>
        )
      }
      </tbody> 
   </Table>

  </Card>
           </div>);
    }
  }