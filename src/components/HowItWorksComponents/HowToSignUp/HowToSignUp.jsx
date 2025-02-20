import React from "react";

const steps = [
  { number: "1", title: "Create an Account", description: "Sign up with your email and set a secure password." },
  { number: "2", title: "Verify Your Email", description: "Check your inbox for a verification link and confirm your email address." },
  { number: "3", title: "Complete Your Profile", description: "Fill in your details to personalize your experience." },
  { number: "4", title: "Start Exploring", description: "Enjoy all features and connect with others seamlessly!" },
];

const HowToSignUp = () => {
  return (
    <section className="w-full h-full py-16 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">How To Sign Up</h2>

      {/* Steps Container */}
      <div className="max-w-[90%] w-full mx-auto flex flex-wrap justify-center gap-6 px-6">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="relative flex-1 min-w-[250px] max-w-[300px] p-8 flex flex-col items-center text-center bg-white/10 rounded-2xl border border-white/20 cursor-pointer select-none shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-white hover:scale-105 transition-transform duration-300 backdrop-blur-md"
          >
            {/* Step Number */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center text-white text-2xl font-bold bg-blue-600 dark:bg-blue-500 rounded-full shadow-lg">
              {step.number}
            </div>

            {/* Step Title */}
            <h3 className="text-2xl font-semibold mt-6">{step.title}</h3>

            {/* Step Description */}
            <p className="text-gray-300 mt-3">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToSignUp;
