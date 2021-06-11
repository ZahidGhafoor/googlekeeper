import React from 'react';
import logo from './Images/logo.png';


const Header = () => {
    return(
        <>
     <div className = "header">
         <img className="title_img" src ={logo}alt = "logo" />
        <h1 className="title"> Zahid's Keep</h1>      

     </div>
        </>
    );
};
export default Header; 