import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [emailOrId, setEmailOrId] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${isAdmin ? "Admin" : "Candidate"} Login Details:`, { emailOrId, password, rememberMe });
    };

    return (
        <>
            {/* Hero Section with Login Form */}
            <section className="hero-section text-center text-light bg-primary py-5">
                <div className="container">
                    <h1 className="display-4 fw-bold">Welcome to Exam Portal</h1>
                    <p className="lead">Your gateway to seamless exam management</p>
                </div>
            </section>

            {/* Login Form Section */}
            <section className="container my-5">
                <h2 className="text-center">{isAdmin ? "Admin Login" : "Candidate Login"}</h2>

                <div className="d-flex justify-content-center mb-3">
                    <button
                        className={`btn me-2 ${!isAdmin ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => setIsAdmin(false)}
                    >Candidate Login</button>
                    <button
                        className={`btn ${isAdmin ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => setIsAdmin(true)}
                    >Admin Login</button>
                </div>

                <form onSubmit={handleSubmit} className="w-50 mx-auto p-4 border rounded shadow">
                    <div className="mb-3">
                        <label className="form-label">{isAdmin ? "Email or Admin ID" : "Email"}</label>
                        <input type="text" className="form-control" value={emailOrId} onChange={(e) => setEmailOrId(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="rememberMe" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                    </div>
                    <div className="d-flex justify-content-between">
                        <Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link>
                        <Link to={isAdmin ? "/register-admin" : "/register"} className="text-decoration-none">
                            Register Now {isAdmin ? "(Organization/Institution Access)" : "(Candidate Access)"}
                        </Link>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
                </form>
            </section>

            {/* Statistics Counter Section */}
            <section className="container my-5">
                <div className="row text-center">
                    <div className="col-md-3">
                        <div className="counter p-3 border rounded shadow">
                            <h2 className="timer count-number" data-to="5594" data-speed="1500">5594</h2>
                            <h4 className="text-primary">Candidates</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="counter p-3 border rounded shadow">
                            <h2 className="timer count-number" data-to="290" data-speed="1500">290</h2>
                            <h4 className="text-primary">Admins</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="counter p-3 border rounded shadow">
                            <h2 className="timer count-number" data-to="2902" data-speed="1500">2902</h2>
                            <h4 className="text-primary">Subjects</h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="counter p-3 border rounded shadow">
                            <h2 className="timer count-number" data-to="250726" data-speed="1500">250726</h2>
                            <h4 className="text-primary">MCQs</h4>
                        </div>
                    </div>
                </div>
            </section>


            {/* Features Section */}
            <section className="container my-5">
                <div className="row text-center">
                    <div className="col-md-4">
                        <img src="https://via.placeholder.com/150" alt="Feature 1" className="img-fluid rounded-circle mb-3" />
                        <h5>Easy Exam Management</h5>
                        <p>Conduct and manage exams with ease using our user-friendly platform.</p>
                    </div>
                    <div className="col-md-4">
                        <img src="https://via.placeholder.com/150" alt="Feature 2" className="img-fluid rounded-circle mb-3" />
                        <h5>Real-time Results</h5>
                        <p>Get instant results and performance analysis after every test.</p>
                    </div>
                    <div className="col-md-4">
                        <img src="https://via.placeholder.com/150" alt="Feature 3" className="img-fluid rounded-circle mb-3" />
                        <h5>Secure & Reliable</h5>
                        <p>Our platform ensures data security and smooth performance for all users.</p>
                    </div>
                </div>
            </section>

            {/* Stylish Bootstrap Carousel */}
            <section className="container my-5">
                <h2 className="text-center mb-4 fw-bold">What Our Users Say</h2>
                <div id="testimonialCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">

                    {/* Indicators */}
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2"></button>
                    </div>

                    {/* Carousel Items */}
                    <div className="carousel-inner text-center">
                        <div className="carousel-item active">
                            <div className="card mx-auto p-4 shadow-lg border-0" style={{ maxWidth: "600px", background: "#f8f9fa" }}>
                                <p className="lead fst-italic">"This platform made my exam preparations so easy!"</p>
                                <h6 className="fw-bold">- Student A</h6>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card mx-auto p-4 shadow-lg border-0" style={{ maxWidth: "600px", background: "#f8f9fa" }}>
                                <p className="lead fst-italic">"Managing online exams has never been smoother!"</p>
                                <h6 className="fw-bold">- Admin B</h6>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card mx-auto p-4 shadow-lg border-0" style={{ maxWidth: "600px", background: "#f8f9fa" }}>
                                <p className="lead fst-italic">"Real-time results helped me analyze my progress instantly."</p>
                                <h6 className="fw-bold">- Candidate C</h6>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bg-dark rounded-circle p-3"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon bg-dark rounded-circle p-3"></span>
                    </button>
                </div>
            </section>


            {/* Call to Action */}
            <section className="bg-secondary text-light text-center py-5">
                <h2>Get Started Today!</h2>
                <p>Join thousands of students and administrators using our platform.</p>
                <Link to="/#" className="btn btn-light text-primary px-4 py-2">
                    Register Now
                </Link>
            </section>
        </>
    );
};

export default Home;
