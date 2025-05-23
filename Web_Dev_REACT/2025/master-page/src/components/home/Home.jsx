import React from "react";
import heroImage from "../images/hero-img.png";

const Home = () => {
  return (
    <section id="hero" className="hero section light-background" style={{background: "lightgoldenrodyellow"}}>
      <div className="container">
        <div className="row gy-4 justify-content-center justify-content-lg-between">
          <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">
              Enjoy Your Healthy<br />Delicious Food
            </h1>
            <p data-aos="fade-up" data-aos-delay="100">
              Enjoy your Meal. Order from Mealzz
            </p>
            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
              <a href="#" className="btn-get-started">Book a Table</a>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
            <img src={heroImage} className="img-fluid animated" alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
