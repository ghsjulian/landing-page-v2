import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedMenu from "../components/FeaturedMenu";
import AboutSection from "../components/AboutSection";
import WhyChoseUs from "../components/WhyChoseUs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedMenu />
      <AboutSection />
      <WhyChoseUs />
    </>
  );
};

export default Home;
