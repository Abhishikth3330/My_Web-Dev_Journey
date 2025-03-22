import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterAdmin = () => {
    const [formData, setFormData] = useState({
        organization: "",
        city: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        dob: "",
        gender: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Admin Registration Data:", formData);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Admin Registration</h2>
            <form onSubmit={handleSubmit} className="w-50 mx-auto p-4 border rounded shadow">
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Organization Name</label>
                        <input type="text" name="organization" className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">City</label>
                        <input type="text" name="city" className="form-control" onChange={handleChange} required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">First Name</label>
                        <input type="text" name="firstName" className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Last Name</label>
                        <input type="text" name="lastName" className="form-control" onChange={handleChange} required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Email ID</label>
                        <input type="email" name="email" className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Phone No.</label>
                        <input type="text" name="phone" className="form-control" onChange={handleChange} required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" name="confirmPassword" className="form-control" onChange={handleChange} required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Date of Birth</label>
                        <input type="date" name="dob" className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Gender</label>
                        <div>
                            <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
                            <input type="radio" name="gender" value="Female" onChange={handleChange} className="ms-3" /> Female
                            <input type="radio" name="gender" value="Other" onChange={handleChange} className="ms-3" /> Other
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">Register</button>
                <div className="text-center mt-3">
                    <p>Already registered? <Link to="/login" className="btn btn-link">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default RegisterAdmin;
