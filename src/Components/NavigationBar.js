import React from 'react';
//import './style.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

export default class NavigationBar extends React.Component {
    render(){
        return(
            <Navbar variant="dark" bg="dark" sticky="top"  >
                
                <Navbar.Brand href="#">Mango Restaurant</Navbar.Brand>

              <Nav className="mr-auto" >

              <div class = "NavbarTopic"><NavDropdown title="Profit Management" id="basic-nav-dropdown">
                        
                        <NavDropdown.Item href="profitMonth"> Monthly</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="profitYear">Yearly</NavDropdown.Item>
                        
                    </NavDropdown></div>              


                    <div class = "NavbarTopic"><NavDropdown title="Utility Management" id="basic-nav-dropdown">
                        
                        <NavDropdown.Item href="utilityMonth"> Monthly</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="utilityYear">Yearly</NavDropdown.Item>
                        
                    </NavDropdown></div>

                    <div class = "NavbarTopic"><NavDropdown title="Utility Management" id="basic-nav-dropdown">
                        
                        <NavDropdown.Item href="utilityList"> Utility List</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="costList">Utility Cost List</NavDropdown.Item>
                        
                    </NavDropdown></div>

                    
               </Nav> <br/> <br/>
               

            </Navbar> 
        );
    }
}