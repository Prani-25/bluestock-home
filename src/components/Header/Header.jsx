import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi"; // <-- Install this via npm if needed
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Bluestock Logo" />
        BLUESTOCK
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#">IPO</a>
        <a href="#">Community</a>
        <a href="#">Products</a>
        <a href="#">Brokers</a>
        <a href="#">Live News</a>
      </nav>

      <div className="auth-buttons">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up Now</button>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      
    </header>
  );
};

export default Header;
