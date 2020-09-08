import React from 'react'
import {Carousel , Navbar , Col} from 'react-bootstrap';
import image from "./image1.jpg"
import About from './About'
import Feedback from './Feedback';

class Home extends React.Component{

   render(){
       return(
         <div>
        <Carousel className ="slideshow">
        <Carousel.Item>
          <img
            className="d-block w-100" className = "slide"
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" className = "slide"
            src="https://i.ytimg.com/vi/mRRt_qIarBg/maxresdefault.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"className = "slide"
            src="https://www.69dropsstudio.co.uk/wp-content/uploads/2020/02/Tips-for-Food-photography-1200x675.jpeg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
