// import React, {useEffect, useState} from 'react';
// import Container from 'react-bootstrap/Container';
// import InventoryHome from './component/InventoryHome';
// import SupplierView from './component/SupplierView';
// import SupplierEdit from './component/SupplierEdit';
// import SupplierAdd from './component/SupplierAdd';
// import ProductView from './component/ProductView';
// import ProductEdit from './component/ProductEdit';
// import ProductAdd from './component/ProductAdd';
// import API from './api';

// const App = (props) => {
//     const [content, setContent] = useState('inventory-home');
//     const [suppliers, setSuppliers] = useState([]);
//     const [products, setProducts] = useState([]);
//     const [suppliersChanged, setSuppliersChanged] = useState(false);
//     const [productsChanged, setProductsChanged] = useState(false);
//     const [editingSupplier, setEditingSupplier] = useState(null);
//     const [editingProduct, setEditingProduct] = useState(null);
//     const [previousContentSupplierAdd, setPreviousContentSupplierAdd] = useState('inventory-home');
//     const [previousContentProductAdd, setPreviousContentProductAdd] = useState('inventory-home');
//     const [totalStockLevel, setTotalStockLevel] = useState(0);

//     // Fetch supplier data
//     useEffect(() => {
//         API.get("/supplier").then(res => {
//             setSuppliers(res.data);
//             setSuppliersChanged(false);
//         }).catch(err => {
//             if (err.response) {
//                 console.log('Internal Server Error');
//                 alert('No supplier data have been fetched due to an internal server error!')
//             } else if (err.request) {
//                 console.log('Network error or server is not responding');
//                 alert('Cannot fetch supplier data due to a network error or the service is unavailable!')
//             }
//         });
//     }, [suppliersChanged]);

//     // Fetch product data
//     useEffect(() => {
//         API.get("/product")
//             .then(res => {
//                 setProducts(res.data);
//                 setProductsChanged(false);
//             })
//             .catch(err => {
//                 if (err.response) {
//                     console.log('Internal Server Error');
//                     alert('No product data have been fetched due to an internal server error!')
//                 } else if (err.request) {
//                     console.log('Network error or server is not responding');
//                     alert('Cannot fetch product data due to a network error or the service is unavailable!')
//                 }
//             });
//     }, [productsChanged]);

//     // Fetch total stock level
//     useEffect(() => {
//         API.get("/stock-level").then(res => {
//             setTotalStockLevel(res.data.value);
//         }).catch(err => {
//             if (err.response) {
//                 console.log('Internal Server Error');
//                 alert('Cannot fetch stock level due to an internal server error!')
//             } else if (err.request) {
//                 console.log('Network error or server is not responding');
//                 alert('Cannot fetch stock level due to a network error or the service is unavailable!')
//             }
//         });
//     }, [productsChanged]);

//     const handleContentChange = content => {
//         if (content === 'supplier-view') {
//             suppliers.length > 0 ? setContent(content) : alert('No suppliers have been fetched to show!');
//         } else if (content === 'product-view') {
//             products.length > 0 ? setContent(content) : alert('No products have been fetched to show!');
//         } else if (content === 'product-add') {
//             suppliers.length > 0 ? setContent(content) : alert('No suppliers have been found. Please add suppliers first to proceed with products.');
//         } else {
//             setContent(content);
//         }

//     };

//     const handleSupplierEditing = id => {
//         const supplier = suppliers.find(supplier => supplier.id === id);
//         setEditingSupplier(supplier);
//         setContent('supplier-edit');
//     };

//     const handleProductEditing = id => {
//         const product = products.find(product => product.id === id);
//         setEditingProduct(product);
//         setContent('product-edit');
//     };

//     const handleSupplierEdited = () => {
//         setSuppliersChanged(true);
//     };

//     const handleProductEdited = () => {
//         setProductsChanged(true);
//     };

//     const setPreviousContentForSupplierAdd = (content) => {
//         setPreviousContentSupplierAdd(content);
//     };

//     const setPreviousContentForProductAdd = (content) => {
//         setPreviousContentProductAdd(content);
//     };

//     return (
//         <Container>
//             {content === 'inventory-home' && (<InventoryHome onContentChange={handleContentChange}
//                                                              setPreviousContentForSupplierAdd={setPreviousContentForSupplierAdd}
//                                                              setPreviousContentForProductAdd={setPreviousContentForProductAdd}/>)}
//             {content === 'supplier-view' && (
//                 <SupplierView onContentChange={handleContentChange} suppliers={suppliers}
//                               onEditClick={handleSupplierEditing}
//                               onDelete={handleSupplierEdited}
//                               setPreviousContentForSupplierAdd={setPreviousContentForSupplierAdd}/>)}
//             {content === 'supplier-edit' && (
//                 <SupplierEdit supplier={editingSupplier} onContentChange={handleContentChange}
//                               onUpdate={handleSupplierEdited}/>)}
//             {content === 'supplier-add' && (
//                 <SupplierAdd previousContent={previousContentSupplierAdd} onContentChange={handleContentChange}
//                              onAdd={handleSupplierEdited}/>)}
//             {content === 'product-view' && (<ProductView onContentChange={handleContentChange}
//                                                          setPreviousContentForProductAdd={setPreviousContentForProductAdd}
//                                                          products={products}
//                                                          onEditClick={handleProductEditing}
//                                                          totalStockLevel={totalStockLevel}
//                                                          onDelete={handleProductEdited}/>)}
//             {content === 'product-edit' && (<ProductEdit product={editingProduct} onContentChange={handleContentChange}
//                                                          onUpdate={handleProductEdited} suppliers={suppliers}
//                                                          totalStockLevel={totalStockLevel}/>)}
//             {content === 'product-add' && (
//                 <ProductAdd previousContent={previousContentProductAdd} onContentChange={handleContentChange}
//                             onAdd={handleProductEdited} suppliers={suppliers} totalStockLevel={totalStockLevel}/>)}
//         </Container>);
// }

// export default App;

// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import './App.css'
// import AddPayment from './Components/Cashier/cashierinterface';
// import Register from './Components/Checkout/usercheckout';
// import FormsPage from './Components/Checkout/bv';
// import Details from './Components/Checkout/checkoutlist';
// import Successful from './Components/Checkout/successful';
// import Navigationbar from './Components/Header';
// import Footer from './Components/Footer';
// import Receipt from './Components/Cashier/receipt';
// import Update from './Components/Checkout/updatecheckout';
// import Routes from './Routes';


// function App() {
//   return (
//  /*  <div>
//         <Router>
//              <Navigationbar/>
//                <Switch>

//                   <Route path ="/register" exact component ={Register}/>   
//                   <Route path ="/add" component = {AddPayment}/>    
//                   <Route path ="/new" component = {FormsPage}/>
//                   <Route path ="/details" component={Details}/>
//                   <Route path ="/Successful/:id" component={Successful}/>
//                   <Route path ="/receipt" component={Receipt}/>
//                   <Route path ="/update/:id" component={Update}/>
//                </Switch>
//               <Footer/>
//         </Router>
//    </div>*/
//    <div>

//    </div>
//   );
// }






 import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import UpdatePromotionsComponent from '../src/Components/UpdatePromotions';
import RegisterUserComponent from '../src/Components/RegisterUser';
import UpdateProfileComponent from '../src/Components/UpdateProfile';
import UserLoginComponent from '../src/Components/UserLogin';
import CustomerProfileComponent from '../src/Components/CustomerProfile';
import AddPromotionsComponent from '../src/Components/AddPromotions';
import ListPromotionsComponent from '../src/Components/ListPromotions';
import AdminHomeBody from './Components/AdminHomeBody';
import FoodItemList from './Components/FoodItemList';
import AddFoodItem from './Components/AddFoodItem';
import UpdateFoodItem from './Components/UpdateFoodItem';
import Body from './Components/Body';
import {Container , Row} from 'react-bootstrap';
import MyNavBar from './Components/MyNavBar'
import About from './Components/About'
import './App.css';
import Shoppingcart from './Components/Shoppingcart';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Order from './Components/Order';
import Orderdet from './Components/Orderdet';
import Menu from './Components/Menu';
import { Components } from 'antd/lib/date-picker/generatePicker';
import Feedbacklist from './Components/FeedbackList';

 import AddUtility from './Components/AddUtility';
 import UtilityCost from './Components/UtilityCost';
 import UtilityYear from './Components/UtilityYear';
 import UtilityMonth from './Components/UtilityMonth';
 import ProfitMonth from './Components/ProfitMonth';
 import ProfitYear from './Components/ProfitYear';
 import ChartOfUtilityMonth from './Components/ChartOfUtilityMonth';
 import ChartOfUtilityYear from './Components/ChartOfUtilityYear';
 import ChartOfProfitMonth from './Components/ChartOfProfitMonth';
 import ChartOfProfitYear from './Components/ChartOfProfitYear';
 import UtilityList from './Components/UtilityList';
 import CostList from './Components/CostList';
 import ViewUtility from './Components/ViewUtility';
 import ViewCost from './Components/ViewCost';

//  import './App.css'
// import AddPayment from './Components/Cashier/cashierinterface';
// import Register from './Components/Checkout/usercheckout';
// //import FormsPage from './Components/Checkout/bv';
// import Details from './Components/Checkout/checkoutlist';
// import Successful from './Components/Checkout/successful';
// import Receipt from './Components/Cashier/receipt';
// import Update from './Components/Checkout/updatecheckout';
import Routes from './Routes';


class App extends Component{
  render(){
    return(
      <Router> 
      <MyNavBar/>
     
      <hr/>
      <Container>
        <Row>
          <Switch>
            <Route path = "/about" exact component = {About}/>
            <Route path = "/shop" exact component = {Shoppingcart}/>
            <Route path = "/" exact component = {Home}/>
            <Route path = "/checkout" exact component = {Checkout}/>
            <Route path = "/orderlist" exact component = {Order}/>
            <Route path = "/orderdet" exact component = {Orderdet}/>
            <Route path = "/my" exact component = {Menu}/>
            <Route path = "/admin" exact component = {AdminHomeBody}/>
            <Route path="/FoodItemList"exact component = {FoodItemList}/> 
            <Route path="/add-Menu-Details"exact component = {AddFoodItem}/>
            <Route path="/UpdateFoodItem/:id"exact component = {UpdateFoodItem}/> 
            <Route path="/body"exact component = {Body}/>
            <Route path="/feedback"exact component = {Feedbacklist}/>
            
            {/* <Route path="/UserLogin" component={UserLoginComponent}/>
            <Route path="/registeruser" component={RegisterUserComponent}/> */}



              <Route path="/registeruser" component={RegisterUserComponent}/>
           <Route path="/updatepromotions/:id" component={UpdatePromotionsComponent}/>
           <Route path="/updateprofile" component={UpdateProfileComponent}/>
           <Route path="/UserLogin" component={UserLoginComponent}/>
           <Route path="/CustomerProfile" component={CustomerProfileComponent}/>
           <Route path="/addpromotion" component={AddPromotionsComponent}/>
           <Route path="/viewpromotions" component={ListPromotionsComponent}/>

           <Route path = "/utilityList" exact component={UtilityList} />
           <Route path = "/add/:ID" exact component={AddUtility} />
           <Route path = "/profitMonth" exact component={ProfitMonth} />
           <Route path = "/ChartOfProfitMonth" exact component={ChartOfProfitMonth} />
           <Route path = "/profitYear" exact component={ProfitYear} />
           <Route path = "/ChartOfProfitYear" exact component={ChartOfProfitYear} />
           <Route path = "/utilityMonth" exact component={UtilityMonth} />
           <Route path = "/ChartOfUtilityMonth" exact component={ChartOfUtilityMonth} />
           <Route path = "/utilityYear" exact component={UtilityYear} />
           <Route path = "/ChartOfUtilityYear" exact component={ChartOfUtilityYear} />
           <Route path = "/costList" exact component={CostList} /> 
           <Route path = "/add-cost/:idCost" exact component={UtilityCost} />
           <Route path = "/view-utility/:ID" exact component={ViewUtility} />
           <Route path = "/view-cost/:idCost" exact component={ViewCost} />
           <Routes/>
           {/* <Route path ="/register" exact component ={Register}/>   
           <Route path ="/add" component = {AddPayment}/>    
           <Route path ="/new" component = {FormsPage}/>
            <Route path ="/details" component={Details}/>
           <Route path ="/Successful/:id" component={Successful}/>
           <Route path ="/receipt" component={Receipt}/>
             <Route path ="/update/:id" component={Update}/> */}

        
          </Switch>
        </Row>
      </Container>
      <hr/>
      <Footer/>
     </Router>
    );
  }
}
export default App;

  
 


