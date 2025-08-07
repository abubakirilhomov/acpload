import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaTruckMoving,
  FaUserTie,
  FaUsers,
  FaShippingFast,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const WhoCanBenefit = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("who-can-benefit");
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

  const roles = [
    {
      key: "dispatchers",
      icon: <FaTruckMoving className="text-4xl text-info" />,
    },
    {
      key: "carriers",
      icon: <FaUserTie className="text-4xl text-info" />,
    },
    {
      key: "brokers",
      icon: <FaUsers className="text-4xl text-info" />,
    },
    {
      key: "shippers",
      icon: <FaShippingFast className="text-4xl text-info" />,
    },
  ];

  return (
    <section
      id="who-can-benefit"
      className="py-16 px-6 md:px-16 lg:px-32 text-center"
    >
      <motion.h2
        className="text-4xl font-bold bg-clip-text drop-shadow-lg mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 2.5 }}
      >
        {t("main.who-benefits.title")}
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {roles.map((role, index) => (
          <motion.div
            key={role.key}
            className="card glassmorphism shadow-xl border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="card-body items-center text-start">
              <div className="mb-3">{role.icon}</div>
              <span className="badge badge-neutral text-lg p-3 mb-3">
                {t(`main.who-benefits.${role.key}`)}
              </span>
              <ul className="list-disc list-inside">
                <li className="mt-2">
                  {t(`main.who-benefits.${role.key}-benefit-1`)}
                </li>
                <li className="mt-2">
                  {t(`main.who-benefits.${role.key}-benefit-2`)}
                </li>
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhoCanBenefit;
