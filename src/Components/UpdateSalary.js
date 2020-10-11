import React, {Component} from 'react';
import {Jumbotron, Form, Col , Button } from 'react-bootstrap';
import SalaryService from '../Services/SalaryService';
import MyNavBar from './MyNavBar';

class UpdateSalary extends Component{
    constructor(props){
        super(props);
        
        this.state = {
           id: this.props.match.params.id,
          empID:'',
          basicSalary:'',
          netSalary:'',
          deduction:'',
          allowance:'',
       
          salary :[],
          isLoaded:false,
          total :0,
          isPayareaHidden:true
        }

        this.UpdateSalary = this.UpdateSalary.bind(this);

        this.detailChangeEmpID = this.detailChangeEmpID.bind(this);
        this.detailChangeBasic = this.detailChangeBasic.bind(this);
        this.detailChangeAllowances = this.detailChangeAllowances.bind(this);
        this.detailChangeNetSalary = this.detailChangeNetSalary.bind(this);
        this.detailChangeDeduction = this.detailChangeDeduction.bind(this);
      }

      componentDidMount(){

          SalaryService.getSalary().then( res => {
            this.setState({ salary: res.data });
          });

          SalaryService.getSalaryById(this.state.id).then( res =>{
          let salary = res.data;
          this.setState({
              empID : salary.empID,
              basicSalary: salary.basicSalary,
              netSalary:salary.netSalary,
              deduction:salary.deduction,
              allowance:salary.allowance,
          });
          });
      }
    
      UpdateSalary = (e) => {
        e.preventDefault();
        
        let salary = {empID:this.state.empID ,
           basicSalary:this.state.basicSalary,
           netSalary:this.state.netSalary, 
           deduction:this.state.deduction, 
           allowance:this.state.allowance  
          };
        console.log('salary =>' + JSON.stringify(salary));
       
    
      SalaryService.UpdateSalary(salary, this.state.id).then( res => {
        this.props.history.push('/SalaryList');
        
      });
        
    
       
      }
      
      detailChangeEmpID= (event) =>{
            this.setState({empID: event.target.value});
      }

      detailChangeBasic= (event) =>{
        this.setState({basicSalary: event.target.value});
       }

       detailChangeAllowances= (event) =>{
        this.setState({allowance: event.target.value});
      }
       
      detailChangeNetSalary= (event) =>{
        this.setState({netSalary: event.target.value});
  }

       detailChangeDeduction=(event) =>{
         this.setState({deduction:event.target.value});
       }

      cancel(){
          this.props.history.push('/SalaryList')
      }
    
        render(){
            return(
              <div>
                <MyNavBar></MyNavBar>
                <Jumbotron className = "bg-secondary text-white" style={{marginTop:"3cm"}}>
                     
                    <Col>
                    
                        <form>
                        <center><h2>Update Salary Details</h2></center>
    
                      
    
           <Form.Group controlId="empID">
            <Form.Label> Employee ID:</Form.Label>
            <Form.Control type="text" required name ='empID'
             value = {this.state.empID}
             onChange = {this.detailChangeEmpID} />
            </Form.Group>
             
            <Form.Group controlId="basicsalary">
            <Form.Label> Basic Salary:</Form.Label>
            <Form.Control type="text" required name ='basicSalary'
            value = {this.state.basicSalary}
           onChange = {this.detailChangeBasic} />
            </Form.Group>
    
            <Form.Group controlId="allowances">
            <Form.Label>Allowances:</Form.Label>
            <Form.Control type="text" required name ='allowance'
            value = {this.state.allowance}
            onChange = {this.detailChangeAllowances} />
            </Form.Group> 
          
    
            <Form.Group controlId="deductions">
            <Form.Label> Deduction:</Form.Label>
            <Form.Control type="text" required name ='deduction'
            value = {this.state.deduction}
            onChange = {this.detailChangeDeduction}/>
            </Form.Group>
    
            <Form.Group controlId="netSalary">
            <Form.Label> Net Salary:</Form.Label>
            <Form.Control type="text" required name ='netSalary'
            value = {this.state.netSalary}
           onChange = {this.detailChangeNetSalary} />
            </Form.Group>    
    
             <center>
                        <Button variant="primary"  size="lg" onClick={this.UpdateSalary} block>Update Salary Details</Button> 
                        <Button variant="danger"  size="lg" onClick={this.cancel.bind(this)} block>Cancel</Button>
                        </center>
                        </form>
                    </Col>  
                </Jumbotron>
                </div>
                
                
            );
        }
    }

export default UpdateSalary 