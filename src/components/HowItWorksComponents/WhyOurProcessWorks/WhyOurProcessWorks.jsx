import React from "react";
import { FaHandshake, FaChartLine, FaBolt } from "react-icons/fa";

const WhyOurProcessWorks = () => {
  const features = [
    {
      icon: <FaBolt className="text-blue-400 text-3xl" />,
      title: "Efficiency",
      description:
        "The combination of a streamlined sign-up, smart load matching, and instant notifications means less downtime and more freight movement.",
    },
    {
      icon: <FaHandshake className="text-blue-400 text-3xl" />,
      title: "Trust & Transparency",
      description:
        "Our review system ensures that every user is held accountable, building a trusted community where every transaction is backed by real feedback.",
    },
    {
      icon: <FaChartLine className="text-blue-400 text-3xl" />,
      title: "Growth",
      description:
        "By connecting shippers, brokers, carriers, and owner-operators on one platform, you can reduce empty miles, optimize your operations, and ultimately grow your business.",
    },
  ];

  return (
    <section className="bg-[#0D1B2A] text-white py-16">
      <div className="max-w-[90%] w-full mx-auto grid md:grid-cols-2 gap-10 items-between h-full">
        {/* Left Side: Image */}
        <div className="w-full">
          <img
            src="/images/acp-why-works.png"
            alt="Worker using a laptop"
            className="rounded-lg shadow-lg w-full h-full max-w-xl object-cover"
          />
        </div>

        {/* Right Side: Content */}
        <div className="h-full flex flex-col justify-center items-between">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
            Why Our Process Works
          </h2>
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                {/* Icon */}
                <div className="p-3 bg-white/10 rounded-full">{feature.icon}</div>
                {/* Text */}
                <div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOurProcessWorks;
