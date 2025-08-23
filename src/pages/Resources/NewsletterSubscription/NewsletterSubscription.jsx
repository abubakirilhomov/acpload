import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionContainer from "../../../components/SectionContainer/SectionContainer";
import CustomText from "../../../components/CustomText/CustomText";
import {
  MdTrendingUp,
  MdBarChart,
  MdLocalShipping,
  MdOutlineInsights,
  MdStarRate
} from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const NewsletterSubscription = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const items = [
    {
      icon: <MdTrendingUp className="h-8 w-8 text-white" />,
      text: t("newsletter-subscription.join-our-newsletter.card-1"),
    },
    {
      icon: <MdBarChart className="h-8 w-8 text-white" />,
      text: t("newsletter-subscription.join-our-newsletter.card-2"),
    },
    {
      icon: <MdLocalShipping className="h-8 w-8 text-white" />,
      text: t("newsletter-subscription.join-our-newsletter.card-3"),
    },
    {
      icon: <MdOutlineInsights className="h-8 w-8 text-white" />,
      text: t("newsletter-subscription.join-our-newsletter.card-4"),
    },
  ];

  const subscribeItems = [
    {
      title: t("newsletter-subscription.why-subscribe.1.title"),
      description: t("newsletter-subscription.why-subscribe.1.description"),
    },
    {
      title: t("newsletter-subscription.why-subscribe.2.title"),
      description: t("newsletter-subscription.why-subscribe.2.description"),
    },
    {
      title: t("newsletter-subscription.why-subscribe.3.title"),
      description: t("newsletter-subscription.why-subscribe.3.description"),
    },
    {
      title: t("newsletter-subscription.why-subscribe.4.title"),
      description: t("newsletter-subscription.why-subscribe.4.description"),
    },
    {
      title: t("newsletter-subscription.why-subscribe.5.title"),
      description: t("newsletter-subscription.why-subscribe.5.description"),
    },
    {
      title: t("newsletter-subscription.why-subscribe.6.title"),
      description: t("newsletter-subscription.why-subscribe.6.description"),
    },
  ];

  const InfoCard = ({ icon, text }) => (
    <div className="bg-[#4c7397] p-6 rounded-2xl">
      <motion.div whileInView={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
        <span className="block mb-2">{icon}</span>
        <CustomText type="text" className="text-base sm:text-lg text-white/90">
          {text}
        </CustomText>
      </motion.div>
    </div>
  );

  const BenefitCard = ({ title, description, index }) => (
    <motion.div
      initial="hidden"
      animate={inView2 ? "visible" : "hidden"}
      variants={cardVariants}
      transition={{ delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="flex-1 min-w-[250px] p-4 sm:p-6 flex flex-col lg:flex-row items-center lg:items-center text-left bg-[#2a3447] rounded-4xl border border-white/10 cursor-pointer select-none shadow-md"
    >
      <div className="lg:static lg:ml-0 lg:mr-4 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-info sm:bg-transparent text-info rounded-full shadow-md">
        <MdStarRate className=" text-xl sm:text-3xl text-white sm:text-info" />
      </div>
      <div className="mt-4 lg:mt-0">
        <CustomText type="heading" className="mb-2">
          {title}
        </CustomText>
        <CustomText type="text" className="text-white/80">
          {description}
        </CustomText>
      </div>
    </motion.div>
  );

  return (
    <div>
      <div className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] bg-[url('/images/news-subscription-showcase.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-60 z-0" />
        <SectionContainer>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={sectionVariants}
            className="relative z-10 text-center text-white max-w-3xl mx-auto px-4"
          >
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.div variants={childVariants}>
                <CustomText
                  type="title"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                >
                  {t("newsletter-subscription.title")}
                </CustomText>
              </motion.div>
              <motion.div variants={childVariants}>
                <CustomText
                  type="text"
                  className="text-base sm:text-lg md:text-xl mb-8"
                >
                  {t("newsletter-subscription.join-our-newsletter.description")}
                </CustomText>
              </motion.div>
              <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  variants={childVariants}
                  className="btn bg-[#3b82f6] text-white px-6 py-3 rounded-full  transition-colors"
                >
                  {t("btn-input-texts.mission")}
                </motion.button>
                <motion.button
                  variants={childVariants}
                  className="btn btn-outline text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
                >
                  {t("btn-input-texts.donate-now")}
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </SectionContainer>
      </div>

      <SectionContainer className="mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col-reverse md:flex-row items-center gap-10"
        >
          <motion.div variants={childVariants} className="w-full md:w-1/2">
            <CustomText
              type="subtitle"
              className="text-2xl sm:text-3xl font-bold mb-4"
            >
              {t("newsletter-subscription.join-our-newsletter.title")}
            </CustomText>
            <CustomText type="text" className="mb-6">
              {t("newsletter-subscription.join-our-newsletter.description")}
            </CustomText>
            <button className="btn bg-[#4c7397] rounded-full text-white">
              {t("btn-input-texts.learn-more")}
            </button>
          </motion.div>

          <motion.div variants={childVariants} className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {items.map((item, i) => (
              <InfoCard key={i} icon={item.icon} text={item.text} />
            ))}
          </motion.div>
        </motion.div>
      </SectionContainer>

      <SectionContainer className="py-12 px-4 sm:px-6 lg:px-8 md:py-16 text-white">
        <div className="text-center mb-12">
          <CustomText
            type="subtitle"
            className="text-3xl md:text-4xl font-bold"
          >
            {t("newsletter-subscription.why-subscribe.title")}
          </CustomText>
        </div>
        <div ref={ref2} className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
          {subscribeItems.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} index={index} />
          ))}
        </div>
      </SectionContainer>
      <motion.div
        ref={ref3}
        initial={{ opacity: 0, y: 30 }}
        animate={inView3 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto bg-gray-800 px-4 sm:px-6 lg:px-8 flex items-center justify-between"
      >
        <SectionContainer className="text-white py-8">
          <div className="flex items-center">
            <span className="block w-6 h-36 bg-info mb-2"></span>
            <div className="ml-4">
              <CustomText type="title" className="text-4xl font-bold">
                {t("newsletter-subscription.our-privacy-matters.title")}
              </CustomText>
              <CustomText type="text" className="mt-4 text-lg">
                {t("newsletter-subscription.our-privacy-matters.description")}
              </CustomText>
            </div>
          </div>
        </SectionContainer>
      </motion.div>
    </div>
  );
};

export default NewsletterSubscription;