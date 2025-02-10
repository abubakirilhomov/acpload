import React from "react";
import { FiZap, FiSmile, FiLock, FiThumbsUp, FiBookOpen } from "react-icons/fi";
import { useTranslation } from "react-i18next";

// Define icons to map with translations
const iconMap = {
  quick: <FiZap />,
  easy: <FiSmile />,
  secure: <FiLock />,
  comfortable: <FiThumbsUp />,
  understandable: <FiBookOpen />,
};

const About = ({ok}) => {
  const { t } = useTranslation();
  return (
    <div className="w-full max-w-[90%] mx-auto my-10">
      { ok ? <h2 className="text-3xl font-semibold text-center mb-8 text-white">{t('about-us')}</h2> : ""}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {t("advantages", { returnObjects: true }).map((advantage, index) => (
          <div
            key={index}
            className="p-6 flex flex-col items-center text-center bg-white/10 rounded-2xl border border-white/20 cursor-pointer select-none
            shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-white hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-3 text-info">{iconMap[advantage.icon]}</div>
            <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
            <p className="text-sm opacity-80">{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
