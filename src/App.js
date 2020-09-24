import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Body from './Components/Body';
import NavigatioBar from './Components/NavigationBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import AdminHomeBody from './Components/AdminHomeBody';
import AdminFooter from './Components/AdminFooter';
import AdminHeader from './Components/AdminHeader';
import AddFoodItem from './Components/AddFoodItem';
import UpdateFoodItem from './Components/UpdateFoodItem';
import FoodItemList from './Components/FoodItemList';
import Menu from './Components/Menu';

function App(){
  const marginLeft = {
    marginLeft : "250px"
  };

  
    return(
      <Router>
        <AdminHeader/>
        <NavigatioBar/> <br/> <br/>
        
 
        <Container>
          <Row>
            <Col lg={500} style={marginLeft} />
            
      <Switch>
        <Route path="/body"exact component = {Body}/>  
        <Route path="/AdminHomebody"exact component = {AdminHomeBody}/> 
        <Route path="/add-Menu-Details"exact component = {AddFoodItem}/> 
        <Route path="/UpdateFoodItem/:id"exact component = {UpdateFoodItem}/> 
        <Route path="/FoodItemList"exact component = {FoodItemList}/> 
        <Route path="/menu"exact component = {Menu}/>
      </Switch>
          </Row>
        </Container><br/><br/>
        <AdminFooter/>
       
</Router>
 );


  
}

export default App;
