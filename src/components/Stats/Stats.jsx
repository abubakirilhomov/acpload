"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import { FiTruck, FiUsers, FiDollarSign } from "react-icons/fi";

const iconMap = {
  truckloads: <FiTruck className="text-6xl text-white" />,
  carriers: <FiUsers className="text-6xl text-white" />,
  opportunity: <FiDollarSign className="text-6xl text-white" />,
};

const Stats = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  
  const statsData = [
    { key: "truckloads", label: "Truck Loads", value: 1200 },
    { key: "carriers", label: "Carriers", value: 500 },
    { key: "opportunity", label: "Opportunities", value: 3000000 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("stats-section");
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
      id="stats-section"
      className="relative py-24 px-8 bg-base-200 text-base-content overflow-hidden"
    >
      {/* Фоновые элементы */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isVisible ? { opacity: 0.6, scale: 1 } : {}}
        transition={{ duration: 2 }}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-primary/30 to-secondary/30 rounded-full blur-[120px] -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isVisible ? { opacity: 0.4, scale: 1 } : {}}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-secondary/20 to-accent/20 rounded-full blur-[100px] -z-10"
      />

      <div className="max-w-6xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            {t("")}
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {statsData.map((stat, i) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="group p-6 bg-gradient-to-br from-blue-950 to-blue-900 rounded-2xl shadow-xl text-center flex flex-col items-center gap-3 cursor-pointer border border-blue-400"
            >
              {iconMap[stat.key]}
              <div className="text-sm text-blue-300 font-semibold uppercase">{t(stat.label)}</div>
              <div className="text-4xl font-bold text-white drop-shadow-lg">
                {stat.key === "opportunity" ? "$" : ""}
                <CountUp end={stat.value} duration={2 + Math.random()} separator="," />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
