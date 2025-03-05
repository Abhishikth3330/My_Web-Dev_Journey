import React from "react";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Services from "../services/Services";

const Pages = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Pages;
