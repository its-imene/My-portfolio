import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      
      <ul className="nav-links">
      <li><a href="#home">Home</a></li>
        { /* <li><Link to="/about">About</Link></li>*/}
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
