import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FiBell,
  FiMessageSquare,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { motion } from "framer-motion";

const Notifications = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const data = [
    {
      icon: <FiBell className="text-5xl mb-4" />,
      text: t("features.smart-matching.card-1.title"),
    },
    {
      icon: <FiMessageSquare className="text-5xl mb-4" />,
      text: t("features.smart-matching.card-2.title"),
    },
    {
      icon: <FiCheckCircle className="text-5xl mb-4" />,
      text: t("features.smart-matching.card-3.title"),
    },
    {
      icon: <FiAlertCircle className="text-5xl mb-4" />,
      text: t("features.smart-matching.card-4.title"),
    },
  ];

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen px-4 py-12 w-full bg-gradient-to-b from-black to-gray-900"
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
        className="text-3xl sm:text-4xl md:text-6xl font-bold text-white text-center mb-12"
      >
        {t("features.smart-matching.title")}
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl"
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
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255,255,255,0.2)",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            className="border border-white/30 bg-black/50 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center text-white font-semibold shadow-lg"
          >
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              {item.icon}
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="text-lg sm:text-xl text-center"
            >
              {item.text}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Notifications;
