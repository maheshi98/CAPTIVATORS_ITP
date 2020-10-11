import React from 'react';
import {Navbar , Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import { RiAdminLine } from "react-icons/ri";
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import logo from './mangologo.png'; // Tell webpack this JS file uses this image
console.log(logo);


class MyNavBar extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            UserRole : null,
    
      
        };
      }

      componentDidMount(){
        window.sessionStorage.getItem("UserRole");
        this.state.UserRole = sessionStorage.UserRole;
        
       
    
      
      } 
    render(){
        if(sessionStorage.UserRole === '1') {
        
        return(
                   
           
        <Navbar bg="dark" variant="dark" style={{  position: 'absolute', left: '0px', width: '100%', overflow: 'hidden'}}>
            <Link className = "navbar-brand" to ={"home"}>
            <img
        src={logo} alt="Logo" className = 'logo'
        alt="React Bootstrap logo"
            />
            </Link>
      <Nav className="mr-auto">
       <Link to ={"/"} className = "nav-link">Home</Link>
       <Link to ={"my"} className = "nav-link">Menu</Link>
       <Link to ={"about"} className = "nav-link">About Us</Link>
      </Nav>
      <Nav>
      {/* <Link to ={"shop"} className = "nav-link"><FaShoppingCart/>      Shopping cart</Link> */}
      <Link to ={"UserLogin"} className = "nav-link">Login</Link>
      <Link to ={"registeruser"} className = "nav-link">Register</Link>
      <Link to ={"admin"} className = "nav-link"><RiAdminLine/>  Administrator</Link>
      <Link to ={"feedback"} className = "nav-link"> <FontAwesomeIcon icon={faBell} size="2x" /></Link>
      <Link to ={"logout"} className = "nav-link">logout</Link>

      </Nav>

      </Navbar>
      
            );

           
            }else if(sessionStorage.UserRole == '2'){
                return(
                   
                    <Navbar bg="dark" variant="dark" style={{  position: 'absolute', left: '0px', width: '100%', overflow: 'hidden'}}>
                     <Link className = "navbar-brand" to ={"home"}>
            <img
        src={logo} alt="Logo" className = 'logo'
        alt="React Bootstrap logo"
            />
            </Link>
                    <Nav className="mr-auto">
                    <Link to ={"/"} className = "nav-link">Home</Link>
                    <Link to ={"my"} className = "nav-link">Menu</Link>
                    <Link to ={"about"} className = "nav-link">About Us</Link>
                   </Nav>
                   <Nav>
                   <Link to ={"shop"} className = "nav-link"><FaShoppingCart/>      Shopping cart</Link>
                   <Link to ={"CustomerProfile"} className = "nav-link">Profile</Link>
                   <Link to ={"registeruser"} className = "nav-link">Register</Link>
                   <Link to ={"logout"} className = "nav-link">logout</Link>

                  
                   </Nav>
                   </Navbar>
                );

               
            }else{
                return(
                    <Navbar bg="dark" variant="dark" style={{  position: 'absolute', left: '0px', width: '100%', overflow:'initial'}}>
                        <Link className = "navbar-brand" to ={"home"}>
            <img
        src={logo} alt="Logo" className = 'logo'
        alt="React Bootstrap logo"
            />
            </Link>
                    <Nav className="mr-auto">
                    <Link to ={"/"} className = "nav-link">Home</Link>
                    <Link to ={"my"} className = "nav-link">Menu</Link>
                    <Link to ={"about"} className = "nav-link">About Us</Link>
                   </Nav>
                   <Nav>
                   <Link to ={"UserLogin"} className = "nav-link">Login</Link>
                   <Link to ={"registeruser"} className = "nav-link">Register</Link>

                  
                   </Nav>
                   </Navbar>
                );

        }
    }
}


export default MyNavBar