import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { BsFillQuestionSquareFill, BsNewspaper } from "react-icons/bs";

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
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="flex flex-col items-center justify-center text-white text-start gap-4 p-4 md:m-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="w-full max-w-6xl">
        <div className="flex flex-col justify-center items-center gap-5">
          <motion.p
            className="text-3xl sm:text-4xl md:text-5xl mb-12 font-semibold text-center"
            variants={itemVariants}
          >
            {t("support-center.how-can-we-help.title")}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row p-4 md:p-12 justify-center items-center gap-8 mt-6 md:mt-12">
          {/* Left Panel */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-start gap-4"
            variants={itemVariants}
          >
            <div className="flex flex-col justify-center items-start">
              {[
                {
                  icon: (
                    <LuMessageCircleQuestion className="text-5xl sm:text-6xl text-blue-400" />
                  ),
                  title: t("support-center.how-can-we-help.3.title"),
                  text: t("support-center.how-can-we-help.3.description"),
                },
                {
                  icon: (
                    <BsFillQuestionSquareFill className="text-5xl sm:text-6xl text-blue-400" />
                  ),
                  title: t("support-center.how-can-we-help.4.title"),
                  text: t("support-center.how-can-we-help.4.description"),
                },
                {
                  icon: (
                    <BsNewspaper className="text-5xl sm:text-6xl text-blue-400" />
                  ),
                  title: t("support-center.how-can-we-help.5.title"),
                  text: t("support-center.how-can-we-help.5.description"),
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4 p-6 rounded-lg"
                  variants={itemVariants}
                >
                  {item?.icon}
                  <div>
                    <p className="font-bold">{item?.title}</p>
                    <p>{item?.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Panel: Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center items-center"
            variants={itemVariants}
          >
            <div className="w-full max-w-md">
              <img
                src="https://assets.nicepagecdn.com/d2cc3eaa/6493730/images/bankers-working4.jpg"
                alt="Support image"
                className="rounded"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Section5;
