import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Commands from "./Components/Commands";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/commands" component={Commands} />
          {/* redirects any path to home */}
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
