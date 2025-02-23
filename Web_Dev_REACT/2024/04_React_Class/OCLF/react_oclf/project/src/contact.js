import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-5"
      style={{
        background: "linear-gradient(275deg, purple, violet, purple)",
        minHeight: "100vh",
      }}
    >
      <div className="container text-center text-white">
        <h2 className="py-3">Contact Us</h2>
        <p className="fs-4">We'd love to hear from you! Drop us a message.</p>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="form-control form-control-lg"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div>
                <button type="submit" className="btn btn-light btn-lg">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
