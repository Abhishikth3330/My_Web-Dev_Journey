import React, { useState } from "react";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registration Details:", { name, email, password });
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Register</h2>
            <form onSubmit={handleSubmit} className="w-50 mx-auto p-4 border rounded shadow">
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-success w-100">Register</button>
            </form>
        </div>
    );
};

export default Register;
