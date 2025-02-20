import React from 'react';
import Button from '../../../components/Button/Button';

const Showcase = () => {
  return (
    <section
      className="w-full bg-cover bg-center relative min-h-screen flex justify-start items-start md:justify-center md:items-center flex-col text-white text-center py-18 md:py-16"
      style={{ backgroundImage: "url('/images/acp-bg-2.png')" }}
    >
      <div className="absolute inset-0 bg-[#081621] opacity-80"></div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-6 px-4 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          How It Works – Seamless Freight Matching for Everyone!
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          ACP Loads is designed to connect Freight Shippers, Brokers, Owner-Operators, and Carriers in a fast, efficient, and cost-effective way. Our platform makes it easy to post, find, and move freight with ZERO fees! Let’s get started – It’s 100% FREE!
        </p>
        <Button text={'Sign In'} />
      </div>
    </section>
  );
};

export default Showcase;
