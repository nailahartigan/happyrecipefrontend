import './App.css';
import GuestRecipePost from './components/recipePost/GuestRecipePost';
import AboutUs from './pages/aboutUs';
import Test from './pages/Test';


function App() {
  return (
    <div>
      <AboutUs></AboutUs>
      <Test></Test>
      <GuestRecipePost/>
    </div>
  );
}

export default App;
