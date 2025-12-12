import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/app-layout.css";
import Header from "./Header";
import Footer from "./Footer";

const Layouts = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layouts;
