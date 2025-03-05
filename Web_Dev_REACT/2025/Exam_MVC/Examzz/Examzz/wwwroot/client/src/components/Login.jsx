import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ 
      background: "linear-gradient(135deg, #ff8008, #ffc837)"
    }}>
      <div className="card p-4 shadow-lg" style={{ width: "400px", borderRadius: "15px" }}>
        <h2 className="text-center text-dark">Login</h2>
        <form onSubmit={handleLogin}>
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

          <button type="submit" className="btn btn-dark w-100">Login</button>
        </form>
        
        <p className="text-center mt-3">
          Don't have an account? <Link to="/signup" className="text-primary">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
