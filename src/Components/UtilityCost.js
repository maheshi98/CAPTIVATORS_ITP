
import React, {Component} from 'react';
import './Style.css';
import {Jumbotron, Form, Col} from 'react-bootstrap';
import CostService from '../Services/CostService';
import UtilityService from '../Services/UtilityService';
import Utilitynavbar from './UtilityNavbar';
import MyNavBar from './MyNavBar';


export default class UtilityCost extends Component {

    constructor(props) {
        super(props)

        this.state = {
            utility: [],
            idCost: this.props.match.params.idCost,
            
            year: '',
            month: '',
            cost: '',
            uname:''
        }

        this.changeYearHandler = this.changeYearHandler.bind(this);
        this.changeUidHandler = this.changeUidHandler.bind(this);
        this.changeMonthHandler = this.changeMonthHandler.bind(this);
        this.changeCostHandler = this.changeCostHandler.bind(this);
        this.submitOrUpdateCostBtn = this.submitOrUpdateCostBtn.bind(this);
    }

    componentDidMount() {

        UtilityService.getUtility().then((res) => {
            this.setState({ utility: res.data});
        });

        if(this.state.idCost === '_cost') {
            return
        }

        else{
            CostService.getUtilityCostById(this.state.idCost).then( res => {
                let utilitycost = res.data;
                this.setState({ year: utilitycost.year,
                                month: utilitycost.month,
                                cost: utilitycost.cost
                });
            });
        }

    }

    submitOrUpdateCostBtn = (e) => {
        e.preventDefault();

        let utilitycost = {year: this.state.year, month: this.state.month, cost: this.state.cost , utilityName:this.state.uname};
        console.log('utilitycost => ' + JSON.stringify(utilitycost));

        if(this.state.idCost === '_cost') {
            CostService.createUtilityCost(utilitycost).then(res => {
                this.props.history.push('/costList');
            });
        }

        else{
            CostService.updateUtilityCost(utilitycost, this.state.idCost).then( res => {
                this.props.history.push('/costList');
            });
        }

        
    }

    changeUidHandler = (event) =>{
        this.setState({uname: event.target.value});
    }

    changeYearHandler = (event) =>  {
        this.setState({year: event.target.value});
    }

    changeMonthHandler = (event) =>  {
        this.setState({month: event.target.value});
    }

    changeCostHandler = (event) =>  {
        this.setState({cost: event.target.value});
    }

    cancel() {
        this.props.history.push('/costList');
    }

    getTopic(){
        if(this.state.idCost === '_cost') {
            return <h2 className = "text-center">Insert Details of the Utility</h2>
        }
        else{
            return <h2 className = "text-center">Update Details of the Utility</h2>
        }
    }

    getTextBox(){
        if(this.state.idCost === '_cost') {
            return  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label><div class = "AddUtility"> Select Utility : </div></Form.Label>
                    <Form.Control as="select" value = {this.state.uname} onChange = {this.changeUidHandler}>
                    <option>Select Utility Name</option>
                    {
                                this.state.utility.map(
                                    utility =>
                                        
                                        <option>{utility.utilityName}</option>       
                                )
                            }
                    </Form.Control>
                    </Form.Group>
        }
        else{
            return 
        }
    }

    

    render() {
        return(
            <div>
                <MyNavBar></MyNavBar>
            <div style ={{marginTop :'2.5cm'}}>
            <Utilitynavbar></Utilitynavbar>
            <br/>
            
            <Jumbotron className = "bg-secondary text-white">
                 
                <Col>
                    <form>
                    {
                        this.getTopic()
                    }

                    <br/> <br/> <br/>

                    {
                        this.getTextBox()
                    }

                    <Form.Row>
                        <Col>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label><div class = "AddUtility"> Year : </div></Form.Label>
                        <Form.Control as="select" name = "year" 
                            value = {this.state.year} onChange = {this.changeYearHandler} >
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
                        

                        <Col>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label><div class = "AddUtility"> Month : </div></Form.Label>
                        <Form.Control as="select" name = "month" 
                            value = {this.state.month} onChange = {this.changeMonthHandler} >
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
                    

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><div class = "AddUtility"> Cost of the Utility : </div></Form.Label>
                        <Form.Control  type="text" placeholder="Enter cost value" name = "cost" 
                            value = {this.state.cost} onChange = {this.changeCostHandler} required />
                        
                    </Form.Group> <br/><br/> <br/>                     

                        <center>
                            <button style = {{width: "250px"}} class = "sumbitbtn" onClick = {this.submitOrUpdateCostBtn} >Submit</button>
                            <button style = {{width: "250px",marginLeft: "30px"}} class = "cancelbtn" onClick = {this.cancel.bind(this)}>Cancel</button>
                        </center>
                     <br/>
                    </form>
                </Col>  
            </Jumbotron>
            </div>
            </div>
        );
    }
}