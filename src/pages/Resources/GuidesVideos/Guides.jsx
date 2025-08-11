import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SectionContainer from "../../../components/SectionContainer/SectionContainer";
import CustomText from "../../../components/CustomText/CustomText";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Guides = () => {
  const { t } = useTranslation();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [chooseRoleRef, chooseRoleInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [needHelpRef, needHelpInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const videoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const VideoEmbed = () => (
    <div className="aspect-video w-full">
      <iframe
        className="rounded w-full h-full"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );

  const RoleText = ({ role }) => (
    <>
      <CustomText type="title" className="text-3xl font-bold mb-4">
        {t(`guides-and-videos.${role}.title`)}
      </CustomText>
      <CustomText type="text" className="mb-6">
        {t(`guides-and-videos.${role}.role-overview`)}
      </CustomText>
      <CustomText type="text" className="mb-6">
        {t(`guides-and-videos.${role}.sub-text`)}
      </CustomText>
      <CustomText type="text" className="mb-6">
        {t(`guides-and-videos.${role}.what-will-learn`)}
        <ul className="list-disc pl-5 mt-2 space-y-1">
          {Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
            <li key={i}>{t(`guides-and-videos.${role}.${i}`)}</li>
          ))}
        </ul>
      </CustomText>
      <button className="btn btn-info text-white rounded-full w-full sm:w-auto">
        {t("btn-input-texts.learn-more")}
      </button>
    </>
  );

  const RoleSection = ({ role, bgClass = "", paddingClass = "px-4 py-12", isReversed = false, roundedClass = "" }) => {
    const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.2 });

    const textClass = isReversed ? `bg-gray-700 p-10 ${roundedClass}` : "";
    const leftVariants = isReversed ? videoVariants : childVariants;
    const rightVariants = isReversed ? childVariants : videoVariants;
    const leftClass = `w-full lg:w-1/2 ${isReversed ? "order-2 lg:order-1" : ""}`;
    const rightClass = `w-full lg:w-1/2 ${isReversed ? "order-1 lg:order-2" : ""} ${textClass}`;

    const leftContent = isReversed ? <VideoEmbed /> : <RoleText role={role} />;
    const rightContent = isReversed ? <RoleText role={role} /> : <VideoEmbed />;

    const content = (
      <motion.div
        ref={sectionRef}
        className={`flex flex-col lg:flex-row items-center gap-10 ${paddingClass}`}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <motion.div className={leftClass} variants={leftVariants}>
          {leftContent}
        </motion.div>
        <motion.div className={rightClass} variants={rightVariants}>
          {rightContent}
        </motion.div>
      </motion.div>
    );

    if (bgClass) {
      return (
        <div className={bgClass}>
          <SectionContainer className="text-white">{content}</SectionContainer>
        </div>
      );
    } else {
      return <SectionContainer className="text-white">{content}</SectionContainer>;
    }
  };

  return (
    <div>
      <div ref={heroRef} className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-[url('/images/guides-videos-showcase.png')] bg-cover bg-center flex items-center justify-start">
        <SectionContainer>
          <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
          <motion.div
            className="relative z-10 text-start py-12 max-w-3xl"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={sectionVariants}
          >
            <CustomText type="title" className="font-bold mb-6 text-white">
              {t("guides-and-videos.title")}
            </CustomText>
            <CustomText type="text" className="mb-8 text-white">
              {t("guides-and-videos.description")}
            </CustomText>
            <button className="btn btn-info text-white rounded-full">
              {t("main.sub-text")}
            </button>
          </motion.div>
        </SectionContainer>
      </div>

      <SectionContainer>
        <motion.div
          ref={chooseRoleRef}
          className="text-center space-y-5 max-w-3xl mx-auto px-4"
          initial="hidden"
          animate={chooseRoleInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <CustomText type="subtitle">{t("guides-and-videos.choose-role-title")}</CustomText>
          <CustomText type="text">{t("guides-and-videos.choose-role-description")}</CustomText>
        </motion.div>
      </SectionContainer>

      <RoleSection role="carrier" bgClass="bg-gray-800" isReversed={false} />
      <RoleSection role="carrier-dispatcher" bgClass="bg-gray-900" isReversed={true} roundedClass="rounded-tr-4xl rounded-l-4xl" />
      <RoleSection role="broker" bgClass="bg-gray-800" isReversed={false} />
      <RoleSection role="shipper" bgClass="" isReversed={true} roundedClass="rounded-br-4xl rounded-l-4xl" paddingClass="px-4 pt-12" />

      <SectionContainer>
        <motion.div
          ref={needHelpRef}
          className="border-2 border-info p-10 flex items-center justify-center mx-4"
          initial="hidden"
          animate={needHelpInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <div className="max-w-3xl text-center">
            <CustomText type="subtitle" className="mb-5">
              {t("guides-and-videos.need-help.title")}
            </CustomText>
            <CustomText>
              {t("guides-and-videos.need-help.description-1")}
              <a href="/support-center" className="text-info">
                Support Center
              </a>
              {t("guides-and-videos.need-help.description-2")}
            </CustomText>
          </div>
        </motion.div>
      </SectionContainer>
    </div>
  );
};

export default Guides;