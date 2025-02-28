import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        {/* Logo Section */}
        <Link to="/" className="logo">
          <h1 className="sitename">Quizz</h1>
          {/* <span>.</span> */}
        </Link>

        {/* Hamburger Menu Button */}
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Navigation Menu */}
        <nav className={`navmenu ${isOpen ? "open" : ""}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
