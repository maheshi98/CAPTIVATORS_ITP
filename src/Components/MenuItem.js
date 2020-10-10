import React, { Component } from 'react'
import './styles/MenuItemStyles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


export default class Menuitem extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }


    render() {
        return (
            <article className="product-card main-shadow">

                <div className="product-tumb">
                    <img width="200" height="200" src={this.props.menu.imgURL} alt="" />
                </div>
                <div className="product-details" >
                    <span className="product-catagory">{this.props.menu.category}</span>
                    <h4><a href="#name">{this.props.menu.foodName}</a></h4>
                    <p>{this.props.menu.description}</p>
                    <div className="product-bottom-details">
                        <div className=" product-price txt-main">RS.{this.props.menu.price}.00</div>
                        <div className="product-links">
                            <a href="#name"><i className="fa fa-heart" /></a>
                            <a href="#name"><i className="fa fa-shopping-cart" /></a>
                        </div>

                    </div>
                    <button
                        type="button"
                        className="btn btn-warning btn-block"
                        onClick={(event) => this.props.addToCart(this.props.menu)}
                    >Add To Cart  <FontAwesomeIcon icon={faCartPlus} size="1x" />

                    </button>
                </div>
            </article >

        )
    }
}
