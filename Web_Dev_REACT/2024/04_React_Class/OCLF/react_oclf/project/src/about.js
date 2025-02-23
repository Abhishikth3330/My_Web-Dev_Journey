import React from "react";

function About() {
  return (
    <section
      id="about"
      className="container-fluid text-center py-5"
      style={{
        background: "linear-gradient(275deg, purple, violet, purple)",
        minHeight: "100vh",
        padding: "5rem 2rem",
      }}
    >
      <h2 className="py-3 text-white">About Orange City Literature Festival (OCLF) 2024</h2>
      <div
        className="container"
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "2rem",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <div style={{ flex: "1", paddingRight: "2rem" }}>
          <img
            src="about-img.png"
            alt="OCLF 2024"
            style={{
              width: "100%",
              maxWidth: "300px",
              borderRadius: "10px",
            }}
          />
        </div>

        <div style={{ flex: "2", textAlign: "justify" }}>
          <p className="fs-6 text-dark">
            The Orange City Literature Festival (OCLF) is an esteemed recognition of literary excellence in Nagpur and a three-day carnival of inspiration, creativity, and culture. Being a vibrant celebration of the written and spoken word, OCLF beads together poets, authors, actors, journalists, bibliophiles, and speakers from all corners of India with their insightful experiences. As one of the largest literature festivals in the country, the extravaganza presents diverse and engaging happenings through sessions, thought-provoking panel discussions, book signings, workshops by acclaimed speakers, art competitions, and exhibitions. Gracing the celebrations are mesmerizing dance and musical performances for traditional culture admirers.
          </p>
          <p className="fs-6 text-dark">
            Unifying together budding authors and prominent wordsmiths, OCLF provides a platform to learn, share, cherish, celebrate, and keep alive the essence of literature. This unique spectacle is self-funded and aims to offer an enriching literary experience to society in a fun-filled way. With expressive poetry slams and storytelling sessions, the gathering of intellectuals lays a space for attendees to contemplate and discuss a diverse range of topics. Orange City Literature Festival is a delightful convergence of creativity and craftsmanship wherein we set up various stalls, each with a unique facet to offer. OCLF's organizing panel comprises various eminent personalities from all walks of life.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
