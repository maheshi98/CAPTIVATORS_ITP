import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PromotionService from '../service/PromotionService';
import MyNavBar from './MyNavBar';
//import './Promotions.css';


class AddPromotionsComponent extends Component { 
    constructor(props){
        super(props);
        

        this.state = {

        promotion : [],
        pCode : null,
        orderNumber: null,
        disRate : null

        };
    }
  handleChange = this.handleChange.bind(this);
  handleSubmit= this.handleSubmit.bind(this);

  handleChange(event) {  
    this.setState({
      [event.target.name]: event.target.value

    });

  }
  handleSubmit(event){
    event.preventDefault();
    let promotion = {pCode:this.state.pCode, oNumber: this.state.orderNumber,disRate : this.state.disRate};
    console.log('promotion =>' + JSON.stringify(promotion));

    PromotionService.addPromotion(promotion).then(res => {
      this.props.history.push("/viewpromotions")
  });

  }


    render() {
      return (
        <div>
          <MyNavBar></MyNavBar>
        <div className="addpromotions" style={{marginTop: "3cm", width :"30cm"}}>
            <ul class="nav2">
                <li class="list1"><a class="nav" href="/viewpromotions">ViewPromotions</a></li>
                <li class="list1"><a class="nav" href="/addpromotion">Add Promotions</a></li>

            </ul>
         
                <center>
                <font size="7">Add Promotion</font>
                </center>
                
                <div className="container">
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3" variant ="dark">
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                           <label>Promotion Code </label> 
                                           <div>
                                           <input placeholder="Promotion Code" name="pCode" className="form-control" value={this.state.pCode} onChange={this.handleChange}/>
                                          </div>
                                        </div>
                                        <div className = "form-group">
                                           <label>Order Number </label> 
                                           <input type="number" min="1" placeholder="Order Number" name="orderNumber" className="form-control" value={this.state.orderNumber} onChange={this.handleChange}/>
                                        </div>
                                        <div className = "form-group">
                                           <label>Discount Rate </label> 
                                           <input type="number" step="0.01" min="1.00"placeholder="Discount Rate" name="disRate" className="form-control" value={this.state.disRate} onChange={this.handleChange}/>
                                        </div>

                                        <br/><br/>
                                        
            
                    
            
                                               <center>
                                                <Button type="submit" variant="danger" onClick={this.handleSubmit}>Add</Button>
                                              </center>
                                                
                                    </form>
                                </div>
                            </div>
                        </div>



                    </div>
            
      </div>                  
       
      </div>
      );
      }
}

export default AddPromotionsComponent;