import React, { useState, useEffect } from "react";
import img from "/images/why-us.png";
import { FaUserCheck } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdOutlineSystemSecurityUpdateGood } from "react-icons/md";
import { motion } from "framer-motion";
import Decor from "../../Decor/Decor";
import { SiApostrophe } from "react-icons/si";

const whyUs = [
  {
    title: "Fast Posting & Searching",
    description:
      "Instantly post loads, find shipments, and match empty trucks with available freight.",
    icon: <SiApostrophe className="text-4xl text-primary" />,
  },
  {
    title: "User-Friendly Interface",
    description:
      "Our intuitive workspace ensures load details are easily accessible for quick decision-making.",
    icon: <FaUserCheck className="text-4xl text-primary" />,
  },
  {
    title: "Ratings & Reviews",
    description:
      "Carriers and Brokers can rate and review each other, fostering transparency and trust.",
    icon: <IoStatsChartSharp className="text-4xl text-primary" />,
  },
  {
    title: "Smart Matching System",
    description:
      "Carriers posting empty trucks will automatically attract loads that match their criteria.",
    icon: (
      <MdOutlineSystemSecurityUpdateGood className="text-4xl text-primary" />
    ),
  },
];

const WhyUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("why-us");
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
      id="why-us"
      className="relative py-20 w-full max-w-[90%] mx-auto justify-between bg-opacity-60 backdrop-blur-md"
    >
      <Decor />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 2 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-4xl font-bold drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent"
        >
          Why Choose ACP Loads
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="mt-4 text-lg"
        >
          Welcome to ACP Loads, the most dynamic and efficient trucking load
          board designed to streamline freight matching and optimize logistics.
          Whether you're a Carrier Dispatcher, Carrier, Broker, or Shipper, our
          platform is built to simplify your work and help you move freight
          faster than ever.
        </motion.p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.img
          src={img}
          alt="acp loads"
          className="lg:max-w-lg max-w-[100%] lg:py-22 rounded-2xl shadow-xl backdrop-blur-lg border border-white/10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5 }}
        />
        <div className="grid gap-6 md:gap-8">
          {whyUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="glassmorphism-card p-6 flex items-center gap-4 rounded-2xl border border-white/10 shadow-lg"
            >
              <div className="p-3 bg-white/10 rounded-xl">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
