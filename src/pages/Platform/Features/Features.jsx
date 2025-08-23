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
    <div className="relative flex flex-col items-center justify-between bg-gradient-to-br from-[#050A30] to-[#0A1F3A] overflow-hidden py-16">
 

      {/* Main Content Section */}
      <div className="w-full max-w-screen-xl px-4 mt-16">
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Empower Your Freight Operations
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              Discover a cutting-edge loadboard platform designed to streamline your US trucking logistics. 
              With our intuitive interface, you can quickly post and search for loads, leverage smart matching 
              with real-time notifications, and utilize advanced tools—like a freight rate calculator and live 
              loadboard statistics—to make data-driven decisions. Our secure, mobile-friendly solution, integrated 
              with top mapping services, ensures efficient routing and enhanced productivity across
               your entire operation.
            </p>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}

          >
            <img 
              src="https://mir-s3-cdn-cf.behance.net/projects/404/609bcd178641085.Y3JvcCw4MDgsNjMyLDAsMA.jpg" 
              alt="Truck on highway" 
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div
          className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-14 w-full"
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
            whileHover={{ scale: 1.05 }}
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
            whileHover={{ scale: 1.05 }}
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

        {/* Additional Feature Sections */}
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
    </div>
  );
};

export default Features;