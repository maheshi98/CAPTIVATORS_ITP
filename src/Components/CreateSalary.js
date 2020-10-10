import React, {Component} from 'react';
import {Jumbotron, Form, Col , Button } from 'react-bootstrap';
import SalaryService from '../Services/SalaryService';
import MyNavBar from './MyNavBar';
 
export default class CreateSalary extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      errors: {},
      empID:'',
      basicSalary:'',
      netSalary:'',
      deduction:'',
      allowance:''
    }
    this.detailChange = this.detailChange.bind(this);
    this.submitdet = this.submitdet.bind(this);

    this.state={
      salary :[],
      isLoaded:false,
      total :0,
      isPayareaHidden:true
    }
  }

  submitdet(event){
    event.preventDefault();
    
    let salary = {empID:this.state.empID, basicSalary:this.state.basicSalary,netSalary:this.state.netSalary, deduction:this.state.deduction, allowance:this.state.allowance , }
    console.log('salary =>' + JSON.stringify(salary))


    SalaryService.createSalary(salary).then(res =>{
       this.props.history.push("/SalaryList")
    }
    );
  }
  detailChange(event){
    this.setState({
      [event.target.name]:event.target.value
    });
  }
  componentDidMount(){
    SalaryService.getSalary().then((res) =>{
      this.setState({salary : res.data})
    });
  }

  cancel(){
      this.props.history.push('/SalaryList')
  }

    render(){
        return(
            <div>
              <MyNavBar></MyNavBar>
            <Jumbotron className = "bg-secondary text-white" style ={{marginTop :"3.5cm" , width :"20cm"}}>
                 
                <Col>
                
                    <form>
                    <center><h2>Add Salary Details</h2></center>

                  

       <Form.Group controlId="empID">
        <Form.Label> Employee ID:</Form.Label>
        <Form.Control type="text" required name ='empID'
         value = {this.state.empID}
         onChange = {this.detailChange} />
        </Form.Group>
         
        <Form.Group controlId="basicsalary">
        <Form.Label> Basic Salary:</Form.Label>
        <Form.Control type="text" required name ='basicSalary'
        value = {this.state.basicSalary}
       onChange = {this.detailChange} />
        </Form.Group>

        <Form.Group controlId="allowances">
        <Form.Label>Allowances:</Form.Label>
        <Form.Control type="text" required name ='allowance'
        value = {this.state.allowance}
        onChange = {this.detailChange} />
        </Form.Group> 
      

        <Form.Group controlId="deductions">
        <Form.Label> Deduction:</Form.Label>
        <Form.Control type="text" required name ='deduction'
        value = {this.state.deduction}
        onChange = {this.detailChange}/>
        </Form.Group>

        <Form.Group controlId="netSalary">
        <Form.Label> Net Salary:</Form.Label>
        <Form.Control type="text" required name ='netSalary'
        value = {this.state.netSalary}
       onChange = {this.detailChange} />
        </Form.Group>    

         <center>
                    <Button variant="primary"  size="lg" onClick={this.submitdet} block>Add Salary Details</Button> 
                    <Button variant="danger"  size="lg" onClick={this.cancel.bind(this)} block>Cancel</Button>
                    </center>
                    </form>
                </Col>  
            </Jumbotron>

            </div> 
            
        );
    }
}


