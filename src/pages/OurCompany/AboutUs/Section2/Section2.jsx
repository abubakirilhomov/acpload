import React from "react";
import img from "../../../../assets/about2.jpg"
import { useTranslation } from "react-i18next";

const Section2 = () => {
    const { t } = useTranslation()
  return (
    <section>
      <p className="text-4xl font-semibold text-info md:my-16 my-5 text-center">{t("about-us.our-mission-title")}</p>

      <div className="md:flex md:gap-5 md:items-center md:justify-center max-w-5xl mx-auto md:pb-16">
        <p className="flex-1 md:text-xl px-2 text-center">
          {t("about-us.our-mission-description")}
        </p>
        <img className="md:flex-1 mt-10 md:mt-0 md:max-w-md" src={img} alt="AcpLoads" />
      </div>
    </section>
  );
};

export default Section2;
