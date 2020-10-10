import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPayment from './Components/Cashier/cashierinterface';
import Register from './Components/Checkout/usercheckout';
import Details from './Components/Checkout/checkoutlist';
import Successful from './Components/Checkout/successful';
import Receipt from './Components/Cashier/receipt';
import Update from './Components/Checkout/updatecheckout';

const Routes = () => {

    return (
        <div>
        <Router>
               <Switch>
                  <Route path ="/usercheckout" exact component ={Register}/>   
                  <Route path ="/add" component = {AddPayment}/>    
                  <Route path ="/details" component={Details}/>
                  <Route path ="/Successful/:id" component={Successful}/>
                  <Route path ="/receipt" component={Receipt}/>
                  <Route path ="/update/:id" component={Update}/>
               </Switch>
        </Router>
   </div>
    );
};

export default Routes;