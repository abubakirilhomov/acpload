import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import Button from "../../../../components/Button/Button";
import Decor from "../../../../components/Decor/Decor";

const WhoBenefits = () => {
  const { t, ready } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  if (!ready) return <p>Loading translations...</p>;

  const benefits = [
    {
      title: t("how-it-works.who-benefits.card-1.title"),
      description: t("how-it-works.who-benefits.card-1.description"),
    },
    {
      title: t("how-it-works.who-benefits.card-2.title"),
      description: t("how-it-works.who-benefits.card-2.description"),
    },
    {
      title: t("how-it-works.who-benefits.card-3.title"),
      description: t("how-it-works.who-benefits.card-3.description"),
    },
  ];

  return (
    <section ref={ref} className="text-white py-16">
      <Decor />
      <div className="max-w-[90%] w-full mx-auto text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          {t("how-it-works.who-benefits.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-lg mb-12"
        >
          {t("how-it-works.who-benefits.sub-title")}
        </motion.p>

        <div className="flex flex-col lg:flex-row w-full gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              className="p-8 flex flex-1 flex-col items-center text-center bg-white/10 rounded-2xl border border-white/20 cursor-pointer select-none shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-white hover:scale-105 transition-transform duration-300 min-h-60"
            >
              <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-base opacity-90 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        >
          <Button text={t("btn-input-texts.get-access-now")} />
        </motion.div>
      </div>
    </section>
  );
};

export default WhoBenefits;
