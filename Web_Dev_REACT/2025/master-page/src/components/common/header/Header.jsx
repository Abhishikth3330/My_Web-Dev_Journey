import React from "react";
import { Link } from "react-router-dom";
import "./header.css"; // Ensure this CSS file is correctly linked

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        
        {/* Logo Section */}
        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">Yummy</h1>
          <span>.</span>
        </Link>

        {/* Navigation Menu */}
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/chefs">Chefs</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>

            {/* Dropdown Menu */}
            <li className="dropdown">
              <a href="#">
                <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li><a href="#">Dropdown 1</a></li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
              </ul>
            </li>

            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        {/* CTA Button */}
        <Link className="btn-getstarted" to="/book-a-table">Book a Table</Link>
      </div>
    </header>
  );
};

export default Header;
