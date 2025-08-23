import React from "react";
import { motion } from "framer-motion"; // framer-motion import qilinadi
import img from "../../../../assets/about2.jpg";
import { useTranslation } from "react-i18next";

const Section2 = () => {
  const { t } = useTranslation();

  // Animatsiya variantlari
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section>
      <div className="md:flex md:gap-5 md:items-center md:justify-center max-w-5xl mx-auto md:pb-16">
        <div>
          <motion.h2
            className="text-4xl font-semibold text-brand md:my-16 my-5 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={titleVariants}
          >
            {t("about-us.our-mission-title")}
          </motion.h2>
          <motion.p
            className="flex-1 md:text-xl px-2 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            {t("about-us.our-mission-description")}
          </motion.p>
        </div>
        <motion.img
          className="md:flex-1 mt-10 md:mt-0 md:max-w-md"
          src={img}
          alt="AcpLoads"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        />
      </div>
    </section>
  );
};

export default Section2;
