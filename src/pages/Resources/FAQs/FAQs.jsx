import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import SectionContainer from "../../../components/SectionContainer/SectionContainer";
import CustomText from "../../../components/CustomText/CustomText";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const FAQs = () => {
  const { t } = useTranslation();

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDrawer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location.pathname]);

  const renderFAQSection = (titleKey, data, startIndex) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12"
      >
        <CustomText type="subtitle" className="text-xl font-semibold mb-6">
          {t(`faqs.${titleKey}.title`)}
        </CustomText>
        <div className="space-y-4">
          {data.map((item, i) => {
            const index = startIndex + i;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 * i }}
                className="border border-gray-700 rounded-xl bg-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleDrawer(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-medium">
                    {t(`faqs.${titleKey}.${item?.q}`)}
                  </span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-sm sm:text-base text-gray-200">
                    {t(`faqs.${titleKey}.${item?.a}`)}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-800 text-white">
      {/* Intro Section */}
      <SectionContainer className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start justify-between"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-2/3 z-10 bg-gray-500 p-6 sm:p-8 md:p-10 rounded-3xl mb-10 md:mb-0 md:-mr-16"
          >
            <CustomText
              type="title"
              className="text-2xl sm:text-3xl font-bold mb-4"
            >
              {t("faqs.title")}
            </CustomText>
            <CustomText type="text" className="text-sm sm:text-base mb-8">
              {t("faqs.description")}
            </CustomText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="w-full md:w-1/2 relative aspect-square"
          >
            <img
              src="/images/faqs-showcase.png"
              alt="FAQs Illustration"
              className="absolute inset-0 w-full h-full rounded-full object-cover"
            />
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* FAQs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="bg-gray-900"
      >
        <SectionContainer className="py-10">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            {renderFAQSection(
              "carrier-dispatcher",
              [
                { q: "q-1", a: "a-1" },
                { q: "q-2", a: "a-2" },
                { q: "q-3", a: "a-3" },
                { q: "q-4", a: "a-4" }
              ],
              0
            )}
            {renderFAQSection(
              "carrier",
              [
                { q: "q-1", a: "a-1" },
                { q: "q-2", a: "a-2" },
                { q: "q-3", a: "a-3" },
                { q: "q-4", a: "a-4" },
                { q: "q-5", a: "a-5" }
              ],
              4
            )}
            {renderFAQSection(
              "broker",
              [
                { q: "q-1", a: "a-1" },
                { q: "q-2", a: "a-2" },
                { q: "q-3", a: "a-3" },
                { q: "q-4", a: "a-4" },
                { q: "q-5", a: "a-5" }
              ],
              9
            )}
            {renderFAQSection(
              "shipper",
              [
                { q: "q-1", a: "a-1" },
                { q: "q-2", a: "a-2" },
                { q: "q-3", a: "a-3" },
                { q: "q-4", a: "a-4" }
              ],
              14
            )}
            {renderFAQSection(
              "general-platform",
              [
                { q: "q-1", a: "a-1" },
                { q: "q-2", a: "a-2" },
                { q: "q-3", a: "a-3" },
                { q: "q-4", a: "a-4" },
                { q: "q-5", a: "a-5" },
                { q: "q-6", a: "a-6" },
                { q: "q-7", a: "a-7" },
                { q: "q-8", a: "a-8" }
              ],
              18
            )}
          </div>
        </SectionContainer>
      </motion.div>

      {/* Contact Form Section */}
      <SectionContainer className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <CustomText type="subtitle" className="text-xl font-semibold mb-6">
            {t("faqs.get-in-touch")}
          </CustomText>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.input
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                type="text"
                placeholder={t("btn-input-texts.full-name")}
                className="w-full px-4 py-3 rounded-4xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <motion.input
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                type="email"
                placeholder={t("btn-input-texts.email")}
                className="w-full px-4 py-3 rounded-4xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <motion.textarea
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              rows="5"
              placeholder={t("btn-input-texts.enter-msg")}
              className="w-full px-4 py-3 rounded-2xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></motion.textarea>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              type="submit"
              className="btn bg-[#3f96d1] rounded-full text-white transition"
            >
              {t("btn-input-texts.submit")}
            </motion.button>
          </form>
        </motion.div>
      </SectionContainer>
    </div>
  );
};

export default FAQs;