import React from "react";
import bgImg from "../../../../assets/freight-sec2.png";
import { useTranslation } from "react-i18next";

const Section2 = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      className="bg-bottom-left relative"
    >
      <div className="absolute inset-0 bg-info/20 backdrop-blur-sm"></div>
      <div className="z-10 text-white relative md:px-8 py-2 max-w-[90%] mx-auto">
        <p className="text-5xl mt-10 mb-5">
          {t("freight-rate-calculator.key-features.title")}
        </p>

        <ul className="max-w-[90%] mx-auto">
          {Object.entries(
            t("freight-rate-calculator.key-features", { returnObjects: true })
          )
            .filter(([key]) => !isNaN(key))
            .map(([key, feature]) => (
              <li key={key}>
                <p className="text-2xl list-disc font-bold">{feature.title}</p>
                <p className="mb-4">{feature.description}</p>
              </li>
            ))}
        </ul>

        <p className="text-5xl mt-10">
          {t("freight-rate-calculator.why-use-our-calculator.title")}
        </p>

        <ul className="mt-5 max-w-[90%] mx-auto">
          {Object.entries(
            t("freight-rate-calculator.why-use-our-calculator", {
              returnObjects: true,
            })
          )
            .filter(([key]) => !isNaN(key))
            .map(([key, item]) => (
              <li key={key}>
                <p className="text-2xl list-disc font-bold">{item.title}</p>
                <p className="mb-4">{item.description}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Section2;
