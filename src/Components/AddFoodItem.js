import React, {Component} from 'react';
import './Style.css';
import {Jumbotron, Form, Col} from 'react-bootstrap';
import MenuService from '../services/MenuService';


export default class AddFoodItem extends Component{
    constructor (props){
        super(props);

       this.state ={
           imgURL:'',
           category:'',
           foodName:'',
           description:'',
           price:''
    }

      // this.state = {
       //   MenuDetails : [],
      
      //  this.changeFoodCodeHandler = this.changeFoodCodeHandler.bind(this);
        this.changeAddFoodItemImageURLHandler = this.changeAddFoodItemImageURLHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changeFoodNameHandler = this.changeFoodNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changePriceHandler  = this.changePriceHandler.bind(this);

        this.saveMenuDetails = this.saveMenuDetails.bind(this);
        
   }


saveMenuDetails = (e) =>{
    e.preventDefault();

  let  menuDetails= {imgURL: this.state.imgURL,
        category: this.state.category,
        foodName: this.state.foodName,
        description: this.state.description,
        price: this.state.price};
   console.log('menuDetails =>' + JSON.stringify(menuDetails));

    MenuService.addMenuDetails(menuDetails).then(res => {
        this.props.history.push('/FoodItemList');
    });
}

changeAddFoodItemImageURLHandler =(event) => {
  this.setState({imgURL: event.target.value});

}

changeCategoryHandler =(event) => {
    this.setState({category: event.target.value});

  }

changeFoodNameHandler =(event) => {
    this.setState({foodName: event.target.value});

}
changeDescriptionHandler =(event) => {
   this.setState({description: event.target.value});

}
changePriceHandler =(event) => {
    this.setState({price: event.target.value});

}

cancel(){
    this.props.history.push('/FoodItemList');

}
componentDidMount(){
   MenuService.getMenuDetails().then((res) =>{
    console.log(res.data);

        this.setState({MenuDetails: res.data}); 
    });
} 



    
    render(){
        return(
            
    
            <Jumbotron className = "bg-secondary text-white">
                 
                <Col>
                    <form>
                    <center><h2>Add New Food Item</h2></center>

                    <br/> <br/> <br/>
                   

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><div class = "updateItem">Add Food Item Image URL : </div></Form.Label>
                        <Form.Control type="text" placeholder="Enter Image URL"  
                        value={this.state.imgURL} onChange={this.changeAddFoodItemImageURLHandler}/>
                    </Form.Group> <br/><br/>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label><div class = "updateItem">Category  : </div></Form.Label>
                        <Form.Control type="text" 
                        value={this.state.category} onChange={this.changeCategoryHandler}/>
                    </Form.Group> <br/><br/>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label><div class = "updateItem">Food Name  : </div></Form.Label>
                        <Form.Control type="text" 
                        value={this.state.foodName} onChange={this.changeFoodNameHandler}/>
                    </Form.Group> <br/><br/>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label><div class = "updateItem">Description  : </div></Form.Label>
                        <Form.Control as="textarea" rows="4" cols="80" 
                        value={this.state.description} onChange={this.changeDescriptionHandler}/>
                    </Form.Group> <br/><br/>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label><div class = "updateItem">Price: </div></Form.Label>
                        <Form.Control type="text" placeholder = "Rs. "  
                        value={this.state.price} onChange={this.changePriceHandler}/>
                    </Form.Group> <br/><br/>

                       
                        <center>
                        <button className= "updateBtn" onClick={this.saveMenuDetails}>Add Menu </button> 
                        <button className= "updateBtn" onClick={this.cancel.bind(this)}>Cancel </button>    

                        
                      </center>
                    </form>
                </Col>  
            </Jumbotron>

            
            
        );
    }
}
