import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import Button from "../../../../components/Button/Button";
import { FaAngleDoubleDown } from "react-icons/fa";

const Showcase = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { t, ready } = useTranslation();

  if (!ready) return <p>Loading translations...</p>;

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={ref}
      className="w-full bg-cover bg-center relative min-h-screen flex justify-start items-start md:justify-center md:items-center flex-col text-white text-center py-18 md:py-16"
      style={{ backgroundImage: "url('/images/acp-bg-2.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#081621] opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-6 px-4 md:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
        >
          {t("how-it-works.title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl leading-relaxed"
        >
          {t("how-it-works.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        >
          <Button text={t("how-it-works.sub-title")} />
        </motion.div>
      </div>
      <button
        onClick={handleScroll}
        className="absolute bottom-10 text-primary animate-bounce cursor-pointer"
      >
        <FaAngleDoubleDown size={40} />
      </button>
    </section>
  );
};

export default Showcase;
