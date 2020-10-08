import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
import { Link } from 'react-router-dom'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
import { Button, ButtonGroup } from "react-bootstrap";
// import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import ShoppingCartService from '../service/ShoppingCartService';

import MyToast from './MyToast';
import Shoppingcartrow from './ShoppingCartRow';


class Shoppingcart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            updateShow:false,
            ShoppingcartList: [],
            isLoaded: false,
            total: 0,
            isPayareaHidden: true
        }
    }

    calcTotal = () => {
        var totalprice = 0;
        for (let item of this.state.ShoppingcartList) {
            totalprice = totalprice + (item.unitPrice * item.quantity);
        }
        // this.state.ShoppingcartList.map((item) => {
        //     totalprice = totalprice + item.productPrice;
        // });
        console.log(totalprice);

        return parseFloat(totalprice).toFixed(2);

    }

   

    componentDidMount() {
        ShoppingCartService.getShoppinCart().then((res) => {

            this.setState({ ShoppingcartList: res.data });
        });
    }

    deleteShoppingcart = (id) => {

        ShoppingCartService.DeleteFromCart(id).then(res => {
            // console.log('del', res.data);
            this.setState({ "show": true });
            setTimeout(() => this.setState({ "show": false }), 3000)
            this.setState({ ShoppingcartList: res.data });



        })


    }

    updateshoppingcart =(id , quantity) =>{
        ShoppingCartService.UpdateShoppingcart(id , quantity).then(res => {
            this.setState({"updateShow" : true});
            setTimeout(() => this.setState({ "updateShow": false }), 3000)
            this.setState({ ShoppingcartList: res.data });
        })
    }

    render() {
      

        return (
            <div>
                <div style={{ "display": this.state.show ? "block" : "none" }}>

                    <MyToast children={{ show: this.state.show, message: "Delete successfully!" }} />
                </div>
                <div style={{ "display": this.state.updateShow ? "block" : "none" }}>

<MyToast children={{ show: this.state.updateShow, message: "updated successfully!" }} />
</div>
                <Card className={"border border-light bg-light text-black"} style={{ alignContent: 'center', width: '20cm' }}>
                    <br />
                    <h2>Shoppingcart</h2>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Unit price</th>
                                <th>Action</th>
                                <th>Net price</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.ShoppingcartList.map((ShoppingcartList, key) => {
                                    return <Shoppingcartrow
                                        key={key}
                                        item={ShoppingcartList}
                                        deleteShoppingcart={this.deleteShoppingcart}
                                        updateshoppingcart= {this.updateshoppingcart}
                                        incrementQty={this.incrementQty} />
                                }

                                )
                            }
                        </tbody>

                    </Table>
                    <Row>
                        <Col xs={10}>
                            <h5>Total = {this.calcTotal()} </h5>
                        </Col>

                        <Col xs={2}>

                        </Col>
                    </Row>
                    <Link to={"checkout"} className="nav-link">
                        <br />
                        <Button variant="success">Checkout</Button>
                    </Link>
                </Card>

            </div>
        )

    }
}

export default Shoppingcart;



















