import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import img from "../../../../assets/our-commit.jpg";

const Section7 = () => {
  const { t } = useTranslation();

  const commitments = [
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: t("about-us.our-commitment.1"),
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: t("about-us.our-commitment.2"),
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      title: t("about-us.our-commitment.3"),
    },
  ];

  const partners = [
    { name: "Magellan Transport Logistics", color: "text-red-500" },
    { name: "LANDSTAR", color: "text-blue-600" },
    { name: "FedEx", color: "text-purple-600" },
    { name: "UNITED STATES POSTAL SERVICE", color: "text-blue-500" },
    { name: "OSRM", color: "text-blue-400" },
  ];

  // Animatsiya variantlari
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const commitmentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.6, ease: "easeOut" },
    },
  };

  const partnerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 + 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content - Commitments */}
          <div className="space-y-8">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-blue-400 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={titleVariants}
            >
              {t("about-us.our-commitment.title")}
            </motion.h2>

            {/* Commitment Points */}
            <div className="space-y-6">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={commitmentVariants}
                >
                  <motion.div
                    className="flex-shrink-0 mt-1"
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {commitment.icon}
                  </motion.div>
                  <div>
                    <span className="text-white font-semibold text-lg">
                      {commitment.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img src={img} alt="Acp Loads" />
            </div>
          </motion.div>
        </div>

        {/* Partner Logos Section */}
        <motion.div
          className="border-t border-gray-700 pt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={partnerVariants}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="text-center"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={partnerVariants}
              >
                <motion.div
                  className={`font-bold text-lg lg:text-xl ${partner.color} hover:scale-110 transition-transform duration-300`}
                  whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}
                >
                  {partner.name === "Magellan Transport Logistics" && (
                    <div className="flex items-center space-x-2">
                      <motion.div
                        className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs font-bold"
                        whileHover={{
                          scale: 1.2,
                          rotate: 10,
                          transition: { duration: 0.3 },
                        }}
                      >
                        M
                      </motion.div>
                      <span>MAGELLAN</span>
                    </div>
                  )}
                  {partner.name === "LANDSTAR" && (
                    <motion.div
                      className="bg-blue-600 text-white px-4 py-2 rounded font-bold"
                      whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                    >
                      LANDSTAR ★
                    </motion.div>
                  )}
                  {partner.name === "FedEx" && (
                    <motion.div
                      className="text-purple-600 font-bold text-2xl"
                      whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                    >
                      FedEx
                    </motion.div>
                  )}
                  {partner.name === "UNITED STATES POSTAL SERVICE" && (
                    <div className="flex items-center space-x-2">
                      <motion.div
                        className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs"
                        whileHover={{
                          scale: 1.2,
                          rotate: 10,
                          transition: { duration: 0.3 },
                        }}
                      >
                        US
                      </motion.div>
                      <div className="text-blue-500 text-sm">
                        <div>UNITED STATES</div>
                        <div>POSTAL SERVICE</div>
                      </div>
                    </div>
                  )}
                  {partner.name === "OSRM" && (
                    <motion.div
                      className="text-blue-400 font-bold text-xl"
                      whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                    >
                      OSRM
                      <div className="text-xs text-gray-400">
                        OPEN SOURCE ROUTING MACHINE
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section7;
