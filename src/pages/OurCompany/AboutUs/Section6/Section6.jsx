import React from 'react';
import { motion } from 'framer-motion';
import { AlignEndHorizontal, ShieldHalf, Truck, Users } from 'lucide-react';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
import img1 from "../../../../assets/about9.jpg";

const Section6 = () => {
  const { t } = useTranslation();

  const stats = [
    {
      title: t("about-us.meet-our-team.daily-loads"),
      value: 10000,
      icon: <Truck className="w-12 h-12 text-white" />,
    },
    {
      title: t("about-us.meet-our-team.users"),
      value: 2000,
      icon: <Users className="w-12 h-12 text-white" />,
    },
    {
      title: t("about-us.meet-our-team.brokers"),
      value: 70,
      icon: <AlignEndHorizontal className="w-12 h-12 text-white" />,
    },
    {
      title: t("about-us.meet-our-team.our-team"),
      value: 20,
      icon: <ShieldHalf className="w-12 h-12 text-white" />,
    },
  ];

  // Animatsiya variantlari
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={titleVariants}
              >
                {t("about-us.meet-our-team.title")}
              </motion.h2>
              <motion.p
                className="text-lg text-gray-300 leading-relaxed mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={descriptionVariants}
              >
                {t("about-us.meet-our-team.description")}
              </motion.p>
              <motion.button
                className="bg-brand hover:bg-[#0986da] text-white font-semibold py-3 px-8 rounded shadow-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={buttonVariants}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                {t("about-us.contact-us.get-in-touch")}
              </motion.button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-brand bg-opacity-90 rounded-lg p-6 text-center"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                >
                  <motion.div
                    className="flex justify-center mb-4"
                    whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.3 } }}
                  >
                    {stat.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-4xl font-bold text-white">
                    <CountUp end={stat.value} duration={3} separator="," />
                  </p>
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
              <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-gray-300 to-gray-400">
                <motion.img
                  src={img1}
                  alt="Acp Loads"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section6;