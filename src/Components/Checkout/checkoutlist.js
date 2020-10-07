import React, { Component } from 'react';
import CheckoutService from '../../Services/CheckoutService';
import Form from 'react-validation/build/form';
import Input from "react-validation/build/input";
import './checkoutlist.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit,faTrash} from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


class Details extends Component {
    constructor(props){
        super(props)

        this.state = {
            CheckoutDetails:[]
        }
      
        this.deleteCheckout = this.deleteCheckout.bind(this);
        this.editCheckout = this.editCheckout.bind(this);
    }

    editCheckout(id) {
        this.props.history.push(`/update/${id}`);
    }

    deleteCheckout(id){
        CheckoutService.deleteCheckout(id).then( res => {
            this.setState({CheckoutDetails: this.state.CheckoutDetails.filter(checkoutdetails => checkoutdetails.id !== id)});
        });

    }

    componentDidMount(){
        CheckoutService.getCheckoutDetails().then((res) => {
            this.setState({ CheckoutDetails: res.data});
        });
    }

    render() {
        return (
            <div>
                <h3 className="list"> <b>Successful</b> </h3>
                <div className ="ta">
                    <form className="form3">
                    <table className ="table5">

                        <thead>
                            <tr>

                                <th> Payment Method</th>
                                <th> Card Number </th>
                                <th> CVV </th>
                                <th> Card Expiration </th>
                                <th> Payment Date </th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                this.state.CheckoutDetails.map(
                                    checkoutdetails =>
                                    <tr key = {checkoutdetails.id}>
                                        <td> { checkoutdetails.paymentType} </td>
                                        <td> { checkoutdetails.cardNo} </td>
                                        <td> { checkoutdetails.cvv} </td>
                                        <td> { checkoutdetails.city} </td>
                                        <td> { checkoutdetails.date} </td>
                                        <td>
                                        <Button  variant="outline-primary" onClick={() => this.editCheckout(checkoutdetails.id)}><FontAwesomeIcon icon={faEdit}/></Button>
                                        <Button style={{marginLeft: "10px"}} variant="outline-danger" onClick={() => this.deleteCheckout(checkoutdetails.id)}><FontAwesomeIcon icon={faTrash}/></Button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    </form>
                </div>

            </div>
        )
    }
}

export default Details;