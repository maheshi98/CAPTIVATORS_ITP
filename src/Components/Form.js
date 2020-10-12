import React, {Component} from 'react';
import './Style.css'
import {Jumbotron, Form, Col} from 'react-bootstrap';
import DriverService from '../Services/DriverService';
import MyNavBar from './MyNavBar';

export default class Form1 extends Component{

    constructor(props){
        super(props)

        this.state = {
            DriverFirstName: '',
            DriverLastName: '',
            Email: '',
            Licene: '',
            Num: '',
            Age: ''
        }
        /*this.state = {
            
            driver: [],
            isLoaded: false,
            total:0,
            isPayareaHidden:true
        }*/
        
        this.handleDriverFirstNameChange = this.handleDriverFirstNameChange.bind(this);
        this.handleDriverLastNameChange = this.handleDriverLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleLiceneChange = this.handleLiceneChange.bind(this);
        this.addDriver = this.addDriver.bind(this);
        this.cancelDriver = this.cancelDriver.bind(this);
        this.handleNumChange = this.handleNumChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);

    }

    addDriver = (e) => {

        e.preventDefault();
        let driver = {DriverFirstName: this.state.DriverFirstName, 
            DriverLastName: this.state.DriverLastName, 
            Email: this.state.Email, 
            Licene: this.state.Licene, 
            Num: this.state.Num, 
            Age: this.state.Age};
        console.log('driver =>' + JSON.stringify(driver));

        alert("successful");

        DriverService.createDriver(driver).then(res => {
        this.props.history.push('/DriverList');
        });
        
    }

    cancelDriver() {
        this.props.history.push('/DriverList');
    }

    handleNumChange = event => {
        this.setState({Num: event.target.value});
    } 

    handleAgeChange = event => {
        this.setState({Age: event.target.value});
    }

    handleDriverFirstNameChange = event => {
        this.setState({DriverFirstName: event.target.value});
    }

    handleDriverLastNameChange = event => {
        this.setState({DriverLastName: event.target.value});
    }

    handleEmailChange = event => {
        this.setState({Email: event.target.value});
    }

    handleLiceneChange = event => {
        this.setState({Licene: event.target.value});
    }
    componentDidMount(){
        DriverService.getDriver().then((res)=>{
            console.log(res.data);
             this.setState({ driver: res.data});
        });
 
     }


    render(){
        return(
            <div>
                <MyNavBar></MyNavBar>
            <Jumbotron className = "bg-secondary text-white" style={{marginTop:"3cm"}}>
                 
                <Col>
                
                    <form>
                    <center><h2>Add New Driver</h2></center>

                    <br/> <br/> <br/>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><div class = "Driver">Driver First Name : </div></Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" value = {this.state.DriverFirstName} onChange = {this.handleDriverFirstNameChange}/>
                    </Form.Group> <br/><br/>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><div class = "Driver">Driver Last Name : </div></Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" value = {this.state.DriverLastName} onChange = {this.handleDriverLastNameChange} />
                    </Form.Group> <br/><br/>


                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><div class = "Driver">Age : </div></Form.Label>
                        <Form.Control type="text" placeholder="Enter Age" value = {this.state.Age} onChange = {this.handleAgeChange}/>
                    </Form.Group> <br/><br/>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><div class = "Driver">Contact No : </div></Form.Label>
                        <Form.Control type="text" placeholder="Enter Contact No" value = {this.state.Num} onChange = {this.handleNumChange} />
                    </Form.Group> <br/><br/>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><div class = "Driver">Email : </div></Form.Label>
                        <Form.Control type="text" placeholder="Enter Email" value = {this.state.Email} onChange = {this.handleEmailChange} />
                    </Form.Group> <br/><br/>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><div class = "Driver">Licene No : </div></Form.Label>
                        <Form.Control type="text" placeholder="Enter Licene No" value = {this.state.Licene} onChange = {this.handleLiceneChange} />
                    </Form.Group> <br/><br/>
                       
                   <center>
                        <button style = {{width: "250px"}} class = "AddBtn" onClick={this.addDriver}>Add Driver</button>
                        <button style = {{width: "250px", marginLeft: "50px"}} class = "cancelbtn" onClick={this.cancelDriver.bind(this)}>Cancel</button>
                    </center>
                   
                    </form>
                </Col>  
            </Jumbotron>
            </div>
            
            
        );
    }
}