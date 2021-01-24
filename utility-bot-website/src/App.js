import "./App.css";
import Footer from "./components/Footer"
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Faq from "./components/Faq";
import Commands from "./components/Commands";
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
          <Footer className="footer-container">hello this is a footer</Footer>
      </Router>
    </div>
  );
}

export default App;
