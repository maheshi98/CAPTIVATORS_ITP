import React, { Component } from 'react';
import CheckoutService from '../../Services/CheckoutService';
import Form from 'react-validation/build/form';
import Input from "react-validation/build/input";
import './successful.css';

class Successful extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            checkoutdetails: {}
        }
    }

    componentDidMount(){
        CheckoutService.getCheckoutDetailsById(this.state.id).then((res) => {
            this.setState({ checkoutdetails: res.data});
        });
    }

    render() {
        return (
            <div className = "container">
                <form className = "place-form1">
                    <h3 className="list"><b> Successful!</b> </h3>
       
                    <table className="table4">
            <tr>
            <th>
                <td>Payment Method</td>
                <td>{this.state.checkoutdetails.paymentType}</td>
            </th>
            </tr>
            <tr>
            <th>
                <td>Card Number</td>
                <td>{this.state.checkoutdetails.cardNo}</td>
            </th>
            </tr>
            <tr>
            <th>
                <td>CVV</td>
                <td>{this.state.checkoutdetails.cvv}</td>
            </th>
            </tr>
            <tr>
            <th>
                <td>Expiration Date</td>
                <td>{this.state.checkoutdetails.city}</td>
            </th>
            </tr>
        </table>
                </form>

            </div>

        )      
        }
    }
    
    export default Successful;