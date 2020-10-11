import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import DriverService from '../services/DriverService';
import jsPDF from 'jspdf';

class DriverList extends Component{

  constructor(props) {
    super(props)

    this.state = {
      driver: []
    }
    this.insertDriver= this.insertDriver.bind(this);
    this.editDriver= this.editDriver.bind(this);
    this.deleteDriver= this.deleteDriver.bind(this);
  }

  deleteDriver(id){
    alert("Delete sucessfully!");
    DriverService.deleteDriver(id).then(res => {
      this.setState({driver: this.state.driver.filter(driver => driver.id !== id)});
    });
  }
  editDriver(id){

    this.props.history.push(`/UpdateDriver/${id}`);
  }

  insertDriver() {

    this.props.history.push('/Form');
  }

  download = () => {
    var doc = new jsPDF();
    doc.text(20,20, 'Driver List');
    doc.save("DriverList.pdf");

}

  componentDidMount(){
    DriverService.getDriver().then((res) => {
      this.setState({driver: res.data});
    });
  }
  render(){
        return(
          
<div class="form-wrapper">
<h2 class="textcenter">Driver List</h2>
<div className="row">
      <button style = {{marginLeft: "40px"}} className= "btn btn-primary" onClick= {this.insertDriver}>Add Driver</button>
      <button id = "btnDownload" style = {{marginLeft: "20px"}} className = "btn btn-primary" onClick = {this.download}> Download </button> 
    </div> <br/>
<Card style={{ alignContent:'center' , width : '30cm' , paddingLeft : "5.5m"}}>
   <br/>
   
   <Table striped border hover>
    <thead>
      <tr>
        <th>Driver First Name</th>
        <th>Driver Last Name</th>
        <th>Age</th>
        <th>Contact No</th>
        <th>Email</th>
        <th>Licene No</th>
        <th>Actions</th>
      </tr>
    </thead> 

    <tbody>
     {
       this.state.driver.map(
         driver =>
         <tr key ={driver.id}>
           <td> {driver.firstName} </td>
           <td> {driver.lastName} </td>
           <td> {driver.age} </td>
           <td> {driver.contactNo} </td>
           <td> {driver.email} </td>
           <td> {driver.liceneNo} </td>
           <td>
             <button  onClick = { () => this.editDriver(driver.id)} className="btn btn-info">Update</button>
             <button style={{marginLeft: "20px"}} onClick = { () => this.deleteDriver(driver.id)} className="btn btn-danger">Delete</button>
           </td>
         </tr>
       )
     } 
    
    </tbody>
   </Table>

   </Card>
</div>
        )
    }
}
export default DriverList;