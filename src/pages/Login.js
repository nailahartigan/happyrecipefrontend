import React from 'react'
import '../styles/Login.css'
import loginPlate from "../pictures/food.png"

function Login() {
    return (
        <div className="loginWrapper">
            <div className="leftSide">
                <img className="loginPlate" src = {loginPlate} alt="loginPlate"/>
            </div>
            <div className="rightSide">
                <div className="loginBox">
                    <div className="loginForm">
                        <input className="Email" type="text" placeholder="Email"/>
                        <input className="Password" type="text" placeholder="Password"/>
                        <button type="submit" className="loginBTN">Log in</button>
                    </div>
                    <p className="or">or</p>
                    <div className="signUp">
                        <button type="submit" className="signupBTN">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login