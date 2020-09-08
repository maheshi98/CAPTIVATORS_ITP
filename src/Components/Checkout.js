import React from 'react'

import Col from "react-bootstrap/Col";
import textarea from "react-bootstrap/FormText";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from 'axios';
import OrderService from '../service/OrderService';
import MyToast from './MyToast'

class Checkout extends React.Component{

    constructor(props){
        super(props);
        this.state = {email:'' , address:'', landMark:'',city:'', zip:'',name:'', number:'',description:'', nameErro:'name is empty', emailerror :'email is wrong'}
        this.detailChange=this.detailChange.bind(this);
        this.submitDet= this.submitDet.bind(this);
        this.state.show =false;   
        this.state = {
            
            order: [],
            isLoaded: false,
            total:0,
            isPayareaHidden:true
        }
    }

    validate = ()=>{
      // let nameErro='';
       let emailerror ='';
    if (!this.state.email.includes('@'))
    emailerror = 'invalid email';

    if(emailerror){
        this.setState({emailerror});
        return false;
    }
    return true;
    };
    submitDet(event){
       // alert('email :this.state.email,Address:this.state.address,Land Mark:this.state.landMark,City:this.state.city,Zip:this.state.zip, Cutomer Name:this.state.name+',Contact Number:'+this.state.number+',Description:'+this.state.description+'');
        event.preventDefault();
        const isvalid = this.validate
        let order = {email :this.state.email,address:this.state.address,landMark:this.state.landMark,city:this.state.city,zip:this.state.zip, name:this.state.name ,number:this.state.number,description:this.state.description}
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
                 address : order.address,landMark :order.landMark , city:order.city , zip:order.zip , name:order.name , number:order.number, description:order.description})
         })
     }

    

  
    render(){
        return( 
            <div>
               <div style = {{"display" : this.state.show ? "block" :"none" }}>

                   <MyToast  children = {{show:this.state.show , message :"checkout successfully!"}}/>
                   </div> 
                   <div>
                    <br/><br/>
                     <Card style={{ alignContent:'center', width:'20cm'}}  >
                     <Card.Header >Delivery Information</Card.Header>
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
                                {this.state.emailerror ?(<di style={{fontsize : 11 , color : "red"}}>
                                    {this.state.emailerror}
                                </di>):null }
                               
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
                            </Form.Group>

                            <Form.Group  as={Col} controlId="formGridAddress2" >
                                <Form.Label>Land Mark</Form.Label>
                                <Form.Control required
                                placeholder="Apartment, studio, or floor" name ="landMark"
                                value={this.state.landMark}
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
                        <Card.Header>Customer Details</Card.Header><br/>
                        <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Customer Name</Form.Label>
                                <Form.Control required
                                type="name" placeholder="Enter Name" name ="name"
                                value={this.state.name}
                                 onChange= {this.detailChange}
                                />
                            </Form.Group>
                            {this.state.nameErro ?(<di style={{fontsize : 11 , color : "red"}}>
                                    {this.state.nameErro}
                                </di>):null }
                            <Form.Group as={Col} controlId="formGridNumber">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control type="phone" placeholder="Phone Number" name = "number" required
                                value={this.state.number}
                                onChange= {this.detailChange}
                                />
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
                        
                            <Button variant="primary" type="submit" onClick= {this.submitDet}>Continue to checkout</Button>
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