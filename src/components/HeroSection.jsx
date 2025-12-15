import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Authentic Deshi Food By The Beauty Of Madhabpur Lake</h1>
        <p>
          Taste the true flavors of village life with freshly prepared deshi
          meals, made with local ingredients and traditional recipes, right
          beside the calm and natural surroundings of Madhabpur Lake.
        </p>
        <NavLink to="/menu" className="btn">
          View Full Menu
        </NavLink>
      </div>
    </section>
  );
};

export default HeroSection;
