import React from "react";
import HeroSection from "../../components/Showcase/Showcase";
import About from "../../components/About/About";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import ContactUs from "../../components/ContactUs/ContactUs";
import Decor from "../../components/Decor/Decor";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About ok={true}/>
      <HowItWorks />
      <ContactUs />
    </>
  );
};

export default Home;
