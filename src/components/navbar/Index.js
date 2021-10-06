import React from 'react'

function Navbar () {
    return (
        <div className="navbarWrapper">
            <ul className="menu">
                <li><a className="bar" href="Home">Home</a></li>
                <li><a className="bar" href="Recipe">Recipe</a></li>
                <li><a className="bar" href="About Us">About Us</a></li>
                <li><a className="bar" href="Login">Login</a></li>
            </ul>
        </div>

    )
}

export default Navbar