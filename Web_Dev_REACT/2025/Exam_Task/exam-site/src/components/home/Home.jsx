import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css"; // Import custom styles

import img1 from "../images/ai.jpg";
import img2 from "../images/dsa.jpg";
import img3 from "../images/gh.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="row align-items-center">
        {/* Left Side - Fixed Size Carousel */}
        <div className="col-md-6">
          <div className="carousel-container">
            <Carousel fade interval={4000}>
              <Carousel.Item>
                <div className="carousel-img-wrapper">
                  <img className="carousel-img" src={img1} alt="Slide 1" />
                </div>
                <Carousel.Caption>
                  <h3>Welcome to Our Platform</h3>
                  <p>Join us today and explore amazing features.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <div className="carousel-img-wrapper">
                  <img className="carousel-img" src={img2} alt="Slide 2" />
                </div>
                <Carousel.Caption>
                  <h3>Secure & Reliable</h3>
                  <p>Your data is always safe with us.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <div className="carousel-img-wrapper">
                  <img className="carousel-img" src={img3} alt="Slide 3" />
                </div>
                <Carousel.Caption>
                  <h3>Get Started Now</h3>
                  <p>Sign up and be a part of our community.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        {/* Right Side - Placeholder for Login/Signup Section */}
        <div className="col-md-6">
          <h2 className="signup-placeholder">Login/Signup Section (Coming Next)</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
