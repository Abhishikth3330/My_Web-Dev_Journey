import React from 'react';
// import '../assets/css/main.css'; // optional if using main EasyFolio styles

function Home() {
  return (
    <section id="hero" className="d-flex align-items-center min-vh-100 bg-light">
      <div className="container text-center">
        <h1 className="display-4 fw-bold">Hey, I'm <span className="text-primary">Abhishikth Thul</span></h1>
        <h2 className="mt-3">Aspiring Data Scientist & Full-Stack Developer</h2>
        <p className="mt-4 lead">
          Passionate about building impactful web applications and solving real-world problems with AI and Machine Learning.
        </p>
        <a href="#portfolio" className="btn btn-primary btn-lg mt-4">
          View My Work <i className="bi bi-arrow-right ms-2"></i>
        </a>
      </div>
    </section>
  );
}

export default Home;
