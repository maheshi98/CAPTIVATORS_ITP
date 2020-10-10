import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import '../userprofile.css';
import{ Card , Table} from "react-bootstrap";
import PromotionService from '../service/PromotionService';
import MyNavBar from './MyNavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faEdit } from '@fortawesome/free-solid-svg-icons'

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
        <div className="updatepromotions" style={{marginTop:'2.5cm'}}>
            <ul class="nav2">
                <li class="list1"><a class="nav" href="">HOME</a></li>
                <li class="list1"><a class="nav" href="/viewpromotions">ViewPromotions</a></li>
                <li class="list1"><a class="nav" href="/addpromotion">Add Promotions</a></li>

            </ul>
            
            <center>
            <font size="7" className="text-center">Promotions List</font>
            </center>
            <Card className = {"border border-dark bg-dark text-white"} style={{ alignContent:'center', width:'30cm'}}>
                <Table  boardered hover striped variant = "dark">
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
                                     
                                            <button className="btn btn-primary"  onClick = { () => this.editPromotion(promotion.pCode)} role="button"
                                                >
                                            <FontAwesomeIcon icon={faEdit} size="1x" />
                                            </button>
                                            <button onClick = { () => this.deletePromotion(promotion.pCode)} style={{marginLeft : "20px"}} className="btn btn-danger"  >
                                            <FontAwesomeIcon icon={faTrash} size="1x" />
                                            </button>
                                     
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>


                </Table>

            </Card>
               
        </div>
        </div>
      )
    }
}
export default ListPromotionsComponent;
