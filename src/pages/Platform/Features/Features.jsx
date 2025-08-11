import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Notifications from "./Notifications";
import Statistics from "./Statistics";
import Advanced from "./Advanced";
import Integrated from "./Integrated";
import Compatibility from "./Compatibility";

const Features = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen bg-gradient-to-r from-[#050A30] to-[#08142B] pb-40 px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(0, 255, 255, 0.5)" }}
        className="relative shadow-2xl px-6 sm:px-10 lg:px-20 py-12 sm:py-16 rounded-3xl w-full max-w-screen-xl flex flex-col items-center justify-center text-white text-center space-y-8 sm:space-y-10 z-20 mt-20"
        style={{
          background: "linear-gradient(145deg, #0a0f29, #06142e)",
          borderRadius: "40px",
          overflow: "hidden",
          border: "3px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "15px 15px 40px #020617, -15px -15px 40px #0f172a",
        }}
      >
        <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>

        <h2
          className="text-3xl sm:text-5xl lg:text-7xl font-extrabold uppercase drop-shadow-lg relative z-10"
          style={{
            background: "linear-gradient(to right, #007CF0, #00DFD8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t("features.title")}
        </h2>

        <p className="text-base sm:text-xl lg:text-2xl text-gray-300 max-w-5xl leading-relaxed relative z-10">
          {t("features.description")}
        </p>
      </motion.div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-14">
        {/* First Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileHover={{ scale: 1.08, rotate: 2 }}
          className="relative shadow-xl p-8 sm:p-10 lg:p-14 rounded-2xl w-full h-[400px] sm:h-[450px] lg:h-[500px] flex flex-col items-center justify-center text-white text-center"
          style={{
            backgroundImage: `url('/images/aa.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "4px solid rgba(255, 255, 255, 0.4)",
            boxShadow: "0 0 50px rgba(0, 255, 255, 0.4)",
          }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold relative z-10">
            {t("features.fast-and-easy.1.title")} {/* Example, adjust as needed */}
          </h3>
          <p className="text-base sm:text-xl lg:text-2xl text-gray-300 relative z-10 max-w-[90%]">
            {t("features.fast-and-easy.1.description-1")} {/* Example, adjust as needed */}
          </p>
        </motion.div>

        {/* Second Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileHover={{ scale: 1.08, rotate: -2 }}
          className="relative shadow-xl p-8 sm:p-10 lg:p-14 rounded-2xl w-full h-[400px] sm:h-[450px] lg:h-[500px] flex flex-col items-center justify-center text-white text-center"
          style={{
            backgroundImage: `url('/images/ss.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "4px solid rgba(255, 255, 255, 0.4)",
            boxShadow: "0 0 50px rgba(255, 165, 0, 0.4)",
          }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold relative z-10">
            {t("features.fast-and-easy.2.title")} {/* Example, adjust as needed */}
          </h3>
          <p className="text-base sm:text-xl lg:text-2xl text-gray-300 relative z-10 max-w-[90%]">
            {t("features.fast-and-easy.2.description-1")} {/* Example, adjust as needed */}
          </p>
        </motion.div>
      </div>

      <Advanced />
      <Notifications />
      <Integrated />
      <Statistics />
      <Compatibility />
    </div>
  );
};

export default Features;