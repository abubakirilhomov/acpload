import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle, Star, Users } from "lucide-react";

const cardData = [
  {
    id: 1,
    icon: <Star className="text-5xl text-info mb-4" />,
    title: "Transparent Reviews",
    description:
      "After each shipment, both parties can leave detailed feedback on communication, service quality, and reliability.",
  },
  {
    id: 2,
    icon: <Users className="text-5xl text-info mb-4" />,
    title: "Build Your Reputation",
    description:
      "High ratings help build credibility, attract more business, and foster strong partnerships.",
  },
  {
    id: 3,
    icon: <CheckCircle className="text-5xl text-info mb-4" />,
    title: "Grow Your Network",
    description:
      "Consistently great service boosts your visibility, leading to more opportunities and trust in the industry.",
  },
];

const ReviewRateGrow = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="bg-[#0F172A] text-white py-16 px-4 max-w-[90%] mx-auto w-full">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Review, Rate, & Grow
      </motion.h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {cardData.map((card, index) => (
          <motion.div
            key={card.id}
            className="bg-gradient-to-b from-[#1E293B] to-[#0F172A] rounded-2xl p-8 w-full md:w-1/3 text-center flex flex-col items-center shadow-xl min-h-[300px]"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {card.icon}
            <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
            <p className="text-gray-400">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ReviewRateGrow;
