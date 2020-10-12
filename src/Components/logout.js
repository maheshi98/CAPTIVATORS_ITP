import React, { Component } from 'react';

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