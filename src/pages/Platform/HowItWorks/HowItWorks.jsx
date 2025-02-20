import React from 'react';
import Showcase from '../../../components/HowItWorksComponents/Showcase/Showcase';
import WhoBenefits from '../../../components/HowItWorksComponents/WhoBenefits/WhoBenefits';
import HowToSignUp from '../../../components/HowItWorksComponents/HowToSignUp/HowToSignUp';

const HowItWorks = () => {
  return (
    <div className="w-full">
      <Showcase />
      <WhoBenefits />
      <HowToSignUp/>
    </div>
  );
};

export default HowItWorks;
