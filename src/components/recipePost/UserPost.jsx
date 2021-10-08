import '../../styles/userHomePage.css';
import React from 'react';
import Navbar from '../navbar/Homepage';
import americanpic from "../../pictures/american.PNG"

function UserPost() {
    
    return (
        <div>
            <Navbar/>
       
    <div className="post">
            <div className="cuisine1">
        <img className="american" src = {americanpic} alt="American"/>
        <div className="AMERICAN">AMERICAN</div>
        <img className="asian" src = "/asian.PNG" alt="Asian"/>
        <div className="ASIAN">ASIAN</div>
        <img className="barbeque" src = "/barbeque.PNG" alt="Barbeque"/>
        <div className="BARBEQUE">BARBEQUE</div>
        <img className="german" src = "/german.PNG" alt="German"/>
        <div className="GERMAN">GERMAN</div>
            </div>
    </div>
    </div>
    )
}

export default Userpost