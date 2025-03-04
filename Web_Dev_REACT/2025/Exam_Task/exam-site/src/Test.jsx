import React, { useState, useEffect } from "react";

const RotatingCarousel = () => {
  const candidateTitles = [
    "🏆 Candidate of the Year",
    "🌟 Candidate of the Month",
    "🔥 Candidate of the Week",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % candidateTitles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      {candidateTitles.map((title, i) => {
        // Calculate position of each item relative to the current index
        const position = (i - index + candidateTitles.length) % candidateTitles.length;

        return (
          <div
            key={i}
            className={`carousel-item ${position === 1 ? "center" : position === 0 ? "top" : "bottom"}`}
          >
            {title}
          </div>
        );
      })}

      {/* CSS Styles */}
      <style>{`
        .carousel-container {
          position: relative;
          height: 150px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .carousel-item {
          position: absolute;
          width: 200px;
          text-align: center;
          font-size: 18px;
          font-weight: bold;
          transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
        }

        /* Top item (smaller, slightly faded) */
        .top {
          transform: translateY(-50px) scale(0.8);
          opacity: 0.6;
        }

        /* Center item (larger, full opacity) */
        .center {
          transform: translateY(0) scale(1);
          opacity: 1;
          font-size: 22px;
        }

        /* Bottom item (smaller, slightly faded) */
        .bottom {
          transform: translateY(50px) scale(0.8);
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
};

export default RotatingCarousel;
