import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTruckMoving, FaUserTie, FaUsers, FaShippingFast } from "react-icons/fa";

const benefits = [
  {
    title: "Carrier Dispatchers",
    description: [
      "Search for loads effortlessly.",
      "Register without an MC number.",
    ],
    icon: <FaTruckMoving className="text-4xl text-blue-500" />,
    color: "badge-primary",
  },
  {
    title: "Brokers",
    description: [
      "Post loads and find available empty trucks.",
      "Connect with Shippers to fulfill their shipments.",
    ],
    icon: <FaUserTie className="text-4xl text-green-500" />,
    color: "badge-secondary",
  },
  {
    title: "Carriers",
    description: [
      "Search for loads and post empty trucks.",
      "Attract loads based on truck availability.",
    ],
    icon: <FaUsers className="text-4xl text-yellow-500" />,
    color: "badge-accent",
  },
  {
    title: "Shippers",
    description: [
      "Post shipments quickly and easily.",
      "Get connected with Brokers and Carriers in real-time.",
    ],
    icon: <FaShippingFast className="text-4xl text-red-500" />,
    color: "badge-neutral",
  },
];

const WhoCanBenefit = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("who-can-benefit");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="who-can-benefit" className="py-16 px-6 md:px-16 lg:px-32 text-center">
      <motion.h2
        className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent drop-shadow-lg mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 2.5 }}
      >
        Who Can Benefit?
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="card glassmorphism shadow-xl border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="card-body items-center text-start">
              <div className="mb-3">{benefit.icon}</div>
              <span className={`badge ${benefit.color} text-lg p-3 mb-3`}>
                {benefit.title}
              </span>
              <ul className="list-disc list-inside">
                {benefit.description.map((item, i) => (
                  <li key={i} className="mt-2">{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhoCanBenefit;
