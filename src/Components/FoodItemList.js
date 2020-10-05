import React, {Component} from 'react';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import{faList} from '@fortawesome/free-soild-svg-icons';
//import axios from 'axios';

 
import { Card,Table,Image } from 'react-bootstrap';
import MenuService from '../Services/MenuService';

 export default class FoodItemList extends Component{

   constructor(props){
       super(props);
        this.state = {
            menuDetails: []
       };
        this.addMenuDetails = this.addMenuDetails.bind(this)
        this.updateMenuDetails = this.updateMenuDetails.bind(this)
        this.deleteMenuDetails = this.deleteMenuDetails.bind(this)
   }
    deleteMenuDetails(id){
        alert("Delete is sucessfully!");
        MenuService.deleteMenu(id).then(res =>{
            this.setState({menuDetails: this.state.menuDetails.filter(menuDetails => menuDetails.id !== id)});

            MenuService.getMenuDetails().then((res) =>{            
            this.setState({menuDetails: res.data}); 
        });

        });

 }
  
componentDidMount(){
        MenuService.getMenuDetails().then((res) =>{
        this.setState({menuDetails: res.data}); 
    });
}
    
addMenuDetails(){
   this.props.history.push('/add-Menu-Details');

} 
updateMenuDetails(id){
    this.props.history.push(`/UpdateFoodItem/${id}`);

} 







    render(){
        return(
            
            

            <Card  className={"border border-dark bg-dark text-white"}>
           
            
            <Card.Body>
            <div><button className= "btn btn-primary" onClick={this.addMenuDetails}>Add Menu </button></div>
            <table  className = "table table-striped table-hover table-dark table-bordered ">
            <thead>
           <div></div>
           <tr>
            
            <th className = "text-center">Image</th>
            <th className = "text-center">Category</th>
            <th className = "text-center">Food Name</th>
            <th className = "text-center">Description</th>
            <th className = "text-center">Price</th>
            <th className = "text-center">Action</th>

            </tr>
            </thead>
            <tbody>
                {
                    
                    
                    this.state.menuDetails.map(
                        menuDetails =>
                        
                        <tr key = {menuDetails.id}>
                            <td><Image src={menuDetails.imgURL} roundedCircle width="75" height ="75"/></td>
                            <td>{menuDetails.category}</td>
                            <td>{menuDetails.foodName}</td>
                            <td>{menuDetails.description}</td>
                            <td>{menuDetails.price}</td>
                            <td><button onClick = {() => this.updateMenuDetails(menuDetails.id)} className="btn btn-info">Update</button> </td>
                            <td><button  onClick = {() => this.deleteMenuDetails(menuDetails.id)} className="btn btn-danger">Delete</button></td>

                        </tr>
                    )
                }
                <tr align= "center">
        <td colSpan = "7"> Avalible.</td>
                </tr>
            </tbody>
            </table>
            </Card.Body>
            </Card>
             
            

        );
    
    }
}
