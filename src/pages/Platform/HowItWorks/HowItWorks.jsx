import React from 'react';

const HowItWorks = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/acp-bg-2.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#152938] opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex justify-center items-center h-full text-white">
        <p className='text-6xl font-bold'>How It Works – Seamless Freight Matching for Everyone!</p>
      </div>
    </div>
  );
};

export default HowItWorks;
