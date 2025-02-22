import React from "react";
import { FaHandshake, FaChartLine, FaBolt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyOurProcessWorks = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const features = [
    {
      icon: <FaBolt className="text-info text-4xl" />,
      title: "Efficiency",
      description:
        "The combination of a streamlined sign-up, smart load matching, and instant notifications means less downtime and more freight movement.",
    },
    {
      icon: <FaHandshake className="text-info text-4xl" />,
      title: "Trust & Transparency",
      description:
        "Our review system ensures that every user is held accountable, building a trusted community where every transaction is backed by real feedback.",
    },
    {
      icon: <FaChartLine className="text-info text-4xl" />,
      title: "Growth",
      description:
        "By connecting shippers, brokers, carriers, and owner-operators on one platform, you can reduce empty miles, optimize your operations, and ultimately grow your business.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-r from-[#0D1B2A] to-[#1B263B] text-white py-16"
    >
      <div className="max-w-[90%] mx-auto flex flex-col md:flex-row md:gap-10 gap-6 justify-between items-between">
        {/* Left Side: Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-1/2 flex items-center justify-between"
        >
          <img
            src="/images/acp-why-works.png"
            alt="Worker using a laptop"
            className="rounded-lg shadow-2xl w-full h-auto max-w-xl object-cover"
          />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
            Why Our Process Works
          </h2>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-center md:items-center space-x-4 p-4 rounded-2xl min-h-42 bg-white/10"
              >
                {/* Icon */}
                <div className="p-3 bg-white/20 rounded-full shadow-md">
                  {feature.icon}
                </div>
                {/* Text */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-300 mt-2 text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyOurProcessWorks;
