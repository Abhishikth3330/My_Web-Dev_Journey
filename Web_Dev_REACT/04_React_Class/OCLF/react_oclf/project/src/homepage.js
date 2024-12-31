import React from "react";

function Homepage() {
  return (
    <>
      {/* <header className="bg-light" style={{ background: "linear-gradient(270deg, orange, yellow, orange)" }}>
        <nav className="navbar navbar-expand container-fluid px-4">
          <a className="navbar-brand">OCLF 2024</a>
          {/* Uncomment the below button if you want to add responsiveness */}
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          {/* <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-5">
              <li className="nav-item"><a className="nav-link active" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link active" href="#features">Features</a></li>
              <li className="nav-item"><a className="nav-link active" href="#gallery">Gallery</a></li>
              <li className="nav-item"><a className="nav-link active" href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header> */}

      <section className="container-fluid py-5 px-4 text-white" style={{ background: "linear-gradient(275deg, purple, violet, purple)" }}>
        <div className="row align-items-center">
          {/* Text Column */}
          <div className="col-lg-6 text-center text-lg-start px-4">
            <h1>Welcome To OCLF 2024</h1>
            <p className="fs-4">A Celebration of Literature, Storytelling, and Ideas!</p>
            <a href="#" className="btn btn-primary">Register Now</a>
          </div>

          {/* Image Column */}
          <div className="col-lg-6 text-center">
            <img src="oclf_2024.png" alt="OCLF Event" className="img-fluid rounded" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Homepage;
