import React from "react";
import Showcase from "./Showcase/Showcase";
import WhyChoose from "./WhyChoose/WhyChoose";
import WhoBenefits from "./whoBenefits/whoBenefits";
import Statistics from "./Statistics/Statistics";
import WhyUs from "./WhyUs/WhyUs";
import WhoCanBenefit from "./WhoCanBenefit/WhoCanBenefit";
import TrustTransparency from "./TrustTransparency/TrustTransparency";
import OurVision from "./OurVision/OurVision";
import FeaturedPartners from "./FeaturedPartners/FeaturedPartners";
import ContactUs from "./ContactUs/ContactUs";

const Home = () => {
  return (
    <>
      <Showcase />
      <WhyChoose ok={true} />
      <WhoBenefits />
      <Statistics />
      <WhyUs />
      <WhoCanBenefit />
      <TrustTransparency />
      <OurVision />
      <FeaturedPartners />
      <ContactUs />
    </>
  );
};

export default Home;
