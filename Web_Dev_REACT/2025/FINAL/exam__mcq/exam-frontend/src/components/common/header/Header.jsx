import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">Exam Portal</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/exams">Exams</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/results">Results</Link>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <Link className="nav-link btn btn-light text-dark px-3 mx-2" to="/login">Login</Link>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
