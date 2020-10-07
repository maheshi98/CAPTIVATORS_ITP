import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import NavigationBar from './Components/NavigationBar';
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




function App() {

  const marginLeft = {
    marginLeft : "250px"
  };

  return (
    <Router>
      <NavigationBar/> <br/> <br/>
      
      
        <Container> 
          <Row>
              <Col lg = {500} style = {marginLeft} />
              <Switch>
                  
                  <Route path = "/" exact component={UtilityList} />
                  <Route path = "/utilityList" exact component={UtilityList} />
                  <Route path = "/costList" exact component={CostList} />
                  <Route path = "/add-cost/:idCost" exact component={UtilityCost} />
                  <Route path = "/ChartOfUtilityMonth" exact component={ChartOfUtilityMonth} />
                  <Route path = "/ChartOfUtilityYear" exact component={ChartOfUtilityYear} />
                  <Route path = "/ChartOfProfitMonth" exact component={ChartOfProfitMonth} />
                  <Route path = "/ChartOfProfitYear" exact component={ChartOfProfitYear} />
                  <Route path = "/utilityMonth" exact component={UtilityMonth} />
                  <Route path = "/utilityYear" exact component={UtilityYear} />
                  <Route path = "/profitMonth" exact component={ProfitMonth} />
                  <Route path = "/profitYear" exact component={ProfitYear} />
                  <Route path = "/add/:ID" exact component={AddUtility} />
                  <Route path = "/view-utility/:ID" exact component={ViewUtility} />
                  <Route path = "/view-cost/:idCost" exact component={ViewCost} />
              </Switch>
              
          </Row>
        </Container>
        
        
        
      
    </Router>
  );
}

export default App;
