import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FiBell,
  FiMessageSquare,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

const Notifications = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const data = [
    { icon: <FiBell className="text-5xl mb-4" />, text: t("features.smart-matching.card-1.title") },
    { icon: <FiMessageSquare className="text-5xl mb-4" />, text: t("features.smart-matching.card-2.title") },
    { icon: <FiCheckCircle className="text-5xl mb-4" />, text: t("features.smart-matching.card-3.title") },
    { icon: <FiAlertCircle className="text-5xl mb-4" />, text: t("features.smart-matching.card-4.title") },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-black">
      <h1
        className={`text-3xl sm:text-4xl md:text-6xl font-bold text-white text-center mb-12 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {t("features.smart-matching.title")}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {data.map((item, index) => (
          <div
            key={index}
            style={{ transitionDelay: `${index * 200}ms` }}
            className={`border border-white bg-opacity-10 bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-white font-semibold shadow-lg transition-all duration-700 ease-out transform ${
              isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
          >
            {item.icon}
            <p className="text-lg sm:text-xl text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;