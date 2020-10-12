
import React, { Component } from 'react';

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
            



        );

    }
}


export default Menu;



