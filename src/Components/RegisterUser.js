import React, { Component } from 'react';

import '../userprofile.css';


import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import UserService from '../service/UserService';
//import Navigationbar from '../Components/Navigationbar';
import MyNavBar from './MyNavBar'



class RegisterUserComponent extends Component {
    constructor(props){
      super(props);
      
      this.state = {
      firstName : null,
      lastName : null,
      email : null,
      userName : null,
      gender : null,
      password : null,
      cnfpwd : null,
      role : 2,

      error : null,

      };
    }
  
    handleChange = this.handleChange.bind(this);
    handleRadioGender = this.handleRadioGender.bind(this);
    //handlePassword = this.handlePassword.bind(this);
    shoot = this.shoot.bind(this);
    handleSubmit = this.handleSubmit.bind(this);
    
    shoot(event){
      //alert(this.state.gender);
        
         if(this.state.password != this.state.cnfpwd){
          alert("Two paaswords are dismatched");
          this.state.password = null;
        
          return;
        }
        
    }
    handleRadioGender(event){
        this.state.gender = event.target.value
    }
  

    handleChange(event) {  
          this.setState({
            [event.target.name]: event.target.value,


          });
         


    }
    handleSubmit(event){
      if(this.state.password == null){
        event.preventDefault();
      }

    else{
      event.preventDefault();

      let customer = {fName:this.state.firstName,lName:this.state.lastName,username : this.state.userName, email:this.state.email,gender:this.state.gender,password:this.state.password,role: this.state.role};
      console.log('customer =>' + JSON.stringify(customer));

      UserService.addCustomer(customer).then(res => {
        this.props.history.push("/UserLogin")
    });

    }
      
  }
    
  
      
    
    
    render() {
       return (

       <div className="registeruser" style={{ alignContent:'center', width:'20cm'}}>
         <MyNavBar/>
        
         <div class="userprofile" style={{ alignContent:'center', width:'20cm' , marginTop : '3.5cm'}}>
       
 
         
        <div className="new" style={{ alignContent:'center', width:'20cm'}}>
          <div className="row" style={{ alignContent:'center', width:'20cm'}}>
            <div className="card col-md-6 offset-md-3 offset-md-3" variant ="dark" style={{ alignContent:'center', width:'20cm'}}>
             <div className = "card-body" style={{ alignContent:'center', width:'20cm'}}>
         <form method="POST" onSubmit= {this.handleSubmit} style={{ alignContent:'center', width:'20cm'}} >
         <font size="5" style={{ alignContent:'center', width:'20cm'}}>Create Your Own Account</font>
         <div class="form-group row" style={{ alignContent:'center', width:'20cm'}}>
              <label  class="col-sm-2 col-form-label">Name</label>
              <div class="col-sm-5">
                <input type="text" name="firstName" value={this.state.firstName} className="form-control" onChange={this.handleChange} placeholder="   First Name"></input>
                
              </div>
              <div class="col-sm-5">
              <input type="text"  name="lastName" value={this.state.lastName} className="form-control" onChange={this.handleChange} placeholder ="   Last Name" />
              </div>
          </div>
          <div class="form-group row">
              <label class="col-sm-2 col-form-label">Email<span class="required"><font size="5">*</font></span></label>
              <div class="col-sm-10">
                <input type="email"  size="25" name="email" value={this.state.email}  className="form-control" onChange={this.handleChange} placeholder="   name@example.com" required/>
              </div>
              
          </div>
          <div class="form-group row">
              <label class="col-sm-2 col-form-label">UserName</label>
              <div class="col-sm-10">
              <input type="text" value={this.state.userName} name="userName"className="form-control"  onChange={this.handleChange}  />
              </div>
            
          </div>
          <div class="form-group row">
              <label for="inputPassword" class="col-sm-3 col-form-label">Gender</label>
              <div onChange={this.handleRadioGender}>
                <div class="form-check form-check-inline col-sm-3 ">
                  <input type="radio" name="gender" value="male"></input>Male
                </div>
                <div class="form-check form-check-inline col-sm-3 ">
                  <input type="radio" name="gender" value="female"></input>Female
                </div>
                <div class="form-check form-check-inline col-sm-3 ">
                  <input type="radio" name="gender" value="other"></input>Other
                </div>
              </div>
          </div>
          <div class="form-group row">
             
              

              <label  class="col-sm-2 col-form-label">Password <span class="required"><font size="5">*</font></span></label>
              <div class="col-sm-10">
              <input type="password" value={this.state.password} placeholder ="   Password must contain at least 6 characters " id="cnfpwd" className="form-control" onChange={this.handleChange} name="password" required />
              </div>
          </div>
          <div class="form-group row">
              <label  class="col-sm-2 col-form-label">Confirm Password <span class="required"><font size="5">*</font></span></label>
              <div class="col-sm-10">
              <input type="password" value={this.state.cnfpwd} placeholder ="   Confirm Password"id="cnfpwd" className="form-control" onChange={this.handleChange} name="cnfpwd"  required />
         
              </div>
            
          </div>
              <input type="checkbox" id="checkbox" name = "check" checked /><font size="3">Agree to the terms and conditions</font>
            <br/><br/>
    
    
            <center>
              
              <Button type="submit" variant="primary" onClick={this.shoot} ><font size="4">Sign Up</font></Button>
            </center>

            
 
         </form>
         </div>
         </div>
         </div>
         </div>
         </div>
         
       </div>
       );
 
    }
  }
 

export default RegisterUserComponent;