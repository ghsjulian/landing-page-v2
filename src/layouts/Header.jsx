import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <NavLink href="#" className="logo">
        Savoré<span>.</span>
      </NavLink>
      <div className="nav-links" id="navLinks">
        <NavLink to="#">Home</NavLink>
        <NavLink to="#">Menu</NavLink>
        <NavLink to="#">About</NavLink>
        <NavLink to="#">Contact</NavLink>
        <NavLink to="#" className="btn" style={{ padding: "12px 28px" }}>
          Reserve Table
        </NavLink>
      </div>
      <div className="mobile-menu" id="mobileMenu">
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Header;
