import React,{Component} from 'react';
import { Card , ButtonGroup } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import EmployeeService  from '../Services/EmployeeService';
import axios from 'axios';
import jsPDF from 'jspdf'; import 'jspdf-autotable';
import MyNavBar from './MyNavBar';
import EmployeeNavbar from './EmployeeNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

export default class EmpList extends Component{
    constructor(props){
      super(props)
      this.state = {
        employees:[]
      }

   this.editEmployee = this.editEmployee.bind(this);
   this.add = this.AddEmp.bind(this); 

    }

    editEmployee(id){
        this.props.history.push(`/UpdateEmployee/${id}`);
    }

    AddEmp(){
      this.props.history.push(`/CreateEmp`);
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
//Report generation part starting from here

exportPDF = () => {

  console.log( "SSSSSSSSSS" )





  const unit = "pt";

  const size = "A3"; // Use A1, A2, A3 or A4

  const orientation = "landscape"; // portrait or landscape

  const marginLeft = 40;

  const doc = new jsPDF( orientation, unit, size );



  // const jsPDF = require('jspdf');

  // require('jspdf-autotable');



  const title = "Mango Restaurant Employee List ";

  const headers = [["employee ID","First Name","Department","Position"]];



  // const Order = this.state.Order.map( orderList => [orderList.order_id, orderList.product_id,orderList.productname,orderList.brand, orderList.total_amount, orderList.qty,orderList.email,orderList.address,orderList.purchase_date] );



  const employees = this.state.employees.map(

    employee=>[

      employee.empID,

      employee.firstName,

      employee.empDep,

      employee.emppost

      ]

  );



  let content = {

      startY: 50,

      head: headers,

      body: employees

  };

  doc.setFontSize( 20 );

  doc.text( title, marginLeft, 40 );

  require('jspdf-autotable');

  doc.autoTable( content );

  doc.save( "EmployeeList.pdf" )

}




    render(){
      return(
        <div >
          <MyNavBar></MyNavBar>
          <br></br>
          <EmployeeNavbar></EmployeeNavbar>
         
    <Card variant="dark" style={{ alignContent:'center' , width : '30cm' , paddingLeft : "5.5m" , marginTop:"0.5cm"}}>
    <Card.Body className={"border border-dark bg-dark text-white"} style={{ alignContent: 'center', width: '35cm', paddingLeft :'5.5m' }}>

    <h2 className="border border-dark bg-dark text-white" ><center>Employee List</center></h2>
    <div className = "row">
      
      <button style = {{marginLeft: "15px"}} className = "btn btn-primary" onClick={() => this.AddEmp()} > Add New Employee </button>  
      <button style = {{marginLeft: "10px"}} className = "btn btn-primary" onClick={() => this.exportPDF()} > Download Employee Details </button> 
      </div>
      <br/>
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
                <button className="btn btn-danger" style = {{marginLeft: "5px"}} onClick={()=>this.deleteEmployee(employee.id)}><FontAwesomeIcon icon={faTrash} size="1x" />
</button>
                <button className="btn btn-info" style = {{marginLeft: "5px"}} onClick = {() => this.editEmployee(employee.id)}><FontAwesomeIcon icon={faEdit} size="1x" /></button>
            </ButtonGroup>     
            </td>
          </tr>
        )
      }
    </tbody>
   </Table>
</Card.Body>
  </Card>
           </div>);
    }
  }
  