// import React, { Component } from 'react';
// import './Style.css'
// import {Link} from 'react-router-dom';

// class Home extends Component{

//     render(){
//         return (
//             <div>

//             <center>
//               <Link to="/Form">
//                       <button type="button" class = "viewbtn" >
//                             Add Deliver
//                       </button>
//                   </Link> 
              
//               </center> <br/>

//               <center>
//               <Link to="/Form2">
//                       <button type="button" class = "viewbtn" >
//                             Add Vehicle
//                       </button>
//                   </Link> 
              
//               </center> <br/>

//               <center>
//               <Link to="/DriverList">
//                       <button type="button" class = "viewbtn" >
//                       Driver List
//                       </button>
//                   </Link> 
              
//               </center> <br/>

//               <center>
//               <Link to="/VehicleList">
//                       <button type="button" class = "viewbtn" >
//                       Vehicle List
//                       </button>
//                   </Link> 
              
//               </center> <br/>

//             </div>    
//         )
//     }

// }
// export default Home;
import React from 'react'
import {Carousel} from 'react-bootstrap';
// import image from "./image1.jpg"
import About from './About'
import Feedback from './Feedback';
import {Container , Row} from 'react-bootstrap';
import MyNavBar from './MyNavBar';



class Home extends React.Component{

   render(){
       return(
         <div>
<MyNavBar/>
        <Carousel className ="slideshow"  style ={{ marginTop:'3cm'}}>
        <Carousel.Item>
          <img
            className="d-block w-100 slide" 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style = {{color : ' white'}} >"We Brings You the Best.."</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slide" 
            src="https://i.ytimg.com/vi/mRRt_qIarBg/maxresdefault.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3 style = {{color : ' white'}} >"Everything here we brings with our love"</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slide"
            src="https://www.69dropsstudio.co.uk/wp-content/uploads/2020/02/Tips-for-Food-photography-1200x675.jpeg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3 style = {{color : ' white'}} >"Please come and feel the joy of our beloved foods"</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <hr/>
     <About/>
     <hr/>
     <Feedback/>
      </div>
       )
   }
        
 
}
export default Home
