
// import React from 'react';
// import './App.css';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import {Container, Row, Col} from 'react-bootstrap';
// import NavigationBar from './Components/NavigationBar';
// import AddUtility from './Components/AddUtility';
// import UtilityCost from './Components/UtilityCost';
// import UtilityYear from './Components/UtilityYear';
// import UtilityMonth from './Components/UtilityMonth';
// import ProfitMonth from './Components/ProfitMonth';
// import ProfitYear from './Components/ProfitYear';
// import ChartOfUtilityMonth from './Components/ChartOfUtilityMonth';
// import ChartOfUtilityYear from './Components/ChartOfUtilityYear';
// import ChartOfProfitMonth from './Components/ChartOfProfitMonth';
// import ChartOfProfitYear from './Components/ChartOfProfitYear';
// import UtilityList from './Components/UtilityList';
// import CostList from './Components/CostList';
// import ViewUtility from './Components/ViewUtility';
// import ViewCost from './Components/ViewCost';




// function App() {

//   const marginLeft = {
//     marginLeft : "250px"
//   };

//   return (
//     <Router>
//       <NavigationBar/> <br/> <br/>
      
      
//         <Container> 
//           <Row>
//               <Col lg = {500} style = {marginLeft} />
//               <Switch>
                  
//                   <Route path = "/" exact component={UtilityList} />
//                   <Route path = "/utilityList" exact component={UtilityList} />
//                   <Route path = "/costList" exact component={CostList} />
//                   <Route path = "/add-cost/:idCost" exact component={UtilityCost} />
//                   <Route path = "/ChartOfUtilityMonth" exact component={ChartOfUtilityMonth} />
//                   <Route path = "/ChartOfUtilityYear" exact component={ChartOfUtilityYear} />
//                   <Route path = "/ChartOfProfitMonth" exact component={ChartOfProfitMonth} />
//                   <Route path = "/ChartOfProfitYear" exact component={ChartOfProfitYear} />
//                   <Route path = "/utilityMonth" exact component={UtilityMonth} />
//                   <Route path = "/utilityYear" exact component={UtilityYear} />
//                   <Route path = "/profitMonth" exact component={ProfitMonth} />
//                   <Route path = "/profitYear" exact component={ProfitYear} />
//                   <Route path = "/add/:ID" exact component={AddUtility} />
//                   <Route path = "/view-utility/:ID" exact component={ViewUtility} />
//                   <Route path = "/view-cost/:idCost" exact component={ViewCost} />
//               </Switch>
              
//           </Row>
//         </Container>
        
        
        
      
//     </Router>
//   );
// }


// import React from 'react';
// //import logo from './logo.svg';
// import './App.css';
// import Body from './Components/Body';
// import NavigatioBar from './Components/NavigationBar';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import {Container, Row, Col} from 'react-bootstrap';
// import AdminHomeBody from './Components/AdminHomeBody';
// import AdminFooter from './Components/AdminFooter';
// import AdminHeader from './Components/AdminHeader';
// import AddFoodItem from './Components/AddFoodItem';
// import UpdateFoodItem from './Components/UpdateFoodItem';
// import FoodItemList from './Components/FoodItemList';
// import Menu from './Components/Menu';

// function App(){
//   const marginLeft = {
//     marginLeft : "250px"
//   };

  
//     return(
//       <Router>
//         <AdminHeader/>
//         <NavigatioBar/> <br/> <br/>
        
 
//         <Container>
//           <Row>
//             <Col lg={500} style={marginLeft} />
            
//       <Switch>
//         <Route path="/body"exact component = {Body}/>  
//         <Route path="/AdminHomebody"exact component = {AdminHomeBody}/> 
//         <Route path="/add-Menu-Details"exact component = {AddFoodItem}/> 
//         <Route path="/UpdateFoodItem/:id"exact component = {UpdateFoodItem}/> 
//         <Route path="/FoodItemList"exact component = {FoodItemList}/> 
//         <Route path="/menu"exact component = {Menu}/>
//       </Switch>
//           </Row>
//         </Container><br/><br/>
//         <AdminFooter/>
       
// </Router>
//  );


  
// }


// import React, { Component } from 'react';
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
import React from 'react';
import {Container , Row} from 'react-bootstrap';
import Navigationbar from './Components/Navigationbar'
import About from './Components/About'
import './App.css';
import Shoppingcart from './Components/Shoppingcart';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Order from './Components/Order';
import Orderdet from './Components/Orderdet';
import Menu from './Components/Menu';
import { Component } from 'react';

class App extends Component{
  render(){
    return(
      <Router> 
      <Navigationbar/>
     
      <hr/>
      <Container>
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
            
            {/* <Route path="/UserLogin" component={UserLoginComponent}/>
            <Route path="/registeruser" component={RegisterUserComponent}/> */}



              <Route path="/registeruser" component={RegisterUserComponent}/>
           <Route path="/updatepromotions/:id" component={UpdatePromotionsComponent}/>
           <Route path="/updateprofile" component={UpdateProfileComponent}/>
           <Route path="/UserLogin" component={UserLoginComponent}/>
           <Route path="/CustomerProfile" component={CustomerProfileComponent}/>
           <Route path="/addpromotion" component={AddPromotionsComponent}/>
           <Route path="/viewpromotions" component={ListPromotionsComponent}/>
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

  
 


