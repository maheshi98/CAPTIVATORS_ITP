import React, { Component } from 'react';
import '../login.css';
import Form from 'react-bootstrap/Form'
import UserService from '../service/UserService';
import Button from 'react-bootstrap/Button';
import MyNavBar from './MyNavBar'


class UserLoginComponent extends Component {
  constructor(props){
    super(props);
    
    this.state = {
    currentUser : [],
    userInvalid : [],
  
    email : null,
    password : null,
    error : null,
    isFound : false,
    isValid : false,

    };
  }

  handleChange = this.handleChange.bind(this);
  shoot = this.shoot.bind(this);
  //ValidateUser = this.ValidateUser.bind(this);

  handleChange(event) {  
    this.setState({
      [event.target.name]: event.target.value,
      
  });

  
}

  shoot(event){
    //console.log(this.state.email , this.state.password);
   /* UserService.getUserById(this.state.email).then(res => {
      let user = res.data;
      console.log('User => ' + JSON.stringify(user));
      this.props.history.push("/CustomerProfile")
  });*/
      event.preventDefault();

      UserService.getUserByIdOptional(this.state.email).then(res => {
        this.state.isFound = true;
        let user = res.data;
        console.log('User => ' + JSON.stringify(user));
        //this.props.history.push("/CustomerProfile");

        if(user == null){
          this.state.isFound = false;
          alert("Invalid Credentials!!");
          return;
        }
        
        if(this.state.email == user.email && this.state.password == user.password){
          this.state.isFound = true;
          window.sessionStorage.setItem("UserId", user.email);
          this.state.isValid = true;
          this.state.currentUser = user;
          


        } else{
  
          //window.sessionStorage.setItem("UserId", "NF");
          this.state.isValid =  false;
        }

        
        if(this.state.isValid == true){
          if(user.role == 1){
            window.sessionStorage.setItem("UserRole",1);
            this.state.isFound = true;
            this.props.history.push('/admin');
            window.sessionStorage.setItem("UserRole",1);
          }
          else if(user.role == 2){
            window.sessionStorage.setItem("UserRole",2);
            this.state.isFound = true;
            this.props.history.push('/CustomerProfile');
            window.sessionStorage.setItem("UserRole",2);
          }
        } else if(this.state.isValid == false && this.state.isFound == true) {
          this.state.isFound = true;
          alert("Password does not match with the given email!");
          this.props.history.push('/UserLogin');
  
        } 
        
  
        //this.props.history.push("/CustomerProfile")
      });
    


      //this.ValidateUser();
     
     
        
       
      }
     
 
    render() {

      return (
      
        // <div class="">
        // <center>      
        // <h1 id="login">User Login Form</h1>
        // </center>
        // <br/> 
        // <center>
        // <div class="login">
        // <h2 id="login">Login Here</h2>
        // <Form method='' action='' name="Cuslogin">
        // <label>Email</label>
        // <input type = "email" value={this.state.email}  onChange={this.handleChange} className="form-control"name="email" placeholder="Enter Email" required/>
        // <label>Password</label>
        // <div>
        // <input type = "password" value={this.state.password} onChange={this.handleChange}className="form-control" name="password" placeholder="Enter Password" required/>
        // </div>        
        // <a href="forget">Forget Your Password?</a>
        // <br/><br/>
        // <Button type="submit" variant="primary btn-lg" onClick={this.shoot} ><font size="4">Login</font></Button>
        // </Form>
        // </div>
        // </center>  
        // </div>

<div>
<MyNavBar/>

<div className= "body"style ={{ marginTop:'3cm' , marginBottom : "3cm"}}>

<meta charSet="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Login</title>
<div className="container-fluid">
  <div className="row">
    <div className="col-md-8 bg-login">
            <div className="content" style = {{paddingRight : '10cm' , fontfamily: 'Bad Script'}}>

        <h1>Welcome To Mango Restaurant</h1>
        <h5>Check our foods for your journey</h5> 
        
      </div>
    </div>
    <div className="col-md-4 login-area">
      <form>
        <center>
        <div class="login">
        <h2 id="login">Login Here</h2>
        <Form method='' action='' name="Cuslogin">
        <label>Email</label>
        <input type = "email" value={this.state.email}  onChange={this.handleChange} className="form-control"name="email" placeholder="Enter Email" required/>
        <label>Password</label>
        <div>
        <input type = "password" value={this.state.password} onChange={this.handleChange}className="form-control" name="password" placeholder="Enter Password" required/>
        </div>        
        <a href="forget">Forget Your Password?</a>
        <br/><br/>
        <Button type="submit" variant="primary btn-lg" onClick={this.shoot} className="btn btn-danger btn-block" ><font size="4">Login</font></Button>
        </Form>
        </div>
        </center>  
      </form>
    </div>
  </div>
</div>
</div> 
</div>      
        
        
  
      );
    }
   }
   
   export default UserLoginComponent;