import "./App.css";
import Footer from "./Components/Footer"
import Home from "./Home";
import About from "./About";
import NavBar from "./Components/NavBar";
import Faq from "./Faq";
import Commands from "./Components/Commands";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ overflow: "hidden", position:"relative", minHeight:"100vh"}}>
      <Router>
          <NavBar />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/commands" component={Commands} />
            <Route path="/faq" component={Faq} />
            {/* redirects any path to home */}
            <Route component={Home} />
          </Switch>
      </Router>
      <Footer className="footer-container">hello this is a footer</Footer>
    </div>
    
  );
}

export default App;
