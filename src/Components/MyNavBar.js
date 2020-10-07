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
    render() {
        return(
            
               
                
           
        <Navbar bg="dark" variant="dark">
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
      <Link to ={"UserLogin"} className = "nav-link">Login</Link>
      <Link to ={"registeruser"} className = "nav-link">Register</Link>
      <Link to ={"admin"} className = "nav-link"><RiAdminLine/>  Administrator</Link>
      <Link to ={"feedback"} className = "nav-link"> <FontAwesomeIcon icon={faBell} size="2x" /></Link>
      </Nav>
      </Navbar>
      

        

            );
    }
}


export default MyNavBar