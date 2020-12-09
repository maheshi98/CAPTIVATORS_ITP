import React from 'react'
import { Card, Table,  Button , Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import ShoppingCartService from '../service/ShoppingCartService';
import MyNavBar from './MyNavBar'
import jsPDF from 'jspdf'; import 'jspdf-autotable';


class Order extends React.Component{

    constructor(props) {

        super(props);
        this.state = {
           
            orderlist: []
        };


    }

    componentDidMount() {
        ShoppingCartService.getShopp().then((res) => {
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
    //Report generation part starting from here

    exportPDF = () => {

        console.log( "SSSSSSSSSS" )

        const unit = "pt";

        const size = "A3"; // Use A1, A2, A3 or A4

        const orientation = "landscape"; // portrait or landscape

        const marginLeft = 40;

        const doc = new jsPDF( orientation, unit, size );

        const title = "Order List Of the day ";

        const headers = [["Cart ID","Customer ID","Product ID","Product name","Unit Price","Quantity","Total Price"]];

        const order =  this.state.orderlist.map(

            orderlist=>[

                orderlist.cartID,
                orderlist.userId,
                orderlist.productID,
                orderlist.productName,
                orderlist.unitPrice,
                orderlist.quantity,
                orderlist.unitPrice * orderlist.quantity,

            ]

        );
        let content = {
            startY: 50,
            head: headers,
            body: order
        };

        doc.setFontSize( 20 );
        doc.text( title, marginLeft, 40 );
        require('jspdf-autotable');
        doc.autoTable( content );
        doc.save( "order List.pdf" )
    }

    
    render(){
        return(
            <card>
                <MyNavBar/>
           <Card className = {"border border-dark bg-dark text-white"} style={{ alignContent:'center', width:'30cm', marginTop :'3.5cm'}}>
             <Card.Body>
             <Card.Header align = "center"> <h3 className={"text-white"}>Order List</h3></Card.Header>

                 <Table boardered hover striped variant = "dark">
                     <thead>
                         <tr>
                             <th>Order ID</th>
                             <th>Customer ID</th>
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
                                                <td>{orderlist.userId}</td>
                                                <td>{orderlist.productID}</td>
                                                <td>{orderlist.productName}</td>
                                                <td>Rs.{orderlist.unitPrice}.00</td>
                                                <td>{orderlist.quantity}</td>
                                    <td>Rs.{orderlist.unitPrice * orderlist.quantity}.00</td>

                                            </tr>
                                    )
                                }
                            </tbody>


                 </Table>
             </Card.Body>
            
             <Link to ={"orderdet"} className = "nav-link">
                    <Button variant="success"  >Check Order Details</Button>
                    

                    </Link>
                    <Button style={{textAlign:"center"}} onClick={() => this.exportPDF()}> Generate Report</Button>
           </Card>
           <Container fluid style={{paddingRight:"15%", paddingLeft:"15%"}}>



</Container> 
           </card>
        )
        
    }
}

export default Order;