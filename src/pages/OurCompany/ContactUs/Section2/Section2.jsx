import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Section2 = () => {
  const { t } = useTranslation();

  const cards = [
    {
      title: t("contact-us.how-to-reach-us.card-1.title"),
      content: t("contact-us.how-to-reach-us.card-1.description"),
    },
    {
      title: t("contact-us.how-to-reach-us.card-2.title"),
      content: t("contact-us.how-to-reach-us.card-2.description"),
    },
    {
      title: t("contact-us.how-to-reach-us.card-3.title"),
      content: (
        <>
          {t("contact-us.how-to-reach-us.card-3.description")}{"\n"}
          <a
            href="mailto:partners@acploads.com"
            className="text-blue-400 underline"
          >
            {t("contact-us.how-to-reach-us.card-3.email")} partners@acploads.com
          </a>
        </>
      ),
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16 px-4 text-center">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-blue-400 mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t("contact-us.how-to-reach-us-title", "How to Reach Us")}
      </motion.h1>

      {/* Animated Cards */}
      <motion.div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 border border-gray-700 hover:border-blue-500 transition-all p-6 rounded-2xl shadow-md hover:shadow-blue-500/20 hover:scale-[1.03] duration-300 ease-in-out"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              {card.title}
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              {card.content}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Section2;
