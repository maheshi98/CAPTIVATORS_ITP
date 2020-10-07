import React, { Component } from "react";
import './style.css';
import {Jumbotron, Col, Form} from 'react-bootstrap';

export default class ProfitMonth extends Component {

  constructor(props) {

    super(props)
    this.state = {
       

    };
    this.viewBtn = this.viewBtn.bind(this);
   
}

viewBtn(){
  this.props.history.push('/ChartOfProfitMonth');
}

  render(){
    return(


      <Jumbotron className = "bg-secondary text-white">
                 
      <Col>
          <form>
          <center><h2>Profit of the Month</h2></center>

          <br/> <br/> 

          <Form.Row>
              <Col>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label><div class = "AddUtility">Select Year : </div></Form.Label>
                  <Form.Control as="select">
                      <option>Select Year</option>
                      <option>2020</option>
                      <option>2019</option>
                      <option>2018</option>
                      <option>2017</option>
                      <option>2016</option>
                      <option>2015</option>
                      <option>2014</option>
                      <option>2013</option>
                  </Form.Control>
                </Form.Group>
              </Col>
         
          </Form.Row>

          <Form.Row>
              <Col>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label><div class = "AddUtility">Select Month : </div></Form.Label>
                  <Form.Control as="select">
                            <option>Select Month</option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                  </Form.Control>
                </Form.Group>
              </Col>
         
          </Form.Row>
           <br/>
              <center><button class = "viewbtn" onClick = {this.viewBtn} >VIEW</button></center> <br/>
          </form>
      </Col>  
  </Jumbotron>
          

    );
  }
}