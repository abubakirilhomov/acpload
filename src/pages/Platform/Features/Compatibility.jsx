import React from "react";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Compatibility = () => {
  const { t } = useTranslation();

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="relative flex items-center justify-center bg-cover bg-center min-h-screen w-full overflow-x-hidden"
      style={{
        backgroundImage:
          "url('https://www.trucknews.com/wp-content/uploads/2020/08/truck-freight.jpg')",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="relative z-10 w-full max-w-screen-xl px-6 py-12 text-white text-center"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-bold mb-8 drop-shadow-lg"
        >
          {t("features.integration-with-services.title")}
        </motion.h2>
        <div className="space-y-8 flex flex-col items-center">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: false }}
            className="bg-gray-800/80 backdrop-blur-md p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-white flex-shrink-0"
            >
              <FaMapMarkerAlt size={32} />
            </motion.div>
            <div className="text-left">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
                className="text-2xl font-bold text-white mb-2"
              >
                {t("features.integration-with-services.card-1.title")}
              </motion.h1>
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                className="list-disc list-inside text-white"
              >
                <li>
                  {t("features.integration-with-services.card-1.description-1")}
                </li>
                <li>
                  {t("features.integration-with-services.card-1.description-2")}
                </li>
              </motion.ul>
            </div>
          </motion.div>
          <motion.div
            variants={{ ...cardVariants, hidden: { opacity: 0, x: 50 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: false }}
            className="bg-gray-800/80 backdrop-blur-md p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-white flex-shrink-0"
            >
              <FaMapMarkerAlt size={32} />
            </motion.div>
            <div className="text-left">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
                className="text-2xl font-bold text-white mb-2"
              >
                {t("features.integration-with-services.card-2.title")}
              </motion.h1>
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                className="list-disc list-inside text-white"
              >
                <li>
                  {t("features.integration-with-services.card-2.description-1")}
                </li>
                <li>
                  {t("features.integration-with-services.card-2.description-2")}
                </li>
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Compatibility;
