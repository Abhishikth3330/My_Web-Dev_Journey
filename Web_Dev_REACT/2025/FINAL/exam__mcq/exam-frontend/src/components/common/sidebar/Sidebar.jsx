import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="bg-dark text-white p-3" style={{ width: "250px", minHeight: "100vh", position: "fixed" }}>
            <h4 className="text-center">Admin Panel</h4>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link text-white">Dashboard</Link>
                </li>

                {/* My Candidates Dropdown */}
                <li className="nav-item">
                    <a className="nav-link text-white" data-bs-toggle="collapse" href="#candidatesMenu">
                        My Candidates
                    </a>
                    <div className="collapse ps-3" id="candidatesMenu">
                        <Link to="/add-candidate" className="nav-link text-white">Add New Candidate</Link>
                        <Link to="/candidate-list" className="nav-link text-white">Candidate List</Link>
                    </div>
                </li>

                {/* Exams Dropdown */}
                <li className="nav-item">
                    <a className="nav-link text-white" data-bs-toggle="collapse" href="#examsMenu">
                        Exams
                    </a>
                    <div className="collapse ps-3" id="examsMenu">
                        <Link to="/create-exam" className="nav-link text-white">Create Exam</Link>
                        <Link to="/exam-list" className="nav-link text-white">Exam List</Link>
                    </div>
                </li>

                {/* Questions Dropdown */}
                <li className="nav-item">
                    <a className="nav-link text-white" data-bs-toggle="collapse" href="#questionsMenu">
                        Questions
                    </a>
                    <div className="collapse ps-3" id="questionsMenu">
                        <Link to="/add-question" className="nav-link text-white">Add Question</Link>
                        <Link to="/question-bank" className="nav-link text-white">Question Bank</Link>
                    </div>
                </li>

                {/* Exam Payment Dropdown */}
                <li className="nav-item">
                    <a className="nav-link text-white" data-bs-toggle="collapse" href="#paymentMenu">
                        Exam Payment
                    </a>
                    <div className="collapse ps-3" id="paymentMenu">
                        <Link to="/payment-status" className="nav-link text-white">Payment Status</Link>
                    </div>
                </li>

                {/* Master Dropdown */}
                <li className="nav-item">
                    <a className="nav-link text-white" data-bs-toggle="collapse" href="#masterMenu">
                        Master
                    </a>
                    <div className="collapse ps-3" id="masterMenu">
                        <Link to="/settings" className="nav-link text-white">Settings</Link>
                        <Link to="/admin-management" className="nav-link text-white">Admin Management</Link>
                    </div>
                </li>

                {/* Certificate Gallery (No Dropdown) */}
                <li className="nav-item">
                    <Link to="/certificate-gallery" className="nav-link text-white">Certificate Gallery</Link>
                </li>

                {/* Survey Info Dropdown */}
                <li className="nav-item">
                    <a className="nav-link text-white" data-bs-toggle="collapse" href="#surveyMenu">
                        Survey Info
                    </a>
                    <div className="collapse ps-3" id="surveyMenu">
                        <Link to="/survey-results" className="nav-link text-white">Survey Results</Link>
                    </div>
                </li>

                {/* Logout Button */}
                <li className="nav-item mt-3">
                    <Link to="/logout" className="btn btn-danger w-100">Logout</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
