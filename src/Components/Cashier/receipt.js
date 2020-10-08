import React from 'react';


import './receipt.css';

const Receipt = props => {
   
    return(  
       <form className="place-form">
        <h1 className="checkout">Receipt</h1>      
    <div>
        <table className="table1">
    <thead >
    <tr>
            <p><b>Mango Restaurant</b><br></br>
            <b>Kalagedihena.</b><br></br>
            <b>077 735599</b></p>
    </tr>
    </thead>
        </table>   

        <table className="table2">
   <thead >
        <tr>
            <th>Bill To</th>
            <th>Deliver To</th>
            <th>Receipt No:-</th>
        </tr>
  </thead>
         <tr>
            <td></td>
            <td></td>
            <td>Receipt Date:-</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>Due Date:-</td>
        </tr>
        </table>
<br></br>
        <table className="table3">
        <thead >
        <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Amount</th>
        </tr>
  </thead>
         <tr>
            <td>a</td>
            <td>a</td>
            <td>a</td>
            <td>a</td>
        </tr>
        </table>
        <br></br>
        <table className="table4">
            <tr>
            <th>
                <td>Sub Total</td>
                <td>a</td>
            </th>
            </tr>
            <tr>
            <th>
                <td>Discount</td>
                <td>a</td>
            </th>
            </tr>
            <tr>
            <th>
                <td>Total Amount</td>
                <td>a</td>
            </th>
            </tr>
        </table>
    </div> 
    </form>
   )
};

export default Receipt;