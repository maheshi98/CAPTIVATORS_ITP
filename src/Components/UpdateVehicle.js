import React, {Component} from 'react';
import {Jumbotron, Form, Col} from 'react-bootstrap';
import VehicleService from '../Services/VehicleService';
import MyNavBar from './MyNavBar';

class UpdateVehicle extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
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
        this.UpdateVehicle = this.UpdateVehicle.bind(this);
        this.cancelVehicle = this.cancelVehicle.bind(this);
       

    }

    componentDidMount(){
        VehicleService.getVehicleById(this.state.id).then((res) => {

            let vehicle = res.data;
            this.setState({
                firstName: vehicle.firstName,
                lastName: vehicle.lastName,
                vehicleLiceneNo: vehicle.vehicleLiceneNo,
                vehicleModel: vehicle.vehicleModel,
                vehicleRegNo: vehicle.vehicleRegNo,
                vehicleType: vehicle.vehicleType
            });
        });
    }
    UpdateVehicle = (e) => {

        e.preventDefault();
        let vehicle = {firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            vehicleLiceneNo: this.state.vehicleLiceneNo, 
            vehicleModel: this.state.vehicleModel, 
            vehicleRegNo: this.state.vehicleRegNo, 
            vehicleType: this.state.vehicleType};
        console.log('vehicle =>' + JSON.stringify(vehicle));

        alert("successful");
       
        VehicleService.updateVehicle(vehicle,this.state.id).then(res => {
            this.props.history.push('/VehicleList')
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
    render(){
        return(
            <div>
            <MyNavBar></MyNavBar>
            <Jumbotron className = "bg-secondary text-white" style={{marginTop:"3cm"}}>
                 
                <Col>
                
                    <form>
                    <center><h2>Update Vehicle</h2></center>

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
                        <button style = {{width: "250px"}} class = "AddBtn" onClick={this.UpdateVehicle}>Confirm</button>
                        <button style = {{width: "250px", marginLeft: "50px"}} class = "cancelbtn" onClick={this.cancelVehicle.bind(this)}>Cancel</button>
                    </center>
                    </form>
                </Col>  
            </Jumbotron>
</div>
        );
    }
}
export default UpdateVehicle
