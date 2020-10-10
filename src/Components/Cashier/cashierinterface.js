import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './cashierinterface.css'
import ItemLineServices from "../../Services/ItemLineServices";
import CashierService from "../../Services/CashierService";
import { Link } from 'react-router-dom';

// const AddPayment = () => {
//     const [value, setValue] = useState('');
//     const handleSelect = (e) => {
//         console.log(e);
//         setValue(e)
//     };

export default class AddPayment extends Component {

    constructor(props) {
        super(props)

        this.onPidChange = this.onPidChange.bind(this);
        this.onKeyChange = this.onKeyChange.bind(this);
        this.saveTransactionDetails = this.saveTransactionDetails.bind(this);

        this.state = {
            pID: 0,
            qty: "",
            price: 0,
            ammount: 0,
            pName: "",
            Itemdata: [0],
            message: "",
            pay:"",
            amount:"",
            Pname:"",
            quantity:"",
            CashierDetails:[]
        };
    }
    onPidChange(event) {

        this.setState({
            pID: event.target.value
        })
    }

    onKeyChange(event) {
        var code = event.keyCode || event.which;

        if (code === 13) {
            this.getItemDetails(this.state.pID)
        }

    }

    getItemDetails(pID) {

        // this.onKeyChange()
        ItemLineServices.getItemDetailsById(pID).then((res) => {
            this.setState({
                Itemdata: res.data
            });

        });

        // if(this.state.Itemdata.values.length == 0){

        //     this.setState({
        //         message:"No data"
        //     })
        // }
        // else
        // {

        this.state.Itemdata.map(
            itemDetails => {
                this.setState({
                    pName: itemDetails.pName,
                    price: pID,
                    // pName : this.state.Itemdata[1]
                });
            }
        )
        // }
    }

    saveTransactionDetails = (e) => {
        e.preventDefault();

        let cashierdetails = {

            Pname: this.state.Pname,
            quantity: this.state.quantity,
            price: this.state.price,
            amount: this.state.amount,
        }

        console.log('cashierdetails => ' + JSON.stringify(cashierdetails));

        CashierService.createCashier(cashierdetails).then(res => {
            this.setState({ message: 'Details added successfully.' });
        
        })
    }

    componentDidMount(){
        CashierService.getCashierDetails().then((res) => {
            this.setState({ CashierDetails: res.data});
        });
    }
    render() {
        return (
            <form className="place-form1">
                <div className="jumbotron1">
                    <h3 className="headd">Cashier Interface</h3>
                </div>

                <table className="table">
                    <tr>
                        <td>
                            <table className="table10">
                                
                                <tr>
                                    <td><b>Product ID</b></td>
                                    <td>
                                        <input
                                            id="pID"
                                            element="input"
                                            type="search"
                                            name="pID"
                                            label="Product ID"
                                            onChange={this.onPidChange}
                                            onKeyPress={this.onKeyChange}
                                            autoComplete="pName"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>Product Name</b></td>
                                    <td>
                                        <input
                                            id="pName"
                                            name="pName"
                                            value={this.state.pName}
                                            element="input"
                                            label="Product Name"
                                            type=" text"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>Quantity</b></td>
                                    <td>

                                        {['Info'].map(
                                            (variant) => (
                                                <DropdownButton

                                                    key={variant}
                                                    id={`dropdown-variants-${variant}`}
                                                    variant={variant.toLowerCase()}
                                                // title={value}
                                                // onSelect={handleSelect}
                                                >

                                                    <Dropdown.Item eventKey="1">1</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">2</Dropdown.Item>
                                                    <Dropdown.Item eventKey="3">3</Dropdown.Item>
                                                    <Dropdown.Item eventKey="4">4</Dropdown.Item>
                                                </DropdownButton>

                                            ),
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>Price</b></td>
                                    <td>
                                        <input
                                            id="price"
                                            name="price"
                                            value={this.state.price}
                                            element="input"
                                            label="Product Price"
                                            type=" text"
                                        />
                                        {/* {['Info'].map(
                                            (variant) => (
                                                <DropdownButton

                                                    key={variant}
                                                    id={`dropdown-variants-${variant}`}
                                                    variant={variant.toLowerCase()}
                                                    // title={value1}
                                                    // onSelect={handleSelect1}
                                                >

                                                    <Dropdown.Item eventKey="10">10</Dropdown.Item>
                                                    <Dropdown.Item eventKey="20">20</Dropdown.Item>
                                                    <Dropdown.Item eventKey="30">30</Dropdown.Item>
                                                    <Dropdown.Item eventKey="40">40</Dropdown.Item>
                                                </DropdownButton>

                                            ),
                                        )} */}
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>Amount</b></td>
                                    <td>
                                        <input
                                            id="amount"
                                            element="input"
                                            type="text"
                                            value={this.state.price * 2}
                                            label="Amount"
                                        // value={value*value1}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>

                                    </td>
                                    <td>
                                        <Button onClick={this.saveTransactionDetails} variant="outline-info" style={{ marginLeft: "3rem" }}>
                                            Add Item
                                        </Button>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table className="table20">
                                <tr>
                                    <td>
                                        <label><b>Total Amount</b> </label>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            id="Tamount"
                                            element="input"
                                            type="text"
                                            label="Total Amount"
                                        />
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        <label><b>Pay</b> </label>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            id="pay"
                                            element="input"
                                            type="text"
                                            label="Pay"
                                            value={this.state.pay}
                                        />

                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        <label><b>Balance</b></label>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            id="balance"
                                            element="input"
                                            type="text"
                                            label="Pay"
                                            value={this.state.pay - this.state.ammount}
                                            
                                        />
                                    </td>
                                    <td></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <table className="table6">
                    <thead>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Amount</th>
                    </thead>
                    <tbody>
                        {
                             this.state.CashierDetails.map(
                                cashierdetails =>
                                <tr key = {cashierdetails.id}>
                        
                                <td>{ cashierdetails.Pname} </td>
                                <td>{ cashierdetails.quantity} </td>
                                <td>{ cashierdetails.price} </td>
                                <td>{ cashierdetails.amount} </td>
                                </tr>
                             )
                    }
                    </tbody>
                </table>
                <br></br>
                <Link to="/receipt">
                    <Button variant="success" style={{ marginLeft: "24rem" }}>
                        Print Bill
                </Button>
                </Link>
            </form>

        );
    }

}
// export default AddPayment;