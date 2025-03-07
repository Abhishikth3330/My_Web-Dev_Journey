import React from "react";
// import "./services.css";


const Services = () => {
  return (
    <div>
      
      {/* Hero Section */}
      <div className="hero-section text-white text-center d-flex align-items-center justify-content-center">
        <div>
          <h1>Our Services</h1>
          <p>Comprehensive solutions designed to enhance learning and test preparation.</p>
        </div>
      </div>


      {/* What We Offer */}
      <div className="container py-5 d-flex justify-content-center">
        <div className="white-box text-center p-4">
          <h2 style={{color:"black"}}>What We Offer</h2>
          <p className="lead">
            Our platform provides a range of services aimed at improving 
            <strong> learning outcomes</strong> and boosting 
            <strong> exam performance</strong>. From structured assessments 
            to real-time analytics, we ensure an engaging and effective 
            experience for all users.
          </p>
        </div>
      </div>


      {/* Our Key Services */}
      <div className="container py-5 bg-light">
        <h2 className="text-center" style={{color:"black"}}>Why Choose Our Services?</h2>
        <div className="row text-center mt-4">
          <div className="col-md-4">
            <div className="white-box p-4">
              <h4>Personalized Study Plans</h4>
              <p>Get <strong>customized study schedules</strong> based on your strengths, weaknesses, and goals.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="white-box p-4">
              <h4>AI-Powered Performance Insights</h4>
              <p>Analyze your progress with <strong>detailed analytics</strong> and <strong>real-time performance tracking</strong>.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="white-box p-4">
              <h4>Expert-Curated Question Banks</h4>
              <p>Practice with <strong>high-quality questions</strong> crafted by subject matter experts.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="container py-5 d-flex justify-content-center">
        <div className="white-box text-center p-4">
          <h2 style={{color:"black"}}>Enhance Your Learning Experience</h2>
          <p>
            Our services go beyond traditional learning methods by integrating 
            <strong> interactive challenges</strong>, <strong> real-time quizzes</strong>, 
            and <strong> collaborative study groups</strong> to make preparation 
            more engaging and effective.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container py-5 d-flex justify-content-center">
        <div className="white-box text-center p-4">
          <h2 style={{color:"black"}}>Start Your Learning Journey Now!</h2>
          <p>Join a community of learners dedicated to academic and professional success.</p>
          <button className="btn btn-primary">Explore Services</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
