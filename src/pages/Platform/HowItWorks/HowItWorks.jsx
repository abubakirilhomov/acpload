import React from 'react';
import Showcase from '../../../components/HowItWorksComponents/Showcase/Showcase';
import WhoBenefits from '../../../components/HowItWorksComponents/WhoBenefits/WhoBenefits';
import HowToSignUp from '../../../components/HowItWorksComponents/HowToSignUp/HowToSignUp';
import WhyOurProcessWorks from '../../../components/HowItWorksComponents/WhyOurProcessWorks/WhyOurProcessWorks';
import PostSearch from '../../../components/HowItWorksComponents/PostSearch/PostSearch';
import ReviewGateGrow from '../../../components/HowItWorksComponents/ReviewGateGrow/ReviewGateGrow';

const HowItWorks = () => {
  return (
    <div className="w-full">
      <Showcase />
      <WhoBenefits />
      <HowToSignUp/>
      <WhyOurProcessWorks/>
      <PostSearch/>
      <ReviewGateGrow/>
    </div>
  );
};

export default HowItWorks;
