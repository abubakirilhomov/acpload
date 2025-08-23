import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Notifications from "./Notifications/Notifications";
import Statistics from "./Statistics/Statistics";
import Advanced from "./Advanced/Advanced";
import Integrated from "./Integrated/Integrated";
import Compatibility from "./Compatibility/Compatibility";

const Features = () => {
  const { t } = useTranslation();

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
      width: "100%",
    },
  };

  return (
    <div className="relative flex flex-col items-center justify-between bg-gradient-to-br from-[#050A30] to-[#0A1F3A] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="relative shadow-2xl px-6 sm:px-10 lg:px-20 py-12 sm:py-16 rounded-3xl w-full max-w-screen-xl flex flex-col items-center justify-center text-white text-center space-y-8 sm:space-y-10 z-20 mt-20"
        style={{
          background: "linear-gradient(145deg, #0a0f29, #06142e)",
          borderRadius: "40px",
          overflow: "hidden",
          border: "3px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 0 60px rgba(0, 255, 255, 0.3)",
        }}
      >
        <div className="absolute h-full inset-0 bg-black/40 rounded-3xl"></div>
        <h2
          className="text-3xl sm:text-5xl lg:text-7xl font-extrabold uppercase drop-shadow-xl relative z-10"
          style={{
            background: "linear-gradient(to right, #00BFFF, #00FA9A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t("features.title")}
        </h2>
        <p className="text-base sm:text-xl lg:text-2xl text-gray-200 max-w-5xl leading-relaxed relative z-10">
          {t("features.description")}
        </p>
      </motion.div>

      <motion.div
        className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-14 w-full max-w-screen-xl px-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, ease: "easeInOut" },
          },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative shadow-xl p-8 sm:p-10 lg:p-14 rounded-3xl w-full h-[400px] sm:h-[450px] lg:h-[500px] flex flex-col items-center justify-center text-white text-center overflow-hidden"
          style={{
            backgroundImage: `url('/images/aa.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "4px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 0 50px rgba(0, 255, 255, 0.4)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 rounded-3xl"></div>
          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold relative z-10 drop-shadow-md"
          >
            {t("features.fast-and-easy.1.title")}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            className="text-base sm:text-xl lg:text-2xl text-gray-200 relative z-10 max-w-[90%] mt-4"
          >
            {t("features.fast-and-easy.1.description-1")}
          </motion.p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.05, rotate: -1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative shadow-xl p-8 sm:p-10 lg:p-14 rounded-3xl w-full h-[400px] sm:h-[450px] lg:h-[500px] flex flex-col items-center justify-center text-white text-center overflow-hidden"
          style={{
            backgroundImage: `url('/images/ss.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "4px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 0 50px rgba(255, 165, 0, 0.4)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 rounded-3xl"></div>
          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold relative z-10 drop-shadow-md"
          >
            {t("features.fast-and-easy.2.title")}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            className="text-base sm:text-xl lg:text-2xl text-gray-200 relative z-10 max-w-[90%] mt-4"
          >
            {t("features.fast-and-easy.2.description-1")}
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <Advanced />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <Notifications />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <Integrated />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <Statistics />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <Compatibility />
      </motion.div>
    </div>
  );
};

export default Features;
