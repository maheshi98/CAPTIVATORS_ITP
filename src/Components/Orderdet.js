import React from 'react'
import {Card , Table , ButtonGroup , Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import axios from 'axios';
import FeedbackList from './FeedbackList'
import Order from './Order';
import OrderService from '../service/OrderService';

import {faTrash} from 'react-icons/fa'


class Orderdet extends React.Component{

constructor(props){
    
    super(props);
    
    this.deleteOrder= this.deleteOrder.bind(this);
    this.state = {
     order:[]
    };
    

}

componentDidMount(){
   OrderService.getOrder().then((res)=>{
        this.setState({order : res.data});
   });

   
    OrderService.getOrderbyId(this.state.id).then((res) =>{
        let order = res.data;
        this.setState({email : order.email ,
            address : order.address,landMark :order.landMark , city:order.city , zip:order.zip , name:order.name , number:order.number, description:order.description})
    })
}


addOrder(){
    this.props.history.push("/orderdet")
}
deleteOrder(id){
    OrderService.deletecheckOrder(id).then(res =>{
         this.setState({order:this.state.order.filter(order=> order.id!== id)})
    })
}
//deleteOrder= (id) =>{
//axios.delete("http://localhost:8080/api/v1/orderdet/" +OrderID)
  //.then(response =>{
    //  if(response.data != null){
      //    alert("deleted")
      //}
  //})



    render(){
        return(
            <div>
           <Card className = {"border border-light bg-light text-black"}style={{ alignContent:'center', width:'35cm'}}>
             <Card.Header> <h3 className = "text-center">Order Details</h3></Card.Header>
             <Card.Body>
                 <Table boardered hover striped variant = "grey" responsive>
                     <thead>
                         <tr>
                             <th>Email</th>
                             <th>Address</th>
                             <th>Land Mark</th>
                             <th>Customer Name</th>
                             <th>Contact Number</th>
                             <th>Description</th>
                             <th>Status</th>
                             <th>Action</th>
                         </tr>
                     </thead>
                     <tbody>
                     {
                         this.state.order.map(
                            order =>
                             <tr key = {order.id}>
                                 <td>{order.email}</td>
                                 <td>{order.address}</td>
                                 <td>{order.landMark}</td>
                                 <td>{order.name}</td>
                                 <td>{order.number}</td>
                                 <td>{order.description}</td>
                                 <td>{order.status}</td>
                                 <td>
                                     <ButtonGroup>
                                         <button  className ="btn btn-danger" onClick={()=> this.deleteOrder(order.id)}>
                                          Delete
                                         </button>
                                     </ButtonGroup>
                                 </td>
                             </tr>
                         )
                     }
                    </tbody>

                 </Table>
             </Card.Body>
           </Card>
           <FeedbackList/>
           </div>
        )
        
    }
}


export default Orderdet;