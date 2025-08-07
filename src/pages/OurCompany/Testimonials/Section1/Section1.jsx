import React from "react";
import { motion } from "framer-motion";
import bgImg from "../../../../assets/testimonials.jpeg";
import { useTranslation } from "react-i18next";

const Section1 = () => {
  const { t } = useTranslation();
  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Animated content container */}
      <div className="relative max-w-[90%] md:max-w-screen-xl mx-auto py-20 z-10">
        <motion.div
          className="border-8 py-10 px-5 text-white border-info max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="md:text-6xl text-4xl font-bold text-info"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t("testimonials-and-reviews.title")}
          </motion.h1>

          <motion.p
            className="md:text-3xl text-2xl my-7"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t("testimonials-and-reviews.sub-title")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {t("testimonials-and-reviews.description")}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Section1;
