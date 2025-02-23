import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";

const Pages = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<h2>Services Page Coming Soon...</h2>} />
          <Route path="/blog" element={<h2>Blog Page Coming Soon...</h2>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default Pages;
