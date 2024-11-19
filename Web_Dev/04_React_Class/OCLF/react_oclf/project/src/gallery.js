import React from "react";

function Gallery() {
  return (
    <section
      id="gallery"
      className="container-fluid py-5 text-center"
      style={{
        background: "linear-gradient(275deg, purple, violet, purple)",
        minHeight: "100vh",
      }}
    >
      <h2 className="py-3 text-white">Gallery</h2>
      <div className="container">
        <div className="row justify-content-center">
          {/* Image Columns */}
          <div className="col-md-4 mb-4 d-flex justify-content-center">
            <img
              src="inag2.jpg" // Replace with your actual image source
              alt="Gallery Image 1"
              className="img-fluid rounded mb-3"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
          <div className="col-md-4 mb-4 d-flex justify-content-center">
            <img
              src="_DSC4410.jpg" // Replace with your actual image source
              alt="Gallery Image 2"
              className="img-fluid rounded mb-3"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
          <div className="col-md-4 mb-4 d-flex justify-content-center">
            <img
              src="_DSC4654.jpg" // Replace with your actual image source
              alt="Gallery Image 3"
              className="img-fluid rounded mb-3"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>

          <div className="col-md-4 mb-4 d-flex justify-content-center">
            <img
              src="IMG_2258.jpg" // Replace with your actual image source
              alt="Gallery Image 4"
              className="img-fluid rounded mb-3"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
          <div className="col-md-4 mb-4 d-flex justify-content-center">
            <img
              src="IMG_2260.jpg" // Replace with your actual image source
              alt="Gallery Image 5"
              className="img-fluid rounded mb-3"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
          <div className="col-md-4 mb-4 d-flex justify-content-center">
            <img
              src="IMG_2267.jpg" // Replace with your actual image source
              alt="Gallery Image 6"
              className="img-fluid rounded mb-3"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
        </div>

        {/* View More Button */}
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary btn-lg">View More</button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
