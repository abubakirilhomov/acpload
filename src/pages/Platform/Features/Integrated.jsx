import React from "react";
import { useTranslation } from "react-i18next";

const Integrated = () => {
  const { t } = useTranslation();

  return (
    <div
      className="relative flex items-center justify-center bg-cover bg-center min-h-screen w-full overflow-x-hidden"
      style={{ backgroundImage: "url('https://www.trucknews.com/wp-content/uploads/2020/08/truck-freight.jpg')" }}
    >
      <div className="relative w-full h-screen flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 p-6">
        <img
          src="https://credotrans.ru/wp-content/uploads/2020/11/container_owner_new.jpg"
          alt="Freight Image"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative text-center z-10 max-w-screen-xl">
          <p className="text-5xl text-white">{t("features.integrated-rating.title")}</p>
          <p className="text-white text-xl mt-6">
            <strong>{t("features.integrated-rating.1.title")}</strong>
            <br />
            • {t("features.integrated-rating.1.description-1")}
            <br />
            • {t("features.integrated-rating.1.description-2")}
            <br />
            <br />
            <strong>{t("features.integrated-rating.2.title")}</strong>
            <br />
            • {t("features.integrated-rating.2.description-1")}
            <br />
            • {t("features.integrated-rating.2.description-2")}
          </p>

          <p className="text-3xl text-white mt-8">{t("features.secure-and-interface.title")}</p>
          <p className="text-white text-xl mt-6">
            <strong>{t("features.secure-and-interface.1.title")}</strong>
            <br />
            • {t("features.secure-and-interface.1.description-1")}
            <br />
            • {t("features.secure-and-interface.1.description-2")}
            <br />
            <br />
            <strong>{t("features.secure-and-interface.2.title")}</strong>
            <br />
            • {t("features.secure-and-interface.2.description-1")}
            <br />
            • {t("features.secure-and-interface.2.description-2")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Integrated;