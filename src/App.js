
import React from "react";


import './App.css';
import GuestRecipePost from './components/recipePost/GuestRecipePost.jsx';
import AboutUs from './pages/aboutUs';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login';
import UserHP from './pages/userHomePage';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <Router>
      <Switch>
        <Route path ="/Aboutus">
          <AboutUs/>
        </Route>
        <Route path = "/Signup">
          <Signup/>
        </Route>
        <Route path ="/Guest">
         <GuestRecipePost/>
        </Route>
        <Route path ="/login">
         <Login/>
        </Route>
        <Route path ="/UserHP">
         <UserHP/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
