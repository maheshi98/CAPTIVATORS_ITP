import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css'
import AddPayment from './Components/Cashier/cashierinterface';
import Register from './Components/Checkout/usercheckout';
import FormsPage from './Components/Checkout/bv';
import Details from './Components/Checkout/checkoutlist';
import Successful from './Components/Checkout/successful';
import Navigationbar from './Components/Header';
import Footer from './Components/Footer';
import Receipt from './Components/Cashier/receipt';
import Update from './Components/Checkout/updatecheckout';
import Routes from './Routes';


function App() {
  return (
 /*  <div>
        <Router>
             <Navigationbar/>
               <Switch>

                  <Route path ="/" exact component ={Register}/>   
                  <Route path ="/add" component = {AddPayment}/>    
                  <Route path ="/new" component = {FormsPage}/>
                  <Route path ="/details" component={Details}/>
                  <Route path ="/Successful/:id" component={Successful}/>
                  <Route path ="/receipt" component={Receipt}/>
                  <Route path ="/update/:id" component={Update}/>
               </Switch>
              <Footer/>
        </Router>
   </div>*/
   <div>

   </div>
  );
}

export default App;
