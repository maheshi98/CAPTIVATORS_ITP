import React,{Component} from 'react';
import { Card , ButtonGroup , Button} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import SalaryService from '../Services/SalaryService';
import axios from 'axios';
import jsPDF from 'jspdf'; import 'jspdf-autotable';
import MyNavBar from './MyNavBar';
import EmployeeNavbar from './EmployeeNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

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
    this.add = this.Add.bind(this); 
  }

  Add(){
    this.props.history.push(`/CreateSalary/`);
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



    const title = "Salary Details ";

    const headers = [["employee ID","Basic Salary","Allowance","Deduction","Netsalary"]];



    // const Order = this.state.Order.map( orderList => [orderList.order_id, orderList.product_id,orderList.productname,orderList.brand, orderList.total_amount, orderList.qty,orderList.email,orderList.address,orderList.purchase_date] );



    const employees = this.state.salary.map(

      salary=>[

        salary.empID,

        salary.basicSalary,

        salary.allowance,

        salary.deduction,

        salary.netSalary

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

    doc.save( "SalaryList.pdf" )

}


 render(){
      return(
        <div >
          <MyNavBar></MyNavBar>
          <br></br>
          <EmployeeNavbar></EmployeeNavbar>
         
    <Card  style={{ alignContent:'center' , width : '30cm' , paddingLeft : "5.5m" , marginTop:"0.5cm"}} variant="dark" >
    <Card.Body className={"border border-dark bg-dark text-white"} style={{ alignContent: 'center', width: '35cm', paddingLeft :'5.5m' }}>

      <h3 className={"border border-dark bg-dark text-white"}><center>Salary Details List</center></h3>
      <div className = "row" >
      <button style = {{marginLeft: "15px"}} className = "btn btn-primary" onClick={() => this.Add()} > Add Salary Details </button>  
     
      <button style = {{marginLeft: "10px"}} className = "btn btn-primary" onClick={() => this.exportPDF()} > Download Salary Details </button>  
      
      </div>
      <br/>
    
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
                
                <button className="btn btn-info" style = {{marginLeft: "5px"}}  onClick={ ()=> this.editSalary(salary.id)}><FontAwesomeIcon icon={faEdit} size="1x" /></button>
                <button className="btn btn-danger" style = {{marginLeft: "5px"}} onClick={ ()=>{this.deleteSalary(salary.id)}}><FontAwesomeIcon icon={faTrash} size="1x" /></button>
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