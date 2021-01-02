import { Link } from "../../node_modules/react-router-dom";
import { useState } from "../../node_modules/react";

const styles = {
  color: "white",
};

const Navbar = () => {
  const [displayMobileNavbar, toggleMobileNavbar] = useState("none");
  return (
    <nav>
      <div className="nav">
        <img className="logo" src="assets/logo.png" alt=""></img>
        <ul className="nav-items">
          <Link style={styles} to="/home">
            <li>Home</li>
          </Link>
          <Link style={styles} to="/about">
            <li>About</li>
          </Link>
          <Link style={styles} to="/commands">
            <li>Commands</li>
          </Link>
          <Link style={styles} to="/faq">
            <li>FAQ</li>
          </Link>
        </ul>
        <div onClick={changeNavbar} className="burguer-toggle">
          <div className="burguer line-1"></div>
          <div className="burguer line-2"></div>
          <div className="burguer line-3"></div>
        </div>
      </div>
      <div style={{ display: displayMobileNavbar }} className="mobile-navbar">
        <ul className="mobile-nav-links">
          <Link style={styles} to="/home">
            <li>Home</li>
          </Link>
          <Link style={styles} to="/about">
            <li>About</li>
          </Link>
          <Link style={styles} to="/commands">
            <li>Commands</li>
          </Link>
          <Link style={styles} to="/faq">
            <li>FAQ</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
  function changeNavbar() {
    toggleMobileNavbar(displayMobileNavbar === "none" ? "block" : "none");
  }
};

export default Navbar;
