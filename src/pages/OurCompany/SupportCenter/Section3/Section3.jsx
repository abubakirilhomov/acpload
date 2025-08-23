import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { IoCheckmarkCircle } from "react-icons/io5";

const Section3 = () => {
  const { t } = useTranslation();

  const topics = [
    t("support-center.support-topics.1"),
    t("support-center.support-topics.2"),
    t("support-center.support-topics.3"),
    t("support-center.support-topics.4"),
    t("support-center.support-topics.5"),
    t("support-center.support-topics.6"),
    t("support-center.support-topics.7"),
    t("support-center.support-topics.8"),
    t("support-center.support-topics.9"),
  ];

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
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="flex flex-col items-center justify-center text-white text-start p-4 md:p-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.p
        className="text-4xl font-medium mb-12 text-center"
        variants={itemVariants}
      >
        {t("support-center.support-topics.title")}
      </motion.p>
      <div className="flex flex-col lg:flex-row items-start justify-center md:gap-12 w-full">
        <motion.img
          className="w-1/2 border-2 border-brand shadow-sm shadow-white mx-auto sm:max-w-sm md:max-w-md"
          src="/images/think.png"
          alt="support"
          variants={itemVariants}
        />
        <motion.div
          className="lg:w-[90%] max-w-[45%] flex flex-col items-start justify-center gap-2 sm:gap-8 m-auto"
          variants={itemVariants}
        >
          {topics.map((topic, idx) => (
            <motion.div
              key={idx}
              className="flex items-start justify-center gap-2 sm:gap-4"
              variants={itemVariants}
            >
              <IoCheckmarkCircle className="text-brand" size={35} />
              <p className="text-sm sm:text-xl md:text-2xl">{topic}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section3;
