import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import UpdatePromotionsComponent from '../src/Components/UpdatePromotions';
import RegisterUserComponent from '../src/Components/RegisterUser';
import UpdateProfileComponent from '../src/Components/UpdateProfile';
import UserLoginComponent from '../src/Components/UserLogin';
import CustomerProfileComponent from '../src/Components/CustomerProfile';
import AddPromotionsComponent from '../src/Components/AddPromotions';
import ListPromotionsComponent from '../src/Components/ListPromotions';


 class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <Route path="/registeruser" component={RegisterUserComponent}/>
          <Route path="/updatepromotions/:id" component={UpdatePromotionsComponent}/>
          <Route path="/updateprofile" component={UpdateProfileComponent}/>
          <Route path="/UserLogin" component={UserLoginComponent}/>
          <Route path="/CustomerProfile" component={CustomerProfileComponent}/>
          <Route path="/addpromotion" component={AddPromotionsComponent}/>
          <Route path="/viewpromotions" component={ListPromotionsComponent}/>
      </div>
      </Router>

    );
  }
 }

 



export default App;

