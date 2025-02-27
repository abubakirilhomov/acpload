import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import {
  FaRegListAlt,
  FaBullseye,
  FaFilter,
  FaTruckLoading,
  FaSearch,
} from "react-icons/fa";

const PostSearch = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { t } = useTranslation();

  return (
    <div ref={ref} className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center mt-10">
      {/* Main Heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {t("post_search.heading")}
      </motion.h1>

      {/* Two Columns */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-[90%]">
        {/* Left Column - For Freight Brokers & Shippers */}
        <motion.div
          className="w-full md:w-1/2 p-8 bg-gray-800 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
            {t("post_search.brokers_shippers.title")}
          </h2>
          <ul className="space-y-5 text-gray-300">
            <li className="flex items-start gap-4">
              <span className="bg-info p-3 rounded-full">
                <FaRegListAlt className="text-white w-6 h-6" />
              </span>
              <div>
                <strong className="text-lg">{t("post_search.brokers_shippers.load_posting.title")}</strong>
                <p className="mt-1 text-gray-400">
                  {t("post_search.brokers_shippers.load_posting.description")}
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-info p-3 rounded-full">
                <FaBullseye className="text-white w-6 h-6" />
              </span>
              <div>
                <strong className="text-lg">{t("post_search.brokers_shippers.targeted_reach.title")}</strong>
                <p className="mt-1 text-gray-400">
                  {t("post_search.brokers_shippers.targeted_reach.description")}
                </p>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Right Column - For Carriers & Dispatchers */}
        <motion.div
          className="w-full md:w-1/2 p-8 bg-gray-800 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
            {t("post_search.carriers_dispatchers.title")}
          </h2>
          <ul className="space-y-5 text-gray-300">
            <li className="flex items-start gap-4">
              <span className="bg-info p-3 rounded-full">
                <FaSearch className="text-white w-6 h-6" />
              </span>
              <div>
                <strong className="text-lg">{t("post_search.carriers_dispatchers.load_searching.title")}</strong>
                <p className="mt-1 text-gray-400">
                  {t("post_search.carriers_dispatchers.load_searching.description")}
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-info p-3 rounded-full">
                <FaTruckLoading className="text-white w-6 h-6" />
              </span>
              <div>
                <strong className="text-lg">{t("post_search.carriers_dispatchers.empty_truck.title")}</strong>
                <p className="mt-1 text-gray-400">
                  {t("post_search.carriers_dispatchers.empty_truck.description")}
                </p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Video Section */}
      <motion.div
        className="mt-16 w-full max-w-[90%] md:max-w-[60%] max-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      >
        <div className="w-full flex justify-center">
          <iframe
            className="w-full h-48 md:h-96 rounded-lg"
            src="https://www.youtube.com/embed/UV0mhY2Dxr0"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default PostSearch;
