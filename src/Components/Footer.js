import React from 'react'
import {Container , Navbar } from 'react-bootstrap';
import {FaPhoneAlt , FaSearchLocation} from 'react-icons/fa'
class Footer extends React.Component{

    render(){
        let fullYear = new Date().getFullYear();
        return(
            <Navbar  bg="dark" variant="dark">
                <Container>
        <div className="opening-time footer">
        <h3 style = {{color : ' white'}}>
          Opening times
        </h3>
        <p>
         <span>Monday—Thursday: 08:00 — 22:00</span><br/> 
         <span>Friday—Saturday: 09:00 — 23:00 </span><br/>
         <span>Sunday: 10:00 — 17:00</span>
        </p>
       </div>
       <div className="contact-adress footer">
        <h3 style = {{color : ' white'}}>
          Contact
        </h3>
        <p>
          <span><FaPhoneAlt/> 077 735 5999</span><br/> 
          <span><FaSearchLocation/>Colombo - Kandy Rd</span><br/> 
          <span> Kalagedihena</span>
        </p>
      </div>
      <div className = " footer">
          {fullYear} , All rights reserved by CAPTIVATORS
      </div>
                    
                </Container>
            </Navbar>
        )
        
    }
}

export default Footer;