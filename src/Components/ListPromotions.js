import React, { Component } from 'react';


import '../userprofile.css';

import {Card , Table} from "react-bootstrap";

import PromotionService from '../service/PromotionService';
import MyNavBar from './MyNavBar';

import jsPDF from 'jspdf'; import 'jspdf-autotable';






class ListPromotionsComponent extends Component {

    constructor(props){

        super(props);

        

        this.state = {

            promotions : [],

        



        };

    }

    handleChange = this.handleChange.bind(this);

    editPromotion = this.editPromotion.bind(this);

    deletePromotion = this.deletePromotion.bind(this);

    

 

 



    handleChange(event) {  

       this.setState({

          [event.target.name]: event.target.value



       });



    }



    editPromotion(id){

        this.props.history.push(`/updatepromotions/${id}`);





    }



    deletePromotion(id){

        //this.props.history.push(`/deletepromotions/${id}`);

        PromotionService.deletePromotion(id).then(res =>{

            this.setState({promotions : this.state.promotions.filter(promotion => promotion.pCode != id)})

        } );





    }

    //JSPDF

      //Report generation part starting from here

      exportPDF = () => {

        console.log( "SSSSSSSSSS" )





        const unit = "pt";

        const size = "A3"; // Use A1, A2, A3 or A4

        const orientation = "landscape"; // portrait or landscape

        const marginLeft = 40;

        const doc = new jsPDF( orientation, unit, size );



        // const jsPDF = require('jspdf');

        // require('jspdf-autotable');



        const title = "Promotion Details ";

        const headers = [["Promotion Code","Order Number","Discount Rate"]];



        // const Order = this.state.Order.map( orderList => [orderList.order_id, orderList.product_id,orderList.productname,orderList.brand, orderList.total_amount, orderList.qty,orderList.email,orderList.address,orderList.purchase_date] );



        const promDetails = this.state.promotions.map(

            promo=>[

                promo.pCode,

                promo.oNumber,

                promo.disRate,

               

            ]

        );



        let content = {

            startY: 50,

            head: headers,

            body: promDetails

        };

        doc.setFontSize( 20 );

        doc.text( title, marginLeft, 40 );

        require('jspdf-autotable');

        doc.autoTable( content );

        doc.save( "Promotion List.pdf" )

    }

    



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





    componentDidMount(){

        PromotionService.getPromotions().then((res) => {

            console.log(res.data);

            this.setState({promotions : res.data});

        });

        

    }

    render() {

      return (
          <div>
              <MyNavBar></MyNavBar>
        <div className="updatepromotions" style={{marginTop:'3cm'}}>

            <ul class="nav2">

                <li class="list1"><a class="nav" href="/viewpromotions">ViewPromotions</a></li>

                <li class="list1"><a class="nav" href="/addpromotion">Add Promotions</a></li>



            </ul>

            

            <Card className={"border border-dark bg-dark text-white"} style={{ alignContent: 'center', width: '35cm', marginTop:'1.5cm' }}>

            <Card.Header> <h3  className={"border border-dark bg-dark text-white"} >
            <center>Promotions List</center></h3> </Card.Header>
            <Card.Body>

            <button onClick={() => this.exportPDF()} style={{marginLeft : "20px"}} className="btn btn-danger"  >

                                            Download Report

                                            </button>

            <div className="row">

                <Table hover striped variant="dark">

                    <thead>

                        <tr>

                            <th>Promotion Code</th>

                            <th>Order Number</th>

                            <th>Discount Rate</th>

                            <th>Actions</th>



                        </tr>





                    </thead>



                    <tbody>

                        {

                            this.state.promotions.map(

                                promotion =>

                                <tr>

                                    <td>{promotion.pCode}</td>

                                    <td>{promotion.oNumber}</td>

                                    <td>{promotion.disRate}</td>

                                    <td>

                                     

                                            <a className="btn btn-success"  onClick = { () => this.editPromotion(promotion.pCode)} role="button"

                                                >

                                            Update

                                            </a>

                                            <button onClick = { () => this.deletePromotion(promotion.pCode)} style={{marginLeft : "20px"}} className="btn btn-danger"  >

                                            Delete

                                            </button>

                                            

                                     

                                    </td>

                                </tr>

                            )

                        }

                    </tbody>





                </Table>



            </div>

              </Card.Body>
            </Card>
        </div>
        </div>

      )

    }

}

export default ListPromotionsComponent;

