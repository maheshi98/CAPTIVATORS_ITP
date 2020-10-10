
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
import MyNavBar from './MyNavBar'

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
        window.sessionStorage.getItem("UserId");
        this.state.email = sessionStorage.UserId;
    }

    addToCart = (menuDetails) => {

        let formData =
        {

            userId : this.state.email,
            productName: menuDetails.foodName,
            unitPrice: menuDetails.price,
            quantity: 1,
            productID: menuDetails.id,

        };

        console.log('formData =>' + JSON.stringify(formData));
        ShoppingCartService.AddToCart(formData).then(res => {
            if(sessionStorage.getItem("UserRole")== '2'){
            this.props.history.push('/shop');
            }else{
                this.props.history.push('/UserLogin');
            }
        });


    }
    render() {
        return (

   
            <div className="container" >
                 <MyNavBar/>
                <main className="grid" style ={{marginTop:'3cm'}}>
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



