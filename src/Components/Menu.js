
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

import { Card, Image, Row } from "react-bootstrap";
//import empimg from "../../Images/noimg.jpg";
//import CardGroup from "react-bootstrap/CardGroup";
/////////import Carousel from "react-bootstrap/Carousel";
////import img1 from "../../Images/img01.jpg";
//import img2 from "../../Images/img02.jpg";
//import img5 from "../../Images/img00.jpg";

import MenuService from '../Services/MenuService';
import ShoppingCartService from '../service/ShoppingCartService';
import Menuitem from './MenuItem';
import './styles/MenuStyles.css'
class Menu extends Component {
    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
        this.state = {
            menuDetails: []
        };

    }

    componentDidMount() {
        MenuService.getMenuDetails().then((res) => {
            this.setState({ menuDetails: res.data });
        });
    }

    addToCart = (menuDetails) => {

        let formData =
        {

            productName: menuDetails.foodName,
            unitPrice: menuDetails.price,
            quantity: 1,
            productID: menuDetails.id,

        };
        console.log('formData =>' + JSON.stringify(formData));
        ShoppingCartService.AddToCart(formData).then(res => {
            this.props.history.push('/shop');
        });


    }
    render() {
        return (

            <div className="container">
                <main className="grid">
                    {
                        this.state.menuDetails.map((menu, key) => {

                            return <Menuitem menu={menu} addToCart={this.addToCart} key={key} />
                        })
                    }
                </main>
            </div>

            // <Card className={"border border-dark bg-dark text-white"}>


            //     <Card.Body>

            //         <table className="table table-striped table-hover table-dark table-bordered ">

            //             <tbody>





            //                 {
            //                     this.state.menuDetails.map(
            //                         menuDetails =>

            //                             <td key={menuDetails.id}>
            //                                 <tr><Image src={menuDetails.imgURL} roundedRectangle width="200" height="180" /></tr><tr></tr>
            //                                 <tr>CATEGORY : {menuDetails.category}</tr>
            //                                 <tr>FOOD NAME : {menuDetails.foodName}</tr>
            //                                 <tr>DESCRIPTION : {menuDetails.description}</tr>
            //                                 <tr>PRICE : {menuDetails.price}</tr>

            //                                 <td> <button
            //                                     type="button"
            //                                     className="btn btn-outline-success"
            //                                     onClick={(event) => this.addToCart(menuDetails, event)}
            //                                 ><FontAwesomeIcon icon={faCartPlus} size="2x" />

            //                                 </button> </td>




            //                             </td>
            //                     )
            //                 }

            //                 <tr align="center">

            //                 </tr>
            //             </tbody>
            //         </table>
            //     </Card.Body>
            // </Card>



        );

    }
}


export default Menu;

// import React, { Component } from 'react'
// import {Card , Form} from 'react-bootstrap';
// import Col from "react-bootstrap/Col";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


// export default class Menu extends Component {
//     constructor(props) {
//         super(props)

//         this.submitDet= this.submitDet.bind(this);
//         this.state = {

//         }


//     }

//     componentDidMount() {

//     }

//     submitDet(){
//         this.props.history.push("/shop")
//     }

//     render() {
//         return (
//             <div>
//             <Card style={{ width: '8cm' }}>
//             <Card.Body>
//           <Card.Title></Card.Title>

//           <img
//             src="https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl.jpg" alt="Logo" style={{width:"7cm"}}

//           />
//         <br/>
//         <Card.Text as={Col} >
//         <Form.Group  as={Col} controlId="">
//                                 <Form.Label>Creamy pasta : </Form.Label>
//                                 <Form.Label>Rs 750.00</Form.Label>

//                             </Form.Group>
//               <button onClick= {this.submitDet}>
//               <FontAwesomeIcon icon={faCartPlus} size="3x" color="red"/> 
//               </button>

//         </Card.Text>


//         </Card.Body>

//                 </Card> 
//             </div>
//         )
//     }
// }

