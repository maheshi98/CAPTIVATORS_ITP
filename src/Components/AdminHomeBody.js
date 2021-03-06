import React, {Component} from 'react';
import './Style.css';
import Img1 from './image/order.png'
import Img2 from './image/employee.jpg'
import Img3 from './image/menu.png'
import Img4 from './image/resturent.png'
import Img5 from './image/inventory.png'
import Img6 from './image/utility.jpg'
import Img7 from './image/deliver.png'
import Img8 from './image/customer.png'
import {Link} from 'react-router-dom';
import MyNavBar from './MyNavBar';



class  AdminHomebody extends Component{

  
    
    render(){
        if(sessionStorage.getItem("UserRole") == '1'){

        return (
            <>
                <MyNavBar/>
            <table class = "imageTable" style ={{position : 'center', marginTop :'2.5cm'}}>
            <tr>
                
            <th><div><center>
            <Link to="orderdet"><img className = 'img1' src= {Img1}alt="order"/>
            </Link>
              <div class = "admintext">Online Order Management</div></center></div></th>


              <th><div><center><Link to ="EmpList"><img className = 'img1' src= {Img2}alt="employee"/></Link>
              <div class = "admintext">Employee Management</div></center></div></th>

             

              <th><div><center><Link to="FoodItemList"><img className = 'img1' src= {Img3}alt="menu"/></Link>
              <div class = "admintext">Menu Update & Organization</div></center></div></th>

               <th><div><center><Link to="add"><img className = 'img1' src= {Img4}alt="resturent"/></Link>
               <div class = "admintext">Resturent Management</div></center></div></th>
            </tr>
            
            <tr>
              <th><div><center>
              <Link to="inventoryapp">
                  <img className = 'img1'src= {Img5}alt="inventory"/></Link>
              <div class = "admintext">Inventory Management</div></center></div></th>
              <th><div><center><Link to="utilityList"><img className = 'img1' src= {Img6}alt="utility"/></Link>
                  <div class = "admintext">Profit & Utility Management</div></center></div></th>
              <th><div><center><img className = 'img1' src= {Img7}alt="delivery"/>
              <div class = "admintext">Delivery & Transport Management</div></center></div></th>
               <th><div><center><Link to="viewpromotions"><img className = 'img1' src= {Img8}alt="loyality"/></Link>
               <div class = "admintext">Customer Profile Management & Loyality Management</div></center></div></th>
               
            </tr>
            </table>
            </>        
        );
        }
}
}
export default AdminHomebody;
