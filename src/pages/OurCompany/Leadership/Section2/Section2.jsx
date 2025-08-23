import React from "react";
import { motion } from "framer-motion";
import img1 from "../../../../assets/leaderboardicon1.png";
import img2 from "../../../../assets/leaderboardicon2.png";
import img3 from "../../../../assets/leaderboardicon3.png";
import img4 from "../../../../assets/leaderboardicon4.png";
import { useTranslation } from "react-i18next";

const Section2 = () => {
  const { t } = useTranslation();
  const cards = [
    {
      image: img1,
      title: "leadership.our-core.1.title",
      desc: "leadership.our-core.1.description",
    },
    {
      image: img2,
      title: "leadership.our-core.2.title",
      desc: "leadership.our-core.2.description",
    },
    {
      image: img3,
      title: "leadership.our-core.3.title",
      desc: "leadership.our-core.3.description",
    },
    {
      image: img4,
      title: "leadership.our-core.4.title",
      desc: "leadership.our-core.4.description",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 py-12"
    >
      <motion.p
        className="text-4xl text-center mt-10 font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {t("leadership.our-core.title")}
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-[#3f96d1] text-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={card.image} alt={t(card.title)} className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t(card.title)}</h3>
            <p className="text-sm">{t(card.desc)}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Section2;
