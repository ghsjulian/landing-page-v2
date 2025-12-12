import React from "react";
import { NavLink } from "react-router-dom";

const AboutSection = () => {
  return (
    <section style={{ background: "var(--light)" }}>
      <h2 className="section-title">Our Story</h2>
      <p className="section-subtitle">
        Passion for food, dedication to excellence since 2015
      </p>

      <div className="about-grid">
        <div className="about-img">
          <img
            src="https://www.shutterstock.com/image-photo/diversity-dining-table-friends-taking-260nw-2305705191.jpg"
            alt="Happy guests dining"
          />
        </div>
        <div>
          <h3
            style={{
              fontSize: "2rem",
              marginBottom: "1rem",
              color: "var(--primary)",
            }}
          >
            Where Flavor Meets Elegance
          </h3>
          <p
            style={{
              fontSize: "1.1rem",
              marginBottom: "1.5rem",
              color: "#555",
            }}
          >
            At Savoré, we believe every meal is an experience. Our chefs source
            the finest local and international ingredients to create dishes that
            delight the senses.
          </p>
          <p style={{ color: "#555" }}>
            From intimate dinners to grand celebrations, our warm ambiance and
            impeccable service make every visit memorable.
          </p>
          <NavLink href="#" className="btn" style={{ marginTop: "2rem" }}>
            Learn More
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
