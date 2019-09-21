import React from 'react';
import styles from './app.module.css';
export default function Body2(){
    return(
        <div>
            <div className = {styles.flexbodyplain}></div>
            <div className = {styles.flexbody}>
                <div></div>
                <div></div>
                <div><img src = "/app-image-new.png"  height = "500px" width = "300px"/></div>
                <div>
                    <h1 style = {{color:"blue" , marginTop:"100px"}}>Clutter Free</h1>
                    <ul className = {styles.ul}>
                        <li>Refreshing New Look</li>
                        <li>Clean. Intuitive. Simple</li>
                        <li>Advanced Trading Features</li>
                    </ul>
                </div>
            </div>
        </div>
    )

    
}