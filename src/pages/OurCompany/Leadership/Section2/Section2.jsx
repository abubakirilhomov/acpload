import React from "react";
import { motion } from "framer-motion";
import img1 from "../../../../assets/leaderboardicon1.png";
import img2 from "../../../../assets/leaderboardicon2.png";
import img3 from "../../../../assets/leaderboardicon3.png";
import img4 from "../../../../assets/leaderboardicon4.png";

const Section2 = () => {
  const cards = [
    {
      image: img1,
      title: "Integrity",
      desc: "We lead by example, upholding the highest ethical standards and putting our customers first in every decision.",
    },
    {
      image: img2,
      title: "Innovation",
      desc: "Our leaders are relentless about exploring new solutions, leveraging data, and staying ahead of trends to keep our platform and users competitive.",
    },
    {
      image: img3,
      title: "Collaboration",
      desc: "We work closely as a team—and with our users, partners, and industry stakeholders—to create real, lasting value for the entire logistics ecosystem.",
    },
    {
      image: img4,
      title: "Accountability",
      desc: "We own our results, welcome feedback, and hold ourselves responsible for continuous improvement and customer satisfaction.",
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
        Our Core Leadership Values
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-info text-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Section2;
