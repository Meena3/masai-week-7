import React from 'react';
import styles from './app.module.css';

export default function Body3(){
    return(
        <div>
            <div className = {styles.flexbodyplain}></div>
            <div className = {styles.flexbody}>
                <div>
                    <h3 style = {{color:"blue", marginTop:"100px"}}>Barrier Free</h3>
                    <ul className = {styles.ul}>
                        <li>Trade Across 5 AUD-Crypto Pairs</li>
                        <li>Zero Deposit Fees (FIAT & Crypto)</li>
                        <li>Zero Withdrawal Fees (FIAT)</li>
                    </ul>
                </div>
                <div>
                    <img src ="/app-trade.png"/>
                </div>
            </div>
            <div className = {styles.flexbodyplain}></div>
            <div className = {styles.flexbody}>
                <div>
                    <img src ="/build-men-new.png"/>
                </div>
                <div className = {styles.set}>
                    <h3 style = {{color:"blue", marginTop:"100px"}}>Stress Free</h3>
                    <ul className = {styles.ul}>
                        <li>Multi-Sig & Multi-Geo Authentication for Cold Wallets</li>
                        <li>Proprietary Multi-Layered Security Protocols</li>
                        <li>Stringent Compliance & Regulations</li>
                    </ul>
                    <p style = {{color:"blue"}}>More</p>
                </div>
            </div>
        </div>
    )
}