import React from "react";
import Showcase from "./Showcase/Showcase";
import WhoBenefits from "./WhoBenefits/WhoBenefits";
import HowToSignUp from "./HowToSignUp/HowToSignUp";
import WhyOurProcessWorks from "./WhyOurProcessWorks/WhyOurProcessWorks";
import PostSearch from "./PostSearch/PostSearch";
import ReviewGateGrow from "./ReviewGateGrow/ReviewGateGrow";

const HowItWorks = () => {
  return (
    <div className="w-full">
      <Showcase />
      <WhoBenefits />
      <HowToSignUp />
      <WhyOurProcessWorks />
      <PostSearch />
      <ReviewGateGrow />
    </div>
  );
};

export default HowItWorks;
