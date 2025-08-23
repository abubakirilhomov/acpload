import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import bgImg from "../../../../assets/pexels-quintingellar-2199293.jpg";

const Section5 = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="relative bg-cover bg-center py-16 px-4"
      style={{ backgroundImage: `url(${bgImg})` }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.p
          className="text-4xl md:text-5xl font-semibold text-brand mb-6"
          variants={itemVariants}
        >
          {t("testimonials-and-reviews.share-your-story.title")}
        </motion.p>
        <motion.p
          className="text-white text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          {t("testimonials-and-reviews.share-your-story.description-1")}{" "}
          {t("testimonials-and-reviews.share-your-story.description-2")}
        </motion.p>

        <motion.div
          className="flex flex-col justify-center md:flex-row md:gap-5 max-w-[80%] mx-auto pb-10"
          variants={itemVariants}
        >
          <motion.button
            className="bg-brand text-white px-10 md:px-20 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 mb-5 md:mb-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("btn-input-texts.leave-a-testimonial")}
          </motion.button>

          <motion.button
            className="bg-white text-black px-10 md:px-20 py-3 rounded-full hover:bg-brand hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("btn-input-texts.view-all-reviews")}
          </motion.button>
        </motion.div>

        <motion.p
          className="text-gray-300 text-sm md:text-base"
          variants={itemVariants}
        >
          {t("testimonials-and-reviews.share-your-story.sub-text")}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Section5;
