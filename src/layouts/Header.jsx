import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const menuRef = useRef(null);
  const menuIconRef = useRef(null);

  const openMenu = () => {
    menuRef.current.classList.toggle("active");
    menuIconRef.current.classList.toggle("fa-bars");
    menuIconRef.current.classList.toggle("fa-times");
  };
  return (
    <nav className="navbar">
      <NavLink href="/" className="logo">
        Savoré<span>.</span>
      </NavLink>
      <div ref={menuRef} className="nav-links" id="navLinks">
        <NavLink onClick={openMenu} to="/">
          Home
        </NavLink>
        <NavLink onClick={openMenu} to="/menu">
          Menu
        </NavLink>
        <NavLink onClick={openMenu} to="/about">
          About
        </NavLink>
        <NavLink onClick={openMenu} to="/contact">
          Contact
        </NavLink>
        <NavLink
          onClick={openMenu}
          to="https://wa.me/8801712375356?text=Hello i need an argent order, is it possible or available?"
          className="btn"
          target="_blank"
          style={{ padding: "12px 28px" }}
        >
          Instant Chat
        </NavLink>
      </div>
      <div onClick={openMenu} className="mobile-menu" id="mobileMenu">
        <i ref={menuIconRef} className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Header;
