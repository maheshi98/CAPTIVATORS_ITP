import React, { Component } from "react";
import Form from 'react-validation/build/form';
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import "./usercheckout.css";
import Button from "react-bootstrap/Button";


import CheckoutService from "../../Services/CheckoutService";
import MyNavBar from "../MyNavBar";


const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                <b>**This field is Required</b>
            </div>
        );
    }
};


const city = value => {
    if (value.length < 1 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                <b>**This is not a valid city</b>
            </div>
        );
    }
};
const paymentType = value => {
    if (value.length < 1 || value.length > 5) {

        return (
            <div className="alert alert-danger" role="alert">
                <b>**This is not a valid zipcode</b>
            </div>
        );
    }
};
const cardNo = value => {
    if (value.length < 1 || value.length > 20) {

        return (
            <div className="alert alert-danger" role="alert">
                <b>**This is not a valid card</b>
            </div>
        );
    }
};
const cvv = value => {
    if (value.length != 3) {

        return (
            <div className="alert alert-danger" role="alert">
                <b>**This is not a valid CVV</b>
            </div>
        );
    }
};


export default class Register extends Component {


    constructor(props) {
        super(props);
        //this.handleRegister = this.handleRegister.bind(this);
        this.onChangePaymentType = this.onChangePaymentType.bind(this);
        this.onChangeCardNo = this.onChangeCardNo.bind(this);
        this.onChangecvv = this.onChangecvv.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.saveCheckoutDetails = this.saveCheckoutDetails.bind(this);
        //this.Cancel = this.Cancel.bind(this);
        this.onChangedate =  this.onChangedate.bind(this);

        this.state = {

            error: true,
            paymentType: "",
            cardNo: "",
            cvv: "",
            lDate: "",
            // successful: false,
            message: "",
            dateTime : this.formatDate(new Date()),

        };
    }

    formatDate(date_ob) {
      
        // adjust 0 before single digit date
        let date = ("0" + date_ob.getDate()).slice(-2);
        
        // current month
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        
        // current year
        let year = date_ob.getFullYear();
        
        // current hours
        let hours = date_ob.getHours();
        
        // current minutes
        let minutes = date_ob.getMinutes();
        
        // current seconds
        let seconds = date_ob.getSeconds();
        
        return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
    }
   

    Cancel() {
        this.props.history.push('/add ');
    }

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
    onChangeCity(event) {
        this.setState({
            city: event.target.value
        });
    }
    onChangedate = (event) => {
        this.setState({
            date : event.target.value
        });
    }

    validate() {
        if (this.state.cardNo.length < 1 || this.state.cardNo.length.length > 16)
            this.setState({
                error: true
            });
        else
            this.setState({
                error: false
            });

        if (cvv.length != 3)
            this.setState({
                error: true
            });
        else
            this.setState({
                error: false
            });

        if (city.length < 1 || city.length > 5)
            this.setState({
                error: true
            });
        else
            this.setState({
                error: false
            });
    }
   
    saveCheckoutDetails = (e) => {
        e.preventDefault();
        let checkoutdetails = {

            paymentType: this.state.paymentType,
            cardNo: this.state.cardNo,
            cvv: this.state.cvv,
            city: this.state.city,
            date: this.formatDate(new Date())
          
        }
      
            this.validate();
        console.log('checkoutdetails => ' + JSON.stringify(checkoutdetails));

        // if(this.state.id === '_add'){
        if (!this.state.error) {
            this.state.error = false
            CheckoutService.createCheckout(checkoutdetails).then(res => {
                this.setState({ message: 'Payment added successfully.' });
                this.props.history.push('/details');
            })

        }
        // } else {
        //    CheckoutService.updateCheckoutDetails(CheckoutDetails_, this.state.id).then( res => {
        //         this.props.history.push('/CheckoutList');
        //     });
        // } 
        this.form.validateAll();
    }

    render() {
        return (

            <div>
                <MyNavBar></MyNavBar>

                        <div className="" >
                            <h4 className="delivery-info">Payment Information</h4>
                        </div>
            <div className="col-md-12" style={{marginTop:'2cm'}}>
                <div className="card card-container">
                    <Form className="place-form3"
                       // onSubmit={this.saveCheckoutDetails}
                        ref={c => {
                            this.form = c;
                        }}
                    >
                       
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
                                    />

                                    <label className=""><b>Debit Card</b> </label>
                                    <Input
                                        id="radio2"
                                        type="radio"
                                        value="Debit Card"
                                        name="paymentType"
                                        className="form-control"
                                        onChange={this.onChangePaymentType}
                                    ></Input>

                                    <label className=""><b>Cash On Delivery</b> </label>
                                    <Input
                                        id="radio3"
                                        type="radio"
                                        value="Cash On Delivery"
                                        name="paymentType"
                                        className="form-control"
                                        onChange={this.onChangePaymentType}

                                    />

                                </div>

                                <div>
                                    <b><i>[Please Fill Below Details If You Have Selected Credit Or Debit
                                        Card As Your Payment Method]</i></b>
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
                                        placeholder="1111-1111-1111-1111"

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
                                        placeholder="###"

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
                                <div>
                                    <Button variant="primary" onClick={this.saveCheckoutDetails} onChange  ={this.onChangedate} value={this.state.feedback} value= {this.state.dateTime}>Submit</Button>
                                    <Button variant="btn btn-danger" style = {{marginLeft : "10px"}} onClick={this.Cancel.bind(this)}> Cancel </Button>

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
                            style={{ display: "none" }}
                            ref={c => {
                                this.checkBtn = c;
                            }}
                        />
                    </Form>
                </div>
            </div>
            </div>
        );
    }
}