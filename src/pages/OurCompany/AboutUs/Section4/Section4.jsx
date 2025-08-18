import React from 'react';
import { motion } from 'framer-motion';
import img1 from "../../../../assets/about4.jpg";
import img2 from "../../../../assets/about5.jpg";
import img3 from "../../../../assets/about6.jpg";
import img4 from "../../../../assets/about7.jpg";
import img5 from "../../../../assets/about8.jpg";
import { useTranslation } from "react-i18next";

const Section4 = () => {
  const { t } = useTranslation();

  // Animatsiya variantlari
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } },
  };

  const imageVariants = [
    // Large Left Image (chapdan o'ngga)
    { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4, ease: "easeOut" } } },
    // Top Right (o'ngdan chapga)
    { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.6, ease: "easeOut" } } },
    // Top Far Right (pastdan yuqoriga)
    { hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8, ease: "easeOut" } } },
    // Bottom Middle (chapdan o'ngga)
    { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 1.0, ease: "easeOut" } } },
    // Bottom Right (o'ngdan chapga)
    { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 1.2, ease: "easeOut" } } },
  ];

  const images = [
    {
      src: img1,
      alt: "Professional business team collaborating",
      className: "md:row-span-2",
      minHeight: "400px",
    },
    {
      src: img2,
      alt: "Woman using tablet for business analytics",
      className: "md:col-span-1",
      minHeight: "190px",
    },
    {
      src: img3,
      alt: "Modern office workspace with documents",
      className: "md:col-span-1",
      minHeight: "190px",
    },
    {
      src: img4,
      alt: "Business accessories and workspace",
      className: "md:col-span-1",
      minHeight: "190px",
    },
    {
      src: img5,
      alt: "Mobile technology and connectivity",
      className: "md:col-span-1",
      minHeight: "190px",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-center md:text-4xl text-2xl font-bold text-white mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={titleVariants}
          >
            {t("about-us.technology-driven-logistics")}
          </motion.h2>
          <motion.p
            className="text-center italic max-w-4xl mx-auto my-16 text-lg md:text-xl text-gray-300 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={descriptionVariants}
          >
            {t("about-us.technology-driven-logistics-description")}
          </motion.p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={image.className}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageVariants[index]}
            >
              <div className="rounded-lg overflow-hidden shadow-2xl h-full" style={{ minHeight: image.minHeight }}>
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  whileTap={{ scale: 0.95 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;