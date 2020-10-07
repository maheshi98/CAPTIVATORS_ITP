
import React, { Component } from "react";
import {Form} from 'react-bootstrap';
import './Style.css';
import {Jumbotron, Col} from 'react-bootstrap';
import Utilitynavbar from './UtilityNavbar';


export default class ProfitYear extends Component {

  constructor(props) {

    super(props)
    this.state = {
       

    };
    this.viewBtn = this.viewBtn.bind(this);
   
}

viewBtn(){
  this.props.history.push('/ChartOfProfitYear');
}

  render(){
    return(
      <div>       
                 <Utilitynavbar></Utilitynavbar>
     <br></br>
      
      <Jumbotron className = "bg-secondary text-white">
                 
      <Col>
          <form>
          <center><h2>Profit of the Year</h2></center>

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

         

           <br/>
              <center><button class = "viewbtn" onClick = {this.viewBtn} >VIEW</button></center>
          </form>
      </Col>  
  </Jumbotron>
  </div>    

    );
  }
}