import React, {Component} from 'react';
import jsPDF from 'jspdf'; import 'jspdf-autotable';
import MyNavBar from './MyNavBar'
import { Card,Table,Image } from 'react-bootstrap';
import MenuService from '../Services/MenuService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

 export default class FoodItemList extends Component{

   constructor(props){
       super(props);
        this.state = {
            menuDetails: []
       };
        this.addMenuDetails = this.addMenuDetails.bind(this)
        this.updateMenuDetails = this.updateMenuDetails.bind(this)
        this.deleteMenuDetails = this.deleteMenuDetails.bind(this)
   }
    deleteMenuDetails(id){
        alert("Delete is sucessfully!");
        MenuService.deleteMenu(id).then(res =>{
            this.setState({menuDetails: this.state.menuDetails.filter(menuDetails => menuDetails.id !== id)});

            MenuService.getMenuDetails().then((res) =>{            
            this.setState({menuDetails: res.data}); 
        });

        });

 }
  
componentDidMount(){
        MenuService.getMenuDetails().then((res) =>{
        this.setState({menuDetails: res.data}); 
    });
}
    
addMenuDetails(){
   this.props.history.push('/add-Menu-Details');

} 
updateMenuDetails(id){
    this.props.history.push(`/UpdateFoodItem/${id}`);

} 

 //Report generation part starting from here

 exportFoodListPDF = () => {

    console.log( "SSSSSSSSSS" )

    const unit = "pt";

    const size = "A4"; // Use A1, A2, A3 or A4

    const orientation = "landscape"; // portrait or landscape

    const marginLeft = 40;

    const doc = new jsPDF( orientation, unit, size );


    const title = " food item list Report ";

    const headers = [["Category","Food Name","description","Price"]];



        const menuDetails = this.state.menuDetails.map(

        menuDetails=>[

            

            menuDetails.category,

            menuDetails.foodName,

            menuDetails.description,

            menuDetails.price

        ]

    );



    let content = {

        startY: 50,

        head: headers,

        body: menuDetails

    };



    doc.setFontSize( 20 );

    doc.text( title, marginLeft, 40 );

    require('jspdf-autotable');

    doc.autoTable( content );

    doc.save( "FoodListReport.pdf" )

  }







    render(){
        return(
            
            <div>
                  <MyNavBar/>
            
            <Card   style={{marginTop :'3cm'}} className={"border border-dark bg-dark text-white"}>
         
            <Card.Body>
            <div><button className= "btn btn-primary" onClick={this.addMenuDetails}>Add Menu </button>
            <button style = {{marginLeft: "10px"}} className = "btn btn-primary" onClick = {this.exportFoodListPDF}> Download </button></div>
            <table  className = "table table-striped table-hover table-dark table-bordered ">
            <thead>
           <div></div>
           <tr>
            
            <th className = "text-center">Image</th>
            <th className = "text-center">Category</th>
            <th className = "text-center">Food Name</th>
            <th className = "text-center">Description</th>
            <th className = "text-center">Price</th>
            <th className = "text-center">Action</th>

            </tr>
            </thead>
            <tbody>
                {
                    
                    
                    this.state.menuDetails.map(
                        menuDetails =>
                        
                        <tr key = {menuDetails.id}>
                            <td><Image src={menuDetails.imgURL} roundedCircle width="75" height ="75"/></td>
                            <td>{menuDetails.category}</td>
                            <td>{menuDetails.foodName}</td>
                            <td>{menuDetails.description}</td>
                            <td>{menuDetails.price}</td>
                            <td><button onClick = {() => this.updateMenuDetails(menuDetails.id)} className="btn btn-info">                            
                            <FontAwesomeIcon icon={faEdit} size="1x" />
</button> </td>
                            <td><button  onClick = {() => this.deleteMenuDetails(menuDetails.id)} className="btn btn-danger">                                                            
                            <FontAwesomeIcon icon={faTrash} size="1x" />
</button></td>

                        </tr>
                    )
                }
                <tr align= "center">
        <td colSpan = "7"> Avalible.</td>
                </tr>
            </tbody>
            </table>
            </Card.Body>
            </Card>
            </div>

             
            

        );
    
    }
}
