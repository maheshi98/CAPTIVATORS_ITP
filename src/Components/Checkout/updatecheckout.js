import React, {Component} from "react";
import Form from 'react-validation/build/form';
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail, isDate} from "validator";
import "./usercheckout.css";
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CheckoutService from "../../Services/CheckoutService";

const required = value => {
    if(!value){
       return (
           <div className ="alert alert-danger" role="alert">
             <b>**This field is Required</b>
           </div>
       );
   }
};

const email = value => {
   if(!isEmail(value)) {
       return (
           <div className="alert alert-danger" role="alert">
              <b>**This is not a valid email address</b>
           </div>
       );
   }
};

const address1 = value => {
   if(value.length<3){
       return (
           <div className="alert alert-danger" role="alert">
               <b>**Please enter a valid address</b>
           </div>
       );   
   }
};

const address2 = value => {
   if(value.length<3){
       return (
           <div className="alert alert-danger" role="alert">
               <b>**Please enter a valid address</b>
           </div>
       );   
   }
};

const city = value => {
   if(value.length < 1 || value.length > 40) {
       return (
           <div className="alert alert-danger" role="alert">
              <b>**This is not a valid city</b>
           </div>
       );
   }
}; 
const paymentType = value => {
   if(value.length < 1 || value.length > 5) {
       
       return (
           <div className="alert alert-danger" role="alert">
              <b>**This is not a valid zipcode</b>
           </div>
       );
   }
};
const cardNo = value => {
   if(value.length < 1 || value.length > 20) {
       
       return (
           <div className="alert alert-danger" role="alert">
              <b>**This is not a valid card</b>
           </div>
       );
   }
};
const cvv = value => {
   if(value.length != 3) {
       
       return (
           <div className="alert alert-danger" role="alert">
              <b>**This is not a valid CVV</b>
           </div>
       );
   }
};

const Date = value => {
   if(value.length < 1 || value.length > 5) {
       
     return (
           <div className="alert alert-danger" role="alert">
               <b>**This is not a valid Date</b>
            </div>
        );
   }
};


export default class Update extends Component {

    constructor(props) {
        super(props);
        //this.handleRegister = this.handleRegister.bind(this);
        this.onChangePaymentType = this.onChangePaymentType.bind(this);
        this.onChangeCardNo = this.onChangeCardNo.bind(this);
        this.onChangecvv = this.onChangecvv.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.updateCheckoutDetails = this.updateCheckoutDetails.bind(this);
        //this.cancel = this.cancel.bind(this);
    
        this.state = {
            id: this.props.match.params.id,
            error:true,
            paymentType:"",
            cardNo:"",
            cvv:"",
            lDate:"",
           // successful: false,
          //  message:""
        };
    }

   /* onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeAddress1(e) {
        this.setState({
            address1: e.target.value
        });
    }

    onChangeAddress2(e) {
        this.setState({
            address2:e.target.value
        });
    }
   
    onChangeZipcode(e) {
        this.setState({
            zipcode:e.target.value
        });
    } */

    onChangePaymentType(event) {
        this.setState({
            paymentType: event.target.value
        });
    }

    onChangeCardNo(event) {
        this.setState({
            cardNo: event.target.value
        });
    }
    onChangecvv(event) {
        this.setState({
            cvv: event.target.value
        });
    }
    onChangeCity(e) {
        this.setState({
            city:e.target.value
        });
    }

    validate(){
        if(this.state.cardNo.length< 1 || this.state.cardNo.length.length>20)
            this.setState({
                error:true
            });
        else
            this.setState({
                error:false
            });

        if(cvv.length!=3)
            this.setState({
                error:true
            });
        else
            this.setState({
                error:false
            });

        if(Date.length< 1 || Date.length>5)
            this.setState({
                error:true
            });
        else
            this.setState({
                error:false
            });
    }
    //handleRegister(e) {
    //    e.preventDefault();
//
   //     this.setState({
  //          message:"",
   //         successful:false
  ////     });
  //  }

   componentDidMount() {
 
            CheckoutService.getCheckoutDetailsById(this.state.id).then(( res) => {
                let checkoutdetails = res.data;
                this.setState({
                   // email: CheckoutDetails_.email,
                   // address1: CheckoutDetails_.address1,
                   // address2: CheckoutDetails_.address2,
                    
                   // zipcode: checkoutdetails.zipcode,
                    paymentType: checkoutdetails.paymentType,
                    cardNo: checkoutdetails.cardNo,
                    cvv: checkoutdetails.cvv,
                    city: checkoutdetails.city
                   // date: CheckoutDetails_.date,
                });
            });
             
    }
    updateCheckoutDetails = (e) => {
        e.preventDefault(); 
        let checkoutdetails = { 
           
            paymentType: this.state.paymentType,
            cardNo: this.state.cardNo,
            cvv: this.state.cvv,
            city: this.state.city
            // cardNo:"123",
            // cvv: "123",
            // Date: "123",
        }

        this.validate();

       /* this.setState({

                      message:"",
                      successful:false
        });*/
        console.log('checkoutdetails => ' + JSON.stringify(checkoutdetails));
        CheckoutService.updateCheckoutDetails(checkoutdetails, this.state.id).then( res => {
        this.props.history.push('/CheckoutList');
    });
       // if(this.state.id === '_add'){
       //    if(!this.state.error){
       //         this.state.error = false
       //         CheckoutService.createCheckout(checkoutdetails).then(res => {
        //            this.props.history.push('/details');
        //        });
        //    }
       // } else {
       //    CheckoutService.updateCheckoutDetails(CheckoutDetails_, this.state.id).then( res => {
       //         this.props.history.push('/CheckoutList');
       //     
       // } 

      
        this.form.validateAll(); 
    }
    cancel() {
        this.props.history.push('/');
    }

    

  /*  getTitle(){
        if(this.state.id === '_add'){
          return  <h2 className="delivery-info">Delivery Information</h2>
            }else {
          return  <h2 className="delivery-info">Update Information</h2>
        }      
    }*/
    render() {
        return (
            <div className="col-md-12">
                <div className="card card-container">
                 <Form className="place-form3"
                    onSubmit={this.saveCheckoutDetails}
                    ref={c=>{
                       this.form = c;
                    }}
                    >   
                    <div className="jumbotron">
                    <h3 className="checkout">Checkout</h3>
                    
                    <h4 className="delivery-info">Update Payment Information</h4>
                    </div>
                      {!this.state.successful && (
                            <div>
                                <div className="form-group">
                                <label className="text-muted"><h6><b>Payment Method</b></h6></label><br></br>
                                    <label className=""><b>Credit Card</b></label>
                                    <Input
                                        id="radio1"
                                        type="radio"
                                        value="Credit Card"
                                        name="paymentType"
                                        className="form-control"
                                        onChange={this.onChangePaymentType}
                            //       onInput = {inputHandler}
                                    /> 
                                    <label className=""><b>Debit Card</b> </label>
                                    <Input
                                        id="radio2"
                                        type="radio"
                                        value="Debit Card"
                                        name="paymentType"
                                        className="form-control"
                                        onChange={this.onChangePaymentType}
                                        // validations={[required,paymentType]}
                            //        onInput = {inputHandler}
                                    /> 
                                    <label className=""><b>Cash On Delivery</b> </label>                    
                                    <Input
                                        id="radio3"
                                        type="radio"
                                        value="Cash On Delivery"
                                        name="paymentType"
                                        className="form-control"
                                        onChange={this.onChangePaymentType}
                            //     onInput = {inputHandler}
                                    /> 
                                    </div>
                                    <div className="form-group">
                                    <label className="text-muted"><h6><b>Card Number</b></h6></label>
                                    <Input  
                                        type="text"
                                        className="form-control"
                                        name="cardNo"
                                        value={this.state.cardNo}
                                        onChange={this.onChangeCardNo}
                                        validations={[required, cardNo]}
                                    
                                    />
                                    </div>

                                    <div className="form-group">
                                    <label className="text-muted"><h6><b>CVV</b></h6></label>
                                    <Input  
                                        type="text"
                                        className="form-control"
                                        name="cvv"
                                        value={this.state.cvv}
                                        onChange={this.onChangecvv}
                                        validations={[required, cvv]}
                                        
                                    />
                                    </div>
                                    <div className="form-group">
                                    <label className="text-muted"><h6><b>Expiry Date</b></h6></label>
                                    <Input  
                                        type="text"
                                        className="form-control"
                                        name="city"
                                        value={this.state.city}
                                        onChange={this.onChangeCity}
                                        validations={[required, city]}
                                        placeholder="6/21"
                                        />
                                </div>
        
                                    <br></br>
                                    <div className="form-group">
                                    <button className="myButton"  onClick={this.updateCheckoutDetails}>Submit</button>
                                    <button className="myButton2" onClick={this.cancel.bind(this)}> Cancel </button>
                                    
                                </div>
                            </div>
                        )}

                        {this.state.message && (
                            <div className="form-group">
                                <div
                                className={
                                    this.state.successful
                                    ? "alert alert-success"
                                    : "alert alert-danger"
                                }
                                role="alert"
                                >
                                    {this.state.message}
                                </div>
                            </div>
                        )}
                   
                   <CheckButton
                        style={{display:"none"}}
                        ref={c=> {
                            this.checkBtn = c;
                        }}
                        />
                    </Form>
                </div>
            </div>
        );
    }
}