import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="d-flex flex-column flex-shrink-0 bg-dark text-light p-3" style={{ width: "250px", minHeight: "100vh" }}>
            <h4 className="text-center mb-4">Admin Panel</h4>
            <ul className="nav nav-pills flex-column mb-auto">
                {/* Dashboard */}
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link text-light">
                        <i className="bi bi-speedometer2 me-2"></i> Dashboard
                    </Link>
                </li>

                {/* My Candidates Dropdown */}
                <li className="nav-item dropdown">
                    <a className="nav-link text-light dropdown-toggle" data-bs-toggle="collapse" href="#candidatesMenu">
                        <i className="bi bi-people me-2"></i> My Candidates
                    </a>
                    <ul className="collapse list-unstyled ps-3" id="candidatesMenu">
                        <li><Link to="/add-candidate" className="nav-link text-light">Add New Candidate</Link></li>
                        <li><Link to="/candidate-list" className="nav-link text-light">Candidate List</Link></li>
                    </ul>
                </li>

                {/* Exam Dropdown */}
                <li className="nav-item dropdown">
                    <a className="nav-link text-light dropdown-toggle" data-bs-toggle="collapse" href="#examMenu">
                        <i className="bi bi-file-earmark-text me-2"></i> Exam
                    </a>
                    <ul className="collapse list-unstyled ps-3" id="examMenu">
                        <li><Link to="/exam-schedule" className="nav-link text-light">Exam Schedule</Link></li>
                        <li><Link to="/exam-results" className="nav-link text-light">Exam Results</Link></li>
                    </ul>
                </li>

                {/* Questions Dropdown */}
                <li className="nav-item dropdown">
                    <a className="nav-link text-light dropdown-toggle" data-bs-toggle="collapse" href="#questionsMenu">
                        <i className="bi bi-question-circle me-2"></i> Questions
                    </a>
                    <ul className="collapse list-unstyled ps-3" id="questionsMenu">
                        <li><Link to="/add-question" className="nav-link text-light">Add Question</Link></li>
                        <li><Link to="/question-bank" className="nav-link text-light">Question Bank</Link></li>
                    </ul>
                </li>

                {/* Exam Payment Dropdown */}
                <li className="nav-item dropdown">
                    <a className="nav-link text-light dropdown-toggle" data-bs-toggle="collapse" href="#paymentMenu">
                        <i className="bi bi-cash me-2"></i> Exam Payment
                    </a>
                    <ul className="collapse list-unstyled ps-3" id="paymentMenu">
                        <li><Link to="/payment-status" className="nav-link text-light">Payment Status</Link></li>
                    </ul>
                </li>

                {/* Master Dropdown */}
                <li className="nav-item dropdown">
                    <a className="nav-link text-light dropdown-toggle" data-bs-toggle="collapse" href="#masterMenu">
                        <i className="bi bi-tools me-2"></i> Master
                    </a>
                    <ul className="collapse list-unstyled ps-3" id="masterMenu">
                        <li><Link to="/manage-courses" className="nav-link text-light">Manage Courses</Link></li>
                    </ul>
                </li>

                {/* Certificate Gallery */}
                <li className="nav-item">
                    <Link to="/certificate-gallery" className="nav-link text-light">
                        <i className="bi bi-image me-2"></i> Certificate Gallery
                    </Link>
                </li>

                {/* Survey Info Dropdown */}
                <li className="nav-item dropdown">
                    <a className="nav-link text-light dropdown-toggle" data-bs-toggle="collapse" href="#surveyMenu">
                        <i className="bi bi-bar-chart-line me-2"></i> Survey Info
                    </a>
                    <ul className="collapse list-unstyled ps-3" id="surveyMenu">
                        <li><Link to="/survey-reports" className="nav-link text-light">Survey Reports</Link></li>
                        <li><Link to="/survey-analysis" className="nav-link text-light">Survey Analysis</Link></li>
                    </ul>
                </li>

                {/* Logout */}
                <li className="nav-item">
                    <Link to="/logout" className="nav-link text-danger">
                        <i className="bi bi-box-arrow-right me-2"></i> Logout
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
