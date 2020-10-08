import React from 'react'

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import axios from 'axios';
import OrderService from '../service/OrderService';
import MyToast from './MyToast'
import { Link } from 'react-router-dom';

class Checkout extends React.Component{

    constructor(props){
        super(props);
        this.state = {email:'' , address:'', Landmark:'',city:'', zip:'',name:'', number:'',description:'', nameErro:'name is empty', emailerror :'email is wrong',
    
    }
        this.detailChange=this.detailChange.bind(this);
        this.submitDet= this.submitDet.bind(this);
        this.state.show =false;   
        this.state = {
            errors: {},
            order: [],
            isLoaded: false,
            total:0,
            isPayareaHidden:true
        }
    }

  
    submitDet(event){
       // alert('email :this.state.email,Address:this.state.address,Land Mark:this.state.landMark,City:this.state.city,Zip:this.state.zip, Cutomer Name:this.state.name+',Contact Number:'+this.state.number+',Description:'+this.state.description+'');
        event.preventDefault();

        if(this.validate()){
        let order = {email :this.state.email,address:this.state.address,Landmark:this.state.Landmark,city:this.state.city,zip:this.state.zip, name:this.state.name ,number:this.state.number,description:this.state.description}
        console.log('order =>' + JSON.stringify(order));
       
        OrderService.createOrder(order).then(res => {
            if(res.data != null){
                this.setState({"show":true});
                setTimeout(() => this.setState({"show" :false}) , 3000)

            }else{
                this.setState({"show" :false})
            }
        });
    }
    }
    detailChange(event){
        this.setState({
           [event.target.name]:event.target.value
        });

    }
    cancel(){
        this.props.history.push("/shop")
    }
    componentDidMount(){
        OrderService.getOrder().then((res)=>{
             this.setState({order : res.data});
        });
    
        
         OrderService.getOrderbyId(this.state.id).then((res) =>{
            
             
             let order = res.data;
             this.setState({email : order.email ,
                 address : order.address,Landmark :order.Landmark , city:order.city , zip:order.zip , name:order.name , number:order.number, description:order.description})
         })
     }

     validate(){

        let errors = {};
        let isValid = true;

        if (!this.state.name) {  
          isValid = false;
          errors["name"] = "Please enter your name.";
        }
        if (!this.state.address) {  
            isValid = false;
            errors["address"] = "Please enter your Address.";
          }
          if (!this.state.number) {  
            isValid = false;
            errors["number"] = "Please enter your Contact Number.";
          }
          if (typeof this.state.number !== "undefined") {
            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(this.state.number)) {
              isValid = false;
              errors["number"] = "Please enter only numbers.";
            }else if(this.state.number.length != 10){
              isValid = false;
              errors["number"] = "Please enter valid phone number.";
            }
          
          }
  
        if (!this.state.email) {
          isValid = false;
          errors["email"] = "Please enter your email Address.";
        }

        if (typeof this.state.email !== "undefined") {
    
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(this.state.email)) {
            isValid = false;
            errors["email"] = "Please enter valid email address.";
  
          }
  
        }
  
        this.setState({
          errors: errors
        });
        return isValid;
  
    }

  
    render(){
        return( 
            
            <div>
                
               <div style = {{"display" : this.state.show ? "block" :"none" }}>

                   <MyToast  children = {{show:this.state.show , message :"checkout successfully!"}}/>
                   </div> 
                   <div>
                    <br/><br/>
                     <Card style={{ alignContent:'center', width:'25cm' , variant: 'grey'}}  >
                     <Card.Header style={{ fontSize :'20px', fontFamily : 'bold'}} >Delivery Information</Card.Header>
                    <br/>
                    <br/>
                    <Form id = "CusInformation" onSubmit ={this.submitDet}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control required
                                 type="email" placeholder="Enter email" name = "email"
                                 value={this.state.email}
                                 onChange= {this.detailChange}
                                />
                                <div className="text-danger">{this.state.errors.email}</div>
                               
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group  as={Col} controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control required
                                 placeholder="1234 Main St" name = "address"
                                 value={this.state.address}
                                 onChange= {this.detailChange}
                                 />
                                 <div className="text-danger">{this.state.errors.address}</div>
                            </Form.Group>

                            <Form.Group  as={Col} controlId="formGridAddress2" >
                                <Form.Label>Land Mark</Form.Label>
                                <Form.Control required
                                placeholder="Apartment, studio, or floor" name ="Landmark"
                                value={this.state.Landmark}
                                 onChange= {this.detailChange}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control required
                                name = "city"
                                value={this.state.city}
                                 onChange= {this.detailChange}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control required
                                name = "zip"
                                value={this.state.zip}
                                 onChange= {this.detailChange}
                                />
                            </Form.Group>
                        </Form.Row>
                        <br/><br/>
                        <Card.Header style={{ fontSize :'20px', fontFamily : 'bold'}}>Customer Details</Card.Header><br/>
                        <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Customer Name</Form.Label>
                                <Form.Control required
                                type="name" placeholder="Enter Name" name ="name"
                                value={this.state.name}
                                 onChange= {this.detailChange}
                                />
                            </Form.Group>
                            <div className="text-danger">{this.state.errors.name}</div>

                            <Form.Group as={Col} controlId="formGridNumber">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control type="phone" placeholder="Phone Number" name = "number" required
                                value={this.state.number}
                                onChange= {this.detailChange}
                                />
                                <div className="text-danger">{this.state.errors.number}</div>
                            </Form.Group>
                            <Form.Group controlId="ControlTextDescription">
                            <Form.Label>Description</Form.Label>
                             <Form.Control name ="description" required
                             as="textarea" rows="3" placeholder="Enter here..!"
                             value={this.state.description}
                                 onChange= {this.detailChange}
                             />
                            </Form.Group>
                        <Form.Row>
                            
                        </Form.Row>
                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        
                        <Link to="usercheckout">
                            <Button variant="primary" type="submit" onClick= {this.submitDet}>Continue to checkout</Button>
                            </Link>
                            <Button variant="btn btn-danger" style = {{marginLeft : "10px"}} type="submit" onClick= {this.cancel.bind(this)}>cancel checkout</Button>
                           
                        
                    </Form>
    </Card>
           <hr/>
           </div>
            </div>
            
                
        )
        
    }
}

export default Checkout;