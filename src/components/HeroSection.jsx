import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Experience Culinary Excellence</h1>
        <p>
          Fresh, seasonal ingredients crafted into unforgettable dishes by our
          award-winning chefs.
        </p>
        <NavLink to="/menu" className="btn">
          View Full Menu
        </NavLink>
      </div>
    </section>
  );
};

export default HeroSection;
