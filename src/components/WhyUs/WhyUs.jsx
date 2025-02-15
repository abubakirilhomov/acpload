import React from "react";
import img from "/images/why-us.png";
import { FaUserCheck } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdOutlineSystemSecurityUpdateGood } from "react-icons/md";
import { motion } from "framer-motion";
import Decor from "../Decor/Decor";
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
    icon: <MdOutlineSystemSecurityUpdateGood className="text-4xl text-primary" />,
  },
];

const WhyUs = () => {
  return (
    <div className="relative py-20 px-6 md:px-16 lg:px-32 bg-opacity-60 backdrop-blur-md">
      <Decor />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-4xl font-bold drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">Why Choose ACP Loads</h2>
        <p className="mt-4 text-lg">
          Welcome to ACP Loads, the most dynamic and efficient trucking load board designed to streamline freight
          matching and optimize logistics. Whether you're a Carrier Dispatcher, Carrier, Broker, or Shipper, our
          platform is built to simplify your work and help you move freight faster than ever.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <motion.img
          src={img}
          alt="acp loads"
          className="max-w-md rounded-2xl shadow-xl backdrop-blur-md border border-white/10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="grid gap-6 md:gap-8">
          {whyUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glassmorphism-card p-6 flex items-center gap-4 rounded-2xl border border-white/10 shadow-lg"
            >
              <div className="p-3 bg-white/10 rounded-xl">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold ">{item.title}</h3>
                <p className="text-sm mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
