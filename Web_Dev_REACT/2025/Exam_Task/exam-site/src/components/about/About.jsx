import React from "react";
import { useNavigate } from "react-router-dom";
import img2 from "../images/dsa.jpg";
import "./about.css";

const About = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section text-white text-center d-flex align-items-center justify-content-center">
        <div>
          <h1>About Us</h1>
          <p>Empowering learners through interactive exams and quizzes.</p>
        </div>
      </div>

      {/* Main Section with Image on Left and Content on Right */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img src={img2} alt="About Us" className="img-fluid" />
          </div>
          <div className="col-md-6">
            {/* Content Section */}
            <div className="white-box">
              <h2>Who We Are</h2>
              <p className="lead">
                We are a leading online platform dedicated to conducting <b>exams and quizzes</b> for students, professionals, and competitive exam aspirants.
                Our goal is to <b>enhance learning</b> through engaging, interactive, and well-structured assessments.
              </p>
            </div>

            <div className="white-box mt-4">
              <h2>Why Choose Us?</h2>
              <h4>Real-Time Exams</h4>
              <p>Experience <b>time-based</b> quizzes and <b>mock exams</b> just like real test scenarios.</p>
              <h4>Topic-Wise Quizzes</h4>
              <p>Test your knowledge on <b>specific subjects</b> with <b>custom quizzes</b>.</p>
              <h4>Live Leaderboard</h4>
              <p>Compete with others and track your performance <b>on a global scale</b>.</p>
            </div>
          </div>
        </div>
        
        <div className="container-fluid white-box mt-4 text-center">
          <h2 style={{color:"black"}}>Start Your Journey Today!</h2>
          <p>Join thousands of students and professionals excelling in their exams.</p>
          <button className="btn btn-primary" onClick={() => navigate("/")}>Sign Up Now</button>
        </div>
      </div>
    </div>
  );
};

export default About;