import React from "react";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt } from "react-icons/fa";

const Compatibility = () => {
  const { t } = useTranslation();

  return (
    <div
      className="relative flex items-center mt-14 justify-center bg-cover bg-center min-h-screen w-full overflow-x-hidden"
      style={{
        backgroundImage:
          "url('https://www.trucknews.com/wp-content/uploads/2020/08/truck-freight.jpg')",
      }}
    >
      <div className="relative w-full h-screen flex items-center justify-center bg-black bg-opacity-50 p-6">
        <img
          src="https://cdn-trans.info/uploads/2020/01/69ec24034194850bde77becb8e4.jpg"
          alt="Freight Image"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative text-center z-10 max-w-screen-xl">
          <p className="text-5xl text-white mb-8">
            {t("features.integration-with-services.title")}
          </p>
          <div className="space-y-4 flex flex-col items-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-3xl h-auto md:h-80">
              <div className="text-white">
                <FaMapMarkerAlt size={32} />
              </div>
              <div className="text-left">
                <h1 className="text-2xl font-bold text-white">
                  {t("features.integration-with-services.card-1.title")}
                </h1>
                <p className="mt-2 text-white">
                  • {t("features.integration-with-services.card-1.description-1")}
                </p>
                <p className="mt-2 text-white">
                  • {t("features.integration-with-services.card-1.description-2")}
                </p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-3xl h-auto md:h-80">
              <div className="text-white">
                <FaMapMarkerAlt size={32} />
              </div>
              <div className="text-left">
                <h1 className="text-2xl font-bold text-white">
                  {t("features.integration-with-services.card-2.title")}
                </h1>
                <p className="mt-2 text-white">
                  • {t("features.integration-with-services.card-2.description-1")}
                </p>
                <p className="mt-2 text-white">
                  • {t("features.integration-with-services.card-2.description-2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compatibility;