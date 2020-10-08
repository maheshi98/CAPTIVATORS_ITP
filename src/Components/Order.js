import React from 'react'
import { Card, Table, ButtonGroup, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import ShoppingCartService from '../service/ShoppingCartService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import generatePDF from "../Services/Orderreport";

class Order extends React.Component{

    constructor(props) {

        super(props);
        this.state = {
           
            orderlist: []
        };


    }

    componentDidMount() {
        ShoppingCartService.getShoppinCart().then((res) => {
            console.log(res.data);
            this.setState({ orderlist: res.data });
        });
    }

    calcTotal = () => {
        var totprice = 0;
        for (let item of this.state.orderlist) {
            totprice = (item.unitPrice * item.quantity);
        }
    
        console.log(totprice);

        return parseFloat(totprice).toFixed(2);

    }
    
    render(){
        return(
           <Card className = {"border border-dark bg-dark text-white"} style={{ alignContent:'center', width:'30cm'}}>
             <Card.Header align = "center"> <h3>Order List</h3></Card.Header>
             <Card.Body>
                 <Table boardered hover striped variant = "dark">
                     <thead>
                         <tr>
                             <th>Order ID</th>
                             <th>Product ID</th>
                             <th>Product Name</th>
                             <th>unit price</th>
                             <th>Quantity</th>
                             <th>Total Price</th>
                            
                         </tr>
                     </thead>
                     <tbody>
                                {
                                    this.state.orderlist.map(
                                        orderlist =>
                                            <tr key={orderlist.cartID}>
                                                <td>{orderlist.cartID}</td>
                                                
                                                <td>{orderlist.productID}</td>
                                                <td>{orderlist.productName}</td>
                                                <td>Rs.{orderlist.unitPrice}.00</td>
                                                <td>{orderlist.quantity}</td>
                                    <td>Rs.{orderlist.unitPrice * orderlist.quantity}.00</td>

                                   

                                                
                                               
                                                <td>
                                                    <ButtonGroup>
                                                        <button className="btn btn-danger" >
                                                            <FontAwesomeIcon icon={faTrash} size="1x" />
                                                        </button>
                                                        
                                                    </ButtonGroup>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>


                 </Table>
             </Card.Body>
             <button
              className="btn btn-primary"
              onClick={() => generatePDF()}
            >
              Generate monthly report
            </button>
             <Link to ={"orderdet"} className = "nav-link">
                    <Button variant="success"  >Check Order Details</Button>
                    </Link>
           </Card>
        )
        
    }
}

export default Order;