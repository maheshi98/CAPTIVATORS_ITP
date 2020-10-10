import React, { Component } from 'react'
import {Navbar , Nav } from 'react-bootstrap'; 
 import {Container, Row, Col} from 'react-bootstrap';
export default class Employeenavbar extends Component {
    

    render() {
        return (
            <div>
                 <Navbar className= "navbar"  bg="dark" variant="dark"  style={{marginTop: "3cm", height :"cm"}}>
                  <Navbar.Brand >
                    <Nav.Link href="/EmpList">Employee Management</Nav.Link> </Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/SalaryList">Employee Salary Details</Nav.Link>
                     </Nav>
                
                </Navbar> <br/> <br/>
            </div>
        )
    }
}
