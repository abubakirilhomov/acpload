import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import TextType from "../../../../components/ReactBits/TextType";

const Section4 = () => {
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
      className="bg-blue-400/10 flex items-center justify-center text-white px-4 py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-10">
        {/* Left Block */}
        <motion.div
          className="flex flex-col items-start justify-center w-full lg:w-1/2"
          variants={itemVariants}
        >
          <div className="w-full mx-auto">
            <div className="text-4xl text-blue-500 font-semibold">
              <TextType
                text={[
                  t("support-center.submit-request.title"),
                  t("support-center.submit-request.title"),
                ]}
                typingSpeed={80}
                deletingSpeed={40}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>
            <p className="text-3xl md:text-4xl font-semibold mb-6 md:mb-12"></p>
            <div className="bg-[#3e5364] p-6 md:p-8 w-full rounded">
              <p className="text-base leading-relaxed">
                {t("support-center.submit-request.description")}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Block (Form) */}
        <motion.div
          className="bg-[#4e7394] p-6 md:p-8 w-full lg:w-[400px] rounded"
          variants={itemVariants}
        >
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-semibold mb-1">
                {t("btn-input-texts.full-name")}
              </label>
              <input
                type="text"
                id="name"
                placeholder={t("btn-input-texts.enter-name")}
                className="w-full p-2 text-gray-800 bg-white rounded-sm outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-1">
                {t("btn-input-texts.email")}
              </label>
              <input
                type="email"
                id="email"
                placeholder={t("btn-input-texts.enter-email")}
                className="w-full p-2 text-gray-800 bg-white rounded-sm outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold mb-1">
                {t("btn-input-texts.msg")}
              </label>
              <textarea
                id="message"
                rows="6"
                placeholder={t("btn-input-texts.enter-msg")}
                className="w-full p-2 text-gray-800 bg-white rounded-sm outline-none resize-none"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="bg-[#5a9bd8] text-white px-4 py-2 mt-2 hover:bg-[#488dc7] transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("btn-input-texts.submit")}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section4;
