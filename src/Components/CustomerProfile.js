import React, { Component } from 'react';
import {Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {MailOutlined} from '@ant-design/icons';
import {AuditOutlined} from '@ant-design/icons';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import UserService from '../service/UserService';
import MyNavBar from './MyNavBar';


class CustomerProfileComponent extends Component {
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

    };
  }

  /*componentDidMount(){
    CustomerService.getCustomers().then
  }*/
  
  editCustomer = this.editCustomer.bind(this);
  deleteCustomer = this.deleteCustomer.bind(this);

  editCustomer(id){
    this.props.history.push(`updateprofile/${id}`);


}

deleteCustomer(event){
  event.preventDefault();
//this.props.history.push(`/deletepromotions/${id}`);
 UserService.deleteCustomer(this.state.email4).then((res) =>{
  window.sessionStorage.removeItem("UserId");
    //this.setState({promotions : this.state.promotions.filter(promotion => promotion.pCode != id)})
    this.props.history.push('/UserLogin');
} );


}

  componentDidMount(){
    window.sessionStorage.getItem("UserId");
    this.state.userId = sessionStorage.UserId;

    UserService.getUserByIdOptional(this.state.userId).then(res => {
      this.state.isFound = true;
      let user = res.data;
      
      this.setState({email: user.email, firstName : user.fName, lastName : user.lName, userName : user.username, gender :user.gender, otherDetails :user.otherDetails});
      this.state.customer = user;
      console.log('Customer2 => ' + JSON.stringify(this.state.customer));

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
  render() {
      return (
        <div className="customerprofile">
          <MyNavBar/>
         <div class="userprofile">
         <ul class="nav2">
           <li class="list1"><a class="nav" href="">HOME</a></li>
           <li class="list1"><a class="nav" href="/CustomerProfile">View Profile</a></li>
           <li class="list1"><a class="nav" href="/updateprofile">Update Profile</a></li>
 
         </ul>
         <center>
         <Card className = {"border border-light bg-light text-black"} style={{ alignContent:'center', width:'35cm'}}>
         <div className="card col-md-6 offset-md-3 offset-md-3" variant ="dark">
             <div className = "card-body">
         <form  method="POST"  width = "30%">
                <center>
                <font size="7">My User Profile</font>
                <br/>
                   
                    <Avatar shape="square"  style={{
                    color : '#000000',
                    backgroundColor: 'white',
                    }} size={175} icon={<UserOutlined />}/>
                    
                    &nbsp;&nbsp;
                  <font size="5">    UserName:  {this.state.userName}</font></center>
                <br/>
                <table>
                
                  <Avatar shape="square"  style={{
                      color : '#000000',
                      backgroundColor: 'white',
                      }} size={65} icon={<UserOutlined />}/>
                <font size="4">    Name : {this.state.firstName} {this.state.lastName}</font>
                
                      <br/>

            <Avatar style={{
                    color : '#000000',
                    backgroundColor: 'white',
            }}size={65} shape="square" icon={<MailOutlined />}/>&nbsp;&nbsp;<font size="4">    Email : {sessionStorage.UserId}</font>
        
        <br/>
        <Avatar shape="square"  style={{
                      color : '#000000',
                      backgroundColor: 'white',
                      }} size={65} icon={<UserOutlined />}/>
                  &nbsp;&nbsp;<font size="4">    Gender : {this.state.gender}</font>
                      <br/>

                      
                  <Avatar shape="square"  style={{
                      color : '#000000',
                      backgroundColor: 'white',
                      }} size={65} icon={<AuditOutlined />}/>
                  &nbsp;&nbsp;<font size="4">    Other Details : {this.state.otherDetails} </font>
                      <br/>
                    </table>
                    <br/><br/>
                    <center>

                    <Button type="submit" variant="danger" onClick={this.deleteCustomer}><font size="4">Delete</font></Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <Button type="submit" variant="primary" onClick = { () => this.editCustomer(this.state.email)}><font size="4">Update</font></Button>

                    </center>
        </form>
        </div>
        </div>
        </Card>
        </center>
         </div>
         </div>
  
      );
    }
}
  
export default CustomerProfileComponent;