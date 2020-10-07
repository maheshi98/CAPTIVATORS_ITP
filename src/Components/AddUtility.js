import React, {Component} from 'react';
import './Style.css';
import {Jumbotron, Form, Col, Card} from 'react-bootstrap';
import UtilityService from '../Services/UtilityService';
import Utilitynavbar from './UtilityNavbar';


export default class AddUtility extends Component{

    constructor(props) {

        super(props)
        this.state = {
            
            ID: this.props.match.params.ID, 
            utilityName: '',
            description: ''

        };
        
        this.changeUtilityNameHandler = this.changeUtilityNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.addOrUpdateUtilityBtn = this.addOrUpdateUtilityBtn.bind(this);
    }
    
    componentDidMount() {

        
        if(this.state.ID === '_add'){
            return
        }
        else{
            UtilityService.getUtilityById(this.state.ID).then( (res) =>{
                let utility = res.data;
                this.setState({utilityName: utility.utilityName, 
                    description: utility.description});
                   
            });
        }

        
    }

    addOrUpdateUtilityBtn = (e) => {
        e.preventDefault();

        let utility = {utilityName: this.state.utilityName, description: this.state.description};
        console.log('utility => ' + JSON.stringify(utility));

        
        if(this.state.ID === '_add'){
            alert("Insert is sucessfully!");
            UtilityService.createUtility(utility).then(res => {
                this.props.history.push('/utilityList');
            });
        }
        else{
            alert("Update is sucessfully!");
            UtilityService.updateUtility(utility, this.state.ID).then(res => {
                this.props.history.push('/utilityList')
            });
        }

        
    }

    changeUtilityNameHandler = (event) => {
        this.setState({utilityName: event.target.value});
    }

    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }

    cancelBtn() {
        this.props.history.push('/utilityList');
    }

    getTitle() {
        if(this.state.ID === '_add'){
            return <h2 className = "text-center">Add New Utility</h2>
        }
        else{
            return <h2 className = "text-center">Update Utility</h2>
        }
    }

    getButton() {
        if(this.state.ID === '_add'){
            return <center><button class = "sumbitbtn" onClick = {this.addOrUpdateUtilityBtn} >Add</button>
            <button class = "cancelbtn" onClick = {this.cancelBtn.bind(this)}>Cancel</button></center>
        }
        else{
            return <center><button class = "sumbitbtn" onClick = {this.addOrUpdateUtilityBtn} >Update</button>
            <button class = "cancelbtn" onClick = {this.cancelBtn.bind(this)}>Cancel</button></center>
        }
    }

    render(){
        return(
            <div>
                 <center><Utilitynavbar></Utilitynavbar></center>
                 <br></br>
            <Jumbotron className = "bg-secondary text-white">
                              

                <Col>
                
                    <form>
                    
                    {
                       this.getTitle() 
                    }

                    <br/> <br/> <br/>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><div class = "AddUtility">Utility Name : </div></Form.Label>
                        <Form.Control type="text" placeholder="Enter Utility Name" name = "utilityName" 
                            value = {this.state.utilityName} onChange = {this.changeUtilityNameHandler}  />
                     </Form.Group> <br/><br/>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label><div class = "AddUtility">Description  : </div></Form.Label>
                        <Form.Control as="textarea" rows="4" cols="80" name = "description" 
                            value = {this.state.description} onChange = {this.changeDescriptionHandler} />
                    </Form.Group> <br/><br/>

                    {
                       this.getButton() 
                    }
                       
                    </form>
                </Col>  
            </Jumbotron>
            </div>
            
            
        );
    }
}
