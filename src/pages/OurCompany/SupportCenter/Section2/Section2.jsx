import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { BsFillQuestionSquareFill, BsNewspaper } from "react-icons/bs";

const Section2 = () => {
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
    <motion.section
      className="bg-brand/10 flex flex-col items-center justify-center text-white px-4 py-14 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.p
        className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-12"
        variants={itemVariants}
      >
        {t("support-center.how-can-we-help.title")}
      </motion.p>

      <div className="flex flex-col justify-center items-start md:flex-row w-full max-w-5xl gap-10">
        {/* Left Panel */}
        <motion.div
          className="flex flex-col items-start justify-center border-b-2 md:border-b-0 md:border-r-2 border-brand md:h-80 md:pr-10 w-full md:w-1/2 gap-8"
          variants={itemVariants}
        >
          <div className="flex flex-col justify-center items-start gap-4 w-full ml-8">
            <p className="text-2xl md:text-3xl font-medium">
              {t("support-center.how-can-we-help.sub-title")}
            </p>
            <p className="text-sm sm:text-lg">
              <span className="font-bold">
                {t("support-center.how-can-we-help.1.title")}
              </span>{" "}
              {t("support-center.how-can-we-help.1.description")}
            </p>
            <p className="text-base sm:text-lg">
              <span className="font-bold">
                {t("support-center.how-can-we-help.2.title")}
              </span>{" "}
              {t("support-center.how-can-we-help.2.description")}
            </p>
            <motion.button
              className="bg-brand text-white py-2 w-40 hover:bg-blue-500 transition mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("btn-input-texts.contact-us")}
            </motion.button>
          </div>
        </motion.div>

        {/* Right Panel */}
        <motion.div
          className="flex flex-col w-full md:w-1/2"
          variants={itemVariants}
        >
          {[
            {
              icon: (
                <LuMessageCircleQuestion className="text-5xl sm:text-6xl text-brand" />
              ),
              title: t("support-center.how-can-we-help.3.title"),
              text: t("support-center.how-can-we-help.3.description"),
            },
            {
              icon: (
                <BsFillQuestionSquareFill
                  size={40}
                  className="sm:text-6xl text-brand"
                />
              ),
              title: t("support-center.how-can-we-help.4.title"),
              text: t("support-center.how-can-we-help.4.description"),
            },
            {
              icon: (
                <BsNewspaper className="text-5xl sm:text-6xl text-brand" />
              ),
              title: t("support-center.how-can-we-help.5.title"),
              text: t("support-center.how-can-we-help.5.description"),
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-6 p-4 rounded-lg">
              {item?.icon}
              <div>
                <p className="font-bold">{item?.title}</p>
                <p>{item?.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section2;
