import React from "react";
import bgImg from "../../../../assets/about3.jpg";
import { Truck, Package, Users, Monitor } from "lucide-react";
import { useTranslation } from "react-i18next";

const Section3 = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: t("about-us.who-we-serve.carrier-dispacther"),
      description: t("about-us.who-we-serve.carrier-dispacther-description"),
      buttonText: t("common.more", "MORE"), // можно вынести в common.json
    },
    {
      icon: <Truck className="w-8 h-8 text-white" />,
      title: t("about-us.who-we-serve.carriers"),
      description: t("about-us.who-we-serve.carriers-description"),
      buttonText: t("common.more", "MORE"),
    },
    {
      icon: <Monitor className="w-8 h-8 text-white" />,
      title: t("about-us.who-we-serve.brokers"),
      description: t("about-us.who-we-serve.brokers-description"),
      buttonText: t("common.more", "MORE"),
    },
    {
      icon: <Package className="w-8 h-8 text-white" />,
      title: t("about-us.who-we-serve.shipper"),
      description: t("about-us.who-we-serve.shipper-description"),
      buttonText: t("common.more", "MORE"),
    },
  ];

  return (
    <section
      style={{ backgroundImage: `url(${bgImg})` }}
      className="md:py-16 md:mt-0 mt-10 md:pt-10 pt-10"
    >
      <p className="text-4xl text-info font-semibold text-center">
        {t("about-us.who-we-serve.title")}
      </p>
      <p className="text-xl text-center">
        {t("about-us.who-we-serve.description")}
      </p>

      <div className="grid grid-cols-1 mt-16 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 md:pb-0 max-w-[90%] md:max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="group">
            <div className="bg-blue-400 bg-opacity-90 backdrop-blur-sm rounded-lg p-8 h-full flex flex-col items-center text-center shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-opacity-100">
              <div className="bg-blue-600 rounded-full p-4 mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-white text-opacity-90 mb-8 flex-grow leading-relaxed">
                {service.description}
              </p>

              <button className="bg-transparent border-2 border-white text-white px-8 py-2 rounded font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                {service.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
