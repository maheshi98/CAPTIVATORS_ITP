import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import VehicleService from '../Services/VehicleService';
import jsPDF from 'jspdf';
import MyNavBar from './MyNavBar';

class VehicleList extends Component{

  constructor(props) {
    super(props)

    this.state = {
      vehicle: []
    }
    this.insertVehicle= this.insertVehicle.bind(this);
    this.editVehicle= this.editVehicle.bind(this);
    this.deleteVehicle= this.deleteVehicle.bind(this);
  }

  deleteVehicle(id){
    alert("Delete sucessfully!");
    VehicleService.deleteVehicle(id).then(res => {
      this.setState({vehicle: this.state.vehicle.filter(vehicle => vehicle.id !== id)});
    });
  }
  editVehicle(id){

    this.props.history.push(`/UpdateVehicle/${id}`);
  }

  insertVehicle() {

    this.props.history.push('/Form2');
  }

  download = () => {
    var doc = new jsPDF();
    doc.text(20,20, 'Vehicle List');
    doc.save("VehicleList.pdf");

}

  componentDidMount(){
    VehicleService.getVehicle().then((res) => {
      this.setState({vehicle: res.data});
    });
  }

  render(){
        return(
          <div>
            <MyNavBar></MyNavBar>
<div class="form-wrapper" style={{marginTop:"3cm"}}>
<h2 class="textcenter">Vehicle List</h2>
<div className="row">
      <button style = {{marginLeft: "40px"}} className= "btn btn-primary" onClick= {this.insertVehicle}>Add Vehicle</button>
      <button id = "btnDownload" style = {{marginLeft: "20px"}} className = "btn btn-primary" onClick = {this.download}> Download </button> 
    </div> <br/>
<Card style={{ alignContent:'center' , width : '30cm' , paddingLeft : "5.5m"}}>
   <br/>
   <Table striped border hover>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Vehicle Licene No</th>
        <th>Vehicle Model</th>
        <th>Vehicle Reg No</th>
        <th>Vehicle Type</th>
        <th>Actions</th>
      </tr>
    </thead> 
    <tbody>
     {
       this.state.vehicle.map(
        vehicle =>
         <tr key ={vehicle.id}>
           <td> {vehicle.firstName} </td>
           <td> {vehicle.lastName} </td>
           <td> {vehicle.vehicleLiceneNo} </td>
           <td> {vehicle.vehicleModel} </td>
           <td> {vehicle.vehicleRegNo} </td>
           <td> {vehicle.vehicleType} </td>
           <td>
             <button  onClick = { () => this.editVehicle(vehicle.id)} className="btn btn-info">Update</button>
             <button style={{marginLeft: "20px"}} onClick = { () => this.deleteVehicle(vehicle.id)} className="btn btn-danger">Delete</button>
           </td>
         </tr>
       )
     } 
    
    </tbody>
   </Table>

   </Card>
</div>
</div>
        )
    }
}
export default VehicleList;