import React from "react";
import { useTranslation } from "react-i18next";

const Advanced = () => {
  const { t } = useTranslation();
  const images = [
    {
      src: "https://credotrans.ru/wp-content/uploads/2020/11/container_owner_new.jpg",
      alt: "Image 1",
    },
    {
      src: "https://www.contship.ru/manager/publikacii/universalnye-konteynery.jpg",
      alt: "Image 2",
    },
    {
      src: "https://img.linemedia.com/img/s/container-40ft-container---1651140669405367732_big--22042813082733074700.jpg",
      alt: "Image 3",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMdzupgIS2JUTH29nXL-VhRtYUB_MtcQDylg&s",
      alt: "Image 4",
    },
  ];

  return (
    <div className="relative w-full bg-black">
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex flex-col items-center justify-center px-6 py-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          {t("features.advanced-calculator.title")}
        </h1>
        <p className="text-white text-sm md:text-lg max-w-3xl">
          <strong>{t("features.advanced-calculator.1.title")}</strong>
          <br />
          • {t("features.advanced-calculator.1.description-1")}
          <br />
          • {t("features.advanced-calculator.1.description-2")}
          <br />
          <br />
          <strong>{t("features.advanced-calculator.2.title")}</strong>
          <br />
          • {t("features.advanced-calculator.2.description-1")}
          <br />
          • {t("features.advanced-calculator.2.description-2")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0 h-[90vh]">
        {images.map((item, index) => (
          <div key={index} className="relative w-full h-full">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover opacity-70"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advanced;