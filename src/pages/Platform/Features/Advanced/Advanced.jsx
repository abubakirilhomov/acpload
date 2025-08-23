import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Advanced = () => {
  const { t } = useTranslation();
  const images = [
    {
      src: "https://credotrans.ru/wp-content/uploads/2020/11/container_owner_new.jpg",
      alt: "Image 1",
    },
    {
      src: "https://www.contship.ru/manager/publikacii/universalnye-konteynery.jpg",
      alt: "Image 2",
    },
    {
      src: "https://img.linemedia.com/img/s/container-40ft-container---1651140669405367732_big--22042813082733074700.jpg",
      alt: "Image 3",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMdzupgIS2JUTH29nXL-VhRtYUB_MtcQDylg&s",
      alt: "Image 4",
    },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="relative w-full mt-5 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false }}
    >
      <div className="absolute inset-0 bg-black/60 z-10 flex flex-col items-center justify-center px-6 py-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false }}
          className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg"
        >
          {t("features.advanced-calculator.title")}
        </motion.h1>
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
          className="text-white text-sm md:text-lg max-w-3xl leading-relaxed"
        >
          <motion.strong variants={textVariants} className="block mb-2">
            {t("features.advanced-calculator.1.title")}
          </motion.strong>
          <motion.ul variants={textVariants} className="list-disc list-inside">
            <motion.li variants={textVariants}>
              {t("features.advanced-calculator.1.description-1")}
            </motion.li>
            <motion.li variants={textVariants}>
              {t("features.advanced-calculator.1.description-2")}
            </motion.li>
          </motion.ul>
          <motion.strong variants={textVariants} className="block mb-2 mt-4">
            {t("features.advanced-calculator.2.title")}
          </motion.strong>
          <motion.ul variants={textVariants} className="list-disc list-inside">
            <motion.li variants={textVariants}>
              {t("features.advanced-calculator.2.description-1")}
            </motion.li>
            <motion.li variants={textVariants}>
              {t("features.advanced-calculator.2.description-2")}
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0 h-[90vh]">
        {images.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            viewport={{ once: false }}
            className="relative w-full h-full overflow-hidden"
          >
            <img
              src={item?.src}
              alt={item?.alt}
              className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Advanced;
