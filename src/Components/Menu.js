import React, { Component } from 'react';
//import {CommonGet, CommonPost} from "../../config";
//import {toast, ToastContainer} from "react-toastify";

import {Card,Image,Row} from "react-bootstrap";
//import empimg from "../../Images/noimg.jpg";
//import CardGroup from "react-bootstrap/CardGroup";
/////////import Carousel from "react-bootstrap/Carousel";
////import img1 from "../../Images/img01.jpg";
//import img2 from "../../Images/img02.jpg";
//import img5 from "../../Images/img00.jpg";

import MenuService from '../services/MenuService';

class Menu extends Component {
    constructor(props){
        super(props);
         this.state = {
             menuDetails: []
        };
        
    }

    componentDidMount(){
        MenuService.getMenuDetails().then((res) =>{
        this.setState({menuDetails: res.data}); 
    });
}
render(){
  return(
      
      

      <Card  className={"border border-dark bg-dark text-white"}>
     
      
      <Card.Body>
      
      <table  className = "table table-striped table-hover table-dark table-bordered ">
     
       <tbody>


       
 

         {
              this.state.menuDetails.map(
                  menuDetails =>
                  
                  <td key = {menuDetails.id}>
                      <tr><Image src={menuDetails.imgURL} roundedRectangle width="200" height ="180"/></tr><tr></tr>
                      <tr>CATEGORY : {menuDetails.category}</tr> 
                      <tr>FOOD NAME : {menuDetails.foodName}</tr> 
                      <tr>DESCRIPTION : {menuDetails.description}</tr> 
                      <tr>PRICE : {menuDetails.price}</tr> 

                      <td><button  className="btn btn-info">ADD TO CART</button> </td>
                      
                      
                      

                  </td>
              )
          }
     
          <tr align= "center">
  
          </tr>
      </tbody>
      </table>
      </Card.Body>
      </Card>
       
      

  );

}
}


export default Menu;
