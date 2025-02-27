import React from "react";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import Menu from "../menu/Menu";
// import "./pages.css";



const Pages = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<h2>Services Page Coming Soon...</h2>} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Pages;
