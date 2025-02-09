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
    { key: "truckloads", label: "TRUCKLOADS POSTED ANNUALY", value: 57647643 },
    { key: "carriers", label: "Carriers", value: 265418 },
    { key: "opportunity", label: "AVAILABLE LOAD OPPORTUNITY", value: 147275129 },
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
    <section id="stats-section" className="py-24 px-8 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
        className="w-full max-w-5xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-base-content/10 backdrop-blur-md rounded-3xl p-12 text-center"
      >
        <h2 className="text-5xl font-bold mb-10">{t("Statistics")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData.map((stat, i) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white/10 backdrop-blur-md rounded-xl shadow-lg flex flex-col items-center border border-base-content/10"
            >
              {iconMap[stat.key]}
              <div className="text-lg font-semibold mt-4">{t(stat.label)}</div>
              <div className="text-3xl font-bold mt-2">
                {stat.key === "opportunity" ? "$" : ""}
                <CountUp end={stat.value} duration={2 + Math.random()} separator="," />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
