import React, { Component } from 'react'
import { jsPDF } from "jspdf";
import OrderService from '../service/OrderService';



export default class Pdfcomp extends Component {

    constructor(props) {

        super(props);
        this.state = {
           
            order: []
        };


    }

    componentDidMount() {
        OrderService.getOrder().then((res) => {
            console.log(res.data);
            this.setState({ order: res.data });
        });
    }
 
   
   
   pdfgenerator =() =>{
      var doc = new jsPDF('p' , 'pt');
      
      doc.text(20 , 20 ,   'hi'   );
      doc.save("order Details.pdf");
   }

    render() {
        return (
            <div  style ={{paddingTop : "1cm"}}>
               <button className="btn btn-success"  onClick = {this.pdfgenerator }> Download Feedback List</button>
               
            </div>
        )
    }
}
