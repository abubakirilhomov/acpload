import React from "react";
import HeroSection from "../../components/Showcase/Showcase";
import About from "../../components/About/About";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import ContactUs from "../../components/ContactUs/ContactUs";
import Decor from "../../components/Decor/Decor";
import Stats from "../../components/Stats/Stats";
import WhyUs from "../../components/WhyUs/WhyUs";
import WhoCanBenefit from "../../components/WhoCanBenefit/WhoCanBenefit";
import TrustTransparency from "../../components/TrustTransparency/TrustTransparency";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About ok={true}/>
      <HowItWorks />
      <Stats/>
      <WhyUs/>
      <WhoCanBenefit/>
      <TrustTransparency/>
      <ContactUs />
    </>
  );
};

export default Home;
