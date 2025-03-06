import React, { useState, useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import Decor from "../../Decor/Decor";

const ratingCategories = [
  {
    title: "Carriers Rate Brokers On:",
    items: [
      "Communication Level",
      "Service Quality",
      "Load Accuracy",
      "Payment Speed",
      "Honesty & Trustworthiness",
    ],
    color: "text-info",
  },
  {
    title: "Brokers Rate Carriers On:",
    items: [
      "Communication Level",
      "Service Quality",
      "Reliable Information",
      "Freight Care",
      "Punctuality",
    ],
    color: "text-info",
  },
];

const TrustTransparency = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("trust-transparency");
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
    <section
      id="trust-transparency"
      className="container max-w-[90%] bg-opacity-80 backdrop-blur-lg mx-auto space-y-6 mt-10"
    >
      <Decor />

      <motion.p
        className="sm:text-4xl text-3xl font-bold text-center drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
      >
        Trust & Transparency with Reviews
      </motion.p>

      <motion.p
        className="text-center text-lg"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        We believe in building a trustworthy freight network. That’s why our
        platform allows Carriers and Brokers to rate and review each other based
        on key performance metrics.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ratingCategories.map((category, idx) => (
          <motion.div
            key={idx}
            className="card backdrop-blur-xl border border-white/20 p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2 * idx, duration: 0.8 }}
          >
            <h3 className={`text-lg font-light ${category.color}`}>
              {category.title}
            </h3>
            <ul className="mt-2 space-y-2 pt-3">
              {category.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FiCheckCircle className="text-xl text-yellow-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex justify-center mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <button className="btn btn-primary btn-lg">Learn More</button>
      </motion.div>
    </section>
  );
};

export default TrustTransparency;
