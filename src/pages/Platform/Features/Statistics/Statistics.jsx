import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FiBell,
  FiMessageSquare,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const Statistics = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  const data = [
    {
      icon: <FiBell className="text-5xl mb-2" />,
      text: t("features.comprehensive-loadboard.card-1.title"),
      description: t("features.comprehensive-loadboard.card-1.description"),
    },
    {
      icon: <FiMessageSquare className="text-5xl mb-2" />,
      text: t("features.comprehensive-loadboard.card-2.title"),
      description: t("features.comprehensive-loadboard.card-2.description"),
    },
    {
      icon: <FiCheckCircle className="text-5xl mb-2" />,
      text: t("features.comprehensive-loadboard.card-3.title"),
      description: t("features.comprehensive-loadboard.card-3.description"),
    },
    {
      icon: <FiAlertCircle className="text-5xl mb-2" />,
      text: t("features.comprehensive-loadboard.card-4.title"),
      description: t("features.comprehensive-loadboard.card-4.description"),
    },
  ];

  return (
    <motion.div
      className="flex flex-col w-full items-center justify-center min-h-screen px-4 py-16 bg-gradient-to-br from-[#1e1e2f] to-[#2a2a3f]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white text-center mb-4"
      >
        {t("features.comprehensive-loadboard.title")}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="text-white text-lg sm:text-xl text-center mb-12"
      >
        {t("features.comprehensive-loadboard.sub-title")}
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-5xl"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, ease: "easeInOut" },
          },
        }}
        viewport={{ once: false }}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 30px rgba(255,255,255,0.1)",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            className="relative bg-gray-800/80 border border-white/20 rounded-2xl shadow-xl px-6 py-8 flex flex-col items-center justify-center text-white backdrop-blur-sm"
          >
            <div className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full">
              <FaCheck className="text-white text-sm" />
            </div>
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {item?.icon}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
              className="text-xl sm:text-2xl font-semibold mt-2"
            >
              {item?.text}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="text-sm sm:text-base text-gray-300 text-center mt-2"
            >
              {item?.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Statistics;
