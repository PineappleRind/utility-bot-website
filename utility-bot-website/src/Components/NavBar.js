import { Link } from "react-router-dom";
import logo from "../logo.png";

const styles = {
  color: "white",
};

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav-items">
        <li>
          <img className="logo" src={logo} alt=""></img>
        </li>
        <Link style={styles} to="/home">
          <li>Home</li>
        </Link>
        <Link style={styles} to="/about">
          <li>About</li>
        </Link>
        <Link style={styles} to="/commands">
          <li>Commands</li>
        </Link>
      </ul>
    </nav>
  );
  function getStyles() {}
};

export default Navbar;
