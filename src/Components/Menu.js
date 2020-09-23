import React, { Component } from 'react'
import {Card , Form} from 'react-bootstrap';
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


export default class Menu extends Component {
    constructor(props) {
        super(props)

        this.submitDet= this.submitDet.bind(this);
        this.state = {
                 
        }

        
    }

    componentDidMount() {
        
    }

    submitDet(){
        this.props.history.push("/shop")
    }

    render() {
        return (
            <div>
            <Card style={{ width: '8cm' }}>
            <Card.Body>
          <Card.Title></Card.Title>
          
          <img
            src="https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl.jpg" alt="Logo" style={{width:"7cm"}}

          />
        <br/>
        <Card.Text as={Col} >
        <Form.Group  as={Col} controlId="">
                                <Form.Label>Creamy pasta : </Form.Label>
                                <Form.Label>Rs 750.00</Form.Label>
                                
                            </Form.Group>
              <button onClick= {this.submitDet}>
              <FontAwesomeIcon icon={faCartPlus} size="3x" color="red"/> 
              </button>
              
        </Card.Text>
      
         
        </Card.Body>
                
                </Card> 
            </div>
        )
    }
}
