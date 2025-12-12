import React from "react";

const WhyChoseUs = () => {
  return (
    <section style={{ background: "white" }}>
      <h2 className="section-title">Why Guests Love Us</h2>
      <p className="section-subtitle">What sets us apart from the rest</p>

      <div className="features-grid">
        <div className="feature-card">
          <i className="fas fa-leaf"></i>
          <h3>Fresh Ingredients</h3>
          <p>Farm-to-table produce and sustainably sourced proteins daily.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-utensils"></i>
          <h3>Expert Chefs</h3>
          <p>Award-winning culinary team with decades of experience.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-wine-glass"></i>
          <h3>Perfect Ambiance</h3>
          <p>Elegant yet cozy setting for any occasion.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-star"></i>
          <h3>5-Star Service</h3>
          <p>Attentive staff dedicated to making your visit exceptional.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoseUs;
