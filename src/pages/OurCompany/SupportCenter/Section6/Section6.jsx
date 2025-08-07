import React from "react";
import { FiMail, FiUsers } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import TextType from "../../../../components/ReactBits/TextType";
import AnimatedContent from "../../../../components/ReactBits/AnimatedContent";

const Section6 = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#0c1e35] min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full p-6 md:p-12 rounded-lg">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-12 flex items-center">
          <TextType
            text={[t("support-center.stay-connected.title"), t("support-center.stay-connected.title")]}
            typingSpeed={80}
            deletingSpeed={40}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
          />
          <span className="border-l-4 border-blue-500 mr-3 h-10"></span>
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-stretch gap-8">
          {/* Newsletter */}
          <AnimatedContent
            distance={100}
            direction="Vertical"
            reverse={false}
            duration={2}
            initialOpacity={0}
            animateOpacity={true}
            initialScale={1}
            threshold={0}
            delay={0}
          >
            <div className="bg-[#2f3f54] p-6 md:p-8 rounded-md relative flex-1">
              <div className="absolute -top-6 left-6 bg-[#3b5d7c] p-3 rounded-md">
                <FiMail className="text-white text-2xl" />
              </div>
              <h2 className="text-white font-semibold text-lg mt-6">
                {t("support-center.stay-connected.card-1.title")}
              </h2>
              <p className="text-gray-300 mt-2">
                {t("support-center.stay-connected.card-1.description")}
              </p>
              <button className="mt-6 px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded">
                {t("btn-input-texts.read-more")}
              </button>
            </div>
          </AnimatedContent>

          {/* Community */}
          <AnimatedContent
            distance={100}
            direction="Vertical"
            reverse={false}
            duration={2}
            initialOpacity={0}
            animateOpacity={true}
            initialScale={1}
            threshold={0}
            delay={0}
          >
            <div className="bg-[#2f3f54] p-6 md:p-8 rounded-md relative flex-1">
              <div className="absolute -top-6 left-6 bg-[#3b5d7c] p-3 rounded-md">
                <FiUsers className="text-white text-2xl" />
              </div>
              <h2 className="text-white font-semibold text-lg mt-6">
                {t("support-center.stay-connected.card-2.title")}
              </h2>
              <p className="text-gray-300 mt-2">
                {t("support-center.stay-connected.card-2.description")}
              </p>
              <button className="mt-6 px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded">
                {t("btn-input-texts.read-more")}
              </button>
            </div>
          </AnimatedContent>
        </div>

        <AnimatedContent
          distance={100}
          direction="Vertical"
          reverse={false}
          duration={2}
          initialOpacity={0}
          animateOpacity={true}
          initialScale={1}
          threshold={0}
          delay={0}
        >
          <div className="mt-12 text-gray-400 text-sm text-center md:text-left">
            <p className="font-semibold">{t("support-center.stay-connected.sub-text-1")}</p>
            <p className="italic mt-1">{t("support-center.stay-connected.sub-text-2")}</p>
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default Section6;
