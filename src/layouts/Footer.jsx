import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <p>&copy; 2025 Savoré Restaurant. Made with ❤️ for food lovers.</p>
        <strong>
          Developed & Designed By -{" "}
          <NavLink to="https://ghsresume.netlify.app" target="_blank">
            Ghs Julian
          </NavLink>
        </strong>
      </footer>
    </>
  );
};

export default Footer;
