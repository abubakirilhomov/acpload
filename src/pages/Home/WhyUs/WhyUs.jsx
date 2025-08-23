import React, { useState, useEffect } from "react";
import img from "/images/why-us.png";
import { FaUserCheck } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdOutlineSystemSecurityUpdateGood } from "react-icons/md";
import { motion } from "framer-motion";
import Decor from "../../../components/Decor/Decor";
import { SiApostrophe } from "react-icons/si";
import { useTranslation } from "react-i18next";

const whyUs = [
  {
    title: "main.why-choose.fast-posting-title",
    description: "main.why-choose.fast-posting-description",
    icon: <SiApostrophe className="text-4xl text-[#3f96d1]" />,
  },
  {
    title: "main.why-choose.user-interface-title",
    description: "main.why-choose.user-interface-description",
    icon: <FaUserCheck className="text-4xl text-[#3f96d1]" />,
  },
  {
    title: "main.why-choose.rating-review-title",
    description: "main.why-choose.rating-review-description",
    icon: <IoStatsChartSharp className="text-4xl text-[#3f96d1]" />,
  },
  {
    title: "main.why-choose.matching-system-title",
    description: "main.why-choose.matching-system-description",
    icon: (
      <MdOutlineSystemSecurityUpdateGood className="text-4xl text-[#3f96d1]" />
    ),
  },
];

const WhyUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("why-us");
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

  return (
    <section
      id="why-us"
      className="relative w-full max-w-[90%] mx-auto justify-between bg-opacity-60 backdrop-blur-md"
    >
      <Decor />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 2 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-3xl sm:text-4xl font-bold drop-shadow-lg"
        >
          {t("main.why-choose.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="mt-4 text-lg"
        >
          {t("main.why-choose.description")}
        </motion.p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.img
          src={img}
          alt="acp loads"
          className="lg:max-w-lg max-w-[100%] lg:pt-22 rounded-2xl shadow-xl backdrop-blur-lg border border-white/10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5 }}
        />
        <div className="grid gap-6 md:gap-8">
          {whyUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="glassmorphism-card p-6 flex items-center gap-4 rounded-2xl border border-white/10 shadow-lg"
            >
              <div className="p-3 bg-white/10 rounded-xl">{item?.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{t(item?.title)}</h3>
                <p className="text-sm mt-2">{t(item?.description)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
