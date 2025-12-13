import React from "react";
import "../styles/about-style.css";

const About = () => {
  return (
    <>
      <section className="hero">
        <div>
          <h1>About Savoré</h1>
          <p>Where passion for food meets exceptional hospitality</p>
        </div>
      </section>
      <section style={{ background: "white" }}>
        <h2 className="section-title">Our Journey</h2>
        <p className="section-subtitle">
          From a small dream in 2015 to your favorite dining destination
        </p>

        <div className="story-grid">
          <div className="story-img">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
              alt="Restaurant interior"
            />
          </div>
          <div>
            <h3
              style={{
                fontSize: "2.2rem",
                color: "var(--primary)",
                marginBottom: "1rem",
              }}
            >
              Crafted with Love Since 2015
            </h3>
            <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem" }}>
              Founded by Chef Elena Moreau, Savoré began as a cozy 30-seat
              bistro with one mission: to serve honest, flavorful food made from
              the finest seasonal ingredients.
            </p>
            <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem" }}>
              Ten years and thousands of happy guests later, we’ve grown into an
              award-winning restaurant while staying true to our roots — fresh,
              local, sustainable, and absolutely delicious.
            </p>
            <a href="contact.html" className="btn">
              Book Your Table
            </a>
          </div>
        </div>
      </section>
      <section style={{ background: "var(--light)" }}>
        <h2 className="section-title">Meet Our Team</h2>
        <p className="section-subtitle">
          The talented people behind every unforgettable meal
        </p>

        <div className="team-grid">
          <div className="chef-card">
            <img
              src="https://images.unsplash.com/photo-1583394838336-4b3c9f9d4c0a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
              alt="Chef Elena"
              className="chef-img"
            />
            <div className="chef-info">
              <h3 className="chef-name">Elena Moreau</h3>
              <p className="chef-role">Executive Chef & Founder</p>
            </div>
          </div>
          <div className="chef-card">
            <img
              src="https://images.unsplash.com/photo-1595476108010-b4d1f10292b0?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
              alt="Chef Marco"
              className="chef-img"
            />
            <div className="chef-info">
              <h3 className="chef-name">Marco Rossi</h3>
              <p className="chef-role">Head Chef</p>
            </div>
          </div>
          <div className="chef-card">
            <img
              src="https://images.unsplash.com/photo-1577219492769-2c1e2d8f2b5a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
              alt="Chef Sofia"
              className="chef-img"
            />
            <div className="chef-info">
              <h3 className="chef-name">Sofia Chen</h3>
              <p className="chef-role">Pastry Chef</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "white" }}>
        <h2 className="section-title">Our Values</h2>
        <p className="section-subtitle">
          What we stand for, in every dish we serve
        </p>

        <div className="values-grid">
          <div className="value-card">
            <i className="fas fa-leaf"></i>
            <h3>Sustainable</h3>
            <p>Local farms, ethical sourcing, zero waste kitchen.</p>
          </div>
          <div className="value-card">
            <i className="fas fa-heart"></i>
            <h3>Passion</h3>
            <p>Every plate is made with love and creativity.</p>
          </div>
          <div className="value-card">
            <i className="fas fa-handshake"></i>
            <h3>Hospitality</h3>
            <p>You’re not a customer — you’re family.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
