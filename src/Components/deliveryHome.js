import React, { Component } from 'react';
import './Style.css'
import {Link} from 'react-router-dom';
import MyNavBar from './MyNavBar';
import Img7 from './image/order.png'

class Home extends Component{

    render(){
        return (
            <div>
<MyNavBar></MyNavBar>
            <center style ={{ marginTop:'3cm'}}>
            <img className = 'img1' src= {Img7}alt="delivery"/>
            <br></br>
            <br></br>
              <Link to="/Form">
                      <button type="button" class = "viewbtn" >
                            Add Deliver
                      </button>
                  </Link> 
              
              </center> <br/>

              <center>
              <Link to="/Form2">
                      <button type="button" class = "viewbtn" >
                            Add Vehicle
                      </button>
                  </Link> 
              
              </center> <br/>

              <center>
              <Link to="/DriverList">
                      <button type="button" class = "viewbtn" >
                      Driver List
                      </button>
                  </Link> 
              
              </center> <br/>

              <center>
              <Link to="/VehicleList">
                      <button type="button" class = "viewbtn" >
                      Vehicle List
                      </button>
                  </Link> 
              
              </center> <br/>

            </div>    
        )
    }

}
export default Home;