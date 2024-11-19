import React from "react";

function Features() {
  return (
    <section
      id="features"
      className="bg-light text-center py-5"
      style={{
        background: "linear-gradient(275deg, purple, violet, purple)",
        minHeight: "100vh",
        minWidth: "100vh",
      }}
    >
      <div className="container align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="row w-100">
          <h2 className="py-3 text-white w-100">Event Highlights</h2> {/* Heading for Event Highlights */}

          {/* Card 1 */}
          <div className="col-md-4 mb-4 py-3">
            <div className="card" style={{ background: "purple", color: "white" }}>
              <img
                src="oclf.jpg"
                alt="Keynote Speakers"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Keynote Speakers</h5>
                <p className="card-text">
                  Hear from world-renowned authors and thought leaders on the
                  latest in literature.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4 py-3">
            <div className="card" style={{ background: "purple", color: "white" }}>
              <img
                src="oclf.jpg"
                alt="Workshops"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Workshops</h5>
                <p className="card-text">
                  Interactive workshops to develop your writing skills,
                  creativity, and storytelling.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4 py-3">
            <div className="card" style={{ background: "purple", color: "white" }}>
              <img
                src="oclf.jpg"
                alt="Panel Discussions"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Panel Discussions</h5>
                <p className="card-text">
                  Participate in insightful discussions on the impact of
                  literature on society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
