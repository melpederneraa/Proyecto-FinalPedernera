import { Link } from "react-router-dom";
import CartWidget from "../cartWidget/CartWidget";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="navbar-logo">
      <img src={logo} alt="Quinino logo" />
    </Link>
    <ul className="navbar-links">
      <li><Link to="/categoria/sanguche">Sanguche</Link></li>
      <li><Link to="/categoria/pizza">Pizza</Link></li>
      <li><Link to="/categoria/empanada">Empanada</Link></li>
      <li><Link to="/categoria/postre">Postre</Link></li>
      <li><Link to="/categoria/bebida">Bebida</Link></li>
      <li><CartWidget /></li>
    </ul>
  </nav>
);

export default Navbar;
