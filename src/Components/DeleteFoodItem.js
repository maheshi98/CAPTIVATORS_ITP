import React, {Component} from 'react';
import './Style.css';
import {Jumbotron, Form, Col} from 'react-bootstrap';

export default class DeleteFoodItem extends Component {
    render() {      
        return(
            <Jumbotron className = "bg-secondary text-white">
                 
                <Col>
                    <form>
                    <center><h2>Delete Food Item</h2></center>

                    <br/> <br/> <br/>

                   
                     
                     <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><div class = "updateItem">Food code:</div></Form.Label>
                        <Form.Control type="text"  required/>
                    </Form.Group> <br/><br/>

                     <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><div class = "updateItem">Add Food Item Image URL : </div></Form.Label>
                        <Form.Control type="text" placeholder="Enter Image URL" required/>
                    </Form.Group> <br/><br/>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label><div class = "updateItem">Category  : </div></Form.Label>
                        <Form.Control type="text" required />
                    </Form.Group> <br/><br/>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label><div class = "updateItem">Food Name  : </div></Form.Label>
                        <Form.Control type="text" required />

                    </Form.Group> <br/><br/>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label><div class = "updateItem">Description  : </div></Form.Label>
                        <Form.Control as="textarea" rows="4" cols="80" required/>
                    </Form.Group> <br/><br/>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label><div class = "updateItem">Price: </div></Form.Label>
                        <Form.Control type="text" placeholder = "Rs. " required />
                    </Form.Group> <br/><br/>


                        <center><input type = "submit" name = "submit" value = "Delete" class = "updateBtn" />
                        <input type = "reset" name = "reset" value = "Cancel" class = "cancelBtn" /></center>

                    </form>
                </Col>  
            </Jumbotron>
        );
    }
}