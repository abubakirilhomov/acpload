import React, { useState, useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Decor from "../../../components/Decor/Decor";

const TrustTransparency = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("trust-transparency");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ratingCategories = [
    {
      title: t("main.trust-and-transparency.carrier-rate-title"),
      items: Object.values(
        t("main.trust-and-transparency.carrier-rate", { returnObjects: true })
      ),
    },
    {
      title: t("main.trust-and-transparency.broker-rate-title"),
      items: Object.values(
        t("main.trust-and-transparency.broker-rate", { returnObjects: true })
      ),
    },
  ];

  return (
    <section
      id="trust-transparency"
      className="container max-w-[90%] bg-opacity-80 backdrop-blur-lg mx-auto space-y-6 mt-10"
    >
      <Decor />

      <motion.p
        className="sm:text-4xl text-3xl font-bold text-center drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
      >
        {t("main.trust-and-transparency.title")}
      </motion.p>

      <motion.p
        className="text-center text-lg"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {t("main.trust-and-transparency.description")}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ratingCategories.map((category, idx) => (
          <motion.div
            key={idx}
            className="card backdrop-blur-xl border border-white/20 p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2 * idx, duration: 0.8 }}
          >
            <h3 className="text-lg font-light text-info">{category.title}</h3>
            <ul className="mt-2 space-y-2 pt-3">
              {category.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FiCheckCircle className="text-xl text-yellow-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex justify-center mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <button className="btn bg-[#3f96d1] text-white btn-primary btn-lg">
          {t("btn-input-texts.learn-more", "Learn More")}
        </button>
      </motion.div>
    </section>
  );
};

export default TrustTransparency;
