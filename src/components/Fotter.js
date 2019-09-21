import React from 'react';
import styles from './app.module.css';

export default function Fotter(){
    return(
        <div>
            <div className = {styles.flexbodyplain}></div>
            <h1 style ={{color:"blue",textAlign:"center"}}>Like Pro</h1>
            <h2 style = {{color:"gray", textAlign:"center"}}>Trade like you do.Trade like a pro Go To Pro </h2>
            <div>
                <img src = "/pro.png" style = {{marginLeft : "30px"}}/> 
            </div>
            <div className = {styles.bottombox}>
                <h1 className ={styles.bottomnews}>Zebpay In News </h1>
                <div className = {styles.flexbottom}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div><img src = "/forbes.png"/></div>
                    <div><img src = "/enterpreneur.png"/></div>
                    <div><img src = "/bitcoin-manager.png"/></div>
                    <div><img src = "/tnw.png"/></div>
                </div>
                <div className = {styles.flexbottom}>
                    <div></div>
                    <div></div>
                    <div><img src = "/logo-6.png"/></div>
                    <div><img src = "/quartz.png"/></div>
                    <div><img src = "/logo-8.png"/></div>
                    <div><img src = "/bitcoin-news.png"/></div>
                </div>
    
                <div className = {styles.flexbottom}>
                    <div></div>
                    <div></div>
                    <div style = {{fontSize:"80px", color:"white"}}>2B+</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div style = {{fontSize:"80px", color:"white"}}>4.1</div>
                    <div></div>
                    <div></div>
                    <div style = {{fontSize:"80px", color:"white"}}>3M+</div>
                </div>
                
                <h1 className ={styles.bottomnews}>Start Trading Now</h1>
                <div>
                <input type = "tel" placeholder = " +91 Enter Mobile Number"></input>
                <button>Sign Up</button>
                </div>
            </div>
        </div>
    )
}