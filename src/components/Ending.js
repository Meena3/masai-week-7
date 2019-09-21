import React from 'react';
import styles from './app.module.css';

export default function End(){
    return(
        <div  className = {styles.bottombox}>
            <div className = {styles.ending}>
                <div><img src = "/foot-logo.png"/>
                <p>@2019 Zebpay</p>
                <h5>Support</h5>
                <p>Help Zebpay.com</p>
                <h5>Media & press</h5>
                <p>Media & Enquires</p>
                </div>
                <div>
                    Products
                    <p>Pro</p>
                    <p>Exchange</p>
                    <p>Build</p>
                </div>
                <div>
                    Why Zebpay
                    <p>Features</p>
                    <p>Security</p>
                    <p>Fees</p>
                    <p>Instant Buy/Sell</p>
                    <p>Lightning</p>
                </div>
                <div>
                    Cryptos
                    <p>Buy Crypto</p>
                    <p>Bitcoin</p>
                    <p>Lifecoin</p>
                    <p>Bitcoin Cash</p>
                    <p>Ether</p>
                    <p>XRP</p>
                    <p>EOS</p>
                </div>
                <div>
                    Company
                    <p>About Us</p>
                    <p>Legal&Privacy</p>
                    <p>Terms of Use</p>
                    <p>Stay Safe</p>
                    <p>Bug Bounty Program</p>
                    <p>Supported Countries</p>
                    <p>Mining Schemes</p>
                    <p>Retail Market Maker</p>
                </div>
                
            </div>
        
            <div>
                <button>GO</button>
            </div>
        </div>
    )
}