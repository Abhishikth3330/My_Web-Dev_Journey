import React from "react";
import img2 from "../images/dsa.jpg";
import "./about.css";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section text-white text-center d-flex align-items-center justify-content-center">
        <div>
          <h1>About Us</h1>
          <p>Empowering learners through interactive exams and quizzes.</p>
        </div>
      </div>

      {/* Who We Are */}
      <div className="container py-5 d-flex justify-content-center">
        <div className="white-box text-center">
          <h2>Who We Are</h2>
          <p className="lead">
            We are a leading online platform dedicated to conducting <b>exams and quizzes</b> for students, professionals, and competitive exam aspirants.  
            Our goal is to <b>enhance learning</b> through engaging, interactive, and well-structured assessments.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container py-5 bg-light">
        <h2 className="text-center">Why Choose Us?</h2>
        <div className="row text-center mt-4">
          <div className="col-md-4">
            <div className="white-box">
              <img src={img2} alt="Real-Time Exams" className="feature-img" />
              <h4>Real-Time Exams</h4>
              <p>Experience <b>time-based</b> quizzes and <b>mock exams</b> just like real test scenarios.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="white-box">
              <img src={img2} alt="Topic-Wise Quizzes" className="feature-img" />
              <h4>Topic-Wise Quizzes</h4>
              <p>Test your knowledge on <b>specific subjects</b> with <b>custom quizzes</b>.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="white-box">
              <img src={img2} alt="Live Leaderboard" className="feature-img" />
              <h4>Live Leaderboard</h4>
              <p>Compete with others and track your performance <b>on a global scale</b>.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container py-5 d-flex justify-content-center">
        <div className="white-box text-center">
          <h2>Start Your Journey Today!</h2>
          <p>Join thousands of students and professionals excelling in their exams.</p>
          <button className="btn btn-primary">Sign Up Now</button>
        </div>
      </div>
    </div>
  );
};

export default About;
