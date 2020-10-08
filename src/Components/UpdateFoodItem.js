import React, {Component} from 'react';
import './Style.css';
import {Jumbotron, Form, Col} from 'react-bootstrap';
import MenuService from '../Services/MenuService';

export default class UpdateFoodItem extends Component {
    constructor (props){
        super(props);
        
        this.state ={
            id: this.props.match.params.id,
            imgURL:'',
            category:'',
            foodName:'',
            description:'',
            price:''
    }

      // this.state = {
        //  MenuDetails : [],
      
      //  this.changeFoodCodeHandler = this.changeFoodCodeHandler.bind(this);
        this.changeAddFoodItemImageURLHandler = this.changeAddFoodItemImageURLHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changeFoodNameHandler = this.changeFoodNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changePriceHandler  = this.changePriceHandler.bind(this);

        this.UpdateFoodItem = this.UpdateFoodItem.bind(this);
        
   }


UpdateFoodItem = (e) =>{
    e.preventDefault();

  let menuDetails= {imgURL: this.state.imgURL,
        category: this.state.category,
        foodName: this.state.foodName,
        description: this.state.description,
        price: this.state.price};
   console.log('menuDetails =>' + JSON.stringify(menuDetails));

   MenuService.updateMenu(menuDetails, this.state.id).then(res => {
       this.props.history.push('/FoodItemList');
   });

    
}

componentDidMount(){
    MenuService.getMenuById(this.state.id).then((res) =>{
        let menuDetails = res.data;
        this.setState({
            imgURL: menuDetails.imgURL,
            category: menuDetails.category,
            foodName: menuDetails.foodName,
            description: menuDetails.description,
            price:menuDetails.price,

        });
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
    
    render(){
        return(
            
    
            <Jumbotron className = "bg-secondary text-white">
                 
                <Col>
                    <form>
                    <center><h2> Update Item</h2></center>

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
                        <button  style = {{width: "220px"}} className= "updateBtn" onClick={this.UpdateFoodItem}>Update </button> 
                        <button style = {{width: "220px",marginLeft: "50px"}} className= "updateBtn" onClick={this.cancel.bind(this)}>Cancel </button>    

                        
                      </center>
                    </form>
                </Col>  
            </Jumbotron>

            
            
        );
    }
}
