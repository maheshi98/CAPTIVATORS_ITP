import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { Button, ButtonGroup } from "react-bootstrap";

export default class Shoppingcartrow extends Component {


    constructor(props) {
        super(props)

        this.state = {
            item: this.props.item
        }


    }


    incrementQty = () => {
        var item = { ...this.state.item }
        item.quantity++;
        this.setState({ item })
    }

    decrementQty = () => {
        var item = { ...this.state.item }
        console.log(item.quantity);

        item.quantity = item.quantity > 2 ? item.quantity - 1 : 1;
        this.setState({ item })
    }
    

    render() {
        return (
            <tr key={this.state.item.cartID}>
                <td>{this.state.item.cartID}</td>
                <td>{this.state.item.productName}</td>
                <td>{this.state.item.quantity}</td>
                <td>{this.state.item.unitPrice}</td>
                <td>
                    <Button size="sm" variant="dark"
                        onClick={() => {
                            this.decrementQty();
                        }}>-</Button>
                    <Button size="sm" variant="dark" style={{ marginLeft: '0.2cm' }}
                        onClick={() => {
                            this.incrementQty();
                        }}
                    >+</Button>
                </td>
                <td>{this.state.item.unitPrice * this.state.item.quantity}</td>

                <td>
                    <ButtonGroup>
                        <button className="btn btn-danger" onClick={() => {
                            this.props.deleteShoppingcart(this.props.item.cartID)
                        }}>
                           
                            <FontAwesomeIcon icon={faTrash} size="1x" />
                        </button>
                        <button style={{marginLeft:'0.5cm'}} className="btn btn-primary" onClick={() => {
                            this.props.updateshoppingcart(this.props.item.cartID , this.state.item.quantity)
                        }}>
                            update
                           
                        </button>
                    </ButtonGroup>
                </td>
            </tr>
        )
    }
}
