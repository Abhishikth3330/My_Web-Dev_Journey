import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Abhi</h1>
      <nav className="header-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
