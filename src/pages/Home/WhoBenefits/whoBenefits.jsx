import React from "react";
import { motion } from "framer-motion";
import { Truck, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const whoBenefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("how-it-works");
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  const cards = [
    {
      title: t("main.who-benefits.dispatchers"),
      description: `${t("main.who-benefits.dispatchers-benefit-1")} ${t(
        "main.who-benefits.dispatchers-benefit-2"
      )}`,
      icon: <Clock className="w-6 h-6 text-primary" />,
    },
    {
      title: t("main.who-benefits.brokers"),
      description: `${t("main.who-benefits.brokers-benefit-1")} ${t(
        "main.who-benefits.brokers-benefit-2"
      )}`,
      icon: <Truck className="w-6 h-6 text-primary" />,
    },
    {
      title: t("main.who-benefits.carriers"),
      description: `${t("main.who-benefits.carriers-benefit-1")} ${t(
        "main.who-benefits.carriers-benefit-2"
      )}`,
      icon: <Truck className="w-6 h-6 text-primary" />,
    },
    {
      title: t("main.who-benefits.shippers"),
      description: `${t("main.who-benefits.shippers-benefit-1")} ${t(
        "main.who-benefits.shippers-benefit-2"
      )}`,
      icon: <Clock className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-24 px-8 bg-base-200 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isVisible ? { opacity: 0.6, scale: 1 } : {}}
        transition={{ duration: 2 }}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-primary/30 to-secondary/30 rounded-full blur-[120px] -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isVisible ? { opacity: 0.4, scale: 1 } : {}}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-secondary/20 to-accent/20 rounded-full blur-[100px] -z-10"
      />

      <div className="max-w-6xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">
            {t("main.who-benefits.title")}
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-base-content/80">
            {t("main.sub-text")}
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link to="/services">
              <button className="px-8 py-3 text-lg font-semibold bg-primary/90 hover:bg-primary text-primary-content rounded-xl backdrop-blur-sm shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-300">
                {t("btn-input-texts.sign-up-now")}
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="relative flex items-center backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] min-h-[40vh] max-h-[40vh] bg-base-100/30 p-8 rounded-2xl border border-base-content/10">
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 mb-6 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="text-[#a3a3a3] mb-4">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default whoBenefits;
