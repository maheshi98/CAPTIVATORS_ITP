import React, { Component } from 'react';
import CheckoutService from '../../Services/CheckoutService';
import Form from 'react-validation/build/form';
import Input from "react-validation/build/input";
import './checkoutlist.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit,faTrash} from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Card, Table, ButtonGroup } from 'react-bootstrap';
import MyNavBar from '../MyNavBar';


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
                <MyNavBar></MyNavBar>
            <div >
                <h3 className="list"> <b>Successful</b> </h3>
                <Card.Body className ={"border border-dark bg-dark text-white"} style={{marginTop:'2cm' , width:'30cm'}}>
                    <form className="">
                    <Table hover striped variant="dark">

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
                    </Table>
                    </form>
                </Card.Body>

            </div>
            </div>
        )
    }
}

export default Details;