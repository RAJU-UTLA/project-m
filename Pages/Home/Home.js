import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../Component/Hero";
import SectionSlider from "../../Pages/SectionSlider/SectionSlider";
import Services from "../../Pages/Services/Services";
import Contact from "../../Pages/Contact/Contact";
import AboutUs from "../../Pages/About Us/AboutUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SectionSlider />
      <Services />
      <AboutUs />
      <Contact />
    </div>
  );
};

export default Home;
