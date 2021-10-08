import React from 'react';
import Navbar from '../components/navbar/Homepage';
import UserHomePage from '../components/homePage/UserHomePage';

function UserHomePage() {
    return (
        <div>
            <Navbar/>
            <UserHomePage/>
        </div>
    )
}

export default UserHomePage;