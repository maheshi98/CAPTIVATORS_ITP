import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Form from './Form';
import Form2 from './Form2';
import {Navbar,Nav} from 'react-bootstrap';

class Navigation extends Component{

    render(){
        return(
          <Navbar bg="dark" variant="dark">
            <Link to ={""} className = "navbar-brand">Mango Restaurant</Link>
            <Nav className="mr-auto">
      <Link to={"/DriverList"} className = "nav-link">Driver List</Link>
      <Link to={"/VehicleList"} className = "nav-link">Vehicle List</Link>
    </Nav>
          </Navbar>
      )
    }
}
export default Navigation;