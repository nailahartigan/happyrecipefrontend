import './App.css';
import GuestRecipePost from './components/recipePost/GuestRecipePost.jsx';
import AboutUs from './pages/aboutUs';
import Signup from './pages/Signup/Signup';

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
      </Switch>
    </Router>
  );
}

export default App;
