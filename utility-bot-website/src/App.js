import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Faq from "./components/Faq";
import Commands from "./components/Commands";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/commands" component={Commands} />
            <Route path="/faq" component={Faq} />
            {/* redirects any path to home */}
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;