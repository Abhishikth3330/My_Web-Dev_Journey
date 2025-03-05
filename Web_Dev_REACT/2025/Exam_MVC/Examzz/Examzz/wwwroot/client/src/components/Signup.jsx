import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signing up with:", name, email, password);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ 
      background: "linear-gradient(135deg, #ff8008, #ffc837)"
    }}>
      <div className="card p-4 shadow-lg" style={{ width: "400px", borderRadius: "15px" }}>
        <h2 className="text-center text-dark">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input 
              type="text" 
              className="form-control" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" className="btn btn-dark w-100">Sign Up</button>
        </form>

        <p className="text-center mt-3">
          Already have an account? <Link to="/" className="text-primary">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
