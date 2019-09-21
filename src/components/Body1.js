import React from 'react';
import styles from './app.module.css';
import { placeholder } from '@babel/types';

export default function Body1(){
    return(
        <div>
            <div className = {styles.flexbodyplain}></div>
            <div className ={styles.flexbody} >
                <div>
                    <h1 style = {{color:"blue",fontsize:"200px", marginTop:"100px"}}>Setting Free <br/>Crypto</h1>
                    <p>As the torch bearers of<br/>
                    liberating crypto from all shackles,<br/>
                    Zebpay invites crypto enthusiasts to<br/>
                    buy/sell crypto instantly & securely.</p>
                    <input type = "tel" placeholder ="Enter Number"></input>
                    {/* <label for ="phone number">phone number</label>
                    <placeholder>Enter Number</placeholder> */}
                    <button>Sign In</button>
                </div>
                <div><img src = "/au-down-banner.png"/></div>
            </div>
            <div className = {styles.flexbodyplain}></div>
            <div className = {styles.rocketbox}>
                <div>
                    <img src = "./home-instant-banner.png"/>
                </div>
                <div>
                    <p>Now, Buy / Sell Bitcoin, Ether, Bitcoin Cash, Ripple & <br/>Litecoin instantly</p>
                </div>
                <div>
                <button>Buy Crypto Instantly</button>
                </div>
            </div>
            
        </div>
    )
}