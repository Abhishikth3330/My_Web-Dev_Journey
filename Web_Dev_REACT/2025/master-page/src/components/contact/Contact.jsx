import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-container mt-5 mb-5" style={{background: "lightgoldenrodyellow"}}>
      <h2><b><u>Contact Us</u></b></h2>

      {/* Contact Form */}
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="form-label">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="form-label">
            Your Suggestions / Message:
          </label>
          <textarea
            id="message"
            className="form-control"
            rows="4"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>

      {/* Social Media Links Using Bootstrap Icons */}
      <div className="social-icons mt-3">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
