import React from "react";
import HeroSection from "../../components/Showcase/Showcase";
import About from "../../components/About/About";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import ContactUs from "../../components/ContactUs/ContactUs";
import Decor from "../../components/Decor/Decor";
import Stats from "../../components/Stats/Stats";
import OurVision from "../../components/OurVision/OurVision";
import WhyUs from "../../components/Home/WhyUs/WhyUs";
import WhoCanBenefit from "../../components/Home/WhoCanBenefit/WhoCanBenefit";
import TrustTransparency from "../../components/Home/TrustTransparency/TrustTransparency";
import FeaturedPartners from "../../components/Home/FeaturedPartners/FeaturedPartners";

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
      <OurVision/>
      <FeaturedPartners/>
      <ContactUs />
    </>
  );
};

export default Home;
