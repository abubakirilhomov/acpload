import React from "react";
import { useTranslation } from "react-i18next";
import SectionContainer from "../../../components/SectionContainer/SectionContainer";
import CustomText from "../../../components/CustomText/CustomText";
// Assuming you have a Button component

const Guides = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* First Section with Background Image */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-[url('/images/guides-videos-showcase.png')] bg-cover bg-center flex items-center justify-start">
        <SectionContainer>
          <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
          <div className="relative z-10 text-start py-12 max-w-3xl">
            <CustomText type="title" className="font-bold mb-6 text-white">
              {t("guides-and-videos.title")}
            </CustomText>
            <CustomText type="text" className="mb-8 text-white">
              {t("guides-and-videos.description")}
            </CustomText>
            <button className="btn btn-info text-white rounded-full">
              {t("main.sub-text")}
            </button>
          </div>
        </SectionContainer>
      </div>

      {/* Second Section */}
      <SectionContainer>
        <div className="text-center space-y-5 max-w-3xl mx-auto px-4">
          <CustomText type="subtitle">
            {t("guides-and-videos.choose-role-title")}
          </CustomText>
          <CustomText type="text">
            {t("guides-and-videos.choose-role-description")}
          </CustomText>
        </div>
      </SectionContainer>

      {/* Third Section - Carrier Dispatcher */}
      <div className="bg-gray-800">
        <SectionContainer className="text-white">
          <div className="flex flex-col lg:flex-row items-center gap-10 px-4 py-12">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <CustomText type="title" className="text-3xl font-bold mb-4">
                {t("guides-and-videos.carrier.title")}
              </CustomText>
              <CustomText type="text" className="mb-6">
                {t("guides-and-videos.carrier.role-overview")}
              </CustomText>
              <CustomText type="text" className="mb-6">
                {t("guides-and-videos.carrier.sub-text")}
              </CustomText>
              <CustomText type="text" className="mb-6">
                {t("guides-and-videos.carrier.what-will-learn")}
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>{t("guides-and-videos.carrier.1")}</li>
                  <li>{t("guides-and-videos.carrier.2")}</li>
                  <li>{t("guides-and-videos.carrier.3")}</li>
                  <li>{t("guides-and-videos.carrier.4")}</li>
                  <li>{t("guides-and-videos.carrier.5")}</li>
                </ul>
              </CustomText>
              <button className="btn btn-info text-white rounded-full w-full sm:w-auto">
                {t("btn-input-texts.learn-more")}
              </button>
            </div>

            {/* Video Section */}
            <div className="w-full lg:w-1/2">
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
            </div>
          </div>
        </SectionContainer>
      </div>

      {/* Fourth Section - Carrier */}
      <div className="bg-gray-900">
        <SectionContainer>
          <div className="flex flex-col lg:flex-row items-center gap-10 px-4 py-12">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
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
            </div>

            <div className="w-full lg:w-1/2 bg-gray-700 p-10 rounded-tr-4xl rounded-l-4xl">
              <CustomText type="title" className="text-3xl font-bold mb-4">
                {t("guides-and-videos.carrier-dispatcher.title")}
              </CustomText>
              <CustomText type="text" className="mb-6">
                {t("guides-and-videos.carrier-dispatcher.role-overview")}
              </CustomText>
              <CustomText type="text" className="mb-6">
                {t("guides-and-videos.carrier-dispatcher.sub-text")}
              </CustomText>
              <CustomText type="text" className="mb-6">
                {t("guides-and-videos.carrier-dispatcher.what-will-learn")}
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>{t("guides-and-videos.carrier-dispatcher.1")}</li>
                  <li>{t("guides-and-videos.carrier-dispatcher.2")}</li>
                  <li>{t("guides-and-videos.carrier-dispatcher.3")}</li>
                  <li>{t("guides-and-videos.carrier-dispatcher.4")}</li>
                  <li>{t("guides-and-videos.carrier-dispatcher.5")}</li>
                </ul>
              </CustomText>
              <button className="btn btn-info text-white rounded-full w-full sm:w-auto">
                {t("btn-input-texts.learn-more")}
              </button>
            </div>
          </div>
        </SectionContainer>
      </div>

      {/* Fifth Section - Broker */}
      <div className="bg-gray-800">
        <SectionContainer className="text-white">
          <div className="flex flex-col lg:flex-row items-center gap-10 px-4 py-12">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <CustomText type="title" className="text-3xl font-bold mb-4">
                {t("guides-and-videos.broker.title")}
              </CustomText>
              <CustomText type="text" className="mb-6">
                {t("guides-and-videos.broker.role-overview")}
              </CustomText>
              <CustomText type="text" className="mb-6">
                {t("guides-and-videos.broker.sub-text")}
              </CustomText>
              <CustomText type="text" className="mb-6">
                {t("guides-and-videos.broker.what-will-learn")}
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>{t("guides-and-videos.broker.1")}</li>
                  <li>{t("guides-and-videos.broker.2")}</li>
                  <li>{t("guides-and-videos.broker.3")}</li>
                  <li>{t("guides-and-videos.broker.4")}</li>
                  <li>{t("guides-and-videos.broker.5")}</li>
                </ul>
              </CustomText>
              <button className="btn btn-info text-white rounded-full w-full sm:w-auto">
                {t("btn-input-texts.learn-more")}
              </button>
            </div>

            {/* Video Section */}
            <div className="w-full lg:w-1/2">
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
            </div>
          </div>
        </SectionContainer>
      </div>

      {/* Sixth Section - Shipper */}
      <SectionContainer className="text-white">
        <div className="flex flex-col lg:flex-row items-center gap-10 px-4 pt-12">
          {/* Text Section */}
          <div className="w-full lg:w-1/2">
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
          </div>

          <div className="w-full lg:w-1/2 bg-gray-700 p-10 rounded-br-4xl rounded-l-4xl">
            <CustomText type="title" className="text-3xl font-bold mb-4">
              {t("guides-and-videos.shipper.title")}
            </CustomText>
            <CustomText type="text" className="mb-6">
              {t("guides-and-videos.shipper.role-overview")}
            </CustomText>
            <CustomText type="text" className="mb-6">
              {t("guides-and-videos.shipper.sub-text")}
            </CustomText>
            <CustomText type="text" className="mb-6">
              {t("guides-and-videos.shipper.what-will-learn")}
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>{t("guides-and-videos.shipper.1")}</li>
                <li>{t("guides-and-videos.shipper.2")}</li>
                <li>{t("guides-and-videos.shipper.3")}</li>
                <li>{t("guides-and-videos.shipper.4")}</li>
                <li>{t("guides-and-videos.shipper.5")}</li>
              </ul>
            </CustomText>
            <button className="btn btn-info text-white rounded-full w-full sm:w-auto">
              {t("btn-input-texts.learn-more")}
            </button>
          </div>
        </div>
      </SectionContainer>

      {/* Need Help Section */}
      <SectionContainer>
        <div className="border-2 border-info p-10 flex items-center justify-center mx-4">
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
        </div>
      </SectionContainer>
    </div>
  );
};

export default Guides;