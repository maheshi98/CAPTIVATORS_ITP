import React from 'react'
import {Card , Table , Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
class Order extends React.Component{

    render(){
        return(
           <Card className = {"border border-light bg-light text-black"} style={{ alignContent:'center', width:'30cm'}}>
             <Card.Header> <h2>Order List</h2></Card.Header>
             <Card.Body>
                 <Table boardered hover striped variant = "grey">
                     <thead>
                         <tr>
                             <th>Order ID</th>
                             <th>Order Item</th>
                             <th>Customer name</th>
                             <th>unit price</th>
                             <th>Quantity</th>
                             <th>Total Price</th>
                             <th>Status</th>
                             <th>Action</th>
                         </tr>
                     </thead>
                     <tbody>
                         <tr align = "center">
                             <td colSpan = "8">No List Available </td>
                         </tr>
                     </tbody>

                 </Table>
             </Card.Body>
             <Link to ={"orderdet"} className = "nav-link">
                    <Button variant="success"  >Check Order Details</Button>
                    </Link>
           </Card>
        )
        
    }
}

export default Order;