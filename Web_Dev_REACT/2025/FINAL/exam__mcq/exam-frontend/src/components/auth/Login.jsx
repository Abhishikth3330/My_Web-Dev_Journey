import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [emailOrId, setEmailOrId] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${isAdmin ? "Admin" : "Candidate"} Login Details:`, { emailOrId, password, rememberMe });
    };

    return (
        <div className="container mt-5">
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
                    <Link to={isAdmin ? "/register-admin" : "/register"} className="text-decoration-none">Register Now {isAdmin ? "(Organization/Institution Access)" : "(Candidate Access)"}</Link>
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
            </form>
        </div>
    );
};

export default Login;