import React from 'react'
import { Card, Table, ButtonGroup , Button } from 'react-bootstrap';
 import axios from 'axios';
import OrderService from '../service/OrderService';
import Pdfcomp from './Pdfcomp';
import MyNavBar from './MyNavBar'
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


class Orderdet extends React.Component {

    constructor(props) {

        super(props);

        // this.deleteOrder= this.deleteOrder.bind(this);
        this.state = {
            message :'Pending',
            order: []
        };


    }

    componentDidMount() {
        OrderService.getOrder().then((res) => {
            console.log(res.data);
            this.setState({ order: res.data });
        });
    }


    addOrder() {
        this.props.history.push("/orderdet")
    }
    deleteOrder = (id) => {


        axios.delete("http://localhost:8080/api/v1/orderdet/" + id, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*"
            }
        }).then(res => {
            this.setState({ order: this.state.order.filter(order => order.id !== id) })
            this.componentDidMount();
        })
    }
    //deleteOrder= (id) =>{
    //axios.delete("http://localhost:8080/api/v1/orderdet/" +OrderID)
    //.then(response =>{
    //  if(response.data != null){
    //    alert("deleted")
    //}
    //})

    changeMessage= (orderID) =>{
        this.setState({
            message:'Delivered'
        })
    }


    render() {
        return (
            
                <div style = {{ alignContent: 'center' , marginLeft: '0'}}>
                    <MyNavBar/>
                    <div ><button className= "btn btn-primary" >Check Order List </button></div>

                    <Card.Body className={"border border-dark bg-dark text-white"} style={{ alignContent: 'center', width: '35cm', paddingLeft :'5.5m', marginTop:"3cm" }}>
                    <Card.Header  align = "center"> <h3 className={"text-white"}>Customer Detail List</h3></Card.Header>

                        <Table hover striped variant="dark" responsive>
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Address</th>
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
                                            <tr key={order.orderID}>
                                                <td>{order.email}</td>
                                                <td>{order.address}</td>
                                                <td>{order.name}</td>
                                                <td>{order.number}</td>
                                                <td>{order.description}</td>
                                                <td>{this.state.message}</td>
                                                <td>
                                                    <ButtonGroup>
                                                        <button className="btn btn-danger" onClick={() => {
                                                            this.deleteOrder(order.orderID)
                                                        }}>
                                                            <FontAwesomeIcon icon={faTrash} size="1x" />
                                                        </button>
                                                        <button className="btn btn-primary" style={{marginLeft:'0.5cm'}}
                                                        onClick={() => {
                                                            this.changeMessage(order.orderID)
                                                        }}>
                                                            Confirm
                                                        </button>
                                                    </ButtonGroup>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>

                        </Table>
                        <hr/>
                        <div>
              <Link  to ={"orderlist"} className = "nav-link">
                    <Button variant="success" style={{textAlign:"center"}} > Order List</Button>
                    </Link>
                     </div>

                    </Card.Body>
                    <hr/>
                
                </div>
               
               
               
              
           
          
        )

    }
}


export default Orderdet;