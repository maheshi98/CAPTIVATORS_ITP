import React,{Component} from 'react';
import { Card , ButtonGroup } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import EmployeeService  from '../services/EmployeeService';
import axios from 'axios';


export default class EmpList extends Component{
    constructor(props){
      super(props)
      this.state = {
        employees:[]
      }

   this.editEmployee = this.editEmployee.bind(this);

    }

    editEmployee(id){
        this.props.history.push(`/UpdateEmployee/${id}`);
    }

    componentDidMount(){
      EmployeeService.getEmployees().then((res) => {
       this.setState({employees : res.data});
      });
    }

    deleteEmployee = (id) => {


      axios.delete("http://localhost:8080/api/v1/employees/"+ id, {
          headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "Access-Control-Allow-Origin": "*"
          }
      }).then(res => {
          this.setState({ employees: this.state.employees.filter(employees => employees.id !== id) })
          this.componentDidMount();
      })
    }

    render(){
      return(
        <div className="form-wrapper">
         
    <Card style={{ alignContent:'center' , width : '30cm' , paddingLeft : "5.5m"}}>
    <h3 className="titel"><center>Employee List</center></h3>
   <Table variant="dark" className = "table table - striped table-bordered">
    <thead>
      <tr>
        <th>Employee ID</th>
        <th>Employee First Name</th>
        <th>Employee Department</th>
        <th>Employee Position</th>
        <th>Action</th>
      </tr>
    </thead> 
    <tbody>
      {
        this.state.employees.map(
          employee =>
          <tr key = {employee.id}>
            
            <td>{employee.empID}</td>
            <td>{employee.firstName}</td>
            <td>{employee.empDep}</td>
            <td>{employee.emppost}</td>
            <td>
            <ButtonGroup>
                <button className="btn btn-danger" onClick={()=>this.deleteEmployee(employee.id)}>Delete</button>
                <button className="btn btn-info" onClick = {() => this.editEmployee(employee.id)}>Update</button>
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
  