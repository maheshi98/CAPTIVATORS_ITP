import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
import {Link} from 'react-router-dom'
 import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
// import Modal from "react-bootstrap/Modal";
// import {faAlignCenter} from 'react-icons/fa'

class Shoppingcart extends Component {
    constructor(props){
        super(props);
        this.state = {
            ShoppingcartList: [],
            isLoaded: false,
            total:0,
            isPayareaHidden:true
        }
    }
    
    calcTotal() {
        var totalprice = 0;
    
        this.state.ShoppingcartList.map((item) => {

            totalprice = totalprice +item.productPrice;
        });
        return parseFloat(totalprice).toFixed(2);

    }

    renderShoppingCart(list) {

      



    let tableContent = (list === undefined || list === null || list.length === 0) ? null : (

        list.map((item) => {

            return (
                <ListGroup.Item variant="success">
                <Row>
                    <Col xs="7">
                        {item.productName}
                    </Col>
                    <Col xs="4">
                        { parseFloat(item.productPrice).toFixed(2)}
                    </Col>
                    <Col xs="1">
                        <a href="#" className="ml-auto btn btn-danger btn-sm"  onClick={(event) => this.clearCartById(item.cartId,event)}>
                            <span className="fa fa-trash"></span>
                        </a>
                    </Col>
                </Row>


            </ListGroup.Item>
            );


        }));
    return (

        <ListGroup>
            {tableContent}
        </ListGroup>

    );
}
    render() {
        let ShoppingCartList = this.renderShoppingCart(this.state.ShoppingcartList);
       
        return (
            <div>
                <Card className = {"border border-light bg-light text-black"} style={{ alignContent:'center', width:'20cm'}}>
                <br/>
                <h2>Shoppingcart</h2>
            <Table responsive>
                <thead>
                <tr>
                    <th>Product</th>
                    <th>UnitPrice</th>
                    <th>Quantity</th>
                    <th>Discount</th>
                   
                    <th>Price</th>
                    <th>Action</th>

                </tr>
                </thead>
                
            </Table>
                <Row>
                    <Col  xs={10}>
                        <h5>Total = </h5>
                    </Col>
                   
                    <Col  xs={2}>
                        
                    </Col>
                    </Row>
                    <Link to ={"checkout"} className = "nav-link">
                    <br/>
                    <Button variant="success"  >Checkout</Button>
                    </Link>
                </Card>
                
                    </div>
                )
        
    }
}

export default Shoppingcart;