import React from "react";
import { FiZap, FiSmile, FiLock, FiThumbsUp, FiBookOpen } from "react-icons/fi";

const advantages = [
  { title: "Quick", description: "Experience lightning-fast performance with our platform.", icon: <FiZap /> },
  { title: "Easy", description: "Our intuitive design ensures a smooth user experience.", icon: <FiSmile /> },
  { title: "Secure", description: "We prioritize security to keep your data safe and protected.", icon: <FiLock /> },
  { title: "Comfortable", description: "Enjoy a seamless and convenient user journey.", icon: <FiThumbsUp /> },
  { title: "Understandable", description: "Our platform is designed to be user-friendly and clear.", icon: <FiBookOpen /> },
];

const About = () => {
  return (
    <div className="w-full max-w-7xl mx-auto my-10 px-5">
      <h2 className="text-3xl font-semibold text-center mb-8">About Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className="p-6 flex flex-col items-center text-center bg-white/10 rounded-2xl border border-white/20 
            shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-white hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-3 text-info">{advantage.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
            <p className="text-sm opacity-80">{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
