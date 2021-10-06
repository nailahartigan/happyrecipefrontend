import React from 'react';
import Navbar from '../navbar/Index';
import '../../styles/GuestHomePage.css';

function GuestRecipePost() {
    
    return (
        <div>
            <Navbar/>
       
    <div className="post">
            <div className="cuisine1">
        <img className="american" src = "/american.PNG" alt="American"/>
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

export default GuestRecipePost
