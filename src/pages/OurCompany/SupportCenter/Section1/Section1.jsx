import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Section1 = () => {
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
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="flex items-center justify-center bg-cover bg-center text-white relative p-4 sm:p-8 md:p-12 lg:p-25"
      style={{
        backgroundImage:
          "url('https://assets.nicepagecdn.com/11a8ddce/3543521/images/pexels-christina-morillo-1181435.jpg')",
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 bg-[#081621] opacity-40"></div>
      <motion.div
        className="relative z-10 w-[85%] max-w-3xl space-y-4 bg-gray-300/40 rounded-r-4xl p-6 sm:p-8 md:ml-[-8rem]"
        variants={itemVariants}
      >
        <motion.p className="text-xl sm:text-2xl" variants={itemVariants}>
          {t("support-center.support-center")}
        </motion.p>
        <motion.p
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          variants={itemVariants}
        >
          {t("support-center.title")}
        </motion.p>
        <motion.p
          className="text-base sm:text-lg md:text-xl"
          variants={itemVariants}
        >
          {t("support-center.description")}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Section1;
