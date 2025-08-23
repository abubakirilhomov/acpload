import React, { useEffect } from "react";
import CustomText from "../../../components/CustomText/CustomText";
import SectionContainer from "../../../components/SectionContainer/SectionContainer";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaChartLine,
  FaSearchDollar,
  FaBolt,
  FaGlobeAmericas,
  FaCogs,
} from "react-icons/fa";
import SubscribeSection from "./SubscribeSection/SubscribeSection";
import { useLocation } from "react-router-dom";

const Blog = () => {
  const { t } = useTranslation();
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location.pathname]);

  const cardData = [
    { key: "card-1", icon: FaChartLine },
    { key: "card-2", icon: FaSearchDollar },
    { key: "card-3", icon: FaBolt },
    { key: "card-4", icon: FaCogs },
    { key: "card-5", icon: FaGlobeAmericas },
  ];

  return (
    <>
      <div
        ref={ref1}
        className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-[url('/images/blog-showcase.jpg')] bg-cover bg-center flex items-end justify-start"
      >
        <SectionContainer>
          <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-2xl text-white"
          >
            <CustomText type="title">
              {t("freight-and-logistics-blog.title")}
            </CustomText>
            <CustomText type="title">
              {t("freight-and-logistics-blog.sub-title")}
            </CustomText>
            <CustomText type="text" className="mt-5">
              {t("freight-and-logistics-blog.description")}
            </CustomText>
          </motion.div>
        </SectionContainer>
      </div>

      <SectionContainer>
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <CustomText type="subtitle">
            {t("freight-and-logistics-blog.why-follow.title")}
          </CustomText>
        </motion.div>

        <div className="w-full mx-auto flex flex-wrap justify-center gap-6">
          {cardData.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView2 ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                whileHover={{ scale: 1.05 }}
                className="relative flex-1 min-w-[250px] p-8 flex flex-col items-center text-center bg-white/10 rounded-2xl border border-white/20 cursor-pointer select-none shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-white backdrop-blur-md"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center text-white text-2xl font-bold bg-info dark:bg-brand rounded-full shadow-lg">
                  <Icon />
                </div>
                <CustomText type="heading" className="mt-6">
                  {t(`freight-and-logistics-blog.why-follow.${card.key}.title`)}
                </CustomText>
                <CustomText type="text" className="mt-3 text-gray-300">
                  {t(
                    `freight-and-logistics-blog.why-follow.${card.key}.description`
                  )}
                </CustomText>
              </motion.div>
            );
          })}
        </div>
      </SectionContainer>

      <SectionContainer>
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 50 }}
          animate={inView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <CustomText type="subtitle" className="mb-4">
            {t("freight-and-logistics-blog.freight-market.title")}
          </CustomText>
          <CustomText type="heading" className="mb-2">
            {t("freight-and-logistics-blog.freight-market.1.title")}
          </CustomText>
          <CustomText type="text" className="mb-4">
            {t("freight-and-logistics-blog.freight-market.1.description")}
          </CustomText>
          <CustomText type="heading" className="mt-6 mb-2">
            {t("freight-and-logistics-blog.freight-market.2.title")}
          </CustomText>
          <ul className="list-disc ml-6 text-white/80 space-y-2">
            <li>
              {t("freight-and-logistics-blog.freight-market.2.sub-title-1")}{" "}
              {t("freight-and-logistics-blog.freight-market.2.text-1")}
            </li>
            <li>
              {t("freight-and-logistics-blog.freight-market.2.sub-title-2")}{" "}
              {t("freight-and-logistics-blog.freight-market.2.text-2")}
            </li>
            <li>
              {t("freight-and-logistics-blog.freight-market.2.sub-title-3")}{" "}
              {t("freight-and-logistics-blog.freight-market.2.text-3")}
            </li>
            <li>
              {t("freight-and-logistics-blog.freight-market.2.sub-title-4")}{" "}
              {t("freight-and-logistics-blog.freight-market.2.text-4")}
            </li>
          </ul>

          <CustomText type="heading" className="mt-6 mb-2">
            {t("freight-and-logistics-blog.fmcsa-and-dot.title")}
          </CustomText>
          <CustomText type="text" className="mb-4">
            {t("freight-and-logistics-blog.fmcsa-and-dot.sub-title")}
          </CustomText>
          <ul className="list-disc ml-6 text-white/80 space-y-2">
            <li>
              {t("freight-and-logistics-blog.fmcsa-and-dot.1.title")}{" "}
              {t("freight-and-logistics-blog.fmcsa-and-dot.1.text")}
            </li>
            <li>
              {t("freight-and-logistics-blog.fmcsa-and-dot.2.title")}{" "}
              {t("freight-and-logistics-blog.fmcsa-and-dot.2.text")}
            </li>
            <li>
              {t("freight-and-logistics-blog.fmcsa-and-dot.3.title")}{" "}
              {t("freight-and-logistics-blog.fmcsa-and-dot.3.text")}
            </li>
          </ul>

          <CustomText type="heading" className="mt-6 mb-2">
            {t("freight-and-logistics-blog.dispatching-strategies.title")}
          </CustomText>
          <CustomText type="text" className="mb-4">
            {t("freight-and-logistics-blog.dispatching-strategies.sub-title")}
          </CustomText>
          <ul className="list-disc ml-6 text-white/80 space-y-2">
            <li>
              {t("freight-and-logistics-blog.dispatching-strategies.1.title")}{" "}
              {t("freight-and-logistics-blog.dispatching-strategies.1.text")}
            </li>
            <li>
              {t("freight-and-logistics-blog.dispatching-strategies.2.title")}{" "}
              {t("freight-and-logistics-blog.dispatching-strategies.2.text")}
            </li>
            <li>
              {t("freight-and-logistics-blog.dispatching-strategies.3.title")}{" "}
              {t("freight-and-logistics-blog.dispatching-strategies.3.text")}
            </li>
          </ul>

          <CustomText type="heading" className="mt-6 mb-2">
            {t("freight-and-logistics-blog.fuel-price.1.title")}
          </CustomText>
          <ul className="list-disc ml-6 text-white/80 space-y-2">
            <li>
              {t("freight-and-logistics-blog.fuel-price.1.title")}{" "}
              {t("freight-and-logistics-blog.fuel-price.1.text")}
            </li>
            <li>
              {t("freight-and-logistics-blog.fuel-price.2.title")}{" "}
              {t("freight-and-logistics-blog.fuel-price.2.text")}
            </li>
          </ul>

          <CustomText type="heading" className="mt-6 mb-2">
            {t("freight-and-logistics-blog.building-freight-networks.title")}
          </CustomText>
          <CustomText type="text" className="mb-4">
            {t(
              "freight-and-logistics-blog.building-freight-networks.sub-title"
            )}
          </CustomText>
          <ul className="list-disc ml-6 text-white/80 space-y-2">
            <li>
              {t(
                "freight-and-logistics-blog.building-freight-networks.1.title"
              )}{" "}
              {t("freight-and-logistics-blog.building-freight-networks.1.text")}
            </li>
            <li>
              {t(
                "freight-and-logistics-blog.building-freight-networks.2.title"
              )}{" "}
              {t("freight-and-logistics-blog.building-freight-networks.2.text")}
            </li>
          </ul>

          <CustomText type="heading" className="mt-6 mb-2">
            {t("freight-and-logistics-blog.technology-automation.title")}
          </CustomText>
          <CustomText type="text" className="mb-4">
            {t("freight-and-logistics-blog.technology-automation.sub-title")}
          </CustomText>
          <ul className="list-disc ml-6 text-white/80 space-y-2">
            <li>
              {t("freight-and-logistics-blog.technology-automation.1.title")}{" "}
              {t("freight-and-logistics-blog.technology-automation.1.text")}
            </li>
            <li>
              {t("freight-and-logistics-blog.technology-automation.2.title")}{" "}
              {t("freight-and-logistics-blog.technology-automation.2.text")}
            </li>
          </ul>

          <CustomText type="heading" className="mt-6 mb-2">
            {t("freight-and-logistics-blog.freight-care.title")}
          </CustomText>
          <CustomText type="text" className="mb-4">
            {t("freight-and-logistics-blog.freight-care.sub-title")}
          </CustomText>
          <ul className="list-disc ml-6 text-white/80 space-y-2">
            <li>
              {t("freight-and-logistics-blog.freight-care.1.title")}{" "}
              {t("freight-and-logistics-blog.freight-care.1.text")}
            </li>
            <li>
              {t("freight-and-logistics-blog.freight-care.2.title")}{" "}
              {t("freight-and-logistics-blog.freight-care.2.text")}
            </li>
          </ul>
        </motion.div>
      </SectionContainer>
      <SubscribeSection text={t("freight-and-logistics-blog.subscribe")} />
    </>
  );
};

export default Blog;
