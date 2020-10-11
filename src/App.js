// import React from 'react';
// import './App.css';
// import './Form2.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// import Navigation from './Components/Navigation';
// import Home from './Components/Home';
// import Form2 from './Components/Form2';
// import DriverList from './Components/DriverList';
// import VehicleList from './Components/VehicleList';
// import {Container,Row,Col} from 'react-bootstrap';
// import Form1 from './Components/Form';
// import UpdateDriver from './Components/UpdateDriver';
// import UpdateVehicle from './Components/UpdateVehicle';

// function App() {

//   const marginLeft = {
//     marginLeft : "250px"
//   };

//   return (

    

// <div className="App">
      
//       <header className="App-header">
//         <p>
//           Mango Restaurant
//         </p> <br/><br/>
//         <Router>
//         <Navigation/> <br/><br/>
//           <Container>
//             <Row>
//             <Col lg = {500} style = {marginLeft} />
//               <Switch>
//               <Route path = "/" exact component = {Home}/>
//               <Route path = "/Form" exact component = {Form1}/>
//               <Route path = "/Form2" exact component = {Form2}/>
//               <Route path = "/DriverList" exact component = {DriverList}/>
//               <Route path = "/VehicleList" exact component = {VehicleList}/>
//               <Route path = "/UpdateDriver/:id" exact component = {UpdateDriver}/>
//               <Route path = "/UpdateVehicle/:id" exact component = {UpdateVehicle}/>
//               </Switch>
              
//            </Row>
//             </Container>
//         </Router>  
//         </header>
//    </div>   
//   );
// }

// export default App;

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
//     
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

 import React, { Component ,useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import UpdatePromotionsComponent from '../src/Components/UpdatePromotions';
import RegisterUserComponent from '../src/Components/RegisterUser';
import UpdateProfileComponent from '../src/Components/UpdateProfile';
import UserLoginComponent from '../src/Components/UserLogin';
import CustomerProfileComponent from '../src/Components/CustomerProfile';
import AddPromotionsComponent from '../src/Components/AddPromotions';
import ListPromotionsComponent from '../src/Components/ListPromotions';
import AdminHomeBody from './Components/AdminHomeBody';
import FoodItemList from './Components/FoodItemList';
import AddFoodItem from './Components/AddFoodItem';
import UpdateFoodItem from './Components/UpdateFoodItem';
import Body from './Components/Body';
import {Container , Row} from 'react-bootstrap';
import MyNavBar from './Components/MyNavBar'
import About from './Components/About'
import './App.css';
import Shoppingcart from './Components/Shoppingcart';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Order from './Components/Order';
import Orderdet from './Components/Orderdet';
import Menu from './Components/Menu';
import Feedbacklist from './Components/FeedbackList';

 import AddUtility from './Components/AddUtility';
 import UtilityCost from './Components/UtilityCost';
 import UtilityYear from './Components/UtilityYear';
 import UtilityMonth from './Components/UtilityMonth';
 import ProfitMonth from './Components/ProfitMonth';
 import ProfitYear from './Components/ProfitYear';
 import ChartOfUtilityMonth from './Components/ChartOfUtilityMonth';
 import ChartOfUtilityYear from './Components/ChartOfUtilityYear';
 import ChartOfProfitMonth from './Components/ChartOfProfitMonth';
 import ChartOfProfitYear from './Components/ChartOfProfitYear';
 import UtilityList from './Components/UtilityList';
 import CostList from './Components/CostList';
 import ViewUtility from './Components/ViewUtility';
 import ViewCost from './Components/ViewCost';
import InventoryApp from './component/InventoryApp'
import logout from './Components/logout'

import EmpList from './Components/EmpList';
import CreateEmp from './Components/CreateEmp';
import SalaryList from './Components/SalaryList';
import CreateSalary from './Components/CreateSalary';
import UpdateSalary from './Components/UpdateSalary';
import UpdateEmployee from './Components/UpdateEmployee';

 
import Routes from './Routes';

class App extends Component{

  render(){
    window.sessionStorage.getItem("UserRole")
    return(
     
      <Router> 
      {/* <MyNavBar/> */}
     
     
      <Container >
     
        <Row>
          <Switch>
            <Route path = "/about" exact component = {About}/>
            <Route path = "/shop" exact component = {Shoppingcart}/>
            <Route path = "/" exact component = {Home}/>
            <Route path = "/checkout" exact component = {Checkout}/>
            <Route path = "/orderlist" exact component = {Order}/>
            <Route path = "/orderdet" exact component = {Orderdet}/>
            <Route path = "/my" exact component = {Menu}/>
            <Route path = "/admin" exact component = {AdminHomeBody}/>
            <Route path="/FoodItemList"exact component = {FoodItemList}/> 
            <Route path="/add-Menu-Details"exact component = {AddFoodItem}/>
            <Route path="/UpdateFoodItem/:id"exact component = {UpdateFoodItem}/> 
            <Route path="/body"exact component = {Body}/>
            <Route path="/feedback"exact component = {Feedbacklist}/>
            
           <Route path="/registeruser" component={RegisterUserComponent}/>
           <Route path="/updatepromotions/:id" component={UpdatePromotionsComponent}/>
           <Route path="/updateprofile" component={UpdateProfileComponent}/>
           <Route path="/UserLogin" component={UserLoginComponent}/>
           <Route path="/CustomerProfile" component={CustomerProfileComponent}/>
           <Route path="/addpromotion" component={AddPromotionsComponent}/>
           <Route path="/viewpromotions" component={ListPromotionsComponent}/>

           <Route path = "/utilityList" exact component={UtilityList} />
           <Route path = "/add/:ID" exact component={AddUtility} />
           <Route path = "/profitMonth" exact component={ProfitMonth} />
           <Route path = "/ChartOfProfitMonth" exact component={ChartOfProfitMonth} />
           <Route path = "/profitYear" exact component={ProfitYear} />
           <Route path = "/ChartOfProfitYear" exact component={ChartOfProfitYear} />
           <Route path = "/utilityMonth" exact component={UtilityMonth} />
           <Route path = "/ChartOfUtilityMonth" exact component={ChartOfUtilityMonth} />
           <Route path = "/utilityYear" exact component={UtilityYear} />
           <Route path = "/ChartOfUtilityYear" exact component={ChartOfUtilityYear} />
           <Route path = "/costList" exact component={CostList} /> 
           <Route path = "/add-cost/:idCost" exact component={UtilityCost} />
           <Route path = "/view-utility/:ID" exact component={ViewUtility} />
           <Route path = "/view-cost/:idCost" exact component={ViewCost} />
           <Route path = "/inventoryapp" exact component={InventoryApp} />
           <Route path = "/logout" exact component={logout} />

              <Route exact path="/CreateEmp" component = {CreateEmp}/>
               <Route exact path="/EmpList" component = {EmpList}/>
                <Route exact path="/SalaryList" component = {SalaryList}/>
                 <Route exact path="/CreateSalary" component = {CreateSalary}/>
                 <Route exact path="/UpdateSalary/:id" component = {UpdateSalary}/>
                 <Route exact path="/UpdateEmployee/:id" component = {UpdateEmployee}/>
           <Routes/>

            
          </Switch>
        </Row>
      </Container>
      <hr/>
      <Footer/>
     </Router>
    );
  }
}
export default App;

  
 


