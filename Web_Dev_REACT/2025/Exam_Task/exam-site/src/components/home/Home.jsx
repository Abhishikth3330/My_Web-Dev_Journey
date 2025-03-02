import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css"; // Minimal custom styles

import img2 from "../images/dsa.jpg";
import img3 from "../images/gh.png";

const Home = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div>
      {/* Section 1: Carousel & Authentication */}
      <div className="container-fluid py-5 bg-light">
        <div className="row justify-content-center align-items-center">
          {/* Left Side: Carousel */}
          <div className="col-md-6 justify-content-center">
            <div className="shadow-lg rounded p-3 bg-white">
              <Carousel fade interval={4000}>
                <Carousel.Item>
                  <img className="d-block rounded" src={img3} alt="Slide 1" />
                  <Carousel.Caption>
                    <h3>Welcome to Our Platform</h3>
                    <p>Join us today and explore amazing features.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 rounded" src={img2} alt="Slide 2" />
                  <Carousel.Caption>
                    <h3>Secure & Reliable</h3>
                    <p>Your data is always safe with us.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 rounded" src={img3} alt="Slide 3" />
                  <Carousel.Caption>
                    <h3>Get Started Now</h3>
                    <p>Sign up and be a part of our community.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>

          {/* Right Side: Login/Signup */}
          <div className="col-md-5 d-flex justify-content-center">
            <div className="p-4 bg-white shadow-lg rounded text-center w-100" style={{ maxWidth: "400px" }}>
              {/* Toggle Buttons */}
              <div className="btn-group w-100 mb-3">
                <button className={`btn ${!isSignUp ? "btn-primary" : "btn-light"}`} onClick={() => setIsSignUp(false)}>
                  Sign In
                </button>
                <button className={`btn ${isSignUp ? "btn-primary" : "btn-light"}`} onClick={() => setIsSignUp(true)}>
                  Sign Up
                </button>
              </div>

              {/* Authentication Forms */}
              {!isSignUp ? (
                <form>
                  <h3>Sign In</h3>
                  <input type="email" className="form-control my-2" placeholder="Email" />
                  <input type="password" className="form-control my-2" placeholder="Password" />
                  <button className="btn btn-primary w-100 mt-2">Login</button>
                </form>
              ) : (
                <form>
                  <h3>Sign Up</h3>
                  <input type="text" className="form-control my-2" placeholder="Full Name" />
                  <input type="email" className="form-control my-2" placeholder="Email" />
                  <input type="password" className="form-control my-2" placeholder="Password" />
                  <button className="btn btn-primary w-100 mt-2">Register</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container-fluid py-5 my-5 bg-white">
        <h2 className="text-center mb-4">About Our Organization</h2>
        <div className="row justify-content-center text-center">
          <div className="col-md-3">
            <img src={img2} alt="President" className="img-fluid rounded-circle mb-3" style={{ width: "150px", height: "150px" }} />
            <h5>President</h5>
          </div>
          <div className="col-md-3">
            <img src={img2} alt="Vice President" className="img-fluid rounded-circle mb-3" style={{ width: "150px", height: "150px" }} />
            <h5>Vice President</h5>
          </div>
          <div className="col-md-3">
            <img src={img2} alt="Manager" className="img-fluid rounded-circle mb-3" style={{ width: "150px", height: "150px" }} />
            <h5>Manager</h5>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container-fluid py-5 my-5 text-white text-center" style={{ backgroundColor: "#2b2b2b" }}>
        <h2 className="mb-4">Our Impact</h2>
        <div className="row">
          <div className="col-md-3">
            <h3>500+</h3>
            <p>Candidates</p>
          </div>
          <div className="col-md-3">
            <h3>20+</h3>
            <p>Admins</p>
          </div>
          <div className="col-md-3">
            <h3>50+</h3>
            <p>Subjects</p>
          </div>
          <div className="col-md-3">
            <h3>10,000+</h3>
            <p>MCQs</p>
          </div>
        </div>
      </div>

      {/* Top Candidates & Advertisements Section */}
      <div className="container-fluid py-5 my-5 bg-light">
        <div className="row">
          {/* Top Candidates Section */}
          <div className="col-md-8">
            <h3 className="text-center mb-4">Top Candidates</h3>
            <div className="row">
              <div className="col-md-6 text-center">
                <h4>Male Candidates</h4>
                <p>🏆 Candidate of the Year</p>
                <p>🌟 Candidate of the Month</p>
                <p>🔥 Candidate of the Week</p>
              </div>
              <div className="col-md-6 text-center">
                <h4>Female Candidates</h4>
                <p>🏆 Candidate of the Year</p>
                <p>🌟 Candidate of the Month</p>
                <p>🔥 Candidate of the Week</p>
              </div>
            </div>
          </div>
          {/* Advertisement Carousel */}
          <div className="col-md-4">
            <Carousel fade>
              <Carousel.Item>
                <img className="d-block w-100 rounded" src={img2} alt="Ad 1" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 rounded" src={img3} alt="Ad 2" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
