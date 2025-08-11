import React from "react";
import calcImg from "../../../../assets/freight-calc.jpeg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Section1 = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center flex-col mt-10">
      <div>
        <img src={calcImg} alt="Freight Calculator" />
      </div>

      <div className="flex flex-col mt-10 mb-10 max-w-[90%] mx-auto">
        <p className="text-2xl md:text-start mb-5 text-center">
          {t("freight-rate-calculator.get-started.title")}
        </p>

        <p className="md:max-w-[70%] text-lg text-center md:text-start">
          {t("freight-rate-calculator.get-started.description")}
          <Link className="text-info underline" to={"/register"}>
            {` ${t("freight-rate-calculator.get-started.sign-up-for-free")} `}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Section1;
