import React from 'react'
import {Card , Table , Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
class Sidebar extends React.Component{

    render(){
        return(
            <div className="App">
            <div className="wrapper d-flex align-items-stretch">
    
                <nav id="sidebar" className="active">
                    <div className="custom-menu">
                        <button type="button" id="sidebarCollapse" className="btn btn-primary">
                            <i className="fa fa-bars"></i>
                            <span className="sr-only">Toggle Menu</span>
                        </button>
                    </div>
                    <div className="p-4">
                        <h1><a href="index.html" className="logo">E-Shop</a></h1>
                        <ul className="list-unstyled components mb-5">
                            <li className="active">
                                <Link to={'/Home'}><span className="fa fa-home mr-3"></span> Home</Link>
                            </li>
                            <li>
                                <Link to={'/About'}><span className="fa fa-user mr-3"></span> About</Link>
                            </li>
                            <li>
                                <Link to={'/UserProfile'}><span className="fa fa-briefcase mr-3"></span> Portfolio</Link>
                            </li>
                            <li>
                                <Link to={'WishList'}><span className="fa fa-sticky-note mr-3"></span> WishList</Link>
                            </li>
                            <li>
                                <Link to="#"><span className="fa fa-paper-plane mr-3"></span> Contact</Link>
                            </li>
                            <li>
                                <Link to={'/Loging'}><span className="fa fa-cogs mr-3"></span>Admin</Link>
                            </li>
                            <li>
                                <Link to={'/Loging'}><span className="fa fa-product-hunt mr-3"></span> Product Management</Link>
                            </li>
    
                        </ul>
    
                        <div className="mb-5">
                            <h3 className="h6 mb-3">Subscribe for newsletter</h3>
                            <form action="#" className="subscribe-form">
                                <div className="form-group d-flex">
                                    <div className="icon"><span className="icon-paper-plane"></span></div>
                                    <input type="text" className="form-control" placeholder="Enter Email Address" />
                                </div>
                            </form>
                        </div>
    
                        <div className="footer">
                            <p>
                                Copyright &copy;
                                <script>document.write(new Date().getFullYear());</script>
                                All rights reserved | Made <i className="icon-heart" aria-hidden="true"></i> by <a href="https://teamBravo.com" target="_blank">Team Bravo</a>
                            </p>
                        </div>
    
                    </div>
                </nav>
                </div>
                </div>
        )
        
    }
}

export default Sidebar;