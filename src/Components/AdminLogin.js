import React, { Component } from 'react';
import '../login.css';
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form'
import CustomerService from '../service/CustomerService';

class AdminLoginComponent extends Component {

 
    render() {
      return (
        <div class="">
        

        <center>
        
        <h1 id="login">Admin Login Form</h1>
        </center>
        
        <br/>
      
        
        
        
        <center>
        
        <Card className = {"border border-light bg-light text-black"} style={{ alignContent:'center', width:'25cm'}}>
        <div class="login">
        
        <h2 id="login">Login Here</h2>
        
        <center>
        <Form method='' action='' name="Admlogin">
        
        <p>Email</p>
        <input type = "email" name="username" placeholder="Enter Email" required/>
        
        <p>Password</p>
        <input type = "password" name="password" placeholder="Enter Password" required/>
        
        <a href="forget">Forget Your Password?</a>
        
        <br/><br/>
        
        <input type="submit" name="" value="Login"/>
        </Form>
        </center>
        
        
        
        </div>
        </Card>
        </center>
       
        
        </div>
        
        
        
  
      );
    }
   }
   
   export default AdminLoginComponent;