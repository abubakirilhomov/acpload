import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HowToSignUp = () => {
  const { t, ready } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  if (!ready) return <p>Loading translations...</p>;

  const steps = [
    {
      number: "1",
      title: t("how-it-works.how-to-sign-up.card-1.title"),
      description: t("how-it-works.how-to-sign-up.card-1.description"),
    },
    {
      number: "2",
      title: t("how-it-works.how-to-sign-up.card-2.title"),
      description: t("how-it-works.how-to-sign-up.card-2.description"),
    },
    {
      number: "3",
      title: t("how-it-works.how-to-sign-up.card-3.title"),
      description: t("how-it-works.how-to-sign-up.card-3.description"),
    },
    {
      number: "4",
      title: t("how-it-works.how-to-sign-up.card-4.title"),
      description: t("how-it-works.how-to-sign-up.card-4.description"),
    },
  ];

  return (
    <section ref={ref} className="w-full h-full py-16 text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold mb-14"
      >
        {t("how-it-works.how-to-sign-up.title")}
      </motion.h2>

      <div className="max-w-[90%] w-full mx-auto flex flex-wrap justify-center gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative flex-1 min-w-[250px] p-8 flex flex-col items-center text-center bg-white/10 rounded-2xl border border-white/20 cursor-pointer select-none shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-white backdrop-blur-md"
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center text-white text-2xl font-bold bg-info dark:bg-blue-500 rounded-full shadow-lg">
              {step.number}
            </div>

            <h3 className="text-2xl font-semibold mt-6">{step.title}</h3>

            <p className="text-gray-300 mt-3">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowToSignUp;