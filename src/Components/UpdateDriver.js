import React, {Component} from 'react';
import {Jumbotron, Form, Col} from 'react-bootstrap';
import DriverService from '../Services/DriverService';
import MyNavBar from './MyNavBar';

class UpdateDriver extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
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
        this.UpdateDriver = this.UpdateDriver.bind(this);
        this.cancelDriver = this.cancelDriver.bind(this);
        this.handleNumChange = this.handleNumChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);

    }

    componentDidMount(){
        DriverService.getDriverById(this.state.id).then((res) => {

            let driver = res.data;
            this.setState({
                DriverFirstName: driver.DriverFirstName,
                DriverLastName: driver.DriverLastName,
                Email: driver.Email,
                Licene: driver.Licene,
                Num: driver.Num,
                Age: driver.Age
            });
        });
    }
    UpdateDriver = (e) => {

        e.preventDefault();
        let driver = {DriverFirstName: this.state.DriverFirstName, 
            DriverLastName: this.state.DriverLastName, 
            Email: this.state.Email, 
            Licene: this.state.Licene, 
            Num: this.state.Num, 
            Age: this.state.Age};
        console.log('driver =>' + JSON.stringify(driver));
        DriverService.updateDriver(driver,this.state.id).then(res => {
            this.props.history.push('/DriverList')
        });
        alert("successful");
        
    }

    cancelDriver() {
        this.props.history.push('/DriverList');
    }

    handleNumChange = event => {

        this.setState(
            {
                Num: event.target.value
            }
        )
    } 

    handleAgeChange = event => {

        this.setState(
            {
                Age: event.target.value
            }
        )
    }

    handleDriverFirstNameChange = event => {

        this.setState(
            {
                DriverFirstName: event.target.value
            }
        )
    }

    handleDriverLastNameChange = event => {

        this.setState(
            {
                DriverLastName: event.target.value
            }
        )
    }


    handleEmailChange = event => {

        this.setState(
            {
                Email: event.target.value
            }
        )
    }

    handleLiceneChange = event => {

        this.setState(
            {
                Licene: event.target.value
            }
        )
    }
    /*componentDidMount(){
        DriverService.getDriver().then((res)=>{
            console.log(res.data);
             this.setState({ driver: res.data});
        });
 
     }*/


    render(){
        return(
            <div>
            <MyNavBar></MyNavBar>
            <Jumbotron className = "bg-secondary text-white" style={{marginTop:"3cm"}}>
                 
                <Col>
                
                    <form>
                    <center><h2>Update Driver</h2></center>

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
                        <button style = {{width: "250px"}} class = "AddBtn" onClick={this.UpdateDriver}>Confirm</button>
                        <button style = {{width: "250px", marginLeft: "50px"}} class = "cancelbtn" onClick={this.cancelDriver.bind(this)}>Cancel</button>
                    </center>
                   
                    </form>
                </Col>  
            </Jumbotron>
</div>
            
            
        );
    }
}
export default UpdateDriver