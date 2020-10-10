import React, {Component} from 'react';
import {Jumbotron, Form, Col} from 'react-bootstrap';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployee extends Component{
    constructor(props){
        super(props)
        this.state={
         
          id: this.props.match.params.id,  
         firstName:'',
         middleName:'',
         lastName:'',
         empNIC:'',
         empID:'',
         empAddress:'',
         emppost:'',
         empDep:'',
         empedu:'',
         empAge:'',
         empStatus:'',
         empGender:'',
         pnumber:'',
         hnumber:'',
         empEmail:'',
     
         employee :[],
          isLoaded:false,
          total :0,
          isPayareaHidden:true
        }
        this.ChangeFirstName = this.ChangeFirstName.bind(this);
        this.ChangeMiddleName = this.ChangeMiddleName.bind(this);
        this.LastNameChange = this.LastNameChange.bind(this);
        this.NICChange = this.NICChange.bind(this);
        this.EmpNumChange = this.EmpNumChange.bind(this);
        this.AddressChange = this.AddressChange.bind(this);
        this.PositonChange = this.PositonChange.bind(this);
        this.DepChange = this.DepChange.bind(this);
        this.QualificationChange = this.QualificationChange.bind(this);
        this.AgeChange = this.AgeChange.bind(this);
        this.StatusChange = this.StatusChange.bind(this);
        this.GenderChange = this.GenderChange.bind(this);
        this.PnumChange = this.PnumChange.bind(this);
        this.HnumChange = this.HnumChange.bind(this);
        this.EmailChange = this.EmailChange.bind(this);
        this.UpdateEmployee = this.UpdateEmployee.bind(this);
     
      }

      componentDidMount(){
          EmployeeService.getEmployeeById(this.state.id).then((res) =>{
             let employee = res.data;
             this.setState({firstName : employee.firstName,
                            middleName : employee.middleName,
                            lastName : employee.lastName,
                            empNIC: employee.empNIC,
                            empID : employee.empID,
                            empAddress:employee.empAddress,
                            emppost : employee.emppost,
                            empDep : employee.empDep,
                            empedu:employee.empedu,
                            empAge: employee.empAge,
                            empStatus : employee.empStatus,
                            empGender :employee.empGender,
                            pnumber:employee.pnumber,
                            hnumber:employee.hnumber,
                            empEmail:employee.empEmail })
          });
      }
      UpdateEmployee = (e) =>{
       e.preventDefault();
       let employee ={
         firstName: this.state.firstName , 
                      middleName : this.state.middleName , 
                      lastName : this.state.lastName,
                      empNIC : this.state.empNIC,
                      empID : this.state.empID,
                      empAddress : this.state.empAddress,
                      emppost :this.state.emppost,
                     empDep:this.state.empDep,
                     empedu  : this.state.empedu,
                     empAge :this.state.empAge,
                     empStatus :this.state.empStatus,
                     empGender : this.state.empGender,
                     pnumber : this.state.pnumber,
                   hnumber:this.state.hnumber,
                   empEmail:this.state.empEmail};
                   console.log('employee =>' +JSON.stringify(employee));

                   EmployeeService.UpdateEmployee(employee,this.state.id).then(res => {
                     this.props.history.push('/EmpList');
                   })
     }
     
     ChangeFirstName = (event) => {
        this.setState({firstName : event.target.value});
      }
      ChangeMiddleName = (event) => {
       this.setState({middleName : event.target.value});
     }
     LastNameChange = (event) => {
       this.setState({lastName : event.target.value});
     }
     NICChange = (event) => {
       this.setState({empNIC : event.target.value});
     }
     EmpNumChange = (event) => {
       this.setState({empID : event.target.value});
     }
     AddressChange = (event) => {
       this.setState({empAddress : event.target.value});
     }
     PositonChange = (event) => {
       this.setState({emppost : event.target.value});
     }
     DepChange = (event) => {
       this.setState({empDep : event.target.value});
     }
     QualificationChange = (event) => {
       this.setState({empedu : event.target.value});
     }
     AgeChange = (event) => {
       this.setState({empAge : event.target.value});
     }
     StatusChange = (event) => {
       this.setState({empStatus : event.target.value}); 
     }
     GenderChange = (event)=>{
       this.setState({empGender : event.target.value});
     }
     PnumChange = (event) => {
       this.setState({pnumber : event.target.value});
     }
     HnumChange = (event) => {
       this.setState({hnumber : event.target.value});
     }
     EmailChange = (event) => {
       this.setState({empEmail : event.target.value});
     }
     
     
     render(){
             return(
                 
                 <Jumbotron className = "bg-secondary text-white">
                      
                     <Col>
                     
                         <form>
                         <center><h2>Update Employee Details</h2></center>
     
                         <br/> <br/> <br/>
     
                         <Form.Group >
             <Form.Label >Employee Name :</Form.Label>
             <Form.Row>
             <Col>
             <Form.Control placeholder="First name" controlId="FirstName"  value = {this.state.firstName}
              onChange = {this.ChangeFirstName} required />
             </Col>
             <Col>
             <Form.Control placeholder="Middle name" controlId="MiddleName"  value = {this.state.middleName}
              onChange = {this.ChangeMiddleName}required/>
             </Col>
             <Col>
             <Form.Control placeholder="Last name" controlId="LastName" value = {this.state.lastName}
              onChange = {this.LastNameChange} />
             </Col>
             </Form.Row>
           </Form.Group>
          
             <Form.Group>
             <Form.Row>
             <Col>
             <Form.Label >National ID card number:</Form.Label>
             <Form.Control  type="text" placeholder="**********v" controlId="empNID" value = {this.state.empNIC}
              onChange = {this.NICChange} required />
             </Col>
             <Col>
             <Form.Label>Employee Number :</Form.Label>
             <Form.Control type="text"  placeholder="Emp***"  controlId="empID" value = {this.state.empID}
              onChange = {this.EmpNumChange} required/>
             </Col>
            </Form.Row>
           </Form.Group>
       
             <Form.Group controlId="empAddress">
             <Form.Label> Employee Address:</Form.Label>
             <Form.Control type="text"  placeholder="No/***" value = {this.state.empAddress}
              onChange = {this.AddressChange} />
             </Form.Group>
          
             <Form.Group>
             <Form.Row>
             <Col>
             <Form.Label >Employee Position :</Form.Label>
             <Form.Control  type="text" placeholder="position" controlId="emppost" value = {this.state.emppost}
              onChange = {this.PositonChange}/>
             </Col>
             <Col>
             <Form.Label >Employee Department</Form.Label>
             <Form.Control type="text"  placeholder="Department"  controlId="empDep" value = {this.state.empDep}
              onChange = {this.DepChange}/>
             </Col>
            </Form.Row>
           </Form.Group>
       
             <Form.Group controlId="empedu">
             <Form.Label>Employee Qualifications  :</Form.Label>
             <Form.Control type="text"  placeholder="Educational Qualifications" controlId="empedu" value = {this.state.empedu}
              onChange = {this.QualificationChange} />
             </Form.Group>
       
       <Form.Row>
             <Form.Group as={Col} controlId="empAge" value = {this.state.empAge}
              onChange = {this.AgeChange}>
             <Form.Label>Age</Form.Label>
             <Form.Control />
             </Form.Group>
       
             <Form.Group as={Col} controlId="empStatus" value = {this.state.empStatus}
              onChange = {this.StatusChange}>
             <Form.Label>Marital Status</Form.Label>
             <Form.Control as="select" defaultValue="Choose">
             <option>Choose</option>
               <option>Married</option>
               <option>Single</option>
             </Form.Control>
             </Form.Group>
       
             <Form.Group as={Col} controlId="empGender" value = {this.state.empGender}
              onChange = {this.GenderChange}>
             <Form.Label>Gender</Form.Label>
             <Form.Control as="select" defaultValue="Choose">
             <option>Choose</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
            </Form.Group>
       </Form.Row>
       
             <Form.Group >
             <Form.Label>Employee Phone Number  :</Form.Label>
             <Form.Row>
               <Col>
             <Form.Control placeholder="Personal" controlId="pnumber" value = {this.state.pnumber}
              onChange = {this.PnumChange} />
               </Col>
               <Col>
             <Form.Control placeholder="Home" controlId="hnumber" value = {this.state.hnumber}
              onChange = {this.HnumChange} />
               </Col>
              </Form.Row>
              </Form.Group>
       
              <Form.Group controlId="empEmail">
             <Form.Label>Email :</Form.Label>
             <Form.Control type="text"  placeholder="****@gmail.com" value = {this.state.empEmail}
              onChange = {this.EmailChange}/>
             </Form.Group>  
             
      <center>
        <input type = "submit" name = "submit" value = "Update New Employee" class = "addbtn1" onClick={this.UpdateEmployee} />
     </center>
     
                         </form>
                     </Col>  
                 </Jumbotron>
     
                 
                 
             );
         }
     }
     
export default UpdateEmployee