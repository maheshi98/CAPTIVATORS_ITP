import React, {Component} from 'react';
import './Style.css'
import {Jumbotron, Form, Col} from 'react-bootstrap';
//import {Link} from 'react-router-dom';
import VehicleService from '../services/VehicleService';


export default class Form2 extends Component{

    constructor(props){
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            vehicleLiceneNo: '',
            vehicleModel: '',
            vehicleRegNo: '',
            vehicleType: '',
           
        }
        this.handlefirstNameChange = this.handlefirstNameChange.bind(this);
        this.handlelastNameChange = this.handlelastNameChange.bind(this);
        this.handlevehicleRegNoChange = this.handlevehicleRegNoChange.bind(this);
        this.handlevehicleModelChange = this.handlevehicleModelChange.bind(this);
        this.handlevehicleTypeChange = this.handlevehicleTypeChange.bind(this);
        this.handlevehicleLiceneNoChange = this.handlevehicleLiceneNoChange.bind(this);
        this.addVehicle = this.addVehicle.bind(this);
        this.cancelVehicle = this.cancelVehicle.bind(this);
    }

    addVehicle = (e) => {
        e.preventDefault();
        let vehicle = {firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            vehicleLiceneNo: this.state.vehicleLiceneNo, 
            vehicleModel: this.state.vehicleModel, 
            vehicleRegNo: this.state.vehicleRegNo, 
            vehicleType: this.state.vehicleType};
        console.log('vehicle=>' + JSON.stringify(vehicle));

        alert("successful");

        VehicleService.createVehicle(vehicle).then(res => {
            this.props.history.push('/VehicleList');
        });
        
    }

    cancelVehicle() {
        this.props.history.push('/VehicleList');
    }

    handlefirstNameChange = event => {
        this.setState({firstName: event.target.value});
    }

    handlelastNameChange = event => {
        this.setState({lastName: event.target.value});
    }

    handlevehicleRegNoChange = event => {
        this.setState({vehicleRegNo: event.target.value});
    }

    handlevehicleTypeChange = event => {
        this.setState({vehicleType: event.target.value});
    }

    handlevehicleLiceneNoChange = event => {
        this.setState({vehicleLiceneNo: event.target.value});
    }

    handlevehicleModelChange = event =>{
        this.setState({vehicleModel: event.target.value});
    }

    componentDidMount(){
        VehicleService.getVehicle().then((res)=>{
            console.log(res.data);
             this.setState({ vehicle: res.data});
        });
 
     }



    render(){
        return(
            
            <Jumbotron className = "bg-secondary text-white">
                 
                <Col>
                
                    <form>
                    <center><h2>Add New Vehicle</h2></center>

                    <br/> <br/> <br/>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><div class = "Vehicle">First Name : </div></Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name"  value = {this.state.firstName} onChange = {this.handlefirstNameChange} />
                    </Form.Group> <br/><br/>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><div class = "Vehicle">Last Name : </div></Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" value = {this.state.lastName} onChange = {this.handlelastNameChange} />
                    </Form.Group> <br/><br/>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><div class = "Vehicle">Vehicle Licene No : </div></Form.Label>
                        <Form.Control type="text" placeholder="Enter Licene No" value = {this.state.vehicleLiceneNo} onChange = {this.handlevehicleLiceneNoChange}/>
                    </Form.Group> <br/><br/>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><div class = "Vehicle">Vehicle Model : </div></Form.Label>
                        <Form.Control type="text" placeholder="Enter Vehicle Model" value = {this.state.vehicleModel} onChange = {this.handlevehicleModelChange}/>
                    </Form.Group> <br/><br/>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><div class = "Vehicle">Vehicle Reg No : </div></Form.Label>
                        <Form.Control type="text" placeholder="Enter Reg No" value = {this.state.vehicleRegNo} onChange = {this.handlevehicleRegNoChange} />
                    </Form.Group> <br/><br/>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><div class = "Vehicle">Vehicle Type : </div></Form.Label>
                        <Form.Control type="text" placeholder="Enter Vehicle Type" value = {this.state.vehicleType} onChange = {this.handlevehicleTypeChange} />
                    </Form.Group> <br/><br/>

                        <center>
                        <button style = {{width: "250px"}} class = "AddBtn" onClick={this.addVehicle}>Add Vehicle</button>
                        <button style = {{width: "250px", marginLeft: "50px"}} class = "cancelbtn" onClick={this.cancelVehicle.bind(this)}>Cancel</button>
                        </center>
                    </form>
                </Col>  
            </Jumbotron>

            
            
        );
    }
}


