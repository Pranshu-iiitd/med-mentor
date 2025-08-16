import React from "react";
import { Link } from "react-router-dom";  
import "../styles/Navbar.css";
import logo from "../assets/logo.png"; // <-- your logo file

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Logo (clickable too) */}
      <h1 className="navbar-logo">
        <Link to="/" className="navbar-home-link">
          <img src={logo} alt="Med Mentor Logo" className="navbar-logo-img" />
          MED MENTOR
        </Link>
      </h1>

      {/* Center Links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/consultation">Consultation</Link></li>
        <li><Link to="/med-map">Med Map</Link></li>
        <li><Link to="/med-community">Med Community</Link></li>
        <li><Link to="/medibot">MediBot</Link></li>
        <li><Link to="/medivault">MediVault</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
      </ul>

      {/* Right Profile */}
      <Link to="/profile">
        <button className="profile-btn">Profile</button>
      </Link>
    </nav>
  );
};

export default Navbar;
