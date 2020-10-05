import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

import { RiAdminLine } from "react-icons/ri";

import logo from './mangologo.png'; // Tell webpack this JS file uses this image

console.log(logo);


class Navigationbar extends React.Component {
    constructor(props){
    super(props)
    this.state ={
        role : null
    }
   }

 
      
    componentDidMount() {
        window.sessionStorage.getItem("UserRole");
        //window.sessionStorage.getItem("UserId");
        this.state.role = sessionStorage.UserRole;
        console.log('sessionStorage.UserRole =>' + JSON.stringify(sessionStorage.UserRole));
        
    }
    
    


    
    render() {
       // window.sessionStorage.getItem("UserRole");
       // console.log('sessionStorage.UserRole =>' + JSON.stringify(this.state.role));
       // var role = sessionStorage.UserRole;
        window.sessionStorage.getItem("UserRole");
        //window.sessionStorage.getItem("UserId");
        this.state.role = sessionStorage.UserRole;
        console.log('sessionStorage.UserRole =>' + JSON.stringify(sessionStorage.UserRole));

if(this.state.role == "1"){
    return(
        <Navbar bg="dark" variant="dark">
        {/* <sidenavbar/> */}
        <Link className="navbar-brand" to={""}>
            <img
                src={logo} className='logo'
                alt="React Bootstrap logo"
            />
        </Link>
        <Nav className="mr-auto">
            <Link to={""} className="nav-link">Home</Link>
            <Link to={"my"} className="nav-link">Menu</Link>
            <Link to={"body"} className="nav-link">Category</Link>
        </Nav>
        
        <Nav>
            <Link to={"shop"} className="nav-link"><FaShoppingCart />      Shopping cart</Link>
            <Link to={"UserLogin"} className="nav-link">Login</Link>
            <Link to={"registeruser"} className="nav-link">Register</Link>
           
            <Link to={"admin"} className="nav-link"><RiAdminLine />  Administrator</Link>
            
        </Nav>
    </Navbar>
    )
}
else{return (
           


    <Navbar bg="dark" variant="dark">
        {/* <sidenavbar/> */}
        <Link className="navbar-brand" to={""}>
            <img
                src={logo} className='logo'
                alt="React Bootstrap logo"
            />
        </Link>
        <Nav className="mr-auto">
            <Link to={""} className="nav-link">Home</Link>
            <Link to={"my"} className="nav-link">Menu</Link>
            <Link to={"about"} className="nav-link">About Us</Link>
        </Nav>
        <Nav>
            <Link to={"shop"} className="nav-link"><FaShoppingCart />      Shopping cart</Link>
            <Link to={"UserLogin"} className="nav-link">Login</Link>
            <Link to={"registeruser"} className="nav-link">Register</Link>
           
           
            
        </Nav>
    </Navbar>




);



}
}}
        


export default Navigationbar