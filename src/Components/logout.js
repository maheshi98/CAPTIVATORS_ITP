import React, { Component ,useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import MyNavBar from './MyNavBar';
import Home from './Home'

const { RiFileFill } = require("react-icons/ri");

function Logout(props) {
   window.sessionStorage.removeItem("UserRole") 

    return (
        <>
    <Home></Home>
        
        </>
    )
}
export default Logout;