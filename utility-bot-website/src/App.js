import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Faq from "./Components/Faq";
import Commands from "./Components/Commands";
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
