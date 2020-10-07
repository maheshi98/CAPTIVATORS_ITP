import React, { Component} from "react";
import './Style.css';
import {Jumbotron, Col, Form,} from 'react-bootstrap';
import UtilityService from '../Services/UtilityService';
import Utilitynavbar from './UtilityNavbar';


export default class UtilityMonth extends Component {

  constructor(props) {

    super(props)
    this.state = {
        utility: [],
        uid:''
    };

    this.viewBtn = this.viewBtn.bind(this);
  }

  changeUidHandler = (event) =>{
    this.setState({uid: event.target.value});
  }

  viewBtn() {
    this.props.history.push('/ChartOfUtilityMonth');
  }

  componentDidMount() {
    UtilityService.getUtility().then((res) => {
      this.setState({ utility: res.data});
  });
  }

  render(){
    return(   
      <div>
      <Utilitynavbar></Utilitynavbar>
      <br/>
      
      <Jumbotron className = "bg-secondary text-white">

        
      <Col>
          <form>
          <center><h2>Utility of the Month</h2></center>

          <br/> <br/> <br/>

          <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label><div class = "AddUtility"> Select Utility : </div></Form.Label>
                    <Form.Control as="select" value = {this.state.uid} onChange = {this.changeUidHandler}>
                    <option>Select Utility Name</option>
                    {
                                this.state.utility.map(
                                    utility =>
                                        
                                        <option value= {utility.id} >{utility.utilityName}</option>       
                                )
                            }
                    </Form.Control>
                    </Form.Group>

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
                  <center><button class = "viewbtn" onClick = {this.viewBtn} >VIEW</button></center> <br/> <br/>
          </form>
      </Col> 

  </Jumbotron>       
</div>
    );
  }
}
