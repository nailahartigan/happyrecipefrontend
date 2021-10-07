import '../../styles/GuestHomePage.css';
import React from 'react';
import Navbar from '../navbar/Index';
import americanpic from "../../pictures/american.PNG";
import asianpic from "../../pictures/asian.PNG";
import barbequepic from "../../pictures/barbeque.PNG";
import germanpic from "../../pictures/german.PNG";
import britishpic from "../../pictures/british.PNG";
import chinesepic from "../../pictures/chinese.PNG";
import indianpic from "../../pictures/indian.PNG";
import spanishpic from "../../pictures/spanish.PNG";
import italianpic from "../../pictures/italian.PNG";
import mexican_twopic from "../../pictures/mexican_two.PNG";
import morrocanpic from "../../pictures/morrocan.PNG";
import thaipic from "../../pictures/thai.PNG";


function GuestRecipePost() {
    
    return (
        <div>
            <Navbar/>
       
        <div className="post">
        <div className="cuisine1">
          <img className="american" src = {americanpic} alt="American"/>
            <div className="AMERICAN">AMERICAN</div>
          <img className="asian" src = {asianpic} alt="Asian"/>
            <div className="ASIAN">ASIAN</div>
          <img className="barbeque" src = {barbequepic} alt="Barbeque"/>
            <div className="BARBEQUE">BARBEQUE</div>
          <img className="german" src = {germanpic} alt="German"/>
            <div className="GERMAN">GERMAN</div>
        </div>

        <div class="cuisine2">
          <img class="british" src = {britishpic} alt="British"/>
            <div class="BRITISH">BRITISH</div>
          <img class="chinese" src = {chinesepic} alt="Chinese"/>
            <div class="CHINESE">CHINESE</div>
          <img class="indian" src = {indianpic} alt="indian"/>
            <div class="INDIAN">INDIAN</div>
          <img class="spanish" src = {spanishpic} alt="Spanish"/>
            <div class="SPANISH">SPANISH</div>
       </div>
    

       <div class="cuisine3">
          <img class="italian" src = {italianpic} alt="Italian"/>
            <div class="ITALIAN">ITALIAN</div>
          <img class="mexican" src = {mexican_twopic} alt="Mexican"/>
            <div class="MEXICAN">MEXICAN</div>
          <img class="morrocan" src = {morrocanpic} alt="Morrocan"/>
            <div class="MORROCAN">MORROCAN</div>
          <img class="thai" src = {thaipic} alt="Thai"/>
           <div class="THAI">THAI</div>
       </div>
        
    </div>
    </div>
    )
}

export default GuestRecipePost
