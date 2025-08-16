import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Integrated = () => {
  const { t } = useTranslation();

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="relative flex items-center justify-center bg-cover bg-center min-h-screen w-full overflow-hidden"
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
          className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
        >
          {t("features.integrated-rating.title")}
        </motion.h2>
        <motion.div
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
          className="text-lg md:text-xl max-w-3xl mx-auto mb-12"
        >
          <motion.strong variants={textVariants} className="block mb-2">
            {t("features.integrated-rating.1.title")}
          </motion.strong>
          <motion.ul variants={textVariants} className="list-disc list-inside">
            <motion.li variants={textVariants}>
              {t("features.integrated-rating.1.description-1")}
            </motion.li>
            <motion.li variants={textVariants}>
              {t("features.integrated-rating.1.description-2")}
            </motion.li>
          </motion.ul>
          <motion.strong variants={textVariants} className="block mb-2 mt-4">
            {t("features.integrated-rating.2.title")}
          </motion.strong>
          <motion.ul variants={textVariants} className="list-disc list-inside">
            <motion.li variants={textVariants}>
              {t("features.integrated-rating.2.description-1")}
            </motion.li>
            <motion.li variants={textVariants}>
              {t("features.integrated-rating.2.description-2")}
            </motion.li>
          </motion.ul>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
        >
          {t("features.secure-and-interface.title")}
        </motion.h2>
        <motion.div
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
          className="text-lg md:text-xl max-w-3xl mx-auto"
        >
          <motion.strong variants={textVariants} className="block mb-2">
            {t("features.secure-and-interface.1.title")}
          </motion.strong>
          <motion.ul variants={textVariants} className="list-disc list-inside">
            <motion.li variants={textVariants}>
              {t("features.secure-and-interface.1.description-1")}
            </motion.li>
            <motion.li variants={textVariants}>
              {t("features.secure-and-interface.1.description-2")}
            </motion.li>
          </motion.ul>
          <motion.strong variants={textVariants} className="block mb-2 mt-4">
            {t("features.secure-and-interface.2.title")}
          </motion.strong>
          <motion.ul variants={textVariants} className="list-disc list-inside">
            <motion.li variants={textVariants}>
              {t("features.secure-and-interface.2.description-1")}
            </motion.li>
            <motion.li variants={textVariants}>
              {t("features.secure-and-interface.2.description-2")}
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Integrated;
