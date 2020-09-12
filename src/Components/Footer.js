import React from 'react'
import {Container , Navbar } from 'react-bootstrap';
import {FaPhoneAlt , FaSearchLocation} from 'react-icons/fa'
class Footer extends React.Component{

    render(){
        let fullYear = new Date().getFullYear();
        return(
            <Navbar  bg="dark" variant="dark">
                <Container>
        <div className="opening-time" className = " footer">
        <h3>
          Opening times
        </h3>
        <p>
         <span>Monday—Thursday: 08:00 — 22:00</span><br/> 
         <span>Friday—Saturday: 09:00 — 23:00 </span><br/>
         <span>Sunday: 10:00 — 17:00</span>
        </p>
       </div>
       <div className="contact-adress" className = " footer">
        <h3>
          Contact
        </h3>
        <p>
          <span><FaPhoneAlt/>  000 9283 8456</span><br/> 
          <span><FaSearchLocation/>  15 Florida Ave</span><br/> 
          <span>  Palo-Alto, 1111 CA</span>
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