import { Link } from "react-router-dom";
// import logo from ;

const styles = {
  color: "white",
};

const Navbar = () => {
  return (
    <nav className="nav">
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
      </ul>
    </nav>
  );
};

export default Navbar;
