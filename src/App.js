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

function App() {
  return (

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
         </Switch>
       </Row>
     </Container>
     <hr/>
     <Footer/>
    </Router>
  );
}

export default App;
