import React from 'react';
//import './App.css';
import styles from './app.module.css';

export default function Header(){
    return(
        <div className ={styles.topnav}>
            {/* <h1>ZEBPAY</h1> */}
           <img src= "/zebpay.png" height="80%" width="20%"/>
           <a href ="#">Sign Up</a>
           <a class="active" href="#home">About Us</a>
           <a href="#news">Sign In</a>
           <a href="#contact">Contact</a>
           <a href="#about">Products</a>
           {/* <img src="/zebpay1.jpg" height ="50px" width = "100px" backgroundcolor ="gray"/> */}
           <img src = "/candy-apple-blue-2.png" height = "50px" width = "100px"></img>
        </div>
    )  
}