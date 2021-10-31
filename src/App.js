import './App.css';
import Navmenu from "./components/Navmenu";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from "./webpages/Home";
import Shop from "./webpages/Shop";
import About from "./webpages/About";
import Contact from "./webpages/Contact";
import Footer from "./webpages/Footer";
function App() {
  return (
    <div className="App">
      <Router>
      <Navmenu />
      <Switch>
        <Route path="/" exact  component ={Home}/>
        <Route path="/shop" exact  component ={Shop}/>
        <Route path="/about" exact  component ={About}/>
        <Route path="/contact" exact  component ={Contact}/>
      </Switch>
      <Footer />
      </Router>
   
    </div>
  );
}

export default App;
