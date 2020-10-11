import React from 'react';
import {Navbar , Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'
//import { BiBell } from "react-icons/bs"
//import {FiLogOut} from 'react-icons/bs'

//import logo from './mangologo.png'; // Tell webpack this JS file uses this image
//console.log(logo);


class AdminHeader extends React.Component {
    render() {
        return(
            
               
                
           
        <Navbar bg="dark" variant="dark" sticky = "top">
            
      <Nav className="mr-auto">
       <h1 class = "adminTopic">Admin Panel</h1>
      </Nav>
      <Nav>
      <Link to ={"bell"} className = "nav-link"> Notifications</Link>
      <Link to ={"logout"} className = "nav-link">Log Out</Link>
      
      </Nav>
      </Navbar>
      

        

            );
    }
}


export default AdminHeader;