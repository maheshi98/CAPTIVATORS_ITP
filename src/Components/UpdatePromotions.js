import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import '../userprofile.css';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form"
import PromotionService from '../service/PromotionService';
import { Jumbotron } from 'react-bootstrap';



class UpdatePromotionsComponent extends Component {
    constructor(props){
        super(props);
        
        this.state = {
        promotions : [],
        code : this.props.match.params.id,
        pCode : null,
        orderNumber: null,
        disRate : null

        };
    }
    handleChange = this.handleChange.bind(this);
    deletePromotion = this.deletePromotion.bind(this);
    updatePromotion = this.updatePromotion.bind(this);
    handleChange(event) {  
       this.setState({
          [event.target.name]: event.target.value

       });

    }
    componentDidMount(){
        PromotionService.getPromotionById(this.state.code).then((res) =>{
            let promotion = res.data;
            console.log('promotion => ' + JSON.stringify(promotion));
            this.setState({pCode: promotion.pCode, orderNumber : promotion.oNumber, disRate :promotion.disRate });
            //this.state.pCode = promotion.pCode
            //this.state.oNumber = promotion.orderNumber
            //this.state.disRate = promotion.disRate
        });
    }

    //String pCode, String oNumber, String disRate
    updatePromotion(event){
        event.preventDefault();
        let promotion = {pCode : this.state.pCode, oNumber : this.state.orderNumber, disRate :this.state.disRate};
        console.log('promotion => ' + JSON.stringify(promotion));

        PromotionService.updatePromotion( promotion.pCode,promotion).then(res =>{
            this.props.history.push('/viewpromotions');
            //console.log('promotion => ' + JSON.stringify(promotion));

        });

    }

      deletePromotion(event){
          event.preventDefault();
        //this.props.history.push(`/deletepromotions/${id}`);
        PromotionService.deletePromotion(this.state.code).then((res) =>{

            //this.setState({promotions : this.state.promotions.filter(promotion => promotion.pCode != id)})
            this.props.history.push('/viewpromotions');
        } );


    }

    render() {
      return (
        <div className="updatepromotions">
            <ul class="nav2">
                <li class="list1"><a class="nav" href="">HOME</a></li>
                <li class="list1"><a class="nav" href="/viewpromotions">ViewPromotions</a></li>
                <li class="list1"><a class="nav" href="/addpromotion">Add Promotions</a></li>

            </ul>
            
                
               
               
                
                
                <center>
                <font size="7">Update Promotions</font>
                </center>


                
              

                    <div className="container">
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3" variant ="dark">
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                           <label>Promotion Code </label> 
                                           <input placeholder={this.state.pCode} name="pCode" className="form-control" value={this.state.pCode} onChange={this.handleChange}/>
                                        </div>
                                        <div className = "form-group">
                                           <label>Order Number </label> 
                                           <input type="number" min="1" placeholder={this.state.orderNumber} name="orderNumber" className="form-control" value={this.state.orderNumber} onChange={this.handleChange}/>
                                        </div>
                                        <div className = "form-group">
                                           <label>Discount Rate </label> 
                                           <input type="number" step="0.01" min="1.00"placeholder={this.state.disRate} name="disRate" className="form-control" value={this.state.disRate} onChange={this.handleChange}/>
                                        </div>
                                        

                                        <br/><br/>
            
                    
            
                                                <Button type="submit" variant="danger" onClick = { this.deletePromotion}>Delete</Button>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            
                                                <Button type="submit" variant="primary" onClick={this.updatePromotion}>Update</Button>
                                        
                                                
                                    </form>
                                </div>
                            </div>
                        </div>



                    </div>
            
                        
                    
                    
            </div>        
                
       
      );
    }
}

export default UpdatePromotionsComponent;