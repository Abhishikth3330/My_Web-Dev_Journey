import React from 'react'

function Navbar() {
    return (
        <header id="header" className="header d-flex align-items-center sticky-top">
            <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

                <a href="#hero" className="logo d-flex align-items-center me-auto me-xl-0">
                {/* <img src="assets/img/logo.webp" alt="" /> */}
                <h1 className="sitename">Abhiii</h1>
                </a>

                <nav id="navmenu" className="navmenu">
                <ul>
                    <li><a href="/" className="active">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#services">Services</a></li>

                    <li><a href="#contact">Contact</a></li>
                </ul>
                <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

                <div className="header-social-links">
                    <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>

            </div>
        </header>
    )
}

export default Navbar