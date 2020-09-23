import React from 'react'
import {Card , Table , Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
class Order extends React.Component{

    constructor(props) {
        super(props)
    
        localStorage.setItem("isAdmin",true)
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