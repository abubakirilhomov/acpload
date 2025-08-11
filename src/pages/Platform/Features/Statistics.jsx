import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FiBell,
  FiMessageSquare,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { FaCheck } from "react-icons/fa";

const Statistics = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  const data = [
    {
      icon: <FiBell className="text-5xl mb-2" />,
      text: t("features.comprehensive-loadboard.card-1.title"),
      description: t("features.comprehensive-loadboard.card-1.description"),
    },
    {
      icon: <FiMessageSquare className="text-5xl mb-2" />,
      text: t("features.comprehensive-loadboard.card-2.title"),
      description: t("features.comprehensive-loadboard.card-2.description"),
    },
    {
      icon: <FiCheckCircle className="text-5xl mb-2" />,
      text: t("features.comprehensive-loadboard.card-3.title"),
      description: t("features.comprehensive-loadboard.card-3.description"),
    },
    {
      icon: <FiAlertCircle className="text-5xl mb-2" />,
      text: t("features.comprehensive-loadboard.card-4.title"),
      description: t("features.comprehensive-loadboard.card-4.description"),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-[#1e1e2f]">
      <h1
        className={`text-3xl sm:text-4xl lg:text-6xl font-bold text-white text-center transition-opacity duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        {t("features.comprehensive-loadboard.title")}
      </h1>
      <p className="text-white text-lg sm:text-xl text-center mt-4">
        {t("features.comprehensive-loadboard.sub-title")}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-12 w-full max-w-5xl">
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative bg-gray-700 border border-white/20 rounded-2xl shadow-xl px-6 py-8 flex flex-col items-center justify-center text-white transition-all duration-1000 transform ${
              isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
          >
            <div className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full">
              <FaCheck className="text-white text-sm" />
            </div>
            {item.icon}
            <h1 className="text-xl sm:text-2xl font-semibold mt-2">{item.text}</h1>
            <p className="text-sm sm:text-base text-gray-300 text-center mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;