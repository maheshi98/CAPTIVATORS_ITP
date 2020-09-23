IT19374666
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
import React from 'react';
import {Container , Row} from 'react-bootstrap';
import Navigationbar from './Components/Navigationbar'
import About from './Components/About'
import './App.css';
import {BrowserRouter as Router ,  Switch , Route} from 'react-router-dom'
import Shoppingcart from './Components/Shoppingcart';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Order from './Components/Order';
import Orderdet from './Components/Orderdet';
import Menu from './Components/Menu';




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


