import React from "react";
import bgImage from "/images/showcase-img.png";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="py-20 px-8 h-screen flex items-start lg:items-center justify-center bg-cover bg-center z-1 shadow-2xl max-h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div
        className="mx-auto max-w-screen-xl px-8 py-12 lg:flex lg:items-center lg:justify-center backdrop-blur-xs bg-white/10 rounded-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 className=" text-2xl font-bold sm:text-5xl text-white font-serif" >
          {t('title')}
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              className="px-10 py-3 text-lg w-full btn btn-info md:w-auto rounded-full text-white hover:text-white shadow-md shadow-cyan-900/50"
            >
              {t("sign-up")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;