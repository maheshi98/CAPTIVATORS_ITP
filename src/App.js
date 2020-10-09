// import React from 'react';
// import {BrowserRouter as Switch , Route} from 'react-router-dom';
// import {Navbar , Nav } from 'react-bootstrap'; 
// import {Container, Row, Col} from 'react-bootstrap';

// import EmpList from './Components/EmpList';
// import CreateEmp from './Components/CreateEmp';
// import SalaryList from './Components/SalaryList';
// import CreateSalary from './Components/CreateSalary';
// import UpdateSalary from './Components/UpdateSalary';
// import UpdateEmployee from './Components/UpdateEmployee';
// function App() {

//   const marginLeft = {
//     marginLeft : "300px"
//   };

//   return (
//     <div>
//     <Navbar className= "navbar"  bg="dark" variant="dark" >
//      <Navbar.Brand >
//        <Nav.Link href="/EmpList">Employee Management</Nav.Link> </Navbar.Brand>
//      <Nav className="mr-auto">
//        <Nav.Link href="/CreateEmp">Add New Employee</Nav.Link>
//        <Nav.Link href="/SalaryList">Employee Salary Details</Nav.Link>
//        <Nav.Link href="/CreateSalary">Add New Salary Details</Nav.Link>
//         </Nav>
    
//    </Navbar> <br/> <br/>

//     <Container>
//           <Row>
//               <Col lg = {500} style = {marginLeft} />
//               <Switch> 
//                 <Route exact path="/CreateEmp" component = {CreateEmp}/>
//                 <Route exact path="/EmpList" component = {EmpList}/>
//                 <Route exact path="/SalaryList" component = {SalaryList}/>
//                 <Route exact path="/CreateSalary" component = {CreateSalary}/>
//                 <Route exact path="/UpdateSalary/:id" component = {UpdateSalary}/>
//                 <Route exact path="/UpdateEmployee/:id" component = {UpdateEmployee}/>

//     </Switch>
//           </Row>
//         </Container>
  
  
  
// </div>);
// }

// export default App;
