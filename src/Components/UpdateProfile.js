import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../userprofile.css';
import TextArea from 'antd/lib/input/TextArea';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import UserService from '../service/UserService';

class UpdateProfileComponent extends Component {
    constructor(props){
        super(props);
        
        this.state = {
        customer : [],
        firstName : null,
        lastName : null,
        email : null,
        userName : null,
        gender : null,
        otherDetails : null,
        userId : null,
        role : 2,
    
  
        };
      }
    
      handleChange = this.handleChange.bind(this);
      handleRadioGender = this.handleRadioGender.bind(this);
      updateCustomer = this.updateCustomer.bind(this);

      handleRadioGender(event){
        this.state.gender = event.target.value
    }

    handleChange(event) {  
          this.setState({
            [event.target.name]: event.target.value

          });

    }
    updateCustomer(event){
      event.preventDefault();
      
      let customer = {fName:this.state.firstName,lName:this.state.lastName,username : this.state.userName,email:this.state.email,gender:this.state.gender,role: this.state.role,otherDetails :this.state.otherDetails};
     // let customer = {pCode : this.state.pCode, oNumber : this.state.orderNumber, disRate :this.state.disRate};
      console.log('cust => ' + JSON.stringify(customer));

      UserService.updateCustomer( this.state.userId,customer).then(res =>{
          window.sessionStorage.setItem("UserId",this.state.userId,customer.email );
          this.props.history.push('/CustomerProfile');
          //console.log('promotion => ' + JSON.stringify(promotion));

      });

  }
  /*
  this.email = email;
		this.fName = fName;
		this.lName = lName;
		this.username = username;
		this.gender = gender;
		this.password = password;
		this.otherDetails = otherDetails;*/


    componentDidMount(){
      window.sessionStorage.getItem("UserId");
      this.state.userId = sessionStorage.UserId;
      
      UserService.getUserByIdOptional(this.state.userId).then(res => {
        //this.state.isFound = true;
        let user = res.data;
        
        this.setState({email: user.email, firstName : user.fName, lastName : user.lName, userName : user.username, gender :user.gender, otherDetails :user.otherDetails});
        this.state.customer = user;
        console.log('Customer3 => ' + JSON.stringify(this.state.customer));
  
      });
      
    } 
    render() {
        return (
            
            <div className="updateprofile">
            <div class="userprofile">
            <ul class="nav2">
                <li class="list1"><a class="nav" href="">HOME</a></li>
                <li class="list1"><a class="nav" href="/CustomerProfile">View Profile</a></li>
                <li class="list1"><a class="nav" href="updateprofile">Update Profile</a></li>

            </ul>
            
                
               
            <div className="new">
                <div className="row">
                     <div className="card col-md-6 offset-md-3 offset-md-3" variant ="dark">
                        <div className = "card-body">
                    <form method="POST" onSubmit= {this.handleSubmit} width = "50%" >
                <center>
                <font size="7">Update Your Profile</font>
               
                   <br/>
                    <Avatar shape="square"  style={{
                    color : '#000000',
                    backgroundColor: 'white',
                    borderColor :'black',
                    }} size={175} icon={<UserOutlined />}/>
                    
                &nbsp;&nbsp;

                <font size="5">    UserName: {this.state.userName} </font></center>
                <br/>
                <br/>
        
         
         <div class="form-group row">
              <label  class="col-sm-2 col-form-label">Name</label>
              <div class="col-sm-5">
                <input type="text" name="firstName" value={this.state.firstName} className="form-control" onChange={this.handleChange} placeholder={this.state.firstName}></input>
                
              </div>
              <div class="col-sm-5">
              <input type="text"  name="lastName" value={this.state.lastName} className="form-control" onChange={this.handleChange} placeholder ={this.state.lastName}  />
              </div>
          </div>
          <div class="form-group row">
              <label class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input type="email"  size="25" name="email" value={this.state.email}  className="form-control" onChange={this.handleChange} placeholder={this.state.email}  required/>
              </div>
              
          </div>
          <div class="form-group row">
              <label class="col-sm-2 col-form-label">UserName</label>
              <div class="col-sm-10">
              <input type="text" value={this.state.userName} name="userName" className="form-control" placeholder = {this.state.userName}   onChange={this.handleChange}  />
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
        
         
                    
                    <label>Other Details </label>
                    <TextArea  raws="6" cols="25" name="otherDetails" value={this.state.otherDetails} placeholder = {this.state.otherDetails} className="form-control" onChange={this.handleChange}/>
                    
                    
                    
                    <br/><br/>

                    <center>

                        <Button type="submit" variant="danger" onClick={this.shoot}><font size="4">Delete</font></Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   
                        <Button type="submit" variant="primary" onClick={this.updateCustomer}><font size="4">Update</font></Button>
                        
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

export default UpdateProfileComponent;